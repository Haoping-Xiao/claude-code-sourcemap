// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nMl
// matched 2.1.88 source: src/utils/extraUsage.ts
// class=partial  jaccard=0.1757  score=0.2338  fileCov=0.414
// note: low-confidence suggestion: src/utils/extraUsage.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nMl = E(() => {
  ft();
  ZU();
  tMl = {
    type: "local-jsx",
    name: "autocompact",
    description: "Set how full the context gets before auto-summarizing",
    isEnabled: () => eMl() && !Ir(),
    isHidden: !1,
    argumentHint: "[auto|<tokens>]",
    load: () => Promise.resolve().then(() => (ZPl(), QPl)),
    userFacingName() {
      return "autocompact";
    }
  }, VOo = {
    type: "local",
    name: "autocompact",
    supportsNonInteractive: !0,
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
  if (!bo()) return !1;
  let r = e !== null ? zo(e) : Ey(),
    o = r.toLowerCase(),
    s = o.includes("opus") || o.includes("fable"),
    i = o.includes("opus-4-6"),
    a = o.includes("sonnet-4-6");
  if (t && rg(e)) return !0;
  if ((o.includes("fable") || C9(r)) && !eF() && (dSe() || Gue())) return !0;
  if (!Sy(o)) return !1;
  if (s && n) return !1;
  return i || a;
}