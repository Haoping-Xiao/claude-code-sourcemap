// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hos
// matched 2.1.88 source: src/services/api/bootstrap.ts
// class=partial  jaccard=0.0603  score=0.1303  fileCov=0.1009
// note: low-confidence suggestion: src/services/api/bootstrap.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hos = E(() => {
  uee();
});
function yos(e) {
  return async t => {
    let n = await import("fs");
    await zsn(e.credentialsPath, e.onSafetyWarning);
    let r;
    try {
      r = await n.promises.readFile(e.credentialsPath, "utf-8");
    } catch (h) {
      throw new nf(`Credentials file not found at ${e.credentialsPath}: ${h}`);
    }
    let o;
    try {
      o = JSON.parse(r);
    } catch (h) {
      throw new nf(`Credentials file at ${e.credentialsPath} is not valid JSON: ${h}`);
    }
    let s = o.access_token;
    if (!s) throw new nf(`Credentials file at ${e.credentialsPath} must include 'access_token'`);
    let i = o.expires_at;
    if (!t?.forceRefresh && (i == null || dee() < i - owe)) return {
      token: s,
      expiresAt: i ?? null
    };
    let a = o.refresh_token;
    if (!e.clientId || !a) throw new nf(`Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId ? "set" : "empty"}, refresh_token ${a ? "set" : "empty"})`);
    qsn(e.baseURL);
    let l = {
        grant_type: tos,
        refresh_token: a,
        client_id: e.clientId
      },
      c = `${e.baseURL}${Gsn}`,
      u;
    try {
      u = await e.fetch(c, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-beta": Nge,
          "User-Agent": e.userAgent || `anthropic-sdk-typescript/${PK} userOAuthProvider`
        },
        body: JSON.stringify(l)
      });
    } catch (h) {
      throw new nf(`User OAuth refresh failed to reach token endpoint: ${h}`);
    }
    let d = u.headers.get("Request-Id");
    if (!u.ok) {
      let h = await u.text().catch(() => "");
      throw new nf(`User OAuth refresh failed (HTTP ${u.status}): ${tG(h)}`, u.status, tG(h), d);
    }
    let p = await Vsn(u, d),
      f = Number(p.expires_in);
    if (!Number.isFinite(f)) throw new nf(`User OAuth refresh response missing or invalid expires_in: ${JSON.stringify(tG(p))}`, u.status, tG(p), d);
    let m = dee() + f,
      g = p.refresh_token || a;
    return await TJe(e.credentialsPath, {
      ...o,
      version: Jsn,
      type: "oauth_token",
      access_token: p.access_token,
      expires_at: m,
      refresh_token: g
    }), {
      token: p.access_token,
      expiresAt: m
    };
  };
}