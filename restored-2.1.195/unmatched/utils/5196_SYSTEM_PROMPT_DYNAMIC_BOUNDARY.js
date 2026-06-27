// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xec
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0237  score=0.1231  fileCov=0.0284
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0237); dir inferred from dep-graph -> utils; 13 renamed
// ─────────────────────────────────────────────────────────────────────────
var xec = E(() => {
  ys();
  RCe();
  Sx();
  ICe();
  wec = require("path"), YKf = {
    user: "userSettings",
    project: "projectSettings",
    local: "localSettings"
  }, vec = {
    userSettings: "user",
    projectSettings: "project",
    localSettings: "local",
    flagSettings: "flag",
    policySettings: "managed"
  }, XKf = ["user", "project", "local"], JKf = new Set(["bypassPermissions", "auto", "acceptEdits"]), QKf = new Set(["project"]);
});
var Gec = {};
_t(Gec, {
  tool: () => _ec,
  tagSession: () => tagSession,
  startup: () => startup,
  resolveSettings: () => resolveSettings,
  renameSession: () => renameSession,
  query: () => query,
  parseDirectConnectUrl: () => Hec,
  listSubagents: () => listSubagents,
  listSessions: () => listSessions,
  importSessionToStore: () => importSessionToStore,
  getSubagentMessages: () => getSubagentMessages,
  getSessionMessages: () => getSessionMessages,
  getSessionInfo: () => getSessionInfo,
  forkSession: () => forkSession,
  foldSessionSummary: () => VRt,
  filterEscalatingDefaultMode: () => Cec,
  deleteSession: () => deleteSession,
  createSdkMcpServer: () => bec,
  SYSTEM_PROMPT_DYNAMIC_BOUNDARY: () => Oae,
  InMemorySessionStore: () => Vfn,
  HOOK_EVENTS: () => GO,
  EXIT_REASONS: () => nws,
  DirectConnectTransport: () => q3o,
  DirectConnectError: () => dZ,
  AbortError: () => WO
});
async function resolveSettings(e) {
  return Iec(e);
}
async function eYf(e, t) {
  try {
    await i2.copyFile(e, t);
  } catch (n) {
    if (!wn(n)) throw n;
  }
}
async function tYf(e, t) {
  if (!e) return;
  let n = e;
  try {
    let r = Ft(e);
    if (r?.claudeAiOauth?.refreshToken) delete r.claudeAiOauth.refreshToken, n = De(r);
  } catch {}
  await i2.writeFile(t, n, {
    mode: 384
  });
}
function nYf() {
  return Promise.resolve(void 0);
}
async function Nec(e, t, n, r, o = 60000) {
  if (!FS(t)) return;
  let s = pZ(n),
    i = await vc(e.load({
      projectKey: s,
      sessionId: t
    }), o, `SessionStore.load() timed out after ${o}ms for session ${t}`);
  if (!i || i.length === 0) return;
  let a = v_.join(mHt.tmpdir(), `claude-resume-${Oir.randomUUID()}`);
  try {
    let l = v_.join(a, "projects", s);
    await i2.mkdir(l, {
      recursive: true
    });
    let c = v_.join(l, `${t}.jsonl`);
    await The(c, i);
    let u = r?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR,
      d = u ?? v_.join(mHt.homedir(), ".claude"),
      p;
    try {
      p = await i2.readFile(v_.join(d, ".credentials.json"), "utf-8");
    } catch (f) {
      if (!wn(f)) throw f;
    }
    if (!u && !(r ?? process.env).ANTHROPIC_API_KEY && !(r ?? process.env).CLAUDE_CODE_OAUTH_TOKEN) p = (await nYf()) ?? p;
    if (await tYf(p, v_.join(a, ".credentials.json")), await eYf(v_.join(u ?? mHt.homedir(), ".claude.json"), v_.join(a, ".claude.json")), e.listSubkeys) {
      let f = v_.join(l, t),
        m = await vc(e.listSubkeys({
          projectKey: s,
          sessionId: t
        }), o, `SessionStore.listSubkeys() timed out after ${o}ms for session ${t}`);
      for (let g of m) {
        let h = v_.resolve(f, g + ".jsonl");
        if (!g || v_.isAbsolute(g) || g.split(/[\\/]/).includes("..") || !h.startsWith(f + v_.sep)) {
          T(`[SessionStore] skipping unsafe subpath from listSubkeys: ${g}`, {
            level: "warn"
          });
          continue;
        }
        let y = await vc(e.load({
          projectKey: s,
          sessionId: t,
          subpath: g
        }), o, `SessionStore.load() timed out after ${o}ms for session ${t} subpath ${g}`);
        if (!y || y.length === 0) continue;
        let b = [],
          _ = [];
        for (let S of y) if (K3o(S)) b.push(S);else _.push(S);
        if (_.length > 0) await i2.mkdir(v_.dirname(h), {
          recursive: true
        }), await The(h, _);
        if (b.length > 0) {
          let S = b.at(-1),
            A = v_.resolve(f, g + ".meta.json");
          await i2.mkdir(v_.dirname(A), {
            recursive: true
          });
          let {
            type: v,
            ...C
          } = S;
          await i2.writeFile(A, De(C), {
            mode: 384
          });
        }
      }
    }
    return a;
  } catch (l) {
    throw await $ir(a), l;
  }
}
function V3o(e, t, n, r) {
  let {
      systemPrompt: o,
      settings: s,
      managedSettings: i,
      settingSources: a,
      sandbox: l,
      ...c
    } = e ?? {},
    u,
    d,
    p;
  if (o === void 0) u = "";else if (typeof o === "string") u = o;else if (Array.isArray(o)) u = o;else if (o.type === "preset") d = o.append, p = o.excludeDynamicSections;
  process.env.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION ?? "unknown";
  let {
    abortController: f = Sl(),
    additionalDirectories: m = [],
    agent: g,
    agents: h,
    allowedTools: y = [],
    betas: b,
    canUseTool: _,
    continue: S,
    cwd: A,
    debug: v,
    debugFile: C,
    disallowedTools: x = [],
    tools: I,
    env: k,
    executable: D = gG() ? "bun" : "node",
    executableArgs: P = [],
    extraArgs: O = {},
    fallbackModel: L,
    enableFileCheckpointing: M,
    toolConfig: N,
    forkSession: B,
    hooks: $,
    includeHookEvents: q,
    includePartialMessages: W,
    forwardSubagentText: V,
    onElicitation: Y,
    onUserDialog: z,
    supportedDialogKinds: K,
    persistSession: Z,
    sessionStore: J,
    sessionStoreFlush: ne,
    thinking: oe,
    effort: re,
    maxThinkingTokens: ee,
    maxTurns: ce,
    maxBudgetUsd: ae,
    taskBudget: de,
    mcpServers: Ee,
    model: me,
    outputFormat: pe,
    permissionMode: ge = "default",
    allowDangerouslySkipPermissions: he = false,
    permissionPromptToolName: ie,
    plugins: le,
    getOAuthToken: He,
    getHostAuthToken: ye,
    workload: ue,
    resume: we,
    resumeSessionAt: Ce,
    sessionId: Ie,
    skills: Ve,
    stderr: Ze,
    strictMcpConfig: Be
  } = c;
  if (J && Z === false) throw Error("sessionStore cannot be used with persistSession: false -- the storage adapter requires local writes to mirror from. Use CLAUDE_CONFIG_DIR=/tmp for ephemeral local writes with external mirroring.");
  if (K !== void 0 && K.length > 0 && !z) throw Error("supportedDialogKinds requires an onUserDialog callback -- declaring dialog kinds without a handler would park dialogs nothing can answer. Provide onUserDialog, or omit supportedDialogKinds.");
  if (J && S && !we && !J.listSessions) throw Error("Options.continue with sessionStore requires store.listSessions to be implemented");
  if (J && M) throw Error("enableFileCheckpointing is not yet supported with sessionStore (backup blobs are not mirrored, so rewindFiles() fails after a store-backed resume).");
  if (J && c.spawnClaudeCodeProcess) T("sessionStore with custom spawnClaudeCodeProcess: ensure the subprocess CLAUDE_CONFIG_DIR matches the parent (same path, same separators) or transcript_mirror frames will be dropped.", {
    level: "warn"
  });
  let Me = c.pathToClaudeCodeExecutable;
  if (!Me) {
    let xt = Oec.fileURLToPath("file:///home/runner/work/claude-cli-internal/claude-cli-internal/src/entrypoints/agentSdk.ts"),
      vt = Mec.createRequire(xt),
      jt = PZl(en => vt.resolve(en));
    if (!jt) throw Error("Native CLI binary for linux-x64 not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable.");
    Me = jt;
  }
  let Ue = pe?.type === "json_schema" ? pe.schema : void 0,
    tt = k ? {
      ...k
    } : {
      ...process.env
    };
  if (!tt.CLAUDE_CODE_ENTRYPOINT) tt.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
  if (!tt.CLAUDE_AGENT_SDK_VERSION) tt.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION;
  if (M) tt.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
  if (He) tt.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = "1";
  if (ye) tt.CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH = "1";
  if (N?.askUserQuestion?.previewFormat) tt.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT = N.askUserQuestion.previewFormat;
  let bt = {};
  if (Bir.propagation.inject(Bir.context.active(), bt), "traceparent" in bt) {
    for (let xt of ["TRACEPARENT", "TRACESTATE"]) if (!(xt in (k ?? {}))) delete tt[xt];
  }
  for (let [xt, vt] of Object.entries(bt)) {
    let jt = xt.toUpperCase();
    if (!(jt in (k ?? {}))) tt[jt] = vt;
  }
  let Ke = {},
    Et = new Map();
  if (Ee) for (let [xt, vt] of Object.entries(Ee)) if (vt.type === "sdk" && vt.instance) Et.set(xt, vt.instance);else Ke[xt] = vt;
  let ct;
  if (oe) switch (oe.type) {
    case "adaptive":
      ct = {
        type: "adaptive",
        display: oe.display
      };
      break;
    case "enabled":
      ct = {
        type: "enabled",
        budgetTokens: oe.budgetTokens,
        display: oe.display
      };
      break;
    case "disabled":
      ct = {
        type: "disabled"
      };
      break;
  } else if (ee !== void 0) ct = ee === 0 ? {
    type: "disabled"
  } : {
    type: "enabled",
    budgetTokens: ee
  };
  if (n) tt.CLAUDE_CONFIG_DIR = n;
  let Je = new k3o({
      abortController: f,
      additionalDirectories: m,
      agent: g,
      betas: b,
      cwd: A,
      debug: v,
      debugFile: C,
      executable: D,
      executableArgs: P,
      extraArgs: ue ? {
        ...O,
        workload: ue
      } : O,
      pathToClaudeCodeExecutable: Me,
      env: tt,
      forkSession: B,
      stderr: Ze,
      thinkingConfig: ct,
      effort: re,
      maxTurns: ce,
      maxBudgetUsd: ae,
      taskBudget: de,
      model: me,
      fallbackModel: L,
      jsonSchema: Ue,
      permissionMode: ge,
      allowDangerouslySkipPermissions: he,
      permissionPromptToolName: ie,
      continueConversation: J ? void 0 : S,
      resume: we,
      resumeSessionAt: Ce,
      sessionId: Ie,
      settings: typeof s === "object" ? De(s) : s,
      managedSettings: i ? De(i) : void 0,
      settingSources: a,
      skills: Ve,
      allowedTools: y,
      disallowedTools: x,
      tools: I,
      mcpServers: Ke,
      strictMcpConfig: Be,
      canUseTool: !!_,
      hooks: !!$,
      includeHookEvents: q,
      includePartialMessages: W,
      persistSession: Z,
      sessionMirror: !!J,
      plugins: le,
      sandbox: l,
      spawnClaudeCodeProcess: c.spawnClaudeCodeProcess,
      deferSpawn: r
    }),
    gt = {
      systemPrompt: u,
      appendSystemPrompt: d,
      planModeInstructions: c.planModeInstructions,
      appendSubagentSystemPrompt: c.appendSubagentSystemPrompt,
      toolAliases: c.toolAliases,
      excludeDynamicSections: p,
      agents: h,
      title: c.title,
      skills: Ve,
      webSearchIsolationExemptMcpServers: c.webSearchIsolationExemptMcpServers,
      promptSuggestions: c.promptSuggestions,
      agentProgressSummaries: c.agentProgressSummaries,
      forwardSubagentText: V,
      supportedDialogKinds: K
    },
    st = new R3o(Je, t, _, $, f, Et, Ue, gt, Y, He, ye, z);
  if (J) {
    let xt = () => v_.join(tt.CLAUDE_CONFIG_DIR ?? v_.join(mHt.homedir(), ".claude"), "projects"),
      vt = ne === "eager",
      jt = new L3o(async (en, Dn) => {
        let nn = Dec(en, xt());
        if (nn) await J.append(nn, Dn);else T(`[SessionStore] dropping mirror frame: filePath ${en} is not under ${xt()} -- subprocess CLAUDE_CONFIG_DIR likely differs from parent (custom spawnClaudeCodeProcess / container?)`, {
          level: "warn"
        });
      }, void 0, (en, Dn) => {
        let nn = Dec(en, xt());
        if (nn) st.reportMirrorError(nn, Dn.message);
      }, vt ? 0 : Lir, vt ? 0 : Dir);
    st.setTranscriptMirrorBatcher(jt);
  }
  return {
    queryInstance: st,
    transport: Je,
    abortController: f,
    processEnv: tt
  };
}
function z3o(e, t, n, r) {
  if (typeof n === "string") t.write(De({
    type: "user",
    session_id: "",
    message: {
      role: "user",
      content: [{
        type: "text",
        text: n
      }]
    },
    parent_tool_use_id: null
  }) + `
`);else e.streamInput(n).catch(o => r.abort(o));
}
async function $ir(e) {
  for (let t = 0;; t++) try {
    return await i2.rm(e, {
      recursive: true,
      force: true
    });
  } catch (n) {
    if (t >= 4 || !rYf.has(on(n) ?? "")) return;
    await Nn((t + 1) * 100);
  }
}
function oYf(e, t) {
  e.waitForExit().catch(() => {}).finally(() => $ir(t));
}
function query({
  prompt: e,
  options: t
}) {
  if ((t?.resume || t?.continue) && t?.sessionStore) {
    let {
        queryInstance: s,
        transport: i,
        abortController: a,
        processEnv: l
      } = V3o({
        ...t
      }, typeof e === "string", void 0, true),
      c = v_.resolve(t.cwd ?? "."),
      u = t.sessionStore,
      d = t.loadTimeoutMs ?? 60000,
      p = t.resume;
    return (async () => {
      if (!p) p = (await vc(u.listSessions(pZ(c)), d, `SessionStore.listSessions() timed out after ${d}ms`)).slice().sort((g, h) => h.mtime - g.mtime)[0]?.sessionId;
      if (!p) return;
      return Nec(u, p, c, t.env, t.loadTimeoutMs);
    })().then(m => {
      if (m) {
        i.updateResume(p);
        let g = {
          CLAUDE_CONFIG_DIR: m
        };
        i.updateEnv(g), l.CLAUDE_CONFIG_DIR = m, s.addCleanupCallback(() => oYf(i, m));
      }
      if (!s.isClosed()) i.spawn();
    }).catch(m => {
      let g = Zr(m);
      i.spawnAbort(g), s.setError(g);
    }), z3o(s, i, e, a), s;
  }
  let {
    queryInstance: n,
    transport: r,
    abortController: o
  } = V3o(t, typeof e === "string");
  return z3o(n, r, e, o), n;
}
async function startup({
  options: e,
  initializeTimeoutMs: t = 60000
} = {}) {
  let n,
    r = e?.resume;
  if ((r || e?.continue) && e?.sessionStore) {
    let a = v_.resolve(e.cwd ?? ".");
    if (!r) {
      if (!e.sessionStore.listSessions) throw Error("Options.continue with sessionStore requires store.listSessions to be implemented");
      let l = e.loadTimeoutMs ?? 60000;
      r = (await vc(e.sessionStore.listSessions(pZ(a)), l, `SessionStore.listSessions() timed out after ${l}ms`)).slice().sort((u, d) => d.mtime - u.mtime)[0]?.sessionId;
    }
    if (r) n = await Nec(e.sessionStore, r, a, e.env, e.loadTimeoutMs);
  }
  let o, s, i;
  try {
    let p = function () {
        if (d) return;
        d = true, u.close();
      },
      a = V3o(n && r && r !== e?.resume ? {
        ...e,
        resume: r
      } : e, false, n);
    o = a.queryInstance;
    let {
      transport: l,
      abortController: c
    } = a;
    s = l;
    let u = a.queryInstance;
    if (n) {
      let f = n;
      u.addCleanupCallback(() => {
        i = l.waitForExit().catch(() => {}).then(() => $ir(f));
      });
    }
    await vc(u.initializationResult(), t, `Subprocess initialization did not complete within ${t}ms \u2014 check authentication and network connectivity`);
    let d = false;
    return {
      query(f) {
        if (d) throw Error("WarmQuery.query() can only be called once");
        d = true;
        try {
          z3o(u, l, f, c);
        } catch (m) {
          throw u.close(), m;
        }
        if (typeof f === "string") u.setIsSingleUserTurn(true);
        return u;
      },
      close: p,
      async [Symbol.asyncDispose]() {
        d = true, u.close(), await i;
      }
    };
  } catch (a) {
    if (o?.close(), n && !i) {
      let l = s;
      i = (l ? l.waitForExit().catch(() => {}) : Promise.resolve()).then(() => $ir(n));
    }
    throw await i, a;
  }
}
async function getSessionMessages(e, t) {
  if (t?.sessionStore) return SYf(t.sessionStore, e, t);
  return WZl(e, t);
}
async function listSessions(e) {
  if (e?.sessionStore) return _Yf(e.sessionStore, e);
  return eyl(e);
}
async function getSessionInfo(e, t) {
  if (t?.sessionStore) return EYf(t.sessionStore, e, t);
  return qZl(e, t);
}
async function renameSession(e, t, n) {
  if (n?.sessionStore) return AYf(n.sessionStore, e, t, n.dir);
  return zZl(e, t, n);
}
async function tagSession(e, t, n) {
  if (n?.sessionStore) return HYf(n.sessionStore, e, t, n.dir);
  return KZl(e, t, n);
}
async function deleteSession(e, t) {
  if (!FS(e)) throw Error(`Invalid sessionId: ${e}`);
  if (t?.sessionStore) {
    if (!t.sessionStore.delete) return;
    let n = pZ(t.dir);
    await t.sessionStore.delete({
      projectKey: n,
      sessionId: e
    });
    return;
  }
  return YZl(e, t);
}
async function forkSession(e, t) {
  if (t?.sessionStore) return TYf(t.sessionStore, e, t);
  return ZZl(e, t);
}
async function importSessionToStore(e, t, n) {
  if (!FS(e)) throw Error(`Invalid sessionId: ${e}`);
  let r = await rCe(e, n?.dir);
  if (!r) throw Error(`Session ${e} not found`);
  let o = pZ(n?.dir),
    s = n?.batchSize && n.batchSize > 0 ? n.batchSize : Lir;
  if (await kec(r.filePath, {
    projectKey: o,
    sessionId: e
  }, t, s), n?.includeSubagents === false) return;
  let i = r.filePath.replace(/\.jsonl$/, ""),
    a = v_.join(i, "subagents");
  for (let l of await gYf(a)) {
    let c = v_.relative(i, l).split(v_.sep);
    c[c.length - 1] = c.at(-1).replace(/\.jsonl$/, "");
    let u = {
      projectKey: o,
      sessionId: e,
      subpath: c.join("/")
    };
    await kec(l, u, t, s);
    let d = l.replace(/\.jsonl$/, ".meta.json");
    try {
      let p = Ft(await i2.readFile(d, "utf8"));
      await t.append(u, [{
        type: "agent_metadata",
        ...p
      }]);
    } catch (p) {
      if (!wn(p)) throw p;
    }
  }
}
async function kec(e, t, n, r) {
  let o = $ec.createInterface({
      input: Nir.createReadStream(e, {
        encoding: "utf8"
      }),
      crlfDelay: 1 / 0
    }),
    s = [],
    i = 0;
  for await (let a of o) {
    if (!a) continue;
    if (s.push(Ft(a)), i += a.length, s.length >= r || i >= Dir) await n.append(t, s), s = [], i = 0;
  }
  if (s.length > 0) await n.append(t, s);
}
async function gYf(e) {
  let t = [];
  async function n(r) {
    let o;
    try {
      o = await i2.readdir(r, {
        withFileTypes: true
      });
    } catch {
      return;
    }
    for (let s of o) {
      let i = v_.join(r, s.name);
      if (s.isDirectory()) await n(i);else if (s.isFile() && s.name.endsWith(".jsonl")) t.push(i);
    }
  }
  return await n(e), t;
}
async function listSubagents(e, t) {
  if (t?.sessionStore) return vYf(t.sessionStore, e, t.dir);
  return sec(e, t);
}
async function getSubagentMessages(e, t, n) {
  if (n?.sessionStore) return wYf(n.sessionStore, e, t, n);
  return iec(e, t, n);
}
function Bec(e) {
  let t = v_.resolve(e ?? "."),
    n;
  try {
    n = Nir.realpathSync(t);
  } catch {
    n = t;
  }
  return o_(n);
}
function pZ(e) {
  return LE(Bec(e));
}
function Uec(e) {
  return e.map(t => De(t)).join(`
`) + `
`;
}
function Rec(e, t, n) {
  if (t !== void 0 && t > 0) return e.slice(n, n + t);
  if (n > 0) return e.slice(n);
  return e;
}
function K3o(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "agent_metadata";
}
async function _Yf(e, t) {
  let n = Bec(t.dir),
    r = LE(n),
    o = t.offset ?? 0,
    s = t.limit;
  if (e.listSessionSummaries) {
    let c = await e.listSessionSummaries(r),
      u = e.listSessions ? new Map((await e.listSessions(r)).map(m => [m.sessionId, m])) : void 0,
      d = [];
    for (let m of c) {
      let g = u?.get(m.sessionId);
      if (u && !g) continue;
      let h = g !== void 0 && m.mtime < g.mtime;
      d.push({
        sessionId: m.sessionId,
        mtime: h ? g.mtime : m.mtime,
        info: h ? void 0 : rws(m, n)
      });
    }
    if (u) {
      let m = new Set(c.map(g => g.sessionId));
      for (let [g, h] of u) if (!m.has(g)) d.push({
        sessionId: g,
        mtime: h.mtime
      });
    } else T("listSessionSummaries without listSessions: gap-fill skipped; sessions lacking a sidecar will be omitted");
    d.sort((m, g) => g.mtime - m.mtime);
    let p = Rec(d, s, o),
      f = p.filter(m => m.info === void 0);
    if (f.length > 0) {
      let m = await Lec(e, f, t.dir, n),
        g = new Map(m.map(h => [h.sessionId, h]));
      for (let h of p) if (h.info === void 0) h.info = g.get(h.sessionId) ?? null;
    }
    return p.flatMap(m => m.info ? [m.info] : []);
  }
  if (!e.listSessions) throw Error("sessionStore.listSessions is not implemented -- cannot list sessions. Provide a store with a listSessions() method.");
  let a = (await e.listSessions(r)).slice().sort((c, u) => u.mtime - c.mtime),
    l = Rec(a, s, o);
  return Lec(e, l, t.dir, n);
}
async function Lec(e, t, n, r) {
  return (await Promise.allSettled(t.map(async s => {
    let i = await jec(e, s.sessionId, n);
    if (!i) return null;
    let a = fbt(s.sessionId, Fec(i, s.mtime), r);
    return a ? {
      ...a,
      lastModified: s.mtime
    } : null;
  }))).flatMap((s, i) => {
    let a = t[i];
    if (s.status === "fulfilled") return s.value ? [s.value] : [];
    return [{
      sessionId: a.sessionId,
      summary: "",
      lastModified: a.mtime
    }];
  });
}
function Fec(e, t) {
  let n = Buffer.from(e, "utf-8"),
    r = n.length,
    o = n.subarray(0, Mw).toString("utf-8"),
    s = r > Mw ? n.subarray(r - Mw).toString("utf-8") : o;
  return {
    mtime: t,
    size: r,
    head: o,
    tail: s
  };
}
function bYf(e) {
  let t = e.trimEnd(),
    n = t.slice(t.lastIndexOf(`
`) + 1);
  try {
    let r = Ft(n);
    if (typeof r === "object" && r !== null && "timestamp" in r && typeof r.timestamp === "string") {
      let o = Date.parse(r.timestamp);
      if (!Number.isNaN(o)) return o;
    }
  } catch {}
  return Date.now();
}
async function jec(e, t, n) {
  let r = pZ(n),
    o = await e.load({
      projectKey: r,
      sessionId: t
    });
  if (!o || o.length === 0) return null;
  return Uec(o);
}
async function SYf(e, t, n) {
  if (!FS(t)) return [];
  let r = pZ(n.dir),
    o = await e.load({
      projectKey: r,
      sessionId: t
    });
  if (!o || o.length === 0) return [];
  return jZl(o, {
    limit: n.limit,
    offset: n.offset,
    includeSystemMessages: n.includeSystemMessages
  });
}
async function EYf(e, t, n) {
  if (!FS(t)) return;
  let r = await jec(e, t, n.dir);
  if (!r) return;
  let o = Fec(r, bYf(r));
  return fbt(t, o) ?? void 0;
}
async function AYf(e, t, n, r) {
  if (!FS(t)) throw Error(`Invalid sessionId: ${t}`);
  if (!n.trim()) throw Error("title must be non-empty");
  let o = pZ(r);
  await e.append({
    projectKey: o,
    sessionId: t
  }, [{
    type: "custom-title",
    customTitle: n.trim(),
    sessionId: t,
    uuid: Oir.randomUUID(),
    timestamp: new Date().toISOString()
  }]);
}
async function HYf(e, t, n, r) {
  if (!FS(t)) throw Error(`Invalid sessionId: ${t}`);
  if (n !== null) {
    let s = B4(n).trim();
    if (!s) throw Error("tag must be non-empty (use null to clear)");
    n = s;
  }
  let o = pZ(r);
  await e.append({
    projectKey: o,
    sessionId: t
  }, [{
    type: "tag",
    tag: n ?? "",
    sessionId: t,
    uuid: Oir.randomUUID(),
    timestamp: new Date().toISOString()
  }]);
}
async function TYf(e, t, n) {
  if (!FS(t)) throw Error(`Invalid sessionId: ${t}`);
  if (n.upToMessageId && !FS(n.upToMessageId)) throw Error(`Invalid upToMessageId: ${n.upToMessageId}`);
  let r = pZ(n.dir),
    o = await e.load({
      projectKey: r,
      sessionId: t
    });
  if (!o || o.length === 0) throw Error(`Session ${t} not found`);
  let {
    entries: s,
    forkedSessionId: i
  } = eec(o, t, n);
  return await e.append({
    projectKey: r,
    sessionId: i
  }, s), {
    sessionId: i
  };
}
async function vYf(e, t, n) {
  if (!FS(t)) return [];
  if (!e.listSubkeys) throw Error("sessionStore.listSubkeys is not implemented -- cannot list subagents. Provide a store with a listSubkeys() method.");
  let r = pZ(n),
    o = await e.listSubkeys({
      projectKey: r,
      sessionId: t
    }),
    s = new Set();
  for (let i of o) {
    if (!i.startsWith("subagents/")) continue;
    let a = i.split("/").at(-1);
    if (a.startsWith("agent-")) s.add(a.slice(6));
  }
  return [...s];
}
async function wYf(e, t, n, r) {
  if (!FS(t)) return [];
  if (!n) return [];
  let o = pZ(r.dir),
    s = `subagents/agent-${n}`;
  if (e.listSubkeys) {
    let u = await e.listSubkeys({
        projectKey: o,
        sessionId: t
      }),
      d = `agent-${n}`,
      p = u.find(f => f.startsWith("subagents/") && f.split("/").at(-1) === d);
    if (!p) return [];
    s = p;
  }
  let i = await e.load({
    projectKey: o,
    sessionId: t,
    subpath: s
  });
  if (!i || i.length === 0) return [];
  let a = i.findLast(K3o),
    l = typeof a?.toolUseId === "string" ? a.toolUseId : void 0,
    c = i.filter(u => !K3o(u));
  if (c.length === 0) return [];
  return B3o(Buffer.from(Uec(c)), {
    limit: r.limit,
    offset: r.offset
  }, l);
}
function Dec(e, t) {
  let n = v_.relative(t, e),
    r = n.split(v_.sep);
  if (r[0] === ".." || v_.isAbsolute(n)) return null;
  if (r.length < 2) return null;
  let o = r[0],
    s = r[1];
  if (r.length === 2 && s.endsWith(".jsonl")) return {
    projectKey: o,
    sessionId: s.replace(/\.jsonl$/, "")
  };
  if (r.length >= 4) {
    let i = r.slice(2),
      a = i.length - 1;
    return i[a] = i.at(-1).replace(/\.jsonl$/, ""), {
      projectKey: o,
      sessionId: s,
      subpath: i.join("/")
    };
  }
  return null;
}
var Pec, Oir, Nir, i2, Mec, mHt, v_, $ec, Oec, Bir, rYf;