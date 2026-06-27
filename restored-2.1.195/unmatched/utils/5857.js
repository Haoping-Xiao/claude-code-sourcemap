// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pXo
// matched 2.1.88 source: src/components/FeedbackSurvey/useFeedbackSurvey.tsx
// class=new  jaccard=0.0556  score=0.394  fileCov=0.0609
// note: nearest: src/components/FeedbackSurvey/useFeedbackSurvey.tsx (0.0556); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pXo = E(() => {
  fYo();
  er();
  wr();
  dr();
  aS();
  aW();
  Un();
  kt();
  jc();
});
function LUc(e) {
  let t = e.find(n => n.name === "ccd_session");
  if (!t || t.type !== "connected") return;
  t.client.setNotificationHandler(Oao(), async n => {
    let {
      eventName: r,
      eventData: o
    } = n.params;
    if (!ELm.has(r)) return;
    if (!Us("allow_product_feedback")) return;
    let s = o;
    switch (r) {
      case "tengu_message_rated":
        G(r, {
          message_uuid: uV(s.message_uuid),
          sentiment: uV(s.sentiment),
          surface: uV(s.surface),
          cleared: s.cleared === !0
        });
        break;
      case "tengu_feedback_survey_event":
        dXo(s);
        break;
    }
  });
}
var ELm;