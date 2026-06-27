// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ima
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/groovy.js
// class=partial  jaccard=0.2017  score=1  fileCov=0.2017
// note: low-confidence suggestion: node_modules/highlight.js/lib/languages/groovy.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module ima] (exports=rFy, module=sma)
var rFy = {};
var sma = {
  exports: rFy
};
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
function ufp(hljs) {
  let n = Rlo([hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.COMMENT("/\\*\\*", "\\*/", {
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
      contains: [hljs.BACKSLASH_ESCAPE]
    },
    o = Rlo([hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]),
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
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE], {
      className: "string"
    });
  return {
    name: "Groovy",
    keywords: {
      built_in: "this super",
      literal: "true false null",
      keyword: "byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
    },
    contains: [hljs.SHEBANG({
      binary: "groovy",
      relevance: 10
    }), n, s, r, o, {
      className: "class",
      beginKeywords: "class interface trait enum",
      end: /\{/,
      illegal: ":",
      contains: [{
        beginKeywords: "extends implements"
      }, hljs.UNDERSCORE_TITLE_MODE]
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
      excludeBegin: true,
      end: "[A-Za-z0-9_$]+:",
      relevance: 0
    }],
    illegal: /#|<\//
  };
}
sma.exports = ufp;