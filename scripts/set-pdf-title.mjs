/**
 * PDF 메타데이터(탭 제목)를 "문서명 | 이하민" 형식으로 통일합니다.
 * 실행: npm run pdf:title
 */
import { PDFDocument } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RESUME_DIR = join(__dirname, "..", "public", "resume");

const PDFS = [
  ["resume.pdf", "이력서 | 이하민"],
  ["self-introduction.pdf", "자기소개서 | 이하민"],
];

for (const [filename, title] of PDFS) {
  const path = join(RESUME_DIR, filename);
  try {
    const bytes = await readFile(path);
    const pdfDoc = await PDFDocument.load(bytes, { updateMetadata: true });
    pdfDoc.setTitle(title);
    pdfDoc.setAuthor("이하민");
    const saved = await pdfDoc.save();
    await writeFile(path, saved);
    console.log("수정 완료:", filename, "→ 제목 '" + title + "'");
  } catch (e) {
    if (e.code === "ENOENT") console.log("건너뜀 (없음):", filename);
    else throw e;
  }
}
