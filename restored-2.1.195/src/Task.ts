// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bH
// matched 2.1.88 source: src/Task.ts
// class=modified  jaccard=0.2685  score=0.6705  fileCov=0.3094
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bH] deps: ft, je, At, ys, vn, Yf
((tNe = require("fs")),
  (Wse = require("fs/promises")),
  (C5o = require("path")),
  (Zsc = tNe.constants.O_NOFOLLOW ?? 0));
Qsc = new Set();
vlr = new Map();
function isTerminalTaskStatus(e) {
  return e === "completed" || e === "failed" || e === "killed";
}
function Hze(e) {
  for (let t of Object.values(e))
    if (
      Cem.has(t.type) &&
      !isTerminalTaskStatus(t.status) &&
      !(t.type === "in_process_teammate" && t.isIdle) &&
      !(t.type === "remote_agent" && t.isLongRunning)
    )
      return true;
  return false;
}
function JQn(e) {
  for (let t of Object.values(e))
    if (t.type === "local_bash" && !isTerminalTaskStatus(t.status)) return true;
  return false;
}
function xem(e) {
  return Iem[e] ?? "x";
}
function iN(e) {
  let t = xem(e),
    n = nic.randomBytes(8),
    r = t;
  for (let o = 0; o < 8; o++) r += TASK_ID_ALPHABET[n[o] % TASK_ID_ALPHABET.length];
  return r;
}
function LT(e, t, n, r) {
  return {
    id: e,
    type: t,
    status: "pending",
    description: n,
    toolUseId: r,
    startTime: Date.now(),
    outputFile: jm(e),
    outputOffset: 0,
    notified: false,
  };
}
var nic,
  Cem,
  Iem,
  TASK_ID_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
