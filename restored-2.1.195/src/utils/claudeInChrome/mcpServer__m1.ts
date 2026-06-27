// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DFn
// matched 2.1.88 source: src/utils/claudeInChrome/mcpServer.ts
// class=modified (alt of src/utils/claudeInChrome/mcpServer.ts)  jaccard=0.025  score=0.1483  fileCov=0.0292
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DFn]
bCp = new Set(["claude-in-chrome", "Claude in Chrome"]);
function ACp(e) {
  let t = e.slice(0, ECp),
    n = e.length - t.length;
  if (n > 0) t.push(`${n} more`);
  if (t.length === 1) return t[0] ?? "";
  if (t.length === 2) return `${t[0]} and ${t[1]}`;
  return `${t.slice(0, -1).join(", ")}, and ${t.at(-1)}`;
}
function Q3t(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function HCp(e) {
  if (!Array.isArray(e.actions)) return [];
  let t = new Set(),
    n = [];
  for (let r of e.actions) {
    if (!Q3t(r) || typeof r.name !== "string") continue;
    if (r.name === "browser_batch" || rxt.has(r.name)) continue;
    let o = Z3t(r.name, Q3t(r.input) ? r.input : {});
    if (!t.has(o)) (t.add(o), n.push(o));
  }
  return n;
}
function Z3t(e, t) {
  let n = e.startsWith(nue) ? e.slice(nue.length) : e;
  if (n === "computer") {
    let r = typeof t.action === "string" ? t.action : void 0;
    if (r && t0a[r]) return t0a[r];
    return "use the browser";
  }
  if (n === "browser_batch") {
    let r = HCp(t);
    return r.length > 0 ? ACp(r) : "use the browser";
  }
  return SCp[n] ?? "use the browser";
}
var SCp,
  t0a,
  ECp = 4;
