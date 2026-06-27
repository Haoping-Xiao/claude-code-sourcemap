// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module v_l
// matched 2.1.88 source: src/services/tools/StreamingToolExecutor.ts
// class=modified (alt of src/services/tools/StreamingToolExecutor.ts)  jaccard=0.0579  score=0.0924  fileCov=0.1345
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module v_l] deps: @modelcontextprotocol/sdk/dist/esm/types.js, utils/debug.ts, services/analytics/firstPartyEventLoggingExporter.ts, services/mockRateLimits.ts, utils/sessionActivity.ts, screens/REPL.tsx, Il, utils/debug.ts, utils/errors.ts, utils/git.ts, utils/messages.ts, services/teamMemorySync/secretScanner.ts, WAe, commands/insights.ts, tools/ScheduleCronTool/prompt.ts, utils/memoryFileDetection.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, undici/lib/web/fetch/webidl.js, components/messages/AttachmentMessage.tsx, components/messages/CollapsedReadSearchContent.tsx, services/tools/StreamingToolExecutor.ts, cli/print.ts
((H_l = require("util")), (T_l = R(require("vm"))));
((rgf = ve(() =>
  H.strictObject({
    code: H.string().describe(
      "JavaScript code to execute. Supports top-level await. State persists across calls.",
    ),
    description: H.string()
      .optional()
      .describe(
        'Clear, concise description of what this script does in active voice (5-10 words). E.g. "Trace upgrade message to its GrowthBook flag"',
      ),
    timeout: H.number()
      .optional()
      .describe("Optional timeout in milliseconds (default 30000, max 600000)"),
  }),
)),
  (ogf = ve(() =>
    H.object({
      code: H.string().describe("The code that was executed"),
      result: H.unknown().describe("Return value from the code execution"),
      stdout: H.string().describe("Captured console.log output"),
      stderr: H.string().describe("Captured console.error output"),
      error: H.string().optional().describe("Error message if execution failed"),
      registeredTools: H.array(H.string())
        .optional()
        .describe("Names of tools registered during this execution"),
      images: H.array(
        H.object({
          base64: H.string(),
          mediaType: H.string(),
        }),
      )
        .optional()
        .describe("Images returned by inner Read calls \u2014 surfaced as image content blocks"),
      documents: H.array(
        H.object({
          base64: H.string(),
        }),
      )
        .optional()
        .describe("PDFs returned by inner Read calls \u2014 surfaced as document content blocks"),
    }),
  )),
  (igf = new Set(["stdout", "stderr", "error", "result"])));
cRo = ti({
  name: Fm,
  searchHint: "execute JavaScript with programmatic tool access",
  get maxResultSizeChars() {
    return E_l();
  },
  async prompt() {
    return Pyl();
  },
  async description() {
    return Myl();
  },
  get inputSchema() {
    return rgf();
  },
  get outputSchema() {
    return ogf();
  },
  isEnabled() {
    return LI();
  },
  isConcurrencySafe() {
    return false;
  },
  isReadOnly() {
    return false;
  },
  toAutoClassifierInput(e) {
    return e.code;
  },
  async checkPermissions() {
    return {
      behavior: "allow",
    };
  },
  async call(e, t, n, r, o) {
    let s = t.agentId ?? JWe,
      i = t.getReplContexts()[s],
      { code: a, timeout: l } = e;
    _gf(a);
    let c = Math.min(l ?? sgf, lXn),
      u = c$(t.abortController),
      d = {
        ...t,
        abortController: u,
      },
      p = new Map(),
      f = fgf(),
      m = mgf(c, () =>
        f.reject(
          Error(
            `REPL execution timed out after ${c}ms of script time (inner tool calls excluded). Script may still be running \u2014 avoid unbounded awaits.`,
          ),
        ),
      ),
      g = ygf((k, D) => {
        (G("tengu_repl_inner_watchdog_fired", {
          toolName: Ui(k.toolName),
          watchdogMs: D,
          nativeTimeoutMs: k.nativeTimeoutMs,
        }),
          u.abort(),
          f.reject(
            Error(
              `REPL inner tool call ${k.toolName} exceeded ${D}ms watchdog (native timeout ${k.nativeTimeoutMs ?? "unset"}). The call may be hung \u2014 try a shorter timeout on the tool itself.`,
            ),
          ));
      }),
      h = (k) => {
        if (k.type !== "progress") {
          o?.(k);
          return;
        }
        let D = k.data;
        switch ((lgf(p, D), D.phase)) {
          case "start":
            m.onToolStart();
            break;
          case "executing":
            g.arm(D);
            break;
          case "complete":
          case "error":
            (g.clear(D.toolUseId), m.onToolEnd());
            break;
        }
        o?.(
          D.result === void 0
            ? k
            : {
                ...k,
                data: {
                  ...D,
                  result: void 0,
                },
              },
        );
      },
      y,
      b = t.messages[0],
      _ = b !== void 0 && pA(b) ? b.uuid : null,
      S = ngf(t.options.tools, Fr(t)),
      A = () => {
        let k = iXn(S, d, n, r, h);
        return ((k.boundaryUuid = _), (k.helperState.repo = y?.helperState.repo), k);
      };
    if (i && i.boundaryUuid === _) {
      ((y = i), y.console.clear(), y.clearAllTimers());
      try {
        a_l(y, S, d, n, r, h);
      } catch (k) {
        A_l(k, y, t, s, A);
      }
    } else {
      (i?.clearAllTimers(),
        i?.console.clear(),
        (y = iXn(S, d, n, r, h)),
        (y.boundaryUuid = _),
        (y.helperState.repo = await XFe().catch(() => null)));
      let k = t.replHydration ?? {
          kind: "fresh",
        },
        D =
          k.kind === "fork" && i
            ? {
                kind: "fresh",
              }
            : k;
      try {
        let P = D.kind === "fork" ? D.log : D.kind === "resume" ? aXn(t.messages) : [];
        if (P.length > 0) {
          let O = performance.now(),
            L = await d_l(y, P),
            M = Math.round(performance.now() - O),
            { summary: N } = p_l(L);
          if (
            (T(`REPL state hydrated from ${D.kind} in ${M}ms: ${N}`, {
              level: "info",
            }),
            D.kind === "resume")
          )
            y.replayLog = [...P];
        }
      } catch (P) {
        if (wzt(P)) {
          (y.clearAllTimers(), y.console.clear());
          let O = y.helperState.repo;
          ((y = iXn(S, d, n, r, h)),
            (y.boundaryUuid = _),
            (y.helperState.repo = O),
            T(
              `REPL hydration hit a poisoned context (global '${P.key}' pinned non-configurable by replayed code); starting fresh without hydration`,
              {
                level: "warn",
              },
            ));
        } else
          T(`REPL state hydration failed: ${y.sealers.errMsg(P)}`, {
            level: "warn",
          });
      }
      (y.clearAllTimers(), t.setReplContext(s, y));
    }
    let { vmContext: v, registeredTools: C, console: x } = y,
      I = new Set(C.keys());
    try {
      oXn(y);
    } catch (k) {
      A_l(k, y, t, s, A);
    }
    try {
      let k = J7n(a),
        P = new T_l.Script(k, {
          filename: "repl-tool-code.js",
          importModuleDynamically: () => {
            throw efe("import() is not available in REPL code.");
          },
        }).runInContext(v, {
          timeout: c,
        }),
        O = t.abortController.signal,
        L = () => f.reject(Error("REPL execution interrupted"));
      if (O.aborted) L();
      else
        O.addEventListener("abort", L, {
          once: true,
        });
      m.start();
      let M = setTimeout(
        (Z) =>
          Z(
            Error(
              `REPL execution exceeded hard wall-clock limit of ${lXn}ms. An inner tool call may be hung \u2014 try a shorter timeout on the tool itself, or split the work.`,
            ),
          ),
        lXn,
        f.reject,
      );
      M.unref?.();
      let { v: N } = await Promise.race([
          y.sealers.awaitVM(P).then((Z) => sXn(y, Q7n(Z))),
          f.promise,
        ]).finally(() => {
          (clearTimeout(M), O.removeEventListener("abort", L));
        }),
        B = [...C.keys()].filter((Z) => !I.has(Z)),
        $ = cgf(p),
        q = dgf(p),
        W = Array.from(p.values()).filter((Z) => Z.phase === "start" || Z.phase === "executing"),
        V = x.getStderr(),
        Y = W.length
          ? (V
              ? V +
                `
`
              : "") +
            `\u26A0 ${W.length} tool call(s) still pending at script end \u2014 ` +
            `results discarded: ${W.map((Z) => Z.toolName).join(", ")}. Add 'await'.`
          : V,
        z = {
          code: a,
          result: N,
          stdout: x.getStdout(),
          stderr: Y,
          ...(B.length > 0 && {
            registeredTools: B,
          }),
          ...($.length > 0 && {
            images: $,
          }),
          ...(q.length > 0 && {
            documents: q,
          }),
        },
        K = B.length > 0 ? Oyl(C, y.sealers) : void 0;
      return (
        y.replayLog.push({
          code: a,
          calls: aRo(p),
          threw: false,
        }),
        {
          data: z,
          newMessages: S_l(p),
          ...(K && {
            newTools: K,
          }),
        }
      );
    } catch (k) {
      if (k instanceof Error && k.stack)
        T(
          `REPL error stack trace:
${k.stack}`,
          {
            level: "error",
          },
        );
      let D = Array.from(p.values()).filter((M) => M.phase === "error"),
        P = k instanceof Error ? iss(k) : y.sealers.toStr(k),
        O = D.length
          ? P +
            `

Inner tool errors (likely root cause):
` +
            D.map((M) => `- ${M.toolName}: ${M.error}`).join(`
`)
          : P,
        L = {
          code: a,
          result: null,
          stdout: x.getStdout(),
          stderr: x.getStderr(),
          error: O,
        };
      return (
        y.replayLog.push({
          code: a,
          calls: aRo(p),
          threw: true,
        }),
        {
          data: L,
          newMessages: S_l(p),
        }
      );
    } finally {
      (u.abort(), m.cancel(), g.cancel(), y.clearAllTimers());
    }
  },
  userFacingName() {
    return "REPL";
  },
  isTransparentWrapper() {
    return true;
  },
  getToolUseSummary(e) {
    if (!e?.code) return null;
    let t = Gd(e.code);
    if (t && t.length > 50) return t.slice(0, 49) + "\u2026";
    return t ?? null;
  },
  renderToolUseMessage: m_l,
  renderToolUseRejectedMessage: h_l,
  renderToolUseErrorMessage: y_l,
  renderToolUseProgressMessage: g_l,
  mapToolResultToToolResultBlockParam(e, t) {
    let n = "";
    if (!e.stdout && !e.stderr && !e.error && e.result !== void 0 && !e.registeredTools?.length)
      n = b_l(e.result, 10);
    else {
      let r = [];
      if (e.stdout)
        r.push(`stdout:
${e.stdout}`);
      if (e.stderr)
        r.push(`stderr:
${e.stderr}`);
      if (e.error) r.push(`error: ${e.error}`);
      if (e.result !== void 0) r.push(`result: ${b_l(e.result, 10)}`);
      if (e.registeredTools?.length) r.push(`Registered tools: ${e.registeredTools.join(", ")}`);
      n =
        r.join(`

`) || "";
    }
    if (e.images?.length || e.documents?.length) {
      let r = E_l(),
        o =
          n.length > r
            ? n.slice(0, r) +
              `
[\u2026 ${n.length - r} more chars truncated \u2014 block-bearing REPL results are capped at ${r} chars of text]`
            : n || "(no text output)";
      return {
        tool_use_id: t,
        type: "tool_result",
        content: [
          {
            type: "text",
            text: o,
          },
          ...(e.images ?? []).map((s) => ({
            type: "image",
            source: {
              type: "base64",
              media_type: s.mediaType,
              data: s.base64,
            },
          })),
          ...(e.documents ?? []).map((s) => ({
            type: "document",
            source: {
              type: "base64",
              media_type: "application/pdf",
              data: s.base64,
            },
          })),
        ],
      };
    }
    return {
      tool_use_id: t,
      type: "tool_result",
      content: n,
      is_error: !!e.error,
    };
  },
});
var bgf, Sgf, w_l;
