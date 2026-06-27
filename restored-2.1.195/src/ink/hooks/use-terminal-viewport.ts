// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U5i
// matched 2.1.88 source: src/ink/hooks/use-terminal-viewport.ts
// class=modified  jaccard=0.6238  score=0.9403  fileCov=0.6495
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var U5i = E(() => {
  Tne();
  ((N5i = R(lt(), 1)), (B5i = R(se(), 1)));
});
function F5i(e, t) {
  if (!e?.yogaNode || !t) return null;
  let n = e.yogaNode.getComputedHeight(),
    r = t.rows,
    o = e.yogaNode.getComputedTop(),
    s = e.parentNode,
    i = e.yogaNode;
  while (s) {
    if (s.yogaNode) ((o += s.yogaNode.getComputedTop()), (i = s.yogaNode));
    if (s.scrollTop) o -= s.scrollTop;
    s = s.parentNode;
  }
  let a = i.getComputedHeight(),
    l = o + n,
    c = a > r ? 1 : 0,
    u = Math.max(0, a - r) + c,
    d = u + r;
  if (n === 0) return o >= u && o < d;
  return l > u && o < d;
}
function b0e() {
  let e = y8.useContext(Dce),
    t = y8.useRef(null),
    n = y8.useRef({
      isVisible: true,
    }),
    r = y8.useCallback((c) => {
      t.current = c;
    }, []);
  function o() {
    let c = F5i(t.current, e);
    if (c === null) return n.current.isVisible;
    if (c !== n.current.isVisible)
      n.current = {
        isVisible: c,
      };
    return c;
  }
  let s = y8.useRef(o);
  s.current = o;
  let i = y8.useCallback(() => s.current(), []),
    a = y8.useRef(e);
  a.current = e;
  let l = y8.useCallback(() => F5i(t.current, a.current), []);
  return (
    y8.useLayoutEffect(() => {
      o();
    }),
    [r, n.current, i, l]
  );
}
var y8;
