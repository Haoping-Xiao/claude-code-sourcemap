// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gDe
// matched 2.1.88 source: src/components/IdeOnboardingDialog.tsx
// class=modified  jaccard=0.2806  score=0.3641  fileCov=0.5501
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: hasIdeOnboardingDialogBeenShown, IdeOnboardingDialog
// [unwrapped __esm module gDe] deps: Ye
((txa = R(lt(), 1)), (iFn = R(se(), 1)));
function IdeOnboardingDialog(t0) {
  let t = nxa.c(22),
    { onDone: n, installationStatus: r } = t0;
  dwp();
  let o;
  if (t[0] !== n)
    ((o = {
      "confirm:yes": n,
      "confirm:no": n,
    }),
      (t[0] = n),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((s = {
      context: "Confirmation",
    }),
      (t[2] = s));
  else s = t[2];
  No(o, s);
  let i;
  if (t[3] !== r?.ideType) ((i = r?.ideType ?? Kdo()), (t[3] = r?.ideType), (t[4] = i));
  else i = t[4];
  let a = i,
    l = kre(a),
    c;
  if (t[5] !== a) ((c = yk(a)), (t[5] = a), (t[6] = c));
  else c = t[6];
  let u = c,
    d = r?.installedVersion,
    p = l ? "plugin" : "extension",
    f = Oe.platform === "darwin" ? "Cmd+Option+K" : "Ctrl+Alt+K",
    m;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((m = FI.jsx(w, {
      color: "claude",
      children: "\u273B ",
    })),
      (t[7] = m));
  else m = t[7];
  let g;
  if (t[8] !== u)
    ((g = FI.jsxs(FI.Fragment, {
      children: [
        m,
        FI.jsxs(w, {
          children: ["Welcome to Claude Code for ", u],
        }),
      ],
    })),
      (t[8] = u),
      (t[9] = g));
  else g = t[9];
  let h = d ? `installed ${p} v${d}` : void 0,
    y;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((y = FI.jsx(w, {
      color: "suggestion",
      children: "\u29C9 open files",
    })),
      (t[10] = y));
  else y = t[10];
  let b;
  if (t[11] === Symbol.for("react.memo_cache_sentinel"))
    ((b = FI.jsxs(iE, {
      children: [
        "Claude has context of ",
        y,
        " ",
        "and ",
        FI.jsx(w, {
          color: "suggestion",
          children: "\u29C9 selected lines",
        }),
      ],
    })),
      (t[11] = b));
  else b = t[11];
  let _;
  if (t[12] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = FI.jsxs(iE, {
      children: [
        "Review Claude Code's changes",
        " ",
        FI.jsx(d5, {
          added: 11,
          removed: 22,
        }),
        " in the comfort of your IDE",
      ],
    })),
      (t[12] = _));
  else _ = t[12];
  let S;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((S = FI.jsxs(iE, {
      children: [
        "Cmd+Esc",
        FI.jsx(w, {
          dimColor: true,
          children: " for Quick Launch",
        }),
      ],
    })),
      (t[13] = S));
  else S = t[13];
  let A;
  if (t[14] === Symbol.for("react.memo_cache_sentinel"))
    ((A = FI.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        b,
        _,
        S,
        FI.jsxs(iE, {
          children: [
            f,
            FI.jsx(w, {
              dimColor: true,
              children: " to reference files or lines in your input",
            }),
          ],
        }),
      ],
    })),
      (t[14] = A));
  else A = t[14];
  let v;
  if (t[15] !== n || t[16] !== g || t[17] !== h)
    ((v = FI.jsx(zn, {
      title: g,
      subtitle: h,
      color: "ide",
      onCancel: n,
      hideInputGuide: true,
      children: A,
    })),
      (t[15] = n),
      (t[16] = g),
      (t[17] = h),
      (t[18] = v));
  else v = t[18];
  let C;
  if (t[19] === Symbol.for("react.memo_cache_sentinel"))
    ((C = FI.jsx(U, {
      paddingX: 1,
      children: FI.jsxs(w, {
        dimColor: true,
        italic: true,
        children: [
          "Press ",
          FI.jsx(ht, {
            chord: "enter",
            action: "continue",
          }),
        ],
      }),
    })),
      (t[19] = C));
  else C = t[19];
  let x;
  if (t[20] !== v)
    ((x = FI.jsxs(FI.Fragment, {
      children: [v, C],
    })),
      (t[20] = v),
      (t[21] = x));
  else x = t[21];
  return x;
}
function hasIdeOnboardingDialogBeenShown() {
  let e = Dt(),
    t = h1.terminal || "unknown";
  return e.hasIdeOnboardingBeenShown?.[t] === true;
}
function dwp() {
  if (hasIdeOnboardingDialogBeenShown()) return;
  let e = h1.terminal || "unknown";
  (gn((t) => ({
    ...t,
    hasIdeOnboardingBeenShown: {
      ...t.hasIdeOnboardingBeenShown,
      [e]: true,
    },
  })),
    xe("onboarding_ide_dialog_shown"));
}
var nxa, FI;
