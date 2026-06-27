// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tSe
// matched 2.1.88 source: src/tools/TaskStopTool/prompt.ts
// class=modified  jaccard=0.0537  score=0.0537  fileCov=1
// note: deminified; 15 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: resolveLoopFileFire, resolveLoopDefaultFire, resolveAutonomousLoopFire, resetAutonomousLoopDelivered, readLoopFile, logAutonomousLoopActivation, isLoopPersistentPreambleEnabled, isLoopFileSentinel, isLoopDefaultSentinel, isLoopDefaultPromptEnabled, isAutonomousLoopSentinel, getAutonomousLoopPreamble, LOOP_FILE_SENTINEL, LOOP_FILE_DYNAMIC_SENTINEL, AUTONOMOUS_LOOP_PREAMBLE
// [unwrapped __esm module tSe]
toa = `Schedule when to resume work in /loop dynamic mode \u2014 the user invoked /loop without an interval, asking you to self-pace iterations of a specific task.

Do NOT schedule a short-interval wakeup to poll for background work you started \u2014 when harness-tracked work finishes, you are re-invoked automatically, so polling is wasted. Instead schedule a long fallback (1200s+) so the loop survives if the work hangs or never notifies. The exception is external work the harness cannot track (a CI run, a deploy, a remote queue) \u2014 there, pick a delay matched to how fast that state actually changes.

Pass the same /loop prompt back via \`prompt\` each turn so the next firing repeats the task. For an autonomous /loop (no user prompt), pass the literal sentinel \`${"<<autonomous-loop-dynamic>>"}\` as \`prompt\` instead \u2014 the runtime resolves it back to the autonomous-loop instructions at fire time. (There is a similar \`${"<<autonomous-loop>>"}\` sentinel for CronCreate-based autonomous loops; do not confuse the two \u2014 ${"ScheduleWakeup"} always uses the \`-dynamic\` variant.) Omit the call to end the loop.

## Picking delaySeconds

The Anthropic prompt cache has a 5-minute TTL. Sleeping past 300 seconds means the next wake-up reads your full conversation context uncached \u2014 slower and more expensive. So the natural breakpoints:

- **Under 5 minutes (60s\u2013270s)**: cache stays warm. Right for actively polling external state the harness can't notify you about \u2014 a CI run, a deploy, a remote queue.
- **5 minutes to 1 hour (300s\u20133600s)**: pay the cache miss. Right when there's no point checking sooner \u2014 waiting on something that takes minutes to change, genuinely idle, or as the long fallback heartbeat when something else is the primary wake signal.

**Don't pick 300s.** It's the worst-of-both: you pay the cache miss without amortizing it. If you're tempted to "wait 5 minutes," either drop to 270s (stay in cache) or commit to 1200s+ (one cache miss buys a much longer wait). Don't think in round-number minutes \u2014 think in cache windows.

For idle ticks with no specific signal to watch, default to **1200s\u20131800s** (20\u201330 min). The loop checks back, you don't burn cache 12\xD7 per hour for nothing, and the user can always interrupt if they need you sooner.

Think about what you're actually waiting for, not just "how long should I sleep." If you're polling a CI run that takes ~8 minutes, sleeping 60s burns the cache 8 times before it finishes \u2014 sleep ~270s twice instead.

The runtime clamps to [60, 3600], so you don't need to clamp yourself.

## The reason field

One short sentence on what you chose and why. Goes to telemetry and is shown back to the user. "watching CI run" beats "waiting." The user reads this to understand what you're doing without having to predict your cadence in advance \u2014 make it specific.
`;
var yL = "TaskList";
var QD = "TaskStop",
  roa = `
- Stops a running background task by its ID
- Takes a task_id parameter identifying the task to stop
- Returns a success or failure status
- Use this tool when you need to terminate a long-running task
`;
function isLoopPersistentPreambleEnabled() {
  if (ut(process.env.CLAUDE_CODE_LOOP_PERSISTENT)) return !0;
  return at("tengu_kairos_loop_persistent", !1);
}
function getAutonomousLoopPreamble() {
  return isLoopPersistentPreambleEnabled() ? Jra : koo;
}
function logAutonomousLoopActivation() {
  G("tengu_kairos_loop_persistent_activated", {
    variant: isLoopPersistentPreambleEnabled(),
  });
}
function G2t(e = !1) {
  if (!$Re()) return "";
  let n =
    !e && isLoopPersistentPreambleEnabled()
      ? "newly blocked on a decision you won't make alone, you're ending the loop"
      : "newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";
  return `

Use ${B8} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${n}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`;
}
function ioa() {
  return `# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${yh} from this tick.${G2t()}`;
}
function Sop() {
  return `# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${yh} tool (not a recurring cron). To keep the loop alive, call ${yh} again at the end of this turn with \`prompt\` set to the literal sentinel \`${ORe}\` \u2014 otherwise the loop ends after this tick.${Ooo}${G2t()}`;
}
function isLoopDefaultPromptEnabled() {
  return at("tengu_kairos_loop_prompt", !1);
}
function isAutonomousLoopSentinel(e) {
  return e === Cct || e === ORe;
}
function resolveAutonomousLoopFire(e) {
  if (!isAutonomousLoopSentinel(e)) return null;
  if (!isLoopDefaultPromptEnabled()) return null;
  logAutonomousLoopActivation();
  let t = e === ORe ? Sop() : ioa();
  if (j2t || Ict !== null) return t;
  return (
    (j2t = !0),
    `${getAutonomousLoopPreamble()}

---

${t}`
  );
}
function Eop() {
  return `# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${yh} from this tick.${G2t(!0)}`;
}
function Aop() {
  return `# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${yh} tool (not a recurring cron). To keep the loop alive, call ${yh} again at the end of this turn with \`prompt\` set to the literal sentinel \`${LOOP_FILE_DYNAMIC_SENTINEL}\` \u2014 otherwise the loop ends after this tick.${Ooo}${G2t(!0)}`;
}
function Hop() {
  return `# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${yh} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${yh} again at the end of this turn with \`prompt\` set to the literal sentinel \`${LOOP_FILE_DYNAMIC_SENTINEL}\` \u2014 otherwise the loop ends after this tick.${Ooo}${G2t()}`;
}
function Top(e) {
  if (e.length <= UOn) return e;
  let t = e.lastIndexOf(
    `
`,
    UOn,
  );
  return `${e.slice(0, t > 0 ? t : UOn)}

> WARNING: loop.md was truncated to ${UOn} bytes. Keep the task list concise.`;
}
function readLoopFile() {
  let e = [Poo.join(rc(), ".claude", "loop.md"), Poo.join(tr(), "loop.md")];
  for (let t of e) {
    let n;
    try {
      n = soa.readFileSync(t, "utf-8");
    } catch (o) {
      if (Vo(o) || on(o) === "EISDIR") continue;
      throw o;
    }
    let r = n.trim();
    if (r.length === 0) continue;
    return {
      path: t,
      content: Top(r),
    };
  }
  return null;
}
function isLoopFileSentinel(e) {
  return e === LOOP_FILE_SENTINEL || e === LOOP_FILE_DYNAMIC_SENTINEL;
}
function resolveLoopFileFire(e) {
  if (!isLoopFileSentinel(e)) return null;
  if (!isLoopDefaultPromptEnabled()) return null;
  let t = e === LOOP_FILE_DYNAMIC_SENTINEL,
    n = readLoopFile();
  if (n) {
    let o = t ? Aop() : Eop();
    if (Ict === n.content) return o;
    return (
      (Ict = n.content),
      `# /loop tick \u2014 tasks from ${n.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${n.content}

---

${o}`
    );
  }
  logAutonomousLoopActivation();
  let r = t ? Hop() : ioa();
  if (Ict === ooa || j2t) return r;
  return (
    (Ict = ooa),
    (j2t = !0),
    `${getAutonomousLoopPreamble()}

---

${r}`
  );
}
function isLoopDefaultSentinel(e) {
  return isAutonomousLoopSentinel(e) || isLoopFileSentinel(e);
}
function resolveLoopDefaultFire(e) {
  return resolveAutonomousLoopFire(e) ?? resolveLoopFileFire(e) ?? e;
}
function resetAutonomousLoopDelivered() {
  ((j2t = !1), (Ict = null));
}
var soa,
  Poo,
  AUTONOMOUS_LOOP_PREAMBLE,
  Ooo,
  j2t = !1,
  Ict = null,
  ooa = "__autonomous_preamble__",
  LOOP_FILE_SENTINEL = "<<loop.md>>",
  LOOP_FILE_DYNAMIC_SENTINEL = "<<loop.md-dynamic>>",
  UOn = 25000;
