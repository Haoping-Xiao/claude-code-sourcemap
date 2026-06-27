// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zyc
// matched 2.1.88 source: src/components/ThinkingToggle.tsx
// class=modified  jaccard=0.3263  score=0.462  fileCov=0.5262
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zyc] deps: tC, zj, _i, Tc, Xge, Ye, N0e, ps, dn, kt, es, xjo, Ko, zX, NOe
((Jse = R(rt(), 1)), (Vz = R(se(), 1)));
function Xyc(e) {
  let t = Kyc.c(25),
    { currentValue: n, onSelect: r, onCancel: o, isMidConversation: s } = e,
    [i, a] = Yyc.useState(null),
    l;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((l = [
      {
        value: "true",
        label: "Enabled",
        description: "Claude will think before responding",
      },
      {
        value: "false",
        label: "Disabled",
        description: "Claude will respond without extended thinking",
      },
    ]),
      (t[0] = l));
  else l = t[0];
  let c = l,
    u;
  if (t[1] !== i || t[2] !== o)
    ((u = () => {
      if (i !== null) a(null);
      else o();
    }),
      (t[1] = i),
      (t[2] = o),
      (t[3] = u));
  else u = t[3];
  let d;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((d = {
      context: "Confirmation",
    }),
      (t[4] = d));
  else d = t[4];
  $r("confirm:no", u, d);
  let p;
  if (t[5] !== i || t[6] !== r)
    ((p = () => {
      if (i !== null) r(i);
    }),
      (t[5] = i),
      (t[6] = r),
      (t[7] = p));
  else p = t[7];
  let f = i !== null,
    m;
  if (t[8] !== f)
    ((m = {
      context: "Confirmation",
      isActive: f,
    }),
      (t[8] = f),
      (t[9] = m));
  else m = t[9];
  $r("confirm:yes", p, m);
  let g;
  if (t[10] !== n || t[11] !== s || t[12] !== r)
    ((g = function (v) {
      let C = v === "true";
      if (s && C !== n) a(C);
      else r(C);
    }),
      (t[10] = n),
      (t[11] = s),
      (t[12] = r),
      (t[13] = g));
  else g = t[13];
  let h = g,
    y;
  if (t[14] === Symbol.for("react.memo_cache_sentinel"))
    ((y = jP.jsxs(U, {
      marginBottom: 1,
      flexDirection: "column",
      children: [
        jP.jsx(w, {
          color: "remember",
          bold: true,
          children: "Toggle thinking mode",
        }),
        jP.jsx(w, {
          dimColor: true,
          children: "Enable or disable thinking for this session.",
        }),
      ],
    })),
      (t[14] = y));
  else y = t[14];
  let b;
  if (t[15] !== i || t[16] !== n || t[17] !== h || t[18] !== o)
    ((b = jP.jsxs(U, {
      flexDirection: "column",
      children: [
        y,
        i !== null
          ? jP.jsxs(U, {
              flexDirection: "column",
              marginBottom: 1,
              gap: 1,
              children: [
                jP.jsx(w, {
                  color: "warning",
                  children:
                    "Changing thinking mode mid-conversation will increase latency and may reduce quality. For best results, set this at the start of a session.",
                }),
                jP.jsx(w, {
                  color: "warning",
                  children: "Do you want to proceed?",
                }),
              ],
            })
          : jP.jsx(U, {
              flexDirection: "column",
              marginBottom: 1,
              children: jP.jsx(Sr, {
                defaultValue: n ? "true" : "false",
                defaultFocusValue: n ? "true" : "false",
                options: c,
                onChange: h,
                onCancel: o,
                visibleOptionCount: 2,
              }),
            }),
      ],
    })),
      (t[15] = i),
      (t[16] = n),
      (t[17] = h),
      (t[18] = o),
      (t[19] = b));
  else b = t[19];
  let _;
  if (t[20] !== i)
    ((_ = jP.jsx(vb, {
      children:
        i !== null
          ? jP.jsxs(Tn, {
              children: [
                jP.jsx(ht, {
                  chord: "enter",
                  action: "confirm",
                }),
                jP.jsx(mr, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "cancel",
                }),
              ],
            })
          : jP.jsxs(Tn, {
              children: [
                jP.jsx(ht, {
                  chord: "enter",
                  action: "confirm",
                }),
                jP.jsx(mr, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "cancel",
                }),
              ],
            }),
    })),
      (t[20] = i),
      (t[21] = _));
  else _ = t[21];
  let S;
  if (t[22] !== _ || t[23] !== b)
    ((S = jP.jsxs(Fu, {
      color: "permission",
      children: [b, _],
    })),
      (t[22] = _),
      (t[23] = b),
      (t[24] = S));
  else S = t[24];
  return S;
}
var Kyc, Yyc, jP;
