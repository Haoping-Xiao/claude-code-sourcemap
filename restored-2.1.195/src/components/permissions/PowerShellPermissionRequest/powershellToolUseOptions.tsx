// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nKo
// matched 2.1.88 source: src/components/permissions/PowerShellPermissionRequest/powershellToolUseOptions.tsx
// class=modified  jaccard=0.5255  score=0.7187  fileCov=0.6616
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nKo] deps: ft, X0, dtn, WTe, Tpr, Ye, Du, sr
((CHc = R(lt(), 1)), (b2 = R(se(), 1)));
function powershellToolUseOptions({
  suggestions: e = [],
  onRejectFeedbackChange: t,
  onAcceptFeedbackChange: n,
  yesInputMode: r = false,
  noInputMode: o = false,
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
      allowEmptySubmitToCancel: true,
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
        allowEmptySubmitToCancel: true,
        showLabelWithValue: true,
        labelValueSeparator: ": ",
        resetCursorOnUpdate: true,
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
      allowEmptySubmitToCancel: true,
    });
  else
    a.push({
      label: "No",
      value: "no",
    });
  return a;
}
