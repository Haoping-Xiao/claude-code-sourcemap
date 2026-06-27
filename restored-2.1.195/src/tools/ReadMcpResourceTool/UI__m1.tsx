// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dqe
// matched 2.1.88 source: src/tools/ReadMcpResourceTool/UI.tsx
// class=modified (alt of src/tools/ReadMcpResourceTool/UI.tsx)  jaccard=0.0967  score=0.2163  fileCov=0.1489
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dqe] deps: E3t
lIa = `
List the direct children of a directory resource on an MCP server (\`resources/directory/read\`).

Parameters:
- server (required): The name of the MCP server to read from
- uri (required): The URI of the directory resource

The listing is not recursive. Each entry carries its own \`uri\`; subdirectories appear with mimeType "${S3t}" \u2014 call this tool again on a subdirectory's \`uri\` to descend.

Only usable against a server that has declared support for directory listing; other servers return an error.
`;
function renderToolUseMessage(e) {
  if (!e.uri || !e.server) return null;
  return `List directory resource "${e.uri}" from server "${e.server}"`;
}
function uIa() {
  return "readMcpResourceDir";
}
function dIa(e, t, { verbose: n }) {
  if (e?.error)
    return A3t.jsx(J1, {
      content: e.error,
      verbose: n,
    });
  if (!e || e.resources.length === 0)
    return A3t.jsx(qn, {
      height: 1,
      children: A3t.jsx(Fl, {
        children: "(Empty directory)",
      }),
    });
  let r = De(e, null, 2);
  return A3t.jsx(J1, {
    content: r,
    verbose: n,
  });
}
var A3t;
