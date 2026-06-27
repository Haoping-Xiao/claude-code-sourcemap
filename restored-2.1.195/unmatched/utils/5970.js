// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V4c
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/constants/AADServerParamKeys.mjs
// class=new  jaccard=0.0326  score=0.1519  fileCov=0.0399
// note: nearest: node_modules/@azure/msal-common/dist/constants/AADServerParamKeys.mjs (0.0326); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var V4c = Q((wzH, q4c) => {
  var {
      inspect: j4c
    } = require("util"),
    {
      RPError: vgr,
      OPError: GPm
    } = Xme(),
    G4c = Pnn();
  class W4c {
    #e;
    #t;
    #n;
    #r;
    #o;
    #l;
    #s;
    #a;
    #c;
    constructor({
      client: e,
      exchangeBody: t,
      clientAssertionPayload: n,
      response: r,
      maxAge: o,
      DPoP: s
    }) {
      if (["verification_uri", "user_code", "device_code"].forEach(i => {
        if (typeof r[i] !== "string" || !r[i]) throw new vgr(`expected ${i} string to be returned by Device Authorization Response, got %j`, r[i]);
      }), !Number.isSafeInteger(r.expires_in)) throw new vgr("expected expires_in number to be returned by Device Authorization Response, got %j", r.expires_in);
      this.#l = G4c() + r.expires_in, this.#t = e, this.#r = s, this.#a = o, this.#o = t, this.#n = n, this.#c = r, this.#s = r.interval * 1000 || 5000;
    }
    abort() {
      this.#e = true;
    }
    async poll({
      signal: e
    } = {}) {
      if (e && e.aborted || this.#e) throw new vgr("polling aborted");
      if (this.expired()) throw new vgr("the device code %j has expired and the device authorization session has concluded", this.device_code);
      await new Promise(n => setTimeout(n, this.#s));
      let t;
      try {
        t = await this.#t.grant({
          ...this.#o,
          grant_type: "urn:ietf:params:oauth:grant-type:device_code",
          device_code: this.device_code
        }, {
          clientAssertionPayload: this.#n,
          DPoP: this.#r
        });
      } catch (n) {
        switch (n instanceof GPm && n.error) {
          case "slow_down":
            this.#s += 5000;
          case "authorization_pending":
            return this.poll({
              signal: e
            });
          default:
            throw n;
        }
      }
      if ("id_token" in t) await this.#t.decryptIdToken(t), await this.#t.validateIdToken(t, void 0, "token", this.#a);
      return t;
    }
    get device_code() {
      return this.#c.device_code;
    }
    get user_code() {
      return this.#c.user_code;
    }
    get verification_uri() {
      return this.#c.verification_uri;
    }
    get verification_uri_complete() {
      return this.#c.verification_uri_complete;
    }
    get expires_in() {
      return Math.max.apply(null, [this.#l - G4c(), 0]);
    }
    expired() {
      return this.expires_in === 0;
    }
    [j4c.custom]() {
      return `${this.constructor.name} ${j4c(this.#c, {
        depth: 1 / 0,
        colors: process.stdout.isTTY,
        compact: false,
        sorted: true
      })}`;
    }
  }
  q4c.exports = W4c;
});