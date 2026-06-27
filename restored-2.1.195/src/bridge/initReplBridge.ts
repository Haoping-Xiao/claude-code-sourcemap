// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kgc
// matched 2.1.88 source: src/bridge/initReplBridge.ts
// class=modified  jaccard=0.1635  score=0.2932  fileCov=0.2698
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: initReplBridge
async function initReplBridge(e) {
  let {
    getToolPermissionContext: t,
    getTools: n,
    onInboundMessage: r,
    onPermissionResponse: o,
    onInterrupt: s,
    getInitializeState: i,
    onDialogKindsDeclared: a,
    onSetModel: l,
    onSetMaxThinkingTokens: c,
    onSetPermissionMode: u,
    onSetColor: d,
    onMcpAuthenticate: p,
    onMcpOauthCallbackUrl: f,
    onMcpReconnect: m,
    onMcpStatus: g,
    onGetContextUsage: h,
    onGetUsage: y,
    onStateChange: b,
    initialMessages: _,
    getMessages: S,
    initialName: A,
    outboundOnly: v,
    tags: C,
    reattachSessionId: x,
    reattachSequenceNum: I,
    enableSessionPersistence: k,
  } = e ?? {};
  (ylo(IVo), bft(iVe));
  let D = 0,
    P = {
      onTransportPersistenceReady: (he, ie) => {
        let le = ++D;
        (async () => {
          try {
            let He = await hNn();
            await hgc(he, ie, He);
          } catch (He) {
            T(`[bridge:repl] Persistence sync failed: ${be(He)}`, {
              level: "error",
            });
          }
          if (le !== D) {
            T("[bridge:repl] Transport torn down during sync \u2014 skipping writer install");
            return;
          }
          (YQt(he),
            XQt(ie.readMain, ie.readSubagents),
            T(
              "[bridge:repl] Session persistence enabled \u2014 transcript writer + hydrate readers registered",
            ));
        })();
      },
      onTransportPersistenceTeardown: () => {
        (D++, n5o());
      },
    },
    O = process.env.CLAUDE_BRIDGE_REATTACH_SESSION,
    L = O ?? x,
    M = process.env.CLAUDE_BRIDGE_REATTACH_SEQ;
  if (O)
    (delete process.env.CLAUDE_BRIDGE_REATTACH_SESSION,
      delete process.env.CLAUDE_BRIDGE_REATTACH_SEQ,
      delete process.env.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY);
  let N = O ? (M ? Number.parseInt(M, 10) || void 0 : void 0) : I;
  if (!L) {
    let he = glr();
    if (he)
      ((L = he.id),
        (N = he.seq),
        T(`[bridge:repl] Reattaching to persisted bridge session ${he.id} at seq ${he.seq}`));
  }
  let B = lTe(glr()?.declaredDialogKinds);
  if (B.length > 0) a?.(B, "restored");
  if (!(await wVo()))
    return (bJ("not_enabled", "[bridge:repl] Skipping: bridge not enabled"), null);
  if (!LN())
    return (bJ("no_oauth", "[bridge:repl] Skipping: no OAuth tokens"), b?.("failed", e6e), null);
  if ((await tV(), !Us("allow_remote_control")))
    return (
      bJ("policy_denied", "[bridge:repl] Skipping: allow_remote_control policy not allowed"),
      b?.("failed", "disabled by your organization's policy"),
      null
    );
  if (v && !Us("allow_remote_sessions"))
    return (
      bJ(
        "policy_denied",
        "[bridge:repl] Skipping mirror: allow_remote_sessions policy not allowed",
      ),
      b?.("failed", "disabled by your organization's policy"),
      null
    );
  if (!afe()) {
    let he = Dt();
    if (
      he.bridgeOauthDeadExpiresAt != null &&
      (he.bridgeOauthDeadFailCount ?? 0) >= 3 &&
      VCn() === he.bridgeOauthDeadExpiresAt
    )
      return (
        T(
          `[bridge:repl] Skipping: cross-process backoff (dead token seen ${he.bridgeOauthDeadFailCount} times)`,
        ),
        null
      );
    await ch();
    let ie = VCn();
    if (ie !== null && ie <= Date.now()) {
      (bJ(
        "oauth_expired_unrefreshable",
        "[bridge:repl] Skipping: OAuth token expired and refresh failed (re-login required)",
      ),
        b?.("failed", e6e));
      let le = ie;
      return (
        gn((He) => ({
          ...He,
          bridgeOauthDeadExpiresAt: le,
          bridgeOauthDeadFailCount:
            He.bridgeOauthDeadExpiresAt === le ? (He.bridgeOauthDeadFailCount ?? 0) + 1 : 1,
        })),
        null
      );
    }
  }
  let $ = czt(),
    q = `${uzt()}-${$st()}`,
    W = false,
    V = false;
  if (A) ((q = A), (W = true), (V = true));
  else {
    let he = Rt(),
      ie = he ? Gg(he) : void 0,
      le = he ? dz(he) : void 0;
    if (ie) ((q = ie), (W = true), (V = true));
    else if (le) ((q = le), (W = true));
    else if (_ && _.length > 0)
      for (let He = _.length - 1; He >= 0; He--) {
        let ye = _[He];
        if (!xut(ye) || KAe(ye)) continue;
        let ue = lQ(ye.message.content);
        if (!ue) continue;
        let we = wum(ue);
        if (!we) continue;
        ((q = we), (W = true));
        break;
      }
  }
  let Y = 0,
    z,
    K = 0,
    Z,
    J = new Set([q]),
    ne = (he, ie, le) => {
      ((W = true),
        (q = he),
        J.add(he),
        T(`[bridge:repl] derived title from message ${le}: ${he}`),
        NPo(ie, he, {
          baseUrl: $,
          getAccessToken: LN,
        }).catch(() => {}));
    },
    oe = (he, ie) => {
      let le = ++K,
        He = Y;
      vse(he, AbortSignal.timeout(15000)).then(async (ye) => {
        let ue = () => {
            let Ie = dz(Rt());
            return Boolean(Ie && !J.has(Ie));
          },
          we = () => le !== K || z !== ie || V || Gg(Rt()) || ue();
        if (!ye || we()) return;
        let Ce = await zKt(ie, {
          baseUrl: $,
          getAccessToken: LN,
        }).catch(() => null);
        if (we()) return;
        if (Ce === null) return;
        if (Ce.title && !J.has(Ce.title)) {
          Z = ie;
          return;
        }
        ne(ye, ie, He);
      });
    },
    re = (he) => {
      let ie = he.trim();
      if (!ie)
        return {
          ok: false,
          error: "title must be non-empty",
        };
      return (
        (q = ie),
        (W = true),
        (V = true),
        J.add(ie),
        Aq(Rt(), ie, void 0, "remote"),
        {
          ok: true,
        }
      );
    },
    ee = (he, ie) => {
      if (V || Z === ie) return true;
      let le = Gg(Rt());
      if (le) {
        if (!J.has(le))
          zKt(ie, {
            baseUrl: $,
            getAccessToken: LN,
          })
            .catch(() => null)
            .then((ye) => {
              if (V || Gg(Rt()) !== le) return;
              if (ye === null) return;
              if (ye.title && !J.has(ye.title)) {
                Z = ie;
                return;
              }
              (ne(le, ie, Y), (V = true));
            });
        return true;
      }
      let He = dz(Rt());
      if (He && !J.has(He)) {
        let ye = Y;
        return (
          zKt(ie, {
            baseUrl: $,
            getAccessToken: LN,
          })
            .catch(() => null)
            .then((ue) => {
              if (V || Gg(Rt())) return;
              if (ue === null) return;
              if (ue.title && !J.has(ue.title)) {
                Z = ie;
                return;
              }
              ne(He, ie, ye);
            }),
          true
        );
      }
      if (z !== void 0 && z !== ie) Y = 0;
      if (((z = ie), Y++, Y === 1 && !W)) oe(he, ie);
      else if (Y === 3) {
        let ye = S?.(),
          ue = ye ? Qrr(Py(ye)) : he;
        oe(ue, ie);
      }
      return Y >= 3;
    },
    ce = 200,
    ae = await yj();
  if (!ae)
    return (bJ("no_org_uuid", "[bridge:repl] Skipping: no org UUID"), b?.("failed", e6e), null);
  let de = await Air();
  if (de)
    return (
      bJ("version_too_old", `[bridge:repl] Skipping: ${de}`, true),
      b?.("failed", "run `claude update` to upgrade"),
      null
    );
  let Ee = await ub(),
    me = await cRr(),
    pe,
    ge = await xgc({
      reattachSessionId: L,
      reattachSequenceNum: N,
      baseUrl: $,
      orgUUID: ae,
      title: q,
      getAccessToken: LN,
      onAuth401: ZB,
      onReadFreshOAuthToken: i8r,
      onProactiveRefresh: async () => {
        await ch();
      },
      toSDKMessages: (he) => C8l(he, n?.()),
      initialHistoryCap: ce,
      initialMessages: _,
      gitRepoUrl: me,
      branch: Ee,
      onInboundMessage: r,
      onUserMessage: ee,
      onSessionEstablished: (he) => {
        if (
          (pe?.teardown(),
          (pe = dgc(l4t(he), $, () => {
            let le = LN();
            if (!le) return {};
            return {
              Authorization: `Bearer ${le}`,
            };
          })),
          $ue() && !Vi())
        )
          fMl();
        let ie = tZt();
        if (ie && ie !== "default")
          BPo(he, ie, Ky, {
            baseUrl: $,
            getAccessToken: LN,
          });
      },
      onBeforePushTriggeringState: () => pe?.pulseIfClientPresent(),
      onPermissionResponse: o,
      onInterrupt: s,
      getInitializeState: i,
      onDialogKindsDeclared: a,
      onSetModel: l,
      onSetMaxThinkingTokens: c,
      onSetPermissionMode: u,
      onRenameSession: re,
      onSetColor: d,
      async onFileSuggestions(he) {
        return (await t7t(Cfe, he, true)).map((le) => ({
          path: le.displayText,
        }));
      },
      onReadFile: (he, ie, le) => ZZt(he, ie, t?.() ?? b1(), le),
      onMcpAuthenticate: p,
      onMcpOauthCallbackUrl: f,
      onMcpReconnect: m,
      onMcpStatus: g,
      onGetContextUsage: h,
      onGetUsage: y,
      onStateChange: b,
      outboundOnly: v,
      tags: C,
      ...(k ? P : {}),
    });
  return vum(ge, () => pe);
}
function vum(e, t) {
  if (!e) return (t()?.teardown(), null);
  let n = e.teardown.bind(e);
  return (
    (e.teardown = async (r) => {
      (t()?.teardown(), await n(r));
    }),
    e
  );
}
function wum(e) {
  let t = FZe(e),
    r = (/^(.*?[.!?])\s/.exec(t)?.[1] ?? t).replace(/\s+/g, " ").trim();
  if (!r) return;
  return r.length > Rgc ? r.slice(0, Rgc - 1) + "\u2026" : r;
}
var Rgc = 50;
