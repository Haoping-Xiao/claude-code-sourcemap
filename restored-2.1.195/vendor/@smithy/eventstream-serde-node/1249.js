// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mKs
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: @smithy/eventstream-serde-node; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function* gKs(e) {
  let t = false,
    n = false,
    r = [];
  e.on("error", o => {
    if (!t) t = true;
    if (o) throw o;
  }), e.on("data", o => {
    r.push(o);
  }), e.on("end", () => {
    t = true;
  });
  while (!n) {
    let o = await new Promise(s => setTimeout(() => s(r.shift()), 0));
    if (o) yield o;
    n = t && r.length === 0;
  }
}
class vBr {
  universalMarshaller;
  constructor({
    utf8Encoder: e,
    utf8Decoder: t
  }) {
    this.universalMarshaller = new TBr({
      utf8Decoder: t,
      utf8Encoder: e
    });
  }
  deserialize(e, t) {
    let n = typeof e[Symbol.asyncIterator] === "function" ? e : gKs(e);
    return this.universalMarshaller.deserialize(n, t);
  }
  serialize(e, t) {
    return hKs.Readable.from(this.universalMarshaller.serialize(e, t));
  }
}
var hKs;