// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ft
// matched 2.1.88 source: src/services/analytics/index.ts
// class=modified  jaccard=0.3224  score=0.3917  fileCov=0.6459
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: stripProtoFields, logEventAsync, logEvent, createAnalyticsState, attachAnalyticsSink, _setGlobalAnalyticsStateForTesting
// [unwrapped __esm module ft] deps: Bns, utils/crypto.ts, bridge/bridgeMessaging.ts, Sx, bootstrap/state.ts, google-auth-library/build/src/crypto/node/crypto.js
((Xyr = require("fs")),
  (grs = require("process")),
  (lzc = {
    renderTarget: "ink",
    workspace: "local",
    canDrive: true,
    transcriptSource: "local-jsonl",
    remote: null,
  }));
Bt = hrs();
((Xon = Mi()), (oee = Xon.subscribe));
((Zyr = Mi()), (e_r = Zyr.subscribe));
((d_r = Mi()), (p_r = d_r.subscribe));
E_r = Mi();
H_r = E_r.subscribe;
rbr = Mi();
yCt = rbr.subscribe;
mrs = [];
function stripProtoFields(metadata) {
  let t;
  for (let n in metadata)
    if (n.startsWith("_PROTO_")) {
      if (t === void 0)
        t = {
          ...metadata,
        };
      delete t[n];
    }
  return t ?? metadata;
}
function createAnalyticsState() {
  return {
    eventQueue: [],
    sink: null,
  };
}
function Izc(e) {
  Msn = e;
}
function attachAnalyticsSink(e) {
  let t = Msn;
  if (t.sink !== null) return;
  if (((t.sink = e), t.eventQueue.length > 0)) {
    let n = t.eventQueue;
    ((t.eventQueue = []),
      queueMicrotask(() => {
        for (let r of n)
          if (r.async) e.logEventAsync(r.eventName, r.metadata);
          else e.logEvent(r.eventName, r.metadata);
      }));
  }
}
function logEvent(e, t) {
  let n = Msn;
  if (n.sink === null) {
    n.eventQueue.push({
      eventName: e,
      metadata: t,
      async: false,
    });
    return;
  }
  n.sink.logEvent(e, t);
}
async function logEventAsync(e, t) {
  let n = Msn;
  if (n.sink === null) {
    n.eventQueue.push({
      eventName: e,
      metadata: t,
      async: true,
    });
    return;
  }
  await n.sink.logEventAsync(e, t);
}
var Msn;
