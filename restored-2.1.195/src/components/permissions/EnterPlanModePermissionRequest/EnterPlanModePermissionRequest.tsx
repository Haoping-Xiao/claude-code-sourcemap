// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pHc
// matched 2.1.88 source: src/components/permissions/EnterPlanModePermissionRequest/EnterPlanModePermissionRequest.tsx
// class=modified  jaccard=0.2019  score=0.2982  fileCov=0.3848
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module pHc] deps: keybindings/useShortcutDisplay.ts, components/ManagedSettingsSecurityDialog/utils.ts, hooks/useTerminalSize.ts, utils/claudeInChrome/common.ts
((uHc = R(lt(), 1)), (Ume = R(se(), 1)));
function H_m(e) {
  switch (e) {
    case "yes":
      return {
        behavior: "allow",
        updatedInput: {},
        permissionUpdates: [
          {
            type: "setMode",
            mode: "plan",
            destination: "session",
          },
        ],
      };
    case "no":
      return {
        behavior: "deny",
      };
  }
}
function EnterPlanModePermissionRequest(t0) {
  let t = fHc.c(11),
    { payload: n, answer: r } = t0,
    o = Ht(T_m),
    s;
  if (t[0] !== r || t[1] !== o)
    ((s = (p) => {
      if (p === "yes")
        (G("tengu_plan_enter", {
          entryMethod: We("tool"),
        }),
          Lge(o, "plan"));
      r(H_m(p));
    }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s));
  else s = t[2];
  let i = s,
    a;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((a = x3.jsx(w, {
      children: "Claude wants to enter plan mode to explore and design an implementation approach.",
    })),
      (t[3] = a));
  else a = t[3];
  let l;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((l = x3.jsxs(U, {
      marginTop: 1,
      flexDirection: "column",
      children: [
        x3.jsx(w, {
          dimColor: true,
          children: "In plan mode, Claude will:",
        }),
        x3.jsx(w, {
          dimColor: true,
          children: " \xB7 Explore the codebase thoroughly",
        }),
        x3.jsx(w, {
          dimColor: true,
          children: " \xB7 Identify existing patterns",
        }),
        x3.jsx(w, {
          dimColor: true,
          children: " \xB7 Design an implementation strategy",
        }),
        x3.jsx(w, {
          dimColor: true,
          children: " \xB7 Present a plan for your approval",
        }),
      ],
    })),
      (t[4] = l));
  else l = t[4];
  let c;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((c = x3.jsx(U, {
      marginTop: 1,
      children: x3.jsx(w, {
        dimColor: true,
        children: "No code changes will be made until you approve the plan.",
      }),
    })),
      (t[5] = c));
  else c = t[5];
  let u;
  if (t[6] !== i)
    ((u = x3.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      paddingX: 1,
      children: [
        a,
        l,
        c,
        x3.jsx(U, {
          marginTop: 1,
          children: x3.jsx(Kl, {
            confirmLabel: "Yes, enter plan mode",
            cancelLabel: "No, start implementing now",
            onConfirm: () => i("yes"),
            onCancel: () => i("no"),
          }),
        }),
      ],
    })),
      (t[6] = i),
      (t[7] = u));
  else u = t[7];
  let d;
  if (t[8] !== n.requestSource || t[9] !== u)
    ((d = x3.jsx(Lf, {
      color: "planMode",
      title: "Enter plan mode?",
      requestSource: n.requestSource,
      children: u,
    })),
      (t[8] = n.requestSource),
      (t[9] = u),
      (t[10] = d));
  else d = t[10];
  return d;
}
function T_m(e) {
  return e.toolPermissionContext.mode;
}
var fHc, x3;
