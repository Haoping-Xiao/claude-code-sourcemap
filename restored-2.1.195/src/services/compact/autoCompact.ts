// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pre
// matched 2.1.88 source: src/services/compact/autoCompact.ts
// class=modified  jaccard=0.1076  score=0.174  fileCov=0.2198
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module pre] deps: services/mcp/auth.ts, services/analytics/index.ts, services/analytics/index.ts, memdir/findRelevantMemories.ts, tools/FileReadTool/FileReadTool.ts, tools/GlobTool/prompt.ts, tools/ScheduleCronTool/prompt.ts, tools/ToolSearchTool/ToolSearchTool.ts, services/PromptSuggestion/speculation.ts, utils/config.ts, has-flag/index.js, services/compact/compactWarningState.ts, Il, utils/debug.ts, utils/tempfile.ts, utils/errors.ts, utils/claudemd.ts, cli/print.ts, services/api/dumpPrompts.ts, utils/worktree.ts, utils/sequential.ts, utils/memory/types.ts, utils/messages.ts, utils/agentContext.ts, utils/file.ts, utils/permissions/filesystem.ts, fast-xml-parser/lib/fxp.cjs, utils/queryHelpers.ts, utils/stats.ts, commands/add-dir/index.ts, utils/plans.ts, utils/fsOperations.ts, Task.ts, utils/telemetry/pluginTelemetry.ts, @smithy/core/dist-cjs/submodules/cbor/index.js, utils/model/check1mAccess.ts, services/vcr.ts, dn, services/analytics/growthbook.ts, utils/debug.ts, pke, fb, utils/shell/prefix.ts, services/api/errors.ts, services/compact/compact.ts, services/compact/microCompact.ts, H5e, utils/sessionStorage.ts, U1, utils/pdf.ts, commands/compact/compact.ts
Tq = class Tq extends Error {};
function Pwf(e) {
  return e instanceof Tq || K1(be(e)) || Xie(e, cZn) || Xie(e, bMo);
}
function autoCompactIfNeeded(messages, toolUseContext, cacheSafeParams) {
  let r = (messages?.consecutiveFailures ?? 0) + 1;
  if (r >= Lkl)
    (T(
      `autocompact: circuit breaker tripped after ${r} consecutive failures${toolUseContext ? " (reactive path)" : ""} \u2014 skipping future attempts this session`,
      {
        level: "warn",
      },
    ),
      G("tengu_auto_compact_circuit_breaker", {
        consecutiveFailures: r,
        ...(toolUseContext && {
          routedThroughReactive: toolUseContext,
        }),
        ...(cacheSafeParams && {
          thresholdSource: $e(cacheSafeParams),
        }),
      }));
  return {
    kind: "failed",
    consecutiveFailures: r,
    routedThroughReactive: toolUseContext,
    thresholdSource: cacheSafeParams,
  };
}
function Mwf(e, t, n, r = 0) {
  let o = Kct(e);
  if (!o) return null;
  let s = o.input_tokens + o.cache_read_input_tokens + o.cache_creation_input_tokens,
    i = qv(e, rH(t)),
    a = Math.max(0, s - r - i),
    l = Ajt(t, n);
  if (a <= l) return null;
  let c = 0,
    u = 0,
    d = (p) => {
      for (let f of p) {
        let m = f;
        if (m.type === "document") c++;
        else if (m.type === "image") u++;
        else if (m.type === "tool_result" && Array.isArray(m.content)) d(m.content);
      }
    };
  for (let p of e) {
    let f = p.message?.content;
    if (Array.isArray(f)) d(f);
  }
  return {
    prefixTokens: a,
    thresholdTokens: l,
    totalInputTokens: s,
    messagesEstimate: i,
    snipTokensFreed: r,
    documentBlockCount: c,
    imageBlockCount: u,
  };
}
function $wf() {
  return ut(process.env.CLAUDE_CODE_COLD_COMPACT);
}
async function shouldAutoCompact(messages, model, querySource, r, o = 0) {
  if (Gct(r)) return false;
  if (tLe(r)) return false;
  if (!pC()) return false;
  if ($X() && !nLe(model, querySource)) return false;
  let s = eA(messages, rH(model)) - o,
    i = rLe(s, model, querySource);
  return (
    T(`autocompact: tokens=${s} level=${i.level} effectiveWindow=${are(model, querySource)}`),
    i.level === "compact" || i.level === "blocked"
  );
}
async function* eMo(e, t, n, r, o, s, i) {
  if (Oe.DISABLE_COMPACT)
    return {
      kind: "not_needed",
    };
  if (o?.consecutiveFailures !== void 0 && o.consecutiveFailures >= Lkl)
    return {
      kind: "failure_breaker_open",
    };
  let a = t.options.mainLoopModel,
    l = t.options.autoCompactWindow;
  if (!(await shouldAutoCompact(e, a, l, r, s)))
    return {
      kind: "not_needed",
    };
  let u = Mwf(e, a, l, s);
  if (u)
    (T(
      `autocompact: fixed prefix ~${u.prefixTokens} > threshold ${u.thresholdTokens} \u2014 compaction cannot help`,
      {
        level: "warn",
      },
    ),
      It("compact_auto", "compact_auto_prefix_overflow"),
      G("tengu_auto_compact_prefix_overflow", {
        ...u,
        wouldHaveBlocked: true,
      }));
  let d = p1n(o),
    { consecutiveRapidRefills: p } = d;
  if (d.action === "trip")
    return (
      T(
        `autocompact: rapid-refill breaker tripped \u2014 ${p} consecutive refills within <${bia} turns each (last was ${o?.turnCounter} turns)`,
        {
          level: "warn",
        },
      ),
      It("compact_auto", "compact_auto_rapid_refill_breaker"),
      {
        kind: "rapid_refill_breaker_tripped",
      }
    );
  let f = d1n(a, l),
    m = Nwf(a, l);
  if (r !== void 0 && f !== "auto" && $X()) {
    (T(`autocompact: routing through reactive (thresholdSource=${f})`),
      G("tengu_auto_compact_routed_reactive", {
        thresholdSource: $e(f),
      }));
    let y = performance.now(),
      b = r,
      { result: _, hookBlocked: S } = yield* jct(async (A, v, C) => {
        let x;
        if (i) {
          let k = c$(A.abortController),
            D = setTimeout((P) => P.abort(eP("recovery-timeout")), m1n, k);
          D.unref?.();
          try {
            x = await i({
              toolUseContext: {
                ...A,
                abortController: k,
              },
              messages: e,
              querySource: b,
              trigger: "threshold",
              detectedAt: y,
            });
          } finally {
            clearTimeout(D);
          }
        }
        let I = await pQn({
          hasAttempted: false,
          querySource: b,
          aborted: A.abortController.signal.aborted,
          messages: e,
          cacheSafeParams: {
            ...n,
            toolUseContext: A,
          },
          precomputed: x?.swap,
          precomputeOutcome: x?.outcome,
          userWaitStartedAt: y,
          thresholdSource: f,
          spinnerHintText: m,
        });
        if (I.result === null && x?.emittedEarlyCompactStart)
          (A.onCompactEvent?.({
            type: "compact_progress",
            event: {
              type: "compact_end",
            },
          }),
            A.onCompactEvent?.({
              type: "sdk_status",
              status: null,
            }));
        return I;
      }, t);
    if (_)
      return {
        kind: "compacted",
        result: _,
        consecutiveRapidRefills: p,
        thresholdSource: f,
        routedThroughReactive: true,
      };
    if (S)
      return {
        kind: "hook_blocked",
        thresholdSource: f,
        routedThroughReactive: true,
      };
    return autoCompactIfNeeded(o, true, f);
  }
  let g = {
      isRecompactionInChain: o?.compacted === true,
      turnsSincePreviousCompact: o?.turnCounter ?? -1,
      previousCompactTurnId: o?.turnId,
      autoCompactThreshold: Ajt(a, l),
      querySource: r,
    },
    h = $wf();
  try {
    let y = yield* jct((b, _, S) => w7n(e, b, n, true, void 0, true, g, h, m, _, S), t);
    return (
      hfe(r, t.setAppState, t.agentId, n.stickyBetas),
      {
        kind: "compacted",
        result: y,
        consecutiveRapidRefills: p,
        thresholdSource: f,
        routedThroughReactive: false,
      }
    );
  } catch (y) {
    if (be(y).startsWith(abt))
      return {
        kind: "hook_blocked",
        routedThroughReactive: false,
      };
    if (!Xie(y, t3))
      if (Pwf(y))
        T(`autocompact failed: ${be(y)}`, {
          level: "error",
        });
      else ke(y);
    return autoCompactIfNeeded(o, false, void 0);
  }
}
function Nwf(e, t) {
  let n = mo(e);
  if (eio(n) === void 0) return null;
  let { source: r, configured: o } = A4(e, t),
    s = nH(e, OS());
  if ((r !== "experiment" && r !== "clientdata") || o >= s) return null;
  return `Compacting at auto window (${gl(o)} tokens) \xB7 /autocompact to configure`;
}
var Lkl = 3;
