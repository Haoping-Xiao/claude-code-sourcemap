// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RSr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/core/streaming.mjs
// class=partial  jaccard=0.1793  score=0.2317  fileCov=0.4424
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/core/streaming.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var RSr = E(() => {
  $ge();
  p0();
  kSr();
  rwe();
  ZCt();
  p0();
  F2 = class F2 {
    constructor(e, t, n) {
      this.iterator = e, nIt.set(this, void 0), this.controller = t, Aa(this, nIt, n, "f");
    }
    static fromSSEResponse(e, t, n) {
      let r = !1,
        o = n ? f0(n) : console;
      async function* s() {
        if (r) throw new ui("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        r = !0;
        let i = !1;
        try {
          for await (let a of Yzc(e, t)) {
            if (a.event === "completion") try {
              yield JSON.parse(a.data);
            } catch (l) {
              throw o.error("Could not parse message into JSON:", a.data), o.error("From chunk:", a.raw), l;
            }
            if (a.event === "message_start" || a.event === "message_delta" || a.event === "message_stop" || a.event === "content_block_start" || a.event === "content_block_delta" || a.event === "content_block_stop" || a.event === "message" || a.event === "user.message" || a.event === "user.interrupt" || a.event === "user.tool_confirmation" || a.event === "user.custom_tool_result" || a.event === "agent.message" || a.event === "agent.thinking" || a.event === "agent.tool_use" || a.event === "agent.tool_result" || a.event === "agent.mcp_tool_use" || a.event === "agent.mcp_tool_result" || a.event === "agent.custom_tool_use" || a.event === "agent.thread_context_compacted" || a.event === "session.status_running" || a.event === "session.status_idle" || a.event === "session.status_rescheduled" || a.event === "session.status_terminated" || a.event === "session.error" || a.event === "session.deleted" || a.event === "span.model_request_start" || a.event === "span.model_request_end") try {
              yield JSON.parse(a.data);
            } catch (l) {
              throw o.error("Could not parse message into JSON:", a.data), o.error("From chunk:", a.raw), l;
            }
            if (a.event === "ping") continue;
            if (a.event === "error") {
              let l = Usn(a.data) ?? a.data,
                c = l?.error?.type;
              throw new Fo(void 0, l, void 0, e.headers, c);
            }
          }
          i = !0;
        } catch (a) {
          if (Oge(a)) return;
          throw a;
        } finally {
          if (!i) t.abort();
        }
      }
      return new F2(s, t, n);
    }
    static fromReadableStream(e, t, n) {
      let r = !1;
      async function* o() {
        let i = new swe(),
          a = JCt(e);
        for await (let l of a) for (let c of i.decode(l)) yield c;
        for (let l of i.flush()) yield l;
      }
      async function* s() {
        if (r) throw new ui("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        r = !0;
        let i = !1;
        try {
          for await (let a of o()) {
            if (i) continue;
            if (a) yield JSON.parse(a);
          }
          i = !0;
        } catch (a) {
          if (Oge(a)) return;
          throw a;
        } finally {
          if (!i) t.abort();
        }
      }
      return new F2(s, t, n);
    }
    [(nIt = new WeakMap(), Symbol.asyncIterator)]() {
      return this.iterator();
    }
    tee() {
      let e = [],
        t = [],
        n = this.iterator(),
        r = o => ({
          next: () => {
            if (o.length === 0) {
              let s = n.next();
              e.push(s), t.push(s);
            }
            return o.shift();
          }
        });
      return [new F2(() => r(e), this.controller, no(this, nIt, "f")), new F2(() => r(t), this.controller, no(this, nIt, "f"))];
    }
    toReadableStream() {
      let e = this,
        t;
      return ASr({
        async start() {
          t = e[Symbol.asyncIterator]();
        },
        async pull(n) {
          try {
            let {
              value: r,
              done: o
            } = await t.next();
            if (o) return n.close();
            let s = vJe(JSON.stringify(r) + `
`);
            n.enqueue(s);
          } catch (r) {
            n.error(r);
          }
        },
        async cancel() {
          await t.return?.();
        }
      });
    }
  };
});
async function ein(e, t) {
  let {
      response: n,
      requestLogID: r,
      retryOfRequestLogID: o,
      startTime: s
    } = t,
    i = await (async () => {
      if (t.options.stream) {
        if (f0(e).debug("response", n.status, n.url, n.headers, n.body), t.options.__streamClass) return t.options.__streamClass.fromSSEResponse(n, t.controller);
        return F2.fromSSEResponse(n, t.controller);
      }
      if (n.status === 204) return null;
      if (t.options.__binaryResponse) return n;
      let l = n.headers.get("content-type")?.split(";")[0]?.trim();
      if (l?.includes("application/json") || l?.endsWith("+json")) {
        if (n.headers.get("content-length") === "0") return;
        let p = await n.json();
        return LSr(p, n);
      }
      return await n.text();
    })();
  return f0(e).debug(`[${r}] response parsed`, Bge({
    retryOfRequestLogID: o,
    url: n.url,
    status: n.status,
    body: i,
    durationMs: Date.now() - s
  })), i;
}
function LSr(e, t) {
  if (!e || typeof e !== "object" || Array.isArray(e)) return e;
  return Object.defineProperty(e, "_request_id", {
    value: t.headers.get("request-id"),
    enumerable: !1
  });
}