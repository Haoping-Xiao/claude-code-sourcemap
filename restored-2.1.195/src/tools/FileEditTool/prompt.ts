// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rvl
// matched 2.1.88 source: src/tools/FileEditTool/prompt.ts
// class=modified  jaccard=0.2165  score=0.2569  fileCov=0.5795
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var rvl = E(() => {
  Yf();
  oLt();
});
function zSf(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function ovl(e) {
  if (!zSf(e)) return null;
  let t = {
      ...e,
    },
    n = [];
  if ("replace_name" in t) {
    let r = t.replace_name;
    if (!("replace_all" in t)) t.replace_all = r === true || r === "true";
    (delete t.replace_name, n.push("alias_replace_name"));
  }
  if ("path" in t && !("file_path" in t) && typeof t.path === "string")
    ((t.file_path = t.path), delete t.path, n.push("path"));
  if ("old_str" in t && !("old_string" in t) && typeof t.old_str === "string")
    ((t.old_string = t.old_str), delete t.old_str, n.push("old_str"));
  if ("new_str" in t && !("new_string" in t) && typeof t.new_str === "string")
    ((t.new_string = t.new_str), delete t.new_str, n.push("new_str"));
  return n.length
    ? {
        input: t,
        shapeClass: n.join(","),
      }
    : null;
}
function KSf() {
  return `
- You must use your \`${Ds}\` tool at least once in the conversation before editing. This tool will error if you attempt an edit without reading the file.`;
}
function svl(e) {
  return YSf(e);
}
function YSf(e) {
  let t = pqe();
  if (ph(e))
    return `Performs exact string replacement in a file.

- You must ${Ds} the file in this conversation before editing, or the call will fail.
- \`old_string\` must match the file exactly, including indentation, and be unique \u2014 the edit fails otherwise. Strip the Read line prefix (${t ? "line number + a single tab or `:`" : "line number + tab"}) before matching.
- \`replace_all: true\` replaces every occurrence instead.`;
  let n = t ? "line number + a single separator character (a tab or `:`)" : "line number + tab",
    r = at("tengu_edit_minimalanchor_jrn", false)
      ? "\n- Keep `old_string` minimal \u2014 usually 1-3 lines, only enough to be unique in the file. Including excess context wastes tokens and is an error.\n- The edit will FAIL if `old_string` is not unique in the file. In that case, add the minimum extra context needed for uniqueness, or use `replace_all` to change every instance."
      : "\n- The edit will FAIL if `old_string` is not unique in the file. Either provide a larger string with more surrounding context to make it unique or use `replace_all` to change every instance of `old_string`.";
  return `Performs exact string replacements in files.

Usage:${KSf()}
- When editing text from Read tool output, ensure you preserve the exact indentation (tabs/spaces) as it appears AFTER the line number prefix. The line number prefix format is: ${n}. Everything after that is the actual file content to match. Never include any part of the line number prefix in the old_string or new_string.
- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required.
- Only use emojis if the user explicitly requests it. Avoid adding emojis to files unless asked.${r}
- Use \`replace_all\` for replacing and renaming strings across the file. This parameter is useful if you want to rename a variable for instance.`;
}
