// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kDc
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0096  score=0.8267  fileCov=0.0096
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0096); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kDc] deps: Ed, w4, Ye, dn, PVt, es, m3o, Fh
CDc = R(lt(), 1), mvt = R(rt(), 1), xDc = R(se(), 1);
function LDc(e) {
  let t = RDc.c(5),
    {
      addNotification: n
    } = Li(),
    r = Gfr.useRef(null),
    o = Ht(HCm),
    s,
    i;
  if (t[0] !== n || t[1] !== e || t[2] !== o) s = () => {
    let a = mir(o ?? e);
    if (a && a !== r.current) r.current = a, n({
      key: "model-deprecation-warning",
      kind: "warning",
      text: a,
      color: "warning",
      priority: "high"
    });
    if (!a) r.current = null;
  }, i = [e, o, n], t[0] = n, t[1] = e, t[2] = o, t[3] = s, t[4] = i;else s = t[3], i = t[4];
  Gfr.useEffect(s, i);
}
function HCm(e) {
  return e.mainLoopModelForSession ?? e.mainLoopModel;
}
var RDc, Gfr;