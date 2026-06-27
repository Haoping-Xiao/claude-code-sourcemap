// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ojl
// matched 2.1.88 source: src/components/design-system/FuzzyPicker.tsx
// class=modified (alt of src/components/design-system/FuzzyPicker.tsx)  jaccard=0.074  score=0.1903  fileCov=0.1081
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ojl] deps: @xmldom/xmldom/lib/entities.js, utils/debug.ts, context/modalContext.tsx, components/StructuredDiff/Fallback.tsx, components/CustomSelect/select.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, components/CustomSelect/select.tsx, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, utils/config.ts, utils/errors.ts, utils/plugins/marketplaceHelpers.ts, utils/plugins/officialMarketplaceGcs.ts, utils/plugins/installedPluginsManager.ts, commands/plugin/ManageMarketplaces.tsx, utils/plugins/loadPluginAgents.ts, utils/plugins/schemas.ts, utils/settings/settings.ts, services/teamMemorySync/secretScanner.ts
((njl = R(lt(), 1)), (X$ = R(rt(), 1)), (Ks = R(se(), 1)));
function yXt(e, t, n) {
  let r = _b(e - n + 1, 0, Math.max(0, t - n)),
    o = Math.min(r + n, t);
  return {
    windowStart: r,
    windowEnd: o,
    moreAbove: r,
    moreBelow: t - o,
  };
}
function sjl({
  count: e,
  visibleCount: t,
  containerRef: n,
  isDisabled: r = false,
  onAccept: o,
  onRowKeyDown: s,
  onCursorChange: i,
  edge: a = "clamp",
}) {
  let [l, c] = s1e.useState(0),
    u = NLn(n),
    d = Math.max(0, e - 1),
    p = _b(l, 0, d);
  function f(b) {
    c((_) => {
      let A = _b(_, 0, d) + b;
      if (a === "wrap" && e > 0) return ((A % e) + e) % e;
      return _b(A, 0, d);
    });
  }
  s1e.useEffect(() => {
    if (l !== p) c(p);
  }, [l, p]);
  let m = s1e.useRef(i);
  m.current = i;
  let g = s1e.useRef(null);
  (s1e.useEffect(() => {
    if (e === 0) {
      g.current = null;
      return;
    }
    if (g.current !== p) ((g.current = p), m.current?.(p));
  }, [p, e]),
    No(
      {
        "select:next": () => f(1),
        "select:previous": () => f(-1),
        "select:pageDown": () => f(t),
        "select:pageUp": () => f(-t),
        "select:first": () => c(0),
        "select:last": () => c(d),
      },
      {
        context: "Select",
        isActive: u && !r && e > 0,
      },
    ));
  function h(b) {
    if (r || e === 0) return;
    if (b.key === "return" && o) {
      (o(p), b.preventDefault(), b.stopImmediatePropagation());
      return;
    }
    s?.(b, p);
  }
  let y = yXt(p, e, t);
  return {
    cursor: p,
    ...y,
    isCursor: (b) => b === p && e > 0,
    hasFocus: u,
    setCursor: (b) => c(_b(b, 0, d)),
    bind: {
      tabIndex: 0,
      onKeyDown: h,
    },
  };
}
var s1e;
