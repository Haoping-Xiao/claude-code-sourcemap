// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rme
// matched 2.1.88 source: src/components/tasks/renderToolActivity.tsx
// class=modified  jaccard=0.4705  score=0.8959  fileCov=0.4978
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function asr(e, t, n) {
  let r = _l(t, e.toolName);
  if (!r) return e.toolName;
  try {
    let o = Pae(e.input),
      s = r.inputSchema.safeParse(e.input),
      i = s.success ? s.data : {},
      a = r.userFacingName(i);
    if (!a) return e.toolName;
    let l =
      o ??
      r.renderToolUseMessage(i, {
        theme: n,
        verbose: false,
      });
    if (l)
      return l8l.jsxs(w, {
        children: [a, "(", l, ")"],
      });
    return a;
  } catch {
    return e.toolName;
  }
}
var l8l;
