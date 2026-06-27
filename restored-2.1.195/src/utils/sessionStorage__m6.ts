// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F1o
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=modified (alt of src/utils/sessionStorage.ts)  jaccard=0.0068  score=0.0897  fileCov=0.0073
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: seedUtilization, loadPlanRateLimits, collectUsageData, MIN_BEHAVIOR_PCT
// [unwrapped __esm module F1o] deps: At, ys, jS
((pEt = require("fs/promises")),
  (BOe = require("path")),
  (jL = new TextEncoder()),
  (WLf = jL.encode('"type":"assistant"')),
  (qLf = jL.encode('"usage":{')),
  (VLf = jL.encode('"timestamp":"')),
  (zLf = jL.encode('"sessionId":"')),
  (KLf = jL.encode('"model":"')),
  (YLf = jL.encode('"requestId":"')),
  (Z$l = jL.encode('"id":"')),
  (XLf = jL.encode("msg_")),
  (JLf = jL.encode('"uuid":"')),
  (QLf = jL.encode('"input_tokens":')),
  (ZLf = jL.encode('"output_tokens":')),
  (eDf = jL.encode('"cache_creation_input_tokens":')),
  (tDf = jL.encode('"cache_read_input_tokens":')),
  (nDf = jL.encode('"isSidechain":true')),
  (rDf = jL.encode('"isSidechain": true')),
  (oDf = jL.encode('"attribution')),
  (sDf = jL.encode('"attributionAgent":"')),
  (iDf = jL.encode('"attributionSkill":"')),
  (aDf = jL.encode('"attributionPlugin":"')),
  (lDf = jL.encode('"attributionMcpServer":"')));
function seedUtilization() {
  let e = f5e();
  if (!e.five_hour && !e.seven_day) return null;
  let t = (n) =>
    n
      ? {
          utilization: n.utilization * 100,
          resets_at: new Date(n.resets_at * 1000).toISOString(),
        }
      : void 0;
  return {
    five_hour: t(e.five_hour),
    seven_day: t(e.seven_day),
  };
}
async function loadPlanRateLimits() {
  try {
    let e = await Wue();
    if (!e)
      return {
        status: "empty_response",
      };
    if (bo() && cI() && !hDf.some((n) => n in e)) {
      T("Usage fetch returned a fieldless body (in-band error envelope)", {
        level: "error",
      });
      let n = "error" in e ? e.error : void 0,
        r = typeof n === "object" && n !== null && "type" in n && n.type === "rate_limit_error",
        o = seedUtilization();
      if (o)
        return {
          status: "seeded",
          utilization: o,
          isRateLimited: r,
        };
      return {
        status: "unavailable",
        isRateLimited: r,
        responseBody: De(e),
      };
    }
    return {
      status: "ok",
      utilization: e,
    };
  } catch (e) {
    if (R_(e))
      T(`Failed to load usage data: ${be(e)}`, {
        level: "error",
      });
    else ke(e);
    let t = e,
      n = t.response?.status === 429,
      r = seedUtilization();
    if (r)
      return {
        status: "seeded",
        utilization: r,
        isRateLimited: n,
      };
    return {
      status: "unavailable",
      isRateLimited: n,
      responseBody: t.response?.data ? De(t.response.data) : void 0,
    };
  }
}
function oOl(e) {
  return {
    request_count: e.requestCount,
    session_count: e.sessionCount,
    behaviors: e.behaviors
      .filter((t) => e.totalCost > 0 && (t.cost / e.totalCost) * 100 >= MIN_BEHAVIOR_PCT)
      .map((t) => ({
        key: t.key,
        pct: Math.round((t.cost / e.totalCost) * 100),
        count: t.count,
      })),
    agents: e.agents,
    skills: e.skills,
    plugins: e.plugins,
    mcp_servers: e.mcpServers,
  };
}
async function collectUsageData({ includeBehaviors: e = true } = {}) {
  let t = bo(),
    n = t && cI(),
    [r, o] = await Promise.all([
      n
        ? loadPlanRateLimits().then((i) =>
            i.status === "ok" || i.status === "seeded" ? i.utilization : null,
          )
        : Promise.resolve(null),
      e && t
        ? $tr().then(
            (i) => ({
              day: oOl(i.day),
              week: oOl(i.week),
            }),
            (i) => (ke(i), null),
          )
        : Promise.resolve(null),
    ]),
    s;
  if (r !== null)
    try {
      s = nut(r.limits, lLe()).map((i) => ({
        display_name: i.title.replace(/^Current week \((.+)\)$/, "$1"),
        utilization: i.limit.utilization ?? null,
        resets_at:
          typeof i.limit.resets_at === "number"
            ? new Date(i.limit.resets_at * 1000).toISOString()
            : (i.limit.resets_at ?? null),
      }));
    } catch (i) {
      T(`model_scoped projection failed: ${be(i)}`, {
        level: "error",
      });
    }
  return {
    session: {
      total_cost_usd: jb(),
      total_api_duration_ms: WH(),
      total_duration_ms: Gie(),
      total_lines_added: vge(),
      total_lines_removed: wge(),
      model_usage: WC(),
    },
    subscription_type: Di(),
    rate_limits_available: n,
    rate_limits:
      r === null
        ? null
        : s !== void 0 && s.length > 0
          ? {
              ...r,
              model_scoped: s,
            }
          : r,
    behaviors: o,
  };
}
var hDf,
  MIN_BEHAVIOR_PCT = 10;
