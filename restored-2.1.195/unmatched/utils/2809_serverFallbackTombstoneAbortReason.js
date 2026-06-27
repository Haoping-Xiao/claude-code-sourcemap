// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rio
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0058  score=0.1514  fileCov=0.006
// note: nearest: src/screens/REPL.tsx (0.0058); dir inferred from dep-graph -> utils; 13 renamed
// ─────────────────────────────────────────────────────────────────────────
var rio = E(() => {
  ft();
  oo();
  BE();
  wr();
  Wct();
  Ao();
  Un();
  kt();
  ZE();
  ZU();
  Xso();
  fia = {};
  rap = new Set(["claude-sonnet-4-6", "claude-opus-4-6"]);
});
function cap(e) {
  return e?.compacted === true && e.turnCounter < 3 ? (e?.consecutiveRapidRefills ?? 0) + 1 : 0;
}
function p1n(e) {
  let t = cap(e);
  return {
    action: t >= 3 ? "trip" : "proceed",
    consecutiveRapidRefills: t
  };
}
function oio(e, t) {
  return {
    compacted: true,
    turnId: e,
    turnCounter: 0,
    consecutiveFailures: 0,
    consecutiveRapidRefills: t
  };
}
var bia = 3,
  sio = "Autocompact is thrashing: the context refilled to the limit within 3 turns of the previous compact, 3 times in a row. A file being read or a tool output is likely too large for the context window. Try reading in smaller chunks, or use /clear to start fresh.";
var cio = {};
_t(cio, {
  userAbortReason: () => userAbortReason,
  unwrapAbortReason: () => unwrapAbortReason,
  serverFallbackTombstoneAbortReason: () => serverFallbackTombstoneAbortReason,
  isUserInitiatedAbortReason: () => isUserInitiatedAbortReason,
  isUserAttributableAbortKind: () => isUserAttributableAbortKind,
  isServerFallbackDiscard: () => isServerFallbackDiscard,
  createRecoveryAbortController: () => createRecoveryAbortController,
  createChildAbortController: () => createChildAbortController,
  createAbortController: () => createAbortController,
  classifyAbortReasonForTelemetry: () => classifyAbortReasonForTelemetry,
  attachDetachableAbortRelay: () => attachDetachableAbortRelay,
  SERVER_FALLBACK_TOMBSTONE_REASON: () => SERVER_FALLBACK_TOMBSTONE_REASON,
  RECOVERY_ABORT_TIMEOUT_MS: () => RECOVERY_ABORT_TIMEOUT_MS
});
function createAbortController(e = uap) {
  let t = new AbortController();
  return Sia.setMaxListeners(e, t.signal), t;
}
function dap(e) {
  let t = this.deref();
  e.deref()?.abort(t?.signal.reason);
}
function pap(e) {
  let t = this.deref(),
    n = e.deref();
  if (t && n) t.signal.removeEventListener("abort", n);
}
function Eia(e, t, n) {
  let r = new WeakRef(t),
    o = new WeakRef(e);
  if (e.signal.aborted) {
    n.call(o, r);
    return;
  }
  let s = n.bind(o, r);
  e.signal.addEventListener("abort", s, {
    once: true
  }), fap.register(t, {
    parentSignalRef: new WeakRef(e.signal),
    handler: s
  }), t.signal.addEventListener("abort", pap.bind(o, new WeakRef(s)), {
    once: true
  });
}
function createChildAbortController(e, t) {
  let n = createAbortController(t);
  return Eia(e, n, dap), n;
}
function attachDetachableAbortRelay(e, t) {
  if (e.signal.aborted) return t.abort(e.signal.reason), () => {};
  let n = () => t.abort(e.signal.reason);
  return e.signal.addEventListener("abort", n, {
    once: true
  }), () => e.signal.removeEventListener("abort", n);
}
function userAbortReason(e) {
  return new DOMException(e, "AbortError");
}
function unwrapAbortReason(e) {
  return e instanceof DOMException && e.name === "AbortError" ? e.message : e;
}
function isUserInitiatedAbortReason(e) {
  return map.has(unwrapAbortReason(e));
}
function isServerFallbackDiscard(e) {
  return e.aborted && unwrapAbortReason(e.reason) === SERVER_FALLBACK_TOMBSTONE_REASON;
}
function serverFallbackTombstoneAbortReason() {
  return new DOMException(SERVER_FALLBACK_TOMBSTONE_REASON, "AbortError");
}
function classifyAbortReasonForTelemetry(e) {
  switch (unwrapAbortReason(e)) {
    case "user-cancel":
      return "user_cancel";
    case "remote-cancel":
      return "remote_cancel";
    case "interrupt":
      return "interrupt";
    case "background":
      return "background";
    case "recovery-timeout":
      return "recovery_timeout";
    case SERVER_FALLBACK_TOMBSTONE_REASON:
      return "server_fallback_tombstone";
    default:
      return "turn_teardown";
  }
}
function isUserAttributableAbortKind(e) {
  switch (e) {
    case "user_cancel":
    case "remote_cancel":
    case "interrupt":
    case "background":
      return true;
    case "turn_teardown":
    case "recovery_timeout":
    case "server_fallback_tombstone":
      return false;
  }
}
function gap(e) {
  let t = this.deref();
  if (!t || !isUserInitiatedAbortReason(t.signal.reason)) return;
  e.deref()?.abort(t.signal.reason);
}
function hap(e) {
  e.deref()?.abort(userAbortReason("recovery-timeout"));
}
function createRecoveryAbortController(e, t = RECOVERY_ABORT_TIMEOUT_MS) {
  let n = createAbortController();
  if (Eia(e, n, gap), n.signal.aborted) return n;
  let r = setTimeout(hap, t, new WeakRef(n));
  return r.unref(), n.signal.addEventListener("abort", clearTimeout.bind(void 0, r), {
    once: true
  }), n;
}
var Sia,
  uap = 50,
  fap,
  map,
  SERVER_FALLBACK_TOMBSTONE_REASON = "server-fallback-tombstone",
  RECOVERY_ABORT_TIMEOUT_MS = 600000;