// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hIl
// matched 2.1.88 source: src/utils/queryProfiler.ts
// class=modified  jaccard=0.5317  score=0.7815  fileCov=0.6246
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var hIl = E(() => {
  kt();
  Il();
  lT();
  co();
  p8t();
  ii();
  fp();
  lze();
});
async function* _Il(e, t) {
  let n = Symbol.asyncIterator in e ? e[Symbol.asyncIterator]() : e[Symbol.iterator](),
    r,
    o = t(),
    s = 0;
  try {
    while (true) {
      r ??= Promise.resolve(n.next()).then((l) => ({
        kind: "stream",
        r: l,
      }));
      let i = t();
      if (i !== o) ((o = i), (s = 0));
      let a = await Promise.race([
        r,
        i.waitForDrainable(s).then((l) => ({
          kind: "drain",
          gen: l,
        })),
      ]);
      if (a.kind === "drain") {
        ((s = a.gen),
          yield {
            type: "tool_drain_tick",
          });
        continue;
      }
      if (((r = void 0), a.r.done)) return;
      yield a.r.value;
    }
  } finally {
    Promise.resolve(n.return?.(void 0)).catch(() => {});
  }
}
function jKt() {
  if (!FKt) return;
  (oG().clearMarks(), IPo.clear(), (CPo = null), bIl++, jp("query_user_input_received"));
}
function jp(e) {
  if (!FKt) return;
  let t = oG();
  if (
    (t.mark(e),
    IPo.set(e, process.memoryUsage()),
    e === "query_first_chunk_received" && CPo === null)
  ) {
    let n = t.getEntriesByType("mark");
    if (n.length > 0) CPo = n.at(-1)?.startTime ?? 0;
  }
}
function SIl() {
  if (!FKt) return;
  jp("query_profile_end");
}
function wTf(e, t) {
  if (t === "query_user_input_received") return "";
  if (e > 1000) return " \u26A0\uFE0F  VERY SLOW";
  if (e > 100) return " \u26A0\uFE0F  SLOW";
  if (t.includes("git_status") && e > 50) return " \u26A0\uFE0F  git status";
  if (t.includes("tool_schema") && e > 50) return " \u26A0\uFE0F  tool schemas";
  if (t.includes("client_creation") && e > 50) return " \u26A0\uFE0F  client creation";
  return "";
}
function CTf() {
  if (!FKt) return "Query profiling not enabled (set CLAUDE_CODE_PROFILE_QUERY=1)";
  let t = oG().getEntriesByType("mark");
  if (t.length === 0) return "No query profiling checkpoints recorded";
  let n = [];
  (n.push("=".repeat(80)),
    n.push(`QUERY PROFILING REPORT - Query #${bIl}`),
    n.push("=".repeat(80)),
    n.push(""));
  let r = t[0]?.startTime ?? 0,
    o = r,
    s = 0,
    i = 0;
  for (let c of t) {
    let u = c.startTime - r,
      d = c.startTime - o;
    if (
      (n.push(Xin(u, d, c.name, IPo.get(c.name), 10, 9, wTf(d, c.name))),
      c.name === "query_api_request_sent")
    )
      s = u;
    if (c.name === "query_first_chunk_received") i = u;
    o = c.startTime;
  }
  let a = t.at(-1),
    l = a ? a.startTime - r : 0;
  if ((n.push(""), n.push("-".repeat(80)), i > 0)) {
    let c = s,
      u = i - s,
      d = ((c / i) * 100).toFixed(1),
      p = ((u / i) * 100).toFixed(1);
    (n.push(`Total TTFT: ${gee(i)}ms`),
      n.push(`  - Pre-request overhead: ${gee(c)}ms (${d}%)`),
      n.push(`  - Network latency: ${gee(u)}ms (${p}%)`));
  } else n.push(`Total time: ${gee(l)}ms`);
  return (
    n.push(ITf(t, r)),
    n.push("=".repeat(80)),
    n.join(`
`)
  );
}
function ITf(e, t) {
  let n = [
      {
        name: "Context loading",
        start: "query_context_loading_start",
        end: "query_context_loading_end",
      },
      {
        name: "Autocompact",
        start: "query_autocompact_start",
        end: "query_autocompact_end",
      },
      {
        name: "Query setup",
        start: "query_setup_start",
        end: "query_setup_end",
      },
      {
        name: "Tool schemas",
        start: "query_tool_schema_build_start",
        end: "query_tool_schema_build_end",
      },
      {
        name: "Message normalization",
        start: "query_message_normalization_start",
        end: "query_message_normalization_end",
      },
      {
        name: "Client creation",
        start: "query_client_creation_start",
        end: "query_client_creation_end",
      },
      {
        name: "Network TTFB",
        start: "query_api_request_sent",
        end: "query_first_chunk_received",
      },
      {
        name: "Tool execution",
        start: "query_tool_execution_start",
        end: "query_tool_execution_end",
      },
    ],
    r = new Map(e.map((i) => [i.name, i.startTime - t])),
    o = [];
  (o.push(""), o.push("PHASE BREAKDOWN:"));
  for (let i of n) {
    let a = r.get(i.start),
      l = r.get(i.end);
    if (a !== void 0 && l !== void 0) {
      let c = l - a,
        u = "\u2588".repeat(Math.min(Math.ceil(c / 10), 50));
      o.push(`  ${i.name.padEnd(22)} ${gee(c).padStart(10)}ms ${u}`);
    }
  }
  let s = r.get("query_api_request_sent");
  if (s !== void 0)
    (o.push(""), o.push(`  ${"Total pre-API overhead".padEnd(22)} ${gee(s).padStart(10)}ms`));
  return o.join(`
`);
}
function wQn() {
  if (!FKt) return;
  T(CTf());
}
var FKt,
  IPo,
  bIl = 0,
  CPo = null;
