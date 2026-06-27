// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qQo
// matched 2.1.88 source: node_modules/bignumber.js/bignumber.js
// class=new  jaccard=0.0166  score=0.2643  fileCov=0.0174
// note: nearest: node_modules/bignumber.js/bignumber.js (0.0166); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qQo] deps: FQo
$Gc = require("crypto");
function WGc() {
  let e = Ggr.randomBytes(VQo),
    t = "";
  for (let n = 0; n < VQo; n++) {
    if (n === VQo / 2) t += "-";
    t += GGc[e[n] % GGc.length];
  }
  return t;
}
function qGc() {
  return Yvt.random();
}
function f$m(e) {
  return e.toUpperCase().replace(/[^A-Z0-9]/g, "");
}
function YQo(e, t) {
  return jQo("device_grant", {
    r: e
  }, t, swt);
}
async function XQo(e, t) {
  let n = await GQo("device_grant", e, t);
  return n?.r ? n.r : null;
}
function JQo(e) {
  return `device:dc:${Ggr.createHash("sha256").update(e).digest("hex")}`;
}
function Wgr(e) {
  return `device:uc:${f$m(e)}`;
}
function qgr(e, t) {
  return `rl:${e}:${t}`;
}
var Ggr,
  zQo = "urn:ietf:params:oauth:grant-type:device_code",
  KQo = 5,
  swt = 600,
  GGc = "BCDFGHJKMNPQRSTVWXYZ",
  VQo = 8;