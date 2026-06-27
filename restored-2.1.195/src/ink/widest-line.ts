// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uWi
// matched 2.1.88 source: src/ink/widest-line.ts
// class=modified  jaccard=0.3183  score=1  fileCov=0.3183
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uWi] deps: lWi
DGd =
  /[\u0590-\u05FF\uFB1D-\uFB4F\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u0780-\u07BF\u0700-\u074F]/u;
function WBt(e) {
  let t = 0,
    n = 0;
  while (n <= e.length) {
    let r = e.indexOf(
        `
`,
        n,
      ),
      o = r === -1 ? e.substring(n) : e.substring(n, r);
    if (((t = Math.max(t, Uit(o))), r === -1)) break;
    n = r + 1;
  }
  return t;
}
