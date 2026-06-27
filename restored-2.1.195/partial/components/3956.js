// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AQa
// matched 2.1.88 source: src/commands/remote-setup/remote-setup.tsx
// class=partial  jaccard=0.0615  score=0.2353  fileCov=0.0769
// note: low-confidence suggestion: src/commands/remote-setup/remote-setup.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var AQa = E(() => {
  Ye();
  ps();
  Cc();
  Bs();
  f_();
  Ko();
  Mg();
  wb();
  vH();
  Z9n();
  _Qa = R(lt(), 1), bQa = require("os"), SQa = require("path"), t8n = R(rt(), 1), B6 = R(se(), 1);
});
function HQa() {
  let {
      goBack: e,
      goNext: t,
      updateWizardData: n,
      wizardData: r
    } = Eu(),
    [o, s] = n8n.useState({
      phase: "checking"
    });
  if (n8n.useEffect(() => {
    let a = false;
    return sQa(r).then(l => {
      if (a) return;
      if (l.status === "ok") n({
        verifiedIdentity: l.identity
      });else n({
        verifiedIdentity: void 0
      });
      s({
        phase: "done",
        result: l
      });
    }), () => {
      a = true;
    };
  }, []), o.phase === "checking") return x$.jsx(Pc, {
    subtitle: "Verifying credentials",
    children: x$.jsx(Vc, {
      message: "Calling Google Cloud\u2026",
      subtitle: "This may take a few seconds."
    })
  });
  let {
    result: i
  } = o;
  switch (i.status) {
    case "ok":
      return x$.jsx(Pc, {
        subtitle: "Verification",
        children: x$.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [x$.jsxs(w, {
            children: [x$.jsx(Hs, {
              status: "success",
              withSpace: true
            }), "Authenticated as ", x$.jsx(w, {
              bold: true,
              children: i.identity
            })]
          }), i.note && x$.jsx(w, {
            dimColor: true,
            children: i.note
          }), x$.jsx(Sr, {
            options: [{
              label: "Continue",
              value: "continue"
            }],
            onChange: () => t(),
            onCancel: e
          })]
        })
      });
    case "error":
      return x$.jsx(Pc, {
        subtitle: "Verification failed",
        color: "error",
        children: x$.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [x$.jsxs(U, {
            flexDirection: "column",
            children: [x$.jsxs(w, {
              children: [x$.jsx(Hs, {
                status: "error",
                withSpace: true
              }), i.error]
            }), i.command && x$.jsxs(w, {
              bold: true,
              color: "suggestion",
              children: ["    ", i.command]
            })]
          }), x$.jsx(Kl, {
            cancelFirst: true,
            focus: "cancel",
            confirmLabel: "Save anyway (skip verification)",
            cancelLabel: "Go back and fix",
            onConfirm: t,
            onCancel: e
          })]
        })
      });
  }
}
var n8n, x$;