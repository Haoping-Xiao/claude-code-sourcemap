// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xgl
// matched 2.1.88 source: src/components/messages/AttachmentMessage.tsx
// class=new  jaccard=0.0137  score=0.1562  fileCov=0.0148
// note: nearest: src/components/messages/AttachmentMessage.tsx (0.0137); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xgl] deps: yC, S_, d8t, At, h7n, hyt, u9, Mh, yyt
vgl = require("dns/promises"), wgl = require("net"), Cgl = R(require("ws"));
y7n = class y7n extends Error {
  constructor(e) {
    super(e);
    this.name = "MonitorWsPreconditionError";
  }
};
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
        dimColor: true,
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