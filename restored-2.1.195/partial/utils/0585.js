// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bbs
// matched 2.1.88 source: node_modules/supports-color/index.js
// class=partial  jaccard=0.2395  score=0.6508  fileCov=0.2749
// note: low-confidence suggestion: node_modules/supports-color/index.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bbs = E(() => {
  apn = R(require("process")), ybs = R(require("os")), mkr = R(require("tty"));
  ({
    env: Lw
  } = apn.default);
  if (sY("no-color") || sY("no-colors") || sY("color=false") || sY("color=never")) ipn = 0;else if (sY("color") || sY("colors") || sY("color=true") || sY("color=always")) ipn = 1;
  J0u = {
    stdout: hbs({
      isTTY: mkr.default.isatty(1)
    }),
    stderr: hbs({
      isTTY: mkr.default.isatty(2)
    })
  }, _bs = J0u;
});
function Sbs(e, t, n) {
  let r = e.indexOf(t);
  if (r === -1) return e;
  let o = t.length,
    s = 0,
    i = "";
  do i += e.slice(s, r) + t + n, s = r + o, r = e.indexOf(t, s); while (r !== -1);
  return i += e.slice(s), i;
}
function Ebs(e, t, n, r) {
  let o = 0,
    s = "";
  do {
    let i = e[r - 1] === "\r";
    s += e.slice(o, i ? r - 1 : r) + t + (i ? `\r
` : `
`) + n, o = r + 1, r = e.indexOf(`
`, o);
  } while (r !== -1);
  return s += e.slice(o), s;
}
class _kr {
  constructor(e) {
    return vbs(e);
  }
}
function z0t(e) {
  return vbs(e);
}
var Abs,
  Hbs,
  gkr,
  LZe,
  V0t,
  Tbs,
  DZe,
  Q0u = (e, t = {}) => {
    if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)) throw Error("The `level` option should be an integer from 0 to 3");
    let n = Abs ? Abs.level : 0;
    e.level = t.level === void 0 ? n : t.level;
  },
  vbs = e => {
    let t = (...n) => n.join(" ");
    return Q0u(t, e), Object.setPrototypeOf(t, z0t.prototype), t;
  },
  hkr = (e, t, n, ...r) => {
    if (e === "rgb") {
      if (t === "ansi16m") return $ee[n].ansi16m(...r);
      if (t === "ansi256") return $ee[n].ansi256($ee.rgbToAnsi256(...r));
      return $ee[n].ansi($ee.rgbToAnsi(...r));
    }
    if (e === "hex") return hkr("rgb", t, n, ...$ee.hexToRgb(...r));
    return $ee[n][e](...r);
  },
  Z0u,
  eRu,
  ykr = (e, t, n) => {
    let r, o;
    if (n === void 0) r = e, o = t;else r = n.openAll + e, o = t + n.closeAll;
    return {
      open: e,
      close: t,
      openAll: r,
      closeAll: o,
      parent: n
    };
  },
  lpn = (e, t, n) => {
    let r = (...o) => tRu(r, o.length === 1 ? "" + o[0] : o.join(" "));
    return Object.setPrototypeOf(r, eRu), r[gkr] = e, r[LZe] = t, r[V0t] = n, r;
  },
  tRu = (e, t) => {
    if (e.level <= 0 || !t) return e[V0t] ? "" : t;
    let n = e[LZe];
    if (n === void 0) return t;
    let {
      openAll: r,
      closeAll: o
    } = n;
    if (t.includes("\x1B")) while (n !== void 0) t = Sbs(t, n.close, n.open), n = n.parent;
    let s = t.indexOf(`
`);
    if (s !== -1) t = Ebs(t, o, r, s);
    return r + t + o;
  },
  nRu,
  Lig,
  wt;