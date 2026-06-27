// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module a8t
// matched 2.1.88 source: src/utils/suggestions/skillUsageTracking.ts
// class=modified  jaccard=0.4303  score=1  fileCov=0.4303
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module a8t] deps: fn
((C6n = new Map()), (D8e = new Map()));
function x6n(e) {
  pwo.emit(e);
  let t = Date.now(),
    n = _rl.get(e);
  if (n !== void 0 && t - n < Otf) return;
  (_rl.set(e, t),
    gn((r) => {
      let o = r.skillUsage?.[e];
      return {
        ...r,
        skillUsage: {
          ...r.skillUsage,
          [e]: {
            usageCount: (o?.usageCount ?? 0) + 1,
            lastUsedAt: t,
          },
        },
      };
    }));
}
function P8e(e) {
  let n = Dt().skillUsage?.[e];
  if (!n) return 0;
  let r = (Date.now() - n.lastUsedAt) / 86400000,
    o = Math.pow(0.5, r / 7);
  return n.usageCount * Math.max(o, 0.1);
}
var Otf = 60000,
  pwo,
  _rl;
