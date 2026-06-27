// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _1o
// matched 2.1.88 source: src/components/ChannelDowngradeDialog.tsx
// class=modified  jaccard=0.3891  score=0.5289  fileCov=0.5954
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _1o] deps: utils/debug.ts, hooks/useTerminalSize.ts, utils/config.ts, components/design-system/Dialog.tsx, components/design-system/Dialog.tsx
((NMl = R(lt(), 1)), (BMl = R(rt(), 1)), (Dfe = R(se(), 1)));
function ChannelDowngradeDialog(t0) {
  let t = FMl.c(17),
    { currentVersion: n, onChoice: r } = t0,
    o;
  if (t[0] !== r)
    ((o = function (h) {
      r(h);
    }),
      (t[0] = r),
      (t[1] = o));
  else o = t[1];
  let s = o,
    i;
  if (t[2] !== r)
    ((i = function () {
      r("cancel");
    }),
      (t[2] = r),
      (t[3] = i));
  else i = t[3];
  let a = i,
    l;
  if (t[4] !== n)
    ((l = cEt.jsxs(w, {
      children: [
        "The stable channel may have an older version than what you're currently running (",
        n,
        ").",
      ],
    })),
      (t[4] = n),
      (t[5] = l));
  else l = t[5];
  let c;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((c = cEt.jsx(w, {
      dimColor: true,
      children: "How would you like to handle this?",
    })),
      (t[6] = c));
  else c = t[6];
  let u;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((u = {
      label: "Allow possible downgrade to stable version",
      value: "downgrade",
    }),
      (t[7] = u));
  else u = t[7];
  let d = `Stay on current version (${n}) until stable catches up`,
    p;
  if (t[8] !== d)
    ((p = [
      u,
      {
        label: d,
        value: "stay",
      },
    ]),
      (t[8] = d),
      (t[9] = p));
  else p = t[9];
  let f;
  if (t[10] !== s || t[11] !== p)
    ((f = cEt.jsx(Sr, {
      options: p,
      onChange: s,
    })),
      (t[10] = s),
      (t[11] = p),
      (t[12] = f));
  else f = t[12];
  let m;
  if (t[13] !== a || t[14] !== l || t[15] !== f)
    ((m = cEt.jsxs(zn, {
      title: "Switch to Stable Channel",
      onCancel: a,
      color: "permission",
      hideBorder: true,
      hideInputGuide: true,
      children: [l, c, f],
    })),
      (t[13] = a),
      (t[14] = l),
      (t[15] = f),
      (t[16] = m));
  else m = t[16];
  return m;
}
var FMl, cEt;
