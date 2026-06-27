// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RFl
// matched 2.1.88 source: src/utils/claudeInChrome/setupPortable.ts
// class=modified  jaccard=0.2599  score=0.7877  fileCov=0.2795
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var RFl = E(() => {
  cBo = {
    isEnabled: () => false,
    isHidden: true,
    name: "stub",
  };
});
function x1f() {
  return [I1f];
}
async function k1f(e, t) {
  if (e.length === 0)
    return (
      t?.("[Claude in Chrome] No browser paths to check"),
      {
        isInstalled: false,
        browser: null,
      }
    );
  let n = x1f();
  for (let { browser: r, path: o } of e) {
    let s = [];
    try {
      s = await uBo.readdir(o, {
        withFileTypes: true,
      });
    } catch (a) {
      if (Vo(a)) continue;
      throw a;
    }
    let i = s
      .filter((a) => a.isDirectory())
      .filter((a) => a.name === "Default" || a.name.startsWith("Profile "))
      .map((a) => a.name);
    if (i.length > 0) t?.(`[Claude in Chrome] Found ${r} profiles: ${i.join(", ")}`);
    for (let a of i)
      for (let l of n) {
        let c = LFl.join(o, a, "Extensions", l);
        try {
          return (
            await uBo.readdir(c),
            t?.(`[Claude in Chrome] Extension ${l} found in ${r} ${a}`),
            {
              isInstalled: true,
              browser: r,
            }
          );
        } catch {}
      }
  }
  return (
    t?.("[Claude in Chrome] Extension not found in any browser"),
    {
      isInstalled: false,
      browser: null,
    }
  );
}
async function DFl(e, t) {
  return (await k1f(e, t)).isInstalled;
}
var uBo,
  LFl,
  I1f = "fcoeoabgfenejglbffodgkkbkcdhcgfn";
