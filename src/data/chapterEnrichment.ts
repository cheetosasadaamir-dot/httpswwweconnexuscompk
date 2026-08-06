// Additive chapter enrichment: deeper explanations, real-world cases,
// misconceptions, evaluation lines and precise diagram specifications.
// Written in-house; sources consulted for understanding only.

import { MACRO_ENRICHMENT_DATA } from './enrichment/macro';
import { MICRO_ENRICHMENT_DATA } from './enrichment/micro';

export interface ChapterEnrichmentEntry {
  id: string;
  title: string;
  deepDive: string[];
  examples: { title: string; body: string }[];
  misconceptions: { claim: string; correction: string }[];
  evaluation: string[];
  diagramSpec: {
    title: string;
    axes: string;
    curves: string;
    shifts: string;
    equilibria: string;
  };
}

export const MICRO_ENRICHMENT: ChapterEnrichmentEntry[] = MICRO_ENRICHMENT_DATA;

export const MACRO_ENRICHMENT: ChapterEnrichmentEntry[] = MACRO_ENRICHMENT_DATA;

export const CHAPTER_ENRICHMENT: ChapterEnrichmentEntry[] = [
  ...MICRO_ENRICHMENT,
  ...MACRO_ENRICHMENT,
];

export const getEnrichment = (id: string): ChapterEnrichmentEntry | undefined =>
  CHAPTER_ENRICHMENT.find(e => e.id === id);
