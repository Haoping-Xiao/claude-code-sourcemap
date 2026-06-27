// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xUc
// matched 2.1.88 source: src/components/FeedbackSurvey/useFeedbackSurvey.tsx
// class=modified (alt of src/components/FeedbackSurvey/useFeedbackSurvey.tsx)  jaccard=0.1646  score=0.7633  fileCov=0.1734
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function kUc() {
  if (!at("tengu_vscode_feedback_survey", false)) return;
  if (Oe.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY) return;
  if (Fte()) return;
  if (!Us("allow_product_feedback")) return;
  let t = at("tengu_feedback_survey_config", afr);
  return {
    ...t,
    probability: Dr().feedbackSurveyRate ?? t.probability,
    lastSurveyShownTime: Dt().feedbackSurveyState?.lastShownTime ?? null,
  };
}
function RUc(e) {
  if (dXo(e)) SLm(e);
}
function dXo(e) {
  if (!Us("allow_product_feedback")) return false;
  if (Fte() || Oe.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY) return false;
  return (
    G("tengu_feedback_survey_event", {
      event_type: uV(e.event_type),
      appearance_id: uV(e.appearance_id),
      response: uV(e.response),
      survey_type: uV(e.survey_type),
      last_assistant_message_id: uV(e.last_assistant_message_id),
      surface: uV(e.surface),
    }),
    Jc("feedback_survey", {
      event_type: uV(e.event_type),
      appearance_id: uV(e.appearance_id),
      response: uV(e.response),
      survey_type: uV(e.survey_type),
      enabled_via_override: y_e(),
    }),
    true
  );
}
function SLm(e) {
  if (e.event_type !== "appeared") return;
  let t = Dt().feedbackSurveyState?.lastShownTime;
  if (t !== void 0 && Date.now() - t < bLm) return;
  gn((n) => ({
    ...n,
    feedbackSurveyState: {
      lastShownTime: Date.now(),
    },
  }));
}
function uV(e) {
  return e == null ? void 0 : String(e);
}
var bLm = 60000;
