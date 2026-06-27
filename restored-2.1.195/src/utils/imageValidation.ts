// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I1n
// matched 2.1.88 source: src/utils/imageValidation.ts
// class=modified  jaccard=0.4526  score=0.822  fileCov=0.5017
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var I1n = E(() => {
  kt();
  es();
  eut = class eut extends Error {
    constructor(e, t) {
      let n,
        r = e[0];
      if (e.length === 1 && r)
        n = `Image base64 size (${Ra(r.size)}) exceeds API limit (${Ra(t)}). Please resize the image before sending.`;
      else
        n =
          `${e.length} images exceed the API limit (${Ra(t)}): ` +
          e.map((o) => `Image ${o.index}: ${Ra(o.size)}`).join(", ") +
          ". Please resize these images before sending.";
      super(n);
      this.name = "ImageSizeError";
    }
  };
});
function wio(e) {
  if (wnt()) return x7s(e);
  return e;
}
function tut(e) {
  return e || wnt();
}
function Haa(e) {
  return wnt() && e.status === 429;
}
