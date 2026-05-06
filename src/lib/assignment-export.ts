import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, HeadingLevel, TextRun, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

const stripMd = (md: string) =>
  md
    .replace(/```[\s\S]*?```/g, (m) => m.replace(/```\w*\n?/g, '').replace(/```/g, ''))
    .replace(/\$\$([\s\S]*?)\$\$/g, '$1')
    .replace(/\$([^$]+)\$/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1');

export function exportAsPdf(markdown: string, filename: string) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 48;
  const maxW = pageW - margin * 2;
  let y = margin;

  const ensure = (h: number) => {
    if (y + h > pageH - margin) { doc.addPage(); y = margin; }
  };

  const lines = stripMd(markdown).split('\n');

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '');
    if (!line.trim()) { y += 8; continue; }

    let text = line;
    let size = 11;
    let bold = false;

    if (line.startsWith('### ')) { text = line.slice(4); size = 13; bold = true; }
    else if (line.startsWith('## ')) { text = line.slice(3); size = 15; bold = true; }
    else if (line.startsWith('# ')) { text = line.slice(2); size = 18; bold = true; }
    else if (/^[-*]\s+/.test(line)) { text = '•  ' + line.replace(/^[-*]\s+/, ''); }
    else if (/^\d+\.\s+/.test(line)) { /* keep */ }

    text = text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1');

    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    const wrapped = doc.splitTextToSize(text, maxW);
    for (const w of wrapped) {
      ensure(size + 4);
      doc.text(w, margin, y);
      y += size + 4;
    }
  }

  doc.save(`${filename}.pdf`);
}

export async function exportAsDocx(markdown: string, filename: string) {
  const lines = stripMd(markdown).split('\n');
  const children: Paragraph[] = [];

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '');
    if (!line.trim()) { children.push(new Paragraph({ children: [new TextRun('')] })); continue; }

    if (line.startsWith('# ')) {
      children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: line.slice(2), bold: true })] }));
    } else if (line.startsWith('## ')) {
      children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: line.slice(3), bold: true })] }));
    } else if (line.startsWith('### ')) {
      children.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: line.slice(4), bold: true })] }));
    } else if (/^[-*]\s+/.test(line)) {
      children.push(new Paragraph({ bullet: { level: 0 }, children: [new TextRun(line.replace(/^[-*]\s+/, '').replace(/\*\*(.+?)\*\*/g, '$1'))] }));
    } else {
      // inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const runs = parts.filter(Boolean).map((p) =>
        p.startsWith('**') && p.endsWith('**')
          ? new TextRun({ text: p.slice(2, -2), bold: true })
          : new TextRun(p),
      );
      children.push(new Paragraph({ children: runs, alignment: AlignmentType.LEFT }));
    }
  }

  const doc = new Document({ sections: [{ children }] });
  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${filename}.docx`);
}
