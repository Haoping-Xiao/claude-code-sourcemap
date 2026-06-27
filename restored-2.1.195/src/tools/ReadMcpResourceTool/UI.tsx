// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qdt
// matched 2.1.88 source: src/tools/ReadMcpResourceTool/UI.tsx
// class=modified  jaccard=0.307  score=0.5249  fileCov=0.4251
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qdt] deps: Un, kt, db, fh, uDe, je, At, es, sr, K0
HIa = require("path");
function renderToolUseMessage(input) {
  if (!input.uri || !input.server) return null;
  return `Read resource "${input.uri}" from server "${input.server}"`;
}
function userFacingName() {
  return "readMcpResource";
}
function renderToolResultMessage(output, _progressMessagesForMessage, { verbose: n }) {
  if (output?.error)
    return Vdt.jsx(J1, {
      content: output.error,
      verbose: n,
    });
  if (!output || !output.contents || output.contents.length === 0)
    return Vdt.jsx(U, {
      justifyContent: "space-between",
      overflowX: "hidden",
      width: "100%",
      children: Vdt.jsx(qn, {
        height: 1,
        children: Vdt.jsx(w, {
          dimColor: true,
          children: "(No content)",
        }),
      }),
    });
  let r = De(output, null, 2);
  return Vdt.jsx(J1, {
    content: r,
    verbose: n,
  });
}
var Vdt;
