// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nMl
// matched 2.1.88 source: src/commands/advisor.ts
// class=partial  jaccard=0.0817  score=0.3106  fileCov=0.0998
// note: low-confidence suggestion: src/commands/advisor.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nMl = E(() => {
  ft();
  ZU();
  tMl = {
    type: "local-jsx",
    name: "autocompact",
    description: "Set how full the context gets before auto-summarizing",
    isEnabled: () => eMl() && !Ir(),
    isHidden: false,
    argumentHint: "[auto|<tokens>]",
    load: () => Promise.resolve().then(() => (ZPl(), QPl)),
    userFacingName() {
      return "autocompact";
    }
  }, VOo = {
    type: "local",
    name: "autocompact",
    supportsNonInteractive: true,
    description: "Configure the auto-compact window size",
    get isHidden() {
      return !Ir();
    },
    isEnabled() {
      return eMl() && Ir();
    },
    argumentHint: "[auto|<tokens>]",
    load: () => Promise.resolve().then(() => (FOo(), XPl)),
    userFacingName() {
      return "autocompact";
    }
  };
});
function xOe(e, t, n) {
  if (!bo()) return false;
  let r = e !== null ? zo(e) : Ey(),
    o = r.toLowerCase(),
    s = o.includes("opus") || o.includes("fable"),
    i = o.includes("opus-4-6"),
    a = o.includes("sonnet-4-6");
  if (t && rg(e)) return true;
  if ((o.includes("fable") || C9(r)) && !eF() && (dSe() || Gue())) return true;
  if (!Sy(o)) return false;
  if (s && n) return false;
  return i || a;
}