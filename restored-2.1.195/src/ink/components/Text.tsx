// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t0e
// matched 2.1.88 source: src/ink/components/Text.tsx
// class=modified  jaccard=0.424  score=0.5884  fileCov=0.6027
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var t0e = E(() => {
  jit();
  Tc();
  one();
  bBt();
  m0();
  Z4d = `\x1B]8;;${$M}`;
});
function eLn(e, t, n) {
  let r = w1(e, t, n);
  while (rn(r) > n - t && n > t) (n--, (r = w1(e, t, n)));
  return r;
}
function t3d(e, t, n) {
  if (t < 1) return "";
  let r = rn(e);
  if (r <= t) return e;
  if (t === 1) return ZRn;
  if (n === "start") return ZRn + eLn(e, r - t + 1, r);
  if (n === "middle") {
    let o = Math.floor(t / 2);
    return eLn(e, 0, o) + ZRn + eLn(e, r - (t - o) + 1, r);
  }
  return eLn(e, 0, t - 1) + ZRn;
}
function C1(e, t, n = "wrap") {
  if (n === "wrap" || n === "wrap-stream")
    return SB(e, t, {
      trim: false,
      hard: true,
    });
  if (n === "wrap-trim")
    return SB(e, t, {
      trim: true,
      hard: true,
    });
  if (n === "end" || n === "middle" || n.startsWith("truncate")) {
    let r = "end";
    if (n === "truncate-middle" || n === "middle") r = "middle";
    if (n === "truncate-start") r = "start";
    return t3d(e, t, r);
  }
  return e;
}
var ZRn = "\u2026";
