// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hda
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hda = Q((FBy, Ada) => {
  function odp(e) {
    if (!e) return null;
    if (typeof e === "string") return e;
    return e.source;
  }
  function sdp(...e) {
    return e.map(n => odp(n)).join("");
  }
  function idp(e) {
    let t = {
        ruleDeclaration: /^[a-zA-Z][a-zA-Z0-9-]*/,
        unexpectedChars: /[!@#$^&',?+~`|:]/
      },
      n = ["ALPHA", "BIT", "CHAR", "CR", "CRLF", "CTL", "DIGIT", "DQUOTE", "HEXDIG", "HTAB", "LF", "LWSP", "OCTET", "SP", "VCHAR", "WSP"],
      r = e.COMMENT(/;/, /$/),
      o = {
        className: "symbol",
        begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
      },
      s = {
        className: "symbol",
        begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
      },
      i = {
        className: "symbol",
        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
      },
      a = {
        className: "symbol",
        begin: /%[si]/
      },
      l = {
        className: "attribute",
        begin: sdp(t.ruleDeclaration, /(?=\s*=)/)
      };
    return {
      name: "Augmented Backus-Naur Form",
      illegal: t.unexpectedChars,
      keywords: n,
      contains: [l, r, o, s, i, a, e.QUOTE_STRING_MODE, e.NUMBER_MODE]
    };
  }
  Ada.exports = idp;
});