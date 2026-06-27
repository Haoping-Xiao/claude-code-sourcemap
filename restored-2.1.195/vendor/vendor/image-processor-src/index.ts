// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kne
// matched 2.1.88 source: vendor/image-processor-src/index.ts
// class=vendor  jaccard=0.365  score=0.8793  fileCov=0.3842
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: sharp, getNativeModule, default
// [unwrapped __esm module kne] deps: kt, xne, H0e
Tqi = new Set();
function getNativeModule() {
  if (vqi) return sDn;
  vqi = !0;
  try {
    sDn = pes();
  } catch {
    sDn = null;
  }
  return sDn;
}
function sharp(e) {
  let t = [];
  async function n(o) {
    let s = getNativeModule();
    if (!s) throw Error("Native image processor module not available");
    let i = await s.processImage(e);
    if (o) for (let a of t) a(i);
    return i;
  }
  let r = {
    async metadata() {
      let o = await n(!1);
      try {
        return o.metadata();
      } finally {
        o.dispose?.();
      }
    },
    resize(o, s, i) {
      return t.push(a => {
        a.resize(o, s, i);
      }), r;
    },
    jpeg(o) {
      return t.push(s => {
        s.jpeg(o?.quality);
      }), r;
    },
    png(o) {
      return t.push(s => {
        s.png(o);
      }), r;
    },
    webp(o) {
      return t.push(s => {
        s.webp(o?.quality);
      }), r;
    },
    async toBuffer() {
      let o = await n(!0);
      try {
        return await o.toBuffer();
      } finally {
        o.dispose?.();
      }
    }
  };
  return r;
}
var sDn = null,
  vqi = !1,
  A5d;