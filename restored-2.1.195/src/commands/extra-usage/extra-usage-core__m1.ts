// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rbc
// matched 2.1.88 source: src/commands/extra-usage/extra-usage-core.ts
// class=modified (alt of src/commands/extra-usage/extra-usage-core.ts)  jaccard=0.0266  score=0.066  fileCov=0.0425
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Rbc] deps: _i, Z6o, tzo
((Ibc = R(lt(), 1)), (kbc = R(se(), 1)));
function Lbc(e, t) {
  let n = Ht((i) => i.fotwClaim),
    r = Ho();
  nzo.useEffect(() => {
    vKn();
  }, []);
  let o = n?.phase;
  (Pd(
    () =>
      r((i) =>
        i.fotwClaim
          ? {
              ...i,
              fotwClaim: void 0,
            }
          : i,
      ),
    o === void 0 || o === "pending" ? null : Odr,
    [o],
  ),
    nzo.useEffect(() => {
      if (!n) {
        t(WTt);
        return;
      }
      let i = Yy(n.amountMinorUnits, n.currency, "precise");
      switch ((t(WTt), n.phase)) {
        case "pending":
          e({
            key: WTt,
            text: `Thanks for trying the feature of the week. ${i} in usage credits on its way!`,
            priority: "immediate",
            requeueOnPreempt: true,
            timeoutMs: egm,
          });
          return;
        case "granted":
          e({
            key: WTt,
            text: `${i} in usage credits added to your account \xB7 expires in 90 days`,
            color: "success",
            priority: "immediate",
            requeueOnPreempt: true,
            timeoutMs: Odr,
          });
          return;
        case "failed":
          e({
            key: WTt,
            text: "Something went wrong when adding your usage credits. Contact support for help.",
            color: "error",
            priority: "immediate",
            requeueOnPreempt: true,
            timeoutMs: Odr,
          });
          return;
        case "needs_payment_setup":
          e({
            key: WTt,
            text: `To claim ${i} in usage credits, add a payment method at ${runExtraUsage}, then run /${n.command} again to claim (claiming turns on extra usage billing)`,
            priority: "immediate",
            requeueOnPreempt: true,
            timeoutMs: Odr,
          });
          return;
      }
    }, [n, e, t]));
}
var nzo,
  Odr = 30000,
  egm = 60000,
  runExtraUsage = "https://claude.ai/settings/usage",
  WTt = "fotw-claim";
