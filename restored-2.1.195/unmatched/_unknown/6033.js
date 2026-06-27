// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o5c
// matched 2.1.88 source: node_modules/undici/lib/web/fetch/util.js
// class=new  jaccard=0.0148  score=0.0756  fileCov=0.0181
// note: nearest: node_modules/undici/lib/web/fetch/util.js (0.0148); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function a5c(e, t) {
  if (typeof Bun === "undefined") throw Error("claude gateway requires the native binary");
  let n = new Bun.SQL(e, {
    connectionTimeout: 5,
    max: t?.maxConnections ?? 5,
    ...(t?.username !== void 0 && {
      username: t.username
    }),
    ...(t?.password !== void 0 && {
      password: t.password
    }),
    onclose: i => {
      if (i) gu("warn", `postgres connection closed: ${i.message}`);
    }
  });
  await r5c(n), n`SHOW server_version_num`.then(i => {
    let a = Number(i[0]?.server_version_num);
    if (Number.isFinite(a) && a < 140000) gu("warn", `Postgres ${Math.floor(a / 10000 /* 1e4 */)} is below the supported floor (14) \u2014 upgrade; PostgreSQL ${Math.floor(a / 10000 /* 1e4 */)} is past upstream end-of-life`);
  }).catch(() => {});
  let r = setInterval(OOm, LOm, n);
  r.unref?.();
  let o = {
    auditRetentionDays: t?.auditRetentionDays,
    spendRetentionMonths: t?.spendRetentionMonths,
    identityRetentionDays: t?.identityRetentionDays
  };
  s5c(n, o);
  let s = setInterval(s5c, DOm, n, o);
  return s.unref?.(), {
    sql: n,
    async set(i, a, l) {
      await n`
        INSERT INTO kv (key, value, expires_at)
        VALUES (${i}, ${a}, now() + make_interval(secs => ${l}))
        ON CONFLICT (key) DO UPDATE
        SET value = ${a}, expires_at = now() + make_interval(secs => ${l})
      `;
    },
    async get(i) {
      let a = await n`
        SELECT value FROM kv
        WHERE key = ${i} AND (expires_at IS NULL OR expires_at > now())
      `;
      return a.length > 0 ? a[0].value : null;
    },
    async del(i) {
      await n`DELETE FROM kv WHERE key = ${i}`;
    },
    async incr(i, a) {
      let l = await n`
        INSERT INTO kv (key, value, expires_at)
        VALUES (${i}, '1', now() + make_interval(secs => ${a}))
        ON CONFLICT (key) DO UPDATE SET
          value = CASE
            WHEN kv.expires_at IS NOT NULL AND kv.expires_at <= now() THEN '1'
            ELSE (kv.value::bigint + 1)::text
          END,
          expires_at = CASE
            WHEN kv.expires_at IS NOT NULL AND kv.expires_at <= now()
              THEN now() + make_interval(secs => ${a})
            ELSE kv.expires_at
          END
        RETURNING value
      `;
      return Number(l[0].value);
    },
    close() {
      clearInterval(r), clearInterval(s), n.close().catch(() => {});
    }
  };
}
function OOm(e) {
  e`DELETE FROM kv WHERE expires_at IS NOT NULL AND expires_at <= now()`.catch(t => gu("warn", `kv cleanup failed: ${be(t)}`));
}
function s5c(e, t) {
  let n = t?.auditRetentionDays ?? $Om;
  e`DELETE FROM admin_audit WHERE at < now() - make_interval(days => ${n})`.catch(s => TZo("admin_audit", s));
  let r = t?.spendRetentionMonths ?? POm;
  e`DELETE FROM spend WHERE updated_at < now() - make_interval(months => ${r})`.catch(s => TZo("spend", s));
  let o = t?.identityRetentionDays ?? MOm;
  e`DELETE FROM principal_emails WHERE updated_at < now() - make_interval(days => ${o})`.catch(s => TZo("principal_emails", s));
}
function TZo(e, t) {
  if (NOm(t) === "42501") {
    if (!i5c.has(e)) i5c.add(e), gu("warn", `${e} retention sweep failed: the database role lacks DELETE on ${e} \u2014 grant it (see the docs' restricted-role grant list) or rows will outlive their retention window. Warning once.`);
    return;
  }
  gu("warn", `${e} cleanup failed: ${be(t)}`);
}
function NOm(e) {
  if (typeof e === "object" && e !== null) {
    if ("errno" in e && typeof e.errno === "string") return e.errno;
    if ("code" in e && typeof e.code === "string") return e.code;
  }
  return;
}
var LOm = 30000,
  DOm = 3600000,
  POm = 13,
  MOm = 90,
  $Om = 365,
  i5c;