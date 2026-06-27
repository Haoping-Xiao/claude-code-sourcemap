// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DUa
// matched 2.1.88 source: node_modules/@opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js
// class=partial  jaccard=0.1028  score=1  fileCov=0.1028
// note: low-confidence suggestion: node_modules/@opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var DUa = E(() => {
  LUa = R(Nh(), 1);
});
class n5t {
  _config;
  _tracers = new Map();
  _resource;
  _activeSpanProcessor;
  constructor(e = {}) {
    let t = PUa.merge({}, v3n(), vUa(e));
    this._resource = t.resource ?? MUa.defaultResource(), this._config = Object.assign({}, t, {
      resource: this._resource
    });
    let n = [];
    if (e.spanProcessors?.length) n.push(...e.spanProcessors);
    this._activeSpanProcessor = new Dyo(n);
  }
  getTracer(e, t, n) {
    let r = `${e}@${t || ""}:${n?.schemaUrl || ""}`;
    if (!this._tracers.has(r)) this._tracers.set(r, new Lyo({
      name: e,
      version: t,
      schemaUrl: n?.schemaUrl
    }, this._config, this._resource, this._activeSpanProcessor));
    return this._tracers.get(r);
  }
  forceFlush() {
    let e = this._config.forceFlushTimeoutMillis,
      t = this._activeSpanProcessor._spanProcessors.map(n => new Promise(r => {
        let o,
          s = setTimeout(() => {
            r(Error(`Span processor did not completed within timeout period of ${e} ms`)), o = PVe.timeout;
          }, e);
        n.forceFlush().then(() => {
          if (clearTimeout(s), o !== PVe.timeout) o = PVe.resolved, r(o);
        }).catch(i => {
          clearTimeout(s), o = PVe.error, r(i);
        });
      }));
    return new Promise((n, r) => {
      Promise.all(t).then(o => {
        let s = o.filter(i => i !== PVe.resolved);
        if (s.length > 0) r(s);else n();
      }).catch(o => r([o]));
    });
  }
  shutdown() {
    return this._activeSpanProcessor.shutdown();
  }
}
var PUa, MUa, PVe;