// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kte
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/googleauth.js
// class=new  jaccard=0.0293  score=0.5552  fileCov=0.03
// note: nearest: node_modules/google-auth-library/build/src/auth/googleauth.js (0.0293); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kte = Q(n_e => {
  Object.defineProperty(n_e, "__esModule", {
    value: !0
  });
  n_e.LRUCache = void 0;
  n_e.snakeToCamel = DHi;
  n_e.originalOrCamelOptions = tId;
  n_e.removeUndefinedValuesInObject = nId;
  n_e.isValidFile = rId;
  n_e.getWellKnownCertificateConfigFileLocation = oId;
  var QCd = require("fs"),
    ZCd = require("os"),
    bVr = require("path"),
    eId = "certificate_config.json",
    LHi = "gcloud";
  function DHi(e) {
    return e.replace(/([_][^_])/g, t => t.slice(1).toUpperCase());
  }
  function tId(e) {
    function t(n) {
      let r = e || {};
      return r[n] ?? r[DHi(n)];
    }
    return {
      get: t
    };
  }
  class PHi {
    capacity;
    #e = new Map();
    maxAge;
    constructor(e) {
      this.capacity = e.capacity, this.maxAge = e.maxAge;
    }
    #t(e, t) {
      this.#e.delete(e), this.#e.set(e, {
        value: t,
        lastAccessed: Date.now()
      });
    }
    set(e, t) {
      this.#t(e, t), this.#n();
    }
    get(e) {
      let t = this.#e.get(e);
      if (!t) return;
      return this.#t(e, t.value), this.#n(), t.value;
    }
    #n() {
      let e = this.maxAge ? Date.now() - this.maxAge : 0,
        t = this.#e.entries().next();
      while (!t.done && (this.#e.size > this.capacity || t.value[1].lastAccessed < e)) this.#e.delete(t.value[0]), t = this.#e.entries().next();
    }
  }
  n_e.LRUCache = PHi;
  function nId(e) {
    return Object.entries(e).forEach(([t, n]) => {
      if (n === void 0 || n === "undefined") delete e[t];
    }), e;
  }
  async function rId(e) {
    try {
      return (await QCd.promises.lstat(e)).isFile();
    } catch (t) {
      return !1;
    }
  }
  function oId() {
    let e = process.env.CLOUDSDK_CONFIG || (sId() ? bVr.join(process.env.APPDATA || "", LHi) : bVr.join(process.env.HOME || "", ".config", LHi));
    return bVr.join(e, eId);
  }
  function sId() {
    return ZCd.platform().startsWith("win");
  }
});