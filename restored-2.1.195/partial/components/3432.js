// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X0
// matched 2.1.88 source: src/components/ManagedSettingsSecurityDialog/utils.ts
// class=partial  jaccard=0.2489  score=0.5408  fileCov=0.3155
// note: low-confidence suggestion: src/components/ManagedSettingsSecurityDialog/utils.ts; dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module X0] deps: hooks/useTerminalSize.ts, ink/styles.ts
O1a = R(lt(), 1), hVe = R(se(), 1);
function extractDangerousSettings(settings) {
  if (!settings) return {
    shellSettings: {},
    envVars: {},
    hasHooks: false,
    hasClaudeMd: false
  };
  let t = {};
  for (let s of qzi) {
    let i = settings[s],
      a;
    if (typeof i === "string") a = i;else if (i !== null && typeof i === "object" && "command" in i && typeof i.command === "string") a = i.command;
    if (a !== void 0 && a.length > 0) t[s] = a;
  }
  let n = {};
  if (settings.env && typeof settings.env === "object") for (let [s, i] of Object.entries(settings.env)) {
    if (i === void 0) continue;
    let a = String(i);
    if (a.length > 0 && !ilt.has(s.toUpperCase())) n[s] = a;
  }
  let r = settings.hooks !== void 0 && settings.hooks !== null && typeof settings.hooks === "object" && Object.keys(settings.hooks).length > 0,
    o = typeof settings.claudeMd === "string" && settings.claudeMd.length > 0;
  return {
    shellSettings: t,
    envVars: n,
    hasHooks: r,
    hooks: r ? settings.hooks : void 0,
    hasClaudeMd: o,
    claudeMd: o ? settings.claudeMd : void 0
  };
}
function g4n(e) {
  return Object.keys(e.shellSettings).length > 0 || Object.keys(e.envVars).length > 0 || e.hasHooks || e.hasClaudeMd;
}
function N1a(e, t) {
  let n = extractDangerousSettings(e),
    r = extractDangerousSettings(t);
  if (!g4n(r)) return false;
  if (!g4n(n)) return true;
  let o = De({
      shellSettings: n.shellSettings,
      envVars: n.envVars,
      hooks: n.hooks,
      claudeMd: n.claudeMd
    }),
    s = De({
      shellSettings: r.shellSettings,
      envVars: r.envVars,
      hooks: r.hooks,
      claudeMd: r.claudeMd
    });
  return o !== s;
}
function B1a(e) {
  let t = [];
  for (let n of Object.keys(e.shellSettings)) t.push(n);
  for (let n of Object.keys(e.envVars)) t.push(n);
  if (e.hasHooks) t.push("hooks");
  if (e.hasClaudeMd) t.push("claudeMd");
  return t;
}