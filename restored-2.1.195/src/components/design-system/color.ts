// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Ge
// matched 2.1.88 source: src/components/design-system/color.ts
// class=modified  jaccard=0.2738  score=0.895  fileCov=0.2829
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Io(e, t, n = "foreground") {
  return (r) => {
    if (!e) return r;
    if (
      e.startsWith("rgb(") ||
      e.startsWith("#") ||
      e.startsWith("ansi256(") ||
      e.startsWith("ansi:")
    )
      return zke(r, e, n);
    return zke(r, O7(t)[e], n);
  };
}
