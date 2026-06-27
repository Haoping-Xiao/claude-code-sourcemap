// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w5e
// matched 2.1.88 source: src/services/mcp/vscodeSdkMcp.ts
// class=modified  jaccard=0.3211  score=0.4776  fileCov=0.495
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module w5e]
((lup = new RegExp("\x00ESCAPED_STAR\x00", "g")),
  (cup = new RegExp("\x00ESCAPED_BACKSLASH\x00", "g")),
  (uup = /\/(?:\*\*\/)+/g),
  (dup = new RegExp("\x00GLOBSTAR\x00", "g")));
var e4t = 50000,
  $ao = 500000,
  t4t = 4,
  qca = 400000,
  Vca = 200000,
  nP = 50,
  zca = 10000; /* 1e4 */
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
        tengu_vscode_review_upsell: at("tengu_vscode_review_upsell", false),
        tengu_vscode_onboarding: at("tengu_vscode_onboarding", false),
        tengu_quiet_fern: true,
        tengu_vscode_cc_auth: true,
        tengu_slate_ribbon: true,
        tengu_brick_follow: at("tengu_brick_follow", false),
        tengu_vellum_siding: at("tengu_vellum_siding", false),
        tengu_loggia_carousel: t?.refusalFallbackLaneEnabled ?? false,
        tengu_loggia_carousel_config: t?.refusalFallbackSettingToggleVisible ?? false,
        fable5_launch_show: t?.fable5LaunchShow ?? false,
        startup_announcement: t?.startupAnnouncement ?? false,
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
