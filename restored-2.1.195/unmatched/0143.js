// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tIt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tIt = E(() => {
  Fsn();
  cos();
  Gzc = /^[A-Za-z0-9_.-]+$/;
});
function xSr(e) {
  if (!e) throw new ui("Identity token file path is empty");
  return async () => {
    let t = await import("fs"),
      n;
    try {
      n = await t.promises.readFile(e, "utf-8");
    } catch (o) {
      throw new ui(`Failed to read identity token file at ${e}: ${o}`);
    }
    let r = n.trim();
    if (!r) throw new ui(`Identity token file at ${e} is empty`);
    return r;
  };
}
function fos(e) {
  if (!e) throw new ui("Identity token value is empty");
  return () => e;
}