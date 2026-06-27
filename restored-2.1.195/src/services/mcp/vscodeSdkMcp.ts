// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w5e
// matched 2.1.88 source: src/services/mcp/vscodeSdkMcp.ts
// class=modified  jaccard=0.348  score=0.5319  fileCov=0.5015
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var w5e = E(() => {
  ((lup = new RegExp("\x00ESCAPED_STAR\x00", "g")),
    (cup = new RegExp("\x00ESCAPED_BACKSLASH\x00", "g")),
    (uup = /\/(?:\*\*\/)+/g),
    (dup = new RegExp("\x00GLOBSTAR\x00", "g")));
});
var e4t = 50000,
  $ao = 500000,
  t4t = 4,
  qca = 400000,
  Vca = 200000,
  nP = 50,
  zca = 1e4;
function pup() {
  let e = at("tengu_auto_mode_config", {})?.enabled;
  return e === "enabled" || e === "disabled" || e === "opt-in" ? e : "opt-in";
}
function ELe(e, t, n) {
  return;
}
function Yca(e, t) {
  let n = e.find((r) => r.name === "claude-vscode");
  if (n && n.type === "connected") {
    ((Kca = n),
      n.client.setNotificationHandler(Oao(), async (s) => {
        let { eventName: i, eventData: a } = s.params;
        if (i === "tengu_feedback_survey_event") {
          t?.onFeedbackSurveyEvent?.(a);
          return;
        }
        G(`tengu_vscode_${i}`, a);
      }));
    let r = {
        tengu_vscode_review_upsell: at("tengu_vscode_review_upsell", !1),
        tengu_vscode_onboarding: at("tengu_vscode_onboarding", !1),
        tengu_quiet_fern: !0,
        tengu_vscode_cc_auth: !0,
        tengu_slate_ribbon: !0,
        tengu_brick_follow: at("tengu_brick_follow", !1),
        tengu_vellum_siding: at("tengu_vellum_siding", !1),
        tengu_loggia_carousel: t?.refusalFallbackLaneEnabled ?? !1,
        tengu_loggia_carousel_config: t?.refusalFallbackSettingToggleVisible ?? !1,
        fable5_launch_show: t?.fable5LaunchShow ?? !1,
        startup_announcement: t?.startupAnnouncement ?? !1,
      },
      o = pup();
    ((r.tengu_auto_mode_state = o === "opt-in" ? "enabled" : o),
      n.client
        .notification({
          method: "experiment_gates",
          params: {
            gates: r,
          },
        })
        .catch((s) => {
          T(`[VSCode] Failed to send experiment_gates notification: ${s.message}`);
        }));
  }
}
var Oao,
  Kca = null;
