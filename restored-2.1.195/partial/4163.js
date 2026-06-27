// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rll
// matched 2.1.88 source: src/components/sandbox/SandboxDoctorSection.tsx
// class=partial  jaccard=0.1939  score=1  fileCov=0.1939
// note: low-confidence suggestion: src/components/sandbox/SandboxDoctorSection.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rll = E(() => {
  Lyt();
  ql();
  tll = R(lt(), 1), yIo = R(se(), 1);
});
function sll(e) {
  let t = oll.c(13),
    {
      input: n,
      progressMessagesForMessage: r,
      style: o,
      tool: s,
      tools: i,
      verbose: a,
      isTranscriptMode: l
    } = e,
    {
      columns: c
    } = br(),
    [u] = na();
  if (!s || !s.renderToolUseRejectedMessage) {
    let m;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) m = cKn.jsx(jpe, {}), t[0] = m;else m = t[0];
    return m;
  }
  let d = s.inputSchema,
    p,
    f;
  if (t[1] !== c || t[2] !== n || t[3] !== l || t[4] !== r || t[5] !== o || t[6] !== u || t[7] !== s || t[8] !== i || t[9] !== a) {
    f = Symbol.for("react.early_return_sentinel");
    e: {
      let m = d.safeParse(n);
      if (!m.success) {
        let g;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) g = cKn.jsx(jpe, {}), t[12] = g;else g = t[12];
        f = g;
        break e;
      }
      p = s.renderToolUseRejectedMessage(m.data, {
        columns: c,
        messages: [],
        tools: i,
        verbose: a,
        progressMessagesForMessage: kke(r),
        style: o,
        theme: u,
        isTranscriptMode: l
      }) ?? cKn.jsx(jpe, {});
    }
    t[1] = c, t[2] = n, t[3] = l, t[4] = r, t[5] = o, t[6] = u, t[7] = s, t[8] = i, t[9] = a, t[10] = p, t[11] = f;
  } else p = t[10], f = t[11];
  if (f !== Symbol.for("react.early_return_sentinel")) return f;
  return p;
}
var oll, cKn;