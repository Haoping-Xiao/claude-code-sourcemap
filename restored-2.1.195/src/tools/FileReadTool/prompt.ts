// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S0n
// matched 2.1.88 source: src/tools/FileReadTool/prompt.ts
// class=modified  jaccard=0.2245  score=0.3106  fileCov=0.4475
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module S0n] deps: Ao
ANd = new Set(["pdf"]);
function YNi() {
  return KNi;
}
function A0n(e) {
  return e.startsWith(HNd) || e.startsWith(KNi);
}
function eBi(e, t, n, r) {
  if (ph(e))
    return `Reads a file from the local filesystem.

- \`file_path\` must be an absolute path.
- Reads up to ${fit} lines by default${n}.
${r}
${t}
- Reads images (PNG, JPG, \u2026) and presents them visually.${dit() ? ' Reads PDFs via the `pages` parameter (e.g. "1-5", max 20 pages/request; required for PDFs over 10 pages).' : ""} Reads Jupyter notebooks (.ipynb) as cells with outputs.
- Reading a directory, a missing file, or an empty file returns an error or system reminder rather than content.${zNi}`;
  return `Reads a file from the local filesystem. You can access any file directly by using this tool.
Assume this tool is able to read all files on the machine. If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
- The file_path parameter must be an absolute path, not a relative path
- By default, it reads up to ${fit} lines starting from the beginning of the file${n}
${r}
${t}
- This tool allows Claude Code to read images (eg PNG, JPG, etc). When reading an image file the contents are presented visually as Claude Code is a multimodal LLM.${
    dit()
      ? `
- This tool can read PDF files (.pdf). For large PDFs (more than 10 pages), you MUST provide the pages parameter to read specific page ranges (e.g., pages: "1-5"). Reading a large PDF without the pages parameter will fail. Maximum 20 pages per request.`
      : ""
  }
- This tool can read Jupyter notebooks (.ipynb files) and returns all cells with their outputs, combining code, text, and visualizations.
- This tool can only read files, not directories. To list files in a directory, use the registered shell tool.
- You will regularly be asked to read screenshots. If the user provides a path to a screenshot, ALWAYS use this tool to view the file at the path. This tool will work with all temporary file paths.
- If you read a file that exists but has empty contents you will receive a system reminder warning in place of file contents.${zNi}`;
}
var Ds = "Read",
  zNi = `
- Do NOT re-read a file you just edited to verify \u2014 Edit/Write would have errored if the change failed, and the harness tracks file state for you.`,
  E0n = " (file state is current in your context \u2014 no need to Read it back)",
  HNd =
    "File unchanged since last read. The content from the earlier Read tool_result in this conversation is still current \u2014 refer to that instead of re-reading.",
  KNi =
    "Wasted call \u2014 file unchanged since your last Read. Refer to that earlier tool_result instead.",
  WNt = "[Truncated: PARTIAL view \u2014 ",
  fit = 2000,
  XNi = "Read a file from the local filesystem.",
  oYr = "- Results are returned using cat -n format, with line numbers starting at 1",
  JNi,
  QNi =
    "- You can optionally specify a line offset and limit (especially handy for long files), but it's recommended to read the whole file by not providing these parameters",
  ZNi =
    "- When you already know which part of the file you need, only read that part. This can be important for larger files.";
