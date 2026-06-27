// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MIo
// matched 2.1.88 source: src/tools/SkillTool/SkillTool.ts
// class=modified  jaccard=0.2486  score=0.5027  fileCov=0.3297
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var MIo = E(() => {
  ft();
  Zf();
  s8t();
  LMe();
  ii();
  Il();
  je();
  Gy();
  $g();
  II();
  Xr();
  ft();
  np();
  dn();
  kt();
  a8t();
  q0();
  co();
  Ao();
  dr();
  sr();
  I8();
  M8e();
  HO();
  SAe();
  fut();
  Qbe();
  Tcl();
  fb();
  ((aaf = ve(() =>
    H.object({
      skill: H.string().describe(
        "The name of a skill from the available-skills list. Do not guess names.",
      ),
      args: H.string().optional().describe("Optional arguments for the skill"),
    }),
  )),
    (laf = ve(() => {
      let e = H.object({
          success: H.boolean().describe("Whether the skill is valid"),
          commandName: H.string().describe("The name of the skill"),
          allowedTools: H.array(H.string()).optional().describe("Tools allowed by this skill"),
          model: H.string().optional().describe("Model override if specified"),
          status: H.literal("inline").optional().describe("Execution status"),
        }),
        t = H.object({
          success: H.boolean().describe("Whether the skill completed successfully"),
          commandName: H.string().describe("The name of the skill"),
          status: H.literal("forked").describe("Execution status"),
          agentId: H.string().describe("The ID of the sub-agent that executed the skill"),
          result: H.string().describe("The result from the forked skill execution"),
        });
      return H.union([e, t]);
    })),
    (b_t = ti({
      name: nE,
      searchHint: "invoke a slash-command skill",
      isEnabled() {
        if (N2()) return false;
        return true;
      },
      maxResultSizeChars: 100000 /* 1e5 */,
      get inputSchema() {
        return aaf();
      },
      get outputSchema() {
        return laf();
      },
      description: async ({ skill: e }) => `Execute skill: ${e}`,
      prompt: async () => POn(rc()),
      toAutoClassifierInput: ({ skill: e }) => e ?? "",
      async validateInput({ skill: e }, t) {
        let n = e.trim();
        if (!n)
          return (
            Le("skill_invoke", "skill_invoke_empty_name"),
            {
              result: false,
              message: `Invalid skill format: ${e}`,
              errorCode: 1,
            }
          );
        let r = n.startsWith("/");
        if (r) G("tengu_skill_tool_slash_prefix", {});
        let o = r ? n.substring(1) : n,
          s;
        if (DMe()) {
          let u = await I6n(o);
          if (!u.ok) s = u.reason;
        }
        let i = t.agentId === void 0 ? RK() : void 0,
          a = await PIo(t),
          l = fA(o, a);
        if (s !== void 0 && (!l || grl(l)))
          return (
            Le("skill_invoke", "skill_invoke_not_materialized"),
            {
              result: false,
              message: `Skill ${o} could not be downloaded (${s}). Proceed without it.`,
              errorCode: 10,
            }
          );
        if (!l) {
          let u = Npe(
            o,
            a.map((d) => ({
              name: xu(d),
              aliases: d.aliases,
            })),
            {
              maxEditDistance: 2,
            },
          );
          return (
            Le("skill_invoke", "skill_invoke_not_found"),
            {
              result: false,
              message: u ? `Unknown skill: ${o}. Did you mean ${u}?` : `Unknown skill: ${o}`,
              errorCode: 2,
            }
          );
        }
        if (l.type === "prompt" && l.context === "fork" && t.options.spawnedBySkill === t$e(l))
          return (
            Le("skill_invoke", "skill_invoke_fork_recursion"),
            G("tengu_skill_tool_fork_recursion_blocked", {}),
            {
              result: false,
              message: `Skill ${o} is already executing in this forked context \u2014 you are the subagent running it. Execute the instructions in the skill body directly instead of re-invoking the ${nE} tool.`,
              errorCode: 9,
            }
          );
        if (l.disableModelInvocation && !vcl(o, t))
          return (
            Le("skill_invoke", "skill_invoke_model_disabled"),
            {
              result: false,
              message: `Skill ${o} cannot be used with ${nE} tool due to disable-model-invocation`,
              errorCode: 4,
            }
          );
        if (i !== void 0 && Due([l], i).length === 0)
          return (
            Le("skill_invoke", "skill_invoke_not_allowlisted"),
            {
              result: false,
              message: `Skill ${o} is not in this session's skills allowlist`,
              errorCode: 8,
            }
          );
        let c = Zbe(l);
        if (c === "off" || (c === "user-invocable-only" && !vcl(o, t))) {
          let u = Dr(),
            d = w6n(l, u),
            p = u.skillOverrides?.[l.name],
            f = p === "user-invocable-only" || p === "off";
          Le(
            "skill_invoke",
            d && !f ? "skill_invoke_bundled_skills_disabled" : "skill_invoke_override_disabled",
          );
          let m =
              "by the disableBundledSkills setting or CLAUDE_CODE_DISABLE_BUNDLED_SKILLS env var",
            g = d
              ? f
                ? `${m}, and by an explicit skillOverrides entry`
                : m
              : "in skillOverrides settings";
          return {
            result: false,
            message: `Skill ${o} is disabled for model invocation ${g}`,
            errorCode: 7,
          };
        }
        if (l.type !== "prompt") {
          let u = l.type === "local-jsx" ? "UI" : "built-in CLI";
          return (
            Le("skill_invoke", "skill_invoke_not_prompt_type"),
            {
              result: false,
              message: `${o} is a ${u} command, not a skill. Ask the user to run /${o} themselves \u2014 it cannot be invoked via the ${nE} tool.`,
              errorCode: 5,
            }
          );
        }
        return {
          result: true,
        };
      },
      async checkPermissions({ skill: e, args: t }, n) {
        let r = e.trim(),
          o = r.startsWith("/") ? r.substring(1) : r,
          s = Fr(n),
          i = await PIo(n),
          a = fA(o, i),
          l = (p) => {
            let f = p.startsWith("/") ? p.substring(1) : p;
            if (f === o) return true;
            if (f.endsWith(":*") || f.endsWith(" *")) {
              let m = f.slice(0, -2);
              return o.startsWith(m);
            }
            return false;
          },
          c = hQ(s, b_t, "deny");
        for (let [p, f] of c.entries())
          if (l(p))
            return {
              behavior: "deny",
              message: "Skill execution blocked by permission rules",
              decisionReason: {
                type: "rule",
                rule: f,
              },
            };
        let u = hQ(s, b_t, "allow");
        for (let [p, f] of u.entries())
          if (l(p))
            return {
              behavior: "allow",
              updatedInput: {
                skill: e,
                args: t,
              },
              decisionReason: {
                type: "rule",
                rule: f,
              },
            };
        if (a?.type === "prompt" && uaf(a))
          return {
            behavior: "allow",
            updatedInput: {
              skill: e,
              args: t,
            },
            decisionReason: void 0,
          };
        let d = [
          {
            type: "addRules",
            rules: [
              {
                toolName: nE,
                ruleContent: o,
              },
            ],
            behavior: "allow",
            destination: "localSettings",
          },
          {
            type: "addRules",
            rules: [
              {
                toolName: nE,
                ruleContent: `${o}:*`,
              },
            ],
            behavior: "allow",
            destination: "localSettings",
          },
        ];
        return {
          behavior: "ask",
          message: `Execute skill: ${o}`,
          decisionReason: void 0,
          suggestions: d,
          updatedInput: {
            skill: e,
            args: t,
          },
          metadata: a
            ? {
                command: a,
              }
            : void 0,
        };
      },
      async call({ skill: e, args: t }, n, r, o, s) {
        let i = e.trim(),
          a = i.startsWith("/") ? i.substring(1) : i,
          l = n.options.activeSkill;
        n.options.activeSkill = a;
        let c = await PIo(n),
          u = fA(a, c);
        if (u) n.options.activeSkill = t$e(u);
        if ((x6n(a), u?.type === "prompt" && u.pluginInfo)) Zj(u.pluginInfo.repository);
        if (u?.type === "prompt" && u.context === "fork")
          try {
            return await iaf(u, a, t, n, r, o, s);
          } finally {
            n.options.activeSkill = l;
          }
        let { processPromptSlashCommand: d } = await Promise.resolve().then(() => (e$e(), z8t)),
          p = await d(a, t || "", c, n);
        if (!p.shouldQuery)
          throw (
            Le("skill_invoke", "skill_invoke_process_failed"),
            Error("Command processing failed")
          );
        let f = p.allowedTools || [],
          m = p.model,
          g = p.effort,
          h = mQ().has(a),
          y = u?.type === "prompt" && u.source === "bundled",
          b = u?.type === "prompt" && wcl(u),
          { sanitizedName: _, skillNameHash: S } = Elt({
            rawName: a,
            canonicalName: u?.name ?? a,
            isMcp: u?.loadedFrom === "mcp",
            isBuiltIn: h,
            isBundled: y,
            isOfficial: b,
          }),
          A = n.queryTracking?.depth ?? 0,
          v = A > 0 ? "nested-skill" : "claude-proactive",
          C = n.agentId,
          x = u?.type === "prompt" ? u.source : void 0;
        (G("tengu_skill_tool_invocation", {
          command_name: _,
          _PROTO_skill_name: a,
          ...S,
          execution_context: We("inline"),
          invocation_trigger: $e(v),
          query_depth: A,
          ...(C && {
            parent_agent_id: Hr(C),
          }),
          ...Hbe(x, u?.loadedFrom, u?.kind, u?.type === "prompt" ? u.createdBy : void 0),
          ...L8e(x, a),
          attribution_shown: o8t(x, a) !== null,
          ...(u?.type === "prompt" && {
            skill_content_chars: u.contentLength,
          }),
          ...false,
          ...(u?.type === "prompt" &&
            u.pluginInfo && {
              ...Tbe(u.pluginInfo),
              plugin_name: b ? u.pluginInfo.pluginManifest.name : "third-party",
              plugin_repository: b ? u.pluginInfo.repository : "third-party",
            }),
        }),
          aFt(a, u, v));
        let I = n.toolUseId ?? bcl(o, nE),
          k = _cl(
            p.messages.filter((P) => {
              if (P.type === "progress") return false;
              if (P.type === "user" && "message" in P) {
                let O = P.message.content;
                if (typeof O === "string" && O.includes(`<${zC}>`)) return false;
              }
              return true;
            }),
            I,
          );
        (T(`SkillTool returning ${k.length} newMessages for skill ${a}`), xe("skill_invoke"));
        let D = [];
        if (f.length > 0)
          D.push({
            kind: "allowed_tools",
            allowedTools: f,
          });
        if (m)
          D.push({
            kind: "model",
            mainLoopModel: GPt(m, n.options.mainLoopModel),
          });
        if (g !== void 0)
          D.push({
            kind: "effort",
            effort: g,
          });
        return {
          data: {
            success: true,
            commandName: a,
            allowedTools: f.length > 0 ? f : void 0,
            model: m,
          },
          newMessages: k,
          ...(D.length > 0 && {
            contextLayers: D,
          }),
        };
      },
      mapToolResultToToolResultBlockParam(e, t) {
        if ("status" in e && e.status === "forked")
          return {
            type: "tool_result",
            tool_use_id: t,
            content: `Skill "${e.commandName}" completed (forked execution).

Result:
${e.result}`,
          };
        return {
          type: "tool_result",
          tool_use_id: t,
          content: `Launching skill: ${e.commandName}`,
        };
      },
      renderToolResultMessage: Scl,
      renderToolUseMessage: Ecl,
      renderToolUseProgressMessage: LKn,
      renderToolUseRejectedMessage: Acl,
      renderToolUseErrorMessage: Hcl,
    })),
    (caf = new Set([
      "type",
      "progressMessage",
      "contentLength",
      "contentHash",
      "argNames",
      "model",
      "effort",
      "source",
      "pluginInfo",
      "disableNonInteractive",
      "skillRoot",
      "context",
      "agent",
      "getPromptForCommand",
      "getEffort",
      "declaredFields",
      "createdBy",
      "fallback",
      "unqualifiedName",
      "urlTemplate",
      "name",
      "description",
      "hasUserSpecifiedDescription",
      "isEnabled",
      "isHidden",
      "aliases",
      "subcommands",
      "isMcp",
      "argumentHint",
      "whenToUse",
      "paths",
      "version",
      "disableModelInvocation",
      "userInvocable",
      "loadedFrom",
      "immediate",
      "userFacingName",
    ])));
});
function Q8t(e) {
  return new mi(
    De({
      error_type: $Io,
      source: "target",
      message:
        e ??
        "URL not in provenance set. web_fetch can only retrieve URLs that appeared in a user message or a prior web_fetch result. Ask the user to include the URL in a message first.",
    }),
    "web-fetch-ccr-proxy",
  );
}
async function maf(e) {
  let { tool: t, denial: n, prompt: r, context: o, canUseTool: s, parentMessage: i } = e,
    a = Fr(o);
  if (a.mode === "bypassPermissions" || a.mode === "dontAsk" || a.shouldAvoidPermissionPrompts)
    return {
      outcome: "suppressed_mode",
    };
  if (Buffer.byteLength(n.url, "utf8") > daf)
    return {
      outcome: "suppressed_url_too_long",
    };
  if (
    (
      await t.checkPermissions?.(
        {
          url: n.url,
          prompt: r,
        },
        o,
      )
    )?.behavior === "deny"
  )
    return {
      outcome: "suppressed_deny_rule",
    };
  let c = s(
      t,
      {
        url: n.url,
        prompt: r,
      },
      o,
      i,
      Ccl.randomUUID(),
      {
        behavior: "ask",
        message: `${t.name} was denied by this session's URL provenance check. Approve to allow fetching this URL.`,
        suggestions: e.suggestions,
      },
    ),
    u,
    d = new Promise((p) => {
      ((u = setTimeout(
        (f) =>
          f({
            type: "timed_out",
          }),
        e.promptTimeoutMs ?? paf,
        p,
      )),
        u.unref?.());
    });
  try {
    let p = await Promise.race([
      c.then((f) => ({
        type: "decision",
        decision: f,
      })),
      d,
    ]);
    if (o.abortController.signal.aborted) throw new ru();
    if (p.type === "timed_out")
      return (
        c.catch(() => {}),
        {
          outcome: "timed_out",
        }
      );
    if (p.decision.behavior === "allow")
      return {
        outcome: "approved",
      };
    return {
      outcome: "denied",
      denialMessage: p.decision.message || void 0,
    };
  } finally {
    clearTimeout(u);
  }
}
async function Icl(e) {
  let t = await maf(e);
  if (t.outcome !== "approved")
    throw (
      e.onOutcome?.(t.outcome),
      t.outcome === "timed_out" ? Q8t(faf) : Q8t(t.denialMessage ?? e.denial.errorMessage)
    );
  let n;
  try {
    n = await e.refetch(e.denial.url);
  } catch (r) {
    if (r instanceof ru || e.context.abortController.signal.aborted) throw r;
    throw (e.onOutcome?.("retry_failed"), r);
  }
  if (n !== null && typeof n === "object" && "type" in n && n.type === "provenance_denied")
    throw (e.onOutcome?.("retry_denied"), Q8t(n.errorMessage));
  return (e.onOutcome?.("approved"), n);
}
var Ccl,
  $Io = "PROVENANCE_REQUIRED",
  daf = 2048,
  paf = 300000,
  faf =
    "The permission request for this URL was not answered in time. Ask the user to approve the fetch or include the URL in a message, then try again.";
