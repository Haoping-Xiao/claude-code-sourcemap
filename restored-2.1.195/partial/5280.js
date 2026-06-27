// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sic
// matched 2.1.88 source: src/utils/sessionEnvironment.ts
// class=partial  jaccard=0.0701  score=1  fileCov=0.0701
// note: low-confidence suggestion: src/utils/sessionEnvironment.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Sic = E(() => {
  sp();
});
async function Eic(e, t) {
  let n = await Kk({
    hookInput: e,
    timeoutMs: t
  });
  if (n.length > 0) Eut();
  let r = n.flatMap(s => s.watchPaths ?? []),
    o = n.map(s => s.systemMessage).filter(s => !!s);
  return {
    results: n,
    watchPaths: r,
    systemMessages: o
  };
}
function Gjt(e, t, n = lp) {
  let r = {
    ...Td(void 0),
    hook_event_name: "CwdChanged",
    old_cwd: e,
    new_cwd: t
  };
  return Eic(r, n);
}
function Wjt(e, t, n = lp) {
  let r = {
    ...Td(void 0),
    hook_event_name: "FileChanged",
    file_path: e,
    event: t
  };
  return Eic(r, n);
}