// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yje
// matched 2.1.88 source: src/tools/WebSearchTool/WebSearchTool.ts
// class=modified (alt of src/tools/WebSearchTool/WebSearchTool.ts)  jaccard=0.0248  score=0.1984  fileCov=0.0276
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yje] deps: tIt, Zsn, Ksn, uee, je, At, vn, dn, xnt, wjr, tIt, Zsn, Ksn, uee, xnt, wjr
hje = new Set();
function Rjr() {
  return (
    Oe.ANTHROPIC_FOUNDRY_BASE_URL ||
    (Oe.ANTHROPIC_FOUNDRY_RESOURCE
      ? `https://${Oe.ANTHROPIC_FOUNDRY_RESOURCE}.services.ai.azure.com`
      : void 0)
  );
}
function Ljr(e) {
  let t = e.replace(/\[(1|2)m\]/gi, "");
  return `${Rjr() ?? "unknown-foundry-resource"}::${t}`;
}
function makeToolSchema(e) {
  let t = e.match(vfd)?.[1];
  if (t) {
    let r = t.split(",").map((o) => o.trim());
    if (r.every((o) => tii.test(o))) return r;
  }
  let n = e.match(wfd)?.[1];
  if (n) {
    let r = n.split(/[,\s]+/).filter((o) => o !== "and" && tii.test(o));
    return r.length > 0 ? r : null;
  }
  if (Cfd.test(e)) return ["web_search"];
  return null;
}
function Djr(e, t) {
  if (t.length === 0) return;
  let n = Ljr(e),
    r = gCt(),
    o = r.get(n);
  if (o && t.every((i) => o.has(i))) return;
  let s = o ? new Set(o) : new Set();
  for (let i of t) s.add(i);
  (r.set(n, s),
    T(`[foundry-capabilities] deployment ${n} does not support: ${[...s].join(", ")}`, {
      level: "warn",
    }));
}
function gle(e, t) {
  let n = gCt();
  if (n.size === 0) return true;
  return !n.get(Ljr(e))?.has(t);
}
function Pjr(e) {
  if (fr() !== "foundry") return null;
  if (!(e instanceof Fo) || e.status !== 400) return null;
  let t = e.error;
  if (t && typeof t === "object" && "error" in t) {
    let n = t.error;
    if (n && typeof n === "object" && "message" in n && typeof n.message === "string")
      return makeToolSchema(n.message);
  }
  return makeToolSchema(e.message ?? "");
}
function WebSearchTool(e, t, n) {
  let r = Pjr(e);
  if (!r) return null;
  if ((Djr(t, r), n === "web_search_tool")) return aMt;
  if (r.some((o) => Ifd.has(o))) return `retry:foundry-capability-strip:${r.join(",")}`;
  return null;
}
function rii(e, t) {
  if (fr() !== "foundry") return e;
  let n = gCt();
  if (n.size === 0) return e;
  let r = n.get(Ljr(t));
  if (!r || r.size === 0) return e;
  let o = r.has("tool_search_server") || r.has("tool_search"),
    s = r.has("structured_outputs");
  if (!o && !s) return e;
  let i = false,
    a = e.map((l) => {
      let c = o && l.defer_loading,
        u = s && l.strict;
      if (!c && !u) return l;
      i = true;
      let d = {
        ...l,
      };
      if (c) delete d.defer_loading;
      if (u) delete d.strict;
      return d;
    });
  return i ? a : e;
}
var vfd,
  wfd,
  Cfd,
  tii,
  Ifd,
  aMt = "fail:foundry-purpose-request";
