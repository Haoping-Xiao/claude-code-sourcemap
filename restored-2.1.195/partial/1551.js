// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wHn
// matched 2.1.88 source: node_modules/@anthropic-ai/bedrock-sdk/core/auth.mjs
// class=partial  jaccard=0.1117  score=0.6076  fileCov=0.1204
// note: low-confidence suggestion: node_modules/@anthropic-ai/bedrock-sdk/core/auth.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wHn = E(() => {
  n4r();
  o4r();
  s4r();
  c4r();
  u4r();
  Mci();
  t4r();
});
var $ci,
  Oci,
  Nci,
  emd = () => Promise.resolve().then(() => (jnt(), Fnt)).then(({
    fromNodeProviderChain: e
  }) => e({
    clientConfig: {
      requestHandler: new Oci.FetchHttpHandler({
        requestInit: t => ({
          ...t
        })
      })
    }
  })).catch(e => {
    throw Error(`Failed to import '@aws-sdk/credential-providers'.You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicBedrock({ providerChainResolver })\` Original error: ${e.message}`);
  }),
  Bci = async (e, t) => {
    Nci.default(e.method, "Expected request method property to be set");
    let n;
    if (t.awsAccessKey && t.awsSecretKey) n = {
      accessKeyId: t.awsAccessKey,
      secretAccessKey: t.awsSecretKey,
      ...(t.awsSessionToken != null && {
        sessionToken: t.awsSessionToken
      })
    };else n = await (await (t.providerChainResolver ? t.providerChainResolver() : emd()))();
    let r = new bje({
        service: "bedrock",
        region: t.regionName,
        credentials: n,
        sha256: $ci.Sha256
      }),
      o = new URL(t.url),
      s = !e.headers ? {} : Symbol.iterator in e.headers ? Object.fromEntries(Array.from(e.headers).map(l => [...l])) : {
        ...e.headers
      };
    delete s.connection, s.host = o.hostname;
    let i = new ixe({
      method: e.method.toUpperCase(),
      protocol: o.protocol,
      path: o.pathname,
      headers: s,
      body: e.body
    });
    return (await r.sign(i)).headers;
  };