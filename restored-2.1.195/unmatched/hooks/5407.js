// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vmc
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0079  score=0.2962  fileCov=0.008
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0079); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Vmc = E(() => {
  Xa();
  Ye();
  i6e();
  Wmc = R(lt(), 1), ren = R(se(), 1);
});
function C8o(e) {
  let t = zmc.c(15),
    {
      toolName: n,
      description: r
    } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) o = rp(), t[0] = o;else o = t[0];
  let s = o,
    i;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) i = Oh(), t[1] = i;else i = t[1];
  let a = i,
    l;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) l = Sv(), t[2] = l;else l = t[2];
  let c = l,
    u;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) u = ZN.jsxs(U, {
    children: [ZN.jsx(Vu, {}), ZN.jsxs(w, {
      bold: !0,
      color: "warning",
      children: [" ", "Waiting for team lead approval"]
    })]
  }), t[3] = u;else u = t[3];
  let d;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) d = a && c && ZN.jsx(U, {
    marginBottom: 1,
    children: ZN.jsx(qmc, {
      name: a,
      color: c
    })
  }), t[4] = d;else d = t[4];
  let p;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) p = ZN.jsx(w, {
    dimColor: !0,
    children: "Tool: "
  }), t[5] = p;else p = t[5];
  let f;
  if (t[6] !== n) f = ZN.jsxs(U, {
    children: [p, ZN.jsx(w, {
      children: n
    })]
  }), t[6] = n, t[7] = f;else f = t[7];
  let m;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) m = ZN.jsx(w, {
    dimColor: !0,
    children: "Action: "
  }), t[8] = m;else m = t[8];
  let g;
  if (t[9] !== r) g = ZN.jsxs(U, {
    children: [m, ZN.jsx(w, {
      children: r
    })]
  }), t[9] = r, t[10] = g;else g = t[10];
  let h;
  if (t[11] === Symbol.for("react.memo_cache_sentinel")) h = s && ZN.jsx(U, {
    marginTop: 1,
    children: ZN.jsxs(w, {
      dimColor: !0,
      children: ["Permission request sent to team ", '"', s, '"', " leader"]
    })
  }), t[11] = h;else h = t[11];
  let y;
  if (t[12] !== f || t[13] !== g) y = ZN.jsxs(cA, {
    color: "warning",
    children: [u, ZN.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [d, f, g, h]
    })]
  }), t[12] = f, t[13] = g, t[14] = y;else y = t[14];
  return y;
}
var zmc, ZN;