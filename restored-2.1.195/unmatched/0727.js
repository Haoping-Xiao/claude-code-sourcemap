// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bCe
// matched 2.1.88 source: src/utils/plugins/schemas.ts
// class=new  jaccard=0.0372  score=0.3554  fileCov=0.0399
// note: nearest: src/utils/plugins/schemas.ts (0.0372); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bCe = E(() => {
  Xr();
  WRr = ve(() => H.enum(["local", "user", "project", "dynamic", "enterprise", "claudeai", "managed", "agent"])), Hmg = ve(() => H.enum(["stdio", "sse", "sse-ide", "http", "ws", "sdk"])), Let = ve(() => H.literal("comms").optional().catch(void 0)), _Ce = ve(() => H.number().int().positive()), YRt = ve(() => H.object({
    type: H.literal("stdio").optional(),
    command: H.string().min(1, "Command cannot be empty"),
    args: H.array(H.string()).default([]),
    env: H.record(H.string(), H.string()).optional(),
    timeout: _Ce().optional(),
    alwaysLoad: H.boolean().optional(),
    role: Let()
  })), AOu = ve(() => H.boolean()), cws = ve(() => H.object({
    clientId: H.string().optional(),
    callbackPort: H.number().int().positive().optional(),
    authServerMetadataUrl: H.string().url().startsWith("https://", {
      message: "authServerMetadataUrl must use https://"
    }).optional(),
    scopes: H.string().min(1).optional(),
    xaa: AOu().optional()
  })), uws = ve(() => H.object({
    name: H.string(),
    permission_policy: H.enum(["always_allow", "always_ask", "always_deny"]).optional()
  })), qRr = ve(() => H.object({
    type: H.literal("sse"),
    url: H.string(),
    headers: H.record(H.string(), H.string()).optional(),
    headersHelper: H.string().optional(),
    oauth: cws().optional(),
    timeout: _Ce().optional(),
    tools: H.array(uws()).optional(),
    alwaysLoad: H.boolean().optional(),
    role: Let(),
    toolPermissions: H.record(H.string(), XRt()).optional()
  })), HOu = ve(() => H.object({
    type: H.literal("sse-ide"),
    url: H.string(),
    ideName: H.string(),
    ideRunningInWindows: H.boolean().optional(),
    timeout: _Ce().optional(),
    alwaysLoad: H.boolean().optional(),
    role: Let()
  })), TOu = ve(() => H.object({
    type: H.literal("ws-ide"),
    url: H.string(),
    ideName: H.string(),
    authToken: H.string().optional(),
    ideRunningInWindows: H.boolean().optional(),
    timeout: _Ce().optional(),
    alwaysLoad: H.boolean().optional(),
    role: Let()
  })), Kfn = ve(() => H.object({
    type: H.enum(["http", "streamable-http"]).transform(() => "http"),
    url: H.string(),
    headers: H.record(H.string(), H.string()).optional(),
    headersHelper: H.string().optional(),
    oauth: cws().optional(),
    timeout: _Ce().optional(),
    tools: H.array(uws()).optional(),
    alwaysLoad: H.boolean().optional(),
    role: Let(),
    toolPermissions: H.record(H.string(), XRt()).optional()
  })), VRr = ve(() => H.object({
    type: H.literal("ws"),
    url: H.string(),
    headers: H.record(H.string(), H.string()).optional(),
    headersHelper: H.string().optional(),
    timeout: _Ce().optional(),
    alwaysLoad: H.boolean().optional(),
    role: Let()
  })), zRr = ve(() => H.object({
    type: H.literal("sdk"),
    name: H.string(),
    timeout: _Ce().optional(),
    alwaysLoad: H.boolean().optional()
  })), XRt = ve(() => H.enum(["allow", "ask", "blocked"])), KRr = ve(() => H.object({
    type: H.literal("claudeai-proxy"),
    url: H.string(),
    id: H.string(),
    displayName: H.string().optional(),
    iconUrl: H.string().optional(),
    timeout: _Ce().optional(),
    alwaysLoad: H.boolean().optional(),
    toolPermissions: H.record(H.string(), XRt()).optional(),
    stateless: H.boolean().optional(),
    cachedInitResponse: H.record(H.string(), H.unknown()).nullish()
  })), Nae = ve(() => H.union([YRt(), qRr(), HOu(), TOu(), Kfn(), VRr(), zRr(), KRr()])), Tmg = ve(() => H.object({
    mcpServers: H.record(H.string(), Nae())
  }));
});
function khe(e, t, n) {
  if (n !== void 0) return n;
  let r = e.toLowerCase();
  return t.autoUpdate ?? (SCe.has(r) && !vOu.has(r));
}
function IOu(e) {
  if (QRr.has(e.toLowerCase())) return !1;
  if (COu.test(e)) return !0;
  return wOu.test(e);
}
function kOu(e) {
  let t = e.trim();
  if (ERt(t)) return !1;
  let n = /^git@([^:]+):anthropics\/(.+)$/i.exec(t);
  if (n) {
    if (!$m(n[1] ?? "")) return !1;
    return !(n[2] ?? "").split("/").includes("..");
  }
  try {
    let r = new URL(t);
    if (!xOu.has(r.protocol.toLowerCase())) return !1;
    if (r.pathname.split("/").includes("..")) return !1;
    return $m(r.hostname) && r.pathname.toLowerCase().startsWith("/anthropics/");
  } catch {
    return !1;
  }
}
function ZRr(e, t) {
  let n = e.toLowerCase();
  if (!QRr.has(n)) return null;
  if (t.source === "github") {
    let r = t.repo || "";
    if (!r.toLowerCase().startsWith(`${Yfn}/`) || r.split("/").includes("..")) return `The name '${e}' is reserved for official Anthropic marketplaces. Only repositories from 'github.com/${Yfn}/' can use this name.`;
    return null;
  }
  if (t.source === "git" && t.url) {
    if (kOu(t.url)) return null;
    return `The name '${e}' is reserved for official Anthropic marketplaces. Only repositories from 'github.com/${Yfn}/' can use this name.`;
  }
  return `The name '${e}' is reserved for official Anthropic marketplaces and can only be used with GitHub sources from the '${Yfn}' organization.`;
}
function eLt(e) {
  return typeof e === "string" && e.startsWith("./");
}
function s9(e) {
  return e.source === "file" || e.source === "directory";
}
function XOu(e) {
  let t = Zfn();
  return e.flatMap((n, r) => {
    let o = t.safeParse(n);
    if (o.success) return [o.data];
    let s = YOu().safeParse(n).data?.name,
      i = o.error.issues.map(a => `${a.path.join(".")}: ${a.message}`).join(", ");
    if (s) return T(`Stubbing unparseable marketplace plugin entry (${s}): ${i}`, {
      level: "warn"
    }), [{
      name: s,
      source: {
        source: "unsupported"
      },
      strict: !0
    }];
    return T(`Dropping unparseable marketplace plugin entry (index ${r}): ${i}`, {
      level: "warn"
    }), [];
  });
}
var JRt,
  SCe,
  QRr,
  vOu,
  wOu,
  COu,
  Yfn = "anthropics",
  xOu,
  o9,
  r2e,
  dws,
  XRr,
  JRr,
  fws,
  QRt,
  ROu,
  Xfn,
  LOu,
  DOu,
  POu,
  MOu,
  $Ou,
  mws,
  gws,
  OOu,
  pws,
  NOu,
  BOu,
  hws,
  UOu,
  FOu,
  Det,
  jOu,
  eLr,
  yws,
  GOu,
  _ws,
  WOu,
  qOu,
  VOu,
  zOu,
  o2e,
  ZRt,
  YRr,
  bws,
  KOu,
  Jfn,
  Qfn,
  Zfn,
  YOu,
  bY,
  s2e,
  JOu,
  QOu,
  ZOu,
  tLt,
  e1u,
  t1u,
  nLt,
  Dmg,
  n1u,
  Pet;