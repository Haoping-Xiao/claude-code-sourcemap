// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yj
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0105  score=0.624  fileCov=0.0106
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0105); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Yj] deps: bootstrap/state.ts, components/ScrollKeybindingHandler.tsx, keybindings/defaultBindings.ts
EZr = R(lt(), 1), Qat = R(rt(), 1), L6i = R(se(), 1);
R6i = Qat.createContext(null);
function $r(e, t, n = {}) {
  let {
      context: r = "Global",
      isActive: o = true
    } = n,
    s = KE(),
    i = O0e.useRef(t);
  i.current = t, O0e.useEffect(() => {
    if (!s || !o) return;
    return s.registerHandler({
      action: e,
      context: r,
      handler: () => i.current(),
      singleKey: true
    });
  }, [e, r, s, o]);
}
function No(e, t = {}) {
  let {
      context: n = "Global",
      isActive: r = true
    } = t,
    o = KE(),
    s = O0e.useRef(e);
  s.current = e;
  let i = Object.keys(e).sort().join("|");
  O0e.useEffect(() => {
    if (!o || !r) return;
    let a = [];
    for (let l of Object.keys(s.current)) a.push(o.registerHandler({
      action: l,
      context: n,
      handler: () => s.current[l]?.(),
      singleKey: true
    }));
    return () => {
      for (let l of a) l();
    };
  }, [n, i, o, r]);
}
function Zat(e, {
  isActive: t = true
} = {}) {
  let n = KE(),
    r = O0e.useRef(e);
  r.current = e, O0e.useEffect(() => {
    if (!t || !n) return;
    return n.registerPreDispatch((o, s, i) => r.current(o, s, i));
  }, [t, n]);
}
var O0e;