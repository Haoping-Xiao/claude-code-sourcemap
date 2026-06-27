// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PB
// matched 2.1.88 source: src/utils/platform.ts
// class=modified (alt of src/utils/platform.ts)  jaccard=0.1246  score=0.6207  fileCov=0.1348
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var PB = E(() => {
  je();
  ys();
});
function Mpn(e) {
  switch (e) {
    case "darwin":
      return "macOS";
    case "win32":
      return "Windows";
    case "linux":
      return "Linux";
    default:
      return e;
  }
}
async function MEs(e) {
  let t = new Set();
  if (process.env.P4PORT) t.add("perforce");
  try {
    let n = e ?? qt().cwd(),
      r = new Set(await Ppn.readdir(n));
    for (let [o, s] of iPu) if (r.has(o)) t.add(s);
  } catch {}
  return [...t];
}
var Ppn, zkr, Kkr, Vt, OFe, DEs, iPu, PEs;
