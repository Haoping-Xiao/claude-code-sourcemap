// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ole
// matched 2.1.88 source: src/services/oauth/getOauthProfile.ts
// class=modified  jaccard=0.2632  score=0.3319  fileCov=0.5596
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ole = E(() => {
  e1();
  Eld = {};
});
async function R7s() {
  let t = Dt().oauthAccount?.accountUuid,
    n = lI();
  if (!t || !n) return;
  let r = `${$s().BASE_API_URL}/api/claude_cli_profile`;
  try {
    let o = await po.get(r, {
      headers: {
        "x-api-key": n,
        "anthropic-beta": kw,
      },
      params: {
        account_uuid: t,
      },
      timeout: 1e4,
    });
    return (xe("oauth_profile_fetch"), o.data);
  } catch (o) {
    if ((It("oauth_profile_fetch", "oauth_profile_api_key_failed"), R_(o)))
      T(`Failed to fetch oauth profile from API key: ${o}`, {
        level: "error",
      });
    else ke(o);
  }
}
async function OIe(e) {
  let t = `${$s().BASE_API_URL}/api/oauth/profile`;
  try {
    let n = await po.get(t, {
      headers: {
        Authorization: `Bearer ${e}`,
        "Content-Type": "application/json",
      },
      timeout: 1e4,
    });
    return (xe("oauth_profile_fetch"), n.data);
  } catch (n) {
    if ((It("oauth_profile_fetch", "oauth_profile_token_failed"), R_(n)))
      T(`Failed to fetch oauth profile from OAuth token: ${n}`, {
        level: "error",
      });
    else ke(n);
  }
}
async function FSn(e) {
  let t = `${$s().BASE_API_URL}/api/oauth/validate`;
  try {
    let n = await po.post(t, null, {
      headers: {
        Authorization: `Bearer ${e}`,
        "Content-Type": "application/json",
      },
      timeout: 1e4,
    });
    return (xe("oauth_token_validate"), n.data);
  } catch (n) {
    if ((It("oauth_token_validate", "oauth_validate_failed"), R_(n)))
      T(`Failed to validate OAuth token: ${n}`, {
        level: "error",
      });
    else ke(n);
  }
}
