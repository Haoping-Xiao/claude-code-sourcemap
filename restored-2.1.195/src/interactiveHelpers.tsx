// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y7o
// matched 2.1.88 source: src/interactiveHelpers.tsx
// class=modified  jaccard=0.0626  score=0.1693  fileCov=0.0903
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var y7o = E(() => {
  Ye();
  Fy();
  vi();
  ((G$c = R(lt(), 1)), (rK = R(se(), 1)));
});
function yxm() {
  gn((e) => ({
    ...e,
    hasCompletedOnboarding: true,
    lastOnboardingVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION,
  }));
}
function mmr(e, t) {
  return new Promise((n) => {
    let r = (o) => void n(o);
    e.render(t(r));
  });
}
async function q$c(e) {
  let t = await T9o(),
    n = $Vn();
  if (t.pendingServers.length === 0) return null;
  if (n.length === 0) {
    let o;
    try {
      o = await Edc(e, t);
    } catch (s) {
      throw (Le("mcp_project_approval_dialog", "mcp_project_approval_dialog_threw"), s);
    }
    if (o.persistFailed)
      return (
        Le("mcp_project_approval_dialog", "mcp_approval_persist_failed"),
        {
          key: "mcp-approval-persist-failed",
          text: "one or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) \xB7 you will be asked again next startup",
        }
      );
    return (xe("mcp_project_approval_dialog"), null);
  }
  let r = Uo(n.map((o) => o.file).filter(Boolean)).join(", ");
  return (
    It("mcp_project_approval_dialog", "mcp_project_approval_skipped_settings_errors"),
    {
      key: "mcp-approval-skipped",
      text: `skipping .mcp.json server approval (settings errors${r ? ` in ${r}` : ""}) \xB7 run /doctor and fix them, then restart`,
    }
  );
}
async function uO(e, t, n) {
  return _xm(e, t, {
    color: "error",
    beforeExit: n,
  });
}
async function _xm(e, t, n) {
  let { Text: r } = await Promise.resolve().then(() => (Ye(), wW)),
    o = n?.color,
    s = n?.exitCode ?? 1;
  if (
    (e.render(
      o
        ? hw.jsx(r, {
            color: o,
            children: t,
          })
        : hw.jsx(r, {
            children: t,
          }),
    ),
    e.unmount(),
    await n?.beforeExit?.(),
    s !== 0)
  ) {
    let { setBgExitCause: a } = await Promise.resolve().then(() => (FK(), sis));
    a("exit_with_message");
  }
  let { flushAnalyticsSinks: i } = await Promise.resolve().then(() => (Yp(), kWt));
  (await i(), process.exit(s));
}
function cO(e, t, n) {
  let r = process.env.CLAUDE_JOB_DIR
      ? Promise.resolve()
          .then(() => (Oze(), qQn))
          .then((s) => s.markStartupDialogBlocked())
          .catch(() => {
            return;
          })
      : void 0,
    o = mmr(e, (s) =>
      hw.jsx(AH, {
        onChangeAppState: n?.onChangeAppState,
        children: hw.jsx(TT, {
          children: t(s),
        }),
      }),
    );
  if (!r) return o;
  return o.finally(() =>
    r
      .then((s) =>
        s
          ? Promise.resolve()
              .then(() => (Oze(), qQn))
              .then((i) => i.clearStartupDialogBlocked(s))
          : void 0,
      )
      .catch(() => {}),
  );
}
async function F7e(e, t) {
  (e.render(t), gmr(), await e.waitUntilExit(), await ki(0));
}
async function z$c(e, t, n, r, o, s, i) {
  let a = null;
  if (Js() || Oe.CLAUDE_BRIDGE_REATTACH_SESSION)
    return (
      Qve(true),
      Mst(),
      iL().catch((p) => ke(Zr(p))),
      hH(),
      (a = await q$c(e)),
      e3(),
      gzn(),
      setImmediate(() => fTt()),
      {
        onboardingShown: false,
        mcpApprovalSkipWarning: a,
        claudeInChromeAccepted: false,
      }
    );
  if (ut(false) || process.env.IS_DEMO)
    return (
      gzn(),
      {
        onboardingShown: false,
        mcpApprovalSkipWarning: a,
        claudeInChromeAccepted: false,
      }
    );
  let l = Dt(),
    c = false;
  if (
    !l.hasCompletedOnboarding ||
    Oe.CLAUDE_CODE_POWERUP_ONBOARDING === "banner" ||
    Oe.CLAUDE_CODE_POWERUP_ONBOARDING === "step"
  ) {
    c = true;
    let { Onboarding: p } = await Promise.resolve().then(() => (zMc(), VMc));
    await cO(
      e,
      (f) =>
        hw.jsx(p, {
          onDone: () => {
            (yxm(), f());
          },
        }),
      {
        onChangeAppState: DTe,
      },
    );
  }
  let u = false;
  if (!Oe.CLAUBBIT) {
    if (!ad()) {
      u = true;
      let { TrustDialog: p } = await Promise.resolve().then(() => (A$c(), E$c));
      await cO(e, (f) =>
        hw.jsx(p, {
          commands: r,
          onDone: f,
        }),
      );
    }
    if ((Qve(true), u)) PI("post-trust: re-discover project @skills-dir plugins");
    if ((Mst(), !l.hasCompletedOnboarding)) {
      nke();
      let p = Date.now();
      try {
        (await vc(iL(), bxm, V$c), T(`[STARTUP] post-onboarding GB await ${Date.now() - p}ms`));
      } catch (f) {
        if (
          (T(`[STARTUP] post-onboarding GB await ${Date.now() - p}ms: ${f}`, {
            level: "warn",
          }),
          !(f instanceof Error && f.message === V$c))
        )
          ke(Zr(f));
      }
    } else iL().catch((p) => ke(Zr(p)));
    if ((hH(), (a = await q$c(e)), await $so())) {
      let p = Uct(await Wv(true)),
        { ClaudeMdExternalIncludesDialog: f } = await Promise.resolve().then(() => (_1o(), UMl));
      await cO(e, (m) =>
        hw.jsx(f, {
          onDone: m,
          isStandaloneDialog: true,
          externalIncludes: p,
        }),
      );
    }
  }
  if ((bMc(), hMc(), e3(), gzn(), u)) {
    if (!da() && !md())
      Promise.resolve()
        .then(() => (YJn(), KJn))
        .then((p) => p.startMemoryWatcher());
  }
  if ((setImmediate(() => fTt()), await Tft())) {
    let { GroveDialog: p } = await Promise.resolve().then(() => (Yjo(), eKl));
    if (
      (await cO(e, (m) =>
        hw.jsx(p, {
          showIfAlreadyViewed: false,
          location: c ? "onboarding" : "policy_update_modal",
          onDone: m,
        }),
      )) === "escape"
    )
      return (
        G("tengu_grove_policy_exited", {}),
        Bc(0),
        {
          onboardingShown: false,
          mcpApprovalSkipWarning: a,
          claudeInChromeAccepted: false,
        }
      );
  }
  {
    let { getProTrialState: p } = await Promise.resolve().then(() => (hAt(), s5l));
    if (p().status === "not_started") {
      let { ProTrialStartScreen: f } = await Promise.resolve().then(() => (w$c(), v$c));
      (G("tengu_pro_trial_start_screen_shown", {}),
        await cO(e, (m) =>
          hw.jsx(f, {
            onDone: m,
          }),
        ));
    }
  }
  if (c) {
    let { resolvePowerupDiscoveryArm: p } = await Promise.resolve().then(() => (Eor(), R5l));
    if (p() === "step") {
      let { PowerupDiscoveryStep: f } = await Promise.resolve().then(() => (k$c(), x$c));
      await cO(e, (m) =>
        hw.jsx(f, {
          onDone: m,
        }),
      );
    }
  }
  if (process.env.ANTHROPIC_API_KEY && !nv() && fr() === "firstParty") {
    let p = KB(process.env.ANTHROPIC_API_KEY);
    if (xZt(p) === "new") {
      let { ApproveApiKey: m } = await Promise.resolve().then(() => (p7o(), PMc));
      await cO(
        e,
        (g) =>
          hw.jsx(m, {
            customApiKeyTruncated: p,
            onDone: g,
          }),
        {
          onChangeAppState: DTe,
        },
      );
    }
  }
  try {
    await Sxm(e);
  } catch (p) {
    ke(p);
  }
  try {
    await Axm(e);
  } catch (p) {
    ke(p);
  }
  try {
    await Exm(e);
  } catch (p) {
    ke(p);
  }
  if ((t === "bypassPermissions" || n) && !uj()) {
    let { BypassPermissionsModeDialog: p } = await Promise.resolve().then(() => (D$c(), L$c));
    await cO(e, (f) =>
      hw.jsx(p, {
        onAccept: f,
      }),
    );
  }
  if (t === "auto" && !RG()) {
    let { AutoModeOptInDialog: p } = await Promise.resolve().then(() => (Edr(), C6o));
    await cO(e, (f) =>
      hw.jsx(p, {
        onAccept: f,
        onDecline: () => Bc(1),
        declineExits: true,
      }),
    );
  }
  if (MA().length > 0 || (s?.length ?? 0) > 0) await _U("tengu_harbor");
  if (s && s.length > 0) {
    let [{ isChannelsEnabled: p }, { isChannelsPolicyBlocked: f }, { getSettingsForSource: m }] =
      await Promise.all([
        Promise.resolve().then(() => (j_t(), Gfl)),
        Promise.resolve().then(() => (I6e(), qfl)),
        Promise.resolve().then(() => (dr(), EY)),
      ]);
    if (!p() || fr() !== "firstParty" || f(m("policySettings")))
      (Mge([
        ...MA(),
        ...s.map((g) => ({
          ...g,
          dev: true,
        })),
      ]),
        Dsn(true));
    else {
      let { DevChannelsDialog: g } = await Promise.resolve().then(() => ($$c(), M$c));
      await cO(e, (h) =>
        hw.jsx(g, {
          channels: s,
          onAccept: () => {
            (Mge([
              ...MA(),
              ...s.map((y) => ({
                ...y,
                dev: true,
              })),
            ]),
              Dsn(true),
              h());
          },
        }),
      );
    }
  }
  if (o && !Dt().hasCompletedClaudeInChromeOnboarding) {
    let { ClaudeInChromeOnboarding: p } = await Promise.resolve().then(() => (B$c(), N$c));
    await cO(e, (f) =>
      hw.jsx(p, {
        onDone: f,
      }),
    );
  }
  let d = false;
  if (i) {
    let { isChromeExtensionInstalled: p } = await Promise.resolve().then(() => (DHe(), yBo)),
      f = await vc(p(), 1500, "chrome extension scan timed out before offer").catch(() => true),
      m = Boolean(Dt().chromeExtension?.pairedDeviceId);
    if (f || m) {
      await vc(
        iL().catch(() => {}),
        1500,
        "GrowthBook init timed out before chrome offer",
      ).catch(() => {});
      let g = at("tengu_chrome_auto_enable", false),
        h = Dt().claudeInChromeDefaultEnabled !== void 0,
        { doesEnterpriseMcpConfigExist: y, isMcpServerDenied: b } = await Promise.resolve().then(
          () => (Kv(), kCa),
        ),
        { CLAUDE_IN_CHROME_MCP_SERVER_NAME: _ } = await Promise.resolve().then(() => (VM(), dKi)),
        { getClaudeInChromeMcpServerConfig: S } = await Promise.resolve().then(() => (DHe(), yBo));
      if (y() || b(_, S()))
        T(
          "[Claude in Chrome] Skipping offer: blocked by enterprise MCP config or managed deniedMcpServers policy",
        );
      else if (h)
        (T(
          "[Claude in Chrome] Skipping offer: decision already recorded (another instance answered)",
        ),
          (d = Dt().claudeInChromeDefaultEnabled === true));
      else if (g) {
        let { ChromeAutoEnableDialog: v } = await Promise.resolve().then(() => (j$c(), F$c));
        d = await cO(e, (C) =>
          hw.jsx(v, {
            onDone: C,
            isDontAskMode: t === "dontAsk",
            isAutoMode: t === "auto",
          }),
        );
      } else
        T(
          "[Claude in Chrome] Skipping offer: tengu_chrome_auto_enable no longer set (stale GB cache)",
        );
    } else T("[Claude in Chrome] Skipping offer: extension not present locally (stale cache)");
  }
  return {
    onboardingShown: c,
    mcpApprovalSkipWarning: a,
    claudeInChromeAccepted: d,
  };
}
async function Sxm(e) {
  let { findBedrockUpgradeCandidates: t, upgradeKey: n } = await Promise.resolve().then(
      () => (o7o(), r7o),
    ),
    r = await B7e("bedrock-upgrade", t());
  if (r.length === 0) return;
  let o = Dt().bedrockDeclinedUpgrades ?? {},
    s = r.filter((c) => o[c.tier] !== n(c));
  if (s.length === 0) return;
  let { updateSettingsForSource: i } = await Promise.resolve().then(() => (dr(), EY)),
    { ThirdPartyModelUpgradeDialog: a } = await Promise.resolve().then(() => (y7o(), h7o)),
    l = false;
  for (let c of s)
    if (
      await cO(e, (d) =>
        hw.jsx(a, {
          tierLabel: PZ[c.tier],
          fromName: c.fromMarketingName,
          toName: c.toMarketingName,
          toProviderId: c.toBedrockId,
          onDone: d,
        }),
      )
    ) {
      let d =
          c.tier === "haiku"
            ? {
                ANTHROPIC_DEFAULT_HAIKU_MODEL: c.toBedrockId,
                ...(c.envVar === "ANTHROPIC_SMALL_FAST_MODEL" && {
                  ANTHROPIC_SMALL_FAST_MODEL: c.toBedrockId,
                }),
              }
            : {
                [c.envVar]: c.toBedrockId,
              },
        { error: p } = i("userSettings", {
          env: d,
        });
      if (p) {
        G("tengu_bedrock_upgrade_save_failed", {
          tier: c.tier,
        });
        let { Text: f } = await Promise.resolve().then(() => (Ye(), wW));
        await mmr(
          e,
          (m) => (
            setTimeout(m, 2000),
            hw.jsxs(f, {
              color: "error",
              children: ["Failed to save ", PZ[c.tier], " upgrade to settings."],
            })
          ),
        );
      } else {
        for (let f of Object.keys(d)) process.env[f] = c.toBedrockId;
        ((l = true),
          G("tengu_bedrock_upgrade_accepted", {
            tier: c.tier,
            from_key: c.fromKey,
            to_key: c.toKey,
          }));
      }
    } else
      (gn((d) => ({
        ...d,
        bedrockDeclinedUpgrades: {
          ...d.bedrockDeclinedUpgrades,
          [c.tier]: n(c),
        },
      })),
        G("tengu_bedrock_upgrade_declined", {
          tier: c.tier,
          from_key: c.fromKey,
          to_key: c.toKey,
        }));
  if (l) (G("tengu_bedrock_upgrade_relaunch", {}), await K$c(e));
}
async function K$c(e) {
  let { Text: t } = await Promise.resolve().then(() => (Ye(), wW));
  e.render(
    hw.jsx(t, {
      dimColor: true,
      children: "Restarting Claude Code to apply the new model\u2026",
    }),
  );
  let { sleep: n } = await Promise.resolve().then(() => iMt);
  (await n(250), e.unmount());
  let { execRelaunch: r } = await Promise.resolve().then(() => (K9e(), z9e));
  await r();
}
async function Exm(e) {
  let { lines: t, hasHardFailure: n } = await c7o();
  if (t.length === 0) return;
  let { Box: r, Text: o } = await Promise.resolve().then(() => (Ye(), wW)),
    s = n ? 4000 : 1500;
  await mmr(
    e,
    (i) => (
      setTimeout(i, s),
      hw.jsx(r, {
        flexDirection: "column",
        children: t.map((a) =>
          hw.jsx(
            o,
            {
              color: "warning",
              children: a,
            },
            a,
          ),
        ),
      })
    ),
  );
}
async function Axm(e) {
  let { findVertexUpgradeCandidates: t, vertexUpgradeKey: n } = await Promise.resolve().then(
      () => (a7o(), i7o),
    ),
    r = await B7e("vertex-upgrade", t());
  if (r.length === 0) return;
  let o = Dt().vertexDeclinedUpgrades ?? {},
    s = r.filter((c) => o[c.tier] !== n(c));
  if (s.length === 0) return;
  let { updateSettingsForSource: i } = await Promise.resolve().then(() => (dr(), EY)),
    { ThirdPartyModelUpgradeDialog: a } = await Promise.resolve().then(() => (y7o(), h7o)),
    l = false;
  for (let c of s)
    if (
      await cO(e, (d) =>
        hw.jsx(a, {
          tierLabel: PZ[c.tier],
          fromName: c.fromMarketingName,
          toName: c.toMarketingName,
          toProviderId: c.toVertexId,
          onDone: d,
        }),
      )
    ) {
      let d =
          c.tier === "haiku"
            ? {
                ANTHROPIC_DEFAULT_HAIKU_MODEL: c.toVertexId,
                ...(c.envVar === "ANTHROPIC_SMALL_FAST_MODEL" && {
                  ANTHROPIC_SMALL_FAST_MODEL: c.toVertexId,
                }),
              }
            : {
                [c.envVar]: c.toVertexId,
              },
        { error: p } = i("userSettings", {
          env: d,
        });
      if (p) {
        G("tengu_vertex_upgrade_save_failed", {
          tier: c.tier,
        });
        let { Text: f } = await Promise.resolve().then(() => (Ye(), wW));
        await mmr(
          e,
          (m) => (
            setTimeout(m, 2000),
            hw.jsxs(f, {
              color: "error",
              children: ["Failed to save ", PZ[c.tier], " upgrade to settings."],
            })
          ),
        );
      } else {
        for (let f of Object.keys(d)) process.env[f] = c.toVertexId;
        ((l = true),
          G("tengu_vertex_upgrade_accepted", {
            tier: c.tier,
            from_key: c.fromKey,
            to_key: c.toKey,
          }));
      }
    } else
      (gn((d) => ({
        ...d,
        vertexDeclinedUpgrades: {
          ...d.vertexDeclinedUpgrades,
          [c.tier]: n(c),
        },
      })),
        G("tengu_vertex_upgrade_declined", {
          tier: c.tier,
          from_key: c.fromKey,
          to_key: c.toKey,
        }));
  if (l) (G("tengu_vertex_upgrade_relaunch", {}), await K$c(e));
}
function Y$c(e) {
  let t = 0,
    n = lN(e);
  if (n.stdin) G("tengu_stdin_interactive", {});
  let r = new t7o(),
    o = h8o();
  c_r(o);
  let s = Oe.CLAUDE_CODE_FRAME_TIMING_LOG,
    i = -1,
    a = 0,
    l = Math.max(1, Oe.CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY || 1);
  if (s)
    try {
      i = fmr.openSync(s, "a");
    } catch {}
  return {
    getFpsMetrics: () => r.getMetrics(),
    stats: o,
    renderOptions: {
      ...n,
      onFrame: (c) => {
        if (
          (r.record(c.durationMs), o.observe("frame_duration_ms", c.durationMs), i >= 0 && c.phases)
        ) {
          let u = a++ % l === 0,
            d =
              JSON.stringify({
                total: c.durationMs,
                ...c.phases,
                ...(u && {
                  rss: process.memoryUsage.rss(),
                  cpu: process.cpuUsage(),
                }),
              }) +
              `
`;
          fmr.writeSync(i, d);
        }
        if (LU()) return;
        for (let u of c.flickers) {
          if (u.reason === "resize") continue;
          let d = Date.now();
          if (d - t < 1000)
            G("tengu_flicker", {
              desiredHeight: u.desiredHeight,
              actualHeight: u.availableHeight,
              reason: u.reason,
            });
          t = d;
        }
      },
    },
  };
}
var fmr,
  hw,
  bxm = 2000,
  V$c = "GB post-onboarding init";
