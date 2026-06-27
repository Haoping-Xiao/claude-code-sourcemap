// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kne
// matched 2.1.88 source: vendor/image-processor-src/index.ts
// class=vendor  jaccard=0.4784  score=1  fileCov=0.4784
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var kne = E(() => {
  kt();
  xne();
  H0e();
  Tqi = new Set();
});
var dQr = {};
_t(dQr, {
  sharp: () => sharp,
  getNativeModule: () => getNativeModule,
  default: () => A5d
});
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