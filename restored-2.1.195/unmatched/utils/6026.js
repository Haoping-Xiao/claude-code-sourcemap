// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Wc
// matched 2.1.88 source: src/utils/teleport.tsx
// class=new  jaccard=0.0155  score=0.0603  fileCov=0.0204
// note: nearest: src/utils/teleport.tsx (0.0155); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $Wc = E(() => {
  zb();
  pZo();
  fZo();
  rhr();
  J$m = ve(() => dt.object({
    p: dt.string(),
    s: dt.undefined()
  })), Q$m = ve(() => dt.object({
    p: dt.string(),
    s: dt.literal(true)
  }));
});
function hZo(e) {
  return e === uBe || e.startsWith(`${uBe}/`);
}
async function BWc(e, t, n, r, o, s, i = "min") {
  if (!hZo(t.pathname)) return null;
  let a = `req_${crypto.randomUUID().replace(/-/g, "")}`,
    l = await oOm({
      req: e,
      url: t,
      sql: n,
      keys: r,
      requestId: a,
      oidcAdmin: o,
      clientIp: s,
      groupLimitMode: i
    });
  return l.headers.set("request-id", a), gu("info", `admin ${e.method} ${t.pathname} -> ${l.status} (${a})`), l;
}
async function oOm({
  req: e,
  url: t,
  sql: n,
  keys: r,
  requestId: o,
  oidcAdmin: s,
  clientIp: i,
  groupLimitMode: a
}) {
  let l = t.pathname,
    c = e.method,
    u = e.headers.get("x-api-key"),
    d = sOm(u, r, s);
  if (!d) return oge("admin.denied", {
    reason: u ? "invalid_key" : e.headers.get("authorization") ? "bearer_rejected" : "no_credentials",
    method: c,
    path: l,
    client_ip: i ?? null
  }), bw(401, "missing or invalid admin credentials", o);
  let p = {
    req: e,
    url: t,
    sql: n,
    requestId: o,
    auth: d
  };
  if (l === `${uBe}/effective` && c === "GET") return PWc(p, a);
  if (l === `${uBe}/audit` && c === "GET") return iOm(p);
  if (l === uBe && c === "GET") return aOm(p);
  if (l === uBe && c === "POST") return lOm(p);
  if (l.startsWith(`${uBe}/`)) {
    let f;
    try {
      f = decodeURIComponent(l.slice(uBe.length + 1));
    } catch {
      return bw(400, "malformed spend limit id", o);
    }
    if (c === "GET") return cOm(p, f);
    if (c === "DELETE") return uOm(p, f);
    return bw(404, "not found", o);
  }
  return bw(404, "not found", o);
}
function sOm(e, t, n) {
  if (!e) return n ? {
    canWrite: true,
    actor: `oidc:${n.sub}`
  } : null;
  let r = OWc(e, t.writeKeys),
    o = OWc(e, t.readKeys);
  if (r !== void 0) return {
    canWrite: true,
    actor: `admin-key:${r}`
  };
  if (o !== void 0) return {
    canWrite: false,
    actor: `admin-key:${o}`
  };
  return null;
}
function OWc(e, t) {
  let n = Buffer.from(e),
    r;
  for (let o of t) {
    let s = Buffer.from(o.key);
    if (s.length === n.length && NWc.timingSafeEqual(n, s)) r = o.id;
  }
  return r;
}
async function iOm({
  url: e,
  sql: t,
  requestId: n
}) {
  let r = irn(e.searchParams, 100);
  if (r === null) return bw(400, "limit: must be between 1 and 1000", n);
  let o = e.searchParams.get("after_id");
  if (o !== null && !/^\d{1,18}$/.test(o)) return bw(400, "after_id: must be an audit event id", n);
  let s = await t`
    SELECT id, at, actor, action, target, before, after, reason
    FROM admin_audit
    WHERE (${o}::bigint IS NULL OR id < ${o}::bigint)
    ORDER BY id DESC LIMIT ${r + 1}
  `,
    i = s.length > r;
  return Response.json({
    data: s.slice(0, r).map(a => ({
      type: "audit_event",
      id: a.id,
      created_at: a.at.toISOString(),
      actor: a.actor,
      action: a.action,
      target_id: a.target,
      before: a.before ?? null,
      after: a.after ?? null,
      reason: a.reason ?? null
    })),
    has_more: i
  }, {
    headers: lXe
  });
}
async function aOm({
  url: e,
  sql: t,
  requestId: n
}) {
  let r = e.searchParams,
    o = irn(r, 20);
  if (o === null) return bw(400, "limit: must be between 1 and 1000", n);
  let s = r.get("scope_type");
  if (s !== null && s !== "organization" && s !== "rbac_group" && s !== "user") return bw(400, "scope_type: must be one of organization, rbac_group, user", n);
  let i = r.get("after_id"),
    a = r.get("before_id");
  if (i !== null && a !== null) return bw(400, "after_id and before_id are mutually exclusive", n);
  let l = i ?? a,
    c;
  if (l !== null) {
    if (c = (await t`SELECT created_at::text AS created_at, id FROM spend_limits WHERE id = ${l}`)[0], !c) return bw(400, `${i !== null ? "after_id" : "before_id"}: no spend limit with this id`, n);
  }
  let u = o + 1,
    d,
    p;
  if (a !== null && c) {
    let m = await t`
      SELECT * FROM spend_limits
      WHERE (created_at, id) < (${c.created_at}::timestamptz, ${c.id})
        AND (${s}::text IS NULL OR scope_type = ${s})
      ORDER BY created_at DESC, id DESC LIMIT ${u}
    `;
    d = m.length > o, p = m.slice(0, o).reverse().map(lwt);
  } else {
    let m = c?.created_at ?? null,
      g = await t`
      SELECT * FROM spend_limits
      WHERE (${m}::timestamptz IS NULL
             OR (created_at, id) > (${m}::timestamptz, ${c?.id ?? null}))
        AND (${s}::text IS NULL OR scope_type = ${s})
      ORDER BY created_at, id LIMIT ${u}
    `;
    d = g.length > o, p = g.slice(0, o).map(lwt);
  }
  let f = p.map(yZo);
  return Response.json({
    data: f,
    has_more: d,
    first_id: f[0]?.id ?? null,
    last_id: f.at(-1)?.id ?? null
  }, {
    headers: lXe
  });
}
async function lOm({
  req: e,
  sql: t,
  requestId: n,
  auth: r
}) {
  if (!r.canWrite) return bw(403, "requires write:spend_limits", n);
  let o = await fOm(e, n);
  if (o instanceof Response) return o;
  let {
      scope: s,
      amount: i,
      period: a
    } = o,
    l = mOm(s),
    c = `spend_limits:${s.type}:${l}:${a}`,
    u = {
      id: `spl_${crypto.randomUUID().replace(/-/g, "")}`,
      scope_type: s.type,
      scope_id: l,
      amount: i,
      period: a,
      created_by: r.actor
    },
    {
      before: d,
      after: p
    } = await t.begin(async f => {
      await f`SELECT pg_advisory_xact_lock(hashtext(${c}))`;
      let [m] = await f`
      SELECT * FROM spend_limits
      WHERE scope_type = ${s.type} AND scope_id = ${l} AND period = ${a}
    `,
        [g] = await f`
      INSERT INTO spend_limits ${f(u)}
      ON CONFLICT (scope_type, scope_id, period) DO UPDATE
        SET amount = ${i}, updated_at = now()
      RETURNING *
    `,
        h = lwt(g);
      return await mZo(f, {
        actor: r.actor,
        action: "spend_limit.upsert",
        target: h.id,
        before: m ? lwt(m) : null,
        after: h
      }), {
        before: m,
        after: h
      };
    });
  return oge("admin.limit.upsert", {
    actor: r.actor,
    target: p.id,
    scope_type: s.type,
    scope_id: l,
    period: a,
    ...(d !== void 0 && {
      before_amount: d.amount
    }),
    amount: i
  }), Response.json(yZo(p));
}
async function cOm({
  sql: e,
  requestId: t
}, n) {
  let o = (await e`
    SELECT id, scope_type, scope_id, amount, period, currency, created_at, updated_at FROM spend_limits WHERE id = ${n}
  `)[0];
  return o ? Response.json(yZo(lwt(o)), {
    headers: lXe
  }) : bw(404, "spend limit not found", t);
}
async function uOm({
  sql: e,
  requestId: t,
  auth: n
}, r) {
  if (!n.canWrite) return bw(403, "requires write:spend_limits", t);
  let o = await e.begin(async s => {
    let a = (await s`
      DELETE FROM spend_limits WHERE id = ${r} RETURNING id, scope_type, scope_id, amount, period, currency, created_at, updated_at
    `)[0];
    if (!a) return false;
    return await mZo(s, {
      actor: n.actor,
      action: "spend_limit.delete",
      target: r,
      before: lwt(a)
    }), a;
  });
  if (o) return oge("admin.limit.delete", {
    actor: n.actor,
    target: r,
    scope_type: o.scope_type,
    scope_id: o.scope_id,
    period: o.period
  }), Response.json({
    type: "spend_limit_deleted",
    id: r
  });
  return bw(404, "spend limit not found", t);
}
function pOm(e) {
  let t = e.issues[0];
  if (!t) return "invalid request body";
  let n = t.path.join(".");
  return n ? `${n}: ${t.message}` : t.message;
}
async function fOm(e, t) {
  let n;
  try {
    n = await e.json();
  } catch {
    return bw(400, "invalid JSON body", t);
  }
  let r = dOm().safeParse(n);
  return r.success ? r.data : bw(400, pOm(r.error), t);
}
function mOm(e) {
  switch (e.type) {
    case "user":
      return e.user_id;
    case "rbac_group":
      return e.rbac_group_id;
    case "organization":
      return "";
  }
}
function lwt(e) {
  return {
    id: e.id,
    scope: nhr(e.scope_type, e.scope_id),
    amount: e.amount,
    period: e.period,
    currency: e.currency,
    created_at: e.created_at.toISOString(),
    updated_at: e.updated_at.toISOString()
  };
}
function yZo(e) {
  return {
    type: "spend_limit",
    id: e.id,
    created_at: e.created_at,
    updated_at: e.updated_at,
    scope: e.scope,
    amount: e.amount,
    currency: e.currency,
    period: e.period
  };
}
var NWc,
  uBe = "/v1/organizations/spend_limits",
  dOm;