// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nha
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/gams.js
// class=partial  jaccard=0.1493  score=0.6703  fileCov=0.1612
// note: low-confidence suggestion: node_modules/highlight.js/lib/languages/gams.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module Nha] (exports=f2y, module=Oha)
var f2y = {};
var Oha = {
  exports: f2y
};
function igp(hljs) {
  let t = {
      begin: /[a-z][A-Za-z0-9_]*/,
      relevance: 0
    },
    n = {
      className: "symbol",
      variants: [{
        begin: /[A-Z][a-zA-Z0-9_]*/
      }, {
        begin: /_[A-Za-z0-9_]*/
      }],
      relevance: 0
    },
    r = {
      begin: /\(/,
      end: /\)/,
      relevance: 0
    },
    o = {
      begin: /\[/,
      end: /\]/
    },
    s = {
      className: "comment",
      begin: /%/,
      end: /$/,
      contains: [hljs.PHRASAL_WORDS_MODE]
    },
    i = {
      className: "string",
      begin: /`/,
      end: /`/,
      contains: [hljs.BACKSLASH_ESCAPE]
    },
    a = {
      className: "string",
      begin: /0'(\\'|.)/
    },
    l = {
      className: "string",
      begin: /0'\\s/
    },
    u = [t, n, r, {
      begin: /:-/
    }, o, s, hljs.C_BLOCK_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, i, a, l, hljs.C_NUMBER_MODE];
  return r.contains = u, o.contains = u, {
    name: "Prolog",
    contains: u.concat([{
      begin: /\.$/
    }])
  };
}
Oha.exports = igp;