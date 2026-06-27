// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yde
// matched 2.1.88 source: src/utils/nativeInstaller/installer.ts
// class=new  jaccard=0.0138  score=0.2627  fileCov=0.0144
// note: nearest: src/utils/nativeInstaller/installer.ts (0.0138); dir inferred from dep-graph -> utils; 0 renamed
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
  if (!lu()) return false;
  return at("tengu_marble_lark", false);
}
function x2n() {
  return mm();
}
function k2n(e) {
  return e.normalize("NFC").replace(/[. ]+$/, "").toLowerCase();
}
function oEe(e) {
  let t = e.split("/");
  if (t.length === 0) return true;
  if (t.some(n => n.startsWith("."))) return true;
  return hmo.includes(k2n(t[0]));
}
async function Okp(e) {
  let t;
  try {
    t = await QKr();
  } catch (n) {
    let r = on(n);
    if (r === "ENOENT" || r === "ENOTDIR") return true;
    return false;
  }
  if (e === t) return true;
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
  if (t + gJ.sep !== n && !t.startsWith(n)) return false;
  if (t + gJ.sep === n) return false;
  let r = t.slice(n.length).replaceAll(gJ.sep, "/");
  return !oEe(r);
}
var VDa, gJ, hmo;