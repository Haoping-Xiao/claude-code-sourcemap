// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kDc
// matched 2.1.88 source: src/hooks/notifs/useDeprecationWarningNotification.tsx
// class=modified  jaccard=0.3588  score=1  fileCov=0.3588
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var kDc = E(() => {
  Ed();
  w4();
  Ye();
  dn();
  PVt();
  es();
  m3o();
  Fh();
  ((CDc = R(lt(), 1)), (mvt = R(rt(), 1)), (xDc = R(se(), 1)));
});
function LDc(e) {
  let t = RDc.c(5),
    { addNotification: n } = Li(),
    r = Gfr.useRef(null),
    o = Ht(HCm),
    s,
    i;
  if (t[0] !== n || t[1] !== e || t[2] !== o)
    ((s = () => {
      let a = mir(o ?? e);
      if (a && a !== r.current)
        ((r.current = a),
          n({
            key: "model-deprecation-warning",
            kind: "warning",
            text: a,
            color: "warning",
            priority: "high",
          }));
      if (!a) r.current = null;
    }),
      (i = [e, o, n]),
      (t[0] = n),
      (t[1] = e),
      (t[2] = o),
      (t[3] = s),
      (t[4] = i));
  else ((s = t[3]), (i = t[4]));
  Gfr.useEffect(s, i);
}
function HCm(e) {
  return e.mainLoopModelForSession ?? e.mainLoopModel;
}
var RDc, Gfr;
