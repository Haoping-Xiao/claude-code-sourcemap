// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module O6n
// matched 2.1.88 source: src/utils/hooks/registerFrontmatterHooks.ts
// class=modified  jaccard=0.3763  score=0.7291  fileCov=0.4374
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module O6n] deps: utils/messages.ts
((Xtf = ["stream_event", "stream_request_start", "response_length", ...Ewo]), (Jtf = new Set(Xtf)));
function registerFrontmatterHooks(setAppState, sessionId, hooks, sourceName, o = false) {
  if (!hooks || Object.keys(hooks).length === 0) return;
  let s = 0;
  for (let i of GO) {
    let a = hooks[i];
    if (!a || a.length === 0) continue;
    let l = i;
    if (o && i === "Stop")
      ((l = "SubagentStop"),
        T(
          `Converting Stop hook to SubagentStop for ${sourceName} (subagents trigger SubagentStop)`,
        ));
    for (let c of a) {
      let u = c.matcher ?? "",
        d = c.hooks;
      if (!d || d.length === 0) continue;
      for (let p of d) (setAppState.add(sessionId, l, u, p), s++);
    }
  }
  if (s > 0) T(`Registered ${s} frontmatter hook(s) from ${sourceName} for session ${sessionId}`);
}
