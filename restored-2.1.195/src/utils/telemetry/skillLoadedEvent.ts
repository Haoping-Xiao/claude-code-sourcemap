// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xOc
// matched 2.1.88 source: src/utils/telemetry/skillLoadedEvent.ts
// class=modified  jaccard=0.1923  score=0.3039  fileCov=0.3435
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xOc] deps: Du, gb, fn, PM, Sbe, o8, $g, vf, dr, aS, II
COc = require("path");
function Lxm() {
  return (Rxm ??= Object.keys(pKr().shape));
}
function Dxm(e) {
  let t = e && new Set(e.map(kOc));
  return Object.fromEntries(
    Lxm().map((n) => {
      let r = kOc(n);
      return [`has_${r}`, t?.has(r) ?? false];
    }),
  );
}
async function logSkillsLoaded(e, t, n) {
  let r = await mA(e),
    o = evl(),
    s = new Set(o),
    i = [...r, ...o],
    a = qWe(t, n);
  for (let l of i) {
    if (l.type !== "prompt") continue;
    if (l.source === "builtin") continue;
    G("tengu_skill_loaded", {
      _PROTO_skill_name: l.name,
      ...false,
      ...Hbe(l.source, l.loadedFrom, l.kind, l.createdBy),
      skill_budget: a,
      skill_content_chars: l.contentLength,
      model_invocable: Y1e(l),
      is_conditional: s.has(l),
      ...Dxm(l.declaredFields),
      ...(l.pluginInfo && Tbe(l.pluginInfo)),
    });
  }
}
var Rxm,
  kOc = (e) =>
    e
      .replaceAll("-", "_")
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .toLowerCase();
