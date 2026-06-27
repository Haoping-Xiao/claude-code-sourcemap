// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eUt
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eUt = E(() => {
  oat();
  y8 = R(rt(), 1);
});
function BJr(e) {
  return Oe.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ? Math.max(e, BWd) : e;
}
function Kf(e = 16) {
  let t = EGe.useContext(SW),
    [n, {
      isVisible: r
    }, o] = b0e(),
    s = fLn(),
    i = EGe.useRef(s),
    a = r;
  if (i.current !== s) i.current = s, a = o();
  let l = !!t && a && e !== null,
    c = e === null ? null : Math.ceil(BJr(e) / $U) * $U,
    u = EGe.useRef(0),
    d = EGe.useSyncExternalStore(l ? t.subscribeKeepAlive : rat, () => l ? u.current = Math.max(u.current, Math.floor(t.now() / c) * c) : u.current);
  return [n, d];
}
var EGe,
  BWd = 480;