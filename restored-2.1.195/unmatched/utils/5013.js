// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ozl
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.021  score=0.2505  fileCov=0.0225
// note: nearest: node_modules/react/cjs/react.production.js (0.021); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ozl]
Eqf = {
  type: "local-jsx",
  name: "tui",
  description: "Set the terminal UI renderer (default | fullscreen)",
  argumentHint: "[default|fullscreen]",
  load: () => Promise.resolve().then(() => (Mjo(), nzl))
}, rzl = Eqf;
function azl(e) {
  let t = szl.c(4),
    {
      children: n
    } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) r = [], t[0] = r;else r = t[0];
  let o = NAt.useRef(r),
    s;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) s = {
    getDenials: () => o.current,
    recordDenial: l => {
      o.current = [l, ...o.current.slice(0, Aqf - 1)];
    },
    removeDenial: l => {
      o.current = o.current.filter(c => c !== l);
    }
  }, t[1] = s;else s = t[1];
  let i = s,
    a;
  if (t[2] !== n) a = lzl.jsx(izl.Provider, {
    value: i,
    children: n
  }), t[2] = n, t[3] = a;else a = t[3];
  return a;
}
function BAt() {
  return NAt.useContext(izl);
}
var szl,
  NAt,
  lzl,
  izl,
  Aqf = 20;