/**
 * Shared visual language for every Econ Nexus economics diagram.
 *
 * Matches the app shell exactly: Light Navy canvas, Illuminated Azure accents,
 * cyan demand curves, magenta supply curves, amber equilibrium markers.
 * Reference conventions cross-checked against tutor2u, Economics Online,
 * S-cool, Khan Academy Microeconomics and CIE examiner reports.
 */

export const DIAGRAM_COLORS = {
  demand: 'hsl(185, 100%, 55%)',
  demandAlt: 'hsl(185, 100%, 72%)',
  supply: 'hsl(300, 100%, 68%)',
  supplyAlt: 'hsl(300, 100%, 80%)',
  social: 'hsl(140, 75%, 55%)',
  intervention: 'hsl(0, 85%, 62%)',
  marker: 'hsl(45, 93%, 55%)',
  welfareGain: 'hsl(160, 70%, 50%)',
  welfareLoss: 'hsl(0, 85%, 62%)',
  consumerSurplus: 'hsl(185, 90%, 55%)',
  producerSurplus: 'hsl(300, 85%, 68%)',
  revenue: 'hsl(45, 93%, 55%)',
  axis: 'hsl(220, 14%, 78%)',
  muted: 'hsl(220, 14%, 60%)',
  grid: 'hsl(220, 30%, 32%)',
} as const;

export const DIAGRAM_FONT = {
  label: "'Inter', system-ui, sans-serif",
  math: "Georgia, 'Times New Roman', serif",
} as const;

/** Standard plot geometry used by every rebuilt diagram. */
export const PLOT = {
  W: 540,
  H: 400,
  m: { t: 34, r: 54, b: 62, l: 66 },
} as const;

export const plotBox = (
  W: number = PLOT.W,
  H: number = PLOT.H,
  m: { t: number; r: number; b: number; l: number } = PLOT.m,
) => {
  const cw = W - m.l - m.r;
  const ch = H - m.t - m.b;
  return {
    W,
    H,
    m,
    cw,
    ch,
    /** value 0-100 -> svg x */
    x: (v: number) => m.l + (v / 100) * cw,
    /** value 0-100 -> svg y */
    y: (v: number) => m.t + ch - (v / 100) * ch,
    x0: m.l,
    y0: m.t + ch,
  };
};

/** Intersection of two straight lines given in P = a + bQ form. */
export const lineIntersect = (
  a1: number, b1: number,
  a2: number, b2: number,
) => {
  const q = (a2 - a1) / (b1 - b2);
  return { q, p: a1 + b1 * q };
};

/** Staged reveal timings — deliberately slow so students can follow each step. */
export const stage = (index: number, gap = 0.55, base = 0.15) => base + index * gap;

export const revealPath = (index: number, duration = 0.9) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { delay: stage(index), duration, ease: 'easeInOut' as const },
});

export const revealFade = (index: number, duration = 0.45) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: stage(index), duration },
});

export const revealPoint = (index: number) => ({
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { delay: stage(index), duration: 0.35, ease: 'backOut' as const },
});
