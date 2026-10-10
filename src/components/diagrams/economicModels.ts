export type ExternalityType = 'negative-production' | 'negative-consumption' | 'positive-production' | 'positive-consumption';

/** Private and social marginal curves; external effects are 20 units per unit. */
export const externalityModel = (type: ExternalityType) => {
  const mpc = (q: number) => 25 + 0.6 * q;
  const mpb = (q: number) => 85 - 0.6 * q;
  const costShift = type === 'negative-production' ? 20 : type === 'positive-production' ? -20 : 0;
  const benefitShift = type === 'negative-consumption' ? -20 : type === 'positive-consumption' ? 20 : 0;
  const msc = (q: number) => mpc(q) + costShift;
  const msb = (q: number) => mpb(q) + benefitShift;
  const qMarket = 50;
  const qOptimal = (60 + benefitShift - costShift) / 1.2;
  return { mpc, mpb, msc, msb, qMarket, qOptimal, pMarket: mpc(qMarket), pOptimal: msc(qOptimal) };
};

export const shortRunCosts = {
  fixed: 100,
  avc: (q: number) => 0.6 * q * q - 6 * q + 41,
  mc: (q: number) => 1.8 * q * q - 12 * q + 41,
  atc: (q: number) => 100 / q + 0.6 * q * q - 6 * q + 41,
};

/** Solve MC = ATC, equivalently d(ATC)/dQ = 0, without a rounded marker. */
export const minimumATCQuantity = () => {
  let low = 5;
  let high = 10;
  for (let i = 0; i < 60; i++) {
    const mid = (low + high) / 2;
    if (shortRunCosts.mc(mid) > shortRunCosts.atc(mid)) high = mid;
    else low = mid;
  }
  return (low + high) / 2;
};

/** Expected-inflation SRPC: at the natural rate actual = expected inflation. */
export const phillipsInflation = (unemployment: number, expected: number, shock = 0) =>
  expected + 3 * (Math.exp(0.5 * (5 - unemployment)) - 1) / (Math.exp(1) - 1) + shock;