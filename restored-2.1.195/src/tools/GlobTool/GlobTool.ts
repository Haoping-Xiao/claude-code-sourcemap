// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I8e
// matched 2.1.88 source: src/tools/GlobTool/GlobTool.ts
// class=modified  jaccard=0.5654  score=0.7959  fileCov=0.6613
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module I8e] deps: Xr, ii, Il, Lo, At, oc, ys, Otl, Hu, Yf, w5e, EI, ztl
((Bef = ve(() =>
  H.strictObject({
    pattern: H.string().describe("The glob pattern to match files against"),
    path: H.string()
      .optional()
      .describe(
        'The directory to search in. If not specified, the current working directory will be used. IMPORTANT: Omit this field to use the default directory. DO NOT enter "undefined" or "null" - simply omit it for the default behavior. Must be a valid directory path if provided.',
      ),
  }),
)),
  (Uef = ve(() =>
    H.object({
      durationMs: H.number().describe("Time taken to execute the search in milliseconds"),
      numFiles: H.number().describe("Number of file paths returned (after any truncation)"),
      filenames: H.array(H.string()).describe("Array of file paths that match the pattern"),
      truncated: H.boolean().describe("Whether results were truncated (limited to 100 files)"),
      totalMatches: H.number()
        .optional()
        .describe(
          "Total number of matching files before truncation. A lower bound when countIsComplete is false. Absent on results persisted by CLI versions predating this field.",
        ),
      countIsComplete: H.boolean()
        .optional()
        .describe(
          "Whether totalMatches is the exact total (true) or a floor because the underlying search truncated its own output (false). Absent on results persisted by CLI versions predating this field.",
        ),
    }),
  )));
Z4 = ti({
  name: wu,
  searchHint: "find files by name pattern or wildcard",
  maxResultSizeChars: 100000 /* 1e5 */,
  async description() {
    return sYr;
  },
  userFacingName: Gtl,
  getToolUseSummary: zvo,
  getActivityDescription(e) {
    let t = zvo(e);
    return t ? `Finding ${t}` : "Finding files";
  },
  get inputSchema() {
    return Bef();
  },
  get outputSchema() {
    return Uef();
  },
  isConcurrencySafe() {
    return true;
  },
  isReadOnly() {
    return true;
  },
  toAutoClassifierInput(e) {
    return e.pattern;
  },
  isSearchOrReadCommand() {
    return {
      isSearch: true,
      isRead: false,
    };
  },
  ruleContentField: "path",
  getPath({ path: e }) {
    return e ? ds(e) : $t();
  },
  async preparePermissionMatcher({ pattern: e }) {
    return (t) => X8(t, e);
  },
  async validateInput({ path: e }) {
    if (e) {
      let t = qt(),
        n = ds(e);
      if (n.startsWith("\\\\") || n.startsWith("//"))
        return {
          result: true,
        };
      let r;
      try {
        r = await t.stat(n);
      } catch (o) {
        if (wn(o)) {
          let s = await pY(n),
            i = `Directory does not exist: ${e}. ${$B} ${$t()}.`;
          if (s) i += ` Did you mean ${s}?`;
          return {
            result: false,
            message: i,
            errorCode: 1,
          };
        }
        throw o;
      }
      if (!r.isDirectory())
        return {
          result: false,
          message: `Path is not a directory: ${e}`,
          errorCode: 2,
        };
    }
    return {
      result: true,
    };
  },
  async checkPermissions(e, t) {
    return ZJ(Z4, e, Fr(t));
  },
  async prompt({ model: e }) {
    return tBi(e);
  },
  renderToolUseMessage: Wtl,
  renderToolUseErrorMessage: qtl,
  renderToolResultMessage: Vtl,
  extractSearchText({ filenames: e }) {
    return e.join(`
`);
  },
  async call(e, t) {
    let { abortController: n, globLimits: r } = t,
      o = Date.now(),
      s = r?.maxResults ?? 100,
      {
        files: i,
        truncated: a,
        totalMatches: l,
        countIsComplete: c,
      } = await $tl(
        e.pattern,
        Z4.getPath(e),
        {
          limit: s,
          offset: 0,
        },
        n.signal,
        Fr(t),
      ),
      u = i.map(eet);
    return {
      data: {
        filenames: u,
        durationMs: Date.now() - o,
        numFiles: u.length,
        truncated: a,
        totalMatches: l,
        countIsComplete: c,
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, t) {
    if (e.filenames.length === 0)
      return {
        tool_use_id: t,
        type: "tool_result",
        content: "No files found",
      };
    return {
      tool_use_id: t,
      type: "tool_result",
      content: [...e.filenames, ...(e.truncated ? [Fef(e)] : [])].join(`
`),
    };
  },
});
function Ktl() {
  return Ytl().value;
}
function Ytl() {
  return {
    value: 0,
    src: "default",
  };
}
var jef = 3000;
