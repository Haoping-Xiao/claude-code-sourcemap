// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qtl
// matched 2.1.88 source: src/components/NotebookEditToolUseRejectedMessage.tsx
// class=modified  jaccard=0.4172  score=0.5202  fileCov=0.678
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Qtl = E(() => {
  lf();
  Jtl = `Replaces, inserts, or deletes a single cell in a Jupyter notebook (.ipynb file).

Usage:
- You must use the ${Ds} tool on the notebook in this conversation before editing \u2014 this tool will fail otherwise.
- \`notebook_path\` must be an absolute path.
- \`cell_id\` is the \`id\` attribute shown in the ${Ds} tool's \`<cell id="...">\` output. It is required for \`replace\` and \`delete\`.
- \`edit_mode\` defaults to \`replace\`. Use \`insert\` to add a new cell after the cell with the given \`cell_id\` (or at the beginning of the notebook if \`cell_id\` is omitted) \u2014 \`cell_type\` is required when inserting. Use \`delete\` to remove the cell.`;
});
function tnl(e) {
  let t = Ztl.c(20),
    { notebook_path: n, cell_id: r, new_source: o, cell_type: s, edit_mode: i, verbose: a } = e,
    l = i === void 0 ? "replace" : i,
    c = l === "delete" ? "delete" : `${l} cell in`,
    u;
  if (t[0] !== c)
    ((u = Mpe.jsxs(w, {
      color: "subtle",
      children: ["User rejected ", c, " "],
    })),
      (t[0] = c),
      (t[1] = u));
  else u = t[1];
  let d;
  if (t[2] !== n || t[3] !== a)
    ((d = a ? n : enl.relative($t(), n)), (t[2] = n), (t[3] = a), (t[4] = d));
  else d = t[4];
  let p;
  if (t[5] !== d)
    ((p = Mpe.jsx(w, {
      bold: true,
      color: "subtle",
      children: d,
    })),
      (t[5] = d),
      (t[6] = p));
  else p = t[6];
  let f;
  if (t[7] !== r)
    ((f = Mpe.jsxs(w, {
      color: "subtle",
      children: [" at cell ", r],
    })),
      (t[7] = r),
      (t[8] = f));
  else f = t[8];
  let m;
  if (t[9] !== u || t[10] !== p || t[11] !== f)
    ((m = Mpe.jsxs(U, {
      flexDirection: "row",
      children: [u, p, f],
    })),
      (t[9] = u),
      (t[10] = p),
      (t[11] = f),
      (t[12] = m));
  else m = t[12];
  let g;
  if (t[13] !== s || t[14] !== l || t[15] !== o)
    ((g =
      l !== "delete" &&
      Mpe.jsx(U, {
        marginTop: 1,
        flexDirection: "column",
        children: Mpe.jsx(LF, {
          code: o,
          filePath: s === "markdown" ? "file.md" : "file.py",
          dim: true,
        }),
      })),
      (t[13] = s),
      (t[14] = l),
      (t[15] = o),
      (t[16] = g));
  else g = t[16];
  let h;
  if (t[17] !== m || t[18] !== g)
    ((h = Mpe.jsx(qn, {
      children: Mpe.jsxs(U, {
        flexDirection: "column",
        children: [m, g],
      }),
    })),
      (t[17] = m),
      (t[18] = g),
      (t[19] = h));
  else h = t[19];
  return h;
}
var Ztl, enl, Mpe;
