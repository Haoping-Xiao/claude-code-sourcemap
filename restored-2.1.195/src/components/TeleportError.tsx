// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DQa
// matched 2.1.88 source: src/components/TeleportError.tsx
// class=modified  jaccard=0.2416  score=0.4223  fileCov=0.3609
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DQa] deps: si, Ye, je, sa, Fy, vi, B_, Ko, EC
((X9e = R(rt(), 1)), (wk = R(se(), 1)));
function c8n(e) {
  let t = PQa.c(20),
    { onComplete: n, errorsToIgnore: r } = e,
    o = r === void 0 ? zJp : r,
    [s, i] = qVt.useState(null),
    [a, l] = qVt.useState(false),
    c = YE(),
    u;
  if (t[0] !== o || t[1] !== n)
    ((u = async () => {
      let A = await oTo(),
        v = new Set(Array.from(A).filter((C) => !o.has(C)));
      if (v.size === 0) {
        n();
        return;
      }
      if (v.has("needsLogin")) i("needsLogin");
      else if (v.has("needsGitStash")) i("needsGitStash");
    }),
      (t[0] = o),
      (t[1] = n),
      (t[2] = u));
  else u = t[2];
  let d = u,
    p,
    f;
  if (t[3] !== d)
    ((p = () => {
      d();
    }),
      (f = [d]),
      (t[3] = d),
      (t[4] = p),
      (t[5] = f));
  else ((p = t[4]), (f = t[5]));
  qVt.useEffect(p, f);
  let m = KJp,
    g;
  if (t[6] !== d)
    ((g = () => {
      (l(false), d());
    }),
      (t[6] = d),
      (t[7] = g));
  else g = t[7];
  let h = g,
    y;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((y = () => {
      l(true);
    }),
      (t[8] = y));
  else y = t[8];
  let b = y,
    _;
  if (t[9] !== d)
    ((_ = () => {
      d();
    }),
      (t[9] = d),
      (t[10] = _));
  else _ = t[10];
  let S = _;
  if (!s) return null;
  switch (s) {
    case "needsGitStash": {
      let A;
      if (t[11] !== S)
        ((A = XJ.jsx(LQa, {
          onStashAndContinue: S,
          onCancel: m,
        })),
          (t[11] = S),
          (t[12] = A));
      else A = t[12];
      return A;
    }
    case "needsLogin": {
      let A = a ? h : m,
        v;
      if (t[13] !== h || t[14] !== c || t[15] !== a)
        ((v = a
          ? XJ.jsx(Y9e, {
              onDone: h,
              mode: "login",
              forceLoginMethod: "claudeai",
              urlOutdent: c ? FGe : mbe,
            })
          : XJ.jsxs(XJ.Fragment, {
              children: [
                XJ.jsxs(U, {
                  flexDirection: "column",
                  children: [
                    XJ.jsx(w, {
                      dimColor: true,
                      children: "Teleport requires a Claude.ai account.",
                    }),
                    XJ.jsx(w, {
                      dimColor: true,
                      children: "Your Claude Pro/Max subscription will be used by Claude Code.",
                    }),
                  ],
                }),
                XJ.jsx(Kl, {
                  confirmLabel: "Login with Claude account",
                  cancelLabel: "Exit",
                  onConfirm: b,
                  onCancel: m,
                }),
              ],
            })),
          (t[13] = h),
          (t[14] = c),
          (t[15] = a),
          (t[16] = v));
      else v = t[16];
      let C;
      if (t[17] !== A || t[18] !== v)
        ((C = XJ.jsx(zn, {
          title: "Log in to Claude",
          onCancel: A,
          children: v,
        })),
          (t[17] = A),
          (t[18] = v),
          (t[19] = C));
      else C = t[19];
      return C;
    }
  }
}
function KJp() {
  Bc(0);
}
async function oTo() {
  let e = new Set(),
    [t, n] = await Promise.all([Vjn(), kOa()]);
  if (t) e.add("needsLogin");
  if (!n) e.add("needsGitStash");
  return e;
}
var PQa, qVt, XJ, zJp;
