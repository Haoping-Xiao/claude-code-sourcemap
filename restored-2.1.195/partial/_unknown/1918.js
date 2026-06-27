// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TEi
// matched 2.1.88 source: node_modules/run-applescript/index.js
// class=partial  jaccard=0.2405  score=0.5095  fileCov=0.3129
// note: low-confidence suggestion: node_modules/run-applescript/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TEi]
EEi = require("util"), AEi = R(require("process")), HEi = require("child_process"), lwd = EEi.promisify(HEi.execFile);
async function CEi(e, {
  humanReadableOutput: t = true,
  signal: n
} = {}) {
  if (vEi.default.platform !== "darwin") throw Error("macOS only");
  let r = t ? [] : ["-ss"],
    o = {};
  if (n) o.signal = n;
  let {
    stdout: s
  } = await cwd("osascript", ["-e", e, r], o);
  return s.trim();
}
var vEi, wEi, pqr, cwd;