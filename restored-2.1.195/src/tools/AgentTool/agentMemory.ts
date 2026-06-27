// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GNt
// matched 2.1.88 source: src/tools/AgentTool/agentMemory.ts
// class=modified  jaccard=0.4486  score=0.9266  fileCov=0.4651
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module GNt] deps: dn, services/analytics/growthbook.ts, utils/debug.ts, utils/plugins/schemas.ts, memdir/memoryTypes.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/profilerBase.ts, utils/fsOperations.ts, k0, utils/settings/settings.ts, memdir/memoryTypes.ts, memdir/memoryTypes.ts, services/analytics/metadata.ts, memdir/teamMemPrompts.ts, memdir/memdir.ts
BNi = require("path");
function WNi(e) {
  let t = e.replace(/[^a-zA-Z0-9\-_]/g, "-");
  return t === "" ? "unknown" : t;
}
function getLocalAgentMemoryDir(dirName) {
  if (process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR)
    return (
      SI.join(
        process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR,
        "projects",
        LE(qf(rc()) ?? rc()),
        "agent-memory-local",
        dirName,
      ) + SI.sep
    );
  return SI.join($t(), ".claude", "agent-memory-local", dirName) + SI.sep;
}
function getAgentMemoryDir(agentType, scope) {
  let n = WNi(agentType);
  switch (scope) {
    case "project":
      return SI.join($t(), ".claude", "agent-memory", n) + SI.sep;
    case "local":
      return getLocalAgentMemoryDir(n);
    case "user":
      return SI.join(ace(), "agent-memory", n) + SI.sep;
  }
}
function isAgentMemoryPath(absolutePath) {
  let normalizedPath = SI.normalize(absolutePath),
    n = ace(),
    r = null,
    o = SI.join(n, "agent-memory") + SI.sep;
  if (normalizedPath.startsWith(o)) r = o;
  else {
    let s = SI.join($t(), ".claude", "agent-memory") + SI.sep;
    if (normalizedPath.startsWith(s)) r = s;
    else if (process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR) {
      let i = SI.join(process.env.CLAUDE_CODE_REMOTE_MEMORY_DIR, "projects") + SI.sep;
      if (
        normalizedPath.includes(SI.sep + "agent-memory-local" + SI.sep) &&
        normalizedPath.startsWith(i)
      )
        r = i;
    } else {
      let i = SI.join($t(), ".claude", "agent-memory-local") + SI.sep;
      if (normalizedPath.startsWith(i)) r = i;
    }
  }
  return r !== null && !H3e(normalizedPath, r);
}
function getMemoryScopeDisplay(memory) {
  switch (memory) {
    case "user":
      return `User (${SI.join(ace(), "agent-memory")}/)`;
    case "project":
      return "Project (.claude/agent-memory/)";
    case "local":
      return `Local (${getLocalAgentMemoryDir("...")})`;
    default:
      return "None";
  }
}
function loadAgentMemoryPrompt(agentType, scope) {
  let n;
  switch (scope) {
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
  let r = getAgentMemoryDir(agentType, scope);
  Pke(r);
  let coworkExtraGuidelines = process.env.CLAUDE_COWORK_MEMORY_EXTRA_GUIDELINES;
  return UNi({
    displayName: "Persistent Agent Memory",
    memoryDir: r,
    extraGuidelines:
      coworkExtraGuidelines && coworkExtraGuidelines.trim().length > 0
        ? [n, coworkExtraGuidelines]
        : [n],
  });
}
var SI;
