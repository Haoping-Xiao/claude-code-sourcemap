// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V9t
// matched 2.1.88 source: src/tools/AskUserQuestionTool/AskUserQuestionTool.tsx
// class=modified  jaccard=0.2721  score=0.3165  fileCov=0.6598
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module V9t] deps: ft, ql, Xa, DE, Xr, Ye, Un, ii, k0, T3e, G1
((dnl = R(lt(), 1)),
  (D$ = R(se(), 1)),
  (qef = ve(() =>
    H.object({
      label: H.string().describe(
        "The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice.",
      ),
      description: H.string().describe(
        "Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications.",
      ),
      preview: H.string()
        .optional()
        .describe(
          "Optional preview content rendered when this option is focused. Use for mockups, code snippets, or visual comparisons that help users compare options. See the tool description for the expected content format.",
        ),
    }),
  )),
  (pnl = ve(() =>
    H.object({
      question: H.string().describe(
        'The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"',
      ),
      header: H.string().describe(
        `Very short label displayed as a chip/tag (max ${hoa} chars). Examples: "Auth method", "Library", "Approach".`,
      ),
      options: H.array(qef())
        .min(2)
        .max(4)
        .describe(
          Qzr()
            ? "The available choices for this question. Must have 2-4 options (this cap applies to multiSelect too \u2014 group or split if you have more). Each option should be a distinct choice; mutually exclusive unless multiSelect is enabled. There should be no 'Other' option, that will be provided automatically."
            : "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically.",
        ),
      multiSelect: H.boolean()
        .default(false)
        .describe(
          "Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.",
        ),
    }),
  )),
  (fnl = ve(() => {
    let e = H.object({
      preview: H.string()
        .optional()
        .describe("The preview content of the selected option, if the question used previews."),
      notes: H.string().optional().describe("Free-text notes the user added to their selection."),
    });
    return H.record(H.string(), e)
      .optional()
      .describe(
        "Optional per-question annotations from the user (e.g., notes on preview selections). Keyed by question text.",
      );
  })),
  (unl = {
    check: (e) => {
      let t = e.questions.map((n) => n.question);
      if (t.length !== new Set(t).size) return false;
      for (let n of e.questions) {
        let r = n.options.map((o) => o.label);
        if (r.length !== new Set(r).size) return false;
      }
      return true;
    },
    message: "Question texts must be unique, option labels must be unique within each question",
  }),
  (Vef = ve(() =>
    H.preprocess(
      (e) => (Array.isArray(e) && e.every((t) => typeof t === "string") ? e.join(", ") : e),
      H.string(),
    ),
  )),
  (zef = ve(() => ({
    answers: H.record(H.string(), Vef())
      .optional()
      .describe("User answers collected by the permission component"),
    annotations: fnl(),
    metadata: H.object({
      source: H.string()
        .optional()
        .describe(
          'Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.',
        ),
    })
      .optional()
      .describe("Optional metadata for tracking and analytics purposes. Not displayed to user."),
  }))),
  (Kef = ve(() =>
    H.strictObject({
      questions: H.array(pnl())
        .min(1)
        .max(4)
        .describe(
          Qzr()
            ? "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead."
            : "Questions to ask the user (1-4 questions)",
        ),
      ...zef(),
    }).refine(unl.check, {
      message: unl.message,
    }),
  )),
  (Yef = ve(() =>
    H.object({
      questions: H.array(pnl()).describe("The questions that were asked"),
      answers: H.record(H.string(), H.string()).describe(
        "The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)",
      ),
      response: H.string()
        .optional()
        .describe("Freeform text the user typed instead of selecting a structured option"),
      annotations: fnl(),
    }),
  )));
fyt = ti({
  name: mf,
  searchHint: "prompt the user with a multiple-choice question",
  maxResultSizeChars: 100000 /* 1e5 */,
  async description() {
    return yoa;
  },
  async prompt({ model: e }) {
    let t = "";
    if (ph(e)) {
      let r = at("tengu_cinder_plover", "").trim();
      t = r
        ? `
${r}
`
        : boa;
    }
    let n = fsn();
    if (n === void 0) return zoo + t;
    return zoo + t + _oa[n];
  },
  get inputSchema() {
    return Kef();
  },
  get outputSchema() {
    return Yef();
  },
  userFacingName() {
    return "";
  },
  isEnabled() {
    if (MA().length > 0 && Ir()) return false;
    if (Ir() && !hCt()) return false;
    return true;
  },
  isConcurrencySafe() {
    return true;
  },
  isReadOnly() {
    return true;
  },
  toAutoClassifierInput(e) {
    return e.questions.map((t) => t.question).join(" | ");
  },
  requiresUserInteraction() {
    return true;
  },
  async validateInput({ questions: e }) {
    if (fsn() !== "html")
      return {
        result: true,
      };
    for (let t of e)
      for (let n of t.options) {
        let r = Qef(n.preview);
        if (r)
          return {
            result: false,
            message: `Option "${n.label}" in question "${t.question}": ${r}`,
            errorCode: 1,
          };
      }
    return {
      result: true,
    };
  },
  async checkPermissions(e) {
    return {
      behavior: "ask",
      message: "Answer questions?",
      updatedInput: {
        questions: e.questions,
        ...(e.metadata && {
          metadata: e.metadata,
        }),
      },
    };
  },
  renderToolUseMessage() {
    return null;
  },
  renderToolUseProgressMessage() {
    return null;
  },
  renderToolResultMessage({ answers: e, response: t }, n) {
    return D$.jsx(Xef, {
      answers: e,
      response: t,
    });
  },
  renderToolUseRejectedMessage({ questions: e }) {
    return D$.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        D$.jsxs(U, {
          flexDirection: "row",
          children: [
            D$.jsxs(w, {
              color: BB("default"),
              children: [gc, "\xA0"],
            }),
            D$.jsx(w, {
              children: "User declined to answer questions",
            }),
          ],
        }),
        D$.jsx(qn, {
          children: D$.jsx(U, {
            flexDirection: "column",
            children: e.map((t) =>
              D$.jsxs(
                w,
                {
                  color: "inactive",
                  children: [
                    "\xB7 ",
                    t.question,
                    " (",
                    t.options.map((n) => n.label).join(" / "),
                    ")",
                  ],
                },
                t.question,
              ),
            ),
          }),
        }),
      ],
    });
  },
  renderToolUseErrorMessage() {
    return null;
  },
  async call(e, t) {
    let { questions: n, answers: r = {}, annotations: o } = e,
      { response: s } = e;
    return {
      data: {
        questions: n,
        answers: r,
        ...(s?.trim() && {
          response: s,
        }),
        ...(o && {
          annotations: o,
        }),
      },
    };
  },
  mapToolResultToToolResultBlockParam(
    { questions: e, answers: t, response: n, annotations: r },
    o,
  ) {
    let s = e
        .map(({ question: a }) => {
          let l = t[a],
            c = r?.[a],
            u = l && l !== Yvo;
          if (!u && !c?.notes) return null;
          let d = [u ? `"${a}"="${l}"` : `"${a}"=(no option selected)`];
          if (c?.preview)
            d.push(`selected preview:
${c.preview}`);
          if (c?.notes) d.push(`notes: ${c.notes}`);
          return d.join(" ");
        })
        .filter((a) => a !== null)
        .join(", "),
      i;
    if (n?.trim()) i = `The user responded: ${n}`;
    else if (s)
      i = `Your questions have been answered: ${s}. You can now continue with these answers in mind.`;
    else i = "The user did not answer the questions.";
    return {
      type: "tool_result",
      content: i,
      tool_use_id: o,
    };
  },
});
function yP(e) {
  let t = e.tool.userFacingName(e.input),
    n = t.endsWith(" (MCP)"),
    r = n ? t.slice(0, -6) : t,
    o = e.tool.renderToolUseMessage(e.input, {
      theme: e.theme,
      verbose: true,
    });
  return {
    requestId: e.toolUseID,
    toolName: e.tool.name,
    input: e.input,
    description: e.description,
    permissionResult: e.permissionResult,
    userFacingName: r,
    hasMcpSuffix: n,
    renderedToolUseMessage: o,
    messageId: e.assistantMessage.message.id,
    isMcp: e.tool.isMcp ?? false,
    isAskCappedByOrg: e.tool.mcpInfo?.effectiveMaxPermission === "ask",
    showAlwaysAllow: wut(),
    requestSource: e.requestSource,
  };
}
function Xvo(e) {
  let t = e.spawnedByWorkflowRunId;
  if (t !== void 0) {
    let r;
    for (let o of Object.values(e.taskRegistry.all()))
      if (o.type === "local_workflow" && o.workflowRunId === t) {
        r = o.workflowName;
        break;
      }
    return {
      type: "workflow-agent",
      workflowName: r,
    };
  }
  let n = e.agentContext;
  if (n.agentType === "teammate")
    return {
      type: "subagent",
      agentName: n.agentName,
    };
  if (ZIe(n) && !n.isMainSession)
    return {
      type: "subagent",
      agentName: n.displayName ?? n.subagentName,
    };
  return;
}
function mnl(e) {
  let t = yP(e),
    n = e.permissionResult.metadata?.command?.chrome;
  if (!n && typeof e.input.url === "string")
    try {
      let r = new URL(e.input.url);
      if (r.host)
        n = {
          host: r.host,
          url: r.href,
        };
    } catch {}
  return {
    ...t,
    chrome: n,
    verbPhrase: Z3t(e.tool.name, e.input),
  };
}
function gnl(e) {
  let t = yP(e),
    n = e.input.url,
    r = "";
  if (typeof n === "string")
    try {
      r = new URL(n).hostname;
    } catch {
      r = "";
    }
  return {
    ...t,
    hostname: r,
  };
}
function hnl(e) {
  let t = yP(e),
    n = fyt.inputSchema.safeParse(e.input),
    r = n.success ? (n.data.questions ?? []) : [],
    o = n.success ? n.data.metadata?.source : void 0;
  return {
    ...t,
    questions: r,
    metadataSource: o,
  };
}
function ynl(e) {
  let t = yP(e),
    n = typeof e.input.command === "string" ? Yv(e.input.command) : void 0,
    r = e.input.mcp,
    o =
      r !== null &&
      typeof r === "object" &&
      "server" in r &&
      typeof r.server === "string" &&
      "tool" in r &&
      typeof r.tool === "string"
        ? {
            server: Yv(r.server),
            tool: Yv(r.tool),
          }
        : void 0,
    s = e.input.ws,
    i =
      s !== null && typeof s === "object" && "url" in s && typeof s.url === "string"
        ? {
            url: Yv(Zef(s.url)),
          }
        : void 0,
    a = typeof e.input.interval_ms === "number" ? e.input.interval_ms : 30000,
    l = typeof e.input.description === "string" ? Yv(e.input.description) : void 0;
  return {
    ...t,
    command: n,
    mcp: o,
    ws: i,
    intervalMs: a,
    monitorDescription: l,
  };
}
function Zef(e) {
  try {
    return new URL(e).href;
  } catch {
    return e;
  }
}
function _nl(e) {
  let t = yP(e),
    n = typeof e.input.script === "string" ? e.input.script : "",
    r = typeof e.input.name === "string" && e.input.name !== "" ? Yv(e.input.name) : void 0,
    o =
      typeof t.renderedToolUseMessage === "string"
        ? Yv(t.renderedToolUseMessage)
        : t.renderedToolUseMessage,
    s = Yv(t.description),
    i = e.input.args;
  return {
    ...t,
    renderedToolUseMessage: o,
    description: s,
    script: n,
    workflowName: r,
    args: i,
  };
}
function bnl(e) {
  let t = yP(e),
    n = typeof e.input.filePath === "string" ? e.input.filePath : "",
    r = typeof e.input.title === "string" ? e.input.title : "",
    s = (Array.isArray(e.input.options) ? e.input.options : [])
      .filter(
        (a) =>
          a !== null &&
          typeof a === "object" &&
          "label" in a &&
          typeof a.label === "string" &&
          "description" in a &&
          typeof a.description === "string" &&
          "value" in a &&
          typeof a.value === "string",
      )
      .map((a) => ({
        label: a.label,
        description: a.description,
        value: a.value,
      })),
    i;
  if (Fc(n) && !qp(n)) i = `(Network path \u2014 content not previewed: ${n})`;
  else
    try {
      i = XC(n);
    } catch (a) {
      i = wn(a) ? `(File not found: ${n})` : `(Error reading file: ${String(a)})`;
    }
  return {
    ...t,
    filePath: n,
    artifactTitle: r,
    artifactOptions: s,
    fileContent: i,
  };
}
function Snl(e) {
  let t = yP(e),
    n = e.permissionResult.metadata,
    r =
      n !== null &&
      typeof n === "object" &&
      "command" in n &&
      n.command !== null &&
      typeof n.command === "object"
        ? n.command
        : void 0,
    o = r !== void 0 && typeof r.name === "string" ? r.name : void 0,
    s = r !== void 0 && typeof r.description === "string" ? r.description : void 0,
    a = (typeof e.input.skill === "string" ? e.input.skill : void 0) ?? o ?? "";
  return {
    ...t,
    skill: a,
    skillDescription: s,
  };
}
function Enl(e) {
  let t = yP(e),
    n = typeof e.input.command === "string" ? Yv(e.input.command) : "",
    r =
      typeof t.renderedToolUseMessage === "string"
        ? Yv(t.renderedToolUseMessage)
        : t.renderedToolUseMessage,
    o = Yv(t.description);
  return {
    ...t,
    renderedToolUseMessage: r,
    description: o,
    command: n,
  };
}
function Anl(e) {
  let t = yP(e),
    n = bP() ?? "",
    r = _P(),
    o = Array.isArray(e.input.allowedPrompts) ? e.input.allowedPrompts : void 0,
    s = e.assistantMessage.message.usage,
    i =
      s && typeof s.input_tokens === "number"
        ? {
            input_tokens: s.input_tokens,
            cache_creation_input_tokens: s.cache_creation_input_tokens,
            cache_read_input_tokens: s.cache_read_input_tokens,
          }
        : void 0;
  return {
    ...t,
    plan: n,
    planFilePath: r,
    allowedPrompts: o,
    usage: i,
  };
}
function m6n(e) {
  let t = yP(e),
    n = typeof e.input.command === "string" ? Yv(e.input.command) : "",
    r =
      typeof t.renderedToolUseMessage === "string"
        ? Yv(t.renderedToolUseMessage)
        : t.renderedToolUseMessage,
    o = Yv(t.description),
    s = vNn(e.toolPermissionContext);
  return {
    ...t,
    renderedToolUseMessage: r,
    description: o,
    command: n,
    classifierState: e.classifierState,
    existingAllowDescriptions: s,
  };
}
