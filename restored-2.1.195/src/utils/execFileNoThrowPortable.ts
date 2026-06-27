// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OB
// matched 2.1.88 source: src/utils/execFileNoThrowPortable.ts
// class=modified  jaccard=0.4106  score=0.8021  fileCov=0.4568
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function execSyncWithDefaults_DEPRECATED(command, optionsOrAbortSignal, n = 10 * STs * bTs) {
  let r;
  if (optionsOrAbortSignal === void 0) r = {};
  else if (optionsOrAbortSignal instanceof AbortSignal)
    r = {
      abortSignal: optionsOrAbortSignal,
      timeout: n,
    };
  else r = optionsOrAbortSignal;
  let {
    abortSignal: o,
    timeout: s = 10 * STs * bTs,
    input: i,
    stdio: a = ["ignore", "pipe", "pipe"],
  } = r;
  o?.throwIfAborted();
  using l = gy`exec: ${command.slice(0, 200)}`;
  try {
    let c = _Ts(command, {
      env: process.env,
      maxBuffer: 1e6,
      timeout: s,
      cwd: $t(),
      stdio: a,
      reject: !1,
      input: i,
    });
    if (!c.stdout) return null;
    return c.stdout.trim() || null;
  } catch {
    return null;
  }
}
var bTs = 1000,
  STs = 60;
