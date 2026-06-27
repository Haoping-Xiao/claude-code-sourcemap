// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F8n
// matched 2.1.88 source: src/services/api/claude.ts
// class=modified (alt of src/services/api/claude.ts)  jaccard=0.0206  score=0.3399  fileCov=0.0214
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module F8n] deps: Xr
fMe = Dy({
  kind: "permission_file",
  payload: ve(() =>
    H.custom(
      (e) =>
        typeof e === "object" &&
        e !== null &&
        "requestId" in e &&
        "toolName" in e &&
        "permissionResult" in e &&
        "filePath" in e &&
        "operationType" in e,
    ),
  ),
  result: ve(() => H.custom((e) => typeof e === "object" && e !== null && "behavior" in e)),
  default: {
    behavior: "cancelled",
  },
});
function b8e(e) {
  return e.type === "advisor_tool_result" || (e.type === "server_tool_use" && e.name === "advisor");
}
function F6() {
  if (ut(process.env.CLAUDE_CODE_DISABLE_ADVISOR_TOOL)) return false;
  if (fr() !== "firstParty" || !CM()) return false;
  if (ut(process.env.CLAUDE_CODE_ENABLE_EXPERIMENTAL_ADVISOR_TOOL)) return true;
  return at("tengu_sage_compass2", {}).enabled ?? false;
}
function avo() {
  return Oe.CLAUDE_CODE_ENABLE_EXPERIMENTAL_ADVISOR_TOOL;
}
function lvo(e) {
  return del[mo(zo(e))];
}
function cvo(e) {
  let t = mo(zo(e));
  if (!Ir()) {
    if (yye(t) && !fle()) return;
    if (ert(t) && !bAn()) return;
  }
  return del[t];
}
function mMe(e) {
  if (avo()) return true;
  return lvo(e) !== void 0;
}
function j8n(e) {
  return gMe(dp(zo(e)));
}
function zht() {
  return EZp.filter((e) => j8n(e));
}
function gMe(e) {
  if (!xa(e)) return false;
  if (avo()) return true;
  let t = mo(e),
    n = cvo(t);
  return n !== void 0 && n >= SZp;
}
function S8e(e, t) {
  if (avo()) return true;
  let n = lvo(e),
    r = cvo(t);
  if (n === void 0 || r === void 0) return true;
  return n <= r;
}
function pel(e, t) {
  let n = lvo(e),
    r = cvo(t);
  if (n === void 0 || r === void 0) return true;
  return n <= r;
}
function fel(e, t) {
  if (!F6() || !e) return;
  let n = dp(zo(e));
  if (!mMe(t)) {
    if ((T(`[AdvisorTool] Skipping advisor - base model ${t} does not support advisor`), !uel))
      ((uel = true),
        console.warn(
          `Warning: Advisor disabled \u2014 base model '${t}' isn't in the advisor capability table. Switch to a public model alias (opus, sonnet, fable) or set CLAUDE_CODE_ENABLE_EXPERIMENTAL_ADVISOR_TOOL=1.`,
        ));
    return;
  }
  if (!gMe(n)) {
    T(`[AdvisorTool] Skipping advisor - ${n} is not a valid advisor model`);
    return;
  }
  if (!S8e(t, n)) {
    T(
      `[AdvisorTool] Skipping advisor - ${n} cannot advise ${t} (advisor must be at least as capable as the base model)`,
    );
    return;
  }
  return (T(`[AdvisorTool] Server-side tool enabled with ${n} as the advisor model`), n);
}
function mel() {
  if (!F6()) return;
  return Dr().advisorModel;
}
function gel(e) {
  let t = e.iterations;
  if (!t) return [];
  return t.filter((n) => n.type === "advisor_message");
}
var del,
  SZp = 2,
  EZp,
  uel = false,
  hel = `# Advisor Tool

You have access to an \`advisor\` tool backed by a stronger reviewer model. It takes NO parameters -- when you call advisor(), your entire conversation history is automatically forwarded. They see the task, every tool call you've made, every result you've seen.

Call advisor BEFORE substantive work -- before writing, before committing to an interpretation, before building on an assumption. If the task requires orientation first (finding files, fetching a source, seeing what's there), do that, then call advisor. Orientation is not substantive work. Writing, editing, and declaring an answer are.

Also call advisor:
- When you believe the task is complete. BEFORE this call, make your deliverable durable: write the file, save the result, commit the change. The advisor call takes time; if the session ends during it, a durable result persists and an unwritten one doesn't.
- When stuck -- errors recurring, approach not converging, results that don't fit.
- When considering a change of approach.

On tasks longer than a few steps, call advisor at least once before committing to an approach and once before declaring done. On short reactive tasks where the next action is dictated by tool output you just read, you don't need to keep calling -- the advisor adds most of its value on the first call, before the approach crystallizes.

Give the advice serious weight. If you follow a step and it fails empirically, or you have primary-source evidence that contradicts a specific claim (the file says X, the paper states Y), adapt. A passing self-test is not evidence the advice is wrong -- it's evidence your test doesn't check what the advice is checking.

If you've already retrieved data pointing one way and the advisor points another: don't silently switch. Surface the conflict in one more advisor call -- "I found X, you suggest Y, which constraint breaks the tie?" The advisor saw your evidence but may have underweighted it; a reconcile call is cheaper than committing to the wrong branch.`;
