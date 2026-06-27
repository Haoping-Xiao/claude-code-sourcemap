// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z6o
// matched 2.1.88 source: src/commands/terminalSetup/index.ts
// class=partial  jaccard=0.1515  score=1  fileCov=0.1515
// note: low-confidence suggestion: src/commands/terminalSetup/index.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Z6o = E(() => {
  Tc();
  Ye();
  Coe();
  rbc = R(lt(), 1), LZ = R(se(), 1);
});
function obc(e) {
  let t = FTt.useRef(e);
  t.current = e;
  let {
      internal_querier: n
    } = s8(),
    r = FTt.useSyncExternalStore(yCt, () => fy()?.terminal ?? Oe.terminal);
  FTt.useEffect(() => {
    if (!Ns() || !n) return;
    if (r !== "iTerm.app" && r !== "Apple_Terminal") return;
    let o = Cu.get(process.stdout);
    if (!o) return;
    let s = new AbortController();
    return (async () => {
      while (!s.signal.aborted) {
        let i = await o.probeExternalClear(n);
        if (s.signal.aborted) return;
        if (i) t.current();
        await Nn(200, s.signal, {
          unref: !0
        });
      }
    })(), () => s.abort();
  }, [n, r]);
}
var FTt;