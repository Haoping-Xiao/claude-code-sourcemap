// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OXo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var OXo = E(() => {
  wm();
  Mvt = sDm;
});
var iDm = (e, t) => {
    if (!(e instanceof Uint8Array)) throw TypeError("First argument must be a buffer");
    if (!(t instanceof Uint8Array)) throw TypeError("Second argument must be a buffer");
    if (e.length !== t.length) throw TypeError("Input buffers must have the same length");
    let n = e.length,
      r = 0,
      o = -1;
    while (++o < n) r |= e[o] ^ t[o];
    return r === 0;
  },
  r2c;