// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wgc
// matched 2.1.88 source: src/bridge/codeSessionApi.ts
// class=modified  jaccard=0.54  score=0.6539  fileCov=0.7562
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function oauthHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    "anthropic-version": Sum,
    "User-Agent": dy(),
  };
}
async function createCodeSession(baseUrl, accessToken, title, timeoutMs, tags, s, i, a) {
  let l = `${baseUrl}/v1/code/sessions`,
    c = {
      cwd: i ?? $t(),
      ...(a && {
        model: a,
      }),
    };
  if (s) {
    let { buildGitSessionContext: p } = await Promise.resolve().then(() => ($Po(), YIl)),
      { sources: f, outcomes: m } = await p(s.gitRepoUrl, s.branch, s.defaultBranch);
    if (f.length > 0 || m.length > 0)
      ((c.sources = f), (c.outcomes = m), (c.reuse_outcome_branches = true));
  }
  let u;
  try {
    u = await po.post(
      l,
      {
        title: title,
        bridge: {},
        ...(tags?.length && {
          tags: tags,
        }),
        config: c,
      },
      {
        headers: oauthHeaders(accessToken),
        timeout: timeoutMs,
        validateStatus: (p) => p < 500,
      },
    );
  } catch (p) {
    return (T(`[code-session] Session create request failed: ${be(p)}`), null);
  }
  if (u.status !== 200 && u.status !== 201) {
    let p = _J(u.data);
    return (T(`[code-session] Session create failed ${u.status}${p ? `: ${p}` : ""}`), null);
  }
  let d = u.data;
  if (
    !d ||
    typeof d !== "object" ||
    !("session" in d) ||
    !d.session ||
    typeof d.session !== "object" ||
    !("id" in d.session) ||
    typeof d.session.id !== "string" ||
    !d.session.id.startsWith("cse_")
  )
    return (T(`[code-session] No session.id (cse_*) in response: ${De(d).slice(0, 200)}`), null);
  return d.session.id;
}
function HTt(e) {
  return e !== null && "terminal" in e;
}
function Eum(e, t) {
  if (
    e !== null &&
    typeof e === "object" &&
    "error" in e &&
    e.error !== null &&
    typeof e.error === "object" &&
    "resource" in e.error
  ) {
    let n = e.error.resource;
    if (n === "untrusted_device" || n === "session_stale_relogin") return n;
    return;
  }
  if (t?.includes("trusted device")) return "untrusted_device";
  return;
}
async function fetchRemoteCredentials(
  sessionId,
  baseUrl,
  accessToken,
  timeoutMs,
  trustedDeviceToken,
) {
  let s = `${baseUrl}/v1/code/sessions/${sessionId}/bridge`,
    i = oauthHeaders(accessToken);
  if (trustedDeviceToken) i["X-Trusted-Device-Token"] = trustedDeviceToken;
  let a;
  try {
    a = await po.post(
      s,
      {},
      {
        headers: i,
        timeout: timeoutMs,
        validateStatus: (d) => d < 500,
      },
    );
  } catch (d) {
    return (T(`[code-session] /bridge request failed: ${be(d)}`), null);
  }
  if (a.status !== 200) {
    let d = _J(a.data);
    if ((T(`[code-session] /bridge failed ${a.status}${d ? `: ${d}` : ""}`), a.status === 403)) {
      let p = Eum(a.data, d);
      if (p)
        return {
          terminal: true,
          reason: p,
        };
    }
    return null;
  }
  let l = a.data;
  if (
    l === null ||
    typeof l !== "object" ||
    !("worker_jwt" in l) ||
    typeof l.worker_jwt !== "string" ||
    !("expires_in" in l) ||
    typeof l.expires_in !== "number" ||
    !("api_base_url" in l) ||
    typeof l.api_base_url !== "string" ||
    !("worker_epoch" in l)
  )
    return (
      T(
        `[code-session] /bridge response malformed (need worker_jwt, expires_in, api_base_url, worker_epoch): ${De(l).slice(0, 200)}`,
      ),
      null
    );
  let c = l.worker_epoch,
    u = typeof c === "string" ? Number(c) : c;
  if (typeof u !== "number" || !Number.isFinite(u) || !Number.isSafeInteger(u))
    return (T(`[code-session] /bridge worker_epoch invalid: ${De(c)}`), null);
  return {
    worker_jwt: l.worker_jwt,
    api_base_url: l.api_base_url,
    expires_in: l.expires_in,
    worker_epoch: u,
  };
}
var Sum = "2023-06-01";
