// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xMi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xMi = Q(vxn => {
  Object.defineProperty(vxn, "__esModule", {
    value: !0
  });
  vxn._export = void 0;
  var IMi = qi(),
    YPd = O1t();
  function XPd(e, t) {
    return new Promise(n => {
      IMi.context.with((0, YPd.suppressTracing)(IMi.context.active()), () => {
        e.export(t, r => {
          n(r);
        });
      });
    });
  }
  vxn._export = XPd;
});