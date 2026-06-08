import { jsPDF } from 'jspdf';
import {
  Document, Packer, Paragraph, HeadingLevel, TextRun, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  LevelFormat, PageOrientation, convertInchesToTwip,
} from 'docx';
import { saveAs } from 'file-saver';

/* ============================================================
   MARKDOWN + LATEX NORMALIZATION
   - Preserve structure (headings, lists, tables, math).
   - Convert common LaTeX to readable Unicode for PDF/DOCX
     (both jsPDF and docx don't render LaTeX natively).
   ============================================================ */

const GREEK: Record<string, string> = {
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', zeta: 'ζ',
  eta: 'η', theta: 'θ', iota: 'ι', kappa: 'κ', lambda: 'λ', mu: 'μ',
  nu: 'ν', xi: 'ξ', pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ', upsilon: 'υ',
  phi: 'φ', chi: 'χ', psi: 'ψ', omega: 'ω',
  Alpha: 'Α', Beta: 'Β', Gamma: 'Γ', Delta: 'Δ', Epsilon: 'Ε', Zeta: 'Ζ',
  Eta: 'Η', Theta: 'Θ', Iota: 'Ι', Kappa: 'Κ', Lambda: 'Λ', Mu: 'Μ',
  Nu: 'Ν', Xi: 'Ξ', Pi: 'Π', Rho: 'Ρ', Sigma: 'Σ', Tau: 'Τ', Upsilon: 'Υ',
  Phi: 'Φ', Chi: 'Χ', Psi: 'Ψ', Omega: 'Ω',
  infty: '∞', infinity: '∞',
};

const SUPERSCRIPT: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵',
  '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻',
  '=': '⁼', '(': '⁽', ')': '⁾', 'n': 'ⁿ', 'i': 'ⁱ',
};
const SUBSCRIPT: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅',
  '6': '₆', '7': '₇', '8': '₈', '9': '₉', '+': '₊', '-': '₋',
  '=': '₌', '(': '₍', ')': '₎',
};

const toSuper = (s: string) =>
  s.split('').map(c => SUPERSCRIPT[c] ?? c).join('');
const toSub = (s: string) =>
  s.split('').map(c => SUBSCRIPT[c] ?? c).join('');

/** Render LaTeX-like content to plain Unicode text. */
function renderMath(latex: string): string {
  let s = latex.trim();

  // \frac{a}{b} → (a)/(b)
  s = s.replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '($1)/($2)');
  // \sqrt{a} → √(a)
  s = s.replace(/\\sqrt\s*\{([^{}]+)\}/g, '√($1)');
  // \sum_{a}^{b} / \int_{a}^{b}
  s = s.replace(/\\sum/g, '∑').replace(/\\int/g, '∫').replace(/\\prod/g, '∏');
  // Greek + symbols
  s = s.replace(/\\([A-Za-z]+)/g, (_, n) => GREEK[n] ?? n);
  // Operators
  s = s.replace(/\\times/g, '×').replace(/\\cdot/g, '·')
       .replace(/\\div/g, '÷').replace(/\\pm/g, '±').replace(/\\mp/g, '∓')
       .replace(/\\leq/g, '≤').replace(/\\geq/g, '≥')
       .replace(/\\neq/g, '≠').replace(/\\approx/g, '≈')
       .replace(/\\to/g, '→').replace(/\\rightarrow/g, '→').replace(/\\Rightarrow/g, '⇒')
       .replace(/\\partial/g, '∂').replace(/\\nabla/g, '∇');
  // Superscripts/subscripts: x^{abc} / x_{abc} / x^2 / x_2
  s = s.replace(/\^\{([^{}]+)\}/g, (_, g) => toSuper(g));
  s = s.replace(/_\{([^{}]+)\}/g, (_, g) => toSub(g));
  s = s.replace(/\^([A-Za-z0-9+\-=()])/g, (_, g) => toSuper(g));
  s = s.replace(/_([A-Za-z0-9+\-=()])/g, (_, g) => toSub(g));
  // Strip remaining braces / text wrappers
  s = s.replace(/\\text\s*\{([^{}]*)\}/g, '$1');
  s = s.replace(/\\mathrm\s*\{([^{}]*)\}/g, '$1');
  s = s.replace(/\\left|\\right/g, '');
  s = s.replace(/[{}]/g, '');
  return s;
}

/** Apply math rendering to $...$ and $$...$$ in a markdown string. */
function normalizeMath(md: string): string {
  return md
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, expr) => `\n\n${renderMath(expr)}\n\n`)
    .replace(/\$([^$\n]+?)\$/g, (_, expr) => renderMath(expr));
}

/** Strip / normalize markdown that the renderers won't handle natively. */
function preClean(md: string): string {
  return md
    // Fenced code → keep contents
    .replace(/```[\w-]*\n([\s\S]*?)```/g, (_m, body) => body)
    // Images
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    // Links → text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    // Inline code
    .replace(/`([^`]+)`/g, '$1');
}

/** Inline run parser: bold, italic. Returns segments. */
type Seg = { text: string; bold?: boolean; italic?: boolean };
function parseInline(line: string): Seg[] {
  const out: Seg[] = [];
  const re = /(\*\*\*([^*]+)\*\*\*|\*\*([^*]+)\*\*|\*([^*]+)\*|__([^_]+)__|_([^_]+)_)/g;
  let last = 0; let m: RegExpExecArray | null;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push({ text: line.slice(last, m.index) });
    if (m[2] != null) out.push({ text: m[2], bold: true, italic: true });
    else if (m[3] != null) out.push({ text: m[3], bold: true });
    else if (m[4] != null) out.push({ text: m[4], italic: true });
    else if (m[5] != null) out.push({ text: m[5], bold: true });
    else if (m[6] != null) out.push({ text: m[6], italic: true });
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push({ text: line.slice(last) });
  return out.length ? out : [{ text: line }];
}

/** Detect a markdown table block starting at index i. Returns rows or null. */
function tryParseTable(lines: string[], i: number): { rows: string[][]; end: number } | null {
  const header = lines[i];
  const sep = lines[i + 1];
  if (!header || !sep) return null;
  if (!/^\s*\|.+\|\s*$/.test(header)) return null;
  if (!/^\s*\|?\s*:?-{2,}:?(\s*\|\s*:?-{2,}:?)+\s*\|?\s*$/.test(sep)) return null;
  const splitRow = (l: string) =>
    l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  const rows: string[][] = [splitRow(header)];
  let j = i + 2;
  while (j < lines.length && /^\s*\|.+\|\s*$/.test(lines[j])) {
    rows.push(splitRow(lines[j])); j++;
  }
  return { rows, end: j - 1 };
}

/* ============================================================
   PDF EXPORT (jsPDF)
   ============================================================ */
export function exportAsPdf(markdown: string, filename: string) {
  const md = normalizeMath(preClean(markdown));
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 56;
  const maxW = pageW - margin * 2;
  let y = margin;

  const ensure = (h: number) => {
    if (y + h > pageH - margin) { doc.addPage(); y = margin; }
  };
  const drawText = (text: string, size: number, bold: boolean, indent = 0) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    const wrapped = doc.splitTextToSize(text, maxW - indent);
    const lh = size * 1.35;
    for (const w of wrapped) { ensure(lh); doc.text(w, margin + indent, y); y += lh; }
  };

  const lines = md.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i].replace(/\s+$/, '');
    if (!raw.trim()) { y += 6; continue; }

    // Table
    const t = tryParseTable(lines, i);
    if (t) {
      const colW = maxW / t.rows[0].length;
      doc.setFontSize(10);
      for (let r = 0; r < t.rows.length; r++) {
        const row = t.rows[r];
        const rowH = 22;
        ensure(rowH);
        if (r === 0) { doc.setFillColor(230, 235, 245); doc.rect(margin, y - 14, maxW, rowH, 'F'); }
        doc.setFont('helvetica', r === 0 ? 'bold' : 'normal');
        row.forEach((cell, ci) => {
          const txt = doc.splitTextToSize(cell.replace(/\*\*/g, ''), colW - 8);
          doc.text(txt[0] ?? '', margin + ci * colW + 4, y);
        });
        doc.setDrawColor(200);
        doc.line(margin, y + 6, margin + maxW, y + 6);
        y += rowH;
      }
      y += 6; i = t.end; continue;
    }

    if (/^#{1,6}\s+/.test(raw)) {
      const h = raw.match(/^(#{1,6})\s+(.*)$/)!;
      const lvl = h[1].length;
      const size = lvl === 1 ? 20 : lvl === 2 ? 16 : lvl === 3 ? 13 : 12;
      y += lvl <= 2 ? 8 : 4;
      drawText(h[2].replace(/\*\*/g, ''), size, true);
      y += 4; continue;
    }
    if (/^>\s+/.test(raw)) { drawText('“' + raw.slice(2) + '”', 11, false, 18); continue; }
    if (/^[-*]\s+/.test(raw)) { drawText('•  ' + raw.replace(/^[-*]\s+/, '').replace(/\*\*(.+?)\*\*/g, '$1'), 11, false, 14); continue; }
    if (/^\d+\.\s+/.test(raw)) { drawText(raw.replace(/\*\*(.+?)\*\*/g, '$1'), 11, false, 14); continue; }
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(raw.trim())) {
      ensure(10); doc.setDrawColor(180); doc.line(margin, y, margin + maxW, y); y += 10; continue;
    }
    drawText(raw.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1'), 11, false);
  }

  doc.save(`${filename}.pdf`);
}

/* ============================================================
   DOCX EXPORT (docx-js)
   ============================================================ */
const ACCENT = '1E3A8A'; // deep navy for headings
const SUBTLE = '6B7280';

function inlineRuns(segs: Seg[], baseSize = 22): TextRun[] {
  return segs.map(s => new TextRun({
    text: s.text, bold: s.bold, italics: s.italic, size: baseSize, font: 'Calibri',
  }));
}

export async function exportAsDocx(markdown: string, filename: string) {
  const md = normalizeMath(preClean(markdown));
  const lines = md.split('\n');
  const children: (Paragraph | Table)[] = [];

  const push = (p: Paragraph | Table) => children.push(p);
  const blank = () => push(new Paragraph({ children: [new TextRun('')] }));

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i].replace(/\s+$/, '');
    if (!raw.trim()) { blank(); continue; }

    // Table
    const t = tryParseTable(lines, i);
    if (t) {
      const cols = t.rows[0].length;
      const totalW = convertInchesToTwip(6.3);
      const colW = Math.floor(totalW / cols);
      const border = { style: BorderStyle.SINGLE, size: 4, color: 'BFC7D2' };
      const borders = { top: border, bottom: border, left: border, right: border };
      const rows = t.rows.map((row, r) => new TableRow({
        children: row.map(cell => new TableCell({
          width: { size: colW, type: WidthType.DXA },
          borders,
          shading: r === 0 ? { fill: 'E6ECF5', type: ShadingType.CLEAR, color: 'auto' } : undefined,
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({
            children: inlineRuns(parseInline(cell), 20),
          })],
        })),
      }));
      push(new Table({
        width: { size: totalW, type: WidthType.DXA },
        columnWidths: Array(cols).fill(colW),
        rows,
      }));
      blank();
      i = t.end; continue;
    }

    // Headings
    const h = raw.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const lvl = h[1].length;
      const text = h[2].replace(/\*\*/g, '');
      const heading =
        lvl === 1 ? HeadingLevel.HEADING_1 :
        lvl === 2 ? HeadingLevel.HEADING_2 :
        lvl === 3 ? HeadingLevel.HEADING_3 :
        HeadingLevel.HEADING_4;
      const size = lvl === 1 ? 40 : lvl === 2 ? 32 : lvl === 3 ? 26 : 22;
      push(new Paragraph({
        heading,
        spacing: { before: lvl <= 2 ? 240 : 160, after: 120 },
        children: [new TextRun({ text, bold: true, size, color: ACCENT, font: 'Calibri' })],
      }));
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(raw.trim())) {
      push(new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'BFC7D2', space: 1 } },
        children: [new TextRun('')],
      }));
      continue;
    }

    // Blockquote
    if (/^>\s+/.test(raw)) {
      push(new Paragraph({
        indent: { left: convertInchesToTwip(0.4) },
        spacing: { before: 80, after: 80 },
        children: inlineRuns(
          parseInline(raw.replace(/^>\s+/, '')).map(s => ({ ...s, italic: true })),
          22,
        ).map(r => new TextRun({ ...(r as any).options ?? {}, color: SUBTLE })),
        border: { left: { style: BorderStyle.SINGLE, size: 12, color: ACCENT, space: 8 } },
      }));
      continue;
    }

    // Bullet
    if (/^[-*]\s+/.test(raw)) {
      push(new Paragraph({
        numbering: { reference: 'bullets', level: 0 },
        spacing: { after: 80 },
        children: inlineRuns(parseInline(raw.replace(/^[-*]\s+/, '')), 22),
      }));
      continue;
    }

    // Numbered
    const num = raw.match(/^(\d+)\.\s+(.*)$/);
    if (num) {
      push(new Paragraph({
        numbering: { reference: 'numbers', level: 0 },
        spacing: { after: 80 },
        children: inlineRuns(parseInline(num[2]), 22),
      }));
      continue;
    }

    // Paragraph
    push(new Paragraph({
      spacing: { after: 160, line: 320 },
      alignment: AlignmentType.JUSTIFIED,
      children: inlineRuns(parseInline(raw), 22),
    }));
  }

  const doc = new Document({
    creator: 'EconNexus Assignment Architect',
    title: filename,
    styles: {
      default: { document: { run: { font: 'Calibri', size: 22 } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 40, bold: true, color: ACCENT, font: 'Calibri' },
          paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 32, bold: true, color: ACCENT, font: 'Calibri' },
          paragraph: { spacing: { before: 220, after: 120 }, outlineLevel: 1 } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 26, bold: true, color: ACCENT, font: 'Calibri' },
          paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 2 } },
      ],
    },
    numbering: {
      config: [
        { reference: 'bullets', levels: [{
          level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }] },
        { reference: 'numbers', levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }] },
      ],
    },
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838, orientation: PageOrientation.PORTRAIT },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: children as any,
    }],
  });
  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${filename}.docx`);
}
