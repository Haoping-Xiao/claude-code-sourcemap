// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lEo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lEo = Q(ope => {
  Object.defineProperty(ope, "__esModule", {
    value: !0
  });
  ope.parseKeyPairsIntoRecord = ope.parsePairKeyValue = ope.getKeyPairs = ope.serializeKeyPairs = void 0;
  var xqp = qi(),
    Gmt = aEo();
  function kqp(e) {
    return e.reduce((t, n) => {
      let r = `${t}${t !== "" ? Gmt.BAGGAGE_ITEMS_SEPARATOR : ""}${n}`;
      return r.length > Gmt.BAGGAGE_MAX_TOTAL_LENGTH ? t : r;
    }, "");
  }
  ope.serializeKeyPairs = kqp;
  function Rqp(e) {
    return e.getAllEntries().map(([t, n]) => {
      let r = `${encodeURIComponent(t)}=${encodeURIComponent(n.value)}`;
      if (n.metadata !== void 0) r += Gmt.BAGGAGE_PROPERTIES_SEPARATOR + n.metadata.toString();
      return r;
    });
  }
  ope.getKeyPairs = Rqp;
  function Rqa(e) {
    if (!e) return;
    let t = e.indexOf(Gmt.BAGGAGE_PROPERTIES_SEPARATOR),
      n = t === -1 ? e : e.substring(0, t),
      r = n.indexOf(Gmt.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (r <= 0) return;
    let o = n.substring(0, r).trim(),
      s = n.substring(r + 1).trim();
    if (!o || !s) return;
    let i, a;
    try {
      i = decodeURIComponent(o), a = decodeURIComponent(s);
    } catch {
      return;
    }
    let l;
    if (t !== -1 && t < e.length - 1) {
      let c = e.substring(t + 1);
      l = (0, xqp.baggageEntryMetadataFromString)(c);
    }
    return {
      key: i,
      value: a,
      metadata: l
    };
  }
  ope.parsePairKeyValue = Rqa;
  function Lqp(e) {
    let t = {};
    if (typeof e === "string" && e.length > 0) e.split(Gmt.BAGGAGE_ITEMS_SEPARATOR).forEach(n => {
      let r = Rqa(n);
      if (r !== void 0 && r.value.length > 0) t[r.key] = r.value;
    });
    return t;
  }
  ope.parseKeyPairsIntoRecord = Lqp;
});