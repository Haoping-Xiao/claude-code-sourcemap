// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lar
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/sql.js
// class=new  jaccard=0.0078  score=0.5166  fileCov=0.0078
// note: nearest: node_modules/highlight.js/lib/languages/sql.js (0.0078); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Lar = E(() => {
  vX();
  Brc = /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+$/;
  jrc = {
    is: {
      op: "eq",
      list: !1
    },
    is_not: {
      op: "not_in",
      list: !1
    },
    one_of: {
      op: "in",
      list: !0
    },
    none_of: {
      op: "not_in",
      list: !0
    },
    starts_with: {
      op: "starts_with",
      list: !1
    },
    contains: {
      op: "contains",
      list: !1
    },
    matches: {
      op: "matches",
      list: !1
    },
    glob: {
      op: "glob",
      list: !1
    },
    eq: {
      op: "eq",
      list: !1
    },
    in: {
      op: "in",
      list: !0
    },
    not_in: {
      op: "not_in",
      list: !0
    }
  }, Grc = Object.keys(jrc);
});
var qrc, A4E;