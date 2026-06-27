// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u4r
// matched 2.1.88 source: node_modules/@smithy/signature-v4/dist-cjs/index.js
// class=partial  jaccard=0.1143  score=1  fileCov=0.1143
// note: low-confidence suggestion: node_modules/@smithy/signature-v4/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var u4r = E(() => {
  _je();
});
var Dci = e => Zfd(e).toISOString().replace(/\.\d{3}Z$/, "Z"),
  Zfd = e => {
    if (typeof e === "number") return new Date(e * 1000);
    if (typeof e === "string") {
      if (Number(e)) return new Date(Number(e) * 1000);
      return new Date(e);
    }
    return e;
  };
class bje {
  constructor({
    applyChecksum: e,
    credentials: t,
    region: n,
    service: r,
    sha256: o,
    uriEscapePath: s = !0
  }) {
    this.headerFormatter = new i4r(), this.service = r, this.sha256 = o, this.uriEscapePath = s, this.applyChecksum = typeof e === "boolean" ? e : !0, this.regionProvider = Vjr(n), this.credentialProvider = Vjr(t);
  }
  async presign(e, t = {}) {
    let {
        signingDate: n = new Date(),
        expiresIn: r = 3600,
        unsignableHeaders: o,
        unhoistableHeaders: s,
        signableHeaders: i,
        signingRegion: a,
        signingService: l
      } = t,
      c = await this.credentialProvider();
    this.validateResolvedCredentials(c);
    let u = a ?? (await this.regionProvider()),
      {
        longDate: d,
        shortDate: p
      } = vHn(n);
    if (r > wci) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
    let f = EHn(p, u, l ?? this.service),
      m = l4r(THn(e), {
        unhoistableHeaders: s
      });
    if (c.sessionToken) m.query[gci] = c.sessionToken;
    m.query[cci] = bHn, m.query[uci] = `${c.accessKeyId}/${f}`, m.query[dci] = d, m.query[fci] = r.toString(10);
    let g = AHn(m, o, i);
    return m.query[pci] = Pci(g), m.query[mci] = await this.getSignature(d, f, this.getSigningKey(c, u, p, l), this.createCanonicalRequest(m, g, await pMt(e, this.sha256))), m;
  }
  async sign(e, t) {
    if (typeof e === "string") return this.signString(e, t);else if (e.headers && e.payload) return this.signEvent(e, t);else if (e.message) return this.signMessage(e, t);else return this.signRequest(e, t);
  }
  async signEvent({
    headers: e,
    payload: t
  }, {
    signingDate: n = new Date(),
    priorSignature: r,
    signingRegion: o,
    signingService: s
  }) {
    let i = o ?? (await this.regionProvider()),
      {
        shortDate: a,
        longDate: l
      } = vHn(n),
      c = EHn(a, i, s ?? this.service),
      u = await pMt({
        headers: {},
        body: t
      }, this.sha256),
      d = new this.sha256();
    d.update(e);
    let p = gte(await d.digest()),
      f = [Hci, l, c, r, p, u].join(`
`);
    return this.signString(f, {
      signingDate: n,
      signingRegion: i,
      signingService: s
    });
  }
  async signMessage(e, {
    signingDate: t = new Date(),
    signingRegion: n,
    signingService: r
  }) {
    return this.signEvent({
      headers: this.headerFormatter.format(e.message.headers),
      payload: e.message.body
    }, {
      signingDate: t,
      signingRegion: n,
      signingService: r,
      priorSignature: e.priorSignature
    }).then(s => ({
      message: e.message,
      signature: s
    }));
  }
  async signString(e, {
    signingDate: t = new Date(),
    signingRegion: n,
    signingService: r
  } = {}) {
    let o = await this.credentialProvider();
    this.validateResolvedCredentials(o);
    let s = n ?? (await this.regionProvider()),
      {
        shortDate: i
      } = vHn(t),
      a = new this.sha256(await this.getSigningKey(o, s, i, r));
    return a.update(lxe(e)), gte(await a.digest());
  }
  async signRequest(e, {
    signingDate: t = new Date(),
    signableHeaders: n,
    unsignableHeaders: r,
    signingRegion: o,
    signingService: s
  } = {}) {
    let i = await this.credentialProvider();
    this.validateResolvedCredentials(i);
    let a = o ?? (await this.regionProvider()),
      l = THn(e),
      {
        longDate: c,
        shortDate: u
      } = vHn(t),
      d = EHn(u, a, s ?? this.service);
    if (l.headers[Qjr] = c, i.sessionToken) l.headers[bci] = i.sessionToken;
    let p = await pMt(l, this.sha256);
    if (!Lci(dMt, l.headers) && this.applyChecksum) l.headers[dMt] = p;
    let f = AHn(l, r, n),
      m = await this.getSignature(c, d, this.getSigningKey(i, a, u, s), this.createCanonicalRequest(l, f, p));
    return l.headers[hci] = `${bHn} Credential=${i.accessKeyId}/${d}, SignedHeaders=${Pci(f)}, Signature=${m}`, l;
  }
  createCanonicalRequest(e, t, n) {
    let r = Object.keys(t).sort();
    return `${e.method}
${this.getCanonicalPath(e)}
${r4r(e)}
${r.map(o => `${o}:${t[o]}`).join(`
`)}

${r.join(";")}
${n}`;
  }
  async createStringToSign(e, t, n) {
    let r = new this.sha256();
    r.update(lxe(n));
    let o = await r.digest();
    return `${bHn}
${e}
${t}
${gte(o)}`;
  }
  getCanonicalPath({
    path: e
  }) {
    if (this.uriEscapePath) {
      let t = [];
      for (let o of e.split("/")) {
        if (o?.length === 0) continue;
        if (o === ".") continue;
        if (o === "..") t.pop();else t.push(o);
      }
      let n = `${e?.startsWith("/") ? "/" : ""}${t.join("/")}${t.length > 0 && e?.endsWith("/") ? "/" : ""}`;
      return axe(n).replace(/%2F/g, "/");
    }
    return e;
  }
  async getSignature(e, t, n, r) {
    let o = await this.createStringToSign(e, t, r),
      s = new this.sha256(await n);
    return s.update(lxe(o)), gte(await s.digest());
  }
  getSigningKey(e, t, n, r) {
    return Ici(this.sha256, e, n, t, r || this.service);
  }
  validateResolvedCredentials(e) {
    if (typeof e !== "object" || typeof e.accessKeyId !== "string" || typeof e.secretAccessKey !== "string") throw Error("Resolved credential object is not valid");
  }
}
var vHn = e => {
    let t = Dci(e).replace(/[\-:]/g, "");
    return {
      longDate: t,
      shortDate: t.slice(0, 8)
    };
  },
  Pci = e => Object.keys(e).sort().join(";");