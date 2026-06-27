// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W9t
// matched 2.1.88 source: src/tools/FileEditTool/types.ts
// class=modified  jaccard=0.6754  score=0.7582  fileCov=0.8609
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module W9t] deps: Xr, PDe
((d6n = ve(() =>
  H.strictObject({
    file_path: H.string().describe("The absolute path to the file to modify"),
    old_string: H.string().describe("The text to replace"),
    new_string: H.string().describe(
      "The text to replace it with (must be different from old_string)",
    ),
    replace_all: Y0(H.boolean().default(false).optional()).describe(
      "Replace all occurrences of old_string (default false)",
    ),
  }),
)),
  (Ovo = ve(() =>
    H.object({
      oldStart: H.number(),
      oldLines: H.number(),
      newStart: H.number(),
      newLines: H.number(),
      lines: H.array(H.string()),
    }),
  )),
  (Nvo = ve(() =>
    H.object({
      filename: H.string(),
      status: H.enum(["modified", "added"]),
      additions: H.number(),
      deletions: H.number(),
      changes: H.number(),
      patch: H.string(),
      repository: H.string().nullable().optional().describe("GitHub owner/repo when available"),
    }),
  )),
  (Bvo = ve(() =>
    H.object({
      filePath: H.string().describe("The file path that was edited"),
      oldString: H.string().describe("The original string that was replaced"),
      newString: H.string().describe("The new string that replaced it"),
      originalFile: H.string().nullable().describe("The original file contents before editing"),
      structuredPatch: H.array(Ovo()).describe("Diff patch showing the changes"),
      userModified: H.boolean().describe("Whether the user modified the proposed changes"),
      replaceAll: H.boolean().describe("Whether all occurrences were replaced"),
      gitDiff: Nvo().optional(),
    }),
  )));
function p6n(e) {
  let t = htl.c(22),
    {
      filePath: n,
      structuredPatch: r,
      firstLine: o,
      fileContent: s,
      style: i,
      verbose: a,
      previewHint: l,
    } = e,
    { columns: c } = br(),
    u = r.reduce(bef, 0),
    d = r.reduce(yef, 0),
    p;
  if (t[0] !== u)
    ((p =
      u > 0
        ? DF.jsxs(DF.Fragment, {
            children: [
              "Added ",
              DF.jsx(w, {
                bold: true,
                children: u,
              }),
              " ",
              u > 1 ? "lines" : "line",
            ],
          })
        : null),
      (t[0] = u),
      (t[1] = p));
  else p = t[1];
  let f = u > 0 && d > 0 ? ", " : null,
    m;
  if (t[2] !== u || t[3] !== d)
    ((m =
      d > 0
        ? DF.jsxs(DF.Fragment, {
            children: [
              u === 0 ? "R" : "r",
              "emoved ",
              DF.jsx(w, {
                bold: true,
                children: d,
              }),
              " ",
              d > 1 ? "lines" : "line",
            ],
          })
        : null),
      (t[2] = u),
      (t[3] = d),
      (t[4] = m));
  else m = t[4];
  let g;
  if (t[5] !== p || t[6] !== f || t[7] !== m)
    ((g = DF.jsxs(w, {
      children: [p, f, m],
    })),
      (t[5] = p),
      (t[6] = f),
      (t[7] = m),
      (t[8] = g));
  else g = t[8];
  let h = g;
  if (l) {
    if (i !== "condensed" && !a) {
      let A;
      if (t[9] !== l)
        ((A = DF.jsx(qn, {
          children: DF.jsx(w, {
            dimColor: true,
            children: l,
          }),
        })),
          (t[9] = l),
          (t[10] = A));
      else A = t[10];
      return A;
    }
  } else if (i === "condensed" && !a) return h;
  let y;
  if (t[11] !== h)
    ((y = DF.jsx(w, {
      children: h,
    })),
      (t[11] = h),
      (t[12] = y));
  else y = t[12];
  let b = c - 12,
    _;
  if (t[13] !== s || t[14] !== n || t[15] !== o || t[16] !== r || t[17] !== b)
    ((_ = DF.jsx($5e, {
      hunks: r,
      dim: false,
      width: b,
      filePath: n,
      firstLine: o,
      fileContent: s,
    })),
      (t[13] = s),
      (t[14] = n),
      (t[15] = o),
      (t[16] = r),
      (t[17] = b),
      (t[18] = _));
  else _ = t[18];
  let S;
  if (t[19] !== y || t[20] !== _)
    ((S = DF.jsx(qn, {
      children: DF.jsxs(U, {
        flexDirection: "column",
        children: [y, _],
      }),
    })),
      (t[19] = y),
      (t[20] = _),
      (t[21] = S));
  else S = t[21];
  return S;
}
function yef(e, t) {
  return e + On(t.lines, _ef);
}
function _ef(e) {
  return e.startsWith("-");
}
function bef(e, t) {
  return e + On(t.lines, Sef);
}
function Sef(e) {
  return e.startsWith("+");
}
var htl, DF;
