// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fTc
// matched 2.1.88 source: src/commands/ide/ide.tsx
// class=partial  jaccard=0.0711  score=0.9676  fileCov=0.0713
// note: low-confidence suggestion: src/commands/ide/ide.tsx; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
function IDECommandFlow(e) {
  let [t, n] = Rpr.useState([]);
  Rpr.useEffect(() => {
    if (vl() || Js()) return;
    if (!Kdt()) return;
    let r = false;
    return aFn().then(async o => {
      if (r || !o) return;
      let s = {
        type: o.url.startsWith("ws:") ? "ws-ide" : "sse-ide",
        url: o.url,
        ideName: o.name,
        authToken: o.authToken,
        ideRunningInWindows: o.ideRunningInWindows,
        scope: "dynamic"
      };
      if (await wft(), r || D4("ide", s)) return;
      let i = await aP("ide", s);
      if (r) return;
      if (i.type !== "connected") ST("ide", s).catch(() => {});
      n([i]);
    }), () => {
      r = true, dFn();
    };
  }, []), Uur(t, e);
}
var Rpr;