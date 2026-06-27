// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tWt
// matched 2.1.88 source: src/tools/PowerShellTool/destructiveCommandWarning.ts
// class=modified  jaccard=0.3541  score=0.37  fileCov=0.8916
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tWt]
MLp = [
  {
    pattern:
      /(?:^|[|;&\n({])\s*(Remove-Item|rm|del|rd|rmdir|ri)\b[^|;&\n}]*-Recurse\b[^|;&\n}]*-Force\b/i,
    category: "remove_item_recursive_force",
    warning: "Note: may recursively force-remove files",
  },
  {
    pattern:
      /(?:^|[|;&\n({])\s*(Remove-Item|rm|del|rd|rmdir|ri)\b[^|;&\n}]*-Force\b[^|;&\n}]*-Recurse\b/i,
    category: "remove_item_recursive_force",
    warning: "Note: may recursively force-remove files",
  },
  {
    pattern: /(?:^|[|;&\n({])\s*(Remove-Item|rm|del|rd|rmdir|ri)\b[^|;&\n}]*-Recurse\b/i,
    category: "remove_item_recursive",
    warning: "Note: may recursively remove files",
  },
  {
    pattern: /(?:^|[|;&\n({])\s*(Remove-Item|rm|del|rd|rmdir|ri)\b[^|;&\n}]*-Force\b/i,
    category: "remove_item_force",
    warning: "Note: may force-remove files",
  },
  {
    pattern: /\bClear-Content\b[^|;&\n]*\*/i,
    category: "clear_content_glob",
    warning: "Note: may clear content of multiple files",
  },
  {
    pattern: /\bFormat-Volume\b/i,
    category: "format_volume",
    warning: "Note: may format a disk volume",
  },
  {
    pattern: /\bClear-Disk\b/i,
    category: "clear_disk",
    warning: "Note: may clear a disk",
  },
  {
    pattern: /\bgit\s+reset\s+--hard\b/i,
    category: "git_reset_hard",
    warning: "Note: may discard uncommitted changes",
  },
  {
    pattern: /\bgit\s+push\b[^|;&\n]*\s+(--force|--force-with-lease|-f)\b/i,
    category: "git_force_push",
    warning: "Note: may overwrite remote history",
  },
  {
    pattern: /\bgit\s+clean\b(?![^|;&\n]*(?:-[a-zA-Z]*n|--dry-run))[^|;&\n]*-[a-zA-Z]*f/i,
    category: "git_clean_force",
    warning: "Note: may permanently delete untracked files",
  },
  {
    pattern: /\bgit\s+stash\s+(drop|clear)\b/i,
    category: "git_stash_drop",
    warning: "Note: may permanently remove stashed changes",
  },
  {
    pattern: /\b(DROP|TRUNCATE)\s+(TABLE|DATABASE|SCHEMA)\b/i,
    category: "sql_drop_truncate",
    warning: "Note: may drop or truncate database objects",
  },
  {
    pattern: /\bStop-Computer\b/i,
    category: "stop_computer",
    warning: "Note: will shut down the computer",
  },
  {
    pattern: /\bRestart-Computer\b/i,
    category: "restart_computer",
    warning: "Note: will restart the computer",
  },
  {
    pattern: /\bClear-RecycleBin\b/i,
    category: "clear_recycle_bin",
    warning: "Note: permanently deletes recycled files",
  },
];
function M$a(e) {
  if (typeof e === "string") return e;
  let t = e.children.map(M$a).join(""),
    n = e.scope ?? e.kind,
    r = n ? $Lp[n.replace(/^hljs-/, "")] : void 0;
  return r ? r(t) : t;
}
function OLp(e, t) {
  let n = t?.language;
  if (!n) return e;
  let r;
  try {
    let i = I4(n);
    if (!i) return e;
    r = zut().highlight(e, {
      language: i,
      ignoreIllegals: true,
    });
  } catch {
    return e;
  }
  let o = r._emitter ?? r.emitter,
    s = o?.rootNode ?? o?.root;
  if (!s || typeof s === "string") return e;
  return s.children.map(M$a).join("");
}
function NLp(e) {
  return I4(e) !== null;
}
function GDe() {
  return BLp;
}
async function Zqe(e) {
  let t = P$a.extname(e).slice(1);
  if (!t) return "unknown";
  let n = I4(t);
  if (!n) return "unknown";
  return zut().getLanguage(n)?.name ?? "unknown";
}
var P$a, $Lp, BLp;
