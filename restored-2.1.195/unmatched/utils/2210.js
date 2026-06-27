// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T3e
// matched 2.1.88 source: src/constants/outputStyles.ts
// class=new  jaccard=0.058  score=0.5735  fileCov=0.0606
// note: nearest: src/constants/outputStyles.ts (0.058); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var T3e = E(() => {
  Xr();
  Jt();
  t1i = Object.freeze({
    toolSearchReminder: null,
    toolParamStrictness: false,
    emptyInputRepair: false,
    toolSearchFetchRule: false,
    schemaDescFixes: false
  });
});
function wc(e, t) {
  let n = $w(),
    r = n.includes("userSettings") && Get();
  for (let o = n.length - 1; o >= 0; o--) {
    let s = n[o];
    if (s === "projectSettings" && r) continue;
    let i = yn(s)?.[e];
    if (i !== void 0) return {
      value: i,
      source: s
    };
  }
  if (Nst.includes(e)) {
    let o = e,
      s = Dt()[o];
    if (s !== void 0 && s !== I7[o]) return {
      value: s,
      source: "legacyGlobalConfig"
    };
  }
  return {
    value: t,
    source: "default"
  };
}
function yI(e, t) {
  io("userSettings", {
    [e]: t
  });
}
var Nst;