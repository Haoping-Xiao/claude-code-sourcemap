// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EIs
// matched 2.1.88 source: node_modules/@smithy/credential-provider-imds/dist-cjs/index.js
// class=new  jaccard=0.0495  score=0.8096  fileCov=0.0501
// note: nearest: node_modules/@smithy/credential-provider-imds/dist-cjs/index.js (0.0495); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module EIs] deps: tDr
SIs = {
  environmentVariableSelector: e => e[YNu],
  configFileSelector: e => e[XNu],
  default: MCe.IPv4
};
var nDr,
  AIs,
  Fmn = async () => AIs.parseUrl((await JNu()) || (await QNu())),
  JNu = async () => nDr.loadConfig(_Is)(),
  QNu = async () => {
    let e = await nDr.loadConfig(SIs)();
    switch (e) {
      case MCe.IPv4:
        return c2e.IPv4;
      case MCe.IPv6:
        return c2e.IPv6;
      default:
        throw Error(`Unsupported endpoint mode: ${e}. Select from ${Object.values(MCe)}`);
    }
  };