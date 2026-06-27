// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EWc
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/client.mjs
// class=new  jaccard=0.0418  score=0.0934  fileCov=0.0704
// note: nearest: node_modules/@anthropic-ai/sdk/client.mjs (0.0418); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var EWc = E(() => {
  DD();
});
function O$m(e) {
  let t = new Headers();
  return e.forEach((n, r) => {
    let o = r.toLowerCase();
    if ($$m.has(o) || o.startsWith("x-stainless-")) t.set(r, n);
  }), t;
}
async function HWc(e, t, n, r) {
  let o = typeof e.model === "string" ? e.model : null,
    s = {
      system: e.system,
      messages: e.messages,
      tools: e.tools
    };
  for (let i of t) {
    if (i.kind === "sdk" && i.provider === "bedrock") continue;
    let a = o ? cZo(o, i, n, r) : null;
    if (!a?.ok) continue;
    let l = {
      ...s,
      model: a.model
    };
    try {
      if (i.kind === "sdk") return (await i.client.messages.countTokens(l)).input_tokens;
      let c = new Headers({
        "content-type": "application/json",
        "anthropic-version": "2023-06-01"
      });
      await i.applyAuth(c);
      let u = `${i.baseUrl.replace(/\/$/, "")}/v1/messages/count_tokens`,
        d = await iwt(u, {
          method: "POST",
          headers: c,
          body: De(l),
          ...kg({
            url: u
          }),
          timeout: false,
          signal: AbortSignal.timeout(10000 /* 1e4 */)
        });
      if (!d.ok) continue;
      let p = await d.json();
      if (typeof p.input_tokens === "number") return p.input_tokens;
    } catch {}
  }
  for (let i of t) {
    if (i.kind !== "sdk" || i.provider !== "bedrock") continue;
    let a = o ? cZo(o, i, n, r) : null;
    if (!a?.ok) continue;
    try {
      return (await i.client.messages.create({
        ...s,
        model: a.model,
        max_tokens: 1,
        stream: false
      })).usage.input_tokens;
    } catch {}
  }
  return Math.ceil(De(s).length / 4);
}
function TWc(e) {
  return U$m.includes(e);
}
function F$m(e, t) {
  let n = y9(e),
    r = e.toLowerCase();
  return t.find(o => o.id.toLowerCase() === r || n !== null && y9(o.id) === n);
}
function cZo(e, t, n, r = true) {
  let o = y9(e),
    s = F$m(e, n),
    i = s?.upstream_model[t.name];
  if (i) return {
    ok: true,
    model: i
  };
  if (o && (r || s)) {
    let a = t.provider === "anthropic" ? o.firstParty : o[t.provider];
    if (!a) return {
      ok: false,
      error: `model ${e} is not available on ${t.provider}`
    };
    return {
      ok: true,
      model: a
    };
  }
  if (s) return {
    ok: false,
    error: `model ${e} has no upstream_model.${t.name} configured`
  };
  return {
    ok: false,
    error: `model ${e} is not in the operator's model allowlist`
  };
}
function cBe(e, t, n, r) {
  return Response.json({
    type: "error",
    ...(r && {
      request_id: r
    }),
    error: {
      type: t,
      message: n
    }
  }, {
    status: e
  });
}
function j$m(e, t) {
  let n = new Headers();
  return e.forEach((r, o) => {
    let s = o.toLowerCase();
    if (!t.includes(s) && !s.startsWith("anthropic-ratelimit-")) n.set(o, r);
  }), n;
}
async function G$m(e, t, n, r) {
  let o = new AbortController(),
    s = setTimeout(i => i.abort(), r, o);
  try {
    return await iwt(e, {
      ...t,
      signal: AbortSignal.any([n, o.signal])
    });
  } finally {
    clearTimeout(s);
  }
}
async function vWc(e) {
  return Promise.all(e.map(async t => {
    switch (t.provider) {
      case "anthropic":
        {
          if ("api_key" in t.auth) {
            let i = t.auth.api_key;
            return {
              kind: "raw",
              name: t.name,
              provider: "anthropic",
              baseUrl: t.base_url,
              applyAuth: async a => {
                a.set("x-api-key", i);
              }
            };
          }
          if ("oauth_token" in t.auth) {
            let i = t.auth.oauth_token;
            return {
              kind: "raw",
              name: t.name,
              provider: "anthropic",
              baseUrl: t.base_url,
              applyAuth: async a => {
                a.set("Authorization", `Bearer ${i}`), a.append("anthropic-beta", kw);
              }
            };
          }
          let {
              resolveCredentialsFromConfig: n,
              TokenCache: r
            } = await Promise.resolve().then(() => (yje(), kjr)),
            o = n({
              organization_id: t.auth.organization_id,
              workspace_id: t.auth.workspace_id,
              base_url: t.base_url,
              authentication: {
                type: "oidc_federation",
                federation_rule_id: t.auth.federation_rule_id,
                service_account_id: t.auth.service_account_id,
                identity_token: {
                  source: "file",
                  path: t.auth.identity_token_file
                }
              }
            }, {
              baseURL: t.base_url,
              fetch: (i, a) => iwt(String(i), {
                ...a,
                ...kg({
                  url: String(i)
                }),
                signal: AbortSignal.timeout(10000 /* 1e4 */)
              })
            }),
            s = new r(o.provider, i => gu("warn", `WIF advisory refresh (${t.name}): ${be(i)}`));
          return {
            kind: "raw",
            name: t.name,
            provider: "anthropic",
            baseUrl: t.base_url,
            applyAuth: async i => {
              i.set("Authorization", `Bearer ${await s.getToken()}`);
              for (let [a, l] of Object.entries(o.extraHeaders)) i.set(a, l);
              i.append("anthropic-beta", kw);
            },
            invalidateAuth: () => s.invalidate()
          };
        }
      case "bedrock":
        {
          let {
              AnthropicBedrock: n
            } = await Promise.resolve().then(() => (Aje(), Eje)),
            r = {
              awsRegion: t.region,
              ...(t.base_url && {
                baseURL: t.base_url
              }),
              timeout: lZo,
              fetchOptions: {
                ...kg({
                  url: void 0
                }),
                timeout: false
              },
              maxRetries: 0
            },
            o = t.auth.aws_bearer_token ? new n({
              ...r,
              skipAuth: true,
              defaultHeaders: {
                Authorization: `Bearer ${t.auth.aws_bearer_token}`
              }
            }) : t.auth.aws_access_key_id && t.auth.aws_secret_access_key ? new n({
              ...r,
              awsAccessKey: t.auth.aws_access_key_id,
              awsSecretKey: t.auth.aws_secret_access_key,
              awsSessionToken: t.auth.aws_session_token
            }) : new n(r);
          return {
            kind: "sdk",
            name: t.name,
            provider: "bedrock",
            client: o
          };
        }
      case "vertex":
        {
          let {
              AnthropicVertex: n
            } = await Promise.resolve().then(() => (zOt(), VOt)),
            r = {
              region: t.region,
              projectId: t.project_id,
              ...(t.base_url && {
                baseURL: t.base_url
              }),
              timeout: lZo,
              fetchOptions: {
                ...kg({
                  url: void 0
                }),
                timeout: false
              },
              maxRetries: 0
            };
          if (t.auth.access_token) {
            let o = t.auth.access_token;
            r.authClient = {
              projectId: t.project_id,
              getRequestHeaders: async () => ({
                Authorization: `Bearer ${o}`
              })
            };
          } else {
            let {
              GoogleAuth: o
            } = await Promise.resolve().then(() => R(qOt(), 1));
            r.googleAuth = new o({
              scopes: ["https://www.googleapis.com/auth/cloud-platform"],
              projectId: t.project_id,
              ...(t.auth.service_account_json && {
                keyFilename: t.auth.service_account_json
              })
            });
          }
          return {
            kind: "sdk",
            name: t.name,
            provider: "vertex",
            client: new n(r)
          };
        }
      case "foundry":
        {
          let {
              AnthropicFoundry: n
            } = await Promise.resolve().then(() => (t3r(), e3r)),
            r = {
              ...(t.base_url ? {
                baseURL: t.base_url
              } : {
                resource: t.resource
              }),
              timeout: lZo,
              fetchOptions: {
                ...kg({
                  url: void 0
                }),
                timeout: false
              },
              maxRetries: 0
            };
          if ("api_key" in t.auth) r.apiKey = t.auth.api_key;else {
            let {
                DefaultAzureCredential: o
              } = await Promise.resolve().then(() => (zqr(), Vqr)),
              s = new o();
            r.azureADTokenProvider = async () => {
              let i = await s.getToken("https://cognitiveservices.azure.com/.default");
              if (!i) throw Error("Azure AD token unavailable");
              return i.token;
            };
          }
          return {
            kind: "sdk",
            name: t.name,
            provider: "foundry",
            client: new n(r)
          };
        }
    }
  }));
}
async function wWc(e, t, n, r, o = true, s, i = 120000, a, l) {
  let c = await e.arrayBuffer(),
    u;
  try {
    u = Ft(Buffer.from(c).toString("utf8"));
  } catch {
    return cBe(400, "invalid_request_error", "invalid JSON", a);
  }
  if (typeof u !== "object" || u === null || Array.isArray(u)) return cBe(400, "invalid_request_error", "request body must be a JSON object", a);
  l?.(u);
  let d = "model" in u && typeof u.model === "string" ? u.model : void 0;
  if (s && d && !aZo(d, s)) return cBe(400, "invalid_request_error", `model ${d} is not in your role's availableModels allowlist`, a);
  let p = [],
    f = false,
    m = null,
    g = null,
    h = null,
    y = e.headers.get("anthropic-beta") ?? void 0,
    b = {};
  e.headers.forEach((_, S) => {
    if (S.toLowerCase().startsWith("x-stainless-")) b[S] = _;
  });
  for (let _ of n) {
    if (e.signal.aborted) break;
    let S = d;
    if (d) {
      let v = cZo(d, _, r, o);
      if (!v.ok) {
        p.push(v.error);
        continue;
      }
      S = v.model;
    }
    let A = S === d ? u : {
      ...u,
      model: S
    };
    f = true;
    try {
      let v;
      if (_.kind === "raw") {
        let C = A === u ? c : new TextEncoder().encode(De(A));
        if (v = await AWc(e, t, C, _, i), v.status === 401 && _.invalidateAuth) _.invalidateAuth(), gu("warn", `401 from ${_.name}; invalidated WIF bearer cache, retrying request_id=${a ?? "-"}`), v.body?.cancel().catch(() => {}), v = await AWc(e, t, C, _, i);
      } else v = await V$m(t, A, _.provider, _.client, y, b, e.signal, a);
      if (v.headers.set("x-gateway-upstream", _.name), d) v.headers.set("x-gateway-model", d), v.headers.set("x-gateway-upstream-model", S ?? d);
      if (v.status >= 500 || v.status === 429 || v.status === 401 || v.status === 403) {
        if (p.push(`${v.status} ${v.statusText}`), v.status === 501) {
          if (m) m.body?.cancel().catch(() => {});
          m = v;
        } else if (v.status === 429) {
          if (g) g.body?.cancel().catch(() => {});
          g = v;
        } else if (v.status === 401 || v.status === 403) {
          if (h) h.body?.cancel().catch(() => {});
          h = v;
        } else v.body?.cancel().catch(() => {});
        continue;
      }
      for (let C of [m, g, h]) C?.body?.cancel().catch(() => {});
      return v;
    } catch (v) {
      let C = be(v);
      p.push(C), gu("warn", `upstream failed, trying next request_id=${a ?? "-"}: ${C}`);
    }
  }
  if (e.signal.aborted) {
    for (let _ of [m, g, h]) _?.body?.cancel().catch(() => {});
    return cBe(499, "api_error", "client closed request", a);
  }
  if (!f) return cBe(400, "invalid_request_error", p.join("; "), a);
  if (g) {
    for (let _ of [m, h]) _?.body?.cancel().catch(() => {});
    return g;
  }
  if (h) {
    if (m) m.body?.cancel().catch(() => {});
    return h;
  }
  if (m) return m;
  return gu("warn", `all upstreams failed request_id=${a ?? "-"}: ${p.join("; ")}`), cBe(502, "api_error", `all upstreams failed (${n.length} attempted)`, a);
}
async function AWc(e, t, n, r, o) {
  let s = new URL(e.url),
    i = `${r.baseUrl.replace(/\/$/, "")}${t}${s.search}`,
    a = O$m(e.headers);
  await r.applyAuth(a);
  let l = await G$m(i, {
    method: e.method,
    headers: a,
    body: n,
    duplex: "half",
    ...kg({
      url: i
    }),
    timeout: false
  }, e.signal, o);
  return new Response(l.body, {
    status: l.status,
    statusText: l.statusText,
    headers: j$m(l.headers, N$m)
  });
}
function W$m(e, t) {
  let n = new TextEncoder(),
    r = e[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(o) {
      try {
        let {
          value: s,
          done: i
        } = await r.next();
        if (i) {
          o.close();
          return;
        }
        o.enqueue(n.encode(`event: ${s.type}
data: ${De(s)}

`));
      } catch (s) {
        gu("warn", `upstream stream error request_id=${t ?? "-"}: ${be(s)}`);
        let i = s instanceof Fo ? s.status ?? 500 : 500;
        o.enqueue(n.encode(`event: error
data: ${De({
          type: "error",
          ...(t && {
            request_id: t
          }),
          error: {
            type: IWc(i),
            message: CWc[i] ?? "upstream error"
          }
        })}

`)), o.close();
      }
    },
    async cancel() {
      await r.return?.(void 0).catch(() => {});
    }
  });
}
function q$m(e, t, n) {
  if (n !== "bedrock" || !t) return {
    body: e,
    betaHeader: t || void 0
  };
  let r = [];
  for (let s of t.split(",")) {
    let i = s.trim();
    if (!i) continue;
    let a = uAn(i);
    r.push(a ? a.header : i);
  }
  if (r.length === 0) return {
    body: e,
    betaHeader: void 0
  };
  let o = e.anthropic_beta;
  return {
    body: {
      ...e,
      anthropic_beta: Uo([...(Array.isArray(o) ? o : []), ...r])
    },
    betaHeader: void 0
  };
}
async function V$m(e, t, n, r, o, s, i, a) {
  let l = q$m(t, o, n),
    c = l.body,
    u = {
      ...s,
      ...(l.betaHeader && {
        "anthropic-beta": l.betaHeader
      })
    },
    d = {
      signal: i,
      ...(Object.keys(u).length > 0 && {
        headers: u
      })
    };
  if (e === "/v1/messages/count_tokens" && n === "bedrock") return cBe(501, "not_supported", "count_tokens is not supported on Bedrock upstreams", a);
  try {
    switch (e) {
      case "/v1/messages":
        {
          if (c.stream) {
            let f = await r.messages.create({
              ...c,
              stream: true
            }, d);
            return new Response(W$m(f, a), {
              headers: B$m
            });
          }
          let p = await r.messages.create(c, d);
          return Response.json(p);
        }
      case "/v1/messages/count_tokens":
        {
          let p = await r.messages.countTokens(c, d);
          return Response.json(p);
        }
    }
  } catch (p) {
    if (p instanceof Fo) {
      let f = p.status ?? 500;
      return gu("warn", `${n} upstream ${f} request_id=${a ?? "-"}: ${p.message}`), cBe(f, IWc(f), CWc[f] ?? "upstream error", a);
    }
    throw p;
  }
}
function IWc(e) {
  return e !== void 0 && z$m[e] || "api_error";
}
function uZo(e, t, n, r) {
  let o = new Map();
  for (let s of e) o.set(s.id, {
    type: "model",
    id: s.id,
    display_name: s.label ?? s.id,
    ...(s.description && {
      description: s.description
    })
  });
  if (n) {
    let s = [VY, _j, zY],
      i = K$m.filter(a => !s.includes(a)).reverse();
    for (let a of [...s, ...i]) {
      let l = yc[a];
      if (o.has(l.firstParty)) continue;
      let c = false;
      for (let u of t) if (u === "anthropic" || l[u] !== null) {
        c = true;
        break;
      }
      if (c) o.set(l.firstParty, {
        type: "model",
        id: l.firstParty,
        display_name: l.firstParty
      });
    }
  }
  return r ? [...o.values()].filter(s => aZo(s.id, r)) : [...o.values()];
}
function xWc(e, t, n = true, r) {
  return Response.json({
    data: uZo(e, new Set(t.map(o => o.provider)), n, r),
    has_more: false,
    first_id: null,
    last_id: null
  });
}
var $$m,
  N$m,
  B$m,
  U$m,
  lZo = 3600000,
  z$m,
  CWc,
  K$m;