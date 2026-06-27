// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qho
// matched 2.1.88 source: src/utils/settings/applySettingsChange.ts
// class=modified  jaccard=0.1438  score=0.2851  fileCov=0.2249
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var qho = E(() => {
  Rm();
});
function v4n(e, t) {
  let n = Dr();
  if ((T(`Settings changed from ${e}, updating app state`), e === "localSettings")) Yho();
  let r = Cut();
  (Rke(),
    w5(),
    t((o) => {
      let s = MWt(o.toolPermissionContext, r);
      ((s = Kho(s, o.settings.permissions?.additionalDirectories, Iut(), e)), (s = zho(s, r)));
      let i = Kpt();
      if (o.settings.effortLevel !== n.effortLevel) Dj();
      let l =
        e === "policySettings" &&
        (De(o.settings.allowedMcpServers) !== De(n.allowedMcpServers) ||
          De(o.settings.deniedMcpServers) !== De(n.deniedMcpServers) ||
          o.settings.disableClaudeAiConnectors !== n.disableClaudeAiConnectors);
      return {
        ...o,
        settings: n,
        toolPermissionContext: s,
        ...(l && {
          policyVersion: o.policyVersion + 1,
        }),
        ...(o.awaySummaryEnabled !== i && {
          awaySummaryEnabled: i,
        }),
      };
    }));
}
function w4n(e) {
  if (Pvs()) e();
}
function zho(e, t) {
  let n = e;
  if (n.isBypassPermissionsModeAvailable && wU()) n = $Wt(n);
  if (n.strippedDangerousRules !== void 0) {
    let r = new Set(fv),
      o = {};
    for (let [s, i] of Object.entries(n.strippedDangerousRules)) if (i && !r.has(s)) o[s] = [...i];
    n = {
      ...n,
      strippedDangerousRules: o,
    };
  }
  return OWt(n);
}
function Kho(e, t, n, r) {
  let o = new Set((t ?? []).map(Vho)),
    s = new Set((n ?? []).map(Vho)),
    i = e.additionalWorkingDirectories,
    a = [...o].filter((u) => !s.has(u) && !tNa(i.get(u)?.source)),
    l = [...s].filter((u) => !o.has(u) && !tNa(i.get(u)?.source));
  if (a.length === 0 && l.length === 0 && r !== "flagSettings") return e;
  let c = e;
  if (r === "flagSettings") {
    let u = new Set((yn("flagSettings")?.permissions?.additionalDirectories ?? []).map(Vho)),
      d = new Map(c.trustedNetworkDirectories ?? []),
      p = !1;
    for (let f of [...d.keys()])
      if (!u.has(f) && i.get(f)?.source !== "cliArg") {
        for (let m of d.get(f) ?? []) if (m !== f) a.push(m);
        (d.delete(f), (p = !0));
      }
    for (let f of u)
      if (!d.has(f)) {
        let m = T4n(f);
        if (m.length > 0) {
          d.set(f, m);
          for (let g of m) if (g !== f) l.push(g);
          p = !0;
        }
      }
    if (p)
      c = {
        ...c,
        trustedNetworkDirectories: d,
      };
  }
  if (a.length > 0)
    c = My(c, {
      type: "removeDirectories",
      directories: a,
      destination: "localSettings",
    });
  if (l.length > 0)
    c = My(c, {
      type: "addDirectories",
      directories: l,
      destination: "localSettings",
    });
  return c;
}
function tNa(e) {
  return e === "cliArg" || e === "command" || e === "session";
}
function Vho(e) {
  return nNa.resolve(ds(e));
}
var nNa;
