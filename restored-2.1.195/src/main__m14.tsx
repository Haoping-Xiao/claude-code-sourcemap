// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Oze
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0059  score=0.0473  fileCov=0.0067
// note: deminified; 19 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: worktreeOwnershipFields, summarizeToolCalls, stashBgStructuredResult, setWorktreeOwnership, setPermissionBlock, scanLinkRecords, markTurnActive, markTurnAborted, markApiFailure, findLatestRealUserAsk, ensurePermissionBridge, createClassifierJobState, classifyAndPushDebounced, classifyAndPush, classify, captureLatestAsk, captureIntent, LINK_SCAN_MAX_BYTES
// [unwrapped __esm module Oze] deps: ft, ft, GF, yfe, ESt, p8, HI, OM, fd, je, Kke, wr, At, Hpe, bm, Jt, nne, ag
((TSt = require("fs/promises")),
  (sxl = require("net")),
  (jPo = require("path")),
  (ixl = require("string_decoder")));
function dxl(e) {
  let t = e.message.content;
  if (!Array.isArray(t)) return "";
  let n = new Set(
    (process.env.CLAUDE_CODE_TERMINAL_MCP_TOOLS ?? "")
      .split(",")
      .map((r) => r.trim())
      .filter(Boolean),
  );
  if (n.size === 0) return "";
  return t
    .map((r) => {
      if (r.type !== "tool_use" || !n.has(r.name)) return "";
      let s = r.input?.text;
      return typeof s === "string" ? s : "";
    })
    .filter(Boolean).join(`
`);
}
async function Nze(e, t, n) {
  if ((await Kd(e, t), Object.keys(n).length > 0))
    Hq({
      type: "state",
      patch: n,
    });
}
function stashBgStructuredResult(e) {
  mxl = e;
}
function createClassifierJobState() {
  return {
    prevState: "",
    prevStateSince: Date.now(),
    accumulatedOutputs: {},
    lastClassifyAt: 0,
    capturedIntent: "",
    inFlight: null,
    nameInFlight: false,
    dispatchEmitted: false,
    latestAsk: "",
    kicked: false,
    lastMsgCount: 0,
    permissionBridgeSubscribed: false,
    bridgeWriteChain: Promise.resolve(),
    lastEmittedDetail: "",
    lastResult: null,
  };
}
function gxl() {
  return at("tengu_bg_classifier_config", {
    useSmallFastModel: true,
    disableThinking: true,
  });
}
function hxl() {
  if (gxl()?.useSmallFastModel) return Fw();
  let e = As();
  if (tH(e) || BPt(e)) return UPt(e);
  return e;
}
function yxl(e) {
  if (U4e(e)) return [void 0, fxl];
  if (gxl()?.disableThinking) return [false, 0];
  return [void 0, fxl];
}
function main() {
  return process.argv.some(
    (e) =>
      e === "-c" ||
      e === "--continue" ||
      e === "-r" ||
      e === "--resume" ||
      e.startsWith("--resume=") ||
      e.startsWith("-r="),
  );
}
function zPo(e) {
  let t = {};
  for (let n of e) t[`surface_${n}`] = true;
  return t;
}
function xvf(e, t, n) {
  if (!Js() || e.dispatchEmitted) return;
  if (((e.dispatchEmitted = true), main())) return;
  G("tengu_bg_agent_dispatch", {
    agent: t,
    source: process.env.CLAUDE_BG_SOURCE ?? "shell",
    intentLength: e.capturedIntent.length,
    ...zPo(n),
  });
}
function captureIntent(e, t) {
  if (e.capturedIntent || !t) return e.capturedIntent;
  return ((e.capturedIntent = mwe(xc(KPo(t)), 500)), e.capturedIntent);
}
function findLatestRealUserAsk(e) {
  let t = e.findLast(
    (n) =>
      n.type === "user" &&
      !n.isMeta &&
      typeof n.message.content === "string" &&
      !_fe(n.message.content),
  );
  return t?.type === "user" && typeof t.message.content === "string" ? t.message.content : void 0;
}
function captureLatestAsk(e, t) {
  if (!t) return;
  e.latestAsk = mwe(xc(KPo(t)), 300);
}
function KPo(e) {
  let n = e.lastIndexOf("</system-reminder>");
  return (n >= 0 ? e.slice(n + 18) : e).trim();
}
function markTurnActive(e, t, n) {
  if ((ensurePermissionBridge(e), GPo(), e.kicked)) return;
  ((e.kicked = true), (e.bridgeWriteChain = e.bridgeWriteChain.then(() => _xl(t, n)).catch(Xf)));
}
function classifyAndPushDebounced(e, t, n, r, o, s, i) {
  if (!e.kicked) ((e.kicked = true), _xl(t).catch(Xf));
  let a = Date.now();
  if (a - e.lastClassifyAt < Cvf) return;
  if (e.inFlight) return;
  ((e.lastClassifyAt = a), classifyAndPush(e, t, n, e.capturedIntent, r, o, s, i, true).catch(Xf));
}
async function _xl(e, t) {
  let n = _c(e),
    r = await zi(n);
  if (!r) return;
  if (r.tempo === "active") return;
  if (Vh(r) && !t) return;
  let o = new Date().toISOString(),
    s = t ? Vm(xc(KPo(t)).replace(/\s+/g, " ").trim(), Xy) : void 0;
  if (
    (await Nze(
      n,
      {
        ...r,
        ...(s !== void 0 && {
          detail: s,
        }),
        tempo: "active",
        inFlight: ySt(),
        needs: void 0,
        block: void 0,
        suggestedReply: void 0,
        output: null,
        updatedAt: o,
      },
      {
        tempo: "active",
        needs: "",
        ...(s !== void 0 && {
          detail: s,
        }),
      },
    ),
    s)
  )
    rOe
      .appendFile(
        VQn.join(n, "timeline.jsonl"),
        De({
          at: o,
          state: r.state,
          detail: s,
          text: "",
        }) +
          `
`,
        "utf-8",
      )
      .catch(Xf);
}
async function setPermissionBlock(e, t) {
  let n = _c(e),
    r = t?.text ?? null,
    o = await zi(n);
  if (!o) return;
  if (r) {
    if (B0(o.state)) return;
    if (o.tempo === "blocked" && o.needs === r) return;
  } else if (o.tempo !== "blocked") return;
  let s = (await zi(n)) ?? o;
  if (r) {
    if (B0(s.state)) return;
    if (s.tempo === "blocked" && s.needs === r) return;
  } else if (s.tempo !== "blocked") return;
  let i = r ? "blocked" : "active";
  await Nze(
    n,
    {
      ...s,
      tempo: i,
      inFlight: ySt(),
      needs: r ?? void 0,
      block: t?.questions
        ? {
            questions: t.questions,
          }
        : void 0,
      suggestedReply: void 0,
      updatedAt: new Date().toISOString(),
    },
    {
      tempo: i,
      needs: r ?? "",
    },
  );
}
async function setWorktreeOwnership(e, t) {
  let n = _c(e),
    r = await zi(n);
  if (!r) return;
  let o = worktreeOwnershipFields(t, r);
  if (
    o.worktreePath === r.worktreePath &&
    o.worktreeBranch === r.worktreeBranch &&
    o.worktreeHookBased === r.worktreeHookBased
  )
    return;
  await Nze(
    n,
    {
      ...r,
      ...o,
      updatedAt: new Date().toISOString(),
    },
    {},
  );
}
function ensurePermissionBridge(e) {
  if (e.permissionBridgeSubscribed) return;
  ((e.permissionBridgeSubscribed = true),
    EQ.subscribe((t) => {
      if (!Js()) return;
      let n = XE();
      e.bridgeWriteChain = e.bridgeWriteChain
        .then(() => e.inFlight ?? void 0)
        .catch(() => {})
        .then(() =>
          setPermissionBlock(n, t).catch((r) => {
            if (!wn(r)) Xf(r);
          }),
        );
    }),
    YQn.subscribe((t) => {
      if (!Js()) return;
      let n = XE();
      e.bridgeWriteChain = e.bridgeWriteChain
        .then(() => e.inFlight ?? void 0)
        .catch(() => {})
        .then(() =>
          setWorktreeOwnership(n, t).catch((r) => {
            if (!wn(r)) Xf(r);
          }),
        );
    }));
}
async function Axl(e) {
  let t = ML() ?? em(),
    n = e.linkScanPath && e.linkScanPath !== t ? 0 : (e.linkScanOffset ?? 0),
    r = await scanLinkRecords(t, e.children ?? null, n);
  return {
    transcriptPath: t,
    prevOffset: n,
    scan: r,
  };
}
function markTurnAborted(e, t) {
  e.kicked = false;
  let n = _c(t);
  e.bridgeWriteChain = e.bridgeWriteChain
    .then(() => e.inFlight ?? void 0)
    .catch(() => {})
    .then(async () => {
      let r = await zi(n);
      if (!r) return;
      let { transcriptPath: o, prevOffset: s, scan: i } = await Axl(r),
        a = (await zi(n)) ?? r,
        l = a.tempo === "active";
      if (!l && i.linkScanOffset === s) return;
      await Nze(
        n,
        {
          ...a,
          ...(l && {
            tempo: "idle",
          }),
          children: i.children,
          linkScanOffset: i.linkScanOffset,
          linkScanPath: o,
          ...worktreeOwnershipFields(i.worktree, a),
          inFlight: ySt(),
          updatedAt: new Date().toISOString(),
        },
        l
          ? {
              tempo: "idle",
            }
          : {},
      );
    })
    .catch(Xf);
}
async function markApiFailure(e, t, n, r) {
  let o = $fl(n, r);
  if (!o) return;
  let s = _c(t),
    i = r
      .replace(/^Please run \/login \u00B7 /, "")
      .replace(/^Failed to authenticate\. /, "")
      .replace(/ \u00B7 Please run \/login$/, "")
      .replace(/^Not logged in$/, ""),
    a = $a(xc(i.replace(/\s+/g, " ").trim()), Xy),
    l = `${o.needs}${a ? ` \xB7 ${a}` : ""}`;
  ((e.bridgeWriteChain = e.bridgeWriteChain
    .then(() => e.inFlight ?? void 0)
    .catch(() => {})
    .then(async () => {
      let c = await zi(s);
      if (!c || Vh(c)) return;
      let { transcriptPath: u, scan: d } = await Axl(c),
        p = (await zi(s)) ?? c;
      if (Vh(p)) return;
      let f = new Date().toISOString(),
        m = o.state === "failed" ? "idle" : "blocked",
        g = o.state === "failed" ? void 0 : l;
      (await Nze(
        s,
        {
          ...p,
          state: o.state,
          detail: a,
          tempo: m,
          inFlight: ySt(),
          needs: g,
          block: void 0,
          children: d.children,
          linkScanOffset: d.linkScanOffset,
          linkScanPath: u,
          ...worktreeOwnershipFields(d.worktree, p),
          updatedAt: f,
          firstTerminalAt: o.state === "failed" && !p.firstTerminalAt ? f : p.firstTerminalAt,
        },
        {
          state: o.state,
          detail: a,
          tempo: m,
          needs: g ?? "",
        },
      ),
        rOe
          .appendFile(
            VQn.join(s, "timeline.jsonl"),
            De({
              at: f,
              state: o.state,
              detail: a,
              text: a,
            }) +
              `
`,
            "utf-8",
          )
          .catch(Xf));
    })
    .catch(Xf)),
    await e.bridgeWriteChain,
    (e.prevState = o.state),
    (e.kicked = false));
}
async function Bvf(e, t, n, r) {
  let o = await aX().catch(() => []),
    s = new Set(o.filter((a) => !B0(a.state.state) && a.state.name).map((a) => a.state.name)),
    i = "";
  for (let a = 0; a < Ovf; a++) {
    let l =
        s.size > 0
          ? `

Avoid these (already taken): ${[...s].join(", ")}`
          : "",
      c = hxl(),
      [u, d] = yxl(c),
      f = (
        await yN({
          querySource: "agent_namer",
          model: c,
          thinking: u,
          max_tokens: 32 + d,
          maxRetries: 1,
          skipSystemPromptPrefix: true,
          messages: [
            {
              role: "user",
              content: `2-4 word lowercase label for this job.
User: "${$a(n, 300)}"${
                r
                  ? `
Agent: "${$a(r, 300)}"`
                  : ""
              }

Include the MOST SPECIFIC identifier (component/file/feature). Skip generic
verbs like fix/add/update. Respond with ONLY the label.${l}`,
            },
          ],
        }).catch(() => null)
      )?.content.find((m) => m.type === "text");
    if (f?.type !== "text") {
      It("job_name", "side_query_failed");
      return;
    }
    if (((i = $a(f.text.trim().toLowerCase(), 40)), !i || Nvf.test(i))) {
      It("job_name", "degenerate_label");
      return;
    }
    if (!s.has(i)) break;
    s.add(i);
  }
  if (s.has(i)) {
    It("job_name", "all_names_taken");
    return;
  }
  ((e.bridgeWriteChain = e.bridgeWriteChain
    .then(() => e.inFlight ?? void 0)
    .catch(() => {})
    .then(async () => {
      let a = await zi(t);
      if (!a) {
        It("job_name", "state_gone_after_gen");
        return;
      }
      if (a.name) {
        xe("job_name");
        return;
      }
      (await Nze(
        t,
        {
          ...a,
          name: i,
          nameSource: "auto",
          updatedAt: new Date().toISOString(),
        },
        {
          name: i,
        },
      ),
        lHe(i, "auto").catch(ke),
        xe("job_name"));
    })
    .catch(Xf)),
    await e.bridgeWriteChain);
}
async function classifyAndPush(e, t, n, r, o, s, i, a = new Set(), l = false) {
  xvf(e, n, a);
  let c = e.inFlight;
  if (c)
    await Promise.race([
      c.catch(Xf),
      Nn(60000, void 0, {
        unref: true,
      }),
    ]);
  let u = Fvf(e, t, n, r, o, s, i, a, l);
  e.inFlight = u;
  try {
    await u;
  } finally {
    if (e.inFlight === u) e.inFlight = null;
    e.kicked = false;
  }
}
function Uvf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t]?.message.content;
    if (!Array.isArray(n)) continue;
    let r;
    for (let o = n.length - 1; o >= 0; o--) {
      let s = n[o];
      if (s.type === "text") {
        let i = xc(s.text).replace(/\s+/g, " ").trim();
        if (i.length > 8) return Vm(i, Xy);
      }
      if (s.type === "tool_use" && r === void 0) {
        let i = s.input,
          l =
            (Array.isArray(i?.questions) && typeof i.questions[0]?.question === "string"
              ? i.questions[0].question
              : void 0) ?? (typeof i?.description === "string" ? i.description : "");
        r = l ? Vm(xc(l).replace(/\s+/g, " ").trim(), Xy) : "";
      }
    }
    if (r !== void 0) return r;
  }
  return "";
}
async function Fvf(e, t, n, r, o, s, i, a, l) {
  let c = _c(t),
    u = await zi(c),
    d = o.length;
  if (u && B0(u.state) && u.tempo !== "active" && d === e.lastMsgCount) return;
  if (u && B0(u.state))
    ((e.prevState = ""), (e.prevStateSince = Date.parse(u.updatedAt) || Date.now()));
  else if (u && u.state !== e.prevState)
    ((e.prevState = u.state), (e.prevStateSince = Date.parse(u.updatedAt) || Date.now()));
  let p,
    f = "";
  if (l) {
    if (u?.tempo === "blocked" || u?.state === "blocked") return;
    p = {
      state: "working",
      tempo: "active",
      detail: Uvf(o),
      needs: void 0,
      output: {},
      source: "midturn",
    };
  } else {
    let N = e.lastMsgCount < d ? e.lastMsgCount : 0,
      B = o
        .slice(N)
        .filter(($) => !$.isApiErrorMessage)
        .map(($) => K8($) || dxl($))
        .filter(Boolean).join(`

`);
    if (!B && d > N) {
      let $ = u?.state || e.prevState || "working";
      p = {
        state: $,
        tempo: $ === "blocked" ? "blocked" : "idle",
        detail: u?.detail ?? "",
        needs: $ === "blocked" ? (u?.needs ?? e.lastResult?.needs) : void 0,
        output: {},
        source: "no-text-turn",
      };
    } else
      ((f = xc(B)),
        (p = await classify(
          f,
          e.prevState || "working",
          e.latestAsk,
          summarizeToolCalls(o),
          Math.round((Date.now() - e.prevStateSince) / 60000),
          i,
          a,
        )));
  }
  if (!p) return;
  if (s) {
    if (B0(p.state)) p.state = e.prevState || "working";
    if (p.tempo === "idle" || p.tempo === "blocked") p.tempo = "active";
  } else if (!l && p.tempo === "active" && p.state === "working") p.tempo = "idle";
  if (p.state !== e.prevState) ((e.prevState = p.state), (e.prevStateSince = Date.now()));
  if (((e.accumulatedOutputs = p.output), e.onClassified?.(p, l), !Js())) {
    if (!l) e.lastMsgCount = d;
    if (NAn())
      await BAn({
        state: p.state,
        detail: p.detail,
        tempo: B0(p.state) ? "idle" : p.tempo,
        needs: p.tempo === "blocked" ? p.needs : void 0,
      });
    return;
  }
  let m = r || e.capturedIntent,
    g = await zi(c);
  if (g && Vh(g) && g.updatedAt !== u?.updatedAt) return;
  if (!l) e.lastMsgCount = d;
  await rOe
    .mkdir(c, {
      recursive: true,
    })
    .catch(Xf);
  let h = ML() ?? em(),
    y = g?.linkScanPath && g.linkScanPath !== h ? 0 : (g?.linkScanOffset ?? 0),
    {
      children: b,
      linkScanOffset: _,
      worktree: S,
    } = await scanLinkRecords(h, g?.children ?? null, y),
    A = new Date().toISOString(),
    v = (await zi(c)) ?? g,
    C = UQn(),
    x = JKt(C.items) === JKt(v?.fan) ? v?.fan : C.items.length > 0 ? C.items : void 0,
    I = XKt(C.budget) === XKt(v?.budget) ? v?.budget : C.budget,
    k = v?.tempo === "blocked" && v.updatedAt !== u?.updatedAt,
    D = B0(p.state) && !v?.firstTerminalAt;
  if (D)
    G("tengu_bg_agent_terminal", {
      agent: n,
      outcome: p.state,
      durationMs: v ? Date.now() - Date.parse(v.createdAt) : 0,
      classifySource: Oo(p.source),
      ...zPo(a),
    });
  let P = B0(p.state) ? "idle" : k ? "blocked" : p.tempo,
    O = B0(p.state) ? void 0 : k ? v?.needs : p.tempo === "blocked" ? p.needs : void 0;
  if (!l)
    e.lastResult = {
      tempo: P,
      block: B0(p.state) || !k ? void 0 : v?.block,
      needs: O,
    };
  (await Nze(
    c,
    {
      state: p.state,
      detail: p.detail,
      tempo: P,
      inFlight: ySt(),
      fan: x,
      budget: I,
      tokens: Math.max(v?.tokens ?? 0, Gb()),
      needs: O,
      block: B0(p.state) || !k ? void 0 : v?.block,
      output: Object.keys(e.accumulatedOutputs).length > 0 ? e.accumulatedOutputs : null,
      structuredResult: mxl ?? v?.structuredResult,
      children: b,
      linkScanOffset: _,
      linkScanPath: h,
      template: n,
      routine: v?.routine,
      respawnFlags: v?.respawnFlags ?? [],
      intent: v?.intent ?? m,
      displayIntent: v?.displayIntent,
      initialPrompt: v?.initialPrompt,
      name: v?.name,
      nameSource: v?.nameSource,
      color: v?.color,
      sessionId: v?.sessionId ?? Rt(),
      resumeSessionId: Rt(),
      daemonShort: v?.daemonShort,
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      cwd: zZr() ?? v?.cwd ?? $t(),
      ...worktreeOwnershipFields(S, v),
      originCwd: v?.worktreePath ? v.originCwd : (zZr() ?? v?.originCwd),
      bridgeSessionId: v?.bridgeSessionId,
      bridgeOutboundOnly: v?.bridgeOutboundOnly,
      bridgeSessionSeq: v?.bridgeSessionSeq,
      queuedPrompt: v?.queuedPrompt,
      bgIsolation: v?.bgIsolation,
      providerEnv: v?.providerEnv,
      sessionPermissionRules: v?.sessionPermissionRules,
      memoryToggledOff: v?.memoryToggledOff,
      backend: v?.backend ?? "daemon",
      createdAt: v?.createdAt ?? A,
      updatedAt: A,
      firstTerminalAt: D ? A : (v?.firstTerminalAt ?? null),
    },
    {
      state: p.state,
      detail: p.detail,
      tempo: P,
      needs: O ?? "",
    },
  ),
    rOe
      .appendFile(
        VQn.join(c, "timeline.jsonl"),
        De({
          at: A,
          state: p.state,
          detail: p.detail,
          text: zJe(f, 4000),
        }) +
          `
`,
        "utf-8",
      )
      .catch(Xf));
  let L = g?.intent || m;
  if (!g?.name && L && i === "llm" && !e.nameInFlight) {
    let N = o
        .filter((q) => !q.isApiErrorMessage)
        .map(K8)
        .find(Boolean),
      B = N ? "" : summarizeToolCalls(o),
      $ = mwe(xc(N ?? (B ? `[calling ${B}]` : "")), 500);
    ((e.nameInFlight = true),
      Bvf(e, c, L, $)
        .catch(Xf)
        .finally(() => {
          e.nameInFlight = false;
        }));
  }
  let M = p.source
    ? p.branch && p.branch !== p.source
      ? `${p.source}/${p.branch}`
      : p.source
    : "?";
  T(`[classifier] ${p.state} (${M}) \xB7 ${p.detail}${O ? ` \xB7 needs: ${O}` : ""}`);
}
function summarizeToolCalls(e) {
  let t = new Map();
  for (let n of e)
    if (Array.isArray(n.message.content)) {
      for (let r of n.message.content)
        if (r.type === "tool_use" && !jvf.has(r.name)) t.set(r.name, (t.get(r.name) ?? 0) + 1);
    }
  return [...t]
    .sort((n, r) => r[1] - n[1])
    .slice(0, 5)
    .map(([n, r]) => (r > 1 ? `${n}\xD7${r}` : n))
    .join(", ");
}
async function classify(e, t, n, r, o, s, i = new Set()) {
  let a = Date.now(),
    l = Nfl(e),
    c,
    u = {
      input_tokens: 0,
      output_tokens: 0,
      cache_read_input_tokens: 0,
      cache_creation_input_tokens: 0,
    },
    d = 0,
    p;
  if (l)
    ((c = "preclassify"),
      (p = {
        ...k6t({}, t, l),
        source: c,
      }));
  else if (s === "heuristic")
    ((c = "heuristic"),
      (p = {
        ...k6t({}, t, Cko(e)),
        source: c,
      }));
  else {
    let f = e.slice(-Mfl),
      m = Ufl({
        tail: f,
        prev: t,
        latestAsk: n,
        toolSummary: r,
        minsInState: o,
      }),
      g = Toe({
        ttl: F9e("agent_classifier") ? "1h" : void 0,
        scope: Qxe() ? "global" : void 0,
      }),
      h = hxl(),
      [y, b] = yxl(h);
    c = "apiError";
    let _ = null;
    for (let S = 0; S < 2 && !_; S++) {
      d = S + 1;
      let A;
      try {
        A = await yN({
          querySource: "agent_classifier",
          model: h,
          thinking: y,
          max_tokens: 1024 + b,
          maxRetries: 3,
          skipSystemPromptPrefix: true,
          system: [
            {
              type: "text",
              text: Bfl,
              cache_control: g,
            },
          ],
          messages: [
            {
              role: "user",
              content:
                S === 0
                  ? m
                  : `${m}

Previous response was not valid JSON. Respond with ONLY the JSON object, nothing else.`,
            },
          ],
        });
      } catch (I) {
        T(`[classifier] sideQuery failed: ${I}`);
        break;
      }
      c = "llm";
      let v = A.usage;
      if (v)
        ((u.input_tokens += v.input_tokens),
          (u.output_tokens += v.output_tokens),
          (u.cache_read_input_tokens += v.cache_read_input_tokens ?? 0),
          (u.cache_creation_input_tokens += v.cache_creation_input_tokens ?? 0));
      let C = A.content.find((I) => I.type === "text"),
        x = C?.type === "text" ? C.text.trim() : "";
      if (!x) {
        T(
          `[classifier] no text block in response, types=${A.content.map((I) => I.type).join(",")}`,
        );
        continue;
      }
      _ = Ffl(x);
    }
    p = _
      ? {
          ...k6t(_, t, null),
          source: "llm",
        }
      : {
          ...k6t({}, t, Cko(e)),
          source: "heuristic",
        };
  }
  return (
    G("tengu_bg_classify", {
      path: $e(c),
      engine: $e(s),
      ...zPo(i),
      branch: $e(l?.branch ?? (c === "heuristic" ? "heuristic" : "none")),
      closingShape: $e(Ofl(e)),
      prevState: t,
      newState: p?.state ?? "null",
      stateChanged: p !== null && p.state !== t,
      minsInPrevState: Math.round(o),
      durationMs: Date.now() - a,
      tailChars: e.length,
      ...(c === "llm" && {
        attempts: d,
        inputTokens: u.input_tokens,
        outputTokens: u.output_tokens,
        cacheReadInputTokens: u.cache_read_input_tokens,
        cacheCreationInputTokens: u.cache_creation_input_tokens,
      }),
    }),
    p
  );
}
function worktreeOwnershipFields(e, t) {
  if (e === void 0)
    return {
      worktreePath: t?.worktreePath,
      worktreeBranch: t?.worktreeBranch,
      worktreeHookBased: t?.worktreeHookBased,
    };
  if (e === null || e.enteredExisting)
    return {
      worktreePath: void 0,
      worktreeBranch: void 0,
      worktreeHookBased: void 0,
    };
  return {
    worktreePath: e.worktreePath,
    worktreeBranch: e.worktreeBranch,
    worktreeHookBased: e.hookBased,
  };
}
async function scanLinkRecords(e, t, n) {
  let r;
  try {
    r = await rOe.open(e, "r");
  } catch {
    return {
      children: t,
      linkScanOffset: n,
    };
  }
  let o = n;
  try {
    let { size: s } = await r.stat();
    if (s === n)
      return {
        children: t,
        linkScanOffset: s,
      };
    if (((o = s < n ? 0 : n), s - o > LINK_SCAN_MAX_BYTES)) o = s - LINK_SCAN_MAX_BYTES;
    let i = Buffer.alloc(s - o);
    await r.read(i, 0, i.length, o);
    let a = i.lastIndexOf(10);
    if (a < 0)
      return {
        children: t,
        linkScanOffset: o,
      };
    let l = i.toString("utf-8", 0, a),
      c = new Map((t ?? []).map((d) => [d.href, d])),
      u;
    for (let d of l.split(`
`)) {
      let p = d.includes('"pr-link"'),
        f = d.includes('"worktree-state"'),
        m = false;
      if (((m = d.includes('"frame-link"')), !p && !f && !m)) continue;
      try {
        let g = Ft(d);
        if (g.type === "pr-link" && g.prUrl)
          c.set(g.prUrl, {
            id: String(g.prNumber ?? g.prUrl),
            href: g.prUrl,
            kind: "pr",
          });
        else if (g.type === "worktree-state") u = g.worktreeSession ?? null;
        else if (g.type === "frame-link" && g.frameUrl && g.path) {
          let h = g.path.split(/[\\/]/).pop() ?? g.path;
          (c.delete(g.frameUrl),
            c.set(g.frameUrl, {
              id: h,
              href: g.frameUrl,
              kind: "frame",
            }));
        }
      } catch {}
    }
    return {
      children: c.size > 0 ? [...c.values()] : t,
      linkScanOffset: o + a + 1,
      worktree: u,
    };
  } catch (s) {
    return (
      T(`[classifier] scanLinkRecords error: ${s}`),
      {
        children: t,
        linkScanOffset: o,
      }
    );
  } finally {
    await r.close().catch(ke);
  }
}
var rOe,
  VQn,
  mxl,
  Cvf = 15000,
  fxl = 2048,
  Ovf = 3,
  Nvf,
  jvf,
  LINK_SCAN_MAX_BYTES = 4194304;
