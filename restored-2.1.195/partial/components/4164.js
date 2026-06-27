// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ill
// matched 2.1.88 source: src/components/messages/UserToolResultMessage/UserToolSuccessMessage.tsx
// class=partial  jaccard=0.2333  score=0.4126  fileCov=0.3493
// note: low-confidence suggestion: src/components/messages/UserToolResultMessage/UserToolSuccessMessage.tsx; dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ill] deps: components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, services/mockRateLimits.ts, components/CompactSummary.tsx
oll = R(lt(), 1), cKn = R(se(), 1);
function qMe(e) {
  return t => e(n => {
    let r = t(n.classifierApprovals);
    if (r === n.classifierApprovals) return n;
    return {
      ...n,
      classifierApprovals: r
    };
  });
}
function all(e, t) {
  return;
}
function lll(e, t, n) {
  if (!e) return;
  e(r => {
    let o = r.approvals.get(t);
    if (o?.classifier === "auto-mode" && o.reason === n) return r;
    let s = new Map(r.approvals);
    return s.set(t, {
      classifier: "auto-mode",
      reason: n
    }), {
      ...r,
      approvals: s
    };
  });
}
function cll(e, t) {
  let n = e.classifierApprovals.approvals.get(t);
  if (!n || n.classifier !== "auto-mode") return;
  return n.reason;
}
function ull(e, t) {
  if (!e) return;
  e(n => {
    if (n.checking.has(t)) return n;
    let r = new Set(n.checking);
    return r.add(t), {
      ...n,
      checking: r
    };
  });
}
function VMe(e, t) {
  if (!e) return;
  e(n => {
    if (!n.checking.has(t)) return n;
    let r = new Set(n.checking);
    return r.delete(t), {
      ...n,
      checking: r
    };
  });
}
function dll(e, t) {
  if (!e) return;
  e(n => {
    if (!n.approvals.has(t)) return n;
    let r = new Map(n.approvals);
    return r.delete(t), {
      ...n,
      approvals: r
    };
  });
}
function pll(e) {
  if (!e) return;
  e(t => {
    if (t.approvals.size === 0 && t.checking.size === 0) return t;
    return {
      approvals: new Map(),
      checking: new Set()
    };
  });
}
function UserToolSuccessMessage(e) {
  let t = fll.c(42),
    {
      message: n,
      lookups: r,
      toolUseID: o,
      progressMessagesForMessage: s,
      style: i,
      tool: a,
      tools: l,
      verbose: c,
      width: u,
      isTranscriptMode: d
    } = e,
    [p] = na(),
    f = Ht(sif),
    m = Dc(),
    g;
  if (t[0] !== m || t[1] !== o) g = () => all(m.getState(), o), t[0] = m, t[1] = o, t[2] = g;else g = t[2];
  let [h] = O8t.useState(g),
    y;
  if (t[3] !== m || t[4] !== o) y = () => cll(m.getState(), o), t[3] = m, t[4] = o, t[5] = y;else y = t[5];
  let [b] = O8t.useState(y),
    _;
  if (t[6] !== m.setState || t[7] !== o) _ = () => {
    dll(qMe(m.setState), o);
  }, t[6] = m.setState, t[7] = o, t[8] = _;else _ = t[8];
  let S;
  if (t[9] !== m || t[10] !== o) S = [m, o], t[9] = m, t[10] = o, t[11] = S;else S = t[11];
  if (O8t.useEffect(_, S), !n.toolUseResult || !a) return null;
  if (a.isTransparentWrapper?.()) return null;
  let A, v;
  if (t[12] !== f || t[13] !== d || t[14] !== r || t[15] !== n.toolUseResult || t[16] !== s || t[17] !== i || t[18] !== p || t[19] !== a || t[20] !== o || t[21] !== l || t[22] !== c) {
    v = Symbol.for("react.early_return_sentinel");
    e: {
      let M = a.outputSchema?.safeParse(n.toolUseResult);
      if (M && !M.success) {
        v = null;
        break e;
      }
      let N = M?.data ?? n.toolUseResult;
      A = a.renderToolResultMessage?.(N, kke(s), {
        style: i,
        theme: p,
        tools: l,
        verbose: c,
        isTranscriptMode: d,
        isBriefOnly: f,
        input: r.toolUseByToolUseID.get(o)?.input
      }) ?? null;
    }
    t[12] = f, t[13] = d, t[14] = r, t[15] = n.toolUseResult, t[16] = s, t[17] = i, t[18] = p, t[19] = a, t[20] = o, t[21] = l, t[22] = c, t[23] = A, t[24] = v;
  } else A = t[23], v = t[24];
  if (v !== Symbol.for("react.early_return_sentinel")) return v;
  let C = A;
  if (C === null) return null;
  let I = a.userFacingName(void 0) === "" ? void 0 : u,
    k;
  if (t[25] !== h) k = null, t[25] = h, t[26] = k;else k = t[26];
  let D;
  if (t[27] !== b) D = b && zMe.jsx(qn, {
    height: 1,
    children: zMe.jsx(w, {
      dimColor: true,
      children: "Allowed by auto mode classifier"
    })
  }), t[27] = b, t[28] = D;else D = t[28];
  let P;
  if (t[29] !== C || t[30] !== I || t[31] !== k || t[32] !== D) P = zMe.jsxs(U, {
    flexDirection: "column",
    width: I,
    children: [C, k, D]
  }), t[29] = C, t[30] = I, t[31] = k, t[32] = D, t[33] = P;else P = t[33];
  let O;
  if (t[34] !== d || t[35] !== r || t[36] !== o || t[37] !== c) O = zMe.jsx(s6e, {
    children: zMe.jsx(Mzn, {
      hookEvent: "PostToolUse",
      lookups: r,
      toolUseID: o,
      verbose: c,
      isTranscriptMode: d
    })
  }), t[34] = d, t[35] = r, t[36] = o, t[37] = c, t[38] = O;else O = t[38];
  let L;
  if (t[39] !== P || t[40] !== O) L = zMe.jsxs(U, {
    flexDirection: "column",
    children: [P, O]
  }), t[39] = P, t[40] = O, t[41] = L;else L = t[41];
  return L;
}
function sif(e) {
  return e.isBriefOnly;
}
var fll, O8t, zMe;