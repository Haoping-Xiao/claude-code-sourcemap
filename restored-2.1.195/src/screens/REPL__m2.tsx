// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wRc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=modified (alt of src/screens/REPL.tsx)  jaccard=0.0073  score=0.2039  fileCov=0.0076
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module wRc] deps: utils/debug.ts, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, main.tsx, components/ConfigurableShortcutHint.tsx, components/FeedbackSurvey/submitTranscriptShare.ts, components/tasks/RemoteSessionDetailDialog.tsx, components/FeedbackSurvey/TranscriptSharePrompt.tsx, components/FeedbackSurvey/FeedbackSurvey.tsx, components/FeedbackSurvey/FeedbackSurveyView.tsx
((_Yo = R(lt(), 1)), (vRc = R(rt(), 1)), ($C = R(se(), 1)));
_wm = {
  bad: "Bad",
  fine: "Fine",
  good: "Good",
  not_sure: "Unsure",
};
Ewm = {
  good: "tell us what went well",
  bad: "tell us what went wrong",
  fine: "tell us more",
  not_sure: "tell us more",
};
function gfr(e) {
  if (e.postCompact !== "closed") return "postCompact";
  if (e.longContext !== "closed") return "longContext";
  if (e.memory !== "closed") return "memory";
  if (e.feedback !== "closed") return "feedback";
  if (e.frustration !== "closed") return "frustration";
  return null;
}
function REPL(e) {
  let t = CRc.c(47),
    {
      postCompactSurvey: n,
      longContextSurvey: r,
      memorySurvey: o,
      feedbackSurvey: s,
      frustrationDetection: i,
      setInputValue: a,
      handleSurveyRequestFeedback: l,
    } = e,
    c = jQn();
  switch (
    gfr({
      postCompact: n.state,
      longContext: r.state,
      memory: o.state,
      feedback: s.state,
      frustration: i.state,
    })
  ) {
    case "postCompact": {
      let d;
      if (
        t[0] !== l ||
        t[1] !== c ||
        t[2] !== n.appearanceId ||
        t[3] !== n.handleSelect ||
        t[4] !== n.handleUndo ||
        t[5] !== n.lastResponse ||
        t[6] !== n.state ||
        t[7] !== a
      )
        ((d = uvt.jsx(cvt, {
          state: n.state,
          lastResponse: n.lastResponse,
          handleSelect: n.handleSelect,
          handleUndo: n.handleUndo,
          inputValue: c,
          setInputValue: a,
          onRequestFeedback: l,
          appearanceId: n.appearanceId,
          surveyType: "post_compact",
        })),
          (t[0] = l),
          (t[1] = c),
          (t[2] = n.appearanceId),
          (t[3] = n.handleSelect),
          (t[4] = n.handleUndo),
          (t[5] = n.lastResponse),
          (t[6] = n.state),
          (t[7] = a),
          (t[8] = d));
      else d = t[8];
      return d;
    }
    case "longContext": {
      let d;
      if (
        t[9] !== l ||
        t[10] !== c ||
        t[11] !== r.appearanceId ||
        t[12] !== r.handleSelect ||
        t[13] !== r.handleUndo ||
        t[14] !== r.lastResponse ||
        t[15] !== r.question ||
        t[16] !== r.state ||
        t[17] !== a
      )
        ((d = uvt.jsx(cvt, {
          state: r.state,
          lastResponse: r.lastResponse,
          handleSelect: r.handleSelect,
          handleUndo: r.handleUndo,
          inputValue: c,
          setInputValue: a,
          onRequestFeedback: l,
          appearanceId: r.appearanceId,
          surveyType: "long_context",
          message: r.question,
        })),
          (t[9] = l),
          (t[10] = c),
          (t[11] = r.appearanceId),
          (t[12] = r.handleSelect),
          (t[13] = r.handleUndo),
          (t[14] = r.lastResponse),
          (t[15] = r.question),
          (t[16] = r.state),
          (t[17] = a),
          (t[18] = d));
      else d = t[18];
      return d;
    }
    case "memory": {
      let d = o.evaluation ?? void 0,
        p;
      if (
        t[19] !== l ||
        t[20] !== c ||
        t[21] !== o.appearanceId ||
        t[22] !== o.handleSelect ||
        t[23] !== o.handleTranscriptSelect ||
        t[24] !== o.handleUndo ||
        t[25] !== o.lastResponse ||
        t[26] !== o.state ||
        t[27] !== a ||
        t[28] !== d
      )
        ((p = uvt.jsx(cvt, {
          state: o.state,
          lastResponse: o.lastResponse,
          handleSelect: o.handleSelect,
          handleUndo: o.handleUndo,
          handleTranscriptSelect: o.handleTranscriptSelect,
          inputValue: c,
          setInputValue: a,
          onRequestFeedback: l,
          appearanceId: o.appearanceId,
          surveyType: "memory",
          message: "How well did Claude use its memory? (optional)",
          memoryEvaluation: d,
          showNotSure: true,
        })),
          (t[19] = l),
          (t[20] = c),
          (t[21] = o.appearanceId),
          (t[22] = o.handleSelect),
          (t[23] = o.handleTranscriptSelect),
          (t[24] = o.handleUndo),
          (t[25] = o.lastResponse),
          (t[26] = o.state),
          (t[27] = a),
          (t[28] = d),
          (t[29] = p));
      else p = t[29];
      return p;
    }
    case "feedback": {
      let d;
      if (
        t[30] !== s.appearanceId ||
        t[31] !== s.handleSelect ||
        t[32] !== s.handleTranscriptSelect ||
        t[33] !== s.handleUndo ||
        t[34] !== s.lastResponse ||
        t[35] !== s.state ||
        t[36] !== s.transcriptBundlePath ||
        t[37] !== l ||
        t[38] !== c ||
        t[39] !== a
      )
        ((d = uvt.jsx(cvt, {
          state: s.state,
          lastResponse: s.lastResponse,
          handleSelect: s.handleSelect,
          handleUndo: s.handleUndo,
          handleTranscriptSelect: s.handleTranscriptSelect,
          transcriptBundlePath: s.transcriptBundlePath,
          inputValue: c,
          setInputValue: a,
          onRequestFeedback: l,
          appearanceId: s.appearanceId,
          surveyType: "session",
        })),
          (t[30] = s.appearanceId),
          (t[31] = s.handleSelect),
          (t[32] = s.handleTranscriptSelect),
          (t[33] = s.handleUndo),
          (t[34] = s.lastResponse),
          (t[35] = s.state),
          (t[36] = s.transcriptBundlePath),
          (t[37] = l),
          (t[38] = c),
          (t[39] = a),
          (t[40] = d));
      else d = t[40];
      return d;
    }
    case "frustration": {
      let d;
      if (
        t[41] !== i.handleTranscriptSelect ||
        t[42] !== i.state ||
        t[43] !== i.transcriptBundlePath ||
        t[44] !== c ||
        t[45] !== a
      )
        ((d = uvt.jsx(cvt, {
          state: i.state,
          lastResponse: null,
          handleSelect: Twm,
          handleUndo: Hwm,
          handleTranscriptSelect: i.handleTranscriptSelect,
          transcriptBundlePath: i.transcriptBundlePath,
          inputValue: c,
          setInputValue: a,
        })),
          (t[41] = i.handleTranscriptSelect),
          (t[42] = i.state),
          (t[43] = i.transcriptBundlePath),
          (t[44] = c),
          (t[45] = a),
          (t[46] = d));
      else d = t[46];
      return d;
    }
    case null:
      return null;
    default:
      return null;
  }
}
function Hwm() {}
function Twm() {}
var CRc, uvt;
