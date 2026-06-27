// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xW
// matched 2.1.88 source: src/utils/imageResizer.ts
// class=modified (alt of src/utils/imageResizer.ts)  jaccard=0.0164  score=0.2317  fileCov=0.0173
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xW] deps: Lne, kt, ADn, je, At, es, vn
NU = class NU extends Error {
  constructor(e) {
    super(e);
    this.name = "ImageResizeError";
  }
};
function Fat(e, t = "value") {
  let n = X8d.exec(e);
  if (n) {
    let r = (n[0].codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0");
    throw new mi(
      `Cannot safely quote ${t} in a PowerShell single-quoted string literal: it contains U+${r}, which PowerShell's tokenizer treats as a quote delimiter`,
      "psSingleQuotedLiteral: rejected a PowerShell quote-variant codepoint (U+2018..U+201F)",
    );
  }
  return `'${e.replaceAll("'", "''")}'`;
}
var X8d;
