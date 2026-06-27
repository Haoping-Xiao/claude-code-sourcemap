// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rbc
// matched 2.1.88 source: src/hooks/useReplBridge.tsx
// class=new  jaccard=0.0193  score=0.0957  fileCov=0.0236
// note: nearest: src/hooks/useReplBridge.tsx (0.0193); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rbc = E(() => {
  _i();
  Z6o();
  tzo();
  Ibc = R(lt(), 1), kbc = R(se(), 1);
});
function Lbc(e, t) {
  let n = Ht(i => i.fotwClaim),
    r = Ho();
  nzo.useEffect(() => {
    vKn();
  }, []);
  let o = n?.phase;
  Pd(() => r(i => i.fotwClaim ? {
    ...i,
    fotwClaim: void 0
  } : i), o === void 0 || o === "pending" ? null : Odr, [o]), nzo.useEffect(() => {
    if (!n) {
      t(WTt);
      return;
    }
    let i = Yy(n.amountMinorUnits, n.currency, "precise");
    switch (t(WTt), n.phase) {
      case "pending":
        e({
          key: WTt,
          text: `Thanks for trying the feature of the week. ${i} in usage credits on its way!`,
          priority: "immediate",
          requeueOnPreempt: true,
          timeoutMs: egm
        });
        return;
      case "granted":
        e({
          key: WTt,
          text: `${i} in usage credits added to your account \xB7 expires in 90 days`,
          color: "success",
          priority: "immediate",
          requeueOnPreempt: true,
          timeoutMs: Odr
        });
        return;
      case "failed":
        e({
          key: WTt,
          text: "Something went wrong when adding your usage credits. Contact support for help.",
          color: "error",
          priority: "immediate",
          requeueOnPreempt: true,
          timeoutMs: Odr
        });
        return;
      case "needs_payment_setup":
        e({
          key: WTt,
          text: `To claim ${i} in usage credits, add a payment method at ${tgm}, then run /${n.command} again to claim (claiming turns on extra usage billing)`,
          priority: "immediate",
          requeueOnPreempt: true,
          timeoutMs: Odr
        });
        return;
    }
  }, [n, e, t]);
}
var nzo,
  Odr = 30000,
  egm = 60000,
  tgm = "https://claude.ai/settings/usage",
  WTt = "fotw-claim";