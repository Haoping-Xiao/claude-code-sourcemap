// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B$c
// matched 2.1.88 source: src/components/design-system/Dialog.tsx
// class=modified (alt of src/components/design-system/Dialog.tsx)  jaccard=0.1266  score=0.1679  fileCov=0.3393
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var B$c = E(() => {
  kt();
  Ye();
  DHe();
  er();
  vn();
  vi();
  ((O$c = R(lt(), 1)), (dmr = R(rt(), 1)), (lO = R(se(), 1)));
});
var F$c = {};
_t(F$c, {
  ChromeAutoEnableDialog: () => ChromeAutoEnableDialog,
});
function ChromeAutoEnableDialog(e) {
  let t = U$c.c(16),
    { onDone: n, isDontAskMode: r, isAutoMode: o } = e,
    s = r === void 0 ? false : r,
    i = o === void 0 ? false : o,
    a;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((a = []), (t[0] = a));
  else a = t[0];
  pmr.useEffect(gxm, a);
  let l = pmr.useRef(false),
    c;
  if (t[1] !== n)
    ((c = function (S) {
      if (l.current) return;
      if (
        ((l.current = true),
        gn((A) => ({
          ...A,
          claudeInChromeDefaultEnabled: S,
          ...(S && {
            hasCompletedClaudeInChromeOnboarding: true,
          }),
        })),
        S)
      )
        xe("chrome_auto_enable_prompt");
      else It("chrome_auto_enable_prompt", "declined");
      n(S);
    }),
      (t[1] = n),
      (t[2] = c));
  else c = t[2];
  let u = c,
    d;
  if (t[3] !== u) ((d = () => u(false)), (t[3] = u), (t[4] = d));
  else d = t[4];
  let p;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((p = oie.jsxs(Tn, {
      children: [
        oie.jsx(ht, {
          chord: "enter",
          action: "confirm",
        }),
        oie.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "keep browser tools off",
        }),
      ],
    })),
      (t[5] = p));
  else p = t[5];
  let f;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((f = oie.jsx(w, {
      children:
        "Claude will use your Chrome browser by default \u2014 navigating sites, filling forms, and capturing screenshots in your existing session.",
    })),
      (t[6] = f));
  else f = t[6];
  let m = XGe()
      ? s
        ? "This session is in Don't Ask mode, so browser actions that need approval are skipped rather than prompted."
        : i
          ? "This session is in Auto mode, so an AI classifier approves routine browser actions \u2014 you are only prompted when it is unsure."
          : "Browser actions still go through Claude's regular permission prompts before they run."
      : "Site-level permissions come from the Chrome extension.",
    g;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((g = oie.jsx(w, {
      bold: true,
      color: "permission",
      children: "/chrome",
    })),
      (t[7] = g));
  else g = t[7];
  let h;
  if (t[8] !== m)
    ((h = oie.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        f,
        oie.jsxs(w, {
          dimColor: true,
          children: [m, " ", "Turn browser tools off for future sessions with", " ", g, "."],
        }),
      ],
    })),
      (t[8] = m),
      (t[9] = h));
  else h = t[9];
  let y;
  if (t[10] !== u)
    ((y = oie.jsx(Kl, {
      confirmLabel: "Yes, use my browser",
      cancelLabel: "No, keep browser tools off",
      onConfirm: () => u(true),
      onCancel: () => u(false),
    })),
      (t[10] = u),
      (t[11] = y));
  else y = t[11];
  let b;
  if (t[12] !== h || t[13] !== y || t[14] !== d)
    ((b = oie.jsxs(zn, {
      title: "Claude in Chrome extension detected",
      color: "permission",
      onCancel: d,
      inputGuide: p,
      children: [h, y],
    })),
      (t[12] = h),
      (t[13] = y),
      (t[14] = d),
      (t[15] = b));
  else b = t[15];
  return b;
}
function gxm() {
  G("tengu_chrome_auto_enable_prompt_shown", {});
}
var U$c, pmr, oie;
