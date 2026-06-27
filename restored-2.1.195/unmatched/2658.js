// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MMn
// matched 2.1.88 source: node_modules/node-forge/lib/x509.js
// class=new  jaccard=0.0258  score=0.809  fileCov=0.0259
// note: nearest: node_modules/node-forge/lib/x509.js (0.0258); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var MMn = Q((ygy, cXi) => {
  cXi.exports = hm();
  rRe();
  L7i();
  Gne();
  rMn();
  yFt();
  Y7i();
  vlt();
  Z7i();
  tXi();
  rXi();
  eto();
  mMn();
  lWe();
  zeo();
  rto();
  iXi();
  sto();
  Yeo();
  Beo();
  EMn();
  uX();
  jeo();
  lXi();
  dto();
  m_();
});
function xto(e, t) {
  let n = e.leafCerts.get(t);
  if (n) return n;
  let r = $Mn.rsa.generateKeyPair(2048),
    o = $Mn.createCertificate();
  o.publicKey = r.publicKey, o.serialNumber = jJd();
  let s = GJd(-1);
  o.validity.notBefore = s, o.validity.notAfter = FJd(e.cert, s), o.setSubject([{
    name: "commonName",
    value: t
  }]), o.setIssuer(e.cert.subject.attributes), o.setExtensions([{
    name: "basicConstraints",
    cA: !1,
    critical: !0
  }, {
    name: "keyUsage",
    critical: !0,
    digitalSignature: !0,
    keyEncipherment: !0
  }, {
    name: "extKeyUsage",
    serverAuth: !0
  }, {
    name: "subjectAltName",
    altNames: [UJd(t)]
  }]), o.sign(e.key, OJd.sha256.create());
  let i = {
    certPem: $Mn.certificateToPem(o) + e.certPem,
    keyPem: $Mn.privateKeyToPem(r.privateKey)
  };
  return e.leafCerts.set(t, i), Bo(`[mitm-leaf] minted RSA leaf for ${t}`), i;
}
function fXi(e, t) {
  let n = e.secureContexts.get(t);
  if (n) return n;
  let {
      certPem: r,
      keyPem: o
    } = xto(e, t),
    s = pXi.createSecureContext({
      cert: r,
      key: o
    });
  return e.secureContexts.set(t, s), s;
}
function UJd(e) {
  return dXi.isIP(e) !== 0 ? {
    type: 7,
    ip: e
  } : {
    type: 2,
    value: e
  };
}
function FJd(e, t) {
  let n = e.validity.notAfter,
    r = new Date(t);
  return r.setDate(r.getDate() + 99), n < r ? new Date(n) : r;
}
function jJd() {
  let e = NJd.getBytesSync(16),
    t = BJd.bytesToHex(e);
  return (parseInt(t[0], 16) & 7).toString(16) + t.slice(1);
}
function GJd(e) {
  let t = new Date();
  return t.setDate(t.getDate() + e), t;
}
var uXi, dXi, pXi, $Mn, OJd, NJd, BJd;