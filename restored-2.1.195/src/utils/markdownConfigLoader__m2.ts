// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o7n
// matched 2.1.88 source: src/utils/markdownConfigLoader.ts
// class=modified (alt of src/utils/markdownConfigLoader.ts)  jaccard=0.0599  score=0.3196  fileCov=0.0686
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module o7n] deps: utils/attachments.ts
Oml = [];
function CLAUDE_CONFIG_DIRECTORIES(e) {
  try {
    return O6e("workflows", e);
  } catch (t) {
    if (gd(t))
      return (
        T(`loadWorkflowsDir: project-dir walk failed: ${t.code}`, {
          level: "error",
        }),
        []
      );
    throw t;
  }
}
async function Nml(e, t) {
  let n = qt(),
    r;
  try {
    r = await n.readdir(e);
  } catch {
    return [];
  }
  return (
    await Promise.all(
      r.map(async (s) => {
        if (!(s.isFile() || s.isSymbolicLink())) return null;
        if (!s.name.endsWith(".js")) return null;
        let i = Kko.join(e, s.name),
          a;
        try {
          a = await n.readFileBytes(i, Oj + 1);
        } catch {
          return null;
        }
        if (a.byteLength > Oj)
          return (
            T(`Workflow ${i} exceeds ${Oj} bytes \u2014 skipping`, {
              level: "warn",
            }),
            null
          );
        let l = a.toString("utf-8"),
          c = ZI(l);
        if ("error" in c)
          return (
            T(`Workflow ${i} has invalid meta: ${c.error} \u2014 skipping`, {
              level: "warn",
            }),
            null
          );
        return {
          source: t,
          name: c.meta.name,
          description: c.meta.description,
          whenToUse: c.meta.whenToUse,
          phases: c.meta.phases,
          script: l,
          filePath: i,
        };
      }),
    )
  ).filter((s) => s !== null);
}
async function loadMarkdownFilesForSubdir(e) {
  let t = Kko.join(tr(), "workflows"),
    n = CLAUDE_CONFIG_DIRECTORIES(e),
    [r, ...o] = await Promise.all([
      Om("userSettings") ? Nml(t, "userSettings") : Promise.resolve([]),
      ...(Om("projectSettings") ? n.map((i) => Nml(i, "projectSettings")) : []),
    ]),
    s = new Map();
  for (let i of r) s.set(i.name, i);
  for (let i = o.length - 1; i >= 0; i--) for (let a of o[i]) s.set(a.name, a);
  return [...s.values()].sort((i, a) => i.name.localeCompare(a.name));
}
var Kko;
