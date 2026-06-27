// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vMe
// matched 2.1.88 source: src/ink/measure-text.ts
// class=modified (alt of src/ink/measure-text.ts)  jaccard=0.2878  score=1  fileCov=0.2878
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vMe] deps: Mce
((Stl = R(lt(), 1)), (Etl = require("url")), (Atl = R(se(), 1)));
function Eef(e, t, n = 1 / 0) {
  let r = t <= 0 || !Number.isFinite(t),
    o = 0,
    s = 0;
  while (s <= e.length) {
    let i = e.indexOf(
        `
`,
        s,
      ),
      a = i === -1 ? e.substring(s) : e.substring(s, i);
    if (r) o++;
    else {
      let l = Uit(a);
      o += l === 0 ? 1 : Math.ceil(l / t);
    }
    if (o > n) return o;
    if (i === -1) break;
    s = i + 1;
  }
  return o;
}
function Htl(e, t, n) {
  return Eef(e, t, n) > n;
}
