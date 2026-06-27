// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kbc
// matched 2.1.88 source: src/hooks/useRemoteSession.ts
// class=modified  jaccard=0.3397  score=0.4531  fileCov=0.5759
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Kbc = E(() => {
  BKt();
  ((jTe = R(rt(), 1)),
    (ggm = {
      ...{
        [LQ.kind]: async (e, t, n) => {
          let r = LQ.payload().safeParse(t);
          if (!r.success)
            return {
              behavior: "cancelled",
            };
          let o = await e(LQ, r.data, n);
          return o === "cancelled"
            ? {
                behavior: "cancelled",
              }
            : {
                behavior: "completed",
                result: o,
              };
        },
      },
    }));
});
function Jbc({
  config: e,
  setMessages: t,
  setIsLoading: n,
  isLoading: r,
  onInit: o,
  requestDialog: s,
  toolPermissionContext: i,
  tools: a,
  onPermissionModeChange: l,
  setStreamingToolUses: c,
  setStreamMode: u,
  setInProgressToolUseIDs: d,
  recordApiMetricsEvent: p,
  onUpdateLength: f,
  onStreamingText: m,
  onTurnEnd: g,
  retraction: h,
}) {
  let y = !!e,
    b = wd.useRef(f);
  b.current = f;
  let _ = wd.useRef(m);
  _.current = m;
  let S = wd.useRef(g);
  S.current = g;
  let A = wd.useRef(l);
  A.current = l;
  let v = wd.useRef(r);
  v.current = r;
  let { columns: C } = br(),
    x = wd.useRef(C);
  x.current = C;
  let I = wd.useCallback(
      (Ue) => {
        if (Ue && v.current) return;
        ((v.current = Ue), n(Ue));
      },
      [n],
    ),
    k = wd.useRef(!1),
    D = wd.useRef(!1),
    P = wd.useCallback(() => {
      (_.current(() => null), c((Ue) => (Ue.length > 0 ? [] : Ue)));
    }, [c]),
    O = ks(),
    L = Ho(),
    M = wd.useCallback(
      (Ue) =>
        L((tt) =>
          tt.remoteConnectionStatus === Ue
            ? tt
            : {
                ...tt,
                remoteConnectionStatus: Ue,
              },
        ),
      [L],
    ),
    N = wd.useRef(new Set()),
    B = wd.useCallback(() => {
      let Ue = N.current.size;
      L((tt) =>
        tt.remoteBackgroundTaskCount === Ue
          ? tt
          : {
              ...tt,
              remoteBackgroundTaskCount: Ue,
            },
      );
    }, [L]),
    $ = wd.useRef(null),
    q = wd.useCallback(() => {
      if ($.current) ($.current(), ($.current = null));
    }, []),
    W = wd.useRef(0),
    V = wd.useCallback(() => {
      (W.current++, q());
    }, [q]),
    Y = wd.useRef(null),
    z = wd.useCallback(
      (Ue) => {
        if (Y.current === Ue) return;
        ((Y.current = Ue),
          L((tt) =>
            tt.remoteBootstrap === Ue
              ? tt
              : {
                  ...tt,
                  remoteBootstrap: Ue,
                },
          ));
      },
      [L],
    ),
    K = wd.useCallback(
      (Ue) => {
        let tt = Y.current;
        if ((z(Ue), (tt === null || !tt.terminal) && Ue.terminal)) {
          if (Ue.hasStructuredSteps) {
            if (!Ue.dismissed) t((bt) => [...bt, cc(Bbc(Ue), "info")]);
            if (!Ue.steps.some((bt) => bt.status === "failed")) xe("remote_bootstrap");
          }
        }
      },
      [z, t],
    ),
    Z = wd.useRef(!0),
    J = wd.useRef([]),
    ne = wd.useRef(!1),
    oe = wd.useRef(() => {}),
    re = wd.useCallback(
      (Ue = !0) => {
        let tt = J.current.length;
        if (((J.current = []), tt > 0)) {
          if (Ue) It("remote_bootstrap", "queue_dropped");
          t((bt) => [
            ...bt,
            cc(
              `${tt} queued message${tt === 1 ? "" : "s"} not sent \u2014 the session disconnected before the container was ready.`,
              "warning",
            ),
          ]);
        }
        if (Y.current !== null && Y.current.queuedCount !== 0)
          z({
            ...Y.current,
            queuedCount: 0,
          });
      },
      [t, z],
    ),
    ee = wd.useCallback(() => {
      let Ue = Y.current;
      if (Ue !== null && !Ue.terminal) K(rzo(Ue, Date.now()));
      if (!Z.current) ((D.current = !1), (k.current = !1), (Z.current = !0), oe.current());
    }, [K]),
    ce = wd.useCallback(() => {
      (V(), (k.current = !0), (D.current = !0), I(!1));
      let Ue = Y.current;
      if (Ue !== null && !Ue.terminal && !Ue.dismissed)
        z({
          ...Ue,
          dismissed: !0,
        });
    }, [V, I, z]),
    ae = wd.useRef(Xbc.randomUUID()),
    de = wd.useRef(!1),
    Ee = wd.useRef(null),
    me = wd.useCallback(() => {
      let Ue = Ee.current;
      if (Ue === null) return;
      if (((Ee.current = null), dEe().overrideMessage === Ue)) ngo(null);
    }, []),
    pe = wd.useRef(null),
    ge = wd.useRef(!1),
    he = wd.useRef(!1),
    ie = wd.useRef(new iHt(50)),
    { dispatch: le, cancel: He } = Kdr({
      sessionKey: e,
      sendResponse: wd.useCallback(
        (Ue, tt) => {
          let bt = pe.current;
          if (!bt) return;
          if ((bt.respondToPermissionRequest(Ue, tt), tt.behavior === "allow")) I(!0);
          else if (tt.interrupt) ce();
        },
        [I, ce],
      ),
      requestDialog: s,
      toolRegistry: a,
      toolPermissionContext: i,
      canInterruptTurn: !e?.viewerOnly,
    }),
    { dispatch: ye, cancel: ue } = zbc({
      sessionKey: e,
      sendResponse: wd.useCallback((Ue, tt) => {
        pe.current?.respondToUserDialogRequest(Ue, tt);
      }, []),
      requestDialog: s,
    });
  wd.useEffect(() => {
    if (!e) {
      if (ge.current)
        ((ge.current = !1),
          M("connecting"),
          I(!1),
          (he.current = !1),
          (de.current = !1),
          (k.current = !1),
          (D.current = !1),
          me(),
          (Z.current = !0),
          re(),
          z(null),
          N.current.clear(),
          B(),
          d({
            action: "clear",
          }),
          h.inProgressToolUses.clear(),
          P(),
          S.current());
      return;
    }
    if (
      ((ge.current = !0),
      (Z.current = Boolean(e.isAttachToExisting || e.viewerOnly)),
      re(),
      z(null),
      e.initialPromptUuid)
    )
      ie.current.add(e.initialPromptUuid);
    T(`[useRemoteSession] Initializing for session ${e.sessionId}`);
    let Ue = !1,
      tt = !1,
      bt = new X4o(e, {
        onMessage: (ct) => {
          let Je = [`type=${ct.type}`];
          if ("subtype" in ct) Je.push(`subtype=${ct.subtype}`);
          if (ct.type === "user") {
            let st = ct.message?.content;
            Je.push(`content=${Array.isArray(st) ? st.map((xt) => xt.type).join(",") : typeof st}`);
          }
          T(`[useRemoteSession] Received ${Je.join(" ")}`);
          {
            let st = ENe(ct);
            if (st)
              jen({
                index: h,
                signal: st,
                surface: "ccr",
                setMessages: t,
                setInProgressToolUseIDs: d,
              });
          }
          if ((q(), ct.type === "env_manager_log")) {
            let st = ANe(ct);
            if (!k.current && st.type === "env_log" && st.message !== "") {
              I(!0);
              let xt = dEe().overrideMessage;
              if (xt === null || xt === Ee.current) {
                let vt = Rs(st.message, Math.max(40, x.current - 8));
                (ngo(vt), (Ee.current = vt));
              }
            }
            {
              let xt = Date.now(),
                vt = Y.current ?? Ndr(xt),
                jt = $bc(vt, ct, st.type === "env_log" ? st.message : "", xt);
              if (jt !== Y.current) {
                if (
                  (K(jt),
                  jt.steps.some((en) => en.status === "failed") &&
                    !vt.steps.some((en) => en.status === "failed"))
                )
                  (Le("remote_bootstrap", "step_failed"),
                    re(!1),
                    (Z.current = !0),
                    (D.current = !1),
                    (k.current = !1),
                    I(!1));
                if (jt.terminal) (me(), ee());
              }
            }
            return;
          }
          if ((me(), ct.type !== "user")) ee();
          if (
            !k.current &&
            (ct.type === "assistant" ||
              ct.type === "stream_event" ||
              (ct.type === "system" && ct.subtype === "status" && ct.status === "requesting"))
          )
            I(!0);
          if (ct.type === "user" && ct.uuid && ie.current.has(ct.uuid)) {
            let st = ct.uuid;
            if (st === e.initialPromptUuid) {
              let xt = ANe(ct, {
                convertUserTextMessages: !0,
              });
              t((vt) =>
                xt.type !== "message" || vt.some((jt) => jt.uuid === st) ? vt : [...vt, xt.message],
              );
              return;
            }
            (t((xt) => {
              let vt = xt.findLastIndex((en) => en.uuid === st);
              if (vt === -1 || vt === xt.length - 1) return xt;
              let jt = xt[vt];
              return xt.slice(0, vt).concat(xt.slice(vt + 1), jt);
            }),
              T(`[useRemoteSession] Reconciled echoed user message ${st} to canonical position`));
            return;
          }
          if (ct.type === "system" && ct.subtype === "init") {
            if (
              (T(
                `[useRemoteSession] Init received with ${ct.slash_commands.length} slash commands`,
              ),
              ct.cwd)
            )
              if (Fc(ct.cwd))
                T("[useRemoteSession] init reported a UNC cwd \u2014 not adopting", {
                  level: "warn",
                });
              else see(ct.cwd);
            o(ct);
          }
          if (ct.type === "system" && "permissionMode" in ct && ct.permissionMode)
            A.current(ct.permissionMode);
          if (ct.type === "system") {
            if (ct.subtype === "task_started") {
              (N.current.add(ct.task_id), B());
              return;
            }
            if (ct.subtype === "task_notification") {
              (N.current.delete(ct.task_id), B());
              return;
            }
            if (
              ct.subtype === "task_progress" ||
              ct.subtype === "task_updated" ||
              ct.subtype === "notification"
            )
              return;
            if (ct.subtype === "status") {
              let st = de.current;
              if (((de.current = ct.status === "compacting"), st && de.current)) return;
            }
            if (ct.subtype === "compact_boundary") de.current = !1;
          }
          if (Gdr(ct))
            ((de.current = !1), (k.current = !1), (D.current = !1), I(!1), P(), S.current());
          if (ct.type === "user") {
            let st = ct.message?.content;
            if (Array.isArray(st)) {
              let xt = [];
              for (let vt of st) if (vt.type === "tool_result") xt.push(vt.tool_use_id);
              if (xt.length > 0)
                (d({
                  action: "remove",
                  ids: xt,
                }),
                  Fen(h, xt),
                  Fdr(h, xt, "ccr", typeof ct.uuid === "string" ? ct.uuid : null));
            }
          }
          let gt = ANe(
            ct,
            e.viewerOnly
              ? {
                  convertToolResults: !0,
                  convertUserTextMessages: !0,
                }
              : {
                  convertUserTextMessages: !0,
                },
          );
          if (gt.type === "message") {
            if ((c((xt) => (xt.length > 0 ? [] : xt)), gt.message.type === "assistant"))
              _.current(() => null);
            if (jdr(h, gt.message.uuid, "ccr")) return;
            if (gt.message.type === "assistant") {
              let xt = gt.message.message.content
                .filter((vt) => vt.type === "tool_use")
                .map((vt) => vt.id);
              if (xt.length > 0)
                (d({
                  action: "add",
                  ids: xt,
                }),
                  Udr(h, gt.message.uuid, xt));
            }
            let st = gt.message.uuid;
            t((xt) => (st && xt.some((vt) => vt.uuid === st) ? xt : [...xt, gt.message]));
          } else if (gt.type === "stream_event") {
            if (D.current) return;
            nNe(gt.event, {
              onMessage: (st) => t((xt) => [...xt, st]),
              onUpdateLength: (st) => b.current(st),
              onSetStreamMode: u,
              onStreamingToolUses: c,
              onApiMetrics: p,
              onStreamingText: (st) => _.current(st),
            });
          }
        },
        onPermissionRequest: (ct, Je) => {
          if (
            (T(`[useRemoteSession] Permission request for tool: ${ct.tool_name}`),
            I(!1),
            e.viewerOnly)
          )
            return;
          le({
            type: "control_request",
            request_id: Je,
            request: ct,
          });
        },
        onPermissionCancelled: (ct, Je) => {
          if ((T(`[useRemoteSession] Permission request cancelled: ${ct}`), He(ct), !k.current))
            I(!0);
        },
        onUserDialogRequest: (ct, Je) => {
          if ((T(`[useRemoteSession] User dialog request: ${ct.dialog_kind}`), I(!1), e.viewerOnly))
            return;
          ye({
            type: "control_request",
            request_id: Je,
            request: ct,
          });
        },
        onUserDialogCancelled: (ct) => {
          (T(`[useRemoteSession] User dialog request cancelled: ${ct}`), ue(ct));
        },
        onConnected: () => {
          (T("[useRemoteSession] Connected"), M("connected"));
        },
        onReconnecting: () => {
          (T("[useRemoteSession] Reconnecting"),
            M("reconnecting"),
            (k.current = !1),
            (D.current = !1),
            N.current.clear(),
            B(),
            d({
              action: "clear",
            }),
            h.inProgressToolUses.clear());
        },
        onCatchUpTruncated: () => {
          if (
            (T("[useRemoteSession] Catch-up truncated \u2014 transcript gap"),
            t((ct) => [
              ...ct,
              cc(
                "Some earlier messages from this session could not be loaded after reconnecting.",
                "warning",
              ),
            ]),
            Ue)
          )
            tt = !0;
          else {
            Ue = !0;
            let ct = e.sessionId;
            (async () => {
              try {
                do {
                  tt = !1;
                  try {
                    if ((await Je()) === "stale") return;
                  } catch {}
                } while (tt);
              } finally {
                Ue = !1;
              }
            })();
            async function Je() {
              let gt = await qdr(ct);
              if (pe.current !== bt) return "stale";
              let st = await Wbc(gt, void 0, {
                  reportFeatureHealth: !1,
                }),
                xt = 0,
                vt = 0;
              while (st && vt < Ybc) {
                if (pe.current !== bt) return "stale";
                (vt++,
                  (xt += Fbc({
                    index: h,
                    events: st.events,
                    surface: "truncation_harvest",
                    setMessages: t,
                    setInProgressToolUseIDs: d,
                  })),
                  (st = vt < Ybc && st.hasMore && st.firstId ? await Vdr(gt, st.firstId) : null));
              }
              if (pe.current !== bt) return "stale";
              return (
                G("tengu_refusal_retraction_truncation_harvest", {
                  signal_count: xt,
                  page_count: vt,
                }),
                "done"
              );
            }
          }
        },
        onDisconnected: () => {
          (T("[useRemoteSession] Disconnected"),
            V(),
            M("disconnected"),
            (k.current = !1),
            (D.current = !1),
            I(!1),
            me(),
            N.current.clear(),
            B(),
            d({
              action: "clear",
            }),
            h.inProgressToolUses.clear(),
            P(),
            S.current());
        },
        onError: (ct) => {
          T(`[useRemoteSession] Error: ${ct.message}`);
        },
      });
    ((pe.current = bt), bt.connect());
    let Ke = ae.current,
      Et = null;
    return (
      tNt(e.sessionId, Ke).then((ct) => {
        if (pe.current !== bt || ct == null) return;
        let Je = ct * 1000,
          gt = () => {
            try {
              tNt(e.sessionId, Ke);
            } finally {
              Et = O.setTimeout(gt, Je);
            }
          };
        Et = O.setTimeout(gt, Je);
      }),
      e.preflightCheck?.catch((ct) => {
        if (pe.current !== bt) return;
        (t((Je) => [...Je, cc(be(ct), "warning")]),
          bt.disconnect(),
          (pe.current = null),
          V(),
          M("disconnected"),
          I(!1),
          (k.current = !1),
          (D.current = !1),
          me(),
          N.current.clear(),
          B(),
          d({
            action: "clear",
          }),
          h.inProgressToolUses.clear(),
          P(),
          S.current());
      }),
      () => {
        if ((T("[useRemoteSession] Cleanup - disconnecting"), V(), Et)) (Et(), (Et = null));
        (tNt(e.sessionId, Ke, !0), Azr(e.sessionId), me(), bt.disconnect(), (pe.current = null));
      }
    );
  }, [e, t, I, o, c, u, d, M, B, p, O, le, He, ye, ue, q, V, P, me, h]);
  let we = wd.useCallback(
      (Ue) => {
        if (he.current || !e || e.initialPromptUuid || e.viewerOnly || e.isAttachToExisting) return;
        he.current = !0;
        let tt = e.sessionId,
          bt = typeof Ue === "string" ? Ue : zl(Ue, " ");
        if (bt)
          vse(bt, new AbortController().signal).then((Ke) => {
            Ezr(tt, Ke ?? Rs(bt, 75));
          });
      },
      [e],
    ),
    Ce = wd.useCallback(
      async (Ue, tt) => {
        let bt = pe.current;
        if (!bt) return (T("[useRemoteSession] Cannot send - no manager"), !1);
        q();
        let Ke = W.current;
        if (((k.current = !1), I(!0), tt?.uuid)) ie.current.add(tt.uuid);
        let Et = await bt.sendMessage(Ue, tt);
        if (!Et.ok)
          return (
            t((ct) => [
              ...ct,
              cc(
                `Couldn't send your message \u2014 ${Et.reason}. It wasn't delivered to the cloud session.`,
                "warning",
              ),
            ]),
            I(!1),
            !1
          );
        if ((we(Ue), !e?.viewerOnly && W.current === Ke)) {
          let ct = de.current ? ygm : hgm;
          $.current = O.setTimeout(() => {
            T("[useRemoteSession] Response timeout - attempting reconnect");
            let Je = cc(
              "Cloud session may be unresponsive. Attempting to reconnect\u2026",
              "warning",
            );
            (t((gt) => [...gt, Je]), bt.reconnect());
          }, ct);
        }
        return !0;
      },
      [e, I, t, O, q, we],
    ),
    Ie = wd.useCallback(async () => {
      if (ne.current) return;
      ne.current = !0;
      try {
        while (J.current.length > 0) {
          let Ue = J.current.shift();
          if (Ue === void 0) break;
          let tt = Y.current;
          if (tt !== null && tt.queuedCount !== J.current.length)
            z({
              ...tt,
              queuedCount: J.current.length,
            });
          await Ce(Ue.content, Ue.opts);
        }
      } finally {
        ne.current = !1;
      }
    }, [Ce, z]);
  wd.useEffect(() => {
    oe.current = () => {
      Ie().catch((Ue) => ke(Ue));
    };
  }, [Ie]);
  let Ve = wd.useCallback(
      async (Ue, tt) => {
        if (!pe.current) return (T("[useRemoteSession] Cannot send - no manager"), !1);
        if (!e?.viewerOnly && (!Z.current || ne.current || J.current.length > 0)) {
          if (tt?.uuid) ie.current.add(tt.uuid);
          ((k.current = !1),
            I(!0),
            J.current.push({
              content: Ue,
              opts: tt,
            }));
          let Et = Y.current ?? Ndr(Date.now());
          return (
            z({
              ...Et,
              queuedCount: J.current.length,
            }),
            we(Ue),
            T(`[useRemoteSession] Queued message during bootstrap (${J.current.length} queued)`),
            !0
          );
        }
        return Ce(Ue, tt);
      },
      [e, I, z, we, Ce],
    ),
    Ze = wd.useCallback(() => {
      if ((me(), !e?.viewerOnly)) {
        (pe.current?.cancelSession(), ce());
        return;
      }
      (V(), I(!1));
    }, [e, I, V, ce, me]),
    Be = wd.useCallback((Ue) => {
      let tt = pe.current;
      if (!tt)
        return Promise.reject(Error("[useRemoteSession] Cannot send control request: no manager"));
      return tt.sendControlRequest(Ue);
    }, []),
    Me = wd.useCallback(() => {
      (V(), pe.current?.disconnect(), (pe.current = null));
    }, [V]);
  return wd.useMemo(
    () => ({
      isRemoteMode: y,
      sendMessage: Ve,
      cancelRequest: Ze,
      disconnect: Me,
      sendControlRequest: Be,
    }),
    [y, Ve, Ze, Me, Be],
  );
}
var Xbc,
  wd,
  hgm = 60000,
  ygm = 180000,
  Ybc = 3;
