// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TWe
// matched 2.1.88 source: node_modules/base64-js/index.js
// class=partial  jaccard=0.2179  score=0.3244  fileCov=0.3988
// note: low-confidence suggestion: node_modules/base64-js/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var TWe = E(() => {
  UFt();
  NFt();
  Wlt();
  bRe();
  GQi();
  _Re();
  WQi();
});
var qQi = () => {};
var VQi = () => {};
function E$n(e) {
  let t = IZd(),
    n = e.length * 3 / 4;
  if (e[e.length - 2] == "=") n -= 2;else if (e[e.length - 1] == "=") n -= 1;
  let r = new Uint8Array(n),
    o = 0,
    s = 0,
    i,
    a = 0;
  for (let l = 0; l < e.length; l++) {
    if (i = t[e.charCodeAt(l)], i === void 0) switch (e[l]) {
      case "=":
        s = 0;
      case `
`:
      case "\r":
      case "\t":
      case " ":
        continue;
      default:
        throw Error("invalid base64 string");
    }
    switch (s) {
      case 0:
        a = i, s = 1;
        break;
      case 1:
        r[o++] = a << 2 | (i & 48) >> 4, a = i, s = 2;
        break;
      case 2:
        r[o++] = (a & 15) << 4 | (i & 60) >> 2, a = i, s = 3;
        break;
      case 3:
        r[o++] = (a & 3) << 6 | i, s = 0;
        break;
    }
  }
  if (s == 1) throw Error("invalid base64 string");
  return r.subarray(0, o);
}
function KQi(e, t = "std") {
  let n = YQi(t),
    r = t == "std",
    o = "",
    s = 0,
    i,
    a = 0;
  for (let l = 0; l < e.length; l++) switch (i = e[l], s) {
    case 0:
      o += n[i >> 2], a = (i & 3) << 4, s = 1;
      break;
    case 1:
      o += n[a | i >> 4], a = (i & 15) << 2, s = 2;
      break;
    case 2:
      o += n[a | i >> 6], o += n[i & 63], s = 0;
      break;
  }
  if (s) {
    if (o += n[a], r) {
      if (o += "=", s == 1) o += "=";
    }
  }
  return o;
}
function YQi(e) {
  if (!S$n) S$n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), zQi = S$n.slice(0, -2).concat("-", "_");
  return e == "url" ? zQi : S$n;
}
function IZd() {
  if (!Ylt) {
    Ylt = [];
    let e = YQi("std");
    for (let t = 0; t < e.length; t++) Ylt[e[t].charCodeAt(0)] = t;
    Ylt[45] = e.indexOf("+"), Ylt[95] = e.indexOf("/");
  }
  return Ylt;
}
var S$n, zQi, Ylt;
function WFt(e) {
  for (let t of e.field) if (!AWe(t, "jsonName")) t.jsonName = Lbe(t.name);
  e.nestedType.forEach(WFt);
}