// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dHl
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0032  score=0.2936  fileCov=0.0032
// note: nearest: src/screens/REPL.tsx (0.0032); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dHl = E(() => {
  ii();
  Il();
  p6e();
  lze();
});
function pHl(e) {
  if (!e || typeof e !== "object") return false;
  return "behavior" in e && (e.behavior === "allow" || e.behavior === "deny");
}
function ufe(e) {
  return (e.split("__").pop() || e).replace(/_/g, " ").replace(/\b\w/g, n => n.toUpperCase());
}
var QXn = () => {};
function $bt(e, t) {
  if (!Array.isArray(e)) return [];
  let n = [];
  for (let r of e) {
    if (r == null || typeof r !== "object" || r.type !== "tool_use") continue;
    let {
      id: o,
      name: s
    } = r;
    if (typeof o !== "string" || typeof s !== "string") continue;
    let i = t ? _l(t, s)?.mcpInfo : void 0,
      a = i?.title || ufe(s);
    if (a === s) continue;
    let l = {
      id: o,
      display_name: a
    };
    if (i) {
      if (l.server_display_name = i.displayName || i.serverInfoName || i.serverName, i.iconUrl) l.icon_url = i.iconUrl;
    }
    n.push(l);
  }
  return n;
}