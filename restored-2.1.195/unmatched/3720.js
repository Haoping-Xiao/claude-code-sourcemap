// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dqa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dqa = Q(w5n => {
  Object.defineProperty(w5n, "__esModule", {
    value: !0
  });
  w5n.W3CBaggagePropagator = void 0;
  var cEo = qi(),
    Dqp = _qt(),
    o9e = aEo(),
    uEo = lEo();
  class Lqa {
    inject(e, t, n) {
      let r = cEo.propagation.getBaggage(e);
      if (!r || (0, Dqp.isTracingSuppressed)(e)) return;
      let o = (0, uEo.getKeyPairs)(r).filter(i => i.length <= o9e.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS).slice(0, o9e.BAGGAGE_MAX_NAME_VALUE_PAIRS),
        s = (0, uEo.serializeKeyPairs)(o);
      if (s.length > 0) n.set(t, o9e.BAGGAGE_HEADER, s);
    }
    extract(e, t, n) {
      let r = n.get(t, o9e.BAGGAGE_HEADER),
        o = Array.isArray(r) ? r.join(o9e.BAGGAGE_ITEMS_SEPARATOR) : r;
      if (!o) return e;
      let s = {};
      if (o.length === 0) return e;
      if (o.split(o9e.BAGGAGE_ITEMS_SEPARATOR).forEach(a => {
        let l = (0, uEo.parsePairKeyValue)(a);
        if (l) {
          let c = {
            value: l.value
          };
          if (l.metadata) c.metadata = l.metadata;
          s[l.key] = c;
        }
      }), Object.entries(s).length === 0) return e;
      return cEo.propagation.setBaggage(e, cEo.propagation.createBaggage(s));
    }
    fields() {
      return [o9e.BAGGAGE_HEADER];
    }
  }
  w5n.W3CBaggagePropagator = Lqa;
});