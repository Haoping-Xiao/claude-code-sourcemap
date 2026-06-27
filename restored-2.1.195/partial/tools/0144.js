// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mos
// matched 2.1.88 source: src/services/api/bootstrap.ts
// class=partial  jaccard=0.0679  score=0.1716  fileCov=0.1009
// note: low-confidence suggestion: src/services/api/bootstrap.ts; dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mos = E(() => {
  p0();
});
function gos(e) {
  return async () => {
    qsn(e.baseURL);
    let t = await e.identityTokenProvider();
    if (t.length > 16384) throw new nf(`Identity token is ${Math.ceil(t.length / 1024)} KiB, exceeds the 16 KiB assertion limit`);
    let n = {
      grant_type: eos,
      assertion: t,
      federation_rule_id: e.federationRuleId,
      organization_id: e.organizationId
    };
    if (e.serviceAccountId) n.service_account_id = e.serviceAccountId;
    if (e.workspaceId) n.workspace_id = e.workspaceId;
    let r = `${e.baseURL}${Gsn}`,
      o;
    try {
      o = await e.fetch(r, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-beta": `${Nge},${Wsn}`,
          "User-Agent": e.userAgent || `anthropic-sdk-typescript/${PK} oidcFederationProvider`
        },
        body: JSON.stringify(n)
      });
    } catch (l) {
      throw new nf(`Failed to reach token endpoint ${r}: ${l}`);
    }
    let s = o.headers.get("Request-Id");
    if (!o.ok) {
      let l = await o.text().catch(() => ""),
        c = tG(l),
        u = "";
      if (o.status === 401) u = ` Ensure your federation rule matches your identity token. ${e.workspaceId ? "" : "If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`;
      throw new nf(`Token exchange failed with status ${o.status}${s ? ` (request-id ${s})` : ""}: ${c}${u}`, o.status, c, s);
    }
    let i = await Vsn(o, s),
      a = Number(i.expires_in);
    if (!Number.isFinite(a)) throw new nf(`Token endpoint response missing required fields: ${JSON.stringify(tG(i))}`, o.status, tG(i), s);
    return {
      token: i.access_token,
      expiresAt: dee() + a
    };
  };
}