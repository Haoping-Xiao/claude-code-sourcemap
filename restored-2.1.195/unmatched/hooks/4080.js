// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qol
// matched 2.1.88 source: src/ink/useTerminalNotification.ts
// class=new  jaccard=0.0531  score=1  fileCov=0.0531
// note: nearest: src/ink/useTerminalNotification.ts (0.0531); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qol] deps: @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts, utils/messages.ts, context/modalContext.tsx, commands/add-dir/validation.ts
Gol = R(lt(), 1), DT = R(se(), 1);
function Dyt() {
  let e = Sd(),
    t = Z7();
  return zol.useCallback(() => {
    if (!e) return;
    let n = Date.now();
    if (n - Vol < nrf) return;
    Vol = n, t.notifyBell();
  }, [e, t]);
}
var zol,
  Vol = 0,
  nrf = 500,
  Kol = 5000;