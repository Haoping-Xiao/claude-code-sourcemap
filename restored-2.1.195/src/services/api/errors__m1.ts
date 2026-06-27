// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tP
// matched 2.1.88 source: src/services/api/errors.ts
// class=modified (alt of src/services/api/errors.ts)  jaccard=0.0093  score=0.1211  fileCov=0.01
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tP] deps: PR, uee, TM, oo, e1, er, co, Ao, ste, Ls, UX, ft, Lne, Lx, wr, fn, es, xW, I1n, Jt, kt, fb, z1, Ijt, gSe
((blp = [
  "could not process image",
  "image exceeds",
  "image dimensions exceed",
  "image does not match the provided media type",
  "image cannot be empty",
  "exceeds api limit",
  "images exceed the api limit",
  "unable to resize image",
  "unable to compress image",
  "image file is empty",
]),
  (Slp = [
    "could not process pdf",
    "pdf pages",
    "the pdf specified was not valid",
    "the pdf specified is password protected",
    "pdf cannot be empty",
    "too much media",
  ]));
function Llp(e, t, n, r) {
  var o = e.length,
    s = n + (r ? 1 : -1);
  while (r ? s-- : ++s < o) if (t(e[s], s, e)) return s;
  return -1;
}
var Yaa;
