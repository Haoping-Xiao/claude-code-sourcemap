// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UNr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UNr = E(() => {
  c8s();
  u8s();
  d8s();
  p8s();
});
var f8s = e => (t, n) => async r => {
    let {
      request: o
    } = r;
    if (!L2e.isInstance(o)) return t(r);
    return e.eventStreamPayloadHandler.handle(t, r, n);
  },
  m8s;