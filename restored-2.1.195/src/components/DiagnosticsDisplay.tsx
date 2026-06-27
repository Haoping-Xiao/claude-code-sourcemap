// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module i6e
// matched 2.1.88 source: src/components/DiagnosticsDisplay.tsx
// class=modified  jaccard=0.3867  score=0.6312  fileCov=0.4995
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function DiagnosticsDisplay(t0) {
  let t = iil.c(13),
    { attachment: n, verbose: r, isTranscriptMode: o } = t0;
  if (n.files.length === 0) return null;
  let s;
  if (t[0] !== n.files) ((s = n.files.reduce(kof, 0)), (t[0] = n.files), (t[1] = s));
  else s = t[1];
  let i = s,
    a = n.files.length;
  if (r || o) {
    let l;
    if (t[2] !== n.files) ((l = n.files.map(_temp3)), (t[2] = n.files), (t[3] = l));
    else l = t[3];
    let c;
    if (t[4] !== l)
      ((c = z6.jsx(U, {
        flexDirection: "column",
        children: l,
      })),
        (t[4] = l),
        (t[5] = c));
    else c = t[5];
    return c;
  } else {
    let l;
    if (t[6] !== i)
      ((l = z6.jsx(w, {
        bold: true,
        children: i,
      })),
        (t[6] = i),
        (t[7] = l));
    else l = t[7];
    let c = i === 1 ? "issue" : "issues",
      u = a === 1 ? "file" : "files",
      d;
    if (t[8] !== a || t[9] !== l || t[10] !== c || t[11] !== u)
      ((d = z6.jsx(qn, {
        children: z6.jsxs(w, {
          dimColor: true,
          wrap: "wrap",
          children: [
            "Found ",
            l,
            " new diagnostic",
            " ",
            c,
            " in ",
            a,
            " ",
            u,
            " (ctrl+o to expand)",
          ],
        }),
      })),
        (t[8] = a),
        (t[9] = l),
        (t[10] = c),
        (t[11] = u),
        (t[12] = d));
    else d = t[12];
    return d;
  }
}
function _temp3(file_0, fileIndex) {
  return z6.jsxs(
    lil.Fragment,
    {
      children: [
        z6.jsx(qn, {
          children: z6.jsxs(w, {
            dimColor: true,
            wrap: "wrap",
            children: [
              z6.jsx(w, {
                bold: true,
                children: ail.relative(
                  $t(),
                  file_0.uri.replace("file://", "").replace("_claude_fs_right:", ""),
                ),
              }),
              " ",
              z6.jsx(w, {
                dimColor: true,
                children: file_0.uri.startsWith("file://")
                  ? "(file://)"
                  : file_0.uri.startsWith("_claude_fs_right:")
                    ? "(claude_fs_right)"
                    : `(${bi(file_0.uri, ":")})`,
              }),
              ":",
            ],
          }),
        }),
        file_0.diagnostics.map(xof),
      ],
    },
    fileIndex,
  );
}
function xof(e, t) {
  return z6.jsx(
    qn,
    {
      children: z6.jsxs(w, {
        dimColor: true,
        wrap: "wrap",
        children: [
          "  ",
          y5.getSeveritySymbol(e.severity),
          " [Line ",
          e.range.start.line + 1,
          ":",
          e.range.start.character + 1,
          "] ",
          e.message,
          e.code ? ` [${e.code}]` : "",
          e.source ? ` (${e.source})` : "",
        ],
      }),
    },
    t,
  );
}
function kof(e, t) {
  return e + t.diagnostics.length;
}
var iil, ail, lil, z6;
