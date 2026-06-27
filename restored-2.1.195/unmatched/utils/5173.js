// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _3o
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0026  score=0.1665  fileCov=0.0026
// note: nearest: src/components/Settings/Config.tsx (0.0026); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _3o] deps: SC, Ye, oo, er, Vl, X0
HYe = R(rt(), 1), mme = R(se(), 1);
function b3o() {
  if (!xC()) return false;
  let e = Dt();
  return !e.hasUsedRemoteControl && !Lfe() && (e.remoteControlUpsellSeenCount ?? 0) < Wzf;
}
function lZl() {
  let e = (Dt().remoteControlUpsellSeenCount ?? 0) + 1;
  gn(t => (t.remoteControlUpsellSeenCount ?? 0) >= e ? t : {
    ...t,
    remoteControlUpsellSeenCount: e
  }), xe("tips_rc_upsell_show");
}
function cZl() {
  return Dt().hasUsedRemoteControl === true || Lfe();
}
function S3o() {
  if (!xC() || !$ue()) return false;
  return cZl() && wc("agentPushNotifEnabled", false).value !== true && (Dt().pushNotifUpsellSeenCount ?? 0) < qzf;
}
function Tir() {
  return xC() && $ue() && cZl() && wc("agentPushNotifEnabled", false).value !== true;
}
function uZl() {
  let e = (Dt().pushNotifUpsellSeenCount ?? 0) + 1;
  gn(t => (t.pushNotifUpsellSeenCount ?? 0) >= e ? t : {
    ...t,
    pushNotifUpsellSeenCount: e
  }), xe("tips_push_upsell_show");
}
function vir() {
  if (Dt().hasUsedRemoteControl) return;
  gn(e => e.hasUsedRemoteControl ? e : {
    ...e,
    hasUsedRemoteControl: true
  });
}
var Wzf = 3,
  qzf = 3,
  aZl = 20;