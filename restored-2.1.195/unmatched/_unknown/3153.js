// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module buo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var buo = Q((LGy, JAa) => {
  var ydt = Jb();
  function Gbp(e, t, n, r) {
    ydt.open(e, "r+", (o, s) => {
      if (o) return r(o);
      ydt.futimes(s, t, n, i => {
        ydt.close(s, a => {
          if (r) r(i || a);
        });
      });
    });
  }
  function Wbp(e, t, n) {
    let r = ydt.openSync(e, "r+");
    return ydt.futimesSync(r, t, n), ydt.closeSync(r);
  }
  JAa.exports = {
    utimesMillis: Gbp,
    utimesMillisSync: Wbp
  };
});