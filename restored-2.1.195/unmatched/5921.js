// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lJo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lJo = E(() => {
  ogr();
});
var DDm = async (e, t, n) => {
    let r = await Cnn(e, t, "sign");
    Y7e(e, r);
    let o = await Ru.subtle.sign(wnn(e, r.algorithm), r, n);
    return new Uint8Array(o);
  },
  tjc;