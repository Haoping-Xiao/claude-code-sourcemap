// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oEc
// matched 2.1.88 source: src/hooks/useCommandKeybindings.tsx
// class=modified  jaccard=0.3338  score=1  fileCov=0.3338
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oEc] deps: Ed, hNe, HI, ps, id, dn, Un, kt, uo, tEc
((nEc = R(lt(), 1)), (rEc = R(rt(), 1)));
function xzo(e) {
  let t = sEc.c(8),
    { onSubmit: n, isActive: r } = e,
    o = KE(),
    s = pbe(),
    i;
  e: {
    if (!o) {
      let f;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((f = new Set()), (t[0] = f));
      else f = t[0];
      i = f;
      break e;
    }
    let p;
    if (t[1] !== o.bindings) {
      p = new Set();
      for (let f of o.bindings) if (f.action?.startsWith("command:")) p.add(f.action);
      ((t[1] = o.bindings), (t[2] = p));
    } else p = t[2];
    i = p;
  }
  let a = i,
    l;
  if (t[3] !== a || t[4] !== n) {
    l = {};
    for (let p of a) {
      let f = p.slice(8);
      l[p] = () => {
        n(`/${f}`, yhm, void 0, {
          fromKeybinding: true,
        });
      };
    }
    ((t[3] = a), (t[4] = n), (t[5] = l));
  } else l = t[5];
  let c = l,
    u = r && !s,
    d;
  if (t[6] !== u)
    ((d = {
      context: "Chat",
      isActive: u,
    }),
      (t[6] = u),
      (t[7] = d));
  else d = t[7];
  return (No(c, d), null);
}
var sEc, yhm;
