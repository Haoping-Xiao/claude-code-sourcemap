// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Who
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Who = E(() => {
  vn();
  tA();
  bH();
});
function A4n(e) {
  return oee((t, n, r) => {
    if (!r) return;
    eMp(r, e), G("tengu_refusal_fallback_latch_reset", {
      source: $e(n),
      restored_to_explicit_override: r.restoredToExplicitOverride,
      model_scope: $e(fSe(r.fallbackModel))
    });
  });
}
function eNa(e) {
  return oee((t, n, r) => {
    if (r) e();
  });
}
function eMp(e, t) {
  t(n => {
    let r = e.overrideValue ?? e.forSessionValue ?? e.appStateModel,
      o = sc() && n.fastMode && !rg(r);
    return n.mainLoopModel === e.appStateModel && n.mainLoopModelForSession === e.forSessionValue && !o ? n : {
      ...n,
      mainLoopModel: e.appStateModel,
      mainLoopModelForSession: e.forSessionValue,
      ...(o && {
        fastMode: false
      })
    };
  }), py(e.overrideValue);
}