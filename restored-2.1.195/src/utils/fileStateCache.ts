// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kso
// matched 2.1.88 source: src/utils/fileStateCache.ts
// class=modified  jaccard=0.2755  score=0.5211  fileCov=0.3688
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module kso] (exports=Zxy, module=Csa)
var Zxy = {};
var Csa = {
  exports: Zxy,
};
var vsa = Tsa(),
  kip = ujt();
function wsa(e, t, n = false) {
  if (t && (t.windows === null || t.windows === void 0))
    t = {
      ...t,
      windows: kip.isWindows(),
    };
  return vsa(e, t, n);
}
Object.assign(wsa, vsa);
Csa.exports = wsa;
function Isa(e) {
  return Bun.hash(e).toString(36);
}
function Uue(e, t) {
  if (e.contentHash !== void 0) return e.contentHash === Isa(t);
  return e.content === t;
}
class xsa {
  cache;
  constructor(e, t) {
    this.cache = new bG({
      max: e,
      maxSize: t,
      sizeCalculation: (n) => Math.max(1, Buffer.byteLength(n.content)),
    });
  }
  get(e) {
    return this.cache.get(fjt.normalize(e));
  }
  set(e, t) {
    let n = fjt.normalize(e),
      r = this.cache.get(n),
      o = t.keepContent ?? r?.keepContent,
      s = t.contentHash ?? Isa(t.content),
      i = t.contentLength ?? t.content.length,
      a = o && t.content === "" && s === r?.contentHash && r.content ? r.content : t.content,
      l = o || Buffer.byteLength(a) <= Lip ? a : "";
    return (
      this.cache.set(n, {
        ...t,
        keepContent: o,
        contentHash: s,
        contentLength: i,
        content: l,
      }),
      this
    );
  }
  has(e) {
    return this.cache.has(fjt.normalize(e));
  }
  delete(e) {
    return this.cache.delete(fjt.normalize(e));
  }
  clear() {
    this.cache.clear();
  }
  get size() {
    return this.cache.size;
  }
  get max() {
    return this.cache.max;
  }
  get maxSize() {
    return this.cache.maxSize;
  }
  get calculatedSize() {
    return this.cache.calculatedSize;
  }
  keys() {
    return this.cache.keys();
  }
  entries() {
    return this.cache.entries();
  }
  dump() {
    return this.cache.dump();
  }
  load(e) {
    this.cache.load(e);
  }
}
function QU(e, t = Rip) {
  return new xsa(e, t);
}
function mjt(e) {
  return Object.fromEntries(e.entries());
}
function VRe(e) {
  return Array.from(e.keys());
}
function aSe(e) {
  let t = QU(e.max, e.maxSize);
  return (t.load(e.dump()), t);
}
function Bct(e, t) {
  let n = aSe(e);
  for (let [r, o] of t.entries()) {
    let s = n.get(r);
    if (!s || o.timestamp > s.timestamp) n.set(r, o);
  }
  return n;
}
var fjt,
  V1 = 5000,
  Rip = 26214400,
  Lip = 4096;
