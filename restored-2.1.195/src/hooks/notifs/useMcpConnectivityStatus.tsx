// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eXn
// matched 2.1.88 source: src/hooks/notifs/useMcpConnectivityStatus.tsx
// class=modified  jaccard=0.0271  score=0.0729  fileCov=0.0414
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function C$e(e = null, t) {
  if (e) t?.(e);
  return {
    current: e,
    onLatch: t,
  };
}
function Rmf() {
  return at(Wyl, false) && iKr(kmf);
}
function qyl(e, t) {
  if (t.length === 0) return;
  let n = [...(e.exemptServers ?? nRo)];
  for (let r of t) {
    let o = hc(r);
    if (!n.includes(o)) n.push(o);
  }
  e.exemptServers = n;
}
function useMcpConnectivityStatus(e, t, n) {
  if (e === GW || e === Sb) return "web";
  if (e === ide || e === aJ || e === Kue) return "connectors";
  if (t) {
    let r = n.includes(hc(t));
    if (Dmf.test(hc(t))) return "web";
    let o = eI(e)?.toolName ?? e;
    if (r && Lmf.has(o)) return "web";
    if (!r) return "connectors";
  }
  return null;
}
function zyl(e, t = nRo) {
  return useMcpConnectivityStatus(e.name, iDe(e), t);
}
function Azt(e, t, n = nRo) {
  if (!at(Wyl, false)) return null;
  let r = new Map(t.map((o) => [o.name, o]));
  for (let o of e) {
    if (o.type !== "assistant") continue;
    let s = o.message.content;
    if (!Array.isArray(s)) continue;
    for (let i of s) {
      if (i.type !== "tool_use") continue;
      let a = r.get(i.name),
        l = a
          ? zyl(a, n)
          : useMcpConnectivityStatus(
              i.name,
              i.name.startsWith("mcp__") ? i.name.split("__")[1] : void 0,
              n,
            );
      if (l !== null) return l;
    }
  }
  return null;
}
function Pmf(e) {
  return e === "web"
    ? "Connectors are unavailable in this session under your organization's web search / connector isolation policy. Start a new session to use connectors."
    : "Web search, web fetch, and browser tools are unavailable in this session under your organization's web search / connector isolation policy. Do not attempt to reach any external URL via another tool (curl, bash, the browser, or otherwise) \u2014 this policy blocks all outbound web access while connector data is in context. Start a new session to use web tools.";
}
function Hzt(e, t) {
  let n = t.isolationLatch;
  if (!n || !Rmf()) return Gyl;
  let r = zyl(e, n.exemptServers);
  if (!r) return Gyl;
  let o = n.current;
  if (o && o !== r)
    return {
      denyMessage: Pmf(o),
      classifiedAs: r,
      activeLatch: o,
    };
  if (!o) ((n.current = r), n.onLatch?.(r));
  return {
    denyMessage: null,
    classifiedAs: r,
    activeLatch: r,
  };
}
var kmf = "enforce_web_search_mcp_isolation",
  Wyl = "tengu_doorbell_agave",
  nRo,
  Lmf,
  Dmf,
  Gyl;
