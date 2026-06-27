// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y4t
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Y4t = Q((NGy, HHa) => {
  var eUn = Jb(),
    RSp = _T().fromCallback,
    AHa = EHa();
  function LSp(e, t) {
    if (eUn.rm) return eUn.rm(e, {
      recursive: !0,
      force: !0
    }, t);
    AHa(e, t);
  }
  function DSp(e) {
    if (eUn.rmSync) return eUn.rmSync(e, {
      recursive: !0,
      force: !0
    });
    AHa.sync(e);
  }
  HHa.exports = {
    remove: RSp(LSp),
    removeSync: DSp
  };
});