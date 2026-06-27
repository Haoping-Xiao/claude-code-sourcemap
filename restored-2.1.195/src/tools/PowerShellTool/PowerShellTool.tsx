// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jzt
// matched 2.1.88 source: src/tools/PowerShellTool/PowerShellTool.tsx
// class=modified  jaccard=0.3153  score=0.4788  fileCov=0.4801
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jzt] deps: @modelcontextprotocol/sdk/dist/esm/types.js, utils/debug.ts, services/mockRateLimits.ts, utils/bash/ast.ts, screens/REPL.tsx, utils/plugins/hintRecommendation.ts, utils/fsOperations.ts, utils/debug.ts, main.tsx, utils/errors.ts, utils/profilerBase.ts, utils/sequential.ts, hooks/usePasteHandler.ts, services/mcp/vscodeSdkMcp.ts, utils/platform.ts, utils/shell/powershellDetection.ts, utils/powershell/parser.ts, utils/Shell.ts, utils/bash/bashParser.ts, fast-xml-parser/lib/fxp.cjs, utils/semanticNumber.ts, components/FallbackToolUseErrorMessage.tsx, utils/powershell/parser.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, services/teamMemorySync/secretScanner.ts, Task.ts, utils/task/TaskOutput.ts, tools/ListMcpResourcesTool/prompt.ts, utils/mcpOutputStorage.ts, tools/BashTool/destructiveCommandWarning.ts, N6e, szt, utils/notebook.ts, tools/GlobTool/prompt.ts, wX, tools/shared/gitOperationTracking.ts, tools/PowerShellTool/commandSemantics.ts, tools/PowerShellTool/destructiveCommandWarning.ts, tools/PowerShellTool/prompt.ts, tools/PowerShellTool/UI.tsx, tools/PowerShellTool/readOnlyValidation.ts, tools/PowerShellTool/PowerShellTool.tsx, Il
((W$e = require("fs/promises")),
  (FTl = R(se(), 1)),
  (bSf = new Set(["select-string", "get-childitem", "findstr", "where.exe"])),
  (SSf = new Set([
    "get-content",
    "get-item",
    "test-path",
    "resolve-path",
    "get-process",
    "get-service",
    "get-childitem",
    "get-location",
    "get-filehash",
    "get-acl",
    "format-hex",
  ])),
  (ESf = new Set(["write-output", "write-host"])));
TSf = ["start-sleep", "sleep"];
((pKt = Oe.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS),
  (NTl = ve(() =>
    H.strictObject({
      command: H.string().refine(sEe, vSf).describe("The PowerShell command to execute"),
      timeout: hF(H.number().optional()).describe(
        `Optional timeout in milliseconds (max ${dKt()})`,
      ),
      description: H.string()
        .optional()
        .describe("Clear, concise description of what this command does in active voice."),
      run_in_background: Y0(H.boolean().optional()).describe(
        "Set to true to run this command in the background.",
      ),
      dangerouslyDisableSandbox: Y0(H.boolean().optional()).describe(
        "Set this to true to dangerously override sandbox mode and run commands without sandboxing.",
      ),
    }),
  )),
  (wSf = ve(() =>
    pKt
      ? NTl().omit({
          run_in_background: true,
        })
      : NTl(),
  )),
  (CSf = ve(() =>
    H.object({
      stdout: H.string().describe("The standard output of the command"),
      stderr: H.string().describe("The standard error output of the command"),
      interrupted: H.boolean().describe("Whether the command was interrupted"),
      returnCodeInterpretation: H.string()
        .optional()
        .describe("Semantic interpretation for non-error exit codes with special meaning"),
      isImage: H.boolean().optional().describe("Flag to indicate if stdout contains image data"),
      persistedOutputPath: H.string()
        .optional()
        .describe("Path to persisted full output when too large for inline"),
      persistedOutputSize: H.number()
        .optional()
        .describe("Total output size in bytes when persisted"),
      backgroundTaskId: H.string()
        .optional()
        .describe("ID of the background task if command is running in background"),
      backgroundedByUser: H.boolean()
        .optional()
        .describe("True if the user manually backgrounded the command with Ctrl+B"),
      gitOperation: Mjn()
        .optional()
        .describe(
          "@internal Structured classification of git/gh operations detected in this command (commit/push/merge/rebase/PR). Client-facing \u2014 lets clients render git activity without re-parsing stdout; not surfaced to the model.",
        ),
    }),
  )),
  (ISf = ti({
    name: Ss,
    ruleContentField: "command",
    searchHint: "execute Windows PowerShell commands",
    maxResultSizeChars: 30000,
    strict: true,
    async description({ description: e }) {
      return e || "Run PowerShell command";
    },
    async prompt() {
      return vTl();
    },
    isConcurrencySafe(e) {
      return this.isReadOnly?.(e) ?? false;
    },
    isSearchOrReadCommand(e) {
      if (!e?.command)
        return {
          isSearch: false,
          isRead: false,
        };
      return ASf(e.command);
    },
    isReadOnly(e) {
      if (eTl(e.command)) return false;
      return aJn(e.command);
    },
    toAutoClassifierInput(e) {
      return e.command;
    },
    async preparePermissionMatcher({ command: e }) {
      let t = await iEe(e);
      if (!t.valid) return () => true;
      let n = AL(t).flatMap((r) => {
        let o = [r.name, ...r.args].join(" "),
          s = [zm(r.name), ...r.args].join(" ");
        return o.toLowerCase() === s ? [o] : [o, s];
      });
      return (r) => {
        let o = Qjt(r);
        return n.some((s) => {
          if (o !== null) {
            let i = o.toLowerCase(),
              a = s.toLowerCase();
            return a === i || a.startsWith(`${i} `);
          }
          return X8(r, s, true, true);
        });
      };
    },
    get inputSchema() {
      return wSf();
    },
    get outputSchema() {
      return CSf();
    },
    userFacingName() {
      return "PowerShell";
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
    isEnabled() {
      return true;
    },
    async validateInput(e) {
      if (OTl())
        return {
          result: false,
          message: $Tl,
          errorCode: 11,
        };
      if (jW() && Su() && !pKt && !e.run_in_background) {
        let t = UTl(e.command);
        if (t !== null)
          return {
            result: false,
            message: `Blocked: ${t}. To wait for a condition, use Monitor with an until-loop (e.g. \`until <check>; do sleep 2; done\` \u2014 Monitor runs bash). To wait for a command you started, use run_in_background: true. Do not chain shorter sleeps to work around this block.`,
            errorCode: 10,
          };
      }
      return {
        result: true,
      };
    },
    async checkPermissions(e, t) {
      return await HTl(e, t);
    },
    renderToolUseMessage: ITl,
    renderToolUseProgressMessage: xTl,
    renderToolUseQueuedMessage: kTl,
    renderToolResultMessage: RTl,
    renderToolUseErrorMessage: LTl,
    mapToolResultToToolResultBlockParam(
      {
        interrupted: e,
        stdout: t,
        stderr: n,
        isImage: r,
        persistedOutputPath: o,
        persistedOutputSize: s,
        backgroundTaskId: i,
        backgroundedByUser: a,
      },
      l,
    ) {
      if (r) {
        let p = e6n(t, l);
        if (p) return p;
      }
      let c = t;
      if (o) {
        let p = t ? t.replace(/^(\s*\n)+/, "").trimEnd() : "",
          f = v3t(p, Gdt);
        c = fDe({
          filepath: o,
          originalSize: s ?? 0,
          isJson: false,
          preview: f.preview,
          hasMore: f.hasMore,
        });
      } else if (t) ((c = t.replace(/^(\s*\n)+/, "")), (c = c.trimEnd()));
      let u = n.trim();
      if (e) {
        if (n) u += PTl;
        u += "<error>Command was aborted before completion</error>";
      }
      let d = "";
      if (i) {
        let p = jm(i);
        if (a)
          d = `Command was manually backgrounded by user with ID: ${i}. Output is being written to: ${p}`;
        else
          d = `Command running in background with ID: ${i}. Output is being written to: ${p}. You will be notified when it completes. To check interim output, use ${Ds} on that file path.`;
      }
      return {
        tool_use_id: l,
        type: "tool_result",
        content: [c, u, d].filter(Boolean).join(`
`),
        is_error: e,
      };
    },
    async call(e, t, n, r, o) {
      if (OTl()) throw Error($Tl);
      let { abortController: s, setToolJSX: i, emitToolProgress: a } = t,
        l = !t.agentId,
        c = 0;
      try {
        let u = xSf({
            input: e,
            abortController: s,
            taskRegistry: t.taskRegistry,
            setToolJSX: i,
            emitToolProgress: a,
            preventCwdChanges: !l,
            isMainThread: l,
            toolUseId: t.toolUseId,
            agentId: t.agentId,
            sessionEnvVars: t.sessionEnvVars,
          }),
          d;
        do
          if (((d = await u.next()), !d.done && o)) {
            let M = d.value;
            o({
              type: "progress",
              toolUseID: `ps-progress-${c++}`,
              data: {
                type: "powershell_progress",
                output: M.output,
                fullOutput: M.fullOutput,
                elapsedTimeSeconds: M.elapsedTimeSeconds,
                totalLines: M.totalLines,
                totalBytes: M.totalBytes,
                timeoutMs: M.timeoutMs,
                taskId: M.taskId,
              },
            });
          }
        while (!d.done);
        let p = d.value,
          f = p.code === 0 && !p.stdout && p.stderr && !p.backgroundTaskId;
        if (!f) Njn(e.command, p.code, p.stdout);
        let m = tft(e.command),
          g = h_(s.signal.reason),
          h = p.interrupted && g === "interrupt",
          y = p.interrupted && (g === "interrupt" || g === "user-cancel" || g === "remote-cancel"),
          b = "";
        if (l) {
          if (r6n(Fr(t))) b = n6n("");
        }
        if (p.backgroundTaskId) {
          let M = LGt(p.stdout || "", e.command);
          if (l && M.hints.length > 0) for (let N of M.hints) DGt(N);
          return {
            data: {
              stdout: M.stripped,
              stderr: [p.stderr || "", b].filter(Boolean).join(`
`),
              interrupted: false,
              backgroundTaskId: p.backgroundTaskId,
              backgroundedByUser: p.backgroundedByUser,
            },
          };
        }
        let _ = new qIt(),
          S = (p.stdout || "").trimEnd();
        _.append(S + PTl);
        let A = DHl(e.command, p.code, S, p.stderr || ""),
          v = Z8n(_.toString()),
          C = LGt(v, e.command);
        if (((v = C.stripped), l && C.hints.length > 0)) for (let M of C.hints) DGt(M);
        if (p.preSpawnError)
          throw new mi(p.preSpawnError, "PowerShell: pre-spawn error (cwd/argv redacted)");
        if (A.isError && !h) {
          let M = S.length <= 8192 ? S : S.slice(0, 4096) + S.slice(-4096),
            N = RHl(M);
          throw (
            G("tengu_powershell_tool_command_failed", {
              command_type: $e(Fbt(e.command)),
              exit_code: p.code,
              stdout_length: S.length,
              error_class: N,
              not_recognized_kind:
                N === "not_recognized" || N === "command_not_found"
                  ? $e(LHl(M) ?? "unextracted")
                  : void 0,
              powershell_edition: $e((await MGt()) ?? "unknown"),
              destructive_category: $e(m ?? "none"),
              destructive_target_scope: $e(mce(e.command, $t(), m)),
              permission_mode: $e(Fr(t).mode),
            }),
            new oM(v, p.stderr || "", p.code, y)
          );
        }
        let x = 67108864,
          I,
          k;
        if (p.outputFilePath && p.outputTaskId)
          try {
            let M = await W$e.stat(p.outputFilePath);
            ((k = M.size), await GSe());
            let N = T3t(p.outputTaskId, false);
            if (M.size > x) await W$e.truncate(p.outputFilePath, x);
            try {
              await W$e.link(p.outputFilePath, N);
            } catch {
              await W$e.copyFile(p.outputFilePath, N);
            }
            I = N;
          } catch {}
        let D = B9t(v),
          P = v;
        if (D) {
          let M = await t6n(v, p.outputFilePath, k, Gh(t.options.mainLoopModel));
          if (M) P = M;
          else D = false;
        }
        let O = [p.stderr || "", b].filter(Boolean).join(`
`),
          L;
        if (!f) {
          let M = lft(e.command, p.stdout || "");
          if (Object.keys(M).length > 0) L = M;
        }
        return (
          G("tengu_powershell_tool_command_executed", {
            command_type: $e(Fbt(e.command)),
            stdout_length: P.length,
            stderr_length: O.length,
            exit_code: p.code,
            interrupted: p.interrupted,
            powershell_edition: $e((await MGt()) ?? "unknown"),
            destructive_category: $e(m ?? "none"),
            destructive_target_scope: $e(mce(e.command, $t(), m)),
            permission_mode: $e(Fr(t).mode),
          }),
          {
            data: {
              stdout: P,
              stderr: O,
              interrupted: p.interrupted,
              returnCodeInterpretation: A.message,
              isImage: D,
              persistedOutputPath: I,
              persistedOutputSize: k,
              gitOperation: L,
            },
          }
        );
      } finally {
        if (i) i(null);
        if (t.toolUseId)
          a?.({
            kind: "clear",
            toolUseId: t.toolUseId,
          });
      }
    },
    isResultTruncated(e, { columns: t }) {
      if (e.isImage) return false;
      return X1(e.stdout, t) || X1(e.stderr, t);
    },
  })));
async function pfe(e, t, n, r) {
  let o = e;
  if (r === "bash" && !Su())
    throw Error(
      `Skill ${n} requires bash (\`shell: bash\` in frontmatter) but Git Bash was not found. Install Git for Windows (https://git-scm.com/downloads/win), or change the skill's frontmatter to \`shell: powershell\`.`,
    );
  let s = r === "powershell" && q1() ? jTl() : Su() ? cl : jTl(),
    i = e.matchAll(kSf),
    a = e.includes("!`") ? D2n(e).matchAll(RSf) : [];
  return (
    await Promise.all(
      [...i, ...a].map(async (l) => {
        let c = l[1]?.trim();
        if (c)
          try {
            let u = await RL(
              s,
              {
                command: c,
              },
              t,
              dE({
                content: [],
              }),
              "",
            );
            if (u.behavior !== "allow")
              throw (
                T(
                  `Shell command permission check failed for command in ${n}: ${c}. Error: ${u.message}`,
                ),
                new NK(
                  `Shell command permission check failed for pattern "${l[0]}": ${u.message || "Permission denied"}`,
                )
              );
            let { data: d } = await s.call(
                {
                  command: c,
                },
                t,
              ),
              p = await Wdt(s, d, GTl.randomUUID()),
              f = typeof p.content === "string" ? p.content : WTl(d.stdout, d.stderr);
            o = o.replace(l[0], () => f);
          } catch (u) {
            if (u instanceof NK) throw u;
            LSf(u, l[0]);
          }
      }),
    ),
    o
  );
}
function WTl(e, t, n = false) {
  let r = [];
  if (e.trim()) r.push(e.trim());
  if (t.trim())
    if (n) r.push(`[stderr: ${t.trim()}]`);
    else
      r.push(`[stderr]
${t.trim()}`);
  return r.join(
    n
      ? " "
      : `
`,
  );
}
function LSf(e, t, n = false) {
  if (e instanceof oM) {
    if (e.interrupted)
      throw new NK(`Shell command interrupted for pattern "${t}": [Command interrupted]`);
    let s = WTl(e.stdout, e.stderr, n);
    throw new NK(`Shell command failed for pattern "${t}": ${s}`);
  }
  let r = be(e),
    o = n
      ? `[Error: ${r}]`
      : `[Error]
${r}`;
  throw new NK(o);
}
var GTl, jTl, kSf, RSf;
