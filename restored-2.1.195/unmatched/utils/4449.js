// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LDo
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var LDo = E(() => {
  es();
});
async function nwl(e) {
  if (!lu()) return null;
  if (!(HKt.resolve(e) === HKt.resolve(T_e()) || HKt.basename(e) === uH && N3e(e))) return null;
  let n;
  try {
    n = await twl.readFile(e, "utf8");
  } catch {
    return null;
  }
  let r = n.trim();
  return LJn({
    label: "memory index",
    displayPath: uH,
    sizeBytes: r.length,
    byteCap: bce,
    lineCount: hu(r, `
`) + 1,
    lineCap: D7
  });
}
var twl, HKt;