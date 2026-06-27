// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wxa
// matched 2.1.88 source: src/utils/telemetry/betaSessionTracing.ts
// class=modified  jaccard=0.4913  score=0.8307  fileCov=0.546
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Ydt() {
  return ut(process.env.OTEL_LOG_USER_PROMPTS);
}
function kxa() {
  (D3t.clear(), tpo.clear());
}
function isBetaTracingEnabled() {
  if (!(ut(process.env.ENABLE_BETA_TRACING_DETAILED) && Boolean(process.env.BETA_TRACING_ENDPOINT)))
    return false;
  return Ir() || at("tengu_trace_lantern", false);
}
function truncateContent(content, t = Iwp) {
  if (content.length <= t)
    return {
      content: content,
      truncated: false,
    };
  return {
    content:
      content.slice(0, t) +
      `

[TRUNCATED - Content exceeds 60KB limit]`,
    truncated: true,
  };
}
function npo(e) {
  return xxa.createHash("sha256").update(e).digest("hex").slice(0, 12);
}
function xwp(e) {
  return `sp_${npo(e)}`;
}
function Ixa(e) {
  let t = De(e.message.content);
  return `msg_${npo(t)}`;
}
function epo(e) {
  return (
    /^<system-reminder>\n?([\s\S]*?)\n?<\/system-reminder>$/.exec(e.trim())?.[1]?.trim() || null
  );
}
function formatMessagesForContext(messages, t) {
  let n = [],
    r = [];
  for (let o of messages) {
    if (o.type === "api_system") {
      r.push(o.message.content);
      continue;
    }
    let s = o.message.content;
    if (typeof s === "string") {
      let i = epo(s);
      if (i) r.push(i);
      else if (t)
        n.push(`[USER]
${s}`);
    } else if (Array.isArray(s)) {
      for (let i of s)
        if (i.type === "text") {
          let a = epo(i.text);
          if (a) r.push(a);
          else if (t)
            n.push(`[USER]
${i.text}`);
        } else if (i.type === "tool_result") {
          if (typeof i.content === "string") {
            let a = epo(i.content);
            if (a) r.push(a);
            else if (t)
              n.push(`[TOOL RESULT: ${i.tool_use_id}]
${i.content}`);
          } else if (t)
            n.push(`[TOOL RESULT: ${i.tool_use_id}]
${De(i.content)}`);
        }
    }
  }
  return {
    contextParts: n,
    systemReminders: r,
  };
}
function addBetaInteractionAttributes(span, userPrompt) {
  if (!isBetaTracingEnabled() || !Ydt()) return;
  let { content: n, truncated: r } = truncateContent(`[USER PROMPT]
${userPrompt}`);
  span.setAttributes({
    new_context: n,
    ...(r && {
      new_context_truncated: true,
      new_context_original_length: userPrompt.length,
    }),
  });
}
function addBetaLLMRequestAttributes(span, newContext, messagesForAPI) {
  if (!isBetaTracingEnabled()) return;
  if (newContext?.systemPrompt) {
    let r = xwp(newContext.systemPrompt),
      o = newContext.systemPrompt.slice(0, 500);
    if ((span.setAttribute("system_prompt_hash", r), Ydt()))
      span.setAttribute("system_prompt_preview", o);
    if (
      (span.setAttribute("system_prompt_length", newContext.systemPrompt.length),
      Ydt() && !D3t.has(r))
    ) {
      D3t.add(r);
      let { content: s, truncated: i } = truncateContent(newContext.systemPrompt);
      Jc("system_prompt", {
        system_prompt_hash: r,
        system_prompt: s,
        system_prompt_length: String(newContext.systemPrompt.length),
        ...(i && {
          system_prompt_truncated: "true",
        }),
      });
    }
  }
  if (newContext?.userSystemPrompt && Ydt()) {
    let r = Rt();
    if (Cxa !== r) {
      Cxa = r;
      let { content: o, truncated: s } = truncateContent(newContext.userSystemPrompt);
      span.setAttributes({
        user_system_prompt: o,
        ...(s && {
          user_system_prompt_truncated: true,
          user_system_prompt_original_length: newContext.userSystemPrompt.length,
        }),
      });
    }
  }
  if (newContext?.tools)
    try {
      let o = Ft(newContext.tools).map((s) => {
        let i = De(s),
          a = npo(i);
        return {
          name: typeof s.name === "string" ? s.name : "unknown",
          hash: a,
          json: i,
        };
      });
      (span.setAttribute(
        "tools",
        De(
          o.map(({ name: s, hash: i }) => ({
            name: s,
            hash: i,
          })),
        ),
      ),
        span.setAttribute("tools_count", o.length));
      for (let { name: s, hash: i, json: a } of o)
        if (!D3t.has(`tool_${i}`)) {
          D3t.add(`tool_${i}`);
          let { content: l, truncated: c } = truncateContent(a);
          Jc("tool", {
            tool_name: Ui(s),
            tool_hash: i,
            tool: l,
            ...(c && {
              tool_truncated: "true",
            }),
          });
        }
    } catch {
      span.setAttribute("tools_parse_error", true);
    }
  if (messagesForAPI && messagesForAPI.length > 0 && newContext?.querySource) {
    let r = newContext.querySource,
      o = tpo.get(r),
      s = 0;
    if (o) {
      let c = messagesForAPI[o.index];
      if (c && Ixa(c) === o.hash) s = o.index + 1;
    }
    let i = messagesForAPI.slice(s).filter((c) => c.type === "user" || c.type === "api_system");
    if (i.length > 0) {
      let c = Ydt(),
        { contextParts: u, systemReminders: d } = formatMessagesForContext(i, c);
      if ((span.setAttribute("new_context_message_count", i.length), d.length > 0))
        span.setAttribute("system_reminders_count", d.length);
      if (u.length > 0 && c) {
        let p = u.join(`

---

`),
          { content: f, truncated: m } = truncateContent(p);
        span.setAttributes({
          new_context: f,
          ...(m && {
            new_context_truncated: true,
            new_context_original_length: p.length,
          }),
        });
      }
      if (d.length > 0 && c) {
        let p = d.join(`

---

`),
          { content: f, truncated: m } = truncateContent(p);
        span.setAttributes({
          system_reminders: f,
          ...(m && {
            system_reminders_truncated: true,
            system_reminders_original_length: p.length,
          }),
        });
      }
    }
    let a = messagesForAPI.length - 1,
      l = messagesForAPI[a];
    if (l)
      tpo.set(r, {
        index: a,
        hash: Ixa(l),
      });
  }
}
function addBetaLLMResponseAttributes(endAttributes, metadata) {
  if (!isBetaTracingEnabled() || !Ydt() || !metadata) return;
  if (metadata.modelOutput !== void 0) {
    let { content: n, truncated: r } = truncateContent(metadata.modelOutput);
    if (((endAttributes["response.model_output"] = n), r))
      ((endAttributes["response.model_output_truncated"] = true),
        (endAttributes["response.model_output_original_length"] = metadata.modelOutput.length));
  }
}
function addBetaToolInputAttributes(span, toolName, toolInput) {
  if (!isBetaTracingEnabled() || !sg()) return;
  let { content: r, truncated: o } = truncateContent(`[TOOL INPUT: ${toolName}]
${toolInput}`);
  span.setAttributes({
    tool_input: r,
    ...(o && {
      tool_input_truncated: true,
      tool_input_original_length: toolInput.length,
    }),
  });
}
function Mxa(e, t, n) {
  if (!isBetaTracingEnabled() || !Rst()) return;
  let { content: r, truncated: o } = truncateContent(`[TOOL RESULT: ${t}]
${n}`);
  if (((e.new_context = r), o))
    ((e.new_context_truncated = true), (e.new_context_original_length = n.length));
}
var xxa,
  D3t,
  tpo,
  Cxa,
  Iwp = 61440;
