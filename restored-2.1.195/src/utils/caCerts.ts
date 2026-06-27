// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vet
// matched 2.1.88 source: src/utils/caCerts.ts
// class=modified  jaccard=0.2289  score=0.407  fileCov=0.3436
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vet] deps: Qi, je, fn, ys
CCs = ["bundled", "system"];
DG = Cn(() => {
  let e = lNu(),
    t = process.env.NODE_EXTRA_CA_CERTS,
    n = e.includes("bundled"),
    r = e.includes("system");
  T(`CA certs: stores=${e.join(",")}, extraCertsPath=${t}`);
  let o = require("tls"),
    s = o.getCACertificates;
  if (!n && r && !s) {
    T("CA certs: stores=system but system CA API unavailable, deferring to runtime");
    return;
  }
  let i = [];
  if (n)
    (i.push(...o.rootCertificates),
      T(`CA certs: Loaded ${o.rootCertificates.length} bundled root certificates`));
  if (r)
    try {
      let a = s?.("system");
      if (a && a.length > 0)
        (i.push(...a), T(`CA certs: Loaded ${a.length} system CA certificates`));
      else if ((T(`CA certs: system store ${s ? "returned empty" : "unavailable"}`), !n))
        i.push(...o.rootCertificates);
    } catch (a) {
      if (
        (T(`CA certs: Failed to load system CA certificates: ${a}`, {
          level: "error",
        }),
        !n)
      )
        i.push(...o.rootCertificates);
    }
  if (t)
    try {
      let a = qt().readFileSync(t, {
        encoding: "utf8",
      });
      (i.push(a), T(`CA certs: Appended extra certificates from NODE_EXTRA_CA_CERTS (${t})`));
    } catch (a) {
      T(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${t}): ${a}`, {
        level: "error",
      });
    }
  return i.length > 0 ? Uo(i) : void 0;
});
function wmn(e) {
  let t = e.toLowerCase().replace(/\.+$/, ""),
    n = kCs.domainToASCII(t);
  if (n !== "") return n.replace(/\.+$/, "");
  return t;
}
function jLr(e, t) {
  let n;
  if (e.startsWith("*.")) n = `*.${wmn(e.slice(2))}`;
  else n = wmn(e);
  let r = wmn(t);
  if (n === "*") return true;
  if (n === r) return true;
  if (n.startsWith("*.") && r.endsWith(n.slice(1))) return true;
  return false;
}
function GLr(e, t) {
  return jLr(t, e);
}
function WLr(e, t) {
  for (let n of t) if (jLr(n, e)) return true;
  return false;
}
function zet(e, t) {
  let n = t.lastIndexOf("/");
  if (n < 0) return false;
  let r = t.slice(0, n),
    o = t.slice(n + 1);
  if (!/^\d+$/.test(o)) return false;
  let s = parseInt(o, 10),
    i = xCs(r);
  if (!i) return false;
  if (i.zone) return false;
  let a = xCs(e);
  if (!a) return false;
  let l = uNu(a.bytes),
    c = i.bytes;
  if (l.length !== c.length) return false;
  let u = c.length * 8;
  if (s < 0 || s > u) return false;
  return cNu(l, c, s);
}
function cNu(e, t, n) {
  let r = n >> 3;
  for (let i = 0; i < r; i++) if (e[i] !== t[i]) return false;
  let o = n & 7;
  if (o === 0) return true;
  let s = (255 << (8 - o)) & 255;
  return ((e[r] ?? 0) & s) === ((t[r] ?? 0) & s);
}
function uNu(e) {
  if (e.length !== 16) return e;
  for (let t = 0; t < 10; t++) if (e[t] !== 0) return e;
  if (e[10] !== 255 || e[11] !== 255) return e;
  return e.slice(12);
}
function xCs(e) {
  if (e === "") return null;
  let t = "",
    n = e,
    r = e.indexOf("%");
  if (r >= 0) ((t = e.slice(r + 1)), (n = e.slice(0, r)));
  if (n.includes(":")) {
    let s = dNu(n);
    return s
      ? {
          bytes: s,
          zone: t,
        }
      : null;
  }
  if (t) return null;
  let o = RCs(n);
  return o
    ? {
        bytes: o,
        zone: "",
      }
    : null;
}
function RCs(e) {
  let t = e.split(".");
  if (t.length !== 4) return null;
  let n = new Uint8Array(4);
  for (let r = 0; r < 4; r++) {
    let o = t[r];
    if (o === void 0 || o === "" || !/^\d{1,3}$/.test(o)) return null;
    if (o.length > 1 && o.startsWith("0")) return null;
    let s = parseInt(o, 10);
    if (s > 255) return null;
    n[r] = s;
  }
  return n;
}
function dNu(e) {
  let t = null,
    n = e,
    r = e.lastIndexOf(":");
  if (r >= 0 && e.slice(r + 1).includes(".")) {
    if (((t = RCs(e.slice(r + 1))), !t)) return null;
    n = e.slice(0, r + 1);
  }
  let o = n.split("::");
  if (o.length > 2) return null;
  let s = [],
    i = (l, c) => {
      if (l === "") return [];
      let u = l.split(":"),
        d = [];
      for (let p = 0; p < u.length; p++) {
        let f = u[p];
        if (f === "" && c && p === u.length - 1) continue;
        if (f === void 0 || f === "" || !/^[0-9a-fA-F]{1,4}$/.test(f)) return null;
        d.push(parseInt(f, 16));
      }
      return d;
    };
  if (o.length === 1) {
    let l = o[0] ?? "",
      c = i(l, t !== null);
    if (!c) return null;
    s.push(...c);
    let u = t ? 6 : 8;
    if (s.length !== u) return null;
  } else {
    let l = o[0] ?? "",
      c = o[1] ?? "",
      u = i(l, false),
      d = i(c, t !== null);
    if (!u || !d) return null;
    let p = t ? 2 : 0,
      f = 8 - u.length - d.length - p;
    if (f < 1) return null;
    s.push(...u);
    for (let m = 0; m < f; m++) s.push(0);
    if ((s.push(...d), s.length + p !== 8)) return null;
  }
  let a = new Uint8Array(16);
  for (let l = 0; l < s.length; l++) {
    let c = s[l];
    if (c === void 0) return null;
    ((a[l * 2] = (c >> 8) & 255), (a[l * 2 + 1] = c & 255));
  }
  if (t) ((a[12] = t[0] ?? 0), (a[13] = t[1] ?? 0), (a[14] = t[2] ?? 0), (a[15] = t[3] ?? 0));
  return a;
}
var kCs;
