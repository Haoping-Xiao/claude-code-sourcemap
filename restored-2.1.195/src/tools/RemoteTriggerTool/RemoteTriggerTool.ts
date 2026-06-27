// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ASl
// matched 2.1.88 source: src/tools/RemoteTriggerTool/RemoteTriggerTool.ts
// class=modified  jaccard=0.3771  score=0.5277  fileCov=0.5692
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ASl] deps: Xr, Rc, Un, kt, c_, jc, CRo, ii, oo, fn, es, Ls, Jt, _Sl
((Ehf = ve(() =>
  H.strictObject({
    action: H.enum(["list", "get", "create", "update", "run"]),
    trigger_id: H.string()
      .regex(/^[\w-]+$/)
      .optional()
      .describe("Required for get, update, and run"),
    body: H.record(H.string(), H.unknown())
      .optional()
      .describe("Required for create and update; optional for run"),
  }),
)),
  (Ahf = ve(() =>
    H.object({
      status: H.number(),
      json: H.string(),
      summary: H.string().optional(),
    }),
  )),
  (bSl = ve(() => {
    let e = H.string().transform((t) => t || void 0);
    return H.object({
      id: H.coerce.string(),
      enabled: H.boolean(),
      next_run_at: H.string(),
      cron_expression: e,
      run_once_at: e,
    }).partial();
  })));
Hhf = ti({
  name: eze,
  searchHint: "manage scheduled cloud agent routines",
  maxResultSizeChars: 100000 /* 1e5 */,
  shouldDefer: true,
  get inputSchema() {
    return Ehf();
  },
  get outputSchema() {
    return Ahf();
  },
  isEnabled() {
    return (
      Jl() &&
      bo() &&
      !ut(process.env.CLAUDE_CODE_REMOTE) &&
      at("tengu_surreal_dali", false) &&
      Us("allow_remote_sessions")
    );
  },
  isConcurrencySafe() {
    return true;
  },
  isReadOnly(e) {
    return e.action === "list" || e.action === "get";
  },
  toAutoClassifierInput(e) {
    return `RemoteTrigger ${e.action}${e.trigger_id ? ` ${e.trigger_id}` : ""}`;
  },
  async description() {
    return mSl;
  },
  async prompt() {
    return gSl;
  },
  async call(e, t) {
    let { action: r, trigger_id: o, body: s } = e,
      i,
      a,
      l;
    switch (r) {
      case "list":
        ((a = "get"), (i = "/v1/code/triggers"));
        break;
      case "get":
        if (!o) throw Error("get requires trigger_id");
        ((a = "get"), (i = `/v1/code/triggers/${o}`));
        break;
      case "create":
        if (!s) throw Error("create requires body");
        ((a = "post"), (i = "/v1/code/triggers"), (l = s));
        break;
      case "update":
        if (!o) throw Error("update requires trigger_id");
        if (!s) throw Error("update requires body");
        ((a = "post"), (i = `/v1/code/triggers/${o}`), (l = s));
        break;
      case "run": {
        if (!o) throw Error("run requires trigger_id");
        ((a = "post"), (i = `/v1/code/triggers/${o}/run`));
        let { trigger_id: p, ...f } = s ?? {};
        l = f;
        break;
      }
    }
    let c = {
        auth: "teleport-org",
        headers: {
          "anthropic-beta": wRo,
        },
        timeout: 20000,
        signal: t.abortController.signal,
        validateStatus: () => true,
      },
      u = a === "get" ? await Os.get(i, c) : await Os.post(i, l, c);
    if (!u.ok)
      throw Error(
        u.reason === "no-auth"
          ? "Not authenticated with a claude.ai account. Run /login and try again."
          : `Remote triggers unavailable: ${u.reason}`,
      );
    let d;
    if (r === "create" || r === "update") {
      let p = u.status >= 200 && u.status < 300;
      if (
        (G("tengu_remote_trigger", {
          action: $e(r),
          has_run_once_at: typeof s?.run_once_at === "string" && s.run_once_at !== "",
          has_cron: typeof s?.cron_expression === "string" && s.cron_expression !== "",
          success: p,
        }),
        p)
      ) {
        let f = bSl().safeParse(u.data);
        d = f.success ? SSl(f.data) : void 0;
      }
    }
    return {
      data: {
        status: u.status,
        json: De(u.data),
        summary: d,
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, t) {
    let n = e.summary
      ? `HTTP ${e.status}
${e.json}

${e.summary}`
      : `HTTP ${e.status}
${e.json}`;
    return {
      tool_use_id: t,
      type: "tool_result",
      content: n,
    };
  },
  renderToolUseMessage: hSl,
  renderToolResultMessage: ySl,
});
function HSl() {
  return "";
}
function TSl(e) {
  return D$e.jsxs(U, {
    flexDirection: "row",
    marginTop: 1,
    children: [
      D$e.jsx(U, {
        minWidth: 2,
        children: D$e.jsx(w, {
          color: "text",
          children: gc,
        }),
      }),
      D$e.jsxs(U, {
        flexDirection: "column",
        children: [
          e.caption
            ? D$e.jsx(w, {
                children: e.caption,
              })
            : null,
          D$e.jsx(pzt, {
            attachments: e.attachments,
          }),
        ],
      }),
    ],
  });
}
var D$e;
