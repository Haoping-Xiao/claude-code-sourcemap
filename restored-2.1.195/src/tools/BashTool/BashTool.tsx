// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RN
// matched 2.1.88 source: src/tools/BashTool/BashTool.tsx
// class=modified  jaccard=0.2672  score=0.3879  fileCov=0.4621
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module RN] deps: Xr, ft, kt, C5e, ii, Z6, fp, rre, Ybe, sN, zvl, $pt, Udo, Lo, Cp, wr, fn, At, oc, Y4, es, ys, I1, Hu, U2n, AKt, _$, lg, tA, PDe, Gpt, sr, bH, jqe, ILe, K0, hDo, lf, wX, Qbe, PLo, cft, S$, Xvl, eit, Zvl, fCl, eWt, F9t, N6e, szt, o6n, Il
((Y$e = require("fs/promises")),
  (bCl = require("path")),
  (ECl = R(se(), 1)),
  (pHf = new Set(["command_substitution", "simple_expansion", "string"])),
  (fHf = new Set(["find", "grep", "rg", "ag", "ack", "locate", "which", "whereis"])),
  (mHf = new Set([
    "cat",
    "head",
    "tail",
    "less",
    "more",
    "wc",
    "stat",
    "file",
    "strings",
    "jq",
    "awk",
    "cut",
    "sort",
    "uniq",
    "tr",
  ])),
  (gHf = new Set(["ls", "tree", "du"])),
  (hHf = new Set(["echo", "printf", "true", "false", ":"])),
  (yHf = new Set([
    "mv",
    "cp",
    "rm",
    "mkdir",
    "rmdir",
    "chmod",
    "chown",
    "chgrp",
    "touch",
    "ln",
    "cd",
    "export",
    "unset",
    "wait",
  ])));
((SHf = ["sleep"]),
  (kKt = Oe.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS),
  (hCl = ve(() =>
    H.strictObject({
      command: H.string().refine(sEe, EHf).describe("The command to execute"),
      timeout: hF(H.number().optional()).describe(
        `Optional timeout in milliseconds (max ${oSt()})`,
      ),
      description: H.string().optional()
        .describe(`Clear, concise description of what this command does in active voice. Never use words like "complex" or "risk" in the description - just describe what it does.

For simple commands (git, npm, standard CLI tools), keep it brief (5-10 words):
- ls \u2192 "List files in current directory"
- git status \u2192 "Show working tree status"
- npm install \u2192 "Install package dependencies"

For commands that are harder to parse at a glance (piped commands, obscure flags, etc.), add enough context to clarify what it does:
- find . -name "*.tmp" -exec rm {} \\; \u2192 "Find and delete all .tmp files recursively"
- git reset --hard origin/main \u2192 "Discard all local changes and match remote main"
- curl -s url | jq '.data[]' \u2192 "Fetch JSON from URL and extract data array elements"`),
      run_in_background: Y0(H.boolean().optional()).describe(
        "Set to true to run this command in the background.",
      ),
      dangerouslyDisableSandbox: Y0(H.boolean().optional()).describe(
        "Set this to true to dangerously override sandbox mode and run commands without sandboxing.",
      ),
      ...false,
      _simulatedSedEdit: H.object({
        filePath: H.string(),
        newContent: H.string(),
      })
        .optional()
        .describe("Internal: pre-computed sed edit result from preview"),
    }),
  )),
  (yCl = ve(() =>
    (kKt
      ? hCl().omit({
          run_in_background: true,
          _simulatedSedEdit: true,
        })
      : hCl().omit({
          _simulatedSedEdit: true,
        })
    ).superRefine((e, t) => {}),
  )),
  (AHf = [...nJn, "wget"]));
HHf = ve(() =>
  H.object({
    stdout: H.string().describe("The standard output of the command"),
    stderr: H.string().describe("The standard error output of the command"),
    rawOutputPath: H.string()
      .optional()
      .describe("Path to raw output file for large MCP tool outputs"),
    interrupted: H.boolean().describe("Whether the command was interrupted"),
    isImage: H.boolean().optional().describe("Flag to indicate if stdout contains image data"),
    backgroundTaskId: H.string()
      .optional()
      .describe("ID of the background task if command is running in background"),
    backgroundedByUser: H.boolean()
      .optional()
      .describe("True if the user manually backgrounded the command with Ctrl+B"),
    dangerouslyDisableSandbox: H.boolean()
      .optional()
      .describe("Flag to indicate if sandbox mode was overridden"),
    returnCodeInterpretation: H.string()
      .optional()
      .describe("Semantic interpretation for non-error exit codes with special meaning"),
    noOutputExpected: H.boolean()
      .optional()
      .describe("Whether the command is expected to produce no output on success"),
    structuredContent: H.array(H.any()).optional().describe("Structured content blocks"),
    persistedOutputPath: H.string()
      .optional()
      .describe(
        "Path to the persisted full output in tool-results dir (set when output is too large for inline)",
      ),
    persistedOutputSize: H.number()
      .optional()
      .describe("Total size of the output in bytes (set when output is too large for inline)"),
    staleReadFileStateHint: H.string()
      .optional()
      .describe(
        "Model-facing note listing readFileState entries whose mtime bumped during this command (set when WRITE_COMMAND_MARKERS matches)",
      ),
    ghRateLimitHint: H.string()
      .optional()
      .describe(
        "Model-facing system-reminder appended when a gh command reports a GitHub API rate-limit error",
      ),
    gitOperation: Mjn()
      .optional()
      .describe(
        "@internal Structured classification of git/gh operations detected in this command (commit/push/merge/rebase/PR). Client-facing \u2014 lets clients render git activity without re-parsing stdout; not surfaced to the model.",
      ),
  }),
);
CHf = new RegExp(
  [
    "--write",
    "--fix",
    "--in-place",
    "--auto-correct",
    "\\brun\\s+format\\b",
    "\\brun\\s+fix\\b",
    "\\b(yarn|pnpm)\\s+format\\b",
    "\\blint:file\\b",
    "\\blint:fix\\b",
    "\\bblack\\b",
    "\\bisort\\b",
    "\\bruff\\s+format\\b",
    "\\bcargo\\s+(fmt|fix)\\b",
    "\\brustfmt\\b",
    "\\bgo\\s+fmt\\b",
    "\\bterraform\\s+fmt\\b",
    "\\bdprint\\s+fmt\\b",
    "\\bswiftformat\\b",
    "\\bphpcbf\\b",
  ].join("|"),
);
cl = ti({
  name: Co,
  ruleContentField: "command",
  searchHint: "execute shell commands",
  maxResultSizeChars: 30000,
  strict: true,
  async description({ description: e }) {
    return e || "Run shell command";
  },
  async prompt({ model: e, tools: t }) {
    let r = t.some((o) => Ql(o, nE)) ? await VWe(rc()) : [];
    return pCl(e, RJn(r));
  },
  isConcurrencySafe(e) {
    return this.isReadOnly?.(e) ?? false;
  },
  isReadOnly(e) {
    let t = sKt(e.command);
    return kjn(e, t).behavior === "allow";
  },
  toAutoClassifierInput(e) {
    return e.command;
  },
  async preparePermissionMatcher({ command: e }) {
    let t = await mct(e),
      n,
      r = false;
    if (t.kind === "simple") n = t.commands.map((o) => o.argv.join(" "));
    else if (t.differential || !pHf.has(t.nodeType ?? "")) return () => true;
    else {
      let o = Vvl(e);
      if (o === null || o.length === 0) return () => true;
      ((n = o), (r = true));
    }
    return (o) => {
      let s = ACl(o);
      if (r && !(s !== null ? !/\s/.test(s) : /^[^\s*?[]+\s?\*$/.test(o))) return true;
      return n.some((i) => {
        if (s !== null)
          return (
            i === s || i.startsWith(`${s} `) || i === `xargs ${s}` || i.startsWith(`xargs ${s} `)
          );
        return Ize(o, i) || Ize(`xargs ${o}`, i);
      });
    };
  },
  isSearchOrReadCommand(e) {
    let t = yCl().safeParse(e);
    if (!t.success)
      return {
        isSearch: false,
        isRead: false,
        isList: false,
      };
    return _Hf(t.data.command);
  },
  get inputSchema() {
    return yCl();
  },
  coerceInput: Kvl,
  get outputSchema() {
    return HHf();
  },
  userFacingName(e) {
    if (!e) return "Bash";
    if (e.command) {
      let t = T8e(e.command);
      if (t)
        return TJn({
          file_path: t.filePath,
          old_string: "x",
        });
    }
    return ut(process.env.CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR) && N$(e)
      ? "SandboxedBash"
      : "Bash";
  },
  getToolUseSummary(e) {
    if (!e?.command) return null;
    let { command: t, description: n } = e;
    if (n) return n;
    return $a(t, nP);
  },
  getActivityDescription(e) {
    if (!e?.command) return "Running command";
    return `Running ${e.description ?? $a(e.command, nP)}`;
  },
  async validateInput(e) {
    if (jW() && !kKt && !e.run_in_background) {
      let t = vHf(e.command);
      if (t !== null)
        return {
          result: false,
          message: `Blocked: ${t}. To wait for a condition, use Monitor with an until-loop (e.g. \`until <check>; do sleep 2; done\`). To wait for a command you started, use run_in_background: true. Do not chain shorter sleeps to work around this block.`,
          errorCode: 10,
        };
    }
    return {
      result: true,
    };
  },
  async checkPermissions(e, t) {
    let n = await V6t(e, t);
    if (
      e.dangerouslyDisableSandbox &&
      n.behavior !== "deny" &&
      n.behavior !== "ask" &&
      !SCl(n.decisionReason) &&
      !N$(e) &&
      N$({
        ...e,
        dangerouslyDisableSandbox: false,
      })
    )
      return {
        behavior: "ask",
        decisionReason: {
          type: "sandboxOverride",
          reason: "dangerouslyDisableSandbox",
        },
        message: "Run outside of the sandbox",
      };
    return n;
  },
  renderToolUseMessage: vHl,
  renderToolUseProgressMessage: wHl,
  renderToolUseQueuedMessage: CHl,
  renderToolResultMessage: IHl,
  extractSearchText({ stdout: e, stderr: t }) {
    return t
      ? `${e}
${t}`
      : e;
  },
  mapToolResultToToolResultBlockParam(
    {
      interrupted: e,
      stdout: t,
      stderr: n,
      isImage: r,
      backgroundTaskId: o,
      backgroundedByUser: s,
      structuredContent: i,
      persistedOutputPath: a,
      persistedOutputSize: l,
      staleReadFileStateHint: c,
      ghRateLimitHint: u,
    },
    d,
  ) {
    if (i && i.length > 0)
      return {
        tool_use_id: d,
        type: "tool_result",
        content: i,
      };
    if (r) {
      let g = e6n(t, d);
      if (g) return g;
    }
    let p = t;
    if (t) ((p = t.replace(/^(\s*\n)+/, "")), (p = p.trimEnd()));
    if (a) {
      let g = v3t(p, Gdt);
      p = fDe({
        filepath: a,
        originalSize: l ?? 0,
        isJson: false,
        preview: g.preview,
        hasMore: g.hasMore,
      });
    }
    let f = n.trim();
    if (e) {
      if (n) f += mCl;
      f += "<error>Command was aborted before completion</error>";
    }
    let m = "";
    if (o) {
      let g = jm(o);
      if (s)
        m = `Command was manually backgrounded by user with ID: ${o}. Output is being written to: ${g}`;
      else
        m = `Command running in background with ID: ${o}. Output is being written to: ${g}. You will be notified when it completes. To check interim output, use ${Ds} on that file path.`;
    }
    return {
      tool_use_id: d,
      type: "tool_result",
      content: [p, f, m, c, u].filter(Boolean).join(`
`),
      is_error: e,
    };
  },
  async call(e, t, n, r, o) {
    if (e._simulatedSedEdit) return wHf(e._simulatedSedEdit, t, r);
    let s = Math.floor(Date.now() / 1000) * 1000,
      { abortController: i, getAppState: a, setToolJSX: l, emitToolProgress: c } = t,
      u = new qIt(),
      d = "",
      p,
      f = 0,
      m = false,
      g,
      h = !t.agentId,
      y = !h,
      b = N$(e),
      _ = Zst(e.command);
    try {
      let B = xHf({
          input: e,
          abortController: i,
          taskRegistry: t.taskRegistry,
          setToolJSX: l,
          emitToolProgress: c,
          preventCwdChanges: y,
          isMainThread: h,
          toolUseId: t.toolUseId,
          agentId: t.agentId,
          sessionEnvVars: t.sessionEnvVars,
          effortLevel: Kw(t.options.mainLoopModel) ? RM(t.options.mainLoopModel, gg(t)) : void 0,
        }),
        $;
      do
        if ((($ = await B.next()), !$.done && o)) {
          let K = $.value;
          o({
            type: "progress",
            toolUseID: `bash-progress-${f++}`,
            data: {
              type: "bash_progress",
              output: K.output,
              fullOutput: K.fullOutput,
              elapsedTimeSeconds: K.elapsedTimeSeconds,
              totalLines: K.totalLines,
              totalBytes: K.totalBytes,
              taskId: K.taskId,
              timeoutMs: K.timeoutMs,
            },
          });
        }
      while (!$.done);
      if (((g = $.value), g.intercepted)) b = false;
      Njn(e.command, g.code, g.stdout);
      let q = h_(i.signal.reason),
        W = g.interrupted && q === "interrupt",
        V = g.interrupted && (q === "interrupt" || q === "user-cancel" || q === "remote-cancel");
      if (g.interrupted && q === "background") throw new ru();
      if (
        (u.append((g.stdout || "").trimEnd() + mCl),
        (p = Yvl(e.command, g.code, g.stdout || "", "")),
        g.stdout && g.stdout.includes(".git/index.lock': File exists"))
      )
        G("tengu_git_index_lock_error", {});
      if (p.isError && !W) {
        if (g.code !== 0) u.append(`Exit code ${g.code}`);
      }
      if (!y) {
        let K = a();
        if (r6n(K.toolPermissionContext)) d = n6n("");
      }
      let Y = g.stdout || "",
        z = xo.annotateStderrWithSandboxFailures(e.command, Y);
      if (g.preSpawnError) {
        if (/null bytes/.test(g.preSpawnError))
          throw new mi(g.preSpawnError, "Bash: command contained null bytes (argv echo redacted)");
        throw new mi(g.preSpawnError, "Bash: pre-spawn error (cwd/argv redacted)");
      }
      if (p.isError && !W)
        throw (
          G("tengu_bash_tool_command_failed", {
            command_type: RKt(e.command),
            stdout_length: Y.length,
            stderr_length: 0,
            exit_code: g.code,
            interrupted: g.interrupted,
            executor_shell: await Ymo(),
            executor_shell_overridden: Boolean(process.env.CLAUDE_CODE_SHELL),
            sandboxed: b,
            sandbox_enabled: xo.isSandboxingEnabled(),
            dangerously_disable_sandbox: e.dangerouslyDisableSandbox ?? false,
            filesystem_policy: $e(OWe()),
            ..._Cl(e),
            destructive_category: $e(_ ?? "none"),
            destructive_target_scope: $e(mce(e.command, $t(), _)),
            permission_mode: $e(Fr(t).mode),
          }),
          new oM("", z, g.code, V, z !== Y)
        );
      m = g.interrupted;
    } finally {
      if (l) l(null);
      if (t.toolUseId)
        c?.({
          kind: "clear",
          toolUseId: t.toolUseId,
        });
    }
    let S = u.toString(),
      A = 67108864,
      v,
      C;
    if (g.outputFilePath && g.outputTaskId)
      try {
        let B = await Y$e.stat(g.outputFilePath);
        ((C = B.size), await GSe());
        let $ = T3t(g.outputTaskId, false);
        if (B.size > A) await Y$e.truncate(g.outputFilePath, A);
        try {
          await Y$e.link(g.outputFilePath, $);
        } catch {
          await Y$e.copyFile(g.outputFilePath, $);
        }
        v = $;
      } catch {}
    G("tengu_bash_tool_command_executed", {
      command_type: RKt(e.command),
      stdout_length: S.length,
      stderr_length: 0,
      exit_code: g.code,
      interrupted: m,
      executor_shell: await Ymo(),
      executor_shell_overridden: Boolean(process.env.CLAUDE_CODE_SHELL),
      sandboxed: b,
      sandbox_enabled: xo.isSandboxingEnabled(),
      dangerously_disable_sandbox: e.dangerouslyDisableSandbox ?? false,
      filesystem_policy: $e(OWe()),
      ..._Cl(e),
      destructive_category: $e(_ ?? "none"),
      destructive_target_scope: $e(mce(e.command, $t(), _)),
      permission_mode: $e(Fr(t).mode),
    });
    let x = RIa(e.command);
    if (x)
      G("tengu_code_indexing_tool_used", {
        tool: $e(x),
        source: We("cli"),
        success: g.code === 0,
      });
    let I = Z8n(S),
      k = LGt(I, e.command);
    if (((I = k.stripped), h && k.hints.length > 0)) for (let B of k.hints) DGt(B);
    let D = B9t(I),
      P = I;
    if (D) {
      let B = await t6n(I, g.outputFilePath, C, Gh(t.options.mainLoopModel));
      if (B) P = B;
      else D = false;
    }
    let O = g.backgroundTaskId ? void 0 : fOa(e.command, g.stdout || ""),
      L;
    if (!g.backgroundTaskId) {
      let B = lft(e.command, g.stdout || "");
      if (Object.keys(B).length > 0) L = B;
    }
    let M;
    if (!m && !D && !g.backgroundTaskId) {
      let B = await IHf(e.command, t.readFileState, s);
      if (B.length > 0) {
        let $ = $t(),
          q = 5,
          W = B.slice(0, 5)
            .map((Y) => bCl.relative($, Y) || Y)
            .join(", "),
          V = B.length > 5 ? ` and ${B.length - 5} more` : "";
        M = `[This command modified ${B.length} ${bn(B.length, "file")} you've previously read: ${W}${V}. Call Read before editing.]`;
      }
    }
    if (!m && !D && !g.backgroundTaskId) await Qvl(e.command, t.readFileState, i.signal, g.code);
    return {
      data: {
        stdout: P,
        stderr: d,
        interrupted: m,
        isImage: D,
        returnCodeInterpretation: p?.message,
        noOutputExpected: bHf(e.command),
        backgroundTaskId: g.backgroundTaskId,
        backgroundedByUser: g.backgroundedByUser,
        dangerouslyDisableSandbox:
          "dangerouslyDisableSandbox" in e ? e.dangerouslyDisableSandbox : void 0,
        persistedOutputPath: v,
        persistedOutputSize: C,
        staleReadFileStateHint: M,
        ghRateLimitHint: O,
        gitOperation: L,
      },
    };
  },
  renderToolUseErrorMessage: xHl,
  isResultTruncated(e, { columns: t }) {
    if (e.isImage) return false;
    return X1(e.stdout, t) || X1(e.stderr, t);
  },
});
function ePo(e, t, n) {
  switch (e.type) {
    case "raw_string":
      t.raw.push([e.startIndex, e.endIndex]);
      return;
    case "ansi_c_string":
      t.ansiC.push([e.startIndex, e.endIndex]);
      return;
    case "string":
      if (!n) t.double.push([e.startIndex, e.endIndex]);
      for (let r of e.children) if (r) ePo(r, t, true);
      return;
    case "heredoc_redirect": {
      let r = false;
      for (let o of e.children)
        if (o && o.type === "heredoc_start") {
          let s = o.text[0];
          r = s === "'" || s === '"' || s === "\\";
          break;
        }
      if (r) {
        t.heredoc.push([e.startIndex, e.endIndex]);
        return;
      }
      break;
    }
  }
  for (let r of e.children) if (r) ePo(r, t, n);
}
function kHf(e) {
  let t = new Set();
  for (let [n, r] of e) for (let o = n; o < r; o++) t.add(o);
  return t;
}
function HCl(e) {
  return e.filter(
    (t, n) =>
      !e.some((r, o) => o !== n && r[0] <= t[0] && r[1] >= t[1] && (r[0] < t[0] || r[1] > t[1])),
  );
}
function RHf(e, t) {
  if (t.length === 0) return e;
  let n = HCl(t).sort((o, s) => s[0] - o[0]),
    r = e;
  for (let [o, s] of n) r = r.slice(0, o) + r.slice(s);
  return r;
}
function LHf(e, t) {
  if (t.length === 0) return e;
  let n = HCl(t).sort((o, s) => s[0] - o[0]),
    r = e;
  for (let [o, s, i, a] of n) r = r.slice(0, o) + i + a + r.slice(s);
  return r;
}
function DHf(e, t) {
  let n = {
    raw: [],
    ansiC: [],
    double: [],
    heredoc: [],
  };
  ePo(e, n, false);
  let { raw: r, ansiC: o, double: s, heredoc: i } = n,
    a = [...r, ...o, ...s, ...i],
    l = kHf([...r, ...o, ...i]),
    c = new Set();
  for (let [m, g] of s) (c.add(m), c.add(g - 1));
  let u = "";
  for (let m = 0; m < t.length; m++) {
    if (l.has(m)) continue;
    if (c.has(m)) continue;
    u += t[m];
  }
  let d = RHf(t, a),
    p = [];
  for (let [m, g] of r) p.push([m, g, "'", "'"]);
  for (let [m, g] of o) p.push([m, g, "$'", "'"]);
  for (let [m, g] of s) p.push([m, g, '"', '"']);
  for (let [m, g] of i) p.push([m, g, "", ""]);
  let f = LHf(t, p);
  return {
    withDoubleQuotes: u,
    fullyUnquoted: d,
    unquotedKeepQuoteChars: f,
  };
}
function PHf(e, t) {
  let n = e,
    r = [],
    o = [],
    s = false,
    i = false,
    a = false,
    l = new Set([
      "if_statement",
      "while_statement",
      "for_statement",
      "c_style_for_statement",
      "case_statement",
      "function_definition",
      "do_group",
      "elif_clause",
      "else_clause",
    ]);
  function c(u) {
    for (let d of u.children) {
      if (!d) continue;
      if (d.type === "list")
        for (let p of d.children) {
          if (!p) continue;
          if (p.type === "&&" || p.type === "||") r.push(p.type);
          else if (
            p.type === "list" ||
            p.type === "redirected_statement" ||
            p.type === "pipeline" ||
            p.type === "negated_command" ||
            l.has(p.type)
          )
            c({
              ...u,
              children: [p],
            });
          else if (p.type === "subshell") ((s = true), o.push(p.text));
          else if (p.type === "compound_statement") ((i = true), o.push(p.text));
          else o.push(p.text);
        }
      else if (d.type === ";") r.push(";");
      else if (d.type === "pipeline") ((a = true), o.push(d.text), c(d));
      else if (d.type === "subshell") ((s = true), o.push(d.text));
      else if (d.type === "compound_statement") ((i = true), o.push(d.text));
      else if (
        d.type === "command" ||
        d.type === "declaration_command" ||
        d.type === "variable_assignment"
      )
        o.push(d.text);
      else if (d.type === "redirected_statement") {
        let p = false;
        for (let f of d.children) {
          if (!f || f.type === "file_redirect") continue;
          ((p = true),
            c({
              ...d,
              children: [f],
            }));
        }
        if (!p) o.push(d.text);
      } else if (d.type === "negated_command") (o.push(d.text), c(d));
      else if (l.has(d.type)) {
        if (d.type !== "do_group" && d.type !== "elif_clause" && d.type !== "else_clause")
          o.push(d.text);
        c(d);
      } else if (d.children.length > 0) c(d);
    }
  }
  if ((c(n), o.length === 0)) o.push(t);
  return {
    hasCompoundOperators: r.length > 0,
    hasPipeline: a,
    hasSubshell: s,
    hasCommandGroup: i,
    operators: r,
    segments: o,
  };
}
function MHf(e) {
  let t = e;
  function n(r) {
    if (r.type === ";" || r.type === "&&" || r.type === "||") return true;
    if (r.type === "list") return true;
    for (let o of r.children) if (o && n(o)) return true;
    return false;
  }
  return n(t);
}
function $Hf(e) {
  let t = e,
    n = false,
    r = false,
    o = false,
    s = false,
    i = false;
  function a(l) {
    switch (l.type) {
      case "command_substitution":
        n = true;
        break;
      case "process_substitution":
        r = true;
        break;
      case "expansion":
        o = true;
        break;
      case "heredoc_redirect":
        s = true;
        break;
      case "comment":
        i = true;
        break;
    }
    for (let c of l.children) if (c) a(c);
  }
  return (
    a(t),
    {
      hasCommandSubstitution: n,
      hasProcessSubstitution: r,
      hasParameterExpansion: o,
      hasHeredoc: s,
      hasComment: i,
    }
  );
}
function TCl(e, t) {
  return {
    quoteContext: DHf(e, t),
    compoundStructure: PHf(e, t),
    hasActualOperatorNodes: MHf(e),
    dangerousPatterns: $Hf(e),
  };
}
function tPo(e, t) {
  t(e);
  for (let n of e.children) tPo(n, t);
}
function OHf(e) {
  let t = [];
  return (
    tPo(e, (n) => {
      if (n.type === "pipeline") {
        for (let r of n.children)
          if (r.type === "|" || r.type === "|&") t.push([r.startIndex, r.endIndex]);
      }
    }),
    t.sort((n, r) => n[0] - r[0])
  );
}
function NHf(e) {
  let t = [];
  return (
    tPo(e, (n) => {
      if (n.type === "file_redirect") {
        let r = n.children,
          o = r.findIndex((a) => a.type === ">" || a.type === ">>"),
          s = r[o],
          i = o >= 0 ? r[o + 1] : void 0;
        if (s && i)
          t.push({
            startIndex: n.startIndex,
            endIndex: i.endIndex,
            target: i.text,
            operator: s.type,
          });
      }
    }),
    t
  );
}
class wCl {
  originalCommand;
  commandBytes;
  pipePositions;
  redirectionNodes;
  treeSitterAnalysis;
  constructor(e, t, n, r) {
    ((this.originalCommand = e),
      (this.commandBytes = Buffer.from(e, "utf8")),
      (this.pipePositions = t),
      (this.redirectionNodes = n),
      (this.treeSitterAnalysis = r));
  }
  toString() {
    return this.originalCommand;
  }
  getPipeSegments() {
    if (this.pipePositions.length === 0) return [this.originalCommand];
    let e = [],
      t = 0;
    for (let [r, o] of this.pipePositions) {
      let s = this.commandBytes.subarray(t, r).toString("utf8").trim();
      if (s) e.push(s);
      t = o;
    }
    let n = this.commandBytes.subarray(t).toString("utf8").trim();
    if (n) e.push(n);
    return e;
  }
  withoutOutputRedirections() {
    if (this.redirectionNodes.length === 0) return this.originalCommand;
    let e = [...this.redirectionNodes].sort((n, r) => r.startIndex - n.startIndex),
      t = this.commandBytes;
    for (let n of e) t = Buffer.concat([t.subarray(0, n.startIndex), t.subarray(n.endIndex)]);
    return t
      .toString("utf8")
      .replace(/[ \t]+/g, " ")
      .replace(
        /[ \t]*\n[ \t]*/g,
        `
`,
      )
      .trim();
  }
  getOutputRedirections() {
    return this.redirectionNodes.map(({ target: e, operator: t }) => ({
      target: e,
      operator: t,
    }));
  }
  getTreeSitterAnalysis() {
    return this.treeSitterAnalysis;
  }
}
function nPo(e, t) {
  let n = OHf(t),
    r = NHf(t),
    o = TCl(t, e);
  return new wCl(e, n, r, o);
}
async function BHf(e) {
  if (!e) return null;
  try {
    let { parseCommand: t } = await Promise.resolve().then(() => (xRe(), rra)),
      n = await t(e);
    if (n) return nPo(e, n.rootNode);
  } catch {}
  return null;
}
var vCl, XJn, JJn;
