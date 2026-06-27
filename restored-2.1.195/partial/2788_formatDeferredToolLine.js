// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qRe
// matched 2.1.88 source: src/tools/AgentTool/forkSubagent.ts
// class=partial  jaccard=0.1119  score=0.3097  fileCov=0.1491
// note: low-confidence suggestion: src/tools/AgentTool/forkSubagent.ts; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var qRe = E(() => {
  ft();
  np();
  l$();
  Un();
  kt();
  je();
  fn();
  co();
  HU();
  fh();
  Boa = require("crypto");
  h4 = {
    agentType: PX,
    whenToUse: 'Fork \u2014 inherits full conversation context. Selected explicitly via subagent_type: "fork" when the fork experiment is active; never the default.',
    tools: ["*"],
    maxTurns: 200,
    model: "inherit",
    permissionMode: "bubble",
    source: "built-in",
    baseDir: "built-in",
    getSystemPrompt: () => ""
  };
});
var fso = {};
_t(fso, {
  isDeferredTool: () => isDeferredTool,
  getPrompt: () => getPrompt,
  formatDeferredToolLine: () => formatDeferredToolLine,
  TOOL_SEARCH_TOOL_NAME: () => _h
});
function isDeferredTool(e) {
  if (e.alwaysLoad === !0) return !1;
  if (goa().includes(e.name)) return !1;
  if (e.isMcp === !0) return !0;
  if (e.name === _h) return !1;
  if (e.name === ss) {
    if ((qRe(), ro(Foa)).isForkSubagentEnabled()) return !1;
  }
  if (e.name === dsp) return !1;
  if (e.name === psp) return !1;
  if (e.name === B8 && opn()) return !1;
  if (e.name === yh && nSe()) return !1;
  if (e.name === oSe && process.env.CLAUDE_CODE_SESSION_KIND === "bg") return !1;
  return e.shouldDefer === !0;
}
function formatDeferredToolLine(e) {
  return e.name;
}
function getPrompt() {
  return fsp + (i1i() ? gsp : msp) + hsp;
}
var dsp,
  psp,
  fsp = `Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`,
  msp = " Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.",
  gsp = ` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`,
  hsp = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;