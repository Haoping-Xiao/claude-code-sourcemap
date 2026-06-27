// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MPn
// matched 2.1.88 source: src/tools/FileWriteTool/prompt.ts
// class=modified  jaccard=0.4113  score=0.4965  fileCov=0.7056
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var MPn = E(() => {
  VM();
  S_e();
  QH();
});
function EKd() {
  return `
- If this is an existing file, you MUST use the ${Ds} tool first to read the file's contents. This tool will fail if you did not read the file first.`;
}
function pKi(e) {
  if (ph(e))
    return `Writes a file to the local filesystem, overwriting if one exists.

When to use: creating a new file, or fully replacing one you've already ${Ds}. Overwriting an existing file you haven't ${Ds} will fail. For partial changes, use ${ka} instead.`;
  return `Writes a file to the local filesystem.

Usage:
- This tool will overwrite the existing file if there is one at the provided path.${EKd()}
- Prefer the Edit tool for modifying existing files \u2014 it only sends the diff. Only use this tool to create new files or for complete rewrites.
- NEVER create documentation files (*.md) or README files unless explicitly requested by the User.
- Only use emojis if the user explicitly requests it. Avoid writing emojis to files unless asked.`;
}
var Wc = "Write";
