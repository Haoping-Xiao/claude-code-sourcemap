// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q6e
// matched 2.1.88 source: src/services/mcp/client.ts
// class=new  jaccard=0.0052  score=0.2874  fileCov=0.0053
// note: nearest: src/services/mcp/client.ts (0.0052); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var q6e = E(() => {
  ft();
  pyl();
  yyt();
  $S();
  je();
  At();
  vn();
  hyt();
  tA();
  _a();
  W6e = class W6e extends Error {
    code;
    telemetryMessage;
    constructor(e, t) {
      super(e);
      this.code = t;
      this.name = "StopTaskError", this.telemetryMessage = `StopTask: ${t}`;
    }
  };
});
function gyl() {
  return "";
}
function nmf(e) {
  let t = e.split(`
`),
    n = e;
  if (t.length > fyl) n = t.slice(0, fyl).join(`
`);
  if (rn(n) > myl) n = rae(n, myl);
  return n.trim();
}
function hyl(e, t, {
  verbose: n
}) {
  let r = e.command ?? "",
    o = n ? r : nmf(r);
  return q7n.jsx(qn, {
    children: q7n.jsxs(w, {
      children: [o, o !== r ? "\u2026 \xB7 stopped" : " \xB7 stopped"]
    })
  });
}
var q7n,
  fyl = 2,
  myl = 160;