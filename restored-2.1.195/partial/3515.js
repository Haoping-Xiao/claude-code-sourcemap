// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Ua
// matched 2.1.88 source: node_modules/@opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js
// class=partial  jaccard=0.2407  score=1  fileCov=0.2407
// note: low-confidence suggestion: node_modules/@opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $Ua = E(() => {
  RUa();
  Iyo();
  DUa();
  xyo();
  PUa = R(Nh(), 1), MUa = R(Hst(), 1);
  (function (e) {
    e[e.resolved = 0] = "resolved", e[e.timeout = 1] = "timeout", e[e.error = 2] = "error", e[e.unresolved = 3] = "unresolved";
  })(PVe || (PVe = {}));
});
class C3n {
  export(e, t) {
    return this._sendSpans(e, t);
  }
  shutdown() {
    return this._sendSpans([]), this.forceFlush();
  }
  forceFlush() {
    return Promise.resolve();
  }
  _exportInfo(e) {
    return {
      resource: {
        attributes: e.resource.attributes
      },
      instrumentationScope: e.instrumentationScope,
      traceId: e.spanContext().traceId,
      parentSpanContext: e.parentSpanContext,
      traceState: e.spanContext().traceState?.serialize(),
      name: e.name,
      id: e.spanContext().spanId,
      kind: e.kind,
      timestamp: r5t.hrTimeToMicroseconds(e.startTime),
      duration: r5t.hrTimeToMicroseconds(e.duration),
      attributes: e.attributes,
      status: e.status,
      events: e.events,
      links: e.links
    };
  }
  _sendSpans(e, t) {
    for (let n of e) console.dir(this._exportInfo(n), {
      depth: 3
    });
    if (t) return t({
      code: r5t.ExportResultCode.SUCCESS
    });
  }
}
var r5t;