// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E9l
// matched 2.1.88 source: src/commands/review/ultrareviewCommand.tsx
// class=modified  jaccard=0.125  score=0.1941  fileCov=0.2601
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module E9l] deps: keybindings/useShortcutDisplay.ts, components/design-system/Dialog.tsx, components/Spinner/SpinnerGlyph.tsx, components/Spinner/useShimmerAnimation.ts, components/GlobalSearchDialog.tsx, components/CustomSelect/use-multi-select-state.ts, highlight.js/lib/languages/reasonml.js, hooks/useTerminalSize.ts, utils/ultraplan/ccrSession.ts, utils/config.ts, components/TextInput.tsx, commands/ultraplan.tsx, utils/background/remote/remoteSession.ts
((nsr = R(lt(), 1)), (nme = R(rt(), 1)), (Db = R(se(), 1)));
function xWf(e) {
  return e.map((t) => (t.type === "text" ? t.text : "")).filter(Boolean).join(`
`);
}
async function kWf(e, t, n, r, o, s) {
  let i = await Qor(e, t, r, {
    applyFixesOnComplete: o,
  });
  if (s?.aborted) return;
  if (i)
    n(xWf(i.blocks), {
      shouldQuery: true,
      metaMessages: i.launched
        ? [
            `The output above is already visible to the user. Briefly acknowledge it without repeating the target, URL, or billing note. Findings will arrive via task-notification.${o ? " The user passed --fix: when the findings arrive, apply them to the local working tree." : ""}`,
          ]
        : void 0,
    });
  else
    n(
      "Ultrareview failed to launch the cloud session. Check that this is a GitHub repo and try again.",
      {
        display: "system",
      },
    );
}
var H9l,
  call = async (onDone, context, args) => {
    let r = dW("allow_remote_sessions", "Cloud sessions", "are");
    if (r)
      return (
        onDone(r, {
          display: "system",
        }),
        null
      );
    let { scopeArgs: o, applyFixes: s } = G2o(args),
      i = await Xor(o);
    if (!i.ok)
      return (
        onDone(i.error, {
          display: "system",
        }),
        null
      );
    let a = i.scope,
      gate = await Jor();
    switch (gate.kind) {
      case "blocked": {
        G("tengu_review_overage_blocked", {
          reason: gate.reason,
        });
        let c = gate.actionUrl
            ? `
  \u2192 ${gate.actionUrl}`
            : "",
          u =
            gate.actionUrl?.includes("/admin-settings/") && Wyt() && !eH()
              ? `
  Run /usage-credits to request this from your admin.`
              : "";
        return (
          onDone(`${gate.message}${c}${u}`, {
            display: "system",
          }),
          null
        );
      }
      case "needs-confirm":
      case "proceed":
        if (gate.kind === "needs-confirm") G("tengu_review_overage_dialog_shown", {});
        return H9l.jsx(S9l, {
          subtitle: gate.kind === "needs-confirm" ? nQ() : gate.billingNote || null,
          body: gate.kind === "needs-confirm" ? gate.body : void 0,
          scope: a,
          onProceed: async (c) => {
            if (
              (await kWf(a, context, onDone, gate.billingNote, s, c),
              !c.aborted && gate.kind === "needs-confirm")
            )
              Yor();
          },
          onCancel: () =>
            onDone("Ultrareview cancelled.", {
              display: "system",
            }),
        });
    }
  };
