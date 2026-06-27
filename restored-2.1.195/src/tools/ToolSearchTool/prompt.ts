// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qRe
// matched 2.1.88 source: src/tools/ToolSearchTool/prompt.ts
// class=modified  jaccard=0.1421  score=0.2697  fileCov=0.2309
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: isDeferredTool, getPrompt, formatDeferredToolLine, TOOL_SEARCH_TOOL_NAME
// [unwrapped __esm module qRe] deps: ft, np, l$, Un, kt, je, fn, co, HU, fh
Boa = require("crypto");
h4 = {
  agentType: PX,
  whenToUse:
    'Fork \u2014 inherits full conversation context. Selected explicitly via subagent_type: "fork" when the fork experiment is active; never the default.',
  tools: ["*"],
  maxTurns: 200,
  model: "inherit",
  permissionMode: "bubble",
  source: "built-in",
  baseDir: "built-in",
  getSystemPrompt: () => "",
};
function isDeferredTool(e) {
  if (e.alwaysLoad === true) return false;
  if (goa().includes(e.name)) return false;
  if (e.isMcp === true) return true;
  if (e.name === _h) return false;
  if (e.name === ss) {
    if ((qRe(), ro(Foa)).isForkSubagentEnabled()) return false;
  }
  if (e.name === dsp) return false;
  if (e.name === psp) return false;
  if (e.name === B8 && opn()) return false;
  if (e.name === yh && nSe()) return false;
  if (e.name === oSe && process.env.CLAUDE_CODE_SESSION_KIND === "bg") return false;
  return e.shouldDefer === true;
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
  msp =
    " Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.",
  gsp = ` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`,
  hsp = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;
