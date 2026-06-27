// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H0
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/server/auth/errors.js
// class=partial  jaccard=0.0827  score=0.1317  fileCov=0.1819
// note: low-confidence suggestion: node_modules/@modelcontextprotocol/sdk/dist/esm/server/auth/errors.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var H0 = E(() => {
  Hp();
  dn();
  kt();
  Rc();
  oo();
  er();
  je();
  At();
  W2e();
  wld = new Set(["invalid_client", "invalid_scope", "unauthorized_client"]);
  Cld = ["Refresh token expired", "Refresh token not found or invalid", "No organization associated with this token", "No account associated with this token"];
});
function WSn() {
  _9.cache.clear?.(), V2e.cache.clear?.(), xld.cache.clear?.();
}
function qSn() {
  return _9() !== null;
}
function VSn() {
  let e = _9();
  if (e === "env-quad") {
    let t = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
    return `env-quad \xB7 org ${HUr(process.env.ANTHROPIC_ORGANIZATION_ID ?? "")} \xB7 rule ${HUr(process.env.ANTHROPIC_FEDERATION_RULE_ID ?? "")}${t ? ` \xB7 ws ${t.startsWith("wrkspc_") ? HUr(t) : t}` : ""}`;
  }
  if (e === "profile-explicit" || e === "profile-implicit") {
    let t = KSn(),
      n = t === null ? "default" : e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : zSn(t);
    return `credentials-file \xB7 ${V2e() ?? "unknown"} \xB7 profile ${n}`;
  }
  return "inactive";
}
function HUr(e) {
  return e.length <= 6 ? e : `\u2026${e.slice(-6)}`;
}
function zSn(e) {
  return oPt(q2e.join(e, "active_config"))?.trim() || "default";
}
function TUr(e, t) {
  let n = oPt(q2e.join(e, "configs", `${t}.json`));
  if (n === null) return null;
  let r;
  try {
    r = JSON.parse(n);
  } catch {
    return null;
  }
  let o = r?.authentication?.type ?? null;
  if (o === "user_oauth") {
    if (oPt(P7s(e, t, r)) === null) return null;
  }
  return o;
}
function P7s(e, t, n) {
  if (n === void 0) {
    let r = oPt(q2e.join(e, "configs", `${t}.json`));
    if (r !== null) try {
      n = JSON.parse(r);
    } catch {}
  }
  return n?.authentication?.credentials_path ?? q2e.join(e, "credentials", `${t}.json`);
}
function KSn() {
  let e = process.env.ANTHROPIC_CONFIG_DIR?.trim();
  if (e) return e;
  let t = process.env.XDG_CONFIG_HOME?.trim();
  if (t) return q2e.join(t, "anthropic");
  let n = process.env.HOME?.trim();
  return n ? q2e.join(n, ".config", "anthropic") : null;
}
function oPt(e) {
  try {
    return D7s.readFileSync(e, "utf-8");
  } catch (t) {
    if (Vo(t)) return null;
    throw t;
  }
}
var D7s, q2e, Ild, _9, V2e, xld;