// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d_o
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var d_o = Q(Qft => {
  Object.defineProperty(Qft, "__esModule", {
    value: !0
  });
  Qft.toLogAttributes = Qft.createExportLogsServiceRequest = void 0;
  var f1p = G3n(),
    q3n = W3n();
  function m1p(e, t) {
    let n = (0, f1p.getOtlpEncoder)(t);
    return {
      resourceLogs: h1p(e, n)
    };
  }
  Qft.createExportLogsServiceRequest = m1p;
  function g1p(e) {
    let t = new Map();
    for (let n of e) {
      let {
          resource: r,
          instrumentationScope: {
            name: o,
            version: s = "",
            schemaUrl: i = ""
          }
        } = n,
        a = t.get(r);
      if (!a) a = new Map(), t.set(r, a);
      let l = `${o}@${s}:${i}`,
        c = a.get(l);
      if (!c) c = [], a.set(l, c);
      c.push(n);
    }
    return t;
  }
  function h1p(e, t) {
    let n = g1p(e);
    return Array.from(n, ([r, o]) => {
      let s = (0, q3n.createResource)(r);
      return {
        resource: s,
        scopeLogs: Array.from(o, ([, i]) => ({
          scope: (0, q3n.createInstrumentationScope)(i[0].instrumentationScope),
          logRecords: i.map(a => y1p(a, t)),
          schemaUrl: i[0].instrumentationScope.schemaUrl
        })),
        schemaUrl: s.schemaUrl
      };
    });
  }
  function y1p(e, t) {
    return {
      timeUnixNano: t.encodeHrTime(e.hrTime),
      observedTimeUnixNano: t.encodeHrTime(e.hrTimeObserved),
      severityNumber: _1p(e.severityNumber),
      severityText: e.severityText,
      body: (0, q3n.toAnyValue)(e.body),
      eventName: e.eventName,
      attributes: d2a(e.attributes),
      droppedAttributesCount: e.droppedAttributesCount,
      flags: e.spanContext?.traceFlags,
      traceId: t.encodeOptionalSpanContext(e.spanContext?.traceId),
      spanId: t.encodeOptionalSpanContext(e.spanContext?.spanId)
    };
  }
  function _1p(e) {
    return e;
  }
  function d2a(e) {
    return Object.keys(e).map(t => (0, q3n.toKeyValue)(t, e[t]));
  }
  Qft.toLogAttributes = d2a;
});