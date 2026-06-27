// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mmn
// matched 2.1.88 source: node_modules/@smithy/credential-provider-imds/dist-cjs/index.js
// class=partial  jaccard=0.1565  score=0.7825  fileCov=0.1636
// note: low-confidence suggestion: node_modules/@smithy/credential-provider-imds/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Mmn = E(() => {
  Pmn = R(by(), 1), lIs = require("buffer"), cIs = require("http");
});
var $mn = e => Boolean(e) && typeof e === "object" && typeof e.AccessKeyId === "string" && typeof e.SecretAccessKey === "string" && typeof e.Token === "string" && typeof e.Expiration === "string",
  Omn = e => ({
    accessKeyId: e.AccessKeyId,
    secretAccessKey: e.SecretAccessKey,
    sessionToken: e.Token,
    expiration: new Date(e.Expiration),
    ...(e.AccountId && {
      accountId: e.AccountId
    })
  });
var UNu = 1000,
  FNu = 0,
  ALt = ({
    maxRetries: e = 0,
    timeout: t = 1000
  }) => ({
    maxRetries: e,
    timeout: t
  });
var HLt = (e, t) => {
  let n = e();
  for (let r = 0; r < t; r++) n = n.catch(e);
  return n;
};
var TLt,
  uIs,
  Nmn = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
  Bmn = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
  QLr = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
  ZLr = (e = {}) => {
    let {
      timeout: t,
      maxRetries: n
    } = ALt(e);
    return () => HLt(async () => {
      let r = await VNu({
          logger: e.logger
        }),
        o = JSON.parse(await jNu(t, r));
      if (!$mn(o)) throw new TLt.CredentialsProviderError("Invalid response received from instance metadata service.", {
        logger: e.logger
      });
      return Omn(o);
    }, n);
  },
  jNu = async (e, t) => {
    if (process.env[QLr]) t.headers = {
      ...t.headers,
      Authorization: process.env[QLr]
    };
    return (await PCe({
      ...t,
      timeout: e
    })).toString();
  },
  GNu = "169.254.170.2",
  WNu,
  qNu,
  VNu = async ({
    logger: e
  }) => {
    if (process.env[Bmn]) return {
      hostname: GNu,
      path: process.env[Bmn]
    };
    if (process.env[Nmn]) {
      let t = uIs.parse(process.env[Nmn]);
      if (!t.hostname || !(t.hostname in WNu)) throw new TLt.CredentialsProviderError(`${t.hostname} is not a valid container metadata service hostname`, {
        tryNextLink: !1,
        logger: e
      });
      if (!t.protocol || !(t.protocol in qNu)) throw new TLt.CredentialsProviderError(`${t.protocol} is not a valid container metadata service protocol`, {
        tryNextLink: !1,
        logger: e
      });
      return {
        ...t,
        port: t.port ? parseInt(t.port, 10) : void 0
      };
    }
    throw new TLt.CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${Bmn} or ${Nmn} environment variable is set`, {
      tryNextLink: !1,
      logger: e
    });
  };