// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rme
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rme = E(() => {
  kt();
  yC();
});
function asr(e, t, n) {
  let r = _l(t, e.toolName);
  if (!r) return e.toolName;
  try {
    let o = Pae(e.input),
      s = r.inputSchema.safeParse(e.input),
      i = s.success ? s.data : {},
      a = r.userFacingName(i);
    if (!a) return e.toolName;
    let l = o ?? r.renderToolUseMessage(i, {
      theme: n,
      verbose: false
    });
    if (l) return l8l.jsxs(w, {
      children: [a, "(", l, ")"]
    });
    return a;
  } catch {
    return e.toolName;
  }
}
var l8l;