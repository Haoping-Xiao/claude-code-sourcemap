// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lf
// matched 2.1.88 source: src/tools/GlobTool/prompt.ts
// class=modified  jaccard=0.316  score=0.316  fileCov=1
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lf] deps: k0, S0n
JNi = `${oYr}. Each line is the line number, a single separator (a tab or \`:\`), then the verbatim file content (including any leading whitespace).`;
function tBi(e) {
  if (ph(e))
    return 'Fast file pattern matching. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.';
  return sYr;
}
var wu = "Glob",
  sYr = `- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the Agent tool instead`;
