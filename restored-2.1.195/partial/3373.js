// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lEe
// matched 2.1.88 source: src/components/shell/ShellTimeDisplay.tsx
// class=partial  jaccard=0.2355  score=0.4801  fileCov=0.3161
// note: low-confidence suggestion: src/components/shell/ShellTimeDisplay.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lEe = E(() => {
  eUt();
  Ye();
  d4t();
  ijn = R(rt(), 1), _Ma = R(se(), 1);
});
function Vqe(e) {
  let t = bMa.c(10),
    {
      elapsedTimeSeconds: n,
      timeoutMs: r
    } = e;
  if (n === void 0 && !r) return null;
  let o;
  if (t[0] !== r) o = r ? Yi(r, {
    hideTrailingZeros: !0
  }) : void 0, t[0] = r, t[1] = o;else o = t[1];
  let s = o;
  if (n === void 0) {
    let d = `(timeout ${s})`,
      p;
    if (t[2] !== d) p = ajn.jsx(w, {
      dimColor: !0,
      children: d
    }), t[2] = d, t[3] = p;else p = t[3];
    return p;
  }
  let i = n * 1000,
    a;
  if (t[4] !== i) a = Yi(i), t[4] = i, t[5] = a;else a = t[5];
  let l = a;
  if (s) {
    let d = `(${l} \xB7 timeout ${s})`,
      p;
    if (t[6] !== d) p = ajn.jsx(w, {
      dimColor: !0,
      children: d
    }), t[6] = d, t[7] = p;else p = t[7];
    return p;
  }
  let c = `(${l})`,
    u;
  if (t[8] !== c) u = ajn.jsx(w, {
    dimColor: !0,
    children: c
  }), t[8] = c, t[9] = u;else u = t[9];
  return u;
}
var bMa, ajn;