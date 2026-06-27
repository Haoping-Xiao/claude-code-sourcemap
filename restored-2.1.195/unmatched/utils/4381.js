// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TXn
// matched 2.1.88 source: src/skills/loadSkillsDir.ts
// class=new  jaccard=0.0207  score=0.1757  fileCov=0.0229
// note: nearest: src/skills/loadSkillsDir.ts (0.0207); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var TXn = E(() => {
  Un();
  jc();
  Ls();
  qd();
});
function Uhf(e) {
  let t = e.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 16) || "anon",
    n = ZSl.randomBytes(6).toString("hex");
  return `plan_${t}_${n}`;
}
function B$(e) {
  return e.replace(/\\/g, "/").split("/").filter(t => t !== "" && t !== ".").join("/");
}
function LRo(e) {
  let t = B$(e).toLowerCase();
  return t === "claude.md" || t.startsWith("claude.md/") || t === ".claude" || t.startsWith(".claude/");
}
function tze(e) {
  return /[*?]/.test(e);
}
function tEl(e) {
  let t = "",
    n = 0,
    r = 0,
    o = () => {
      if (++r > QSl) throw Error(`glob "${e}" exceeds ${QSl} '*'/'**' wildcards`);
    };
  while (n < e.length) {
    let s = e.charAt(n);
    if (s === "*" && e.charAt(n + 1) === "*") {
      if (o(), e.charAt(n + 2) === "/") t += "(?:.*/)?", n += 3;else t += ".*", n += 2;
    } else if (s === "*") o(), t += "[^/]*", n += 1;else if (s === "?") t += "[^/]", n += 1;else if (/[.+^$|()[\]{}\\]/.test(s)) t += "\\" + s, n += 1;else t += s, n += 1;
  }
  return new RegExp(`^${t}$`);
}
function $zt(e, t) {
  let n = B$(e);
  if (!n) return false;
  if (n.length > nze) return false;
  if (n.split("/").includes("..") || n.includes("\x00")) return false;
  for (let r of t) {
    let o = B$(r);
    if (tze(o)) try {
      if (tEl(o).test(n)) return true;
    } catch {} else if (o === n) return true;
  }
  return false;
}
function nEl(e) {
  let t = {
      projectId: e.projectId,
      writes: e.writes.map(B$),
      deletes: e.deletes.map(B$),
      ...(e.localDir !== void 0 && {
        localDir: e.localDir
      })
    },
    n = Nhf().safeParse(t);
  if (!n.success) throw Error("registerPlan: plan failed shape validation");
  for (let o of [...n.data.writes, ...n.data.deletes]) if (tze(o)) tEl(o);
  let r = Uhf(e.projectId);
  return eEl.set(r, n.data), r;
}
function Ozt(e) {
  if (!Bhf.test(e)) return null;
  return eEl.get(e) ?? null;
}
var ZSl,
  Nhf,
  eEl,
  Bhf,
  QSl = 3,
  nze = 256;