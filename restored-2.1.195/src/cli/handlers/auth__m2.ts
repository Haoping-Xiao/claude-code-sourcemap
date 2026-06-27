// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ECo
// matched 2.1.88 source: src/cli/handlers/auth.ts
// class=modified (alt of src/cli/handlers/auth.ts)  jaccard=0.0261  score=0.1742  fileCov=0.0298
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module ECo] deps: @xmldom/xmldom/lib/entities.js, keybindings/useShortcutDisplay.ts, components/CustomSelect/select.tsx, components/design-system/Dialog.tsx, components/design-system/Dialog.tsx, components/ConfigurableShortcutHint.tsx, @smithy/types/dist-cjs/index.js, @xmldom/xmldom/lib/entities.js, ink/styles.ts, components/LogoV2/AnimatedClawd.tsx, components/ScrollKeybindingHandler.tsx, components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, utils/debug.ts, cli/print.ts, services/rateLimitMessages.ts, services/oauth/getOauthProfile.ts, @mixmark-io/domino/lib/htmlelts.js, utils/config.ts, components/Settings/Usage.tsx, utils/debug.ts, utils/errors.ts, utils/sequential.ts, services/mcp/types.ts, utils/agentContext.ts
((lq = R(lt(), 1)), (mg = R(rt(), 1)), (is = R(se(), 1)));
async function call(e, t) {
  if (Psl && I8t())
    return ACo.jsx(Psl, {
      onDone: e,
    });
  let n = await Fyt();
  if (n.type === "message") return (e(n.value), null);
  let r = Di();
  if (r === "team" || r === "enterprise")
    return (
      e(
        n.opened
          ? `Opened ${n.url} in your browser to manage usage credits for your organization.`
          : `Visit ${n.url} to manage usage credits for your organization.`,
      ),
      null
    );
  let o = Lc(),
    s = o && {
      accountUuid: o.accountUuid,
      organizationUuid: o.organizationUuid,
    };
  return ACo.jsx(BMe, {
    startingMessage:
      "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
    onDone: async (i) => {
      let a = await NMe(t, i, {
        previousAccount: s,
      });
      e(
        i
          ? a.bridgeDisconnected
            ? `Login successful. ${Roe}`
            : "Login successful"
          : "Login interrupted",
        i ? Uyt(t, a) : void 0,
      );
    },
  });
}
var ACo, Psl;
