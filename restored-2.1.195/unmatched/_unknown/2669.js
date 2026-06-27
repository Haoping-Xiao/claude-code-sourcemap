// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZXi
// matched 2.1.88 source: src/utils/bash/commands.ts
// class=new  jaccard=0.0302  score=0.0486  fileCov=0.0739
// note: nearest: src/utils/bash/commands.ts (0.0302); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZXi = Q((Wgy, QXi) => {
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
});