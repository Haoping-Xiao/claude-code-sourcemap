// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZXi
// matched 2.1.88 source: node_modules/zod/v4/core/schemas.js
// class=new  jaccard=0.0059  score=0.0585  fileCov=0.0065
// note: nearest: node_modules/zod/v4/core/schemas.js (0.0059); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module ZXi] (exports=Wgy, module=QXi)
var Wgy = {};
var QXi = {
  exports: Wgy
};
var aQd = ["||", "&&", ";;", "|&", "<(", "<<<", ">>", ">&", "<&", "&", ";", "(", ")", "|", "<", ">"],
  JXi = /[\n\r\u2028\u2029]/,
  lQd = /[\s#!"$&'():;<=>@\\^`|]/g;
QXi.exports = function (t) {
  return t.map(function (n) {
    if (n === "") return "''";
    if (n && typeof n === "object") {
      if (n.op === "glob") {
        if (typeof n.pattern !== "string") throw TypeError("glob token requires a string `pattern`");
        if (JXi.test(n.pattern)) throw TypeError("glob `pattern` must not contain line terminators");
        return n.pattern.replace(lQd, "\\$&");
      }
      if (typeof n.op === "string") {
        if (aQd.indexOf(n.op) < 0) throw TypeError("invalid `op` value: " + JSON.stringify(n.op));
        return n.op.replace(/[\s\S]/g, "\\$&");
      }
      if (typeof n.comment === "string") {
        if (JXi.test(n.comment)) throw TypeError("`comment` must not contain line terminators");
        return "#" + n.comment;
      }
      throw TypeError("unrecognized object token shape");
    }
    if (/["\s\\]/.test(n) && !/'/.test(n)) return "'" + n.replace(/(['])/g, "\\$1") + "'";
    if (/["'\s]/.test(n)) return '"' + n.replace(/(["\\$`!])/g, "\\$1") + '"';
    return String(n).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, "$1\\$2");
  }).join(" ");
};