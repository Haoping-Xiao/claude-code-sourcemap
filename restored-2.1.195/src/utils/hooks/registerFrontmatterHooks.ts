// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module O6n
// matched 2.1.88 source: src/utils/hooks/registerFrontmatterHooks.ts
// class=modified  jaccard=0.3763  score=0.7291  fileCov=0.4374
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module O6n] deps: Awo
((Xtf = ["stream_event", "stream_request_start", "response_length", ...Ewo]), (Jtf = new Set(Xtf)));
function $rl(e, t, n, r, o = false) {
  if (!n || Object.keys(n).length === 0) return;
  let s = 0;
  for (let i of GO) {
    let a = n[i];
    if (!a || a.length === 0) continue;
    let l = i;
    if (o && i === "Stop")
      ((l = "SubagentStop"),
        T(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`));
    for (let c of a) {
      let u = c.matcher ?? "",
        d = c.hooks;
      if (!d || d.length === 0) continue;
      for (let p of d) (e.add(t, l, u, p), s++);
    }
  }
  if (s > 0) T(`Registered ${s} frontmatter hook(s) from ${r} for session ${t}`);
}
