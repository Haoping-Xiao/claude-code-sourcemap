// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q9t
// matched 2.1.88 source: src/utils/glob.ts
// class=modified  jaccard=0.5074  score=0.8675  fileCov=0.55
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module q9t] deps: tre, B1
PF = require("path");
Ptl = kef();
function Def(e) {
  let t = /[*?[{]/,
    n = e.match(t);
  if (!n || n.index === void 0) {
    let a = QJ.dirname(e),
      l = QJ.basename(e);
    return {
      baseDir: a,
      relativePattern: l,
    };
  }
  let r = e.slice(0, n.index),
    o = Math.max(r.lastIndexOf("/"), r.lastIndexOf(QJ.sep));
  if (o === -1)
    return {
      baseDir: "",
      relativePattern: e,
    };
  let s = r.slice(0, o),
    i = e.slice(o + 1);
  if (s === "" && o === 0) s = "/";
  if (Vt() === "windows" && /^[A-Za-z]:$/.test(s)) s = s + QJ.sep;
  return {
    baseDir: s,
    relativePattern: i,
  };
}
async function glob(e, t, { limit: n, offset: r }, o, s) {
  let i = t,
    a = e;
  if (QJ.isAbsolute(e)) {
    let { baseDir: b, relativePattern: _ } = Def(e);
    if (b) ((i = b), (a = _));
  }
  let l = w8e(C8e(s), i),
    c = ut(process.env.CLAUDE_CODE_GLOB_NO_IGNORE || "true"),
    u = ut(process.env.CLAUDE_CODE_GLOB_HIDDEN || "true"),
    d = [
      "--files",
      "--glob",
      a,
      "--sort=modified",
      ...(c ? ["--no-ignore"] : []),
      ...(u ? ["--hidden"] : []),
    ];
  for (let b of l) d.push("--glob", `!${b}`);
  for (let b of await cyt(i)) d.push("--glob", b);
  let p = null,
    f,
    m = false;
  f = await Aue(d, i, o);
  let g = f.map((b) => (QJ.isAbsolute(b) ? b : QJ.join(i, b))),
    h = m || g.length > r + n;
  return {
    files: g.slice(r, r + n),
    truncated: h,
    totalMatches: g.length,
    countIsComplete: !m,
  };
}
var QJ;
