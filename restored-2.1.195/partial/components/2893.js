// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w4
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/thrift.js
// class=partial  jaccard=0.0835  score=0.1879  fileCov=0.1307
// note: low-confidence suggestion: node_modules/highlight.js/lib/languages/thrift.js; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var w4 = E(() => {
  uo();
});
var tdp = e => ({
    name: "Cedar",
    aliases: ["cedarpolicy"],
    keywords: {
      keyword: "permit forbid when unless if then else in has like is",
      built_in: "principal action resource context decimal ip contains containsAll containsAny",
      literal: "true false"
    },
    contains: [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, {
      className: "meta",
      begin: /@\w+/
    }, {
      className: "type",
      begin: /\b[A-Z]\w*(::[A-Z]\w*)*/
    }]
  }),
  hda;