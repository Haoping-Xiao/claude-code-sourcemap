// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kSr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/core/streaming.mjs
// class=partial  jaccard=0.1507  score=1  fileCov=0.1507
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/core/streaming.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kSr = E(() => {
  $ge();
  OV = new WeakMap(), NV = new WeakMap();
  swe.NEWLINE_CHARS = new Set([`
`, "\r"]);
  swe.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
});
async function* Yzc(e, t) {
  if (!e.body) {
    if (t.abort(), typeof globalThis.navigator < "u" && globalThis.navigator.product === "ReactNative") throw new ui("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api");
    throw new ui("Attempted to iterate over a response with no body");
  }
  let n = new Sos(),
    r = new swe(),
    o = JCt(e.body);
  for await (let s of Xzc(o)) for (let i of r.decode(s)) {
    let a = n.decode(i);
    if (a) yield a;
  }
  for (let s of r.flush()) {
    let i = n.decode(s);
    if (i) yield i;
  }
}
async function* Xzc(e) {
  let t = new Uint8Array();
  for await (let n of e) {
    if (n == null) continue;
    let r = n instanceof ArrayBuffer ? new Uint8Array(n) : typeof n === "string" ? vJe(n) : n,
      o = new Uint8Array(t.length + r.length);
    o.set(t), o.set(r, t.length), t = o;
    let s;
    while ((s = bos(t)) !== -1) yield t.slice(0, s), t = t.slice(s);
  }
  if (t.length > 0) yield t;
}
class Sos {
  constructor() {
    this.event = null, this.data = [], this.chunks = [];
  }
  decode(e) {
    if (e.endsWith("\r")) e = e.substring(0, e.length - 1);
    if (!e) {
      if (!this.event && !this.data.length) return null;
      let o = {
        event: this.event,
        data: this.data.join(`
`),
        raw: this.chunks
      };
      return this.event = null, this.data = [], this.chunks = [], o;
    }
    if (this.chunks.push(e), e.startsWith(":")) return null;
    let [t, n, r] = Jzc(e, ":");
    if (r.startsWith(" ")) r = r.substring(1);
    if (t === "event") this.event = r;else if (t === "data") this.data.push(r);
    return null;
  }
}
function Jzc(e, t) {
  let n = e.indexOf(t);
  if (n !== -1) return [e.substring(0, n), t, e.substring(n + t.length)];
  return [e, "", ""];
}
var nIt, F2;