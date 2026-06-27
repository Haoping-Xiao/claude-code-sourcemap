// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KWi
// matched 2.1.88 source: src/ink/terminal.ts
// class=new  jaccard=0.0302  score=0.4248  fileCov=0.0315
// note: nearest: src/ink/terminal.ts (0.0302); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module KWi] deps: je, kLn, HI
VWi = require("stream"), RJr = _Wd;
function p0e() {
  if (Pce !== void 0) return Pce;
  if (!process.stdout.isTTY) return Pce = false;
  if (ane()) return Pce = false;
  if (!$7r()) return Pce = false;
  if (Ns()) return Pce = false;
  if (UD()) return Pce = false;
  if (ut(process.env.CLAUDE_CODE_DECSTBM)) return Pce = true;
  return Pce = at("tengu_marlin_porch", false), Pce;
}
var Pce;