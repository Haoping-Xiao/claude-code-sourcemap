// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WJa
// matched 2.1.88 source: src/commands/remote-setup/remote-setup.tsx
// class=new  jaccard=0.0554  score=0.1657  fileCov=0.0769
// note: nearest: src/commands/remote-setup/remote-setup.tsx (0.0554); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WJa = E(() => {
  Ye();
  ps();
  Cc();
  Bs();
  f_();
  Ko();
  Mg();
  wb();
  vH();
  jJa = R(lt(), 1), K9n = R(rt(), 1), O6 = R(se(), 1);
});
function qJa() {
  let {
      goBack: e,
      goNext: t,
      updateWizardData: n,
      wizardData: r
    } = Eu(),
    [o, s] = Y9n.useState({
      phase: "checking"
    });
  if (Y9n.useEffect(() => {
    let a = !1;
    return xJa(r).then(l => {
      if (a) return;
      if (l.status === "ok") n({
        verifiedIdentity: l.identity,
        discoveredProfiles: l.profiles
      });else n({
        verifiedIdentity: void 0,
        discoveredProfiles: void 0
      });
      s({
        phase: "done",
        result: l
      });
    }), () => {
      a = !0;
    };
  }, []), o.phase === "checking") return I$.jsx(Pc, {
    subtitle: "Verifying credentials",
    children: I$.jsx(Vc, {
      message: r.authMethod === "bearer" ? "Sending a test request to Bedrock\u2026" : "Calling AWS STS and Bedrock\u2026",
      subtitle: "This may take a few seconds."
    })
  });
  let {
    result: i
  } = o;
  switch (i.status) {
    case "ok":
      return I$.jsx(Pc, {
        subtitle: "Verification",
        children: I$.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [I$.jsxs(w, {
            children: [I$.jsx(Hs, {
              status: "success",
              withSpace: !0
            }), "Authenticated as ", I$.jsx(w, {
              bold: !0,
              children: i.identity
            })]
          }), I$.jsx(w, {
            dimColor: !0,
            children: i.note ?? (i.profiles.length > 0 ? `Found ${i.profiles.length} Anthropic inference ${bn(i.profiles.length, "profile")} in this region.` : "No Anthropic inference profiles found in this region. You may still proceed \u2014 model defaults will use the built-in IDs.")
          }), I$.jsx(Sr, {
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
      return I$.jsx(Pc, {
        subtitle: "Verification failed",
        color: "error",
        children: I$.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [I$.jsxs(U, {
            flexDirection: "column",
            children: [I$.jsxs(w, {
              children: [I$.jsx(Hs, {
                status: "error",
                withSpace: !0
              }), i.error]
            }), i.command && I$.jsxs(w, {
              bold: !0,
              color: "suggestion",
              children: ["    ", i.command]
            })]
          }), I$.jsx(Kl, {
            cancelFirst: !0,
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
var Y9n, I$;