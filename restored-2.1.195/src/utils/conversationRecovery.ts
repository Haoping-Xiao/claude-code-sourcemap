// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _ht
// matched 2.1.88 source: src/utils/conversationRecovery.ts
// class=modified  jaccard=0.3138  score=0.4577  fileCov=0.4994
// note: deminified; 13 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: restoreSkillStateFromMessages, removeInterruptedMessage, loadMessagesFromJsonlPath, loadConversationForResume, getResumePrompt, findLiveNonInteractiveSession, dropRetractedMessages, deserializeMessagesWithInterruptDetection, deserializeMessages, dedupeSessionStartHookMessages
// [unwrapped __esm module _ht] deps: env-paths/index.js, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/peerAddress.ts, utils/teammateContext.ts, utils/platform.ts, utils/fsOperations.ts, fast-xml-parser/lib/fxp.cjs
((e9t = require("fs/promises")),
  (mTo = require("net")),
  (fTo = require("path")),
  (dQp = ["interactive", "bg", "daemon", "daemon-worker"]));
fQp = ["busy", "shell", "idle", "waiting"];
function migrateLegacyAttachmentTypes(message) {
  if (message.type !== "attachment") return message;
  let t = message.attachment;
  if (EQp.has(t.type)) return null;
  if (t.type === "new_file")
    return {
      ...message,
      attachment: {
        ...t,
        type: "file",
        displayPath: bht.relative($t(), t.filename),
      },
    };
  if (t.type === "new_directory")
    return {
      ...message,
      attachment: {
        ...t,
        type: "directory",
        displayPath: bht.relative($t(), t.path),
      },
    };
  if (!("displayPath" in t)) {
    let n =
      "filename" in t ? t.filename : "path" in t ? t.path : "skillDir" in t ? t.skillDir : void 0;
    if (n)
      return {
        ...message,
        attachment: {
          ...t,
          displayPath: bht.relative($t(), n),
        },
      };
  }
  return message;
}
function HQp(e) {
  if (e.type !== "assistant" && e.type !== "user") return null;
  let t = e.message.content;
  if (!Array.isArray(t)) return null;
  let n = t.filter((r) => r.type !== "text" || typeof r.text === "string");
  if (n.length === t.length) return null;
  return {
    ...e,
    message: {
      ...e.message,
      content: n,
    },
  };
}
function getResumePrompt() {
  return process.env.CLAUDE_CODE_RESUME_PROMPT || "Continue from where you left off.";
}
function removeInterruptedMessage(e, t) {
  let n = e.findIndex((r) => r.uuid === t.uuid);
  if (n !== -1) e.splice(n, 2);
}
function deserializeMessages(e) {
  return deserializeMessagesWithInterruptDetection(e).messages;
}
function deserializeMessagesWithInterruptDetection(e, t, n, r) {
  try {
    let o = dropRetractedMessages(e),
      s = 0,
      i = o
        .map(migrateLegacyAttachmentTypes)
        .filter((y) => y !== null)
        .flatMap((y) => {
          let b = HQp(y);
          if (b === null) return [y];
          s += 1;
          let _ = b.message.content;
          if (Array.isArray(_) && _.length === 0) return [];
          return [b];
        });
    if (s > 0)
      T(
        `deserializeMessages: dropped non-string text block(s) from ${s} message(s) \u2014 interrupted-stream artifact`,
        {
          level: "warn",
        },
      );
    let a = new Set(yM);
    for (let y of i)
      if (y.type === "user" && y.permissionMode !== void 0 && !a.has(y.permissionMode))
        y.permissionMode = void 0;
    let l = new Set(),
      c = Oe.CLAUDE_CODE_RESUME_INTERRUPTED_TURN && !t?.size && !n,
      u = Hht(
        i,
        t,
        c
          ? {
              dropSiblingBlocks: true,
              outSupersededToolUseIds: l,
            }
          : void 0,
      ),
      d = o8e(u),
      p = r8e(d),
      f =
        t?.size || n
          ? {
              kind: "none",
            }
          : detectTurnInterruption(p),
      m =
        r !== void 0 &&
        f.kind !== "none" &&
        p.findLast((y) => y.type === "user" || y.type === "assistant")?.uuid === r,
      g;
    if (m)
      g = {
        kind: "none",
      };
    else if (f.kind === "interrupted_turn") {
      let [y] = mS([
        Rn({
          content: getResumePrompt(),
          isMeta: true,
        }),
      ]);
      (p.push(y),
        (g = {
          kind: "interrupted_prompt",
          message: y,
        }));
    } else g = f;
    let h = p.findLastIndex((y) => y.type !== "system" && y.type !== "progress");
    if (!n && h !== -1 && p[h].type === "user")
      p.splice(
        h + 1,
        0,
        dE({
          content: zte,
        }),
      );
    return {
      messages: p,
      turnInterruptionState: g,
      supersededToolUseIds: l,
    };
  } catch (o) {
    throw (ke(o), o);
  }
}
function detectTurnInterruption(messages) {
  if (messages.length === 0)
    return {
      kind: "none",
    };
  let t = messages.findLastIndex(
      (r) =>
        r.type !== "system" &&
        r.type !== "progress" &&
        !(r.type === "assistant" && r.isApiErrorMessage && r.message.stop_reason !== "refusal"),
    ),
    n = t !== -1 ? messages[t] : void 0;
  if (!n)
    return {
      kind: "none",
    };
  if (n.type === "assistant") {
    if (n.isApiErrorMessage) G("tengu_refusal_turn_classified_complete", {});
    return {
      kind: "none",
    };
  }
  if (n.type === "user") {
    if (n.isMeta || n.isCompactSummary)
      return {
        kind: "none",
      };
    if (SZa(n))
      return {
        kind: "none",
      };
    if (Sht(n)) {
      if (isTerminalToolResult(n, messages, t))
        return {
          kind: "none",
        };
      return {
        kind: "interrupted_turn",
      };
    }
    return {
      kind: "interrupted_prompt",
      message: n,
    };
  }
  if (n.type === "attachment") {
    for (let r = t - 1; r >= 0; r--) {
      let o = messages[r];
      if (
        o.type === "system" ||
        o.type === "progress" ||
        o.type === "attachment" ||
        (o.type === "assistant" && o.isApiErrorMessage && o.message.stop_reason !== "refusal")
      )
        continue;
      if (o.type === "assistant" && o.isApiErrorMessage && o.message.stop_reason === "refusal")
        return (
          G("tengu_refusal_turn_classified_complete", {}),
          {
            kind: "none",
          }
        );
      if (o.type === "assistant")
        return {
          kind: "none",
        };
      if (o.type === "user" && (o.isMeta || o.isCompactSummary))
        return {
          kind: "none",
        };
      if (o.type === "user" && SZa(o))
        return {
          kind: "none",
        };
      if (o.type === "user" && Sht(o) && isTerminalToolResult(o, messages, r))
        return {
          kind: "none",
        };
      break;
    }
    return {
      kind: "interrupted_turn",
    };
  }
  return {
    kind: "none",
  };
}
function SZa(e) {
  let t = e.message.content,
    n = typeof t === "string" ? t : t.length === 1 && t[0].type === "text" ? t[0].text : void 0;
  return n === _N || n === Jv;
}
function isTerminalToolResult(result, messages, resultIdx) {
  let r = result.message.content;
  if (!Array.isArray(r)) return false;
  let o = r[0];
  if (o?.type !== "tool_result") return false;
  let s = o.tool_use_id;
  for (let i = resultIdx - 1; i >= 0; i--) {
    let a = messages[i];
    if (a.type !== "assistant") continue;
    for (let l of a.message.content)
      if (l.type === "tool_use" && l.id === s)
        return (
          l.name === _Qp || l.name === bQp || l.name === SQp || (pTo().has(l.name) && !o.is_error)
        );
  }
  return false;
}
function restoreSkillStateFromMessages(messages) {
  for (let t of messages) {
    if (t.type !== "attachment") continue;
    if (t.attachment.type === "invoked_skills") {
      for (let n of t.attachment.skills)
        if (n.name && n.path && n.content) PCt(n.name, n.path, n.content, null);
    }
    if (t.attachment.type === "skill_listing")
      if (t.attachment.names) ETo(t.attachment.names);
      else STo();
  }
}
async function loadMessagesFromJsonlPath(e) {
  let { messages: t, leafUuids: n, endedSessions: r } = await Cpe(e),
    o = null,
    s = 0;
  for (let l of t.values()) {
    if (l.isSidechain || !n.has(l.uuid)) continue;
    let c = new Date(l.timestamp).getTime();
    if (c > s) ((s = c), (o = l));
  }
  if (!o)
    return ZEe(
      {
        messages: [],
        sessionId: void 0,
      },
      false,
    );
  let i = oAe(t, o),
    a = o.sessionId;
  return ZEe(
    {
      messages: Aht(i),
      sessionId: a,
    },
    a ? r.has(a) : false,
  );
}
async function findLiveNonInteractiveSession(e) {
  let t = await Promise.resolve()
    .then(() => (_ht(), yTo))
    .then((n) => n.listAllLiveSessions())
    .catch(() => []);
  for (let n of t)
    if (n.sessionId === e && n.kind && n.kind !== "interactive")
      return {
        kind: n.kind,
      };
  return null;
}
function dedupeSessionStartHookMessages(e, t) {
  if (t.length === 0) return [];
  let n = new Set();
  for (let s of e) for (let i of AZa(s)) n.add(i);
  if (n.size === 0) return [...t];
  let r = false,
    o = [];
  for (let s of t) {
    let i = AZa(s);
    if (i.length === 0 || s.type !== "attachment") {
      o.push(s);
      continue;
    }
    let a = s.attachment;
    if (a.type === "hook_additional_context" && a.content.length > 1) {
      let l = a.content.filter((c) => !n.has(_To(c)));
      if (l.length === 0) continue;
      ((r = true),
        o.push(
          l.length === a.content.length
            ? s
            : {
                ...s,
                attachment: {
                  ...a,
                  content: l,
                },
              },
        ));
      continue;
    }
    if (n.has(i[0])) continue;
    ((r = true), o.push(s));
  }
  if (!r) return [];
  return o;
}
function AZa(e) {
  if (e.type !== "attachment") return [];
  let t = e.attachment;
  if (!("hookEvent" in t) || t.hookEvent !== "SessionStart") return [];
  if (t.type === "hook_additional_context") return t.content.map(_To);
  if (t.type === "hook_success" && t.content !== "") return [_To(t.content)];
  return [];
}
function _To(e) {
  if (!e.startsWith(dDe)) return e;
  return e.replace(/(Full output saved to: ).*$/m, "$1<persisted>");
}
function dropRetractedMessages(e) {
  let t = new Set(
    e.flatMap((r) =>
      r.type === "system" &&
      r.subtype === "model_refusal_fallback" &&
      r.retractedMessageUuids !== void 0
        ? r.retractedMessageUuids.map((o) => o.slice(0, t8e))
        : [],
    ),
  );
  if (t.size === 0) return e;
  let n = e.filter((r) => r.type === "system" || !t.has(r.uuid.slice(0, t8e)));
  if (n.length !== e.length)
    G("tengu_resume_retracted_dropped", {
      dropped: e.length - n.length,
      chain_length: e.length,
    });
  return n;
}
async function loadConversationForResume(source, sourceJsonlFile, n) {
  try {
    let r = null,
      o = null,
      s;
    if (source === void 0) {
      let p = y8n(),
        f = new Set();
      try {
        let { listAllLiveSessions: g } = await Promise.resolve().then(() => (_ht(), yTo)),
          h = await g();
        f = new Set(
          h.flatMap((y) =>
            y.kind && y.kind !== "interactive" && y.sessionId ? [y.sessionId] : [],
          ),
        );
      } catch {}
      r =
        (await p).find((g) => {
          if (g.sessionKind) return false;
          let h = qg(g);
          return !h || !f.has(h);
        }) ?? null;
    } else if (sourceJsonlFile && typeof source === "string")
      ((r = await rAe(source, sourceJsonlFile)),
        (s = r?.messages.at(-1)?.sessionId ?? r?.sessionId ?? source));
    else if (typeof source === "string")
      ((r = (await rAe(source)) ?? (await wQp(source))), (s = source));
    else r = source;
    if (!r && !o) return (It("session_resume", "not_found"), null);
    if (r) {
      if (doe(r)) r = await sAe(r);
      if (!s) s = qg(r);
      if (s) await _8n(r, Fb(s));
      (JVt(r, !n.forkSession && s ? Fb(s) : void 0), (o = r.messages), ATo(o));
    }
    ((o = dropRetractedMessages(o)), restoreSkillStateFromMessages(o));
    let i = r?.fullPath ?? sourceJsonlFile,
      a = i ? ((await HTo(i)) ?? void 0) : void 0,
      l = deserializeMessagesWithInterruptDetection(
        o,
        a ? new Set([a.toolUseID]) : void 0,
        n.replyOnResume,
        r?.rewindAnchorUuid,
      );
    o = l.messages;
    let c = performance.now(),
      u = await z8("resume", {
        sessionId: s,
        sessionTitle: Gg(Rt()) ?? r?.customTitle,
      });
    Zc("hooks_init_ms", performance.now() - c, c);
    let d = Aut();
    if (d) n8e(d);
    return (
      o.push(...dedupeSessionStartHookMessages(o, u)),
      xe("session_resume"),
      {
        messages: o,
        turnInterruptionState: l.turnInterruptionState,
        supersededToolUseIds: l.supersededToolUseIds,
        deferredToolUse: a,
        fileHistorySnapshots: r?.fileHistorySnapshots,
        attributionSnapshots: r?.attributionSnapshots,
        contentReplacements: r?.contentReplacements,
        contextCollapseCommits: r?.contextCollapseCommits,
        contextCollapseSnapshot: r?.contextCollapseSnapshot,
        sessionId: s,
        agentName: r?.agentName,
        agentColor: r?.agentColor,
        agentSetting: r?.agentSetting,
        customTitle: r?.customTitle,
        ...ZEe({}, iMe(r)),
        aiTitle: r?.aiTitle,
        tag: r?.tag,
        mode: r?.mode,
        permissionMode: r?.permissionMode,
        isolationLatch: r?.isolationLatch,
        worktreeSession: r?.worktreeSession,
        prNumber: r?.prNumber,
        prUrl: r?.prUrl,
        prRepository: r?.prRepository,
        bridgeSessionId: r?.bridgeSessionId,
        bridgeLastSeq: r?.bridgeLastSeq,
        bridgeDialogKinds: r?.bridgeDialogKinds,
        fullPath: r?.fullPath,
      }
    );
  } catch (r) {
    throw (Le("session_resume", "load_failed"), ke(r), r);
  }
}
async function wQp(e) {
  for (let t of await tAe(yr()))
    for (let n of await Px(t)) {
      let r = await rAe(e, bht.join(n, `${e}.jsonl`));
      if (r) return (G("tengu_resume_worktree_fallback", {}), r);
    }
  return null;
}
var bht, _Qp, bQp, SQp, EQp;
