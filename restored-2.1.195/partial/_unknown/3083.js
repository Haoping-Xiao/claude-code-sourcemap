// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Q_a
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/hsp.js
// class=partial  jaccard=0.0845  score=0.097  fileCov=0.3972
// note: low-confidence suggestion: node_modules/highlight.js/lib/languages/hsp.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Q_a = Q((djy, J_a) => {
  function X_a(e) {
    if (!e) return null;
    if (typeof e === "string") return e;
    return e.source;
  }
  function Y_a(e) {
    return M5e("(?=", e, ")");
  }
  function Fhp(e) {
    return M5e("(", e, ")?");
  }
  function M5e(...e) {
    return e.map(n => X_a(n)).join("");
  }
  function jhp(...e) {
    return "(" + e.map(n => X_a(n)).join("|") + ")";
  }
  function Ghp(e) {
    let t = M5e(/[A-Z_]/, Fhp(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/),
      n = /[A-Za-z0-9._:-]+/,
      r = {
        className: "symbol",
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
      },
      o = {
        begin: /\s/,
        contains: [{
          className: "meta-keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }]
      },
      s = e.inherit(o, {
        begin: /\(/,
        end: /\)/
      }),
      i = e.inherit(e.APOS_STRING_MODE, {
        className: "meta-string"
      }),
      a = e.inherit(e.QUOTE_STRING_MODE, {
        className: "meta-string"
      }),
      l = {
        endsWithParent: true,
        illegal: /</,
        relevance: 0,
        contains: [{
          className: "attr",
          begin: n,
          relevance: 0
        }, {
          begin: /=\s*/,
          relevance: 0,
          contains: [{
            className: "string",
            endsParent: true,
            variants: [{
              begin: /"/,
              end: /"/,
              contains: [r]
            }, {
              begin: /'/,
              end: /'/,
              contains: [r]
            }, {
              begin: /[^\s"'=<>`]+/
            }]
          }]
        }]
      };
    return {
      name: "HTML, XML",
      aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
      case_insensitive: true,
      contains: [{
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [o, a, i, s, {
          begin: /\[/,
          end: /\]/,
          contains: [{
            className: "meta",
            begin: /<![a-z]/,
            end: />/,
            contains: [o, s, a, i]
          }]
        }]
      }, e.COMMENT(/<!--/, /-->/, {
        relevance: 10
      }), {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      }, r, {
        className: "meta",
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      }, {
        className: "tag",
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: {
          name: "style"
        },
        contains: [l],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: ["css", "xml"]
        }
      }, {
        className: "tag",
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: {
          name: "script"
        },
        contains: [l],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: ["javascript", "handlebars", "xml"]
        }
      }, {
        className: "tag",
        begin: /<>|<\/>/
      }, {
        className: "tag",
        begin: M5e(/</, Y_a(M5e(t, jhp(/\/>/, />/, /\s/)))),
        end: /\/?>/,
        contains: [{
          className: "name",
          begin: t,
          relevance: 0,
          starts: l
        }]
      }, {
        className: "tag",
        begin: M5e(/<\//, Y_a(M5e(t, />/))),
        contains: [{
          className: "name",
          begin: t,
          relevance: 0
        }, {
          begin: />/,
          relevance: 0,
          endsParent: true
        }]
      }]
    };
  }
  J_a.exports = Ghp;
});