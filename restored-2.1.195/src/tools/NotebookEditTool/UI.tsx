// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nnl
// matched 2.1.88 source: src/tools/NotebookEditTool/UI.tsx
// class=modified  jaccard=0.2679  score=0.5343  fileCov=0.3494
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nnl] deps: utils/fsOperations.ts, hooks/useTerminalSize.ts, components/permissions/FileWritePermissionRequest/FileWriteToolDiff.tsx, commands/add-dir/validation.ts
((Ztl = R(lt(), 1)), (enl = require("path")), (Mpe = R(se(), 1)));
function Kvo(e) {
  if (!e?.notebook_path) return null;
  return kd(e.notebook_path);
}
function renderToolUseMessage(
  { notebook_path: e, cell_id: t, new_source: n, cell_type: r, edit_mode: o },
  { verbose: s },
) {
  if (!e || !n || !r) return null;
  let i = s ? e : kd(e);
  if (s)
    return rR.jsxs(rR.Fragment, {
      children: [
        rR.jsx(SN, {
          filePath: e,
          children: i,
        }),
        `@${t}, content: ${n.slice(0, 30)}\u2026, cell_type: ${r}, edit_mode: ${o ?? "replace"}`,
      ],
    });
  return rR.jsxs(rR.Fragment, {
    children: [
      rR.jsx(SN, {
        filePath: e,
        children: i,
      }),
      `@${t}`,
    ],
  });
}
function onl(e, { verbose: t }) {
  return rR.jsx(tnl, {
    notebook_path: e.notebook_path,
    cell_id: e.cell_id,
    new_source: e.new_source,
    cell_type: e.cell_type,
    edit_mode: e.edit_mode,
    verbose: t,
  });
}
function renderToolUseErrorMessage(result, { verbose: t }) {
  if (!t && typeof result === "string" && xl(result, "tool_use_error"))
    return rR.jsx(qn, {
      children: rR.jsx(w, {
        color: "error",
        children: "Error editing notebook",
      }),
    });
  return rR.jsx(AT, {
    result: result,
    verbose: t,
  });
}
function renderToolResultMessage({ cell_id: e, new_source: t, error: n }) {
  if (n)
    return rR.jsx(qn, {
      children: rR.jsx(w, {
        color: "error",
        children: n,
      }),
    });
  return rR.jsx(qn, {
    children: rR.jsxs(U, {
      flexDirection: "column",
      children: [
        rR.jsxs(w, {
          children: [
            "Updated cell ",
            rR.jsx(w, {
              bold: true,
              children: e,
            }),
            ":",
          ],
        }),
        rR.jsx(U, {
          marginLeft: 2,
          children: rR.jsx(LF, {
            code: t,
            filePath: "notebook.py",
          }),
        }),
      ],
    }),
  });
}
var rR;
