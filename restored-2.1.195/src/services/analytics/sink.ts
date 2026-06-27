// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CRa
// matched 2.1.88 source: src/services/analytics/sink.ts
// class=modified  jaccard=0.2016  score=0.3834  fileCov=0.2983
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var CRa = E(() => {
  spt();
  ft();
  Qpo();
  je();
  rfo();
  YFn();
  lpt();
  mfo();
  HRa();
});
var bfo = {};
_t(bfo, {
  createLinkedTransportPair: () => createLinkedTransportPair,
});
class _fo {
  peer;
  closed = !1;
  onclose;
  onerror;
  onmessage;
  _setPeer(e) {
    this.peer = e;
  }
  async start() {}
  async send(e) {
    if (this.closed) throw Error("Transport is closed");
    queueMicrotask(() => {
      this.peer?.onmessage?.(e);
    });
  }
  async close() {
    if (this.closed) return;
    if (((this.closed = !0), this.onclose?.(), this.peer && !this.peer.closed))
      ((this.peer.closed = !0), this.peer.onclose?.());
  }
}
function createLinkedTransportPair() {
  let e = new _fo(),
    t = new _fo();
  return (e._setPeer(t), t._setPeer(e), [e, t]);
}
var dpt = {};
_t(dpt, {
  shouldTrackDatadog: () => shouldTrackDatadog,
  initializeAnalyticsSink: () => initializeAnalyticsSink,
});
function shouldTrackDatadog() {
  if (S3e("datadog")) return !1;
  try {
    return at(rxp, !1);
  } catch {
    return !1;
  }
}
function oxp(e, t) {
  if (Sfo) {
    T(
      `logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,
      {
        level: "error",
      },
    );
    return;
  }
  Sfo = !0;
  try {
    let n = ykn(e);
    if (n === 0) return;
    let r =
      n !== null
        ? {
            ...t,
            sample_rate: n,
          }
        : t;
    if (shouldTrackDatadog()) ppt(e, bJe(r));
    Lst(e, r);
  } finally {
    Sfo = !1;
  }
}
async function sxp(e, t) {
  let n = ykn(e);
  if (n === 0) return;
  let r =
      n !== null
        ? {
            ...t,
            sample_rate: n,
          }
        : t,
    o = [];
  if (shouldTrackDatadog()) o.push(ppt(e, bJe(r)));
  (o.push(yU(e, r)), await Promise.all(o));
}
function initializeAnalyticsSink() {
  fSr({
    logEvent: oxp,
    logEventAsync: sxp,
  });
}
var rxp = "tengu_log_datadog_events",
  Sfo = !1;
