// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tTo
// matched 2.1.88 source: src/utils/nativeInstaller/installer.ts
// class=new  jaccard=0.0099  score=1  fileCov=0.0099
// note: nearest: src/utils/nativeInstaller/installer.ts (0.0099); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tTo = E(() => {
  wb();
  QJa();
  nQa();
  lQa();
  mQa();
  yQa();
  AQa();
  TQa();
  r8n = R(rt(), 1), eTo = R(se(), 1);
});
function a8n() {
  if (!dm()) return !1;
  let e = V9e.join(Ore(), "claude", "versions") + V9e.sep;
  return process.execPath.startsWith(e);
}
function CF(e = {}) {
  if (!e.pinToCurrentBinary && a8n()) return {
    cmd: V9e.join(Sde(), "claude"),
    prefixArgs: []
  };
  if (dm()) return {
    cmd: process.execPath,
    prefixArgs: []
  };
  let t = process.argv[1];
  if (!t) return {
    cmd: process.execPath,
    prefixArgs: []
  };
  return {
    cmd: process.execPath,
    prefixArgs: [t]
  };
}
async function l8n() {
  let e = V9e.join(Ore(), "claude", "versions"),
    t;
  try {
    t = await s8n.readdir(e);
  } catch {
    return null;
  }
  let n = t.filter(r => !/\.tmp\.\d+\.\d+$/.test(r) && i8n.valid(r)).sort(i8n.rcompare);
  for (let r of n) {
    let o = V9e.join(e, r);
    try {
      let s = await s8n.stat(o);
      if (s.isFile() && s.size > 0) return o;
    } catch {}
  }
  return null;
}
var s8n, V9e, i8n;