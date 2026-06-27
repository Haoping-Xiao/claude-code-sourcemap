// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H6r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var H6r = Q(Zle => {
  Object.defineProperty(Zle, "__esModule", {
    value: true
  });
  Zle.parseKeyPairsIntoRecord = Zle.parsePairKeyValue = Zle.getKeyPairs = Zle.serializeKeyPairs = void 0;
  var ADd = qi(),
    s3e = A6r();
  function HDd(e) {
    return e.reduce((t, n) => {
      let r = `${t}${t !== "" ? s3e.BAGGAGE_ITEMS_SEPARATOR : ""}${n}`;
      return r.length > s3e.BAGGAGE_MAX_TOTAL_LENGTH ? t : r;
    }, "");
  }
  Zle.serializeKeyPairs = HDd;
  function TDd(e) {
    return e.getAllEntries().map(([t, n]) => {
      let r = `${encodeURIComponent(t)}=${encodeURIComponent(n.value)}`;
      if (n.metadata !== void 0) r += s3e.BAGGAGE_PROPERTIES_SEPARATOR + n.metadata.toString();
      return r;
    });
  }
  Zle.getKeyPairs = TDd;
  function rIi(e) {
    let t = e.split(s3e.BAGGAGE_PROPERTIES_SEPARATOR);
    if (t.length <= 0) return;
    let n = t.shift();
    if (!n) return;
    let r = n.indexOf(s3e.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (r <= 0) return;
    let o = decodeURIComponent(n.substring(0, r).trim()),
      s = decodeURIComponent(n.substring(r + 1).trim()),
      i;
    if (t.length > 0) i = (0, ADd.baggageEntryMetadataFromString)(t.join(s3e.BAGGAGE_PROPERTIES_SEPARATOR));
    return {
      key: o,
      value: s,
      metadata: i
    };
  }
  Zle.parsePairKeyValue = rIi;
  function vDd(e) {
    let t = {};
    if (typeof e === "string" && e.length > 0) e.split(s3e.BAGGAGE_ITEMS_SEPARATOR).forEach(n => {
      let r = rIi(n);
      if (r !== void 0 && r.value.length > 0) t[r.key] = r.value;
    });
    return t;
  }
  Zle.parseKeyPairsIntoRecord = vDd;
});