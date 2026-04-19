// Lightweight client-side PDF text extractor using pdfjs-dist.
// Runs in the browser — no server roundtrip — so users get instant feedback.

import * as pdfjsLib from 'pdfjs-dist';
// Vite-friendly worker import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export interface PdfParseResult {
  text: string;
  pageCount: number;
}

/**
 * Extract text from a PDF File. Reports progress via callback (0–1).
 * Caps at 30 pages to keep things snappy.
 */
export async function parsePdfFile(
  file: File,
  onProgress?: (pct: number) => void,
  maxPages = 30
): Promise<PdfParseResult> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  const totalPages = Math.min(pdf.numPages, maxPages);
  const chunks: string[] = [];

  for (let i = 1; i <= totalPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((item: any) => (typeof item.str === 'string' ? item.str : ''))
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (pageText) chunks.push(pageText);
    onProgress?.(i / totalPages);
  }

  return {
    text: chunks.join('\n\n'),
    pageCount: pdf.numPages,
  };
}
