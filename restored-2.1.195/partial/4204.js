// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UKn
// matched 2.1.88 source: node_modules/@mixmark-io/domino/lib/xmlnames.js
// class=partial  jaccard=0.1886  score=0.3159  fileCov=0.3189
// note: low-confidence suggestion: node_modules/@mixmark-io/domino/lib/xmlnames.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UKn = Q(oxo => {
  oxo.isValidName = ulf;
  oxo.isValidQName = dlf;
  var olf = /^[_:A-Za-z][-.:\w]+$/,
    slf = /^([_A-Za-z][-.\w]+|[_A-Za-z][-.\w]+:[_A-Za-z][-.\w]+)$/,
    n6t = "_A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD",
    r6t = "-._A-Za-z0-9\xB7\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0300-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD",
    A6e = "[" + n6t + "][" + r6t + "]*",
    nxo = n6t + ":",
    rxo = r6t + ":",
    ilf = new RegExp("^[" + nxo + "][" + rxo + "]*$"),
    alf = new RegExp("^(" + A6e + "|" + A6e + ":" + A6e + ")$"),
    hul = /[\uD800-\uDB7F\uDC00-\uDFFF]/,
    yul = /[\uD800-\uDB7F\uDC00-\uDFFF]/g,
    _ul = /[\uD800-\uDB7F][\uDC00-\uDFFF]/g;
  n6t += "\uD800-\uDB7F\uDC00-\uDFFF";
  r6t += "\uD800-\uDB7F\uDC00-\uDFFF";
  A6e = "[" + n6t + "][" + r6t + "]*";
  nxo = n6t + ":";
  rxo = r6t + ":";
  var llf = new RegExp("^[" + nxo + "][" + rxo + "]*$"),
    clf = new RegExp("^(" + A6e + "|" + A6e + ":" + A6e + ")$");
  function ulf(e) {
    if (olf.test(e)) return !0;
    if (ilf.test(e)) return !0;
    if (!hul.test(e)) return !1;
    if (!llf.test(e)) return !1;
    var t = e.match(yul),
      n = e.match(_ul);
    return n !== null && 2 * n.length === t.length;
  }
  function dlf(e) {
    if (slf.test(e)) return !0;
    if (alf.test(e)) return !0;
    if (!hul.test(e)) return !1;
    if (!clf.test(e)) return !1;
    var t = e.match(yul),
      n = e.match(_ul);
    return n !== null && 2 * n.length === t.length;
  }
});