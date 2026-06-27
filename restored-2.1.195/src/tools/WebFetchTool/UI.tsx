// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OIo
// matched 2.1.88 source: src/tools/WebFetchTool/UI.tsx
// class=modified  jaccard=0.1214  score=0.2413  fileCov=0.1962
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OIo] deps: Il, At, Jt
Ccl = require("crypto");
function renderToolUseMessage({ url: e, prompt: t }, { verbose: n }) {
  if (!e) return null;
  if (n) return `url: "${e}"${n && t ? `, prompt: "${t}"` : ""}`;
  return e;
}
function kcl() {
  return J6.jsx(qn, {
    height: 1,
    children: J6.jsx(w, {
      dimColor: true,
      children: "Fetching\u2026",
    }),
  });
}
function Rcl({ bytes: e, code: t, codeText: n, result: r }, o, { verbose: s }) {
  let i = Ra(e);
  if (s)
    return J6.jsxs(U, {
      flexDirection: "column",
      children: [
        J6.jsx(qn, {
          height: 1,
          children: J6.jsxs(w, {
            children: [
              "Received ",
              J6.jsx(w, {
                bold: true,
                children: i,
              }),
              " (",
              t,
              " ",
              n,
              ")",
            ],
          }),
        }),
        J6.jsx(U, {
          flexDirection: "column",
          children: J6.jsx(w, {
            children: r,
          }),
        }),
      ],
    });
  return J6.jsx(qn, {
    height: 1,
    children: J6.jsxs(w, {
      children: [
        "Received ",
        J6.jsx(w, {
          bold: true,
          children: i,
        }),
        " (",
        t,
        " ",
        n,
        ")",
      ],
    }),
  });
}
function NIo(e) {
  if (!e?.url) return null;
  return $a(e.url, nP);
}
var J6;
