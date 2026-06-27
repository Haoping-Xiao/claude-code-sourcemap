// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pRn
// matched 2.1.88 source: src/native-ts/yoga-layout/index.ts
// class=new  jaccard=0.0154  score=0.4152  fileCov=0.0157
// note: nearest: src/native-ts/yoga-layout/index.ts (0.0154); dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module pRn] deps: XYr
u8 = {
  unit: 0,
  value: NaN
}, q_e = {
  unit: 3,
  value: NaN
};
bUd = PFi();
wUd = new Float64Array(0);
tBt = new Int32Array(8), ZYr = new Float64Array(64);
jUd = {
  Config: {
    create: PFi,
    destroy() {}
  },
  Node: {
    create: e => new aRn(e),
    createDefault: () => new aRn(),
    createWithConfig: e => new aRn(e),
    destroy() {}
  }
}, GFi = jUd;
function L0(e, t) {
  if (!("setRawMode" in e) || typeof e.setRawMode !== "function") return;
  try {
    e.setRawMode(t);
  } catch (n) {
    let r = be(n),
      o = on(n);
    if (r.includes("setRawMode failed") || GUd.has(o ?? "")) {
      T(`setRawMode(${t}) failed on revoked tty: ${r}`);
      return;
    }
    throw n;
  }
}
var GUd;