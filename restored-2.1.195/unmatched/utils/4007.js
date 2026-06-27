// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F9t
// matched 2.1.88 source: src/utils/bash/bashParser.ts
// class=new  jaccard=0.0238  score=0.1759  fileCov=0.0268
// note: nearest: src/utils/bash/bashParser.ts (0.0238); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module F9t] deps: Ybe, sN, Is, xue
rtl = require("crypto"), ZZp = new Set(["command_name", "word", "string", "raw_string", "number", "concatenation"]), eef = new RegExp(otl, "g"), tef = new RegExp(stl, "g"), nef = new RegExp(itl, "g"), ref = new RegExp(atl, "g"), oef = new RegExp(ltl, "g"), sef = new RegExp(ctl, "g");
function Lvo() {
  let e = process.env.CLAUDE_BG_ISOLATION;
  if (e === "worktree" || e === "none") return e;
  let t = hho();
  if (t) return t.bgIsolation;
  return Dr().worktree?.bgIsolation;
}
function tyt(e, t) {
  {
    if (t.agentWorktree) {
      let o = yr();
      return e.startsWith(o + eyt.sep) && !e.startsWith(t.agentWorktree + eyt.sep) ? `This agent is isolated in the worktree ${t.agentWorktree}. Edit the worktree copy of this file instead of the shared-checkout path.` : null;
    }
    if (process.env.CLAUDE_CODE_SESSION_KIND !== "bg" && !hho()) return null;
    let n = Gm();
    if (n) return e.startsWith(n.originalCwd + eyt.sep) && !e.startsWith(n.worktreePath + eyt.sep) ? `This session is now isolated in ${n.worktreePath}. Edit the worktree copy of this file instead of the shared-checkout path.` : null;
    if (Lvo() === "none") return null;
    let r = t.agentId ? yr() : $t();
    if (!e.startsWith(r + eyt.sep)) return null;
    if (!Tu(r) && !Jte()) return null;
    if (HRt(r)) return null;
    if (t.agentId) return `This subagent's parent bg session hasn't isolated yet, so writes to the shared checkout are blocked. Re-spawn this agent with \`isolation: "worktree"\`, or have the parent call ${oSe} before spawning. (To disable this guard for this repo, set \`"worktree": {"bgIsolation": "none"}\` in .claude/settings.json.)`;
    return `This background session hasn't isolated its changes yet. Call ${oSe} first so edits land in a worktree instead of the shared checkout, then retry this edit using the worktree path. (To disable this guard for this repo, set \`"worktree": {"bgIsolation": "none"}\` in .claude/settings.json.)`;
  }
  return null;
}
var eyt;