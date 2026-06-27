// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C_l
// matched 2.1.88 source: src/utils/task/outputFormatting.ts
// class=modified  jaccard=0.1209  score=0.1414  fileCov=0.4553
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module C_l] deps: Xr, rSe, ii, Gpt, tSe
((bgf = ve(() =>
  H.strictObject({
    delaySeconds: hF(H.number()).describe(
      "Seconds from now to wake up. Clamped to [60, 3600] by the runtime.",
    ),
    reason: H.string().describe(
      "One short sentence explaining the chosen delay. Goes to telemetry and is shown to the user. Be specific.",
    ),
    prompt: H.string().describe(
      `The /loop input to fire on wake-up. Pass the same /loop input verbatim each turn so the next firing re-enters the skill and continues the loop. For autonomous /loop (no user prompt), pass the literal sentinel \`${ORe}\` instead (the dynamic-pacing variant, not the CronCreate-mode \`${Cct}\`).`,
    ),
  }),
)),
  (Sgf = ve(() =>
    H.object({
      scheduledFor: H.number().describe("Epoch ms timestamp when the next wakeup will fire"),
      clampedDelaySeconds: H.number().describe(
        "Actual delay used after clamping to runtime bounds",
      ),
      wasClamped: H.boolean().describe("True if the requested delaySeconds was outside [60, 3600]"),
    }),
  )),
  (w_l = ti({
    name: yh,
    searchHint:
      "self-pace next iteration: pick a delay before resuming work or running the next /loop tick",
    maxResultSizeChars: 1000,
    async description() {
      return noa;
    },
    async prompt() {
      return toa;
    },
    get inputSchema() {
      return bgf();
    },
    get outputSchema() {
      return Sgf();
    },
    userFacingName() {
      return "";
    },
    shouldDefer: true,
    async checkPermissions(e) {
      return {
        behavior: "allow",
        updatedInput: e,
      };
    },
    renderToolUseMessage() {
      return null;
    },
    async call({ delaySeconds: e, reason: t, prompt: n }) {
      if (!nSe())
        return (
          xct("gate_off"),
          {
            data: {
              scheduledFor: 0,
              clampedDelaySeconds: 0,
              wasClamped: false,
            },
          }
        );
      let r = poa(e, n, t);
      if (r === null)
        return {
          data: {
            scheduledFor: 0,
            clampedDelaySeconds: 0,
            wasClamped: false,
          },
        };
      return {
        data: {
          scheduledFor: r.scheduledFor,
          clampedDelaySeconds: r.clampedDelaySeconds,
          wasClamped: r.wasClamped,
        },
      };
    },
    mapToolResultToToolResultBlockParam(
      { scheduledFor: e, clampedDelaySeconds: t, wasClamped: n },
      r,
    ) {
      if (e === 0)
        return {
          tool_use_id: r,
          type: "tool_result",
          content:
            "Wakeup not scheduled. Either the /loop dynamic runtime gate is off or the loop reached its maximum duration \u2014 the loop has ended; do not re-issue.",
        };
      let o = new Date(e).toTimeString().slice(0, 8),
        s = Math.max(0, Math.round((e - Date.now()) / 1000)),
        i = n ? ` (clamped to ${t}s from your requested value)` : "";
      return {
        tool_use_id: r,
        type: "tool_result",
        content: `Next wakeup scheduled for ${o} (in ${s}s)${i}. Nothing more to do this turn \u2014 the harness re-invokes you when the wakeup fires or a task-notification arrives.`,
      };
    },
  })));
function Egf() {
  return Fue("TASK_MAX_OUTPUT_LENGTH", process.env.TASK_MAX_OUTPUT_LENGTH, dRo, uRo).effective;
}
function I_l(e, t) {
  let n = Egf();
  if (e.length <= n)
    return {
      content: e,
      wasTruncated: false,
    };
  let o = `[Truncated. Full output: ${jm(t)}]

`,
    s = n - o.length,
    i = e.slice(-s);
  return {
    content: o + i,
    wasTruncated: true,
  };
}
var uRo = 160000,
  dRo = 32000;
