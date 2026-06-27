// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lNn
// matched 2.1.88 source: src/utils/sessionEnvironment.ts
// class=modified  jaccard=0.4595  score=1  fileCov=0.4595
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lNn] deps: u_, lf, nC, EI, lC, TX, Rct, je, _m, Jt, dn, kt, mLe, U1, hut
Hcp = new Set([Ds, ...W1, qc, wu, GW, Sb, ka, Wc]);
async function yao() {
  let e = Fjt.join(tr(), "session-env", Rt());
  return (await qt().mkdir(e), e);
}
async function getHookEnvFilePath(e, t) {
  let n = e.toLowerCase();
  return Fjt.join(await yao(), `${n}-hook-${t}.sh`);
}
async function clearCwdEnvFiles() {
  try {
    let e = await yao(),
      t = await hLe.readdir(e);
    await Promise.all(
      t
        .filter(
          (n) =>
            (n.startsWith("filechanged-hook-") || n.startsWith("cwdchanged-hook-")) && uNn.test(n),
        )
        .map((n) => hLe.writeFile(Fjt.join(e, n), "")),
    );
  } catch (e) {
    if (on(e) !== "ENOENT") T(`Failed to clear cwd env files: ${be(e)}`);
  }
}
function invalidateSessionEnvCache() {
  (T("Invalidating session environment cache"), (gLe = void 0), (cNn = void 0));
}
async function getSessionEnvironmentScript() {
  let e = Rt();
  if (gLe !== void 0 && cNn === e) return gLe;
  let t = [],
    n = process.env.CLAUDE_ENV_FILE;
  if (n)
    try {
      let o = (await hLe.readFile(n, "utf8")).trim();
      if (o)
        (t.push(o), T(`Session environment loaded from CLAUDE_ENV_FILE: ${n} (${o.length} chars)`));
    } catch (o) {
      if (on(o) !== "ENOENT") T(`Failed to read CLAUDE_ENV_FILE: ${be(o)}`);
    }
  let r = await yao();
  try {
    let s = (await hLe.readdir(r)).filter((i) => uNn.test(i)).sort(Ccp);
    for (let i of s) {
      let a = Fjt.join(r, i);
      try {
        let l = (await hLe.readFile(a, "utf8")).trim();
        if (l) t.push(l);
      } catch (l) {
        if (on(l) !== "ENOENT") T(`Failed to read hook file ${a}: ${be(l)}`);
      }
    }
    if (s.length > 0) T(`Session environment loaded from ${s.length} hook file(s)`);
  } catch (o) {
    if (on(o) !== "ENOENT") T(`Failed to load session environment from hooks: ${be(o)}`);
  }
  if (t.length === 0)
    return (T("No session environment scripts found"), (gLe = null), (cNn = e), gLe);
  return (
    (gLe = t.join(`
`)),
    (cNn = e),
    T(`Session environment script ready (${gLe.length} chars total)`),
    gLe
  );
}
function Ccp(e, t) {
  let n = e.match(uNn),
    r = t.match(uNn),
    o = n?.[1] || "",
    s = r?.[1] || "";
  if (o !== s) return (pca[o] ?? 99) - (pca[s] ?? 99);
  let i = parseInt(n?.[2] || "0", 10),
    a = parseInt(r?.[2] || "0", 10);
  return i - a;
}
var hLe,
  Fjt,
  gLe = void 0,
  cNn = void 0,
  pca,
  uNn;
