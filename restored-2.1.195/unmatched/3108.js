// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hSa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hSa = E(() => {
  vBn();
  YX = R(TBn(), 1), gSa = {
    prefix: {
      idle: YX.default.blue("?"),
      done: YX.default.green(Jut.tick)
    },
    spinner: {
      interval: 80,
      frames: ["\u280B", "\u2819", "\u2839", "\u2838", "\u283C", "\u2834", "\u2826", "\u2827", "\u2807", "\u280F"].map(e => YX.default.yellow(e))
    },
    style: {
      answer: YX.default.cyan,
      message: YX.default.bold,
      error: e => YX.default.red(`> ${e}`),
      defaultAnswer: e => YX.default.dim(`(${e})`),
      help: YX.default.dim,
      highlight: YX.default.cyan,
      key: e => YX.default.cyan(YX.default.bold(`<${e}>`))
    }
  };
});
function ySa(e) {
  if (typeof e !== "object" || e === null) return !1;
  let t = e;
  while (Object.getPrototypeOf(t) !== null) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function _Sa(...e) {
  let t = {};
  for (let n of e) for (let [r, o] of Object.entries(n)) {
    let s = t[r];
    t[r] = ySa(s) && ySa(o) ? _Sa(s, o) : o;
  }
  return t;
}
function RSe(...e) {
  let t = [gSa, ...e.filter(n => n != null)];
  return _Sa(...t);
}