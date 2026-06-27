// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GUs
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js
// class=partial  jaccard=0.1592  score=0.6488  fileCov=0.1742
// note: low-confidence suggestion: node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var GUs = E(() => {
  FUs();
});
var $$r,
  Rtt,
  WUs,
  dDt = !1,
  O$r = async ({
    ssoStartUrl: e,
    ssoSession: t,
    ssoAccountId: n,
    ssoRegion: r,
    ssoRoleName: o,
    ssoClient: s,
    clientConfig: i,
    parentClientConfig: a,
    profile: l,
    filepath: c,
    configFilepath: u,
    ignoreCache: d,
    logger: p
  }) => {
    let f,
      m = "To refresh this SSO session run aws sso login with the corresponding profile.";
    if (t) try {
      let D = await Rhn({
        profile: l,
        filepath: c,
        configFilepath: u,
        ignoreCache: d
      })();
      f = {
        accessToken: D.token,
        expiresAt: new Date(D.expiration).toISOString()
      };
    } catch (D) {
      throw new Rtt.CredentialsProviderError(D.message, {
        tryNextLink: dDt,
        logger: p
      });
    } else try {
      f = await WUs.getSSOTokenFromFile(e);
    } catch (D) {
      throw new Rtt.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", {
        tryNextLink: dDt,
        logger: p
      });
    }
    if (new Date(f.expiresAt).getTime() - Date.now() <= 0) throw new Rtt.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", {
      tryNextLink: dDt,
      logger: p
    });
    let {
        accessToken: g
      } = f,
      {
        SSOClient: h,
        GetRoleCredentialsCommand: y
      } = await Promise.resolve().then(() => (GUs(), jUs)),
      b = s || new h(Object.assign({}, i ?? {}, {
        logger: i?.logger ?? a?.logger,
        region: i?.region ?? r,
        userAgentAppId: i?.userAgentAppId ?? a?.userAgentAppId
      })),
      _;
    try {
      _ = await b.send(new y({
        accountId: n,
        roleName: o,
        accessToken: g
      }));
    } catch (D) {
      throw new Rtt.CredentialsProviderError(D, {
        tryNextLink: dDt,
        logger: p
      });
    }
    let {
      roleCredentials: {
        accessKeyId: S,
        secretAccessKey: A,
        sessionToken: v,
        expiration: C,
        credentialScope: x,
        accountId: I
      } = {}
    } = _;
    if (!S || !A || !v || !C) throw new Rtt.CredentialsProviderError("SSO returns an invalid temporary credential.", {
      tryNextLink: dDt,
      logger: p
    });
    let k = {
      accessKeyId: S,
      secretAccessKey: A,
      sessionToken: v,
      expiration: new Date(C),
      ...(x && {
        credentialScope: x
      }),
      ...(I && {
        accountId: I
      })
    };
    if (t) $$r.setCredentialFeature(k, "CREDENTIALS_SSO", "s");else $$r.setCredentialFeature(k, "CREDENTIALS_SSO_LEGACY", "u");
    return k;
  };