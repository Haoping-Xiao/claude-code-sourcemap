// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NFt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var NFt = E(() => {
  fZd = ["FieldValueInvalidError", "FieldListRangeError", "ForeignFieldError"];
  D1 = class D1 extends Error {
    constructor(e, t, n = "FieldValueInvalidError") {
      super(t);
      this.name = n, this.field = () => e;
    }
  };
});
function Lbe(e) {
  let t = !1,
    n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e.charAt(r);
    switch (o) {
      case "_":
        t = !0;
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
        n.push(o), t = !1;
        break;
      default:
        if (t) t = !1, o = o.toUpperCase();
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