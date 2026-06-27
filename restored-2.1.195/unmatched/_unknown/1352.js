// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AZs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var AZs = E(() => {
  mEn();
  hEn();
  vEn = R(UR(), 1), hZs = R(Xee(), 1);
});
var HZs = (e, t) => {
    if (!t) return e;else return class extends e {
      constructor(r) {
        super(r);
        for (let o of t) this.middlewareStack.use(o);
      }
    };
  },
  TZs = (e = {}, t) => bZs(e, HZs(pye, t)),
  vZs = (e = {}, t) => SZs(e, HZs(pye, t)),
  qcd = e => t => e({
    roleAssumer: TZs(t),
    roleAssumerWithWebIdentity: vZs(t),
    ...t
  });