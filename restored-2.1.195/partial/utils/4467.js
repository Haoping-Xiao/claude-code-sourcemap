// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dQn
// matched 2.1.88 source: src/commands/compact/index.ts
// class=partial  jaccard=0.1129  score=0.3624  fileCov=0.1409
// note: low-confidence suggestion: src/commands/compact/index.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dQn = E(() => {
  fp();
  je();
  At();
  sp();
  vn();
  Fh();
  u$();
  dn();
  Un();
  kt();
  ZU();
  xao();
  Eq = new Map(), iPo = new Map(), DKt = new Map(), xze = new Set();
});
function hfe(e, t, n, r) {
  let o = y3e(e);
  if (uQn(n, "post_compact_cleanup", e), o) {
    if (uS.cache.clear?.(), hjt("compact"), OCt(), r === void 0) UCt();
    sQn(), kxa(), pll(t ? qMe(t) : void 0);
  }
  if (o) yTf.resetAutonomousLoopDelivered();
  if (o && t) {
    let s = Gb();
    t(i => {
      if (i.cacheMissAckedAtOutputTokens === s) return i;
      return {
        ...i,
        cacheMissAckedAtOutputTokens: s
      };
    });
  }
  mPo();
}
var yTf;