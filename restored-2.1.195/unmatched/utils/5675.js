// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p0c
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0109  score=0.3575  fileCov=0.0111
// note: nearest: src/utils/sessionStorage.ts (0.0109); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var p0c = E(() => {
  ft();
  GF();
  LQt();
  xar();
  ag();
  Un();
  kt();
  fd();
  je();
  RE();
  At();
  vn();
  bJt();
  Y9();
  _a();
  aR();
  qar();
  IWo();
  l0c();
  c0c = require("crypto"), rvt = require("fs/promises"), u0c = require("path");
});
function f0c(e, t, n) {
  let r = () => {
    try {
      return t(e.getState());
    } catch {
      return !1;
    }
  };
  if (r()) return Promise.resolve(!0);
  return new Promise(o => {
    let s = setTimeout(() => {
        i(), o(!1);
      }, n.timeoutMs),
      i = e.subscribe(() => {
        if (r()) clearTimeout(s), i(), o(!0);
      });
  });
}
function m0c() {
  let e = M2() ?? aj(yr());
  return ovt.join(e, Rt(), "mcp-tasks");
}
function g0c(e) {
  return ovt.join(m0c(), `mcp-task-${e}.meta.json`);
}
async function h0c(e, t) {
  let n = g0c(e);
  await qs().mkdir(ovt.dirname(n)), await qs().write(n, De(t));
}
async function y0c(e) {
  let t = g0c(e);
  try {
    await qs().delete(t);
  } catch (n) {
    if (Vo(n)) return;
    throw n;
  }
}
async function _0c() {
  let e = m0c(),
    t;
  try {
    t = await qs().list(e);
  } catch (r) {
    if (Vo(r)) return [];
    throw r;
  }
  let n = [];
  for (let r of t) {
    if (!r.endsWith(".meta.json")) continue;
    try {
      let o = await qs().read(ovt.join(e, r));
      n.push(Ft(o));
    } catch (o) {
      T(`listMcpTaskMetadata: skipping ${r}: ${String(o)}`);
    }
  }
  return n;
}
var ovt;