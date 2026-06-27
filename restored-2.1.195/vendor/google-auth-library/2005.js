// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bTi
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: google-auth-library; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module bTi] (exports=j9)
var j9 = {};
Object.defineProperty(j9, "__esModule", {
  value: true
});
j9.CertificateSubjectTokenSupplier = j9.InvalidConfigurationError = j9.CertificateSourceUnavailableError = j9.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = void 0;
var sCn = kte(),
  iCn = require("fs"),
  aCn = require("crypto"),
  Sxd = require("https");
j9.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = "GOOGLE_API_CERTIFICATE_CONFIG";
class o_e extends Error {
  constructor(e) {
    super(e);
    this.name = "CertificateSourceUnavailableError";
  }
}
j9.CertificateSourceUnavailableError = o_e;
class Lte extends Error {
  constructor(e) {
    super(e);
    this.name = "InvalidConfigurationError";
  }
}
j9.InvalidConfigurationError = Lte;
class _Ti {
  certificateConfigPath;
  trustChainPath;
  cert;
  key;
  constructor(e) {
    if (!e.useDefaultCertificateConfig && !e.certificateConfigLocation) throw new Lte("Either `useDefaultCertificateConfig` must be true or a `certificateConfigLocation` must be provided.");
    if (e.useDefaultCertificateConfig && e.certificateConfigLocation) throw new Lte("Both `useDefaultCertificateConfig` and `certificateConfigLocation` cannot be provided.");
    this.trustChainPath = e.trustChainPath, this.certificateConfigPath = e.certificateConfigLocation ?? "";
  }
  async createMtlsHttpsAgent() {
    if (!this.key || !this.cert) throw new Lte("Cannot create mTLS Agent with missing certificate or key");
    return new Sxd.Agent({
      key: this.key,
      cert: this.cert
    });
  }
  async getSubjectToken() {
    this.certificateConfigPath = await this.#e();
    let {
      certPath: e,
      keyPath: t
    } = await this.#t();
    return {
      cert: this.cert,
      key: this.key
    } = await this.#n(e, t), await this.#r(this.cert);
  }
  async #e() {
    let e = this.certificateConfigPath;
    if (e) {
      if (await (0, sCn.isValidFile)(e)) return e;
      throw new o_e(`Provided certificate config path is invalid: ${e}`);
    }
    let t = process.env[j9.CERTIFICATE_CONFIGURATION_ENV_VARIABLE];
    if (t) {
      if (await (0, sCn.isValidFile)(t)) return t;
      throw new o_e(`Path from environment variable "${j9.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" is invalid: ${t}`);
    }
    let n = (0, sCn.getWellKnownCertificateConfigFileLocation)();
    if (await (0, sCn.isValidFile)(n)) return n;
    throw new o_e(`Could not find certificate configuration file. Searched override path, the "${j9.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" env var, and the gcloud path (${n}).`);
  }
  async #t() {
    let e = this.certificateConfigPath,
      t;
    try {
      t = await iCn.promises.readFile(e, "utf8");
    } catch (n) {
      throw new o_e(`Failed to read certificate config file at: ${e}`);
    }
    try {
      let n = JSON.parse(t),
        r = n?.cert_configs?.workload?.cert_path,
        o = n?.cert_configs?.workload?.key_path;
      if (!r || !o) throw new Lte(`Certificate config file (${e}) is missing required "cert_path" or "key_path" in the workload config.`);
      return {
        certPath: r,
        keyPath: o
      };
    } catch (n) {
      if (n instanceof Lte) throw n;
      throw new Lte(`Failed to parse certificate config from ${e}: ${n.message}`);
    }
  }
  async #n(e, t) {
    let n, r;
    try {
      n = await iCn.promises.readFile(e), new aCn.X509Certificate(n);
    } catch (o) {
      let s = o instanceof Error ? o.message : String(o);
      throw new o_e(`Failed to read certificate file at ${e}: ${s}`);
    }
    try {
      r = await iCn.promises.readFile(t), (0, aCn.createPrivateKey)(r);
    } catch (o) {
      let s = o instanceof Error ? o.message : String(o);
      throw new o_e(`Failed to read private key file at ${t}: ${s}`);
    }
    return {
      cert: n,
      key: r
    };
  }
  async #r(e) {
    let t = new aCn.X509Certificate(e);
    if (!this.trustChainPath) return JSON.stringify([t.raw.toString("base64")]);
    try {
      let o = ((await iCn.promises.readFile(this.trustChainPath, "utf8")).match(/-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g) ?? []).map((a, l) => {
          try {
            return new aCn.X509Certificate(a);
          } catch (c) {
            let u = c instanceof Error ? c.message : String(c);
            throw new Lte(`Failed to parse certificate at index ${l} in trust chain file ${this.trustChainPath}: ${u}`);
          }
        }),
        s = o.findIndex(a => t.raw.equals(a.raw)),
        i;
      if (s === -1) i = [t, ...o];else if (s === 0) i = o;else throw new Lte(`Leaf certificate exists in the trust chain but is not the first entry (found at index ${s}).`);
      return JSON.stringify(i.map(a => a.raw.toString("base64")));
    } catch (n) {
      if (n instanceof Lte) throw n;
      let r = n instanceof Error ? n.message : String(n);
      throw new o_e(`Failed to process certificate chain from ${this.trustChainPath}: ${r}`);
    }
  }
}
j9.CertificateSubjectTokenSupplier = _Ti;