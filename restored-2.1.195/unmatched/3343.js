// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WI
// matched 2.1.88 source: src/skills/loadSkillsDir.ts
// class=new  jaccard=0.0393  score=0.2904  fileCov=0.0435
// note: nearest: src/skills/loadSkillsDir.ts (0.0393); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WI = E(() => {
  Ree();
  je();
  Mx();
  dr();
  Ukp = new Set(["http:", "https:", "git:", "git+http:", "git+https:"]);
});
function jkp(e) {
  let t = u6.relative(u6.join(tr(), "skills"), e);
  return t !== "" && t !== ".." && !t.startsWith(`..${u6.sep}`) && !u6.isAbsolute(t);
}
async function oPa(e, t) {
  let n = u6.join(e, "SKILL.md"),
    r;
  try {
    r = jkp(n) ? await qs().read(n) : await Mpt.readFile(n, {
      encoding: "utf-8"
    });
  } catch (l) {
    if (!wn(l)) T(`[skill-as-plugin] failed to read ${n}: ${l}`, {
      level: "warn"
    });
    return null;
  }
  let {
      frontmatter: o
    } = Bm(r, n, {
      normalizeKeys: !0
    }),
    s = {
      name: t,
      displayName: tDe(o.displayName) ?? tDe(o.name),
      description: typeof o.description === "string" ? o.description : void 0,
      version: typeof o.version === "string" ? o.version : void 0
    };
  for (let [l, c] of Object.entries(Wkp)) if (c(o[l])) s[l] = o[l];
  let i = !1;
  for (let l of Gkp) if (o[l] !== void 0 && o[l] !== null) s[l] = o[l], i = !0;
  if (!i) return null;
  let a = nWe(s, "skill-md", {
    pluginName: t,
    manifestPath: n
  });
  if (!a.ok) throw Error(a.error);
  return {
    manifest: a.manifest,
    manifestPath: n,
    rawCandidate: a.rawCandidate
  };
}
function sPa(e, t) {
  if (t) return !0;
  return !1;
}
async function iPa() {
  if (lc("skills") || TCe.some(r => VE(r)) || !Uqe()) return [];
  let e = [],
    t = u6.join(tr(), "skills");
  if (Om("userSettings")) e.push({
    dir: t,
    scope: "user"
  });
  if (Om("projectSettings")) {
    let r = u6.join(yr(), ".claude", "skills"),
      o = s => Mpt.realpath(s).catch(() => s);
    if (r !== t && (await o(r)) !== (await o(t))) e.push({
      dir: r,
      scope: "project"
    });
  }
  let n = [];
  for (let {
    dir: r,
    scope: o
  } of e) try {
    if (o === "user") {
      let s = await qs().listEntries(r);
      for (let i of s) if (!i.isFile) n.push({
        dir: u6.join(r, i.name),
        scope: o
      });
    } else {
      let s = await Mpt.readdir(r, {
        withFileTypes: !0
      });
      for (let i of s) if (i.isDirectory() || i.isSymbolicLink()) n.push({
        dir: u6.join(r, i.name),
        scope: o
      });
    }
  } catch (s) {
    if (!Vo(s)) T(`[skill-as-plugin] readdir ${r} failed: ${s}`, {
      level: "warn"
    });
  }
  return n;
}
var Mpt, u6, Gkp, Wkp;