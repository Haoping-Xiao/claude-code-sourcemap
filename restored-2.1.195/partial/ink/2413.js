// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lWi
// matched 2.1.88 source: src/ink/bidi.ts
// class=partial  jaccard=0.1078  score=0.3993  fileCov=0.1287
// note: low-confidence suggestion: src/ink/bidi.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lWi]
aWi = IGd;
function needsBidi() {
  if (fJr === void 0) fJr = typeof process.env.WT_SESSION === "string" || process.env.TERM_PROGRAM === "vscode";
  return fJr;
}
function kGd() {
  if (!pJr) pJr = aWi();
  return pJr;
}
function cWi(e) {
  if (!needsBidi() || e.length === 0) return e;
  let t = e.map(l => l.value.replace(/[\u061C\u202A-\u202E\u2066-\u2069]/g, "\uFFFD")).join("");
  if (!PGd(t)) return e;
  let n = kGd(),
    {
      levels: r
    } = n.getEmbeddingLevels(t, "auto"),
    o = [],
    s = 0;
  for (let l = 0; l < e.length; l++) o.push(r[s]), s += e[l].value.length;
  let i = [...e],
    a = Math.max(...o);
  for (let l = a; l >= 1; l--) {
    let c = 0;
    while (c < i.length) if (o[c] >= l) {
      let u = c + 1;
      while (u < i.length && o[u] >= l) u++;
      RGd(i, c, u - 1), LGd(o, c, u - 1), c = u;
    } else c++;
  }
  return i;
}
function RGd(e, t, n) {
  while (t < n) {
    let r = e[t];
    e[t] = e[n], e[n] = r, t++, n--;
  }
}
function LGd(e, t, n) {
  while (t < n) {
    let r = e[t];
    e[t] = e[n], e[n] = r, t++, n--;
  }
}
function PGd(e) {
  return DGd.test(e);
}
var pJr, fJr, DGd;