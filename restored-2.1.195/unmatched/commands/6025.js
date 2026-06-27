// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rhr
// matched 2.1.88 source: src/bridge/workSecret.ts
// class=new  jaccard=0.0174  score=0.0255  fileCov=0.0517
// note: nearest: src/bridge/workSecret.ts (0.0174); dir inferred from dep-graph -> commands; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rhr = E(() => {
  fZo();
});
async function PWc({
  url: e,
  sql: t,
  requestId: n
}, r) {
  let o = e.searchParams,
    s = irn(o, 20);
  if (s === null) return bw(400, "limit: must be between 1 and 1000", n);
  let i = X$m(o);
  if (i === null) return bw(400, "period[]: must be one of daily, weekly, monthly", n);
  let a = o.getAll("user_ids[]");
  if (a.length > 100) return bw(400, "user_ids[]: at most 100 entries per request", n);
  let l = o.get("q");
  if (l !== null && l.length > 256) return bw(400, "q: too long", n);
  let c = o.get("sort");
  if (c !== null && c !== "spend_desc") return bw(400, "sort: must be spend_desc", n);
  let u = c === "spend_desc";
  if (u && i.length !== 1) return bw(400, "sort=spend_desc requires exactly one period[]", n);
  if (a.length > 0) {
    let h = await DWc(t, a, i, r);
    return Response.json({
      data: h,
      next_page: null
    }, {
      headers: lXe
    });
  }
  let d = o.get("page"),
    p;
  if (d !== null) {
    if (p = Z$m(d, u), p === void 0) return bw(400, "page: invalid page token", n);
  }
  let f = l === null ? null : `%${nOm(l)}%`,
    m = u ? await eOm(t, lrn(i[0]), p, f, s) : await tOm(t, p, f, s),
    g = await DWc(t, m.subs, i, r);
  return Response.json({
    data: g,
    next_page: m.nextToken
  }, {
    headers: lXe
  });
}
function X$m(e) {
  let t = e.getAll("period[]");
  if (t.length === 0) return arn;
  let n = [];
  for (let r of t) {
    if (r !== "daily" && r !== "weekly" && r !== "monthly") return null;
    if (!n.includes(r)) n.push(r);
  }
  return n;
}
function MWc(e) {
  return Buffer.from(JSON.stringify(e)).toString("base64url");
}
function Z$m(e, t) {
  let n = t ? Q$m() : J$m();
  try {
    return n.parse(JSON.parse(Buffer.from(e, "base64url").toString()));
  } catch {
    return;
  }
}
async function eOm(e, t, n, r, o) {
  let s = n?.p ?? null,
    i = await e`
    SELECT s.principal, s.cents FROM spend s
    LEFT JOIN principal_emails e ON e.principal = s.principal
    WHERE s.period = ${t}
      AND (${s}::text IS NULL OR s.principal > ${s})
      AND (${r}::text IS NULL OR s.principal ILIKE ${r}
           OR e.email ILIKE ${r} OR e.name ILIKE ${r})
    ORDER BY s.principal LIMIT ${o + 1}
  `,
    a = i.length > o,
    l = i.slice(0, o),
    c = l.at(-1);
  return l.sort((u, d) => d.cents - u.cents || (u.principal < d.principal ? -1 : 1)), {
    subs: l.map(u => u.principal),
    nextToken: a && c !== void 0 ? MWc({
      p: c.principal,
      s: !0
    }) : null
  };
}
async function tOm(e, t, n, r) {
  let o = t?.p ?? null,
    s = await e`
    SELECT s.principal FROM spend s
    LEFT JOIN principal_emails e ON e.principal = s.principal
    WHERE (${o}::text IS NULL OR s.principal > ${o})
      AND (${n}::text IS NULL OR s.principal ILIKE ${n}
           OR e.email ILIKE ${n} OR e.name ILIKE ${n})
    GROUP BY s.principal ORDER BY s.principal LIMIT ${r + 1}
  `,
    i = s.map(c => c.principal).slice(0, r),
    a = s.length > r,
    l = i.at(-1);
  return {
    subs: i,
    nextToken: a && l !== void 0 ? MWc({
      p: l
    }) : null
  };
}
function nOm(e) {
  return e.replace(/[\\%_]/g, t => `\\${t}`);
}
async function DWc(e, t, n, r) {
  if (t.length === 0) return [];
  return (await e`
    WITH p AS (
      SELECT principal, ordinality AS ord
      FROM unnest(${e.array(t, "TEXT")}) WITH ORDINALITY AS t(principal)
    ),
    per AS (${gZo(e, n)})
    SELECT p.principal, per.period, cap.amount, cap.scope_type,
           cap.scope_id, cap.id AS spend_limit_id,
           coalesce(s.cents, 0) AS cents,
           e.email, e.name, e.groups
    FROM p
    CROSS JOIN per
    LEFT JOIN principal_emails e ON e.principal = p.principal
    LEFT JOIN LATERAL caps_by_period(
      p.principal,
      ARRAY(SELECT jsonb_array_elements_text(coalesce(e.groups, '[]'::jsonb))),
      ${r}
    ) cap ON cap.period = per.period
    LEFT JOIN spend s ON s.principal = p.principal AND s.period = per.bucket
    ORDER BY p.ord, per.ord
  `).map(s => rOm(s));
}
function rOm(e) {
  let t = e.scope_type === null ? null : nhr(e.scope_type, e.scope_id);
  return {
    scope: {
      type: "user",
      user_id: e.principal
    },
    groups: e.groups ?? [],
    actor: {
      type: "user_actor",
      user_id: e.principal,
      name: e.name ?? null,
      email_address: e.email ?? null,
      deleted: !1
    },
    amount: e.amount,
    currency: "USD",
    period: e.period,
    source: t,
    spend_limit_id: e.spend_limit_id,
    period_to_date_spend: e.cents.toFixed(3).replace(/\.?0+$/, "")
  };
}
var J$m, Q$m;