// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d0r
// matched 2.1.88 source: node_modules/npm-run-path/index.js
// class=partial  jaccard=0.1925  score=0.5415  fileCov=0.23
// note: low-confidence suggestion: node_modules/npm-run-path/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var d0r = Q((Eug, cet) => {
  var YAs = require("child_process"),
    c0r = qAs(),
    u0r = KAs();
  function XAs(e, t, n) {
    let r = c0r(e, t, n),
      o = YAs.spawn(r.command, r.args, r.options);
    return u0r.hookChildProcess(o, r), o;
  }
  function iMu(e, t, n) {
    let r = c0r(e, t, n),
      o = YAs.spawnSync(r.command, r.args, r.options);
    return o.error = o.error || u0r.verifyENOENTSync(o.status, r), o;
  }
  cet.exports = XAs;
  cet.exports.spawn = XAs;
  cet.exports.sync = iMu;
  cet.exports._parse = c0r;
  cet.exports._enoent = u0r;
});
function p0r(e) {
  let t = typeof e === "string" ? `
` : `
`.charCodeAt(),
    n = typeof e === "string" ? "\r" : "\r".charCodeAt();
  if (e[e.length - 1] === t) e = e.slice(0, -1);
  if (e[e.length - 1] === n) e = e.slice(0, -1);
  return e;
}
function Qpn(e = {}) {
  let {
    env: t = process.env,
    platform: n = "linux"
  } = e;
  if (n !== "win32") return "PATH";
  return Object.keys(t).reverse().find(r => r.toUpperCase() === "PATH") || "Path";
}
var lRt,
  uet,
  f0r,
  aMu = ({
    cwd: e = lRt.default.cwd(),
    path: t = lRt.default.env[Qpn()],
    preferLocal: n = !0,
    execPath: r = lRt.default.execPath,
    addExecPath: o = !0
  } = {}) => {
    let s = e instanceof URL ? f0r.fileURLToPath(e) : e,
      i = uet.default.resolve(s),
      a = [];
    if (n) lMu(a, i);
    if (o) cMu(a, r, i);
    return [...a, t].join(uet.default.delimiter);
  },
  lMu = (e, t) => {
    let n;
    while (n !== t) e.push(uet.default.join(t, "node_modules/.bin")), n = t, t = uet.default.resolve(t, "..");
  },
  cMu = (e, t, n) => {
    let r = t instanceof URL ? f0r.fileURLToPath(t) : t;
    e.push(uet.default.resolve(n, r, ".."));
  },
  JAs = ({
    env: e = lRt.default.env,
    ...t
  } = {}) => {
    e = {
      ...e
    };
    let n = Qpn({
      env: e
    });
    return t.path = e[n], e[n] = aMu(t), e;
  };