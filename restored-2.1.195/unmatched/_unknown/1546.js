// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o4r
// matched 2.1.88 source: node_modules/@smithy/signature-v4/dist-cjs/index.js
// class=new  jaccard=0.0261  score=1  fileCov=0.0261
// note: nearest: node_modules/@smithy/signature-v4/dist-cjs/index.js (0.0261); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var o4r = E(() => {
  zjr();
  _je();
});
var pMt = async ({
  headers: e,
  body: t
}, n) => {
  for (let r of Object.keys(e)) if (r.toLowerCase() === dMt) return e[r];
  if (t == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";else if (typeof t === "string" || ArrayBuffer.isView(t) || Kjr(t)) {
    let r = new n();
    return r.update(lxe(t)), gte(await r.digest());
  }
  return Tci;
};