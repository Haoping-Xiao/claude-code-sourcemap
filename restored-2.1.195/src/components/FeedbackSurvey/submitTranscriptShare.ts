// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dYo
// matched 2.1.88 source: src/components/FeedbackSurvey/submitTranscriptShare.ts
// class=modified  jaccard=0.1218  score=0.1979  fileCov=0.2407
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
async function ifr(e, t, n) {
  if (Vi())
    return (
      Le("feedback_transcript_share", "essential_traffic_only"),
      {
        success: false,
        errorCode: "essential_traffic_only",
      }
    );
  if (!Us("allow_product_feedback"))
    return (
      Le("feedback_transcript_share", "policy_blocked"),
      {
        success: false,
        errorCode: "policy_blocked",
      }
    );
  let r = Zze().kind === "bundle" ? "bundle" : "post";
  try {
    T("Collecting transcript for sharing", {
      level: "info",
    });
    let o = lk(e),
      s = _5o(e),
      [i, a] = await Promise.all([blr(s), yet()]),
      l;
    try {
      let m = em(),
        { size: g } = await sfr.stat(m);
      if (g <= e5o) l = await sfr.readFile(m, "utf-8");
      else
        T(`Skipping raw transcript read: file too large (${g} bytes)`, {
          level: "warn",
        });
    } catch {}
    if (r === "post") {
      for (let [m, g] of Object.entries(i))
        if (Rer(g))
          (delete i[m], T(`subagent transcript ${m} withheld: contains_3p_transcript_markers`));
      if (l !== void 0 && VSt(l))
        ((l = void 0),
          T("rawTranscriptJsonl withheld from transcript share: contains_3p_transcript_markers"));
    }
    let c = l
        ?.split(
          `
`,
        )
        .map((m) => {
          if (!m) return m;
          try {
            return De(Vge(Ft(m)));
          } catch {
            return xc(m);
          }
        }).join(`
`),
      u = {
        ...Vge({
          trigger: t,
          version: {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION,
          platform: "linux",
          commitSha: a || null,
          transcript: o,
          subagentTranscripts: Object.keys(i).length > 0 ? i : void 0,
        }),
        rawTranscriptJsonl: c,
      },
      d = qSt(u, Ovm, Nvm, {
        extraOuterFields: {
          appearance_id: n,
        },
      });
    if (r === "bundle") {
      let m = await pOo(d, "transcript.json");
      if (m.success)
        return (
          xe("feedback_transcript_share"),
          {
            success: true,
            bundlePath: m.zipPath,
          }
        );
      return (
        Le("feedback_transcript_share", "bundle_write_failed"),
        {
          success: false,
          errorCode: "bundle_write_failed",
        }
      );
    }
    let p = await oL(() =>
      Os.post("/api/claude_code_shared_session_transcripts", d, {
        timeout: 30000,
        headers: {
          "Content-Type": "application/json",
          "User-Agent": m7(),
        },
      }),
    );
    if (!p.ok)
      switch (p.reason) {
        case "essential-traffic-only":
          return (
            Le("feedback_transcript_share", "essential_traffic_only"),
            {
              success: false,
              errorCode: "essential_traffic_only",
            }
          );
        case "data-residency":
          return (
            Le("feedback_transcript_share", "data_residency"),
            {
              success: false,
              errorCode: "data_residency",
            }
          );
        case "no-auth":
          return (
            Le("feedback_transcript_share", "auth_unavailable"),
            {
              success: false,
              errorCode: "auth_unavailable",
            }
          );
      }
    if (p.status === 200 || p.status === 201)
      return (
        T("Transcript shared successfully", {
          level: "info",
        }),
        xe("feedback_transcript_share"),
        {
          success: true,
          transcriptId: p.data?.transcript_id,
        }
      );
    let f = `http_${p.status}`;
    return (
      Le("feedback_transcript_share", f),
      {
        success: false,
        errorCode: f,
      }
    );
  } catch (o) {
    T(be(o), {
      level: "error",
    });
    let s = Bvm(o);
    return (
      Le("feedback_transcript_share", s),
      {
        success: false,
        errorCode: s,
      }
    );
  }
}
function Bvm(e) {
  if (e instanceof RangeError) return "payload_range_error";
  let { kind: t, status: n } = $A(e);
  switch (t) {
    case "timeout":
    case "network":
      return t;
    case "auth":
    case "http":
      if (n !== void 0) return `http_${n}`;
      return e.code?.toLowerCase() ?? "no_response";
    case "other":
      return "exception";
  }
}
var sfr, Ovm, Nvm;
