// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E5
// matched 2.1.88 source: src/components/VirtualMessageList.tsx
// class=new  jaccard=0.0192  score=0.8166  fileCov=0.0192
// note: nearest: src/components/VirtualMessageList.tsx (0.0192); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var E5 = E(() => {
  kLe();
  co();
  Ye();
  sr();
  zX();
  ql();
  yMa = R(lt(), 1), Wpt = R(se(), 1);
});
function cP({
  children: e
}) {
  let t = ijn.useContext(wLe),
    [n, r,, o] = b0e(),
    s = ijn.useRef(e);
  if ((o() ?? r.isVisible) || t) s.current = e;
  return _Ma.jsx(U, {
    ref: n,
    children: s.current
  });
}
var ijn, _Ma;