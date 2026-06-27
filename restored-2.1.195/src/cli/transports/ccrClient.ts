// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _gc
// matched 2.1.88 source: src/cli/transports/ccrClient.ts
// class=modified  jaccard=0.3065  score=0.4609  fileCov=0.4777
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _gc] deps: Jt
s7e = class s7e extends Error {
  retryAfterMs;
  constructor(e, t) {
    super(e);
    this.retryAfterMs = t;
  }
};
class R8o {
  inflight = null;
  pending = null;
  closed = false;
  config;
  constructor(e) {
    this.config = e;
  }
  enqueue(e) {
    if (this.closed) return;
    ((this.pending = this.pending ? bgc(this.pending, e) : e), this.drain());
  }
  close() {
    ((this.closed = true), (this.pending = null));
  }
  async flush() {
    while (!this.closed)
      if (this.inflight) await this.inflight;
      else if (this.pending) await this.drain();
      else return;
  }
  async drain() {
    if (this.inflight || this.closed) return;
    if (!this.pending) return;
    let e = this.pending;
    ((this.pending = null),
      (this.inflight = this.sendWithRetry(e).then(() => {
        if (((this.inflight = null), this.pending && !this.closed)) this.drain();
      })));
  }
  async sendWithRetry(e) {
    let t = e,
      n = 0;
    while (!this.closed) {
      if (await this.config.send(t)) return;
      if ((n++, await Nn(this.retryDelay(n)), this.pending && !this.closed))
        ((t = bgc(t, this.pending)), (this.pending = null));
    }
  }
  retryDelay(e) {
    let t = Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs),
      n = Math.random() * this.config.jitterMs;
    return t + n;
  }
}
function bgc(e, t) {
  let n = {
    ...e,
  };
  for (let [r, o] of Object.entries(t))
    if (
      (r === "external_metadata" || r === "internal_metadata") &&
      n[r] &&
      typeof n[r] === "object" &&
      typeof o === "object" &&
      o !== null
    )
      n[r] = {
        ...n[r],
        ...o,
      };
    else n[r] = o;
  return n;
}
var Sgc = () => {};
function yNe(e) {
  return e === 400 || e === 413 || e === 422;
}
function Agc(e) {
  let t = on(e);
  if (t) return t;
  if (e && typeof e === "object" && "name" in e && typeof e.name === "string") return e.name;
  return;
}
function Hgc(e) {
  return e instanceof _Ne && e.reason === "worker_register_failed" && !yNe(e.httpStatus);
}
class den {
  workerEpoch = 0;
  heartbeatIntervalMs;
  heartbeatJitterFraction;
  heartbeatTimer = null;
  heartbeatInFlight = false;
  closed = false;
  consecutiveAuthFailures = 0;
  consecutiveNotFound = 0;
  currentState = null;
  sessionBaseUrl;
  sessionId;
  streamEventBuffer = [];
  streamEventTimer = null;
  streamedEphemeralSinceLastAssistant = false;
  workerState;
  eventUploader;
  internalEventUploader;
  onInternalBatchAcked;
  deliveryUploader;
  pendingProcessingAcks = [];
  onEpochMismatch;
  getAuthHeaders;
  onDiagnostic;
  constructor(e, t, n) {
    if (
      ((this.onEpochMismatch =
        n?.onEpochMismatch ??
        (() => {
          process.exit(1);
        })),
      (this.heartbeatIntervalMs = n?.heartbeatIntervalMs ?? sum),
      (this.heartbeatJitterFraction = n?.heartbeatJitterFraction ?? 0),
      (this.getAuthHeaders = n?.getAuthHeaders ?? cke),
      (this.onDiagnostic = n?.onDiagnostic),
      t.protocol !== "http:" && t.protocol !== "https:")
    )
      throw Error(`CCRClient: Expected http(s) URL, got ${t.protocol}`);
    let r = t.pathname.replace(/\/$/, "");
    ((this.sessionBaseUrl = `${t.protocol}//${t.host}${r}`),
      (this.sessionId = r.split("/").pop() || ""),
      (this.workerState = new R8o({
        send: async (o) => {
          let s = await this.request(
            "put",
            "/worker",
            {
              worker_epoch: this.workerEpoch,
              ...o,
            },
            "PUT worker",
          );
          if (s.ok) return true;
          if (yNe(s.status))
            return (
              In("warn", "cli_worker_state_4xx_dropped", {
                status: s.status,
              }),
              true
            );
          return false;
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
      })),
      (this.eventUploader = new uen({
        maxBatchSize: 100,
        maxBatchBytes: 10485760,
        maxQueueSize: 100000 /* 1e5 */,
        send: async (o) => {
          let s = await this.request(
            "post",
            "/worker/events",
            {
              worker_epoch: this.workerEpoch,
              events: o,
            },
            "client events",
          );
          if (s.ok) return;
          if (yNe(s.status)) {
            let i = o.filter((l) => !l.ephemeral),
              a = o.length - i.length;
            if (a > 0) {
              if (
                (T(
                  `CCRClient: client event POST rejected (${s.status}) \u2014 dropping ${a} ephemeral event(s), retrying ${i.length} durable event(s)`,
                  {
                    level: "warn",
                  },
                ),
                It("ccr_partial_messages", "ephemeral_dropped_on_4xx"),
                o.splice(0, o.length, ...i),
                i.length === 0)
              )
                return;
              let l = await this.request(
                "post",
                "/worker/events",
                {
                  worker_epoch: this.workerEpoch,
                  events: i,
                },
                "client events (durable retry)",
              );
              if (l.ok) return;
              if (!yNe(l.status)) throw new s7e("client event POST failed", l.retryAfterMs);
            }
            if (i.length > 0) this.droppedDurableEventBatches++;
            In("warn", "cli_worker_events_4xx_dropped", {
              status: s.status,
              count: i.length,
            });
            return;
          }
          throw new s7e("client event POST failed", s.retryAfterMs);
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
      })),
      (this.internalEventUploader = new uen({
        maxBatchSize: 100,
        maxBatchBytes: 10485760,
        maxQueueSize: 200,
        send: async (o) => {
          let s = await this.request(
            "post",
            "/worker/internal-events",
            {
              worker_epoch: this.workerEpoch,
              events: o,
            },
            "internal events",
          );
          if (s.ok) {
            Promise.resolve()
              .then(() => this.onInternalBatchAcked?.(o))
              .catch(() => {});
            return;
          }
          if (yNe(s.status)) {
            In("warn", "cli_worker_internal_events_4xx_dropped", {
              status: s.status,
              count: o.length,
            });
            return;
          }
          throw new s7e("internal event POST failed", s.retryAfterMs);
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
      })),
      (this.deliveryUploader = new uen({
        maxBatchSize: 64,
        maxQueueSize: 64,
        send: async (o) => {
          let s = await this.request(
            "post",
            "/worker/events/delivery",
            {
              worker_epoch: this.workerEpoch,
              updates: o.map((i) => ({
                event_id: i.eventId,
                status: i.status,
              })),
            },
            "delivery batch",
          );
          if (s.ok) return;
          if (yNe(s.status)) {
            In("warn", "cli_worker_delivery_4xx_dropped", {
              status: s.status,
              count: o.length,
            });
            return;
          }
          throw new s7e("delivery POST failed", s.retryAfterMs);
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
      })),
      e.setOnEvent((o) => {
        this.reportDelivery(o.event_id, "received");
      }));
  }
  async initialize(e) {
    let t = Date.now();
    if (Object.keys(this.getAuthHeaders()).length === 0) throw new _Ne("no_auth_headers");
    if (e === void 0) {
      let c = process.env.CLAUDE_CODE_WORKER_EPOCH;
      e = c ? parseInt(c, 10) : NaN;
    }
    if (isNaN(e)) throw new _Ne("missing_epoch");
    this.workerEpoch = e;
    let n = this.getWorkerState();
    await Promise.race([n.catch(() => null), Nn(cum)]);
    let r = {
        ok: false,
      },
      o = new Set(),
      s = 10,
      i = 0;
    for (let c = 1; c <= s; c++) {
      if (
        ((i = c),
        (r = await this.request(
          "put",
          "/worker",
          {
            worker_status: "idle",
            worker_epoch: this.workerEpoch,
            external_metadata: {
              pending_action: null,
              task_summary: null,
            },
          },
          "PUT worker (init)",
        )),
        r.ok || this.closed)
      )
        break;
      if (r.reason) o.add(r.reason);
      if (
        (this.onDiagnostic?.(
          `PUT /worker failed (${r.reason ?? "unknown"}) attempt=${c}/${s}, ${Math.round((Date.now() - t) / 1000)}s elapsed`,
        ),
        yNe(r.status))
      )
        break;
      if (c < s) {
        let u = Math.min(500 * 2 ** (c - 1), 30000) + Math.random() * 500;
        await Nn(u);
      }
    }
    if (!r.ok) {
      if (!this.closed)
        (In("error", "cli_worker_init_put_retries_exhausted"),
          this.onDiagnostic?.(
            `PUT /worker retries exhausted: ${i} attempts over ${Math.round((Date.now() - t) / 1000)}s, errors=[${[...o].join(",") || "unknown"}]`,
          ));
      throw new _Ne("worker_register_failed", r.status);
    }
    ((this.currentState = "idle"),
      this.startHeartbeat(),
      tHl(() => {
        this.writeEvent({
          type: "keep_alive",
        });
      }),
      T(`CCRClient: initialized, epoch=${this.workerEpoch}`),
      In("info", "cli_worker_lifecycle_initialized", {
        epoch: this.workerEpoch,
        duration_ms: Date.now() - t,
      }));
    let { metadata: a, durationMs: l } = await n;
    if (!this.closed)
      In("info", "cli_worker_state_restored", {
        duration_ms: l,
        had_state: a.external !== null || a.internal !== null,
      });
    return a;
  }
  async getWorkerState() {
    let e = Date.now(),
      t = this.getAuthHeaders();
    if (Object.keys(t).length === 0)
      return {
        metadata: {
          external: null,
          internal: null,
        },
        durationMs: 0,
      };
    let n = await this.getWithRetry(`${this.sessionBaseUrl}/worker`, t, "worker_state");
    return {
      metadata: {
        external: n?.worker?.external_metadata ?? null,
        internal: n?.worker?.internal_metadata ?? null,
      },
      durationMs: Date.now() - e,
    };
  }
  async request(e, t, n, r, { timeout: o = 10000 /* 1e4 */ } = {}) {
    let s = this.getAuthHeaders();
    if (Object.keys(s).length === 0)
      return {
        ok: false,
        reason: "no_auth_headers",
      };
    let i = `${this.sessionBaseUrl}${t}`;
    try {
      let a = await fetch(i, {
        method: e.toUpperCase(),
        headers: {
          ...s,
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": _x(),
          "User-Agent": dy(),
        },
        body: De(n),
        signal: AbortSignal.timeout(o),
        ...kg({
          url: i,
        }),
      });
      if ((a.body?.cancel(), a.ok))
        return (
          (this.consecutiveAuthFailures = 0),
          (this.consecutiveNotFound = 0),
          {
            ok: true,
          }
        );
      if (a.status === 409) this.handleEpochMismatch();
      if (a.status === 404) {
        if ((this.consecutiveNotFound++, this.consecutiveNotFound >= lum))
          (T(
            `CCRClient: ${this.consecutiveNotFound} consecutive 404s \u2014 session gone, exiting`,
            {
              level: "error",
            },
          ),
            In("error", "cli_worker_session_not_found"),
            this.onDiagnostic?.(
              `${this.consecutiveNotFound} consecutive 404s on ${t} \u2014 session gone, exiting`,
            ),
            this.onEpochMismatch());
      }
      if (a.status === 401 || a.status === 403) {
        let l = XS(),
          c = l ? tPt(l) : null;
        if (c !== null && c * 1000 < Date.now())
          (T(
            `CCRClient: session_token expired (exp=${new Date(c * 1000).toISOString()}) \u2014 no refresh was delivered, exiting`,
            {
              level: "error",
            },
          ),
            In("error", "cli_worker_token_expired_no_refresh"),
            this.onDiagnostic?.(
              `session_token expired (exp=${new Date(c * 1000).toISOString()}) \u2014 no refresh delivered, exiting`,
            ),
            this.onEpochMismatch());
        if ((this.consecutiveAuthFailures++, this.consecutiveAuthFailures >= aum))
          (T(
            `CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`,
            {
              level: "error",
            },
          ),
            In("error", "cli_worker_auth_failures_exhausted"),
            this.onDiagnostic?.(
              `${this.consecutiveAuthFailures} consecutive auth failures (HTTP ${a.status}) with valid-looking token \u2014 exiting`,
            ),
            this.onEpochMismatch());
      }
      if (
        (T(`CCRClient: ${r} returned ${a.status}`, {
          level: "warn",
        }),
        In("warn", "cli_worker_request_failed", {
          method: e,
          path: t,
          status: a.status,
        }),
        a.status === 429)
      ) {
        let l = a.headers.get("retry-after"),
          c = l ? parseInt(l, 10) : NaN;
        if (!isNaN(c) && c >= 0)
          return {
            ok: false,
            retryAfterMs: c * 1000,
            status: a.status,
            reason: `http_${a.status}`,
          };
      }
      return {
        ok: false,
        status: a.status,
        reason: `http_${a.status}`,
      };
    } catch (a) {
      return (
        T(`CCRClient: ${r} failed: ${be(a)}`, {
          level: "warn",
        }),
        In("warn", "cli_worker_request_error", {
          method: e,
          path: t,
          error_code: Agc(a),
        }),
        {
          ok: false,
          reason: `fetch_failed:${Agc(a)}`,
        }
      );
    }
  }
  reportState(e, t) {
    if (e === this.currentState && !t) return;
    ((this.currentState = e),
      this.workerState.enqueue({
        worker_status: e,
        requires_action_details: t
          ? {
              tool_name: t.tool_name,
              display_tool_name: t.display_tool_name,
              action_description: t.action_description,
              raw_command: t.raw_command,
              request_id: t.request_id,
              tool_use_id: t.tool_use_id,
            }
          : null,
      }));
  }
  reportMetadata(e) {
    this.workerState.enqueue({
      external_metadata: uum(e),
    });
  }
  reportInternalMetadata(e) {
    this.workerState.enqueue({
      internal_metadata: e,
    });
  }
  handleEpochMismatch() {
    (T("CCRClient: Epoch mismatch (409), shutting down", {
      level: "error",
    }),
      In("error", "cli_worker_epoch_mismatch"),
      this.onDiagnostic?.(
        `worker epoch mismatch (409), epoch=${this.workerEpoch} \u2014 superseded by a newer worker, exiting`,
      ),
      this.onEpochMismatch());
  }
  startHeartbeat() {
    this.stopHeartbeat();
    let e = () => {
        let n = this.heartbeatIntervalMs * this.heartbeatJitterFraction * (2 * Math.random() - 1);
        this.heartbeatTimer = setTimeout(t, this.heartbeatIntervalMs + n);
      },
      t = () => {
        if ((this.sendHeartbeat(), this.heartbeatTimer === null)) return;
        e();
      };
    e();
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) (clearTimeout(this.heartbeatTimer), (this.heartbeatTimer = null));
  }
  async sendHeartbeat() {
    if (this.heartbeatInFlight) return;
    this.heartbeatInFlight = true;
    try {
      if (
        (
          await this.request(
            "post",
            "/worker/heartbeat",
            {
              session_id: this.sessionId,
              worker_epoch: this.workerEpoch,
            },
            "Heartbeat",
            {
              timeout: 5000,
            },
          )
        ).ok
      )
        T("CCRClient: Heartbeat sent");
    } finally {
      this.heartbeatInFlight = false;
    }
  }
  async writeEvent(e) {
    if (e.type === "stream_event") {
      if (
        (this.streamEventBuffer.push(e),
        (this.streamedEphemeralSinceLastAssistant = true),
        !this.streamEventTimer)
      )
        this.streamEventTimer = setTimeout(() => void this.flushStreamEventBuffer(), ium);
      return;
    }
    if (
      (await this.flushStreamEventBuffer(),
      e.type === "assistant" && this.streamedEphemeralSinceLastAssistant)
    )
      (xe("ccr_partial_messages"), (this.streamedEphemeralSinceLastAssistant = false));
    await this.eventUploader.enqueue(this.toClientEvent(e));
  }
  toClientEvent(e) {
    let t = e,
      n = t.historical === true,
      r = e.type === "system" && t.subtype === "thinking_tokens";
    return {
      payload: {
        ...t,
        uuid: typeof t.uuid === "string" ? t.uuid : D8o.randomUUID(),
      },
      ...(n && {
        historical: true,
      }),
      ...(r && {
        ephemeral: true,
      }),
    };
  }
  async flushStreamEventBuffer() {
    if (this.streamEventTimer)
      (clearTimeout(this.streamEventTimer), (this.streamEventTimer = null));
    if (this.streamEventBuffer.length === 0) return;
    let e = this.streamEventBuffer;
    this.streamEventBuffer = [];
    let t = e.filter((n) => {
      if (Buffer.byteLength(De(n)) <= Egc) return true;
      return (
        T(`CCRClient: dropping oversize ephemeral stream_event (>${Egc} bytes)`, {
          level: "warn",
        }),
        It("ccr_partial_messages", "oversize_ephemeral_skipped"),
        false
      );
    });
    await this.eventUploader.enqueue(
      t.map((n) => ({
        payload: n,
        ephemeral: true,
      })),
    );
  }
  async writeInternalEvent(
    e,
    t,
    { isCompaction: n = false, agentId: r, preservedEventIds: o } = {},
  ) {
    let s = o;
    if (s && s.length > L8o)
      (G("tengu_ccr_preserved_event_ids_clamped", {
        originalCount: s.length,
        cap: L8o,
      }),
        (s = s.slice(-L8o)));
    let i = {
      payload: {
        type: e,
        ...t,
        uuid: typeof t.uuid === "string" ? t.uuid : D8o.randomUUID(),
      },
      ...(n && {
        is_compaction: true,
      }),
      ...(r && {
        session_agent_id: r,
      }),
      ...(s?.length && {
        preserved_event_ids: s,
      }),
    };
    await this.internalEventUploader.enqueue(i);
  }
  flushInternalEvents() {
    return this.internalEventUploader.flush();
  }
  flushDeliveryAcks() {
    return this.deliveryUploader.flush();
  }
  async flush() {
    return (await this.flushStreamEventBuffer(), this.eventUploader.flush());
  }
  droppedDurableEventBatches = 0;
  get droppedDurableBatches() {
    return this.droppedDurableEventBatches;
  }
  async flushWorkerState() {
    return this.workerState.flush();
  }
  async readInternalEvents(e) {
    return this.paginatedGet(
      "/worker/internal-events",
      {
        limit: "1000",
        ...(e && {
          after_event_id: e,
        }),
      },
      "internal_events",
    );
  }
  async readSubagentInternalEvents() {
    return this.paginatedGet(
      "/worker/internal-events",
      {
        subagents: "true",
        limit: "1000",
      },
      "subagent_events",
    );
  }
  async paginatedGet(e, t, n) {
    let r = this.getAuthHeaders();
    if (Object.keys(r).length === 0) return null;
    let o = [],
      s,
      i = 0,
      a = 0,
      l = null;
    do {
      let c = new URL(`${this.sessionBaseUrl}${e}`);
      for (let [f, m] of Object.entries(t)) c.searchParams.set(f, m);
      if (s) (c.searchParams.set("cursor", s), c.searchParams.delete("after_event_id"));
      let u = !s && t.after_event_id !== void 0,
        d,
        p = await this.getWithRetry(
          c.toString(),
          r,
          n,
          (f) => {
            (i++, (l ??= f.headers.get("content-encoding")));
            let m = f.headers.get("content-length");
            if (m !== null && a !== null) a += Number(m);
            else a = null;
          },
          (f, m) => {
            if (!u) return;
            if (f === 400) d = "rejected";
            else if (m === "after_event_id_not_found") d = "not-found";
          },
        );
      if (!p) {
        if (d) {
          (T(
            `CCRClient: after_event_id ${d === "rejected" ? "rejected by server (gate off)" : "not found (stale anchor)"} \u2014 refetching without anchor`,
            {
              level: "warn",
            },
          ),
            In(
              "warn",
              d === "rejected"
                ? "cli_worker_after_event_id_rejected"
                : "cli_worker_after_event_id_not_found",
              {
                context: n,
              },
            ));
          let { after_event_id: f, ...m } = t,
            g = await this.paginatedGet(e, m, n);
          if (!g) return null;
          return {
            ...g,
            anchorFallback: d,
          };
        }
        return null;
      }
      (o.push(...(p.data ?? [])), (s = p.next_cursor));
    } while (s);
    return (
      T(
        `CCRClient: Read ${o.length} internal events from ${e}${t.subagents ? " (subagents)" : ""}`,
      ),
      {
        events: o,
        stats: {
          pageCount: i,
          bytesReceived: a,
          contentEncoding: l ?? "none",
        },
      }
    );
  }
  async getWithRetry(e, t, n, r, o) {
    for (let s = 1; s <= 10; s++) {
      let i;
      try {
        if (
          ((i = await fetch(e, {
            headers: {
              ...t,
              "anthropic-version": "2023-06-01",
              "anthropic-client-platform": _x(),
              "User-Agent": dy(),
            },
            signal: AbortSignal.timeout(30000),
            ...kg({
              url: e,
            }),
          })),
          i.ok)
        ) {
          let l = await i.json();
          return (r?.(i), l);
        }
      } catch (l) {
        if (
          (T(`CCRClient: GET ${e} failed (attempt ${s}/10): ${be(l)}`, {
            level: "warn",
          }),
          s < 10)
        ) {
          let c = Math.min(500 * 2 ** (s - 1), 30000) + Math.random() * 500;
          await Nn(c);
        }
        continue;
      }
      let a;
      if (i.status === 404 && o)
        try {
          let l = await i.json();
          if (typeof l?.error?.type === "string") a = l.error.type;
        } catch {}
      else i.body?.cancel();
      if (i.status === 409) this.handleEpochMismatch();
      if (yNe(i.status) || a === "after_event_id_not_found")
        return (
          T(`CCRClient: GET ${e} returned ${i.status} \u2014 permanent, not retrying`, {
            level: "warn",
          }),
          o?.(i.status, a),
          null
        );
      if (
        (T(`CCRClient: GET ${e} returned ${i.status} (attempt ${s}/10)`, {
          level: "warn",
        }),
        s < 10)
      ) {
        let l = Math.min(500 * 2 ** (s - 1), 30000) + Math.random() * 500;
        await Nn(l);
      }
    }
    return (
      T("CCRClient: GET retries exhausted", {
        level: "error",
      }),
      In("error", "cli_worker_get_retries_exhausted", {
        context: n,
      }),
      null
    );
  }
  reportDelivery(e, t) {
    if (t === "processing") {
      if (this.closed) return;
      if (this.pendingProcessingAcks.push(e) === 1)
        queueMicrotask(() => {
          let n = this.pendingProcessingAcks;
          if (((this.pendingProcessingAcks = []), this.closed || n.length === 0)) return;
          this.request(
            "post",
            "/worker/events/delivery",
            {
              worker_epoch: this.workerEpoch,
              updates: n.map((r) => ({
                event_id: r,
                status: "processing",
              })),
            },
            "processing ack",
          );
        });
      return;
    }
    this.deliveryUploader.enqueue({
      eventId: e,
      status: t,
    });
  }
  getWorkerEpoch() {
    return this.workerEpoch;
  }
  get internalEventsPending() {
    return this.internalEventUploader.pendingCount;
  }
  close() {
    if (((this.closed = true), this.stopHeartbeat(), nHl(), this.streamEventTimer))
      (clearTimeout(this.streamEventTimer), (this.streamEventTimer = null));
    ((this.streamEventBuffer = []),
      (this.pendingProcessingAcks = []),
      this.workerState.close(),
      this.eventUploader.close(),
      this.internalEventUploader.close(),
      this.deliveryUploader.close());
  }
}
function uum(e) {
  let t = e.post_turn_summary;
  if (!dum(t) || t.status_category !== "blocked") return e;
  return {
    ...e,
    post_turn_summary: {
      ...t,
      status_category: "need_input",
    },
  };
}
function dum(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "status_category" in e &&
    typeof e.status_category === "string"
  );
}
var D8o,
  sum = 20000,
  ium = 100,
  Egc = 61440,
  L8o = 1536,
  _Ne,
  aum = 10,
  lum = 3,
  cum = 10000; /* 1e4 */
