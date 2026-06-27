// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eDc
// matched 2.1.88 source: src/components/LspRecommendation/LspRecommendationMenu.tsx
// class=partial  jaccard=0.2225  score=0.2807  fileCov=0.5176
// note: low-confidence suggestion: src/components/LspRecommendation/LspRecommendationMenu.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eDc = E(() => {
  ft();
  Ed();
  uo();
  er();
  je();
  XLc();
  vfe();
  dr();
  DYo();
  QLc = R(lt(), 1), Dfr = require("path"), Pfr = R(rt(), 1);
});
function nDc(e) {
  let t = tDc.c(36),
    {
      pluginName: n,
      pluginDescription: r,
      fileExtension: o,
      onResponse: s
    } = e,
    i = Mfr.useRef(s),
    a;
  if (t[0] !== s) a = () => {
    i.current = s;
  }, t[0] = s, t[1] = a;else a = t[1];
  Mfr.useEffect(a);
  let l;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) l = () => i.current("no"), t[2] = l;else l = t[2];
  let c;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) c = [], t[3] = c;else c = t[3];
  Pd(l, fCm, c);
  let u;
  if (t[4] !== s) u = function (O) {
    e: switch (O) {
      case "yes":
        {
          s("yes");
          break e;
        }
      case "no":
        {
          s("no");
          break e;
        }
      case "never":
        {
          s("never");
          break e;
        }
      case "disable":
        s("disable");
    }
  }, t[4] = s, t[5] = u;else u = t[5];
  let d = u,
    p;
  if (t[6] !== n) p = {
    label: Xk.jsxs(w, {
      children: ["Yes, install ", Xk.jsx(w, {
        bold: !0,
        children: n
      })]
    }),
    value: "yes"
  }, t[6] = n, t[7] = p;else p = t[7];
  let f;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) f = {
    label: "No, not now",
    value: "no"
  }, t[8] = f;else f = t[8];
  let m;
  if (t[9] !== n) m = {
    label: Xk.jsxs(w, {
      children: ["Never for ", Xk.jsx(w, {
        bold: !0,
        children: n
      })]
    }),
    value: "never"
  }, t[9] = n, t[10] = m;else m = t[10];
  let g;
  if (t[11] === Symbol.for("react.memo_cache_sentinel")) g = {
    label: "Disable all LSP recommendations",
    value: "disable"
  }, t[11] = g;else g = t[11];
  let h;
  if (t[12] !== p || t[13] !== m) h = [p, f, m, g], t[12] = p, t[13] = m, t[14] = h;else h = t[14];
  let y = h,
    b;
  if (t[15] === Symbol.for("react.memo_cache_sentinel")) b = Xk.jsx(U, {
    marginBottom: 1,
    children: Xk.jsx(w, {
      dimColor: !0,
      children: "LSP provides code intelligence like go-to-definition and error checking"
    })
  }), t[15] = b;else b = t[15];
  let _;
  if (t[16] === Symbol.for("react.memo_cache_sentinel")) _ = Xk.jsx(w, {
    dimColor: !0,
    children: "Plugin:"
  }), t[16] = _;else _ = t[16];
  let S;
  if (t[17] !== n) S = Xk.jsxs(U, {
    children: [_, Xk.jsxs(w, {
      children: [" ", n]
    })]
  }), t[17] = n, t[18] = S;else S = t[18];
  let A;
  if (t[19] !== r) A = r && Xk.jsx(U, {
    children: Xk.jsx(w, {
      dimColor: !0,
      children: r
    })
  }), t[19] = r, t[20] = A;else A = t[20];
  let v;
  if (t[21] === Symbol.for("react.memo_cache_sentinel")) v = Xk.jsx(w, {
    dimColor: !0,
    children: "Triggered by:"
  }), t[21] = v;else v = t[21];
  let C;
  if (t[22] !== o) C = Xk.jsxs(U, {
    children: [v, Xk.jsxs(w, {
      children: [" ", o, " files"]
    })]
  }), t[22] = o, t[23] = C;else C = t[23];
  let x;
  if (t[24] === Symbol.for("react.memo_cache_sentinel")) x = Xk.jsx(U, {
    marginTop: 1,
    children: Xk.jsx(w, {
      children: "Would you like to install this LSP plugin?"
    })
  }), t[24] = x;else x = t[24];
  let I;
  if (t[25] !== s) I = () => s("no"), t[25] = s, t[26] = I;else I = t[26];
  let k;
  if (t[27] !== d || t[28] !== y || t[29] !== I) k = Xk.jsx(U, {
    children: Xk.jsx(Sr, {
      options: y,
      onChange: d,
      onCancel: I
    })
  }), t[27] = d, t[28] = y, t[29] = I, t[30] = k;else k = t[30];
  let D;
  if (t[31] !== S || t[32] !== A || t[33] !== C || t[34] !== k) D = Xk.jsx(Lf, {
    title: "LSP plugin recommendation",
    children: Xk.jsxs(U, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: [b, S, A, C, x, k]
    })
  }), t[31] = S, t[32] = A, t[33] = C, t[34] = k, t[35] = D;else D = t[35];
  return D;
}
var tDc,
  Mfr,
  Xk,
  fCm = 30000;