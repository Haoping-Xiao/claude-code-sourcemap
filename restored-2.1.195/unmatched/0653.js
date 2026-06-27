// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kAs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kAs = Q((fug, s0r) => {
  var xAs = (e = {}) => {
    let t = e.env || process.env;
    if ((e.platform || "linux") !== "win32") return "PATH";
    return Object.keys(t).reverse().find(r => r.toUpperCase() === "PATH") || "Path";
  };
  s0r.exports = xAs;
  s0r.exports.default = xAs;
});