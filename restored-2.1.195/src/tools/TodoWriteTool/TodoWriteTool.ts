// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jjn
// matched 2.1.88 source: src/tools/TodoWriteTool/TodoWriteTool.ts
// class=modified  jaccard=0.3232  score=0.4191  fileCov=0.5854
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jjn] deps: @modelcontextprotocol/sdk/dist/esm/types.js, services/analytics/index.ts, services/mockRateLimits.ts, utils/tasks.ts, utils/todo/types.ts, tools/TodoWriteTool/prompt.ts
((YDp = ve(() =>
  H.strictObject({
    todos: hft().describe("The updated todo list"),
  }),
)),
  (XDp = ve(() =>
    H.object({
      oldTodos: hft().describe("The todo list before the update"),
      newTodos: hft().describe("The todo list after the update"),
    }),
  )),
  (qDe = ti({
    name: s$,
    searchHint: "manage the session task checklist",
    maxResultSizeChars: 100000 /* 1e5 */,
    strict: true,
    async description() {
      return COa;
    },
    async prompt({ model: e }) {
      return wOa(e);
    },
    get inputSchema() {
      return YDp();
    },
    get outputSchema() {
      return XDp();
    },
    userFacingName() {
      return "";
    },
    shouldDefer: true,
    isEnabled() {
      return !EH();
    },
    toAutoClassifierInput(e) {
      return `${e.todos.length} items`;
    },
    async checkPermissions(e) {
      return {
        behavior: "allow",
        updatedInput: e,
      };
    },
    renderToolUseMessage() {
      return null;
    },
    async call({ todos: e }, t) {
      let n = t.getAppState(),
        r = t.agentId ?? Rt(),
        o = n.todos[r] ?? [],
        i = e.every((a) => a.status === "completed") ? [] : e;
      return (
        t.setAppState((a) => ({
          ...a,
          todos: {
            ...a.todos,
            [r]: i,
          },
        })),
        {
          data: {
            oldTodos: o,
            newTodos: e,
          },
        }
      );
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content:
          "Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable",
      };
    },
  })));
function Wjn(e) {
  return false;
}
function yEe(e) {
  return e.environment_id;
}
function qjn(e) {
  return false;
}
function fWt(e) {
  return {
    environment_id: e,
  };
}
async function Ure(e) {
  return yl("teleport_environments_list", async () => {
    if (fr() !== "firstParty")
      throw Error(
        "Remote environments are only available on the first-party Anthropic API provider.",
      );
    let t = e ?? Ws()?.accessToken;
    if (!t)
      throw Error(
        "Claude Code web sessions require authentication with a Claude.ai account. API key authentication is not sufficient. Please run /login to authenticate, or check your authentication status with /status.",
      );
    let n = await yj();
    if (!n) throw Error("Unable to get organization UUID");
    let r = `${$s().BASE_API_URL}/v1/environment_providers`;
    try {
      let o = await oL(() =>
        po.get(r, {
          headers: {
            ...aH(Ws()?.accessToken ?? t),
            "x-organization-uuid": n,
          },
          timeout: 15000,
        }),
      );
      if (o.status !== 200)
        throw Error(`Failed to fetch environments: ${o.status} ${o.statusText}`);
      let s = o.data.environments.length > 0;
      if (Dt().hasRemoteEnvironment !== s)
        gn((i) =>
          i.hasRemoteEnvironment === s
            ? i
            : {
                ...i,
                hasRemoteEnvironment: s,
              },
        );
      return o.data.environments;
    } catch (o) {
      let s = Zr(o);
      if (R_(o))
        T(`fetchEnvironments failed: ${s.message}`, {
          level: "error",
        });
      else ke(s);
      throw s;
    }
  });
}
async function yft(e = "Default", t, n) {
  return yl("teleport_default_environment_create", async () => {
    if (fr() !== "firstParty")
      throw Error(
        "Remote environments are only available on the first-party Anthropic API provider.",
      );
    let r = n ?? Ws()?.accessToken;
    if (!r) throw Error("No access token available");
    let o = await yj();
    if (!o) throw Error("Unable to get organization UUID");
    let s = `${$s().BASE_API_URL}/v1/environment_providers/cloud/create`;
    return (
      await po.post(
        s,
        {
          name: e,
          kind: "anthropic_cloud",
          description: "Default - trusted network access",
          config: {
            environment_type: "anthropic",
            cwd: "/home/user",
            init_script: null,
            environment: {},
            languages: [
              {
                name: "python",
                version: "3.11",
              },
              {
                name: "node",
                version: "20",
              },
            ],
            network_config: {
              allowed_hosts: [],
              allow_default_hosts: true,
            },
          },
        },
        {
          headers: {
            ...aH(r),
            "anthropic-beta": "ccr-byoc-2025-07-29",
            "x-organization-uuid": o,
          },
          timeout: 15000,
          signal: t,
        },
      )
    ).data;
  });
}
async function xOa(e) {
  return [];
}
