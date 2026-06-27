// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ubc
// matched 2.1.88 source: src/utils/exampleCommands.ts
// class=partial  jaccard=0.2032  score=0.7813  fileCov=0.2154
// note: low-confidence suggestion: src/utils/exampleCommands.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ubc = E(() => {
  lbc();
  Uen = R(rt(), 1);
});
function Umm(e) {
  return !Bmm.some(t => t.test(e));
}
function Fmm(e, t) {
  let n = [],
    r = new Set(),
    o = new Map();
  for (let s = 1; n.length < t && s <= t; s++) for (let i of e) {
    if (n.length >= t) break;
    if (!Umm(i)) continue;
    let a = Math.max(i.lastIndexOf("/"), i.lastIndexOf("\\")),
      l = a >= 0 ? i.slice(a + 1) : i;
    if (!l || r.has(l)) continue;
    let c = a >= 0 ? i.slice(0, a) : ".";
    if ((o.get(c) ?? 0) >= s) continue;
    n.push(l), r.add(l), o.set(c, (o.get(c) ?? 0) + 1);
  }
  return n.length >= t ? n : [];
}
async function jmm() {
  if (Oe.platform === "win32") return [];
  if (!(await cb())) return [];
  try {
    let e = await qle(),
      t = ["log", "-n", "1000", "--pretty=format:", "--name-only", "--diff-filter=M"],
      n = new Map(),
      r = s => {
        for (let i of s.split(`
`)) {
          let a = i.trim();
          if (a) n.set(a, (n.get(a) ?? 0) + 1);
        }
      };
    if (e) {
      let {
        stdout: s
      } = await Gr("git", [...t, `--author=${e}`], {
        cwd: $t()
      });
      r(s);
    }
    if (n.size < 10) {
      let {
        stdout: s
      } = await Gr(go(), t, {
        cwd: $t()
      });
      r(s);
    }
    let o = Array.from(n.entries()).sort((s, i) => i[1] - s[1]).map(([s]) => s);
    return Fmm(o, 5);
  } catch (e) {
    return T(`Failed to collect frequently-modified files from git history: ${e}`, {
      level: "error"
    }), [];
  }
}
var Bmm,
  Gmm = 604800000,
  dbc,
  pbc;