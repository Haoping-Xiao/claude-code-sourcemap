// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gko
// matched 2.1.88 source: src/tools/AgentTool/AgentTool.tsx
// class=modified (alt of src/tools/AgentTool/AgentTool.tsx)  jaccard=0.0319  score=0.0715  fileCov=0.0545
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Gko = E(() => {
  es();
});
function Ydf(e) {
  return Math.min(16, Math.max(2, e - 2));
}
function P6e(e) {
  if (e == null) return;
  let t = (typeof e === "string" ? e : De(e)).trim();
  if (!t) return;
  return t.length > Tml ? t.slice(0, Tml) + "\u2026" : t;
}
function Rml(e, t, n, r, o, s, i, a, l) {
  let c = 0,
    u = async (J) => ({
      v: await J,
    }),
    d = (J, ...ne) => J(...ne),
    p = (J) => sM(J),
    f = (J) => J,
    m = (J) => J,
    g = (J, ne) => {
      try {
        return J === null || J === void 0 ? void 0 : J[ne];
      } catch {
        return;
      }
    },
    h = "",
    y = false,
    b = false,
    _ = false,
    S = [],
    A = rft(1, M6e),
    v;
  function C() {
    return (
      (v ??= (async () => {
        let J = $t(),
          ne = await ub(J);
        if (ne === "HEAD") return;
        if (await vRt(ne, J)) return ne;
        n({
          type: "progress",
          toolUseID: "workflow_log",
          data: {
            type: "workflow_log",
            message: `local branch '${ne}' is not pushed to origin; remote agents will run against the repository's default branch.`,
          },
        });
        return;
      })()),
      v
    );
  }
  function x() {
    if (c < Iml) return;
    if (!b)
      ((b = true),
        G("tengu_workflow_agent_cap_exceeded", {
          agentCount: c,
        }));
    throw new xml();
  }
  function I() {
    if (i?.total == null || i.total <= 0) return;
    let J = i.getTurnSpent();
    if (J < i.total) return;
    if (!_)
      ((_ = true),
        G("tengu_workflow_budget_cap_exceeded", {
          spent: J,
          budget: i.total,
          agentCount: c,
        }));
    throw new kml(J, i.total);
  }
  let k = 0,
    D,
    P = new Map(),
    O = {
      ...e,
      setAppState: () => {},
      setToolPermissionContext: () => {},
    };
  function L(J, ne) {
    let oe = P.get(J);
    if (oe == null)
      ((oe = ++k),
        P.set(J, oe),
        n({
          type: "progress",
          toolUseID: `workflow_phase_${oe}`,
          data: {
            type: "workflow_phase",
            index: oe,
            title: J,
            kind: ne,
          },
        }));
    return oe;
  }
  for (let J of s ?? []) L(J);
  let M = m$e((J) => {
      ((D = UYn(J)), L(D));
    }),
    N = rft(Xdf, W),
    B = rft(Jdf, Y),
    $ = new WeakMap(),
    q = m$e(async (J, ne) => {
      let oe = e.agentContext,
        re;
      if (ne !== null && typeof ne === "object" && !Cml.types.isProxy(ne)) {
        let Ce = Object.getOwnPropertyDescriptor(ne, "schema"),
          Ie = Ce && "value" in Ce ? Ce.value : void 0;
        if (Ie !== null && typeof Ie === "object") re = Ie;
      }
      let ee = D6t(f(ne));
      if (ee && re !== void 0) {
        let Ce = $.get(re);
        if (Ce === void 0) ((Ce = D6t(f(re))), $.set(re, Ce));
        ee.schema = Ce;
      }
      if (O.abortController?.signal.aborted) return new Promise(() => {});
      try {
        (x(), I());
      } catch (Ce) {
        throw (await Nn(0), Ce);
      }
      let ce = ++c,
        ae = UYn(J),
        de =
          ee?.label != null
            ? String(ee.label).replace(/\s+/g, " ").trim()
            : ae.slice(0, 60).replace(/\s+/g, " ").trim(),
        Ee = ee?.phase != null ? String(ee.phase) : D,
        me = Ee != null ? L(Ee) : void 0,
        pe = ee?.stallMs != null ? Number(ee.stallMs) : opf,
        ge = P6e(ae),
        he,
        ie;
      if (a) {
        ((he = Hml(ae, ee, h)), (h = he));
        let Ce = y ? void 0 : l?.results.get(he);
        if (Ce !== void 0)
          return (
            n({
              type: "progress",
              toolUseID: `workflow_agent_${ce}_cached`,
              data: {
                type: "workflow_agent",
                index: ce,
                label: de,
                phaseIndex: me,
                phaseTitle: Ee,
                agentId: Ce.agentId,
                model: ee?.model ?? O.options.mainLoopModel,
                state: "done",
                startedAt: Date.now(),
                lastProgressAt: Date.now(),
                cached: true,
                resultPreview: P6e(Ce.result),
                promptPreview: ge,
              },
            }),
            p(Ce.result)
          );
        y = true;
        let Ie = l?.started.get(he);
        if (Ie && Ie.length > 0)
          G("tengu_workflow_journal_started_hit_respawn", {
            attempts: Ie.length,
          });
      }
      let le = false,
        He = (Ce) => {
          if (((le = true), (ie = Ce), !a)) return;
          a.append({
            type: "started",
            key: he,
            agentId: Ce,
          }).catch((Ie) =>
            T(`workflow journal started-append failed: ${Ie}`, {
              level: "warn",
            }),
          );
        },
        ye = async (Ce) => {
          if (a && he && Ce !== null)
            await a
              .append({
                type: "result",
                key: he,
                agentId: ie ?? "",
                result: Ce,
              })
              .catch((Ie) =>
                T(`workflow journal result-append failed: ${Ie}`, {
                  level: "warn",
                }),
              );
          return Ce;
        },
        ue = Date.now(),
        we = () =>
          n({
            type: "progress",
            toolUseID: `workflow_agent_${ce}_queued`,
            data: {
              type: "workflow_agent",
              index: ce,
              label: de,
              phaseIndex: me,
              phaseTitle: Ee,
              agentType: ee?.agentType != null ? String(ee.agentType) : void 0,
              isolation:
                ee?.isolation === "worktree" || ee?.isolation === "remote" ? ee.isolation : void 0,
              model: ee?.model ?? O.options.mainLoopModel,
              state: "start",
              queuedAt: ue,
              promptPreview: ge,
              lastProgressAt: ue,
            },
          });
      if (ee?.isolation === "remote")
        throw Error("agent({isolation:'remote'}) is not available in this build");
      we();
      try {
        return await ye(await N(ce, ae, de, Ee, me, pe, ee, He, ue, oe));
      } catch (Ce) {
        if (!le && !O.abortController?.signal.aborted)
          n({
            type: "progress",
            toolUseID: `workflow_agent_${ce}_queued`,
            data: {
              type: "workflow_agent",
              index: ce,
              label: de,
              phaseIndex: me,
              phaseTitle: Ee,
              model: ee?.model ?? O.options.mainLoopModel,
              state: "error",
              error: Ce instanceof Error ? Ce.message : String(Ce),
              queuedAt: ue,
              promptPreview: ge,
              lastProgressAt: Date.now(),
            },
          });
        if (O.abortController?.signal.aborted) return new Promise(() => {});
        throw Ce;
      }
    });
  async function W(J, ne, oe, re, ee, ce, ae, de, Ee, me) {
    if (O.abortController?.signal.aborted) throw Error("Workflow aborted");
    I();
    let pe;
    if (ae?.agentType != null) {
      let Je = String(ae.agentType),
        gt = O.options.agentDefinitions.activeAgents,
        st = Fr(O),
        xt = _$e(gt, st, ss),
        vt = xt.find((nn) => nn.agentType === Je);
      if (!vt) {
        if (gt.some((nn) => nn.agentType === Je)) {
          let nn = $6e(st, ss, Je);
          throw Error(
            `agent({agentType}): '${Je}' is denied by permission rule '${ss}(${Je})' from ${nn?.source ?? "settings"}.`,
          );
        }
        throw Error(
          `agent({agentType}): agent type '${Je}' not found. Available agents: ${xt.map((nn) => nn.agentType).join(", ")}`,
        );
      }
      let jt = [...(vt.disallowedTools ?? []), ...(Wko.disallowedTools ?? [])],
        en = ae.schema ? tpf : epf,
        Dn = ae.schema && !Owo(vt.tools) ? [...(vt.tools ?? []), Ip] : vt.tools;
      pe = Sh(vt)
        ? {
            ...vt,
            disallowedTools: jt,
            tools: Dn,
            getSystemPrompt: (nn) => vt.getSystemPrompt(nn) + en,
          }
        : {
            ...vt,
            disallowedTools: jt,
            tools: Dn,
            getSystemPrompt: () => vt.getSystemPrompt() + en,
          };
    }
    let ge;
    if (ae?.schema) {
      let Je = Lct(ae.schema);
      if ("error" in Je)
        throw TypeError(`agent({schema}) received an invalid JSON Schema: ${Je.error}`);
      ge = Je.tool;
    }
    let he = pe ?? (ge ? rpf : Wko),
      ie = TU(ae?.effort),
      le =
        ie !== void 0
          ? {
              ...he,
              effort: ie,
            }
          : he,
      He = O.getAppState(),
      ye = Fr(O),
      ue = O.options.tools.filter(gk),
      we = {
        ...ye,
        mode: le.permissionMode ?? "acceptEdits",
      },
      Ce = TQ(we, kht(He.mcp.tools.concat(ue)), {
        skipReplFilter: true,
        skillTools: He.skillTools,
      }),
      Ie = ge ? [...Ce.filter((Je) => !Ql(Je, Ip)), ge] : Ce,
      Ve = foe(TAe(le, O.options.mainLoopModel), O.options.mainLoopModel, ae?.model, ye.mode),
      Ze = null;
    if (ae?.isolation === "worktree") {
      let Je = r ? `${r}-${J}` : `wf-${J}`;
      Ze = await A(Je);
    }
    let Be = Ze?.worktreePath,
      Me = Ze
        ? `${ne}

---
You are running in an isolated git worktree at ${Ze.worktreePath} (a separate working copy of the repo). Changes you make here do NOT affect the main working directory (${$t()}) or other agents. Work normally \u2014 the worktree will be cleaned up automatically if you made no changes, or preserved for review if you did.`
        : ne,
      Ue = 0,
      tt = 0,
      bt = 0,
      Ke = Date.now(),
      Et = P6e(ne);
    async function ct(Je, gt, st, xt) {
      let vt = rM();
      de(vt);
      let jt = {
          agentId: vt,
          parentAgentId: YY(me) ? void 0 : me?.agentId,
          depth: qG(me) + 1,
          parentSessionId: VG(),
          agentType: "subagent",
          subagentName: le.agentType,
          isAsync: false,
          isBuiltIn: Sh(le),
        },
        en = `workflow_agent_${J}_${vt}`,
        Dn,
        nn,
        Ln,
        Hn = Ve ? mo(Ve) : void 0,
        kr = (jn, So) =>
          n({
            type: "progress",
            toolUseID: en,
            data: {
              type: "workflow_agent",
              index: J,
              label: gt,
              phaseIndex: ee,
              phaseTitle: re,
              agentId: vt,
              agentType: pe?.agentType,
              isolation: Ze ? "worktree" : void 0,
              model: Ve,
              fallbackModel: Ln,
              state: jn,
              startedAt: Ke,
              queuedAt: Ee,
              attempt: st,
              lastAttemptReason: xt,
              lastToolName: Dn,
              lastToolSummary: nn,
              promptPreview: Et,
              lastProgressAt: Date.now(),
              ...So,
            },
          }),
        Mr = new AbortController(),
        fe = O.abortController?.signal,
        Te = () => Mr.abort(new DOMException("workflow-abort", "AbortError"));
      if ((fe?.addEventListener("abort", Te), fe?.aborted))
        Mr.abort(new DOMException("workflow-abort", "AbortError"));
      o?.(vt, Mr);
      let Re,
        Ne = 0,
        it = Math.min(ce * 0.1, 1000),
        Tt = () => {
          if ((clearTimeout(Re), ce > 0))
            Re = setTimeout((jn) => jn.abort(new DOMException("stalled", "AbortError")), ce, Mr);
        },
        un = new Set(),
        ze = () => {
          if (un.size === 0 && Re === void 0) Tt();
        },
        Mt = () => {
          if (un.size > 0) return;
          let jn = Date.now();
          if (jn - Ne < it) return;
          ((Ne = jn), Tt());
        },
        Qt = {
          ...O,
          abortController: Mr,
        };
      (kr(
        "start",
        Ue || tt
          ? {
              tokens: Ue,
              toolCalls: tt,
            }
          : void 0,
      ),
        Tt());
      let Er,
        pt,
        ln = 0,
        pn = 0,
        ir = 0,
        Rr = 0,
        _o,
        Xo = new Set(),
        Pn = Oe.MAX_STRUCTURED_OUTPUT_RETRIES ?? spf,
        lr = Date.now();
      try {
        await x9(jt, async () => {
          for await (let jn of o3({
            agentDefinition: le,
            promptMessages: [
              Rn({
                content: Je,
              }),
            ],
            toolUseContext: Qt,
            canUseTool: t,
            isAsync: false,
            querySource: WDe(le.agentType, Sh(le)),
            spawnedBySkill: O.options.spawnedBySkill ?? O.options.activeSkill,
            availableTools: Ie,
            requiresStructuredOutput: ge !== void 0,
            transcriptSubdir: r ? `workflows/${r}` : void 0,
            spawnedByWorkflowRunId: r,
            override: {
              agentId: vt,
              agentContext: jt,
            },
            model: ae?.model,
            onQueryProgress: Mt,
            worktreePath: Be,
          })) {
            if (jn.type === "attachment" && jn.attachment.type === "structured_output") {
              pt = jn.attachment.data;
              continue;
            }
            if (jn.type === "set_in_progress_tool_use_ids") {
              if (jn.op.action === "remove") {
                for (let So of jn.op.ids) un.delete(So);
                ze();
              }
              continue;
            }
            if (jn.type === "user") {
              let So = jn.message.content;
              if (Array.isArray(So)) {
                for (let Mo of So)
                  if (typeof Mo === "object" && Mo?.type === "tool_result") {
                    if ((un.delete(Mo.tool_use_id), Xo.delete(Mo.tool_use_id) && Mo.is_error)) Rr++;
                  }
                if ((ze(), Rr > 0 && Rr >= Pn && pt === void 0))
                  throw new mi(
                    `agent({schema}): StructuredOutput retry cap (${Pn}) exceeded \u2014 ` +
                      `${Rr} failed ${bn(Rr, "call")} with no valid output`,
                    "Workflow agent({schema}) StructuredOutput retry cap exceeded",
                  );
              }
              continue;
            }
            if (jn.type === "assistant") {
              if (((Er = jn), !jn.isApiErrorMessage)) {
                ln = cre(jn.message.usage);
                let Mo = jn.message.model;
                if (Mo && Hn && Mo !== Ve && mo(Mo) !== Hn) Ln = Mo;
              }
              let So = 0;
              for (let Mo of jn.message.content) {
                if (Mo.type !== "tool_use") continue;
                if (
                  (So++,
                  un.add(Mo.id),
                  (Dn = Mo.name),
                  (nn = t7n(Mo.input) || void 0),
                  Mo.name === Ip)
                ) {
                  if ((ir++, (_o = Mo.input), Xo.add(Mo.id), pt !== void 0 && ir > 2)) {
                    Mr.abort("stalled");
                    break;
                  }
                }
              }
              if (((pn += So), So > 0)) (clearTimeout(Re), (Re = void 0));
              else Mt();
              kr("progress", {
                tokens: Ue + ln,
                toolCalls: tt + pn,
              });
            }
          }
        });
      } catch (jn) {
        let So = Mr.signal.aborted ? h_(Mr.signal.reason) : void 0;
        if (So === "stalled" || So === "user-retry") {
          if (So === "stalled" && pt !== void 0) {
            let Mo = Date.now() - lr;
            return (
              kr("done", {
                tokens: Ue + ln,
                toolCalls: tt + pn,
                durationMs: bt + Mo,
                resultPreview: P6e(pt),
              }),
              {
                structured: pt,
                text: "",
                tokens: ln,
                toolCalls: pn,
                stalled: false,
                skipped: false,
                durationMs: Mo,
                stopReason: void 0,
                outputTokens: void 0,
                structuredOutputAttempts: ir,
                lastStructuredOutputInput: _o,
              }
            );
          }
          return (
            kr("error", {
              error:
                So === "stalled"
                  ? `stalled \u2014 no progress for ${ce}ms`
                  : "retry requested by user",
              tokens: Ue + ln,
              toolCalls: tt + pn,
              durationMs: bt + (Date.now() - lr),
            }),
            {
              structured: void 0,
              text: "",
              tokens: ln,
              toolCalls: pn,
              stalled: true,
              stalledReason: So,
              skipped: false,
              durationMs: Date.now() - lr,
              stopReason: void 0,
              outputTokens: void 0,
              structuredOutputAttempts: ir,
              lastStructuredOutputInput: _o,
            }
          );
        }
        if (So === "user-skip")
          return (
            kr("error", {
              error: "skipped by user",
              skipped: true,
              tokens: Ue + ln,
              toolCalls: tt + pn,
              durationMs: bt + (Date.now() - lr),
            }),
            {
              structured: void 0,
              text: "",
              tokens: ln,
              toolCalls: pn,
              stalled: false,
              skipped: true,
              durationMs: Date.now() - lr,
              stopReason: void 0,
              outputTokens: void 0,
              structuredOutputAttempts: ir,
              lastStructuredOutputInput: _o,
            }
          );
        throw (
          kr("error", {
            error: jn instanceof Error ? jn.message : String(jn),
            tokens: Ue + ln,
            toolCalls: tt + pn,
            durationMs: bt + (Date.now() - lr),
          }),
          jn
        );
      } finally {
        (clearTimeout(Re), fe?.removeEventListener("abort", Te), o?.(vt, null));
      }
      let eo = Er,
        Kn = eo
          ? zl(
              eo.message.content,
              `
`,
            )
          : "",
        Nt = eo?.message.usage,
        Ut = Nt && typeof Nt.output_tokens === "number" ? Nt.output_tokens : void 0,
        Fn = Date.now() - lr,
        xi = Ue + (ln || (eo ? cre(eo.message.usage) : 0));
      if (eo?.isApiErrorMessage) {
        let jn = Kn || "API error";
        return (
          kr("error", {
            error: jn,
            tokens: xi,
            toolCalls: tt + pn,
            durationMs: bt + Fn,
          }),
          {
            structured: pt,
            text: Kn,
            apiError: jn,
            tokens: ln,
            toolCalls: pn,
            stalled: false,
            skipped: false,
            durationMs: Fn,
            stopReason: eo.message.stop_reason,
            outputTokens: Ut,
            structuredOutputAttempts: ir,
            lastStructuredOutputInput: _o,
          }
        );
      }
      return (
        kr("done", {
          tokens: xi,
          toolCalls: tt + pn,
          durationMs: bt + Fn,
          resultPreview: P6e(ge ? pt : Kn),
        }),
        {
          structured: pt,
          text: Kn,
          tokens: ln,
          toolCalls: pn,
          stalled: false,
          skipped: false,
          durationMs: Fn,
          stopReason: eo?.message.stop_reason,
          outputTokens: Ut,
          structuredOutputAttempts: ir,
          lastStructuredOutputInput: _o,
        }
      );
    }
    try {
      let Je = await Ehe(Be, () => ct(Me, oe, 1)),
        gt = (vt) =>
          !vt.stalled &&
          !vt.skipped &&
          vt.stopReason == null &&
          vt.structured === void 0 &&
          (vt.outputTokens ?? 1 / 0) < 50 &&
          vt.durationMs > ce * 0.5,
        st = gt(Je);
      if (st) {
        if (
          (n({
            type: "progress",
            toolUseID: "workflow_log",
            data: {
              type: "workflow_log",
              message:
                `[${oe}] throttled response (no stop_reason, ${Je.outputTokens ?? "?"} output tokens in ${Math.round(Je.durationMs / 1000)}s) \u2014 ` +
                "sleeping 45s before retry",
            },
          }),
          await Nn(45000, O.abortController?.signal, {
            throwOnAbort: true,
          }),
          (Ue += Je.tokens),
          (tt += Je.toolCalls),
          (bt += Je.durationMs),
          (Je = await Ehe(Be, () => ct(Me, `${oe} (throttle-retry)`, 2, "throttled"))),
          gt(Je))
        )
          n({
            type: "progress",
            toolUseID: "workflow_log",
            data: {
              type: "workflow_log",
              message:
                `[${oe}] throttle-retry also degraded \u2014 ` + "giving up on throttle backoff",
            },
          });
      }
      let xt = [];
      for (let vt = 1; Je.stalled && !st && vt <= vml; vt++) {
        if (O.abortController?.signal.aborted) throw Error("Workflow aborted");
        let jt = Je.stalledReason ?? "stalled";
        xt.push(jt);
        let en = jt === "user-retry" ? "retry requested by user" : "stalled (no progress)",
          Dn = "";
        if (jt === "stalled" && Je.structuredOutputAttempts > 0 && Je.structured === void 0) {
          let nn = De(Je.lastStructuredOutputInput),
            Ln = nn.length > 300 ? nn.slice(0, 300) + "\u2026" : nn;
          Dn = ` \u2014 ${Je.structuredOutputAttempts} StructuredOutput validation ${bn(Je.structuredOutputAttempts, "failure")} (last input: ${Ln})`;
        }
        (n({
          type: "progress",
          toolUseID: "workflow_log",
          data: {
            type: "workflow_log",
            message: `[stall] agent "${oe}" ${en} after ${Math.round(Je.durationMs / 1000)}s${Dn} \u2014 retrying (${vt}/${vml})`,
          },
        }),
          (Ue += Je.tokens),
          (tt += Je.toolCalls),
          (bt += Je.durationMs),
          (Je = await Ehe(Be, () => ct(Me, `${oe} (retry ${vt})`, vt + 1, jt))));
      }
      if (Je.skipped) return null;
      if (Je.stalled) {
        xt.push(Je.stalledReason ?? "stalled");
        let vt = xt.length,
          jt = xt.every((nn) => nn === "user-retry"),
          en = xt.every((nn) => nn === "stalled"),
          Dn =
            Je.stalledReason !== "user-retry" &&
            Je.structuredOutputAttempts > 0 &&
            Je.structured === void 0
              ? ` \u2014 ${Je.structuredOutputAttempts} StructuredOutput validation ${bn(Je.structuredOutputAttempts, "failure")} on the last attempt`
              : "";
        throw Error(
          jt
            ? `agent abandoned: user requested retry on all ${vt} attempts`
            : en
              ? `agent stalled on all ${vt} attempts (no progress for ${ce}ms each)${Dn}`
              : `agent abandoned after ${vt} attempts (${xt.join(" \u2192 ")})${Dn}`,
        );
      }
      if (Je.apiError) {
        let vt = `[${oe}] failed: ${Je.apiError}`;
        return (
          S.push(vt),
          n({
            type: "progress",
            toolUseID: "workflow_log",
            data: {
              type: "workflow_log",
              message: vt,
            },
          }),
          null
        );
      }
      if (ge) {
        if (Je.structured === void 0)
          throw Error(
            "agent({schema}): subagent completed without calling StructuredOutput (after in-conversation nudge)",
          );
        return p(Je.structured);
      }
      return Je.text;
    } finally {
      if (Ze) {
        let {
          worktreePath: Je,
          worktreeBranch: gt,
          headCommit: st,
          gitRoot: xt,
          hookBased: vt,
        } = Ze;
        try {
          if (!vt && st && !(await N6t(Je, st))) await joe(Je, gt, xt, false, "workflow_tool");
          else if (xt) await y$e(Je, xt);
        } catch {}
      }
    }
  }
  function V(J) {
    if (J === "bubble") return;
    if (J === "bypassPermissions") return "auto";
    return J;
  }
  async function Y(J, ne, oe, re, ee, ce, ae) {
    let de = O.abortController?.signal;
    if (de?.aborted) throw Error("Workflow aborted");
    I();
    let Ee = rM(),
      me = Date.now(),
      pe = P6e(ne),
      ge,
      he = (ye, ue) =>
        n({
          type: "progress",
          toolUseID: `workflow_agent_${J}_${Ee}`,
          data: {
            type: "workflow_agent",
            index: J,
            label: oe,
            phaseIndex: ee,
            phaseTitle: re,
            agentId: Ee,
            isolation: "remote",
            remoteSessionId: ge,
            state: ye,
            startedAt: me,
            queuedAt: ae,
            promptPreview: pe,
            lastProgressAt: Date.now(),
            ...ue,
          },
        }),
      ie = new AbortController(),
      le = () => ie.abort(new DOMException("workflow-abort", "AbortError"));
    if ((de?.addEventListener("abort", le), de?.aborted))
      ie.abort(new DOMException("workflow-abort", "AbortError"));
    (o?.(Ee, ie), he("start"));
    let He;
    try {
      let ye = Fr(O),
        ue = ce.model ? foe(void 0, O.options.mainLoopModel, ce.model, ye.mode) : void 0,
        we = await Y5({
          initialMessage: ne,
          source: "workflow_remote_agent",
          tags: ["workflow-remote-agent"],
          description: oe,
          branchName: await C(),
          permissionMode: V(ye.mode),
          model: ue,
          signal: ie.signal,
          onBundleFail: (Ue) => {
            He = Ue;
          },
          onCreateFail: (Ue) => {
            He = Ue;
          },
        });
      if (!we) throw Error(He ?? "Failed to create cloud session");
      ((ge = we.id), he("progress"));
      let {
        text: Ce,
        structuredOutput: Ie,
        resultSubtype: Ve,
        usage: Ze,
        modelUsage: Be,
        toolCalls: Me,
      } = await LTo(ge, ie.signal);
      for (let [Ue, tt] of Object.entries(Be ?? {}))
        boe(
          tt.costUSD,
          {
            ...xb,
            input_tokens: tt.inputTokens,
            output_tokens: tt.outputTokens,
            cache_read_input_tokens: tt.cacheReadInputTokens,
            cache_creation_input_tokens: tt.cacheCreationInputTokens,
            server_tool_use: {
              web_search_requests: tt.webSearchRequests,
              web_fetch_requests: 0,
            },
          },
          Ue,
        );
      if (ce.schema && Ie === void 0) {
        let Ue =
          Ve === "error_max_structured_output_retries"
            ? "the cloud agent called StructuredOutput but no attempt produced a surviving valid output (failed schema validation, or retracted by a model fallback)"
            : Ve && Ve !== "success"
              ? `the cloud agent turn ended with result subtype '${Ve}'`
              : "the cloud agent never called the StructuredOutput tool";
        throw Error(
          `agent({isolation:'remote', schema}) completed without structured output: ${Ue}.`,
        );
      }
      if (
        (he("done", {
          tokens: Ze ? cre(Ze) : 0,
          toolCalls: Me,
          durationMs: Date.now() - me,
          resultPreview: P6e(ce.schema ? Ie : Ce),
        }),
        ce.schema)
      )
        return p(Ie);
      return Ce;
    } catch (ye) {
      if (ge) X5(ge).catch(() => {});
      if (h_(ie.signal.reason) === "user-skip")
        return (
          he("error", {
            error: "skipped by user",
            skipped: true,
            durationMs: Date.now() - me,
          }),
          null
        );
      throw (
        he("error", {
          error: ye instanceof Error ? ye.message : String(ye),
          durationMs: Date.now() - me,
        }),
        ye
      );
    } finally {
      (de?.removeEventListener("abort", le), o?.(Ee, null));
    }
  }
  let z = m$e(async (J) => {
      if (O.abortController?.signal.aborted) return new Promise(() => {});
      if ((await Nn(0), !Array.isArray(J)))
        throw TypeError("parallel() expects an array of functions");
      let ne = jYn(m(J));
      if (ne.length === 0) return p([]);
      (x(), I());
      for (let ce of ne)
        if (typeof ce !== "function")
          throw TypeError(
            "parallel() expects an array of functions, not promises. Wrap each call: () => agent(...)",
          );
      let oe = await Promise.allSettled(ne.map((ce) => u(d(ce)))),
        re = 0,
        ee = oe.map((ce, ae) => {
          if (ce.status === "fulfilled") return ce.value.v;
          let { name: de, msg: Ee } = P6t(ce.reason);
          if (de === "WorkflowBudgetExceededError") return (re++, null);
          let me = `parallel[${ae}] failed: ${Ee}`;
          return (
            S.push(me),
            n({
              type: "progress",
              toolUseID: "workflow_log",
              data: {
                type: "workflow_log",
                message: me,
              },
            }),
            null
          );
        });
      if (re > 0) S.push(`parallel: ${re} ${bn(re, "slot")} dropped \u2014 token budget exceeded`);
      return p(ee);
    }),
    K = m$e(async (J, ...ne) => {
      if (O.abortController?.signal.aborted) return new Promise(() => {});
      if ((await Nn(0), !Array.isArray(J)))
        throw TypeError("pipeline() expects an array as the first argument");
      let oe = jYn(m(J)),
        re = jYn(ne);
      if (oe.length === 0) return p([]);
      (x(), I());
      for (let de of re)
        if (typeof de !== "function")
          throw TypeError(
            "pipeline() stages must be functions: pipeline(items, item => ..., result => ...)",
          );
      let ee = await Promise.allSettled(
          oe.map(async (de, Ee) => {
            let me = await u(de);
            for (let pe of re) {
              if (me.v === null) break;
              me = await u(d(pe, me.v, de, Ee));
            }
            return me;
          }),
        ),
        ce = 0,
        ae = ee.map((de, Ee) => {
          if (de.status === "fulfilled") return de.value.v;
          let { name: me, msg: pe } = P6t(de.reason);
          if (me === "WorkflowBudgetExceededError") return (ce++, null);
          let ge = `pipeline[${Ee}] failed: ${pe}`;
          return (
            S.push(ge),
            n({
              type: "progress",
              toolUseID: "workflow_log",
              data: {
                type: "workflow_log",
                message: ge,
              },
            }),
            null
          );
        });
      if (ce > 0) S.push(`pipeline: ${ce} ${bn(ce, "slot")} dropped \u2014 token budget exceeded`);
      return p(ae);
    }),
    Z = m$e((J) => {
      n({
        type: "progress",
        toolUseID: "workflow_log",
        data: {
          type: "workflow_log",
          message: UYn(J),
        },
      });
    });
  return {
    agent: q,
    parallel: z,
    pipeline: K,
    log: Z,
    phase: M,
    resolvePhase: L,
    recordFailure: (J) => {
      S.push(J);
    },
    getAgentCount: () => c,
    getFailures: () => S,
    bindVMAwait: (J) => {
      ((u = J.settle),
        (d = J.call),
        (p = J.clone),
        (f = J.sanitize),
        (m = J.snapshot),
        (g = J.getProp));
    },
    sanitizeVMValue: (J) => f(J),
    getVMProp: (J, ne) => g(J, ne),
  };
}
var wml,
  Cml,
  Xdf,
  Jdf = 50,
  Iml = 1000,
  Qdf,
  xml,
  kml,
  Tml = 400,
  Zdf = `You are a subagent spawned by a workflow orchestration script. Use the tools available to complete the task.

CRITICAL: Your final text response is returned **verbatim** as a string to the calling script \u2014 it is your return value, not a message to a human.
- Output the literal result (data, JSON, text). Do NOT output confirmations like "Done." or "Sent."
- If asked for JSON, return ONLY the raw JSON \u2014 no code fences, no prose, no markdown.
- Do NOT use SendUserMessage to deliver your answer. Put your answer in your final text response.
- Be concise. The script will parse your output.`,
  epf = `

---

NOTE: You are running inside a workflow script. Your final text response is returned verbatim as a string to the calling script \u2014 it is your return value, not a message to a human. Output the literal result; do not output confirmations like "Done." Be concise \u2014 the script will parse your output.`,
  tpf,
  npf,
  Wko,
  rpf,
  opf = 180000,
  vml = 5,
  spf = 5;
