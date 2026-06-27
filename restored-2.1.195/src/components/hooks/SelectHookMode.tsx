// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hKl
// matched 2.1.88 source: src/components/hooks/SelectHookMode.tsx
// class=modified  jaccard=0.3896  score=0.5344  fileCov=0.5898
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var hKl = E(() => {
  si();
  Ye();
  sr();
  Vl();
  vi();
  ((mKl = R(lt(), 1)), (KN = R(se(), 1)));
});
function _Kl(e) {
  let t = yKl.c(20),
    {
      selectedEvent: n,
      selectedMatcher: r,
      hooksForSelectedMatcher: o,
      hookEventMetadata: s,
      onSelect: i,
      onCancel: a,
    } = e,
    l = s.matcherMetadata !== void 0 ? `${n} - Matcher: ${r || "(all)"}` : n;
  if (o.length === 0) {
    let m, g;
    if (t[0] === Symbol.for("react.memo_cache_sentinel"))
      ((m = mYe.jsx(ht, {
        chord: "escape",
        action: "go back",
      })),
        (g = mYe.jsx(Fl, {
          hint: "To add hooks, edit settings.json directly or ask Claude",
          children: "No hooks configured for this event",
        })),
        (t[0] = m),
        (t[1] = g));
    else ((m = t[0]), (g = t[1]));
    let h;
    if (t[2] !== s.description || t[3] !== a || t[4] !== l)
      ((h = mYe.jsx(zn, {
        title: l,
        subtitle: s.description,
        onCancel: a,
        inputGuide: m,
        children: g,
      })),
        (t[2] = s.description),
        (t[3] = a),
        (t[4] = l),
        (t[5] = h));
    else h = t[5];
    return h;
  }
  let c = s.description,
    u;
  if (t[6] !== o) ((u = o.map(lVf)), (t[6] = o), (t[7] = u));
  else u = t[7];
  let d;
  if (t[8] !== o || t[9] !== i)
    ((d = (m) => {
      let g = parseInt(m, 10),
        h = o[g];
      if (h) i(h);
    }),
      (t[8] = o),
      (t[9] = i),
      (t[10] = d));
  else d = t[10];
  let p;
  if (t[11] !== a || t[12] !== u || t[13] !== d)
    ((p = mYe.jsx(U, {
      flexDirection: "column",
      children: mYe.jsx(Sr, {
        options: u,
        onChange: d,
        onCancel: a,
      }),
    })),
      (t[11] = a),
      (t[12] = u),
      (t[13] = d),
      (t[14] = p));
  else p = t[14];
  let f;
  if (t[15] !== s.description || t[16] !== a || t[17] !== p || t[18] !== l)
    ((f = mYe.jsx(zn, {
      title: l,
      subtitle: c,
      onCancel: a,
      children: p,
    })),
      (t[15] = s.description),
      (t[16] = a),
      (t[17] = p),
      (t[18] = l),
      (t[19] = f));
  else f = t[19];
  return f;
}
function lVf(e, t) {
  return {
    label: `[${e.config.type}] ${o2(e.config)}`,
    value: t.toString(),
    description:
      e.source === "pluginHook" && e.pluginName
        ? `${Qjo(e.source)} (${e.pluginName})`
        : Qjo(e.source),
  };
}
var yKl, mYe;
