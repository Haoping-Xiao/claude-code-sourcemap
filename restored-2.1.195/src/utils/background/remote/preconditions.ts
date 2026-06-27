// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ide
// matched 2.1.88 source: src/utils/background/remote/preconditions.ts
// class=modified  jaccard=0.6515  score=0.9002  fileCov=0.7022
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ide = E(() => {
  Hp();
  Rc();
  H0();
  dn();
  oo();
  er();
  je();
  At();
  Gx();
  vn();
  Ls();
  Cv();
});
async function Vjn() {
  if (!bo()) return !1;
  return ch();
}
async function kOa() {
  return await YFe({
    ignoreUntracked: !0,
  });
}
async function ROa() {
  try {
    return await Ure();
  } catch (e) {
    if (po.isAxiosError(e) && e.response?.status === 401) throw e;
    return (T(`fetchRemoteEnvironmentsForEligibility failed: ${be(e)}`), null);
  }
}
async function _ft(e) {
  let t = e ?? $t();
  if (Tu(t) !== null) return !0;
  let { stdout: n, code: r } = await Gr(go(), ["rev-parse", "--is-inside-work-tree"], {
    cwd: t,
  });
  return r === 0 && n.trim() === "true";
}
async function oVe(e, t, n) {
  try {
    let r = Ws()?.accessToken;
    if (!r)
      return (T("checkGithubAppInstalled: No access token found, assuming app not installed"), !1);
    let o = await yj();
    if (!o)
      return (T("checkGithubAppInstalled: No org UUID found, assuming app not installed"), !1);
    let s = `${$s().BASE_API_URL}/api/oauth/organizations/${o}/code/repos/${e}/${t}`,
      i = {
        ...aH(r),
        "x-organization-uuid": o,
      };
    T(`Checking GitHub app installation for ${e}/${t}`);
    let a = await po.get(s, {
      headers: i,
      timeout: 15000,
      signal: n,
    });
    if (a.status === 200) {
      if (a.data.status) {
        let l = a.data.status.app_installed;
        return (T(`GitHub app ${l ? "is" : "is not"} installed on ${e}/${t}`), l);
      }
      return (T(`GitHub app is not installed on ${e}/${t} (status is null)`), !1);
    }
    return (T(`checkGithubAppInstalled: Unexpected response status ${a.status}`), !1);
  } catch (r) {
    if (po.isAxiosError(r)) {
      let o = r.response?.status;
      if (o && o >= 400 && o < 500)
        return (
          T(`checkGithubAppInstalled: Got ${o} error, app likely not installed on ${e}/${t}`),
          !1
        );
    }
    return (T(`checkGithubAppInstalled error: ${be(r)}`), !1);
  }
}
async function JDp() {
  try {
    let e = Ws()?.accessToken;
    if (!e) return (T("checkGithubTokenSynced: No access token found"), !1);
    let t = await yj();
    if (!t) return (T("checkGithubTokenSynced: No org UUID found"), !1);
    let n = `${$s().BASE_API_URL}/api/oauth/organizations/${t}/sync/github/auth`,
      r = {
        ...aH(e),
        "x-organization-uuid": t,
      };
    T("Checking if GitHub token is synced via web-setup");
    let o = await po.get(n, {
        headers: r,
        timeout: 15000,
      }),
      s = o.status === 200 && o.data?.is_authenticated === !0;
    return (T(`GitHub token synced: ${s} (status=${o.status}, data=${De(o.data)})`), s);
  } catch (e) {
    if (po.isAxiosError(e)) {
      let t = e.response?.status;
      if (t && t >= 400 && t < 500)
        return (T(`checkGithubTokenSynced: Got ${t}, token not synced`), !1);
    }
    return (T(`checkGithubTokenSynced error: ${be(e)}`), !1);
  }
}
async function LOa(e, t) {
  if (await oVe(e, t))
    return {
      hasAccess: !0,
      method: "github-app",
    };
  if (at("tengu_cobalt_lantern", !1) && (await JDp()))
    return {
      hasAccess: !0,
      method: "token-sync",
    };
  return {
    hasAccess: !1,
    method: "none",
  };
}
