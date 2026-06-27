// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sFn
// matched 2.1.88 source: src/utils/jetbrains.ts
// class=modified (alt of src/utils/jetbrains.ts)  jaccard=0.3061  score=0.9748  fileCov=0.3086
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var sFn = E(() => {
  nJe();
  XIa();
  mqe = iwp;
});
function lwp(e) {
  let t = x3t.homedir(),
    n = [],
    r = JIa[e.toLowerCase()];
  if (!r) return n;
  let o = process.env.APPDATA || eN.join(t, "AppData", "Roaming"),
    s = process.env.LOCALAPPDATA || eN.join(t, "AppData", "Local");
  switch (x3t.platform()) {
    case "darwin":
      if (
        (n.push(
          eN.join(t, "Library", "Application Support", "JetBrains"),
          eN.join(t, "Library", "Application Support"),
        ),
        e.toLowerCase() === "androidstudio")
      )
        n.push(eN.join(t, "Library", "Application Support", "Google"));
      break;
    case "win32":
      if (
        (n.push(eN.join(o, "JetBrains"), eN.join(s, "JetBrains"), eN.join(o)),
        e.toLowerCase() === "androidstudio")
      )
        n.push(eN.join(s, "Google"));
      break;
    case "linux":
      n.push(eN.join(t, ".config", "JetBrains"), eN.join(t, ".local", "share", "JetBrains"));
      for (let i of r) n.push(eN.join(t, "." + i));
      if (e.toLowerCase() === "androidstudio") n.push(eN.join(t, ".config", "Google"));
      break;
    default:
      break;
  }
  return n;
}
async function cwp(e) {
  let t = [],
    n = qt(),
    r = lwp(e),
    o = JIa[e.toLowerCase()];
  if (!o) return t;
  let s = o.map((i) => new RegExp("^" + i));
  for (let i of r)
    try {
      let a = await n.readdir(i);
      for (let l of s)
        for (let c of a) {
          if (!l.test(c.name)) continue;
          if (!c.isDirectory() && !c.isSymbolicLink()) continue;
          let u = eN.join(i, c.name);
          if (x3t.platform() === "linux") {
            t.push(u);
            continue;
          }
          let d = eN.join(u, "plugins");
          try {
            (await n.stat(d), t.push(d));
          } catch {}
        }
    } catch {
      continue;
    }
  return t.filter((i, a) => t.indexOf(i) === a);
}
async function uwp(e) {
  let t = await cwp(e);
  for (let n of t) {
    let r = eN.join(n, awp);
    try {
      return (await qt().stat(r), true);
    } catch {}
  }
  return false;
}
async function QIa(e, t = false) {
  if (t) qdo.delete(e);
  let n = qdo.get(e);
  if (n) return n;
  let r = uwp(e);
  return (qdo.set(e, r), r);
}
var x3t,
  eN,
  awp = "claude-code-jetbrains-plugin",
  JIa,
  qdo;
