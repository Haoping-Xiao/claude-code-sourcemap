// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xgl
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/mathematica.js
// class=new  jaccard=0.0002  score=0.1431  fileCov=0.0002
// note: nearest: node_modules/highlight.js/lib/languages/mathematica.js (0.0002); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xgl = E(() => {
  yC();
  S_();
  d8t();
  At();
  h7n();
  hyt();
  u9();
  Mh();
  yyt();
  vgl = require("dns/promises"), wgl = require("net"), Cgl = R(require("ws"));
  y7n = class y7n extends Error {
    constructor(e) {
      super(e);
      this.name = "MonitorWsPreconditionError";
    }
  };
});
function kgl() {
  return "Monitor";
}
function Rgl(e) {
  if (!e.description) return null;
  return e.description;
}
function Lgl(e) {
  return q6t.jsx(qn, {
    children: q6t.jsxs(w, {
      children: ["Monitor started", " ", q6t.jsxs(w, {
        dimColor: !0,
        children: ["\xB7 task ", e.taskId, " \xB7", " ", e.persistent ? "persistent" : `timeout ${e.timeoutMs / 1000}s`]
      })]
    })
  });
}
function Dgl(e) {
  if (!e?.description) return null;
  return $a(e.description, nP);
}
var q6t;