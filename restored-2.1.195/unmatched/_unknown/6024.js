// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fZo
// matched 2.1.88 source: src/services/api/claude.ts
// class=new  jaccard=0.0023  score=0.0435  fileCov=0.0024
// note: nearest: src/services/api/claude.ts (0.0023); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fZo]
arn = ["daily", "weekly", "monthly"];
function nhr(e, t) {
  if (e === "user") return {
    type: "user",
    user_id: t ?? ""
  };
  if (e === "rbac_group") return {
    type: "rbac_group",
    rbac_group_id: t ?? ""
  };
  return {
    type: "organization"
  };
}
async function kWc(e, t, n, r) {
  return (await e`
    WITH pb AS (${gZo(e)})
    SELECT pb.period, c.amount AS cap_cents, c.scope_type
    FROM pb
    JOIN caps_by_period(${t}, ${e.array([...n], "TEXT")}, ${r}) c
      ON c.period = pb.period
    LEFT JOIN spend s ON s.principal = ${t} AND s.period = pb.bucket
    WHERE c.amount IS NOT NULL AND coalesce(s.cents, 0) >= c.amount
    ORDER BY pb.ord LIMIT 1
  `)[0];
}
async function RWc(e, t, n) {
  let r = arn.map(s => lrn(s)),
    o = () => e.begin(async s => {
      await s`SET LOCAL statement_timeout = '2s'`, await s`
        INSERT INTO spend (principal, period, cents)
        SELECT DISTINCT ${t}, b, ${n}
        FROM unnest(${e.array(r, "TEXT")}) AS t(b)
        ORDER BY 2
        ON CONFLICT (principal, period) DO UPDATE
          SET cents = spend.cents + EXCLUDED.cents, updated_at = now()
      `;
    });
  try {
    await o();
  } catch (s) {
    let i = s ?? {};
    if (i.errno === "57014" || i.code === "57014") {
      await o();
      return;
    }
    throw s;
  }
}
async function LWc(e, t) {
  if (!t.email && !t.name && !t.groups) return;
  let n = t.email || null,
    r = t.name || null,
    o = t.groups ?? null;
  await e.begin(async s => {
    await s`SET LOCAL statement_timeout = '2s'`, await s`
      INSERT INTO principal_emails ${e({
      principal: t.sub,
      email: n,
      name: r,
      groups: o
    })}
      ON CONFLICT (principal) DO UPDATE SET
        email = coalesce(${n}, principal_emails.email),
        name = coalesce(${r}, principal_emails.name),
        groups = coalesce(${o}, principal_emails.groups),
        updated_at = now()
    `;
  });
}
async function mZo(e, t) {
  await e`INSERT INTO admin_audit ${e({
    actor: t.actor,
    action: t.action,
    target: t.target,
    before: t.before ?? null,
    after: t.after ?? null,
    reason: t.reason ?? null
  })}`;
}
function gZo(e, t = arn) {
  let n = t.map(r => lrn(r));
  return e`
    SELECT period, bucket, ordinality AS ord
    FROM unnest(${e.array([...t], "TEXT")}, ${e.array(n, "TEXT")})
      WITH ORDINALITY AS t(period, bucket)
  `;
}