// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bBl
// matched 2.1.88 source: src/utils/editor.ts
// class=modified  jaccard=0.2783  score=0.7829  fileCov=0.3016
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bBl] deps: Ye, Lo
((EOf = R(lt(), 1)), (gBl = require("os")), (hBl = require("path")), (_Bl = R(se(), 1)));
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
  return TOf.find((n) => t.includes(n));
}
function COf(e, t, n) {
  if (!n) return [t];
  if (wOf.has(e)) return ["-g", `${t}:${n}`];
  if (e === "subl") return [`${t}:${n}`];
  return [t];
}
function openFileInExternalEditor(e, t) {
  let n = $q();
  if (!n) return false;
  let r = n.split(" "),
    o = r[0] ?? n,
    s = r.slice(1),
    i = QNo(n);
  if (i) {
    let c = COf(i, e, t),
      u = {
        detached: true,
        stdio: "ignore",
        windowsHide: true,
      },
      d;
    return (
      (d = Lnr.spawn(o, [...s, ...c], u)),
      d.on("error", (p) =>
        T(`editor spawn failed: ${p}`, {
          level: "error",
        }),
      ),
      d.unref(),
      true
    );
  }
  let a = Cu.get(process.stdout);
  if (!a) return false;
  let l = t && vOf.test(Rnr.basename(o));
  a.enterAlternateScreen();
  try {
    let c = {
        stdio: "inherit",
      },
      u;
    {
      let d = [...s, ...(l ? [`+${t}`, e] : [e])];
      u = Lnr.spawnSync(o, d, c);
    }
    if (u.error)
      return (
        T(`editor spawn failed: ${u.error}`, {
          level: "error",
        }),
        false
      );
    return true;
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
