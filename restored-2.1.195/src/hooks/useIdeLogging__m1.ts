// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $ur
// matched 2.1.88 source: src/hooks/useIdeLogging.ts
// class=modified (alt of src/hooks/useIdeLogging.ts)  jaccard=0.3183  score=0.9201  fileCov=0.3273
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $ur] deps: si, _i, kt, pre, uo, Y4, vn, np, O0, Ye, ps, jZe, es, uf, co, Vl, Bs, vi, gDe, B_, f_, Ko, co, EC
((Mur = R(lt(), 1)),
  (W8o = require("crypto")),
  (vTt = R(require("path"))),
  (GT = R(rt(), 1)),
  (ul = R(se(), 1)));
function useIdeLogging(mcpClients) {
  Fgc.useEffect(() => {
    if (!mcpClients.length) return;
    let t = p5(mcpClients);
    if (t)
      t.client.setNotificationHandler(qum(), (n) => {
        let { eventName: r, eventData: o } = n.params;
        G(`tengu_ide_${r}`, o);
      });
  }, [mcpClients]);
}
var Fgc, qum;
