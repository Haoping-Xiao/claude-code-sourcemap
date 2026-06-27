// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kal
// matched 2.1.88 source: src/components/messages/UserToolResultMessage/UserToolErrorMessage.tsx
// class=partial  jaccard=0.1907  score=0.5129  fileCov=0.2329
// note: low-confidence suggestion: src/components/messages/UserToolResultMessage/UserToolErrorMessage.tsx; dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kal] deps: Ye, ql
Ial = R(lt(), 1), dIo = R(se(), 1);
function tKn(e) {
  let t = Ral.c(19),
    {
      progressMessagesForMessage: n,
      tool: r,
      tools: o,
      param: s,
      verbose: i,
      isTranscriptMode: a
    } = e;
  if (typeof s.content === "string" && s.content.includes(Jv)) {
    let c;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) c = cQ.jsx(qn, {
      height: 1,
      children: cQ.jsx(Fpe, {})
    }), t[0] = c;else c = t[0];
    return c;
  }
  if (typeof s.content === "string" && s.content.startsWith(pIo)) {
    let c;
    if (t[1] !== s.content) c = s.content.substring(pIo.length), t[1] = s.content, t[2] = c;else c = t[2];
    let u = c,
      d;
    if (t[3] !== u) d = cQ.jsx(A6n, {
      plan: u
    }), t[3] = u, t[4] = d;else d = t[4];
    return d;
  }
  if (typeof s.content === "string" && s.content.startsWith(o_t)) {
    let c;
    if (t[5] === Symbol.for("react.memo_cache_sentinel")) c = cQ.jsx(xal, {}), t[5] = c;else c = t[5];
    return c;
  }
  if (typeof s.content === "string" && nKn(s.content)) {
    let c;
    if (t[6] === Symbol.for("react.memo_cache_sentinel")) c = cQ.jsx(xs, {
      url: "https://code.claude.com/docs/s/claude-code-auto-mode"
    }), t[6] = c;else c = t[6];
    let u = c;
    {
      let p;
      if (t[7] !== s.content) p = Lal(s.content), t[7] = s.content, t[8] = p;else p = t[8];
      let f = p;
      if (f) {
        let m;
        if (t[9] !== f) m = cQ.jsx(qn, {
          children: cQ.jsxs(w, {
            dimColor: true,
            children: ["Denied by auto mode classifier ", ZFe, " ", f, " ", ZFe, " see ", u]
          })
        }), t[9] = f, t[10] = m;else m = t[10];
        return m;
      }
    }
    let d;
    if (t[11] === Symbol.for("react.memo_cache_sentinel")) d = cQ.jsx(qn, {
      children: cQ.jsxs(w, {
        dimColor: true,
        children: ["Denied by auto mode classifier ", ZFe, " see ", u]
      })
    }), t[11] = d;else d = t[11];
    return d;
  }
  let l;
  if (t[12] !== a || t[13] !== s.content || t[14] !== n || t[15] !== r || t[16] !== o || t[17] !== i) l = r?.renderToolUseErrorMessage?.(s.content, {
    progressMessagesForMessage: kke(n),
    tools: o,
    verbose: i,
    isTranscriptMode: a
  }) ?? cQ.jsx(AT, {
    result: s.content,
    verbose: i
  }), t[12] = a, t[13] = s.content, t[14] = n, t[15] = r, t[16] = o, t[17] = i, t[18] = l;else l = t[18];
  return l;
}
var Ral, cQ;