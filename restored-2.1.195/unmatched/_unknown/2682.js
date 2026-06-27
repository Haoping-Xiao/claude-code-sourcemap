// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NFt
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.01  score=0.4148  fileCov=0.0102
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.01); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NFt]
fZd = ["FieldValueInvalidError", "FieldListRangeError", "ForeignFieldError"];
D1 = class D1 extends Error {
  constructor(e, t, n = "FieldValueInvalidError") {
    super(t);
    this.name = n, this.field = () => e;
  }
};
function Lbe(e) {
  let t = false,
    n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e.charAt(r);
    switch (o) {
      case "_":
        t = true;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        n.push(o), t = false;
        break;
      default:
        if (t) t = false, o = o.toUpperCase();
        n.push(o);
        break;
    }
  }
  return n.join("");
}
function i$n(e) {
  return e.replace(/[A-Z]/g, t => "_" + t.toLowerCase());
}
function Glt(e) {
  return mZd.has(e) ? e + "$" : e;
}
var mZd;