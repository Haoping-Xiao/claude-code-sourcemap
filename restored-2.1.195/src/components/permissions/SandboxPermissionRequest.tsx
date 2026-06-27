// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RLc
// matched 2.1.88 source: src/components/permissions/SandboxPermissionRequest.tsx
// class=modified  jaccard=0.2737  score=0.4006  fileCov=0.4637
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module RLc] deps: Y4
xfr = R(rt(), 1);
function SandboxPermissionRequest(t0) {
  let t = LLc.c(22),
    { hostPattern: n, onUserResponse: r } = t0,
    { host: o } = n,
    s;
  if (t[0] !== r)
    ((s = function (A) {
      e: switch (A) {
        case "yes": {
          r({
            allow: true,
            persistToSettings: false,
          });
          break e;
        }
        case "yes-dont-ask-again": {
          r({
            allow: true,
            persistToSettings: true,
          });
          break e;
        }
        case "no":
          r({
            allow: false,
            persistToSettings: false,
          });
      }
    }),
      (t[0] = r),
      (t[1] = s));
  else s = t[1];
  let i = s,
    a;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((a = NWe()), (t[2] = a));
  else a = t[2];
  let l = a,
    c;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((c = {
      label: "Yes",
      value: "yes",
    }),
      (t[3] = c));
  else c = t[3];
  let u;
  if (t[4] !== o)
    ((u = !l
      ? [
          {
            label: D3.jsxs(w, {
              children: [
                "Yes, and don't ask again for ",
                D3.jsx(w, {
                  bold: true,
                  children: o,
                }),
              ],
            }),
            value: "yes-dont-ask-again",
          },
        ]
      : []),
      (t[4] = o),
      (t[5] = u));
  else u = t[5];
  let d;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((d = {
      label: D3.jsxs(w, {
        children: [
          "No, and tell Claude what to do differently ",
          D3.jsx(w, {
            bold: true,
            children: "(esc)",
          }),
        ],
      }),
      value: "no",
    }),
      (t[6] = d));
  else d = t[6];
  let p;
  if (t[7] !== u) ((p = [c, ...u, d]), (t[7] = u), (t[8] = p));
  else p = t[8];
  let f = p,
    m;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((m = D3.jsx(w, {
      dimColor: true,
      children: "Host:",
    })),
      (t[9] = m));
  else m = t[9];
  let g;
  if (t[10] !== o)
    ((g = D3.jsxs(U, {
      children: [
        m,
        D3.jsxs(w, {
          children: [" ", o],
        }),
      ],
    })),
      (t[10] = o),
      (t[11] = g));
  else g = t[11];
  let h;
  if (t[12] === Symbol.for("react.memo_cache_sentinel"))
    ((h = D3.jsx(U, {
      marginTop: 1,
      children: D3.jsx(w, {
        children: "Do you want to allow this connection?",
      }),
    })),
      (t[12] = h));
  else h = t[12];
  let y;
  if (t[13] !== r)
    ((y = () => {
      r({
        allow: false,
        persistToSettings: false,
      });
    }),
      (t[13] = r),
      (t[14] = y));
  else y = t[14];
  let b;
  if (t[15] !== i || t[16] !== f || t[17] !== y)
    ((b = D3.jsx(U, {
      children: D3.jsx(Sr, {
        options: f,
        onChange: i,
        onCancel: y,
      }),
    })),
      (t[15] = i),
      (t[16] = f),
      (t[17] = y),
      (t[18] = b));
  else b = t[18];
  let _;
  if (t[19] !== b || t[20] !== g)
    ((_ = D3.jsx(Lf, {
      title: "Network request outside of sandbox",
      children: D3.jsxs(U, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1,
        children: [g, h, b],
      }),
    })),
      (t[19] = b),
      (t[20] = g),
      (t[21] = _));
  else _ = t[21];
  return _;
}
var LLc, D3;
