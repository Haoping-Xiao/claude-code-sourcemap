// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q6e
// matched 2.1.88 source: src/tasks/stopTask.ts
// class=modified (alt of src/tasks/stopTask.ts)  jaccard=0.0666  score=0.2555  fileCov=0.0827
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module q6e] deps: services/analytics/index.ts, tasks/stopTask.ts, tasks/LocalAgentTask/LocalAgentTask.tsx, google-auth-library/build/src/crypto/node/crypto.js, utils/debug.ts, utils/errors.ts, utils/sequential.ts, tasks/LocalShellTask/LocalShellTask.tsx, fast-xml-parser/lib/fxp.cjs, utils/plans.ts
W6e = class W6e extends Error {
  code;
  telemetryMessage;
  constructor(e, t) {
    super(e);
    this.code = t;
    ((this.name = "StopTaskError"), (this.telemetryMessage = `StopTask: ${t}`));
  }
};
function gyl() {
  return "";
}
function nmf(e) {
  let t = e.split(`
`),
    n = e;
  if (t.length > fyl)
    n = t.slice(0, fyl).join(`
`);
  if (rn(n) > myl) n = rae(n, myl);
  return n.trim();
}
function hyl(e, t, { verbose: n }) {
  let r = e.command ?? "",
    o = n ? r : nmf(r);
  return q7n.jsx(qn, {
    children: q7n.jsxs(w, {
      children: [o, o !== r ? "\u2026 \xB7 stopped" : " \xB7 stopped"],
    }),
  });
}
var q7n,
  fyl = 2,
  myl = 160;
