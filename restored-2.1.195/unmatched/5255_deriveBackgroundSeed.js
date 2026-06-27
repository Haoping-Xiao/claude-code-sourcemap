// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qar
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0059  score=0.1332  fileCov=0.0061
// note: nearest: src/main.tsx (0.0059); 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var qar = E(() => {
  zb();
  ft();
  np();
  dn();
  kt();
  S_();
  tfe();
  D6e();
  $S();
  CWo();
  Pw();
  Rm();
  je();
  wr();
  At();
  iKe();
  ys();
  YS();
  bm();
  Yf();
  y_();
  _a();
  Jt();
  OI();
  soc = require("crypto"), DC = require("fs/promises"), Fse = require("path"), ioc = require("timers/promises"), OQt = /^[\w-]+$/;
  iQf = ve(() => dt.object({
    taskId: dt.string().regex(OQt),
    pid: dt.number().int().positive(),
    procStart: dt.string().optional(),
    startTimeTicks: dt.number().int().optional(),
    command: dt.string(),
    description: dt.string(),
    outputPath: Nar(() => [bTe()]),
    lastReportedTotalLines: dt.number().int(),
    toolUseId: dt.string().optional(),
    kind: dt.enum(["bash", "monitor"]).optional(),
    agentId: dt.string().regex(OQt).optional()
  })), aQf = ve(() => dt.object({
    id: dt.string(),
    cron: dt.string(),
    prompt: dt.string(),
    createdAt: dt.number(),
    recurring: dt.boolean().optional(),
    agentId: dt.string().optional(),
    kind: dt.literal("loop").optional()
  })), lQf = ve(() => dt.object({
    taskId: dt.string().regex(OQt),
    workflowRunId: dt.string().regex(/^wf_[a-z0-9-]{6,}$/),
    scriptPath: dt.string(),
    scriptSha256: dt.string().regex(/^[0-9a-f]{64}$/).optional(),
    argsJson: dt.string().optional(),
    description: dt.string(),
    startTime: dt.number().optional(),
    transcriptDir: Nar(() => [oF()])
  })), cQf = ve(() => dt.object({
    agentId: dt.string().regex(OQt),
    agentType: dt.string().optional(),
    description: dt.string().optional(),
    toolUseId: dt.string().optional(),
    spawnDepth: dt.number().int().optional(),
    startTime: dt.number().optional(),
    transcriptPath: Nar(() => [oF()]).optional(),
    parentAgentId: dt.string().regex(OQt).optional()
  })), uQf = ve(() => dt.object({
    writtenAtMs: dt.number(),
    shells: dt.array(iQf()),
    cron: dt.array(aQf()),
    agents: dt.array(cQf()).optional(),
    workflows: dt.array(lQf()).optional(),
    prefill: dt.object({
      text: dt.string(),
      boundaryUuid: dt.string().optional()
    }).optional()
  }));
});
var yoc = {};
_t(yoc, {
  spawnBackgroundFork: () => spawnBackgroundFork,
  deriveBackgroundSeed: () => deriveBackgroundSeed,
  call: () => call
});
async function spawnBackgroundFork(e, t, n, r, o, s, i, a, l, c) {
  let u = r_(),
    d = typeof n === "string" ? n : void 0,
    p = Array.from(o.values()).filter(C => C.source === "session").map(C => C.path),
    f = s.session ?? [],
    m = i.session ?? [],
    g = f.length > 0 || m.length > 0 ? {
      allow: [...f],
      deny: [...m]
    } : void 0,
    h = s.cliArg ?? [],
    y = i.cliArg ?? [],
    b = Gm(),
    _ = Boolean(b && !b.enteredExisting),
    S = xWo();
  await vc(IC(), 2000, "flush timeout").catch(() => {});
  let A = [...(S !== null ? ["--resume", S, "--fork-session"] : []), ...(c?.replyOnResume ? ["--reply-on-resume"] : []), ...zBe(), ...p.flatMap(C => ["--add-dir", C]), ...h.flatMap(C => ["--allowed-tools", C]), ...y.flatMap(C => ["--disallowed-tools", C]), ...(u ? ["--model", u] : []), ...(d && vke() ? ["--effort", d] : []), "--permission-mode", r, ...(t ? ["--", t] : [])],
    v = await SZ(A, c?.providedSessionId, "repl", b?.worktreePath ?? yr(), {
      ...e,
      worktree: _ ? {
        path: b.worktreePath,
        branch: b.worktreeBranch,
        hookBased: b.hookBased ?? !1,
        originCwd: b.originalCwd
      } : void 0,
      sessionPermissionRules: g,
      memoryToggledOff: bD() || void 0
    }, c?.extraEnv).catch(C => ({
      ok: !1,
      error: `Couldn't background \u2014 ${be(C)}`,
      reason: void 0
    }));
  if (!v.ok) {
    G("tengu_background_spawn_failed", {});
    let C = !1;
    if (a === "left_arrow" && c?.providedSessionId !== void 0 && S !== null && !v.alive) {
      let x = _c(c.providedSessionId.slice(0, 8)),
        I = await zi(x);
      if (I) {
        let k = Var.join(Var.dirname(S), `${c.providedSessionId}.jsonl`);
        C = await OHt.copyFile(S, k).then(() => Kd(x, {
          ...I,
          state: "failed",
          tempo: "idle",
          needs: void 0,
          block: void 0,
          inFlight: void 0,
          detail: "couldn't start in the background \u2014 press Enter to retry",
          linkScanPath: k,
          respawnFlags: j0e(Mar(A)),
          updatedAt: new Date().toISOString()
        }).catch(async D => {
          throw await OHt.rm(k, {
            force: !0
          }).catch(() => {}), D;
        })).then(() => !0, D => (ke(D), !1));
      }
      if (C && b) Eft(null), _Ee();
    }
    if (a === "left_arrow") if (C) It("repl_background_fork", "queued_for_later");else Le("repl_background_fork", "spawn_failed");
    return {
      ok: !1,
      error: v.error,
      queued: C,
      reason: v.reason
    };
  }
  if (G("tengu_background", {
    via_flag: !1,
    via: $e(a)
  }), a === "left_arrow") xe("repl_background_fork");
  if (b) Eft(null), _Ee();
  if (e.name === void 0 && v.sessionId) {
    let C = v.short,
      x = pAt(Py([...l]), AbortSignal.timeout(gQf)).then(I => I ? Zce(C, I, "auto") : void 0).catch(() => {});
    if (a === "command") Ci(() => x);
  }
  return {
    ok: !0,
    short: v.short,
    handedOff: _,
    hadWorktree: b !== null
  };
}
function deriveBackgroundSeed(e, t) {
  let n = t,
    r = !1,
    o;
  for (let a = e.length - 1; a >= 0; a--) {
    let l = e[a];
    if (l.type === "assistant" && o === void 0) {
      let c = K8(l);
      if (c) o = c.replace(/\s+/g, " ").trim().slice(0, 120);
    }
    if (l.type === "user" && !l.isMeta && !bfe(l)) {
      let c = P$(l)?.trim();
      if (c && _fe(c)) {
        if (c.startsWith(`<${zC}>`)) r = !0;
        continue;
      }
      if (r = !0, !n && c) n = c;
    }
    if (r && n && o !== void 0) break;
  }
  if (!r && !t) return null;
  let s = Gg(Rt()),
    i = dz(Rt());
  return {
    intent: (n || "(backgrounded)").slice(0, 200),
    name: s ?? i,
    nameSource: s ? "user" : i ? "auto" : void 0,
    detail: o
  };
}
function hQf(e) {
  let t = goc.c(56),
    {
      onDone: n,
      prompt: r,
      seed: o,
      messages: s,
      isMidTurn: i
    } = e,
    a = Ht(AQf),
    l = Ht(EQf),
    c = Ht(SQf),
    u = Ht(bQf),
    d = Ht(_Qf),
    p = Ht(yQf),
    f = $T(),
    m;
  if (t[0] !== p) m = a7t(p), t[0] = p, t[1] = m;else m = t[1];
  let g = m,
    h,
    y;
  if (t[2] !== p) {
    let V = NYe(p);
    h = UQt(p, V), y = a7t(CB(p, Y => BQt(Y, V)), {
      cronFilter: Y => !$Ht(Y, V)
    }), t[2] = p, t[3] = h, t[4] = y;
  } else h = t[3], y = t[4];
  let b;
  if (t[5] !== h || t[6] !== y) b = {
    carryOverCount: h,
    abandonable: y
  }, t[5] = h, t[6] = y, t[7] = b;else b = t[7];
  let {
      carryOverCount: _,
      abandonable: S
    } = b,
    [A, v] = NHt.useState(S.count === 0),
    C = NHt.useRef(!1),
    x;
  if (t[8] !== S.count || t[9] !== c || t[10] !== u || t[11] !== d || t[12] !== _ || t[13] !== A || t[14] !== a || t[15] !== g.count || t[16] !== i || t[17] !== s || t[18] !== n || t[19] !== l || t[20] !== r || t[21] !== o || t[22] !== f || t[23] !== p) x = () => {
    if (!A || C.current) return;
    C.current = !0, (async () => {
      let V = await Bar(p),
        Y;
      if (V) {
        Y = hoc.randomUUID();
        try {
          let K = _c(Y.slice(0, 8));
          await OHt.mkdir(K, {
            recursive: !0,
            mode: 448
          }), await Uar(K, V.payload), await V.checkpointAgents(f);
        } catch {
          Y = void 0;
        }
      }
      let z = await spawnBackgroundFork(o, r, a, l, c, u, d, "command", s, {
        replyOnResume: i,
        providedSessionId: Y
      });
      if (z.ok) {
        if (V && Y) V.disown(f);
        G("tengu_background_fork", {
          confirmed: S.count > 0,
          inflight_count: g.count,
          carryover_count: _,
          mid_turn: i,
          had_prompt: r.length > 0,
          had_worktree: z.hadWorktree,
          worktree_handed_off: z.handedOff,
          ...War(Y ? V?.payload : null)
        }), n(), await ki(0, "prompt_input_exit", {
          suppressResumeHint: !0,
          finalMessage: $Qt(z.short, z.handedOff ? "(worktree handed off)" : void 0)
        });
      } else {
        if (Y) V?.abandon();
        n(z.error);
      }
    })();
  }, t[8] = S.count, t[9] = c, t[10] = u, t[11] = d, t[12] = _, t[13] = A, t[14] = a, t[15] = g.count, t[16] = i, t[17] = s, t[18] = n, t[19] = l, t[20] = r, t[21] = o, t[22] = f, t[23] = p, t[24] = x;else x = t[24];
  let I;
  if (t[25] !== c || t[26] !== u || t[27] !== d || t[28] !== A || t[29] !== a || t[30] !== g.count || t[31] !== i || t[32] !== s || t[33] !== n || t[34] !== l || t[35] !== r || t[36] !== o || t[37] !== f || t[38] !== p) I = [A, a, l, c, u, d, g.count, i, o, n, r, s, p, f], t[25] = c, t[26] = u, t[27] = d, t[28] = A, t[29] = a, t[30] = g.count, t[31] = i, t[32] = s, t[33] = n, t[34] = l, t[35] = r, t[36] = o, t[37] = f, t[38] = p, t[39] = I;else I = t[39];
  if (NHt.useEffect(x, I), A) {
    let V;
    if (t[40] === Symbol.for("react.memo_cache_sentinel")) V = FQt.jsx(w, {
      dimColor: !0,
      children: "Backgrounding\u2026"
    }), t[40] = V;else V = t[40];
    return V;
  }
  let k;
  if (t[41] !== g.count || t[42] !== n) k = () => {
    G("tengu_background_declined", {
      inflight_count: g.count
    }), n();
  }, t[41] = g.count, t[42] = n, t[43] = k;else k = t[43];
  let D = k,
    P;
  if (t[44] !== _) P = _ > 0 ? ` ${_} ${bn(_, "task")} will carry over to the background session.` : "", t[44] = _, t[45] = P;else P = t[45];
  let O = P,
    L = `${S.summary} will be stopped.${O}`,
    M = S.count,
    N;
  if (t[46] !== S.count) N = bn(S.count, "task"), t[46] = S.count, t[47] = N;else N = t[47];
  let B = `Background anyway (${M} ${N} will be stopped)`,
    $;
  if (t[48] === Symbol.for("react.memo_cache_sentinel")) $ = () => v(!0), t[48] = $;else $ = t[48];
  let q;
  if (t[49] !== D || t[50] !== B) q = FQt.jsx(Kl, {
    confirmLabel: B,
    cancelLabel: "Stay",
    onConfirm: $,
    onCancel: D
  }), t[49] = D, t[50] = B, t[51] = q;else q = t[51];
  let W;
  if (t[52] !== D || t[53] !== q || t[54] !== L) W = FQt.jsx(zn, {
    title: "Background this session?",
    subtitle: L,
    onCancel: D,
    children: q
  }), t[52] = D, t[53] = q, t[54] = L, t[55] = W;else W = t[55];
  return W;
}
function yQf(e) {
  return e.tasks;
}
function _Qf(e) {
  return e.toolPermissionContext.alwaysDenyRules;
}
function bQf(e) {
  return e.toolPermissionContext.alwaysAllowRules;
}
function SQf(e) {
  return e.toolPermissionContext.additionalWorkingDirectories;
}
function EQf(e) {
  return e.toolPermissionContext.mode;
}
function AQf(e) {
  return e.effortValue;
}
var goc,
  hoc,
  OHt,
  Var,
  NHt,
  FQt,
  call = async (e, t, n) => {
    if (Js()) return G("tengu_background_already_bg", {}), e(), SHe(), null;
    if (u3()) return e("Cannot background \u2014 session persistence is disabled, so the forked job would have nothing to resume."), null;
    let r = (n ?? "").trim(),
      o = deriveBackgroundSeed(t.messages, r);
    if (o === null) return e("Nothing to background yet \u2014 send a message first."), null;
    return FQt.jsx(hQf, {
      onDone: e,
      prompt: r,
      seed: o,
      messages: t.messages,
      isMidTurn: t.isMidTurn ?? !1
    });
  },
  gQf = 3000;