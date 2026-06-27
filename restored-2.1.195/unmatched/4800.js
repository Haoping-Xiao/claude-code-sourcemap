// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aUo
// matched 2.1.88 source: src/utils/telemetry/pluginTelemetry.ts
// class=new  jaccard=0.0359  score=0.4029  fileCov=0.0379
// note: nearest: src/utils/telemetry/pluginTelemetry.ts (0.0359); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aUo = E(() => {
  glt();
  U1();
  q8();
  rq();
  je();
  At();
  Iv();
  vn();
  pq();
  Jt();
  lE();
  $g();
  Hse = R(require("fs/promises")), jq = R(require("path"));
});
async function _Xt() {
  try {
    if (!mp.cache?.has(void 0)) return [];
    if (_5() !== null) return [];
    let {
      enabled: e
    } = await mp();
    if (e.length === 0) return [];
    let t = R0(),
      n = kue(),
      r = Dt().numStartups,
      o = Date.now(),
      s = [];
    for (let i of e) {
      let {
        marketplace: a
      } = Qo(i.repository);
      if (!a || U0(a)) continue;
      if (geo(i, t, n) !== "user-install") continue;
      if (sBf(i)) continue;
      let l = rFt(i.repository);
      if (!l) continue;
      if (ueo(i.repository)) continue;
      let {
        sessionsSinceLastUse: c,
        daysSinceLastUse: u
      } = oFt(l, r, o);
      if (u >= rBf && c >= oBf) s.push({
        pluginId: i.repository,
        name: i.name,
        daysSinceLastUse: u
      });
    }
    return s.sort((i, a) => a.daysSinceLastUse - i.daysSinceLastUse), s;
  } catch (e) {
    return T(`plugin-disuse tip: failed to compute disused plugins: ${e}`, {
      level: "error"
    }), [];
  }
}
function Tjl(e) {
  if (_5() !== null) return null;
  let t = rFt(e);
  if (!t) return null;
  if (ueo(e)) return 0;
  return oFt(t, Dt().numStartups, Date.now()).daysSinceLastUse;
}
function sBf(e) {
  return Boolean(e.lspServers && Object.keys(e.lspServers).length > 0 || e.themesPath || e.themesPaths?.length || e.outputStylesPath || e.outputStylesPaths?.length || e.monitors?.length || e.workflowsPath || e.workflowsPaths?.length);
}
var rBf = 14,
  oBf = 10;