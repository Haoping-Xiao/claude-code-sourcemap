// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nKo
// matched 2.1.88 source: src/components/permissions/PowerShellPermissionRequest/powershellToolUseOptions.tsx
// class=modified  jaccard=0.4715  score=0.8381  fileCov=0.5187
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var nKo = E(() => {
  ft();
  X0();
  dtn();
  WTe();
  Tpr();
  Ye();
  Du();
  sr();
  ((CHc = R(lt(), 1)), (b2 = R(se(), 1)));
});
function xHc({
  suggestions: e = [],
  onRejectFeedbackChange: t,
  onAcceptFeedbackChange: n,
  yesInputMode: r = !1,
  noInputMode: o = !1,
  editablePrefix: s,
  onEditablePrefixChange: i,
}) {
  let a = [];
  if (r)
    a.push({
      type: "input",
      label: "Yes",
      value: "yes",
      placeholder: "and tell Claude what to do next",
      onChange: n,
      allowEmptySubmitToCancel: !0,
    });
  else
    a.push({
      label: "Yes",
      value: "yes",
    });
  if (wut() && e.length > 0) {
    let l = e.some(
      (c) =>
        c.type === "addDirectories" ||
        (c.type === "addRules" && c.rules?.some((u) => u.toolName !== Ss)),
    );
    if (s !== void 0 && i && !l)
      a.push({
        type: "input",
        label: "Yes, and don\u2019t ask again for",
        value: "yes-prefix-edited",
        placeholder: "command prefix (e.g., Get-Process *)",
        initialValue: s,
        onChange: i,
        allowEmptySubmitToCancel: !0,
        showLabelWithValue: !0,
        labelValueSeparator: ": ",
        resetCursorOnUpdate: !0,
      });
    else {
      let c = Spr(e, Ss);
      if (c)
        a.push({
          label: c,
          value: "yes-apply-suggestions",
        });
    }
  }
  if (o)
    a.push({
      type: "input",
      label: "No",
      value: "no",
      placeholder: "and tell Claude what to do differently",
      onChange: t,
      allowEmptySubmitToCancel: !0,
    });
  else
    a.push({
      label: "No",
      value: "no",
    });
  return a;
}
