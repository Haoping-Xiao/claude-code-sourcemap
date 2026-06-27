// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bBl
// matched 2.1.88 source: src/utils/editor.ts
// class=partial  jaccard=0.21  score=1  fileCov=0.21
// note: low-confidence suggestion: src/utils/editor.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bBl = E(() => {
  Ye();
  Lo();
  EOf = R(lt(), 1), gBl = require("os"), hBl = require("path"), _Bl = R(se(), 1);
});
function AOf(e) {
  return !!zV(e);
}
function SBl(e) {
  let t = e.trim().split(/\s+/);
  for (let n of t) {
    if (/^\/[^/]+$/.test(n)) continue;
    if (n.startsWith("-")) continue;
    let r = Rnr.basename(n);
    if (HOf.has(r.toLowerCase())) continue;
    return r;
  }
  return Rnr.basename(t[0] ?? e);
}
function QNo(e) {
  let t = SBl(e);
  return TOf.find(n => t.includes(n));
}
function COf(e, t, n) {
  if (!n) return [t];
  if (wOf.has(e)) return ["-g", `${t}:${n}`];
  if (e === "subl") return [`${t}:${n}`];
  return [t];
}
function EBl(e, t) {
  let n = $q();
  if (!n) return !1;
  let r = n.split(" "),
    o = r[0] ?? n,
    s = r.slice(1),
    i = QNo(n);
  if (i) {
    let c = COf(i, e, t),
      u = {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0
      },
      d;
    return d = Lnr.spawn(o, [...s, ...c], u), d.on("error", p => T(`editor spawn failed: ${p}`, {
      level: "error"
    })), d.unref(), !0;
  }
  let a = Cu.get(process.stdout);
  if (!a) return !1;
  let l = t && vOf.test(Rnr.basename(o));
  a.enterAlternateScreen();
  try {
    let c = {
        stdio: "inherit"
      },
      u;
    {
      let d = [...s, ...(l ? [`+${t}`, e] : [e])];
      u = Lnr.spawnSync(o, d, c);
    }
    if (u.error) return T(`editor spawn failed: ${u.error}`, {
      level: "error"
    }), !1;
    return !0;
  } finally {
    a.exitAlternateScreen();
  }
}
function $q() {
  return fy()?.editor ?? IOf();
}
function ZNo() {
  let e = $q();
  if (!e) return;
  let t = SBl(e);
  return t && t.length <= 8 ? t : void 0;
}
var Lnr, Rnr, HOf, TOf, vOf, wOf, IOf;