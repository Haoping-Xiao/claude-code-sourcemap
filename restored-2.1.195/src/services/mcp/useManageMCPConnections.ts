// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bBo
// matched 2.1.88 source: src/services/mcp/useManageMCPConnections.ts
// class=modified  jaccard=0.5083  score=0.6646  fileCov=0.6837
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var bBo = E(() => {
  Qi();
  Zf();
  LMe();
  Onr = Cn(async (e, t) => {
    let n = await aC(e),
      r = new Set(n.map((i) => i.name)),
      o = (t ?? []).filter((i) => !r.has(i.name));
    return yQ([...n, ...o]).map((i) => ({
      name: i.name,
      description: i.description,
      whenToUse: i.whenToUse ?? "",
    }));
  }, NFl);
  if (!(Onr.cache instanceof Map)) Onr.cache = new Map();
});
function Bnr(e) {
  let t = "plugin" in e ? e.plugin : "no-plugin";
  return `${e.type}:${e.source}:${t}`;
}
function GFl(e, t) {
  if (t.length === 0) return;
  e((n) => {
    let r = new Set(n.plugins.errors.map((s) => Bnr(s))),
      o = t.filter((s) => !r.has(Bnr(s)));
    if (o.length === 0) return n;
    return {
      ...n,
      plugins: {
        ...n.plugins,
        errors: [...n.plugins.errors, ...o],
      },
    };
  });
}
function WFl(e, t) {
  if (t.length === 0) return;
  e((n) => {
    let r = new Set(n.plugins.warnings.map((s) => Bnr(s))),
      o = t.filter((s) => !r.has(Bnr(s)));
    if (o.length === 0) return n;
    return {
      ...n,
      plugins: {
        ...n.plugins,
        warnings: [...n.plugins.warnings, ...o],
      },
    };
  });
}
function qFl(e, t = false) {
  let n = da(),
    r = Dc(),
    o = Ht((P) => P.authVersion),
    s = kC.useRef(void 0),
    i = Ht((P) => P.policyVersion),
    a = Ht((P) => P.mcp.pluginReconnectKey),
    l = Ho(),
    c = ks(),
    u = kC.useRef(new Map()),
    d = kC.useRef(new Map()),
    p = kC.useRef(new Map()),
    f = kC.useRef(null),
    m = kC.useRef(new Set()),
    g = kC.useRef(new Set()),
    h = kC.useRef(null);
  if (h.current === null && !n) h.current = Jfl();
  kC.useEffect(() => {
    let P = h.current;
    if (!P) return;
    if (!zfl()) return;
    return (
      l((O) => {
        if (O.channelPermissionCallbacks === P) return O;
        return {
          ...O,
          channelPermissionCallbacks: P,
        };
      }),
      () => {
        l((O) => {
          if (O.channelPermissionCallbacks === void 0) return O;
          return {
            ...O,
            channelPermissionCallbacks: void 0,
          };
        });
      }
    );
  }, [l]);
  let { addNotification: y } = Li(),
    b = kC.useRef(new Set());
  kC.useEffect(
    () =>
      v4t.subscribe((P) => {
        if (b.current.has(P)) return;
        let O = r.getState().mcp.clients.find((L) => L.name === P);
        if (O?.type !== "connected") return;
        if (
          (O.config.type === "sse" || O.config.type === "http") &&
          (_In(O.config, !!Ws()?.accessToken || KSe()) || (y7() && !!O.config.oauth?.xaa))
        )
          return;
        (b.current.add(P),
          y({
            key: `mcp-needs-reauth-${P}`,
            kind: "warning",
            priority: "high",
            text: `MCP server "${P}" lost authentication \xB7 open /mcp and select Re-authenticate`,
            color: "warning",
            timeoutMs: 12000,
          }));
      }),
    [r, y],
  );
  let _ = 16,
    S = kC.useRef([]),
    A = kC.useRef(null),
    v = kC.useCallback(() => {
      A.current = null;
      let P = S.current;
      if (P.length === 0) return;
      ((S.current = []),
        l((O) => {
          let L = O.mcp;
          for (let M of P) {
            let { tools: N, commands: B, resources: $, resourceTemplates: q, ...W } = M,
              V = W.type === "disabled" || W.type === "failed" ? (N ?? []) : N,
              Y = W.type === "disabled" || W.type === "failed" ? (B ?? []) : B,
              z = W.type === "disabled" || W.type === "failed" ? ($ ?? []) : $,
              K = W.type === "disabled" || W.type === "failed" ? (q ?? []) : q,
              Z = xG(W.name),
              J = L.clients.findIndex((ae) => ae.name === W.name);
            if (W.type === "connected" && D4(W.name, W.config)) {
              if (
                (RKe(W.name),
                (W.client.onclose = void 0),
                ST(W.name, W.config).catch(() => {}),
                J === -1)
              )
                continue;
              L = {
                ...L,
                clients: L.clients.map((ae) =>
                  ae.name === W.name
                    ? {
                        name: W.name,
                        type: "failed",
                        config: W.config,
                        error: "Blocked by enterprise managed policy",
                      }
                    : ae,
                ),
                tools: bL(L.tools, (ae) => ae.name?.startsWith(Z)),
                commands: bL(L.commands, (ae) => $4(ae, W.name)),
                resources: $F(L.resources, W.name),
                resourceTemplates: $F(L.resourceTemplates, W.name),
              };
              continue;
            }
            let ne =
                J === -1 ? [...L.clients, W] : L.clients.map((ae) => (ae.name === W.name ? W : ae)),
              oe = V === void 0 ? L.tools : [...bL(L.tools, (ae) => ae.name?.startsWith(Z)), ...V],
              re = Y === void 0 ? L.commands : [...bL(L.commands, (ae) => $4(ae, W.name)), ...Y],
              ee =
                z === void 0
                  ? L.resources
                  : z.length > 0
                    ? {
                        ...L.resources,
                        [W.name]: z,
                      }
                    : $F(L.resources, W.name),
              ce =
                K === void 0
                  ? L.resourceTemplates
                  : K.length > 0
                    ? {
                        ...L.resourceTemplates,
                        [W.name]: K,
                      }
                    : $F(L.resourceTemplates, W.name);
            L = {
              ...L,
              clients: ne,
              tools: oe,
              commands: re,
              resources: ee,
              resourceTemplates: ce,
            };
          }
          return {
            ...O,
            mcp: L,
          };
        }));
    }, [l]),
    C = kC.useCallback(
      (P) => {
        if ((S.current.push(P), A.current === null)) A.current = c.setTimeout(v, _);
      },
      [c, v],
    ),
    x = kC.useCallback(
      ({ client: P, tools: O, commands: L, resources: M, resourceTemplates: N }) => {
        C({
          ...P,
          tools: O,
          commands: L,
          resources: M,
          resourceTemplates: N,
        });
        {
          let B = Epo();
          if (B)
            y({
              key: "mcp-first-party-scope-expanded",
              kind: "event",
              priority: "high",
              text: B,
              color: "remember",
              timeoutMs: 12000,
            });
        }
        switch (P.type) {
          case "connected": {
            (p.current.set(P.name, Nnr),
              b.current.delete(P.name),
              yka(P.client, P.name, l, P.transportErrorState),
              (P.client.onclose = () => {
                if (HT()) return;
                let Y = P.config.type ?? "stdio";
                if (
                  (ST(P.name, P.config).catch(() => {
                    T(`Failed to invalidate the server cache: ${P.name}`);
                  }),
                  mk(P.name))
                ) {
                  sn(P.name, "Server is disabled, skipping automatic reconnection");
                  return;
                }
                if (Y !== "stdio" && Y !== "sdk") {
                  let z = N1f(Y);
                  sn(
                    P.name,
                    `${z} transport closed/disconnected, attempting automatic reconnection`,
                  );
                  let K = u.current.get(P.name);
                  if (K) (K(), u.current.delete(P.name));
                  (async () => {
                    for (let J = 1; J <= REt; J++) {
                      if (mk(P.name)) {
                        (sn(P.name, "Server disabled during reconnection, stopping retry"),
                          u.current.delete(P.name));
                        return;
                      }
                      if (D4(P.name, P.config)) {
                        (RKe(P.name),
                          sn(
                            P.name,
                            "Server blocked by managed policy during reconnection, stopping retry",
                          ),
                          u.current.delete(P.name),
                          C({
                            name: P.name,
                            type: "failed",
                            config: P.config,
                            error: "Blocked by enterprise managed policy",
                          }));
                        return;
                      }
                      C({
                        ...P,
                        type: "pending",
                        reconnectAttempt: J,
                        maxReconnectAttempts: REt,
                      });
                      let ne = c.now();
                      try {
                        let re = await iJ(P.name, P.config),
                          ee = Math.round(c.now() - ne);
                        if (re.client.type === "connected") {
                          (sn(P.name, `${z} reconnection successful after ${ee}ms (attempt ${J})`),
                            u.current.delete(P.name),
                            x(re));
                          return;
                        }
                        if (
                          (sn(
                            P.name,
                            `${z} reconnection attempt ${J} completed with status: ${re.client.type}`,
                          ),
                          J === REt)
                        ) {
                          (sn(P.name, `Max reconnection attempts (${REt}) reached, giving up`),
                            u.current.delete(P.name),
                            x(re));
                          return;
                        }
                      } catch (re) {
                        let ee = Math.round(c.now() - ne);
                        if (
                          (au(P.name, `${z} reconnection attempt ${J} failed after ${ee}ms: ${re}`),
                          J === REt)
                        ) {
                          (sn(P.name, `Max reconnection attempts (${REt}) reached, giving up`),
                            u.current.delete(P.name),
                            C({
                              ...P,
                              type: "failed",
                            }));
                          return;
                        }
                      }
                      let oe = Math.min(FFl * Math.pow(2, J - 1), jFl);
                      (sn(P.name, `Scheduling reconnection attempt ${J + 1} in ${oe}ms`),
                        await new Promise((re) => {
                          let ee = c.setTimeout(re, oe);
                          u.current.set(P.name, ee);
                        }));
                    }
                  })();
                } else
                  (g.current.delete(P.name),
                    C({
                      ...P,
                      type: "failed",
                    }));
              }));
            let B = V_t(P.name, P.capabilities, P.config.pluginSource),
              $ = p$e(P.name, MA()),
              q = $?.kind === "plugin" ? `${$.name}@${$.marketplace}` : void 0,
              W = false,
              V = () => {
                if (
                  (g.current.add(P.name),
                  P.client.setNotificationHandler(G_t(), async (Y) => {
                    let { content: z, meta: K } = Y.params;
                    (sn(P.name, `notifications/claude/channel: ${z.slice(0, 80)}`),
                      G("tengu_mcp_channel_message", {
                        content_length: z.length,
                        meta_key_count: Object.keys(K ?? {}).length,
                        entry_kind: Oo($?.kind),
                        is_dev: $?.dev ?? false,
                        plugin: q,
                      }),
                      j_({
                        mode: "prompt",
                        agentId: ls(),
                        value: W_t(P.name, z, K),
                        priority: "next",
                        isMeta: true,
                        origin: {
                          kind: "channel",
                          server: P.name,
                        },
                        skipSlashCommands: true,
                      }));
                  }),
                  P.capabilities?.experimental?.["claude/channel/permission"] !== void 0)
                )
                  P.client.setNotificationHandler(xko(), async (Y) => {
                    let { request_id: z, behavior: K } = Y.params,
                      Z = h.current?.resolve(z, K, P.name) ?? false;
                    sn(
                      P.name,
                      `notifications/claude/channel/permission: ${z} \u2192 ${K} (${Z ? "matched pending" : "no pending entry \u2014 stale or unknown ID"})`,
                    );
                  });
              };
            switch (B.action) {
              case "register":
                (sn(P.name, "Channel notifications registered"), V(), (W = true));
                break;
              case "skip": {
                let Y = B.kind === "provider" || B.kind === "disabled" || B.kind === "capability",
                  z = g.current.has(P.name);
                if (Y)
                  (g.current.delete(P.name),
                    P.client.removeNotificationHandler("notifications/claude/channel"),
                    P.client.removeNotificationHandler(MYn));
                else if (z) {
                  (sn(
                    P.name,
                    `Channel gate says skip:${B.kind} but was previously registered \u2014 preserving handler`,
                  ),
                    V(),
                    (W = true));
                  break;
                }
                if (
                  (sn(P.name, `Channel notifications skipped: ${B.reason}`),
                  B.kind !== "capability" &&
                    B.kind !== "session" &&
                    !m.current.has(B.kind) &&
                    (B.kind === "marketplace" || B.kind === "allowlist" || $ !== void 0))
                ) {
                  m.current.add(B.kind);
                  let K =
                    B.kind === "disabled"
                      ? "Channels are not currently available"
                      : B.kind === "provider"
                        ? "Channels are not available on Bedrock, Vertex, or Foundry"
                        : B.kind === "policy"
                          ? "Channels are not enabled for your org \xB7 have an administrator set channelsEnabled: true in managed settings"
                          : B.reason;
                  y({
                    key: `channels-blocked-${B.kind}`,
                    priority: "high",
                    text: K,
                    color: "warning",
                    timeoutMs: 12000,
                  });
                }
                break;
              }
            }
            if (W || (B.action === "skip" && B.kind !== "capability"))
              G("tengu_mcp_channel_gate", {
                registered: W,
                skip_kind: B.action === "skip" ? $e(B.kind) : void 0,
                entry_kind: Oo($?.kind),
                is_dev: $?.dev ?? false,
                plugin: q,
              });
            if (P.capabilities?.tools?.listChanged)
              P.client.setNotificationHandler(KUe, async () => {
                sn(P.name, "Received tools/list_changed notification, refreshing tools");
                try {
                  let Y = lP.cache.get(P.name);
                  lP.cache.delete(P.name);
                  let z = await lP(P),
                    K = z.length;
                  if (Y)
                    Y.then(
                      (Z) => {
                        G("tengu_mcp_list_changed", {
                          type: We("tools"),
                          previousCount: Z.length,
                          newCount: K,
                        });
                      },
                      () => {
                        G("tengu_mcp_list_changed", {
                          type: We("tools"),
                          newCount: K,
                        });
                      },
                    );
                  else
                    G("tengu_mcp_list_changed", {
                      type: We("tools"),
                      newCount: K,
                    });
                  C({
                    ...P,
                    tools: z,
                  });
                } catch (Y) {
                  au(P.name, `Failed to refresh tools after list_changed notification: ${be(Y)}`);
                }
              });
            if (P.capabilities?.prompts?.listChanged)
              P.client.setNotificationHandler(xkt, async () => {
                (sn(P.name, "Received prompts/list_changed notification, refreshing prompts"),
                  G("tengu_mcp_list_changed", {
                    type: We("prompts"),
                  }));
                try {
                  mJ.cache.delete(P.name);
                  let [Y, z] = await Promise.all([mJ(P), hk() ? SBo(P) : Promise.resolve([])]);
                  (C({
                    ...P,
                    commands: [...Y, ...z],
                  }),
                    UFl());
                } catch (Y) {
                  au(P.name, `Failed to refresh prompts after list_changed notification: ${be(Y)}`);
                }
              });
            if (P.capabilities?.resources?.listChanged)
              P.client.setNotificationHandler(Ckt, async () => {
                (sn(P.name, "Received resources/list_changed notification, refreshing resources"),
                  G("tengu_mcp_list_changed", {
                    type: We("resources"),
                  }));
                try {
                  if ((v4.cache.delete(P.name), cde.cache.delete(P.name), hk())) {
                    (SBo.cache.delete(P.name), mJ.cache.delete(P.name));
                    let [Y, z, K, Z] = await Promise.all([v4(P), cde(P), mJ(P), SBo(P)]);
                    (C({
                      ...P,
                      resources: Y,
                      resourceTemplates: z,
                      commands: [...K, ...Z],
                    }),
                      UFl());
                  } else {
                    let [Y, z] = await Promise.all([v4(P), cde(P)]);
                    C({
                      ...P,
                      resources: Y,
                      resourceTemplates: z,
                    });
                  }
                } catch (Y) {
                  au(
                    P.name,
                    `Failed to refresh resources after list_changed notification: ${be(Y)}`,
                  );
                }
              });
            break;
          }
          case "failed": {
            let B = (p.current.get(P.name) ?? 0) + 1;
            if (MUn(P) && B <= Nnr) {
              p.current.set(P.name, B);
              let $ = Math.min(FFl * Math.pow(2, B - 1), jFl);
              (sn(
                P.name,
                `Transient ${P.errorCode ?? "<sse-no-code>"} on initial connect \u2014 retry ${B}/${Nnr} in ${$}ms`,
              ),
                C({
                  name: P.name,
                  config: P.config,
                  type: "pending",
                  reconnectAttempt: B,
                  maxReconnectAttempts: Nnr,
                }));
              let q = u.current.get(P.name);
              if (q) q();
              let W = c.setTimeout(() => {
                if ((u.current.delete(P.name), mk(P.name))) return;
                if (D4(P.name, P.config)) {
                  RKe(P.name);
                  return;
                }
                iJ(P.name, P.config).then(x, (V) => {
                  (au(P.name, `Initial-connect retry ${B} threw: ${be(V)}`),
                    C({
                      ...P,
                    }));
                });
              }, $);
              u.current.set(P.name, W);
            } else if (K7t(P, sqe)) VL("MCP", 1);
            break;
          }
          case "needs-auth":
            if (K7t(P, sqe)) VL("MCP", 1);
            break;
          case "pending":
          case "disabled":
            break;
        }
      },
      [c, C, y, l],
    ),
    I = Rt();
  (kC.useEffect(() => {
    if (n) return;
    async function P() {
      let {
          servers: O,
          errors: L,
          warnings: M,
        } = t
          ? {
              servers: {},
              errors: [],
              warnings: [],
            }
          : await rJ(e),
        { configs: N, blocked: B } = Pdt(e),
        $ = {
          ...O,
          ...N,
        };
      if (B.length > 0) {
        (B.sort(),
          T(`MCP servers blocked by managed policy at connect time: ${B.join(", ")}`, {
            level: "warn",
          }));
        let q = B.join(",");
        if (f.current !== q)
          ((f.current = q),
            y({
              key: "mcp-blocked-policy",
              kind: "warning",
              priority: "high",
              text: `MCP ${bn(B.length, "server")} blocked by enterprise policy: ${B.join(", ")}`,
              color: "warning",
              timeoutMs: 12000,
            }));
        for (let W of B) {
          let V = e?.[W];
          if (V) ST(W, V).catch(() => {});
        }
      } else f.current = null;
      (GFl(l, L),
        WFl(l, M),
        l((q) => {
          let { stale: W, ...V } = DCa(q.mcp, $);
          for (let K of W) {
            let Z = u.current.get(K.name);
            if (Z) (Z(), u.current.delete(K.name));
            if ((g.current.delete(K.name), p.current.delete(K.name), K.type === "connected"))
              ((K.client.onclose = void 0), ST(K.name, K.config).catch(() => {}));
          }
          let Y = new Set(V.clients.map((K) => K.name)),
            z = Object.entries($)
              .filter(([K]) => !Y.has(K))
              .map(([K, Z]) => ({
                name: K,
                type: mk(K) ? "disabled" : "pending",
                config: Z,
              }));
          if (z.length === 0 && W.length === 0) {
            if (q.mcp.clientsInitialized) return q;
            return {
              ...q,
              mcp: {
                ...q.mcp,
                clientsInitialized: true,
              },
            };
          }
          return {
            ...q,
            mcp: {
              ...q.mcp,
              ...V,
              clientsInitialized: true,
              clients: [...V.clients, ...z],
            },
          };
        }));
    }
    P().catch((O) => {
      au("useManageMCPConnections", `Failed to initialize servers as pending: ${be(O)}`);
    });
  }, [t, e, l, I, a, i]),
    kC.useEffect(() => {
      if (n) return;
      let P = false;
      async function O() {
        let L;
        if (t || Mdt()) L = Promise.resolve({});
        else {
          if ((HCa(), s.current !== void 0 && s.current !== o)) JUn();
          ((s.current = o), (L = rDe()));
        }
        let {
          servers: M,
          errors: N,
          warnings: B,
        } = t
          ? {
              servers: {},
              errors: [],
              warnings: [],
            }
          : await rJ(e);
        if (P) return;
        (GFl(l, N), WFl(l, B));
        let $ = {
            ...M,
            ...Pdt(e).configs,
          },
          q = CB($, (K, Z) => mk(Z));
        Dqe(x, q).catch((K) => {
          au("useManageMcpConnections", `Failed to get MCP resources: ${be(K)}`);
        });
        let W = {};
        if (!t) {
          let { allowed: K, blocked: Z } = l5((await L) ?? {});
          if (((W = K), P)) return;
          if (l2e())
            for (let oe of r.getState().mcp.clients) {
              if (oe.config.scope !== "claudeai") continue;
              if (oe.type === "disabled") continue;
              let re = u.current.get(oe.name);
              if (re) (re(), u.current.delete(oe.name));
              if ((g.current.delete(oe.name), p.current.delete(oe.name), oe.type === "connected"))
                ((oe.client.onclose = void 0), ST(oe.name, oe.config).catch(() => {}));
              C({
                name: oe.name,
                type: "failed",
                config: oe.config,
                error: "Disabled by disableClaudeAiConnectors setting",
              });
            }
          if (Z.length > 0) {
            T(`claude.ai connectors blocked by managed policy at connect time: ${Z.join(", ")}`, {
              level: "warn",
            });
            for (let oe of Z) {
              let re = r
                .getState()
                .mcp.clients.find((ce) => ce.name === oe && ce.config.scope === "claudeai");
              if (!re) continue;
              let ee = u.current.get(oe);
              if (ee) (ee(), u.current.delete(oe));
              if (re.type === "connected")
                ((re.client.onclose = void 0), ST(oe, re.config).catch(() => {}));
              C({
                name: oe,
                type: "failed",
                config: re.config,
                error: "Blocked by enterprise managed policy",
              });
            }
          }
          let J = fdo();
          if (J)
            y({
              key: "claudeai-mcp-cross-org-override",
              priority: "immediate",
              text: J.level === "error" ? J.message : `\u26A0 ${J.message}`,
              color: J.level === "error" ? "error" : "warning",
              timeoutMs: 20000,
            });
          let ne = [];
          if (Object.keys(W).length > 0) {
            let { servers: oe, suppressed: re } = await Ldt(W, $);
            if (P) return;
            ((W = oe), (ne = re));
          }
          if (
            (l((oe) =>
              f3t(oe.mcp.suppressedClaudeAiConnectors ?? [], ne)
                ? oe
                : {
                    ...oe,
                    mcp: {
                      ...oe.mcp,
                      suppressedClaudeAiConnectors: ne,
                    },
                  },
            ),
            Object.keys(W).length > 0)
          ) {
            l((re) => {
              let ee = new Set(re.mcp.clients.map((ae) => ae.name)),
                ce = Object.entries(W)
                  .filter(([ae]) => !ee.has(ae))
                  .map(([ae, de]) => ({
                    name: ae,
                    type: mk(ae) ? "disabled" : "pending",
                    config: de,
                  }));
              if (ce.length === 0) return re;
              return {
                ...re,
                mcp: {
                  ...re.mcp,
                  clients: [...re.mcp.clients, ...ce],
                },
              };
            });
            let oe = CB(W, (re, ee) => mk(ee));
            Dqe(x, oe).catch((re) => {
              au("useManageMcpConnections", `Failed to get claude.ai MCP resources: ${be(re)}`);
            });
          }
        }
        let V = {
            ...$,
            ...W,
          },
          Y = {
            enterprise: 0,
            global: 0,
            project: 0,
            user: 0,
            plugin: 0,
            agent: 0,
            claudeai: 0,
          },
          z = [];
        for (let [K, Z] of Object.entries(V))
          if (Z.scope === "enterprise") Y.enterprise++;
          else if (Z.scope === "user") Y.global++;
          else if (Z.scope === "project") Y.project++;
          else if (Z.scope === "local") Y.user++;
          else if (Z.scope === "dynamic") Y.plugin++;
          else if (Z.scope === "agent") Y.agent++;
          else if (Z.scope === "claudeai") Y.claudeai++;
        G("tengu_mcp_servers", {
          ...Y,
          ...false,
        });
      }
      return (
        O(),
        () => {
          P = true;
        }
      );
    }, [t, e, x, l, o, I, a, i]),
    kC.useEffect(() => {
      let P = u.current;
      return () => {
        for (let O of P.values()) O();
        if ((P.clear(), A.current !== null)) (A.current(), (A.current = null), v());
      };
    }, [v]));
  let k = kC.useCallback(
      async (P) => {
        let O = d.current.get(P);
        if (O) return O;
        let L = r.getState().mcp.clients.find((B) => B.name === P);
        if (!L) throw Error(`MCP server ${P} not found`);
        let M = u.current.get(P);
        if (M) (M(), u.current.delete(P));
        let N = (async () => {
          C({
            name: P,
            type: "pending",
            config: L.config,
          });
          try {
            let B = e?.[P] ?? (t ? void 0 : (await rJ(e)).servers[P]) ?? L.config;
            if (D4(P, B))
              throw (RKe(P), Error(`MCP server ${P} is blocked by enterprise managed policy`));
            if (L.type === "connected") L.client.onclose = void 0;
            let $ = await iJ(P, B);
            return (x($), $);
          } catch (B) {
            throw (C(L), B);
          }
        })();
        d.current.set(P, N);
        try {
          return await N;
        } finally {
          d.current.delete(P);
        }
      },
      [r, C, x, e, t],
    ),
    D = kC.useCallback(
      async (P) => {
        let O = r.getState().mcp.clients.find((M) => M.name === P);
        if (!O) throw Error(`MCP server ${P} not found`);
        if (O.type !== "disabled") {
          let M = u.current.get(P);
          if (M) (M(), u.current.delete(P));
          if ((iqe(P, false), g.current.delete(P), p.current.delete(P), O.type === "connected"))
            await ST(P, O.config);
          let N = {
            name: P,
            type: "disabled",
            config: O.config,
          };
          return (C(N), N);
        } else {
          let M = e?.[P] ?? (t ? void 0 : (await rJ(e)).servers[P]) ?? O.config;
          if (D4(P, M))
            throw (RKe(P), Error(`MCP server ${P} is blocked by enterprise managed policy`));
          (iqe(P, true),
            C({
              name: P,
              type: "pending",
              config: M,
            }));
          let N = await iJ(P, M);
          return (x(N), N.client);
        }
      },
      [r, C, x, e, t],
    );
  return {
    reconnectMcpServer: k,
    toggleMcpServer: D,
  };
}
function N1f(e) {
  switch (e) {
    case "http":
      return "HTTP";
    case "ws":
    case "ws-ide":
      return "WebSocket";
    default:
      return "SSE";
  }
}
var kC,
  SBo,
  UFl = () =>
    void Promise.resolve()
      .then(() => (bBo(), _Bo))
      .then(
        (e) => e.clearSkillIndexCache(),
        () => {},
      ),
  REt = 5,
  FFl = 1000,
  jFl = 30000,
  Nnr = 3;
