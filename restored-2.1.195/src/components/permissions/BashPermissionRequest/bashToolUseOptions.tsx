// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tpr
// matched 2.1.88 source: src/components/permissions/BashPermissionRequest/bashToolUseOptions.tsx
// class=modified  jaccard=0.3174  score=0.5235  fileCov=0.4463
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Tpr = E(() => {
  Ed();
  uo();
  Sdr();
  __();
  ZAc = R(lt(), 1);
});
function o_m(e) {
  let { commandWithoutRedirections: t, redirections: n } = vde(e);
  return n.length > 0 ? t : e;
}
function eHc({
  suggestions: e = [],
  decisionReason: t,
  onRejectFeedbackChange: n,
  onAcceptFeedbackChange: r,
  onClassifierDescriptionChange: o,
  classifierDescription: s,
  initialClassifierDescriptionEmpty: i = false,
  existingAllowDescriptions: a = [],
  yesInputMode: l = false,
  noInputMode: c = false,
  editablePrefix: u,
  onEditablePrefixChange: d,
  showEnableAutoModeOption: p = false,
}) {
  let f = [];
  if (l)
    f.push({
      type: "input",
      label: "Yes",
      value: "yes",
      placeholder: "and tell Claude what to do next",
      onChange: r,
      allowEmptySubmitToCancel: true,
    });
  else
    f.push({
      label: "Yes",
      value: "yes",
    });
  if (wut()) {
    let m = e.some(
      (h) =>
        h.type === "addDirectories" ||
        (h.type === "addRules" && h.rules?.some((y) => y.toolName !== Co)),
    );
    if (u !== void 0 && d && !m && e.length > 0)
      f.push({
        type: "input",
        label: "Yes, and don\u2019t ask again for",
        value: "yes-prefix-edited",
        placeholder: "command prefix (e.g., npm run *)",
        initialValue: u,
        onChange: d,
        allowEmptySubmitToCancel: true,
        showLabelWithValue: true,
        labelValueSeparator: ": ",
        resetCursorOnUpdate: true,
      });
    else if (e.length > 0) {
      let h = Spr(e, Co, o_m);
      if (h)
        f.push({
          label: h,
          value: "yes-apply-suggestions",
        });
    }
    let g = f.some((h) => h.value === "yes-prefix-edited");
  }
  if (p)
    f.push({
      label: Epr,
      description: Apr,
      value: "yes-enable-auto-mode",
    });
  if (c)
    f.push({
      type: "input",
      label: "No",
      value: "no",
      placeholder: "and tell Claude what to do differently",
      onChange: n,
      allowEmptySubmitToCancel: true,
    });
  else
    f.push({
      label: "No",
      value: "no",
    });
  return f;
}
