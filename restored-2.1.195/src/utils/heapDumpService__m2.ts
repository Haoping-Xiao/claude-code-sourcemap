// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xXo
// matched 2.1.88 source: src/utils/heapDumpService.ts
// class=modified (alt of src/utils/heapDumpService.ts)  jaccard=0.0142  score=0.0375  fileCov=0.0223
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: buildRemoteAttachConfig, attachRemote
// [unwrapped __esm module xXo] deps: skills/bundled/verifyContent.ts, dn, services/mcp/officialRegistry.ts, utils/debugFilter.ts, utils/debug.ts, utils/errors.ts, utils/status.tsx, remote/sdkMessageAdapter.ts, remote/RemoteSessionManager.ts, assistant/sessionHistory.ts, tools/TaskUpdateTool/TaskUpdateTool.ts
((OFc = require("fs")),
  (Yme = require("fs/promises")),
  (NFc = require("os")),
  (CXo = require("path")),
  (BFc = require("stream/promises")));
gnn = new Map();
async function attachRemote(e, t, n) {
  let [
      { prepareApiRequest: r, fetchSession: o },
      { getClaudeAIOAuthTokens: s, handleOAuth401Error: i },
      { launchRepl: a },
      { getCommands: l, filterCommandsForRemoteMode: c },
      { getDefaultAppState: u },
      { isDebugMode: d },
      { consumePrefetchedHistory: p, reportPrefetchOutcome: f },
    ] = await Promise.all([
      Promise.resolve().then(() => (Cv(), sce)),
      Promise.resolve().then(() => (oo(), pU)),
      Promise.resolve().then(() => (XYo(), QPc)),
      Promise.resolve().then(() => (Zf(), fjo)),
      Promise.resolve().then(() => (jDe(), a$a)),
      Promise.resolve().then(() => (je(), Eis)),
      Promise.resolve().then(() => (xXo(), IXo)),
    ]),
    m = p(t, n?.viewerOnly ?? false),
    g = await r().catch((_) => {
      throw Error(`auth setup failed: ${be(_)}`);
    }),
    h = () => s()?.accessToken ?? g.accessToken,
    y = {
      sessionId: Rt(),
      cwd: CK(),
      isRemoteMode: da(),
    },
    b = false;
  try {
    (rUe(true), PA(Fb(t), "remote_attach"));
    let _ = o(t, g).then(
      (D) => {
        if (D.session_status === "archived")
          throw (
            G("tengu_remote_attach_session_rejected", {
              reason: We("archived"),
            }),
            Error(`Cloud session ${t} is archived and cannot accept new messages.
View it at ${dS(t, void 0, {
              from: "cli",
              m: "0",
            })}`)
          );
        if (D.session_context.cwd && !b)
          if (Fc(D.session_context.cwd))
            T("[attachRemote] session reported a UNC cwd \u2014 not adopting", {
              level: "warn",
            });
          else see(D.session_context.cwd);
      },
      (D) => {
        T(`[attachRemote] preflight fetchSession failed (continuing via WS): ${be(D)}`);
      },
    );
    _.catch(() => {});
    let S = dS(t, void 0, {
        from: "cli",
        m: "0",
      }),
      A = cc(`Attached to cloud session \xB7 code here or at ${S}`, "info"),
      v = {
        ...u(),
        ...n?.initialStateOverride,
        remoteSessionUrl: S,
        replBridgeEnabled: false,
        replBridgeOutboundOnly: false,
        replBridgeExplicit: false,
      },
      [C, x] = await Promise.all([l(y.cwd).then(c), m]);
    f(x);
    let I = x?.complete && x.maxSequenceNum > 0 ? x : null,
      k = {
        sessionId: t,
        getAccessToken: h,
        orgUuid: g.orgUUID,
        viewerOnly: n?.viewerOnly ?? false,
        isAttachToExisting: true,
        preflightCheck: _,
        onAuth401: i,
        initialSequenceNum: I?.maxSequenceNum,
      };
    await a(
      e,
      {
        getFpsMetrics: () => {
          return;
        },
        initialState: v,
      },
      {
        debug: d(),
        commands: C,
        initialTools: [],
        initialMessages: I ? [A, ...I.messages] : [A],
        mcpClients: [],
        remoteSessionConfig: k,
        autoConnectIdeFlag: n?.autoConnectIdeFlag,
        disableSlashCommands: n?.disableSlashCommands,
        onDetachToCaller: () => e.unmount(),
        thinkingConfig: {
          type: "adaptive",
        },
      },
      async (D, P) => {
        (D.render(P), await D.waitUntilExit());
      },
    );
  } finally {
    ((b = true), rUe(y.isRemoteMode), see(y.cwd), PA(y.sessionId, "remote_attach"));
  }
}
async function buildRemoteAttachConfig(e, t) {
  let [
      { prepareApiRequest: n, fetchSession: r },
      { getClaudeAIOAuthTokens: o, handleOAuth401Error: s },
      { consumePrefetchedHistory: i, reportPrefetchOutcome: a },
    ] = await Promise.all([
      Promise.resolve().then(() => (Cv(), sce)),
      Promise.resolve().then(() => (oo(), pU)),
      Promise.resolve().then(() => (xXo(), IXo)),
    ]),
    l = i(e, false),
    c = await n(),
    u = r(e, c).then(
      (f) => {
        if (f.session_status === "archived")
          throw (
            G("tengu_remote_attach_session_rejected", {
              reason: We("archived"),
            }),
            Error("This cloud session is archived and cannot accept new messages.")
          );
        if (f.session_context.cwd && !t())
          if (Fc(f.session_context.cwd))
            T("[attachRemote] session reported a UNC cwd \u2014 not adopting", {
              level: "warn",
            });
          else see(f.session_context.cwd);
      },
      (f) => {
        T(`[attachRemote] preflight fetchSession failed (continuing via WS): ${be(f)}`);
      },
    );
  u.catch(() => {});
  let d = await l;
  a(d);
  let p = d?.complete && d.maxSequenceNum > 0 ? d : null;
  return {
    seed: p,
    remoteSessionConfig: {
      sessionId: e,
      getAccessToken: () => o()?.accessToken ?? c.accessToken,
      orgUuid: c.orgUUID,
      isAttachToExisting: true,
      preflightCheck: u,
      onAuth401: s,
      initialSequenceNum: p?.maxSequenceNum,
    },
  };
}
