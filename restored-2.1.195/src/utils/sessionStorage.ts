// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zf
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=modified  jaccard=0.2224  score=0.3996  fileCov=0.3341
// note: deminified; 132 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Zf = E(() => {
  fn();
  PLl();
  WLl();
  VLl();
  uDl();
  dDl();
  LDl();
  UDl();
  rPl();
  cPl();
  HPl();
  UOo();
  VPl();
  YPl();
  nMl();
  s1l();
  f1l();
  v1l();
  sNl();
  lBl();
  xBl();
  LBl();
  VBl();
  rUl();
  sUl();
  aUl();
  gUl();
  AUl();
  TUl();
  wUl();
  vFl();
  kFl();
  RFl();
  u4l();
  _Gl();
  SGl();
  $Gl();
  KGl();
  oWl();
  VVl();
  JVl();
  n9l();
  X2o();
  k9l();
  L9l();
  P9l();
  W9l();
  e8l();
  s8l();
  s6l();
  E6l();
  T6l();
  w6l();
  I6l();
  sYe();
  N6l();
  z6l();
  ozl();
  lH();
  Ire();
  Dzl();
  Ozl();
  Vzl();
  Zzl();
  oKl();
  DKl();
  jKl();
  WKl();
  KKl();
  H7l();
  k7l();
  N7l();
  F7l();
  W7l();
  J7l();
  Z7l();
  tXl();
  rXl();
  oXl();
  iXl();
  lXl();
  uXl();
  vXl();
  DXl();
  $Xl();
  BXl();
  VXl();
  KXl();
  vn();
  At();
  LMe();
  je();
  II();
  dn();
  rq();
  a8t();
  X4();
  AA();
  glt();
  vYt();
  Qi();
  ft();
  oo();
  Ls();
  JXl();
  rir();
  EJl();
  xJl();
  KJl();
  iQl();
  o3o();
  qyt();
  hQl();
  TQl();
  wQl();
  UQl();
  VQl();
  KQl();
  XQl();
  QQl();
  eZl();
  vf();
  dr();
  ((K1e = require("path")),
    (aZf = (rZl(), ro(nZl)).default),
    (Noc = (hZl(), ro(gZl)).default),
    (Zar = (Xtc(), ro(Ytc)).default),
    (Boc = (fnc(), ro(pnc)).default),
    (jHt = (gnc(), ro(mnc)).default),
    (Koc = (vnc(), ro(Tnc))),
    (lZf = Koc.default),
    (FWo = Koc.goalNonInteractive),
    (Uoc = (Lnc(), ro(Rnc)).default),
    (cZf = (Unc(), ro(Bnc)).default),
    (uZf = []),
    (Foc = (znc(), ro(Vnc)).default),
    (tlr = Yoc?.default ?? null),
    (joc = Yoc?.prideNonInteractive ?? null),
    (Goc = (boc(), ro(_oc)).default),
    (Xoc = (voc(), ro(Toc))),
    (Woc = Xoc?.default ?? null),
    (qoc = Xoc?.stopNonInteractive ?? null),
    (dZf = {
      type: "prompt",
      name: "insights",
      description: "Generate a report analyzing your Claude Code sessions",
      contentLength: 0,
      progressMessage: "analyzing your sessions",
      source: "builtin",
      disableModelInvocation: !0,
      requires: {
        workspace: !0,
      },
      async getPromptForCommand(e, t) {
        let n = (await Promise.resolve().then(() => ($oc(), Moc))).default;
        if (n.type !== "prompt") throw Error("unreachable");
        return n.getPromptForCommand(e, t);
      },
    }),
    (pZf = [
      VOo,
      qLl,
      cBo,
      v6l,
      qPl,
      tOo,
      iUl,
      ...(nlr ? [nlr] : []),
      Q7l,
      ...(rlr ? [rlr] : []),
      b4o,
      _4o,
      S4o,
      Qsr,
      E4o,
      bGl,
      D9l,
      R9l,
      sXl,
      aXl,
      cXl,
      R4o,
      YQl,
      JQl,
      ZQl,
      OWo,
    ].filter(Boolean)),
    (fZf = [WQt, NWo, BWo, UWo].filter(Boolean)),
    (qQt = Cn(() => [
      DLl,
      qXl,
      A7l,
      tMl,
      zKl,
      GKl,
      eOo,
      BDl,
      LXl,
      Wer,
      kOo,
      ...(tlr ? [tlr] : []),
      Qer,
      o1l,
      sNo,
      d1l,
      p1l,
      LOo,
      FPl,
      dNo,
      pNo,
      oNl,
      ...(Goc && Kx() ? [Goc] : []),
      ...(Woc && Kx() ? [Woc] : []),
      XNo,
      f3o,
      g3o,
      P4o,
      qjo,
      h3o,
      X7l,
      oBo,
      nUl,
      oUl,
      mUl,
      TFl,
      xFl,
      c4l,
      IBl,
      mFo,
      tBo,
      t3o,
      sQl,
      x7l,
      TFo,
      Ksr,
      Ysr,
      wFo,
      qVl,
      XVl,
      t9l,
      J2o,
      Z9l,
      o8l,
      vQl,
      C4o,
      Rjo,
      rzl,
      yOo,
      rsr,
      v9l,
      _9l,
      G7l,
      H6l,
      wjo,
      G9l,
      B4o,
      N1e,
      Loe,
      ICo,
      xCo,
      kCo,
      HQl,
      gQl,
      Cjo,
      Ijo,
      dZf,
      cZf,
      aZf,
      ...(Noc ? [Noc] : []),
      ...(Zar && lce() ? [Zar] : []),
      ...(Boc ? [Boc] : []),
      ...(jHt ? [jHt] : []),
      ...(GHt ? [GHt] : []),
      Lzl,
      Ujo,
      SFo,
      Jjo,
      lZf,
      FWo,
      LKl,
      FKl,
      j4o,
      TXl,
      HUl(),
      EUl(),
      ...(!g7() || fr() === "gateway" ? [vUl] : []),
      Vjo,
      ...(elr ? [elr] : []),
      o6l,
      GLl,
      ...[],
      ...uZf,
      S6l,
      ...(Uoc ? [Uoc] : []),
      ...(Foc ? [Foc] : []),
      I4o,
      ...(WQt ? [WQt] : []),
      ...(NWo ? [NWo] : []),
      ...(BWo ? [BWo] : []),
      ...(UWo ? [UWo] : []),
      ...zXl,
      ...[],
    ])),
    (mQ = Cn(() => new Set(qQt().flatMap((e) => [e.name, ...(e.aliases ?? [])])))),
    (Y8t = Cn(() => new Set([...mQ(), ...k4o().map((e) => e.name)]))));
  ((Voc = (MWo(), ro(PWo)).getWorkflowCommands), (gZf = (MWo(), ro(PWo)).invalidateWorkflowCache));
  olr = Cn(async (e) => {
    let t = performance.now(),
      [{ skillDirCommands: n, pluginSkills: r, bundledSkills: o, builtinPluginSkills: s }, i, a] =
        await Promise.all([
          mZf(e).then((c) => (Zc("skills_load_ms", performance.now() - t, t), c)),
          Vze(),
          Voc ? Voc(e) : Promise.resolve([]),
        ]),
      l = yQ([...n, ...a, ...i, ...r, ...o, ...s, ...qQt()]);
    return (
      Z0e(
        "command",
        l
          .map((c) => ({
            name: c.name,
            source: c.type === "prompt" ? c.source : "builtin",
          }))
          .reverse(),
        {
          resolves: !0,
        },
      ),
      l
    );
  }, GWo);
  if (!(olr.cache instanceof Map)) olr.cache = new Map();
  _Zf = new Set();
  aC = Cn(async (e) => {
    if (N2()) return [];
    return (await mA(e)).filter(Y1e);
  }, GWo);
  if (!(aC.cache instanceof Map)) aC.cache = new Map();
  Lue = Cn(async (e) => {
    if (N2()) return [];
    try {
      let n = (await mA(e)).filter(
        (r) =>
          r.type === "prompt" &&
          r.source !== "builtin" &&
          !Poe(r) &&
          (r.hasUserSpecifiedDescription || r.whenToUse) &&
          (r.loadedFrom === "skills" ||
            r.loadedFrom === "plugin" ||
            r.loadedFrom === "bundled" ||
            r.disableModelInvocation),
      );
      return (xe("cmd_load"), n);
    } catch (t) {
      return (
        ke(Zr(t)),
        It("cmd_load", "cmd_load_slash_tool_skills_failed"),
        T("Returning empty skills array due to load failure"),
        []
      );
    }
  }, GWo);
  if (!(Lue.cache instanceof Map)) Lue.cache = new Map();
  ((ilr = new Set([
    J2o,
    P4o,
    oBo,
    Rjo,
    kOo,
    ...(tlr ? [tlr] : []),
    Cjo,
    LOo,
    yOo,
    tOo,
    mFo,
    TFo,
    j4o,
    XNo,
    wjo,
    Jjo,
    h3o,
    g3o,
    SFo,
    Vjo,
    Loe,
    xCo,
    S4o,
    Qsr,
    ...(OWo ? [OWo] : []),
    ...(Zar ? [Zar] : []),
    wFo,
    eOo,
    dNo,
    Ujo,
    f3o,
    qjo,
    t3o,
    b4o,
    Wer,
    Qer,
    FWo,
    C4o,
    I4o,
    cBo,
    R4o,
    tBo,
    Ysr,
    Ksr,
    ...(nlr ? [nlr] : []),
    ...(jHt ? [jHt] : []),
    ...(GHt ? [GHt] : []),
  ])),
    (qWo = new Set([
      Qer,
      VOo,
      Wer,
      Ijo,
      pNo,
      sNo,
      FWo,
      fJl,
      ...(qoc ? [qoc] : []),
      _4o,
      ICo,
      kCo,
      rWl,
      lPl,
      ...(joc ? [joc] : []),
      ...(rlr ? [rlr] : []),
      qzl,
      BQl,
      zJl,
      l4l,
      Qsr,
      E4o,
      ...(jHt ? [jHt] : []),
      ...(GHt ? [GHt] : []),
      ...(elr ? [elr] : []),
      ...(WQt ? [WQt] : []),
      Ksr,
      Ysr,
      B4o,
    ])));
  SZf = Cn(() => qQt().filter((e) => e.fleetHostCall !== void 0));
});
var nVe = {};
_t(nVe, {
  writeRemoteAgentMetadata: () => writeRemoteAgentMetadata,
  writeAgentMetadata: () => writeAgentMetadata,
  worktreeStateSignal: () => worktreeStateSignal,
  updateCCRTipFromAckedBatch: () => updateCCRTipFromAckedBatch,
  transcriptCursorEnd: () => transcriptCursorEnd,
  trackSessionWrite: () => trackSessionWrite,
  touchSessionTranscript: () => touchSessionTranscript,
  subscribeSessionTitleChanged: () => subscribeSessionTitleChanged,
  subscribeSessionAgentNameChanged: () => subscribeSessionAgentNameChanged,
  snapshotSessionMetadata: () => snapshotSessionMetadata,
  setSessionFileForTesting: () => setSessionFileForTesting,
  setRemoteIngressUrlForTesting: () => setRemoteIngressUrlForTesting,
  setInternalEventWriter: () => setInternalEventWriter,
  setInternalEventReader: () => setInternalEventReader,
  sessionIdExists: () => sessionIdExists,
  searchSessionsByCustomTitle: () => searchSessionsByCustomTitle,
  saveWorktreeState: () => saveWorktreeState,
  savePermissionMode: () => savePermissionMode,
  saveMode: () => saveMode,
  saveIsolationLatch: () => saveIsolationLatch,
  saveCustomTitle: () => saveCustomTitle,
  saveBridgeSession: () => saveBridgeSession,
  saveAiGeneratedTitle: () => saveAiGeneratedTitle,
  saveAgentSetting: () => saveAgentSetting,
  saveAgentName: () => saveAgentName,
  saveAgentColor: () => saveAgentColor,
  restoreSessionMetadata: () => restoreSessionMetadata,
  resetSessionFilePointer: () => resetSessionFilePointer,
  resetProjectForTesting: () => resetProjectForTesting,
  resetProjectFlushStateForTesting: () => resetProjectFlushStateForTesting,
  removeTranscriptMessageIfPersisted: () => removeTranscriptMessageIfPersisted,
  removeTranscriptMessage: () => removeTranscriptMessage,
  removeExtraFields: () => removeExtraFields,
  relocateSessionTranscript: () => relocateSessionTranscript,
  recordTranscript: () => recordTranscript,
  recordSidechainTranscript: () => recordSidechainTranscript,
  recordSessionAlias: () => recordSessionAlias,
  recordQueueOperation: () => recordQueueOperation,
  recordForkContextRef: () => recordForkContextRef,
  recordFileHistorySnapshot: () => recordFileHistorySnapshot,
  recordContextCollapseSnapshot: () => recordContextCollapseSnapshot,
  recordContextCollapseReset: () => recordContextCollapseReset,
  recordContextCollapseCommit: () => recordContextCollapseCommit,
  recordContentReplacement: () => recordContentReplacement,
  recordAttributionSnapshot: () => recordAttributionSnapshot,
  readRemoteAgentMetadata: () => readRemoteAgentMetadata,
  readCCRTip: () => readCCRTip,
  readAgentMetadata: () => readAgentMetadata,
  reAppendSessionMetadata: () => reAppendSessionMetadata,
  persistLeafCheckpoint: () => persistLeafCheckpoint,
  normalizeSessionTitle: () => normalizeSessionTitle,
  mirrorLeafCheckpointToRemote: () => mirrorLeafCheckpointToRemote,
  markSessionEndedByModel: () => markSessionEndedByModel,
  loadTranscriptFromFile: () => loadTranscriptFromFile,
  loadTranscriptFile: () => loadTranscriptFile,
  loadSubagentTranscripts: () => loadSubagentTranscripts,
  loadSameRepoMessageLogsProgressive: () => loadSameRepoMessageLogsProgressive,
  loadSameRepoMessageLogs: () => loadSameRepoMessageLogs,
  loadMessageLogs: () => loadMessageLogs,
  loadFullLog: () => loadFullLog,
  loadAllSubagentTranscriptsFromDisk: () => loadAllSubagentTranscriptsFromDisk,
  loadAllProjectsMessageLogsProgressive: () => loadAllProjectsMessageLogsProgressive,
  loadAllProjectsMessageLogs: () => loadAllProjectsMessageLogs,
  loadAllLogsFromSessionFile: () => loadAllLogsFromSessionFile,
  listRemoteAgentMetadata: () => listRemoteAgentMetadata,
  linkSessionToPR: () => linkSessionToPR,
  isTranscriptPersistenceDisabled: () => isTranscriptPersistenceDisabled,
  isTranscriptMessage: () => isTranscriptMessage,
  isTranscriptFileResumeArg: () => isTranscriptFileResumeArg,
  isSyncedTranscriptEntry: () => isSyncedTranscriptEntry,
  isLoggableMessage: () => isLoggableMessage,
  isLiteLog: () => isLiteLog,
  isEphemeralToolProgress: () => isEphemeralToolProgress,
  isCustomTitleEnabled: () => isCustomTitleEnabled,
  isChainParticipant: () => isChainParticipant,
  hydrateRemoteSession: () => hydrateRemoteSession,
  hydrateFromCCRv2InternalEvents: () => hydrateFromCCRv2InternalEvents,
  getValidatedCCRTip: () => getValidatedCCRTip,
  getUserType: () => getUserType,
  getTranscriptPathForSession: () => getTranscriptPathForSession,
  getSessionIdFromLog: () => getSessionIdFromLog,
  getSessionFilesWithMtime: () => getSessionFilesWithMtime,
  getSessionFilesLite: () => getSessionFilesLite,
  getNodeEnv: () => getNodeEnv,
  getMaterializedSessionFile: () => getMaterializedSessionFile,
  getLogByIndex: () => getLogByIndex,
  getLastSessionLog: () => getLastSessionLog,
  getFirstMeaningfulUserMessageTextContent: () => getFirstMeaningfulUserMessageTextContent,
  getCurrentSessionTitle: () => getCurrentSessionTitle,
  getCurrentSessionIsolationLatch: () => getCurrentSessionIsolationLatch,
  getCurrentSessionFile: () => getCurrentSessionFile,
  getCurrentSessionBridge: () => getCurrentSessionBridge,
  getCurrentSessionAiTitle: () => getCurrentSessionAiTitle,
  getCurrentSessionAgentName: () => getCurrentSessionAgentName,
  getCurrentSessionAgentColor: () => getCurrentSessionAgentColor,
  getAgentTranscript: () => getAgentTranscript,
  flushSessionStorage: () => flushSessionStorage,
  fireSessionMirror: () => fireSessionMirror,
  findUnresolvedToolUse: () => findUnresolvedToolUse,
  findDeferredToolMarkerInTranscript: () => findDeferredToolMarkerInTranscript,
  fetchLogs: () => fetchLogs,
  extractLatestIntersectingSyncedUuid: () => extractLatestIntersectingSyncedUuid,
  extractLastSyncedEventUuid: () => extractLastSyncedEventUuid,
  extractAgentIdsFromMessages: () => extractAgentIdsFromMessages,
  enrichLogs: () => enrichLogs,
  doesMessageExistInSession: () => doesMessageExistInSession,
  deleteRemoteAgentMetadata: () => deleteRemoteAgentMetadata,
  collectTailUuids: () => collectTailUuids,
  collectReplIds: () => collectReplIds,
  clearSessionMetadata: () => clearSessionMetadata,
  clearSessionMessagesCache: () => clearSessionMessagesCache,
  clearInternalEventWriter: () => clearInternalEventWriter,
  clearBridgeSessionCache: () => clearBridgeSessionCache,
  clearBridgeSession: () => clearBridgeSession,
  cleanMessagesForLogging: () => cleanMessagesForLogging,
  checkResumeConsistency: () => checkResumeConsistency,
  cacheSessionTitle: () => cacheSessionTitle,
  cacheHookSessionTitle: () => cacheHookSessionTitle,
  cacheAiTitle: () => cacheAiTitle,
  cacheAgentName: () => cacheAgentName,
  buildConversationChain: () => buildConversationChain,
  applyEndedByModelOnResume: () => applyEndedByModelOnResume,
  appendEntryToFileAsync: () => appendEntryToFileAsync,
  adoptResumedSessionFile: () => adoptResumedSessionFile,
  addSessionMirror: () => addSessionMirror,
  TranscriptFileFormatError: () => TranscriptFileFormatError,
  MAX_TRANSCRIPT_READ_BYTES: () => MAX_TRANSCRIPT_READ_BYTES,
  LAST_PROMPT_PREFIX_SCAN_BYTES: () => LAST_PROMPT_PREFIX_SCAN_BYTES,
  INDEX_LAST_PROMPT_SCAN_BYTES: () => INDEX_LAST_PROMPT_SCAN_BYTES,
  INDEX_HEAD_SCAN_BYTES: () => INDEX_HEAD_SCAN_BYTES,
  INDEX_BOUNDARY_SCAN_BYTES: () => INDEX_BOUNDARY_SCAN_BYTES,
  ENTRY_APPEND_POLICY: () => ENTRY_APPEND_POLICY,
});
function isTranscriptMessage(e) {
  return (
    e.type === "user" || e.type === "assistant" || e.type === "attachment" || e.type === "system"
  );
}
function isSyncedTranscriptEntry(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    "uuid" in e &&
    typeof e.uuid === "string" &&
    isTranscriptMessage(e)
  );
}
function isChainParticipant(e) {
  return e.type !== "progress";
}
function transcriptCursorEnd(e, t, n) {
  if (!n) return e.length;
  for (let r = t; r < e.length; r++) {
    let o = e[r];
    if (o.type === "assistant" && o.message.stop_reason === null) return r;
  }
  return e.length;
}
function HZf(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    e.type === "progress" &&
    "uuid" in e &&
    typeof e.uuid === "string"
  );
}
function isEphemeralToolProgress(e) {
  return typeof e === "string" && TZf.has(e);
}
function getMaterializedSessionFile() {
  return X1e?.sessionFile ?? null;
}
function getTranscriptPathForSession(e) {
  if (e === Rt()) return getMaterializedSessionFile() ?? em();
  let t = Jh(yr());
  return vh.join(t, `${e}.jsonl`);
}
function msc(e) {
  return uk(e).replace(/\.jsonl$/, ".meta.json");
}
async function writeAgentMetadata(e, t) {
  let n = msc(e);
  (await Hl.mkdir(vh.dirname(n), {
    recursive: !0,
  }),
    await Hl.writeFile(n, De(t)));
  let r = n.replace(/\.meta\.json$/, ".jsonl");
  Kc().fireMirror(r, [
    {
      type: "agent_metadata",
      agentType: t.agentType,
      ...(t.isFork !== void 0 && {
        isFork: t.isFork,
      }),
      ...(t.worktreePath && {
        worktreePath: t.worktreePath,
      }),
      ...(t.worktreeBranch && {
        worktreeBranch: t.worktreeBranch,
      }),
      ...(t.cwd && {
        cwd: t.cwd,
      }),
      ...(t.spawnMode && {
        spawnMode: t.spawnMode,
      }),
      ...(t.description && {
        description: t.description,
      }),
      ...(t.name && {
        name: t.name,
      }),
      ...(t.toolUseId && {
        toolUseId: t.toolUseId,
      }),
      ...(t.stoppedByUser && {
        stoppedByUser: !0,
      }),
      ...(t.spawnDepth !== void 0 && {
        spawnDepth: t.spawnDepth,
      }),
      ...(t.taskKind && {
        taskKind: t.taskKind,
      }),
      ...(t.teamName && {
        teamName: t.teamName,
      }),
      ...(t.color && {
        color: t.color,
      }),
      ...(t.planModeRequired !== void 0 && {
        planModeRequired: t.planModeRequired,
      }),
      ...(t.customAgentType && {
        customAgentType: t.customAgentType,
      }),
      ...(t.model && {
        model: t.model,
      }),
      ...(t.permissionMode && {
        permissionMode: t.permissionMode,
      }),
    },
  ]);
}
async function readAgentMetadata(e) {
  let t = msc(e);
  try {
    let n = await Hl.readFile(t, "utf-8");
    return Ft(n);
  } catch (n) {
    if (Vo(n)) return null;
    throw n;
  }
}
function gsc() {
  let e = M2() ?? Jh(yr());
  return vh.join(e, Rt(), "remote-agents");
}
function t5o(e) {
  return vh.join(gsc(), `remote-agent-${e}.meta.json`);
}
async function writeRemoteAgentMetadata(e, t) {
  let n = t5o(e);
  (await Hl.mkdir(vh.dirname(n), {
    recursive: !0,
  }),
    await Hl.writeFile(n, De(t)));
}
async function readRemoteAgentMetadata(e) {
  let t = t5o(e);
  try {
    let n = await Hl.readFile(t, "utf-8");
    return Ft(n);
  } catch (n) {
    if (Vo(n)) return null;
    throw n;
  }
}
async function deleteRemoteAgentMetadata(e) {
  let t = t5o(e);
  try {
    await Hl.unlink(t);
  } catch (n) {
    if (Vo(n)) return;
    throw n;
  }
}
async function listRemoteAgentMetadata() {
  let e = gsc(),
    t;
  try {
    t = await Hl.readdir(e, {
      withFileTypes: !0,
    });
  } catch (r) {
    if (Vo(r)) return [];
    throw r;
  }
  let n = [];
  for (let r of t) {
    if (!r.isFile() || !r.name.endsWith(".meta.json")) continue;
    try {
      let o = await Hl.readFile(vh.join(e, r.name), "utf-8");
      n.push(Ft(o));
    } catch (o) {
      T(`listRemoteAgentMetadata: skipping ${r.name}: ${String(o)}`);
    }
  }
  return n;
}
function sessionIdExists(e) {
  let t = M2() ?? Jh(yr()),
    n = vh.join(t, `${e}.jsonl`),
    r = qt();
  try {
    return (r.statSync(n), !0);
  } catch {
    return !1;
  }
}
function getNodeEnv() {
  return "production";
}
function isTranscriptPersistenceDisabled() {
  let e = ut(process.env.TEST_ENABLE_SESSION_PERSISTENCE);
  return (
    (getNodeEnv() === "test" && !e) ||
    Z3() ||
    ut(process.env.CLAUDE_CODE_SKIP_PROMPT_HISTORY) ||
    lje()
  );
}
function getUserType() {
  return "external";
}
function ysc() {
  return process.env.CLAUDE_CODE_ENTRYPOINT;
}
function isCustomTitleEnabled() {
  return !0;
}
async function recordSessionAlias(e) {
  if (isTranscriptPersistenceDisabled()) return;
  let t = e;
  try {
    t = o_(await Hl.realpath(e));
  } catch (s) {
    if (!wn(s))
      T(`recordSessionAlias: realpath failed for ${e}: ${s}`, {
        level: "error",
      });
  }
  let n = M2() ?? Jh(yr()),
    r = Jh(t);
  if (r === n) return;
  let o = vh.join(r, _sc);
  try {
    if (
      (await Hl.readFile(o, "utf8"))
        .split(
          `
`,
        )
        .includes(n)
    )
      return;
  } catch (s) {
    if (!wn(s)) {
      if (Vo(s)) {
        T(`recordSessionAlias: read failed for ${o}: ${s}`);
        return;
      }
      ke(s);
      return;
    }
    try {
      await Hl.mkdir(vh.dirname(o), {
        recursive: !0,
        mode: 448,
      });
    } catch (i) {
      if (Vo(i)) {
        T(`recordSessionAlias: mkdir failed for ${o}: ${i}`);
        return;
      }
      ke(i);
      return;
    }
  }
  try {
    await Hl.appendFile(
      o,
      n +
        `
`,
      {
        mode: 384,
      },
    );
  } catch (s) {
    if (Vo(s)) {
      T(`recordSessionAlias: append failed for ${o}: ${s}`);
      return;
    }
    ke(s);
  }
}
async function bsc(e) {
  let t = vh.join(Jh(e), _sc);
  try {
    let n = await Hl.readFile(t, "utf8");
    return Uo(
      n
        .split(
          `
`,
        )
        .filter((r) => r.length > 0),
    );
  } catch (n) {
    if (!wn(n))
      if (Vo(n)) T(`readSessionAliases: read failed for ${t}: ${n}`);
      else ke(n);
    return [];
  }
}
function Kc() {
  if (!X1e) {
    if (((X1e = new Ssc()), !esc))
      (Ci(async () => {
        await X1e?.flush();
        try {
          X1e?.reAppendSessionMetadata();
        } catch {}
      }),
        (esc = !0));
  }
  return X1e;
}
function resetProjectFlushStateForTesting() {
  X1e?._resetFlushState();
}
function resetProjectForTesting() {
  X1e = null;
}
function setSessionFileForTesting(e) {
  Kc().sessionFile = e;
}
function getCurrentSessionFile() {
  return Kc().sessionFile;
}
function setInternalEventWriter(e) {
  Kc().setInternalEventWriter(e);
}
function clearInternalEventWriter() {
  Kc().clearInternalEventWriter();
}
function addSessionMirror(e) {
  Kc().addMirror(e);
}
function fireSessionMirror(e, t) {
  Kc().fireMirror(e, t);
}
function trackSessionWrite(e) {
  return Kc().trackExternalWrite(e);
}
function setInternalEventReader(e, t) {
  (Kc().setInternalEventReader(e), Kc().setInternalSubagentEventReader(t));
}
function setRemoteIngressUrlForTesting(e) {
  Kc().setRemoteIngressUrl(e);
}
class Ssc {
  currentSessionTag;
  currentSessionTitle;
  currentSessionAiTitle;
  currentSessionAgentName;
  currentSessionAgentColor;
  currentSessionLastPrompt;
  currentSessionLeafUuid;
  currentSessionLeafTs;
  currentSessionAgentSetting;
  currentSessionMode;
  currentSessionPermissionMode;
  currentSessionIsolationLatch;
  currentSessionWorktree;
  currentSessionPrNumber;
  currentSessionPrUrl;
  currentSessionPrRepository;
  currentSessionBridgeId;
  currentSessionBridgeSeq;
  currentSessionBridgeDialogKinds;
  sessionFile = null;
  pendingEntries = [];
  relocationBuffer = null;
  remoteIngressUrl = null;
  internalEventWriter = null;
  internalEventReader = null;
  internalSubagentEventReader = null;
  mirrors = [];
  pendingWriteCount = 0;
  flushResolvers = [];
  writeQueues = new Map();
  flushTimer = null;
  activeDrain = null;
  drainChain = Promise.resolve();
  FLUSH_INTERVAL_MS = 100;
  MAX_CHUNK_BYTES = 104857600;
  bytesSinceMetadataReAppend = 0;
  constructor() {}
  _resetFlushState() {
    if (
      ((this.pendingWriteCount = 0),
      (this.bytesSinceMetadataReAppend = 0),
      (this.flushResolvers = []),
      this.flushTimer)
    )
      clearTimeout(this.flushTimer);
    ((this.flushTimer = null),
      (this.activeDrain = null),
      (this.drainChain = Promise.resolve()),
      (this.writeQueues = new Map()),
      (this.mirrors = []));
  }
  addMirror(e) {
    this.mirrors.push(e);
  }
  fireMirror(e, t) {
    for (let n of this.mirrors)
      try {
        n(e, t);
      } catch (r) {
        T(`[SessionMirror] mirror failed for ${e}: ${r}`, {
          level: "error",
        });
      }
  }
  incrementPendingWrites() {
    this.pendingWriteCount++;
  }
  decrementPendingWrites() {
    if ((this.pendingWriteCount--, this.pendingWriteCount === 0)) {
      for (let e of this.flushResolvers) e();
      this.flushResolvers = [];
    }
  }
  async trackWrite(e) {
    this.incrementPendingWrites();
    try {
      return await e();
    } finally {
      this.decrementPendingWrites();
    }
  }
  trackExternalWrite(e) {
    return this.trackWrite(e);
  }
  pushQueueItem(e, t) {
    let n = this.writeQueues.get(e);
    if (!n) ((n = []), this.writeQueues.set(e, n));
    (n.push(t), this.scheduleDrain());
  }
  enqueueWrite(e, t) {
    return new Promise((n) => {
      this.pushQueueItem(e, {
        entry: t,
        resolve: n,
      });
    });
  }
  enqueueRemove(e, t) {
    return new Promise((n) => {
      this.pushQueueItem(e, {
        removeUuid: t,
        resolve: n,
      });
    });
  }
  scheduleDrain() {
    if (this.flushTimer) return;
    this.flushTimer = setTimeout(async () => {
      if (
        ((this.flushTimer = null),
        (this.activeDrain = this.drainWriteQueue()),
        await this.activeDrain,
        (this.activeDrain = null),
        this.writeQueues.size > 0)
      )
        this.scheduleDrain();
    }, this.FLUSH_INTERVAL_MS);
  }
  async appendToFile(e, t) {
    try {
      await Hl.appendFile(e, t, {
        mode: 384,
      });
    } catch {
      (await Hl.mkdir(vh.dirname(e), {
        recursive: !0,
        mode: 448,
      }),
        await Hl.appendFile(e, t, {
          mode: 384,
        }));
    }
    if (e === this.sessionFile) this.bytesSinceMetadataReAppend += Buffer.byteLength(t, "utf8");
  }
  drainWriteQueue() {
    let e = this.drainChain.then(() => this.drainQueuesOnce());
    return ((this.drainChain = e.catch(() => {})), e);
  }
  async drainQueuesOnce() {
    for (let [e, t] of this.writeQueues) {
      if (t.length === 0) continue;
      let n = t.splice(0),
        r = 0;
      try {
        let o = "",
          s = 0,
          a = this.mirrors.length > 0 ? [] : void 0;
        for (let l = 0; l < n.length; l++) {
          let c = n[l];
          if (!("entry" in c)) {
            if (o.length > 0) {
              if ((await this.appendToFile(e, o), a))
                (this.fireMirror(e, a.slice()), (a.length = 0));
              for (let p = s; p < l; p++) n[p].resolve();
              ((r = l), (o = ""));
            }
            (await this.performRemoveByUuid(e, c.removeUuid),
              c.resolve(),
              (r = l + 1),
              (s = l + 1));
            continue;
          }
          let { entry: u } = c,
            d = tis(u);
          if (o.length + d.length >= this.MAX_CHUNK_BYTES) {
            if ((await this.appendToFile(e, o), a)) (this.fireMirror(e, a.slice()), (a.length = 0));
            for (let p = s; p < l; p++) n[p].resolve();
            ((r = l), (s = l), (o = ""));
          }
          ((o += d), a?.push(u));
        }
        if (o.length > 0) {
          if ((await this.appendToFile(e, o), a)) this.fireMirror(e, a);
          for (let l = s; l < n.length; l++) n[l].resolve();
          r = n.length;
        }
      } catch (o) {
        let s = on(o);
        if (gd(o))
          T(`Transcript write failed (${s}): ${be(o)}`, {
            level: "error",
          });
        else ke(o);
        G("tengu_transcript_write_failed", {
          source: We("drain"),
          errno_enospc: s === "ENOSPC",
          errno_emfile: s === "EMFILE",
        });
        for (let i = r; i < n.length; i++) n[i].resolve();
      }
    }
    for (let [e, t] of this.writeQueues) if (t.length === 0) this.writeQueues.delete(e);
    if (this.bytesSinceMetadataReAppend >= Mw / 2)
      try {
        await this.reAppendSessionMetadataAsync(!1, !0);
      } catch (e) {
        if (gd(e))
          T(`Metadata re-append failed (${on(e)}): ${be(e)}`, {
            level: "error",
          });
        else ke(e);
      }
  }
  resetSessionFile() {
    ((this.sessionFile = null), (this.pendingEntries = []), (this.bytesSinceMetadataReAppend = 0));
  }
  reAppendSessionMetadata(e = !1, t = !1) {
    if (!this.sessionFile) return;
    this.bytesSinceMetadataReAppend = 0;
    let n = GZf(this.sessionFile),
      r = this.planReAppendSessionMetadata(n, e, t);
    if (!r) return;
    for (let o of r.entries) ETe(r.sessionFile, o);
  }
  async reAppendSessionMetadataAsync(e = !1, t = !1) {
    let n = this.sessionFile;
    if (!n) return;
    this.bytesSinceMetadataReAppend = 0;
    let r = await WZf(n),
      o = this.planReAppendSessionMetadata(r, e, t);
    if (!o || o.entries.length === 0) return;
    let s = nis(o.entries);
    try {
      await Hl.appendFile(o.sessionFile, s, {
        mode: 384,
      });
    } catch {
      (await Hl.mkdir(vh.dirname(o.sessionFile), {
        recursive: !0,
        mode: 448,
      }),
        await Hl.appendFile(o.sessionFile, s, {
          mode: 384,
        }));
    }
    this.fireMirror(o.sessionFile, o.entries);
  }
  planReAppendSessionMetadata(e, t, n) {
    if (!this.sessionFile) return null;
    let r = Rt();
    if (!r) return null;
    let o = this.sessionFile,
      s = e.split(`
`);
    if (!t) {
      let p = s.findLast(
        (m) => m.includes('"type":"custom-title"') && m.includes('"customTitle":"'),
      );
      if (p) {
        let m = Kb(p, "customTitle");
        if (m !== void 0) this.currentSessionTitle = m || void 0;
      }
      let f = s.findLast((m) => m.includes('"type":"ai-title"') && m.includes('"aiTitle":"'));
      if (f) {
        let m = Kb(f, "aiTitle");
        if (m !== void 0) this.currentSessionAiTitle = m || void 0;
      }
    }
    let i = s.findLast((p) => p.includes('"type":"tag"') && p.includes('"tag":"'));
    if (i) {
      let p = Kb(i, "tag");
      if (p !== void 0) this.currentSessionTag = p || void 0;
    }
    let a = [];
    if (this.currentSessionLastPrompt !== void 0 || this.currentSessionLeafUuid !== void 0)
      a.push({
        type: "last-prompt",
        ...(this.currentSessionLastPrompt && {
          lastPrompt: this.currentSessionLastPrompt,
        }),
        ...(this.currentSessionLeafUuid && {
          leafUuid: this.currentSessionLeafUuid,
        }),
        sessionId: r,
      });
    if (this.currentSessionTitle)
      a.push({
        type: "custom-title",
        customTitle: this.currentSessionTitle,
        sessionId: r,
      });
    if (this.currentSessionAiTitle)
      a.push({
        type: "ai-title",
        aiTitle: this.currentSessionAiTitle,
        sessionId: r,
      });
    if (this.currentSessionTag)
      a.push({
        type: "tag",
        tag: this.currentSessionTag,
        sessionId: r,
      });
    if (this.currentSessionAgentName)
      a.push({
        type: "agent-name",
        agentName: this.currentSessionAgentName,
        sessionId: r,
      });
    if (this.currentSessionAgentColor)
      a.push({
        type: "agent-color",
        agentColor: this.currentSessionAgentColor,
        sessionId: r,
      });
    if (this.currentSessionAgentSetting)
      a.push({
        type: "agent-setting",
        agentSetting: this.currentSessionAgentSetting,
        sessionId: r,
      });
    if (this.currentSessionMode)
      a.push({
        type: "mode",
        mode: this.currentSessionMode,
        sessionId: r,
      });
    if (this.currentSessionPermissionMode)
      a.push({
        type: "permission-mode",
        permissionMode: this.currentSessionPermissionMode,
        sessionId: r,
      });
    if (this.currentSessionIsolationLatch)
      a.push({
        type: "isolation-latch",
        side: this.currentSessionIsolationLatch,
        sessionId: r,
      });
    if (this.currentSessionWorktree !== void 0)
      a.push({
        type: "worktree-state",
        worktreeSession: this.currentSessionWorktree,
        sessionId: r,
      });
    if (
      this.currentSessionPrNumber !== void 0 &&
      this.currentSessionPrUrl &&
      this.currentSessionPrRepository
    )
      a.push({
        type: "pr-link",
        sessionId: r,
        prNumber: this.currentSessionPrNumber,
        prUrl: this.currentSessionPrUrl,
        prRepository: this.currentSessionPrRepository,
        timestamp: new Date().toISOString(),
      });
    if (this.currentSessionBridgeId)
      a.push({
        type: "bridge-session",
        sessionId: r,
        bridgeSessionId: this.currentSessionBridgeId,
        lastSequenceNum: this.currentSessionBridgeSeq ?? 0,
        ...(this.currentSessionBridgeDialogKinds?.length && {
          declaredDialogKinds: this.currentSessionBridgeDialogKinds,
        }),
      });
    if (n || a.length === 0)
      return {
        sessionFile: o,
        entries: a,
      };
    let l = new Set(a.map((p) => p.type)),
      c = new Map(),
      u = 0;
    for (let p = s.length - 1; p >= 0; p--) {
      if (c.size === l.size) break;
      let f = s[p] ?? "";
      if (((u += Buffer.byteLength(f, "utf8") + 1), u > Mw / 2)) break;
      if (!f) continue;
      let m;
      for (let g of l)
        if (!c.has(g) && f.includes(`"type":"${g}"`)) {
          m = g;
          break;
        }
      if (!m) continue;
      try {
        let g = qge(f);
        if (g.type === m) c.set(m, g);
      } catch {}
    }
    let d = (p) => {
      let { timestamp: f, ...m } = p;
      return De(m);
    };
    return {
      sessionFile: o,
      entries: a.filter((p) => {
        let f = c.get(p.type);
        return !f || d(p) !== d(f);
      }),
    };
  }
  async flush() {
    if (this.flushTimer) (clearTimeout(this.flushTimer), (this.flushTimer = null));
    if (this.activeDrain) await this.activeDrain;
    if ((await this.drainWriteQueue(), this.pendingWriteCount === 0)) return;
    return new Promise((e) => {
      this.flushResolvers.push(e);
    });
  }
  async removeMessageByUuid(e) {
    return this.trackWrite(async () => {
      let t = this.sessionFile;
      if (t === null) return;
      return this.enqueueRemove(t, e);
    });
  }
  async performRemoveByUuid(e, t) {
    try {
      let n = 0,
        r = await Hl.open(e, "r+");
      try {
        let { size: a } = await r.stat();
        if (((n = a), a === 0)) return;
        let l = Math.min(a, Mw),
          c = a - l,
          u = Buffer.allocUnsafe(l),
          { bytesRead: d } = await r.read(u, 0, l, c),
          p = u.subarray(0, d),
          f = `"uuid":"${t}"`,
          m = p.lastIndexOf(f);
        if (m >= 0) {
          let g = p.lastIndexOf(10, m);
          if (g >= 0 || c === 0) {
            let h = g + 1,
              y = p.indexOf(10, m + f.length),
              b = y >= 0 ? y + 1 : d,
              _ = c + h,
              S = d - b;
            if ((await r.truncate(_), S > 0)) await r.write(p, b, S, _);
            return;
          }
        }
      } finally {
        await r.close();
      }
      if (n > AZf) {
        T(`Skipping tombstone removal: session file too large (${Ra(n)})`, {
          level: "warn",
        });
        return;
      }
      let s = (
          await Hl.readFile(e, {
            encoding: "utf-8",
          })
        ).split(`
`),
        i = s.filter((a) => {
          if (!a.trim()) return !0;
          try {
            return Ft(a).uuid !== t;
          } catch {
            return !0;
          }
        });
      if (i.length === s.length) return;
      await Hl.writeFile(
        e,
        i.join(`
`),
        {
          encoding: "utf8",
        },
      );
    } catch {}
  }
  shouldSkipPersistence() {
    return isTranscriptPersistenceDisabled();
  }
  async materializeSessionFile() {
    if (this.shouldSkipPersistence()) return;
    if (
      (this.ensureCurrentSessionFile(),
      await this.reAppendSessionMetadataAsync(),
      this.pendingEntries.length > 0)
    ) {
      let e = this.pendingEntries;
      this.pendingEntries = [];
      for (let t of e) await this.appendEntry(t);
    }
  }
  async insertMessageChain(e, t = !1, n, r, o) {
    return this.trackWrite(async () => {
      let s = r ?? null,
        i;
      if (
        this.sessionFile === null &&
        e.some((d) => d.type === "user" || d.type === "assistant" || d.type === "system")
      )
        await this.materializeSessionFile();
      let a;
      try {
        a = await ub();
      } catch {
        a = void 0;
      }
      lYr();
      let l = Rt(),
        c = Zve().get(l),
        u = t || this.shouldSkipPersistence() ? null : await Q1e(l);
      for (let d of e) {
        let p = pA(d),
          f = s;
        if (d.type === "user" && "sourceToolAssistantUUID" in d && d.sourceToolAssistantUUID) {
          let g = d.sourceToolAssistantUUID;
          if (u === null || u.has(g)) f = g;
          else G("tengu_phantom_parent_write", {});
        }
        if (f === d.uuid) G("tengu_chain_self_reference_write", {});
        let m = {
          parentUuid: p ? null : f,
          logicalParentUuid: p ? s : void 0,
          isSidechain: t,
          teamName: o?.teamName,
          agentName: o?.agentName,
          promptId: d.type === "user" ? (FCt() ?? void 0) : void 0,
          agentId: n,
          ...d,
          sessionKind: exe(),
          userType: getUserType(),
          entrypoint: ysc(),
          cwd: $t(),
          sessionId: l,
          version: EZf,
          gitBranch: a,
          slug: c,
        };
        if (m.type === "user" && m.toolUseResult != null) m.toolUseResult = Msc(m.toolUseResult);
        if ((await this.appendEntry(m), isChainParticipant(d))) ((s = d.uuid), (i = d.timestamp));
      }
      if (!t) {
        if (s && i && (!this.currentSessionLeafTs || i >= this.currentSessionLeafTs))
          ((this.currentSessionLeafUuid = s), (this.currentSessionLeafTs = i));
        let d = getFirstMeaningfulUserMessageTextContent(e);
        if (d) {
          let p = d
            .replaceAll(
              `
`,
              " ",
            )
            .trim();
          this.currentSessionLastPrompt = p.length > 200 ? p.slice(0, 200).trim() + "\u2026" : p;
        }
      }
    });
  }
  async insertFileHistorySnapshot(e, t, n) {
    return this.trackWrite(async () => {
      let r = {
        type: "file-history-snapshot",
        messageId: e,
        snapshot: t,
        isSnapshotUpdate: n,
      };
      await this.appendEntry(r);
    });
  }
  async insertQueueOperation(e) {
    return this.trackWrite(async () => {
      await this.appendEntry(e);
    });
  }
  async insertAttributionSnapshot(e) {
    return this.trackWrite(async () => {
      await this.appendEntry(e);
    });
  }
  async insertContentReplacement(e, t) {
    return this.trackWrite(async () => {
      let n = {
        type: "content-replacement",
        sessionId: Rt(),
        agentId: t,
        replacements: e,
      };
      await this.appendEntry(n);
    });
  }
  async appendEntry(e, t = Rt()) {
    if (this.shouldSkipPersistence()) return;
    if (this.relocationBuffer) {
      this.relocationBuffer.push({
        entry: e,
        sessionId: t,
      });
      return;
    }
    let n = Rt(),
      r = t === n,
      o;
    if (r) {
      if (this.sessionFile === null) {
        this.pendingEntries.push(e);
        return;
      }
      o = this.sessionFile;
    } else {
      let s = await this.getExistingSessionFile(t);
      if (!s) {
        ke(Error(`appendEntry: session file not found for other session ${t}`));
        return;
      }
      o = s;
    }
    switch (ENTRY_APPEND_POLICY[e.type]) {
      case "always": {
        this.enqueueWrite(o, e);
        return;
      }
      case "route-by-agent": {
        let s =
          (e.type === "content-replacement" || e.type === "fork-context-ref") && e.agentId
            ? uk(e.agentId)
            : o;
        this.enqueueWrite(s, e);
        return;
      }
      case "dedup-transcript": {
        if (e.type !== "progress" && !isTranscriptMessage(e)) {
          ke(
            Error(
              `appendEntry invariant: dedup-transcript policy on non-transcript type '${e.type}'`,
            ),
          );
          return;
        }
        let s = await Q1e(t),
          i = e.isSidechain && e.agentId !== void 0,
          a = i ? uk(Bu(e.agentId)) : o,
          l = !s.has(e.uuid);
        if (i || l) {
          if ((this.enqueueWrite(a, e), !i)) {
            if ((s.add(e.uuid), isTranscriptMessage(e))) await this.persistToRemote(t, e);
          } else if (this.internalEventWriter && isTranscriptMessage(e)) this.persistToRemote(t, e);
        }
        return;
      }
    }
  }
  beginTranscriptRelocation() {
    this.relocationBuffer ??= [];
  }
  async endTranscriptRelocation() {
    let e = this.relocationBuffer;
    if (((this.relocationBuffer = null), !e)) return;
    for (let { entry: t, sessionId: n } of e) await this.appendEntry(t, n);
  }
  ensureCurrentSessionFile() {
    if (this.sessionFile === null) this.sessionFile = em();
    return this.sessionFile;
  }
  existingSessionFiles = new Map();
  async getExistingSessionFile(e) {
    let t = this.existingSessionFiles.get(e);
    if (t) return t;
    let n = getTranscriptPathForSession(e);
    try {
      return (await Hl.stat(n), this.existingSessionFiles.set(e, n), n);
    } catch (r) {
      if (Vo(r)) return null;
      throw r;
    }
  }
  async persistToRemote(e, t) {
    if (HT()) return;
    if (this.internalEventWriter) {
      try {
        await this.internalEventWriter("transcript", t, {
          ...(pA(t) && {
            isCompaction: !0,
            preservedEventIds: t.compactMetadata.preservedMessages?.uuids,
          }),
          ...(t.agentId && {
            agentId: t.agentId,
          }),
        });
      } catch {
        (G("tengu_session_persistence_failed", {}),
          T("Failed to write transcript as internal event"));
      }
      return;
    }
    if (!ut("true") || !this.remoteIngressUrl) return;
    if (!(await MQa(e, t, this.remoteIngressUrl)))
      (G("tengu_session_persistence_failed", {}), Bc(1, "other"));
  }
  async mirrorInternalEntry(e) {
    if (!this.internalEventWriter || HT()) return;
    try {
      await this.internalEventWriter(e.type, e, {});
    } catch (t) {
      throw (
        G("tengu_session_persistence_failed", {}),
        T("Failed to mirror internal entry to CCR"),
        t
      );
    }
  }
  setRemoteIngressUrl(e) {
    if (((this.remoteIngressUrl = e), T(`Remote persistence enabled with URL: ${e}`), e))
      this.FLUSH_INTERVAL_MS = tsc;
  }
  setInternalEventWriter(e) {
    ((this.internalEventWriter = e),
      T("CCR v2 internal event writer registered for transcript persistence"),
      (this.FLUSH_INTERVAL_MS = tsc));
  }
  clearInternalEventWriter() {
    if (!this.internalEventWriter) return;
    ((this.internalEventWriter = null), T("CCR v2 internal event writer cleared"));
  }
  setInternalEventReader(e) {
    ((this.internalEventReader = e),
      T("CCR v2 internal event reader registered for session resume"));
  }
  setInternalSubagentEventReader(e) {
    ((this.internalSubagentEventReader = e),
      T("CCR v2 subagent event reader registered for session resume"));
  }
  getInternalEventReader() {
    return this.internalEventReader;
  }
  getInternalSubagentEventReader() {
    return this.internalSubagentEventReader;
  }
}
async function recordTranscript(e, t, n, r) {
  let o = cleanMessagesForLogging(e, r),
    s = Rt(),
    i = await Q1e(s),
    a = [],
    l = n;
  if (l && !isTranscriptPersistenceDisabled() && !i.has(l)) G("tengu_phantom_parent_hint", {});
  let c = !1;
  for (let d of o)
    if (i.has(d.uuid)) {
      if (!c && isChainParticipant(d)) l = d.uuid;
    } else (a.push(d), (c = !0));
  if (a.length > 0) await Kc().insertMessageChain(a, !1, void 0, l, t);
  return a.findLast(isChainParticipant)?.uuid ?? l ?? null;
}
async function persistLeafCheckpoint(e, t) {
  let n = Kc();
  ((n.currentSessionLeafUuid = e ?? void 0),
    (n.currentSessionLeafTs = new Date().toISOString()),
    await n.appendEntry({
      type: "last-prompt",
      ...(n.currentSessionLastPrompt && {
        lastPrompt: n.currentSessionLastPrompt,
      }),
      leafUuid: e,
      explicit: !0,
      ...(t?.rewound && {
        rewound: !0,
      }),
      sessionId: Rt(),
    }));
}
async function mirrorLeafCheckpointToRemote(e, t) {
  let n = Kc();
  await n.mirrorInternalEntry({
    type: "last-prompt",
    ...(n.currentSessionLastPrompt && {
      lastPrompt: n.currentSessionLastPrompt,
    }),
    leafUuid: e,
    explicit: !0,
    ...(t?.rewound && {
      rewound: !0,
    }),
    sessionId: Rt(),
  });
}
async function recordSidechainTranscript(e, t, n) {
  await Kc().insertMessageChain(cleanMessagesForLogging(e), !0, t, n);
}
async function recordForkContextRef(e) {
  await Kc().appendEntry({
    type: "fork-context-ref",
    ...e,
  });
}
async function RZf(e) {
  let t = BYe.get(e.parentLastUuid);
  if (t) return (BYe.delete(e.parentLastUuid), BYe.set(e.parentLastUuid, t), t);
  let n = getTranscriptPathForSession(e.parentSessionId),
    { messages: r } = await loadTranscriptFile(n),
    o = r.get(e.parentLastUuid);
  if (!o)
    return (
      T(
        `[fork-context-ref] parent uuid ${e.parentLastUuid} not found in ${n}; returning empty prefix`,
        {
          level: "warn",
        },
      ),
      []
    );
  let s = buildConversationChain(r, o)
    .filter((i) => !i.isSidechain)
    .map(({ isSidechain: i, parentUuid: a, ...l }) => l);
  if (BYe.size >= kZf) {
    let i = BYe.keys().next().value;
    if (i !== void 0) BYe.delete(i);
  }
  return (BYe.set(e.parentLastUuid, s), s);
}
async function recordQueueOperation(e) {
  await Kc().insertQueueOperation(e);
}
async function removeTranscriptMessage(e) {
  await Kc().removeMessageByUuid(e);
}
async function removeTranscriptMessageIfPersisted(e) {
  if (!(await Q1e(Rt())).has(e)) return;
  await Kc().removeMessageByUuid(e);
}
async function recordFileHistorySnapshot(e, t, n) {
  await Kc().insertFileHistorySnapshot(e, t, n);
}
async function recordAttributionSnapshot(e) {
  await Kc().insertAttributionSnapshot(e);
}
async function recordContentReplacement(e, t) {
  await Kc().insertContentReplacement(e, t);
}
async function resetSessionFilePointer() {
  Kc().resetSessionFile();
}
function adoptResumedSessionFile() {
  let e = Kc();
  e.sessionFile = em();
  let t = new Date();
  (Hl.utimes(e.sessionFile, t, t).catch(() => {}), e.reAppendSessionMetadata(!0));
}
function touchSessionTranscript() {
  let e = Kc().sessionFile;
  if (e === null) return;
  let t = new Date();
  Hl.utimes(e, t, t).catch(() => {});
}
async function relocateSessionTranscript() {
  let e = Rt(),
    t = Jh(yr()),
    n = Kc(),
    r = n.sessionFile;
  if (r === null || isTranscriptPersistenceDisabled()) {
    PA(e, "cd", t);
    return;
  }
  let o = vh.join(t, `${e}.jsonl`);
  if (r === o) {
    PA(e, "cd", t);
    return;
  }
  n.beginTranscriptRelocation();
  try {
    (await n.flush(),
      await Hl.mkdir(t, {
        recursive: !0,
        mode: 448,
      }));
    try {
      await nsc(r, o);
    } catch (s) {
      if (wn(s)) T(`relocateSessionTranscript: old file missing: ${s}`);
      else throw s;
    }
    try {
      await nsc(vh.join(vh.dirname(r), e), vh.join(t, e));
    } catch (s) {
      if (!wn(s)) ke(s);
    }
    ((n.sessionFile = o), PA(e, "cd", t));
  } finally {
    await n.endTranscriptRelocation();
  }
}
async function nsc(e, t) {
  try {
    await Hl.rename(e, t);
    return;
  } catch (n) {
    let r = on(n);
    if (r === "EEXIST" || r === "EPERM" || r === "EBUSY" || r === "ENOTEMPTY") {
      (await Hl.rm(t, {
        recursive: !0,
        force: !0,
      }).catch(() => {}),
        await Hl.rename(e, t));
      return;
    }
    if (r === "EXDEV") {
      try {
        await Hl.copyFile(e, t);
      } catch (o) {
        let s = on(o);
        if (s === "EISDIR" || s === "ENOTSUP" || s === "EPERM") await Asc(e, t);
        else throw o;
      }
      await Hl.rm(e, {
        recursive: !0,
        force: !0,
      });
      return;
    }
    throw n;
  }
}
async function Asc(e, t) {
  await Hl.mkdir(t, {
    recursive: !0,
    mode: 448,
  });
  for (let n of await Hl.readdir(e, {
    withFileTypes: !0,
  })) {
    let r = vh.join(e, n.name),
      o = vh.join(t, n.name);
    if (n.isDirectory()) await Asc(r, o);
    else await Hl.copyFile(r, o);
  }
}
async function recordContextCollapseCommit(e) {
  let t = Rt();
  if (!t) return;
  await Kc().appendEntry({
    type: "marble-origami-commit",
    sessionId: t,
    ...e,
  });
}
async function recordContextCollapseSnapshot(e) {
  let t = Rt();
  if (!t) return;
  await Kc().appendEntry({
    type: "marble-origami-snapshot",
    sessionId: t,
    ...e,
  });
}
async function recordContextCollapseReset(e) {
  let t = Rt();
  if (!t) return;
  await Kc().appendEntry({
    type: "marble-origami-reset",
    sessionId: t,
    ...e,
  });
}
async function flushSessionStorage() {
  await Kc().flush();
}
function alr(e) {
  if (typeof e !== "object" || e === null) return !1;
  let t = e.type;
  return t === "user" || t === "assistant";
}
async function YWo(e) {
  let n;
  try {
    n = await Hl.open(e, "r");
    let r = Buffer.allocUnsafe(65536),
      o = new asc.StringDecoder("utf8"),
      s = "";
    for (;;) {
      let { bytesRead: i } = await n.read(r, 0, 65536, null);
      if (i <= 0) break;
      let l = (s + o.write(r.subarray(0, i))).split(`
`);
      s = l.pop() ?? "";
      for (let c of l) if (rsc(c)) return !0;
    }
    return rsc(s + o.end());
  } catch {
    return !1;
  } finally {
    if (n)
      try {
        await n.close();
      } catch {}
  }
}
function rsc(e) {
  if (
    !e.includes('"type":"user"') &&
    !e.includes('"type": "user"') &&
    !e.includes('"type":"assistant"') &&
    !e.includes('"type": "assistant"')
  )
    return !1;
  try {
    return alr(qge(e));
  } catch {
    return !1;
  }
}
async function hydrateRemoteSession(e, t) {
  PA(Fb(e), "hydrate");
  let n = Kc();
  try {
    let r = (await $Qa(e, t)) || [],
      o = Jh(yr());
    await Hl.mkdir(o, {
      recursive: !0,
      mode: 448,
    });
    let s = getTranscriptPathForSession(e);
    if (!r.some(alr) && (await YWo(s)))
      return (
        T(
          `Skipping remote hydration: server set of ${r.length} entries has no content-bearing entries but the local transcript does`,
        ),
        In("info", "hydrate_skip_zero_content_replace", {
          path: "v1_session_ingress",
          server_entry_count: r.length,
        }),
        !0
      );
    return (await The(s, r), T(`Hydrated ${r.length} entries from remote`), r.length > 0);
  } catch (r) {
    return (
      T(`Error hydrating session from remote: ${r}`),
      In("error", "hydrate_remote_session_fail"),
      !1
    );
  } finally {
    n.setRemoteIngressUrl(t);
  }
}
function Hsc(e) {
  let t = getTranscriptPathForSession(e);
  return t.endsWith(".jsonl") ? t.slice(0, -6) + ".ccr-tip.json" : t + ".ccr-tip.json";
}
async function readCCRTip(e) {
  try {
    let t = await Hl.readFile(Hsc(e), "utf-8"),
      n = Ft(t);
    if (typeof n === "object" && n !== null && "eventId" in n && typeof n.eventId === "string")
      return n;
    return null;
  } catch {
    return null;
  }
}
async function vsc(e, t) {
  let n = {
    eventId: t,
    updatedAt: new Date().toISOString(),
  };
  try {
    await eg(Hsc(e), De(n), 384);
  } catch (r) {
    T(`Failed to write CCR tip sidecar: ${r}`);
  }
}
async function updateCCRTipFromAckedBatch(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (!n || n.session_agent_id) continue;
    if (isSyncedTranscriptEntry(n.payload)) {
      await vsc(Rt(), n.payload.uuid);
      return;
    }
  }
}
function collectTailUuids(e) {
  let t = new Set();
  for (let n of fCe(e)) {
    if (typeof n !== "object" || n === null) continue;
    let r = n.uuid;
    if (typeof r === "string") t.add(r);
  }
  return t;
}
async function getValidatedCCRTip(e, t, n) {
  if (!t)
    return {
      fallbackReason: "client-gated",
    };
  let [r, o] = await Promise.all([
    readCCRTip(e),
    n !== void 0 ? n : vx(getTranscriptPathForSession(e), 65536).catch(() => null),
  ]);
  if (!r)
    return {
      fallbackReason: "no-sidecar",
    };
  if (!o || !collectTailUuids(o.content).has(r.eventId))
    return {
      fallbackReason: "tip-not-in-tail",
    };
  return {
    eventId: r.eventId,
  };
}
function extractLastSyncedEventUuid(e) {
  for (let t of Csc(e)) return t;
  return;
}
function* Csc(e) {
  let t = e.split(`
`);
  for (let n = t.length - 1; n >= 0; n--) {
    let r = t[n];
    if (!r) continue;
    let o;
    try {
      o = qge(r);
    } catch {
      continue;
    }
    if (isSyncedTranscriptEntry(o)) yield o.uuid;
  }
}
function extractLatestIntersectingSyncedUuid(e, t) {
  let n = 0;
  for (let r of Csc(e)) {
    if (t.has(r))
      return {
        uuid: r,
        walkback: n,
      };
    n++;
  }
  return;
}
async function hydrateFromCCRv2InternalEvents(e, t, n = !1) {
  let r = Date.now();
  PA(Fb(e), "hydrate");
  let o = Kc(),
    s = o.getInternalEventReader();
  if (!s) return (T("No internal event reader registered for CCR v2 resume"), !1);
  try {
    let i = getTranscriptPathForSession(e),
      a = vx(i, 65536).catch(() => null),
      l,
      c,
      u;
    if (t) ((l = t[0]), (c = t[2]?.eventId), (u = t[2]?.fallbackReason));
    else {
      let M = await getValidatedCCRTip(e, n, await a);
      ((c = M.eventId), (u = M.fallbackReason));
      let N = performance.now();
      ((l = await s(c)), Zc("resume_hydrate_fetch_ms", performance.now() - N, N));
    }
    if (!l)
      return (
        T("Failed to read internal events for resume"),
        In("error", "hydrate_ccr_v2_read_fail"),
        !1
      );
    let { events: d, stats: p } = l,
      f = Jh(yr());
    await Hl.mkdir(f, {
      recursive: !0,
      mode: 448,
    });
    let m = await a,
      g = m?.bytesTotal ?? 0,
      h,
      y,
      b;
    if (m) {
      if (((h = extractLastSyncedEventUuid(m.content)), c === void 0)) {
        let M = new Map();
        for (let N = 0; N < d.length; N++) {
          let B = d[N]?.payload.uuid;
          if (typeof B === "string") M.set(B, N);
        }
        ((y = extractLatestIntersectingSyncedUuid(m.content, M)),
          (b = y === void 0 ? void 0 : M.get(y.uuid)));
      }
    }
    let _ = b === void 0 ? d.length : d.length - 1 - b;
    lZa(g, p?.bytesReceived ?? null, d.length, _, c !== void 0, y?.walkback);
    let S = !1,
      A = l.anchorFallback !== void 0,
      v =
        c !== void 0 &&
        !A &&
        d.some((M) => (M.event_id !== void 0 ? M.event_id === c : M.payload.uuid === c)),
      C = c !== void 0 && m ? collectTailUuids(m.content) : null,
      x =
        c !== void 0 &&
        m !== null &&
        C !== null &&
        C.has(c) &&
        m.content.endsWith(`
`),
      I = d;
    if (c && !A && !v) {
      if (!x) {
        u = "tail-incoherent";
        let M = await s();
        if (!M)
          return (
            T("Failed to refetch full read after incoherent local tail"),
            In("error", "hydrate_ccr_v2_read_fail"),
            !1
          );
        I = M.events;
      }
    }
    let k = !1;
    if (c && !A && !v && x) {
      let M = d
        .map((N) => N.payload)
        .filter((N) => {
          let B = N.uuid;
          return typeof B !== "string" || !C.has(B);
        });
      if (M.length > 0) await XEs(i, M);
      ((S = !0),
        (k = !0),
        T(
          `Hydrated delta: appended ${M.length}/${d.length} foreground entries from CCR v2 internal events`,
        ));
    } else {
      if (c && u !== "tail-incoherent")
        u =
          l.anchorFallback === "rejected"
            ? "anchor-rejected"
            : l.anchorFallback === "not-found"
              ? "anchor-not-found"
              : "anchor-in-response";
      if (!I.some((N) => alr(N.payload)) && (await YWo(i)))
        (T(
          `Skipping CCR v2 foreground hydration: fetched set of ${I.length} events has no content-bearing entries but the local transcript does`,
        ),
          In("info", "hydrate_skip_zero_content_replace", {
            path: "v2_foreground",
            server_entry_count: I.length,
          }));
      else
        (await The(
          i,
          I.map((N) => N.payload),
        ),
          (k = !0),
          T(`Hydrated ${I.length} foreground entries from CCR v2 internal events`));
    }
    let D = S ? d : I;
    if (k)
      for (let M = D.length - 1; M >= 0; M--) {
        let N = D[M];
        if (N && isSyncedTranscriptEntry(N.payload)) {
          await vsc(e, N.event_id ?? N.payload.uuid);
          break;
        }
      }
    let P = 0,
      O,
      L = o.getInternalSubagentEventReader();
    if (L) {
      let M = t ? t[1] : await L();
      O = M?.stats;
      let N = M?.events;
      if (N && N.length > 0) {
        P = N.length;
        let B = new Map();
        for (let $ of N) {
          let q = $.session_agent_id || "";
          if (!q) continue;
          let W = B.get(q);
          if (!W) ((W = []), B.set(q, W));
          W.push($.payload);
        }
        for (let [$, q] of B) {
          let W = uk(Bu($));
          if (!q.some(alr) && (await YWo(W))) {
            In("info", "hydrate_skip_zero_content_replace", {
              path: "v2_subagent",
              server_entry_count: q.length,
            });
            continue;
          }
          (await Hl.mkdir(vh.dirname(W), {
            recursive: !0,
            mode: 448,
          }),
            await The(W, q));
        }
        T(`Hydrated ${N.length} subagent entries across ${B.size} agents`);
      }
    }
    return (
      In("info", "hydrate_ccr_v2_completed", {
        duration_ms: Date.now() - r,
        event_count: D.length,
        subagent_event_count: P,
        page_count: p?.pageCount,
        bytes_received: p?.bytesReceived,
        content_encoding: p?.contentEncoding,
        subagent_page_count: O?.pageCount,
        subagent_bytes_received: O?.bytesReceived,
        prefetched: t?.[0] != null,
        on_disk_bytes: g,
        delta_events: _,
        delta_fetch_attempted: c !== void 0,
        delta_fetch_applied: S,
        ...(u && {
          delta_fallback_reason: u,
        }),
        delta_anchor: y !== void 0 && y.walkback > 0 ? "intersected" : "synced",
        on_disk_last_uuid: h,
        anchor_uuid: y?.uuid,
        anchor_walkback: y?.walkback,
        ccr_last_uuid: D.at(-1)?.payload.uuid,
      }),
      D.length > 0
    );
  } catch (i) {
    if (i instanceof Error && i.message === "CCRClient: Epoch mismatch (409)") throw i;
    return (T(`Error hydrating session from CCR v2: ${i}`), In("error", "hydrate_ccr_v2_fail"), !1);
  }
}
function c5o(e) {
  let t = getFirstMeaningfulUserMessageTextContent(e);
  if (t) {
    let n = t
      .replaceAll(
        `
`,
        " ",
      )
      .trim();
    if (n.length > 200) n = n.slice(0, 200).trim() + "\u2026";
    return n;
  }
  return "No prompt";
}
function getFirstMeaningfulUserMessageTextContent(e) {
  for (let t of e) {
    if (t.type !== "user" || t.isMeta) continue;
    if ("isCompactSummary" in t && t.isCompactSummary) continue;
    let n = t.message?.content;
    if (!n) continue;
    let r = [];
    if (typeof n === "string") r.push(n);
    else if (Array.isArray(n)) {
      for (let o of n) if (o.type === "text" && o.text) r.push(o.text);
    }
    for (let o of r) {
      if (!o) continue;
      let s = xl(o, rj);
      if (s) {
        let a = s.replace(/^\//, "");
        if (mQ().has(a)) continue;
        else {
          let l = xl(o, "command-args")?.trim();
          if (!l) continue;
          return `${s} ${l}`;
        }
      }
      let i = xl(o, "bash-input");
      if (i) return `! ${i}`;
      if (lsc.test(o)) continue;
      return o;
    }
  }
  return;
}
function removeExtraFields(e) {
  return e.map((t) => {
    let { isSidechain: n, parentUuid: r, ...o } = t;
    return o;
  });
}
function osc(e) {
  let t,
    n = -1,
    r = -1,
    o = new Map(),
    s = 0;
  for (let p of e.values()) {
    if ((o.set(p.uuid, s), pA(p))) {
      r = s;
      let f = p.compactMetadata;
      if (f?.preservedMessages || f?.preservedSegment) ((t = f), (n = s));
    }
    s++;
  }
  if (!t) return;
  let i = n === r,
    a = i ? MZf(t, e) : void 0;
  if (i && !a) return;
  let l = a && a.preserved.uuids.length > 0 ? a.preserved : void 0;
  if (l?.uuids.some((p) => !e.has(p))) {
    G("tengu_relink_walk_broken", {
      source: Oo(a?.source),
      listed: l.uuids.length,
      present: On(l.uuids, (p) => e.has(p)),
      anchorInTranscript: e.has(l.anchorUuid),
      transcriptSize: e.size,
    });
    return;
  }
  let c = l?.uuids ?? [],
    u = new Set(c);
  if (l) {
    let p = c.at(-1),
      f = l.anchorUuid;
    for (let m of c) {
      let g = e.get(m);
      (e.set(m, {
        ...g,
        parentUuid: f,
      }),
        (f = m));
    }
    for (let [m, g] of e)
      if (g.parentUuid === l.anchorUuid && m !== c[0])
        e.set(m, {
          ...g,
          parentUuid: p,
        });
    for (let m of c) {
      let g = e.get(m);
      if (g?.type !== "assistant") continue;
      e.set(m, {
        ...g,
        message: {
          ...g.message,
          usage: {
            ...g.message.usage,
            input_tokens: 0,
            output_tokens: 0,
            cache_creation_input_tokens: 0,
            cache_read_input_tokens: 0,
          },
        },
      });
    }
  }
  let d = [];
  for (let [p] of e) {
    let f = o.get(p);
    if (f !== void 0 && f < r && !u.has(p)) d.push(p);
  }
  for (let p of d) e.delete(p);
  if (l && d.length > 0) {
    let p = c.at(-1),
      f = new Set(d);
    for (let [m, g] of e)
      if (
        (g.type === "user" || g.type === "assistant") &&
        g.parentUuid !== null &&
        f.has(g.parentUuid)
      )
        e.set(m, {
          ...g,
          parentUuid: p,
        });
  }
  return c.at(-1);
}
function MZf(e, t) {
  if (e.preservedMessages)
    return {
      preserved: e.preservedMessages,
      source: "list",
    };
  let n = e.preservedSegment;
  if (!n) return;
  let r = new Set(),
    o = [],
    s = t.get(n.tailUuid);
  while (s && !r.has(s.uuid)) {
    if ((r.add(s.uuid), o.push(s.uuid), s.uuid === n.headUuid))
      return (
        o.reverse(),
        {
          preserved: {
            anchorUuid: n.anchorUuid,
            uuids: o,
          },
          source: "walk",
        }
      );
    s = s.parentUuid ? t.get(s.parentUuid) : void 0;
  }
  G("tengu_relink_walk_broken", {
    source: We("walk"),
    tailInTranscript: t.has(n.tailUuid),
    headInTranscript: t.has(n.headUuid),
    anchorInTranscript: t.has(n.anchorUuid),
    walkSteps: r.size,
    transcriptSize: t.size,
  });
  return;
}
function UYe(e, t) {
  let n,
    r = -1 / 0;
  for (let o of e) {
    if (!t(o)) continue;
    let s = Date.parse(o.timestamp);
    if (s > r) ((r = s), (n = o));
  }
  return n;
}
function buildConversationChain(e, t, n) {
  let r = [],
    o = new Set(),
    s = t;
  while (s) {
    if (o.has(s.uuid)) {
      (ke(
        Error(
          `Cycle detected in parentUuid chain at message ${s.uuid}. Returning partial transcript.`,
        ),
      ),
        G("tengu_chain_parent_cycle", {}));
      break;
    }
    (o.add(s.uuid), r.push(s));
    let a = s.parentUuid;
    if (!a) break;
    let l = e.get(a);
    if (!l || o.has(l.uuid)) {
      if (((l = NZf(e, s, o)), l)) G("tengu_chain_timestamp_fallback", {});
    }
    s = l;
  }
  r.reverse();
  let i = BZf(e, r, o);
  return ($Zf(t, i, o, n ?? xsc(e)), i);
}
function xsc(e) {
  let t = new Map();
  for (let n of e.values())
    if (n.parentUuid && n.type !== "user" && n.type !== "assistant") {
      let r = t.get(n.parentUuid);
      if (r) r.push(n);
      else t.set(n.parentUuid, [n]);
    }
  return t;
}
function $Zf(e, t, n, r) {
  let o = [],
    s = [e.uuid];
  while (s.length > 0) {
    let i = s.shift();
    for (let a of r.get(i) ?? []) {
      if (n.has(a.uuid)) continue;
      (n.add(a.uuid), o.push(a), s.push(a.uuid));
    }
  }
  if (o.length > 1)
    o.sort((i, a) => (i.timestamp < a.timestamp ? -1 : i.timestamp > a.timestamp ? 1 : 0));
  t.push(...o);
}
function NZf(e, t, n) {
  let r = new Date(t.timestamp).getTime();
  if (Number.isNaN(r)) return;
  let o,
    s = 1 / 0;
  for (let i of e.values()) {
    if (n.has(i.uuid)) continue;
    if (i.isSidechain !== t.isSidechain) continue;
    let a = new Date(i.timestamp).getTime();
    if (Number.isNaN(a)) continue;
    let l = r - a;
    if (l >= 0 && l <= OZf && l < s) ((s = l), (o = i));
  }
  return o;
}
function BZf(e, t, n) {
  let r = t.filter((d) => d.type === "assistant");
  if (r.length === 0) return t;
  let o = new Map();
  for (let d of r) if (d.message.id) o.set(d.message.id, d);
  let s = new Map(),
    i = new Map();
  for (let d of e.values())
    if (d.type === "assistant" && d.message.id) {
      let p = s.get(d.message.id);
      if (p) p.push(d);
      else s.set(d.message.id, [d]);
    } else if (
      d.type === "user" &&
      d.parentUuid &&
      Array.isArray(d.message.content) &&
      d.message.content.some((p) => p.type === "tool_result")
    ) {
      let p = i.get(d.parentUuid);
      if (p) p.push(d);
      else i.set(d.parentUuid, [d]);
    }
  let a = new Set(),
    l = new Map(),
    c = 0;
  for (let d of r) {
    let p = d.message.id;
    if (!p || a.has(p)) continue;
    a.add(p);
    let f = s.get(p) ?? [d],
      m = f.filter((b) => !n.has(b.uuid)),
      g = [];
    for (let b of f) {
      let _ = i.get(b.uuid);
      if (!_) continue;
      for (let S of _) if (!n.has(S.uuid)) g.push(S);
    }
    if (m.length === 0 && g.length === 0) continue;
    (m.sort((b, _) => b.timestamp.localeCompare(_.timestamp)),
      g.sort((b, _) => b.timestamp.localeCompare(_.timestamp)));
    let h = o.get(p),
      y = [...m, ...g];
    for (let b of y) n.add(b.uuid);
    ((c += y.length), l.set(h.uuid, y));
  }
  if (c === 0) return t;
  G("tengu_chain_parallel_tr_recovered", {
    recovered_count: c,
  });
  let u = [];
  for (let d of t) {
    u.push(d);
    let p = l.get(d.uuid);
    if (p) u.push(...p);
  }
  return u;
}
function checkResumeConsistency(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type !== "system" || n.subtype !== "turn_duration") continue;
    let r = n.messageCount;
    if (r === void 0) return;
    let o = t;
    G("tengu_resume_consistency_delta", {
      expected: r,
      actual: o,
      delta: o - r,
      chain_length: e.length,
      checkpoint_age_entries: e.length - 1 - t,
    });
    return;
  }
}
function plr(e, t) {
  let n = [],
    r = new Map();
  for (let o of t) {
    let s = e.get(o.uuid);
    if (!s) continue;
    let { snapshot: i, isSnapshotUpdate: a } = s,
      l = a ? r.get(i.messageId) : void 0;
    if (l === void 0) (r.set(i.messageId, n.length), n.push(i));
    else n[l] = i;
  }
  return n;
}
function flr(e, t) {
  return Array.from(e.values());
}
function isTranscriptFileResumeArg(e) {
  return vh.isAbsolute(e) && e.endsWith(".jsonl");
}
function u5o(e, t, n) {
  let r = UYe(e.messages.values(), () => !0)?.sessionId ?? n;
  return {
    ...t,
    messages: [],
    value: t.value ?? 0,
    firstPrompt: "",
    messageCount: 0,
    isSidechain: !1,
    sessionId: r,
    customTitle: e.customTitles.get(r) ?? t.customTitle,
    aiTitle: e.aiTitles.get(r) ?? t.aiTitle,
    tag: e.tags.get(r) ?? t.tag,
    agentName: e.agentNames.get(r) ?? t.agentName,
    agentColor: e.agentColors.get(r),
    agentSetting: e.agentSettings.get(r) ?? t.agentSetting,
    mode: e.modes.get(r),
    permissionMode: e.permissionModes.get(r),
    isolationLatch: e.isolationLatches.get(r),
    prNumber: e.prNumbers.get(r) ?? t.prNumber,
    prUrl: e.prUrls.get(r) ?? t.prUrl,
    prRepository: e.prRepositories.get(r) ?? t.prRepository,
    bridgeSessionId: e.bridgeSessionIds.get(r),
    bridgeLastSeq: e.bridgeLastSeqs.get(r),
    bridgeDialogKinds: e.bridgeDialogKindsBySession.get(r),
    worktreeSession: e.worktreeStates.has(r) ? e.worktreeStates.get(r) : t.worktreeSession,
    contentReplacements: e.contentReplacements.get(r) ?? [],
    contextCollapseCommits: e.contextCollapseCommits.filter((o) => o.sessionId === r),
    contextCollapseSnapshot:
      e.contextCollapseSnapshot?.sessionId === r ? e.contextCollapseSnapshot : void 0,
    rewindAnchorUuid: e.rewindAnchorUuid,
  };
}
async function loadTranscriptFromFile(e) {
  let t = await Hl.stat(e);
  if (e.endsWith(".jsonl")) {
    let s = await loadTranscriptFile(e),
      {
        messages: i,
        summaries: a,
        customTitles: l,
        endedSessions: c,
        aiTitles: u,
        tags: d,
        fileHistorySnapshots: p,
        attributionSnapshots: f,
        contextCollapseCommits: m,
        contextCollapseSnapshot: g,
        leafUuids: h,
        contentReplacements: y,
        worktreeStates: b,
        isolationLatches: _,
        bridgeSessionIds: S,
        bridgeLastSeqs: A,
        bridgeDialogKindsBySession: v,
        clearedToEmpty: C,
      } = s;
    if (i.size === 0)
      throw new TranscriptFileFormatError("No messages found in JSONL file", "no_messages");
    let x =
      UYe(i.values(), (L) => h.has(L.uuid)) ??
      (h.size === 0 && !C ? UYe(i.values(), (L) => !L.isSidechain) : void 0);
    if (!x) {
      if (C) {
        let L = t.mtime;
        return u5o(s, {
          date: L.toISOString(),
          fullPath: e,
          created: L,
          modified: L,
        });
      }
      throw new TranscriptFileFormatError(
        "No valid conversation chain found in JSONL file",
        "no_chain",
      );
    }
    let I = buildConversationChain(i, x),
      k = a.get(x.uuid),
      D = l.get(x.sessionId),
      P = d.get(x.sessionId),
      O = x.sessionId;
    return {
      ...XWo(I, 0, k, D, plr(p, I), P, e, flr(f, I), void 0, y.get(O) ?? []),
      rewindAnchorUuid: s.rewindAnchorUuid,
      aiTitle: u.get(O),
      ...ZEe({}, c.has(O)),
      contextCollapseCommits: m.filter((L) => L.sessionId === O),
      contextCollapseSnapshot: g?.sessionId === O ? g : void 0,
      worktreeSession: b.has(O) ? b.get(O) : void 0,
      isolationLatch: _.get(O),
      bridgeSessionId: S.get(O),
      bridgeLastSeq: A.get(O),
      bridgeDialogKinds: v.get(O),
    };
  }
  if (t.size > 268435456)
    throw new TranscriptFileFormatError(
      `Transcript file too large to load as JSON (${t.size} bytes)`,
      "too_large",
    );
  let n = await Hl.readFile(e, {
      encoding: "utf-8",
    }),
    r;
  try {
    r = Ft(n);
  } catch (s) {
    throw new TranscriptFileFormatError(`Invalid JSON in transcript file: ${s}`, "invalid_json");
  }
  let o;
  if (Array.isArray(r)) o = r;
  else if (r && typeof r === "object" && "messages" in r) {
    if (!Array.isArray(r.messages))
      throw new TranscriptFileFormatError("Transcript messages must be an array", "bad_shape");
    o = r.messages;
  } else
    throw new TranscriptFileFormatError(
      "Transcript must be an array of messages or an object with a messages array",
      "bad_shape",
    );
  if (o.length === 0)
    throw new TranscriptFileFormatError("No messages found in JSON file", "no_messages");
  return XWo(o, 0, void 0, void 0, void 0, void 0, e);
}
function UZf(e) {
  if (e.type !== "user") return !1;
  if (e.isMeta) return !1;
  let t = e.message?.content;
  if (!t) return !1;
  if (typeof t === "string") return t.trim().length > 0;
  if (Array.isArray(t))
    return t.some((n) => n.type === "text" || n.type === "image" || n.type === "document");
  return !1;
}
function FZf(e) {
  if (e.type !== "assistant") return !1;
  let t = e.message?.content;
  if (!t || !Array.isArray(t)) return !1;
  return t.some((n) => n.type === "text" && typeof n.text === "string" && n.text.trim().length > 0);
}
function p5o(e) {
  let t = 0;
  for (let n of e)
    switch (n.type) {
      case "user":
        if (UZf(n)) t++;
        break;
      case "assistant":
        if (FZf(n)) t++;
        break;
      case "attachment":
      case "system":
      case "progress":
        break;
    }
  return t;
}
function XWo(e, t = 0, n, r, o, s, i, a, l, c) {
  let u = e.at(-1),
    d = e[0],
    p = c5o(e),
    f = new Date(d.timestamp),
    m = new Date(u.timestamp);
  return {
    date: u.timestamp,
    messages: removeExtraFields(e),
    fullPath: i,
    value: t,
    created: f,
    modified: m,
    firstPrompt: p,
    messageCount: p5o(e),
    isSidechain: d.isSidechain,
    teamName: d.teamName,
    sessionKind: d.sessionKind,
    agentName: d.agentName,
    agentSetting: l,
    leafUuid: u.uuid,
    summary: n,
    customTitle: r,
    tag: s,
    fileHistorySnapshots: o,
    attributionSnapshots: a,
    contentReplacements: c,
    gitBranch: u.gitBranch,
    projectPath: d.cwd,
  };
}
async function jZf(e) {
  let t = new Map(),
    n = 0;
  for (let i of e) {
    let a = getSessionIdFromLog(i);
    if (a) {
      let l = (t.get(a) || 0) + 1;
      (t.set(a, l), (n = Math.max(l, n)));
    }
  }
  if (n <= 1) return;
  let r = Array.from(t.values()).filter((i) => i > 1),
    o = r.length,
    s = r.reduce((i, a) => i + a, 0);
  G("tengu_session_forked_branches_fetched", {
    total_sessions: t.size,
    sessions_with_branches: o,
    max_branches_per_session: Math.max(...r),
    avg_branches_per_session: Math.round(s / o),
    total_transcript_count: e.length,
  });
}
async function fetchLogs(e) {
  let t = yr(),
    n = (await eAs(t)) ?? Jh(t),
    [r, o] = await Promise.all([getSessionFilesLite(n, e, t), bsc(t)]),
    s = r;
  if (s.length === 0 && JWo.test(t)) s = await QWo(t, n, e);
  if (o.length > 0) {
    let i = (await Promise.all(o.map((a) => getSessionFilesLite(a, e)))).flat().map((a) => ({
      ...a,
      isAlias: !0,
    }));
    if (((s = zQt(s.concat(i))), e !== void 0)) s = s.slice(0, e);
  }
  return (await jZf(s), s);
}
function ETe(e, t) {
  if (isTranscriptPersistenceDisabled()) return;
  let n = qt(),
    r =
      De(t) +
      `
`;
  try {
    n.appendFileSync(e, r, {
      mode: 384,
    });
  } catch {
    (n.mkdirSync(vh.dirname(e), {
      mode: 448,
    }),
      n.appendFileSync(e, r, {
        mode: 384,
      }));
  }
  Kc().fireMirror(e, [t]);
}
function GZf(e) {
  let t;
  try {
    t = c2.openSync(e, "r");
    let n = c2.fstatSync(t),
      r = Math.max(0, n.size - Mw),
      o = Buffer.allocUnsafe(Math.min(Mw, n.size - r)),
      s = c2.readSync(t, o, 0, o.length, r);
    return o.toString("utf8", 0, s);
  } catch {
    return "";
  } finally {
    if (t !== void 0)
      try {
        c2.closeSync(t);
      } catch {}
  }
}
async function appendEntryToFileAsync(e, t) {
  if (isTranscriptPersistenceDisabled()) return;
  let n =
    De(t) +
    `
`;
  try {
    await Hl.appendFile(e, n, {
      mode: 384,
    });
  } catch {
    (await Hl.mkdir(vh.dirname(e), {
      recursive: !0,
      mode: 448,
    }),
      await Hl.appendFile(e, n, {
        mode: 384,
      }));
  }
  Kc().fireMirror(e, [t]);
}
async function WZf(e) {
  let t;
  try {
    t = await Hl.open(e, "r");
    let n = await t.stat(),
      r = Math.max(0, n.size - Mw),
      o = Math.min(Mw, n.size - r);
    if (o <= 0) return "";
    let s = Buffer.allocUnsafe(o),
      { bytesRead: i } = await t.read(s, 0, o, r);
    return s.toString("utf8", 0, i);
  } catch {
    return "";
  } finally {
    if (t)
      try {
        await t.close();
      } catch {}
  }
}
function markSessionEndedByModel(e) {}
function applyEndedByModelOnResume(e, t) {
  return;
}
async function saveCustomTitle(e, t, n, r = "user") {
  let o = n ?? getTranscriptPathForSession(e);
  if (
    (ETe(o, {
      type: "custom-title",
      customTitle: t,
      sessionId: e,
    }),
    e === Rt())
  )
    ((Kc().currentSessionTitle = t), nZt.emit());
  G("tengu_session_renamed", {
    source: $e(r),
  });
}
function saveAiGeneratedTitle(e, t) {
  if (
    (ETe(getTranscriptPathForSession(e), {
      type: "ai-title",
      aiTitle: t,
      sessionId: e,
    }),
    e === Rt())
  )
    ((Kc().currentSessionAiTitle = t), nZt.emit());
}
async function linkSessionToPR(e, t, n, r, o) {
  let s = o ?? getTranscriptPathForSession(e);
  try {
    (ETe(s, {
      type: "pr-link",
      sessionId: e,
      prNumber: t,
      prUrl: n,
      prRepository: r,
      timestamp: new Date().toISOString(),
    }),
      G("tengu_session_linked_to_pr", {
        prNumber: t,
      }));
  } catch (i) {
    let a = on(i);
    if (gd(i))
      T(`linkSessionToPR: failed to append pr-link entry to ${s} (${a}): ${be(i)}`, {
        level: "error",
      });
    else ke(i);
    G("tengu_transcript_write_failed", {
      source: We("pr_link"),
      errno_enospc: a === "ENOSPC",
      errno_emfile: a === "EMFILE",
    });
  }
  if (e === Rt()) {
    let i = Kc();
    ((i.currentSessionPrNumber = t),
      (i.currentSessionPrUrl = n),
      (i.currentSessionPrRepository = r));
  }
}
function saveBridgeSession(e, t, n, r, o) {
  let s = Kc();
  if (s.sessionFile)
    try {
      ETe(r ?? getTranscriptPathForSession(e), {
        type: "bridge-session",
        sessionId: e,
        bridgeSessionId: t,
        lastSequenceNum: n,
        ...(o?.length && {
          declaredDialogKinds: o,
        }),
      });
    } catch (i) {
      T(`saveBridgeSession: transcript append failed: ${be(i)}`);
    }
  if (e === Rt())
    ((s.currentSessionBridgeId = t),
      (s.currentSessionBridgeSeq = n),
      (s.currentSessionBridgeDialogKinds = o?.length ? o : void 0));
}
function clearBridgeSessionCache() {
  let e = Kc();
  ((e.currentSessionBridgeId = void 0),
    (e.currentSessionBridgeSeq = void 0),
    (e.currentSessionBridgeDialogKinds = void 0));
}
function clearBridgeSession(e, t) {
  let n = e ?? Rt(),
    r = Kc();
  if (r.sessionFile)
    try {
      ETe(t ?? getTranscriptPathForSession(n), {
        type: "bridge-session",
        sessionId: n,
        bridgeSessionId: "",
        lastSequenceNum: 0,
      });
    } catch (o) {
      T(`clearBridgeSession: transcript append failed: ${be(o)}`);
    }
  if (n === Rt())
    ((r.currentSessionBridgeId = void 0),
      (r.currentSessionBridgeSeq = void 0),
      (r.currentSessionBridgeDialogKinds = void 0));
}
function getCurrentSessionBridge() {
  let e = Kc();
  return e.currentSessionBridgeId
    ? {
        id: e.currentSessionBridgeId,
        seq: e.currentSessionBridgeSeq ?? 0,
        declaredDialogKinds: e.currentSessionBridgeDialogKinds,
      }
    : void 0;
}
function getCurrentSessionTitle(e) {
  if (e === Rt()) return Kc().currentSessionTitle;
  return;
}
function getCurrentSessionAiTitle(e) {
  if (e === Rt()) return Kc().currentSessionAiTitle;
  return;
}
function getCurrentSessionAgentColor() {
  return Kc().currentSessionAgentColor;
}
function getCurrentSessionAgentName() {
  return Kc().currentSessionAgentName;
}
function restoreSessionMetadata(e) {
  let t = Kc();
  if (e.customTitle) t.currentSessionTitle ??= e.customTitle;
  if (e.aiTitle) t.currentSessionAiTitle ??= e.aiTitle;
  if (e.tag !== void 0) t.currentSessionTag = e.tag || void 0;
  if (e.agentName) t.currentSessionAgentName ??= e.agentName;
  if (e.agentColor) t.currentSessionAgentColor ??= e.agentColor;
  if (e.agentSetting) t.currentSessionAgentSetting = e.agentSetting;
  if (e.mode) t.currentSessionMode = e.mode;
  if (e.permissionMode) t.currentSessionPermissionMode = e.permissionMode;
  if (e.isolationLatch) t.currentSessionIsolationLatch = e.isolationLatch;
  if (e.worktreeSession !== void 0) t.currentSessionWorktree = e.worktreeSession;
  if (e.prNumber !== void 0) t.currentSessionPrNumber = e.prNumber;
  if (e.prUrl) t.currentSessionPrUrl = e.prUrl;
  if (e.prRepository) t.currentSessionPrRepository = e.prRepository;
  if (e.bridgeSessionId)
    ((t.currentSessionBridgeId = e.bridgeSessionId),
      (t.currentSessionBridgeSeq = e.bridgeLastSeq),
      (t.currentSessionBridgeDialogKinds = e.bridgeDialogKinds?.length
        ? e.bridgeDialogKinds
        : void 0));
  if (e.lastPrompt !== void 0) t.currentSessionLastPrompt = e.lastPrompt;
  if (e.leafUuid !== void 0) t.currentSessionLeafUuid = e.leafUuid;
  if (e.leafTs !== void 0) t.currentSessionLeafTs = e.leafTs;
}
function snapshotSessionMetadata() {
  let e = Kc();
  return {
    customTitle: e.currentSessionTitle,
    aiTitle: e.currentSessionAiTitle,
    tag: e.currentSessionTag,
    agentName: e.currentSessionAgentName,
    agentColor: e.currentSessionAgentColor,
    agentSetting: e.currentSessionAgentSetting,
    mode: e.currentSessionMode,
    permissionMode: e.currentSessionPermissionMode,
    isolationLatch: e.currentSessionIsolationLatch,
    worktreeSession: e.currentSessionWorktree,
    prNumber: e.currentSessionPrNumber,
    prUrl: e.currentSessionPrUrl,
    prRepository: e.currentSessionPrRepository,
    bridgeSessionId: e.currentSessionBridgeId,
    bridgeLastSeq: e.currentSessionBridgeSeq,
    bridgeDialogKinds: e.currentSessionBridgeDialogKinds,
    lastPrompt: e.currentSessionLastPrompt,
    leafUuid: e.currentSessionLeafUuid,
    leafTs: e.currentSessionLeafTs,
  };
}
function clearSessionMetadata() {
  let e = Kc();
  ((e.currentSessionTitle = void 0),
    (e.currentSessionAiTitle = void 0),
    (e.currentSessionTag = void 0),
    (e.currentSessionAgentName = void 0),
    (e.currentSessionAgentColor = void 0),
    (e.currentSessionLastPrompt = void 0),
    (e.currentSessionLeafUuid = void 0),
    (e.currentSessionLeafTs = void 0),
    (e.currentSessionAgentSetting = void 0),
    (e.currentSessionMode = void 0),
    (e.currentSessionPermissionMode = void 0),
    (e.currentSessionIsolationLatch = void 0),
    (e.currentSessionWorktree = void 0),
    (e.currentSessionPrNumber = void 0),
    (e.currentSessionPrUrl = void 0),
    (e.currentSessionPrRepository = void 0),
    (e.currentSessionBridgeId = void 0),
    (e.currentSessionBridgeSeq = void 0),
    (e.currentSessionBridgeDialogKinds = void 0));
}
function reAppendSessionMetadata() {
  Kc().reAppendSessionMetadata(!1, !0);
}
async function saveAgentName(e, t, n, r = "user") {
  let o = n ?? getTranscriptPathForSession(e);
  if (
    (ETe(o, {
      type: "agent-name",
      agentName: t,
      sessionId: e,
    }),
    e === Rt())
  )
    ((Kc().currentSessionAgentName = t), JY(t), m5o.emit());
  G("tengu_agent_name_set", {
    source: $e(r),
  });
}
async function saveAgentColor(e, t, n) {
  let r = n ?? getTranscriptPathForSession(e);
  if (
    (ETe(r, {
      type: "agent-color",
      agentColor: t,
      sessionId: e,
    }),
    e === Rt())
  )
    Kc().currentSessionAgentColor = t;
  G("tengu_agent_color_set", {});
}
function saveAgentSetting(e) {
  Kc().currentSessionAgentSetting = e;
}
function cacheSessionTitle(e) {
  ((Kc().currentSessionTitle = e), nZt.emit());
}
function cacheAiTitle(e) {
  ((Kc().currentSessionAiTitle = e), nZt.emit());
}
function cacheAgentName(e) {
  ((Kc().currentSessionAgentName = e), m5o.emit());
}
function normalizeSessionTitle(e) {
  return [...e.replace(/[\x00-\x1f\x7f-\x9f]/g, "")].slice(0, YZf).join("");
}
function cacheHookSessionTitle(e) {
  if (wf()) return;
  let t = normalizeSessionTitle(e);
  if (!t) return;
  let n = getCurrentSessionTitle(Rt());
  if (t === (n && normalizeSessionTitle(n))) return;
  (T(`Hook sessionTitle cached (${[...t].length} chars)`), cacheSessionTitle(t), cacheAgentName(t));
}
function saveMode(e) {
  Kc().currentSessionMode = e;
}
function savePermissionMode(e) {
  Kc().currentSessionPermissionMode = e;
}
function saveIsolationLatch(e) {
  let t = Kc();
  if (t.currentSessionIsolationLatch === e) return;
  if (((t.currentSessionIsolationLatch = e), t.sessionFile)) {
    let n = t.sessionFile;
    appendEntryToFileAsync(n, {
      type: "isolation-latch",
      side: e,
      sessionId: Rt(),
    }).catch((r) => {
      let o = on(r);
      if (gd(r))
        T(`saveIsolationLatch: failed to append isolation-latch entry to ${n} (${o}): ${be(r)}`, {
          level: "error",
        });
      else ke(r);
      G("tengu_transcript_write_failed", {
        source: We("isolation_latch"),
        errno_enospc: o === "ENOSPC",
        errno_emfile: o === "EMFILE",
      });
    });
  }
}
function getCurrentSessionIsolationLatch() {
  return Kc().currentSessionIsolationLatch;
}
function saveWorktreeState(e) {
  let t = e
      ? {
          originalCwd: e.originalCwd,
          worktreePath: e.worktreePath,
          worktreeName: e.worktreeName,
          worktreeBranch: e.worktreeBranch,
          originalBranch: e.originalBranch,
          originalHeadCommit: e.originalHeadCommit,
          sessionId: e.sessionId,
          tmuxSessionName: e.tmuxSessionName,
          hookBased: e.hookBased,
          enteredExisting: e.enteredExisting,
        }
      : null,
    n = Kc();
  if (((n.currentSessionWorktree = t), worktreeStateSignal.emit(t), n.sessionFile))
    ETe(n.sessionFile, {
      type: "worktree-state",
      worktreeSession: t,
      sessionId: Rt(),
    });
}
function getSessionIdFromLog(e) {
  if (e.sessionId) return e.sessionId;
  return e.messages[0]?.sessionId;
}
function isLiteLog(e) {
  return e.messages.length === 0 && e.sessionId !== void 0;
}
async function loadFullLog(e) {
  if (!isLiteLog(e)) return e;
  let t = e.fullPath;
  if (!t) return e;
  try {
    let n = await loadTranscriptFile(t),
      {
        messages: r,
        summaries: o,
        customTitles: s,
        endedSessions: i,
        aiTitles: a,
        tags: l,
        agentNames: c,
        agentColors: u,
        agentSettings: d,
        prNumbers: p,
        prUrls: f,
        prRepositories: m,
        bridgeSessionIds: g,
        bridgeLastSeqs: h,
        bridgeDialogKindsBySession: y,
        modes: b,
        permissionModes: _,
        isolationLatches: S,
        worktreeStates: A,
        fileHistorySnapshots: v,
        attributionSnapshots: C,
        contentReplacements: x,
        contextCollapseCommits: I,
        contextCollapseSnapshot: k,
        leafUuids: D,
        clearedToEmpty: P,
      } = n;
    if (r.size === 0) return e;
    let O = UYe(r.values(), (N) => D.has(N.uuid) && (N.type === "user" || N.type === "assistant"));
    if (!O) {
      if (P) return u5o(n, e, e.sessionId);
      return e;
    }
    let L = buildConversationChain(r, O),
      M = O.sessionId;
    return {
      ...e,
      rewindAnchorUuid: n.rewindAnchorUuid,
      messages: removeExtraFields(L),
      firstPrompt: c5o(L),
      messageCount: p5o(L),
      summary: O ? o.get(O.uuid) : e.summary,
      customTitle: M ? s.get(M) : e.customTitle,
      ...ZEe({}, M ? i.has(M) : iMe(e)),
      aiTitle: M ? a.get(M) : e.aiTitle,
      tag: M ? l.get(M) : e.tag,
      agentName: M ? c.get(M) : e.agentName,
      agentColor: M ? u.get(M) : e.agentColor,
      agentSetting: M ? d.get(M) : e.agentSetting,
      mode: M ? b.get(M) : e.mode,
      permissionMode: M ? _.get(M) : e.permissionMode,
      isolationLatch: M ? S.get(M) : e.isolationLatch,
      worktreeSession: M && A.has(M) ? A.get(M) : e.worktreeSession,
      prNumber: M ? p.get(M) : e.prNumber,
      prUrl: M ? f.get(M) : e.prUrl,
      prRepository: M ? m.get(M) : e.prRepository,
      bridgeSessionId: M ? g.get(M) : e.bridgeSessionId,
      bridgeLastSeq: M ? h.get(M) : e.bridgeLastSeq,
      bridgeDialogKinds: M ? y.get(M) : e.bridgeDialogKinds,
      gitBranch: O?.gitBranch ?? e.gitBranch,
      isSidechain: L[0]?.isSidechain ?? e.isSidechain,
      teamName: L[0]?.teamName ?? e.teamName,
      sessionKind: L[0]?.sessionKind ?? e.sessionKind,
      leafUuid: O?.uuid ?? e.leafUuid,
      fileHistorySnapshots: plr(v, L),
      attributionSnapshots: flr(C, L),
      contentReplacements: M ? (x.get(M) ?? []) : e.contentReplacements,
      contextCollapseCommits: M ? I.filter((N) => N.sessionId === M) : void 0,
      contextCollapseSnapshot: M && k?.sessionId === M ? k : void 0,
    };
  } catch (n) {
    return (ke(n), e);
  }
}
async function searchSessionsByCustomTitle(e, t) {
  let { limit: n, exact: r } = t || {},
    o = await tAe(yr()),
    s = await Dsc(o),
    { logs: i } = await enrichLogs(s, 0, s.length),
    a = e.toLowerCase().trim(),
    l = i.filter((d) => {
      let p = (d.customTitle ?? d.aiTitle)?.toLowerCase().trim();
      if (!p) return !1;
      return r ? p === a : p.includes(a);
    }),
    c = new Map();
  for (let d of l) {
    let p = getSessionIdFromLog(d);
    if (p) {
      let f = c.get(p);
      if (!f || d.modified > f.modified) c.set(p, d);
    }
  }
  let u = Array.from(c.values());
  if ((u.sort((d, p) => p.modified.getTime() - d.modified.getTime()), n)) return u.slice(0, n);
  return u;
}
function XZf(e, t, n, r) {
  let l = r[0],
    c = r.length,
    u = 0,
    d = !1,
    p = !1;
  for (let f = t; f < n; f++) {
    let m = e[f];
    if (p) {
      p = !1;
      continue;
    }
    if (d) {
      if (m === 92) p = !0;
      else if (m === 34) d = !1;
      continue;
    }
    if (u === 1 && m === l && f + c <= n && e.compare(r, 0, c, f, f + c) === 0) return f;
    if (m === 34) d = !0;
    else if (m === 123) u++;
    else if (m === 125) u--;
  }
  return -1;
}
function Rsc(e, t, n) {
  let a = 0,
    l = !1,
    c = !1,
    u = 0;
  for (let d = t; u < n.length; d++) {
    if (d === n[u]) {
      if (a === 1 && !l) return n[u];
      u++;
    }
    let p = e[d];
    if (c) c = !1;
    else if (l) {
      if (p === 92) c = !0;
      else if (p === 34) l = !1;
    } else if (p === 34) l = !0;
    else if (p === 123) a++;
    else if (p === 125) a--;
  }
  return n.at(-1);
}
function JZf(e) {
  let o = Buffer.from('{"parentUuid":'),
    s = Buffer.from('"uuid":"'),
    i = Buffer.from('"isSidechain":true'),
    a = 36,
    l = Buffer.from('","timestamp":"'),
    c = l.length,
    u = o.length,
    d = s.length,
    p = [],
    f = [],
    m = new Map(),
    g = 0,
    h = e.length;
  while (g < h) {
    let x = e.indexOf(10, g),
      I = x === -1 ? h : x + 1;
    if (I - g > u && e[g] === 123 && e.compare(o, 0, u, g, g + u) === 0) {
      let k = e[g + u] === 34 ? g + u + 1 : -1,
        D = -1,
        P = -1,
        O,
        L = g;
      for (;;) {
        let N = e.indexOf(s, L);
        if (N < 0 || N >= I) break;
        if (D < 0) D = N;
        let B = N + d + 36;
        if (B + c <= I && e.compare(l, 0, c, B, B + c) === 0)
          if (P < 0) P = N;
          else (O ??= [P]).push(N);
        L = N + d;
      }
      let M = O ? Rsc(e, g, O) : P >= 0 ? P : D;
      if (M >= 0) {
        let N = M + d,
          B = e.toString("latin1", N, N + 36);
        (m.set(B, p.length), p.push(g, I, k));
      } else f.push(g, I);
    } else f.push(g, I);
    g = I;
  }
  let y = -1;
  for (let x = p.length - 3; x >= 0; x -= 3) {
    let I = e.indexOf(i, p[x]);
    if (I === -1 || I >= p[x + 1]) {
      y = x;
      break;
    }
  }
  if (y < 0) return e;
  let b = new Set(),
    _ = new Set(),
    S = 0,
    A = y;
  while (A !== void 0) {
    if (b.has(A)) break;
    (b.add(A), _.add(p[A]), (S += p[A + 1] - p[A]));
    let x = p[A + 2];
    if (x < 0) break;
    let I = e.toString("latin1", x, x + 36);
    A = m.get(I);
  }
  if (h - S < h >> 1) return e;
  let v = [],
    C = 0;
  for (let x = 0; x < p.length; x += 3) {
    let I = p[x];
    while (C < f.length && f[C] < I) (v.push(e.subarray(f[C], f[C + 1])), (C += 2));
    if (_.has(I)) v.push(e.subarray(I, p[x + 1]));
  }
  while (C < f.length) (v.push(e.subarray(f[C], f[C + 1])), (C += 2));
  return Buffer.concat(v);
}
function QZf(e, t, n, r, o) {
  let l = Buffer.from('{"type":"attribution-snapshot"'),
    c = Buffer.from('{"parentUuid":'),
    u = Buffer.from('"parentUuid":'),
    d = Buffer.from('"uuid":"'),
    p = Buffer.from('","timestamp":"'),
    f = Buffer.from('"isSidechain":true'),
    m = Buffer.from('"compact_boundary"'),
    g = Buffer.from('"type":"last-prompt"'),
    h = 36,
    y = c.length,
    b = d.length,
    _ = p.length,
    S = Buffer.allocUnsafe(1048576),
    A = c2.openSync(e, "r"),
    v = [],
    C = [],
    x = [],
    I = new Map(),
    k = [],
    D = new Set(),
    P = !1,
    O = -1,
    L = 0,
    M,
    N = INDEX_HEAD_SCAN_BYTES,
    B = INDEX_BOUNDARY_SCAN_BYTES,
    $ = INDEX_LAST_PROMPT_SCAN_BYTES;
  function q(z, K) {
    let Z = -1,
      J = -1,
      ne,
      oe = 0;
    for (;;) {
      let re = z.indexOf(d, oe);
      if (re < 0) break;
      if (Z < 0) Z = re;
      let ee = re + b + 36;
      if (ee + _ <= K && z.compare(p, 0, _, ee, ee + _) === 0)
        if (J < 0) J = re;
        else (ne ??= [J]).push(re);
      oe = re + b;
    }
    return ne ? Rsc(z, 0, ne) : J >= 0 ? J : Z;
  }
  function W(z, K, Z, J) {
    let ne = z.subarray(K, K + Z);
    if (Z >= l.length && ne.compare(l, 0, l.length, 0, l.length) === 0) {
      ((O = J), (L = Z));
      return;
    }
    if (Z < $ && ne.subarray(0, Math.min(Z, LAST_PROMPT_PREFIX_SCAN_BYTES)).includes(g)) {
      let me;
      try {
        me = Ft(ne.toString("utf8", 0, Z));
      } catch {
        return;
      }
      if (me?.type === "last-prompt") {
        if (me.leafUuid) M = me.leafUuid;
        k.push(J);
        return;
      }
    }
    if ((Z <= B ? ne : ne.subarray(0, B)).includes(m)) {
      let me;
      try {
        me = Ft(ne.toString("utf8"));
      } catch {
        me = null;
      }
      if (me?.type === "system" && me.subtype === "compact_boundary")
        if (me.compactMetadata?.preservedSegment || me.compactMetadata?.preservedMessages) P = !0;
        else
          (D.add(J),
            (v.length = 0),
            (C.length = 0),
            (x.length = 0),
            I.clear(),
            (P = !1),
            (O = -1),
            (L = 0),
            (M = void 0));
    }
    let re;
    if (Z > y && ne.compare(c, 0, y, 0, y) === 0) re = y;
    else {
      if (((re = XZf(ne, 0, Z, u)), re < 0)) {
        k.push(J);
        return;
      }
      re += u.length;
    }
    let ee = ne[re] === 34 ? ne.toString("latin1", re + 1, re + 1 + 36) : null,
      ce = q(ne, Z);
    if (ce < 0) {
      k.push(J);
      return;
    }
    let ae = ne.toString("latin1", ce + b, ce + b + 36),
      Ee = (Z <= N ? ne : ne.subarray(0, N)).includes(f);
    (I.set(ae, v.length), v.push(J), C.push(ee), x.push(Ee));
  }
  let V = Buffer.allocUnsafe(65536);
  function Y(z, K) {
    let Z = -1,
      J = 0;
    while (J < t) {
      let ne = c2.readSync(A, S, 0, Math.min(1048576, t - J), J);
      if (ne === 0) break;
      let oe = 0;
      while (oe < ne) {
        let re = S.indexOf(10, oe);
        if (re < 0 || re >= ne) break;
        if (Z >= 0) {
          if (K === void 0 || K(Z)) {
            let ee = J + re - Z;
            if (ee > V.length) V = Buffer.allocUnsafe(ee);
            (c2.readSync(A, V, 0, ee, Z), z(V, 0, ee, Z));
          }
          Z = -1;
        } else if (re > oe) {
          let ee = J + oe;
          if (K === void 0 || K(ee)) z(S, oe, re - oe, ee);
        }
        oe = re + 1;
      }
      if (oe < ne && Z < 0) Z = J + oe;
      J += ne;
    }
    if (Z >= 0 && (K === void 0 || K(Z))) {
      let ne = t - Z;
      if (ne > V.length) V = Buffer.allocUnsafe(ne);
      (c2.readSync(A, V, 0, ne, Z), z(V, 0, ne, Z));
    }
  }
  try {
    Y(W);
    let z = null;
    if (!o && !P) {
      let J = -1;
      for (let ce = v.length - 1; ce >= 0; ce--)
        if (!x[ce]) {
          J = ce;
          break;
        }
      z = new Set();
      let ne = new Set(),
        oe = !1,
        re = (ce) => {
          let ae = ce;
          while (ae !== void 0 && !ne.has(ae)) {
            (ne.add(ae), z.add(v[ae]));
            let de = C[ae];
            if (de == null) {
              ae = void 0;
              break;
            }
            let Ee = I.get(de);
            if (Ee === void 0) {
              oe = !0;
              break;
            }
            ae = Ee;
          }
        };
      re(J >= 0 ? J : void 0);
      let ee = M ? I.get(M) : void 0;
      if ((re(ee), oe))
        (G("tengu_transcript_phantom_parent", {
          total_offsets: v.length,
          walked_slots: z.size,
        }),
          (z = null));
    }
    let K = z ?? new Set(v);
    for (let J of k) K.add(J);
    using Z = gy`streamTranscriptFile pass2 (${K.size} lines)`;
    Y(
      (J, ne, oe, re) => {
        if (D.has(re)) r();
        let ee = ne,
          ce = ne + oe;
        while (ee < ce && J[ee] === 0) ee++;
        if (ee === ce) return;
        let ae;
        try {
          ae = qge(J.toString("utf8", ee, ce));
        } catch {
          return;
        }
        if (ae) n(ae);
      },
      (J) => K.has(J),
    );
  } finally {
    c2.closeSync(A);
  }
  return {
    lastAttributionOffset: O,
    lastAttributionLength: L,
  };
}
function ZZf(e, t, n) {
  if (t < 0 || n <= 0) return null;
  let r = c2.openSync(e, "r");
  try {
    let o = Buffer.allocUnsafe(n);
    c2.readSync(r, o, 0, n, t);
    try {
      return Ft(o.toString("utf8"));
    } catch {
      return null;
    }
  } finally {
    c2.closeSync(r);
  }
}
async function loadTranscriptFile(e, t) {
  let n = new Map(),
    r = new Map(),
    o = new Map(),
    s = new Set(),
    i = new Map(),
    a = new Map(),
    l = new Map(),
    c = new Map(),
    u = new Map(),
    d = new Map(),
    p = new Map(),
    f = new Map(),
    m = new Map(),
    g = new Map(),
    h = new Map(),
    y = new Map(),
    b = new Map(),
    _ = new Map(),
    S = new Map(),
    A = new Map(),
    v = new Map(),
    C = new Map(),
    x = new Map(),
    I = new Map(),
    k = [],
    D,
    P,
    O,
    L = !1,
    M = !1,
    N = !1,
    B = new Map(),
    $ = (V) => {
      if (HZf(V)) {
        let Y = V.parentUuid;
        B.set(V.uuid, Y && B.has(Y) ? (B.get(Y) ?? null) : Y);
        return;
      }
      if (isTranscriptMessage(V)) {
        if (V.parentUuid && B.has(V.parentUuid)) V.parentUuid = B.get(V.parentUuid) ?? null;
        if ((KJe(V), n.set(V.uuid, V), !V.isSidechain))
          ((P = V.uuid), (L = !1), (M = !1), (N = !1));
        if (pA(V)) ((k.length = 0), (D = void 0), (O = void 0), (L = !1));
      } else if (V.type === "summary" && V.leafUuid) r.set(V.leafUuid, V.summary);
      else if (V.type === "last-prompt") {
        if (V.leafUuid)
          ((L = V.explicit === !0 || (L && V.leafUuid === O)),
            (N = V.rewound === !0 || (N && V.leafUuid === O)),
            (O = V.leafUuid),
            (M = !1));
        else if (V.leafUuid === null && V.explicit === !0)
          ((M = !0), (O = void 0), (L = !1), (N = !1));
      } else if (V.type === "custom-title" && V.sessionId) o.set(V.sessionId, V.customTitle);
      else if (V.type === "ai-title" && V.sessionId) i.set(V.sessionId, V.aiTitle);
      else if (V.type === "tag" && V.sessionId) a.set(V.sessionId, V.tag);
      else if (V.type === "agent-name" && V.sessionId) l.set(V.sessionId, V.agentName);
      else if (V.type === "agent-color" && V.sessionId) c.set(V.sessionId, V.agentColor);
      else if (V.type === "agent-setting" && V.sessionId) u.set(V.sessionId, V.agentSetting);
      else if (V.type === "mode" && V.sessionId) y.set(V.sessionId, V.mode);
      else if (V.type === "permission-mode" && V.sessionId) b.set(V.sessionId, V.permissionMode);
      else if (V.type === "isolation-latch" && V.sessionId) _.set(V.sessionId, V.side);
      else if (V.type === "worktree-state" && V.sessionId) S.set(V.sessionId, V.worktreeSession);
      else if (V.type === "pr-link" && V.sessionId)
        (d.set(V.sessionId, V.prNumber),
          p.set(V.sessionId, V.prUrl),
          f.set(V.sessionId, V.prRepository));
      else if (V.type === "bridge-session" && V.sessionId) {
        (m.set(V.sessionId, V.bridgeSessionId), g.set(V.sessionId, V.lastSequenceNum));
        let Y = lTe(V.declaredDialogKinds);
        if (Y.length > 0) h.set(V.sessionId, Y);
        else h.delete(V.sessionId);
      } else if (V.type === "file-history-snapshot") A.set(V.messageId, V);
      else if (V.type === "attribution-snapshot") (v.clear(), v.set(V.messageId, V));
      else if (V.type === "content-replacement") {
        if (V.agentId) {
          let Y = x.get(V.agentId) ?? [];
          (x.set(V.agentId, Y), Y.push(...V.replacements));
        } else {
          let Y = C.get(V.sessionId) ?? [];
          (C.set(V.sessionId, Y), Y.push(...V.replacements));
        }
      } else if (V.type === "fork-context-ref") I.set(V.agentId, V);
      else if (V.type === "marble-origami-commit") k.push(V);
      else if (V.type === "marble-origami-snapshot") D = V;
      else if (V.type === "marble-origami-reset") {
        if (k.length > 0 || D)
          T(
            `[marble-origami] reset tombstone (${V.reason}): discarding ${k.length} pre-reset commit entries`,
          );
        ((k.length = 0), (D = void 0));
      }
    };
  try {
    if (!ut(process.env.CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP)) {
      let { size: Y } = await Hl.stat(e);
      if (Y > oCe) {
        let z = QZf(
            e,
            Y,
            $,
            () => {
              (n.clear(), A.clear(), B.clear());
            },
            t?.keepAllLeaves ?? !1,
          ),
          K = ZZf(e, z.lastAttributionOffset, z.lastAttributionLength);
        if (K) v.set(K.messageId, K);
        return q(osc(n));
      }
    }
    let V = await Hl.readFile(e);
    if (!t?.keepAllLeaves && V.length > oCe) V = JZf(V);
    for (let Y of fCe(V)) $(Y);
  } catch (V) {
    if (!Vo(V)) throw (ke(V), V);
  }
  return q(osc(n));
  function q(V) {
    if (!t?.keepAllLeaves && M) return W(new Set());
    let Y = new Set(),
      z = L && O && n.has(O) && !n.get(O)?.isSidechain;
    if (!t?.keepAllLeaves && (!V || z)) {
      let oe = O && n.has(O) ? O : void 0;
      if (oe && !L && P && n.has(P) && P !== oe) {
        let re = P,
          ee = new Set();
        while (re && !ee.has(re)) {
          if (re === oe) {
            oe = P;
            break;
          }
          (ee.add(re), (re = n.get(re)?.parentUuid ?? void 0));
        }
      }
      if (!V) oe ??= P;
      if (oe && n.has(oe)) {
        let re = new Set(),
          ee = n.get(oe);
        while (ee) {
          if (re.has(ee.uuid)) {
            G("tengu_transcript_parent_cycle", {});
            break;
          }
          if ((re.add(ee.uuid), ee.type === "user" || ee.type === "assistant")) {
            Y.add(ee.uuid);
            break;
          }
          ee = ee.parentUuid ? n.get(ee.parentUuid) : void 0;
        }
        if (Y.size === 1) return W(Y);
      }
    }
    let K = new Set(),
      Z = new Set();
    for (let oe of n.values())
      if (oe.parentUuid !== null) {
        if ((K.add(oe.parentUuid), oe.type === "user" || oe.type === "assistant"))
          Z.add(oe.parentUuid);
      }
    let J = [];
    for (let oe of n.values()) if (!K.has(oe.uuid)) J.push(oe);
    let ne = !1;
    for (let oe of J) {
      let re = new Set(),
        ee = oe;
      while (ee) {
        if (re.has(ee.uuid)) {
          ne = !0;
          break;
        }
        if ((re.add(ee.uuid), ee.type === "user" || ee.type === "assistant")) {
          if (!Z.has(ee.uuid)) Y.add(ee.uuid);
          break;
        }
        ee = ee.parentUuid ? n.get(ee.parentUuid) : void 0;
      }
    }
    if (ne) G("tengu_transcript_parent_cycle", {});
    if (!t?.keepAllLeaves && Y.size > 1) {
      let oe = O && Y.has(O) ? O : P;
      if (!oe || !n.has(oe)) return W(Y);
      let re = new Set(),
        ee = n.get(oe);
      while (ee) {
        if (re.has(ee.uuid)) break;
        if ((re.add(ee.uuid), ee.type === "user" || ee.type === "assistant")) {
          (Y.clear(), Y.add(ee.uuid));
          break;
        }
        ee = ee.parentUuid ? n.get(ee.parentUuid) : void 0;
      }
    }
    return W(Y);
  }
  function W(V) {
    return {
      messages: n,
      summaries: r,
      customTitles: o,
      endedSessions: s,
      aiTitles: i,
      tags: a,
      agentNames: l,
      agentColors: c,
      agentSettings: u,
      prNumbers: d,
      prUrls: p,
      prRepositories: f,
      bridgeSessionIds: m,
      bridgeLastSeqs: g,
      bridgeDialogKindsBySession: h,
      modes: y,
      permissionModes: b,
      isolationLatches: _,
      worktreeStates: S,
      fileHistorySnapshots: A,
      attributionSnapshots: v,
      contentReplacements: C,
      agentContentReplacements: x,
      forkContextRefs: I,
      contextCollapseCommits: k,
      contextCollapseSnapshot: D,
      leafUuids: V,
      clearedToEmpty: !t?.keepAllLeaves && M,
      rewindAnchorUuid: N ? O : void 0,
    };
  }
}
async function Lsc(e, t) {
  let n = t ?? (await eem(e)),
    r = await loadTranscriptFile(n);
  return Object.assign(r, {
    sessionFile: n,
  });
}
async function eem(e) {
  let t = M2(),
    n = yr(),
    r = `${e}.jsonl`,
    o = vh.join(t ?? Jh(n), r);
  if (t !== null) return o;
  for (let s of await Px(n)) {
    let i = vh.join(s, r);
    try {
      return (await Hl.stat(i), i);
    } catch {}
  }
  return o;
}
function clearSessionMessagesCache() {
  Q1e.cache.clear?.();
}
async function doesMessageExistInSession(e, t) {
  return (await Q1e(e)).has(t);
}
async function getLastSessionLog(e, t) {
  let n = await Lsc(e, t),
    {
      messages: r,
      summaries: o,
      customTitles: s,
      endedSessions: i,
      aiTitles: a,
      tags: l,
      agentNames: c,
      agentColors: u,
      agentSettings: d,
      prNumbers: p,
      prUrls: f,
      prRepositories: m,
      bridgeSessionIds: g,
      bridgeLastSeqs: h,
      bridgeDialogKindsBySession: y,
      modes: b,
      permissionModes: _,
      isolationLatches: S,
      worktreeStates: A,
      fileHistorySnapshots: v,
      attributionSnapshots: C,
      contentReplacements: x,
      contextCollapseCommits: I,
      contextCollapseSnapshot: k,
      leafUuids: D,
      clearedToEmpty: P,
      sessionFile: O,
    } = n;
  if (r.size === 0) return null;
  if (!Q1e.cache.has(e)) Q1e.cache.set(e, Promise.resolve(new Set(r.keys())));
  let L =
    UYe(
      r.values(),
      (Y) => D.has(Y.uuid) && !Y.isSidechain && (Y.type === "user" || Y.type === "assistant"),
    ) ?? (D.size === 0 && !P ? UYe(r.values(), (Y) => !Y.isSidechain) : void 0);
  if (!L) {
    if (P) {
      let Y = await Hl.stat(O);
      return u5o(
        n,
        {
          date: Y.mtime.toISOString(),
          fullPath: O,
          created: Y.mtime,
          modified: Y.mtime,
        },
        e,
      );
    }
    return null;
  }
  let M = buildConversationChain(r, L),
    N = L.sessionId,
    B = o.get(L.uuid),
    $ = s.get(N),
    q = l.get(N),
    W = d.get(N),
    V = XWo(M, 0, B, $, plr(v, M), q, O, flr(C, M), W, x.get(N) ?? []);
  return {
    ...V,
    rewindAnchorUuid: n.rewindAnchorUuid,
    aiTitle: a.get(N),
    ...ZEe({}, i.has(N)),
    agentName: c.get(N) ?? V.agentName,
    agentColor: u.get(N),
    mode: b.get(N),
    permissionMode: _.get(N),
    isolationLatch: S.get(N),
    prNumber: p.get(N),
    prUrl: f.get(N),
    prRepository: m.get(N),
    bridgeSessionId: g.get(N),
    bridgeLastSeq: h.get(N),
    bridgeDialogKinds: y.get(N),
    worktreeSession: A.get(N),
    contextCollapseCommits: I.filter((Y) => Y.sessionId === N),
    contextCollapseSnapshot: k?.sessionId === N ? k : void 0,
  };
}
async function loadMessageLogs(e) {
  let t = await fetchLogs(e),
    { logs: n } = await enrichLogs(t, 0, t.length),
    r = RFe(n);
  return (
    r.forEach((o, s) => {
      o.value = s;
    }),
    r
  );
}
async function loadAllProjectsMessageLogs(e, t) {
  if (t?.skipIndex) return tem(e);
  return (await loadAllProjectsMessageLogsProgressive(e, t?.initialEnrichCount ?? Elr)).logs;
}
async function tem(e) {
  let t = oF(),
    n;
  try {
    n = await Hl.readdir(t, {
      withFileTypes: !0,
    });
  } catch {
    return [];
  }
  let r = n.filter((l) => l.isDirectory()).map((l) => vh.join(t, l.name)),
    s = (await Promise.all(r.map((l) => sem(l, e)))).flat(),
    i = new Map();
  for (let l of s) {
    let c = `${l.sessionId ?? ""}:${l.leafUuid ?? ""}`,
      u = i.get(c);
    if (!u || l.modified.getTime() > u.modified.getTime()) i.set(c, l);
  }
  let a = RFe([...i.values()]);
  return (
    a.forEach((l, c) => {
      l.value = c;
    }),
    a
  );
}
async function loadAllProjectsMessageLogsProgressive(e, t = Elr) {
  let n = oF(),
    r;
  try {
    r = await Hl.readdir(n, {
      withFileTypes: !0,
    });
  } catch {
    return {
      logs: [],
      allStatLogs: [],
      nextIndex: 0,
    };
  }
  let o = r.filter((c) => c.isDirectory()).map((c) => vh.join(n, c.name)),
    s = await Promise.all(o.map((c) => getSessionFilesLite(c, e))),
    i = zQt(s.flat()),
    { logs: a, nextIndex: l } = await enrichLogs(i, 0, t);
  return (
    a.forEach((c, u) => {
      c.value = u;
    }),
    {
      logs: a,
      allStatLogs: i,
      nextIndex: l,
    }
  );
}
async function loadSameRepoMessageLogs(e, t, n = Elr) {
  return (await loadSameRepoMessageLogsProgressive(e, t, n)).logs;
}
async function loadSameRepoMessageLogsProgressive(e, t, n = Elr) {
  T(`/resume: loading sessions for cwd=${yr()}, worktrees=[${e.join(", ")}]`);
  let r = await Dsc(e, t);
  T(`/resume: found ${r.length} session files on disk`);
  let { logs: o, nextIndex: s } = await enrichLogs(r, 0, n);
  return (
    o.forEach((i, a) => {
      i.value = a;
    }),
    {
      logs: o,
      allStatLogs: r,
      nextIndex: s,
    }
  );
}
async function Dsc(e, t) {
  let n = oF(),
    r = yr(),
    o = (S) => S.replaceAll("\\", "/"),
    s = o(r),
    i = e
      .filter((S) => {
        let A = o(S);
        return s === A || s.startsWith(A + "/");
      })
      .sort((S, A) => A.length - S.length)[0],
    l = Uo((await Promise.all((i && i !== r ? [r, i] : [r]).map(bsc))).flat()),
    c =
      l.length > 0
        ? (await Promise.all(l.map((S) => getSessionFilesLite(S, t)))).flat().map((S) => ({
            ...S,
            isAlias: !0,
          }))
        : [];
  if (e.length <= 1) {
    let S = Jh(r),
      A = await getSessionFilesLite(S, void 0, r),
      v = A.length === 0 && JWo.test(r) ? await QWo(r, S, t) : [];
    if (c.length > 0 || v.length > 0) return zQt([...A, ...v, ...c]);
    return A;
  }
  let u = !1,
    d = e.map((S) => {
      let A = LE(S);
      return {
        path: S,
        prefix: u ? A.toLowerCase() : A,
      };
    });
  d.sort((S, A) => A.prefix.length - S.prefix.length);
  let p = new Set(),
    f;
  try {
    f = await Hl.readdir(n, {
      withFileTypes: !0,
    });
  } catch (S) {
    T(`Failed to read projects dir ${n}, falling back to current project: ${S}`);
    let A = Jh(yr()),
      v = await getSessionFilesLite(A, t, yr());
    return c.length > 0 ? zQt(v.concat(c)) : v;
  }
  let m = [];
  if (i === void 0) {
    let S = Jh(r),
      A = vh.basename(S);
    (p.add(u ? A.toLowerCase() : A),
      m.push({
        projectDir: S,
        wtPath: r,
      }));
  }
  for (let S of f) {
    if (!S.isDirectory()) continue;
    let A = u ? S.name.toLowerCase() : S.name;
    if (p.has(A)) continue;
    for (let { path: v, prefix: C } of d)
      if (A === C || A.startsWith(C + "-")) {
        (p.add(A),
          m.push({
            projectDir: vh.join(n, S.name),
            wtPath: v,
          }));
        break;
      }
  }
  let g = await Promise.all(
      m.map(({ projectDir: S, wtPath: A }) => getSessionFilesLite(S, void 0, A)),
    ),
    h = new Map();
  for (let S = 0; S < m.length; S++) {
    let A = m[S].wtPath;
    h.set(A, (h.get(A) ?? 0) + g[S].length);
  }
  let b = (i === void 0 ? [r, ...e] : e).filter((S) => JWo.test(S) && (h.get(S) ?? 0) === 0),
    _ =
      b.length > 0
        ? await Promise.all(
            b.map(async (S) => {
              let A = S;
              try {
                A = o_(await Hl.realpath(S));
              } catch {}
              return QWo(A, Jh(S), t, !0);
            }),
          )
        : [];
  return zQt(g.flat().concat(_.flat(), c));
}
async function QWo(e, t, n, r = !1) {
  let o = oF(),
    s;
  try {
    s = await Hl.readdir(o, {
      withFileTypes: !0,
    });
  } catch {
    return [];
  }
  let i = (d) => d.replaceAll("\\", "/"),
    a = i(e),
    l = await Promise.all(
      s.map(async (d) => {
        if (!d.isDirectory()) return null;
        let p = vh.join(o, d.name);
        if (p === t) return null;
        let f = await getSessionFilesWithMtime(p),
          m = [...f.values()].sort((h, y) => y.mtime - h.mtime)[0];
        if (!m) return null;
        let g = Buffer.allocUnsafe(Mw);
        try {
          let h = await Psc(m.path, m.size, g);
          if (
            h.projectPath &&
            (() => {
              let y = i(h.projectPath);
              return y === a || (r && y.startsWith(a + "/"));
            })()
          )
            return {
              sessionFiles: f,
            };
        } catch {}
        return null;
      }),
    ),
    c = [];
  for (let d of l) {
    if (!d) continue;
    let p = [...d.sessionFiles.entries()].sort((f, m) => m[1].mtime - f[1].mtime);
    if (n && p.length > n) p = p.slice(0, n);
    for (let [f, m] of p)
      c.push({
        date: new Date(m.mtime).toISOString(),
        messages: [],
        isLite: !0,
        fullPath: m.path,
        value: 0,
        created: new Date(m.ctime),
        modified: new Date(m.mtime),
        firstPrompt: "",
        messageCount: 0,
        fileSize: m.size,
        isSidechain: !1,
        sessionId: f,
        projectPath: e,
      });
  }
  let u = RFe(c);
  return (
    u.forEach((d, p) => {
      d.value = p;
    }),
    u
  );
}
async function getAgentTranscript(e) {
  let t = uk(e);
  try {
    let {
        messages: n,
        agentContentReplacements: r,
        forkContextRefs: o,
      } = await loadTranscriptFile(t),
      s = Array.from(n.values()).filter((f) => f.agentId === e && f.isSidechain);
    if (s.length === 0) return null;
    let i = new Set(s.map((f) => f.parentUuid)),
      a = UYe(
        s,
        (f) =>
          !i.has(f.uuid) &&
          !(f.type === "system" && "subtype" in f && f.subtype === "compact_boundary"),
      );
    if (!a) return null;
    let u = buildConversationChain(n, a)
        .filter((f) => f.agentId === e)
        .map(({ isSidechain: f, parentUuid: m, ...g }) => g),
      d = o.get(e);
    return {
      messages: d === void 0 ? u : (await RZf(d)).concat(u),
      contentReplacements: r.get(e) ?? [],
    };
  } catch {
    return null;
  }
}
function extractAgentIdsFromMessages(e) {
  let t = [];
  for (let n of e)
    if (
      n.type === "progress" &&
      n.data &&
      typeof n.data === "object" &&
      "type" in n.data &&
      (n.data.type === "agent_progress" || n.data.type === "skill_progress") &&
      "agentId" in n.data &&
      typeof n.data.agentId === "string"
    )
      t.push(n.data.agentId);
  return Uo(t);
}
async function loadSubagentTranscripts(e) {
  let t = await Promise.all(
      e.map(async (r) => {
        try {
          let o = await getAgentTranscript(Bu(r));
          if (o && o.messages.length > 0)
            return {
              agentId: r,
              transcript: o.messages,
            };
          return null;
        } catch {
          return null;
        }
      }),
    ),
    n = {};
  for (let r of t) if (r) n[r.agentId] = r.transcript;
  return n;
}
async function loadAllSubagentTranscriptsFromDisk() {
  return loadSubagentTranscripts(await hNn());
}
function isLoggableMessage(e) {
  if (e.type === "progress") return !1;
  if (
    e.type === "attachment" &&
    e.attachment.type === "hook_success" &&
    !e.attachment.content &&
    !e.attachment.stdout?.trim() &&
    !e.attachment.stderr?.trim()
  )
    return !1;
  if (e.type === "attachment" && getUserType() !== "ant" && nem.has(e.attachment.type)) return !1;
  return !0;
}
function collectReplIds(e, t = new Set()) {
  for (let n of e)
    if (n.type === "assistant" && Array.isArray(n.message.content)) {
      for (let r of n.message.content) if (r.type === "tool_use" && r.name === Fm) t.add(r.id);
    }
  return t;
}
function rem(e, t) {
  return e.flatMap((n) => {
    if (n.type === "assistant" && Array.isArray(n.message.content)) {
      let r = n.message.content,
        s = r.some((i) => i.type === "tool_use" && i.name === Fm)
          ? r.filter((i) => !(i.type === "tool_use" && i.name === Fm))
          : r;
      if (s.length === 0) return [];
      if (n.isVirtual) {
        let { isVirtual: i, ...a } = n;
        return [
          {
            ...a,
            message: {
              ...n.message,
              content: s,
            },
          },
        ];
      }
      if (s !== r)
        return [
          {
            ...n,
            message: {
              ...n.message,
              content: s,
            },
          },
        ];
      return [n];
    }
    if (n.type === "user" && Array.isArray(n.message.content)) {
      let r = n.message.content,
        s = r.some((i) => i.type === "tool_result" && t.has(i.tool_use_id))
          ? r.filter((i) => !(i.type === "tool_result" && t.has(i.tool_use_id)))
          : r;
      if (s.length === 0) return [];
      if (n.isVirtual) {
        let { isVirtual: i, ...a } = n;
        return [
          {
            ...a,
            message: {
              ...n.message,
              content: s,
            },
          },
        ];
      }
      if (s !== r)
        return [
          {
            ...n,
            message: {
              ...n.message,
              content: s,
            },
          },
        ];
      return [n];
    }
    if ("isVirtual" in n && n.isVirtual) {
      let { isVirtual: r, ...o } = n;
      return [o];
    }
    return [n];
  });
}
function cleanMessagesForLogging(e, t = e) {
  let n = e.filter(isLoggableMessage);
  if (getUserType() === "ant") return n;
  let r = t instanceof Set ? t : collectReplIds(t);
  return rem(n, r);
}
async function getLogByIndex(e) {
  return (await loadMessageLogs())[e] || null;
}
async function findUnresolvedToolUse(e) {
  let t;
  try {
    t = em();
    let { messages: n } = await loadTranscriptFile(t),
      r = null;
    for (let o of n.values())
      if (o.type === "assistant") {
        let s = o.message.content;
        if (Array.isArray(s)) {
          for (let i of s)
            if (i.type === "tool_use" && i.id === e) {
              r = o;
              break;
            }
        }
      } else if (o.type === "user") {
        let s = o.message.content;
        if (Array.isArray(s)) {
          for (let i of s) if (i.type === "tool_result" && i.tool_use_id === e) return null;
        }
      }
    if (!r)
      T(
        `findUnresolvedToolUse: tool_use ${e} not present in transcript ${t} (${n.size} messages)`,
        {
          level: "warn",
        },
      );
    return r;
  } catch (n) {
    return (
      T(
        `findUnresolvedToolUse: failed to read transcript${t ? ` ${t}` : ""} for tool_use ${e}: ${n}`,
        {
          level: "warn",
        },
      ),
      null
    );
  }
}
async function findDeferredToolMarkerInTranscript(e) {
  try {
    let { content: t, bytesRead: n, bytesTotal: r } = await vx(e, 1048576),
      o = t.split(`
`);
    if (n < r) o.shift();
    let s = null,
      i = -1;
    for (let l = o.length - 1; l >= 0; l--) {
      let c = o[l].trim();
      if (!c.includes('"hook_deferred_tool"')) continue;
      let u = Ft(c);
      if (u?.type === "attachment" && u.attachment?.type === "hook_deferred_tool") {
        ((s = u.attachment), (i = l));
        break;
      }
    }
    if (!s) return null;
    let a = `"tool_use_id":"${s.toolUseID}"`;
    for (let l = i + 1; l < o.length; l++) if (o[l].includes(a)) return null;
    return s;
  } catch {
    return null;
  }
}
async function getSessionFilesWithMtime(e) {
  let t = new Map(),
    n;
  try {
    n = await Hl.readdir(e, {
      withFileTypes: !0,
    });
  } catch {
    return t;
  }
  let r = [];
  for (let o of n) {
    if (!o.isFile() || !o.name.endsWith(".jsonl")) continue;
    let s = yD(vh.basename(o.name, ".jsonl"));
    if (!s) continue;
    r.push({
      sessionId: s,
      filePath: vh.join(e, o.name),
    });
  }
  return (
    await Promise.all(
      r.map(async ({ sessionId: o, filePath: s }) => {
        try {
          let i = await Hl.stat(s);
          t.set(o, {
            path: s,
            mtime: i.mtime.getTime(),
            ctime: i.birthtime.getTime(),
            size: i.size,
          });
        } catch {
          T(`Failed to stat session file: ${s}`);
        }
      }),
    ),
    t
  );
}
async function loadAllLogsFromSessionFile(e, t) {
  let {
    messages: n,
    summaries: r,
    customTitles: o,
    endedSessions: s,
    aiTitles: i,
    tags: a,
    agentNames: l,
    agentColors: c,
    agentSettings: u,
    prNumbers: d,
    prUrls: p,
    prRepositories: f,
    modes: m,
    permissionModes: g,
    isolationLatches: h,
    fileHistorySnapshots: y,
    attributionSnapshots: b,
    contentReplacements: _,
    leafUuids: S,
  } = await loadTranscriptFile(e, {
    keepAllLeaves: !0,
  });
  if (n.size === 0) return [];
  let A = [];
  for (let x of n.values()) if (S.has(x.uuid)) A.push(x);
  let v = xsc(n),
    C = [];
  for (let x of A) {
    let I = buildConversationChain(n, x, v);
    if (I.length === 0) continue;
    let k = I[0],
      D = x.sessionId;
    C.push({
      date: x.timestamp,
      messages: removeExtraFields(I),
      fullPath: e,
      value: 0,
      created: new Date(k.timestamp),
      modified: new Date(x.timestamp),
      firstPrompt: c5o(I),
      messageCount: p5o(I),
      isSidechain: k.isSidechain ?? !1,
      sessionId: D,
      leafUuid: x.uuid,
      summary: r.get(x.uuid),
      customTitle: o.get(D),
      ...ZEe({}, s.has(D)),
      aiTitle: i.get(D),
      tag: a.get(D),
      agentName: l.get(D),
      agentColor: c.get(D),
      agentSetting: u.get(D),
      mode: m.get(D),
      permissionMode: g.get(D),
      isolationLatch: h.get(D),
      prNumber: d.get(D),
      prUrl: p.get(D),
      prRepository: f.get(D),
      gitBranch: x.gitBranch,
      projectPath: t ?? k.cwd,
      fileHistorySnapshots: plr(y, I),
      attributionSnapshots: flr(b, I),
      contentReplacements: _.get(D) ?? [],
    });
  }
  return C;
}
async function sem(e, t) {
  let n = await getSessionFilesWithMtime(e);
  if (n.size === 0) return [];
  let r;
  if (t && n.size > t) r = [...n.values()].sort((s, i) => i.mtime - s.mtime).slice(0, t);
  else r = [...n.values()];
  let o = [];
  for (let s of r)
    try {
      let i = await loadAllLogsFromSessionFile(s.path);
      o.push(...i);
    } catch {
      T(`Failed to load session file: ${s.path}`);
    }
  return o;
}
async function Psc(e, t, n) {
  let { head: r, tail: o } = await ZEs(e, t, n);
  if (!r)
    return {
      firstPrompt: "",
      isSidechain: !1,
    };
  let s = r.includes('"isSidechain":true') || r.includes('"isSidechain": true'),
    i = EG(r, "cwd"),
    a = EG(r, "teamName"),
    l =
      r
        .split(
          `
`,
        )
        .find((x) => x.includes('"parentUuid":')) ?? r,
    c = EG(l, "sessionKind"),
    u = c === "bg" || c === "daemon" || c === "daemon-worker" ? c : void 0,
    d = EG(r, "agentSetting"),
    p = EG(r, "entrypoint") ?? Kb(o, "entrypoint"),
    f = r.includes("<command-name>/loop</command-name>"),
    m = Kb(o, "lastPrompt") || iem(r) || ssc(r, "content", 200) || ssc(r, "text", 200) || "",
    g = Kb(o, "customTitle") ?? Kb(r, "customTitle"),
    h = Kb(o, "aiTitle") ?? Kb(r, "aiTitle"),
    y = aem(o, "summary", "summary"),
    b = Kb(o, "tag"),
    _ = Kb(o, "gitBranch") ?? EG(r, "gitBranch"),
    S = Kb(o, "prUrl"),
    A = Kb(o, "prRepository"),
    v,
    C = Kb(o, "prNumber");
  if (C) v = parseInt(C, 10) || void 0;
  if (!v) {
    let x = o.lastIndexOf('"prNumber":');
    if (x >= 0) {
      let I = o.slice(x + 11, x + 25),
        k = parseInt(I.trim(), 10);
      if (k > 0) v = k;
    }
  }
  return {
    firstPrompt: m,
    gitBranch: _,
    isSidechain: s,
    projectPath: i,
    teamName: a,
    sessionKind: u,
    isLoopSession: f,
    customTitle: g,
    aiTitle: h,
    summary: y,
    tag: b,
    agentSetting: d,
    entrypoint: p,
    prNumber: v,
    prUrl: S,
    prRepository: A,
  };
}
function iem(e) {
  let t = 0,
    n = !1,
    r = "";
  while (t < e.length) {
    let o = e.indexOf(
        `
`,
        t,
      ),
      s = o >= 0 ? e.slice(t, o) : e.slice(t);
    if (
      ((t = o >= 0 ? o + 1 : e.length),
      !s.includes('"type":"user"') && !s.includes('"type": "user"'))
    )
      continue;
    if (s.includes('"tool_result"')) continue;
    if (s.includes('"isMeta":true') || s.includes('"isMeta": true')) continue;
    try {
      let i = Ft(s);
      if (i.type !== "user") continue;
      let a = i.message;
      if (!a) continue;
      let l = a.content,
        c = [];
      if (typeof l === "string") c.push(l);
      else if (Array.isArray(l))
        for (let u of l) {
          let d = u;
          if (d.type === "text" && typeof d.text === "string") c.push(d.text);
        }
      for (let u of c) {
        if (!u) continue;
        let d = u
            .replaceAll(
              `
`,
              " ",
            )
            .trim(),
          p = xl(d, rj);
        if (p) {
          let m = p.replace(/^\//, ""),
            g = xl(d, "command-args")?.trim() || "";
          if (mQ().has(m) || !g) {
            if (!r) r = p;
            continue;
          }
          return g ? `${p} ${g}` : p;
        }
        let f = xl(d, "bash-input");
        if (f) return `! ${f}`;
        if (lsc.test(d)) {
          if (d.startsWith(`<${Cae}>`)) n = !0;
          continue;
        }
        if (d.length > 200) d = d.slice(0, 200).trim() + "\u2026";
        return d;
      }
    } catch {
      continue;
    }
  }
  if (r) return r;
  if (n) return "Proactive session";
  return "";
}
function aem(e, t, n) {
  let r = `"type":"${t}"`,
    o = `"${n}":`,
    s = e.length;
  while (s > 0) {
    let i = e.lastIndexOf(
        `
`,
        s - 1,
      ),
      a = e.slice(i + 1, s);
    if (((s = i), a.includes(r) && a.includes(o))) {
      let l = EG(a, n);
      if (l !== void 0) return l;
    }
    if (i < 0) break;
  }
  return;
}
function ssc(e, t, n) {
  let r = [`"${t}":"`, `"${t}": "`];
  for (let o of r) {
    let s = e.indexOf(o);
    if (s < 0) continue;
    let i = s + o.length,
      a = i,
      l = 0;
    while (a < e.length && l < n) {
      if (e[a] === "\\") {
        ((a += 2), l++);
        continue;
      }
      if (e[a] === '"') break;
      (a++, l++);
    }
    return e.slice(i, a).replaceAll("\\n", " ").replaceAll("\\t", " ").trim();
  }
  return "";
}
function zQt(e) {
  let t = new Map();
  for (let n of e) {
    if (!n.sessionId) continue;
    let r = t.get(n.sessionId);
    if (!r || n.modified.getTime() > r.modified.getTime()) t.set(n.sessionId, n);
  }
  return RFe([...t.values()]).map((n, r) => ({
    ...n,
    value: r,
  }));
}
async function getSessionFilesLite(e, t, n) {
  let o = [...(await getSessionFilesWithMtime(e)).entries()].sort(
    (a, l) => l[1].mtime - a[1].mtime,
  );
  if (t && o.length > t) o = o.slice(0, t);
  let s = [];
  for (let [a, l] of o)
    s.push({
      date: new Date(l.mtime).toISOString(),
      messages: [],
      isLite: !0,
      fullPath: l.path,
      value: 0,
      created: new Date(l.ctime),
      modified: new Date(l.mtime),
      firstPrompt: "",
      messageCount: 0,
      fileSize: l.size,
      isSidechain: !1,
      sessionId: a,
      projectPath: n,
    });
  let i = RFe(s);
  return (
    i.forEach((a, l) => {
      a.value = l;
    }),
    i
  );
}
async function lem(e, t) {
  if (!e.isLite || !e.fullPath) return e;
  let n = await Psc(e.fullPath, e.fileSize ?? 0, t),
    r = (l) => l,
    s =
      (n.projectPath !== void 0 && r(vh.dirname(e.fullPath)) === r(Jh(n.projectPath))) ||
      e.projectPath === void 0
        ? (n.projectPath ?? e.projectPath)
        : e.projectPath,
    i = {
      ...e,
      isLite: !1,
      firstPrompt: n.firstPrompt,
      gitBranch: n.gitBranch,
      isSidechain: n.isSidechain,
      teamName: n.teamName,
      sessionKind: n.sessionKind,
      customTitle: n.customTitle,
      aiTitle: n.aiTitle,
      summary: n.summary,
      tag: n.tag,
      agentSetting: n.agentSetting,
      prNumber: n.prNumber,
      prUrl: n.prUrl,
      prRepository: n.prRepository,
      projectPath: s,
    };
  if (!i.firstPrompt && !i.customTitle && !i.aiTitle) i.firstPrompt = "(session)";
  if (i.isSidechain)
    return (T(`Session ${e.sessionId} filtered from /resume: isSidechain=true`), null);
  if (i.teamName)
    return (T(`Session ${e.sessionId} filtered from /resume: teamName=${i.teamName}`), null);
  if (i.sessionKind === "daemon" || i.sessionKind === "daemon-worker")
    return (T(`Session ${e.sessionId} filtered from /resume: sessionKind=${i.sessionKind}`), null);
  let a = jpn.has(ysc() ?? "");
  if (!a && jpn.has(n.entrypoint ?? ""))
    return (T(`Session ${e.sessionId} filtered from /resume: entrypoint=${n.entrypoint}`), null);
  if (!a && n.isLoopSession)
    return (T(`Session ${e.sessionId} filtered from /resume: /loop session`), null);
  return i;
}
async function enrichLogs(e, t, n) {
  let r = [],
    o = Buffer.alloc(Mw),
    s = t;
  while (s < e.length && r.length < n) {
    let l = e[s];
    s++;
    let c = await lem(l, o);
    if (c) r.push(c);
  }
  let i = s - t,
    a = i - r.length;
  if (a > 0)
    T(
      `/resume: enriched ${i} sessions, ${a} filtered out, ${r.length} visible (${e.length - s} remaining on disk)`,
    );
  return {
    logs: r,
    nextIndex: s,
  };
}
var c2,
  Hl,
  vh,
  asc,
  EZf,
  AZf = 52428800,
  lsc,
  ENTRY_APPEND_POLICY,
  TZf,
  MAX_TRANSCRIPT_READ_BYTES = 52428800,
  INDEX_HEAD_SCAN_BYTES = 256,
  INDEX_BOUNDARY_SCAN_BYTES = 4096,
  INDEX_LAST_PROMPT_SCAN_BYTES = 1024,
  LAST_PROMPT_PREFIX_SCAN_BYTES = 64,
  _sc = ".session-aliases",
  X1e = null,
  esc = !1,
  tsc = 10,
  kZf = 4,
  BYe,
  OZf = 5000,
  TranscriptFileFormatError,
  m5o,
  subscribeSessionAgentNameChanged,
  nZt,
  subscribeSessionTitleChanged,
  YZf = 200,
  worktreeStateSignal,
  Q1e,
  JWo,
  nem,
  Elr = 50;
