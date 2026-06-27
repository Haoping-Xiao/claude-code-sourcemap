// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $$c
// matched 2.1.88 source: src/components/ClaudeInChromeOnboarding.tsx
// class=modified  jaccard=0.2598  score=0.3998  fileCov=0.4258
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var $$c = E(() => {
  Ye();
  Yp();
  Fy();
  vi();
  ((P$c = R(lt(), 1)), (GNe = R(se(), 1)));
});
var N$c = {};
_t(N$c, {
  ClaudeInChromeOnboarding: () => ClaudeInChromeOnboarding,
});
function ClaudeInChromeOnboarding(e) {
  let t = O$c.c(21),
    { onDone: n } = e,
    [r, o] = dmr.useState(false),
    s,
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((s = () => {
      (G("tengu_claude_in_chrome_onboarding_shown", {}), Kfe().then(o).catch(ke), gn(fxm));
    }),
      (i = []),
      (t[0] = s),
      (t[1] = i));
  else ((s = t[0]), (i = t[1]));
  dmr.useEffect(s, i);
  let a;
  if (t[2] !== n)
    ((a = (h) => {
      if (h.key === "return" && !h.ctrl && !h.meta) (h.preventDefault(), n());
    }),
      (t[2] = n),
      (t[3] = a));
  else a = t[3];
  let l;
  if (t[4] !== r)
    ((l =
      !r &&
      lO.jsxs(lO.Fragment, {
        children: [
          lO.jsx(HW, {}),
          lO.jsx(HW, {}),
          "Requires the Chrome extension. Get started at",
          " ",
          lO.jsx(xs, {
            url: uxm,
          }),
        ],
      })),
      (t[4] = r),
      (t[5] = l));
  else l = t[5];
  let c;
  if (t[6] !== l)
    ((c = lO.jsxs(w, {
      children: [
        "Claude in Chrome works with the Chrome extension to let you control your browser directly from Claude Code. You can navigate websites, fill forms, capture screenshots, record GIFs, and debug with console logs and network requests.",
        l,
      ],
    })),
      (t[6] = l),
      (t[7] = c));
  else c = t[7];
  let u;
  if (t[8] !== r)
    ((u =
      r &&
      lO.jsxs(lO.Fragment, {
        children: [
          " ",
          "(",
          lO.jsx(xs, {
            url: dxm,
          }),
          ")",
        ],
      })),
      (t[8] = r),
      (t[9] = u));
  else u = t[9];
  let d;
  if (t[10] !== u)
    ((d = lO.jsxs(w, {
      dimColor: true,
      children: [
        "Site-level permissions are inherited from the Chrome extension. Manage permissions in the Chrome extension settings to control which sites Claude can browse, click, and type on",
        u,
        ".",
      ],
    })),
      (t[10] = u),
      (t[11] = d));
  else d = t[11];
  let p;
  if (t[12] === Symbol.for("react.memo_cache_sentinel"))
    ((p = lO.jsx(w, {
      bold: true,
      color: "chromeYellow",
      children: "/chrome",
    })),
      (t[12] = p));
  else p = t[12];
  let f;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((f = lO.jsxs(w, {
      dimColor: true,
      children: [
        "For more info, use",
        " ",
        p,
        " ",
        "or visit ",
        lO.jsx(xs, {
          url: "https://code.claude.com/docs/en/chrome",
        }),
      ],
    })),
      (t[13] = f));
  else f = t[13];
  let m;
  if (t[14] !== a || t[15] !== c || t[16] !== d)
    ((m = lO.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: a,
      children: [c, d, f],
    })),
      (t[14] = a),
      (t[15] = c),
      (t[16] = d),
      (t[17] = m));
  else m = t[17];
  let g;
  if (t[18] !== n || t[19] !== m)
    ((g = lO.jsx(zn, {
      title: "Claude in Chrome (beta)",
      onCancel: n,
      color: "chromeYellow",
      children: m,
    })),
      (t[18] = n),
      (t[19] = m),
      (t[20] = g));
  else g = t[20];
  return g;
}
function fxm(e) {
  return {
    ...e,
    hasCompletedClaudeInChromeOnboarding: true,
  };
}
var O$c,
  dmr,
  lO,
  uxm = "https://claude.ai/chrome",
  dxm = "https://clau.de/chrome/permissions";
