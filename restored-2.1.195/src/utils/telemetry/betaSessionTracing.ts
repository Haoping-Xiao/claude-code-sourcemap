// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wxa
// matched 2.1.88 source: src/utils/telemetry/betaSessionTracing.ts
// class=modified  jaccard=0.5339  score=0.8359  fileCov=0.5964
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var wxa = E(() => {
  Vb();
  Mm();
  At();
  Jt();
});
function Ydt() {
  return ut(process.env.OTEL_LOG_USER_PROMPTS);
}
function kxa() {
  (D3t.clear(), tpo.clear());
}
function mC() {
  if (!(ut(process.env.ENABLE_BETA_TRACING_DETAILED) && Boolean(process.env.BETA_TRACING_ENDPOINT)))
    return false;
  return Ir() || at("tengu_trace_lantern", false);
}
function iP(e, t = Iwp) {
  if (e.length <= t)
    return {
      content: e,
      truncated: false,
    };
  return {
    content:
      e.slice(0, t) +
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
function kwp(e, t) {
  let n = [],
    r = [];
  for (let o of e) {
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
function Rxa(e, t) {
  if (!mC() || !Ydt()) return;
  let { content: n, truncated: r } = iP(`[USER PROMPT]
${t}`);
  e.setAttributes({
    new_context: n,
    ...(r && {
      new_context_truncated: true,
      new_context_original_length: t.length,
    }),
  });
}
function Lxa(e, t, n) {
  if (!mC()) return;
  if (t?.systemPrompt) {
    let r = xwp(t.systemPrompt),
      o = t.systemPrompt.slice(0, 500);
    if ((e.setAttribute("system_prompt_hash", r), Ydt()))
      e.setAttribute("system_prompt_preview", o);
    if ((e.setAttribute("system_prompt_length", t.systemPrompt.length), Ydt() && !D3t.has(r))) {
      D3t.add(r);
      let { content: s, truncated: i } = iP(t.systemPrompt);
      Jc("system_prompt", {
        system_prompt_hash: r,
        system_prompt: s,
        system_prompt_length: String(t.systemPrompt.length),
        ...(i && {
          system_prompt_truncated: "true",
        }),
      });
    }
  }
  if (t?.userSystemPrompt && Ydt()) {
    let r = Rt();
    if (Cxa !== r) {
      Cxa = r;
      let { content: o, truncated: s } = iP(t.userSystemPrompt);
      e.setAttributes({
        user_system_prompt: o,
        ...(s && {
          user_system_prompt_truncated: true,
          user_system_prompt_original_length: t.userSystemPrompt.length,
        }),
      });
    }
  }
  if (t?.tools)
    try {
      let o = Ft(t.tools).map((s) => {
        let i = De(s),
          a = npo(i);
        return {
          name: typeof s.name === "string" ? s.name : "unknown",
          hash: a,
          json: i,
        };
      });
      (e.setAttribute(
        "tools",
        De(
          o.map(({ name: s, hash: i }) => ({
            name: s,
            hash: i,
          })),
        ),
      ),
        e.setAttribute("tools_count", o.length));
      for (let { name: s, hash: i, json: a } of o)
        if (!D3t.has(`tool_${i}`)) {
          D3t.add(`tool_${i}`);
          let { content: l, truncated: c } = iP(a);
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
      e.setAttribute("tools_parse_error", true);
    }
  if (n && n.length > 0 && t?.querySource) {
    let r = t.querySource,
      o = tpo.get(r),
      s = 0;
    if (o) {
      let c = n[o.index];
      if (c && Ixa(c) === o.hash) s = o.index + 1;
    }
    let i = n.slice(s).filter((c) => c.type === "user" || c.type === "api_system");
    if (i.length > 0) {
      let c = Ydt(),
        { contextParts: u, systemReminders: d } = kwp(i, c);
      if ((e.setAttribute("new_context_message_count", i.length), d.length > 0))
        e.setAttribute("system_reminders_count", d.length);
      if (u.length > 0 && c) {
        let p = u.join(`

---

`),
          { content: f, truncated: m } = iP(p);
        e.setAttributes({
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
          { content: f, truncated: m } = iP(p);
        e.setAttributes({
          system_reminders: f,
          ...(m && {
            system_reminders_truncated: true,
            system_reminders_original_length: p.length,
          }),
        });
      }
    }
    let a = n.length - 1,
      l = n[a];
    if (l)
      tpo.set(r, {
        index: a,
        hash: Ixa(l),
      });
  }
}
function Dxa(e, t) {
  if (!mC() || !Ydt() || !t) return;
  if (t.modelOutput !== void 0) {
    let { content: n, truncated: r } = iP(t.modelOutput);
    if (((e["response.model_output"] = n), r))
      ((e["response.model_output_truncated"] = true),
        (e["response.model_output_original_length"] = t.modelOutput.length));
  }
}
function Pxa(e, t, n) {
  if (!mC() || !sg()) return;
  let { content: r, truncated: o } = iP(`[TOOL INPUT: ${t}]
${n}`);
  e.setAttributes({
    tool_input: r,
    ...(o && {
      tool_input_truncated: true,
      tool_input_original_length: n.length,
    }),
  });
}
function Mxa(e, t, n) {
  if (!mC() || !Rst()) return;
  let { content: r, truncated: o } = iP(`[TOOL RESULT: ${t}]
${n}`);
  if (((e.new_context = r), o))
    ((e.new_context_truncated = true), (e.new_context_original_length = n.length));
}
var xxa,
  D3t,
  tpo,
  Cxa,
  Iwp = 61440;
