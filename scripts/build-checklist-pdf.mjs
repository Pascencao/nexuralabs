// Genera public/downloads/checklist-ia-{es,en}.pdf a partir de content/checklist.json.
// Uso: npm run build:checklist (volver a correrlo si cambia el contenido).
import PDFDocument from "pdfkit";
import { createWriteStream, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const content = JSON.parse(readFileSync(path.join(root, "content/checklist.json"), "utf8"));
const outDir = path.join(root, "public/downloads");
mkdirSync(outDir, { recursive: true });

const COLORS = { inkDark: "#0F1B2D", ink: "#16233A", muted: "#5B6472", gold: "#AD8A52" };
const MARGIN = 56;
const HEADER_HEIGHT = 72;
const BOX = 10;

function build(locale) {
  const c = content[locale];
  const file = path.join(outDir, `checklist-ia-${locale}.pdf`);
  const doc = new PDFDocument({
    size: "A4",
    margin: MARGIN,
    info: { Title: c.title, Author: "Nexura Labs" },
  });
  const done = new Promise((resolve, reject) => {
    const stream = createWriteStream(file);
    stream.on("finish", resolve);
    stream.on("error", reject);
    doc.pipe(stream);
  });
  const width = doc.page.width - MARGIN * 2;

  // Franja de marca.
  doc.rect(0, 0, doc.page.width, HEADER_HEIGHT).fill(COLORS.inkDark);
  doc
    .font("Helvetica-Bold")
    .fontSize(16)
    .fillColor("#FFFFFF")
    .text("NEXURA", MARGIN, 28, { continued: true })
    .fillColor(COLORS.gold)
    .text("LABS");

  // Título e intro.
  doc.font("Helvetica-Bold").fontSize(22).fillColor(COLORS.ink).text(c.title, MARGIN, HEADER_HEIGHT + 40, { width });
  doc.moveDown(0.6);
  doc.font("Helvetica").fontSize(11).fillColor(COLORS.muted).text(c.intro, { width, lineGap: 2 });

  // Grupos y preguntas con casilla.
  for (const group of c.groups) {
    doc.moveDown(1.2);
    const y = doc.y;
    doc.rect(MARGIN, y + 5, 18, 2).fill(COLORS.gold);
    doc.font("Helvetica-Bold").fontSize(12).fillColor(COLORS.ink).text(group.name.toUpperCase(), MARGIN + 26, y, {
      width: width - 26,
      characterSpacing: 0.6,
    });
    doc.moveDown(0.5);
    for (const question of group.questions) {
      const qy = doc.y;
      doc.lineWidth(1).strokeColor(COLORS.ink).rect(MARGIN, qy + 1.5, BOX, BOX).stroke();
      doc.font("Helvetica").fontSize(11).fillColor(COLORS.ink).text(question, MARGIN + 22, qy, {
        width: width - 22,
        lineGap: 2,
      });
      doc.moveDown(0.45);
    }
  }

  // Cierre.
  doc.moveDown(1);
  const ly = doc.y;
  doc.moveTo(MARGIN, ly).lineTo(MARGIN + width, ly).lineWidth(0.5).strokeColor(COLORS.muted).stroke();
  doc.moveDown(0.8);
  doc.font("Helvetica-Bold").fontSize(11).fillColor(COLORS.ink).text(c.closing, MARGIN, doc.y, { width, lineGap: 2 });

  doc.end();
  return done.then(() => file);
}

for (const locale of ["es", "en"]) {
  console.log("wrote", path.relative(root, await build(locale)));
}
