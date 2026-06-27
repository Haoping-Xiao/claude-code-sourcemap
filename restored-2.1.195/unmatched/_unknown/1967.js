// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rHi
// matched 2.1.88 source: node_modules/bignumber.js/bignumber.js
// class=new  jaccard=0.028  score=0.2633  fileCov=0.0303
// note: nearest: node_modules/bignumber.js/bignumber.js (0.028); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rHi = Q((kOh, nHi) => {
  var eHi = iVr(),
    tHi = nHi.exports;
  (function () {
    function e(c) {
      return c < 10 ? "0" + c : c;
    }
    var t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      n = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      r,
      o,
      s = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\\"",
        "\\": "\\\\"
      },
      i;
    function a(c) {
      return n.lastIndex = 0, n.test(c) ? '"' + c.replace(n, function (u) {
        var d = s[u];
        return typeof d === "string" ? d : "\\u" + ("0000" + u.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + c + '"';
    }
    function l(c, u) {
      var d,
        p,
        f,
        m,
        g = r,
        h,
        y = u[c],
        b = y != null && (y instanceof eHi || eHi.isBigNumber(y));
      if (y && typeof y === "object" && typeof y.toJSON === "function") y = y.toJSON(c);
      if (typeof i === "function") y = i.call(u, c, y);
      switch (typeof y) {
        case "string":
          if (b) return y;else return a(y);
        case "number":
          return isFinite(y) ? String(y) : "null";
        case "boolean":
        case "null":
        case "bigint":
          return String(y);
        case "object":
          if (!y) return "null";
          if (r += o, h = [], Object.prototype.toString.apply(y) === "[object Array]") {
            m = y.length;
            for (d = 0; d < m; d += 1) h[d] = l(d, y) || "null";
            return f = h.length === 0 ? "[]" : r ? `[
` + r + h.join(`,
` + r) + `
` + g + "]" : "[" + h.join(",") + "]", r = g, f;
          }
          if (i && typeof i === "object") {
            m = i.length;
            for (d = 0; d < m; d += 1) if (typeof i[d] === "string") {
              if (p = i[d], f = l(p, y), f) h.push(a(p) + (r ? ": " : ":") + f);
            }
          } else Object.keys(y).forEach(function (_) {
            var S = l(_, y);
            if (S) h.push(a(_) + (r ? ": " : ":") + S);
          });
          return f = h.length === 0 ? "{}" : r ? `{
` + r + h.join(`,
` + r) + `
` + g + "}" : "{" + h.join(",") + "}", r = g, f;
      }
    }
    if (typeof tHi.stringify !== "function") tHi.stringify = function (c, u, d) {
      var p;
      if (r = "", o = "", typeof d === "number") for (p = 0; p < d; p += 1) o += " ";else if (typeof d === "string") o = d;
      if (i = u, u && typeof u !== "function" && (typeof u !== "object" || typeof u.length !== "number")) throw Error("JSON.stringify");
      return l("", {
        "": c
      });
    };
  })();
});