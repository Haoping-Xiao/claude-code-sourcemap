// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M8l
// matched 2.1.88 source: src/utils/stats.ts
// class=partial  jaccard=0.0992  score=0.525  fileCov=0.1089
// note: low-confidence suggestion: src/utils/stats.ts; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var M8l = E(() => {
  _i();
  Ye();
  ps();
  es();
  ys();
  bH();
  Bs();
  vi();
  B_();
  Ko();
  gKe();
  pjo = R(lt(), 1), T1e = R(rt(), 1), T_ = R(se(), 1);
});
async function O8l(e, t) {
  let n = $8l.join(Foe(e), `agent-${t}.jsonl`),
    r;
  try {
    r = await Het(n);
  } catch (c) {
    return T(`readWorkflowAgentTranscript: ${n} not readable (${c instanceof Error ? c.message : String(c)})`), null;
  }
  let o = r.filter(J5),
    s = o.find(c => c.type === "user"),
    i = (s && P$(s)) ?? "",
    a = [],
    l = "";
  for (let c of o) {
    if (c.type !== "assistant" || !Array.isArray(c.message.content)) continue;
    let u = "";
    for (let d of c.message.content) if (d.type === "tool_use") {
      if (a.push({
        name: d.name,
        summary: t7n(d.input)
      }), d.name === Ip && d.input !== void 0) try {
        u = De(d.input, null, 2);
      } catch {
        u = String(d.input);
      }
    } else if (d.type === "text") u += d.text;
    if (u) l = u;
  }
  return {
    prompt: i,
    toolCalls: a,
    finalText: l
  };
}
var $8l;