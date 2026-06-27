// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Xi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $Xi = E(() => {
  PXi();
  Blt();
});
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