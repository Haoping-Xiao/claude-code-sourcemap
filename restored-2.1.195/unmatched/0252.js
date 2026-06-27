// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mxt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mxt = E(() => {
  uan();
});
function Kr(e, t, n) {
  function r(a, l) {
    var c;
    Object.defineProperty(a, "_zod", {
      value: a._zod ?? {},
      enumerable: !1
    }), (c = a._zod).traits ?? (c.traits = new Set()), a._zod.traits.add(e), t(a, l);
    for (let u in i.prototype) if (!(u in a)) Object.defineProperty(a, u, {
      value: i.prototype[u].bind(a)
    });
    a._zod.constr = i, a._zod.def = l;
  }
  let o = n?.Parent ?? Object;
  class s extends o {}
  Object.defineProperty(s, "name", {
    value: e
  });
  function i(a) {
    var l;
    let c = n?.Parent ? new s() : this;
    r(c, a), (l = c._zod).deferred ?? (l.deferred = []);
    for (let u of c._zod.deferred) u();
    return c;
  }
  return Object.defineProperty(i, "init", {
    value: r
  }), Object.defineProperty(i, Symbol.hasInstance, {
    value: a => {
      if (n?.Parent && a instanceof n.Parent) return !0;
      return a?._zod?.traits?.has(e);
    }
  }), Object.defineProperty(i, "name", {
    value: e
  }), i;
}
function h0(e) {
  if (e) Object.assign(gxt, e);
  return gxt;
}
var yQe, dan, nhe, gxt;