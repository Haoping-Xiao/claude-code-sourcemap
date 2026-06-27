// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ynr
// matched 2.1.88 source: src/components/mcp/MCPToolListView.tsx
// class=modified  jaccard=0.3374  score=0.5255  fileCov=0.4851
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ynr] deps: Ye, Ox, sr, Cc, vKe, lJ, vi
((s2l = R(lt(), 1)), (Knr = R(rt(), 1)), (DH = R(se(), 1)));
function MCPToolListView(e) {
  let t = i2l.c(24),
    { server: n, onSelectTool: r, onBack: o } = e,
    s = Ht(Q1f),
    i;
  e: {
    if (n.client.type !== "connected") {
      let _;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((_ = []), (t[0] = _));
      else _ = t[0];
      i = _;
      break e;
    }
    let b;
    if (t[1] !== s || t[2] !== n.name)
      ((b = sde(s, n.name).sort(J1f)), (t[1] = s), (t[2] = n.name), (t[3] = b));
    else b = t[3];
    i = b;
  }
  let a = i,
    l = On(a, X1f),
    c;
  if (t[4] !== n.name || t[5] !== a) {
    let b;
    if (t[7] !== n.name)
      ((b = (_, S) => {
        let A = tmn(_.name, n.name),
          v = _.userFacingName ? _.userFacingName({}) : A,
          C = nmn(v),
          x = _.isReadOnly?.({}) ?? false,
          I = _.isDestructive?.({}) ?? false,
          k = _.isOpenWorld?.({}) ?? false,
          D = _.mcpInfo?.effectiveMaxPermission;
        if (D === "blocked")
          return {
            label: C,
            value: S.toString(),
            disabled: true,
            description: "disabled by your organization",
            descriptionColor: "warning",
          };
        let P = [];
        if (x) P.push("read-only");
        if (I) P.push("destructive");
        if (k) P.push("open-world");
        if (D === "ask") P.push("ask-only");
        return {
          label: C,
          value: S.toString(),
          description: P.length > 0 ? P.join(", ") : void 0,
        };
      }),
        (t[7] = n.name),
        (t[8] = b));
    else b = t[8];
    ((c = a.map(b)), (t[4] = n.name), (t[5] = a), (t[6] = c));
  } else c = t[6];
  let u = c,
    d = a.length - l,
    p;
  if (t[9] !== l || t[10] !== d || t[11] !== a.length)
    ((p =
      l > 0
        ? `${d} ${bn(d, "tool")} \xB7 ${l} disabled by your organization`
        : `${a.length} ${bn(a.length, "tool")}`),
      (t[9] = l),
      (t[10] = d),
      (t[11] = a.length),
      (t[12] = p));
  else p = t[12];
  let f = p,
    m = `Tools for ${n.name}`,
    g;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((g = PHe.jsxs(Tn, {
      children: [
        PHe.jsx(ht, {
          chord: ["up", "down"],
          action: "navigate",
        }),
        PHe.jsx(ht, {
          chord: "enter",
          action: "select",
        }),
        PHe.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "back",
        }),
      ],
    })),
      (t[13] = g));
  else g = t[13];
  let h;
  if (t[14] !== o || t[15] !== r || t[16] !== a || t[17] !== u)
    ((h =
      a.length === 0
        ? PHe.jsx(Fl, {
            children: "No tools available",
          })
        : PHe.jsx(Sr, {
            options: u,
            onChange: (b) => {
              let _ = a[parseInt(b)];
              if (_) r(_);
            },
            onCancel: o,
          })),
      (t[14] = o),
      (t[15] = r),
      (t[16] = a),
      (t[17] = u),
      (t[18] = h));
  else h = t[18];
  let y;
  if (t[19] !== o || t[20] !== f || t[21] !== m || t[22] !== h)
    ((y = PHe.jsx(zn, {
      title: m,
      subtitle: f,
      onCancel: o,
      inputGuide: g,
      children: h,
    })),
      (t[19] = o),
      (t[20] = f),
      (t[21] = m),
      (t[22] = h),
      (t[23] = y));
  else y = t[23];
  return y;
}
function X1f(e) {
  return e.mcpInfo?.effectiveMaxPermission === "blocked";
}
function J1f(e, t) {
  let n = e.mcpInfo?.effectiveMaxPermission === "blocked" ? 1 : 0,
    r = t.mcpInfo?.effectiveMaxPermission === "blocked" ? 1 : 0;
  return n - r;
}
function Q1f(e) {
  return e.mcp.tools;
}
var i2l, PHe;
