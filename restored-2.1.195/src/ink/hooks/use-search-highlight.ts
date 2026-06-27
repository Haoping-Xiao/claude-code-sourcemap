// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E8o
// matched 2.1.88 source: src/ink/hooks/use-search-highlight.ts
// class=modified  jaccard=0.4892  score=1  fileCov=0.4892
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var E8o = E(() => {
  kt();
  uo();
  ft();
  G4();
  RF();
  HN();
  w4();
  Tc();
  Ye();
  id();
  z1();
  er();
  BE();
  Lo();
  je();
  BR();
  Cp();
  uf();
  sa();
  ZYt();
  sp();
  co();
  Ao();
  _a();
  gz();
  u$();
  aR();
  NOe();
  ((dmc = R(lt(), 1)), (wA = R(rt(), 1)), (OTe = R(se(), 1)));
  xcm = /\x1b\[[\d;]*m|\x1b\]8;[^\x07\x1b]*(?:\x07|\x1b\\)/g;
  mmc = wA.memo(wcm);
});
function gmc() {
  vur.useContext(B_e);
  let e = Cu.get(process.stdout);
  return vur.useMemo(() => {
    if (!e)
      return {
        setQuery: () => {},
        scanElement: () => [],
        setPositions: () => {},
      };
    return {
      setQuery: (t) => e.setSearchHighlight(t),
      scanElement: (t) => e.scanElementSubtree(t),
      setPositions: (t) => e.setSearchPositions(t),
    };
  }, [e]);
}
var vur;
