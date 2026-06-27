// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vDl
// matched 2.1.88 source: src/commands/feedback/feedback.tsx
// class=modified  jaccard=0.1224  score=0.1345  fileCov=0.5758
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var vDl = E(() => {
  _i();
  Ye();
  ps();
  Un();
  ZE();
  tP();
  eKe();
  uo();
  og();
  vy();
  je();
  wr();
  At();
  sa();
  vn();
  zH();
  Jt();
  sr();
  Cc();
  Vl();
  Bs();
  vi();
  f_();
  Ko();
  gm();
  SDl();
  Mg();
  ((FN = R(rt(), 1)),
    (nl = R(se(), 1)),
    (ADl = {
      session: "this session only",
      day: "this session + this project\u2019s other sessions from the last 24 hours",
      week: "this session + this project\u2019s other sessions from the last 7 days",
    }),
    (Mkf = [
      {
        label: "This session only",
        value: "session",
      },
      {
        label: "This session + the last 24 hours",
        value: "day",
      },
      {
        label: "This session + the last 7 days",
        value: "week",
      },
    ]),
    ($er = {
      post: {
        consentAction: "submit",
        consentIntro: "This report will include:",
        consentFooter: "We may use these to debug related issues and improve Claude Code.",
        submitting: "Submitting report\u2026",
      },
      bundle: {
        consentAction: "save",
        consentIntro: "An archive will be saved to disk containing:",
        consentFooter:
          "Nothing leaves this machine until you send the bundle file. Secrets (API keys, tokens, credentials) are redacted before writing.",
        submitting: "Saving bundle\u2026",
      },
      share: {
        consentAction: "share",
        consentIntro: "This shared conversation will include:",
        consentFooter:
          "A shareable link will be created so you can post the conversation for debugging and support.",
        submitting: "Uploading share\u2026",
      },
    }));
  Nkf =
    /^(i can['\u2019]t|i cannot|i['\u2019]m unable|i am unable|i['\u2019]m sorry|i am sorry|i apologize|sorry,)/i;
});
function wDl(e) {
  hOo = e;
}
function CDl() {
  let e = hOo;
  if (((hOo = null), !e || Date.now() - e.setAt > 30000)) return null;
  return e;
}
var hOo = null;
var xDl = {};
_t(xDl, {
  renderFeedbackComponent: () => renderFeedbackComponent,
  call: () => call,
});
function renderFeedbackComponent(e, t, n, r = "", o = {}, s) {
  let i = Zze();
  if (i.kind === "disabled") return (e(i.reason), null);
  let a = CDl() ?? void 0;
  return kDl.jsx(TDl, {
    abortSignal: t,
    messages: n,
    initialDescription: r,
    onDone: e,
    backgroundTasks: o,
    mode: i.kind,
    readFileState: s,
    surveyFeedbackSource: a,
  });
}
async function call(e, t, n) {
  let r = n?.trim() === "public" ? "" : n || "";
  return renderFeedbackComponent(
    e,
    t.abortController.signal,
    t.messages,
    r,
    {
      ...t.taskRegistry.all(),
    },
    t.readFileState,
  );
}
var kDl;
