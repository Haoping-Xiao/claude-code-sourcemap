// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZNs
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0274  score=1  fileCov=0.0274
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0274); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZNs = E(() => {
  S$r();
  XNs();
  JNs = R(FB(), 1);
});
var p9u = "***SensitiveInformation***";
var A$r = (e, t) => {
  for (let n of Object.keys(e)) {
    let r = e[n],
      o = async function (i, a, l) {
        let c = new r(i);
        if (typeof a === "function") this.send(c, a);else if (typeof l === "function") {
          if (typeof a !== "object") throw Error(`Expected http options but got ${typeof a}`);
          this.send(c, a || {}, l);
        } else return this.send(c, a);
      },
      s = (n[0].toLowerCase() + n.slice(1)).replace(/Command$/, "");
    t.prototype[s] = o;
  }
};
var aIe,
  H$r = (e, t = {}) => {
    Object.entries(t).filter(([, r]) => r !== void 0).forEach(([r, o]) => {
      if (e[r] == null || e[r] === "") e[r] = o;
    });
    let n = e.message || e.Message || "UnknownError";
    return e.message = n, delete e.Message, e;
  };