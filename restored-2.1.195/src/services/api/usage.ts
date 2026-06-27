// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d5e
// matched 2.1.88 source: src/services/api/usage.ts
// class=modified  jaccard=0.1916  score=0.2921  fileCov=0.3577
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var d5e = E(() => {
  Un();
});
function x1n(e) {
  if (e?.is_enabled === true) return true;
  return PPt(e?.disabled_reason ?? null);
}
function lLe() {
  let e = at(Xap, []);
  return Array.isArray(e) ? e.filter((t) => typeof t === "string") : [];
}
function nut(e, t) {
  let n = t.map((r) => r.toLowerCase());
  if (n.length === 0) return [];
  return (e ?? [])
    .filter(
      (r) =>
        r.kind === "weekly_scoped" &&
        r.scope?.model &&
        n.includes(r.scope.model.display_name.toLowerCase()),
    )
    .map((r) => ({
      title: `Current week (${r.scope?.model?.display_name})`,
      limit: {
        utilization: r.percent,
        resets_at: r.resets_at,
      },
    }));
}
async function Wue() {
  return yl("api_usage_fetch", async () => {
    if (!bo() || !cI()) return {};
    let e = 0,
      t = await oL(async () => {
        (e++, T(`fetchUtilization: GET /api/oauth/usage (attempt ${e})`));
        let n = await Os.get("/api/oauth/usage", {
          timeout: 5000,
          headers: {
            "Content-Type": "application/json",
          },
          refreshOAuth: true,
        });
        if (!n.ok) throw Error(`Auth error: ${n.reason === "no-auth" ? n.detail : n.reason}`);
        return n;
      });
    return (
      T(
        `fetchUtilization: 200 after ${e} attempt(s)${e > 1 ? " (401\u2192refresh\u2192retry succeeded)" : ""}`,
      ),
      t.data
    );
  });
}
var Xap = "tengu_usage_overage_included_models";
