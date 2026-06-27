// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qgc
// matched 2.1.88 source: src/components/ConsoleOAuthFlow.tsx
// class=new  jaccard=0.0177  score=1  fileCov=0.0177
// note: nearest: src/components/ConsoleOAuthFlow.tsx (0.0177); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qgc] deps: Qho
Our = R(rt(), 1);
function Vum() {
  return Date.now() - Ex();
}
function zum(e) {
  return Vum() < e;
}
function Kum(e) {
  return !zum(e);
}
function ben(e, t) {
  let n = Z7(),
    [r, o] = _en.useState(false);
  _en.useEffect(() => {
    Zwt();
  }, []), _en.useEffect(() => {
    o(false);
  }, [e, t, n]), Gc(() => {
    if (Kum(Vgc)) o(true), bpe({
      message: e,
      notificationType: t
    }, n);
  }, r ? null : Vgc);
}
var _en,
  Vgc = 6000;