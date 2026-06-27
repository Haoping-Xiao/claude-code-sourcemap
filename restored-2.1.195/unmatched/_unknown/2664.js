// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Xi
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js
// class=new  jaccard=0.0164  score=0.2264  fileCov=0.0174
// note: nearest: node_modules/@smithy/core/dist-cjs/submodules/schema/index.js (0.0164); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
class $to {
  constructor() {
    this.byName = new Map(), this.bySentinel = new Map();
  }
  register(e, t, n) {
    let r = this.byName.get(e);
    if (r !== void 0) return r.realValue = t, r.injectHosts = n, r.sentinel;
    let o = OXi + NXi.randomUUID(),
      s = {
        name: e,
        sentinel: o,
        realValue: t,
        injectHosts: n
      };
    return this.byName.set(e, s), this.bySentinel.set(o, s), o;
  }
  lookupReal(e) {
    return this.bySentinel.get(e)?.realValue;
  }
  *entries() {
    for (let e of this.bySentinel.values()) yield [e.sentinel, e.realValue];
  }
  get size() {
    return this.bySentinel.size;
  }
  clear() {
    this.byName.clear(), this.bySentinel.clear();
  }
  substituteInHeaders(e, t, n) {
    if (this.bySentinel.size === 0) return;
    for (let [r, o] of Object.entries(e)) {
      if (o === void 0) continue;
      if (Array.isArray(o)) for (let s = 0; s < o.length; s++) o[s] = this.substituteInString(o[s], t, n);else e[r] = this.substituteInString(o, t, n);
    }
  }
  substituteInString(e, t, n) {
    if (!e.includes(OXi)) return e;
    let r = e;
    for (let o of this.bySentinel.values()) {
      if (!r.includes(o.sentinel)) continue;
      if (!o.injectHosts.some(s => n(t, s))) continue;
      r = r.split(o.sentinel).join(o.realValue);
    }
    return r;
  }
}
var NXi,
  OXi = "fake_value_";