// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mui
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: @smithy/eventstream-serde-node; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function* $ui(e) {
  let t = false,
    n = false,
    records = [];
  e.on("error", o => {
    if (!t) t = true;
    if (o) throw o;
  }), e.on("data", o => {
    records.push(o);
  }), e.on("end", () => {
    t = true;
  });
  while (!n) {
    let o = await new Promise(s => setTimeout(() => s(records.shift()), 0));
    if (o) yield o;
    n = t && records.length === 0;
  }
}
class $Hn {
  constructor({
    utf8Encoder: e,
    utf8Decoder: t
  }) {
    this.universalMarshaller = new MHn({
      utf8Decoder: t,
      utf8Encoder: e
    });
  }
  deserialize(e, t) {
    let n = typeof e[Symbol.asyncIterator] === "function" ? e : $ui(e);
    return this.universalMarshaller.deserialize(n, t);
  }
  serialize(e, t) {
    return Oui.Readable.from(this.universalMarshaller.serialize(e, t));
  }
}
var Oui;