// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pyt
// matched 2.1.88 source: src/tools/NotebookEditTool/NotebookEditTool.ts
// class=modified  jaccard=0.6119  score=0.7583  fileCov=0.7602
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module pyt] deps: Y4, Xr, ii, j9t, Il, At, oc, PB, ys, Rd, s6n, Hu, dyt, Yf, Jt, Qtl, anl
((lnl = require("crypto")),
  (cnl = require("path")),
  (Gef = ve(() =>
    H.strictObject({
      notebook_path: H.string().describe(
        "The absolute path to the Jupyter notebook file to edit (must be absolute, not relative)",
      ),
      cell_id: H.string()
        .optional()
        .describe(
          "The ID of the cell to edit. When inserting a new cell, the new cell will be inserted after the cell with this ID, or at the beginning if not specified.",
        ),
      new_source: H.string().describe("The new source for the cell"),
      cell_type: H.enum(["code", "markdown"])
        .optional()
        .describe(
          "The type of the cell (code or markdown). If not specified, it defaults to the current cell type. If using edit_mode=insert, this is required.",
        ),
      edit_mode: H.enum(["replace", "insert", "delete"])
        .optional()
        .describe("The type of edit to make (replace, insert, delete). Defaults to replace."),
    }),
  )),
  (Wef = ve(() =>
    H.object({
      new_source: H.string().describe("The new source code that was written to the cell"),
      old_source: H.string()
        .optional()
        .describe(
          "The previous cell source (replace/delete only). Enables cell-relative diff rendering without re-reading the notebook.",
        ),
      cell_id: H.string().optional().describe("The ID of the cell that was edited"),
      cell_type: H.enum(["code", "markdown"]).describe("The type of the cell"),
      language: H.string().describe("The programming language of the notebook"),
      edit_mode: H.string().describe("The edit mode that was used"),
      error: H.string().optional().describe("Error message if the operation failed"),
      notebook_path: H.string().describe("The path to the notebook file"),
      original_file: H.string().describe("The original notebook content before modification"),
      updated_file: H.string().describe("The updated notebook content after modification"),
    }),
  )),
  (oq = ti({
    name: RI,
    ruleContentField: "notebook_path",
    searchHint: "edit Jupyter notebook cells (.ipynb)",
    maxResultSizeChars: 1e5,
    shouldDefer: !0,
    async description() {
      return Xtl;
    },
    async prompt() {
      return Jtl;
    },
    backfillObservableInput(e) {
      if (typeof e.notebook_path === "string") e.notebook_path = ds(e.notebook_path);
    },
    userFacingName() {
      return "Edit Notebook";
    },
    getToolUseSummary: Kvo,
    getActivityDescription(e) {
      let t = Kvo(e);
      return t ? `Editing notebook ${t}` : "Editing notebook";
    },
    get inputSchema() {
      return Gef();
    },
    get outputSchema() {
      return Wef();
    },
    toAutoClassifierInput(e) {
      let t = e.edit_mode ?? "replace";
      return `${e.notebook_path} ${t}: ${e.new_source}`;
    },
    getPath(e) {
      return e.notebook_path;
    },
    async preparePermissionMatcher({ notebook_path: e }) {
      return (t) => mAe(t, e);
    },
    async checkPermissions(e, t) {
      let n = ds(e.notebook_path);
      return (net(t.toolUseId, n, i_(n)), CMe(oq, e, Fr(t)));
    },
    mapToolResultToToolResultBlockParam({ cell_id: e, edit_mode: t, new_source: n, error: r }, o) {
      if (r)
        return {
          tool_use_id: o,
          type: "tool_result",
          content: r,
          is_error: !0,
        };
      switch (t) {
        case "replace":
          return {
            tool_use_id: o,
            type: "tool_result",
            content: `Updated cell ${e} with ${n}`,
          };
        case "insert":
          return {
            tool_use_id: o,
            type: "tool_result",
            content: `Inserted cell ${e} with ${n}`,
          };
        case "delete":
          return {
            tool_use_id: o,
            type: "tool_result",
            content: `Deleted cell ${e}`,
          };
        default:
          return {
            tool_use_id: o,
            type: "tool_result",
            content: "Unknown edit mode",
          };
      }
    },
    renderToolUseMessage: rnl,
    renderToolUseRejectedMessage: onl,
    renderToolUseErrorMessage: snl,
    renderToolResultMessage: inl,
    async validateInput(
      { notebook_path: e, cell_type: t, cell_id: n, edit_mode: r = "replace" },
      o,
    ) {
      let s = ds(e),
        i = tyt(s, o);
      if (i)
        return {
          result: !1,
          message: i,
          errorCode: 12,
        };
      if (s.startsWith("\\\\") || s.startsWith("//"))
        return {
          result: !0,
        };
      if (cnl.extname(s) !== ".ipynb")
        return {
          result: !1,
          message:
            "File must be a Jupyter notebook (.ipynb file). For editing other file types, use the FileEdit tool.",
          errorCode: 2,
        };
      if (r !== "replace" && r !== "insert" && r !== "delete")
        return {
          result: !1,
          message: "Edit mode must be replace, insert, or delete.",
          errorCode: 4,
        };
      if (r === "insert" && !t)
        return {
          result: !1,
          message: "Cell type is required when using edit_mode=insert.",
          errorCode: 5,
        };
      let a = o.readFileState.get(s);
      if (!a)
        return {
          result: !1,
          message: "File has not been read yet. Read it first before writing to it.",
          errorCode: 9,
        };
      if (n0r())
        try {
          let { mode: u } = await qt().stat(s);
          if (iet(u))
            return {
              result: !1,
              message: set,
              errorCode: 11,
            };
        } catch (u) {
          if (!wn(u)) throw u;
        }
      if (Fee(s) > a.timestamp)
        return {
          result: !1,
          message:
            "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
          errorCode: 10,
        };
      let l;
      try {
        l = Bee(s).content;
      } catch (u) {
        if (wn(u))
          return {
            result: !1,
            message: "Notebook file does not exist.",
            errorCode: 1,
          };
        throw u;
      }
      let c = Ia(l);
      if (!c)
        return {
          result: !1,
          message: "Notebook is not valid JSON.",
          errorCode: 6,
        };
      if (!n) {
        if (r !== "insert")
          return {
            result: !1,
            message: "Cell ID must be specified when not inserting a new cell.",
            errorCode: 7,
          };
      } else if (c.cells.findIndex((d) => d.id === n) === -1) {
        let d = U9t(n);
        if (d !== void 0) {
          if (!c.cells[d])
            return {
              result: !1,
              message: `Cell with index ${d} does not exist in notebook.`,
              errorCode: 7,
            };
        } else
          return {
            result: !1,
            message: `Cell with ID "${n}" not found in notebook.`,
            errorCode: 8,
          };
      }
      return {
        result: !0,
      };
    },
    async call(
      { notebook_path: e, new_source: t, cell_id: n, cell_type: r, edit_mode: o },
      s,
      i,
      a,
    ) {
      let { readFileState: l, getFileHistoryState: c, applyFileHistoryOp: u } = s,
        d = ds(e),
        p = ret(s, d);
      if (K_()) await eAe(c, u, d, a.uuid);
      try {
        return await iCe(d, async () => {
          let { content: f, encoding: m, lineEndings: g } = await LEs(d),
            h;
          try {
            h = Ft(f);
          } catch {
            return {
              data: {
                new_source: t,
                old_source: void 0,
                cell_type: r ?? "code",
                language: "python",
                edit_mode: "replace",
                error: "Notebook is not valid JSON.",
                cell_id: n,
                notebook_path: d,
                original_file: "",
                updated_file: "",
              },
            };
          }
          let y;
          if (!n) y = 0;
          else {
            if (((y = h.cells.findIndex((k) => k.id === n)), y === -1)) {
              let k = U9t(n);
              if (k !== void 0) y = k;
            }
            if (o === "insert") y += 1;
          }
          let b = o;
          if (b === "replace" && y === h.cells.length) {
            if (((b = "insert"), !r)) r = "code";
          }
          let _ = h.metadata.language_info?.name ?? "python",
            S = void 0;
          if (h.nbformat > 4 || (h.nbformat === 4 && h.nbformat_minor >= 5)) {
            if (b === "insert") S = lnl.randomUUID().slice(0, 8);
            else if (n !== null) S = n;
          }
          let A;
          if (b === "delete") {
            let k = h.cells[y];
            ((A = Array.isArray(k.source) ? k.source.join("") : k.source), h.cells.splice(y, 1));
          } else if (b === "insert") {
            let k;
            if (r === "markdown")
              k = {
                cell_type: "markdown",
                id: S,
                source: t,
                metadata: {},
              };
            else
              k = {
                cell_type: "code",
                id: S,
                source: t,
                metadata: {},
                execution_count: null,
                outputs: [],
              };
            h.cells.splice(y, 0, k);
          } else {
            let k = h.cells[y];
            if (
              ((A = Array.isArray(k.source) ? k.source.join("") : k.source),
              (k.source = t),
              k.cell_type === "code")
            )
              ((k.execution_count = null), (k.outputs = []));
            if (r && r !== k.cell_type) k.cell_type = r;
          }
          let C = De(h, null, 1);
          sCe(d, p);
          let x = await aCe(d, C, m, g);
          return (
            l.set(d, {
              content: C,
              timestamp: x,
              offset: void 0,
              limit: void 0,
            }),
            {
              data: {
                new_source: t,
                old_source: A,
                cell_type: r ?? "code",
                language: _,
                edit_mode: b ?? "replace",
                cell_id: S || void 0,
                error: "",
                notebook_path: d,
                original_file: f,
                updated_file: C,
              },
            }
          );
        });
      } catch (f) {
        if (f instanceof Uee) throw f;
        if (f instanceof Error)
          return {
            data: {
              new_source: t,
              old_source: void 0,
              cell_type: r ?? "code",
              language: "python",
              edit_mode: "replace",
              error: f.message,
              cell_id: n,
              notebook_path: d,
              original_file: "",
              updated_file: "",
            },
          };
        return {
          data: {
            new_source: t,
            old_source: void 0,
            cell_type: r ?? "code",
            language: "python",
            edit_mode: "replace",
            error: "Unknown error occurred while editing notebook",
            cell_id: n,
            notebook_path: d,
            original_file: "",
            updated_file: "",
          },
        };
      }
    },
  })));
function Xef(e) {
  let t = dnl.c(6),
    { answers: n, response: r } = e;
  if (!r && Object.keys(n).length === 0) return null;
  let o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = D$.jsxs(U, {
      flexDirection: "row",
      children: [
        D$.jsxs(w, {
          color: BB("default"),
          children: [gc, "\xA0"],
        }),
        D$.jsx(w, {
          children: "User answered Claude's questions:",
        }),
      ],
    })),
      (t[0] = o));
  else o = t[0];
  let s;
  if (t[1] !== n || t[2] !== r)
    ((s = r
      ? D$.jsxs(w, {
          color: "inactive",
          children: ["\xB7 ", r],
        })
      : Object.entries(n).map(Jef)),
      (t[1] = n),
      (t[2] = r),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== s)
    ((i = D$.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        o,
        D$.jsx(qn, {
          children: D$.jsx(U, {
            flexDirection: "column",
            children: s,
          }),
        }),
      ],
    })),
      (t[4] = s),
      (t[5] = i));
  else i = t[5];
  return i;
}
function Jef(e) {
  let [t, n] = e;
  return D$.jsxs(
    w,
    {
      color: "inactive",
      children: ["\xB7 ", t, " \u2192 ", n],
    },
    t,
  );
}
function Qef(e) {
  if (e === void 0) return null;
  if (/<\s*(html|body|!doctype)\b/i.test(e))
    return "preview must be an HTML fragment, not a full document (no <html>, <body>, or <!DOCTYPE>)";
  if (/<\s*(script|style)\b/i.test(e))
    return "preview must not contain <script> or <style> tags. Use inline styles via the style attribute if needed.";
  if (!/<[a-z][^>]*>/i.test(e))
    return 'preview must contain HTML (previewFormat is set to "html"). Wrap content in a tag like <div> or <pre>.';
  return null;
}
var dnl,
  D$,
  qef,
  pnl,
  fnl,
  unl,
  Vef,
  zef,
  Kef,
  Yef,
  Yvo = "(notes only)",
  fyt;
