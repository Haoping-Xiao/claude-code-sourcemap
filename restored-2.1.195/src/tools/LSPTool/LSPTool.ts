// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fbl
// matched 2.1.88 source: src/tools/LSPTool/LSPTool.ts
// class=modified  jaccard=0.5637  score=0.9271  fileCov=0.5899
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fbl] deps: Xr, yde, ii, Il, Lo, je, At, Bi, ys, vn, Hu, Yf, J_l, Z_l, lbl
((ubl = require("fs/promises")),
  (bRo = R(require("path"))),
  (dbl = require("url")),
  (Ngf = ve(() =>
    H.strictObject({
      operation: H.enum([
        "goToDefinition",
        "findReferences",
        "hover",
        "documentSymbol",
        "workspaceSymbol",
        "goToImplementation",
        "prepareCallHierarchy",
        "incomingCalls",
        "outgoingCalls",
      ]).describe("The LSP operation to perform"),
      filePath: H.string().describe("The absolute or relative path to the file"),
      line: H.number().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: H.number()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: H.string()
        .optional()
        .describe(
          "The symbol name or partial name to search for (workspaceSymbol only). Most language servers return no results for an empty query, so always provide it when using workspaceSymbol.",
        ),
    }),
  )),
  (Bgf = ve(() =>
    H.object({
      operation: H.enum([
        "goToDefinition",
        "findReferences",
        "hover",
        "documentSymbol",
        "workspaceSymbol",
        "goToImplementation",
        "prepareCallHierarchy",
        "incomingCalls",
        "outgoingCalls",
      ]).describe("The LSP operation that was performed"),
      result: H.string().describe("The formatted result of the LSP operation"),
      filePath: H.string().describe("The file path the operation was performed on"),
      resultCount: H.number()
        .int()
        .nonnegative()
        .optional()
        .describe("Number of results (definitions, references, symbols)"),
      fileCount: H.number()
        .int()
        .nonnegative()
        .optional()
        .describe("Number of files containing results"),
    }),
  )),
  (SRo = ti({
    name: byt,
    searchHint: "code intelligence (definitions, references, symbols, hover)",
    maxResultSizeChars: 1e5,
    isLsp: !0,
    async description() {
      return vwo;
    },
    userFacingName: obl,
    shouldDefer: !0,
    isEnabled() {
      return jDa();
    },
    get inputSchema() {
      return Ngf();
    },
    get outputSchema() {
      return Bgf();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    ruleContentField: "filePath",
    getPath({ filePath: e }) {
      return ds(e);
    },
    async validateInput(e) {
      let t = Q_l().safeParse(e);
      if (!t.success)
        return {
          result: !1,
          message: `Invalid input: ${t.error.message}`,
          errorCode: 3,
        };
      let n = qt(),
        r = ds(e.filePath);
      if (r.startsWith("\\\\") || r.startsWith("//"))
        return {
          result: !0,
        };
      let o;
      try {
        o = await n.stat(r);
      } catch (s) {
        if (wn(s))
          return {
            result: !1,
            message: `File does not exist: ${e.filePath}`,
            errorCode: 1,
          };
        let i = Zr(s);
        return (
          T(`Failed to access file stats for LSP operation on ${e.filePath}: ${i.message}`, {
            level: "error",
          }),
          {
            result: !1,
            message: `Cannot access file: ${e.filePath}. ${i.message}`,
            errorCode: 4,
          }
        );
      }
      if (!o.isFile())
        return {
          result: !1,
          message: `Path is not a file: ${e.filePath}`,
          errorCode: 2,
        };
      return {
        result: !0,
      };
    },
    async checkPermissions(e, t) {
      return ZJ(SRo, e, Fr(t));
    },
    async prompt() {
      return vwo;
    },
    renderToolUseMessage: sbl,
    renderToolUseErrorMessage: ibl,
    renderToolResultMessage: abl,
    async call(e, t) {
      let n = ds(e.filePath),
        r = $t();
      if (kpt().status === "pending") await GDa();
      let s = IDe();
      if (!s)
        return (
          ke(Error("LSP server manager not initialized when tool was called")),
          {
            data: {
              operation: e.operation,
              result: "LSP server manager not initialized. This may indicate a startup issue.",
              filePath: e.filePath,
            },
          }
        );
      let { method: i, params: a } = Ugf(e, n);
      try {
        if (!s.isFileOpen(n)) {
          let f = await ubl.open(n, "r");
          try {
            let m = await f.stat();
            if (m.size > Ogf)
              return {
                data: {
                  operation: e.operation,
                  result: `File too large for LSP analysis (${Math.ceil(m.size / 1e6)}MB exceeds 10MB limit)`,
                  filePath: e.filePath,
                },
              };
            let g = await f.readFile({
              encoding: "utf-8",
            });
            await s.openFile(n, g);
          } finally {
            await f.close();
          }
        }
        let l = await s.sendRequest(n, i, a);
        if (l === void 0)
          return (
            T(
              `No LSP server available for file type ${bRo.extname(n)} for operation ${e.operation} on file ${e.filePath}`,
            ),
            {
              data: {
                operation: e.operation,
                result: `No LSP server available for file type: ${bRo.extname(n)}`,
                filePath: e.filePath,
              },
            }
          );
        if (e.operation === "incomingCalls" || e.operation === "outgoingCalls") {
          let f = l;
          if (!f || f.length === 0)
            return {
              data: {
                operation: e.operation,
                result: "No call hierarchy item found at this position",
                filePath: e.filePath,
                resultCount: 0,
                fileCount: 0,
              },
            };
          let m =
            e.operation === "incomingCalls"
              ? "callHierarchy/incomingCalls"
              : "callHierarchy/outgoingCalls";
          if (
            ((l = await s.sendRequest(n, m, {
              item: f[0],
            })),
            l === void 0)
          )
            T(`LSP server returned undefined for ${m} on ${e.filePath}`);
        }
        if (
          l &&
          Array.isArray(l) &&
          (e.operation === "findReferences" ||
            e.operation === "goToDefinition" ||
            e.operation === "goToImplementation" ||
            e.operation === "workspaceSymbol")
        )
          if (e.operation === "workspaceSymbol") {
            let f = l,
              m = f.filter((y) => y?.location?.uri).map((y) => y.location),
              g = await cbl(m, r),
              h = new Set(g.map((y) => y.uri));
            l = f.filter((y) => !y?.location?.uri || h.has(y.location.uri));
          } else {
            let f = l.map(mXn),
              m = await cbl(f, r),
              g = new Set(m.map((h) => h.uri));
            l = l.filter((h) => {
              let y = mXn(h);
              return !y.uri || g.has(y.uri);
            });
          }
        let { formatted: c, resultCount: u, fileCount: d } = Ggf(e.operation, l, r);
        return {
          data: {
            operation: e.operation,
            result: c,
            filePath: e.filePath,
            resultCount: u,
            fileCount: d,
          },
        };
      } catch (l) {
        let u = Zr(l).message;
        return (
          T(`LSP tool request failed for ${e.operation} on ${e.filePath}: ${u}`, {
            level: "error",
          }),
          {
            data: {
              operation: e.operation,
              result: `Error performing ${e.operation}: ${u}`,
              filePath: e.filePath,
            },
          }
        );
      }
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: e.result,
      };
    },
  })));
function ARo(e) {
  let t = ERo;
  ((ERo = e), nsi(zgf() ?? null).catch(() => {}));
  let n = t !== null && !t.outboundOnly,
    r = e !== null && !e.outboundOnly;
  if (n !== r || (n && r && t?.bridgeSessionId !== e?.bridgeSessionId)) c_e();
}
function bS() {
  return ERo;
}
function zgf() {
  let e = bS();
  return e ? oP(e.bridgeSessionId) : void 0;
}
var ERo = null;
