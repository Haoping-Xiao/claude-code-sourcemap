// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Po
// matched 2.1.88 source: src/bridge/createSession.ts
// class=modified  jaccard=0.378  score=0.5129  fileCov=0.5896
// note: deminified; 6 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Dze = {};
_t(Dze, {
  updateBridgeSessionTitle: () => updateBridgeSessionTitle,
  updateBridgeSessionColorTag: () => updateBridgeSessionColorTag,
  getBridgeSession: () => getBridgeSession,
  createBridgeSession: () => createBridgeSession,
  archiveBridgeSession: () => archiveBridgeSession,
  SESSION_COLOR_TAG_PREFIX: () => SESSION_COLOR_TAG_PREFIX,
});
async function createBridgeSession({
  environmentId: e,
  title: t,
  events: n,
  gitRepoUrl: r,
  branch: o,
  signal: s,
  baseUrl: i,
  getAccessToken: a,
  permissionMode: l,
  tags: c,
}) {
  let { getClaudeAIOAuthTokens: u } = await Promise.resolve().then(() => (oo(), pU)),
    { getOrganizationUUID: d } = await Promise.resolve().then(() => (H0(), Int)),
    { getOauthConfig: p } = await Promise.resolve().then(() => (Rc(), _0t)),
    { getOAuthHeaders: f } = await Promise.resolve().then(() => (Cv(), sce)),
    { getMainLoopModel: m } = await Promise.resolve().then(() => (Ao(), F2r)),
    { getOriginalCwd: g } = await Promise.resolve().then(() => (ft(), twe)),
    { default: h } = await Promise.resolve().then(() => (Hp(), G0t)),
    { isFirstPartyProvider: y } = await Promise.resolve().then(() => (Ls(), b7s));
  if (!y())
    return (
      T("[bridge] Session create skipped on non-firstParty provider"),
      Le("bridge_session_create", "bridge_session_create_3p_provider"),
      null
    );
  let b = a?.() ?? u()?.accessToken;
  if (!b)
    return (
      T("[bridge] No access token for session creation"),
      Le("bridge_session_create", "bridge_session_create_no_token"),
      null
    );
  let _ = await d();
  if (!_)
    return (
      T("[bridge] No org UUID for session creation"),
      Le("bridge_session_create", "bridge_session_create_no_org"),
      null
    );
  let { sources: S, outcomes: A } = await MPo(r, o),
    v = {
      ...(t !== void 0 && {
        title: t,
      }),
      events: n,
      session_context: {
        sources: S,
        outcomes: A,
        model: m(),
        cwd: g(),
        reuse_outcome_branches: true,
      },
      ...fWt(e),
      source: "remote-control",
      ...(l && {
        permission_mode: l,
      }),
      ...(c?.length && {
        tags: c,
      }),
    },
    C = {
      ...f(b),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": _,
    },
    x = `${i ?? p().BASE_API_URL}/v1/sessions`,
    I;
  try {
    I = await h.post(x, v, {
      headers: C,
      signal: s,
      validateStatus: (P) => P < 500,
    });
  } catch (P) {
    return (
      T(`[bridge] Session creation request failed: ${be(P)}`),
      Le("bridge_session_create", "bridge_session_create_request_failed"),
      null
    );
  }
  if (!(I.status === 200 || I.status === 201)) {
    let P = _J(I.data);
    return (
      T(`[bridge] Session creation failed with status ${I.status}${P ? `: ${P}` : ""}`),
      Le("bridge_session_create", "bridge_session_create_http_error"),
      null
    );
  }
  let D = I.data;
  if (!D || typeof D !== "object" || !("id" in D) || typeof D.id !== "string")
    return (
      T("[bridge] No session ID in response"),
      Le("bridge_session_create", "bridge_session_create_bad_response"),
      null
    );
  return (xe("bridge_session_create"), D.id);
}
async function getBridgeSession(e, t) {
  let { getClaudeAIOAuthTokens: n } = await Promise.resolve().then(() => (oo(), pU)),
    { getOrganizationUUID: r } = await Promise.resolve().then(() => (H0(), Int)),
    { getOauthConfig: o } = await Promise.resolve().then(() => (Rc(), _0t)),
    { getOAuthHeaders: s } = await Promise.resolve().then(() => (Cv(), sce)),
    { default: i } = await Promise.resolve().then(() => (Hp(), G0t)),
    a = t?.getAccessToken?.() ?? n()?.accessToken;
  if (!a)
    return (
      T("[bridge] No access token for session fetch"),
      Le("bridge_session_get", "bridge_session_get_no_token"),
      null
    );
  let l = await r();
  if (!l)
    return (
      T("[bridge] No org UUID for session fetch"),
      Le("bridge_session_get", "bridge_session_get_no_org"),
      null
    );
  let c = {
      ...s(a),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": l,
    },
    u = oP(e),
    d = `${t?.baseUrl ?? o().BASE_API_URL}/v1/sessions/${u}`;
  T(`[bridge] Fetching session ${u}`);
  let p;
  try {
    p = await i.get(d, {
      headers: c,
      timeout: 10000 /* 1e4 */,
      validateStatus: (f) => f < 500,
    });
  } catch (f) {
    return (
      T(`[bridge] Session fetch request failed: ${be(f)}`),
      Le("bridge_session_get", "bridge_session_get_request_failed"),
      null
    );
  }
  if (p.status !== 200) {
    let f = _J(p.data);
    return (
      T(`[bridge] Session fetch failed with status ${p.status}${f ? `: ${f}` : ""}`),
      Le("bridge_session_get", "bridge_session_get_http_error"),
      null
    );
  }
  return (xe("bridge_session_get"), p.data);
}
async function archiveBridgeSession(e, t) {
  let { getClaudeAIOAuthTokens: n } = await Promise.resolve().then(() => (oo(), pU)),
    { getOrganizationUUID: r } = await Promise.resolve().then(() => (H0(), Int)),
    { getOauthConfig: o } = await Promise.resolve().then(() => (Rc(), _0t)),
    { getOAuthHeaders: s } = await Promise.resolve().then(() => (Cv(), sce)),
    { default: i } = await Promise.resolve().then(() => (Hp(), G0t)),
    a = t?.getAccessToken?.() ?? n()?.accessToken;
  if (!a) {
    T("[bridge] No access token for session archive");
    return;
  }
  let l = await r();
  if (!l) {
    T("[bridge] No org UUID for session archive");
    return;
  }
  let c = {
      ...s(a),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": l,
    },
    u = `${t?.baseUrl ?? o().BASE_API_URL}/v1/sessions/${e}/archive`;
  T(`[bridge] Archiving session ${e}`);
  let d = await i.post(
    u,
    {},
    {
      headers: c,
      timeout: t?.timeoutMs ?? 10000 /* 1e4 */,
      validateStatus: (p) => p < 500,
    },
  );
  if (d.status === 200)
    (T(`[bridge] Session ${e} archived successfully`), xe("bridge_session_archive"));
  else {
    let p = _J(d.data);
    (T(`[bridge] Session archive failed with status ${d.status}${p ? `: ${p}` : ""}`),
      Le("bridge_session_archive", "bridge_session_archive_http_error"));
  }
}
async function XIl(e, t, n, r) {
  let { getClaudeAIOAuthTokens: o } = await Promise.resolve().then(() => (oo(), pU)),
    { getOrganizationUUID: s } = await Promise.resolve().then(() => (H0(), Int)),
    { getOauthConfig: i } = await Promise.resolve().then(() => (Rc(), _0t)),
    { getOAuthHeaders: a } = await Promise.resolve().then(() => (Cv(), sce)),
    { default: l } = await Promise.resolve().then(() => (Hp(), G0t)),
    c = r?.getAccessToken?.() ?? o()?.accessToken;
  if (!c) {
    T(`[bridge] No access token for session ${n} update`);
    return;
  }
  let u = await s();
  if (!u) {
    T(`[bridge] No org UUID for session ${n} update`);
    return;
  }
  let d = {
      ...a(c),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": u,
    },
    p = oP(e),
    f = `${r?.baseUrl ?? i().BASE_API_URL}/v1/sessions/${p}`;
  T(`[bridge] Updating session ${n}: ${p}`);
  try {
    let m = await l.patch(f, t, {
      headers: d,
      timeout: 10000 /* 1e4 */,
      validateStatus: (g) => g < 500,
    });
    if (m.status === 200)
      (T(`[bridge] Session ${n} updated successfully`), xe("bridge_session_patch"));
    else {
      let g = _J(m.data);
      (T(`[bridge] Session ${n} update failed with status ${m.status}${g ? `: ${g}` : ""}`),
        It("bridge_session_patch", "bridge_session_patch_http_error"));
    }
  } catch (m) {
    (T(`[bridge] Session ${n} update request failed: ${be(m)}`),
      Le("bridge_session_patch", "bridge_session_patch_request_failed"));
  }
}
async function updateBridgeSessionTitle(e, t, n) {
  return XIl(
    e,
    {
      title: t,
    },
    "title",
    n,
  );
}
async function updateBridgeSessionColorTag(e, t, n, r) {
  let o = t === "default",
    s = n.filter((a) => o || a !== t).map((a) => SESSION_COLOR_TAG_PREFIX + a),
    i = o ? void 0 : [SESSION_COLOR_TAG_PREFIX + t];
  return XIl(
    e,
    {
      add_tags: i,
      remove_tags: s,
    },
    "color tag",
    r,
  );
}
var SESSION_COLOR_TAG_PREFIX = "color:";
