// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LBl
// matched 2.1.88 source: src/components/HelpV2/Commands.tsx
// class=partial  jaccard=0.1184  score=0.1733  fileCov=0.2719
// note: low-confidence suggestion: src/components/HelpV2/Commands.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var LBl = E(() => {
  ft();
  Uh();
  NOf = {
    type: "local",
    name: "pause-memory",
    aliases: ["memory-pause", "toggle-memory"],
    description: "Pause automemory for this session",
    isEnabled: () => !1,
    isHidden: !1,
    supportsNonInteractive: !1,
    thinClientDispatch: "post-text",
    load: () => Promise.resolve().then(() => (RBl(), kBl)),
    userFacingName() {
      return "pause-memory";
    }
  }, tBo = NOf;
});
function nBo(e) {
  let t = DBl.c(14),
    {
      commands: n,
      maxHeight: r,
      columns: o,
      title: s,
      onCancel: i,
      emptyMessage: a
    } = e,
    {
      headerFocused: l,
      focusHeader: c
    } = tx(),
    u = Math.max(1, o - 10),
    d = Math.max(1, Math.floor((r - 10) / 2)),
    p;
  if (t[0] !== n || t[1] !== u) {
    let g = new Set(),
      h;
    if (t[3] !== u) h = y => ({
      label: `/${y.name}`,
      value: y.name,
      description: $a(yse(y), u, !0)
    }), t[3] = u, t[4] = h;else h = t[4];
    p = n.filter(y => {
      if (g.has(y.name)) return !1;
      return g.add(y.name), !0;
    }).sort(BOf).map(h), t[0] = n, t[1] = u, t[2] = p;
  } else p = t[2];
  let f = p,
    m;
  if (t[5] !== n.length || t[6] !== a || t[7] !== c || t[8] !== l || t[9] !== i || t[10] !== f || t[11] !== s || t[12] !== d) m = qfe.jsx(U, {
    flexDirection: "column",
    paddingY: 1,
    children: n.length === 0 && a ? qfe.jsx(Fl, {
      children: a
    }) : qfe.jsxs(qfe.Fragment, {
      children: [qfe.jsx(w, {
        children: s
      }), qfe.jsx(U, {
        marginTop: 1,
        children: qfe.jsx(Sr, {
          options: f,
          visibleOptionCount: d,
          onCancel: i,
          disableSelection: !0,
          hideIndexes: !0,
          layout: "compact-vertical",
          onUpFromFirstItem: c,
          isDisabled: l
        })
      })]
    })
  }), t[5] = n.length, t[6] = a, t[7] = c, t[8] = l, t[9] = i, t[10] = f, t[11] = s, t[12] = d, t[13] = m;else m = t[13];
  return m;
}
function BOf(e, t) {
  return e.name.localeCompare(t.name);
}
var DBl, qfe;