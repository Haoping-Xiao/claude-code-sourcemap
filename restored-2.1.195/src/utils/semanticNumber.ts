// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PDe
// matched 2.1.88 source: src/utils/semanticNumber.ts
// class=modified  jaccard=0.4574  score=1  fileCov=0.4574
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function hF(e = H.number()) {
  return H.preprocess((t) => {
    if (typeof t === "string") {
      let n = t.trim();
      if (/^[-+]?\d+(\.\d+)?$/.test(n)) {
        let r = Number(n);
        if (Number.isFinite(r)) return r;
      }
    }
    return t;
  }, e);
}
