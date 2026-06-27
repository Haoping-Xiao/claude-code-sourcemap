// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iQl
// matched 2.1.88 source: src/commands/upgrade/upgrade.tsx
// class=modified  jaccard=0.4607  score=0.633  fileCov=0.6286
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var iQl = E(() => {
  jc();
  oo();
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
});
var r3o = {};
_t(r3o, {
  call: () => call,
});
async function call(e, t) {
  try {
    if (bo()) {
      let s = Ws(),
        i = !1;
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
            e,
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
        let i = await NMe(t, s, {
          previousAccount: o,
        });
        e(
          s
            ? i.bridgeDisconnected
              ? `Login successful. ${Roe}`
              : "Login successful"
            : "Login interrupted",
          s ? Uyt(t, i) : void 0,
        );
      },
    });
  } catch (n) {
    (ke(n),
      setTimeout(
        e,
        0,
        "Failed to open browser. Please visit https://claude.ai/upgrade/max to upgrade.",
      ));
  }
  return null;
}
var aQl;
