// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module r3t
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var r3t = Q((gWy, bva) => {
  var lUn = Jb(),
    kAp = _T().fromCallback,
    _va = yva();
  function RAp(e, t) {
    if (lUn.rm) return lUn.rm(e, {
      recursive: !0,
      force: !0
    }, t);
    _va(e, t);
  }
  function LAp(e) {
    if (lUn.rmSync) return lUn.rmSync(e, {
      recursive: !0,
      force: !0
    });
    _va.sync(e);
  }
  bva.exports = {
    remove: kAp(RAp),
    removeSync: LAp
  };
});