// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aGc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aGc = E(() => {
  sGc();
});
async function lGc(e, t, n, r) {
  let o = e.slice(0, 7),
    s = await Ogr(o, n, t, r, new Uint8Array());
  return {
    encryptedKey: s.ciphertext,
    iv: ER(s.iv),
    tag: ER(s.tag)
  };
}
async function cGc(e, t, n, r, o) {
  let s = e.slice(0, 7);
  return Ngr(s, t, n, r, o, new Uint8Array());
}