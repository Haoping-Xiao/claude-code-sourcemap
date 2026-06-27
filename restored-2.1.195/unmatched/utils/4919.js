// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module i2o
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0084  score=0.1297  fileCov=0.0089
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0084); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module i2o] deps: zb, Ye, Un, er, vM, mVe, AN, SEe
yql = R(lt(), 1), _ql = R(rt(), 1), QXt = R(se(), 1), O4f = ve(() => dt.array(dt.object({
  id: dt.string(),
  title: dt.string().optional(),
  text: dt.string(),
  priority: dt.number().default(0),
  maxImpressions: dt.number().default(3),
  requiresModel: dt.string().optional()
})).default([])), hql = [];
xde(N4f);
function t3f(e) {
  if (!at("tengu_cobalt_harbor_notice", true)) return false;
  if (!e.replBridgeAutoOnByDefault) return false;
  if (!xC()) return false;
  if (!d2o()) return false;
  if (ZXt() !== "allowed") return false;
  return (Dt().seenNotifications?.[EAt] ?? 0) < Cql;
}
function n3f() {
  gn(e => {
    let t = e.seenNotifications ?? {},
      n = t[EAt] ?? 0;
    if (n >= Cql) return e;
    return {
      ...e,
      seenNotifications: {
        ...t,
        [EAt]: n + 1
      }
    };
  });
}
function o3f(e) {
  let t = l2o.c(4),
    {
      ctx: n
    } = e;
  b6(EAt, n3f);
  let r;
  if (t[0] !== n.replBridgeSessionUrl) r = n.replBridgeSessionUrl ?? `${u4t()}/code`, t[0] = n.replBridgeSessionUrl, t[1] = r;else r = t[1];
  let o = r,
    s;
  if (t[2] !== o) s = $u.jsxs(GHe, {
    children: ["/remote-control is active \xB7 Continue here, on your phone, or at ", o]
  }), t[2] = o, t[3] = s;else s = t[3];
  return s;
}
function i3f() {
  let e = l2o.c(1);
  b6("powerup-discovery", a3f);
  let t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = $u.jsx(GHe, {
    children: yAt.banner
  }), e[0] = t;else t = e[0];
  return t;
}
function a3f() {
  return G("tengu_powerup_discovery_shown", {
    arm: $e("banner")
  });
}
function Iql(e) {
  return y3f.filter(t => t.isActive(e));
}
function Hql() {
  return ["DISABLE_PROMPT_CACHING", "DISABLE_PROMPT_CACHING_HAIKU", "DISABLE_PROMPT_CACHING_OPUS", "DISABLE_PROMPT_CACHING_SONNET", "DISABLE_PROMPT_CACHING_FABLE"].filter(e => ut(process.env[e]));
}
function _3f(e, t) {
  switch (e) {
    case "error":
    case "warning":
    case "info":
    case "announcement":
      return true;
  }
}
function b3f(e) {
  return e.priority ?? 0;
}
function vql(e) {
  if (e.tier === "announcement") {
    let n = b3f(e);
    if (n >= WHe.org) return [0, -n];
    if (n >= WHe.launch) return [1, -n];
    if (n >= WHe.campaign) return [2, -n];
    return [4, -n];
  }
  let t = Tql.indexOf(e.id);
  return [3, t === -1 ? Tql.length : t];
}
function Lor() {
  return Yot() || fr() !== "firstParty" || Vi();
}
function S3f() {
  Ror = null, a2o = null;
}
function xql(e, t, n) {
  let r = a2o ?? n,
    o = c2o(e, t, r);
  if (Ror === null) {
    if (o.slot !== null) Ror = o.slot, a2o = {
      suppressPromos: r.suppressPromos
    };
    return o;
  }
  let s = Ror;
  if (o.slot?.id === s.id) return o;
  let i = o.slot === null ? 0 : o.slotOverflowCount + 1,
    a = e.some(l => l.id === s.id);
  return {
    ...o,
    slot: s,
    slotOverflowCount: Math.max(0, i - (a ? 1 : 0))
  };
}
function c2o(e, t, {
  suppressPromos: n
}) {
  let r = e.filter(l => _3f(l.tier, t) && !(l.promo === true && n)),
    o = r.filter(l => l.antOnly !== true && l.tier !== "info" && l.tier !== "announcement"),
    s = r.filter(l => l.antOnly === true),
    i = r.filter(l => l.antOnly !== true && (l.tier === "info" || l.tier === "announcement")),
    a = i.find(l => l.claimsFirstShow?.() === true) ?? null;
  if (a === null) for (let l of i) {
    if (a === null) {
      a = l;
      continue;
    }
    let [c, u] = vql(l),
      [d, p] = vql(a);
    if (c < d || c === d && u < p) a = l;
  }
  return {
    warnings: o,
    slot: a,
    slotOverflowCount: a === null ? 0 : i.length - 1,
    ant: s
  };
}
var l2o,
  wql,
  $u,
  WHe,
  U4f,
  F4f,
  j4f,
  G4f,
  W4f,
  q4f,
  V4f,
  z4f,
  K4f,
  Y4f,
  X4f,
  J4f,
  Q4f,
  Z4f,
  e3f,
  EAt = "remote-control-auto-on",
  Cql = 3,
  r3f,
  s3f,
  l3f,
  c3f,
  u3f,
  d3f,
  p3f,
  f3f,
  m3f,
  g3f,
  h3f,
  y3f,
  Tql,
  Ror = null,
  a2o = null;