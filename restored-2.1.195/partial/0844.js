// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XRs
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/requestHelpers.js
// class=partial  jaccard=0.1644  score=0.5273  fileCov=0.1928
// note: low-confidence suggestion: node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/requestHelpers.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XRs = E(() => {
  iks();
  vRs();
  kRs();
  LRs();
  oPr();
  MRs();
  GRs();
  YRs();
  Go(hv, R($G(), 1), module.exports);
});
function QRs(e) {
  return new wLt({
    protocol: e.protocol,
    hostname: e.hostname,
    port: Number(e.port),
    path: e.pathname,
    query: Array.from(e.searchParams.entries()).reduce((t, [n, r]) => (t[n] = r, t), {}),
    fragment: e.hash
  });
}
async function ZRs(e, t) {
  let r = await JRs.sdkStreamMixin(e.body).transformToString();
  if (e.statusCode === 200) {
    let o = JSON.parse(r);
    if (typeof o.AccessKeyId !== "string" || typeof o.SecretAccessKey !== "string" || typeof o.Token !== "string" || typeof o.Expiration !== "string") throw new vgn.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", {
      logger: t
    });
    return {
      accessKeyId: o.AccessKeyId,
      secretAccessKey: o.SecretAccessKey,
      sessionToken: o.Token,
      expiration: hv.parseRfc3339DateTime(o.Expiration)
    };
  }
  if (e.statusCode >= 400 && e.statusCode < 500) {
    let o = {};
    try {
      o = JSON.parse(r);
    } catch (s) {}
    throw Object.assign(new vgn.CredentialsProviderError(`Server responded with status: ${e.statusCode}`, {
      logger: t
    }), {
      Code: o.Code,
      Message: o.Message
    });
  }
  throw new vgn.CredentialsProviderError(`Server responded with status: ${e.statusCode}`, {
    logger: t
  });
}
var vgn, JRs;