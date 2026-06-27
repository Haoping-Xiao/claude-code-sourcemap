// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fpl
// matched 2.1.88 source: node_modules/turndown/lib/turndown.cjs.js
// class=partial  jaccard=0.1979  score=1  fileCov=0.1979
// note: low-confidence suggestion: node_modules/turndown/lib/turndown.cjs.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Fpl = Q(w6e => {
  var Npl = y6t(),
    Bpl = pYn(),
    rpb = nko(),
    Upl = tko();
  w6e.createDOMImplementation = function () {
    return new Npl(null);
  };
  w6e.createDocument = function (e, t) {
    if (e || t) {
      var n = new Bpl();
      return n.parse(e || "", !0), n.document();
    }
    return new Npl(null).createHTMLDocument("");
  };
  w6e.createIncrementalHTMLParser = function () {
    var e = new Bpl();
    return {
      write: function (t) {
        if (t.length > 0) e.parse(t, !1, function () {
          return !0;
        });
      },
      end: function (t) {
        e.parse(t || "", !0, function () {
          return !0;
        });
      },
      process: function (t) {
        return e.parse("", !1, t);
      },
      document: function () {
        return e.document();
      }
    };
  };
  w6e.createWindow = function (e, t) {
    var n = w6e.createDocument(e);
    if (t !== void 0) n._address = t;
    return new Upl.Window(n);
  };
  w6e.impl = Upl;
});
var Qpl = {};
_t(Qpl, {
  default: () => Cuf
});
function ruf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) if (n.hasOwnProperty(r)) e[r] = n[r];
  }
  return e;
}
function iko(e, t) {
  return Array(t + 1).join(e);
}
function ouf(e) {
  return e.replace(/^\n*/, "");
}
function suf(e) {
  var t = e.length;
  while (t > 0 && e[t - 1] === `
`) t--;
  return e.substring(0, t);
}
function ako(e) {
  return lko(e, iuf);
}
function qpl(e) {
  return lko(e, Wpl);
}
function auf(e) {
  return zpl(e, Wpl);
}
function luf(e) {
  return lko(e, Vpl);
}
function cuf(e) {
  return zpl(e, Vpl);
}
function lko(e, t) {
  return t.indexOf(e.nodeName) >= 0;
}
function zpl(e, t) {
  return e.getElementsByTagName && t.some(function (n) {
    return e.getElementsByTagName(n).length;
  });
}
function gYn(e) {
  return e ? e.replace(/(\n+\s*)+/g, `
`) : "";
}
function Kpl(e) {
  this.options = e, this._keep = [], this._remove = [], this.blankRule = {
    replacement: e.blankReplacement
  }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
    replacement: e.defaultReplacement
  }, this.array = [];
  for (var t in e.rules) this.array.push(e.rules[t]);
}
function rko(e, t, n) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    if (uuf(o, t, n)) return o;
  }
  return;
}
function uuf(e, t, n) {
  var r = e.filter;
  if (typeof r === "string") {
    if (r === t.nodeName.toLowerCase()) return !0;
  } else if (Array.isArray(r)) {
    if (r.indexOf(t.nodeName.toLowerCase()) > -1) return !0;
  } else if (typeof r === "function") {
    if (r.call(e, t, n)) return !0;
  } else throw TypeError("`filter` needs to be a string, array, or function");
}
function duf(e) {
  var {
      element: t,
      isBlock: n,
      isVoid: r
    } = e,
    o = e.isPre || function (d) {
      return d.nodeName === "PRE";
    };
  if (!t.firstChild || o(t)) return;
  var s = null,
    i = !1,
    a = null,
    l = jpl(a, t, o);
  while (l !== t) {
    if (l.nodeType === 3 || l.nodeType === 4) {
      var c = l.data.replace(/[ \r\n\t]+/g, " ");
      if ((!s || / $/.test(s.data)) && !i && c[0] === " ") c = c.substr(1);
      if (!c) {
        l = oko(l);
        continue;
      }
      l.data = c, s = l;
    } else if (l.nodeType === 1) {
      if (n(l) || l.nodeName === "BR") {
        if (s) s.data = s.data.replace(/ $/, "");
        s = null, i = !1;
      } else if (r(l) || o(l)) s = null, i = !0;else if (s) i = !1;
    } else {
      l = oko(l);
      continue;
    }
    var u = jpl(a, l, o);
    a = l, l = u;
  }
  if (s) {
    if (s.data = s.data.replace(/ $/, ""), !s.data) oko(s);
  }
}
function oko(e) {
  var t = e.nextSibling || e.parentNode;
  return e.parentNode.removeChild(e), t;
}
function jpl(e, t, n) {
  if (e && e.parentNode === t || n(t)) return t.nextSibling || t.parentNode;
  return t.firstChild || t.nextSibling || t.parentNode;
}
function puf() {
  var e = Ypl.DOMParser,
    t = !1;
  try {
    if (new e().parseFromString("", "text/html")) t = !0;
  } catch (n) {}
  return t;
}
function fuf() {
  var e = function () {};
  {
    var t = Fpl();
    e.prototype.parseFromString = function (n) {
      return t.createDocument(n);
    };
  }
  return e;
}
function guf(e, t) {
  var n;
  if (typeof e === "string") {
    var r = huf().parseFromString('<x-turndown id="turndown-root">' + e + "</x-turndown>", "text/html");
    n = r.getElementById("turndown-root");
  } else n = e.cloneNode(!0);
  return duf({
    element: n,
    isBlock: ako,
    isVoid: qpl,
    isPre: t.preformattedCode ? yuf : null
  }), n;
}
function huf() {
  return sko = sko || new muf(), sko;
}
function yuf(e) {
  return e.nodeName === "PRE" || e.nodeName === "CODE";
}
function _uf(e, t) {
  return e.isBlock = ako(e), e.isCode = e.nodeName === "CODE" || e.parentNode.isCode, e.isBlank = buf(e), e.flankingWhitespace = Suf(e, t), e;
}
function buf(e) {
  return !qpl(e) && !luf(e) && /^\s*$/i.test(e.textContent) && !auf(e) && !cuf(e);
}
function Suf(e, t) {
  if (e.isBlock || t.preformattedCode && e.isCode) return {
    leading: "",
    trailing: ""
  };
  var n = Euf(e.textContent);
  if (n.leadingAscii && Gpl("left", e, t)) n.leading = n.leadingNonAscii;
  if (n.trailingAscii && Gpl("right", e, t)) n.trailing = n.trailingNonAscii;
  return {
    leading: n.leading,
    trailing: n.trailing
  };
}
function Euf(e) {
  var t = e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
  return {
    leading: t[1],
    leadingAscii: t[2],
    leadingNonAscii: t[3],
    trailing: t[4],
    trailingNonAscii: t[5],
    trailingAscii: t[6]
  };
}
function Gpl(e, t, n) {
  var r, o, s;
  if (e === "left") r = t.previousSibling, o = / $/;else r = t.nextSibling, o = /^ /;
  if (r) {
    if (r.nodeType === 3) s = o.test(r.nodeValue);else if (n.preformattedCode && r.nodeName === "CODE") s = !1;else if (r.nodeType === 1 && !ako(r)) s = o.test(r.textContent);
  }
  return s;
}
function hYn(e) {
  if (!(this instanceof hYn)) return new hYn(e);
  var t = {
    rules: UF,
    headingStyle: "setext",
    hr: "* * *",
    bulletListMarker: "*",
    codeBlockStyle: "indented",
    fence: "```",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
    linkReferenceStyle: "full",
    br: "  ",
    preformattedCode: !1,
    blankReplacement: function (n, r) {
      return r.isBlock ? `

` : "";
    },
    keepReplacement: function (n, r) {
      return r.isBlock ? `

` + r.outerHTML + `

` : r.outerHTML;
    },
    defaultReplacement: function (n, r) {
      return r.isBlock ? `

` + n + `

` : n;
    }
  };
  this.options = ruf({}, t, e), this.rules = new Kpl(this.options);
}
function Xpl(e) {
  var t = this;
  return Auf.call(e.childNodes, function (n, r) {
    r = new _uf(r, t.options);
    var o = "";
    if (r.nodeType === 3) o = r.isCode ? r.nodeValue : t.escape(r.nodeValue);else if (r.nodeType === 1) o = vuf.call(t, r);
    return Jpl(n, o);
  }, "");
}
function Tuf(e) {
  var t = this;
  return this.rules.forEach(function (n) {
    if (typeof n.append === "function") e = Jpl(e, n.append(t.options));
  }), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function vuf(e) {
  var t = this.rules.forNode(e),
    n = Xpl.call(this, e),
    r = e.flankingWhitespace;
  if (r.leading || r.trailing) n = n.trim();
  return r.leading + t.replacement(n, e, this.options) + r.trailing;
}
function Jpl(e, t) {
  var n = suf(e),
    r = ouf(t),
    o = Math.max(e.length - n.length, t.length - r.length),
    s = `

`.substring(0, o);
  return n + s + r;
}
function wuf(e) {
  return e != null && (typeof e === "string" || e.nodeType && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11));
}
var iuf, Wpl, Vpl, UF, Ypl, muf, sko, Auf, Huf, Cuf;