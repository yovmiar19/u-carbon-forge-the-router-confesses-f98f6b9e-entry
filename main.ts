import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The router's excuse for dropping the connection at the movie climax
// (Muse #1 pick, 120 chars, gate 1-200).
const LINE =
  "I dropped the connection at the climax because even I couldn't handle the plot twist — and I route packets for a living.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
  }
  if (LINE.includes("\n")) {
    throw new Error("line must be a single line");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
}

main();
