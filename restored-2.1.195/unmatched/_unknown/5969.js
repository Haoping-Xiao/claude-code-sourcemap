// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qJo
// matched 2.1.88 source: src/services/api/dumpPrompts.ts
// class=new  jaccard=0.026  score=0.0739  fileCov=0.0386
// note: nearest: src/services/api/dumpPrompts.ts (0.026); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module qJo] (exports=vzH, module=WJo)
var vzH = {};
var WJo = {
  exports: vzH
};
var $Pm = O4c(),
  OPm = Sgr(),
  {
    RPError: N4c
  } = Xme(),
  {
    assertIssuerConfiguration: NPm
  } = mgr(),
  BPm = OJo(),
  {
    keystores: B4c
  } = Tgr(),
  UPm = ygr(),
  FPm = zvt(),
  Unn = new WeakMap(),
  GJo = new WeakMap(),
  U4c = e => {
    if (!GJo.has(e)) GJo.set(e, new OPm({
      max: 100
    }));
    return GJo.get(e);
  };
async function F4c(e = false) {
  NPm(this, "jwks_uri");
  let t = B4c.get(this),
    n = U4c(this);
  if (e || !t) {
    if (Unn.has(this)) return Unn.get(this);
    return n.reset(), Unn.set(this, (async () => {
      let r = await FPm.call(this, {
          method: "GET",
          responseType: "json",
          url: this.jwks_uri,
          headers: {
            Accept: "application/json, application/jwk-set+json"
          }
        }).finally(() => {
          Unn.delete(this);
        }),
        o = UPm(r),
        s = BPm.fromJWKS(o, {
          onlyPublic: true
        });
      return n.set("throttle", true, 60000), B4c.set(this, s), s;
    })()), Unn.get(this);
  }
  return t;
}
async function jPm({
  kid: e,
  kty: t,
  alg: n,
  use: r
}, {
  allowMulti: o = false
} = {}) {
  let s = U4c(this),
    i = {
      kid: e,
      kty: t,
      alg: n,
      use: r
    },
    a = $Pm(i, {
      algorithm: "sha256",
      ignoreUnknown: true,
      unorderedArrays: true,
      unorderedSets: true,
      respectType: false
    }),
    l = s.get(a) || s.get("throttle"),
    c = await F4c.call(this, !l),
    u = c.all(i);
  if (delete i.use, u.length === 0) throw new N4c({
    printf: ["no valid key found in issuer's jwks_uri for key parameters %j", i],
    jwks: c
  });
  if (!o && u.length > 1 && !e) throw new N4c({
    printf: ["multiple matching keys found in issuer's jwks_uri for key parameters %j, kid must be provided in this case", i],
    jwks: c
  });
  return s.set(a, true), u;
}
WJo.exports.queryKeyStore = jPm;
WJo.exports.keystore = F4c;