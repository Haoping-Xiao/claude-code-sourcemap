// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V2l
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0035  score=0.2012  fileCov=0.0036
// note: nearest: src/screens/REPL.tsx (0.0035); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module V2l] deps: @modelcontextprotocol/sdk/dist/esm/types.js, utils/debug.ts, utils/errors.ts, hooks/useSettings.ts
gXt = require("fs/promises"), j2l = require("os"), $He = R(require("path")), PNf = ve(() => H.object({
  query: H.string().min(1),
  should_trigger: H.boolean()
}));
function z2l({
  onComplete: e,
  target: t
}) {
  let n = mrr.useRef(new AbortController());
  return mrr.useEffect(() => {
    let r = n.current;
    async function o() {
      if (!t) {
        e(`Usage: /plugin eval [path]

Run trigger evaluations for a skill against the queries in its evals/ folder.

Examples:
  /plugin eval ./my-skill
  /plugin eval ~/.claude/skills/pdf-tools

Each evals/*.md file needs frontmatter with \`query\` (string)
and \`should_trigger\` (boolean). The spec recommends at least five.

Or from the command line:
  claude plugin eval [path]`);
        return;
      }
      try {
        let s = await W2l(t, r.signal, G2l);
        process.exitCode = s.failCount > 0 ? 1 : 0;
        let i = s.queries.length === 0 ? "" : s.failCount > 0 ? `

${nt.cross} Evaluation failed` : s.skippedCount === s.queries.length ? `

${nt.info} Eval queries validated; trigger tests pending model integration` : `

${nt.tick} Evaluation passed`;
        e(q2l(s) + i);
      } catch (s) {
        process.exitCode = 2, T(`Plugin eval failed for ${t}: ${be(s)}`, {
          level: "error"
        }), e(`${nt.cross} ${be(s)}`);
      }
    }
    return o(), () => r.abort();
  }, [e, t]), JBo.jsx(U, {
    flexDirection: "column",
    children: JBo.jsx(w, {
      children: "Running evaluation\u2026"
    })
  });
}
var mrr, JBo;