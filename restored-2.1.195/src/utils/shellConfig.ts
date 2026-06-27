// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A9e
// matched 2.1.88 source: src/utils/shellConfig.ts
// class=modified  jaccard=0.3757  score=0.5236  fileCov=0.5708
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module A9e] deps: dn, er, je, fn, At, Bi, ys, vn, Jt
((Sgt = require("fs/promises")), (bgt = require("path")));
function DPe(e) {
  let t = e?.homedir ?? dAo.homedir(),
    n = e?.env ?? process.env,
    r = e?.platform ?? "linux",
    o = e?.fileExists ?? _za.existsSync,
    s = n.ZDOTDIR || t,
    i =
      r === "darwin"
        ? ([".bash_profile", ".bash_login", ".profile"].find((a) => o(Agt.join(t, a))) ??
          ".bash_profile")
        : ".bashrc";
  return {
    zsh: Agt.join(s, ".zshrc"),
    bash: Agt.join(t, i),
    ...(r === "darwin" && {
      bashrc: Agt.join(t, ".bashrc"),
    }),
    fish: Agt.join(t, ".config/fish/config.fish"),
  };
}
function bVn(e) {
  let t = false;
  return {
    filtered: e.filter((r) => {
      if (bza.test(r)) {
        let o = r.match(/alias\s+claude\s*=\s*["']([^"']+)["']/);
        if (!o) o = r.match(/alias\s+claude\s*=\s*([^#\n]+)/);
        if (o && o[1]) {
          if (o[1].trim() === hza()) return ((t = true), false);
        }
      }
      return true;
    }),
    hadAlias: t,
  };
}
async function Vqt(e) {
  try {
    return (
      await Hgt.readFile(e, {
        encoding: "utf8",
      })
    ).split(`
`);
  } catch (t) {
    if (Vo(t)) return null;
    throw t;
  }
}
async function SVn(e, t) {
  let n = await Hgt.open(e, "w");
  try {
    (await n.writeFile(
      t.join(`
`),
      {
        encoding: "utf8",
      },
    ),
      await n.datasync());
  } finally {
    await n.close();
  }
}
async function pAo(e) {
  let t = DPe(e);
  for (let n of Object.values(t)) {
    let r = await Vqt(n);
    if (!r) continue;
    for (let o of r)
      if (bza.test(o)) {
        let s = o.match(/alias\s+claude=["']?([^"'\s]+)/);
        if (s && s[1]) return s[1];
      }
  }
  return null;
}
async function Sza(e) {
  let t = await pAo(e);
  if (!t) return null;
  let n = e?.homedir ?? dAo.homedir(),
    r = t.startsWith("~") ? t.replace("~", n) : t;
  try {
    let o = await Hgt.stat(r);
    if (o.isFile() || o.isSymbolicLink()) return t;
  } catch {}
  return null;
}
var _za, Hgt, dAo, Agt, bza;
