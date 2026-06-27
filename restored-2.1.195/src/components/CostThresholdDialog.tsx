// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bmc
// matched 2.1.88 source: src/components/CostThresholdDialog.tsx
// class=modified  jaccard=0.3699  score=0.6353  fileCov=0.4697
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bmc] deps: Fy, vi
((ymc = R(lt(), 1)), (A8o = R(se(), 1)));
function Emc(e) {
  let t = Smc.c(7),
    { onDone: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((r = n7e.jsxs(U, {
      flexDirection: "column",
      children: [
        n7e.jsx(w, {
          children: "Learn more about how to monitor your spending:",
        }),
        n7e.jsx(xs, {
          url: "https://code.claude.com/docs/en/costs",
        }),
      ],
    })),
      (t[0] = r));
  else r = t[0];
  let o;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((o = [
      {
        value: "ok",
        label: "Got it, thanks!",
      },
    ]),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== n)
    ((s = n7e.jsx(Sr, {
      options: o,
      onChange: n,
    })),
      (t[2] = n),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== n || t[5] !== s)
    ((i = n7e.jsxs(zn, {
      title: "You've spent $5 on the Anthropic API this session.",
      onCancel: n,
      children: [r, s],
    })),
      (t[4] = n),
      (t[5] = s),
      (t[6] = i));
  else i = t[6];
  return i;
}
var Smc, n7e;
