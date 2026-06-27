// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kwc
// matched 2.1.88 source: src/skills/bundled/loop.ts
// class=modified  jaccard=0.0788  score=0.087  fileCov=0.4558
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: registerLoopSkill
function Lwc() {
  return $Re()
    ? ` Before you stop, send a one-line outcome via ${B8} \u2014 the user may be away and waiting to hear it's done. Skip this if you're stopping because the user just told you to; they're already here.`
    : "";
}
function KEm(e) {
  let t = e[1],
    n = e[2].toLowerCase();
  if (n.startsWith("s")) return `${t}s`;
  if (n.startsWith("h")) return `${t}h`;
  if (n.startsWith("d")) return `${t}d`;
  return `${t}m`;
}
function Dwc() {
  if (
    !ut(process.env.CLAUDE_CODE_REMOTE) &&
    !Js() &&
    at("tengu_surreal_dali", false) &&
    Us("allow_remote_sessions") &&
    MA().length === 0
  )
    return `
## Offer cloud first

Before any scheduling step, check whether EITHER is true:
- the parsed interval (rule 1 or 2) is **\u226560 minutes**, or
- regardless of which rule matched, the original input uses daily phrasing ("every morning", "daily", "every day", "each night", "every weekday")

If either is true, call ${mf} first:
- \`question\`: "This loop stops when you close this session. Set it up as a cloud schedule instead so it keeps running?"
- \`header\`: "Schedule"
- \`options\`: \`[{label: "Cloud schedule (recommended)", description: "Runs in Anthropic's cloud even after you close this session"}, {label: "This session only", description: "Runs in this terminal until you exit"}]\`

If they pick **Cloud schedule**: do NOT call ${DI}. Invoke the \`schedule\` skill directly via the ${nE} tool with \`args\` set to their original input verbatim (e.g. \`${nE}({skill: "schedule", args: "every morning tell me a joke"})\`), then follow that skill's instructions to completion. Do NOT tell the user to run /schedule themselves. **Then stop \u2014 do not continue to any section below** (no ${DI}, no ${yh}, no "execute the prompt now").
If they pick **This session only**:
- If the trigger was a parsed \u226560-minute interval (rule 1 or 2): continue below with that interval.
- If the trigger was daily phrasing only (rule 3, no parsed interval): do NOT call ${DI}. Explain that a daily-cadence loop won't fire before this session closes, so there's nothing useful to schedule locally \u2014 suggest they either pick Cloud schedule, or re-run \`/loop\` with an explicit shorter interval (e.g. \`/loop 1h <prompt>\`) if they want a session loop. Then stop.
If neither trigger condition was met: continue below.
`;
  return "";
}
function Pwc() {
  if (
    !ut(process.env.CLAUDE_CODE_REMOTE) &&
    !Js() &&
    at("tengu_surreal_dali", false) &&
    Us("allow_remote_sessions")
  ) {
    if (MA().length > 0)
      return ` End the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}`;
    return ` Only if you did NOT show the cloud-offer ${mf} above (i.e., neither trigger condition applied), end the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}. If the user already answered that question, omit this line.`;
  }
  return "";
}
function JEm() {
  return `1. Call ${DI} with: \`cron\` (the expression above), \`prompt\` (the parsed prompt verbatim), \`recurring: true\`.
2. Briefly confirm: what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${ire} days, and that the user can cancel sooner with ${m4} (include the job ID).${Pwc()}
3. **Then immediately execute the parsed prompt now** \u2014 don't wait for the first cron fire. If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.`;
}
function QEm(e) {
  return `# /loop \u2014 schedule a recurring prompt

Parse the input below into \`[interval] <prompt\u2026>\` and schedule it with ${DI}.

## Parsing (in priority order)

1. **Leading token**: if the first whitespace-delimited token matches \`^\\d+[smhd]$\` (e.g. \`5m\`, \`2h\`), that's the interval; the rest is the prompt.
2. **Trailing "every" clause**: otherwise, if the input ends with \`every <N><unit>\` or \`every <N> <unit-word>\` (e.g. \`every 20m\`, \`every 5 minutes\`, \`every 2 hours\`), extract that as the interval and strip it from the prompt. Only match when what follows "every" is a time expression \u2014 \`check every PR\` has no interval.
3. **Default**: otherwise, interval is \`${ZTt}\` and the entire input is the prompt.

If the resulting prompt is empty, show usage \`/loop [interval] <prompt>\` and stop \u2014 do not call ${DI}.

Examples:
- \`5m /babysit-prs\` \u2192 interval \`5m\`, prompt \`/babysit-prs\` (rule 1)
- \`check the deploy every 20m\` \u2192 interval \`20m\`, prompt \`check the deploy\` (rule 2)
- \`run tests every 5 minutes\` \u2192 interval \`5m\`, prompt \`run tests\` (rule 2)
- \`check the deploy\` \u2192 interval \`${ZTt}\`, prompt \`check the deploy\` (rule 3)
- \`check every PR\` \u2192 interval \`${ZTt}\`, prompt \`check every PR\` (rule 3 \u2014 "every" not followed by time)
- \`5m\` \u2192 empty prompt \u2192 show usage
${Dwc()}
## Interval \u2192 cron

Supported suffixes: \`s\` (seconds, rounded up to nearest minute, min 1), \`m\` (minutes), \`h\` (hours), \`d\` (days). Convert:

| Interval pattern      | Cron expression     | Notes                                    |
|-----------------------|---------------------|------------------------------------------|
| \`Nm\` where N \u2264 59   | \`*/N * * * *\`     | every N minutes                          |
| \`Nm\` where N \u2265 60   | \`0 */H * * *\`     | round to hours (H = N/60, must divide 24)|
| \`Nh\` where N \u2264 23   | \`0 */N * * *\`     | every N hours                            |
| \`Nd\`                | \`0 0 */N * *\`     | every N days at midnight local           |
| \`Ns\`                | treat as \`ceil(N/60)m\` | cron minimum granularity is 1 minute  |

**If the interval doesn't cleanly divide its unit** (e.g. \`7m\` \u2192 \`*/7 * * * *\` gives uneven gaps at :56\u2192:00; \`90m\` \u2192 1.5h which cron can't express), pick the nearest clean interval and tell the user what you rounded to before scheduling.

## Action

1. Call ${DI} with:
   - \`cron\`: the expression from the table above
   - \`prompt\`: the parsed prompt from above, verbatim (slash commands are passed through unchanged)
   - \`recurring\`: \`true\`
2. Briefly confirm: what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${ire} days, and that they can cancel sooner with ${m4} (include the job ID).${Pwc()}
3. **Then immediately execute the parsed prompt now** \u2014 don't wait for the first cron fire. If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.

## Input

${e}`;
}
function ZEm() {
  return `Usage: /loop [interval] <prompt>

Run a prompt or slash command on a recurring interval \u2014 or with no interval, let the model self-pace based on the task.

Intervals: Ns, Nm, Nh, Nd (e.g. 5m, 30m, 2h, 1d). Minimum granularity is 1 minute.
If no interval is specified, the model picks a delay between iterations based on what it's doing.

Examples:
  /loop 5m /babysit-prs
  /loop 30m check the deploy
  /loop 1h /standup 1
  /loop check the deploy          (dynamic \u2014 model picks delays)
  /loop check the deploy every 20m`;
}
function eAm(e) {
  let t = `The user wants you to self-pace. Decide what makes the next iteration worth running \u2014 a passage of time, or an observable event.

1. **Run the parsed prompt now.** If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.
2. **If the next run is gated on an event** (CI finishing, a log line matching, a file changing, a PR comment) and no ${yT} is already running for it: arm one now with \`persistent: true\`. Its events arrive as \`<task-notification>\` messages and wake this loop immediately \u2014 you do not wait for the ${yh} deadline. Arm once; on later iterations call ${yL} first and skip this step if a monitor is already running.
3. **Briefly confirm**: that you're self-pacing, whether a ${yT} is the primary wake signal, that you ran the task now, and what fallback delay you're about to pick. Write this as text *before* calling ${yh} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, call ${yh}** with:
   - \`delaySeconds\`: with a ${yT} armed this is the **fallback heartbeat** \u2014 how long to wait if no event fires (lean 1200\u20131800s; idle ticks past the 5-minute cache window are pure overhead). Without a ${yT} this is the cadence \u2014 pick based on what you observed. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the full original /loop input verbatim, prefixed with \`/loop \` so the next firing re-enters this skill and continues the loop. For example, if the user typed \`/loop check the deploy\`, pass \`/loop check the deploy\` as the prompt.
5. **If you were woken by a \`<task-notification>\`** rather than this prompt: handle the event in the context of the loop task, then call ${yh} again with the same \`prompt\` and the same 1200\u20131800s \`delaySeconds\` from step 4 \u2014 the ${yT} remains the wake signal; this only resets the safety net.
6. **To stop the loop**, omit the ${yh} call and ${QD} any ${yT} you armed (use ${yL} to find the task ID if it is no longer in context).${Lwc()}`;
  return `# /loop \u2014 schedule a recurring or self-paced prompt

Parse the input below into \`[interval] <prompt\u2026>\` and schedule it.

## Parsing (in priority order)

1. **Leading token**: if the first whitespace-delimited token matches \`^\\d+[smhd]$\` (e.g. \`5m\`, \`2h\`), that's the interval; the rest is the prompt.
2. **Trailing "every" clause**: otherwise, if the input ends with \`every <N><unit>\` or \`every <N> <unit-word>\` (e.g. \`every 20m\`, \`every 5 minutes\`, \`every 2 hours\`), extract that as the interval and strip it from the prompt. Only match when what follows "every" is a time expression \u2014 \`check every PR\` has no interval.
3. **No interval**: otherwise, the entire input is the prompt and you'll self-pace dynamically (see "Dynamic mode" below).

If the resulting prompt is empty, show usage \`/loop [interval] <prompt>\` and stop.

Examples:
- \`5m /babysit-prs\` \u2192 interval \`5m\`, prompt \`/babysit-prs\` (rule 1)
- \`check the deploy every 20m\` \u2192 interval \`20m\`, prompt \`check the deploy\` (rule 2)
- \`run tests every 5 minutes\` \u2192 interval \`5m\`, prompt \`run tests\` (rule 2)
- \`check the deploy\` \u2192 no interval \u2192 dynamic mode, prompt \`check the deploy\` (rule 3)
- \`check every PR\` \u2192 no interval \u2192 dynamic mode, prompt \`check every PR\` (rule 3 \u2014 "every" not followed by time)
- \`5m\` \u2192 empty prompt \u2192 show usage
${Dwc()}
## Fixed-interval mode (rules 1 and 2)

Convert the interval to a cron expression:

${XEm}

Then:
${JEm()}

## Dynamic mode (rule 3 \u2014 no interval)

${t}

## Input

${e}`;
}
function registerLoopSkill() {
  Nd({
    name: "loop",
    menuDescription: "Repeat a prompt or command on an interval (e.g. /loop 5m /foo)",
    aliases: ["proactive"],
    get description() {
      if (nSe())
        return "Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo). Omit the interval to let the model self-pace.";
      return "Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo, defaults to 10m)";
    },
    whenToUse:
      'When the user wants to set up a recurring task, poll for status, or run something repeatedly on an interval (e.g. "check the deploy every 5 minutes", "keep running /babysit-prs"). Do NOT invoke for one-off tasks.',
    get argumentHint() {
      if (R7e.isLoopDefaultPromptEnabled()) return "[interval] [prompt]";
      return "[interval] <prompt>";
    },
    userInvocable: true,
    isEnabled: a$,
    async getPromptForCommand(e, t) {
      let n = e.trim();
      {
        let r = n.match(zEm),
          o = !n,
          s = VEm.test(n) || r !== null;
        if (o || s) {
          if (R7e.isLoopDefaultPromptEnabled()) {
            let i = r ? KEm(r) : n || ZTt,
              a = (c, u) => {
                let d = c
                    ? `## Loop tasks (from ${c.path})`
                    : "## Autonomous-loop instructions (for the immediate execution and every fire)",
                  p;
                if (c) p = c.content;
                else (R7e.logAutonomousLoopActivation(), (p = R7e.getAutonomousLoopPreamble()));
                let f = c ? "the loop.md tasks" : "the autonomous check";
                if (u) {
                  let b = c ? R7e.LOOP_FILE_DYNAMIC_SENTINEL : ORe,
                    _ = c
                      ? `# /loop \u2014 loop.md tasks with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval and has a loop-tasks file at \`${c.path}\`. Run those tasks now, then self-pace the next iteration via ${yh} \u2014 no cron.`
                      : `# /loop \u2014 autonomous default with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval. Run the autonomous check now, then self-pace the next iteration via ${yh} \u2014 no cron.`,
                    S = c
                      ? `that you're running tasks from \`${c.path}\` in dynamic-pacing mode, that you ran the first tick now`
                      : "that this is the autonomous default in dynamic-pacing mode, that you ran the check now",
                    A = `1. **Run ${f} now**, following the instructions inlined below.
2. **If the next tick is gated on an event** (CI finishing, a PR comment, a log line) and no ${yT} is already running for it: arm one now with \`persistent: true\`. Its events wake this loop immediately \u2014 you do not wait for the ${yh} deadline. Arm once; on later ticks call ${yL} first and skip if a monitor is already running.
3. **Briefly confirm**: ${S}, whether a ${yT} is the primary wake signal, and what fallback delay you're about to pick. Write this as text *before* calling ${yh} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, call ${yh}** with:
   - \`delaySeconds\`: with a ${yT} armed this is the fallback heartbeat (lean 1200\u20131800s). Without one, pick based on what you observed this turn \u2014 quiet branch? wait longer. Lots in flight? wait shorter. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the literal string \`${b}\` \u2014 the dynamic-mode sentinel expands at fire time to the full instructions (first fire / first fire post-compact / loop.md edited) or a dynamic-pacing-specific short reminder (subsequent fires). Do not pass the full instructions; that is handled automatically.
5. **If woken by a \`<task-notification>\`** rather than this prompt: handle the event, then call ${yh} again with \`${b}\` and the same 1200\u20131800s \`delaySeconds\` \u2014 the ${yT} remains the wake signal; this only resets the safety net.
6. **To stop the loop**, omit the ${yh} call and ${QD} any ${yT} you armed (use ${yL} to find the task ID if it is no longer in context).${Lwc()}`;
                  return `${_}

## Action

${A}

${d}

${p}`;
                }
                let m = c ? R7e.LOOP_FILE_SENTINEL : Cct,
                  g = c
                    ? `# /loop \u2014 schedule loop.md tasks

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${i}\`) and has a loop-tasks file at \`${c.path}\`. Schedule a recurring cron that runs those tasks each tick, then run the first tick immediately.`
                    : `# /loop \u2014 schedule the autonomous default

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${i}\`). Schedule the autonomous-loop default and then run the first autonomous check immediately.`,
                  h = c
                    ? "it expands at fire time to the full loop.md contents on first delivery (and whenever loop.md has been edited since last fire), and to a short reminder on subsequent unchanged fires. The long instructions stay in the cached message-prefix."
                    : "it expands at fire time to the full autonomous-loop instructions on first delivery, and to a short reminder on subsequent fires (the long instructions stay in the cached message-prefix).",
                  y = c
                    ? `what's scheduled, the cron expression, the human-readable cadence, that it's running tasks from \`${c.path}\`, that recurring tasks auto-expire after ${ire} days, and that the user can cancel sooner with ${m4} (include the job ID).`
                    : `what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${ire} days, and that they can cancel sooner with ${m4} (include the job ID). Mention this is the autonomous default and that the autonomous-loop instructions are baked in.`;
                return `${g}

## Action

1. Convert \`${i}\` to a 5-field cron expression. Supported suffixes: \`s\` \u2192 ceil to nearest minute, \`m\` (minutes), \`h\` (hours), \`d\` (days). Examples: \`5m\` \u2192 \`*/5 * * * *\`, \`1h\` \u2192 \`0 * * * *\`, \`1d\` \u2192 \`0 0 * * *\`. If the interval doesn't cleanly divide its unit, round to the nearest clean interval and tell the user what you rounded to.
2. Call ${DI} with:
   - \`cron\`: the expression from step 1
   - \`prompt\`: the literal string \`${m}\` \u2014 ${h}
   - \`recurring\`: \`true\`
3. Briefly confirm: ${y}
4. **Then immediately run ${f} now**, following the instructions inlined below. Don't wait for the first cron fire.

${d}

${p}`;
              },
              l = R7e.readLoopFile();
            if (o && nSe())
              return [
                {
                  type: "text",
                  text: a(l, true),
                },
              ];
            return [
              {
                type: "text",
                text: a(l, false),
              },
            ];
          }
        }
      }
      if (nSe()) {
        if (!n)
          return [
            {
              type: "text",
              text: ZEm(),
            },
          ];
        return [
          {
            type: "text",
            text: eAm(n),
          },
        ];
      }
      if (!n)
        return [
          {
            type: "text",
            text: YEm,
          },
        ];
      return [
        {
          type: "text",
          text: QEm(n),
        },
      ];
    },
  });
}
var R7e,
  ZTt = "10m",
  VEm,
  zEm,
  YEm,
  XEm =
    "| Interval pattern      | Cron expression     | Notes                                    |\n|-----------------------|---------------------|------------------------------------------|\n| `Nm` where N \u2264 59   | `*/N * * * *`     | every N minutes                          |\n| `Nm` where N \u2265 60   | `0 */H * * *`     | round to hours (H = N/60, must divide 24)|\n| `Nh` where N \u2264 23   | `0 */N * * *`     | every N hours                            |\n| `Nd`                | `0 0 */N * *`     | every N days at midnight local           |\n| `Ns`                | treat as `ceil(N/60)m` | cron minimum granularity is 1 minute  |\n\n**If the interval doesn't cleanly divide its unit** (e.g. `7m` \u2192 `*/7 * * * *` gives uneven gaps at :56\u2192:00; `90m` \u2192 1.5h which cron can't express), pick the nearest clean interval and tell the user what you rounded to before scheduling.";
