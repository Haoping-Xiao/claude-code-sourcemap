// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BZ
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/oauth2client.js
// class=new  jaccard=0.0331  score=0.1428  fileCov=0.0413
// note: nearest: node_modules/google-auth-library/build/src/auth/oauth2client.js (0.0331); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BZ = E(() => {
  wr();
  Vgr = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };
});
async function XGc(e) {
  let t = await YGc.readFile(e.service_account_json_path, "utf8"),
    n = Ft(t);
  if (typeof n.client_email !== "string" || typeof n.private_key !== "string") throw Error(`oidc.google_groups: ${e.service_account_json_path} is not a Google service-account key (missing client_email or private_key)`);
  let r = await IQo(n.private_key, "RS256"),
    o;
  async function s() {
    let i = Math.floor(Date.now() / 1000);
    if (o && o.exp - 60 > i) return o.token;
    let a = await new owt({
        scope: h$m
      }).setProtectedHeader({
        alg: "RS256",
        typ: "JWT"
      }).setIssuer(n.client_email).setSubject(e.admin_email).setAudience(KGc).setIssuedAt(i).setExpirationTime(i + 3600).sign(r),
      l = await fetch(KGc, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
          assertion: a
        }),
        signal: AbortSignal.timeout(1e4)
      });
    if (!l.ok) throw Error(`google token endpoint ${l.status}: ${(await l.text()).slice(0, 500)}`);
    let c = await l.json();
    if (typeof c.access_token !== "string") throw Error("google token endpoint returned no access_token");
    return o = {
      token: c.access_token,
      exp: i + (c.expires_in ?? 3600)
    }, c.access_token;
  }
  return async function (a) {
    try {
      let l = await s(),
        c = [],
        u;
      for (let d = 0; d < 50; d++) {
        let p = new URL(g$m);
        if (p.searchParams.set("userKey", a), p.searchParams.set("maxResults", "200"), u) p.searchParams.set("pageToken", u);
        let f = await fetch(p, {
          headers: {
            authorization: `Bearer ${l}`
          },
          signal: AbortSignal.timeout(1e4)
        });
        if (!f.ok) {
          if (f.status === 401) o = void 0;
          throw Error(`directory API ${f.status}: ${(await f.text()).slice(0, 500)}`);
        }
        let m = await f.json();
        for (let g of m.groups ?? []) if (typeof g.email === "string") c.push(g.email.toLowerCase());
        if (u = m.nextPageToken, !u) break;
      }
      return c;
    } catch (l) {
      let c = l instanceof Error ? l.message : String(l);
      throw gu("warn", `google_groups lookup failed: ${c}`), Object.assign(Error(`google_groups lookup failed: ${c}`), {
        code: "GOOGLE_GROUPS_UNAVAILABLE"
      });
    }
  };
}
var YGc,
  KGc = "https://oauth2.googleapis.com/token",
  g$m = "https://admin.googleapis.com/admin/directory/v1/groups",
  h$m = "https://www.googleapis.com/auth/admin.directory.group.readonly";