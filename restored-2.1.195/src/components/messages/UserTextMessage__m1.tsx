// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MJl
// matched 2.1.88 source: src/components/messages/UserTextMessage.tsx
// class=modified (alt of src/components/messages/UserTextMessage.tsx)  jaccard=0.043  score=0.0513  fileCov=0.2094
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module MJl] deps: Jt
PJl = require("fs/promises");
function MJt(e) {
  let t = [],
    n = 0,
    r;
  while (
    (r = e.indexOf(
      `

`,
      n,
    )) !== -1
  ) {
    let o = e.slice(n, r);
    if (((n = r + 2), !o.trim())) continue;
    let s = {},
      i = false;
    for (let a of o.split(`
`)) {
      if (a.startsWith(":")) {
        i = true;
        continue;
      }
      let l = a.indexOf(":");
      if (l === -1) continue;
      let c = a.slice(0, l),
        u = a[l + 1] === " " ? a.slice(l + 2) : a.slice(l + 1);
      switch (c) {
        case "event":
          s.event = u;
          break;
        case "id":
          s.id = u;
          break;
        case "data":
          s.data = s.data
            ? s.data +
              `
` +
              u
            : u;
          break;
      }
    }
    if (s.data || i) t.push(s);
  }
  return {
    frames: t,
    remaining: e.slice(n),
  };
}
function NJl(e) {
  if (
    e.startsWith("<bash-stdout") ||
    e.startsWith("<bash-stderr") ||
    e.startsWith("<local-command-stdout") ||
    e.startsWith("<local-command-stderr") ||
    e.startsWith(kFe) ||
    e.startsWith(`<${DB} `) ||
    e.startsWith(`<${DB}>`)
  )
    return true;
  if (
    (e.startsWith(Vte) || e.startsWith(yoe)) &&
    e.startsWith(
      "<",
      e.indexOf(`
`) + 1,
    )
  )
    return true;
  if (xl(e, Cae) !== null) return true;
  return (
    e.includes("<bash-input>") ||
    e.includes(`<${zC}>`) ||
    e.includes("<user-memory-input>") ||
    e.includes(`<${Oc}`) ||
    e.includes("<mcp-resource-update") ||
    e.includes("<mcp-polling-update") ||
    e.includes(`<${bhe}>`) ||
    e.includes(`<${BZe}`) ||
    e.includes(`<${CFe}>`)
  );
}
function z4o(e) {
  if (e.tool_use_result !== void 0) return true;
  let t = e.message?.content;
  if (typeof t === "string") return NJl(t);
  return (
    Array.isArray(t) &&
    t.some(
      (n) =>
        typeof n === "object" &&
        n !== null &&
        "type" in n &&
        (n.type === "tool_result" ||
          (n.type === "text" && "text" in n && typeof n.text === "string" && NJl(n.text))),
    )
  );
}
function BJl(e) {
  return typeof e === "object" && e !== null && "type" in e && typeof e.type === "string";
}
function C6f(e) {
  if (!("type" in e)) return true;
  switch (e.type) {
    case "message_start": {
      if (!("message" in e)) return false;
      let t = e.message;
      return typeof t === "object" && t !== null && "id" in t && typeof t.id === "string";
    }
    case "content_block_start": {
      if (
        !("content_block" in e) ||
        typeof e.content_block !== "object" ||
        e.content_block === null
      )
        return false;
      let t = e.content_block;
      if ("type" in t && t.type === "tool_use")
        return "id" in t && typeof t.id === "string" && "name" in t && typeof t.name === "string";
      return true;
    }
    case "content_block_delta": {
      if (!("delta" in e)) return false;
      let t = e.delta;
      if (typeof t !== "object" || t === null) return false;
      if (!("type" in t)) return true;
      switch (t.type) {
        case "text_delta":
          return "text" in t && typeof t.text === "string";
        case "input_json_delta":
          return "partial_json" in t && typeof t.partial_json === "string";
        case "signature_delta":
          return "signature" in t && typeof t.signature === "string";
        default:
          return true;
      }
    }
    default:
      return true;
  }
}
class K4o {
  sessionId;
  orgUuid;
  getAccessToken;
  callbacks;
  onAuth401;
  state = "idle";
  abortController = null;
  reconnectAttempts = 0;
  exhaustedBudget = false;
  reconnectTimer = null;
  livenessTimer = null;
  driftTimer = null;
  lastDriftCheck = 0;
  lastSequenceNum = 0;
  issuedRequestIds = new Set();
  constructor(e, t, n, r, o, s) {
    this.sessionId = e;
    this.orgUuid = t;
    this.getAccessToken = n;
    this.callbacks = r;
    this.onAuth401 = o;
    if (s !== void 0 && s > 0) this.lastSequenceNum = s;
  }
  async connect() {
    if (this.state === "connecting" || this.state === "connected") {
      T("[SessionsV2Client] Already connecting/connected");
      return;
    }
    this.state = "connecting";
    let e = new URL(`${$s().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events/stream`);
    if (this.lastSequenceNum > 0)
      e.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    let t = {
      ...this.authHeaders(),
      Accept: "text/event-stream",
    };
    if (this.lastSequenceNum > 0) t["Last-Event-ID"] = String(this.lastSequenceNum);
    (T(`[SessionsV2Client] Connecting to ${e.href} (from_sequence_num=${this.lastSequenceNum})`),
      (this.abortController = new AbortController()),
      this.readStream(e, t, this.abortController));
  }
  async readStream(e, t, n) {
    let r,
      o = false,
      s = setTimeout(() => {
        ((o = true), n.abort());
      }, OJl);
    try {
      ((r = await fetch(e.href, {
        method: "GET",
        headers: t,
        signal: n.signal,
        ...kg({
          url: e.href,
        }),
      })),
        clearTimeout(s));
    } catch (c) {
      if ((clearTimeout(s), o)) {
        (T(`[SessionsV2Client] Connect timed out after ${OJl}ms, reconnecting`, {
          level: "error",
        }),
          It("remote_connect", "remote_connect_timeout"),
          this.handleStreamEnd());
        return;
      }
      if (n.signal.aborted) return;
      (T(`[SessionsV2Client] Connect error: ${be(c)}`, {
        level: "error",
      }),
        It("remote_connect", "remote_connect_request_failed"),
        this.callbacks.onError?.(Zr(c)),
        this.handleStreamEnd());
      return;
    }
    if (!r.ok || !r.body) {
      if (
        (T(`[SessionsV2Client] HTTP ${r.status} on SSE connect`, {
          level: "error",
        }),
        r.body?.cancel(),
        r.status === 401 && this.onAuth401)
      ) {
        (T("[SessionsV2Client] 401 on SSE connect \u2014 refreshing"),
          Le("remote_connect", "remote_connect_auth_401"),
          await this.onAuth401(this.getAccessToken()),
          this.handleStreamEnd());
        return;
      }
      if (T6f.has(r.status)) {
        (Le("remote_connect", "remote_connect_permanent_failure"),
          (this.state = "closed"),
          this.callbacks.onClose?.());
        return;
      }
      (It("remote_connect", "remote_connect_http_error"), this.handleStreamEnd());
      return;
    }
    ((this.state = "connected"),
      (this.reconnectAttempts = 0),
      this.resetLivenessTimer(),
      this.startDriftWatch(),
      T("[SessionsV2Client] Connected"),
      xe("remote_connect"),
      this.callbacks.onConnected?.());
    let i = r.body.getReader(),
      a = new TextDecoder(),
      l = "";
    try {
      while (true) {
        let { done: c, value: u } = await i.read();
        if (c) break;
        l += a.decode(u, w6f);
        let { frames: d, remaining: p } = MJt(l);
        l = p;
        for (let f of d)
          if ((this.resetLivenessTimer(), f.event && f.data))
            this.handleFrame(f.event, f.id, f.data);
      }
    } catch (c) {
      if (n.signal.aborted) return;
      (T(`[SessionsV2Client] Stream read error: ${be(c)}`, {
        level: "error",
      }),
        It("remote_connect", "remote_connect_stream_error"));
    } finally {
      i.releaseLock();
    }
    if (!n.signal.aborted) (T("[SessionsV2Client] Stream ended"), this.handleStreamEnd());
  }
  handleFrame(e, t, n) {
    let r;
    try {
      r = Ft(n);
    } catch (o) {
      (ke(Error(`[SessionsV2Client] Failed to parse ${e} frame: ${be(o)}`)),
        It("remote_connect", "remote_connect_frame_parse_failed"));
      return;
    }
    switch (e) {
      case "client_event": {
        let o = r,
          s = parseInt(t ?? String(o.sequence_num), 10);
        if (!isNaN(s) && s > this.lastSequenceNum) this.lastSequenceNum = s;
        if (!BJl(o.payload)) {
          T(
            `[SessionsV2Client] Dropping client_event with no payload.type (event_type=${o.event_type})`,
          );
          return;
        }
        if (o.payload.type === "control_response") {
          let { response: i } = o.payload;
          if (!i || typeof i !== "object" || typeof i.request_id !== "string") {
            T(`[SessionsV2Client] Dropping malformed control_response from source=${o.source}`, {
              level: "warn",
            });
            return;
          }
        }
        if (o.payload.type === "user") {
          if (o.source !== "worker" && z4o(o.payload)) {
            T(
              `[SessionsV2Client] Dropping worker-output-shaped user frame from source=${o.source} \u2014 only the worker produces tool results and execution output`,
              {
                level: "warn",
              },
            );
            return;
          }
          let i = o.payload.message?.content;
          if (
            Array.isArray(i) &&
            !i.every(
              (a) =>
                typeof a === "object" &&
                a !== null &&
                (a.type !== "text" || typeof a.text === "string"),
            )
          ) {
            T(
              `[SessionsV2Client] Dropping user frame with malformed content from source=${o.source}`,
              {
                level: "warn",
              },
            );
            return;
          }
        }
        if (o.source !== "worker") {
          if (o.payload.type === "control_response") {
            if (this.issuedRequestIds.has(o.payload.response.request_id)) {
              T(
                `[SessionsV2Client] Dropping control_response for this client's request_id from source=${o.source} \u2014 only the worker may answer our RPCs`,
                {
                  level: "warn",
                },
              );
              return;
            }
            if (
              o.payload.response.pending_user_dialog_requests ||
              o.payload.response.pending_permission_requests
            ) {
              T(
                `[SessionsV2Client] Stripping prompt-redelivery fields from control_response with source=${o.source}`,
              );
              let {
                pending_user_dialog_requests: i,
                pending_permission_requests: a,
                ...l
              } = o.payload.response;
              this.callbacks.onMessage({
                ...o.payload,
                response: l,
              });
              return;
            }
          } else if (!V4o.has(o.payload.type)) {
            T(`[SessionsV2Client] Dropping ${o.payload.type} from source=${o.source}`);
            return;
          }
        } else if (o.payload.type === "control_response")
          this.issuedRequestIds.delete(o.payload.response.request_id);
        this.callbacks.onMessage(o.payload);
        return;
      }
      case "ephemeral_event": {
        let o = r;
        if (BJl(o.payload)) {
          if (o.payload.type === "system" && o.payload.subtype === "thinking_tokens") {
            this.callbacks.onMessage({
              type: "system",
              subtype: "thinking_tokens",
              estimated_tokens: o.payload.estimated_tokens,
              estimated_tokens_delta: o.payload.estimated_tokens_delta,
              uuid: o.payload.uuid,
              session_id: o.payload.session_id,
            });
            return;
          }
          if (o.payload.type !== "stream_event") {
            T(`[SessionsV2Client] Dropping ${o.payload.type} on ephemeral channel`);
            return;
          }
          if (
            typeof o.payload.event !== "object" ||
            o.payload.event === null ||
            !C6f(o.payload.event)
          ) {
            T("[SessionsV2Client] Dropping malformed stream_event on ephemeral channel", {
              level: "warn",
            });
            return;
          }
          this.callbacks.onMessage(o.payload);
        }
        return;
      }
      case "catch_up_truncated":
        (T("[SessionsV2Client] catch_up_truncated \u2014 transcript gap"),
          It("remote_connect", "remote_catch_up_truncated"),
          this.callbacks.onCatchUpTruncated?.());
        return;
      case "session_update":
      case "delivery_update":
        T(`[SessionsV2Client] Ignoring ${e} frame`);
        return;
      default:
        T(`[SessionsV2Client] Unknown SSE event type '${e}'`, {
          level: "warn",
        });
        return;
    }
  }
  handleStreamEnd() {
    if ((this.clearLivenessTimer(), this.clearDriftWatch(), this.state === "closed")) return;
    if (((this.abortController = null), this.reconnectAttempts >= q4o)) {
      (T(`[SessionsV2Client] Reconnect budget exhausted (${q4o}), closing`),
        Le("remote_connect", "remote_connect_reconnect_exhausted"),
        (this.state = "closed"),
        (this.exhaustedBudget = true),
        this.callbacks.onClose?.());
      return;
    }
    (this.reconnectAttempts++, (this.state = "idle"));
    let e = Math.min(E6f * 2 ** (this.reconnectAttempts - 1), A6f);
    (T(
      `[SessionsV2Client] Reconnecting in ${e}ms (attempt ${this.reconnectAttempts}/${q4o}, from_sequence_num=${this.lastSequenceNum})`,
    ),
      this.callbacks.onReconnecting?.(),
      (this.reconnectTimer = setTimeout(() => {
        ((this.reconnectTimer = null), this.connect());
      }, e)));
  }
  onLivenessTimeout = () => {
    ((this.livenessTimer = null),
      T("[SessionsV2Client] Liveness timeout, reconnecting", {
        level: "warn",
      }),
      this.abortController?.abort(),
      (this.abortController = null),
      this.handleStreamEnd());
  };
  resetLivenessTimer() {
    (this.clearLivenessTimer(), (this.livenessTimer = setTimeout(this.onLivenessTimeout, H6f)));
  }
  clearLivenessTimer() {
    if (this.livenessTimer) (clearTimeout(this.livenessTimer), (this.livenessTimer = null));
  }
  startDriftWatch() {
    (this.clearDriftWatch(),
      (this.lastDriftCheck = Date.now()),
      (this.driftTimer = setInterval(() => {
        let e = Date.now(),
          t = e - this.lastDriftCheck;
        if (((this.lastDriftCheck = e), t > $Jl * 2 && this.state === "connected"))
          (T(`[SessionsV2Client] Wall-clock drift ${t}ms \u2014 reconnecting after suspend`),
            this.reconnect());
      }, $Jl)),
      this.driftTimer.unref?.());
  }
  clearDriftWatch() {
    if (this.driftTimer) (clearInterval(this.driftTimer), (this.driftTimer = null));
  }
  async sendEvent(e) {
    if (this.state === "closed")
      return (
        T("[SessionsV2Client] Cannot send: closed", {
          level: "warn",
        }),
        Le("remote_send_event", "remote_send_event_closed"),
        null
      );
    let t = `${$s().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events`,
      n = {
        session_id: this.sessionId,
        events: [
          {
            payload: e,
          },
        ],
      };
    try {
      let r = await fetch(t, {
        method: "POST",
        headers: this.authHeaders(),
        body: De(n),
        signal: AbortSignal.timeout(30000),
        ...kg({
          url: t,
        }),
      });
      if (!r.ok) {
        if ((r.body?.cancel(), r.status === 401 && this.onAuth401)) {
          if (
            (T("[SessionsV2Client] 401 on POST \u2014 refreshing + retry"),
            await this.onAuth401(this.getAccessToken()))
          ) {
            let a = await fetch(t, {
              method: "POST",
              headers: this.authHeaders(),
              body: De(n),
              signal: AbortSignal.timeout(30000),
              ...kg({
                url: t,
              }),
            });
            if (a.ok) {
              let c = (await a.json()).results?.[0],
                u = c ? parseInt(String(c.sequence_num), 10) : NaN;
              return (
                xe("remote_send_event"),
                {
                  sequence_num: isNaN(u) ? 0 : u,
                }
              );
            }
            a.body?.cancel();
          }
        }
        return (
          T(`[SessionsV2Client] POST /events returned ${r.status}`, {
            level: "warn",
          }),
          Le("remote_send_event", "remote_send_event_http_error"),
          null
        );
      }
      let s = (await r.json()).results?.[0],
        i = s ? parseInt(String(s.sequence_num), 10) : NaN;
      return (
        xe("remote_send_event"),
        {
          sequence_num: isNaN(i) ? 0 : i,
        }
      );
    } catch (r) {
      return (
        T(`[SessionsV2Client] POST /events failed: ${be(r)}`, {
          level: "warn",
        }),
        Le("remote_send_event", "remote_send_event_request_failed"),
        null
      );
    }
  }
  sendControlResponse(e) {
    (T("[SessionsV2Client] Sending control_response"),
      this.sendEvent({
        ...e,
        uuid: uir.randomUUID(),
      }));
  }
  sendControlRequest(e) {
    if (this.state === "closed")
      return (
        T("[SessionsV2Client] Cannot send control_request: closed", {
          level: "warn",
        }),
        null
      );
    let t = uir.randomUUID();
    if ((this.issuedRequestIds.add(t), this.issuedRequestIds.size > v6f)) {
      T(
        "[SessionsV2Client] issuedRequestIds overflow \u2014 evicting oldest unanswered request_id",
        {
          level: "warn",
        },
      );
      let r = this.issuedRequestIds.values().next().value;
      if (r !== void 0) this.issuedRequestIds.delete(r);
    }
    let n = {
      type: "control_request",
      request_id: t,
      request: e,
      uuid: uir.randomUUID(),
    };
    return (T(`[SessionsV2Client] Sending control_request: ${e.subtype}`), this.sendEvent(n), t);
  }
  isConnected() {
    return this.state === "connected";
  }
  close() {
    if (
      (T("[SessionsV2Client] Closing"),
      (this.state = "closed"),
      (this.exhaustedBudget = false),
      this.clearLivenessTimer(),
      this.clearDriftWatch(),
      this.reconnectTimer)
    )
      (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.abortController?.abort(), (this.abortController = null));
  }
  reconnect() {
    if (
      (T("[SessionsV2Client] Force reconnect"),
      (this.reconnectAttempts = 0),
      (this.exhaustedBudget = false),
      this.clearLivenessTimer(),
      this.clearDriftWatch(),
      this.reconnectTimer)
    )
      (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.abortController?.abort(),
      (this.abortController = null),
      (this.state = "idle"),
      this.connect());
  }
  reviveAfterExhaustion() {
    if (this.state !== "closed" || !this.exhaustedBudget) return false;
    return (It("remote_connect", "remote_connect_revived_by_user_send"), this.reconnect(), true);
  }
  authHeaders() {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": _x(),
      "x-organization-uuid": this.orgUuid,
      "User-Agent": dy(),
    };
  }
}
var uir,
  E6f = 1000,
  A6f = 30000,
  q4o = 5,
  H6f = 45000,
  $Jl = 5000,
  OJl = 30000,
  T6f,
  v6f = 500,
  w6f,
  V4o;
