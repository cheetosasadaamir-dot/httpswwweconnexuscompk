import { describe, expect, it } from 'vitest';
import { externalityModel, minimumATCQuantity, shortRunCosts } from '@/components/diagrams/economicModels';
import { curve } from '@/components/diagrams/DiagramAxes';
import { plotBox } from '@/components/diagrams/diagramStyle';

describe('externality equilibria and welfare', () => {
  for (const type of ['negative-production', 'negative-consumption', 'positive-production', 'positive-consumption'] as const) {
    it(`${type} solves the social optimum and correct over/underproduction`, () => {
      const m = externalityModel(type);
      expect(m.mpc(m.qMarket)).toBeCloseTo(m.mpb(m.qMarket), 10);
      expect(m.msc(m.qOptimal)).toBeCloseTo(m.msb(m.qOptimal), 10);
      expect(m.qOptimal).toBeCloseTo(type.startsWith('negative') ? 100 / 3 : 200 / 3, 10);
      expect(Math.abs(m.msb(m.qMarket) - m.msc(m.qMarket))).toBe(20);
    });
  }
});

describe('cost identities', () => {
  it('MC crosses AVC at its minimum Q = 5', () => {
    expect(shortRunCosts.mc(5)).toBeCloseTo(26, 10);
    expect(shortRunCosts.avc(5)).toBe(26);
    expect(shortRunCosts.avc(4.9)).toBeGreaterThan(26);
    expect(shortRunCosts.avc(5.1)).toBeGreaterThan(26);
  });
  it('MC crosses ATC at its calculated minimum', () => {
    const q = minimumATCQuantity();
    expect(q).toBeCloseTo(6.801432434, 8);
    expect(shortRunCosts.atc(q)).toBeCloseTo(42.64988047, 8);
    expect(shortRunCosts.mc(q)).toBeCloseTo(shortRunCosts.atc(q), 10);
    expect(shortRunCosts.atc(q - 0.1)).toBeGreaterThan(shortRunCosts.atc(q));
    expect(shortRunCosts.atc(q + 0.1)).toBeGreaterThan(shortRunCosts.atc(q));
  });
});

it('clips a curve at the axes without inventing a flat segment', () => {
  const p = plotBox();
  const path = curve(p, q => 120 - 2 * q, 0, 100);
  const numbers = path.match(/-?\d+(?:\.\d+)?/g)?.map(Number) ?? [];
  expect(numbers.length).toBeGreaterThan(4);
  expect(numbers[1]).toBeCloseTo(p.y(100), 2);
  expect(numbers[numbers.length - 1]).toBeCloseTo(p.y(0), 2);
  for (let i = 0; i < numbers.length; i += 2) {
    expect(numbers[i]).toBeGreaterThanOrEqual(p.x(0));
    expect(numbers[i]).toBeLessThanOrEqual(p.x(100));
    expect(numbers[i + 1]).toBeGreaterThanOrEqual(p.y(100));
    expect(numbers[i + 1]).toBeLessThanOrEqual(p.y(0));
  }
});