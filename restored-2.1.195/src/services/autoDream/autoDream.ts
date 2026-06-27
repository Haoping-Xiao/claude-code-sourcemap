// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FIl
// matched 2.1.88 source: src/services/autoDream/autoDream.ts
// class=modified  jaccard=0.3216  score=0.5792  fileCov=0.4197
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function getConfig() {
  let e = at("tengu_onyx_plover", null);
  return {
    minHours:
      typeof e?.minHours === "number" && Number.isFinite(e.minHours) && e.minHours > 0
        ? e.minHours
        : GIl.minHours,
    minSessions:
      typeof e?.minSessions === "number" && Number.isFinite(e.minSessions) && e.minSessions > 0
        ? e.minSessions
        : GIl.minSessions,
  };
}
function lvf() {
  if (Ju() !== null) return false;
  if (!lu()) return false;
  return GKt();
}
function cvf() {
  return false;
}
function initAutoDream() {
  let e = 0;
  VIl = async function (n, r) {
    let o = getConfig(),
      s = cvf();
    if (!s && !lvf()) return;
    let i;
    try {
      i = await N7n();
    } catch (y) {
      T(`[autoDream] readLastConsolidatedAt failed: ${be(y)}`);
      return;
    }
    let a = (Date.now() - i) / 3600000;
    if (!s && a < o.minHours) return;
    let l = Date.now() - e;
    if (!s && l < ivf) {
      T(
        `[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(l / 1000)}s ago`,
      );
      return;
    }
    e = Date.now();
    let c;
    try {
      c = await ryl(i);
    } catch (y) {
      T(`[autoDream] listSessionsTouchedSince failed: ${be(y)}`);
      return;
    }
    let u = Rt();
    if (((c = c.filter((y) => y !== u)), !s && c.length < o.minSessions)) {
      (T(
        `[autoDream] skip \u2014 ${c.length} sessions since last consolidation, need ${o.minSessions}`,
      ),
        G("tengu_auto_dream_skipped", {
          reason: We("sessions"),
          session_count: c.length,
          min_required: o.minSessions,
        }));
      return;
    }
    let d;
    if (s) d = i;
    else {
      try {
        d = await nyl();
      } catch (y) {
        T(`[autoDream] lock acquire failed: ${be(y)}`);
        return;
      }
      if (d === null) {
        G("tengu_auto_dream_skipped", {
          reason: We("lock"),
        });
        return;
      }
    }
    let p = cL();
    (T(`[autoDream] firing \u2014 ${a.toFixed(1)}h since last, ${c.length} sessions to review`),
      G("tengu_auto_dream_fired", {
        hours_since: Math.round(a),
        sessions_since: c.length,
        team_memory_enabled: p,
      }));
    let { taskRegistry: f } = n.toolUseContext,
      m = new AbortController(),
      g = oyl(f, {
        sessionsReviewing: c.length,
        priorMtime: d,
        abortController: m,
      }),
      h = "fork";
    try {
      let y = mm(),
        b = Jh(yr()),
        _ = await dvf(y),
        S = `

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` paths inside the memory directory. Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind \u2014 no need to probe.

Sessions since last consolidation (${c.length}):
${c.map((P) => `- ${P}`).join(`
`)}`,
        A = UIl(y, b, S, p),
        v = false,
        C = null,
        x = await dk({
          promptMessages: [
            Rn({
              content: A,
            }),
          ],
          cacheSafeParams: g6(n),
          canUseTool: OQn(y),
          querySource: "auto_dream",
          forkLabel: "auto_dream",
          skipTranscript: true,
          overrides: {
            abortController: m,
          },
          onMessage: makeDreamProgressWatcher(g, f),
          skipCacheWrite: hSt(),
        });
      ((h = "completion"), iyl(g, f));
      let I = n.toolUseContext.taskRegistry.get(g),
        k = G0o(I) ? I.filesTouched.length : 0;
      if (G0o(I) && I.filesTouched.length > 0)
        (r?.({
          ...BQn(I.filesTouched),
          verb: "Improved",
        }),
          n.toolUseContext.setAppState((P) => ({
            ...P,
            pendingMemoryUpdates: [
              ...P.pendingMemoryUpdates,
              {
                source: "dream",
                summary: `consolidated ${I.filesTouched.length} ${bn(I.filesTouched.length, "memory file")}`,
                paths: I.filesTouched,
              },
            ],
          })));
      T(
        `[autoDream] completed \u2014 cache: read=${x.totalUsage.cache_read_input_tokens} created=${x.totalUsage.cache_creation_input_tokens}`,
      );
      let D = null;
      G("tengu_auto_dream_completed", {
        cache_read: x.totalUsage.cache_read_input_tokens,
        cache_created: x.totalUsage.cache_creation_input_tokens,
        output: x.totalUsage.output_tokens,
        sessions_reviewed: c.length,
        daily_logs_found: _,
        files_touched_count: k,
        team_memory_enabled: p,
        ...D,
      });
    } catch (y) {
      if (m.signal.aborted) {
        T("[autoDream] aborted by user");
        return;
      }
      if (
        (T(`[autoDream] ${h} failed: ${be(y)}`),
        G("tengu_auto_dream_failed", {
          phase: $e(h),
          error_class: Zr(y).name,
        }),
        h === "fork")
      )
        (ayl(g, f), await B7n(d));
    }
  };
}
function makeDreamProgressWatcher(taskId, setAppState) {
  return (n) => {
    if (n.type !== "assistant") return;
    let r = "",
      o = 0,
      s = [];
    for (let i of n.message.content)
      if (i.type === "text") r += i.text;
      else if (i.type === "tool_use") {
        if ((o++, i.name === ka || i.name === Wc)) {
          let a = i.input;
          if (typeof a.file_path === "string") s.push(a.file_path);
        } else if (W1.includes(i.name)) {
          let a = i.input;
          if (
            typeof a.command === "string" &&
            /^\s*(rm|remove-item|ri|del|erase)\b/i.test(a.command)
          )
            for (let l of a.command.matchAll(
              /"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g,
            ))
              s.push(l[0].replace(/^["']|["']$/g, ""));
        }
      }
    syl(
      taskId,
      {
        text: r.trim(),
        toolUseCount: o,
      },
      s.filter(qKt),
      setAppState,
    );
  };
}
async function dvf(e) {
  try {
    let t = await WIl.readdir(qIl.join(e, "logs"), {
      recursive: true,
    });
    return On(t, (n) => n.endsWith(".md"));
  } catch (t) {
    if (!Vo(t)) T(`[autoDream] countDailyLogs: ${be(t)}`);
    return 0;
  }
}
async function KIl(e, t) {
  await VIl?.(e, t);
}
var WIl,
  qIl,
  ivf = 600000,
  GIl,
  VIl = null;
