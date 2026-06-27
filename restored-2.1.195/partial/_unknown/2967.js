// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ima
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/groovy.js
// class=partial  jaccard=0.1437  score=1  fileCov=0.1437
// note: low-confidence suggestion: node_modules/highlight.js/lib/languages/groovy.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ima = Q((rFy, sma) => {
  function afp(e) {
    if (!e) return null;
    if (typeof e === "string") return e;
    return e.source;
  }
  function lfp(e) {
    return cfp("(?=", e, ")");
  }
  function cfp(...e) {
    return e.map(n => afp(n)).join("");
  }
  function Rlo(e, t = {}) {
    return t.variants = e, t;
  }
  function ufp(e) {
    let n = Rlo([e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [{
          begin: /\w+@/,
          relevance: 0
        }, {
          className: "doctag",
          begin: "@[A-Za-z]+"
        }]
      })]),
      r = {
        className: "regexp",
        begin: /~?\/[^\/\n]+\//,
        contains: [e.BACKSLASH_ESCAPE]
      },
      o = Rlo([e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]),
      s = Rlo([{
        begin: /"""/,
        end: /"""/
      }, {
        begin: /'''/,
        end: /'''/
      }, {
        begin: "\\$/",
        end: "/\\$",
        relevance: 10
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], {
        className: "string"
      });
    return {
      name: "Groovy",
      keywords: {
        built_in: "this super",
        literal: "true false null",
        keyword: "byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
      },
      contains: [e.SHEBANG({
        binary: "groovy",
        relevance: 10
      }), n, s, r, o, {
        className: "class",
        beginKeywords: "class interface trait enum",
        end: /\{/,
        illegal: ":",
        contains: [{
          beginKeywords: "extends implements"
        }, e.UNDERSCORE_TITLE_MODE]
      }, {
        className: "meta",
        begin: "@[A-Za-z]+",
        relevance: 0
      }, {
        className: "attr",
        begin: "[A-Za-z0-9_$]+[ \t]*:",
        relevance: 0
      }, {
        begin: /\?/,
        end: /:/,
        relevance: 0,
        contains: [n, s, r, o, "self"]
      }, {
        className: "symbol",
        begin: "^[ \t]*" + lfp("[A-Za-z0-9_$]+:"),
        excludeBegin: !0,
        end: "[A-Za-z0-9_$]+:",
        relevance: 0
      }],
      illegal: /#|<\//
    };
  }
  sma.exports = ufp;
});