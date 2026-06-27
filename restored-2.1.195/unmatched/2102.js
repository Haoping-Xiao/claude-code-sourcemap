// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sIi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sIi = Q(exn => {
  Object.defineProperty(exn, "__esModule", {
    value: !0
  });
  exn.W3CBaggagePropagator = void 0;
  var T6r = qi(),
    wDd = O1t(),
    i3e = A6r(),
    v6r = H6r();
  class oIi {
    inject(e, t, n) {
      let r = T6r.propagation.getBaggage(e);
      if (!r || (0, wDd.isTracingSuppressed)(e)) return;
      let o = (0, v6r.getKeyPairs)(r).filter(i => i.length <= i3e.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS).slice(0, i3e.BAGGAGE_MAX_NAME_VALUE_PAIRS),
        s = (0, v6r.serializeKeyPairs)(o);
      if (s.length > 0) n.set(t, i3e.BAGGAGE_HEADER, s);
    }
    extract(e, t, n) {
      let r = n.get(t, i3e.BAGGAGE_HEADER),
        o = Array.isArray(r) ? r.join(i3e.BAGGAGE_ITEMS_SEPARATOR) : r;
      if (!o) return e;
      let s = {};
      if (o.length === 0) return e;
      if (o.split(i3e.BAGGAGE_ITEMS_SEPARATOR).forEach(a => {
        let l = (0, v6r.parsePairKeyValue)(a);
        if (l) {
          let c = {
            value: l.value
          };
          if (l.metadata) c.metadata = l.metadata;
          s[l.key] = c;
        }
      }), Object.entries(s).length === 0) return e;
      return T6r.propagation.setBaggage(e, T6r.propagation.createBaggage(s));
    }
    fields() {
      return [i3e.BAGGAGE_HEADER];
    }
  }
  exn.W3CBaggagePropagator = oIi;
});