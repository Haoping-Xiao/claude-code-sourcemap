// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cva
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Cva = Q((hWy, wva) => {
  var DAp = _T().fromPromise,
    Ava = Q5e(),
    Hva = require("path"),
    Tva = bre(),
    vva = r3t(),
    Sva = DAp(async function (t) {
      let n;
      try {
        n = await Ava.readdir(t);
      } catch {
        return Tva.mkdirs(t);
      }
      return Promise.all(n.map(r => vva.remove(Hva.join(t, r))));
    });
  function Eva(e) {
    let t;
    try {
      t = Ava.readdirSync(e);
    } catch {
      return Tva.mkdirsSync(e);
    }
    t.forEach(n => {
      n = Hva.join(e, n), vva.removeSync(n);
    });
  }
  wva.exports = {
    emptyDirSync: Eva,
    emptydirSync: Eva,
    emptyDir: Sva,
    emptydir: Sva
  };
});