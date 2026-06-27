// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m$t
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var m$t = E(() => {
  wxe();
  Cxe();
  JR();
  oT();
  Bye();
  C0(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
function Vrt(e, t) {
  if (!e) throw ts(Rje);
  try {
    let n = t(e);
    return JSON.parse(n);
  } catch (n) {
    throw ts(_xe);
  }
}
function xle(e) {
  if (!e) throw ts(_xe);
  let t = e.split(Lye.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: t[0],
    utid: t.length < 2 ? vo.EMPTY_STRING : t[1]
  };
}