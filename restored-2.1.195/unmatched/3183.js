// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Duo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Duo = Q((cWy, zTa) => {
  var Edt = Jb();
  function jEp(e, t, n, r) {
    Edt.open(e, "r+", (o, s) => {
      if (o) return r(o);
      Edt.futimes(s, t, n, i => {
        Edt.close(s, a => {
          if (r) r(i || a);
        });
      });
    });
  }
  function GEp(e, t, n) {
    let r = Edt.openSync(e, "r+");
    return Edt.futimesSync(r, t, n), Edt.closeSync(r);
  }
  zTa.exports = {
    utimesMillis: jEp,
    utimesMillisSync: GEp
  };
});