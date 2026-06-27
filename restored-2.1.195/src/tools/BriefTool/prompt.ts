// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IX
// matched 2.1.88 source: src/tools/BriefTool/prompt.ts
// class=modified  jaccard=0.1352  score=0.2274  fileCov=0.25
// note: deminified; 7 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var IX = E(() => {
  ft();
  Un();
  Vw();
  er();
  je();
  fn();
  Ls();
  Oop = ["claude-3-5-haiku", "claude-3-haiku"];
  Bop = [];
});
var oSe = "EnterWorktree";
var _h = "ToolSearch";
var URe = {};
_t(URe, {
  PEWTER_OWL_TOOL_PROMPT: () => PEWTER_OWL_TOOL_PROMPT,
  LEGACY_BRIEF_TOOL_NAME: () => LEGACY_BRIEF_TOOL_NAME,
  DESCRIPTION: () => DESCRIPTION,
  BRIEF_TOOL_PROMPT: () => BRIEF_TOOL_PROMPT,
  BRIEF_TOOL_NAME: () => BRIEF_TOOL_NAME,
  BRIEF_PROACTIVE_SECTION: () => BRIEF_PROACTIVE_SECTION,
  BRIEF_ENFORCE_SENTINEL: () => BRIEF_ENFORCE_SENTINEL,
});
var BRIEF_TOOL_NAME = "SendUserMessage",
  LEGACY_BRIEF_TOOL_NAME = "Brief",
  BRIEF_ENFORCE_SENTINEL = "You ended the turn without calling SendUserMessage.",
  DESCRIPTION = "Send a message to the user",
  BRIEF_TOOL_PROMPT =
    "Send a message the user will read. Text outside this tool is visible in the detail view, but most won't open it \u2014 the answer lives here.\n\n`message` supports markdown. `attachments` accepts two forms per entry: a file path string (absolute or cwd-relative) for a file you can read here \u2014 images, diffs, logs \u2014 or the exact {file_uuid, file_name, size, is_image} object a device tool like `attach_file` returned to you. Use the path form when the file is on your working filesystem; use the object form when the user's device already uploaded the file and handed you a reference \u2014 pass that object through verbatim, don't try to path it.\n\n`status` labels intent: 'normal' when replying to what they just asked; 'proactive' when you're initiating \u2014 a scheduled task finished, a blocker surfaced during background work, you need input on something they haven't asked about. Set it honestly; downstream routing uses it.",
  PEWTER_OWL_TOOL_PROMPT =
    "Send a message the user will read verbatim. Use this for content they need to see exactly as written between tool calls \u2014 a generated code snippet, a specific value, a direct reply to something they asked mid-task. Don't use it for routine narration of what you're about to do, or for your final answer \u2014 normal text reaches them for those.",
  BRIEF_PROACTIVE_SECTION;
