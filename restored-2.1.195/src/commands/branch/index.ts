// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WKl
// matched 2.1.88 source: src/commands/branch/index.ts
// class=modified  jaccard=0.2934  score=0.4029  fileCov=0.5191
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module WKl]
((vVf = {
  type: "local-jsx",
  name: "branch",
  description: "Create a branch of the current conversation at this point",
  argumentHint: "[name]",
  load: () => Promise.resolve().then(() => (Q$o(), J$o)),
}),
  (GKl = vVf));
var qKl = {};
var call = async (e, t, n) => {
  let r = n.trim();
  if (!r)
    return (
      e("Usage: /fork \\<directive\\>", {
        display: "system",
      }),
      null
    );
  let o = await K$o(r, t, t.canUseTool ?? RL);
  if (!o)
    return (
      e(
        Gv()
          ? "Forking is not available in coordinator sessions. Use /branch instead."
          : "Cannot fork before the first conversation turn",
        {
          display: "system",
        },
      ),
      null
    );
  return (
    e(`${Cet} forked ${o.name} (${o.agentId.slice(-4)})`, {
      display: "system",
    }),
    null
  );
};
