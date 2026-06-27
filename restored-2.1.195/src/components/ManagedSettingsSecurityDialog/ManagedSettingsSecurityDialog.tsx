// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Oho
// matched 2.1.88 source: src/components/ManagedSettingsSecurityDialog/ManagedSettingsSecurityDialog.tsx
// class=modified  jaccard=0.3187  score=0.5252  fileCov=0.4476
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Oho = E(() => {
  WGe();
  Jt();
});
function h4n(e) {
  let t = U1a.c(20),
    { settings: n, onAccept: r, onReject: o } = e,
    s = Cft(n),
    i = B1a(s),
    a;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((a = {
      context: "Confirmation",
    }),
      (t[0] = a));
  else a = t[0];
  $r("confirm:no", o, a);
  let l = Lf,
    c = "warning",
    u = "warning",
    d = "Managed settings require approval",
    p = U,
    f = "column",
    m = 1,
    g = 1,
    h;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((h = aN.jsx(w, {
      children:
        "Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.",
    })),
      (t[1] = h));
  else h = t[1];
  let y = U,
    b = "column",
    _;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = aN.jsx(w, {
      dimColor: !0,
      children: "Settings requiring approval:",
    })),
      (t[2] = _));
  else _ = t[2];
  let S = i.map(KPp),
    A;
  if (t[3] !== y || t[4] !== _ || t[5] !== S)
    ((A = aN.jsxs(y, {
      flexDirection: b,
      children: [_, S],
    })),
      (t[3] = y),
      (t[4] = _),
      (t[5] = S),
      (t[6] = A));
  else A = t[6];
  let v;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((v = aN.jsx(w, {
      children:
        "Only accept if you trust your organization's IT administration and expect these settings to be configured.",
    })),
      (t[7] = v));
  else v = t[7];
  let C;
  if (t[8] !== r || t[9] !== o)
    ((C = aN.jsx(Kl, {
      confirmLabel: "Yes, I trust these settings",
      cancelLabel: "No, exit Claude Code",
      onConfirm: r,
      onCancel: o,
    })),
      (t[8] = r),
      (t[9] = o),
      (t[10] = C));
  else C = t[10];
  let x;
  if (t[11] === Symbol.for("react.memo_cache_sentinel"))
    ((x = aN.jsx(vb, {
      children: aN.jsxs(Tn, {
        children: [
          aN.jsx(ht, {
            chord: "enter",
            action: "confirm",
          }),
          aN.jsx(ht, {
            chord: "escape",
            action: "exit",
          }),
        ],
      }),
    })),
      (t[11] = x));
  else x = t[11];
  let I;
  if (t[12] !== p || t[13] !== A || t[14] !== C || t[15] !== h)
    ((I = aN.jsxs(p, {
      flexDirection: f,
      gap: m,
      paddingTop: g,
      children: [h, A, v, C, x],
    })),
      (t[12] = p),
      (t[13] = A),
      (t[14] = C),
      (t[15] = h),
      (t[16] = I));
  else I = t[16];
  let k;
  if (t[17] !== l || t[18] !== I)
    ((k = aN.jsx(l, {
      color: c,
      titleColor: u,
      title: d,
      children: I,
    })),
      (t[17] = l),
      (t[18] = I),
      (t[19] = k));
  else k = t[19];
  return k;
}
function KPp(e, t) {
  return aN.jsx(
    U,
    {
      paddingLeft: 2,
      children: aN.jsxs(w, {
        children: [
          aN.jsx(w, {
            dimColor: !0,
            children: "\xB7 ",
          }),
          aN.jsx(w, {
            children: e,
          }),
        ],
      }),
    },
    t,
  );
}
var U1a, aN;
