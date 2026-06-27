// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gAe
// matched 2.1.88 source: src/tools/GrepTool/GrepTool.ts
// class=modified  jaccard=0.5923  score=0.8163  fileCov=0.6834
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gAe] deps: Xr, ii, Lo, At, oc, ys, Hu, Yf, w5e, q9t, tre, PDe, Gpt, sr, lC, Il, jtl
((Mef = ve(() =>
  H.strictObject({
    pattern: H.string().describe("The regular expression pattern to search for in file contents"),
    path: H.string()
      .optional()
      .describe("File or directory to search in (rg PATH). Defaults to current working directory."),
    glob: H.string()
      .optional()
      .describe('Glob pattern to filter files (e.g. "*.js", "*.{ts,tsx}") - maps to rg --glob'),
    output_mode: H.enum(["content", "files_with_matches", "count"])
      .optional()
      .describe(
        'Output mode: "content" shows matching lines (supports -A/-B/-C context, -n line numbers, head_limit), "files_with_matches" shows file paths (supports head_limit), "count" shows match counts (supports head_limit). Defaults to "files_with_matches".',
      ),
    "-B": hF(H.number().optional()).describe(
      'Number of lines to show before each match (rg -B). Requires output_mode: "content", ignored otherwise.',
    ),
    "-A": hF(H.number().optional()).describe(
      'Number of lines to show after each match (rg -A). Requires output_mode: "content", ignored otherwise.',
    ),
    "-C": hF(H.number().optional()).describe("Alias for context."),
    context: hF(H.number().optional()).describe(
      'Number of lines to show before and after each match (rg -C). Requires output_mode: "content", ignored otherwise.',
    ),
    "-n": Y0(H.boolean().optional()).describe(
      'Show line numbers in output (rg -n). Requires output_mode: "content", ignored otherwise. Defaults to true.',
    ),
    "-i": Y0(H.boolean().optional()).describe("Case insensitive search (rg -i)"),
    "-o": Y0(H.boolean().optional()).describe(
      'Print only the matched (non-empty) parts of each matching line, one match per output line (rg -o / --only-matching). Requires output_mode: "content", ignored otherwise. Defaults to false.',
    ),
    type: H.string()
      .optional()
      .describe(
        "File type to search (rg --type). Common types: js, py, rust, go, java, etc. More efficient than include for standard file types.",
      ),
    head_limit: hF(H.number().optional()).describe(
      'Limit output to first N lines/entries, equivalent to "| head -N". Works across all output modes: content (limits output lines), files_with_matches (limits file paths), count (limits count entries). Defaults to 250 when unspecified. Pass 0 for unlimited (use sparingly \u2014 large result sets waste context).',
    ),
    offset: hF(H.number().optional()).describe(
      'Skip first N lines/entries before applying head_limit, equivalent to "| tail -n +N | head -N". Works across all output modes. Defaults to 0.',
    ),
    multiline: Y0(H.boolean().optional()).describe(
      "Enable multiline mode where . matches newlines and patterns can span lines (rg -U --multiline-dotall). Default: false.",
    ),
  }),
)),
  ($ef = [".git", ".svn", ".hg", ".bzr", ".jj", ".sl"]));
((Nef = ve(() =>
  H.object({
    mode: H.enum(["content", "files_with_matches", "count"]).optional(),
    numFiles: H.number(),
    filenames: H.array(H.string()),
    content: H.string().optional(),
    numLines: H.number().optional(),
    numMatches: H.number().optional(),
    appliedLimit: H.number().optional(),
    appliedOffset: H.number().optional(),
  }),
)),
  (L$ = ti({
    name: qc,
    searchHint: "search file contents with regex (ripgrep)",
    maxResultSizeChars: 20000,
    strict: true,
    async description() {
      return Yoo(void 0);
    },
    userFacingName() {
      return "Search";
    },
    getToolUseSummary: Wvo,
    getActivityDescription(e) {
      let t = Wvo(e);
      return t ? `Searching for ${t}` : "Searching";
    },
    get inputSchema() {
      return Mef();
    },
    get outputSchema() {
      return Nef();
    },
    isConcurrencySafe() {
      return true;
    },
    isReadOnly() {
      return true;
    },
    toAutoClassifierInput(e) {
      return e.path ? `${e.pattern} in ${e.path}` : e.pattern;
    },
    isSearchOrReadCommand() {
      return {
        isSearch: true,
        isRead: false,
      };
    },
    ruleContentField: "path",
    getPath({ path: e }) {
      return e || $t();
    },
    async preparePermissionMatcher({ pattern: e }) {
      return (t) => X8(t, e);
    },
    async validateInput({ pattern: e, path: t, glob: n, type: r }) {
      let o = [
        ["pattern", e],
        ["path", t],
        ["glob", n],
        ["type", r],
      ].find(([, s]) => s?.includes("\x00"));
      if (o)
        return {
          result: false,
          message: `${qc} ${o[0]} cannot contain null bytes (\\0). Remove the null byte and try again.`,
          errorCode: 2,
        };
      if (t) {
        let s = qt(),
          i = ds(t);
        if (i.startsWith("\\\\") || i.startsWith("//"))
          return {
            result: true,
          };
        try {
          await s.stat(i);
        } catch (a) {
          if (wn(a)) {
            let l = await pY(i),
              c = `Path does not exist: ${t}. ${$B} ${$t()}.`;
            if (l) c += ` Did you mean ${l}?`;
            return {
              result: false,
              message: c,
              errorCode: 1,
            };
          }
          throw a;
        }
      }
      return {
        result: true,
      };
    },
    async checkPermissions(e, t) {
      return ZJ(L$, e, Fr(t));
    },
    async prompt({ model: e }) {
      return Yoo(e);
    },
    renderToolUseMessage: Btl,
    renderToolUseErrorMessage: Utl,
    renderToolResultMessage: Ftl,
    extractSearchText({ mode: e, content: t, filenames: n }) {
      if (e === "content" && t) return t;
      return n.join(`
`);
    },
    mapToolResultToToolResultBlockParam(
      {
        mode: e = "files_with_matches",
        numFiles: t,
        filenames: n,
        content: r,
        numLines: o,
        numMatches: s,
        appliedLimit: i,
        appliedOffset: a,
      },
      l,
    ) {
      if (e === "content") {
        let d = Vvo(i, a),
          p = r || "No matches found",
          f = d
            ? `${p}

[Showing results with pagination = ${d}]`
            : p;
        return {
          tool_use_id: l,
          type: "tool_result",
          content: f,
        };
      }
      if (e === "count") {
        let d = Vvo(i, a),
          p = r || "No matches found",
          f = s ?? 0,
          m = t ?? 0,
          g = `

Found ${f} total ${f === 1 ? "occurrence" : "occurrences"} across ${m} ${m === 1 ? "file" : "files"}.${d ? ` with pagination = ${d}` : ""}`;
        return {
          tool_use_id: l,
          type: "tool_result",
          content: p + g,
        };
      }
      let c = Vvo(i, a);
      if (t === 0)
        return {
          tool_use_id: l,
          type: "tool_result",
          content: "No files found",
        };
      let u = `Found ${t} ${bn(t, "file")}${c ? ` ${c}` : ""}
${n.join(`
`)}`;
      return {
        tool_use_id: l,
        type: "tool_result",
        content: u,
      };
    },
    async call(
      {
        pattern: e,
        path: t,
        glob: n,
        type: r,
        output_mode: o = "files_with_matches",
        "-B": s,
        "-A": i,
        "-C": a,
        context: l,
        "-n": c = true,
        "-i": u = false,
        "-o": d = false,
        head_limit: p,
        offset: f = 0,
        multiline: m = false,
      },
      g,
    ) {
      let { abortController: h } = g,
        y = t ? ds(t) : $t(),
        b = ["--hidden"];
      for (let P of $ef) b.push("--glob", `!${P}`);
      if ((b.push("--max-columns", "500"), m)) b.push("-U", "--multiline-dotall");
      if (u) b.push("-i");
      if (o === "files_with_matches") b.push("-l");
      else if (o === "count") b.push("-c", "-H");
      if (c && o === "content") b.push("-n");
      if (d && o === "content") b.push("-o");
      if (o === "content")
        if (l !== void 0) b.push("-C", l.toString());
        else if (a !== void 0) b.push("-C", a.toString());
        else {
          if (s !== void 0) b.push("-B", s.toString());
          if (i !== void 0) b.push("-A", i.toString());
        }
      if (e.startsWith("-")) b.push("-e", e);
      else b.push(e);
      if (r) b.push("--type", r);
      if (n) {
        let P = [],
          O = n.split(/\s+/);
        for (let L of O)
          if (L.includes("{") && L.includes("}")) P.push(L);
          else P.push(...L.split(",").filter(Boolean));
        for (let L of P.filter(Boolean)) b.push("--glob", L);
      }
      let _ = w8e(C8e(Fr(g)), $t());
      for (let P of _) {
        let O = P.startsWith("/") ? `!${P}` : `!**/${P}`;
        b.push("--glob", O);
      }
      for (let P of await cyt(y)) b.push("--glob", P);
      let S,
        A = null;
      if (((S = await Aue(b, y, h.signal)), o === "content")) {
        let { items: P, appliedLimit: O } = qvo(S, p, f),
          L = P.map((N) => {
            let B = /^[A-Za-z]:/.test(N) ? 2 : 0,
              $ = N.indexOf(":", B);
            if ($ > 0) {
              let q = N.substring(0, $),
                W = N.substring($);
              return eet(q) + W;
            }
            return N;
          });
        return {
          data: {
            mode: "content",
            numFiles: 0,
            filenames: [],
            content: L.join(`
`),
            numLines: L.length,
            ...(O !== void 0 && {
              appliedLimit: O,
            }),
            ...(f > 0 && {
              appliedOffset: f,
            }),
          },
        };
      }
      if (o === "count") {
        let { items: P, appliedLimit: O } = qvo(S, p, f),
          L = P.map(($) => {
            let q = $.lastIndexOf(":");
            if (q > 0) {
              let W = $.substring(0, q),
                V = $.substring(q);
              return eet(W) + V;
            }
            return $;
          }),
          M = 0,
          N = 0;
        for (let $ of L) {
          let q = $.lastIndexOf(":");
          if (q > 0) {
            let W = $.substring(q + 1),
              V = parseInt(W, 10);
            if (!isNaN(V)) ((M += V), (N += 1));
          }
        }
        return {
          data: {
            mode: "count",
            numFiles: N,
            filenames: [],
            content: L.join(`
`),
            numMatches: M,
            ...(O !== void 0 && {
              appliedLimit: O,
            }),
            ...(f > 0 && {
              appliedOffset: f,
            }),
          },
        };
      }
      let v = await Promise.allSettled(S.map((P) => qt().stat(P))),
        C = S.map((P, O) => {
          let L = v[O];
          return [P, L.status === "fulfilled" ? (L.value.mtimeMs ?? 0) : 0];
        })
          .sort((P, O) => {
            let L = O[1] - P[1];
            if (L === 0) return P[0].localeCompare(O[0]);
            return L;
          })
          .map((P) => P[0]),
        { items: x, appliedLimit: I } = qvo(C, p, f),
        k = x.map(eet);
      return {
        data: {
          mode: "files_with_matches",
          filenames: k,
          numFiles: k.length,
          ...(I !== void 0 && {
            appliedLimit: I,
          }),
          ...(f > 0 && {
            appliedOffset: f,
          }),
        },
      };
    },
  })));
function Gtl() {
  return "Search";
}
function Wtl({ pattern: e, path: t }, { verbose: n }) {
  if (!e) return null;
  if (!t) return `pattern: "${e}"`;
  return `pattern: "${e}", path: "${n ? t : kd(t)}"`;
}
function qtl(e, { verbose: t }) {
  if (!t && typeof e === "string" && xl(e, "tool_use_error")) {
    if (xl(e, "tool_use_error")?.includes($B))
      return uyt.jsx(qn, {
        children: uyt.jsx(w, {
          color: "error",
          children: "File not found",
        }),
      });
    return uyt.jsx(qn, {
      children: uyt.jsx(w, {
        color: "error",
        children: "Error searching files",
      }),
    });
  }
  return uyt.jsx(AT, {
    result: e,
    verbose: t,
  });
}
function zvo(e) {
  if (!e?.pattern) return null;
  return $a(e.pattern, nP);
}
var uyt, Vtl;
