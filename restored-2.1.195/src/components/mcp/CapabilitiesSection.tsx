// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RBo
// matched 2.1.88 source: src/components/mcp/CapabilitiesSection.tsx
// class=modified  jaccard=0.5402  score=0.7144  fileCov=0.689
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module RBo] deps: si, Ye, Yfe, uo, CH
((r2l = R(lt(), 1)), (oXt = R(rt(), 1)), (Sse = R(se(), 1)));
function CapabilitiesSection(t0) {
  let t = o2l.c(9),
    { serverToolsCount: n, serverPromptsCount: r, serverResourcesCount: o } = t0,
    s;
  if (t[0] !== r || t[1] !== o || t[2] !== n) {
    if (((s = []), n > 0)) s.push("tools");
    if (o > 0) s.push("resources");
    if (r > 0) s.push("prompts");
    ((t[0] = r), (t[1] = o), (t[2] = n), (t[3] = s));
  } else s = t[3];
  let i;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((i = DEt.jsx(w, {
      bold: true,
      children: "Capabilities: ",
    })),
      (t[4] = i));
  else i = t[4];
  let a;
  if (t[5] !== s)
    ((a =
      s.length > 0
        ? DEt.jsx(Tn, {
            children: s,
          })
        : "none"),
      (t[5] = s),
      (t[6] = a));
  else a = t[6];
  let l;
  if (t[7] !== a)
    ((l = DEt.jsxs(U, {
      children: [
        i,
        DEt.jsx(w, {
          color: "text",
          children: a,
        }),
      ],
    })),
      (t[7] = a),
      (t[8] = l));
  else l = t[8];
  return l;
}
var o2l, DEt;
