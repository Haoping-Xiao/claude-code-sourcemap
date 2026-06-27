// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yle
// matched 2.1.88 source: src/services/mcp/utils.ts
// class=new  jaccard=0.0256  score=0.1373  fileCov=0.0305
// note: nearest: src/services/mcp/utils.ts (0.0256); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Yle = E(() => {
  Ls();
  R9();
  Jt();
  Z4e();
  Fwi = require("crypto");
  IRd = ["/v1/design/"];
});
function kRd() {
  return Gwi;
}
function Wwi(e) {
  return e.type === "http" && RRd.has(e.url);
}
function qwi(e) {
  let t = L8r;
  return L8r = e, t;
}
function D8r() {
  let e = Oe.CLAUDE_CODE_ENABLE_DESIGN_MCP;
  if (e !== void 0) return e;
  return L8r?.(LRd, !1) ?? !1;
}
function SIn() {
  if (!Jl()) return {};
  let e = {};
  if (D8r()) e[ost] = {
    type: "http",
    url: kRd(),
    scope: "dynamic"
  };
  for (let t of Object.values(e)) if ("url" in t && !X9(t.url)) throw Error("A built-in first-party MCP server URL is not on the first-party allowlist (FIRST_PARTY_MCP_PATH_PREFIXES / isFirstPartyAnthropicHost) \u2014 login-OAT auto-attach and bare-name rendering would not fire. Update firstPartyBuiltins.ts or authState.ts so they agree.");
  return e;
}
var ost = "claude_design",
  Gwi = "https://api.anthropic.com/v1/design/mcp",
  xRd = "https://api-staging.anthropic.com/v1/design/mcp",
  RRd,
  LRd = "tengu_omelette_whisk",
  L8r = null;