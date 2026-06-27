// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rct
// matched 2.1.88 source: src/tools/GrepTool/prompt.ts
// class=modified  jaccard=0.5177  score=0.6186  fileCov=0.7604
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Rct = E(() => {
  YWe();
  k0();
});
var s$ = "TodoWrite";
function Yoo(e) {
  if (ph(e))
    return `Content search built on ripgrep. Prefer this over \`grep\`/\`rg\` via ${Co} \u2014 results integrate with the permission UI and file links.

- Full regex syntax (e.g. "log.*Error", "function\\s+\\w+"). Ripgrep, not grep \u2014 escape literal braces (\`interface\\{\\}\`).
- Filter with \`glob\` (e.g. "**/*.tsx") or \`type\` (e.g. "js", "py", "rust").
- \`output_mode\`: "content" (matching lines), "files_with_matches" (paths only, default), or "count".
- \`multiline: true\` for patterns that span lines.`;
  return `A powerful search tool built on ripgrep

  Usage:
  - ALWAYS use ${qc} for search tasks. NEVER invoke \`grep\` or \`rg\` as a ${Co} command. The ${qc} tool has been optimized for correct permissions and access.
  - Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
  - Filter files with glob parameter (e.g., "*.js", "**/*.tsx") or type parameter (e.g., "js", "py", "rust")
  - Output modes: "content" shows matching lines, "files_with_matches" shows only file paths (default), "count" shows match counts
  - Use ${ss} tool for open-ended searches requiring multiple rounds
  - Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use \`interface\\{\\}\` to find \`interface{}\` in Go code)
  - Multiline matching: By default patterns match within single lines only. For cross-line patterns like \`struct \\{[\\s\\S]*?field\`, use \`multiline: true\`
`;
}
var qc = "Grep";
