// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zta
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0283  score=0.1743  fileCov=0.0327
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0283); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zta = E(() => {
  _ue();
  Xta();
  xWe();
});
function $tp(e) {
  let t = Number(e);
  if (t < 0 || t > this.length) throw ict(t, this.length);
  return this.charAt(t);
}
function ena(e, t) {
  if (t === void 0) return BigInt(this.indexOf(e));
  let n = Number(t);
  if (n < 0 || n >= this.length) throw ict(n, this.length);
  return BigInt(this.indexOf(e, n));
}
function tna(e, t) {
  if (t === void 0) return BigInt(this.lastIndexOf(e));
  let n = Number(t);
  if (n < 0 || n >= this.length) throw ict(n, this.length);
  return BigInt(this.lastIndexOf(e, n));
}
function Otp() {
  let e = "";
  for (let t = 0; t < this.length; t++) {
    let n = this.charCodeAt(t);
    if (n >= 65 && n <= 90) e += String.fromCharCode(n + 32);else e += this.charAt(t);
  }
  return e;
}
function Ntp() {
  let e = "";
  for (let t = 0; t < this.length; t++) {
    let n = this.charCodeAt(t);
    if (n >= 97 && n <= 122) e += String.fromCharCode(n - 32);else e += this.charAt(t);
  }
  return e;
}
function nna(e, t, n) {
  let r = n === void 0 ? this.length : Number(n),
    o = this,
    s = 0,
    i = r,
    a = o.indexOf(e, s);
  while (i > 0 && a !== -1) o = o.substring(0, a) + t + o.substring(a + e.length), s = a + t.length, i--, a = o.indexOf(e, s);
  return o;
}
function rna(e, t) {
  let n = t === void 0 ? void 0 : Number(t);
  if (n === 1) return CWe([this]);
  return CWe(this.split(e, n));
}
function ona(e, t) {
  if (t === void 0) {
    let o = Number(e);
    if (o < 0 || o > this.length) throw ict(o, this.length);
    return this.substring(o);
  }
  let n = Number(e),
    r = Number(t);
  if (n < 0 || n > this.length) throw ict(n, this.length);
  if (r < 0 || r > this.length) throw ict(r, this.length);
  if (n > r) throw u4("substring", "start > end");
  return this.substring(n, r);
}
function Btp() {
  let e = 0,
    t = this.length - 1;
  while (e < this.length && sna.has(this.charCodeAt(e))) e++;
  while (t > e && sna.has(this.charCodeAt(t))) t--;
  return this.substring(e, t + 1);
}
function ina(e = "") {
  let t = "";
  for (let n = 0; n < this.size; n++) {
    let r = this.get(n);
    if (typeof r !== "string") throw u4("join", "list contains non-string value");
    if (n > 0) t += e;
    t += r;
  }
  return t;
}
function Ftp(e) {
  let t = '"';
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    t += Utp.get(r) ?? e.charAt(n);
  }
  return t += '"', t;
}
function lna(e) {
  switch (e) {
    case "Infinity":
    case "-Infinity":
    case "NaN":
      return e;
    default:
      throw u4("format", "invalid floating point value");
  }
}
function cna(e, t) {
  switch (true) {
    case typeof e === "number":
      if (!Number.isFinite(e) || t === void 0) return e.toString();
      return new Intl.NumberFormat("en-US", {
        maximumFractionDigits: t,
        minimumFractionDigits: t,
        notation: "standard",
        roundingMode: "halfEven",
        useGrouping: false
      }).format(e);
    case typeof e === "string":
      return lna(e);
    default:
      throw u4("format", "fixed-point clause can only be used on doubles");
  }
}
function jtp(e, t) {
  switch (true) {
    case typeof e === "number":
      if (!Number.isFinite(e)) return e.toString();
      let n = e.toExponential(t),
        r = n.lastIndexOf("+");
      if (r === n.length - 2) n = `${n.substring(0, r + 1)}0${n.substring(r + 1)}`;
      return n;
    case typeof e === "string":
      return lna(e);
    default:
      throw u4("format", "scientific clause can only be used on doubles");
  }
}
function Gtp(e) {
  switch (true) {
    case typeof e === "boolean":
      return e ? "1" : "0";
    case typeof e === "bigint":
      return e.toString(2);
    case $1(e):
      return e.value.toString(2);
    default:
      throw u4("format", "only integers and bools can be formatted as binary");
  }
}
function Wtp(e) {
  switch (true) {
    case typeof e === "bigint":
      return e.toString(8);
    case $1(e):
      return e.value.toString(8);
    default:
      throw u4("format", "invalid integer value");
  }
}
function una(e) {
  switch (true) {
    case typeof e === "bigint":
      return e.toString(10);
    case $1(e):
      return e.value.toString(10);
    case typeof e === "number" && !Number.isFinite(e):
      return e.toString();
    default:
      throw u4("format", "invalid integer value");
  }
}
function ana(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) t += e[n].toString(16).padStart(2, "0");
  return t;
}
function dna(e) {
  switch (true) {
    case typeof e === "bigint":
      return e.toString(16);
    case $1(e):
      return e.value.toString(16);
    case typeof e === "string":
      return ana(new TextEncoder().encode(e));
    case e instanceof Uint8Array:
      return ana(e);
    default:
      throw u4("format", "only integers, byte buffers, and strings can be formatted as hex");
  }
}
function qtp(e) {
  let t = dna(e);
  if (typeof t !== "string") return t;
  return t.toUpperCase();
}
function Vtp(e) {
  let t = "[";
  for (let n = 0; n < e.size; n++) {
    if (n > 0) t += ", ";
    t += Y$n(e.get(n));
  }
  return t += "]", t;
}
function ztp(e) {
  let t = Array(e.size),
    n = 0;
  for (let [s, i] of e) t[n] = [Y$n(s), Y$n(i)], n++;
  let r = "{",
    o = "";
  for (let [s, i] of t.sort((a, l) => a[0].localeCompare(l[0]))) r += o + s + ": " + i, o = ", ";
  return r += "}", r;
}
function Y$n(e) {
  switch (typeof e) {
    case "boolean":
      return e ? "true" : "false";
    case "bigint":
      return una(e);
    case "number":
      return cna(e, void 0);
    case "string":
      return e;
    case "object":
      switch (true) {
        case e === null:
          return "null";
        case ARe(e):
          return e.name;
        case $1(e):
          return e.value.toString();
        case P1(e, M1):
          return Bbe(M1, e.message);
        case P1(e, bX):
          return Bbe(bX, e.message);
        case e instanceof Uint8Array:
          return new TextDecoder().decode(e);
        case Gbe(e):
          return Vtp(e);
        case Fbe(e):
          return ztp(e);
      }
  }
  throw u4("format", "invalid string value");
}
function Ktp(e) {
  let t = "",
    n = 0,
    r = 0;
  while (n < this.length) {
    if (this.charAt(n) !== "%") {
      t += this.charAt(n), n++;
      continue;
    }
    if (n + 1 >= this.length) throw u4("format", "invalid format string");
    let o = this.charAt(n + 1);
    if (n += 2, o === "%") {
      t += "%";
      continue;
    }
    let s = 6;
    if (o === ".") {
      s = 0;
      while (n < this.length && this.charAt(n) >= "0" && this.charAt(n) <= "9") s = s * 10 + Number(this.charAt(n)), n++;
      if (n >= this.length) throw u4("format", "invalid format string");
      o = this.charAt(n), n++;
    }
    let i = e.get(r++);
    if (i === void 0) throw u4("format", "too few arguments for format string");
    t += Ytp(o, i, s);
  }
  if (r < e.size) throw u4("format", "too many arguments for format string");
  return t;
}
function Ytp(e, t, n) {
  switch (e) {
    case "e":
      return jtp(t, n);
    case "f":
      return cna(t, n);
    case "b":
      return Gtp(t);
    case "d":
      return una(t);
    case "s":
      return Y$n(t);
    case "x":
      return dna(t);
    case "X":
      return qtp(t);
    case "o":
      return Wtp(t);
    default:
      throw u4("format", `could not parse formatting clause: unrecognized formatting clause: ${e}`);
  }
}
function u4(e, t) {
  return Error(`invalid argument to function ${e}: ${t}`);
}
function ict(e, t) {
  return Error(`index ${e} out of bounds [0, ${t})`);
}
var sna, Utp, Um, HX, pna, Xtp, K$n, yro;