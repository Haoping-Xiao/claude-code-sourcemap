// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s8t
// matched 2.1.88 source: src/plugins/builtinPlugins.ts
// class=new  jaccard=0.0567  score=0.0714  fileCov=0.2165
// note: nearest: src/plugins/builtinPlugins.ts (0.0567); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var s8t = E(() => {
  Qi();
  er();
  Lo();
  je();
  Bi();
  sa();
  Ote();
  dn();
  y1();
  Un();
  kt();
  $tf = [".claude/skills", ".claude/commands"];
  dwo = Cn(async () => {
    if (!ad()) return [];
    let e = Tu($t());
    if (!e) return [];
    let [{
      stdout: t,
      code: n
    }, r] = await Promise.all([Gr(go(), ["-c", "core.quotePath=false", "-c", "core.fsmonitor=", "-c", "core.hooksPath=/dev/null", "-c", "core.pager=", "-c", "log.showSignature=false", "log", "--since=7.days", "--diff-filter=A", "--name-only", "--format=COMMIT%x00%an%x00%ae", "--", ...$tf], {
      cwd: e,
      timeout: 5000
    }), qle()]);
    if (n !== 0) return [];
    let o = r?.toLowerCase(),
      s = [],
      i = new Set(),
      a = "",
      l = "";
    for (let m of t.split(`
`)) {
      if (m.startsWith("COMMIT\x00")) {
        let h = m.split("\x00");
        a = h[1] ?? "", l = (h[2] ?? "").toLowerCase();
        continue;
      }
      if (!m || i.has(m)) continue;
      i.add(m);
      let g = srl(m);
      if (g) {
        let h = Boolean(o && l === o);
        s.push({
          path: m,
          author: a,
          byCurrentUser: h,
          ...g
        });
      }
    }
    irl = s;
    let c = Lg(),
      u = new Set(c.seenTeamArtifactPaths ?? []),
      d = s.some(m => !m.byCurrentUser && !u.has(m.path)),
      p = new Set(c.loggedAuthoredArtifactPaths ?? []),
      f = s.filter(m => m.byCurrentUser && !p.has(m.path));
    for (let m of f) G("tengu_skill_authored", {
      is_skill: m.kind === "skill"
    });
    try {
      pH(m => {
        let g = m.hasUnseenTeamArtifacts === d;
        if (f.length === 0 && g) return m;
        let h = g ? m : {
          ...m,
          hasUnseenTeamArtifacts: d
        };
        if (f.length === 0) return h;
        let y = h.loggedAuthoredArtifactPaths ?? [],
          b = f.map(A => A.path),
          _ = new Set(b),
          S = [...y.filter(A => !_.has(A)), ...b].slice(-orl);
        return {
          ...h,
          loggedAuthoredArtifactPaths: S
        };
      });
    } catch (m) {
      T(`team-artifact eligibility persist failed: ${m}`);
    }
    return s;
  });
});
function G6(e) {
  return Oe.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS || (e ?? Dr()).disableBundledSkills === !0;
}
function w6n(e, t) {
  return e.type === "prompt" && e.source === "builtin" && G6(t);
}