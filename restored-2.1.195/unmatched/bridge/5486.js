// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q6o
// matched 2.1.88 source: src/state/AppStateStore.ts
// class=new  jaccard=0.0494  score=0.2587  fileCov=0.0575
// note: nearest: src/state/AppStateStore.ts (0.0494); dir inferred from dep-graph -> bridge; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module q6o]
q_c = R(rt(), 1);
function K_c(e) {
  let t = kdr.c(43),
    {
      ideSelection: n,
      mcpClients: r,
      debug: o,
      bridgeSelected: s,
      modeLabels: i
    } = e,
    a = Dc(),
    l;
  if (t[0] !== a) l = () => a.getState().remoteSessionUrl, t[0] = a, t[1] = l;else l = t[1];
  let [c] = UTt.useState(l),
    {
      status: u
    } = xdr(r),
    d;
  if (t[2] !== n || t[3] !== u) d = pmm(u, n), t[2] = n, t[3] = u, t[4] = d;else d = t[4];
  let p = d,
    f = Ht(cmm),
    {
      columns: m
    } = br(),
    g;
  if (t[5] !== f || t[6] !== m) g = f && m >= V6o && xC(), t[5] = f, t[6] = m, t[7] = g;else g = t[7];
  let h = g,
    y = k5l("hipaa");
  t6e();
  let b;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) b = at("tengu_copper_thistle", false), t[8] = b;else b = t[8];
  let _ = b,
    S = Ht(lmm),
    A = Ht(amm),
    v = _ && (S !== null || A),
    C = false,
    x;
  if (t[9] !== s || t[10] !== o || t[11] !== C || t[12] !== p || t[13] !== y || t[14] !== i || t[15] !== S || t[16] !== c || t[17] !== h || t[18] !== v) {
    if (x = [], y) {
      let k;
      if (t[21] === Symbol.for("react.memo_cache_sentinel")) k = BH.jsx(w, {
        color: "permission",
        wrap: "truncate",
        children: aEt("hipaa")
      }, "hipaa"), t[21] = k;else k = t[21];
      x.push(k), C = true;
    }
    if (c) {
      let k;
      if (t[22] === Symbol.for("react.memo_cache_sentinel")) k = BH.jsxs(w, {
        color: "ide",
        children: [nt.circleDouble, " cloud"]
      }), t[22] = k;else k = t[22];
      let D;
      if (t[23] !== c) D = BH.jsx(xs, {
        url: c,
        children: k
      }, "cloud"), t[23] = c, t[24] = D;else D = t[24];
      x.push(D), C = true;
    }
    if (p) {
      let k;
      if (t[25] !== p) k = BH.jsx(w, {
        color: "ide",
        wrap: "truncate",
        children: p
      }, "ide"), t[25] = p, t[26] = k;else k = t[26];
      x.push(k), C = true;
    }
    if (o) {
      let k;
      if (t[27] === Symbol.for("react.memo_cache_sentinel")) k = BH.jsx(w, {
        color: "warning",
        wrap: "truncate",
        children: "Debug"
      }, "debug"), t[27] = k;else k = t[27];
      x.push(k), C = true;
    }
    if (h) {
      let k;
      if (t[28] !== s || t[29] !== C) k = BH.jsx(umm, {
        bridgeSelected: s,
        leadingSeparator: C
      }, "bridge"), t[28] = s, t[29] = C, t[30] = k;else k = t[30];
      x.push(k), C = true;
    }
    if (v) {
      let k;
      if (t[31] !== C) k = C && BH.jsx(w, {
        dimColor: true,
        children: " \xB7 "
      }, "pr-sep"), t[31] = C, t[32] = k;else k = t[32];
      let D;
      if (t[33] !== S) D = S ? BH.jsx(u6e, {
        number: S.number,
        url: S.url,
        reviewState: S.reviewState,
        kind: S.kind
      }) : BH.jsx(w, {
        dimColor: true,
        children: "gh auth login"
      }), t[33] = S, t[34] = D;else D = t[34];
      let P;
      if (t[35] !== k || t[36] !== D) P = BH.jsxs(z_c.Fragment, {
        children: [k, D]
      }, "pr"), t[35] = k, t[36] = D, t[37] = P;else P = t[37];
      x.push(P), C = true;
    }
    if (i.length > 0) {
      let k;
      if (t[38] !== C || t[39] !== i) k = BH.jsx(dmm, {
        labels: i,
        leadingSeparator: C
      }, "mode-labels"), t[38] = C, t[39] = i, t[40] = k;else k = t[40];
      x.push(k);
    }
    t[9] = s, t[10] = o, t[11] = C, t[12] = p, t[13] = y, t[14] = i, t[15] = S, t[16] = c, t[17] = h, t[18] = v, t[19] = x, t[20] = C;
  } else x = t[19], C = t[20];
  if (x.length === 0) return null;
  let I;
  if (t[41] !== x) I = BH.jsx(U, {
    flexShrink: 0,
    children: x.flatMap(imm)
  }), t[41] = x, t[42] = I;else I = t[42];
  return I;
}
function imm(e, t) {
  let n = e?.key;
  if (t === 0 || n === "bridge" || n === "pr" || n === "mode-labels") return [e];
  return [BH.jsx(w, {
    dimColor: true,
    children: " \xB7 "
  }, `sep-${n}`), e];
}
function amm(e) {
  return e.prNeedsAuth;
}
function lmm(e) {
  return e.prStatus;
}
function cmm(e) {
  return e.replBridgeEnabled && e.replBridgeError === void 0;
}
function dmm(e) {
  let t = kdr.c(9),
    {
      labels: n,
      leadingSeparator: r
    } = e,
    o;
  if (t[0] !== r) o = r && BH.jsx(w, {
    dimColor: true,
    children: " \xB7 "
  }, "mode-labels-sep"), t[0] = r, t[1] = o;else o = t[1];
  let s;
  if (t[2] !== n) s = n.join(" & "), t[2] = n, t[3] = s;else s = t[3];
  let i;
  if (t[4] !== s) i = BH.jsx(w, {
    dimColor: true,
    children: s
  }), t[4] = s, t[5] = i;else i = t[5];
  let a;
  if (t[6] !== o || t[7] !== i) a = BH.jsxs(BH.Fragment, {
    children: [o, i]
  }), t[6] = o, t[7] = i, t[8] = a;else a = t[8];
  return a;
}
function pmm(e, t) {
  if (!t) return null;
  let n = t.source === "diff";
  if (!n && e !== "connected") return null;
  if (t.text && t.lineCount > 0) {
    let r = t.lineCount;
    return `\u29C9 ${r} ${r === 1 ? "line" : "lines"} ${n ? "from diff" : "selected"}`;
  }
  if (!n && t.filePath) return `\u29C9 In ${V_c.basename(t.filePath)}`;
  return null;
}
function fmm(e) {
  return e.replBridgeConnected;
}
function mmm(e) {
  return e.replBridgeSessionActive;
}
function gmm(e) {
  return e.replBridgeReconnecting;
}
function hmm(e) {
  return e.replBridgeError;
}
function ymm(e) {
  return e.replBridgeOutboundOnly;
}
function _mm(e) {
  return e.replBridgeSessionUrl;
}
var kdr,
  V_c,
  z_c,
  UTt,
  BH,
  V6o = 60,
  umm;