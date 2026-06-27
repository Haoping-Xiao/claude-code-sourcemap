// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VIo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VIo = Q((mdb, tul) => {
  tul.exports = {
    serializeOne: Qaf,
    ɵescapeMatchingClosingTag: Qcl,
    ɵescapeClosingCommentTag: Zcl,
    ɵescapeProcessingInstructionContent: eul
  };
  var Jcl = kk(),
    S6e = Jcl.NAMESPACE,
    Kcl = {
      STYLE: !0,
      SCRIPT: !0,
      XMP: !0,
      IFRAME: !0,
      NOEMBED: !0,
      NOFRAMES: !0,
      PLAINTEXT: !0
    },
    Vaf = {
      area: !0,
      base: !0,
      basefont: !0,
      bgsound: !0,
      br: !0,
      col: !0,
      embed: !0,
      frame: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    },
    zaf = {},
    Ycl = /[&<>\u00A0]/g,
    Xcl = /[&"<>\u00A0]/g;
  function Kaf(e) {
    if (!Ycl.test(e)) return e;
    return e.replace(Ycl, t => {
      switch (t) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "\xA0":
          return "&nbsp;";
      }
    });
  }
  function Yaf(e) {
    if (!Xcl.test(e)) return e;
    return e.replace(Xcl, t => {
      switch (t) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "&":
          return "&amp;";
        case '"':
          return "&quot;";
        case "\xA0":
          return "&nbsp;";
      }
    });
  }
  function Xaf(e) {
    var t = e.namespaceURI;
    if (!t) return e.localName;
    if (t === S6e.XML) return "xml:" + e.localName;
    if (t === S6e.XLINK) return "xlink:" + e.localName;
    if (t === S6e.XMLNS) if (e.localName === "xmlns") return "xmlns";else return "xmlns:" + e.localName;
    return e.name;
  }
  function Qcl(e, t) {
    let n = "</" + t;
    if (!e.toLowerCase().includes(n)) return e;
    let r = [...e],
      o = e.matchAll(new RegExp(n, "ig"));
    for (let s of o) r[s.index] = "&lt;";
    return r.join("");
  }
  var Jaf = /--!?>/;
  function Zcl(e) {
    if (!Jaf.test(e)) return e;
    return e.replace(/(--\!?)>/g, "$1&gt;");
  }
  function eul(e) {
    return e.includes(">") ? e.replaceAll(">", "&gt;") : e;
  }
  function Qaf(e, t) {
    var n = "";
    switch (e.nodeType) {
      case 1:
        var r = e.namespaceURI,
          o = r === S6e.HTML,
          s = o || r === S6e.SVG || r === S6e.MATHML ? e.localName : e.tagName;
        n += "<" + s;
        for (var i = 0, a = e._numattrs; i < a; i++) {
          var l = e._attr(i);
          if (n += " " + Xaf(l), l.value !== void 0) n += '="' + Yaf(l.value) + '"';
        }
        if (n += ">", !(o && Vaf[s])) {
          var c = e.serialize();
          if (Kcl[s.toUpperCase()]) c = Qcl(c, s);
          if (o && zaf[s] && c.charAt(0) === `
`) n += `
`;
          n += c, n += "</" + s + ">";
        }
        break;
      case 3:
      case 4:
        var u;
        if (t.nodeType === 1 && t.namespaceURI === S6e.HTML) u = t.tagName;else u = "";
        if (Kcl[u] || u === "NOSCRIPT" && t.ownerDocument._scripting_enabled) n += e.data;else n += Kaf(e.data);
        break;
      case 8:
        n += "<!--" + Zcl(e.data) + "-->";
        break;
      case 7:
        let d = eul(e.data);
        n += "<?" + e.target + " " + d + "?>";
        break;
      case 10:
        n += "<!DOCTYPE " + e.name, n += ">";
        break;
      default:
        Jcl.InvalidStateError();
    }
    return n;
  }
});