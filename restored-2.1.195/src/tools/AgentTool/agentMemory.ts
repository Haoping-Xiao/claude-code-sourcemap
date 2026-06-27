// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GNt
// matched 2.1.88 source: src/tools/AgentTool/agentMemory.ts
// class=modified  jaccard=0.4486  score=0.9266  fileCov=0.4651
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module GNt] deps: dn, Un, kt, iit, CNi, je, fn, At, es, ys, k0, dr, LNi, UNt, Uh, MM, NNi
BNi = require("path");
function WNi(e) {
  let t = e.replace(/[^a-zA-Z0-9\-_]/g, "-");
  return t === "" ? "unknown" : t;
}
function qNi(e) {
  if (process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR)
    return (
      SI.join(
        process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR,
        "projects",
        LE(qf(rc()) ?? rc()),
        "agent-memory-local",
        e,
      ) + SI.sep
    );
  return SI.join($t(), ".claude", "agent-memory-local", e) + SI.sep;
}
function cit(e, t) {
  let n = WNi(e);
  switch (t) {
    case "project":
      return SI.join($t(), ".claude", "agent-memory", n) + SI.sep;
    case "local":
      return qNi(n);
    case "user":
      return SI.join(ace(), "agent-memory", n) + SI.sep;
  }
}
function N3e(e) {
  let t = SI.normalize(e),
    n = ace(),
    r = null,
    o = SI.join(n, "agent-memory") + SI.sep;
  if (t.startsWith(o)) r = o;
  else {
    let s = SI.join($t(), ".claude", "agent-memory") + SI.sep;
    if (t.startsWith(s)) r = s;
    else if (process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR) {
      let i = SI.join(process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR, "projects") + SI.sep;
      if (t.includes(SI.sep + "agent-memory-local" + SI.sep) && t.startsWith(i)) r = i;
    } else {
      let i = SI.join($t(), ".claude", "agent-memory-local") + SI.sep;
      if (t.startsWith(i)) r = i;
    }
  }
  return r !== null && !H3e(t, r);
}
function f0n(e) {
  switch (e) {
    case "user":
      return `User (${SI.join(ace(), "agent-memory")}/)`;
    case "project":
      return "Project (.claude/agent-memory/)";
    case "local":
      return `Local (${qNi("...")})`;
    default:
      return "None";
  }
}
function B3e(e, t) {
  let n;
  switch (t) {
    case "user":
      n =
        "- Since this memory is user-scope, keep learnings general since they apply across all projects";
      break;
    case "project":
      n =
        "- Since this memory is project-scope and shared with your team via version control, tailor your memories to this project";
      break;
    case "local":
      n =
        "- Since this memory is local-scope (not checked into version control), tailor your memories to this project and machine";
      break;
  }
  let r = cit(e, t);
  Pke(r);
  let o = process.env.CLAUDE_COWORK_MEMORY_EXTRA_GUIDELINES;
  return UNi({
    displayName: "Persistent Agent Memory",
    memoryDir: r,
    extraGuidelines: o && o.trim().length > 0 ? [n, o] : [n],
  });
}
var SI;
