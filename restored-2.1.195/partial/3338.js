// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yde
// matched 2.1.88 source: node_modules/chokidar/esm/index.js
// class=partial  jaccard=0.0754  score=0.1831  fileCov=0.1136
// note: low-confidence suggestion: node_modules/chokidar/esm/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yde = E(() => {
  gb();
  je();
  At();
  dn();
  NDa();
  ypt();
  FDa();
  Oqe = $kp(), IDe = Oqe.get, kpt = Oqe.getStatus, jDa = Oqe.isConnected, GDa = Oqe.waitForInitialization, WDa = Oqe.initialize, I2n = Oqe.reinitialize, qDa = Oqe.shutdown;
});
function Nqe() {
  if (!lu()) return !1;
  return at("tengu_marble_lark", !1);
}
function x2n() {
  return mm();
}
function k2n(e) {
  return e.normalize("NFC").replace(/[. ]+$/, "").toLowerCase();
}
function oEe(e) {
  let t = e.split("/");
  if (t.length === 0) return !0;
  if (t.some(n => n.startsWith("."))) return !0;
  return hmo.includes(k2n(t[0]));
}
async function Okp(e) {
  let t;
  try {
    t = await QKr();
  } catch (n) {
    let r = on(n);
    if (r === "ENOENT" || r === "ENOTDIR") return !0;
    return !1;
  }
  if (e === t) return !0;
  return e.startsWith(t + gJ.sep);
}
async function R2n(e) {
  if (JKr(e), oEe(e)) throw new Yw(`Key targets an excluded personal-memory subtree: "${e}"`);
  let t = x2n(),
    n = gJ.join(t, e),
    r = gJ.resolve(n);
  if (!r.startsWith(t)) throw new Yw(`Key escapes personal memory directory: "${e}"`);
  let o = await eYr(r);
  if (!(await Okp(o))) throw new Yw(`Key escapes personal memory directory via symlink: "${e}"`);
  for (let s of await Nkp()) if (o === s || o.startsWith(s + gJ.sep)) throw new Yw(`Key resolves into an excluded subtree (${hmo.join("/, ")}/): "${e}"`);
  return r;
}
async function Nkp() {
  let e = hmo.map(n => n === "team" ? cT().replace(/[/\\]+$/, "") : gJ.join(mm(), n)),
    t = [];
  for (let n of e) try {
    t.push(await VDa.realpath(n));
  } catch {}
  return t;
}
function zDa(e) {
  let t = gJ.resolve(e).normalize("NFC").toLowerCase(),
    n = x2n().normalize("NFC").toLowerCase();
  if (t + gJ.sep !== n && !t.startsWith(n)) return !1;
  if (t + gJ.sep === n) return !1;
  let r = t.slice(n.length).replaceAll(gJ.sep, "/");
  return !oEe(r);
}
var VDa, gJ, hmo;