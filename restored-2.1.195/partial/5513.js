// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tSc
// matched 2.1.88 source: src/hooks/useRemoteSession.ts
// class=partial  jaccard=0.1288  score=0.2788  fileCov=0.1932
// note: low-confidence suggestion: src/hooks/useRemoteSession.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tSc = E(() => {
  RJt();
  Wen();
  je();
  Jt();
});
function Ydr({
  adapter: e,
  setMessages: t,
  setIsLoading: n,
  isLoading: r,
  requestDialog: o,
  toolPermissionContext: s,
  tools: i,
  permissionMode: a,
  onInit: l,
  setStreamingToolUses: c,
  setStreamMode: u,
  setInProgressToolUseIDs: d,
  recordApiMetricsEvent: p
}) {
  let f = !!e,
    m = mw.useRef(null),
    g = mw.useRef(!1),
    h = mw.useRef(!1),
    [y] = mw.useState(Bdr),
    b = r !== void 0,
    _ = mw.useRef(r ?? !1);
  if (b) _.current = r;
  let S = mw.useCallback(W => {
      if (W && b && _.current) return;
      _.current = W, n(W);
    }, [n, b]),
    A = mw.useRef(!1),
    v = mw.useCallback(() => {
      A.current = !0, S(!1);
    }, [S]),
    C = Ho(),
    x = mw.useCallback(W => C(V => V.remoteConnectionStatus === W ? V : {
      ...V,
      remoteConnectionStatus: W
    }), [C]),
    I = mw.useRef(new Set()),
    k = mw.useCallback(() => {
      let W = I.current.size;
      C(V => V.remoteBackgroundTaskCount === W ? V : {
        ...V,
        remoteBackgroundTaskCount: W
      });
    }, [C]),
    D = mw.useCallback(() => {
      I.current.clear(), k(), d?.({
        action: "clear"
      }), y.inProgressToolUses.clear();
    }, [k, d, y]),
    {
      dispatch: P,
      cancel: O
    } = Kdr({
      sessionKey: e,
      sendResponse: mw.useCallback((W, V) => {
        let Y = m.current;
        if (!Y) return;
        if (Y.respondToPermissionRequest(W, V), V.behavior === "allow") S(!0);else if (V.interrupt) v();
      }, [S, v]),
      requestDialog: o,
      toolRegistry: i,
      toolPermissionContext: s,
      canInterruptTurn: !e?.readOnly
    }),
    L = mw.useRef(a);
  L.current = a, mw.useEffect(() => {
    if (!e) return;
    let {
      label: W,
      createManager: V,
      onDisconnected: Y,
      cleanup: z
    } = e;
    g.current = !1, T(`[${W}] connecting`);
    function K(ne) {
      if (L.current !== void 0 && !e?.readOnly) ne.setPermissionMode?.(L.current);
    }
    let Z = V({
      onMessage: ne => {
        {
          let re = ENe(ne);
          if (re) jen({
            index: y,
            signal: re,
            surface: "thin_client",
            setMessages: t,
            setInProgressToolUseIDs: d
          });
        }
        if (Gdr(ne)) A.current = !1, S(!1);
        if (!A.current && (ne.type === "assistant" || ne.type === "stream_event" || ne.type === "system" && ne.subtype === "status" && ne.status === "requesting")) S(!0);
        if (ne.type === "system" && ne.subtype === "init") {
          if (g.current) return;
          g.current = !0, l?.(ne);
        }
        if (ne.type === "system") {
          if (ne.subtype === "task_started") {
            I.current.add(ne.task_id), k();
            return;
          }
          if (ne.subtype === "task_notification") {
            I.current.delete(ne.task_id), k();
            return;
          }
          if (ne.subtype === "task_progress" || ne.subtype === "task_updated" || ne.subtype === "notification") return;
        }
        if (d && ne.type === "user") {
          let re = ne.message?.content;
          if (Array.isArray(re)) {
            let ee = [];
            for (let ce of re) if (ce.type === "tool_result") ee.push(ce.tool_use_id);
            if (ee.length > 0) d({
              action: "remove",
              ids: ee
            }), Fen(y, ee), Fdr(y, ee, "thin_client", typeof ne.uuid === "string" ? ne.uuid : null);
          }
        }
        if (e.interceptMessage?.(ne, {
          setMessages: t
        }) === "consumed") return;
        let oe = ANe(ne, e.convertOpts ?? {
          convertToolResults: !0
        });
        if (oe.type === "message") {
          if (c?.(re => re.length > 0 ? [] : re), jdr(y, oe.message.uuid, "thin_client")) return;
          if (d && oe.message.type === "assistant") {
            let re = oe.message.message.content.filter(ee => ee.type === "tool_use").map(ee => ee.id);
            if (re.length > 0) d({
              action: "add",
              ids: re
            }), Udr(y, oe.message.uuid, re);
          }
          t(re => [...re, oe.message]);
        } else if (oe.type === "stream_event") nNe(oe.event, {
          onMessage: re => t(ee => [...ee, re]),
          onUpdateLength: () => {},
          onSetStreamMode: u ?? (() => {}),
          onStreamingToolUses: c ?? (() => {}),
          onApiMetrics: p
        });
      },
      onPermissionRequest: (ne, oe) => {
        if (T(`[${W}] permission request: ${ne.tool_name}`), S(!1), e.readOnly) return;
        P({
          type: "control_request",
          request_id: oe,
          request: ne
        });
      },
      onPermissionCancelled: (ne, oe) => {
        if (T(`[${W}] permission cancelled: ${ne}`), O(ne), !A.current) S(!0);
      },
      onConnected: () => {
        T(`[${W}] connected`), h.current = !0, x("connected"), K(Z);
      },
      onReconnecting: (ne, oe) => {
        if (T(`[${W}] dropped, reconnecting${ne != null ? ` (${ne}/${oe})` : ""}`), h.current = !1, x("reconnecting"), !e.replaysOnReconnect) S(!1);
        if (A.current = !1, D(), ne != null) t(re => [...re, cc(`Connection dropped \u2014 reconnecting (attempt ${ne}/${oe})...`, "warning")]);
      },
      onDisconnected: () => {
        T(`[${W}] disconnected`);
        let ne = h.current;
        h.current = !1, x("disconnected"), A.current = !1, S(!1), D(), Y(ne);
      },
      onError: ne => {
        T(`[${W}] error: ${ne.message}`);
      }
    });
    m.current = Z, Z.connect(), K(Z);
    let J = e.afterConnect?.(Z);
    return () => {
      T(`[${W}] cleanup`), J?.(), Z.disconnect(), z?.(), m.current = null;
    };
  }, [e, t, S, l, c, u, d, p, x, k, D, P, O, y]);
  let M = mw.useCallback(async (W, V) => {
      let Y = m.current;
      if (!Y) return t(K => [...K, cc("Not connected to the remote session \u2014 your message wasn't sent.", "warning")]), !1;
      A.current = !1, S(!0);
      let z = await Y.sendMessage(W, V);
      if (!z.ok) return t(K => [...K, cc(`Couldn't send your message \u2014 ${z.reason}. It wasn't delivered to the remote session.`, "warning")]), S(!1), !1;
      return !0;
    }, [S, t]),
    N = mw.useCallback(() => {
      if (!e?.readOnly) {
        m.current?.sendInterrupt(), v();
        return;
      }
      S(!1);
    }, [e, S, v]),
    B = mw.useCallback(() => {
      m.current?.disconnect(), m.current = null, h.current = !1;
    }, []),
    $ = e?.label,
    q = mw.useCallback(W => {
      let V = m.current;
      if (!V) return Promise.reject(Error("Remote session is not connected \u2014 try again in a moment"));
      if (!V.sendControlRequest) return Promise.reject(Error(`sendControlRequest not yet wired for ${$ ?? "this"} transport`));
      return V.sendControlRequest(W);
    }, [$]);
  return mw.useMemo(() => ({
    isRemoteMode: f,
    sendMessage: M,
    cancelRequest: N,
    disconnect: B,
    sendControlRequest: q
  }), [f, M, N, B, q]);
}
var mw;