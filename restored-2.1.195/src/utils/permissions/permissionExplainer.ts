// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tHc
// matched 2.1.88 source: src/utils/permissions/permissionExplainer.ts
// class=modified  jaccard=0.3788  score=0.5761  fileCov=0.5251
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function p_m(e) {
  if (typeof e === "string") return e;
  try {
    return De(e, null, 2);
  } catch {
    return String(e);
  }
}
function f_m(e, t = 1000) {
  let n = e.filter((s) => s.type === "assistant").slice(-3),
    r = [],
    o = 0;
  for (let s of n.reverse()) {
    let i = s.message.content
      .filter((a) => a.type === "text")
      .map((a) => ("text" in a ? a.text : ""))
      .join(" ");
    if (i && o < t) {
      let a = t - o,
        l = i.length > a ? Ix(i, a) + "..." : i;
      (r.unshift(l), (o += l.length));
    }
  }
  return r.join(`

`);
}
function Zzo() {
  return Dt().permissionExplainerEnabled !== false;
}
async function nHc({ toolName: e, toolInput: t, toolDescription: n, messages: r, signal: o }) {
  if (!Zzo()) return null;
  let s = Date.now();
  try {
    let i = p_m(t),
      a = r.length ? f_m(r) : "",
      l = `Tool: ${e}
${
  n
    ? `Description: ${n}
`
    : ""
}
Input:
${i}
${
  a
    ? `
Recent conversation context:
${a}`
    : ""
}

Explain this command in context.`,
      c = As(),
      u = await yN({
        model: c,
        system: c_m,
        messages: [
          {
            role: "user",
            content: l,
          },
        ],
        tools: [u_m],
        tool_choice: {
          type: "tool",
          name: "explain_command",
        },
        signal: o,
        querySource: "permission_explainer",
      }),
      d = Date.now() - s;
    T(`Permission explainer: API returned in ${d}ms, stop_reason=${u.stop_reason}`);
    let p = u.content.find((f) => f.type === "tool_use");
    if (p && p.type === "tool_use") {
      T(`Permission explainer: tool input: ${De(p.input).slice(0, 500)}`);
      let f = d_m().safeParse(p.input);
      if (f.success) {
        let m = {
          riskLevel: f.data.riskLevel,
          explanation: f.data.explanation,
          reasoning: f.data.reasoning,
          risk: f.data.risk,
        };
        return (
          G("tengu_permission_explainer_generated", {
            tool_name: Ui(e),
            risk_level: s_m[m.riskLevel],
            latency_ms: d,
          }),
          xe("permission_explainer_generate"),
          T(`Permission explainer: ${m.riskLevel} risk for ${e} (${d}ms)`),
          m
        );
      }
    }
    return (
      G("tengu_permission_explainer_error", {
        tool_name: Ui(e),
        error_type: i_m,
        latency_ms: d,
      }),
      It("permission_explainer_generate", "parse_failed"),
      T("Permission explainer: no parsed output in response"),
      null
    );
  } catch (i) {
    let a = Date.now() - s;
    if (o.aborted) return (T(`Permission explainer: request aborted for ${e}`), null);
    return (
      T(`Permission explainer error: ${be(i)}`, {
        level: "error",
      }),
      G("tengu_permission_explainer_error", {
        tool_name: Ui(e),
        error_type: i instanceof Error && i.name === "AbortError" ? a_m : l_m,
        latency_ms: a,
      }),
      Le("permission_explainer_generate", "api_error"),
      null
    );
  }
}
var s_m,
  i_m = 1,
  a_m = 2,
  l_m = 3,
  c_m =
    "Analyze shell commands and explain what they do, why you're running them, and potential risks.",
  u_m,
  d_m;
