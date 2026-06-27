// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CZl
// matched 2.1.88 source: node_modules/commander/lib/command.js
// class=new  jaccard=0.0069  score=0.1861  fileCov=0.0071
// note: nearest: node_modules/commander/lib/command.js (0.0069); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function SKf() {
  for (let e of Rir) if (!e.killed) e.kill("SIGTERM");
}
function EKf(e) {
  if (Rir.add(e), !IZl) IZl = true, process.on("exit", SKf);
}
function AKf(e) {
  return ![".js", ".mjs", ".tsx", ".ts", ".jsx"].some(n => e.endsWith(n));
}
function HKf(e, t) {
  if (kZl.existsSync(e)) return t ? `Claude Code native binary at ${e} exists but failed to launch. This usually means the binary does not match this system's libc \u2014 e.g. spawning a musl-linked binary on a glibc Linux host fails because the musl dynamic loader (/lib/ld-musl-*) is missing. Specify a matching binary with options.pathToClaudeCodeExecutable.` : `Claude Code executable at ${e} exists but failed to launch.`;
  return t ? `Claude Code native binary not found at ${e}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.` : `Claude Code executable not found at ${e}. Is options.pathToClaudeCodeExecutable set?`;
}
var xZl,
  kZl,
  RZl,
  bKf = 2000,
  Rir,
  IZl = false,
  k3o;