// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cir
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0064  score=0.5434  fileCov=0.0064
// note: nearest: src/utils/sessionStorage.ts (0.0064); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Cir] deps: db, fn, YS, Rd, Jt
yZl = require("path");
async function A3o(e) {
  let t = e ?? Dq(),
    n;
  try {
    let o = await Iir.stat(t);
    if (!o.isFile() || o.size > 1048576) throw Error(`${t} is not a regular file (or exceeds 1MiB); refusing read-modify-write`);
    n = await Iir.readFile(t, "utf8");
  } catch (o) {
    if (!wn(o)) throw o;
  }
  if (n === void 0 || n.trim() === "") return {};
  let r;
  try {
    r = JSON.parse(TG(n));
  } catch {
    throw Error(`daemon.json is malformed: ${t}`);
  }
  if (r && typeof r === "object" && !Array.isArray(r)) return r;
  return {};
}
async function dHt(e, t) {
  let n = t ?? Dq(),
    r = await A3o(n);
  if ((await e(r)) === false) return;
  await qs().mkdir(EZl.dirname(n)), await eg(n, De(r, null, 2) + `
`);
}
function H3o(e) {
  if (Array.isArray(e)) return e.filter(t => !!t && typeof t.dir === "string");
  if (e && typeof e.dir === "string") return [e];
  return [];
}
var Iir, EZl;