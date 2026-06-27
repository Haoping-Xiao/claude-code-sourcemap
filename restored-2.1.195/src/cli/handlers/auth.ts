// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MAo
// matched 2.1.88 source: src/cli/handlers/auth.ts
// class=modified  jaccard=0.3486  score=0.4566  fileCov=0.5958
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: installOAuthTokens, authStatus, authLogout, authLogin
// [unwrapped __esm module MAo] deps: @xmldom/xmldom/lib/entities.js, services/analytics/index.ts, hooks/useTerminalSize.ts, utils/sessionStorage.ts, utils/http.ts, constants/xml.ts, utils/claudemd.ts, utils/plugins/schemas.ts, utils/nativeInstaller/download.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/nativeInstaller/download.ts, utils/profilerBase.ts, utils/ide.ts, utils/agentContext.ts, utils/status.tsx, utils/mtls.ts, services/mcp/config.ts, utils/proxy.ts, utils/bash/bashParser.ts, utils/status.tsx, utils/settings/changeDetector.ts, utils/settings/settings.ts, utils/settings/settings.ts
dKa = R(se(), 1);
async function pKa(e) {
  process.stderr.write(
    e +
      `
`,
  );
  try {
    (await Qu("cli_auth_login", "cli_auth_login_org_not_allowed"), await lVe());
  } catch {}
  process.exit(1);
}
async function installOAuthTokens(tokens) {
  await ggt({
    clearOnboarding: !1,
    preserveInProcessTokens: !0,
    preserveNonAnthropicAuth: !0,
  });
  let profile = tokens.profile ?? (await OIe(tokens.accessToken));
  if (profile?.account && profile.organization)
    Cnt({
      accountUuid: profile.account.uuid,
      emailAddress: profile.account.email,
      organizationUuid: profile.organization.uuid,
      displayName: profile.account.display_name || void 0,
      hasExtraUsageEnabled: profile.organization.has_extra_usage_enabled ?? void 0,
      billingType: profile.organization.billing_type ?? void 0,
      subscriptionCreatedAt: profile.organization.subscription_created_at ?? void 0,
      accountCreatedAt: profile.account.created_at,
      ccOnboardingFlags: profile.organization.cc_onboarding_flags ?? {},
      claudeCodeTrialEndsAt: profile.organization.claude_code_trial_ends_at ?? null,
      claudeCodeTrialDurationDays: profile.organization.claude_code_trial_duration_days ?? null,
      seatTier: profile.organization.seat_tier ?? null,
      profileFetchedAt: Date.now(),
    });
  else if (tokens.tokenAccount)
    Cnt({
      accountUuid: tokens.tokenAccount.uuid,
      emailAddress: tokens.tokenAccount.emailAddress,
      organizationUuid: tokens.tokenAccount.organizationUuid,
    });
  ZGe({
    action: "login",
    success: !0,
    authMethod: "oauth",
  });
  let n = await jle(tokens);
  if ((dU(), process.env.CLAUDE_CODE_OAUTH_TOKEN))
    if (n.success) delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
    else process.env.CLAUDE_CODE_OAUTH_TOKEN = tokens.accessToken;
  if (TCt()) iee(n.success ? null : tokens.accessToken);
  if (n.warning)
    G("tengu_oauth_storage_warning", {
      warning: n.warning,
    });
  if (
    (await yUr(tokens.accessToken).catch((r) =>
      T(String(r), {
        level: "error",
      }),
    ),
    hj(tokens.scopes))
  )
    await rza().catch((r) =>
      T(String(r), {
        level: "error",
      }),
    );
  else if (!(await _Ur(tokens.accessToken)))
    throw Error(
      "Unable to create API key. The server accepted the request but did not return a key.",
    );
  (await Gqt(), await RPe());
}
async function authLogin({ email: e, sso: t, console: n, claudeai: r }) {
  if (n && r)
    (process.stderr.write(`Error: --console and --claudeai cannot be used together.
`),
      process.exit(1));
  let settings = Dr(),
    s = yn("policySettings");
  if (Bet($he()) && s?.forceLoginMethod === "gateway")
    (process.stderr
      .write(`forceLoginMethod is 'gateway' in managed settings; run interactive /login to authenticate.
`),
      process.exit(1));
  let i = settings.forceLoginMethod === "gateway" ? void 0 : settings.forceLoginMethod,
    a = i ? i === "claudeai" : !n,
    l = settings.forceLoginMethod !== void 0 && a !== (settings.forceLoginMethod === "claudeai"),
    c = typeof settings.forceLoginOrgUUID === "string" && !l ? settings.forceLoginOrgUUID : void 0,
    u = process.env.CLAUDE_CODE_OAUTH_REFRESH_TOKEN;
  if (u) {
    let m = process.env.CLAUDE_CODE_OAUTH_SCOPES;
    if (!m)
      (process.stderr
        .write(`CLAUDE_CODE_OAUTH_SCOPES is required when using CLAUDE_CODE_OAUTH_REFRESH_TOKEN.
Set it to the space-separated scopes the refresh token was issued with
(e.g. "user:inference" or "user:profile user:inference user:sessions:claude_code user:mcp_servers").
`),
        process.exit(1));
    let g = m.split(/\s+/).filter(Boolean);
    try {
      G("tengu_login_from_refresh_token", {});
      let h = await ite(u, {
        scopes: g,
        expiresIn: lFe,
        clientId: process.env.CLAUDE_CODE_OAUTH_CLIENT_ID || void 0,
      });
      await installOAuthTokens(h);
      let y = await Wle();
      if (!y.valid) await pKa(y.message);
      (gn((b) => {
        if (b.hasCompletedOnboarding) return b;
        return {
          ...b,
          hasCompletedOnboarding: !0,
        };
      }),
        G("tengu_oauth_success", {
          loginWithClaudeAi: hj(h.scopes),
        }),
        xe("cli_auth_login"),
        process.stdout.write(`Login successful.
`),
        process.exit(0));
    } catch (h) {
      if ((Le("cli_auth_login", "cli_auth_login_refresh_token_failed"), R_(h)))
        T(`Login from refresh token failed: ${be(h)}`, {
          level: "error",
        });
      else ke(h);
      let y = dLe(h);
      (process.stderr.write(`Login failed: ${be(h)}
${
  y
    ? y +
      `
`
    : ""
}`),
        process.exit(1));
    }
  }
  let d = t ? "sso" : void 0,
    oauthService = new I6(),
    f = fKa.createInterface({
      input: process.stdin,
    });
  f.on("line", (m) => {
    let [g, h] = m.trim().split("#");
    if (!g || !h) {
      process.stderr.write(`Invalid code. Please make sure the full code was copied.
`);
      return;
    }
    (G("tengu_oauth_manual_entry", {}),
      oauthService.handleManualAuthCodeInput({
        authorizationCode: g,
        state: h,
      }));
  });
  try {
    G("tengu_oauth_flow_start", {
      loginWithClaudeAi: a,
    });
    let m = await oauthService.startOAuthFlow(
      async (h) => {
        (process.stdout.write(`Opening browser to sign in\u2026
`),
          process.stdout.write(`If the browser didn't open, visit: ${sP(h)}
`),
          process.stdout.write("Paste code here if prompted > "));
      },
      {
        loginWithClaudeAi: a,
        loginHint: e,
        loginMethod: d,
        orgUUID: c,
      },
    );
    await installOAuthTokens(m);
    let g = await Wle();
    if (!g.valid) await pKa(g.message);
    (G("tengu_oauth_success", {
      loginWithClaudeAi: a,
    }),
      xe("cli_auth_login"),
      process.stdout.write(`Login successful.
`),
      process.exit(0));
  } catch (m) {
    if ((Le("cli_auth_login", "cli_auth_login_oauth_flow_failed"), R_(m)))
      T(`OAuth login failed: ${be(m)}`, {
        level: "error",
      });
    else ke(m);
    let g = dLe(m);
    (process.stderr.write(`Login failed: ${be(m)}
${
  g
    ? g +
      `
`
    : ""
}`),
      process.exit(1));
  } finally {
    (f.close(), oauthService.cleanup());
  }
}
async function authStatus(opts, t) {
  let { source: n, hasToken: r } = aI(),
    { source: o } = Ty(),
    s = !!process.env.ANTHROPIC_API_KEY && !nv(),
    i = Lc(),
    a = Di(),
    l = g7(),
    c = r || o !== "none" || s || l,
    u = "none";
  if (l) u = "third_party";
  else if (n === "claude.ai") u = "claude.ai";
  else if (n === "apiKeyHelper") u = "api_key_helper";
  else if (n !== "none") u = "oauth_token";
  else if (o === "ANTHROPIC_API_KEY" || s) u = "api_key";
  else if (o === "/login managed key") u = "claude.ai";
  let d;
  if (t.text) {
    let p = OVn([[...NVn(), ...BVn()]]).flat(),
      f = [];
    for (let m of p) {
      let g =
        typeof m.value === "string" ? m.value : Array.isArray(m.value) ? m.value.join(", ") : null;
      if (g === null || g === "none") continue;
      f.push(m.label ? `${m.label}: ${g}` : g);
    }
    if (f.length === 0 && s) f.push("API key: ANTHROPIC_API_KEY");
    if (!c) f.push("Not logged in. Run claude auth login to authenticate.");
    d = Pgt.jsx(w, {
      children: f.join(`
`),
    });
  } else {
    let p = fr(),
      f = o !== "none" ? o : s ? "ANTHROPIC_API_KEY" : null,
      m = {
        loggedIn: c,
        authMethod: u,
        apiProvider: p,
      };
    if (f) m.apiKeySource = f;
    if (u === "claude.ai")
      ((m.email = i?.emailAddress ?? null),
        (m.orgId = i?.organizationUuid ?? null),
        (m.orgName = i?.organizationName ?? null),
        (m.subscriptionType = a ?? null));
    d = Pgt.jsx(w, {
      children: De(m, null, 2),
    });
  }
  (xe("cli_auth_status"),
    opts.render(
      Pgt.jsx(V_, {
        children: d,
      }),
    ),
    await opts.waitUntilExit(),
    process.exit(c ? 0 : 1));
}
async function authLogout(e) {
  try {
    await ggt({
      clearOnboarding: !1,
    });
  } catch (t) {
    (Le("cli_auth_logout", "cli_auth_logout_failed"),
      ke(t),
      process.stderr.write(`Logout failed: ${be(t)}
`),
      process.exit(1));
  }
  (xe("cli_auth_logout"),
    e.render(
      Pgt.jsx(V_, {
        children: Pgt.jsx(w, {
          children: "Successfully logged out from your Anthropic account.",
        }),
      }),
    ),
    await e.waitUntilExit());
}
var fKa, Pgt;
