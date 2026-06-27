// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f_c
// matched 2.1.88 source: src/components/tasks/BackgroundTaskStatus.tsx
// class=partial  jaccard=0.0863  score=0.4096  fileCov=0.0986
// note: low-confidence suggestion: src/components/tasks/BackgroundTaskStatus.tsx; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module f_c] deps: @xmldom/xmldom/lib/entities.js, context/notifications.tsx, hooks/useTerminalSize.ts, context/notifications.tsx, components/PromptInput/Notifications.tsx
M6o = R(lt(), 1), NTt = R(se(), 1);
function O6o(e) {
  let t = $6o.c(13),
    {
      tasksSelected: n,
      onOpenDialog: r
    } = e,
    o = Ht(Rfm),
    s;
  if (t[0] !== o) s = Object.values(o ?? {}).filter(PAt), t[0] = o, t[1] = s;else s = t[1];
  let i = s;
  if (i.length === 0) return null;
  let a;
  if (t[2] !== i) a = l_t(i), t[2] = i, t[3] = a;else a = t[3];
  let l;
  if (t[4] !== r || t[5] !== a || t[6] !== n) l = FTe.jsx(AgentPill, {
    selected: n,
    onClick: r,
    children: a
  }), t[4] = r, t[5] = a, t[6] = n, t[7] = l;else l = t[7];
  let c;
  if (t[8] !== i) c = zal(i) && FTe.jsxs(w, {
    dimColor: true,
    children: [" \xB7 ", nt.arrowDown, " to view"]
  }), t[8] = i, t[9] = c;else c = t[9];
  let u;
  if (t[10] !== l || t[11] !== c) u = FTe.jsxs(FTe.Fragment, {
    children: [l, c]
  }), t[10] = l, t[11] = c, t[12] = u;else u = t[12];
  return u;
}
function Rfm(e) {
  return e.tasks;
}
function AgentPill(t0) {
  let t = $6o.c(8),
    {
      selected: n,
      onClick: r,
      children: o
    } = t0,
    [s, i] = m_c.useState(false),
    a = n || s,
    l;
  if (t[0] !== o || t[1] !== a) l = FTe.jsx(w, {
    color: "background",
    inverse: a,
    children: o
  }), t[0] = o, t[1] = a, t[2] = l;else l = t[2];
  let c = l;
  if (!r) return c;
  let u, d;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) u = () => i(true), d = () => i(false), t[3] = u, t[4] = d;else u = t[3], d = t[4];
  let p;
  if (t[5] !== c || t[6] !== r) p = FTe.jsx(U, {
    onClick: r,
    onMouseEnter: u,
    onMouseLeave: d,
    children: c
  }), t[5] = c, t[6] = r, t[7] = p;else p = t[7];
  return p;
}
var $6o, m_c, FTe;