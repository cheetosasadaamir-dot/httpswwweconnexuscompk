import type { ReactNode } from 'react';
import { DIAGRAM_COLORS as C } from './diagramStyle';

interface Box {
  W: number;
  H: number;
  m: { t: number; r: number; b: number; l: number };
  cw: number;
  ch: number;
  x: (v: number) => number;
  y: (v: number) => number;
}

interface AxesProps {
  p: Box;
  /** Unique id prefix so multiple diagrams on one page never share marker ids. */
  id: string;
  labelX?: string;
  labelY?: string;
  /** Extra caption drawn at the origin, defaults to "0". */
  origin?: string;
  children?: ReactNode;
}

/**
 * Shared axis furniture for every Econ Nexus diagram: arrowed axes,
 * rotated vertical label and horizontal label. Keeps every plot visually
 * identical so students read them the same way every time.
 */
export const Axes = ({ p, id, labelX = 'Quantity (Q)', labelY = 'Price, Costs, Revenue', origin = '0' }: AxesProps) => {
  const bottom = p.m.t + p.ch;
  return (
    <>
      <defs>
        <marker id={`${id}-arrow`} markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
          <polygon points="0 0, 9 3.5, 0 7" fill={C.axis} />
        </marker>
      </defs>
      <line
        x1={p.m.l} y1={bottom} x2={p.m.l} y2={p.m.t - 8}
        stroke={C.axis} strokeWidth={1.6} markerEnd={`url(#${id}-arrow)`}
      />
      <line
        x1={p.m.l} y1={bottom} x2={p.m.l + p.cw + 8} y2={bottom}
        stroke={C.axis} strokeWidth={1.6} markerEnd={`url(#${id}-arrow)`}
      />
      <text
        x={16}
        y={p.m.t + p.ch / 2}
        fill={C.axis}
        fontSize={11}
        textAnchor="middle"
        transform={`rotate(-90, 16, ${p.m.t + p.ch / 2})`}
      >
        {labelY}
      </text>
      <text x={p.m.l + p.cw / 2} y={p.H - 12} fill={C.axis} fontSize={11} textAnchor="middle">
        {labelX}
      </text>
      <text x={p.m.l - 12} y={bottom + 15} fill={C.muted} fontSize={11} textAnchor="middle">
        {origin}
      </text>
    </>
  );
};

/** Dashed guide lines from a point to both axes, with optional axis captions. */
export const Guides = ({
  p,
  qx,
  py,
  color = C.marker,
  xLabel,
  yLabel,
}: {
  p: Box;
  qx: number;
  py: number;
  color?: string;
  xLabel?: string;
  yLabel?: string;
}) => (
  <g>
    <line x1={p.m.l} y1={p.y(py)} x2={p.x(qx)} y2={p.y(py)} stroke={color} strokeDasharray="4 3" strokeWidth={1.1} opacity={0.85} />
    <line x1={p.x(qx)} y1={p.y(py)} x2={p.x(qx)} y2={p.m.t + p.ch} stroke={color} strokeDasharray="4 3" strokeWidth={1.1} opacity={0.85} />
    {yLabel && (
      <text x={p.m.l - 8} y={p.y(py) + 4} fill={color} fontSize={11} textAnchor="end">
        {yLabel}
      </text>
    )}
    {xLabel && (
      <text x={p.x(qx)} y={p.m.t + p.ch + 15} fill={color} fontSize={11} textAnchor="middle">
        {xLabel}
      </text>
    )}
  </g>
);

/** Builds an SVG path from a numeric function sampled across a value range. */
export const curve = (
  p: Box,
  f: (v: number) => number,
  from: number,
  to: number,
  steps = 80,
) => {
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const v = from + ((to - from) * i) / steps;
    d += `${i === 0 ? 'M' : 'L'} ${p.x(v).toFixed(2)} ${p.y(f(v)).toFixed(2)} `;
  }
  return d.trim();
};
