// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bKl
// matched 2.1.88 source: src/components/hooks/SelectMatcherMode.tsx
// class=modified  jaccard=0.3936  score=0.5205  fileCov=0.6174
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bKl] deps: Ye, WAt, Vl, vi, B_, Ko
((yKl = R(lt(), 1)), (mYe = R(se(), 1)));
function SelectMatcherMode(e) {
  let t = SKl.c(26),
    {
      selectedEvent: n,
      matchersForSelectedEvent: r,
      hooksByEventAndMatcher: o,
      eventDescription: s,
      onSelect: i,
      onCancel: a,
    } = e,
    l;
  if (t[0] !== o || t[1] !== r || t[2] !== n) {
    let g;
    if (t[4] !== o || t[5] !== n)
      ((g = (h) => {
        let y = o[n]?.[h] || [],
          b = Uo(y.map(uVf));
        return {
          matcher: h,
          sources: b,
          hookCount: y.length,
        };
      }),
        (t[4] = o),
        (t[5] = n),
        (t[6] = g));
    else g = t[6];
    ((l = r.map(g)), (t[0] = o), (t[1] = r), (t[2] = n), (t[3] = l));
  } else l = t[3];
  let c = l;
  if (r.length === 0) {
    let g = `${n} - Matchers`,
      h,
      y;
    if (t[7] === Symbol.for("react.memo_cache_sentinel"))
      ((h = gYe.jsx(ht, {
        chord: "escape",
        action: "go back",
      })),
        (y = gYe.jsx(Fl, {
          hint: "To add hooks, edit settings.json directly or ask Claude",
          children: "No hooks configured for this event",
        })),
        (t[7] = h),
        (t[8] = y));
    else ((h = t[7]), (y = t[8]));
    let b;
    if (t[9] !== s || t[10] !== a || t[11] !== g)
      ((b = gYe.jsx(zn, {
        title: g,
        subtitle: s,
        onCancel: a,
        inputGuide: h,
        children: y,
      })),
        (t[9] = s),
        (t[10] = a),
        (t[11] = g),
        (t[12] = b));
    else b = t[12];
    return b;
  }
  let u = `${n} - Matchers`,
    d;
  if (t[13] !== c) ((d = c.map(cVf)), (t[13] = c), (t[14] = d));
  else d = t[14];
  let p;
  if (t[15] !== i)
    ((p = (g) => {
      i(g);
    }),
      (t[15] = i),
      (t[16] = p));
  else p = t[16];
  let f;
  if (t[17] !== a || t[18] !== d || t[19] !== p)
    ((f = gYe.jsx(U, {
      flexDirection: "column",
      children: gYe.jsx(Sr, {
        options: d,
        onChange: p,
        onCancel: a,
      }),
    })),
      (t[17] = a),
      (t[18] = d),
      (t[19] = p),
      (t[20] = f));
  else f = t[20];
  let m;
  if (t[21] !== s || t[22] !== a || t[23] !== u || t[24] !== f)
    ((m = gYe.jsx(zn, {
      title: u,
      subtitle: s,
      onCancel: a,
      children: f,
    })),
      (t[21] = s),
      (t[22] = a),
      (t[23] = u),
      (t[24] = f),
      (t[25] = m));
  else m = t[25];
  return m;
}
function cVf(e) {
  let t = e.sources.map(lKl).join(", "),
    n = e.matcher || "(all)";
  return {
    label: `[${t}] ${n}`,
    value: e.matcher,
    description: `${e.hookCount} ${bn(e.hookCount, "hook")}`,
  };
}
function uVf(e) {
  return e.source;
}
var SKl, gYe;
