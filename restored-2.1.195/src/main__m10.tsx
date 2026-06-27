// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wr
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0078  score=0.4289  fileCov=0.0079
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Q2() {
  let e = process.env.CLAUDE_CODE_ENTRYPOINT;
  return e && F0u.has(e) ? e : void 0;
}
function oY() {
  let e = process.env.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && j0u.has(e);
}
function opn() {
  return process.env.CLAUDE_CODE_ENTRYPOINT === "remote_trigger";
}
function lbs() {
  return Oe.CLAUDE_CODE_ENTRYPOINT === "remote_cowork";
}
function q0t() {
  let e = Oe.CLAUDE_CODE_ENTRYPOINT;
  return e === "claude_in_slack" || e === "claude-in-slack";
}
function spn() {
  return Oe.CLAUDE_CODE_ENTRYPOINT === "claude-in-teams";
}
function cbs() {
  if (ut(Oe.CLAUDE_CODE_HIDE_SETTINGS_HINT)) return false;
  let e = Oe.CLAUDE_CODE_ENTRYPOINT;
  return e === void 0 || !G0u.has(e);
}
function RZe() {
  let e = process.env.CLAUDE_CODE_ENTRYPOINT;
  return e === "sdk-ts" || e === "sdk-py" || e === "sdk-cli";
}
function ubs(e) {
  if (process.env.CLAUDE_CODE_ENTRYPOINT) {
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "cli" && e)
      process.env.CLAUDE_CODE_ENTRYPOINT = "sdk-cli";
    return;
  }
  let t = process.argv.slice(2),
    n = t.indexOf("mcp");
  if (n !== -1 && t[n + 1] === "serve") {
    process.env.CLAUDE_CODE_ENTRYPOINT = "mcp";
    return;
  }
  if (ut(process.env.CLAUDE_CODE_ACTION)) {
    process.env.CLAUDE_CODE_ENTRYPOINT = "claude-code-github-action";
    return;
  }
  process.env.CLAUDE_CODE_ENTRYPOINT = e ? "sdk-cli" : "cli";
}
function dbs(e) {
  let t = e.indexOf("--"),
    n = t === -1 ? e : e.slice(0, t);
  if (
    n.includes("-r") ||
    n.includes("--resume") ||
    n.includes("--from-pr") ||
    n.some((r) => r.startsWith("--resume=") || r.startsWith("--from-pr="))
  )
    return "resume";
  if (n.includes("-c") || n.includes("--continue")) return "continue";
  return "fresh";
}
var F0u, j0u, G0u;
