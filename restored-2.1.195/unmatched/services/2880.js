// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GNn
// matched 2.1.88 source: src/services/mcp/client.ts
// class=new  jaccard=0.0143  score=0.3718  fileCov=0.0146
// note: nearest: src/services/mcp/client.ts (0.0143); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var GNn = E(() => {
  Xr();
  But = Dy({
    kind: "mcp_url_elicitation",
    payload: ve(() => H.custom(e => typeof e === "object" && e !== null && "serverName" in e && "params" in e)),
    result: ve(() => H.custom(e => typeof e === "object" && e !== null)),
    default: {
      action: "cancel"
    }
  });
});
function Oua(e) {
  _lo = e;
}
function Nua(e) {
  blo = e;
}
function Bua() {
  if (!_lo || !blo) throw Error("MCP skill builders not registered \u2014 loadSkillsDir.ts / client.ts have not been evaluated yet");
  return {
    ..._lo,
    ...blo
  };
}
var _lo = null,
  blo = null;
function Slo(e, t) {
  let n = e.filter(o => o.name === t);
  if (n.length > 0) return n;
  let r = hc(t);
  return e.filter(o => hc(o.name) === r);
}
function WNn(e, t) {
  let [n] = Slo(e, t);
  if (!n) throw new mi(`Server "${t}" not found. Available servers: ${e.map(r => r.name).join(", ")}`, "MCP server not found");
  if (n.type !== "connected") throw new mi(`Server "${n.name}" is not connected`, "MCP server not connected");
  if (!n.capabilities?.resources) throw new mi(`Server "${n.name}" does not support resources`, "MCP server has no resources capability");
  return n;
}