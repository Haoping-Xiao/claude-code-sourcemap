// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dgr
// matched 2.1.88 source: node_modules/node-forge/lib/util.js
// class=new  jaccard=0.0153  score=0.3148  fileCov=0.0158
// note: nearest: node_modules/node-forge/lib/util.js (0.0153); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dgr = E(() => {
  sB();
  BDm = xS, knn = VT;
});
function bjc(e) {
  let t;
  if (typeof e === "string") {
    let n = e.split(".");
    if (n.length === 3 || n.length === 5) [t] = n;
  } else if (typeof e === "object" && e) if ("protected" in e) t = e.protected;else throw TypeError("Token does not contain a Protected Header");
  try {
    if (typeof t !== "string" || !t) throw Error();
    let n = JSON.parse(fx.decode(knn(t)));
    if (!eb(n)) throw Error();
    return n;
  } catch (n) {
    throw TypeError("Invalid Token or Protected Header formatting");
  }
}