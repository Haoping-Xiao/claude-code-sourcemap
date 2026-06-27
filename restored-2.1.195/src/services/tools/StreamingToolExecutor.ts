// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gIl
// matched 2.1.88 source: src/services/tools/StreamingToolExecutor.ts
// class=modified  jaccard=0.4229  score=0.7124  fileCov=0.5099
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gIl = E(() => {
  fp();
  kt();
});
class aHe {
  toolDefinitions;
  canUseTool;
  now;
  tools = [];
  toolUseContext;
  discarded = false;
  progressAvailableResolve;
  drainableResolve;
  drainGeneration = 0;
  constructor(e, t, n, r) {
    this.toolDefinitions = e;
    this.canUseTool = t;
    this.now = r;
    this.toolUseContext = n;
  }
  discard() {
    ((this.discarded = true), this.wakeWaiters());
  }
  discardAndAbortInFlight(e) {
    this.discard();
    let t = 0,
      n = 0,
      r = 0;
    for (let o of this.tools) {
      if (o.status === "completed" || o.status === "yielded") {
        n++;
        continue;
      }
      if (o.status === "queued") {
        r++;
        continue;
      }
      if (o.status === "executing" && o.abortController && !o.abortController.signal.aborted)
        (o.abortController.abort(e), t++);
    }
    return {
      aborted: t,
      completedBeforeEvent: n,
      queuedNeverStarted: r,
      toolUseIds: this.tools.map((o) => o.id),
    };
  }
  addTool(e, t) {
    let n = _l(this.toolDefinitions, e.name, this.toolUseContext.options.toolAliases);
    if (!n) {
      let s = vLo(
        e.name,
        this.toolDefinitions,
        this.toolUseContext.agentId,
        this.toolUseContext.options.mainLoopModel,
      );
      (this.tools.push({
        id: e.id,
        block: e,
        assistantMessage: t,
        status: "completed",
        isConcurrencySafe: true,
        pendingProgress: [],
        pendingBridgeEvents: [],
        results: [
          Rn({
            content: [
              {
                type: "tool_result",
                content: `<tool_use_error>Error: No such tool available: ${e.name}${s}</tool_use_error>`,
                is_error: true,
                tool_use_id: e.id,
              },
            ],
            toolUseResult: `Error: No such tool available: ${e.name}${s}`,
            sourceToolAssistantUUID: t.uuid,
            now: this.now,
          }),
        ],
      }),
        this.wakeWaiters());
      return;
    }
    let r = n.inputSchema.safeParse(e.input),
      o = r?.success
        ? (() => {
            try {
              return Boolean(n.isConcurrencySafe(r.data));
            } catch {
              return false;
            }
          })()
        : false;
    (this.tools.push({
      id: e.id,
      block: e,
      assistantMessage: t,
      status: "queued",
      isConcurrencySafe: o,
      pendingProgress: [],
      pendingBridgeEvents: [],
      results: [],
    }),
      this.processQueue());
  }
  canExecuteTool(e) {
    let t = this.tools.filter((n) => n.status === "executing");
    return t.length === 0 || (e && t.every((n) => n.isConcurrencySafe));
  }
  async processQueue() {
    for (let e of this.tools) {
      if (e.status !== "queued") continue;
      if (this.canExecuteTool(e.isConcurrencySafe)) await this.executeTool(e);
      else if (!e.isConcurrencySafe) break;
    }
  }
  createSyntheticErrorMessage(e, t, n) {
    if (t === "user_interrupted")
      return Rn({
        content: [
          {
            type: "tool_result",
            content: d$e(d6e),
            is_error: true,
            tool_use_id: e,
          },
        ],
        toolUseResult: yIl,
        toolDenialKind: AAe() ? "user-rejected" : void 0,
        sourceToolAssistantUUID: n.uuid,
        now: this.now,
      });
    return Rn({
      content: [
        {
          type: "tool_result",
          content:
            "<tool_use_error>Error: Streaming fallback - tool execution discarded</tool_use_error>",
          is_error: true,
          tool_use_id: e,
        },
      ],
      toolUseResult: "Streaming fallback - tool execution discarded",
      sourceToolAssistantUUID: n.uuid,
      now: this.now,
    });
  }
  getAbortReason(e) {
    if (this.discarded) return "streaming_fallback";
    if (this.toolUseContext.abortController.signal.aborted) {
      if (h_(this.toolUseContext.abortController.signal.reason) === "interrupt")
        return this.getToolInterruptBehavior(e) === "cancel" ? "user_interrupted" : null;
      return "user_interrupted";
    }
    return null;
  }
  getToolInterruptBehavior(e) {
    let t = _l(this.toolDefinitions, e.block.name, this.toolUseContext.options.toolAliases);
    if (!t?.interruptBehavior) return "block";
    try {
      return t.interruptBehavior();
    } catch {
      return "block";
    }
  }
  updateInterruptibleState(e) {
    let t = this.tools.filter((r) => r.status === "executing"),
      n = t.length > 0 && t.every((r) => this.getToolInterruptBehavior(r) === "cancel");
    (e.pendingBridgeEvents.push({
      type: "interruptible_tool_in_progress",
      inProgress: n,
    }),
      this.wakeWaiters());
  }
  wakeWaiters() {
    if ((this.drainGeneration++, this.progressAvailableResolve))
      (this.progressAvailableResolve(), (this.progressAvailableResolve = void 0));
    if (this.drainableResolve) (this.drainableResolve(), (this.drainableResolve = void 0));
  }
  waitForDrainable(e) {
    if (this.drainGeneration > e) return Promise.resolve(this.drainGeneration);
    return new Promise((t) => {
      this.drainableResolve = () => t(this.drainGeneration);
    });
  }
  buildSameTurnToolUses(e) {
    try {
      let t = new Map();
      for (let n of this.tools) {
        if (n === e) break;
        let r = t.get(n.assistantMessage) ?? [];
        (r.push(n.block), t.set(n.assistantMessage, r));
      }
      if (t.size === 0) return;
      return [...t.entries()].map(([n, r]) => ({
        ...n,
        message: {
          ...n.message,
          content: r,
        },
      }));
    } catch (t) {
      G("tengu_auto_mode_sibling_context_error", {
        ...LM(t),
      });
      return;
    }
  }
  async executeTool(e) {
    ((e.status = "executing"), this.updateInterruptibleState(e));
    let t = [],
      n = [],
      o = (async () => {
        let s = this.getAbortReason(e);
        if (s) {
          (t.push(this.createSyntheticErrorMessage(e.id, s, e.assistantMessage)),
            (e.results = t),
            (e.contextLayers = n),
            (e.status = "completed"),
            this.updateInterruptibleState(e));
          return;
        }
        let i = c$(this.toolUseContext.abortController);
        (i.signal.addEventListener(
          "abort",
          () => {
            if (!this.toolUseContext.abortController.signal.aborted && !this.discarded)
              this.toolUseContext.abortController.abort(i.signal.reason);
          },
          {
            once: true,
          },
        ),
          (e.abortController = i));
        let a = eKt(
            e.block,
            e.assistantMessage,
            this.canUseTool,
            {
              ...this.toolUseContext,
              abortController: i,
              sameTurnToolUses: this.buildSameTurnToolUses(e),
            },
            this.now,
          ),
          l = false;
        for await (let c of a) {
          if (tz(c)) {
            (e.pendingBridgeEvents.push(c), this.wakeWaiters());
            continue;
          }
          let u = this.getAbortReason(e);
          if (u && !l) {
            t.push(this.createSyntheticErrorMessage(e.id, u, e.assistantMessage));
            break;
          }
          if (
            c.message.type === "user" &&
            Array.isArray(c.message.message.content) &&
            c.message.message.content.some((d) => d.type === "tool_result" && d.is_error === true)
          )
            l = true;
          if (c.message)
            if (c.message.type === "progress") {
              if ((e.pendingProgress.push(c.message), this.progressAvailableResolve))
                (this.progressAvailableResolve(), (this.progressAvailableResolve = void 0));
            } else t.push(c.message);
          if (c.contextLayers) n.push(...c.contextLayers.layers);
        }
        if (
          ((e.results = t),
          (e.contextLayers = n),
          (e.status = "completed"),
          this.updateInterruptibleState(e),
          !e.isConcurrencySafe && n.length > 0)
        )
          this.toolUseContext = nKt(this.toolUseContext, n);
      })();
    ((e.promise = o),
      o.finally(() => {
        this.processQueue();
      }));
  }
  *getCompletedResults() {
    if (this.discarded) return;
    for (let e of this.tools) {
      while (e.pendingBridgeEvents.length > 0) yield e.pendingBridgeEvents.shift();
      while (e.pendingProgress.length > 0)
        yield {
          message: e.pendingProgress.shift(),
          newContext: this.toolUseContext,
        };
      if (e.status === "yielded") continue;
      if (e.status === "completed") {
        e.status = "yielded";
        for (let t of e.results)
          yield {
            message: t,
            newContext: this.toolUseContext,
          };
        yield {
          type: "set_in_progress_tool_use_ids",
          op: {
            action: "remove",
            ids: [e.id],
          },
        };
      } else if (e.status === "executing" && !e.isConcurrencySafe) break;
    }
  }
  hasPendingProgress() {
    return this.tools.some((e) => e.pendingProgress.length > 0 || e.pendingBridgeEvents.length > 0);
  }
  async *getRemainingResults() {
    if (this.discarded) return;
    while (this.hasUnfinishedTools()) {
      await this.processQueue();
      let e = false;
      for (let t of this.getCompletedResults()) ((e = true), yield t);
      if (this.hasExecutingTools() && !e && !this.hasPendingProgress()) {
        let t = this.tools
            .filter((r) => r.status === "executing" && r.promise)
            .map((r) => r.promise),
          n = new Promise((r) => {
            this.progressAvailableResolve = r;
          });
        if (t.length > 0) await Promise.race([...t, n]);
      }
    }
    for (let e of this.getCompletedResults()) yield e;
  }
  hasExecutingTools() {
    return this.tools.some((e) => e.status === "executing");
  }
  hasUnfinishedTools() {
    return this.tools.some((e) => e.status !== "yielded");
  }
  getUpdatedContext() {
    return this.toolUseContext;
  }
}
