// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mui
// matched 2.1.88 source: node_modules/@smithy/eventstream-serde-node/dist-cjs/index.js
// class=partial  jaccard=0.2278  score=0.7951  fileCov=0.242
// note: low-confidence suggestion: node_modules/@smithy/eventstream-serde-node/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function* $ui(e) {
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