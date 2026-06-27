// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qbe
// matched 2.1.88 source: src/memdir/memoryAge.ts
// class=modified  jaccard=0.1737  score=0.2876  fileCov=0.3049
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Qbe] deps: IB, Zf, ft, np, Tc, kt, je, At, es, vn, Ect
POn = Cn(
  async (e) => `Execute a skill within the main conversation

When users ask you to perform tasks, check if any of the available skills match. Skills provide specialized capabilities and domain knowledge.

When users reference a "slash command" or "/<something>", they are referring to a skill. Use this tool to invoke it.

How to invoke:
- Set \`skill\` to the exact name of an available skill (no leading slash). For plugin-namespaced skills use the fully qualified \`plugin:skill\` form.
- Set \`args\` to pass optional arguments.
- Some skills are scoped to a directory: their name is prefixed with the directory (e.g. \`apps/web:deploy\`) and their description says which directory they apply to. When a skill name has both a scoped and an unscoped variant, pick by the files you are working on: if the files are under a variant's directory, invoke that variant (most specific directory wins); otherwise invoke the unscoped one.

Important:
- Available skills are listed in system-reminder messages in the conversation
- Only invoke a skill that appears in that list, or one the user explicitly typed as \`/<name>\` in their message. Never guess or invent a skill name from training data; otherwise do not call this tool
- When a skill matches the user's request, this is a BLOCKING REQUIREMENT: invoke the relevant Skill tool BEFORE generating any other response about the task
- NEVER mention a skill without actually calling this tool
- Do not invoke a skill that is already running
- Do not use this tool for built-in CLI commands (like /help, /clear, etc.)
- If you see a <${rj}> tag in the current conversation turn, the skill has ALREADY been loaded - follow the instructions directly instead of calling this tool again
`,
);
function rop(e) {
  return Math.max(0, Math.floor((Date.now() - e) / 86400000));
}
function Coo(e) {
  let t = rop(e);
  if (t <= 1) return "";
  return (
    `This memory is ${t} days old. ` +
    "Memories are point-in-time observations, not live state \u2014 " +
    "claims about code behavior or file:line citations may be outdated. Verify against current code before asserting as fact."
  );
}
function Ura(e) {
  let t = Coo(e);
  if (!t) return "";
  return `<system-reminder>${t}</system-reminder>
`;
}
function If(e, t = 4) {
  if (typeof e !== "string") return 0;
  return Math.round(e.length / t);
}
function oop(e) {
  switch (e) {
    case "json":
    case "jsonl":
    case "jsonc":
      return 2;
    default:
      return 4;
  }
}
function Fra(e, t) {
  return If(e, oop(t));
}
function PRe(e, t) {
  if (!e) return 0;
  if (typeof e === "string") return If(e, t);
  let n = 0;
  for (let r of e) n += sop(r, t);
  return n;
}
function sop(e, t) {
  if (typeof e === "string") return If(e, t);
  if (e.type === "text") return If(e.text, t);
  if (e.type === "image" || e.type === "document") return 2000;
  if (e.type === "tool_result") return PRe(e.content, t);
  if (e.type === "tool_use") return If(e.name + De(e.input ?? {}), t);
  if (e.type === "thinking") return If(e.thinking, t);
  if (e.type === "redacted_thinking") return If(e.data, t);
  return If(De(e), t);
}
