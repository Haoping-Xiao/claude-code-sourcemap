// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qdt
// matched 2.1.88 source: src/tools/ReadMcpResourceTool/UI.tsx
// class=modified  jaccard=0.307  score=0.5249  fileCov=0.4251
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var qdt = E(() => {
  Un();
  kt();
  db();
  fh();
  uDe();
  je();
  At();
  es();
  sr();
  K0();
  HIa = require("path");
});
function vIa(e) {
  if (!e.uri || !e.server) return null;
  return `Read resource "${e.uri}" from server "${e.server}"`;
}
function wIa() {
  return "readMcpResource";
}
function CIa(e, t, { verbose: n }) {
  if (e?.error)
    return Vdt.jsx(J1, {
      content: e.error,
      verbose: n,
    });
  if (!e || !e.contents || e.contents.length === 0)
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
  let r = De(e, null, 2);
  return Vdt.jsx(J1, {
    content: r,
    verbose: n,
  });
}
var Vdt;
