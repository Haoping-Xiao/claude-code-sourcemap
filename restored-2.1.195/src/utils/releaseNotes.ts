// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Gl
// matched 2.1.88 source: src/utils/releaseNotes.ts
// class=modified  jaccard=0.158  score=0.3307  fileCov=0.2323
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var $Gl = E(() => {
  SFo = {
    type: "local-jsx",
    name: "powerup",
    description: "Discover Claude Code features through quick interactive lessons",
    requires: {
      ink: true,
    },
    load: () => Promise.resolve().then(() => (MGl(), DGl)),
  };
});
function EFo() {
  return BXt.join(tr(), "cache", "changelog.md");
}
async function NGl() {
  let e = Dt();
  if (!e.cachedChangelog) return;
  let t = EFo();
  try {
    (await qs().mkdir(BXt.dirname(t)), await qs().writeExclusive(t, e.cachedChangelog));
  } catch {}
  gn(({ cachedChangelog: n, ...r }) => r);
}
async function AFo() {
  if (Ir()) return;
  if (Vi()) return;
  let e = V2f,
    t = await lb.get(e);
  if (t.status === 200) {
    let n = t.data;
    if (n === zKe) return;
    let r = EFo();
    (await qs().mkdir(BXt.dirname(r)), await qs().write(r, n), (zKe = n));
    let o = Date.now();
    gn((s) => ({
      ...s,
      changelogLastFetched: o,
    }));
  }
}
async function UXt() {
  if (zKe !== null) return zKe;
  let e = EFo();
  try {
    let t = await qs().read(e);
    return ((zKe = t), t);
  } catch {
    return ((zKe = ""), "");
  }
}
function Xrr() {
  return zKe ?? "";
}
function FXt(e) {
  try {
    if (!e) return {};
    let t = {},
      n = e.split(/^## /gm).slice(1);
    for (let r of n) {
      let o = r.trim().split(`
`);
      if (o.length === 0) continue;
      let s = o[0];
      if (!s) continue;
      let i = bi(s, " - ").trim();
      if (!i) continue;
      let a = o
        .slice(1)
        .filter((l) => l.trim().startsWith("- "))
        .map((l) => l.trim().substring(2).trim())
        .filter(Boolean);
      if (a.length > 0) t[i] = a;
    }
    return t;
  } catch (t) {
    return (ke(Zr(t)), {});
  }
}
function BGl(e, t, n = Xrr()) {
  try {
    let r = FXt(n),
      o = Yrr.coerce(e),
      s = t ? Yrr.coerce(t) : null;
    if (!s || (o && cH(o.version, s.version)))
      return Object.entries(r)
        .filter(([i]) => !s || cH(i, s.version))
        .sort(([i], [a]) => (cH(i, a) ? -1 : 1))
        .flatMap(([i, a]) => a)
        .filter(Boolean)
        .slice(0, q2f);
  } catch (r) {
    return (ke(Zr(r)), []);
  }
  return [];
}
function Jrr(e = Xrr()) {
  try {
    let t = FXt(e);
    return Object.keys(t)
      .sort((r, o) => (cH(r, o) ? 1 : -1))
      .map((r) => {
        let o = t[r];
        if (!o || o.length === 0) return null;
        let s = o.filter(Boolean);
        if (s.length === 0) return null;
        return [r, s];
      })
      .filter((r) => r !== null);
  } catch (t) {
    return (ke(Zr(t)), []);
  }
}
async function UGl(
  e,
  t = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
  }.VERSION,
) {
  let n = await UXt();
  if (e !== t || !n || z2f(n, t))
    AFo().catch((s) =>
      T(`Failed to fetch changelog: ${Zr(s).message}`, {
        level: "error",
      }),
    );
  let r = BGl(t, e, n);
  return {
    hasReleaseNotes: r.length > 0,
    releaseNotes: r,
  };
}
function FGl(
  e,
  t = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
  }.VERSION,
) {
  let n = BGl(t, e);
  return {
    hasReleaseNotes: n.length > 0,
    releaseNotes: n,
  };
}
function z2f(e, t) {
  let n = Yrr.coerce(t);
  if (!n) return false;
  return !Object.keys(FXt(e)).some((o) => {
    try {
      return aL(o, n.version);
    } catch {
      return false;
    }
  });
}
var BXt,
  Yrr,
  q2f = 5,
  OGl = "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
  V2f = "https://raw.githubusercontent.com/anthropics/claude-code/refs/heads/main/CHANGELOG.md",
  zKe = null;
