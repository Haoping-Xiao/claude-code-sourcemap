// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s9l
// matched 2.1.88 source: src/commands/review/UltrareviewOverageDialog.tsx
// class=partial  jaccard=0.0823  score=0.2048  fileCov=0.121
// note: low-confidence suggestion: src/commands/review/UltrareviewOverageDialog.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var s9l = E(() => {
  zb();
  je();
  Jt();
  dn();
  c_();
  r9l = ve(() => dt.object({
    action: dt.enum(["proceed", "confirm", "blocked"]),
    billing_note: dt.string().nullable().optional(),
    confirm: dt.object({
      title: dt.string().optional(),
      body: dt.string()
    }).nullable().optional(),
    blocked: dt.object({
      message: dt.string(),
      action_url: dt.string().nullable(),
      reason: dt.string().optional()
    }).nullable().optional()
  }));
});
function Kor(e, t) {
  let n = e.trim(),
    r = n.split(/\s+/, 1)[0] ?? "",
    o = new Set(),
    s = n;
  for (let i of t) {
    let a = s.replace(new RegExp(`(?:^|\\s)--${wx(i)}(?=\\s|$)`, "g"), "");
    if (a !== s) o.add(i), s = a.trim();
  }
  return {
    rawFirstToken: r,
    flags: o,
    rest: s
  };
}