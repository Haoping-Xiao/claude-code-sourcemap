// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tpr
// matched 2.1.88 source: src/components/permissions/BashPermissionRequest/bashToolUseOptions.tsx
// class=modified  jaccard=0.3174  score=0.5235  fileCov=0.4463
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Tpr] deps: context/notifications.tsx, context/notifications.tsx, components/AutoModeOptInDialog.tsx, utils/markdownConfigLoader.ts
ZAc = R(lt(), 1);
function o_m(e) {
  let { commandWithoutRedirections: t, redirections: n } = vde(e);
  return n.length > 0 ? t : e;
}
function bashToolUseOptions({
  suggestions = [],
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
  let options = [];
  if (l)
    options.push({
      type: "input",
      label: "Yes",
      value: "yes",
      placeholder: "and tell Claude what to do next",
      onChange: r,
      allowEmptySubmitToCancel: true,
    });
  else
    options.push({
      label: "Yes",
      value: "yes",
    });
  if (wut()) {
    let m = suggestions.some(
      (h) =>
        h.type === "addDirectories" ||
        (h.type === "addRules" && h.rules?.some((y) => y.toolName !== Co)),
    );
    if (u !== void 0 && d && !m && suggestions.length > 0)
      options.push({
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
    else if (suggestions.length > 0) {
      let h = Spr(suggestions, Co, o_m);
      if (h)
        options.push({
          label: h,
          value: "yes-apply-suggestions",
        });
    }
    let g = options.some((h) => h.value === "yes-prefix-edited");
  }
  if (p)
    options.push({
      label: Epr,
      description: Apr,
      value: "yes-enable-auto-mode",
    });
  if (c)
    options.push({
      type: "input",
      label: "No",
      value: "no",
      placeholder: "and tell Claude what to do differently",
      onChange: n,
      allowEmptySubmitToCancel: true,
    });
  else
    options.push({
      label: "No",
      value: "no",
    });
  return options;
}
