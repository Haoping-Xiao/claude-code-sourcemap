// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hRa
// matched 2.1.88 source: src/utils/computerUse/executor.ts
// class=modified  jaccard=0.1499  score=0.8359  fileCov=0.1544
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: unhideComputerUseApps, createCliExecutor
// [unwrapped __commonJS module hRa] (exports=zXy, module=gRa)
var zXy = {};
var gRa = {
  exports: zXy,
};
var VXy = require("path");
gRa.exports = {
  isSupported: false,
};
function fJ() {
  if (ifo) return ifo;
  let e = hRa();
  if (!e.isSupported) throw Error("@ant/computer-use-input is not supported on this platform");
  return (ifo = e);
}
var ifo;
function lfo(e, t, n) {
  let r = Math.round(e * n),
    o = Math.round(t * n);
  return MFn(r, o, Fpo);
}
async function cfo() {
  let { stdout: e, code: t } = await $n("pbpaste", [], {
    useCwd: false,
  });
  if (t !== 0) throw Error(`pbpaste exited with code ${t}`);
  return e;
}
async function ufo(e) {
  let { code: t } = await $n("pbcopy", [], {
    input: e,
    useCwd: false,
  });
  if (t !== 0) throw Error(`pbcopy exited with code ${t}`);
}
function _Ra(e) {
  if (e.length !== 1) return false;
  let t = e[0].toLowerCase();
  return t === "escape" || t === "esc";
}
async function cpt(e, t, n) {
  (await e.moveMouse(t, n, false), await Nn(dfo));
}
async function bRa(e, t) {
  let n;
  while ((n = t.pop()) !== void 0)
    try {
      await e.key(n, "release");
    } catch {}
}
async function zIp(e, t, n) {
  let r = [];
  try {
    for (let o of t) (await e.key(o, "press"), r.push(o));
    return await n();
  } finally {
    await bRa(e, r);
  }
}
async function KIp(e, t) {
  let n;
  try {
    n = await cfo();
  } catch {
    T("[computer-use] pbpaste before paste failed; proceeding without restore");
  }
  try {
    if ((await ufo(t), (await cfo()) !== t)) throw Error("Clipboard write did not round-trip.");
    (await e.keys(["command", "v"]), await Nn(100));
  } finally {
    if (typeof n === "string")
      try {
        await ufo(n);
      } catch {
        T("[computer-use] clipboard restore after paste failed");
      }
  }
}
async function YIp(e, t, n, r) {
  if (!r) {
    await cpt(e, t, n);
    return;
  }
  let o = await e.mouseLocation(),
    s = t - o.x,
    i = n - o.y,
    a = Math.hypot(s, i);
  if (a < 1) return;
  let l = Math.min(a / 2000, 0.5);
  if (l < 0.03) {
    await cpt(e, t, n);
    return;
  }
  let c = 60,
    u = 1000 / c,
    d = Math.floor(l * c);
  for (let p = 1; p <= d; p++) {
    let f = p / d,
      m = 1 - Math.pow(1 - f, 3);
    if ((await e.moveMouse(Math.round(o.x + s * m), Math.round(o.y + i * m), false), p < d))
      await Nn(u);
  }
  await Nn(dfo);
}
function createCliExecutor(e) {
  throw Error("createCliExecutor called on linux. Computer control is macOS-only.");
}
async function unhideComputerUseApps(e) {
  if (e.length === 0) return;
  await U4().apps.unhide([...e]);
}
var afo = 0.75,
  yRa = 5000,
  dfo = 50;
