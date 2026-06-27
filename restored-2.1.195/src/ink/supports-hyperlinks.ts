// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AW
// matched 2.1.88 source: src/ink/supports-hyperlinks.ts
// class=modified  jaccard=0.2631  score=0.4852  fileCov=0.3649
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module AW] deps: ft
((u5i = R(rt(), 1)),
  (d5i = R(l5i(), 1)),
  (c5i = ["ghostty", "Hyper", "kitty", "alacritty", "iTerm.app", "iTerm2"]));
function xs(e) {
  let t = p5i.c(5),
    { children: n, url: r, fallback: o, assumeSupport: s } = e,
    i = n ?? r;
  if (s || vI()) {
    let c;
    if (t[0] !== i || t[1] !== r)
      ((c = DLn.jsx(nS, {
        children: DLn.jsx("ink-link", {
          href: r,
          children: i,
        }),
      })),
        (t[0] = i),
        (t[1] = r),
        (t[2] = c));
    else c = t[2];
    return c;
  }
  let a = o ?? i,
    l;
  if (t[3] !== a)
    ((l = DLn.jsx(nS, {
      children: a,
    })),
      (t[3] = a),
      (t[4] = l));
  else l = t[4];
  return l;
}
var p5i, DLn;
