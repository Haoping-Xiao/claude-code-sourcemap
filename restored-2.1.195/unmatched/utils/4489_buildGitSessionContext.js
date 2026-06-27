// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PPo
// matched 2.1.88 source: src/bridge/createSession.ts
// class=new  jaccard=0.0533  score=0.844  fileCov=0.0538
// note: nearest: src/bridge/createSession.ts (0.0533); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var PPo = E(() => {
  q0();
  co();
  _m();
  je();
  At();
  sr();
  kt();
  Un();
  MM();
  Uh();
  kPo();
  y_();
  ft();
  id();
  VKt();
  FIl();
  U7n();
  j7n();
  u_();
  nC();
  MQn();
  WIl = require("fs/promises"), qIl = require("path"), GIl = {
    minHours: 24,
    minSessions: 5
  };
});
var YIl = {};
_t(YIl, {
  buildGitSessionContext: () => buildGitSessionContext
});
async function buildGitSessionContext(e, t, n) {
  if (!e) return {
    sources: [],
    outcomes: []
  };
  let {
      parseGitRemote: r,
      parseGitHubRepository: o
    } = await Promise.resolve().then(() => (BR(), ARt)),
    {
      getDefaultBranch: s
    } = await Promise.resolve().then(() => (sa(), Sfn)),
    i = n || (await s()) || "",
    a = t || i || void 0,
    l = a && a !== i ? [a] : [],
    c = (p, f, m) => ({
      sources: [{
        type: "git_repository",
        url: `https://${p}/${f}/${m}`,
        revision: a
      }],
      outcomes: [{
        type: "git_repository",
        git_info: {
          type: "github",
          repo: `${f}/${m}`,
          branches: l
        }
      }]
    }),
    u = r(e);
  if (u) return c(u.host, u.owner, u.name);
  let d = o(e);
  if (d) {
    let [p, f] = d.split("/");
    if (p && f) return c(JH, p, f);
  }
  return {
    sources: [],
    outcomes: []
  };
}