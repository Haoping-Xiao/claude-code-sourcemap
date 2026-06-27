// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module i$
// matched 2.1.88 source: src/tools/SyntheticOutputTool/SyntheticOutputTool.ts
// class=modified  jaccard=0.3424  score=0.6105  fileCov=0.4382
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: WORKFLOW_TOOL_NAME, CODE_REVIEW_WORKFLOW_NAME
// [unwrapped __esm module i$] deps: Xr, ii, At, Jt
((Hoa = R(Run(), 1)),
  (Gop = ve(() => H.object({}).passthrough())),
  (Wop = ve(() => H.string().describe("Structured output tool result"))));
((Xoo = ti({
  isMcp: false,
  isEnabled() {
    return true;
  },
  isConcurrencySafe() {
    return true;
  },
  isReadOnly() {
    return true;
  },
  isOpenWorld() {
    return false;
  },
  name: Ip,
  searchHint: "return the final response as structured JSON",
  maxResultSizeChars: 100000 /* 1e5 */,
  async description() {
    return "Return structured output in the requested format";
  },
  async prompt() {
    return "Use this tool to return your final response in the requested structured format. You MUST call this tool exactly once at the end of your response to provide the structured output.";
  },
  get inputSchema() {
    return Gop();
  },
  get outputSchema() {
    return Wop();
  },
  async call(e) {
    return {
      data: "Structured output provided successfully",
      structured_output: e,
      endsTurn: true,
    };
  },
  async checkPermissions(e) {
    return {
      behavior: "allow",
      updatedInput: e,
    };
  },
  renderToolUseMessage(e) {
    let t = Object.keys(e);
    if (t.length === 0) return null;
    if (t.length <= 3) return t.map((n) => `${n}: ${De(e[n])}`).join(", ");
    return `${t.length} fields: ${t.slice(0, 3).join(", ")}\u2026`;
  },
  mapToolResultToToolResultBlockParam(e, t) {
    return {
      tool_use_id: t,
      type: "tool_result",
      content: e,
    };
  },
})),
  (Aoa = new WeakMap()));
var qOn = "ExitWorktree";
var WORKFLOW_TOOL_NAME = "Workflow",
  CODE_REVIEW_WORKFLOW_NAME = "code-review";
function woa() {
  return process.env.CLAUDE_REPL_VARIANT;
}
function Y2t(e, t) {
  return (e ?? {})[t ?? JWe] !== void 0;
}
function LI() {
  if (!gG()) return false;
  if (ml(process.env.CLAUDE_CODE_REPL)) return false;
  if (ut(process.env.CLAUDE_CODE_REPL)) return true;
  let e = process.env.CLAUDE_CODE_ENTRYPOINT;
  if (e === "cli" || e === "remote") return at("tengu_slate_harbor", false);
  return false;
}
var Fm = "REPL",
  JWe = "main",
  Pct;
