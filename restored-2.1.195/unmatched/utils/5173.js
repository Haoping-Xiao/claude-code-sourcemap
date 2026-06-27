// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _3o
// matched 2.1.88 source: src/utils/config.ts
// class=new  jaccard=0.0078  score=0.2975  fileCov=0.0079
// note: nearest: src/utils/config.ts (0.0078); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _3o = E(() => {
  SC();
  Ye();
  oo();
  er();
  Vl();
  X0();
  HYe = R(rt(), 1), mme = R(se(), 1);
});
function b3o() {
  if (!xC()) return !1;
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
  return Dt().hasUsedRemoteControl === !0 || Lfe();
}
function S3o() {
  if (!xC() || !$ue()) return !1;
  return cZl() && wc("agentPushNotifEnabled", !1).value !== !0 && (Dt().pushNotifUpsellSeenCount ?? 0) < qzf;
}
function Tir() {
  return xC() && $ue() && cZl() && wc("agentPushNotifEnabled", !1).value !== !0;
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
    hasUsedRemoteControl: !0
  });
}
var Wzf = 3,
  qzf = 3,
  aZl = 20;