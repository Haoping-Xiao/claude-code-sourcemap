// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eit
// matched 2.1.88 source: src/tools/BashTool/destructiveCommandWarning.ts
// class=modified  jaccard=0.2832  score=0.326  fileCov=0.6832
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eit] deps: At, vn
((xke = require("path")),
  (d1d = [
    {
      pattern: /\bgit\s+reset\s+--hard\b/,
      category: "git_reset_hard",
      warning: "Note: may discard uncommitted changes",
    },
    {
      pattern: /\bgit\s+push\b[^;&|\n]*[ \t](--force|--force-with-lease|-f)\b/,
      category: "git_force_push",
      warning: "Note: may overwrite remote history",
    },
    {
      pattern: /\bgit\s+clean\b(?![^;&|\n]*(?:-[a-zA-Z]*n|--dry-run))[^;&|\n]*-[a-zA-Z]*f/,
      category: "git_clean_force",
      warning: "Note: may permanently delete untracked files",
    },
    {
      pattern: /\bgit\s+checkout\s+(--\s+)?\.[ \t]*($|[;&|\n])/,
      category: "git_checkout_dot",
      warning: "Note: may discard all working tree changes",
    },
    {
      pattern: /\bgit\s+restore\s+(--\s+)?\.[ \t]*($|[;&|\n])/,
      category: "git_restore_dot",
      warning: "Note: may discard all working tree changes",
    },
    {
      pattern: /\bgit\s+stash[ \t]+(drop|clear)\b/,
      category: "git_stash_drop",
      warning: "Note: may permanently remove stashed changes",
    },
    {
      pattern: /\bgit\s+branch\s+(-D[ \t]|--delete\s+--force|--force\s+--delete)\b/,
      category: "git_branch_force_delete",
      warning: "Note: may force-delete a branch",
    },
    {
      pattern: /\bgit\s+(commit|push|merge)\b[^;&|\n]*--no-verify\b/,
      category: "git_no_verify",
      warning: "Note: may skip safety hooks",
    },
    {
      pattern: /\bgit\s+commit\b[^;&|\n]*--amend\b/,
      category: "git_commit_amend",
      warning: "Note: may rewrite the last commit",
    },
    {
      pattern:
        /(^|[;&|\n][ \t]*)rm\s+-[a-zA-Z]*[rR][a-zA-Z]*f|(^|[;&|\n][ \t]*)rm\s+-[a-zA-Z]*f[a-zA-Z]*[rR]/,
      category: "rm_recursive_force",
      warning: "Note: may recursively force-remove files",
    },
    {
      pattern: /(^|[;&|\n][ \t]*)rm\s+-[a-zA-Z]*[rR]/,
      category: "rm_recursive",
      warning: "Note: may recursively remove files",
    },
    {
      pattern: /(^|[;&|\n][ \t]*)rm\s+-[a-zA-Z]*f/,
      category: "rm_force",
      warning: "Note: may force-remove files",
    },
    {
      pattern: /\b(DROP|TRUNCATE)\s+(TABLE|DATABASE|SCHEMA)\b/i,
      category: "sql_drop_truncate",
      warning: "Note: may drop or truncate database objects",
    },
    {
      pattern: /\bDELETE\s+FROM\s+\w+[ \t]*(;|"|'|\n|$)/i,
      category: "sql_delete_from",
      warning: "Note: may delete all rows from a database table",
    },
    {
      pattern: /\bkubectl\s+delete\b/,
      category: "kubectl_delete",
      warning: "Note: may delete Kubernetes resources",
    },
    {
      pattern: /\bterraform\s+destroy\b/,
      category: "terraform_destroy",
      warning: "Note: may destroy Terraform infrastructure",
    },
  ]));
((p1d = /(?:^|[;&|\n])[ \t]*rm[ \t]((?:[^;&|\n\\]|\\.)*?)(?=$|[;&|\n])/g),
  (f1d = /(?:^|[|;&\n({])[ \t]*(?:Remove-Item|rm|del|rd|rmdir|ri)[ \t]+([^|;&\n}]*)/gi),
  (m1d = new Set(["recurse", "force", "whatif", "confirm", "verbose", "debug"])),
  (X1i = /^[A-Za-z]:[\\/]/),
  (g1d = new Set([
    "rm_force",
    "rm_recursive",
    "rm_recursive_force",
    "remove_item_force",
    "remove_item_recursive",
    "remove_item_recursive_force",
  ])));
function Qkn(e) {
  if (fr() === "vertex") return PKr;
  if (e?.isNonInteractive) {
    if (e.hasAppendSystemPrompt) return tNi;
    return nNi;
  }
  return PKr;
}
var PKr = "You are Claude Code, Anthropic's official CLI for Claude.",
  tNi =
    "You are Claude Code, Anthropic's official CLI for Claude, running within the Claude Agent SDK.",
  nNi = "You are a Claude agent, built on Anthropic's Claude Agent SDK.",
  b1d,
  Jkn;
