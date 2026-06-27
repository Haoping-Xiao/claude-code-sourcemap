// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FOo
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0222  score=0.1715  fileCov=0.0249
// note: nearest: src/components/Settings/Config.tsx (0.0222); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var FOo = E(() => {
  kt();
  ZU();
  es();
  dr();
});
var QPl = {};
_t(QPl, {
  call: () => call
});
function K0f(e) {
  let t = JPl.c(52),
    {
      onDone: n,
      context: r
    } = e,
    o = Ht(Y0f),
    s = kH(),
    i;
  if (t[0] !== o || t[1] !== s) i = A4(s, o), t[0] = o, t[1] = s, t[2] = i;else i = t[2];
  let {
      window: a,
      configured: l,
      source: c
    } = i,
    u;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) u = pC(), t[3] = u;else u = t[3];
  let d = u,
    p = l > a,
    f = c === "env",
    m = c === "env" ? "from CLAUDE_CODE_AUTO_COMPACT_WINDOW" : c === "settings" ? "from settings" : "auto",
    g = c === "auto" || c === "experiment" || c === "clientdata" ? dKe : Math.min(WOo, Math.max(GOo, Math.round(l / jOo) * jOo)),
    [h, y] = qOo.useState(g),
    [b, _] = qOo.useState(!1),
    S;
  if (t[4] !== f) S = function (ce) {
    if (f) return;
    _(!0), y(ae => {
      if (ae === dKe) return ce > 0 ? GOo : WOo;
      let de = ae + ce * jOo;
      if (de < GOo) return dKe;
      if (de > WOo) return dKe;
      return de;
    });
  }, t[4] = f, t[5] = S;else S = t[5];
  let A = S,
    v;
  if (t[6] !== p || t[7] !== a) v = p ? ` \xB7 capped to ${gl(a)} by model` : "", t[6] = p, t[7] = a, t[8] = v;else v = t[8];
  let C = v,
    x;
  if (t[9] !== C || t[10] !== l || t[11] !== c || t[12] !== m) x = c === "auto" ? "auto" : c === "experiment" || c === "clientdata" ? `auto (${gl(l)} tokens)${C}` : `${gl(l)} tokens (${m})${C}`, t[9] = C, t[10] = l, t[11] = c, t[12] = m, t[13] = x;else x = t[13];
  let I = x,
    k;
  if (t[14] !== b || t[15] !== r || t[16] !== I || t[17] !== n || t[18] !== h) k = function () {
    if (!b) {
      n(`Auto-compact window unchanged: ${I}`);
      return;
    }
    let ce = h === dKe ? "auto" : String(h);
    n(g7t(ce, r));
  }, t[14] = b, t[15] = r, t[16] = I, t[17] = n, t[18] = h, t[19] = k;else k = t[19];
  let D = k,
    P,
    O;
  if (t[20] !== A) P = () => A(1), O = () => A(-1), t[20] = A, t[21] = P, t[22] = O;else P = t[21], O = t[22];
  let L;
  if (t[23] !== D || t[24] !== P || t[25] !== O) L = {
    "select:previous": P,
    "select:next": O,
    "select:accept": D
  }, t[23] = D, t[24] = P, t[25] = O, t[26] = L;else L = t[26];
  let M;
  if (t[27] === Symbol.for("react.memo_cache_sentinel")) M = {
    context: "Select"
  }, t[27] = M;else M = t[27];
  No(L, M);
  let N;
  if (t[28] !== A) N = {
    "tabs:next": () => A(1),
    "tabs:previous": () => A(-1)
  }, t[28] = A, t[29] = N;else N = t[29];
  let B;
  if (t[30] === Symbol.for("react.memo_cache_sentinel")) B = {
    context: "Tabs"
  }, t[30] = B;else B = t[30];
  No(N, B);
  let $;
  if (t[31] !== h) $ = h === dKe ? "auto" : `${gl(h)} tokens`, t[31] = h, t[32] = $;else $ = t[32];
  let q = $,
    W = `Current setting: ${I}`,
    V;
  if (t[33] !== I || t[34] !== n) V = () => n(`Auto-compact window unchanged: ${I}`), t[33] = I, t[34] = n, t[35] = V;else V = t[35];
  let Y;
  if (t[36] === Symbol.for("react.memo_cache_sentinel")) Y = IP.jsx(w, {
    dimColor: !0,
    children: IP.jsxs(Tn, {
      children: [IP.jsx(ht, {
        chord: ["up", "down"],
        action: "change"
      }), IP.jsx(ht, {
        chord: "enter",
        action: "apply"
      }), IP.jsx(ht, {
        chord: "escape",
        action: "cancel"
      })]
    })
  }), t[36] = Y;else Y = t[36];
  let z;
  if (t[37] === Symbol.for("react.memo_cache_sentinel")) z = IP.jsx(w, {
    children: "This command configures when auto-compaction happens. The actual threshold is the minimum of this setting and your model's maximum context window."
  }), t[37] = z;else z = t[37];
  let K, Z;
  if (t[38] === Symbol.for("react.memo_cache_sentinel")) K = IP.jsxs(w, {
    children: ["The auto setting picks a window tuned for your model and is", " ", IP.jsx(w, {
      bold: !0,
      children: "strongly recommended"
    }), " for the best cost and performance. You can override it below."]
  }), Z = !d && IP.jsx(w, {
    color: "warning",
    children: "Auto-compact is currently disabled (see /config)"
  }), t[38] = K, t[39] = Z;else K = t[38], Z = t[39];
  let J;
  if (t[40] !== h) J = h !== dKe && IP.jsx(w, {
    color: "warning",
    children: "Overriding auto may result in high token usage, especially when resuming long sessions."
  }), t[40] = h, t[41] = J;else J = t[41];
  let ne;
  if (t[42] !== q || t[43] !== f) ne = f ? IP.jsx(w, {
    color: "warning",
    children: "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting here."
  }) : IP.jsxs(U, {
    children: [IP.jsx(w, {
      children: "Select auto-compact window: "
    }), IP.jsx(w, {
      bold: !0,
      color: "suggestion",
      children: q
    })]
  }), t[42] = q, t[43] = f, t[44] = ne;else ne = t[44];
  let oe;
  if (t[45] !== J || t[46] !== ne) oe = IP.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [z, K, Z, J, ne]
  }), t[45] = J, t[46] = ne, t[47] = oe;else oe = t[47];
  let re;
  if (t[48] !== W || t[49] !== V || t[50] !== oe) re = IP.jsx(zn, {
    title: "Auto-compact window",
    subtitle: W,
    onCancel: V,
    inputGuide: Y,
    children: oe
  }), t[48] = W, t[49] = V, t[50] = oe, t[51] = re;else re = t[51];
  return re;
}
function Y0f(e) {
  return e.autoCompactWindow;
}
var JPl,
  qOo,
  IP,
  jOo = 1e5,
  GOo = 1e5,
  WOo = 1e6,
  dKe = 0,
  call = async (e, t, n) => {
    let r = n?.trim() || "";
    if (r) {
      let o = g7t(r, t);
      return e(o), null;
    }
    return G("tengu_autocompact_dialog_opened", {
      source: We("dialog")
    }), IP.jsx(K0f, {
      onDone: e,
      context: t
    });
  };