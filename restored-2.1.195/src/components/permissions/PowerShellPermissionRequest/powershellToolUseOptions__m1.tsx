// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tpr
// matched 2.1.88 source: src/components/permissions/PowerShellPermissionRequest/powershellToolUseOptions.tsx
// class=modified (alt of src/components/permissions/PowerShellPermissionRequest/powershellToolUseOptions.tsx)  jaccard=0.4321  score=0.7213  fileCov=0.5187
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
  initialClassifierDescriptionEmpty: i = !1,
  existingAllowDescriptions: a = [],
  yesInputMode: l = !1,
  noInputMode: c = !1,
  editablePrefix: u,
  onEditablePrefixChange: d,
  showEnableAutoModeOption: p = !1,
}) {
  let f = [];
  if (l)
    f.push({
      type: "input",
      label: "Yes",
      value: "yes",
      placeholder: "and tell Claude what to do next",
      onChange: r,
      allowEmptySubmitToCancel: !0,
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
        allowEmptySubmitToCancel: !0,
        showLabelWithValue: !0,
        labelValueSeparator: ": ",
        resetCursorOnUpdate: !0,
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
      allowEmptySubmitToCancel: !0,
    });
  else
    f.push({
      label: "No",
      value: "no",
    });
  return f;
}
