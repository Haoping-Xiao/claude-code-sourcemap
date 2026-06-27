// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jGo
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0035  score=0.1118  fileCov=0.0036
// note: nearest: src/utils/sessionStorage.ts (0.0035); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jGo] deps: @mixmark-io/domino/lib/Document.js, lH, ink/parse-keypress.ts, ink/parse-keypress.ts, ink/supports-hyperlinks.ts, ink/terminal.ts, ink/clearTerminal.ts, ink/terminal.ts, utils/env.ts, utils/debug.ts, main.tsx, utils/errors.ts, constants/files.ts, components/design-system/color.ts, utils/platform.ts, tools/SkillTool/prompt.ts, utils/fsOperations.ts, utils/signal.ts, undici/lib/web/fileapi/util.js, ink/ink.tsx, utils/git.ts, undici/lib/core/symbols.js
Qnc = require("crypto"), Znc = require("net"), sJf = Buffer.from([127]), dar = Buffer.from("\x1B[98;5u", "latin1"), par = Buffer.from("\x1B[27;5;98~", "latin1"), nrc = Buffer.from("\x1B[122;5u", "latin1"), rrc = Buffer.from("\x1B[27;5;122~", "latin1"), iJf = Buffer.from("\x1B[27u", "latin1"), aJf = Buffer.from("\x1B[27;1u", "latin1"), cJf = Buffer.from("\x1B[99;5u", "latin1"), uJf = Buffer.from("\x1B[27;5;99~", "latin1"), Xnc = Buffer.from(uz, "ascii"), hQt = Buffer.from("\x1B[?9001", "ascii");
gZ = Buffer.alloc(0);
function mar() {
  if (Vt() === "macos") return 0;
  return at("tengu_bg_low_mem_mb", 1024) * 1024 * 1024;
}
function _Qt() {
  let e = mar();
  return e > 0 && irc.freemem() < e;
}
function arc() {
  return at("tengu_bg_retire_grace_bridged_min", 480) * 60000;
}
function gar() {
  return at("tengu_bg_attach_upgrade", true);
}
var irc;