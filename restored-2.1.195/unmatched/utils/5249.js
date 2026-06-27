// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lar
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/sql.js
// class=new  jaccard=0.0086  score=0.2149  fileCov=0.0089
// note: nearest: node_modules/highlight.js/lib/languages/sql.js (0.0086); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Lar] deps: vX
Brc = /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+$/;
jrc = {
  is: {
    op: "eq",
    list: false
  },
  is_not: {
    op: "not_in",
    list: false
  },
  one_of: {
    op: "in",
    list: true
  },
  none_of: {
    op: "not_in",
    list: true
  },
  starts_with: {
    op: "starts_with",
    list: false
  },
  contains: {
    op: "contains",
    list: false
  },
  matches: {
    op: "matches",
    list: false
  },
  glob: {
    op: "glob",
    list: false
  },
  eq: {
    op: "eq",
    list: false
  },
  in: {
    op: "in",
    list: true
  },
  not_in: {
    op: "not_in",
    list: true
  }
}, Grc = Object.keys(jrc);
var qrc, A4E;