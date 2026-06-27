// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J4i
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var J4i = E(() => {
  Tc();
  bBt();
});
function j4d() {
  let e = new Map();
  for (let [t, n] of Object.entries(Zw)) {
    for (let [r, o] of Object.entries(n)) Zw[r] = {
      open: `\x1B[${o[0]}m`,
      close: `\x1B[${o[1]}m`
    }, n[r] = Zw[r], e.set(o[0], o[1]);
    Object.defineProperty(Zw, t, {
      value: n,
      enumerable: !1
    });
  }
  return Object.defineProperty(Zw, "codes", {
    value: e,
    enumerable: !1
  }), Zw.color.close = "\x1B[39m", Zw.bgColor.close = "\x1B[49m", Zw.color.ansi = Q4i(), Zw.color.ansi256 = Z4i(), Zw.color.ansi16m = e3i(), Zw.bgColor.ansi = Q4i(10), Zw.bgColor.ansi256 = Z4i(10), Zw.bgColor.ansi16m = e3i(10), Object.defineProperties(Zw, {
    rgbToAnsi256: {
      value: (t, n, r) => {
        if (t === n && n === r) {
          if (t < 8) return 16;
          if (t > 248) return 231;
          return Math.round((t - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
      },
      enumerable: !1
    },
    hexToRgb: {
      value: t => {
        let n = /[a-f\d]{6}|[a-f\d]{3}/i.exec(t.toString(16));
        if (!n) return [0, 0, 0];
        let [r] = n;
        if (r.length === 3) r = [...r].map(s => s + s).join("");
        let o = Number.parseInt(r, 16);
        return [o >> 16 & 255, o >> 8 & 255, o & 255];
      },
      enumerable: !1
    },
    hexToAnsi256: {
      value: t => Zw.rgbToAnsi256(...Zw.hexToRgb(t)),
      enumerable: !1
    },
    ansi256ToAnsi: {
      value: t => {
        if (t < 8) return 30 + t;
        if (t < 16) return 90 + (t - 8);
        let n, r, o;
        if (t >= 232) n = ((t - 232) * 10 + 8) / 255, r = n, o = n;else {
          t -= 16;
          let a = t % 36;
          n = Math.floor(t / 36) / 5, r = Math.floor(a / 6) / 5, o = a % 6 / 5;
        }
        let s = Math.max(n, r, o) * 2;
        if (s === 0) return 30;
        let i = 30 + (Math.round(o) << 2 | Math.round(r) << 1 | Math.round(n));
        if (s === 2) i += 60;
        return i;
      },
      enumerable: !1
    },
    rgbToAnsi: {
      value: (t, n, r) => Zw.ansi256ToAnsi(Zw.rgbToAnsi256(t, n, r)),
      enumerable: !1
    },
    hexToAnsi: {
      value: t => Zw.ansi256ToAnsi(Zw.hexToAnsi256(t)),
      enumerable: !1
    }
  }), Zw;
}
var Q4i = (e = 0) => t => `\x1B[${t + e}m`,
  Z4i = (e = 0) => t => `\x1B[${38 + e};5;${t}m`,
  e3i = (e = 0) => (t, n, r) => `\x1B[${38 + e};2;${t};${n};${r}m`,
  Zw,
  YYh,
  U4d,
  F4d,
  XYh,
  G4d,
  PU;