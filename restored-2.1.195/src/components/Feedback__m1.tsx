// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mDl
// matched 2.1.88 source: src/components/Feedback.tsx
// class=modified (alt of src/components/Feedback.tsx)  jaccard=0.0949  score=0.189  fileCov=0.1602
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mDl = E(() => {
  ft();
  je();
  wr();
  ys();
  sa();
  y_();
  oOo();
  ((Ler = require("fs/promises")),
    (zSt = require("path")),
    (Ekf = {
      day: 86400000,
      week: 604800000,
    }));
});
function Zze() {
  if (Oe.DISABLE_FEEDBACK_COMMAND)
    return {
      kind: "disabled",
      reason: "/feedback has been disabled via the DISABLE_FEEDBACK_COMMAND environment variable",
    };
  if (Oe.DISABLE_BUG_COMMAND)
    return {
      kind: "disabled",
      reason: "/feedback has been disabled via the DISABLE_BUG_COMMAND environment variable",
    };
  if (Vi())
    return {
      kind: "disabled",
      reason:
        "/feedback has been disabled via the CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC environment variable",
    };
  if (!Us("allow_product_feedback"))
    return {
      kind: "disabled",
      reason: "/feedback has been disabled by your organization's policy",
    };
  switch (fr()) {
    case "bedrock":
      return {
        kind: "bundle",
        cause: "provider",
        label: "Amazon Bedrock",
      };
    case "vertex":
      return {
        kind: "bundle",
        cause: "provider",
        label: "Vertex AI",
      };
    case "foundry":
      return {
        kind: "bundle",
        cause: "provider",
        label: "Microsoft Foundry",
      };
    case "anthropicAws":
      return {
        kind: "bundle",
        cause: "provider",
        label: "Claude Platform on AWS",
      };
    case "mantle":
      return {
        kind: "bundle",
        cause: "provider",
        label: "Amazon Bedrock (Mantle)",
      };
    case "gateway":
      return {
        kind: "bundle",
        cause: "provider",
        label: "an API gateway",
      };
    case "firstParty":
  }
  if (K9().error)
    return {
      kind: "bundle",
      cause: "no_creds",
      label: "no Anthropic credentials",
    };
  return {
    kind: "post",
  };
}
function Mer() {
  let e = Zze();
  switch (e.kind) {
    case "post":
    case "share":
      return null;
    case "disabled":
      return e.reason;
    case "bundle":
      if (e.cause === "no_creds")
        return `/feedback requires Anthropic credentials (OAuth or API key). Report issues at ${gDl}`;
      return `/feedback is not available when using ${e.label}. Report issues at ${gDl}`;
  }
}
function dOo() {
  return PFe().map((e) => {
    let t = {
      ...e,
    };
    if (t && typeof t.error === "string") t.error = xc(t.error);
    return t;
  });
}
function Ikf(e, t, n) {
  if (!e) return [];
  let r = e.split(`
`),
    o = [],
    s = [],
    i = new Set(),
    a = -1;
  for (let p of r) {
    if (!p) continue;
    let f;
    try {
      f = Ft(p);
    } catch {
      continue;
    }
    if (typeof f !== "object" || f === null) continue;
    if (f.type === "system" && f.subtype === "compact_boundary") {
      a = o.length;
      continue;
    }
    if (f.type !== "user" && f.type !== "assistant") continue;
    if (
      typeof f.uuid !== "string" ||
      typeof f.timestamp !== "string" ||
      f.isSidechain === !0 ||
      !f.message
    )
      continue;
    if (n.has(f.uuid) || i.has(f.uuid)) continue;
    (i.add(f.uuid),
      o.push(
        f.type === "user"
          ? {
              type: "user",
              uuid: f.uuid,
              timestamp: f.timestamp,
              message: f.message,
              ...(f.isMeta === !0 && {
                isMeta: !0,
              }),
              ...(f.toolUseResult !== void 0 && {
                toolUseResult: f.toolUseResult,
              }),
              ...(f.isCompactSummary === !0 && {
                isCompactSummary: !0,
              }),
            }
          : {
              type: "assistant",
              uuid: f.uuid,
              timestamp: f.timestamp,
              message: f.message,
              requestId: f.requestId,
            },
      ),
      s.push(Buffer.byteLength(p)));
  }
  if (a <= 0) return [];
  let l = 0,
    c = a,
    u = new Set();
  while (c > 0) {
    let p = s[c - 1];
    if (p === void 0) break;
    if (p > t) {
      (u.add(c - 1), c--);
      continue;
    }
    if (l + p > t) break;
    ((l += p), c--);
  }
  let d = o.slice(c, a);
  return u.size === 0 ? d : d.filter((p, f) => !u.has(c + f));
}
function xkf(e, t) {
  let n;
  for (let a of e) {
    if (a.type === "user" && a.isCompactSummary === !0) continue;
    if (n === void 0 || a.timestamp < n) n = a.timestamp;
  }
  let r = [],
    o = [];
  for (let a of t)
    if (n === void 0 || a.timestamp < n) r.push(a);
    else o.push(a);
  if (o.length === 0) return [...r, ...e];
  let s = e.findLastIndex((a) => a.type === "user" && a.isCompactSummary === !0),
    i = s === -1 ? e.length : s;
  return [...r, ...e.slice(0, i), ...o, ...e.slice(i)];
}
async function kkf() {
  let e = Yge();
  if (!e) return null;
  try {
    await eAr();
    let { content: t, bytesRead: n, bytesTotal: r } = await vx(e, wkf),
      o = t;
    if (n < r)
      ((o = o.slice(
        o.indexOf(`
`) + 1,
      )),
        (o = `[debug log truncated to last ${n} of ${r} bytes]
${o}`));
    return xc(o);
  } catch {
    return null;
  }
}
async function _Dl({
  messages: e,
  description: t,
  surface: n,
  scope: r = "session",
  backgroundTasks: o = {},
  transcripts: s = {},
  surveyFeedbackSource: i,
  excludeThirdPartyTranscripts: a,
}) {
  let [l, c] = await Promise.all([
      fDl({
        messages: e,
        backgroundTasks: o,
        transcripts: s,
        diskSubagentTranscripts: fOo(),
        scope: r,
        maxRawTranscriptBytes: vkf,
        excludeThirdPartyTranscripts: a,
      }),
      kkf(),
    ]),
    u = Der(e) === -1 ? [] : Ikf(l.rawTranscriptJsonl, Ckf, new Set(e.map((g) => g.uuid))),
    d = lk(e),
    p = u.length === 0 ? d : xkf(d, u),
    f = {
      latestAssistantMessageId: l.latestAssistantMessageId,
      latestAssistantAPIMessageId: l.latestAssistantAPIMessageId,
      lastInterruptedAssistantAPIMessageId: eUe(),
      message_count: e.length,
      datetime: new Date().toISOString(),
      description: t,
      surface: n,
      scope: r,
      platform: l.platform,
      gitRepo: l.isGit,
      commitSha: l.commitSha,
      terminal: l.terminal,
      version: l.version,
      transcript: p,
      errors: dOo(),
      lastApiRequest: kbr(),
      ...(Object.keys(l.subagentTranscripts).length > 0 && {
        subagentTranscripts: l.subagentTranscripts,
      }),
      ...(l.rawTranscriptJsonl && {
        rawTranscriptJsonl: l.rawTranscriptJsonl,
      }),
      ...(l.recentSessionTranscripts && {
        recentSessionTranscripts: l.recentSessionTranscripts,
      }),
      ...(c && {
        debugLog: c,
      }),
      ...(i && {
        survey_appearance_id: i.appearanceId,
        survey_response: i.response,
        survey_type: i.surveyType,
      }),
    },
    m =
      l.thirdPartyExclusions.recentSessions +
      l.thirdPartyExclusions.subagents +
      (l.thirdPartyExclusions.rawTranscript ? 1 : 0);
  if (u.length > 0) {
    if (qSt(f, cOo, uOo).length > aOo)
      return (
        It("feedback_precompact", "over_payload_cap"),
        {
          payload: {
            ...f,
            transcript: d,
          },
          thirdPartyDroppedCount: m,
        }
      );
    xe("feedback_precompact");
  } else if (Der(e) !== -1 && !l.thirdPartyExclusions.rawTranscript)
    It("feedback_precompact", "empty_recovery");
  return {
    payload: f,
    thirdPartyDroppedCount: m,
  };
}
function sOo(e) {
  if (e instanceof Error) {
    let t = Error(xc(e.message));
    if (e.stack) t.stack = xc(e.stack);
    ke(t);
  } else {
    let t = xc(String(e));
    ke(Error(t));
  }
}
async function iOo(e, t) {
  if (Vi())
    return {
      success: !1,
    };
  let n = 0;
  try {
    let r = qSt(e, cOo, uOo);
    if (((n = r.length), n > aOo))
      return {
        success: !1,
        payloadTooLarge: !0,
        failureReason: "payload_too_large_precheck",
      };
    let o = await oL(() =>
      Os.post("/api/claude_cli_feedback", r, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000,
        signal: t,
      }),
    );
    if (!o.ok)
      switch (o.reason) {
        case "essential-traffic-only":
          return {
            success: !1,
          };
        case "data-residency":
          return {
            success: !1,
            failureReason: "data_residency",
          };
        case "no-auth":
          return {
            success: !1,
            failureReason: "auth_error",
          };
      }
    if (o.status === 200) {
      if (o.data?.feedback_id)
        return {
          success: !0,
          feedbackId: o.data.feedback_id,
        };
      return (
        sOo(Error("Failed to submit feedback: request did not return feedback_id")),
        {
          success: !1,
          failureReason: "missing_feedback_id",
        }
      );
    }
    let s = "Failed to submit feedback:" + o.status;
    if (o.status === 401 || o.status === 403 || o.status === 429) T(s);
    else sOo(Error(s));
    return {
      success: !1,
      failureReason: "http_error",
      statusCode: o.status,
    };
  } catch (r) {
    if (dM(r))
      return {
        success: !1,
      };
    if (r instanceof RangeError)
      return {
        success: !1,
        payloadTooLarge: !0,
        failureReason: "payload_too_large_range_error",
      };
    if (ab(r)) {
      if (r.response?.status === 413)
        return {
          success: !1,
          payloadTooLarge: !0,
          failureReason: "payload_too_large_413",
          statusCode: 413,
        };
      if (r.code === "ECONNABORTED" && n > aOo / 8)
        return {
          success: !1,
          payloadTooLarge: !0,
          failureReason: "payload_too_large_timeout",
        };
    }
    if (ab(r) && r.response?.status === 403) {
      let o = r.response.data;
      if (
        o?.error?.type === "permission_error" &&
        o?.error?.message?.includes("Custom data retention settings")
      )
        return (
          T("Cannot submit feedback because custom data retention settings are enabled"),
          {
            success: !1,
            isZdrOrg: !0,
            failureReason: "zdr_org",
            statusCode: 403,
          }
        );
    }
    if (R_(r)) T(xc(be(r)));
    else sOo(r);
    if (ab(r) && r.response)
      return {
        success: !1,
        failureReason: "http_error",
        statusCode: r.response.status,
      };
    return {
      success: !1,
      failureReason: ab(r) && r.code === "ECONNABORTED" ? "timeout" : "network_error",
    };
  }
}
async function KSt({
  messages: e,
  description: t,
  surface: n,
  scope: r = "session",
  backgroundTasks: o,
  transcripts: s,
  signal: i,
  surveyFeedbackSource: a,
}) {
  let { payload: l, thirdPartyDroppedCount: c } = await _Dl({
      messages: e,
      description: t,
      surface: n,
      scope: r,
      backgroundTasks: o,
      transcripts: s,
      surveyFeedbackSource: a,
      excludeThirdPartyTranscripts: !0,
    }),
    u = l.latestAssistantMessageId,
    d = await iOo(l, i),
    p = d,
    f = 0;
  if (!p.success && p.payloadTooLarge) {
    let {
      transcript: m,
      subagentTranscripts: g,
      lastApiRequest: h,
      recentSessionTranscripts: y,
      rawTranscriptJsonl: b,
      debugLog: _,
      ...S
    } = l;
    if (
      ((f = 1),
      (p = await iOo(
        {
          ...S,
          transcript: [],
          ...(b && {
            rawTranscriptJsonl: b,
          }),
          ...(_ && {
            debugLog: _,
          }),
        },
        i,
      )),
      !p.success && p.payloadTooLarge)
    )
      ((f = 2),
        (p = await iOo(
          {
            ...S,
            transcript: [],
          },
          i,
        )));
  }
  if (p.success) {
    (G("tengu_bug_report_submitted", {
      surface: $e(n),
      retried_after_too_large: String(!d.success && d.payloadTooLarge === !0),
      strip_level: String(f),
      third_party_transcripts_dropped: yB(c),
      feedback_id: p.feedbackId,
      last_assistant_message_id: Hr(u),
      last_assistant_api_message_id: Hr(l.latestAssistantAPIMessageId),
      last_interrupted_assistant_api_message_id: Hr(l.lastInterruptedAssistantAPIMessageId),
      ...(a && {
        survey_appearance_id: a.appearanceId,
        survey_response: $e(a.response),
        survey_type: $e(a.surveyType),
      }),
    }),
      Lst("tengu_bug_report_description", {
        feedback_id: p.feedbackId,
        descriptionLength: t.length,
      }));
    let m = !d.success && d.payloadTooLarge === !0;
    if (m) It("feedback_submit", "payload_stripped");
    else xe("feedback_submit");
    return {
      success: !0,
      feedbackId: p.feedbackId,
      retriedAfterTooLarge: m,
    };
  }
  if (p.failureReason)
    (Le("feedback_submit", p.failureReason),
      G("tengu_bug_report_failed", {
        surface: $e(n),
        reason: p.failureReason,
        status_code: String(p.statusCode ?? ""),
        first_attempt_too_large: String(!d.success && d.payloadTooLarge === !0),
      }));
  return {
    success: !1,
    isZdrOrg: p.isZdrOrg,
    failureReason: p.failureReason,
    statusCode: p.statusCode,
  };
}
function Rkf() {
  return lOo.join(tr(), "feedback-bundles");
}
async function pOo(e, t = "feedback.json") {
  let o = `cc-${new Date().toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 15)}-${hDl.randomBytes(3).toString("hex")}`,
    s = Rkf(),
    i = lOo.join(s, `${o}.zip`);
  try {
    await Per.mkdir(s, {
      recursive: !0,
      mode: 448,
    });
    let { Zip: a, ZipDeflate: l } = await Promise.resolve().then(() => (Y5e(), G4t)),
      c = yDl.createWriteStream(i, {
        mode: 384,
      });
    return (
      await new Promise((u, d) => {
        c.on("error", d);
        let p = new a((m, g, h) => {
            if (m) return (c.destroy(), d(m));
            if ((c.write(g), h)) c.end(() => u());
          }),
          f = new l(t);
        (p.add(f), f.push(e, !0), p.end());
      }),
      xe("feedback_bundle"),
      {
        success: !0,
        bundleId: o,
        zipPath: i,
      }
    );
  } catch (a) {
    return (
      await Per.rm(i, {
        force: !0,
      }).catch(() => {}),
      ke(a),
      Le("feedback_bundle", "write_failed"),
      {
        success: !1,
        error: be(a),
      }
    );
  }
}
async function bDl({
  messages: e,
  description: t,
  surface: n,
  scope: r = "session",
  backgroundTasks: o,
  transcripts: s,
  surveyFeedbackSource: i,
}) {
  let a;
  try {
    let { payload: l } = await _Dl({
        messages: e,
        description: t,
        surface: n,
        scope: r,
        backgroundTasks: o,
        transcripts: s,
        surveyFeedbackSource: i,
        excludeThirdPartyTranscripts: !1,
      }),
      c = Vge(l);
    a = qSt(c, cOo, uOo);
  } catch (l) {
    return (
      ke(l),
      Le("feedback_bundle", "write_failed"),
      {
        success: !1,
        error: be(l),
      }
    );
  }
  return pOo(a);
}
var hDl,
  yDl,
  Per,
  lOo,
  gDl = "https://github.com/anthropics/claude-code/issues",
  cOo,
  uOo,
  vkf = 4194304,
  wkf = 2097152,
  aOo = 8388608,
  Ckf = 2097152;
