// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iQl
// matched 2.1.88 source: src/commands/upgrade/upgrade.tsx
// class=modified  jaccard=0.4737  score=0.6757  fileCov=0.6131
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module iQl] deps: jc, oo
sQl = {
  type: "local-jsx",
  name: "remote-env",
  description: "Choose the default environment for cloud agents",
  isEnabled: () => bo() && Us("allow_remote_sessions"),
  get isHidden() {
    return !bo() || !Us("allow_remote_sessions");
  },
  load: () => Promise.resolve().then(() => (oQl(), nQl)),
};
async function call(onDone, context) {
  try {
    if (bo()) {
      let s = Ws(),
        i = false;
      if (s?.subscriptionType && s?.rateLimitTier)
        i = s.subscriptionType === "max" && s.rateLimitTier === "default_claude_max_20x";
      else if (s?.accessToken) {
        let a = await OIe(s.accessToken);
        i =
          a?.organization?.organization_type === "claude_max" &&
          a?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (i)
        return (
          setTimeout(
            onDone,
            0,
            "You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account.",
          ),
          null
        );
    }
    await ac("https://claude.ai/upgrade/max");
    let r = Lc(),
      o = r && {
        accountUuid: r.accountUuid,
        organizationUuid: r.organizationUuid,
      };
    return aQl.jsx(BMe, {
      startingMessage:
        "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
      onDone: async (s) => {
        let i = await NMe(context, s, {
          previousAccount: o,
        });
        onDone(
          s
            ? i.bridgeDisconnected
              ? `Login successful. ${Roe}`
              : "Login successful"
            : "Login interrupted",
          s ? Uyt(context, i) : void 0,
        );
      },
    });
  } catch (n) {
    (ke(n),
      setTimeout(
        onDone,
        0,
        "Failed to open browser. Please visit https://claude.ai/upgrade/max to upgrade.",
      ));
  }
  return null;
}
var aQl;
