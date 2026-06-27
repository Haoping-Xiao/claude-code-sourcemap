// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f4
// matched 2.1.88 source: src/tools/BriefTool/prompt.ts
// class=modified (alt of src/tools/BriefTool/prompt.ts)  jaccard=0.089  score=0.1214  fileCov=0.25
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var f4 = E(() => {
  jop = `## Talking to the user

${"SendUserMessage"} is where your replies go. Text outside it is visible if the user expands the detail view, but most won't \u2014 assume unread. Anything you want them to actually see goes through ${"SendUserMessage"}. The failure mode: the real answer lives in plain text while ${"SendUserMessage"} just says "done!" \u2014 they see "done!" and miss everything.

So: every time the user says something, the reply they actually read comes through ${"SendUserMessage"}. Even for "hi". Even for "thanks".

If you can answer right away, send the answer. If you need to go look \u2014 run a command, read files, check something \u2014 ack first in one line ("On it \u2014 checking the test output"), then work, then send the result. Without the ack they're staring at a spinner.

For longer work: ack \u2192 work \u2192 result. Between those, send a checkpoint when something useful happened \u2014 a decision you made, a surprise you hit, a phase boundary. Skip the filler ("running tests...") \u2014 a checkpoint earns its place by carrying information.

Keep messages tight \u2014 the decision, the file:line, the PR number. Second person always ("your config"), never third.`;
});
var WOn = {};
_t(WOn, {
  SEND_USER_FILE_TOOL_PROMPT: () => SEND_USER_FILE_TOOL_PROMPT,
  SEND_USER_FILE_TOOL_NAME: () => SEND_USER_FILE_TOOL_NAME,
  DESCRIPTION: () => DESCRIPTION,
});
var SEND_USER_FILE_TOOL_NAME = "SendUserFile",
  DESCRIPTION = "Send one or more files to the user",
  SEND_USER_FILE_TOOL_PROMPT = `Send files to the user. Use this when the file *is* the deliverable \u2014 a generated diagram, a report, a screenshot, a built artifact \u2014 and you want it surfaced, not just mentioned. Paths can be absolute or relative to the current working directory.

Add a \`caption\` when a one-liner of context helps ("the failing case is row 42", "before vs after"). Skip it if the file speaks for itself.

Set \`status\` on every call. Use \`proactive\` when you're initiating \u2014 the user is away and you want this to reach their phone (build artifact ready, report generated). Use \`normal\` when replying to something the user just said.

Files must already exist on the local filesystem \u2014 the tool sends files, it doesn't fetch URLs or render content. When unsure of a path, verify with ls first; absolute paths avoid ambiguity about the working directory.

Example: SendUserFile({ files: ["report.md"], caption: "Here's the report.", status: "normal" })`;
var U8 = "TaskOutput";
var xX = "EnterPlanMode";
var mf = "AskUserQuestion",
  hoa = 12,
  yoa =
    "Asks the user multiple choice questions to gather information, clarify ambiguity, understand preferences, make decisions or offer them choices.",
  _oa,
  zoo,
  boa = `
Reserve this for decisions where the user's answer changes what you do next \u2014 not for choices with a conventional default or facts you can verify in the codebase yourself. In those cases pick the obvious option, mention it in your response, and proceed.
`;
