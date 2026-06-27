// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m7l
// matched 2.1.88 source: src/tasks/LocalAgentTask/LocalAgentTask.tsx
// class=partial  jaccard=0.0906  score=0.2635  fileCov=0.1213
// note: low-confidence suggestion: src/tasks/LocalAgentTask/LocalAgentTask.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var m7l = E(() => {
  Uh();
  wb();
  xYl();
  $Yl();
  BYl();
  WYl();
  zYl();
  XYl();
  ZYl();
  n7l();
  s7l();
  l7l();
  d7l();
  p7l = R(lt(), 1), wJt = R(se(), 1);
});
function o9f(e) {
  return e.type === "local_agent" && e.agentType !== "main-session" && e.status !== "completed" && e.status !== "failed" && e.status !== "killed";
}
function s9f(e) {
  return e.type === "local_agent" && e.agentType !== "main-session" && (e.status === "completed" || e.status === "failed" || e.status === "killed");
}
function i9f(e) {
  let t = e.result?.content?.[0]?.text ?? e.error ?? e.description;
  return Rs(Gd(t), 60);
}
function g7l(e) {
  let t = Vsr.c(47),
    {
      onExit: n
    } = e,
    r = Ht(d9f),
    o = Ht(u9f),
    s = Ho(),
    {
      headerFocused: i,
      focusHeader: a
    } = tx(),
    [l, c] = CJt.useState(),
    [, u] = CJt.useState(0),
    d;
  if (t[0] !== o) {
    d = new Map();
    for (let [M, N] of o) d.set(N, M);
    t[0] = o, t[1] = d;
  } else d = t[1];
  let p = d,
    f;
  if (t[2] !== r) f = Object.values(r).filter(o9f).sort(c9f), t[2] = r, t[3] = f;else f = t[3];
  let m = f,
    g;
  if (t[4] !== r) g = Object.values(r).filter(s9f).sort(l9f).slice(0, 5), t[4] = r, t[5] = g;else g = t[5];
  let h = g,
    y;
  if (t[6] !== h || t[7] !== m) y = [...m, ...h], t[6] = h, t[7] = m, t[8] = y;else y = t[8];
  let b = y,
    _;
  if (t[9] !== u) _ = () => u(a9f), t[9] = u, t[10] = _;else _ = t[10];
  Gc(_, m.length > 0 ? 1000 : null);
  let S = b.findIndex(M => M.id === l),
    A = S >= 0 ? b[S] : l === void 0 ? b[0] : void 0,
    v,
    C;
  if (t[11] !== A || t[12] !== l) v = () => {
    if (A && A.id !== l) c(A.id);
  }, C = [A, l], t[11] = A, t[12] = l, t[13] = v, t[14] = C;else v = t[13], C = t[14];
  CJt.useEffect(v, C);
  let x;
  if (t[15] !== b || t[16] !== a || t[17] !== i || t[18] !== n || t[19] !== A || t[20] !== l || t[21] !== S || t[22] !== s) x = M => {
    if (i) return;
    if (l !== void 0 && S < 0) {
      if (M.key === "up" || M.key === "down") M.preventDefault(), c(b[0]?.id);
      return;
    }
    let N = S < 0 ? 0 : S;
    if (M.key === "up") {
      if (M.preventDefault(), N === 0 || b.length === 0) a();else c(b[N - 1]?.id);
      return;
    }
    if (M.key === "down") {
      M.preventDefault(), c(b[Math.min(N + 1, b.length - 1)]?.id);
      return;
    }
    if (!A) return;
    if (M.key === "return") {
      M.preventDefault(), Hz(A.id, s), n();
      return;
    }
    if (M.key === "x" && !M.ctrl && !M.meta && !M.superKey && A.status === "running") M.preventDefault(), A.abortController?.abort();
  }, t[15] = b, t[16] = a, t[17] = i, t[18] = n, t[19] = A, t[20] = l, t[21] = S, t[22] = s, t[23] = x;else x = t[23];
  let I = x,
    k = !i,
    D;
  if (t[24] !== b.length) D = b.length === 0 && NH.jsx(Fl, {
    children: "No subagents are currently running."
  }), t[24] = b.length, t[25] = D;else D = t[25];
  let P;
  if (t[26] !== i || t[27] !== p || t[28] !== m || t[29] !== A?.id) {
    let M;
    if (t[31] !== i || t[32] !== p || t[33] !== A?.id) M = N => NH.jsx(p9f, {
      task: N,
      isSelected: N.id === A?.id && !i,
      name: p.get(N.id)
    }, N.id), t[31] = i, t[32] = p, t[33] = A?.id, t[34] = M;else M = t[34];
    P = m.map(M), t[26] = i, t[27] = p, t[28] = m, t[29] = A?.id, t[30] = P;
  } else P = t[30];
  let O;
  if (t[35] !== h || t[36] !== i || t[37] !== p || t[38] !== m.length || t[39] !== A?.id) O = h.length > 0 && NH.jsxs(NH.Fragment, {
    children: [NH.jsx(U, {
      marginTop: m.length > 0 ? 1 : 0,
      children: NH.jsx(w, {
        bold: true,
        dimColor: true,
        children: "Recently completed"
      })
    }), h.map(M => NH.jsx(f9f, {
      task: M,
      isSelected: M.id === A?.id && !i,
      name: p.get(M.id)
    }, M.id))]
  }), t[35] = h, t[36] = i, t[37] = p, t[38] = m.length, t[39] = A?.id, t[40] = O;else O = t[40];
  let L;
  if (t[41] !== I || t[42] !== P || t[43] !== O || t[44] !== k || t[45] !== D) L = NH.jsxs(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: k,
    onKeyDown: I,
    children: [D, P, O]
  }), t[41] = I, t[42] = P, t[43] = O, t[44] = k, t[45] = D, t[46] = L;else L = t[46];
  return L;
}
function a9f(e) {
  return e + 1;
}
function l9f(e, t) {
  return (t.endTime ?? 0) - (e.endTime ?? 0);
}
function c9f(e, t) {
  return e.startTime - t.startTime;
}
function u9f(e) {
  return e.agentNameRegistry;
}
function d9f(e) {
  return e.tasks;
}
function p9f(e) {
  let t = Vsr.c(30),
    {
      task: n,
      isSelected: r,
      name: o
    } = e,
    s = n.progress?.summary || n.description,
    i;
  if (t[0] !== s) i = Rs(s, 50), t[0] = s, t[1] = i;else i = t[1];
  let a = i,
    l = Math.max(0, Date.now() - n.startTime - (n.totalPausedMs ?? 0)),
    c;
  if (t[2] !== l) c = Yi(l), t[2] = l, t[3] = c;else c = t[3];
  let u = c,
    d = n.progress?.tokenCount,
    p = r ? "suggestion" : void 0,
    f = r ? "selected, running:" : "running:",
    m = r ? `${nt.pointer} ` : "  ",
    g;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) g = NH.jsx(w, {
    color: "success",
    children: Wvs
  }), t[4] = g;else g = t[4];
  let h;
  if (t[5] !== f || t[6] !== m) h = NH.jsxs(w, {
    "aria-label": f,
    children: [m, g]
  }), t[5] = f, t[6] = m, t[7] = h;else h = t[7];
  let y = o || n.agentType,
    b;
  if (t[8] !== y) b = NH.jsx(w, {
    bold: true,
    children: y
  }), t[8] = y, t[9] = b;else b = t[9];
  let _;
  if (t[10] !== o || t[11] !== n.agentType) _ = o && NH.jsxs(w, {
    dimColor: true,
    children: [" \xB7 ", n.agentType]
  }), t[10] = o, t[11] = n.agentType, t[12] = _;else _ = t[12];
  let S;
  if (t[13] !== a) S = NH.jsxs(w, {
    dimColor: true,
    children: [" \xB7 ", a]
  }), t[13] = a, t[14] = S;else S = t[14];
  let A;
  if (t[15] !== u) A = NH.jsxs(w, {
    dimColor: true,
    children: [" \xB7 ", u]
  }), t[15] = u, t[16] = A;else A = t[16];
  let v;
  if (t[17] !== d) v = d !== void 0 && d > 0 && NH.jsxs(w, {
    dimColor: true,
    children: [" \xB7 ", ou(d), " tokens"]
  }), t[17] = d, t[18] = v;else v = t[18];
  let C;
  if (t[19] !== r) C = r && NH.jsx(w, {
    dimColor: true,
    children: " \xB7 x to stop"
  }), t[19] = r, t[20] = C;else C = t[20];
  let x;
  if (t[21] !== b || t[22] !== _ || t[23] !== S || t[24] !== A || t[25] !== v || t[26] !== C || t[27] !== p || t[28] !== h) x = NH.jsx(U, {
    children: NH.jsxs(w, {
      color: p,
      children: [h, " ", b, _, S, A, v, C]
    })
  }), t[21] = b, t[22] = _, t[23] = S, t[24] = A, t[25] = v, t[26] = C, t[27] = p, t[28] = h, t[29] = x;else x = t[29];
  return x;
}
function f9f(e) {
  let t = Vsr.c(18),
    {
      task: n,
      isSelected: r,
      name: o
    } = e,
    s = r ? "suggestion" : void 0,
    i = !r,
    a = r ? "selected, " : "",
    l = r ? `${nt.pointer} ` : "  ",
    c;
  if (t[0] !== a || t[1] !== l) c = NH.jsx(w, {
    "aria-label": a,
    children: l
  }), t[0] = a, t[1] = l, t[2] = c;else c = t[2];
  let u = n.status === "completed" ? "success" : "error",
    d;
  if (t[3] !== u) d = NH.jsx(Hs, {
    status: u,
    withSpace: true
  }), t[3] = u, t[4] = d;else d = t[4];
  let p = o || n.agentType,
    f;
  if (t[5] !== p) f = NH.jsx(w, {
    bold: true,
    children: p
  }), t[5] = p, t[6] = f;else f = t[6];
  let m;
  if (t[7] !== n) m = i9f(n), t[7] = n, t[8] = m;else m = t[8];
  let g;
  if (t[9] !== m) g = NH.jsxs(w, {
    dimColor: true,
    children: [" \xB7 ", m]
  }), t[9] = m, t[10] = g;else g = t[10];
  let h;
  if (t[11] !== s || t[12] !== g || t[13] !== i || t[14] !== c || t[15] !== d || t[16] !== f) h = NH.jsx(U, {
    children: NH.jsxs(w, {
      color: s,
      dimColor: i,
      children: [c, d, f, g]
    })
  }), t[11] = s, t[12] = g, t[13] = i, t[14] = c, t[15] = d, t[16] = f, t[17] = h;else h = t[17];
  return h;
}
var Vsr, CJt, NH;