// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f_o
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var f_o = Q(Ude => {
  Object.defineProperty(Ude, "__esModule", {
    value: !0
  });
  Ude.createExportTraceServiceRequest = Ude.toOtlpSpanEvent = Ude.toOtlpLink = Ude.sdkSpanToOtlpSpan = void 0;
  var p5t = W3n(),
    P1p = G3n(),
    M1p = 256,
    $1p = 512;
  function v2a(e, t) {
    let n = e & 255 | M1p;
    if (t) n |= $1p;
    return n;
  }
  function w2a(e, t) {
    let n = e.spanContext(),
      r = e.status,
      o = e.parentSpanContext?.spanId ? t.encodeSpanContext(e.parentSpanContext?.spanId) : void 0;
    return {
      traceId: t.encodeSpanContext(n.traceId),
      spanId: t.encodeSpanContext(n.spanId),
      parentSpanId: o,
      traceState: n.traceState?.serialize(),
      name: e.name,
      kind: e.kind == null ? 0 : e.kind + 1,
      startTimeUnixNano: t.encodeHrTime(e.startTime),
      endTimeUnixNano: t.encodeHrTime(e.endTime),
      attributes: (0, p5t.toAttributes)(e.attributes),
      droppedAttributesCount: e.droppedAttributesCount,
      events: e.events.map(s => I2a(s, t)),
      droppedEventsCount: e.droppedEventsCount,
      status: {
        code: r.code,
        message: r.message
      },
      links: e.links.map(s => C2a(s, t)),
      droppedLinksCount: e.droppedLinksCount,
      flags: v2a(n.traceFlags, e.parentSpanContext?.isRemote)
    };
  }
  Ude.sdkSpanToOtlpSpan = w2a;
  function C2a(e, t) {
    return {
      attributes: e.attributes ? (0, p5t.toAttributes)(e.attributes) : [],
      spanId: t.encodeSpanContext(e.context.spanId),
      traceId: t.encodeSpanContext(e.context.traceId),
      traceState: e.context.traceState?.serialize(),
      droppedAttributesCount: e.droppedAttributesCount || 0,
      flags: v2a(e.context.traceFlags, e.context.isRemote)
    };
  }
  Ude.toOtlpLink = C2a;
  function I2a(e, t) {
    return {
      attributes: e.attributes ? (0, p5t.toAttributes)(e.attributes) : [],
      name: e.name,
      timeUnixNano: t.encodeHrTime(e.time),
      droppedAttributesCount: e.droppedAttributesCount || 0
    };
  }
  Ude.toOtlpSpanEvent = I2a;
  function O1p(e, t) {
    let n = (0, P1p.getOtlpEncoder)(t);
    return {
      resourceSpans: B1p(e, n)
    };
  }
  Ude.createExportTraceServiceRequest = O1p;
  function N1p(e) {
    let t = new Map();
    for (let n of e) {
      let r = t.get(n.resource);
      if (!r) r = new Map(), t.set(n.resource, r);
      let o = `${n.instrumentationScope.name}@${n.instrumentationScope.version || ""}:${n.instrumentationScope.schemaUrl || ""}`,
        s = r.get(o);
      if (!s) s = [], r.set(o, s);
      s.push(n);
    }
    return t;
  }
  function B1p(e, t) {
    let n = N1p(e),
      r = [],
      o = n.entries(),
      s = o.next();
    while (!s.done) {
      let [i, a] = s.value,
        l = [],
        c = a.values(),
        u = c.next();
      while (!u.done) {
        let f = u.value;
        if (f.length > 0) {
          let m = f.map(g => w2a(g, t));
          l.push({
            scope: (0, p5t.createInstrumentationScope)(f[0].instrumentationScope),
            spans: m,
            schemaUrl: f[0].instrumentationScope.schemaUrl
          });
        }
        u = c.next();
      }
      let d = (0, p5t.createResource)(i),
        p = {
          resource: d,
          scopeSpans: l,
          schemaUrl: d.schemaUrl
        };
      r.push(p), s = o.next();
    }
    return r;
  }
});