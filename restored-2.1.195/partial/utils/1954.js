// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TAi
// matched 2.1.88 source: node_modules/@anthropic-ai/bedrock-sdk/core/auth.mjs
// class=partial  jaccard=0.0666  score=0.4801  fileCov=0.0718
// note: low-confidence suggestion: node_modules/@anthropic-ai/bedrock-sdk/core/auth.mjs; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var TAi = E(() => {
  xwn();
  EAi();
  AAi();
  HAi();
});
var vAi,
  wAi,
  CAi,
  Gwd = e => Promise.resolve().then(() => (jnt(), Fnt)).then(({
    fromNodeProviderChain: t
  }) => t({
    ...(e != null ? {
      profile: e
    } : {}),
    clientConfig: {
      requestHandler: new wAi.FetchHttpHandler({
        requestInit: n => ({
          ...n
        })
      })
    }
  })).catch(t => {
    throw Error(`Failed to import '@aws-sdk/credential-providers'. You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicAws({ providerChainResolver })\` Original error: ${t.message}`);
  }),
  IAi = async (e, t) => {
    CAi.default(e.method, "Expected request method property to be set");
    let n;
    if (t.awsAccessKey && t.awsSecretAccessKey) n = {
      accessKeyId: t.awsAccessKey,
      secretAccessKey: t.awsSecretAccessKey,
      ...(t.awsSessionToken != null && {
        sessionToken: t.awsSessionToken
      })
    };else if (t.providerChainResolver) n = await (await t.providerChainResolver())();else n = await (await Gwd(t.awsProfile))();
    let r = new bje({
        service: t.serviceName,
        region: t.regionName,
        credentials: n,
        sha256: vAi.Sha256
      }),
      o = new URL(t.url),
      s = !e.headers ? {} : Symbol.iterator in e.headers ? Object.fromEntries(Array.from(e.headers).map(c => [...c])) : {
        ...e.headers
      };
    delete s.connection, s.host = o.hostname;
    let i = {};
    o.searchParams.forEach((c, u) => {
      i[u] = c;
    });
    let a = new ixe({
      method: e.method.toUpperCase(),
      protocol: o.protocol,
      path: o.pathname,
      query: i,
      headers: s,
      body: e.body
    });
    return (await r.sign(a)).headers;
  };