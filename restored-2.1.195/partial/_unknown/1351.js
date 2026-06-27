// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gZs
// matched 2.1.88 source: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/index.js
// class=partial  jaccard=0.1339  score=1  fileCov=0.1339
// note: low-confidence suggestion: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/sts/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gZs = E(() => {
  mEn();
  GUr();
  hEn();
  WUr();
  qUr();
  VUr();
  zUr();
  KUr();
  YUr();
  XUr();
  JUr();
});
var vEn,
  hZs,
  yZs = e => {
    if (typeof e?.Arn === "string") {
      let t = e.Arn.split(":");
      if (t.length > 4 && t[4] !== "") return t[4];
    }
    return;
  },
  _Zs = async (e, t, n, r = {}) => {
    let o = typeof e === "function" ? await e() : e,
      s = typeof t === "function" ? await t() : t,
      i = await hZs.stsRegionDefaultResolver(r)();
    return n?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${o} (credential provider clientConfig)`, `${s} (contextual client)`, `${i} (STS default: AWS_REGION, profile region, or us-east-1)`), o ?? s ?? i;
  },
  bZs = (e, t) => {
    let n, r;
    return async (o, s) => {
      if (r = o, !n) {
        let {
            logger: u = e?.parentClientConfig?.logger,
            profile: d = e?.parentClientConfig?.profile,
            region: p,
            requestHandler: f = e?.parentClientConfig?.requestHandler,
            credentialProviderLogger: m,
            userAgentAppId: g = e?.parentClientConfig?.userAgentAppId
          } = e,
          h = await _Zs(p, e?.parentClientConfig?.region, m, {
            logger: u,
            profile: d
          }),
          y = !EZs(f);
        n = new t({
          ...e,
          userAgentAppId: g,
          profile: d,
          credentialDefaultProvider: () => async () => r,
          region: h,
          requestHandler: y ? f : void 0,
          logger: u
        });
      }
      let {
        Credentials: i,
        AssumedRoleUser: a
      } = await n.send(new $nt(s));
      if (!i || !i.AccessKeyId || !i.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${s.RoleArn}`);
      let l = yZs(a),
        c = {
          accessKeyId: i.AccessKeyId,
          secretAccessKey: i.SecretAccessKey,
          sessionToken: i.SessionToken,
          expiration: i.Expiration,
          ...(i.CredentialScope && {
            credentialScope: i.CredentialScope
          }),
          ...(l && {
            accountId: l
          })
        };
      return vEn.setCredentialFeature(c, "CREDENTIALS_STS_ASSUME_ROLE", "i"), c;
    };
  },
  SZs = (e, t) => {
    let n;
    return async r => {
      if (!n) {
        let {
            logger: l = e?.parentClientConfig?.logger,
            profile: c = e?.parentClientConfig?.profile,
            region: u,
            requestHandler: d = e?.parentClientConfig?.requestHandler,
            credentialProviderLogger: p,
            userAgentAppId: f = e?.parentClientConfig?.userAgentAppId
          } = e,
          m = await _Zs(u, e?.parentClientConfig?.region, p, {
            logger: l,
            profile: c
          }),
          g = !EZs(d);
        n = new t({
          ...e,
          userAgentAppId: f,
          profile: c,
          region: m,
          requestHandler: g ? d : void 0,
          logger: l
        });
      }
      let {
        Credentials: o,
        AssumedRoleUser: s
      } = await n.send(new Ont(r));
      if (!o || !o.AccessKeyId || !o.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${r.RoleArn}`);
      let i = yZs(s),
        a = {
          accessKeyId: o.AccessKeyId,
          secretAccessKey: o.SecretAccessKey,
          sessionToken: o.SessionToken,
          expiration: o.Expiration,
          ...(o.CredentialScope && {
            credentialScope: o.CredentialScope
          }),
          ...(i && {
            accountId: i
          })
        };
      if (i) vEn.setCredentialFeature(a, "RESOLVED_ACCOUNT_ID", "T");
      return vEn.setCredentialFeature(a, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), a;
    };
  },
  EZs = e => e?.metadata?.handlerProtocol === "h2";