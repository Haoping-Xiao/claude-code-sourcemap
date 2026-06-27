// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RHa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var RHa = Q((BGy, kHa) => {
  var PSp = _T().fromPromise,
    wHa = X5e(),
    CHa = require("path"),
    IHa = yre(),
    xHa = Y4t(),
    THa = PSp(async function (t) {
      let n;
      try {
        n = await wHa.readdir(t);
      } catch {
        return IHa.mkdirs(t);
      }
      return Promise.all(n.map(r => xHa.remove(CHa.join(t, r))));
    });
  function vHa(e) {
    let t;
    try {
      t = wHa.readdirSync(e);
    } catch {
      return IHa.mkdirsSync(e);
    }
    t.forEach(n => {
      n = CHa.join(e, n), xHa.removeSync(n);
    });
  }
  kHa.exports = {
    emptyDirSync: vHa,
    emptydirSync: vHa,
    emptyDir: THa,
    emptydir: THa
  };
});