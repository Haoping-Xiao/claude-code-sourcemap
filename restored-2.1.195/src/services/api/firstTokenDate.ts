// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hgt
// matched 2.1.88 source: src/services/api/firstTokenDate.ts
// class=modified  jaccard=0.0726  score=0.0871  fileCov=0.3035
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hgt] deps: Hp, Ree, oo, zb, ft, Rc, er, je, Lx, wr, At, drt, Gx, vn, QO, NX, Ao, Ls, jG, qd, dn, kt, yje, Xzr, Yxe
Czp = ve(() =>
  dt.object({
    client_data: dt.record(dt.unknown()).nullish(),
    additional_model_options: dt
      .array(
        dt
          .object({
            model: dt.string(),
            name: dt.string(),
            description: dt.string(),
            disabled_reason: dt.string().nullish(),
          })
          .transform(({ model: e, name: t, description: n, disabled_reason: r }) => {
            let o = y9(dp(e)),
              s = o ? $h(e) : null,
              i = n;
            if (o && s && r == null) {
              let a = n ? (n.startsWith(s) ? n : `${s} \xB7 ${n}`) : s,
                l = koi(e);
              if (
                ((i = l && !bo() && !a.includes("per Mtok") ? `${a} \xB7 ${l}` : a),
                o === MIe && bo() && !eF() && jue())
              )
                i = `${i} \xB7 Requires usage credits`;
            }
            return {
              value: e,
              label: r != null ? `${t} (disabled)` : t,
              description: r ? (i ? `${i} \xB7 ${r}` : r) : i,
              ...(r != null && {
                disabled: true,
              }),
            };
          }),
      )
      .nullish(),
    additional_model_costs: dt
      .record(
        dt
          .object({
            input_tokens: dt.number(),
            output_tokens: dt.number(),
            prompt_cache_write_tokens: dt.number(),
            prompt_cache_write_1h_tokens: dt.number().nullish(),
            prompt_cache_read_tokens: dt.number(),
            web_search_requests: dt.number().nullish(),
          })
          .transform((e) => ({
            inputTokens: e.input_tokens,
            outputTokens: e.output_tokens,
            promptCacheWriteTokens: e.prompt_cache_write_tokens,
            ...(e.prompt_cache_write_1h_tokens != null && {
              promptCacheWrite1hTokens: e.prompt_cache_write_1h_tokens,
            }),
            promptCacheReadTokens: e.prompt_cache_read_tokens,
            webSearchRequests: e.web_search_requests ?? 0.01,
          })),
      )
      .nullish(),
    model_access: dt
      .array(
        dt
          .object({
            api_name: dt.string(),
            entitled: dt.boolean(),
            max_effort_level: dt.string().nullish(),
          })
          .transform(({ api_name: e, entitled: t, max_effort_level: n }) => ({
            apiName: e,
            entitled: t,
            ...(n != null && {
              maxEffortLevel: n,
            }),
          })),
      )
      .nullish(),
    oauth_account: dt
      .object({
        account_uuid: dt.string().nullish(),
        account_email: dt.string().nullish(),
        organization_uuid: dt.string().nullish(),
        organization_name: dt.string().nullish(),
        organization_type: dt.string().nullish(),
        organization_rate_limit_tier: dt.string().nullish(),
        user_rate_limit_tier: dt.string().nullish(),
        seat_tier: dt.string().nullish(),
      })
      .passthrough()
      .nullish(),
    auto_compact_windows: dt.record(dt.string(), dt.unknown()).nullish(),
  }),
);
aAo(() => xkn(sAo()));
xzp = ve(() =>
  dt.object({
    data: dt.array(
      dt.object({
        id: dt.string(),
        display_name: dt.string().nullish(),
        description: dt.string().nullish(),
      }),
    ),
  }),
);
async function fetchAndStoreClaudeCodeFirstTokenDate() {
  try {
    if (Dt().claudeCodeFirstTokenDate !== void 0) {
      xe("api_first_token_date_fetch");
      return;
    }
    let t = await Os.get("/api/organization/claude_code_first_token_date", {
      auth: "async",
      timeout: 10000 /* 1e4 */,
    });
    if (!t.ok) {
      if (t.reason === "no-auth")
        (T(`Failed to get auth headers for first-token-date fetch: ${t.detail}`, {
          level: "error",
        }),
          Le("api_first_token_date_fetch", "request_failed"));
      return;
    }
    let n = t.data?.first_token_date ?? null;
    if (n !== null) {
      let r = new Date(n).getTime();
      if (isNaN(r)) {
        (ke(Error(`Received invalid first_token_date from API: ${n}`)),
          Le("api_first_token_date_fetch", "invalid_date"));
        return;
      }
    }
    (gn((r) => ({
      ...r,
      claudeCodeFirstTokenDate: n,
    })),
      xe("api_first_token_date_fetch"));
  } catch (e) {
    if (R_(e))
      T(`Failed to fetch first token date: ${be(e)}`, {
        level: "error",
      });
    else ke(e);
    Le("api_first_token_date_fetch", "request_failed");
  }
}
