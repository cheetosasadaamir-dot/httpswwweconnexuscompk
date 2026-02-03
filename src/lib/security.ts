/**
 * EconNexus Security Infrastructure
 * Multi-layered security utilities for input sanitization,
 * rate limiting, and content protection.
 */

import { z } from 'zod';

// ============================================================================
// INPUT SANITIZATION
// ============================================================================

/**
 * Sanitize user input to prevent XSS and injection attacks
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Escape special HTML characters
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    // Remove potential script injections
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    // Limit length
    .slice(0, 2000)
    .trim();
}

/**
 * Validate and sanitize search queries
 */
export const searchQuerySchema = z.object({
  query: z.string()
    .trim()
    .min(1, 'Search query cannot be empty')
    .max(200, 'Search query too long')
    .transform(sanitizeInput)
});

/**
 * Validate chat messages
 */
export const chatMessageSchema = z.object({
  content: z.string()
    .trim()
    .min(1, 'Message cannot be empty')
    .max(2000, 'Message too long (max 2000 characters)')
    .transform(sanitizeInput)
});

/**
 * Validate contact form input
 */
export const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name too long')
    .transform(sanitizeInput),
  email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email too long'),
  message: z.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message too long')
    .transform(sanitizeInput)
});

// ============================================================================
// RATE LIMITING (Client-Side)
// ============================================================================

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

interface RateLimitState {
  requests: number[];
}

const rateLimitStates = new Map<string, RateLimitState>();

/**
 * Client-side rate limiter to prevent API abuse
 * Note: This is a defense-in-depth measure; server-side rate limiting is also essential
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = { maxRequests: 10, windowMs: 60000 }
): { allowed: boolean; retryAfter?: number; remaining: number } {
  const now = Date.now();
  const state = rateLimitStates.get(identifier) || { requests: [] };
  
  // Remove expired requests
  state.requests = state.requests.filter(timestamp => now - timestamp < config.windowMs);
  
  if (state.requests.length >= config.maxRequests) {
    const oldestRequest = state.requests[0];
    const retryAfter = Math.ceil((oldestRequest + config.windowMs - now) / 1000);
    
    return {
      allowed: false,
      retryAfter,
      remaining: 0
    };
  }
  
  // Add current request
  state.requests.push(now);
  rateLimitStates.set(identifier, state);
  
  return {
    allowed: true,
    remaining: config.maxRequests - state.requests.length
  };
}

/**
 * Rate limit configurations for different features
 */
export const RATE_LIMITS = {
  search: { maxRequests: 30, windowMs: 60000 },      // 30 searches per minute
  chat: { maxRequests: 10, windowMs: 60000 },        // 10 chat messages per minute
  chatBurst: { maxRequests: 3, windowMs: 5000 },     // 3 messages per 5 seconds (burst protection)
  contact: { maxRequests: 3, windowMs: 300000 }      // 3 contact submissions per 5 minutes
} as const;

// ============================================================================
// CONTENT PROTECTION
// ============================================================================

/**
 * Disable right-click and text selection for protected content
 */
export function enableContentProtection(element: HTMLElement | null): () => void {
  if (!element) return () => {};
  
  const preventContext = (e: MouseEvent) => {
    e.preventDefault();
    return false;
  };
  
  const preventSelect = (e: Event) => {
    e.preventDefault();
    return false;
  };
  
  const preventKeyShortcuts = (e: KeyboardEvent) => {
    // Prevent Ctrl+C, Ctrl+U, Ctrl+S, F12
    if (
      (e.ctrlKey && ['c', 'u', 's', 'p'].includes(e.key.toLowerCase())) ||
      e.key === 'F12'
    ) {
      e.preventDefault();
      return false;
    }
  };
  
  element.addEventListener('contextmenu', preventContext);
  element.addEventListener('selectstart', preventSelect);
  element.addEventListener('copy', preventSelect);
  document.addEventListener('keydown', preventKeyShortcuts);
  
  // Apply CSS protection
  element.style.userSelect = 'none';
  element.style.webkitUserSelect = 'none';
  
  // Return cleanup function
  return () => {
    element.removeEventListener('contextmenu', preventContext);
    element.removeEventListener('selectstart', preventSelect);
    element.removeEventListener('copy', preventSelect);
    document.removeEventListener('keydown', preventKeyShortcuts);
    element.style.userSelect = '';
    element.style.webkitUserSelect = '';
  };
}

// ============================================================================
// URL VALIDATION
// ============================================================================

const ALLOWED_DOMAINS = [
  'econnexus.com.pk',
  'www.econnexus.com.pk',
  'localhost',
  '127.0.0.1'
];

/**
 * Validate that a URL is from an allowed domain
 */
export function isAllowedOrigin(origin: string): boolean {
  try {
    const url = new URL(origin);
    return ALLOWED_DOMAINS.some(domain => 
      url.hostname === domain || url.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

/**
 * Sanitize external URLs before using in links
 */
export function sanitizeUrl(url: string): string {
  if (!url) return '#';
  
  // Only allow http, https, and mailto protocols
  const allowedProtocols = ['http:', 'https:', 'mailto:'];
  
  try {
    const parsed = new URL(url, window.location.origin);
    if (!allowedProtocols.includes(parsed.protocol)) {
      return '#';
    }
    return parsed.href;
  } catch {
    // If URL parsing fails, check if it's a relative URL
    if (url.startsWith('/') && !url.startsWith('//')) {
      return url;
    }
    return '#';
  }
}

// ============================================================================
// SECURITY HEADERS (CSP Report)
// ============================================================================

/**
 * Log potential security violations for monitoring
 */
export function logSecurityViolation(type: string, details: Record<string, unknown>): void {
  // In production, this would send to a security monitoring service
  console.warn(`[SECURITY] ${type}:`, details);
}

// ============================================================================
// HONEYPOT DETECTION
// ============================================================================

/**
 * Check if honeypot field is filled (indicates bot)
 */
export function isHoneypotFilled(value: string | undefined): boolean {
  return typeof value === 'string' && value.length > 0;
}
