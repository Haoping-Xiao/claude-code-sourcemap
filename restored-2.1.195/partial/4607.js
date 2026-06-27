// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VPl
// matched 2.1.88 source: src/commands/compact/compact.ts
// class=partial  jaccard=0.2404  score=0.3206  fileCov=0.4902
// note: low-confidence suggestion: src/commands/compact/compact.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var VPl = E(() => {
  IKt();
  Lo();
  sa();
  hze();
  Bqe();
  _m();
  K$e();
  N0f = ["git checkout -b *", "git add *", "git status *", "git push *", "git commit *", "gh pr create *", "gh pr edit *", "gh pr view *", "gh pr merge *"], jPl = [...N0f.flatMap(e => [`Bash(${e})`, `PowerShell(${e})`]), "ToolSearch", "mcp__slack__send_message", "mcp__claude_ai_Slack__slack_send_message"];
  B0f = {
    type: "prompt",
    name: Kwo,
    description: "Commit, push, and open a PR",
    allowedTools: jPl,
    get contentLength() {
      return GPl("main", !1).length;
    },
    progressMessage: "creating commit and PR",
    source: "builtin",
    async getPromptForCommand(e, t) {
      let [n, r] = await Promise.all([vD(), aCl(t.getAppState)]),
        o = !1,
        s = GPl(c6(n), o, r),
        i = e?.trim();
      if (i) s += `

## Additional instructions from user

${c6(i)}`;
      return [{
        type: "text",
        text: await pfe(s, {
          ...t,
          getAppState() {
            let l = t.getAppState();
            return {
              ...l,
              toolPermissionContext: {
                ...l.toolPermissionContext,
                alwaysAllowRules: {
                  ...l.toolPermissionContext.alwaysAllowRules,
                  command: jPl
                }
              }
            };
          }
        }, `/${Kwo}`)
      }];
    }
  }, qPl = B0f;
});
var zPl = {};
_t(zPl, {
  call: () => call
});
async function F0f(e, t, n) {
  t.onCompactEvent?.({
    type: "compact_progress",
    event: {
      type: "hooks_start",
      hookType: "pre_compact"
    }
  }), t.onCompactEvent?.({
    type: "sdk_status",
    status: "compacting"
  });
  let r = performance.now(),
    o,
    s = qv(e),
    i,
    a;
  try {
    let [l, c] = await Promise.all([RQ({
      trigger: "manual",
      customInstructions: n || null
    }, t.abortController.signal), W0f(t, e)]);
    uZn(l, g => t.onQueryEvent?.({
      type: "notification",
      notification: g
    }));
    let u = SMo(n, l.newCustomInstructions);
    t.onCompactEvent?.({
      type: "stream_mode",
      mode: "requesting"
    }), t.onQueryEvent?.({
      type: "response_length",
      op: "reset"
    }), t.onCompactEvent?.({
      type: "compact_progress",
      event: {
        type: "compact_start"
      }
    });
    let d = await j0f(n, l.newCustomInstructions, e, t.abortController.signal);
    a = d.reuse;
    let p = await (d.hit ? fQn({
      ...d.finalize,
      startTime: r,
      cacheSafeParams: c
    }) : yPo(e, c, {
      customInstructions: u,
      trigger: "manual",
      manualPrecomputeReuse: d.reuse,
      userWaitStartedAt: r,
      precomputedKind: d.precomputedKind,
      precomputedFailureCause: d.precomputedFailureCause
    })).catch(g => (ke(g), {
      ok: !1,
      reason: "error",
      detail: be(g)
    }));
    if (!p.ok) switch (p.reason) {
      case "too_few_groups":
        throw Error(CSt);
      case "aborted":
        throw Error(t3);
      case "exhausted":
        throw new Tq("Compaction failed \xB7 conversation could not be reduced below the context limit");
      case "media_unstrippable":
        throw new Tq("Compaction failed \xB7 attached media exceeds size limits");
      case "error":
        throw new Tq(`Error during compaction: ${p.detail || "unknown error"}`);
    }
    let f = p.result.boundaryMarker;
    if (f.subtype === "compact_boundary" && "compactMetadata" in f) i = f.compactMetadata.postTokens;
    hfe(void 0, t.setAppState), gut(), uS.cache.clear?.();
    let m = [l.userDisplayMessage, p.result.userDisplayMessage].filter(Boolean).join(`
`) || void 0;
    return {
      type: "compact",
      compactionResult: {
        ...p.result,
        userDisplayMessage: m
      },
      displayText: G0f(t, m)
    };
  } catch (l) {
    throw o = l instanceof Error ? l.message : "reactive compaction failed", l;
  } finally {
    t.onCompactEvent?.({
      type: "stream_mode",
      mode: "requesting"
    }), t.onQueryEvent?.({
      type: "response_length",
      op: "reset"
    }), t.onCompactEvent?.({
      type: "compact_progress",
      event: {
        type: "compact_end"
      }
    }), J0e({
      trigger: "manual",
      success: !o,
      durationMs: performance.now() - r,
      preTokens: s,
      postTokens: i,
      error: o,
      precomputeReuse: a
    }), t.onCompactEvent?.({
      type: "sdk_status",
      status: null,
      metadata: {
        compactResult: o ? "failed" : "success",
        ...(o && {
          compactError: o
        })
      }
    });
  }
}
async function j0f(e, t, n, r) {
  if (e) return {
    hit: !1,
    reuse: "miss_custom_instructions"
  };
  if (t) return {
    hit: !1,
    reuse: "miss_hook"
  };
  let o = performance.now(),
    s = await uPo(void 0, r),
    i = performance.now() - o;
  if (s === null) return iSt("none", s, i), {
    hit: !1,
    reuse: "miss_not_ready",
    precomputedKind: "none"
  };
  if (s.kind === "turn_aborted") throw iSt("aborted", s, i), Error(t3);
  if (s.kind === "failed") return iSt("failed", s, i), {
    hit: !1,
    reuse: "miss_not_ready",
    precomputedKind: "failed",
    precomputedFailureCause: s.failure.cause
  };
  let a = pPo(n, s.ready.precomputedAtUuid);
  if (a === null) return iSt("none", s, i), cQn(s.ready, "boundary_uuid_missing", void 0), {
    hit: !1,
    reuse: "miss_not_ready",
    precomputedKind: "none"
  };
  return iSt("applied", s, i), {
    hit: !0,
    reuse: "hit",
    finalize: {
      compactResult: s.ready.result,
      messagesToPreserve: [...s.ready.result.messagesToPreserve, ...a],
      preCompactMessages: n,
      querySource: void 0,
      trigger: "manual",
      precomputed: !0,
      manualPrecomputeReuse: "hit",
      precomputeTelemetry: {
        statusAtPTL: s.statusAtPTL === "ready" ? "ready" : "pending",
        leadMs: o - s.ready.startedAt,
        totalMs: s.ready.readyDurationMs,
        borrowed: !1,
        messagesSinceTokens: qv(a)
      }
    }
  };
}
function G0f(e, t) {
  let n = J8e("tip"),
    r = eC("app:toggleTranscript", "Global", "ctrl+o"),
    o = [...(e.options.verbose ? [] : [`(${r} to see full summary)`]), ...(t ? [t] : []), ...(n ? [n] : [])];
  return wt.dim("Compacted " + o.join(`
`));
}
async function W0f(e, t) {
  let n = e.getAppState(),
    r = await DL(e.options.tools, e.options.mainLoopModel, Array.from(Fr(e).additionalWorkingDirectories.keys())),
    o = Z5({
      mainThreadAgentDefinition: void 0,
      toolUseContext: e,
      customSystemPrompt: e.options.customSystemPrompt,
      defaultSystemPrompt: r,
      appendSystemPrompt: e.options.appendSystemPrompt
    }),
    [s, i] = await Promise.all([uS(), hH(n.cacheBreakerPhrase)]);
  return {
    systemPrompt: o,
    userContext: s,
    systemContext: i,
    toolUseContext: e,
    forkContextMessages: t
  };
}
var call = async (e, t) => {
  let {
      abortController: n
    } = t,
    {
      messages: r
    } = t;
  if (r = Py(r), r.length === 0) throw Error("No messages to compact");
  let o = e.trim();
  try {
    return await F0f(r, t, o);
  } catch (s) {
    if (n.signal.aborted) throw new ru("Compaction canceled.");else if (Xie(s, CSt)) return {
      type: "text",
      value: CSt
    };else if (s instanceof Tq) return {
      type: "text",
      value: s.message
    };else throw ke(s), Error(`Error during compaction: ${s instanceof Error ? s.message : String(s)}`, {
      cause: s
    });
  }
};