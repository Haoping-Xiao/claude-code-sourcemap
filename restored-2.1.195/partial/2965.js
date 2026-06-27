// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nma
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/golo.js
// class=partial  jaccard=0.204  score=0.5902  fileCov=0.2377
// note: low-confidence suggestion: node_modules/highlight.js/lib/languages/golo.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nma = Q((tFy, tma) => {
  function sfp(e) {
    return {
      name: "Golo",
      keywords: {
        keyword: "println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array",
        literal: "true false null"
      },
      contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
        className: "meta",
        begin: "@[A-Za-z]+"
      }]
    };
  }
  tma.exports = sfp;
});