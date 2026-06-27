// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BIo
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BIo = E(() => {
  Hp();
  zb();
  je();
  RE();
  At();
  Ls();
  kM();
  gaf = ve(() => dt.object({
    url: dt.string().optional().default(""),
    destination_url: dt.string().nullable().optional(),
    title: dt.string().optional().default(""),
    text: dt.string().optional().default(""),
    content_type: dt.string().nullable().optional(),
    error: dt.object({
      error_type: dt.string(),
      error_message: dt.string()
    }).nullable().optional()
  }));
});
function Mcl(e, t) {
  if (_af.has(e)) return !0;
  let n = baf.get(e);
  if (n) {
    if (/%(25)*(2f|5c|2e)/i.test(t)) return !1;
    for (let r of n) if (t === r || t.startsWith(r + "/")) return !0;
  }
  return !1;
}
var yaf, _af, baf;