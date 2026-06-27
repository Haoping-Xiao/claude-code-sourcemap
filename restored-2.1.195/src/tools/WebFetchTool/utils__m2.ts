// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l$e
// matched 2.1.88 source: src/tools/WebFetchTool/utils.ts
// class=modified (alt of src/tools/WebFetchTool/utils.ts)  jaccard=0.0303  score=0.0742  fileCov=0.0488
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: readArtifactContent, getFrameShareStatus
// [unwrapped __esm module l$e] deps: Cde, Rc, dn, Un, Rx, c_, je, Lx, RE, Jt
Fuf = new Set(["remote", "remote_cowork"]);
Guf = /^(?:session_|cse_)[A-Za-z0-9_-]{1,184}$/;
O_t = new Set();
async function gfl({ slug: e, env: t }, n, r) {
  let o = $s().CLAUDE_AI_ORIGIN.includes("staging") ? "staging" : "prod";
  if (t !== o)
    return (
      Le(n, "env_mismatch"),
      {
        err: `that artifact URL is for ${t} claude.ai, but this session targets ${o}`,
      }
    );
  let s;
  try {
    s = await Os.get(`/api/frame/${e}?via=model_read`, {
      host: "frame",
      auth: "required",
      refreshOAuth: true,
      headers: B_t(),
      timeout: 15000,
      validateStatus: () => true,
      signal: r,
    });
  } catch (c) {
    if (dM(c)) throw c;
    return (
      Le(n, "boot_request_error"),
      {
        err: "artifact read failed (network error)",
      }
    );
  }
  if (!s.ok)
    return (
      Le(n, s.reason),
      {
        err:
          s.reason === "no-auth"
            ? `not authenticated \u2014 run /login (${s.detail})`
            : `artifact read unavailable: ${s.reason}`,
      }
    );
  if (s.status === 404)
    return (
      Le(n, "boot_404"),
      {
        err: "artifact not found \u2014 it may have been deleted, or it has not been shared with you",
        status: 404,
      }
    );
  if (s.status < 200 || s.status >= 300)
    return (
      Le(n, "boot_failed"),
      {
        err: `artifact read failed (HTTP ${s.status})`,
        status: s.status,
      }
    );
  let i = s.data ?? {},
    { ver: a, assetToken: l } = i;
  if (!a || !l)
    return (
      Le(n, "boot_incomplete"),
      {
        err: "artifact read failed: incomplete boot response",
      }
    );
  return {
    err: null,
    data: i,
    ver: a,
    assetToken: l,
  };
}
async function getFrameShareStatus(e, t) {
  let n = await gfl(e, "artifact_share_status", t);
  if (n.err !== null)
    return {
      err: n.err,
    };
  return {
    err: null,
    mode: n.data.perm?.mode,
    shared: n.data.shared,
  };
}
async function readArtifactContent(e, t) {
  let n = await gfl(e, "artifact_webfetch_read", t);
  if (n.err !== null) return n;
  let { ver: r, assetToken: o } = n,
    { title: s, perm: i } = n.data,
    a = i?.role === "owner" ? "owner" : "reader",
    l = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    c;
  try {
    c = await lb.get(`https://${l}/_f/${r}/?__frame_t=${encodeURIComponent(o)}`, {
      signal: t,
      timeout: 30000,
      responseType: "arraybuffer",
      maxRedirects: 0,
      maxContentLength: SQ + 4096,
      validateStatus: () => true,
    });
  } catch (p) {
    if (dM(p)) throw p;
    return (
      Le("artifact_webfetch_read", "asset_request_error"),
      {
        err: "artifact content fetch failed (network error)",
      }
    );
  }
  if (c.status === 403 && c.headers["x-proxy-error"] === "blocked-by-allowlist")
    return (
      Le("artifact_webfetch_read", "asset_egress_blocked"),
      {
        err: `the network egress proxy in this environment blocks ${l} \u2014 your access to the artifact itself is fine (the boot check passed)`,
        status: 403,
      }
    );
  if (c.status < 200 || c.status >= 300)
    return (
      Le("artifact_webfetch_read", "asset_failed"),
      {
        err: `artifact content fetch failed (HTTP ${c.status})`,
        status: c.status,
      }
    );
  let u = Buffer.from(c.data);
  return (
    xe("artifact_webfetch_read"),
    {
      err: null,
      html: u.toString("utf-8").replace(`<base href="/_f/${r}/">`, ""),
      role: a,
      bytes: u.length,
      title: s ?? "",
      ver: r,
    }
  );
}
