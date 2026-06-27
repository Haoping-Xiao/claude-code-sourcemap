// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module v5
// matched 2.1.88 source: src/components/permissions/PermissionRequestTitle.tsx
// class=partial  jaccard=0.1346  score=0.1604  fileCov=0.4554
// note: low-confidence suggestion: src/components/permissions/PermissionRequestTitle.tsx; dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module v5] deps: O0, Ye
P1a = R(lt(), 1), M1a = R(se(), 1);
function PermissionRequestTitle(t0) {
  let t = $1a.c(18),
    {
      title: n,
      subtitle: r,
      color: o,
      requestSource: s,
      srPrefix: i
    } = t0,
    a = o === void 0 ? "permission" : o,
    l;
  e: switch (s?.type) {
    case "workflow-agent":
      {
        let g = s.workflowName,
          h;
        if (t[0] !== g) h = g !== void 0 ? `from the "${$a(g, 24, true)}" workflow` : "from a workflow", t[0] = g, t[1] = h;else h = t[1];
        l = h;
        break e;
      }
    case "subagent":
      {
        let g = s.agentName,
          h;
        if (t[2] !== g) h = g !== void 0 ? `from the ${$a(g, 24, true)} agent` : "from a subagent", t[2] = g, t[3] = h;else h = t[3];
        l = h;
      }
  }
  let c = i !== void 0 ? `${i} ${n}` : void 0,
    u;
  if (t[4] !== a || t[5] !== c || t[6] !== n) u = QDe.jsx(w, {
    "aria-label": c,
    bold: true,
    color: a,
    children: n
  }), t[4] = a, t[5] = c, t[6] = n, t[7] = u;else u = t[7];
  let d;
  if (t[8] !== l) d = l !== void 0 && QDe.jsxs(w, {
    children: [QDe.jsx(w, {
      dimColor: true,
      children: "\xB7 "
    }), l]
  }), t[8] = l, t[9] = d;else d = t[9];
  let p;
  if (t[10] !== u || t[11] !== d) p = QDe.jsxs(U, {
    flexDirection: "row",
    gap: 1,
    children: [u, d]
  }), t[10] = u, t[11] = d, t[12] = p;else p = t[12];
  let f;
  if (t[13] !== r) f = r != null && (typeof r === "string" ? QDe.jsx(w, {
    dimColor: true,
    wrap: "truncate-start",
    children: r
  }) : r), t[13] = r, t[14] = f;else f = t[14];
  let m;
  if (t[15] !== p || t[16] !== f) m = QDe.jsxs(U, {
    flexDirection: "column",
    children: [p, f]
  }), t[15] = p, t[16] = f, t[17] = m;else m = t[17];
  return m;
}
var $1a, QDe;