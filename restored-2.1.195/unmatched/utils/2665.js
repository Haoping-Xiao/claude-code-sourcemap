// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BXi
// matched 2.1.88 source: node_modules/node-forge/lib/x509.js
// class=new  jaccard=0.028  score=0.2188  fileCov=0.0311
// note: nearest: node_modules/node-forge/lib/x509.js (0.028); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BXi = E(() => {
  NXi = require("crypto");
});
function qXi(e) {
  if (e.caCertPath && e.caKeyPath) return oQd(e.caCertPath, e.caKeyPath);
  if (e.caCertPath || e.caKeyPath) throw Error("tlsTerminate: caCertPath and caKeyPath must be provided together");
  return sQd();
}
async function VXi(e) {
  if (!e.ephemeral) return;
  try {
    await GXi.rm(Flt.dirname(e.certPath), {
      recursive: true,
      force: true
    });
  } catch (t) {
    Bo(`[mitm-ca] cleanup failed: ${t.message}`, {
      level: "warn"
    });
  }
}
function oQd(e, t) {
  let n = UXi(e, "CERTIFICATE", "tlsTerminate.caCertPath"),
    r = UXi(t, "PRIVATE KEY", "tlsTerminate.caKeyPath"),
    o,
    s;
  try {
    o = Ult.certificateFromPem(n), s = Ult.privateKeyFromPem(r);
  } catch (i) {
    throw Error(`tlsTerminate: failed to parse CA from ${e}: ` + i.message);
  }
  if (!("n" in s) || !("d" in s)) throw Error(`tlsTerminate.caKeyPath: CA key at ${t} must be RSA`);
  return Bo(`[mitm-ca] loaded CA from ${e}`), {
    certPath: e,
    keyPath: t,
    certPem: n,
    keyPem: r,
    cert: o,
    key: s,
    leafCerts: new Map(),
    secureContexts: new Map(),
    ephemeral: false
  };
}
function sQd() {
  let e = Ult.rsa.generateKeyPair(2048),
    t = Ult.createCertificate();
  t.publicKey = e.publicKey, t.serialNumber = iQd(), t.validity.notBefore = FXi(-1), t.validity.notAfter = FXi(825);
  let n = [{
    name: "commonName",
    value: "sandbox-runtime ephemeral CA"
  }, {
    name: "organizationName",
    value: "sandbox-runtime"
  }];
  t.setSubject(n), t.setIssuer(n), t.setExtensions([{
    name: "basicConstraints",
    cA: true,
    critical: true
  }, {
    name: "keyUsage",
    critical: true,
    keyCertSign: true,
    cRLSign: true,
    digitalSignature: true
  }, {
    name: "subjectKeyIdentifier"
  }]), t.sign(e.privateKey, tQd.sha256.create());
  let r = Ult.certificateToPem(t),
    o = Ult.privateKeyToPem(e.privateKey),
    s = yWe.mkdtempSync(Flt.join(WXi.tmpdir(), "srt-ca-")),
    i = Flt.join(s, "ca.crt"),
    a = Flt.join(s, "ca.key");
  return yWe.writeFileSync(i, r, {
    mode: 420
  }), yWe.writeFileSync(a, o, {
    mode: 384
  }), Bo(`[mitm-ca] generated ephemeral CA at ${i}`), {
    certPath: i,
    keyPath: a,
    certPem: r,
    keyPem: o,
    cert: t,
    key: e.privateKey,
    leafCerts: new Map(),
    secureContexts: new Map(),
    ephemeral: true
  };
}
function UXi(e, t, n) {
  let r;
  try {
    r = yWe.readFileSync(e, "utf8");
  } catch (o) {
    let s = o.code ?? String(o);
    throw Error(`${n}: cannot read ${e} (${s})`);
  }
  if (!new RegExp(`-----BEGIN [A-Z ]*${t}-----`).test(r)) throw Error(`${n}: ${e} is not a PEM ${t}`);
  return r;
}
function iQd() {
  let e = nQd.getBytesSync(16),
    t = rQd.bytesToHex(e);
  return (parseInt(t[0], 16) & 7).toString(16) + t.slice(1);
}
function FXi(e) {
  let t = new Date();
  return t.setDate(t.getDate() + e), t;
}
var jXi, yWe, GXi, WXi, Flt, Ult, tQd, nQd, rQd;