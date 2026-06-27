// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pdi
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js
// class=new  jaccard=0.011  score=1  fileCov=0.011
// note: nearest: node_modules/@smithy/core/dist-cjs/submodules/protocols/index.js (0.011); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pdi = E(() => {
  D4r();
  edi();
  ddi();
});
var fdi = async (e = new Uint8Array(), t) => {
  if (e instanceof Uint8Array) return wye.mutate(e);
  if (!e) return wye.mutate(new Uint8Array());
  let n = t.streamCollector(e);
  return wye.mutate(await n);
};