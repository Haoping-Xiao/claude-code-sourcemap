// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TVt
// matched 2.1.88 source: src/commands/plugin/PluginOptionsDialog.tsx
// class=partial  jaccard=0.0683  score=0.209  fileCov=0.092
// note: low-confidence suggestion: src/commands/plugin/PluginOptionsDialog.tsx; dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TVt] deps: @xmldom/xmldom/lib/entities.js, marked/lib/marked.esm.js, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, components/ScrollKeybindingHandler.tsx, components/CustomSelect/select.tsx, components/design-system/Dialog.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx
yHo = R(lt(), 1), hHo = R(rt(), 1), z_ = R(se(), 1);
function PluginOptionsDialog() {
  let e = rXa.c(16),
    {
      goBack: t,
      goNext: n,
      updateWizardData: r,
      wizardData: o,
      title: s
    } = Eu(),
    i = o.accessKeyId ?? "",
    a = o.secretAccessKey ?? "",
    l = o.sessionToken ?? "",
    c;
  if (e[0] !== i || e[1] !== a || e[2] !== l) c = {
    accessKeyId: i,
    secretAccessKey: a,
    sessionToken: l
  }, e[0] = i, e[1] = a, e[2] = l, e[3] = c;else c = e[3];
  let [u, d] = oXa.useState(c),
    p;
  if (e[4] !== n || e[5] !== r || e[6] !== u.accessKeyId || e[7] !== u.secretAccessKey || e[8] !== u.sessionToken) p = () => {
    r({
      accessKeyId: u.accessKeyId.trim(),
      secretAccessKey: u.secretAccessKey.trim(),
      sessionToken: u.sessionToken.trim() || void 0
    }), n();
  }, e[4] = n, e[5] = r, e[6] = u.accessKeyId, e[7] = u.secretAccessKey, e[8] = u.sessionToken, e[9] = p;else p = e[9];
  let f = p,
    m = s ?? "Set up AWS Bedrock",
    g;
  if (e[10] === Symbol.for("react.memo_cache_sentinel")) g = (y, b) => d(_ => ({
    ..._,
    [y]: b
  })), e[10] = g;else g = e[10];
  let h;
  if (e[11] !== t || e[12] !== f || e[13] !== m || e[14] !== u) h = iXa.jsx(qPe, {
    title: m,
    subtitle: "AWS access keys",
    fields: P7p,
    values: u,
    onChange: g,
    onSubmit: f,
    onCancel: t,
    submitLabel: "Continue"
  }), e[11] = t, e[12] = f, e[13] = m, e[14] = u, e[15] = h;else h = e[15];
  return h;
}
var rXa, oXa, iXa, P7p;