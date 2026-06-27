// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qNt
// matched 2.1.88 source: src/ink/components/StdinContext.ts
// class=modified  jaccard=0.3528  score=1  fileCov=0.3528
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var qNt = E(() => {
  C0n();
  ((vBi = R(rt(), 1)),
    (wBi = vBi.createContext({
      stdin: process.stdin,
      internal_eventEmitter: new F3e(),
      setRawMode() {},
      isRawModeSupported: !1,
      internal_querier: null,
    })));
  wBi.displayName = "InternalStdinContext";
  B_e = wBi;
});
var CBi,
  FNd = () => CBi.useContext(B_e),
  s8;
