// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FQo
// matched 2.1.88 source: node_modules/node-forge/lib/x509.js
// class=new  jaccard=0.0103  score=0.1938  fileCov=0.0107
// note: nearest: node_modules/node-forge/lib/x509.js (0.0103); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var FQo = E(() => {
  xGc();
  kGc();
  PGc();
  MGc();
  kQo();
});
function OGc(e) {
  return (Array.isArray(e) ? e : [e]).map(n => {
    let r = $Gc.createHash("sha256").update(n).digest();
    return {
      kid: r.subarray(0, 8).toString("hex"),
      seal: r,
      sign: new TextEncoder().encode(n)
    };
  });
}
function NGc(e, t) {
  return n => {
    let r = n.kid === void 0 ? e[0] : e.find(o => o.kid === n.kid);
    if (!r) throw Error("unknown kid");
    return r[t];
  };
}
function BGc(e, t) {
  return jQo("oauth_state", e, t, p$m);
}
async function UGc(e, t) {
  return await GQo("oauth_state", e, t);
}
function jQo(e, t, n, r) {
  return new jgr({
    ...t,
    kind: e
  }).setProtectedHeader({
    alg: "dir",
    enc: "A256GCM",
    kid: n[0].kid
  }).setIssuedAt().setExpirationTime(`${r}s`).encrypt(n[0].seal);
}
async function GQo(e, t, n) {
  try {
    let {
      payload: r
    } = await OQo(t, NGc(n, "seal"), {
      keyManagementAlgorithms: ["dir"],
      contentEncryptionAlgorithms: ["A256GCM"]
    });
    return r.kind === e ? r : null;
  } catch {
    return null;
  }
}
function jGc(e, t, n, r) {
  let o = new owt(e).setProtectedHeader({
    alg: "HS256",
    typ: "JWT",
    kid: t[0].kid
  }).setAudience(FGc).setIssuedAt().setExpirationTime(`${n}h`);
  if (r) o.setIssuer(r);
  return o.sign(t[0].sign);
}
async function WQo(e, t, n) {
  try {
    let {
      payload: r
    } = await $Qo(e, NGc(t, "sign"), {
      algorithms: ["HS256"],
      audience: FGc,
      ...(n && {
        issuer: n
      })
    });
    return r;
  } catch {
    return null;
  }
}
var $Gc,
  p$m = 300,
  FGc = "claude-gateway";