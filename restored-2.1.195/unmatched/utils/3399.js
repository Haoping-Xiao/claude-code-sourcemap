// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dgo
// matched 2.1.88 source: src/tools/AgentTool/AgentTool.tsx
// class=new  jaccard=0.0369  score=0.2163  fileCov=0.0426
// note: nearest: src/tools/AgentTool/AgentTool.tsx (0.0369); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dgo = E(() => {
  Xr();
  ft();
  kt();
  ii();
  je();
  Ao();
  IX();
  VLp = ve(() => H.object({
    servers: H.array(H.string()).optional().describe("Server names to wait for (default: all pending)")
  })), zLp = ve(() => H.object({
    ready: H.boolean(),
    connected: H.array(H.string()),
    failed: H.array(H.string()),
    stillPending: H.array(H.string()),
    needsAuth: H.array(H.string()),
    disabled: H.array(H.string()),
    unknown: H.array(H.string())
  }));
  G$a = ti({
    isEnabled() {
      return Lgo(As());
    },
    isConcurrencySafe() {
      return false;
    },
    isReadOnly() {
      return true;
    },
    name: FRe,
    maxResultSizeChars: 10000 /* 1e4 */,
    async description() {
      return rso();
    },
    async prompt() {
      return rso();
    },
    get inputSchema() {
      return VLp();
    },
    get outputSchema() {
      return zLp();
    },
    async checkPermissions(e) {
      return {
        behavior: "allow",
        updatedInput: e
      };
    },
    async call(e, t) {
      let {
          options: {
            refreshMcpClients: n,
            mcpClients: r
          },
          abortController: o,
          getMcp: s
        } = t,
        i = () => n?.() ?? s?.().clients ?? r,
        a = e.servers?.length ? e.servers : j$a(),
        l = new Set(a.map(hc)),
        c = () => i().filter(v => a.includes(v.name) || l.has(hc(v.name))),
        u = Date.now(),
        d = u + qLp;
      while (c().some(v => v.type === "pending") && Date.now() < d && !o.signal.aborted) await Nn(50, o.signal);
      let p = Date.now() - u,
        f = c(),
        m = [],
        g = [],
        h = [],
        y = [],
        b = [];
      for (let v of f) switch (v.type) {
        case "connected":
          m.push(v.name);
          break;
        case "failed":
          g.push(v.name);
          break;
        case "pending":
          h.push(v.name);
          break;
        case "needs-auth":
          y.push(v.name);
          break;
        case "disabled":
          b.push(v.name);
          break;
        default:
      }
      let _ = new Set(f.map(v => hc(v.name))),
        S = a.filter(v => !_.has(hc(v))),
        A = h.length === 0 && g.length === 0 && y.length === 0 && b.length === 0 && S.length === 0;
      return T(`[WaitForMcpServers] waited=${p}ms connected=${m.join(",")} failed=${g.join(",")} pending=${h.join(",")} needsAuth=${y.join(",")} disabled=${b.join(",")} unknown=${S.join(",")}`), G("tengu_mcp_pending_call", {
        requestedCount: a.length,
        connectedCount: m.length,
        failedCount: g.length,
        pendingCount: h.length,
        needsAuthCount: y.length,
        disabledCount: b.length,
        unknownCount: S.length,
        waitMs: p,
        matched: A,
        matchType: We("wait"),
        success: A
      }), {
        data: {
          ready: A,
          connected: m,
          failed: g,
          stillPending: h,
          needsAuth: y,
          disabled: b,
          unknown: S
        }
      };
    },
    renderToolUseMessage: F$a,
    userFacingName: U$a,
    mapToolResultToToolResultBlockParam(e, t) {
      let n = [`ready: ${e.ready}`, e.connected.length ? `Connected (their tools are now available \u2014 call them directly): ${e.connected.join(", ")}` : "", e.failed.length ? `Failed to connect: ${e.failed.join(", ")}` : "", e.stillPending.length ? `Still connecting (try again or proceed without): ${e.stillPending.join(", ")}` : "", e.needsAuth.length ? `Needs authentication (ask the user to run /mcp): ${e.needsAuth.join(", ")}` : "", e.disabled.length ? `Disabled (ask the user to enable via /mcp): ${e.disabled.join(", ")}` : "", e.unknown.length ? `Unknown (no MCP server with this name is configured): ${e.unknown.join(", ")}` : ""].filter(Boolean);
      return {
        type: "tool_result",
        tool_use_id: t,
        content: n.join(`
`),
        is_error: !e.ready
      };
    }
  });
});
function rft(e, t) {
  let n = 0,
    r = [];
  function o() {
    if (n < e) return n++, Promise.resolve();
    return new Promise(i => r.push(i));
  }
  function s() {
    let i = r.shift();
    if (i) i();else n--;
  }
  return async (...i) => {
    await o();
    try {
      return await t(...i);
    } finally {
      s();
    }
  };
}
async function W$a(e) {
  let t = Pgo.get(e);
  if (t !== void 0) return t;
  let n = await KLp(e);
  return Pgo.set(e, n), n;
}
function Mgo(e) {
  Pgo.delete(e);
}
async function KLp(e) {
  let t = $m(e) ? process.env.GH_TOKEN || process.env.GITHUB_TOKEN : gfn(process.env.GH_HOST, e) ? process.env.GH_ENTERPRISE_TOKEN || process.env.GITHUB_ENTERPRISE_TOKEN : void 0;
  if (t) return t;
  if (!(await Gf("gh"))) return null;
  let {
    stdout: r,
    code: o
  } = await $n("gh", ["auth", "token", "--hostname", e], {
    timeout: 5000,
    preserveOutputOnError: false,
    env: {
      ...process.env,
      GH_TOKEN: "",
      GITHUB_TOKEN: "",
      GH_ENTERPRISE_TOKEN: "",
      GITHUB_ENTERPRISE_TOKEN: ""
    }
  });
  if (o !== 0) return null;
  let s = r.trim();
  return s.length > 0 ? s : null;
}
var Pgo;