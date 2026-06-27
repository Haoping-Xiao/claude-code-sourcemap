// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ptr
// matched 2.1.88 source: src/components/ClaudeMdExternalIncludesDialog.tsx
// class=modified  jaccard=0.3086  score=0.4581  fileCov=0.486
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: recordExternalIncludesDecision, ClaudeMdExternalIncludesDialog
// [unwrapped __esm module ptr] deps: utils/jetbrains.ts, components/permissions/PermissionRequestTitle.tsx, utils/debug.ts, utils/modelCost.ts, @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, context/notifications.tsx, utils/tempfile.ts, utils/model/bedrock.ts, utils/agentContext.ts, components/PromptInput/PromptInput.tsx, query.ts, utils/settings/settings.ts, context/modalContext.tsx, components/ThemePicker.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, utils/terminal.ts, components/design-system/Dialog.tsx, components/ModelPicker.tsx
((h1o = R(lt(), 1)), ($Oe = R(rt(), 1)), (Xg = R(se(), 1)));
function recordExternalIncludesDecision(e, t) {
  (pH((n) => ({
    ...n,
    hasClaudeMdExternalIncludesApproved: e,
    hasClaudeMdExternalIncludesWarningShown: true,
  })),
    G(
      e
        ? "tengu_claude_md_external_includes_dialog_accepted"
        : "tengu_claude_md_external_includes_dialog_declined",
      {
        source: $e(t),
      },
    ));
}
function ClaudeMdExternalIncludesDialog(t0) {
  let t = NMl.c(17),
    { onDone: n, isStandaloneDialog: r, externalIncludes: o } = t0,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((s = []), (t[0] = s));
  else s = t[0];
  BMl.useEffect(_temp, s);
  let i;
  if (t[1] !== n)
    ((i = (y) => {
      (recordExternalIncludesDecision(y === "yes", "dialog"), n());
    }),
      (t[1] = n),
      (t[2] = i));
  else i = t[2];
  let a = i,
    l;
  if (t[3] !== a)
    ((l = () => {
      a("no");
    }),
      (t[3] = a),
      (t[4] = l));
  else l = t[4];
  let c = l,
    u = !r,
    d = !r,
    p;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((p = Dfe.jsx(w, {
      children:
        "This project's CLAUDE.md imports files outside the current working directory. Never allow this for third-party repositories.",
    })),
      (t[5] = p));
  else p = t[5];
  let f;
  if (t[6] !== o)
    ((f =
      o &&
      o.length > 0 &&
      Dfe.jsxs(U, {
        flexDirection: "column",
        children: [
          Dfe.jsx(w, {
            dimColor: true,
            children: "External imports:",
          }),
          o.map(QRf),
        ],
      })),
      (t[6] = o),
      (t[7] = f));
  else f = t[7];
  let m;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((m = Dfe.jsxs(w, {
      dimColor: true,
      children: [
        "Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks",
        " ",
        Dfe.jsx(xs, {
          url: "https://code.claude.com/docs/en/security",
        }),
        " ",
      ],
    })),
      (t[8] = m));
  else m = t[8];
  let g;
  if (t[9] !== a)
    ((g = Dfe.jsx(Kl, {
      confirmLabel: "Yes, allow external imports",
      cancelLabel: "No, disable external imports",
      onConfirm: () => a("yes"),
      onCancel: () => a("no"),
    })),
      (t[9] = a),
      (t[10] = g));
  else g = t[10];
  let h;
  if (t[11] !== c || t[12] !== u || t[13] !== d || t[14] !== f || t[15] !== g)
    ((h = Dfe.jsxs(zn, {
      title: "Allow external CLAUDE.md file imports?",
      color: "warning",
      onCancel: c,
      hideBorder: u,
      hideInputGuide: d,
      children: [p, f, m, g],
    })),
      (t[11] = c),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f),
      (t[15] = g),
      (t[16] = h));
  else h = t[16];
  return h;
}
function QRf(e, t) {
  return Dfe.jsxs(
    w,
    {
      dimColor: true,
      children: ["  ", e.path],
    },
    t,
  );
}
function _temp() {
  G("tengu_claude_md_includes_dialog_shown", {});
}
var NMl, BMl, Dfe;
