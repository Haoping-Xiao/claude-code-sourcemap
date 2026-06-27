// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ujl
// matched 2.1.88 source: src/utils/plugins/pluginFlagging.ts
// class=modified  jaccard=0.2834  score=0.4918  fileCov=0.4007
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ujl] deps: Qi, je, Un, c_
((brr = R(rt(), 1)), (VNf = new Set(["good", "warn", "poor"])));
KNf = Cn(async () => {
  if (!at("tengu_skills_dashboard_enabled", false)) return null;
  try {
    let e = await Os.get("/api/claude_code/skills", {
      auth: "async",
      timeout: 5000,
      validateStatus: () => true,
    });
    if (!e.ok) return (T(`Skill health fetch skipped: ${e.reason}`), null);
    if (e.status >= 400) return (T(`Skill health fetch skipped: status ${e.status}`), null);
    let t = e.data?.skills;
    if (!Array.isArray(t)) return null;
    let n = new Map();
    for (let r of t) if (r.skill_name && zNf(r.health)) n.set(r.skill_name, r.health);
    return n;
  } catch (e) {
    return (T(`Skill health fetch skipped: ${e}`), null);
  }
});
function fjl() {
  return pjl.join(kI(), YNf);
}
function JNf(e) {
  let t = Ft(e);
  if (
    typeof t !== "object" ||
    t === null ||
    !("plugins" in t) ||
    typeof t.plugins !== "object" ||
    t.plugins === null
  )
    return {};
  let n = t.plugins,
    r = {};
  for (let [o, s] of Object.entries(n))
    if (s && typeof s === "object" && "flaggedAt" in s && typeof s.flaggedAt === "string") {
      let i = {
        flaggedAt: s.flaggedAt,
      };
      if ("seenAt" in s && typeof s.seenAt === "string") i.seenAt = s.seenAt;
      r[o] = i;
    }
  return r;
}
async function Srr() {
  try {
    let e = await i1e.readFile(fjl(), {
      encoding: "utf-8",
    });
    return JNf(e);
  } catch {
    return {};
  }
}
async function Err(e) {
  let t = fjl(),
    n = `${t}.${djl.randomBytes(8).toString("hex")}.tmp`;
  try {
    await qt().mkdir(kI());
    let r = De(
      {
        plugins: e,
      },
      null,
      2,
    );
    (await i1e.writeFile(n, r, {
      encoding: "utf-8",
      mode: 384,
    }),
      await i1e.rename(n, t),
      (Fq = e));
  } catch (r) {
    let o = on(r);
    if (o === "ENOSPC" || o === "EROFS" || o === "EACCES" || o === "ENOENT" || o === "ENOTDIR")
      T(`Failed to persist flagged plugins: ${r}`, {
        level: "error",
      });
    else ke(r);
    try {
      await i1e.unlink(n);
    } catch {}
  }
}
async function mjl() {
  let e = await Srr(),
    t = Date.now(),
    n = false;
  for (let [r, o] of Object.entries(e))
    if (o.seenAt && t - new Date(o.seenAt).getTime() >= XNf) (delete e[r], (n = true));
  if (((Fq = e), n)) await Err(e);
}
function QEt() {
  return Fq ?? {};
}
async function gjl(e) {
  if (Fq === null) Fq = await Srr();
  let t = {
    ...Fq,
    [e]: {
      flaggedAt: new Date().toISOString(),
    },
  };
  (await Err(t), T(`Flagged plugin: ${e}`));
}
async function hjl(e) {
  if (Fq === null) Fq = await Srr();
  let t = new Date().toISOString(),
    n = false,
    r = {
      ...Fq,
    };
  for (let o of e) {
    let s = r[o];
    if (s && !s.seenAt)
      ((r[o] = {
        ...s,
        seenAt: t,
      }),
        (n = true));
  }
  if (n) await Err(r);
}
async function yjl(e) {
  if (Fq === null) Fq = await Srr();
  if (!(e in Fq)) return;
  let { [e]: t, ...n } = Fq;
  ((Fq = n), await Err(n));
}
var djl,
  i1e,
  pjl,
  YNf = "flagged-plugins.json",
  XNf = 172800000,
  Fq = null;
