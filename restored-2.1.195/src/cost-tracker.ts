// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _oe
// matched 2.1.88 source: src/cost-tracker.ts
// class=modified  jaccard=0.4704  score=0.6508  fileCov=0.6292
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var _oe = E(() => {
  ft();
  Un();
  Vw();
  je();
  RE();
  fn();
  Ao();
  vM();
  Ls();
  dr();
  del = {
    "claude-haiku-4-5": 1,
    "claude-sonnet-4-6": 2,
    "claude-opus-4-6": 3,
    "claude-opus-4-7": 4,
    "claude-opus-4-8": 4,
    "claude-mythos-5": 5,
    "claude-fable-5": 5,
  };
  EZp = ["fable", "opus", "sonnet"];
});
function uvo(e) {
  let t = Lg();
  if (t.lastSessionId !== e) return;
  let n;
  if (t.lastModelUsage)
    n = xw(t.lastModelUsage, (r, o) => ({
      ...r,
      contextWindow: nH(o, OS()),
      maxOutputTokens: Xxe(o).default,
    }));
  return {
    totalCostUSD: t.lastCost ?? 0,
    totalAPIDuration: t.lastAPIDuration ?? 0,
    totalAPIDurationWithoutRetries: t.lastAPIDurationWithoutRetries ?? 0,
    totalToolDuration: t.lastToolDuration ?? 0,
    totalLinesAdded: t.lastLinesAdded ?? 0,
    totalLinesRemoved: t.lastLinesRemoved ?? 0,
    lastDuration: t.lastDuration,
    modelUsage: n,
  };
}
function G8n(e) {
  let t = uvo(e);
  if (!t) return !1;
  return (dCt(t), !0);
}
function P9t(e) {
  pH((t) => ({
    ...t,
    lastCost: jb(),
    lastAPIDuration: WH(),
    lastAPIDurationWithoutRetries: a_r(),
    lastToolDuration: l_r(),
    lastDuration: Gie(),
    lastLinesAdded: vge(),
    lastLinesRemoved: wge(),
    lastTotalInputTokens: eCt(),
    lastTotalOutputTokens: Gb(),
    lastTotalCacheCreationInputTokens: nCt(),
    lastTotalCacheReadInputTokens: tCt(),
    lastTotalWebSearchRequests: f_r(),
    lastFpsAverage: e?.averageFps,
    lastFpsLow1Pct: e?.low1PctFps,
    lastGracefulShutdown: HT(),
    lastVersionBase: rNt(),
    lastModelUsage: xw(WC(), (n) => ({
      inputTokens: n.inputTokens,
      outputTokens: n.outputTokens,
      cacheReadInputTokens: n.cacheReadInputTokens,
      cacheCreationInputTokens: n.cacheCreationInputTokens,
      webSearchRequests: n.webSearchRequests,
      costUSD: n.costUSD,
    })),
    lastSessionId: Rt(),
  }));
}
function yel(e, t = 4) {
  return `$${e > 0.5 ? TZp(e, 100).toFixed(2) : e.toFixed(t)}`;
}
function AZp() {
  let e = WC();
  if (Object.keys(e).length === 0)
    return "Usage:                 0 input, 0 output, 0 cache read, 0 cache write";
  let t = new Map();
  for (let [r, o] of Object.entries(e)) {
    let s = mo(r),
      i = t.get(s);
    if (!i)
      ((i = {
        inputTokens: 0,
        outputTokens: 0,
        cacheReadInputTokens: 0,
        cacheCreationInputTokens: 0,
        webSearchRequests: 0,
        costUSD: 0,
        contextWindow: 0,
        maxOutputTokens: 0,
      }),
        t.set(s, i));
    ((i.inputTokens += o.inputTokens),
      (i.outputTokens += o.outputTokens),
      (i.cacheReadInputTokens += o.cacheReadInputTokens),
      (i.cacheCreationInputTokens += o.cacheCreationInputTokens),
      (i.webSearchRequests += o.webSearchRequests),
      (i.costUSD += o.costUSD));
  }
  let n = "Usage by model:";
  for (let [r, o] of t) {
    let s =
      `  ${ou(o.inputTokens)} input, ${ou(o.outputTokens)} output, ${ou(o.cacheReadInputTokens)} cache read, ${ou(o.cacheCreationInputTokens)} cache write` +
      (o.webSearchRequests > 0 ? `, ${ou(o.webSearchRequests)} web search` : "") +
      ` (${yel(o.costUSD)})`;
    n +=
      `
` +
      `${r}:`.padStart(21) +
      s;
  }
  return n;
}
function HZp(e) {
  if (e.includes("fable")) return "fable";
  if (e.includes("opus")) return "opus";
  if (e.includes("sonnet")) return "sonnet";
  if (e.includes("haiku")) return "haiku";
  return e;
}
function _el() {
  let e = WC(),
    t = Object.entries(e);
  if (t.length === 0) return null;
  let n = {},
    r = 0,
    o = 0,
    s = 0,
    i = 0;
  for (let [c, u] of t) {
    let d = HZp(mo(c));
    ((n[d] = (n[d] ?? 0) + u.costUSD),
      (r += u.costUSD),
      (o += u.inputTokens),
      (s += u.cacheReadInputTokens),
      (i += u.cacheCreationInputTokens));
  }
  let a = [];
  if (r > 0)
    for (let [c, u] of Object.entries(n).sort((d, p) => p[1] - d[1]))
      a.push(`${c}: ${Math.round((u / r) * 100)}%`);
  let l = o + s + i;
  if (l > 0) a.push(`cache hit: ${Math.round((s / l) * 100)}%`);
  return a.length > 0 ? `breakdown \xB7 ${a.join(" \xB7 ")}` : null;
}
function hMe() {
  let e = yel(jb()) + (h_r() ? " (costs may be inaccurate due to usage of unknown models)" : ""),
    t = AZp();
  return wt.dim(`Total cost:            ${e}
Total duration (API):  ${Yi(WH())}
Total duration (wall): ${Yi(Gie())}
Total code changes:    ${vge()} ${vge() === 1 ? "line" : "lines"} added, ${wge()} ${wge() === 1 ? "line" : "lines"} removed
${t}`);
}
function TZp(e, t) {
  return Math.round(e * t) / t;
}
function vZp(e, t, n) {
  let r = w_r(n) ?? {
    inputTokens: 0,
    outputTokens: 0,
    cacheReadInputTokens: 0,
    cacheCreationInputTokens: 0,
    webSearchRequests: 0,
    costUSD: 0,
    contextWindow: 0,
    maxOutputTokens: 0,
  };
  return (
    (r.inputTokens += t.input_tokens),
    (r.outputTokens += t.output_tokens),
    (r.cacheReadInputTokens += t.cache_read_input_tokens ?? 0),
    (r.cacheCreationInputTokens += t.cache_creation_input_tokens ?? 0),
    (r.webSearchRequests += t.server_tool_use?.web_search_requests ?? 0),
    (r.costUSD += e),
    (r.contextWindow = nH(n, OS())),
    (r.maxOutputTokens = Xxe(n).default),
    r
  );
}
function boe(e, t, n, r, o, s, i, a, l) {
  let c = vZp(e, t, n);
  i_r(e, c, n);
  let u = xM(r),
    d = {
      model: n,
      ...(sc() &&
        t.speed === "fast" && {
          speed: "fast",
        }),
      ...(u && {
        query_source: u,
      }),
      ...(o && {
        effort: o,
      }),
      ...ylt(r, VU(r, s, i, a, l)),
    };
  (q_r()?.add(e, d),
    dJe()?.add(t.input_tokens, {
      ...d,
      type: "input",
    }),
    dJe()?.add(t.output_tokens, {
      ...d,
      type: "output",
    }),
    dJe()?.add(t.cache_read_input_tokens ?? 0, {
      ...d,
      type: "cacheRead",
    }),
    dJe()?.add(t.cache_creation_input_tokens ?? 0, {
      ...d,
      type: "cacheCreation",
    }));
  let p = e;
  for (let f of gel(t)) {
    let m = WY(f.model, f);
    (G("tengu_advisor_tool_token_usage", {
      advisor_model: f.model,
      input_tokens: f.input_tokens,
      output_tokens: f.output_tokens,
      cache_read_input_tokens: f.cache_read_input_tokens ?? 0,
      cache_creation_input_tokens: f.cache_creation_input_tokens ?? 0,
      cost_usd_micros: Math.round(m * 1e6),
    }),
      (p += boe(m, f, f.model, r, void 0, s, i, a, l)));
  }
  return p;
}
