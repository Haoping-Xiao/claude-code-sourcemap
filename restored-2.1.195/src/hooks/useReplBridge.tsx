// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G8o
// matched 2.1.88 source: src/hooks/useReplBridge.tsx
// class=modified  jaccard=0.2778  score=0.3759  fileCov=0.5156
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module G8o] deps: Hp, Xr, ft, dn, je, fn, wQ
((Lgc = require("crypto")), (Dur = require("fs/promises")), (yen = require("path")));
((Ium = ve(() =>
  H.object({
    file_uuid: H.string(),
    file_name: H.string(),
    is_image: H.boolean().nullish(),
  }),
)),
  (xum = ve(() => H.array(Ium()))));
function Pum(e, t) {
  let n = JMe(e);
  if (!n) return null;
  let r = fA(n.commandName, t);
  if (!r || !YMe(r, n.args)) return null;
  let o = r.type === "local" && WHt(r) ? r : qHt(r);
  if (!o || o.type !== "local") return null;
  return {
    target: o,
    args: n.args,
    displayName: xu(r),
  };
}
function Ogc(e, t, n, r, o, s, i, a) {
  let l = ks(),
    c = bE.useRef(null),
    u = bE.useRef(void 0),
    d = bE.useRef(0),
    p = bE.useRef(void 0),
    f = bE.useRef(0),
    m = bE.useRef(void 0),
    g = bE.useRef(void 0),
    h = bE.useRef(void 0),
    y = bE.useRef(void 0),
    b = bE.useRef(void 0),
    _ = bE.useRef(void 0),
    S = bE.useRef(void 0),
    A = Ho(),
    v = bE.useRef(r);
  v.current = r;
  let C = bE.useRef(a);
  C.current = a;
  let x = (Z) => {
      let J = C.current;
      if (!J) return false;
      let ne = Pum(Z, v.current);
      if (!ne) return false;
      return (
        G("tengu_immediate_command_executed", {
          commandName: ne.displayName,
          fromKeybinding: false,
          bridgeOrigin: true,
        }),
        J(ne.target, ne.args, ne.displayName),
        true
      );
    },
    I = bE.useRef(o);
  I.current = o;
  let k = bE.useRef(e);
  k.current = e;
  let D = Dc(),
    P = $T(),
    { addNotification: O, removeNotification: L } = Li(),
    M = Ht((Z) => Z.replBridgeEnabled),
    N = Ht((Z) => Z.replBridgeConnected),
    B = Ht((Z) => Z.replBridgeOutboundOnly),
    $ = Ht((Z) => Z.replBridgeInitialName),
    q = Ht((Z) => Z.toolPermissionContext.mode),
    W = Ht((Z) => Z.fastMode),
    [V, Y] = bE.useState(() => process.env.CLAUDE_BG_SOURCE === "spare");
  if (V && e.some(ESe)) Y(false);
  bE.useEffect(() => {
    if (vl() || V) return;
    G("tengu_bridge_repl_evaluated", {
      would_auto_on: xVo(),
      repl_bridge_enabled: D.getState().replBridgeEnabled,
    });
  }, [D, V]);
  let z = bE.useCallback(() => {
    let Z = c.current;
    if (!Z || !at("tengu_bridge_system_init", false)) return;
    (async () => {
      try {
        let J = await Lue($t()),
          ne = D.getState(),
          oe = performance.now(),
          re = gTt({
            ...mTt(),
            tools: [],
            mcpClients: [],
            model: I.current,
            permissionMode: $x(ne.toolPermissionContext.mode),
            commands: v.current.filter(VWo),
            agents: ne.agentDefinitions.activeAgents,
            skills: J,
            plugins: [],
            pluginErrors: [],
            pluginWarnings: [],
            fastModeState: QB(I.current, ne.fastMode),
          });
        (pur(re, oe), Z.writeSdkMessages([re]));
      } catch (J) {
        T(`[bridge:repl] Failed to send system/init: ${be(J)}`, {
          level: "error",
        });
      }
    })();
  }, [D]);
  return (
    bE.useEffect(() => {
      if (!N || B) return;
      z();
    }, [N, B, o, q, W, z]),
    bE.useEffect(() => {
      if (!M || vl() || V) return;
      let Z = B;
      if (!Z)
        (L(z5),
          A((ye) =>
            ye.replBridgeError === void 0
              ? ye
              : {
                  ...ye,
                  replBridgeError: void 0,
                },
          ));
      let J = D.getState().replBridgeExplicit;
      function ne(ye, ue = false) {
        if (
          (T(
            `[bridge:repl] notifyBridgeFailed detail="${ye}" outboundOnly=${Z} wasConnected=${ue}`,
          ),
          Z)
        )
          return;
        O({
          key: z5,
          kind: "warning",
          jsx: Dme.jsxs(Dme.Fragment, {
            children: [
              Dme.jsxs(w, {
                color: "error",
                children: ["Remote Control ", ue ? "disconnected" : "failed"],
              }),
              Dme.jsxs(w, {
                dimColor: true,
                children: [" \xB7 ", ye || "/remote-control"],
              }),
            ],
          }),
          priority: "immediate",
          requeueOnPreempt: true,
          invalidates: [z5],
        });
      }
      function oe(ye) {
        (ne(ye),
          A((ue) => ({
            ...ue,
            replBridgeError: ye,
          })),
          ge());
      }
      if (f.current >= Mum) {
        (T(`[bridge:repl] Hook: ${f.current} consecutive init failures, not retrying this session`),
          ne(rht),
          A((ye) => {
            if (ye.replBridgeError === rht && !ye.replBridgeEnabled) return ye;
            return {
              ...ye,
              replBridgeError: rht,
              replBridgeEnabled: false,
            };
          }));
        return;
      }
      if (!Z)
        Xgo(({ status: ye, payloadType: ue }) => {
          let we = ue === "control_response" ? "permission response" : "message";
          O({
            key: "bridge-attestation-drop",
            kind: "warning",
            jsx: Dme.jsxs(Dme.Fragment, {
              children: [
                Dme.jsxs(w, {
                  color: "error",
                  children: ["Remote Control: unsigned ", we, " rejected"],
                }),
                Dme.jsxs(w, {
                  dimColor: true,
                  children: [" \xB7 attestation: ", ye],
                }),
              ],
            }),
            priority: "immediate",
          });
          let Ce = `Remote Control received a ${we} without a valid device signature (attestation: ${ye}) and will not execute it.`;
          t((Ie) => {
            let Ve = Ie.at(-1);
            if (Ve?.type === "system" && Ve.subtype === "informational" && Ve.content === Ce)
              return Ie;
            return [...Ie, cc(Ce, "warning")];
          });
        });
      let re = false,
        ee = e.length,
        ce = Rt(),
        ae = em();
      if (_.current !== void 0 && _.current !== ce)
        ((m.current = void 0),
          (g.current = void 0),
          (h.current = void 0),
          (y.current = void 0),
          (b.current = void 0),
          (_.current = void 0),
          S.current?.(),
          (S.current = void 0));
      let de = b.current !== void 0 && e[0]?.uuid !== b.current;
      if (de) mlr();
      let Ee = !de && y.current !== void 0 ? Math.min(y.current, e.length) : void 0,
        me = false,
        pe = false;
      function ge() {
        let ye = k.current[0]?.uuid;
        p.current = l.setTimeout(() => {
          if (re) return;
          p.current = void 0;
          let ue = c.current;
          if (ue)
            ((m.current = ue.bridgeSessionId),
              (g.current = ue.getLastSequenceNum()),
              (h.current = ie.size > 0 ? new Set(ie) : void 0),
              (y.current = d.current),
              (b.current = ye),
              (_.current = ce),
              S.current?.(),
              (S.current = ue.archive ? Ci(() => ue.archive?.()) : void 0));
          A((we) => {
            if (!we.replBridgeError) return we;
            return (
              (me = true),
              {
                ...we,
                replBridgeEnabled: false,
                ...(ue && {
                  replBridgeSkipNextArchive: true,
                }),
              }
            );
          });
        }, Dum);
      }
      let he = new Map(),
        ie = new Set();
      if (!de && m.current !== void 0) for (let ye of h.current ?? []) ie.add(ye);
      function le(ye) {
        let ue = ye.response?.request_id;
        if (!ue) return false;
        let we = he.get(ue);
        if (!we)
          return (
            T(
              `[bridge:repl] No handler for control_response request_id=${ue} (late response after local resolve, stale reattach dialog, or unknown id)`,
              {
                level: "verbose",
              },
            ),
            false
          );
        he.delete(ue);
        let Ce = ye.response;
        if (Ce.subtype === "success" && Ce.response && pHl(Ce.response)) we(Ce.response);
        return true;
      }
      function He(ye, ue) {
        if (
          (T(
            `[bridge:repl] handleStateChange state=${ye} detail="${ue}" cancelled=${re} outboundOnly=${Z}`,
          ),
          re)
        )
          return;
        if (Z) {
          if ((T(`[bridge:repl] Mirror state=${ye}${ue ? ` detail=${ue}` : ""}`), ye === "failed"))
            A((Ce) => {
              if (!Ce.replBridgeConnected) return Ce;
              return {
                ...Ce,
                replBridgeConnected: false,
              };
            });
          else if (ye === "ready" || ye === "connected")
            A((Ce) => {
              if (Ce.replBridgeConnected) return Ce;
              return {
                ...Ce,
                replBridgeConnected: true,
              };
            });
          return;
        }
        let we = c.current;
        switch (ye) {
          case "ready":
            (L(z5),
              A((Ce) => {
                let Ie = we
                    ? dS(we.bridgeSessionId, we.sessionIngressUrl)
                    : Ce.replBridgeSessionUrl,
                  Ve = we?.environmentId,
                  Ze = we?.bridgeSessionId;
                if (
                  Ce.replBridgeConnected &&
                  !Ce.replBridgeSessionActive &&
                  !Ce.replBridgeReconnecting &&
                  Ce.replBridgeSessionUrl === Ie &&
                  Ce.replBridgeEnvironmentId === Ve &&
                  Ce.replBridgeSessionId === Ze
                )
                  return Ce;
                return {
                  ...Ce,
                  replBridgeConnected: true,
                  replBridgeSessionActive: false,
                  replBridgeReconnecting: false,
                  replBridgeSessionUrl: Ie,
                  replBridgeEnvironmentId: Ve,
                  replBridgeSessionId: Ze,
                  replBridgeError: void 0,
                };
              }));
            break;
          case "connected": {
            (L(z5),
              A((Ce) => {
                if (Ce.replBridgeSessionActive) return Ce;
                return {
                  ...Ce,
                  replBridgeConnected: true,
                  replBridgeSessionActive: true,
                  replBridgeReconnecting: false,
                  replBridgeError: void 0,
                };
              }),
              z());
            break;
          }
          case "reconnecting":
            A((Ce) => {
              if (Ce.replBridgeReconnecting) return Ce;
              return {
                ...Ce,
                replBridgeReconnecting: true,
                replBridgeSessionActive: false,
              };
            });
            break;
          case "failed":
            if ((p.current?.(), ne(ue, we !== null), ue === oCo)) {
              ((me = true),
                (pe = true),
                A((Ce) => ({
                  ...Ce,
                  replBridgeEnabled: false,
                  replBridgeReconnecting: false,
                  replBridgeSessionActive: false,
                  replBridgeConnected: false,
                  replBridgeError: void 0,
                })));
              break;
            }
            (A((Ce) => ({
              ...Ce,
              replBridgeError: ue,
              replBridgeReconnecting: false,
              replBridgeSessionActive: false,
              replBridgeConnected: false,
            })),
              ge());
            break;
        }
      }
      return (
        (async () => {
          try {
            if (u.current)
              (T("[bridge:repl] Hook: waiting for previous teardown to complete before re-init"),
                await u.current,
                (u.current = void 0),
                T("[bridge:repl] Hook: previous teardown complete, proceeding with re-init"));
            if (re) return;
            let { initReplBridge: ye } = await Promise.resolve().then(() => (j8o(), F8o)),
              ue = await ye({
                outboundOnly: Z,
                reattachSessionId: de ? void 0 : m.current,
                reattachSequenceNum: de ? void 0 : g.current,
                tags: Z ? [otc] : [J ? ttc : Fir],
                getToolPermissionContext: () => D.getState().toolPermissionContext,
                getTools: () => s().tools,
                onInboundMessage: (we) => $um(we, x, void 0),
                onPermissionResponse: le,
                getInitializeState() {
                  return {
                    current_model: I.current,
                    current_permission_mode: $x(D.getState().toolPermissionContext.mode),
                  };
                },
                onDialogKindsDeclared: Z
                  ? void 0
                  : (we, Ce) => {
                      let Ie = ie.size;
                      for (let Ve of we) {
                        if (ie.size >= xJt) break;
                        ie.add(Ve);
                      }
                      if (Ce !== "restored" && ie.size > Ie) {
                        G("tengu_repl_bridge_dialog_kinds_declared", {
                          kind_count: ie.size,
                          has_refusal_fallback: ie.has("refusal_fallback_prompt"),
                        });
                        let Ve = c.current;
                        if (Ve) eZt(ce, Ve.bridgeSessionId, Ve.getLastSequenceNum(), ae, [...ie]);
                      }
                    },
                onInterrupt() {
                  (GOn(), T("[bridge:repl] Remote interrupt \u2192 onCancel()"), n.current());
                },
                onSetModel(we) {
                  let Ce = we == null || we.trim().toLowerCase() === "default",
                    Ie = Ce ? Ey() : we;
                  if (!Ce && !KS(Ie) && !(nU(Ie) ?? xa(Ie))) {
                    let Ve = D.getState(),
                      Ze = moe(Ie, zo(mzn(Ve.mainLoopModelForSession, Ve.mainLoopModel)));
                    return (
                      O({
                        key: `model-restricted-bridge-${Rht(Ie)}`,
                        kind: "warning",
                        text: Ze,
                        priority: "immediate",
                      }),
                      {
                        ok: false,
                        error: Ze,
                      }
                    );
                  }
                  (py(Ie),
                    A((Ve) => {
                      if (Ve.mainLoopModelForSession === Ie) return Ve;
                      return {
                        ...Ve,
                        mainLoopModelForSession: Ie,
                      };
                    }));
                },
                onSetMaxThinkingTokens(we) {
                  let Ce = we !== null;
                  A((Ie) => {
                    if (Ie.thinkingEnabled === Ce) return Ie;
                    return {
                      ...Ie,
                      thinkingEnabled: Ce,
                    };
                  });
                },
                onSetPermissionMode: (we) => Oum(we, D, A),
                onMcpStatus() {
                  return D.getState().mcp.clients.map((we) => {
                    let Ce;
                    if (we.config.type === "sse" || we.config.type === "http")
                      Ce = {
                        type: we.config.type,
                        url: we.config.url,
                      };
                    else if (we.config.type === "claudeai-proxy")
                      Ce = {
                        type: "claudeai-proxy",
                        url: we.config.url,
                        id: we.config.id,
                      };
                    else if (we.config.type === "stdio" || we.config.type === void 0)
                      Ce = {
                        type: "stdio",
                        command: we.config.command,
                        args: we.config.args,
                      };
                    return {
                      name: we.name,
                      status: we.type,
                      config: Ce,
                      scope: we.config.scope,
                      serverInfo: we.type === "connected" ? we.serverInfo : void 0,
                      error: we.type === "failed" ? we.error : void 0,
                    };
                  });
                },
                async onMcpAuthenticate(we, Ce) {
                  let Ie = D.getState().mcp.clients.find((Ue) => Ue.name === we)?.config;
                  if (!Ie) throw Error(`MCP server "${we}" not found`);
                  let Ve = r6(we, Ie);
                  if (Ve.kind === "claudeai-proxy") {
                    let Ue = oDe(Ve.config);
                    if (!Ue)
                      throw Error(
                        "Unable to build claude.ai connector auth URL (missing org or server id)",
                      );
                    return (
                      G("tengu_claudeai_mcp_auth_started", {}),
                      {
                        authUrl: Ue,
                        requiresUserAction: true,
                        callbackExpected: false,
                      }
                    );
                  }
                  if (Ve.kind === "unsupported-transport")
                    throw Error(
                      `Server type "${Ve.transport}" does not support OAuth authentication`,
                    );
                  if (Ve.kind === "anthropic-hosted") throw Error(Ve.message);
                  let Ze = (Ue) => {
                      let tt,
                        bt = new Promise((Je) => {
                          tt = Je;
                        }),
                        Ke,
                        Et,
                        ct = sJ(we, Ve.config, (Je) => tt(Je), void 0, {
                          skipBrowserOpen: true,
                          redirectUri: Ue,
                          onWaitingForCallback: (Je, gt, st) => {
                            ((Ke = gt), (Et = st));
                          },
                        });
                      return (
                        Udt(we, ct),
                        Promise.race([
                          bt.then((Je) => ({
                            authUrl: Je,
                            callbackPort: Ke,
                            state: Et,
                          })),
                          ct.then(() => null),
                        ])
                      );
                    },
                    Be = null,
                    Me = "localhost";
                  if (Ce && !Ve.config.oauth?.clientId)
                    try {
                      ((Be = await Ze(Ce)), (Me = "custom"));
                    } catch (Ue) {
                      T(
                        `[bridge:mcp] AS rejected custom redirectUri for ${we}; falling back to localhost: ${be(Ue)}`,
                      );
                    }
                  if (Me === "localhost") Be = await Ze();
                  if (!Be)
                    return {
                      requiresUserAction: false,
                      callbackExpected: false,
                    };
                  return {
                    authUrl: Be.authUrl,
                    requiresUserAction: true,
                    callbackExpected: true,
                    redirectScheme: Me,
                    state: Be.state,
                    ...(Me === "localhost" && {
                      callbackPort: Be.callbackPort,
                    }),
                  };
                },
                async onMcpOauthCallbackUrl(we, Ce) {
                  let Ie = Bdt(we);
                  if (!Ie)
                    throw Error(
                      `No OAuth flow in progress for "${we}" \u2014 call mcp_authenticate first`,
                    );
                  if (!Ie(Ce))
                    throw Error(
                      "Invalid callback URL \u2014 no authorization code. The flow is still open; retry with the full redirect URL.",
                    );
                  let Ve = Fdt(we);
                  if (Ve) await Ve;
                },
                async onMcpReconnect(we) {
                  let Ce = Unr();
                  if (!Ce)
                    throw Error(
                      "MCP controls aren't available right now \u2014 the terminal is still starting up or is showing another view",
                    );
                  XFl(D.getState().mcp.clients, we);
                  let Ie = await Ce(we);
                  if (Ie.client.type !== "connected")
                    throw Error(
                      Ie.client.type === "failed"
                        ? (Ie.client.error ?? "Connection failed")
                        : `Server status: ${Ie.client.type}`,
                    );
                },
                async onGetContextUsage() {
                  if (Rme()) {
                    let Be = i?.current;
                    if (Be && Be.turnCount() > 0) return Be.getContextUsage();
                  }
                  let { collectContextData: we } = await Promise.resolve().then(() => (B7t(), uNo)),
                    Ce = D.getState(),
                    { tools: Ie, customSystemPrompt: Ve, appendSystemPrompt: Ze } = s();
                  return we({
                    messages: k.current,
                    getAppState: D.getState,
                    options: {
                      mainLoopModel: I.current,
                      tools: Ie,
                      agentDefinitions: Ce.agentDefinitions,
                      customSystemPrompt: Ve,
                      appendSystemPrompt: Ze,
                    },
                  });
                },
                async onGetUsage() {
                  let { collectUsageData: we } = await Promise.resolve().then(() => (D7t(), sOl));
                  return we({
                    includeBehaviors: false,
                  });
                },
                onSetColor(we) {
                  let Ce = we === "default";
                  if (!Ce && !Ky.includes(we))
                    return {
                      ok: false,
                      error: `Unknown color "${we}". Available: ${Ky.join(", ")}, default`,
                    };
                  let Ie = Ce ? void 0 : we,
                    Ve = Rt();
                  i7t(Ve, we, em());
                  let Ze = D.getState(),
                    Be = Ze.agent
                      ? Ze.agentDefinitions.activeAgents.find((Me) => Me.agentType === Ze.agent)
                      : void 0;
                  return (
                    DPn(
                      XE(),
                      mht({
                        userOverride: Ie,
                        agentDefinitionColor: Be?.color,
                      }),
                    ),
                    A((Me) => {
                      if (Me.standaloneAgentContext?.color === Ie) return Me;
                      return {
                        ...Me,
                        standaloneAgentContext: {
                          ...Me.standaloneAgentContext,
                          name: Me.standaloneAgentContext?.name ?? "",
                          color: Ie,
                        },
                      };
                    }),
                    {
                      ok: true,
                    }
                  );
                },
                onStateChange: He,
                initialMessages: Ee !== void 0 ? e.slice(0, Ee) : e.length > 0 ? e : void 0,
                getMessages: () => k.current,
                initialName: $,
                enableSessionPersistence: Z || cMe() || kVo(),
              });
            if (re) {
              if ((T("[bridge:repl] Hook: init cancelled during flight, tearing down"), ue))
                ue.teardown();
              return;
            }
            if (!ue) {
              if (
                (f.current++,
                T(
                  `[bridge:repl] Init returned null (precondition or session creation failed); consecutive failures: ${f.current}`,
                ),
                p.current?.(),
                D.getState().replBridgeError !== void 0)
              )
                ge();
              else if (J && !Z && xC()) oe(e6e);
              else
                A((we) =>
                  we.replBridgeEnabled
                    ? {
                        ...we,
                        replBridgeEnabled: false,
                      }
                    : we,
                );
              return;
            }
            if (((c.current = ue), ARo(ue), $O(), (f.current = 0), !Z)) L(z5);
            if (
              ((m.current = void 0),
              (g.current = void 0),
              (h.current = void 0),
              (y.current = void 0),
              (b.current = void 0),
              (_.current = void 0),
              S.current?.(),
              (S.current = void 0),
              (d.current = Ee ?? ee),
              Js())
            )
              Uum(ue.bridgeSessionId, Z);
            else if (!Z) eZt(ce, ue.bridgeSessionId, ue.getLastSequenceNum(), ae, [...ie]);
            if (Z)
              (A((we) => {
                if (we.replBridgeConnected && we.replBridgeSessionId === ue.bridgeSessionId)
                  return we;
                return {
                  ...we,
                  replBridgeConnected: true,
                  replBridgeSessionId: ue.bridgeSessionId,
                  replBridgeSessionUrl: void 0,
                  replBridgeConnectUrl: void 0,
                };
              }),
                T(`[bridge:repl] Mirror initialized, session=${ue.bridgeSessionId}`));
            else {
              let we = Num(ue, he),
                Ce = dS(ue.bridgeSessionId, ue.sessionIngressUrl);
              if (
                (A((Ie) => ({
                  ...Ie,
                  replBridgePermissionCallbacks: we,
                  replBridgeConnected: true,
                  replBridgeSessionUrl: Ce,
                  replBridgeEnvironmentId: ue.environmentId,
                  replBridgeSessionId: ue.bridgeSessionId,
                  replBridgeError: void 0,
                })),
                J)
              )
                t((Ie) =>
                  Ie.some(
                    (Ve) => Ve.type === "system" && Ve.subtype === "bridge_status" && Ve.url === Ce,
                  )
                    ? Ie
                    : [...Ie, mcc(Ce)],
                );
              T(`[bridge:repl] Hook initialized, session=${ue.bridgeSessionId}`);
            }
          } catch (ye) {
            if (re) return;
            f.current++;
            let ue = be(ye);
            if (
              (T(`[bridge:repl] Init failed: ${ue}; consecutive failures: ${f.current}`),
              p.current?.(),
              Z)
            )
              A((we) =>
                we.replBridgeEnabled
                  ? {
                      ...we,
                      replBridgeEnabled: false,
                    }
                  : we,
              );
            else oe(ue);
          }
        })(),
        () => {
          ((re = true), Xgo(void 0), p.current?.(), (p.current = void 0));
          let ye = D.getState().replBridgeSkipNextArchive;
          if (ye)
            A((ue) => {
              if (!ue.replBridgeSkipNextArchive) return ue;
              return {
                ...ue,
                replBridgeSkipNextArchive: false,
              };
            });
          if (c.current) {
            let ue = c.current,
              we = !D.getState().replBridgeEnabled && !me,
              Ce = ye;
            if (!me)
              ((m.current = void 0),
                (g.current = void 0),
                (h.current = void 0),
                (y.current = void 0),
                (b.current = void 0),
                (_.current = void 0),
                S.current?.(),
                (S.current = void 0));
            if (!Z)
              if ((we || pe) && !ye) {
                if ((f5o(ce, ae), Js())) Bum();
              } else if (ye && !me) mlr();
              else eZt(ce, ue.bridgeSessionId, ue.getLastSequenceNum(), ae, [...ie]);
            let Ie = Z !== D.getState().replBridgeOutboundOnly && D.getState().replBridgeEnabled,
              Ve = ye || me || Ie ? void 0 : we ? "remote_control_disabled" : "host_exit";
            (T(
              `[bridge:repl] Hook cleanup: starting teardown for session=${ue.bridgeSessionId}${Ce ? " (skipArchive)" : ""}${Ve ? ` reason=${Ve}` : ""}`,
            ),
              (u.current = ue.teardown({
                skipArchive: Ce,
                reason: Ve,
              })),
              (c.current = null),
              ARo(null));
          }
          if (!me && !Z) L(z5);
          (A((ue) => {
            let we = me || Z ? ue.replBridgeError : void 0;
            if (
              !ue.replBridgeConnected &&
              !ue.replBridgeSessionActive &&
              !ue.replBridgeReconnecting &&
              !ue.replBridgeConnectUrl &&
              !ue.replBridgeSessionUrl &&
              !ue.replBridgeEnvironmentId &&
              !ue.replBridgeSessionId &&
              !ue.replBridgePermissionCallbacks &&
              ue.replBridgeError === we
            )
              return ue;
            return {
              ...ue,
              replBridgeConnected: false,
              replBridgeSessionActive: false,
              replBridgeReconnecting: false,
              replBridgeConnectUrl: void 0,
              replBridgeSessionUrl: void 0,
              replBridgeEnvironmentId: void 0,
              replBridgeSessionId: void 0,
              replBridgeError: we,
              replBridgePermissionCallbacks: void 0,
            };
          }),
            (d.current = 0));
        }
      );
    }, [M, B, V, A, t, O, L, z, l]),
    bE.useEffect(() => {
      if (!N) return;
      let Z = c.current;
      if (!Z) return;
      if (d.current > e.length)
        T(
          `[bridge:repl] Compaction detected: lastWrittenIndex=${d.current} > messages.length=${e.length}, clamping`,
        );
      let J = Math.min(d.current, e.length),
        ne = [];
      for (let oe = J; oe < e.length; oe++) {
        let re = e[oe];
        if (
          re &&
          (re.type === "user" ||
            re.type === "assistant" ||
            (re.type === "system" && re.subtype === "local_command"))
        )
          ne.push(re);
      }
      if (((d.current = e.length), ne.length > 0)) Z.writeMessages(ne);
    }, [e, N]),
    bE.useEffect(() => {
      if (!N) return;
      let Z = () => {
        let J = c.current;
        if (!J) return;
        let ne = VX().filter(
          (oe) =>
            oe.subtype === "task_started" ||
            oe.subtype === "task_progress" ||
            oe.subtype === "task_updated" ||
            oe.subtype === "task_notification" ||
            oe.subtype === "thinking_tokens",
        );
        if (ne.length > 0) J.writeSdkMessages(ne);
      };
      return (x5e(Z), Z(), () => x5e(null));
    }, [N]),
    bE.useEffect(() => {
      if (!M) VX();
    }, [M]),
    {
      sendBridgeResult: bE.useCallback(() => {
        c.current?.sendResult();
      }, []),
    }
  );
}
async function $um(e, t, n) {
  let r = $gc,
    o;
  $gc = new Promise((s) => {
    o = s;
  });
  try {
    let s = Iur(e);
    if (!s) return;
    let { uuid: i } = s,
      a = void 0;
    if (a?.kind !== "peer" && typeof s.content === "string" && t(s.content)) {
      T(
        `[bridge:repl] Ran immediate command without enqueue: ${s.content.slice(0, 80)}${i ? ` uuid=${i}` : ""}`,
      );
      return;
    }
    await r;
    let { resolveAndPrepend: l } = await Promise.resolve().then(() => (G8o(), Mgc)),
      c = s.content,
      u = await l(e, c),
      d = typeof u === "string" ? u.slice(0, 80) : `[${u.length} content blocks]`;
    T(`[bridge:repl] Injecting inbound user message: ${d}${i ? ` uuid=${i}` : ""}`);
    let p = ien(a, s.clientPlatform);
    j_({
      value: u,
      mode: "prompt",
      agentId: ls(),
      uuid: i,
      skipSlashCommands: true,
      ...(a?.kind === "peer"
        ? {
            origin: a,
            isMeta: true,
            ...(cen() && {
              priority: "later",
            }),
          }
        : {
            bridgeOrigin: true,
            clientPlatform: s.clientPlatform,
            ...(p && {
              origin: p,
            }),
            ...(p?.kind === "task-notification" &&
              oen(void 0, s.clientPlatform) === "later" && {
                priority: "later",
              }),
            ...(sen(s.clientPlatform, s.inboundOrigin) && {
              priority: aen(void 0, u, len()),
              verifiedSlackHumanTurn: true,
            }),
          }),
    });
  } catch (s) {
    T(`[bridge:repl] handleInboundMessage failed: ${s}`, {
      level: "error",
    });
  } finally {
    r.then(o, o);
  }
}
function Oum(e, t, n) {
  if (e === "bypassPermissions") {
    if (wU())
      return {
        ok: false,
        error:
          "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration",
      };
    if (!t.getState().toolPermissionContext.isBypassPermissionsModeAvailable)
      return {
        ok: false,
        error:
          "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions",
      };
  }
  if (e === "auto" && !Zv()) {
    let r = Pz();
    return {
      ok: false,
      error: r
        ? `Cannot set permission mode to auto: ${HZ(r)}`
        : "Cannot set permission mode to auto",
    };
  }
  return (
    n((r) => {
      let o = r.toolPermissionContext.mode;
      if (o === e) return r;
      let s = AZ(o, e, r.toolPermissionContext);
      return {
        ...r,
        toolPermissionContext: {
          ...s,
          mode: e,
        },
      };
    }),
    setImmediate(() => {
      wke.emit();
    }),
    {
      ok: true,
    }
  );
}
function Num(e, t) {
  return {
    sendRequest(n, r, o, s, i, a, l) {
      e.sendControlRequest({
        type: "control_request",
        request_id: n,
        request: {
          subtype: "can_use_tool",
          tool_name: r,
          display_name: ufe(r),
          input: o,
          tool_use_id: s,
          description: i,
          ...(a && {
            permission_suggestions: a,
          }),
          ...(l && {
            blocked_path: l,
          }),
        },
      });
    },
    sendResponse(n, r) {
      let o = {
        ...r,
      };
      e.sendControlResponse({
        type: "control_response",
        response: {
          subtype: "success",
          request_id: n,
          response: o,
        },
      });
    },
    cancelRequest(n) {
      (e.sendControlCancelRequest(n), t.delete(n));
    },
    onResponse(n, r) {
      return (
        t.set(n, r),
        () => {
          t.delete(n);
        }
      );
    },
  };
}
async function Bum() {
  let e = process.env.CLAUDE_JOB_DIR;
  if (!e) return;
  try {
    let t = await zi(e);
    if (!t || t.bridgeSessionId === void 0) return;
    sS(e);
    let n = (await zi(e)) ?? t;
    await Kd(e, {
      ...n,
      bridgeSessionId: void 0,
      bridgeOutboundOnly: void 0,
      bridgeSessionSeq: void 0,
      updatedAt: new Date().toISOString(),
    });
  } catch (t) {
    Xf(t);
  }
}
async function Uum(e, t) {
  let n = process.env.CLAUDE_JOB_DIR;
  if (!n) return;
  try {
    let r = await zi(n);
    if (!r || (r.bridgeSessionId === e && r.bridgeOutboundOnly === t)) return;
    sS(n);
    let o = (await zi(n)) ?? r;
    await Kd(n, {
      ...o,
      bridgeSessionId: e,
      bridgeOutboundOnly: t,
      bridgeSessionSeq: o.bridgeSessionId === e ? o.bridgeSessionSeq : void 0,
      updatedAt: new Date().toISOString(),
    });
  } catch (r) {
    Xf(r);
  }
}
var bE,
  Dme,
  Dum = 10000 /* 1e4 */,
  Mum = 3,
  $gc;
