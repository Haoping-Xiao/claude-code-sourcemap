// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c_
// matched 2.1.88 source: src/services/mcp/officialRegistry.ts
// class=modified  jaccard=0.1093  score=0.1388  fileCov=0.34
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module c_] deps: Hp, Rc, oo, je, RE, Gx, Ls, qd, kM, Cv
Os = {
  get(e, t) {
    return _3e("GET", e, void 0, t);
  },
  post(e, t, n) {
    return _3e("POST", e, t, n);
  },
  put(e, t, n) {
    return _3e("PUT", e, t, n);
  },
  patch(e, t, n) {
    return _3e("PATCH", e, t, n);
  },
  delete(e, t) {
    return _3e("DELETE", e, void 0, t);
  },
};
function L$d() {
  return {
    urls: void 0,
  };
}
function uOi(e) {
  try {
    let t = new URL(e);
    return (
      (t.search = ""),
      (t.username = ""),
      (t.password = ""),
      (t.hash = ""),
      t.toString().replace(/\/$/, "")
    );
  } catch {
    return;
  }
}
function D$d() {
  let e = at("tengu_mcp_directory_visibility", lOi);
  return Array.isArray(e) && e.every((t) => typeof t === "string")
    ? e.filter((t) => t.length > 0)
    : lOi;
}
async function P$d(e) {
  let t = new Set(),
    n = e.join(","),
    r;
  for (let o = 0; o < cOi; o++) {
    let s = new URLSearchParams({
      version: "latest",
      limit: "100",
      visibility: n,
    });
    if (r) s.set("cursor", r);
    let i = await Os.get(`/mcp-registry/v0/servers?${s}`, {
      auth: "none",
      timeout: 5000,
    });
    if (!i.ok) break;
    for (let a of i.data.servers ?? [])
      for (let l of a.server?.remotes ?? []) {
        let c = uOi(l.url);
        if (c) t.add(c);
      }
    if (((r = i.data.metadata?.nextCursor), !r)) break;
  }
  return t;
}
async function M$d(e) {
  let t = new Set(),
    n = e.join(","),
    r;
  for (let o = 0; o < cOi; o++) {
    let s = new URLSearchParams({
      limit: "500",
      visibility: n,
    });
    if (r) s.set("cursor", r);
    let i = await Os.get(`/api/directory/servers?${s}`, {
      auth: "none",
      timeout: 5000,
    });
    if (!i.ok) break;
    for (let a of i.data.servers ?? []) {
      if (a.type !== "remote") continue;
      let l = a.remote?.url;
      if (!l) continue;
      let c = uOi(l);
      if (c) t.add(c);
    }
    if (((r = i.data.next_cursor ?? void 0), !r)) break;
  }
  return t;
}
async function dOi() {
  if (Vi()) return;
  if (zve()) return;
  let e = at("tengu_mcp_directory_bff", false),
    t = We(e ? "bff" : "legacy"),
    n = D$d();
  if (n.length === 0) {
    ((Hzr.urls = new Set()),
      xe("mcp_registry_fetch"),
      G("tengu_mcp_registry_fetch", {
        source: t,
        success: true,
        url_count: 0,
        duration_ms: 0,
        empty_visibility: true,
      }));
    return;
  }
  let r = Date.now();
  try {
    let o = e ? await M$d(n) : await P$d(n);
    ((Hzr.urls = o),
      T(`[mcp-registry] Loaded ${o.size} official MCP URLs (${e ? "bff" : "legacy"})`),
      xe("mcp_registry_fetch"),
      G("tengu_mcp_registry_fetch", {
        source: t,
        success: true,
        url_count: o.size,
        duration_ms: Date.now() - r,
      }));
  } catch (o) {
    (T(`Failed to fetch MCP registry: ${be(o)}`, {
      level: "error",
    }),
      It("mcp_registry_fetch", "fetch_failed"),
      G("tengu_mcp_registry_fetch", {
        source: t,
        success: false,
        url_count: 0,
        duration_ms: Date.now() - r,
      }));
  }
}
function pOi(e) {
  return Hzr.urls?.has(e) ?? false;
}
var lOi,
  cOi = 20,
  Hzr;
