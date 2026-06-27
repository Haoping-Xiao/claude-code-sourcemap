// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cCo
// matched 2.1.88 source: src/utils/managedEnv.ts
// class=modified  jaccard=0.2181  score=0.4269  fileCov=0.3084
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var cCo = E(() => {
  ft();
  k7();
  Un();
  aCo();
  oo();
  Vw();
  je();
  rle();
  JOt();
  _zn();
});
var csl = {};
_t(csl, {
  applySafeConfigEnvironmentVariables: () => applySafeConfigEnvironmentVariables,
  applyConfigEnvironmentVariables: () => applyConfigEnvironmentVariables,
  _resetSpawnEnvSnapshotForTesting: () => yrf,
});
function crf(e) {
  if (!e || !process.env.ANTHROPIC_UNIX_SOCKET) return e || {};
  let {
    ANTHROPIC_UNIX_SOCKET: t,
    ANTHROPIC_BASE_URL: n,
    ANTHROPIC_API_KEY: r,
    ANTHROPIC_AUTH_TOKEN: o,
    CLAUDE_CODE_OAUTH_TOKEN: s,
    CLAUDE_CODE_ARTIFACTS_API_BASE_URL: i,
    ...a
  } = e;
  return a;
}
function lsl() {
  let e = ut(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST),
    t = oY(),
    n = process.env.CLAUDE_CODE_ENVIRONMENT_KIND;
  Nyt = {
    managedByHost: e || !!process.env.CLAUDE_CODE_HOST_AUTH_ENV_VAR,
    managedByHostFlag: e,
    desktopHost: t,
    hostOrchestrated: t || n === "byoc",
  };
}
function drf(e, t) {
  if (!e) return {};
  if (!(Nyt.managedByHost || (Nyt.desktopHost && urf.has(t)))) return e;
  let r = {};
  for (let [o, s] of Object.entries(e)) {
    if (Gzi(o)) continue;
    if (Nyt.managedByHostFlag && Wzi(o)) continue;
    r[o] = s;
  }
  return r;
}
function prf(e) {
  if (!e || !E8t) return e || {};
  let t = {};
  for (let [n, r] of Object.entries(e)) if (!E8t.has(n)) t[n] = r;
  return t;
}
function frf(e) {
  if (!e) return {};
  let { NO_COLOR: t, FORCE_COLOR: n, ...r } = e;
  if (t !== void 0) Byt.NO_COLOR = t;
  if (n !== void 0) Byt.FORCE_COLOR = n;
  return r;
}
function grf(e) {
  if (!e) return {};
  let t = {};
  for (let [n, r] of Object.entries(e)) if (!mrf.has(n.toUpperCase())) t[n] = r;
  return t;
}
function Oyt(e, t) {
  return frf(prf(drf(grf(crf(e)), t)));
}
function applySafeConfigEnvironmentVariables() {
  if ((lsl(), E8t === void 0))
    E8t = Nyt.hostOrchestrated ? new Set(Object.keys(process.env)) : null;
  ((Byt = {}), Object.assign(process.env, Oyt(Dt().env, "globalConfig")));
  for (let e of hrf) {
    if (e === "policySettings") continue;
    if (!Om(e)) continue;
    Object.assign(process.env, Oyt(yn(e)?.env, e));
  }
  (HJ(), Object.assign(process.env, Oyt(yn("policySettings")?.env, "policySettings")));
  for (let e of $w()) {
    let t = Oyt(yn(e)?.env, e);
    for (let [n, r] of Object.entries(t)) if (ilt.has(n.toUpperCase())) process.env[n] = r;
  }
  Xkn(Byt);
}
function yrf() {
  ((E8t = void 0),
    (Nyt = {
      managedByHost: false,
      managedByHostFlag: false,
      desktopHost: false,
      hostOrchestrated: false,
    }));
}
function applyConfigEnvironmentVariables() {
  (lsl(), (Byt = {}), Object.assign(process.env, Oyt(Dt().env, "globalConfig")));
  for (let e of $w()) Object.assign(process.env, Oyt(yn(e)?.env, e));
  (Xkn(Byt), ICs(), DCs(), BOr(), _Dt());
}
var Nyt, urf, E8t, Byt, mrf, hrf;
