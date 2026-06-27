// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uPc
// matched 2.1.88 source: src/utils/attachments.ts
// class=new  jaccard=0.0157  score=0.2002  fileCov=0.0168
// note: nearest: src/utils/attachments.ts (0.0157); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uPc] deps: services/analytics/index.ts, hooks/useTerminalSize.ts
jCm = R(lt(), 1), GCm = R(rt(), 1), WCm = R(se(), 1);
function N7e(e) {
  return (t, n) => {
    e(r => {
      if (n === void 0) {
        if (!(t in r.replContexts)) return r;
        let {
          [t]: o,
          ...s
        } = r.replContexts;
        return {
          ...r,
          replContexts: s
        };
      }
      if (r.replContexts[t] === n) return r;
      return {
        ...r,
        replContexts: {
          ...r.replContexts,
          [t]: n
        }
      };
    });
  };
}
function mPc({
  getAppState: e,
  onStreamingDisplay: t,
  onMessageDisplay: n
}) {
  let r = Btn.randomUUID(),
    o = null;
  function s(d) {
    if (d.abandoned) return;
    if (d.done) n(d.apiMessageId, d.output);else t(d.output);
  }
  function i(d, p, f, m) {
    d.inFlight++;
    let g = Date.now(),
      h = (async () => {
        let y = m;
        try {
          for await (let b of JHt({
            turnId: d.turnId,
            messageId: d.messageId,
            index: p,
            final: f,
            delta: m
          }, e, d.abortController.signal, fPc)) {
            if (b.message?.type === "attachment" && (b.message.attachment.type === "hook_non_blocking_error" || b.message.attachment.type === "hook_cancelled")) d.stats.errorCount++;
            if (b.displayContent !== void 0) y = b.displayContent;
          }
        } catch (b) {
          d.stats.errorCount++, T(`MessageDisplay hook flush ${p} failed; displaying original delta: ${b instanceof Error ? b.message : String(b)}`, {
            level: "error"
          });
        } finally {
          let b = Date.now() - g;
          d.stats.totalDurationMs += b, d.stats.maxDurationMs = Math.max(d.stats.maxDurationMs, b), d.inFlight--, a(d);
        }
        return y;
      })();
    d.appendChain = d.appendChain.then(async () => {
      d.output += await h, s(d);
    });
  }
  function a(d) {
    if (d.abandoned) return;
    if (d.finalized) {
      if (!d.finalDispatched) l(d, true);else if (d.inFlight === 0 && !d.stats.summaryEmitted) d.stats.summaryEmitted = true, G("tengu_message_display_hooks", {
        flushCount: d.index,
        errorCount: d.stats.errorCount,
        totalDurationMs: d.stats.totalDurationMs,
        maxDurationMs: d.stats.maxDurationMs
      });
      return;
    }
    c(d);
  }
  function l(d, p) {
    if (d.flushTimer !== null) clearTimeout(d.flushTimer), d.flushTimer = null;
    if (d.inFlight >= pPc) return;
    let f = p ? d.raw.length : d.raw.lastIndexOf(`
`) + 1,
      m = d.raw.slice(d.flushedOffset, f);
    if (!p && m === "") return;
    if (p) d.finalDispatched = true;
    d.flushedOffset = f, d.lastFlushAt = Date.now();
    let g = d.index;
    d.index++, i(d, g, p, m);
  }
  function c(d) {
    if (d.flushTimer !== null) return;
    if (d.inFlight >= pPc) return;
    if (d.raw.lastIndexOf(`
`) + 1 <= d.flushedOffset) return;
    let f = Date.now() - d.lastFlushAt;
    if (f >= dPc) {
      l(d, false);
      return;
    }
    d.flushTimer = setTimeout((m, g) => {
      if (m.flushTimer = null, !m.finalized && !m.abandoned) g(m, false);
    }, dPc - f, d, l);
  }
  function u(d) {
    if (d.abandoned = true, d.flushTimer !== null) clearTimeout(d.flushTimer), d.flushTimer = null;
    d.abortController.abort();
  }
  return {
    newTurn() {
      if (o && !o.finalized) u(o);
      o = null, r = Btn.randomUUID();
    },
    begin(d) {
      if (o && !o.finalized) u(o);
      if (!M$("MessageDisplay", e(), Rt())) {
        o = null, t(null);
        return;
      }
      o = {
        apiMessageId: d,
        messageId: Btn.randomUUID(),
        turnId: r,
        raw: "",
        flushedOffset: 0,
        index: 0,
        output: "",
        appendChain: Promise.resolve(),
        lastFlushAt: 0,
        flushTimer: null,
        inFlight: 0,
        abortController: new AbortController(),
        finalized: false,
        finalDispatched: false,
        done: false,
        abandoned: false,
        stats: {
          totalDurationMs: 0,
          maxDurationMs: 0,
          errorCount: 0,
          summaryEmitted: false
        }
      }, t("");
    },
    delta(d) {
      if (o === null || o.finalized) return;
      o.raw += d, c(o);
    },
    entryLanded(d) {
      let p = o;
      if (p === null || p.apiMessageId !== d.message.id) return;
      if (p.raw === "" || !d.message.content.some(f => f.type === "text")) return;
      p.done = true, s(p), t("");
    },
    finalize() {
      let d = o;
      if (d === null) return;
      if (d.finalized = true, o = null, t(null), d.raw === "" && d.index === 0) return;
      d.done = true, l(d, true), s(d);
    }
  };
}
function BYo(e, t) {
  if (Object.keys(e.displayedMessageContent).length === 0) return e;
  let n = new Set();
  for (let s of t) if (s.type === "assistant") n.add(s.message.id);
  let r = {},
    o = false;
  for (let [s, i] of Object.entries(e.displayedMessageContent)) if (n.has(s)) r[s] = i;else o = true;
  if (!o) return e;
  return {
    ...e,
    displayedMessageContent: r
  };
}
async function gPc(e, t, n, r) {
  if (!M$("MessageDisplay", n(), Rt())) return e;
  let o = e.message.content.map(a => a.type === "text" ? a.text : "").join("");
  if (o === "") return e;
  let s;
  try {
    for await (let a of JHt({
      turnId: t,
      messageId: Btn.randomUUID(),
      index: 0,
      final: true,
      delta: o
    }, n, r, fPc)) if (a.displayContent !== void 0) s = a.displayContent;
  } catch (a) {
    return T(`MessageDisplay hook failed for completed message; emitting original text: ${a instanceof Error ? a.message : String(a)}`, {
      level: "error"
    }), e;
  }
  if (s === void 0) return e;
  let i = true;
  return {
    ...e,
    message: {
      ...e.message,
      content: e.message.content.map(a => {
        if (a.type !== "text") return a;
        let l = i ? s : "";
        return i = false, {
          ...a,
          text: l
        };
      })
    }
  };
}
var Btn,
  qCm = 10,
  dPc,
  pPc = 3,
  fPc = 10000 /* 1e4 */;