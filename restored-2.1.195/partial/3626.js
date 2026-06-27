// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X4a
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/entities.js
// class=partial  jaccard=0.0742  score=0.7958  fileCov=0.0756
// note: low-confidence suggestion: node_modules/@xmldom/xmldom/lib/entities.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var X4a = Q((cS_, Y4a) => {
  var vFp = 1 / 0,
    wFp = "[object Symbol]",
    CFp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    IFp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    JGn = "\\ud800-\\udfff",
    D4a = "\\u0300-\\u036f\\ufe20-\\ufe23",
    P4a = "\\u20d0-\\u20f0",
    M4a = "\\u2700-\\u27bf",
    $4a = "a-z\\xdf-\\xf6\\xf8-\\xff",
    xFp = "\\xac\\xb1\\xd7\\xf7",
    kFp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
    RFp = "\\u2000-\\u206f",
    LFp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    O4a = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    N4a = "\\ufe0e\\ufe0f",
    B4a = xFp + kFp + RFp + LFp,
    J_o = "['\u2019]",
    DFp = "[" + JGn + "]",
    w4a = "[" + B4a + "]",
    XGn = "[" + D4a + P4a + "]",
    U4a = "\\d+",
    PFp = "[" + M4a + "]",
    F4a = "[" + $4a + "]",
    j4a = "[^" + JGn + B4a + U4a + M4a + $4a + O4a + "]",
    X_o = "\\ud83c[\\udffb-\\udfff]",
    MFp = "(?:" + XGn + "|" + X_o + ")",
    G4a = "[^" + JGn + "]",
    Q_o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Z_o = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    mmt = "[" + O4a + "]",
    W4a = "\\u200d",
    C4a = "(?:" + F4a + "|" + j4a + ")",
    $Fp = "(?:" + mmt + "|" + j4a + ")",
    I4a = "(?:" + J_o + "(?:d|ll|m|re|s|t|ve))?",
    x4a = "(?:" + J_o + "(?:D|LL|M|RE|S|T|VE))?",
    q4a = MFp + "?",
    V4a = "[" + N4a + "]?",
    OFp = "(?:" + W4a + "(?:" + [G4a, Q_o, Z_o].join("|") + ")" + V4a + q4a + ")*",
    z4a = V4a + q4a + OFp,
    NFp = "(?:" + [PFp, Q_o, Z_o].join("|") + ")" + z4a,
    BFp = "(?:" + [G4a + XGn + "?", XGn, Q_o, Z_o, DFp].join("|") + ")",
    UFp = RegExp(J_o, "g"),
    FFp = RegExp(XGn, "g"),
    jFp = RegExp(X_o + "(?=" + X_o + ")|" + BFp + z4a, "g"),
    GFp = RegExp([mmt + "?" + F4a + "+" + I4a + "(?=" + [w4a, mmt, "$"].join("|") + ")", $Fp + "+" + x4a + "(?=" + [w4a, mmt + C4a, "$"].join("|") + ")", mmt + "?" + C4a + "+" + I4a, mmt + "+" + x4a, U4a, NFp].join("|"), "g"),
    WFp = RegExp("[" + W4a + JGn + D4a + P4a + N4a + "]"),
    qFp = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    VFp = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "ss"
    },
    zFp = typeof global == "object" && global && global.Object === Object && global,
    KFp = typeof self == "object" && self && self.Object === Object && self,
    YFp = zFp || KFp || Function("return this")();
  function XFp(e, t, n, r) {
    var o = -1,
      s = e ? e.length : 0;
    if (r && s) n = e[++o];
    while (++o < s) n = t(n, e[o], o, e);
    return n;
  }
  function JFp(e) {
    return e.split("");
  }
  function QFp(e) {
    return e.match(CFp) || [];
  }
  function ZFp(e) {
    return function (t) {
      return e == null ? void 0 : e[t];
    };
  }
  var e2p = ZFp(VFp);
  function K4a(e) {
    return WFp.test(e);
  }
  function t2p(e) {
    return qFp.test(e);
  }
  function n2p(e) {
    return K4a(e) ? r2p(e) : JFp(e);
  }
  function r2p(e) {
    return e.match(jFp) || [];
  }
  function o2p(e) {
    return e.match(GFp) || [];
  }
  var s2p = Object.prototype,
    i2p = s2p.toString,
    k4a = YFp.Symbol,
    R4a = k4a ? k4a.prototype : void 0,
    L4a = R4a ? R4a.toString : void 0;
  function a2p(e, t, n) {
    var r = -1,
      o = e.length;
    if (t < 0) t = -t > o ? 0 : o + t;
    if (n = n > o ? o : n, n < 0) n += o;
    o = t > n ? 0 : n - t >>> 0, t >>>= 0;
    var s = Array(o);
    while (++r < o) s[r] = e[r + t];
    return s;
  }
  function l2p(e) {
    if (typeof e == "string") return e;
    if (f2p(e)) return L4a ? L4a.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -vFp ? "-0" : t;
  }
  function c2p(e, t, n) {
    var r = e.length;
    return n = n === void 0 ? r : n, !t && n >= r ? e : a2p(e, t, n);
  }
  function u2p(e) {
    return function (t) {
      t = QGn(t);
      var n = K4a(t) ? n2p(t) : void 0,
        r = n ? n[0] : t.charAt(0),
        o = n ? c2p(n, 1).join("") : t.slice(1);
      return r[e]() + o;
    };
  }
  function d2p(e) {
    return function (t) {
      return XFp(_2p(h2p(t).replace(UFp, "")), e, "");
    };
  }
  function p2p(e) {
    return !!e && typeof e == "object";
  }
  function f2p(e) {
    return typeof e == "symbol" || p2p(e) && i2p.call(e) == wFp;
  }
  function QGn(e) {
    return e == null ? "" : l2p(e);
  }
  var m2p = d2p(function (e, t, n) {
    return t = t.toLowerCase(), e + (n ? g2p(t) : t);
  });
  function g2p(e) {
    return y2p(QGn(e).toLowerCase());
  }
  function h2p(e) {
    return e = QGn(e), e && e.replace(IFp, e2p).replace(FFp, "");
  }
  var y2p = u2p("toUpperCase");
  function _2p(e, t, n) {
    if (e = QGn(e), t = n ? void 0 : t, t === void 0) return t2p(e) ? o2p(e) : QFp(e);
    return e.match(t) || [];
  }
  Y4a.exports = m2p;
});