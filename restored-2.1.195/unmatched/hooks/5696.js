// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uRc
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0129  score=0.4782  fileCov=0.0131
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0129); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uRc] deps: Ye
lRc = R(lt(), 1), P7e = R(se(), 1);
function pRc(e) {
  return dRc.get(e) ?? e.normalize("NFKC");
}
function lvt({
  inputValue: e,
  setInputValue: t,
  isValidDigit: n,
  onDigit: r,
  enabled: o = true,
  once: s = false,
  debounceMs: i = lwm,
  mountDelayMs: a = cwm
}) {
  let l = ks(),
    c = qme.useRef(e),
    u = qme.useRef(false),
    d = qme.useRef(null),
    p = qme.useRef(o ? l.now() : null),
    f = qme.useRef(o);
  if (o && !f.current) p.current = l.now();
  f.current = o;
  let m = qme.useRef({
    setInputValue: t,
    isValidDigit: n,
    onDigit: r
  });
  m.current = {
    setInputValue: t,
    isValidDigit: n,
    onDigit: r
  };
  let g = KE(),
    h = qme.useRef(g);
  h.current = g, Zat((y, b) => {
    if (!b.return || b.shift || b.ctrl || b.meta || b.super || !o || s && u.current) return;
    let _ = h.current;
    if (_) {
      let v = _.resolve(y, b, [..._.activeContexts, "Chat", "Global"]);
      if (v.type !== "match" || v.action !== "chat:submit") return;
    }
    if (p.current !== null && l.now() - p.current < a) return;
    if (e === c.current || e.length !== 1) return;
    let S = e.normalize("NFKC"),
      A = m.current.isValidDigit(S) ? S : dRc.get(e) ?? S;
    if (!m.current.isValidDigit(A)) return;
    if (d.current !== null) d.current(), d.current = null;
    return u.current = true, m.current.setInputValue(""), m.current.onDigit(A), true;
  }, {
    isActive: o
  }), qme.useEffect(() => {
    if (!o || s && u.current) return;
    if (d.current !== null) d.current(), d.current = null;
    if (p.current !== null && l.now() - p.current < a) return;
    if (e !== c.current && e.length === 1) {
      let y = e.normalize("NFKC");
      if (m.current.isValidDigit(y)) d.current = l.setTimeout(() => {
        d.current = null, u.current = true, m.current.setInputValue(""), m.current.onDigit(y);
      }, i);
    }
    return () => {
      if (d.current !== null) d.current(), d.current = null;
    };
  }, [e, o, s, i, a, l]);
}
var qme,
  lwm = 400,
  cwm = 600,
  dRc;