// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gjn
// matched 2.1.88 source: src/services/awaySummary.ts
// class=modified  jaccard=0.0848  score=0.1334  fileCov=0.1888
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gjn] deps: ft, id, Un, Ld, je, fn
ARp = new Set(["remote", "remote_cowork", "remote_desktop", "remote_mobile"]);
BMa = {
  bg: ["state"],
  watched: ["state"],
  ccr: ["summary"],
  bridge: ["summary"],
  desktop: ["summary"],
  cli: ["summary"],
};
function Kpt() {
  let e = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
  if (ml(e)) return false;
  if (ut(e)) return true;
  if (!at("tengu_sedge_lantern", true)) return false;
  if (Ir()) return false;
  if (Dr()?.awaySummaryEnabled === false) return false;
  return true;
}
function CRp() {
  let e = Oe.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  if (e !== void 0) return e;
  return at("tengu_harbor_moth", false);
}
function WMa(e) {
  if (!e.onMetadataChanged) return;
  if (!mjn().has("ccr") || !CRp()) return;
  IRp(e);
}
function qMa() {
  (hjn?.abort(), (hjn = null));
}
async function IRp(e) {
  hjn?.abort();
  let t = new AbortController();
  hjn = t;
  let n = await KGt(t.signal);
  if (t.signal.aborted) return;
  if (n.kind !== "ok") {
    if (n.kind !== "no-turn") Le("ccr_recap_generate", n.kind);
    return;
  }
  if (e.getState() === "running") {
    T("[awaySummary] ccr recap dropped: new turn already running");
    return;
  }
  (e.notifyMetadataChanged({
    recap: n.text,
  }),
    xe("ccr_recap_generate"));
}
async function KGt(e) {
  let t = Tde();
  if (!t)
    return (
      T("[awaySummary] no CacheSafeParams saved, skipping"),
      {
        kind: "no-turn",
      }
    );
  let n = new AbortController();
  e.addEventListener("abort", () => n.abort(), {
    once: true,
  });
  try {
    let { messages: r } = await dk({
      promptMessages: [
        Rn({
          content: xRp,
        }),
      ],
      cacheSafeParams: t,
      overrides: {
        abortController: n,
      },
      canUseTool: async () => ({
        behavior: "deny",
        message: "Away summary cannot use tools",
        decisionReason: {
          type: "other",
          reason: "away_summary",
        },
      }),
      querySource: "away_summary",
      forkLabel: "away_summary",
      maxTurns: 1,
      skipCacheWrite: true,
      skipTranscript: true,
    });
    if (e.aborted)
      return {
        kind: "aborted",
      };
    let o = r.find((i) => i.type === "assistant" && i.isApiErrorMessage);
    if (o)
      return {
        kind: "api-error",
        text: GMa([o], true),
      };
    let s = GMa(r, false);
    return s
      ? {
          kind: "ok",
          text: s,
        }
      : {
          kind: "failed",
        };
  } catch (r) {
    if (e.aborted)
      return {
        kind: "aborted",
      };
    return (
      T(`[awaySummary] generation failed: ${r}`),
      {
        kind: "failed",
      }
    );
  }
}
function GMa(e, t) {
  return e
    .flatMap((n) =>
      n.type === "assistant" && (t || !n.isApiErrorMessage) ? n.message.content : [],
    )
    .filter((n) => n.type === "text")
    .map((n) => ("text" in n ? n.text : ""))
    .join("")
    .trim();
}
var hjn = null,
  xRp =
    "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.";
