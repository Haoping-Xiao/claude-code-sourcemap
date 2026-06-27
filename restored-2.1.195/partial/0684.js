// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dTs
// matched 2.1.88 source: node_modules/execa/index.js
// class=partial  jaccard=0.1334  score=0.7831  fileCov=0.1385
// note: low-confidence suggestion: node_modules/execa/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dTs = E(() => {
  lTs = require("util"), cTs = R(require("process")), uTs = lTs.debuglog("execa").enabled;
});
function GFe(e, t, n) {
  let r = hTs(e, t, n),
    o = D0r(e, t),
    s = P0r(e, t);
  $0r(s, r.options), THs(r.options);
  let i;
  try {
    i = cfn.default.spawn(r.file, r.args, r.options);
  } catch (f) {
    let m = new cfn.default.ChildProcess(),
      g = Promise.reject(cRt({
        error: f,
        stdout: "",
        stderr: "",
        all: "",
        command: o,
        escapedCommand: s,
        parsed: r,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
      }));
    return L0r(m, g), m;
  }
  let a = eTs(i),
    l = HHs(i, r.options, a),
    c = vHs(i, r.options, l),
    u = {
      isCanceled: !1
    };
  i.kill = EHs.bind(null, i.kill.bind(i)), i.cancel = AHs.bind(null, i, u);
  let p = tHs(async () => {
    let [{
        error: f,
        exitCode: m,
        signal: g,
        timedOut: h
      }, y, b, _] = await QHs(i, r.options, c),
      S = fRt(r.options, y),
      A = fRt(r.options, b),
      v = fRt(r.options, _);
    if (f || m !== 0 || g !== null) {
      let C = cRt({
        error: f,
        exitCode: m,
        signal: g,
        stdout: S,
        stderr: A,
        all: v,
        command: o,
        escapedCommand: s,
        parsed: r,
        timedOut: h,
        isCanceled: u.isCanceled || (r.options.signal ? r.options.signal.aborted : !1),
        killed: i.killed
      });
      if (!r.options.reject) return C;
      throw C;
    }
    return {
      command: o,
      escapedCommand: s,
      exitCode: 0,
      stdout: S,
      stderr: A,
      all: v,
      failed: !1,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    };
  });
  return XHs(i, r.options), i.all = JHs(i, r.options), xHs(i), L0r(i, p), i;
}
function O0r(e, t, n) {
  let r = hTs(e, t, n),
    o = D0r(e, t),
    s = P0r(e, t);
  $0r(s, r.options);
  let i = YHs(r.options),
    a;
  try {
    a = cfn.default.spawnSync(r.file, r.args, {
      ...r.options,
      input: i
    });
  } catch (u) {
    throw cRt({
      error: u,
      stdout: "",
      stderr: "",
      all: "",
      command: o,
      escapedCommand: s,
      parsed: r,
      timedOut: !1,
      isCanceled: !1,
      killed: !1
    });
  }
  let l = fRt(r.options, a.stdout, a.error),
    c = fRt(r.options, a.stderr, a.error);
  if (a.error || a.status !== 0 || a.signal !== null) {
    let u = cRt({
      stdout: l,
      stderr: c,
      error: a.error,
      signal: a.signal,
      exitCode: a.status,
      command: o,
      escapedCommand: s,
      parsed: r,
      timedOut: a.error && a.error.code === "ETIMEDOUT",
      isCanceled: !1,
      killed: a.signal !== null
    });
    if (!r.options.reject) return u;
    throw u;
  }
  return {
    command: o,
    escapedCommand: s,
    exitCode: 0,
    stdout: l,
    stderr: c,
    failed: !1,
    timedOut: !1,
    isCanceled: !1,
    killed: !1
  };
}
function yTs(e) {
  function t(n, ...r) {
    if (!Array.isArray(n)) return yTs({
      ...e,
      ...n
    });
    let [o, ...s] = M0r(n, r);
    return GFe(o, s, pTs(e));
  }
  return t.sync = (n, ...r) => {
    if (!Array.isArray(n)) throw TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
    let [o, ...s] = M0r(n, r);
    return O0r(o, s, pTs(e));
  }, t;
}
var fTs,
  mTs,
  cfn,
  pRt,
  gTs,
  c$u = 1e8,
  u$u = ({
    env: e,
    extendEnv: t,
    preferLocal: n,
    localDir: r,
    execPath: o
  }) => {
    let s = t ? {
      ...pRt.default.env,
      ...e
    } : e;
    if (n) return JAs({
      env: s,
      cwd: r,
      execPath: o
    });
    return s;
  },
  hTs = (e, t, n = {}) => {
    let r = gTs.default._parse(e, t, n);
    if (e = r.command, t = r.args, n = r.options, n = {
      maxBuffer: c$u,
      buffer: !0,
      stripFinalNewline: !0,
      extendEnv: !0,
      preferLocal: !1,
      localDir: n.cwd || pRt.default.cwd(),
      execPath: pRt.default.execPath,
      encoding: "utf8",
      reject: !0,
      cleanup: !0,
      all: !1,
      windowsHide: !0,
      verbose: uTs,
      ...n
    }, n.env = u$u(n), n.stdio = mHs(n), pRt.default.platform === "win32" && mTs.default.basename(e, ".exe") === "cmd") t.unshift("/q");
    return {
      file: e,
      args: t,
      options: n,
      parsed: r
    };
  },
  fRt = (e, t, n) => {
    if (typeof t !== "string" && !fTs.Buffer.isBuffer(t)) return n === void 0 ? void 0 : "";
    if (e.stripFinalNewline) return p0r(t);
    return t;
  },
  d$u = ({
    input: e,
    inputFile: t,
    stdio: n
  }) => e === void 0 && t === void 0 && n === void 0 ? {
    stdin: "inherit"
  } : {},
  pTs = (e = {}) => ({
    preferLocal: !0,
    ...d$u(e),
    ...e
  }),
  Odg;