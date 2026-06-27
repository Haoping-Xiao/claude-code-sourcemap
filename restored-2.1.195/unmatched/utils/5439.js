// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module e6o
// matched 2.1.88 source: src/components/PromptInput/Notifications.tsx
// class=new  jaccard=0.0243  score=0.6357  fileCov=0.0247
// note: nearest: src/components/PromptInput/Notifications.tsx (0.0243); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module e6o] deps: er, je, MPe, ihc, lhc, ghc
hhc = R(lt(), 1), Ien = R(rt(), 1), Z8o = R(se(), 1);
function Kur() {
  let e = yhc.c(7),
    t = Ht(pdm);
  if (!t) return null;
  if ("jsx" in t) {
    let o;
    if (e[0] !== t.jsx || e[1] !== t.key) o = t6o.jsx(w, {
      wrap: "truncate",
      children: t.jsx
    }, t.key), e[0] = t.jsx, e[1] = t.key, e[2] = o;else o = e[2];
    return o;
  }
  let n = !t.color,
    r;
  if (e[3] !== t.color || e[4] !== t.text || e[5] !== n) r = t6o.jsx(w, {
    color: t.color,
    dimColor: n,
    wrap: "truncate",
    children: t.text
  }), e[3] = t.color, e[4] = t.text, e[5] = n, e[6] = r;else r = e[6];
  return r;
}
function pdm(e) {
  return e.notifications.current;
}
var yhc, t6o;