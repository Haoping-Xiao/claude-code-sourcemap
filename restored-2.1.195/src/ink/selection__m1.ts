// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uzn
// matched 2.1.88 source: src/ink/selection.ts
// class=modified (alt of src/ink/selection.ts)  jaccard=0.0353  score=0.5927  fileCov=0.0362
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function findPlainTextUrlAt(screen) {
  while (screen.length > 0) {
    let t = screen.at(-1);
    if (".,;:!?".includes(t)) {
      screen = screen.slice(0, -1);
      continue;
    }
    let n = irf[t];
    if (!n) break;
    let r = 0,
      o = 0;
    for (let s of screen)
      if (s === n) r++;
      else if (s === t) o++;
    if (o > r) screen = screen.slice(0, -1);
    else break;
  }
  return screen;
}
function Q8e(e) {
  let t = rsl.c(9),
    { children: n, color: r, bold: o } = e,
    s;
  if (t[0] !== n) {
    s = [];
    let a = 0;
    for (let c of n.matchAll(srf)) {
      let u = findPlainTextUrlAt(c[0]);
      if (c.index > a) s.push(n.slice(a, c.index));
      (s.push(
        nCo.jsx(
          xs,
          {
            url: u,
            children: u,
          },
          c.index,
        ),
      ),
        (a = c.index + u.length));
    }
    let l;
    if (t[2] !== n || t[3] !== a) ((l = n.slice(a)), (t[2] = n), (t[3] = a), (t[4] = l));
    else l = t[4];
    (s.push(l), (t[0] = n), (t[1] = s));
  } else s = t[1];
  let i;
  if (t[5] !== o || t[6] !== r || t[7] !== s)
    ((i = nCo.jsx(w, {
      color: r,
      bold: o,
      children: s,
    })),
      (t[5] = o),
      (t[6] = r),
      (t[7] = s),
      (t[8] = i));
  else i = t[8];
  return i;
}
var rsl, nCo, srf, irf;
