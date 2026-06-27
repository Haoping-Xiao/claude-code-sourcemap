// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kLn
// matched 2.1.88 source: src/ink/ink.tsx
// class=partial  jaccard=0.0908  score=0.7695  fileCov=0.0934
// note: low-confidence suggestion: src/ink/ink.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kLn = E(() => {
  KYr();
  uFi();
  det();
  ft();
  pRn();
  kt();
  je();
  wr();
  fn();
  At();
  vn();
  Is();
  Vke();
  sr();
  Rit();
  p8();
  f7r();
  sJr();
  Wit();
  iJr();
  _Ln();
  YGi();
  X_e();
  XGi();
  ZGi();
  HI();
  nWi();
  iWi();
  K_e();
  qBt();
  Kit();
  KBt();
  $Wi();
  BWi();
  UWi();
  IJr();
  bW();
  jWi();
  NBt();
  Tc();
  xJr();
  ZS();
  X0n();
  one();
  OM();
  q7();
  jh();
  EW();
  Xge();
  h8 = require("fs"), qWi = R(nRn(), 1), JBt = require("util"), xLn = R(se(), 1), lWd = UUi(), cWd = Object.freeze({
    x: 0,
    y: 0,
    visible: !1
  }), uWd = Object.freeze({
    type: "stdout",
    content: dH
  }), dWd = Object.freeze({
    type: "stdout",
    content: Jx + dH
  });
  mWd = ["log", "info", "debug", "dir", "dirxml", "count", "countReset", "group", "groupCollapsed", "groupEnd", "table", "time", "timeEnd", "timeLog"], gWd = ["warn", "error", "trace"];
});
async function zWi({
  stdout: e = process.stdout,
  stdin: t = process.stdin,
  stderr: n = process.stderr,
  exitOnCtrlC: r = !0,
  patchConsole: o = !0,
  onFrame: s,
  nativeCursor: i,
  isScreenReaderEnabled: a
} = {}) {
  await Promise.resolve();
  let l = new uat({
    stdout: e,
    stdin: t,
    stderr: n,
    exitOnCtrlC: r,
    patchConsole: o,
    onFrame: s,
    nativeCursor: i,
    isScreenReaderEnabled: a
  });
  return Cu.set(e, l), {
    render: c => l.render(c),
    unmount: () => l.unmount(),
    waitUntilExit: () => l.waitUntilExit()
  };
}
var VWi,
  yWd = (e, t) => {
    let n = bWd(t),
      r = {
        stdout: process.stdout,
        stdin: process.stdin,
        stderr: process.stderr,
        exitOnCtrlC: !0,
        patchConsole: !0,
        ...n
      },
      o = SWd(r.stdout, () => new uat(r));
    return o.render(e), {
      rerender: o.render,
      unmount() {
        o.unmount();
      },
      waitUntilExit: o.waitUntilExit,
      cleanup: () => Cu.delete(r.stdout)
    };
  },
  _Wd = async (e, t) => {
    await Promise.resolve();
    let n = yWd(e, t);
    return T(`[render] first ink render: ${Math.round(process.uptime() * 1000)}ms since process start`), n;
  },
  RJr,
  bWd = (e = {}) => {
    if (e instanceof VWi.Stream) return {
      stdout: e,
      stdin: process.stdin
    };
    return e;
  },
  SWd = (e, t) => {
    let n = Cu.get(e);
    if (!n) n = t(), Cu.set(e, n);
    return n;
  };