// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GMc
// matched 2.1.88 source: src/components/Onboarding.tsx
// class=modified  jaccard=0.2551  score=0.4018  fileCov=0.4112
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: SkippableStep, Onboarding
// [unwrapped __esm module GMc] deps: hooks/useTerminalSize.ts, components/ui/OrderedList.tsx
((FMc = R(lt(), 1)),
  (m7o = R(rt(), 1)),
  (U7e = R(rt(), 1)),
  (amr = R(se(), 1)),
  (UMc = U7e.createContext({
    marker: "",
  })));
jMc.Item = imr;
lmr = jMc;
function Onboarding({ onDone: e }) {
  let [t, n] = MZ.useState(0),
    [r, o] = MZ.useState(false),
    [s] = MZ.useState(() => eS()),
    [i, a] = na();
  MZ.useEffect(() => {
    G("tengu_began_setup", {
      oauthEnabled: s,
    });
  }, [s]);
  function l() {
    if (t < steps.length - 1) {
      let S = t + 1;
      (n(S),
        G("tengu_onboarding_step", {
          oauthEnabled: s,
          stepId: Oo(steps[S]?.id),
        }),
        xe("onboarding_step_complete"));
    } else (xe("onboarding_complete"), e());
  }
  function c(S) {
    (a(S), l());
  }
  let exitState = ig(),
    d = vm.jsx(U, {
      marginX: 1,
      children: vm.jsx(lEt, {
        onThemeSelect: c,
        showIntroText: true,
        helpText: "To change this later, run /theme",
        hideEscToCancel: true,
        skipExitHandling: true,
      }),
    }),
    p = vm.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1,
      children: [
        vm.jsx(w, {
          bold: true,
          children: "Security notes:",
        }),
        vm.jsx(U, {
          flexDirection: "column",
          width: 70,
          children: vm.jsxs(lmr, {
            children: [
              vm.jsxs(lmr.Item, {
                children: [
                  vm.jsx(w, {
                    children: "Claude can make mistakes.",
                  }),
                  vm.jsxs(w, {
                    dimColor: true,
                    wrap: "wrap",
                    children: [
                      "You're responsible for Claude's actions and should always",
                      vm.jsx(HW, {}),
                      "review them, especially when running code.",
                      vm.jsx(HW, {}),
                    ],
                  }),
                ],
              }),
              vm.jsxs(lmr.Item, {
                children: [
                  vm.jsx(w, {
                    children: "Due to prompt injection risks, only use it with code you trust",
                  }),
                  vm.jsx(qL, {
                    url: "https://code.claude.com/docs/en/security",
                  }),
                ],
              }),
            ],
          }),
        }),
        vm.jsx($Mc, {}),
      ],
    }),
    f = vm.jsx(RMc, {
      onSuccess: l,
    }),
    m = MZ.useMemo(() => {
      if (!process.env.ANTHROPIC_API_KEY || nv()) return "";
      let S = KB(process.env.ANTHROPIC_API_KEY);
      if (xZt(S) === "new") return S;
    }, []);
  function g(S) {
    if (S) o(true);
    l();
  }
  let steps = [];
  if (s)
    steps.push({
      id: "preflight",
      component: f,
    });
  if (
    (steps.push({
      id: "theme",
      component: d,
    }),
    m)
  )
    steps.push({
      id: "api-key",
      component: vm.jsx(d7o, {
        customApiKeyTruncated: m,
        onDone: g,
      }),
    });
  if (s)
    steps.push({
      id: "oauth",
      component: vm.jsx(SkippableStep, {
        skip: r,
        onSkip: l,
        children: vm.jsx(U, {
          flexDirection: "column",
          gap: 1,
          paddingLeft: 1,
          children: vm.jsx(Y9e, {
            onDone: l,
            urlOutdent: 1,
          }),
        }),
      }),
    });
  if (
    (steps.push({
      id: "security",
      component: p,
    }),
    PGe())
  )
    steps.push({
      id: "terminal-setup",
      component: vm.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        paddingLeft: 1,
        children: [
          vm.jsx(w, {
            bold: true,
            children: "Use Claude Code's terminal setup?",
          }),
          vm.jsxs(U, {
            flexDirection: "column",
            width: 70,
            gap: 1,
            children: [
              vm.jsxs(w, {
                children: [
                  "For the optimal coding experience, enable the recommended settings",
                  vm.jsx(HW, {}),
                  "for your terminal:",
                  " ",
                  Oe.terminal === "Apple_Terminal"
                    ? "Option+Enter for newlines and visual bell"
                    : "Shift+Enter for newlines",
                ],
              }),
              vm.jsx(Kl, {
                confirmLabel: "Yes, use recommended settings",
                cancelLabel: "No, maybe later with /terminal-setup",
                onConfirm: () =>
                  void $Dn(i)
                    .then(() => xe("onboarding_terminal_setup"))
                    .catch(() =>
                      Le("onboarding_terminal_setup", "onboarding_terminal_setup_failed"),
                    )
                    .finally(l),
                onCancel: l,
              }),
              vm.jsx(w, {
                dimColor: true,
                children: exitState.pending
                  ? vm.jsxs(vm.Fragment, {
                      children: ["Press ", exitState.keyName, " again to exit"],
                    })
                  : vm.jsxs(Tn, {
                      children: [
                        vm.jsx(ht, {
                          chord: "enter",
                          action: "confirm",
                        }),
                        vm.jsx(ht, {
                          chord: "escape",
                          action: "skip",
                        }),
                      ],
                    }),
              }),
            ],
          }),
        ],
      }),
    });
  let y = steps[t],
    b = MZ.useCallback(() => {
      if (t === steps.length - 1) e();
      else l();
    }, [t, e, l]),
    _ = MZ.useCallback(() => {
      l();
    }, [l]);
  return (
    No(
      {
        "confirm:yes": b,
      },
      {
        context: "Confirmation",
        isActive: y?.id === "security",
      },
    ),
    No(
      {
        "confirm:no": _,
      },
      {
        context: "Confirmation",
        isActive: y?.id === "terminal-setup",
      },
    ),
    vm.jsxs(U, {
      flexDirection: "column",
      children: [
        vm.jsx(uNe, {}),
        vm.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            y?.component,
            exitState.pending &&
              vm.jsx(U, {
                padding: 1,
                children: vm.jsxs(w, {
                  dimColor: true,
                  children: ["Press ", exitState.keyName, " again to exit"],
                }),
              }),
          ],
        }),
      ],
    })
  );
}
function SkippableStep(e) {
  let t = WMc.c(4),
    { skip: n, onSkip: r, children: o } = e,
    s,
    i;
  if (t[0] !== r || t[1] !== n)
    ((s = () => {
      if (n) r();
    }),
      (i = [n, r]),
      (t[0] = r),
      (t[1] = n),
      (t[2] = s),
      (t[3] = i));
  else ((s = t[2]), (i = t[3]));
  if ((MZ.useEffect(s, i), n)) return null;
  return o;
}
var WMc, MZ, vm;
