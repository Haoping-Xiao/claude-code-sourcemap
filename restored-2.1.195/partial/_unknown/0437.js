// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ffs
// matched 2.1.88 source: node_modules/dom-mutator/dist/dom-mutator.cjs.production.min.js
// class=partial  jaccard=0.0837  score=0.759  fileCov=0.086
// note: low-confidence suggestion: node_modules/dom-mutator/dist/dom-mutator.cjs.production.min.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ffs]
vau = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/, SIr = {
  revert: function () {}
}, Kun = new Map(), EIr = new Set();
Vau();
Kau = {
  html: bIr,
  classes: d0t,
  attribute: zun,
  position: Bfs,
  declarative: zau
}, Ufs = Kau;
function Wfs() {
  return Gfs;
}
function AIr(e) {
  let t = 2166136261,
    n = e.length;
  for (let r = 0; r < n; r++) t ^= e.charCodeAt(r), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
  return t >>> 0;
}
function p0t(e, t, n) {
  if (n === 2) return AIr(AIr(e + t) + "") % 10000 /* 1e4 */ / 10000 /* 1e4 */;
  if (n === 1) return AIr(t + e) % 1000 / 1000;
  return null;
}
function Yau(e) {
  if (e <= 0) return [];
  return Array(e).fill(1 / e);
}
function Zun(e, t) {
  return e >= t[0] && e < t[1];
}
function qfs(e, t) {
  let n = p0t("__" + t[0], e, 1);
  if (n === null) return false;
  return n >= t[1] && n < t[2];
}
function Vfs(e, t) {
  for (let n = 0; n < t.length; n++) if (Zun(e, t[n])) return n;
  return -1;
}
function TIr(e) {
  try {
    let t = e.replace(/([^\\])\//g, "$1\\/");
    return new RegExp(t);
  } catch (t) {
    console.error(t);
    return;
  }
}
function edn(e, t) {
  if (!t.length) return false;
  let n = false,
    r = false;
  for (let o = 0; o < t.length; o++) {
    let s = Qau(e, t[o].type, t[o].pattern);
    if (t[o].include === false) {
      if (s) return false;
    } else if (n = true, s) r = true;
  }
  return r || !n;
}
function Xau(e, t, n) {
  try {
    let r = t.replace(/[*.+?^${}()|[\]\\]/g, "\\$&").replace(/_____/g, ".*");
    if (n) r = "\\/?" + r.replace(/(^\/|\/$)/g, "") + "\\/?";
    return new RegExp("^" + r + "$", "i").test(e);
  } catch (r) {
    return false;
  }
}
function Jau(e, t) {
  try {
    let n = new URL(t.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"), "https://_____"),
      r = [[e.host, n.host, false], [e.pathname, n.pathname, true]];
    if (n.hash) r.push([e.hash, n.hash, false]);
    return n.searchParams.forEach((o, s) => {
      r.push([e.searchParams.get(s) || "", o, false]);
    }), !r.some(o => !Xau(o[0], o[1], o[2]));
  } catch (n) {
    return false;
  }
}
function Qau(e, t, n) {
  try {
    let r = new URL(e, "https://_");
    if (t === "regex") {
      let o = TIr(n);
      if (!o) return false;
      return o.test(r.href) || o.test(r.href.substring(r.origin.length));
    } else if (t === "simple") return Jau(r, n);
    return false;
  } catch (r) {
    return false;
  }
}
function zfs(e, t, n) {
  if (t = t === void 0 ? 1 : t, t < 0) t = 0;else if (t > 1) t = 1;
  let r = Yau(e);
  if (n = n || r, n.length !== e) n = r;
  let o = n.reduce((i, a) => a + i, 0);
  if (o < 0.99 || o > 1.01) n = r;
  let s = 0;
  return n.map(i => {
    let a = s;
    return s += i, [a, a + t * i];
  });
}
function Kfs(e, t, n) {
  if (!t) return null;
  let r = t.split("?")[1];
  if (!r) return null;
  let o = r.replace(/#.*/, "").split("&").map(s => s.split("=", 2)).filter(s => {
    let [i] = s;
    return i === e;
  }).map(s => {
    let [, i] = s;
    return parseInt(i);
  });
  if (o.length > 0 && o[0] >= 0 && o[0] < n) return o[0];
  return null;
}
function Yfs(e) {
  try {
    return e();
  } catch (t) {
    return console.error(t), false;
  }
}
async function sFe(e, t, n) {
  if (t = t || "", n = n || globalThis.crypto && globalThis.crypto.subtle || Gfs.SubtleCrypto, !n) throw Error("No SubtleCrypto implementation found");
  try {
    let r = await n.importKey("raw", HIr(t), {
        name: "AES-CBC",
        length: 128
      }, true, ["encrypt", "decrypt"]),
      [o, s] = e.split("."),
      i = await n.decrypt({
        name: "AES-CBC",
        iv: HIr(o)
      }, r, HIr(s));
    return new TextDecoder().decode(i);
  } catch (r) {
    throw Error("Failed to decrypt");
  }
}
function f0t(e) {
  if (typeof e === "string") return e;
  return JSON.stringify(e);
}
function VV(e) {
  if (typeof e === "number") e = e + "";
  if (!e || typeof e !== "string") e = "0";
  let t = e.replace(/(^v|\+.*$)/g, "").split(/[-.]/);
  if (t.length === 3) t.push("~");
  return t.map(n => n.match(/^[0-9]+$/) ? n.padStart(5, " ") : n).join("-");
}
function Xfs() {
  let e;
  try {
    e = "1.6.1";
  } catch (t) {
    e = "";
  }
  return e;
}
function Jfs(e, t) {
  let n, r;
  try {
    n = new URL(e), r = new URL(t);
  } catch (o) {
    return console.error(`Unable to merge query strings: ${o}`), t;
  }
  return n.searchParams.forEach((o, s) => {
    if (r.searchParams.has(s)) return;
    r.searchParams.set(s, o);
  }), r.toString();
}
function jfs(e) {
  return typeof e === "object" && e !== null;
}
function tdn(e) {
  if (e.urlPatterns && e.variations.some(t => jfs(t) && "urlRedirect" in t)) return "redirect";else if (e.variations.some(t => jfs(t) && (t.domMutations || "js" in t || "css" in t))) return "visual";
  return "unknown";
}
async function ndn(e, t) {
  return new Promise(n => {
    let r = false,
      o,
      s = i => {
        if (r) return;
        r = true, o && clearTimeout(o), n(i || null);
      };
    if (t) o = setTimeout(() => s(), t);
    e.then(i => s(i)).catch(() => s());
  });
}
var Gfs,
  HIr = e => Uint8Array.from(atob(e), t => t.charCodeAt(0));