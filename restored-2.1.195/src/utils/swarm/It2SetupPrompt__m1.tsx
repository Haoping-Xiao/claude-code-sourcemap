// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AQa
// matched 2.1.88 source: src/utils/swarm/It2SetupPrompt.tsx
// class=modified (alt of src/utils/swarm/It2SetupPrompt.tsx)  jaccard=0.0453  score=0.1282  fileCov=0.0654
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module AQa] deps: hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, context/modalContext.tsx, components/CustomSelect/select.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, components/ScrollKeybindingHandler.tsx, @ant/computer-use-mcp/src/toolCalls.ts, vH, components/agents/new-agent-creation/wizard-steps/MethodStep.tsx
((_Qa = R(lt(), 1)),
  (bQa = require("os")),
  (SQa = require("path")),
  (t8n = R(rt(), 1)),
  (B6 = R(se(), 1)));
function It2SetupPrompt() {
  let { goBack: e, goNext: t, updateWizardData: n, wizardData: r } = Eu(),
    [o, s] = n8n.useState({
      phase: "checking",
    });
  if (
    (n8n.useEffect(() => {
      let a = false;
      return (
        sQa(r).then((l) => {
          if (a) return;
          if (l.status === "ok")
            n({
              verifiedIdentity: l.identity,
            });
          else
            n({
              verifiedIdentity: void 0,
            });
          s({
            phase: "done",
            result: l,
          });
        }),
        () => {
          a = true;
        }
      );
    }, []),
    o.phase === "checking")
  )
    return x$.jsx(Pc, {
      subtitle: "Verifying credentials",
      children: x$.jsx(Vc, {
        message: "Calling Google Cloud\u2026",
        subtitle: "This may take a few seconds.",
      }),
    });
  let { result: i } = o;
  switch (i.status) {
    case "ok":
      return x$.jsx(Pc, {
        subtitle: "Verification",
        children: x$.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [
            x$.jsxs(w, {
              children: [
                x$.jsx(Hs, {
                  status: "success",
                  withSpace: true,
                }),
                "Authenticated as ",
                x$.jsx(w, {
                  bold: true,
                  children: i.identity,
                }),
              ],
            }),
            i.note &&
              x$.jsx(w, {
                dimColor: true,
                children: i.note,
              }),
            x$.jsx(Sr, {
              options: [
                {
                  label: "Continue",
                  value: "continue",
                },
              ],
              onChange: () => t(),
              onCancel: e,
            }),
          ],
        }),
      });
    case "error":
      return x$.jsx(Pc, {
        subtitle: "Verification failed",
        color: "error",
        children: x$.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [
            x$.jsxs(U, {
              flexDirection: "column",
              children: [
                x$.jsxs(w, {
                  children: [
                    x$.jsx(Hs, {
                      status: "error",
                      withSpace: true,
                    }),
                    i.error,
                  ],
                }),
                i.command &&
                  x$.jsxs(w, {
                    bold: true,
                    color: "suggestion",
                    children: ["    ", i.command],
                  }),
              ],
            }),
            x$.jsx(Kl, {
              cancelFirst: true,
              focus: "cancel",
              confirmLabel: "Save anyway (skip verification)",
              cancelLabel: "Go back and fix",
              onConfirm: t,
              onCancel: e,
            }),
          ],
        }),
      });
  }
}
var n8n, x$;
