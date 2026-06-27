// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pZo
// matched 2.1.88 source: src/commands/bridge-kick.ts
// class=modified  jaccard=0.0815  score=0.4215  fileCov=0.0917
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var pZo = E(() => {
  ((lXe = {
    "Cache-Control": "no-store",
  }),
    (Y$m = {
      400: "invalid_request_error",
      401: "authentication_error",
      403: "permission_error",
      404: "not_found_error",
    }));
});
function lrn(e = "monthly", t = new Date()) {
  if (e === "monthly") return t.toISOString().slice(0, 7);
  if (e === "daily") return t.toISOString().slice(0, 10);
  let n = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())),
    r = n.getUTCDay() || 7;
  n.setUTCDate(n.getUTCDate() + 4 - r);
  let o = n.getUTCFullYear(),
    s = Date.UTC(o, 0, 1),
    i = Math.ceil(((n.getTime() - s) / 86400000 + 1) / 7);
  return `${o}-W${String(i).padStart(2, "0")}`;
}
var arn;
