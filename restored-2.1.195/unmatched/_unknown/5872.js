// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rB
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rB = E(() => {
  Ru = crypto;
});
var rDm = async (e, t) => {
    let n = `SHA-${e.slice(-3)}`;
    return new Uint8Array(await Ru.subtle.digest(n, t));
  },
  $mr;