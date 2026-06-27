// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iDc
// matched 2.1.88 source: src/components/ClaudeCodeHint/PluginHintMenu.tsx
// class=modified  jaccard=0.2346  score=0.3032  fileCov=0.5091
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iDc] deps: context/notifications.tsx, utils/debug.ts, utils/plugins/hintRecommendation.ts, utils/debug.ts, utils/shell/powershellDetection.ts, utils/plugins/pluginIdentifier.ts, @opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js, hooks/useLspPluginRecommendation.tsx
((oDc = R(lt(), 1)), ($fr = R(rt(), 1)));
function PluginHintMenu(e) {
  let t = aDc.c(35),
    {
      pluginName: n,
      pluginDescription: r,
      marketplaceName: o,
      sourceCommand: s,
      onResponse: i,
    } = e,
    a = Ofr.useRef(i),
    l;
  if (t[0] !== i)
    ((l = () => {
      a.current = i;
    }),
      (t[0] = i),
      (t[1] = l));
  else l = t[1];
  Ofr.useEffect(l);
  let c;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((c = () => a.current("no")), (t[2] = c));
  else c = t[2];
  let u;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) ((u = []), (t[3] = u));
  else u = t[3];
  Pd(c, mCm, u);
  let d;
  if (t[4] !== i)
    ((d = function (O) {
      e: switch (O) {
        case "yes": {
          i("yes");
          break e;
        }
        case "disable": {
          i("disable");
          break e;
        }
        default:
          i("no");
      }
    }),
      (t[4] = i),
      (t[5] = d));
  else d = t[5];
  let p = d,
    f;
  if (t[6] !== n)
    ((f = {
      label: bR.jsxs(w, {
        children: [
          "Yes, install ",
          bR.jsx(w, {
            bold: true,
            children: n,
          }),
        ],
      }),
      value: "yes",
    }),
      (t[6] = n),
      (t[7] = f));
  else f = t[7];
  let m, g;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((m = {
      label: "No",
      value: "no",
    }),
      (g = {
        label: "No, and don't show plugin installation hints again",
        value: "disable",
      }),
      (t[8] = m),
      (t[9] = g));
  else ((m = t[8]), (g = t[9]));
  let h;
  if (t[10] !== f) ((h = [f, m, g]), (t[10] = f), (t[11] = h));
  else h = t[11];
  let y = h,
    b;
  if (t[12] !== s)
    ((b = bR.jsx(U, {
      marginBottom: 1,
      children: bR.jsxs(w, {
        dimColor: true,
        children: [
          "The ",
          bR.jsx(w, {
            bold: true,
            children: s,
          }),
          " command suggests installing a plugin.",
        ],
      }),
    })),
      (t[12] = s),
      (t[13] = b));
  else b = t[13];
  let _;
  if (t[14] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = bR.jsx(w, {
      dimColor: true,
      children: "Plugin:",
    })),
      (t[14] = _));
  else _ = t[14];
  let S;
  if (t[15] !== n)
    ((S = bR.jsxs(U, {
      children: [
        _,
        bR.jsxs(w, {
          children: [" ", n],
        }),
      ],
    })),
      (t[15] = n),
      (t[16] = S));
  else S = t[16];
  let A;
  if (t[17] === Symbol.for("react.memo_cache_sentinel"))
    ((A = bR.jsx(w, {
      dimColor: true,
      children: "Marketplace:",
    })),
      (t[17] = A));
  else A = t[17];
  let v;
  if (t[18] !== o)
    ((v = bR.jsxs(U, {
      children: [
        A,
        bR.jsxs(w, {
          children: [" ", o],
        }),
      ],
    })),
      (t[18] = o),
      (t[19] = v));
  else v = t[19];
  let C;
  if (t[20] !== r)
    ((C =
      r &&
      bR.jsx(U, {
        children: bR.jsx(w, {
          dimColor: true,
          children: r,
        }),
      })),
      (t[20] = r),
      (t[21] = C));
  else C = t[21];
  let x;
  if (t[22] === Symbol.for("react.memo_cache_sentinel"))
    ((x = bR.jsx(U, {
      marginTop: 1,
      children: bR.jsx(w, {
        children: "Would you like to install it?",
      }),
    })),
      (t[22] = x));
  else x = t[22];
  let I;
  if (t[23] !== i) ((I = () => i("no")), (t[23] = i), (t[24] = I));
  else I = t[24];
  let k;
  if (t[25] !== p || t[26] !== y || t[27] !== I)
    ((k = bR.jsx(U, {
      children: bR.jsx(Sr, {
        options: y,
        onChange: p,
        onCancel: I,
      }),
    })),
      (t[25] = p),
      (t[26] = y),
      (t[27] = I),
      (t[28] = k));
  else k = t[28];
  let D;
  if (t[29] !== S || t[30] !== v || t[31] !== C || t[32] !== k || t[33] !== b)
    ((D = bR.jsx(Lf, {
      title: "Plugin recommendation",
      children: bR.jsxs(U, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1,
        children: [b, S, v, C, x, k],
      }),
    })),
      (t[29] = S),
      (t[30] = v),
      (t[31] = C),
      (t[32] = k),
      (t[33] = b),
      (t[34] = D));
  else D = t[34];
  return D;
}
var aDc,
  Ofr,
  bR,
  mCm = 30000;
