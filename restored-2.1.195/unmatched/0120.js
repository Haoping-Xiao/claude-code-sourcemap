// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $S
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $S = E(() => {
  Fns = new RegExp(`^${Uns}$`), ozc = new RegExp(`^a(?:${Uns}-)?[0-9a-f]{16}$`);
});
function Ywt(e, t) {
  let n = Buffer.from(t.replace(/-/g, ""), "hex"),
    r = qon.createHash("sha1").update(n).update(Buffer.from(e, "utf8")).digest();
  r[6] = r[6] & 15 | 80, r[8] = r[8] & 63 | 128;
  let o = r.subarray(0, 16).toString("hex");
  return `${o.slice(0, 8)}-${o.slice(8, 12)}-${o.slice(12, 16)}-${o.slice(16, 20)}-${o.slice(20, 32)}`;
}
function yD(e) {
  if (typeof e !== "string") return null;
  return szc.test(e) ? e : null;
}
function rM(e) {
  if (e && !Fns.test(e)) e = e.replace(/[^\w-]/g, "").slice(0, 63);
  let t = qon.randomBytes(8).toString("hex");
  return e ? `a${e}-${t}` : `a${t}`;
}
var qon, szc;