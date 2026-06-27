// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M8o
// matched 2.1.88 source: src/cli/transports/SSETransport.ts
// class=modified  jaccard=0.4873  score=0.5589  fileCov=0.7918
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module M8o] deps: Hp, je, Mm, At, kM, Jt, X4
((mum = new Set([401, 403, 404])),
  (yum = {
    stream: true,
  }));
fen = class fen {
  url;
  state = "idle";
  onData;
  onCloseCallback;
  onEventCallback;
  eventFilter;
  onDiagnostic;
  headers;
  sessionId;
  refreshHeaders;
  getAuthHeaders;
  abortController = null;
  lastSequenceNum = 0;
  seenSequenceNums = new Set();
  reconnectAttempts = 0;
  reconnectStartTime = null;
  reconnectTimer = null;
  connectErrorsSeen = new Set();
  livenessTimer = null;
  postUrl;
  constructor(e, t = {}, n, r, o, s) {
    this.url = e;
    if (
      ((this.headers = t),
      (this.sessionId = n),
      (this.refreshHeaders = r),
      (this.getAuthHeaders = s ?? cke),
      (this.postUrl = bum(e)),
      o !== void 0 && o > 0)
    )
      this.lastSequenceNum = o;
    (T(`SSETransport: SSE URL = ${e.href}`),
      T(`SSETransport: POST URL = ${this.postUrl}`),
      In("info", "cli_sse_transport_initialized"));
  }
  getLastSequenceNum() {
    return this.lastSequenceNum;
  }
  async connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") {
      (T(`SSETransport: Cannot connect, current state is ${this.state}`, {
        level: "error",
      }),
        In("error", "cli_sse_connect_failed"));
      return;
    }
    this.state = "reconnecting";
    let e = Date.now(),
      t = new URL(this.url.href);
    if (this.lastSequenceNum > 0)
      t.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    let n = this.getAuthHeaders(),
      r = {
        ...this.headers,
        ...n,
        Accept: "text/event-stream",
        "anthropic-version": "2023-06-01",
        "anthropic-client-platform": _x(),
        "User-Agent": dy(),
      };
    if (n.Cookie) delete r.Authorization;
    if (this.lastSequenceNum > 0) r["Last-Event-ID"] = String(this.lastSequenceNum);
    (T(`SSETransport: Opening ${t.href}`),
      In("info", "cli_sse_connect_opening"),
      (this.abortController = new AbortController()));
    try {
      let o = await fetch(t.href, {
        headers: r,
        signal: this.abortController.signal,
      });
      if (!o.ok) {
        let i = mum.has(o.status);
        if (
          (T(`SSETransport: HTTP ${o.status}${i ? " (permanent)" : ""}`, {
            level: "error",
          }),
          In("error", "cli_sse_connect_http_error", {
            status: o.status,
          }),
          this.connectErrorsSeen.add(`http_${o.status}`),
          this.diagConnectFailure(`HTTP ${o.status}${i ? " (permanent)" : ""}`, e),
          i)
        ) {
          ((this.state = "closed"), this.onCloseCallback?.(o.status));
          return;
        }
        this.handleConnectionError();
        return;
      }
      if (!o.body) {
        (T("SSETransport: No response body"),
          this.connectErrorsSeen.add("no_response_body"),
          this.diagConnectFailure("no response body", e),
          this.handleConnectionError());
        return;
      }
      let s = Date.now() - e;
      if (
        (T("SSETransport: Connected"),
        In("info", "cli_sse_connect_connected", {
          duration_ms: s,
        }),
        this.reconnectAttempts === 0)
      )
        Zc("sse_connect_ms", s, e - performance.timeOrigin);
      if (this.reconnectAttempts > 0) {
        let i = this.reconnectStartTime
          ? Math.round((Date.now() - this.reconnectStartTime) / 1000)
          : 0;
        this.onDiagnostic?.(
          `SSE reconnected after ${this.reconnectAttempts} attempt(s), ${i}s downtime` +
            (this.connectErrorsSeen.size > 0
              ? `, errors=[${[...this.connectErrorsSeen].join(",")}]`
              : ""),
        );
      } else this.onDiagnostic?.(`SSE connected in ${s}ms`);
      (this.connectErrorsSeen.clear(),
        (this.state = "connected"),
        (this.reconnectAttempts = 0),
        (this.reconnectStartTime = null),
        this.resetLivenessTimer(),
        await this.readStream(o.body));
    } catch (o) {
      if (this.abortController?.signal.aborted) return;
      (T(`SSETransport: Connection error: ${be(o)}`, {
        level: "error",
      }),
        In("error", "cli_sse_connect_error"),
        this.connectErrorsSeen.add("fetch_failed"),
        this.diagConnectFailure(be(o), e),
        this.handleConnectionError());
    }
  }
  diagConnectFailure(e, t) {
    if (!this.onDiagnostic) return;
    let n = this.reconnectAttempts + 1;
    if (n > 3 && n % 10 !== 0) return;
    let r = Date.now() - t,
      o = this.reconnectStartTime
        ? `, ${Math.round((Date.now() - this.reconnectStartTime) / 1000)}s reconnecting`
        : "",
      s =
        this.connectErrorsSeen.size > 1
          ? `, errors=[${[...this.connectErrorsSeen].join(",")}]`
          : "";
    this.onDiagnostic(`SSE connect failed (${e}) attempt=${n} took=${r}ms${o}${s}`);
  }
  async readStream(e) {
    let t = e.getReader(),
      n = new TextDecoder(),
      r = [],
      o = false;
    try {
      while (true) {
        let { done: s, value: i } = await t.read();
        if (s) break;
        let a = n.decode(i, yum);
        if (!a) continue;
        let l =
          (o &&
            a[0] ===
              `
`) ||
          a.includes(`

`);
        if ((r.push(a), !l)) {
          o = a.endsWith(`
`);
          continue;
        }
        let { frames: c, remaining: u } = MJt(r.join(""));
        ((r = u ? [u] : []),
          (o = u.endsWith(`
`)));
        for (let d of c) {
          if ((this.resetLivenessTimer(), d.id)) {
            let p = parseInt(d.id, 10);
            if (!isNaN(p)) {
              if (this.seenSequenceNums.has(p))
                (T(
                  `SSETransport: DUPLICATE frame seq=${p} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`,
                  {
                    level: "warn",
                  },
                ),
                  In("warn", "cli_sse_duplicate_sequence"));
              else if ((this.seenSequenceNums.add(p), this.seenSequenceNums.size > 1000)) {
                let f = this.lastSequenceNum - 200;
                for (let m of this.seenSequenceNums) if (m < f) this.seenSequenceNums.delete(m);
              }
              if (p > this.lastSequenceNum) this.lastSequenceNum = p;
            }
          }
          if (d.event && d.data) this.handleSSEFrame(d.event, d.data);
          else if (d.data)
            (T("SSETransport: Frame has data: but no event: field \u2014 dropped", {
              level: "warn",
            }),
              In("warn", "cli_sse_frame_missing_event_field"));
        }
      }
    } catch (s) {
      if (this.abortController?.signal.aborted) return;
      (T(`SSETransport: Stream read error: ${be(s)}`, {
        level: "error",
      }),
        In("error", "cli_sse_stream_read_error"));
    } finally {
      t.releaseLock();
    }
    if (this.state !== "closing" && this.state !== "closed") {
      if ((T("SSETransport: Stream ended, reconnecting"), this.state === "connected"))
        (this.connectErrorsSeen.add("stream_ended"),
          this.onDiagnostic?.("SSE stream ended by server, reconnecting"));
      this.handleConnectionError();
    }
  }
  handleSSEFrame(e, t) {
    if (e !== "client_event") {
      (T(`SSETransport: Unexpected SSE event type '${e}' on worker stream`, {
        level: "warn",
      }),
        In("warn", "cli_sse_unexpected_event_type", {
          event_type: e,
        }));
      return;
    }
    let n;
    try {
      n = Ft(t);
    } catch (o) {
      T(`SSETransport: Failed to parse client_event data: ${be(o)}`, {
        level: "error",
      });
      return;
    }
    let r = n.payload;
    if (r && typeof r === "object" && "type" in r) {
      let o = this.sessionId ? ` session=${this.sessionId}` : "",
        s = n.device_attestation_status ? ` attestation=${n.device_attestation_status}` : "";
      if (
        (T(
          `SSETransport: Event seq=${n.sequence_num} event_id=${n.event_id} event_type=${n.event_type} payload_type=${String(r.type)}${s}${o}`,
        ),
        In("info", "cli_sse_message_received"),
        this.eventFilter?.(n))
      )
        In("warn", "cli_sse_event_filtered");
      else
        this.onData?.(
          De(r) +
            `
`,
        );
    } else T(`SSETransport: Ignoring client_event with no type in payload: event_id=${n.event_id}`);
    this.onEventCallback?.(n);
  }
  handleConnectionError() {
    if ((this.clearLivenessTimer(), this.state === "closing" || this.state === "closed")) return;
    (this.abortController?.abort(), (this.abortController = null));
    let e = Date.now();
    if (!this.reconnectStartTime) this.reconnectStartTime = e;
    let t = e - this.reconnectStartTime;
    if (this.reconnectTimer) (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    if (this.refreshHeaders) {
      let o = this.refreshHeaders();
      (Object.assign(this.headers, o), T("SSETransport: Refreshed headers for reconnect"));
    }
    ((this.state = "reconnecting"), this.reconnectAttempts++);
    let n = Math.min(pum * Math.pow(2, this.reconnectAttempts - 1), fum),
      r = Math.max(0, n + n * 0.25 * (2 * Math.random() - 1));
    (T(
      `SSETransport: Reconnecting in ${Math.round(r)}ms (attempt ${this.reconnectAttempts}, ${Math.round(t / 1000)}s elapsed)`,
    ),
      In("error", "cli_sse_reconnect_attempt", {
        reconnectAttempts: this.reconnectAttempts,
      }),
      (this.reconnectTimer = setTimeout(() => {
        ((this.reconnectTimer = null), this.connect());
      }, r)));
  }
  onLivenessTimeout = () => {
    ((this.livenessTimer = null),
      T("SSETransport: Liveness timeout, reconnecting", {
        level: "error",
      }),
      In("error", "cli_sse_liveness_timeout"),
      this.connectErrorsSeen.add("liveness_timeout"),
      this.onDiagnostic?.(`SSE liveness timeout \u2014 no frame in ${Tgc / 1000}s, reconnecting`),
      this.abortController?.abort(),
      this.handleConnectionError());
  };
  resetLivenessTimer() {
    (this.clearLivenessTimer(), (this.livenessTimer = setTimeout(this.onLivenessTimeout, Tgc)));
  }
  clearLivenessTimer() {
    if (this.livenessTimer) (clearTimeout(this.livenessTimer), (this.livenessTimer = null));
  }
  async write(e) {
    let t = this.getAuthHeaders();
    if (Object.keys(t).length === 0) {
      (T("SSETransport: No session token available for POST"), In("warn", "cli_sse_post_no_token"));
      return;
    }
    let n = {
      ...t,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": _x(),
      "User-Agent": dy(),
    };
    T(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
    for (let r = 1; r <= pen; r++) {
      try {
        let s = await po.post(this.postUrl, e, {
          headers: n,
          validateStatus: _um,
        });
        if (s.status === 200 || s.status === 201) {
          T(`SSETransport: POST success type=${e.type}`);
          return;
        }
        if (
          (T(`SSETransport: POST ${s.status} body=${De(s.data).slice(0, 200)}`),
          s.status >= 400 && s.status < 500 && s.status !== 429)
        ) {
          (T(`SSETransport: POST returned ${s.status} (client error), not retrying`),
            In("warn", "cli_sse_post_client_error", {
              status: s.status,
            }));
          return;
        }
        (T(`SSETransport: POST returned ${s.status}, attempt ${r}/${pen}`),
          In("warn", "cli_sse_post_retryable_error", {
            status: s.status,
            attempt: r,
          }));
      } catch (s) {
        (T(`SSETransport: POST error: ${be(s)}, attempt ${r}/${pen}`),
          In("warn", "cli_sse_post_network_error", {
            attempt: r,
          }));
      }
      if (r === pen) {
        (T(`SSETransport: POST failed after ${pen} attempts, continuing`),
          In("warn", "cli_sse_post_retries_exhausted"));
        return;
      }
      let o = Math.min(gum * Math.pow(2, r - 1), hum);
      await Nn(o);
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  isClosedStatus() {
    return this.state === "closed";
  }
  setOnData(e) {
    this.onData = e;
  }
  setOnClose(e) {
    this.onCloseCallback = e;
  }
  setOnEvent(e) {
    this.onEventCallback = e;
  }
  setOnDiagnostic(e) {
    this.onDiagnostic = e;
  }
  setEventFilter(e) {
    this.eventFilter = e;
  }
  close() {
    if (this.reconnectTimer) (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.clearLivenessTimer(),
      (this.state = "closing"),
      this.abortController?.abort(),
      (this.abortController = null));
  }
  [Symbol.dispose]() {
    this.close();
  }
};
function vgc(e) {
  switch (e) {
    case void 0:
      return "no close code received";
    case 4090:
      return "this connection is no longer the active worker for the session (code 4090)";
    case 4091:
      return "transport init failed (code 4091)";
    case 4092:
      return "connection dropped \u2014 no close reason from server (code 4092)";
    case 401:
      return "auth token expired (code 401)";
    case 403:
      return "server rejected connection (code 403)";
    case 404:
      return "session not found on server (code 404)";
    case 1002:
      return "server rejected the connection handshake (code 1002)";
    case 4001:
      return "session expired or not found on server (code 4001)";
    case 4003:
      return "server rejected credentials (code 4003)";
    default:
      return `code ${e}`;
  }
}
async function $8o(e) {
  let { sessionUrl: t, ingressToken: n, sessionId: r, initialSequenceNum: o, getAuthToken: s } = e,
    i;
  if (s)
    i = () => {
      let g = s();
      if (!g) return {};
      return {
        Authorization: `Bearer ${g}`,
      };
    };
  else rOi(n);
  let a = e.epoch ?? (await Wir(t, n));
  T(
    `[bridge:repl] CCR v2: worker sessionId=${r} epoch=${a}${e.epoch !== void 0 ? " (from /bridge)" : " (via registerWorker)"}`,
  );
  let l = new URL(t);
  l.pathname = l.pathname.replace(/\/$/, "") + "/worker/events/stream";
  let c = new fen(l, {}, r, void 0, o, i),
    u,
    d = new den(c, new URL(t), {
      getAuthHeaders: i,
      heartbeatIntervalMs: e.heartbeatIntervalMs,
      heartbeatJitterFraction: e.heartbeatJitterFraction,
      onEpochMismatch: () => {
        T("[bridge:repl] CCR v2: epoch superseded (409) \u2014 closing for poll-loop recovery");
        try {
          (d.close(), c.close(), u?.(4090));
        } catch (g) {
          T(`[bridge:repl] CCR v2: error during epoch-mismatch cleanup: ${be(g)}`, {
            level: "error",
          });
        }
        throw Error("epoch superseded");
      },
    });
  (c.setOnEvent((g) => {
    (d.reportDelivery(g.event_id, "received"), d.reportDelivery(g.event_id, "processed"));
  }),
    c.setEventFilter(Yjn));
  let p,
    f = false,
    m = false;
  return {
    write(g) {
      return d.writeEvent(g);
    },
    async writeBatch(g) {
      for (let h of g) {
        if (m) break;
        await d.writeEvent(h);
      }
    },
    close() {
      ((m = true), d.close(), c.close());
    },
    isConnectedStatus() {
      return f;
    },
    getStateLabel() {
      if (c.isClosedStatus()) return "closed";
      if (c.isConnectedStatus()) return f ? "connected" : "init";
      return "connecting";
    },
    setOnData(g) {
      c.setOnData(g);
    },
    setOnClose(g) {
      ((u = g),
        c.setOnClose((h) => {
          (d.close(), g(h ?? 4092));
        }));
    },
    setOnConnect(g) {
      p = g;
    },
    getLastSequenceNum() {
      return c.getLastSequenceNum();
    },
    getEpoch() {
      return a;
    },
    droppedBatchCount: 0,
    reportState(g, h) {
      d.reportState(g, h);
    },
    reportMetadata(g) {
      d.reportMetadata(g);
    },
    reportDelivery(g, h) {
      d.reportDelivery(g, h);
    },
    flush() {
      return d.flush();
    },
    getInternalEventWriter() {
      return (g, h, y) => d.writeInternalEvent(g, h, y);
    },
    getInternalEventReaders() {
      return {
        readMain: () => d.readInternalEvents(),
        readSubagents: () => d.readSubagentInternalEvents(),
      };
    },
    connect() {
      if (!e.outboundOnly) c.connect();
      d.initialize(a).then(
        () => {
          ((f = true),
            T(
              `[bridge:repl] v2 transport ready for writes (epoch=${a}, sse=${c.isConnectedStatus() ? "open" : "opening"})`,
            ),
            p?.());
        },
        (g) => {
          (T(`[bridge:repl] CCR v2 initialize failed: ${be(g)}`, {
            level: "error",
          }),
            d.close(),
            c.close(),
            u?.(4091));
        },
      );
    },
  };
}
