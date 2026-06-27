// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KWc
// matched 2.1.88 source: src/tools/AgentTool/agentToolUtils.ts
// class=new  jaccard=0.0471  score=0.1819  fileCov=0.0597
// note: nearest: src/tools/AgentTool/agentToolUtils.ts (0.0471); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module KWc] deps: zod/v4/classic/schemas.js, utils/errors.ts, google-auth-library/build/src/auth/oauth2client.js
yOm = /\r?\n\r?\n/;
SZo = ve(() => dt.object({
  input_tokens: dt.number().optional(),
  output_tokens: dt.number().optional(),
  cache_read_input_tokens: dt.number().optional(),
  cache_creation_input_tokens: dt.number().optional(),
  speed: dt.string().nullable().optional(),
  server_tool_use: dt.object({
    web_search_requests: dt.number().optional()
  }).passthrough().optional()
}).passthrough()), AOm = ve(() => dt.object({
  type: dt.string().optional(),
  usage: SZo().optional(),
  message: dt.object({
    usage: SZo().optional()
  }).passthrough().optional(),
  delta: dt.object({
    text: dt.string().optional(),
    partial_json: dt.string().optional(),
    thinking: dt.string().optional()
  }).passthrough().optional()
}).passthrough()), HOm = ve(() => dt.object({
  usage: SZo().optional()
}).passthrough());
function YWc(e, t) {
  if (!t.admin) return null;
  let n = t.admin,
    r = new Set(),
    o = new Map(),
    s = 900000;
  async function i(d, p) {
    l(d);
    let f;
    try {
      f = await vc(e.begin(async m => (await m`SET LOCAL statement_timeout = '2s'`, kWc(m, d.sub, d.groups ?? [], n.group_limit_mode))), TOm + 500, "spend precheck timed out");
    } catch (m) {
      return gu("warn", `spend check failed: ${be(m)}`), t.enforcement.fail_closed_on_error ? a(d.sub, p, "store_error") : null;
    }
    if (!f) return null;
    return a(d.sub, p, "over_limit", {
      cap_cents: f.cap_cents,
      source: f.scope_type,
      period: f.period
    });
  }
  function a(d, p, f, m) {
    oge("spend.blocked", {
      request_id: p,
      sub: d,
      cause: f,
      ...m
    });
    let g = f === "store_error" ? "spend limit unavailable" : "spend limit reached";
    return Response.json({
      type: "error",
      error: {
        type: "billing_error",
        message: n.blocked_message ? `${g} \u2014 ${n.blocked_message}` : g
      }
    }, {
      status: 429,
      headers: {
        "x-should-retry": "false"
      }
    });
  }
  function l(d) {
    let p = `${d.sub}\x00${d.email ?? ""}\x00${d.name ?? ""}\x00${(d.groups ?? []).join(",")}`,
      f = o.get(p) ?? 0;
    if (Date.now() - f >= s) {
      if (o.size >= 10000 /* 1e4 */) o.clear();
      o.set(p, Date.now()), LWc(e, d).catch(m => gu("warn", `identity record failed: ${be(m)}`));
    }
  }
  function c(d, p, f, m, g) {
    if (d.status < 400 && f !== null) u(f);
    return qWc(d, h => FWc(f, h), h => {
      RWc(e, p.sub, h).catch(y => gu("warn", `spend record failed: ${be(y)}`));
    }, m, g);
  }
  function u(d) {
    if (crn(d) || r.has(d) || r.size >= 1000) return;
    r.add(d), gu("warn", `spend meter has no exact rates for model '${d}' \u2014 metering at the unknown-model default tier`);
  }
  return {
    precheck: i,
    meter: c
  };
}
function EZo(e, t) {
  return t !== void 0 && t.admin_groups.length > 0 && (e ?? []).some(n => t.admin_groups.includes(n));
}
var TOm = 2000;