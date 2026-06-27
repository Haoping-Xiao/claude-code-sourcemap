// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nha
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/gams.js
// class=partial  jaccard=0.1493  score=0.6703  fileCov=0.1612
// note: low-confidence suggestion: node_modules/highlight.js/lib/languages/gams.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Nha = Q((f2y, Oha) => {
  function igp(e) {
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
        contains: [e.PHRASAL_WORDS_MODE]
      },
      i = {
        className: "string",
        begin: /`/,
        end: /`/,
        contains: [e.BACKSLASH_ESCAPE]
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
      }, o, s, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, i, a, l, e.C_NUMBER_MODE];
    return r.contains = u, o.contains = u, {
      name: "Prolog",
      contains: u.concat([{
        begin: /\.$/
      }])
    };
  }
  Oha.exports = igp;
});