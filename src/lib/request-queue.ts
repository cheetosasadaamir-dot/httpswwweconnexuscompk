/**
 * Request Queue for API Resilience
 * Manages concurrent requests with rate limiting and retry logic
 */

interface QueuedRequest<T> {
  id: string;
  execute: () => Promise<T>;
  resolve: (value: T) => void;
  reject: (error: Error) => void;
  retries: number;
  priority: number;
}

interface RequestQueueConfig {
  maxConcurrent: number;
  maxRetries: number;
  retryDelay: number;
  timeout: number;
}

const DEFAULT_CONFIG: RequestQueueConfig = {
  maxConcurrent: 3,
  maxRetries: 2,
  retryDelay: 1000,
  timeout: 30000,
};

class RequestQueue {
  private queue: QueuedRequest<unknown>[] = [];
  private activeRequests = 0;
  private config: RequestQueueConfig;

  constructor(config: Partial<RequestQueueConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  async add<T>(
    execute: () => Promise<T>,
    options: { priority?: number; id?: string } = {}
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const request: QueuedRequest<T> = {
        id: options.id || `req_${Date.now()}_${Math.random().toString(36).slice(2)}`,
        execute,
        resolve: resolve as (value: unknown) => void,
        reject,
        retries: 0,
        priority: options.priority || 0,
      };

      // Insert based on priority (higher priority first)
      const insertIndex = this.queue.findIndex(r => r.priority < request.priority);
      if (insertIndex === -1) {
        this.queue.push(request);
      } else {
        this.queue.splice(insertIndex, 0, request);
      }

      this.processQueue();
    });
  }

  private async processQueue(): Promise<void> {
    if (this.activeRequests >= this.config.maxConcurrent || this.queue.length === 0) {
      return;
    }

    const request = this.queue.shift();
    if (!request) return;

    this.activeRequests++;

    try {
      const result = await this.executeWithTimeout(request.execute);
      request.resolve(result);
    } catch (error) {
      if (request.retries < this.config.maxRetries) {
        request.retries++;
        console.log(`Retrying request ${request.id} (attempt ${request.retries + 1})`);
        
        // Re-queue with delay
        setTimeout(() => {
          this.queue.unshift(request);
          this.processQueue();
        }, this.config.retryDelay * request.retries);
      } else {
        request.reject(error instanceof Error ? error : new Error(String(error)));
      }
    } finally {
      this.activeRequests--;
      this.processQueue();
    }
  }

  private async executeWithTimeout<T>(fn: () => Promise<T>): Promise<T> {
    return Promise.race([
      fn(),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), this.config.timeout)
      ),
    ]);
  }

  get pendingCount(): number {
    return this.queue.length;
  }

  get activeCount(): number {
    return this.activeRequests;
  }

  clear(): void {
    this.queue.forEach(req => req.reject(new Error('Queue cleared')));
    this.queue = [];
  }
}

// Singleton instances for different endpoints
export const chatRequestQueue = new RequestQueue({
  maxConcurrent: 2,
  maxRetries: 2,
  retryDelay: 2000,
  timeout: 35000,
});

export const searchRequestQueue = new RequestQueue({
  maxConcurrent: 5,
  maxRetries: 1,
  retryDelay: 500,
  timeout: 10000,
});

export default RequestQueue;
