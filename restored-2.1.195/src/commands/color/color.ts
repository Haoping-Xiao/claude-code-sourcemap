// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ver
// matched 2.1.88 source: src/commands/color/color.ts
// class=modified  jaccard=0.2706  score=0.4019  fileCov=0.4532
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: performSetColor, call
async function h0f(e, t, n) {
  return (
    e(await call(n, t), {
      display: "system",
    }),
    null
  );
}
async function call(e, t) {
  if (wf())
    return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
  let n = e?.trim() ?? "",
    r = n === "" ? Ky[Math.floor(Math.random() * Ky.length)] : n.toLowerCase(),
    o = g0f.includes(r);
  if (!o && !Ky.includes(r)) {
    let d = Ky.join(", ");
    return `Invalid color "${r}". Available colors: ${d}, default`;
  }
  let s = Rt(),
    i = em(),
    a = o ? "default" : r,
    l = o ? void 0 : r;
  (await i7t(s, a, i),
    t.setAppState((d) =>
      qer(d, {
        color: l,
      }),
    ));
  let c = t.getAppState(),
    u = c.agent ? c.agentDefinitions.activeAgents.find((d) => d.agentType === c.agent) : void 0;
  return (
    DPn(
      XE(),
      mht({
        userOverride: l,
        agentDefinitionColor: u?.color,
      }),
    ),
    y0f(a),
    o ? "Session color reset to default" : `Session color set to: ${r}`
  );
}
function y0f(e) {
  let t = bS()?.bridgeSessionId;
  if (!t) return;
  let n = afe();
  Promise.resolve()
    .then(() => (nOe(), Dze))
    .then(({ updateBridgeSessionColorTag: r }) =>
      r(t, e, Ky, {
        baseUrl: lfe(),
        getAccessToken: n ? () => n : void 0,
      }).catch(() => {}),
    );
}
var g0f;
