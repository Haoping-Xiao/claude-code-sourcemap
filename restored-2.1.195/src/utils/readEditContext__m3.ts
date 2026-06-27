// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gAn
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=modified (alt of src/utils/readEditContext.ts)  jaccard=0.4356  score=1  fileCov=0.4356
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gAn = E(() => {
  Ree();
  Qi();
  Xr();
  oo();
  je();
  fn();
  Rd();
  qd();
  Mh();
  Jt();
  Ls();
  ((Roi = require("fs")),
    (fAn = require("fs/promises")),
    (P2r = require("path")),
    (Loi = ve(() =>
      H.object({
        id: H.string(),
        display_name: H.string().optional(),
      }).strip(),
    )),
    (opd = ve(() =>
      H.object({
        baseUrl: H.string(),
        fetchedAt: H.number(),
        models: H.array(Loi()),
      }),
    )));
  D2r = Cn(
    (e) => {
      try {
        let t = Roi.readFileSync(e, "utf-8"),
          n = opd().safeParse(Ia(t, false));
        return n.success ? n.data : null;
      } catch {
        return null;
      }
    },
    (e) => e,
  );
});
function v0(e) {
  return hye.includes(e);
}
function ya(e) {
  return e.replace(/\[1m\]$/i, "");
}
function tU(e) {
  return spd.includes(e);
}
var hye, spd;
