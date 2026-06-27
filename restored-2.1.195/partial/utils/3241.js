// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dqe
// matched 2.1.88 source: src/tools/ReadMcpResourceTool/UI.tsx
// class=partial  jaccard=0.0701  score=0.1559  fileCov=0.1129
// note: low-confidence suggestion: src/tools/ReadMcpResourceTool/UI.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dqe = E(() => {
  E3t();
  lIa = `
List the direct children of a directory resource on an MCP server (\`resources/directory/read\`).

Parameters:
- server (required): The name of the MCP server to read from
- uri (required): The URI of the directory resource

The listing is not recursive. Each entry carries its own \`uri\`; subdirectories appear with mimeType "${S3t}" \u2014 call this tool again on a subdirectory's \`uri\` to descend.

Only usable against a server that has declared support for directory listing; other servers return an error.
`;
});
function cIa(e) {
  if (!e.uri || !e.server) return null;
  return `List directory resource "${e.uri}" from server "${e.server}"`;
}
function uIa() {
  return "readMcpResourceDir";
}
function dIa(e, t, {
  verbose: n
}) {
  if (e?.error) return A3t.jsx(J1, {
    content: e.error,
    verbose: n
  });
  if (!e || e.resources.length === 0) return A3t.jsx(qn, {
    height: 1,
    children: A3t.jsx(Fl, {
      children: "(Empty directory)"
    })
  });
  let r = De(e, null, 2);
  return A3t.jsx(J1, {
    content: r,
    verbose: n
  });
}
var A3t;