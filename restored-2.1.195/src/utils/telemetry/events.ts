// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qPn
// matched 2.1.88 source: src/utils/telemetry/events.ts
// class=modified  jaccard=0.4556  score=0.5548  fileCov=0.7182
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var qPn = E(() => {
  Qi();
  ft();
  oo();
  er();
  Lx();
  wr();
  Q9();
  fn();
  peo();
  $Kd = {
    OTEL_METRICS_INCLUDE_SESSION_ID: !0,
    OTEL_METRICS_INCLUDE_VERSION: !1,
    OTEL_METRICS_INCLUDE_ACCOUNT_UUID: !0,
    OTEL_METRICS_INCLUDE_ENTRYPOINT: !1,
    OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES: !0,
  };
  OKd = Cn((e) => {
    if (!e) return {};
    let t = {};
    try {
      for (let n of e.split(",")) {
        let [r, o, ...s] = n.split("=");
        if (r === void 0 || o === void 0 || s.length > 0) continue;
        let i = r.trim(),
          a = o.trim().split(/^"|"$/).join("");
        if (i.length === 0 || i.length > DKi || !LKi(i))
          throw Error("invalid resource attribute key");
        if (a.length > DKi || !LKi(a)) throw Error("invalid resource attribute value");
        t[i] = decodeURIComponent(a);
      }
    } catch {
      return {};
    }
    return t;
  });
});
function UKd() {
  return ut(process.env.OTEL_LOG_USER_PROMPTS);
}
function iFt(e) {
  return UKd() ? e : "<REDACTED>";
}
function MKi() {
  return Oe.OTEL_LOG_ASSISTANT_RESPONSES ?? Oe.OTEL_LOG_USER_PROMPTS;
}
async function Jc(e, t = {}) {
  let n = {
      ...QGe(),
      "event.name": e,
      "event.timestamp": new Date().toISOString(),
      "event.sequence": BKd++,
    },
    r = FCt();
  if (r) n["prompt.id"] = r;
  let o = process.env.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (o) n["workspace.host_paths"] = o.split("|");
  for (let [l, c] of Object.entries(t)) if (c !== void 0) n[l] = c;
  let s = new Date(),
    i = {
      timestamp: s,
      observedTimestamp: s,
      body: `claude_code.${e}`,
      attributes: n,
    },
    a = z_r();
  if (a) {
    a.emit(i);
    return;
  }
  if (!K_r(i) && !PKi)
    ((PKi = !0),
      T(`[3P telemetry] Event dropped (no event logger initialized): ${e}`, {
        level: "warn",
      }));
}
function Ebe(e) {
  if (e.from === e.to) return;
  Jc("permission_mode_changed", {
    from_mode: e.from,
    to_mode: e.to,
    ...(e.trigger && {
      trigger: e.trigger,
    }),
  });
}
function J0e(e) {
  Jc("compaction", {
    trigger: e.trigger,
    success: String(e.success),
    duration_ms: String(Math.round(e.durationMs)),
    ...(e.preTokens !== void 0 && {
      pre_tokens: String(e.preTokens),
    }),
    ...(e.postTokens !== void 0 && {
      post_tokens: String(e.postTokens),
    }),
    ...(e.error && {
      error: e.error,
    }),
    ...(e.precomputeReuse && {
      precompute_reuse: e.precomputeReuse,
    }),
  });
}
function $Ki(e) {
  if (feo) return;
  feo = !0;
  try {
    let t = e.name !== "Error" ? e.name : e.constructor?.name || "Error";
    Jc("internal_error", {
      error_name: yUe(t) ?? "Error",
      error_code: xd(e),
    });
  } finally {
    feo = !1;
  }
}
function x1(e) {
  Jc("at_mention", {
    mention_type: e.mentionType,
    success: String(e.success),
  });
}
function ZGe(e) {
  let t = e.error !== void 0 ? $A(e.error) : null;
  Jc("auth", {
    action: e.action,
    success: String(e.success),
    auth_method: e.authMethod,
    ...(t && {
      error_category: t.kind,
      ...(t.status !== void 0 && {
        status_code: String(t.status),
      }),
    }),
  });
}
var BKd = 0,
  PKi = !1,
  feo = !1;
