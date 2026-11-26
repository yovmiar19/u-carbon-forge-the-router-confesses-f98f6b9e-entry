import { mkdirSync, writeFileSync } from "node:fs";

// The router's confession: petty revenge on every reboot.
// (Opus 5.5 Thinking pick, 132 chars, gate 1-200.)
const LINE =
  "When you unplug me and count to ten, I count to eleven out of spite, then reboot with the swagger of a man who just won an argument.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
