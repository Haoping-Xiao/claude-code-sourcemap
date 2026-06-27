// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xUt
// matched 2.1.88 source: src/services/analytics/sinkKillswitch.ts
// class=partial  jaccard=0.1064  score=0.214  fileCov=0.1747
// note: low-confidence suggestion: src/services/analytics/sinkKillswitch.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xUt = E(() => {
  Un();
});
function Gh(e) {
  let t = W6d(),
    n = e ? mo(e) : void 0,
    r = n ? VIe(n)?.image_limits : void 0,
    o = r ? {
      maxWidth: r.maxWidth,
      maxHeight: r.maxHeight,
      maxBase64Size: r.maxBase64Size
    } : n === "claude-mythos-5" ? G6d : void 0,
    s = e ? g6i(e, {
      ignore1mTag: !0
    })?.imageLimits ?? o : void 0;
  if (!s) {
    if (t === H8.maxBase64Size) return H8;
    return {
      ...H8,
      maxBase64Size: t,
      targetRawSize: t * 3 / 4
    };
  }
  let i = s.maxBase64Size ?? t;
  return {
    maxWidth: s.maxWidth ?? H8.maxWidth,
    maxHeight: s.maxHeight ?? H8.maxHeight,
    maxBase64Size: i,
    targetRawSize: s.targetRawSize ?? i * 3 / 4
  };
}
function W6d() {
  if (fr() === "firstParty" && _u() && at("tengu_crimson_vector", !1)) return Y9i;
  return H8.maxBase64Size;
}
var G6d;