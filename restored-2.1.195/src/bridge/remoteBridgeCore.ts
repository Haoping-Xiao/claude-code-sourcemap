// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B8o
// matched 2.1.88 source: src/bridge/remoteBridgeCore.ts
// class=modified  jaccard=0.4224  score=0.5275  fileCov=0.6795
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function oauthHeaders(e) {
  return {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": Aum,
    "anthropic-client-platform": _x(),
    "User-Agent": dy(),
  };
}
async function initEnvLessBridgeCore(e) {
  let {
      baseUrl: t,
      orgUUID: n,
      title: r,
      getAccessToken: o,
      onAuth401: s,
      onReadFreshOAuthToken: i,
      onProactiveRefresh: a,
      toSDKMessages: l,
      initialHistoryCap: c,
      initialMessages: u,
      onInboundMessage: d,
      onUserMessage: p,
      onSessionEstablished: f,
      onBeforePushTriggeringState: m,
      onPermissionResponse: g,
      onInterrupt: h,
      getInitializeState: y,
      onDialogKindsDeclared: b,
      onSetModel: _,
      onSetMaxThinkingTokens: S,
      onSetPermissionMode: A,
      onRenameSession: v,
      onSetColor: C,
      onFileSuggestions: x,
      onReadFile: I,
      onGetContextUsage: k,
      onGetUsage: D,
      onMcpAuthenticate: P,
      onMcpOauthCallbackUrl: O,
      onMcpReconnect: L,
      onMcpStatus: M,
      onStateChange: N,
      outboundOnly: B,
      tags: $,
      gitRepoUrl: q = null,
      branch: W = "",
      onTransportPersistenceReady: V,
      onTransportPersistenceTeardown: Y,
      reattachSessionId: z,
      reattachSequenceNum: K,
      livePreviewPorts: Z,
    } = e,
    J = !!z,
    ne = await y3o(),
    oe = o();
  if (!oe)
    return (
      T("[remote-bridge] No OAuth token"),
      Le("bridge_connect", "bridge_connect_no_token"),
      null
    );
  let re = () => o() ?? oe,
    { getOriginalCwd: ee } = await Promise.resolve().then(() => (ft(), twe)),
    { getMainLoopModel: ce } = await Promise.resolve().then(() => (Ao(), F2r));
  async function ae() {
    let fe = await withRetry(
      () =>
        O8o(
          t,
          re(),
          r,
          ne.http_timeout_ms,
          $,
          q
            ? {
                gitRepoUrl: q,
                branch: W,
              }
            : void 0,
          ee(),
          ce(),
        ),
      "createCodeSession",
      ne,
    );
    if (fe)
      (T(`[remote-bridge] Created session ${fe}`), In("info", "bridge_repl_v2_session_created"));
    return fe;
  }
  let de;
  if (z)
    ((de = z),
      T(`[remote-bridge] Reattaching to session ${de}`),
      In("info", "bridge_repl_v2_session_reattached"),
      await withRetry(() => Hum(de, t, re(), n, ne.http_timeout_ms), "unarchiveSession", ne));
  else {
    let fe = await ae();
    if (!fe)
      return (
        N?.("failed", "Session creation failed \u2014 see debug log"),
        bJ("v2_session_create_failed", void 0, true),
        Le("bridge_connect", "bridge_connect_session_create_failed"),
        null
      );
    de = fe;
  }
  let Ee = await withRetry(
    () => gen(de, t, re(), ne.http_timeout_ms),
    "fetchRemoteCredentials",
    ne,
  );
  if (J && Ee === null) {
    (T(`[remote-bridge] Reattach to ${de} failed; falling back to fresh session`),
      In("info", "bridge_repl_v2_reattach_fallback"));
    let fe = await ae();
    if (fe)
      ((de = fe),
        (J = false),
        (Ee = await withRetry(
          () => gen(de, t, re(), ne.http_timeout_ms),
          "fetchRemoteCredentials (post-fallback)",
          ne,
        )));
  }
  if (!Ee || HTt(Ee)) {
    let fe = Ee ? U8o(Ee) : "Remote credentials fetch failed \u2014 see debug log";
    if (
      (T(`[remote-bridge] Creds failed; onStateChange ${N ? "set" : "UNSET"}, msg="${fe}"`),
      N?.("failed", fe),
      bJ(Ee ? `v2_remote_creds_${Ee.reason}` : "v2_remote_creds_failed", void 0, true),
      Le("bridge_connect", "bridge_connect_creds_failed"),
      !J)
    )
      archiveSession(de, t, re(), n, ne.http_timeout_ms);
    return null;
  }
  (T(`[remote-bridge] Fetched bridge credentials (expires_in=${Ee.expires_in}s)`), f?.(de));
  let me = tQt(Ee.api_base_url, de);
  T(`[remote-bridge] v2 session URL: ${me}`);
  let pe;
  try {
    pe = await $8o({
      sessionUrl: me,
      ingressToken: Ee.worker_jwt,
      sessionId: de,
      epoch: Ee.worker_epoch,
      heartbeatIntervalMs: ne.heartbeat_interval_ms,
      heartbeatJitterFraction: ne.heartbeat_jitter_fraction,
      initialSequenceNum: J ? K : void 0,
      getAuthToken: () => Ee.worker_jwt,
      outboundOnly: B,
    });
  } catch (fe) {
    if (
      (T(`[remote-bridge] v2 transport setup failed: ${be(fe)}`, {
        level: "error",
      }),
      N?.("failed", `Transport setup failed: ${be(fe)}`),
      bJ("v2_transport_setup_failed", void 0, true),
      Le("bridge_connect", "bridge_connect_transport_failed"),
      !J)
    )
      archiveSession(de, t, re(), n, ne.http_timeout_ms);
    return null;
  }
  (T(`[remote-bridge] v2 transport created (epoch=${Ee.worker_epoch})`), N?.("ready"));
  let ge = null,
    he = new iHt(ne.uuid_dedup_buffer_size),
    ie = new Set();
  if (u) for (let fe of u) (ie.add(fe.uuid), he.add(fe.uuid));
  let le = new iHt(ne.uuid_dedup_buffer_size),
    He = new k8o(),
    ye = J,
    ue = false,
    we,
    Ce = false,
    Ie = 0,
    Ve = 3,
    Ze = J,
    Be = (fe, Te) => {
      if (m && (fe === "requires_action" || fe === "idle")) m();
      if ((pe.reportState(fe, Te), fe === "requires_action" && Te))
        ((Ze = true),
          pe.reportMetadata({
            pending_action: Te,
          }));
      else if (Ze)
        ((Ze = false),
          pe.reportMetadata({
            pending_action: null,
          }));
    },
    Me,
    Ue,
    tt;
  if (q)
    (async () => {
      let { parseGitRemote: fe, parseGitHubRepository: Te } = await Promise.resolve().then(
          () => (BR(), ARt),
        ),
        {
          addWatchedRepo: Re,
          removeWatchedRepo: Ne,
          getCachedBranchForRepo: it,
          onRepoBranchChange: Tt,
        } = await Promise.resolve().then(() => (gM(), $Ts)),
        un = fe(q),
        ze = un ? `${un.owner}/${un.name}` : Te(q);
      if (!ze) return;
      let Mt = ee();
      if ((await Re(Mt), ue)) {
        Ne(Mt);
        return;
      }
      let Qt,
        Er = async () => {
          if (ue) return;
          let ln = ee();
          if (ln !== Mt) {
            if ((Ne(Mt), (Mt = ln), await Re(ln), ue)) {
              Ne(ln);
              return;
            }
          }
          let pn = await it(ln);
          if (pn === void 0 || pn === Qt) return;
          ((Qt = pn),
            pe.reportMetadata({
              current_branches: {
                [ze]: pn,
              },
            }));
        };
      ((Ue = () => {
        Qt = void 0;
      }),
        (tt = () => void Er()));
      let pt = Tt(tt);
      ((Me = () => {
        (pt(), Ne(Mt));
      }),
        Er());
    })().catch((fe) => T(`[remote-bridge] current_branches setup failed: ${be(fe)}`));
  let bt = new Map(),
    Ke = !p,
    Et = "initial",
    ct;
  function Je(fe) {
    if (ue) return;
    (G("tengu_bridge_repl_connect_timeout", {
      v2: true,
      elapsed_ms: ne.connect_timeout_ms,
      cause: $e(fe),
    }),
      Le("bridge_connect", "bridge_connect_timeout"));
  }
  let gt = NSn({
    refreshBufferMs: ne.token_refresh_buffer_ms,
    getAccessToken: async () => {
      let fe = o();
      if (a) await a();
      return o() ?? fe;
    },
    onRefresh: (fe, Te) => {
      (async () => {
        if (Ce || ue) {
          T("[remote-bridge] Recovery already in flight, skipping proactive refresh");
          return;
        }
        Ce = true;
        try {
          let Re = await withRetry(
            () => gen(fe, t, Te, ne.http_timeout_ms),
            "fetchRemoteCredentials (proactive)",
            ne,
          );
          if (!Re || ue) return;
          if (HTt(Re)) {
            if (!ue) N?.("failed", U8o(Re));
            return;
          }
          (await xt(Re, "proactive_refresh"),
            T("[remote-bridge] Transport rebuilt (proactive refresh)"));
        } catch (Re) {
          if (
            (T(`[remote-bridge] Proactive refresh rebuild failed: ${be(Re)}`, {
              level: "error",
            }),
            In("error", "bridge_repl_v2_proactive_refresh_failed"),
            !ue)
          )
            N?.("failed", `Refresh failed: ${be(Re)}`);
        } finally {
          Ce = false;
        }
      })();
    },
    label: "remote",
  });
  gt.scheduleFromExpiresIn(de, Ee.expires_in);
  function st() {
    (pe.setOnConnect(() => {
      if (
        (clearTimeout(ct),
        (Ie = 0),
        T("[remote-bridge] v2 transport connected"),
        In("info", "bridge_repl_v2_transport_connected"),
        V)
      ) {
        let fe = pe.getInternalEventWriter?.(),
          Te = pe.getInternalEventReaders?.();
        if (fe && Te) V(fe, Te);
      }
      if (
        (G("tengu_bridge_repl_ws_connected", {
          v2: true,
          cause: $e(Et),
        }),
        !ye && u && u.length > 0)
      ) {
        ye = true;
        let fe = pe;
        en(u)
          .catch((Te) => T(`[remote-bridge] flushHistory failed: ${Te}`))
          .finally(() => {
            if (pe !== fe || ue || Ce) return;
            (jt(), N?.("connected"));
          });
      } else if (!He.active) N?.("connected");
    }),
      pe.setOnData((fe) => {
        gJl(
          fe,
          he,
          le,
          d,
          g
            ? (Te) => {
                if (g(Te)) Be("running");
              }
            : void 0,
          (Te) =>
            hJl(Te, {
              transport: pe,
              sessionId: de,
              onInterrupt: h,
              getInitializeState: y,
              onDialogKindsDeclared: b,
              onSetModel: _,
              onSetMaxThinkingTokens: S,
              onSetPermissionMode: A,
              onRenameSession: v,
              onSetColor: C,
              onFileSuggestions: x,
              onReadFile: I,
              onGetContextUsage: k,
              onGetUsage: D,
              onMcpAuthenticate: P,
              onMcpOauthCallbackUrl: O,
              onMcpReconnect: L,
              onMcpStatus: M,
              outboundOnly: B,
            }),
        );
      }),
      pe.setOnClose((fe) => {
        if ((clearTimeout(ct), ue)) return;
        if (
          (T(`[remote-bridge] v2 transport closed (code=${fe})`),
          G("tengu_bridge_repl_ws_closed", {
            code: fe,
            v2: true,
          }),
          (fe === 401 || fe === 4091) && !Ce)
        ) {
          if (Ie >= Ve) {
            (T(`[remote-bridge] ${fe} recovery exhausted after ${Ie} attempts`, {
              level: "error",
            }),
              N?.("failed", `Transport recovery exhausted (code ${fe})`));
            return;
          }
          (Ie++, vt(fe));
          return;
        }
        N?.("failed", `Transport closed: ${vgc(fe)}`);
      }));
  }
  async function xt(fe, Te) {
    ((Et = Te), (Ze = false), Ue?.(), Y?.(), He.start());
    try {
      let Re = pe.getLastSequenceNum();
      if (
        (pe.close(),
        (pe = await $8o({
          sessionUrl: tQt(fe.api_base_url, de),
          ingressToken: fe.worker_jwt,
          sessionId: de,
          epoch: fe.worker_epoch,
          heartbeatIntervalMs: ne.heartbeat_interval_ms,
          heartbeatJitterFraction: ne.heartbeat_jitter_fraction,
          initialSequenceNum: Re,
          getAuthToken: () => fe.worker_jwt,
          outboundOnly: B,
        })),
        ue)
      ) {
        pe.close();
        return;
      }
      (st(),
        pe.connect(),
        tt?.(),
        (ct = setTimeout(Je, ne.connect_timeout_ms, Et)),
        gt.scheduleFromExpiresIn(de, fe.expires_in),
        ge?.updateAccessToken(fe.worker_jwt),
        jt());
    } finally {
      He.drop();
    }
  }
  async function vt(fe) {
    if (Ce) return;
    ((Ce = true),
      He.start(),
      N?.(
        "reconnecting",
        fe === 401 ? "JWT expired \u2014 refreshing" : "CCR init failed \u2014 retrying",
      ),
      T(`[remote-bridge] ${fe} on transport \u2014 attempting credential refresh + rebuild`));
    try {
      let Te = o(),
        Re = true;
      if (fe === 401 && s) Re = await s(Te ?? "");
      let Ne = o() ?? Te;
      if (!Ne || ue) {
        if (!ue) N?.("failed", "JWT refresh failed: no OAuth token");
        return;
      }
      let it = await withRetry(
        () => gen(de, t, Ne, ne.http_timeout_ms),
        "fetchRemoteCredentials (recovery)",
        ne,
      );
      if (!it && !ue && fe === 401 && s && !Re) {
        let Tt = false;
        for (let un = 1; un <= ne.oauth_retry_max_attempts && !ue; un++) {
          N?.(
            "reconnecting",
            `OAuth refresh failed \u2014 waiting for a fresh login (${un}/${ne.oauth_retry_max_attempts})`,
          );
          let ze = ne.oauth_retry_base_delay_ms * 2 ** (un - 1),
            Mt = ze * ne.init_retry_jitter_fraction * (2 * Math.random() - 1);
          if ((await Nn(ze + Mt), ue)) return;
          let Qt = i ? await i() : (await s(Te ?? "")) ? o() : void 0;
          if (ue) return;
          let Er = Qt !== void 0 && Qt !== (Te ?? "") ? Qt : void 0;
          if (!Er) continue;
          ((Tt = true),
            (it = await withRetry(
              () => gen(de, t, Er, ne.http_timeout_ms),
              "fetchRemoteCredentials (recovery re-poll)",
              ne,
            )));
          break;
        }
        if (!it && !Tt) {
          if (!ue)
            N?.(
              "failed",
              "OAuth token refresh failed \u2014 re-authenticate, then re-enable Remote Control",
            );
          return;
        }
      }
      if (!it || ue) {
        if (!ue) N?.("failed", `JWT refresh failed after ${fe}`);
        return;
      }
      if (HTt(it)) {
        if (!ue) N?.("failed", U8o(it));
        return;
      }
      ((ye = J),
        await xt(it, fe === 401 ? "auth_401_recovery" : "init_4091_recovery"),
        T(`[remote-bridge] Transport rebuilt after ${fe}`));
    } catch (Te) {
      if (
        (T(`[remote-bridge] ${fe} recovery failed: ${be(Te)}`, {
          level: "error",
        }),
        In(
          "error",
          fe === 401 ? "bridge_repl_v2_jwt_refresh_failed" : "bridge_repl_v2_4091_recovery_failed",
        ),
        !ue)
      )
        N?.("failed", `Transport recovery failed (${fe}): ${be(Te)}`);
    } finally {
      ((Ce = false), He.drop());
    }
  }
  if ((st(), !J && u && u.length > 0)) He.start();
  (pe.connect(), (ct = setTimeout(Je, ne.connect_timeout_ms, Et)));
  function jt() {
    let fe = He.end();
    if (fe.length === 0) return;
    for (let Re of fe) he.add(Re.uuid);
    let Te = l(fe).map((Re) => ({
      ...Re,
      session_id: de,
    }));
    if (fe.some((Re) => Re.type === "user")) Be("running");
    (T(`[remote-bridge] Drained ${fe.length} queued message(s) after flush`), pe.writeBatch(Te));
  }
  async function en(fe) {
    let Te = fe.filter($4o),
      Re = c > 0 && Te.length > c ? Te.slice(-c) : Te;
    if (Re.length < Te.length)
      T(`[remote-bridge] Capped initial flush: ${Te.length} -> ${Re.length} (cap=${c})`);
    let Ne = l(Re).map((it) => ({
      ...it,
      session_id: de,
      historical: true,
    }));
    if (Ne.length === 0) return;
    if (Te.at(-1)?.type === "user") Be("running");
    (T(`[remote-bridge] Flushing ${Ne.length} history events`), await pe.writeBatch(Ne));
  }
  let Dn = false,
    nn;
  function Ln(fe) {
    if (fe?.skipArchive) Dn = true;
    if (fe?.reason) nn = fe.reason;
    if (we) return we;
    return ((ue = true), (we = Hn()), we);
  }
  async function Hn() {
    if (
      (Me?.(),
      Y?.(),
      ge?.stop(),
      gt.cancelAll(),
      clearTimeout(ct),
      He.drop(),
      Be("idle"),
      nn !== void 0)
    )
      pe.write(yJl(de, nn));
    if ((pe.write(O4o(de)), Dn)) {
      if (nn !== void 0) await Promise.race([pe.flush(), Nn(300)]);
      (pe.close(),
        T(`[remote-bridge] Teardown complete (skipArchive): session=${de}`),
        In("info", "bridge_repl_v2_teardown"),
        G("tengu_bridge_repl_teardown", {
          v2: true,
          archive_status: $e("skipped_teleport"),
          archive_ok: false,
        }),
        Mr());
      return;
    }
    let fe = ne.teardown_archive_timeout_ms,
      Te = Date.now(),
      Re = o(),
      Ne = await archiveSession(de, t, Re, n, fe),
      it = fe - (Date.now() - Te);
    if (Ne === 401 && s && it >= 200)
      try {
        (await Promise.race([s(Re ?? ""), Nn(it)]),
          (Re = o()),
          (Ne = await archiveSession(de, t, Re, n, Math.max(1, fe - (Date.now() - Te)))));
      } catch (un) {
        T(`[remote-bridge] Teardown 401 retry threw: ${be(un)}`, {
          level: "error",
        });
      }
    if (nn !== void 0) await Promise.race([pe.flush(), Nn(300)]);
    pe.close();
    let Tt =
      Ne === "no_token"
        ? "skipped_no_token"
        : Ne === "timeout" || Ne === "error"
          ? "network_error"
          : Ne >= 500
            ? "server_5xx"
            : Ne >= 400
              ? "server_4xx"
              : "ok";
    (T(`[remote-bridge] Torn down (archive=${Ne})`),
      In("info", "bridge_repl_v2_teardown"),
      G("tengu_bridge_repl_teardown", {
        v2: true,
        archive_status: $e(Tt),
        archive_ok: typeof Ne === "number" && Ne < 400,
        archive_http_status: typeof Ne === "number" ? Ne : void 0,
        archive_timeout: Ne === "timeout",
        archive_no_token: Ne === "no_token",
      }),
      Mr());
  }
  (G("tengu_bridge_repl_started", {
    has_initial_messages: !!(u && u.length > 0),
    v2: true,
    expires_in_s: Ee.expires_in,
    inProtectedNamespace: $V(),
    ...yHt(),
  }),
    xe("bridge_connect"));
  let kr = {
      bridgeSessionId: de,
      outboundOnly: B ?? false,
      environmentId: "",
      sessionIngressUrl: Ee.api_base_url,
      getLastSequenceNum: () => pe.getLastSequenceNum(),
      flush: () => pe.flush(),
      writeMessages(fe) {
        let Te = fe.filter((Ne) => $4o(Ne) && !ie.has(Ne.uuid) && !he.has(Ne.uuid));
        if (Te.length === 0) return;
        if (!Ke)
          for (let Ne of Te) {
            let it = mJl(Ne);
            if (it !== void 0 && p?.(it, de)) {
              Ke = true;
              break;
            }
          }
        if (He.enqueue(...Te)) {
          T(`[remote-bridge] Queued ${Te.length} message(s) during flush`);
          return;
        }
        for (let Ne of Te) he.add(Ne.uuid);
        let Re = l(Te).map((Ne) => ({
          ...Ne,
          session_id: de,
        }));
        if (Te.some((Ne) => Ne.type === "user")) Be("running");
        (T(`[remote-bridge] Sending ${Te.length} message(s)`), pe.writeBatch(Re));
      },
      reportMetadata(fe) {
        pe.reportMetadata(fe);
      },
      refreshGitBranch() {
        tt?.();
      },
      writeSdkMessages(fe) {
        let Te = fe.filter((Ne) => !Ne.uuid || !he.has(Ne.uuid));
        if (Te.length === 0) return;
        for (let Ne of Te) if (Ne.uuid) he.add(Ne.uuid);
        let Re = Te.map((Ne) => ({
          ...Ne,
          session_id: de,
        }));
        pe.writeBatch(Re);
      },
      sendControlRequest(fe) {
        if (Ce) {
          T(`[remote-bridge] Dropping control_request during 401 recovery: ${fe.request_id}`);
          return;
        }
        let Te = {
            ...fe,
            session_id: de,
          },
          Re = fe.request;
        if (Re.subtype === "can_use_tool") {
          let Ne;
          if (at("tengu_bridge_requires_action_details", false)) {
            let it = Re.tool_name === Co || Re.tool_name === Ss,
              Tt;
            if (Re.tool_name === mf) {
              let Mt = Array.isArray(Re.input?.questions) ? Re.input.questions : [],
                Qt = Mt[0],
                Er = Qt?.header || Qt?.question;
              Tt = {
                label: "Question",
                body: Er
                  ? Er + (Mt.length > 1 ? ` (+${Mt.length - 1} more)` : "")
                  : "Tap to answer",
              };
            } else if (Re.tool_name === Xx)
              Tt = {
                label: "Plan",
                body: "Plan ready for review",
              };
            let un = it && typeof Re.input?.command === "string" ? xc(Re.input.command) : void 0,
              ze = it && typeof Re.input?.description === "string" ? Re.input.description : void 0;
            Ne = {
              tool_name: Re.tool_name,
              display_tool_name: Tt?.label ?? Re.display_name ?? Re.tool_name,
              action_description: Tt?.body ?? xc(Re.description || ze || (un && $a(un, 120)) || ""),
              raw_command: Tt ? void 0 : un,
              tool_use_id: Re.tool_use_id,
              request_id: Tt ? "" : fe.request_id,
              input: Re.input,
            };
          }
          Be("requires_action", Ne);
        }
        (pe.write(Te), T(`[remote-bridge] Sent control_request request_id=${fe.request_id}`));
      },
      sendControlResponse(fe) {
        if (Ce) {
          T("[remote-bridge] Dropping control_response during 401 recovery");
          return;
        }
        let Te = {
          ...fe,
          session_id: de,
        };
        (Be("running"), pe.write(Te), T("[remote-bridge] Sent control_response"));
      },
      sendControlCancelRequest(fe) {
        if (Ce) {
          T(`[remote-bridge] Dropping control_cancel_request during 401 recovery: ${fe}`);
          return;
        }
        let Te = {
          type: "control_cancel_request",
          request_id: fe,
          session_id: de,
        };
        (Be("running"),
          pe.write(Te),
          T(`[remote-bridge] Sent control_cancel_request request_id=${fe}`));
      },
      sendResult() {
        if (Ce) {
          T("[remote-bridge] Dropping result during 401 recovery");
          return;
        }
        (Be("idle"), pe.write(O4o(de)), T("[remote-bridge] Sent result"));
      },
      async subscribePR(fe, Te, Re) {
        let Ne = `${fe}#${Te}`,
          it = bt.get(Ne);
        if (Re)
          bt.set(Ne, {
            agentId: Re,
            repo: fe,
            prNumber: Te,
          });
        let Tt = await lWt("subscribe", de, fe, Te, t, o, _6);
        if (!Tt.ok && Re)
          if (it) bt.set(Ne, it);
          else bt.delete(Ne);
        return Tt;
      },
      async unsubscribePR(fe, Te) {
        let Re = await lWt("unsubscribe", de, fe, Te, t, o, _6);
        if (Re.ok) bt.delete(`${fe}#${Te}`);
        return Re;
      },
      getPRWebhookTargets() {
        return [...bt.values()];
      },
      teardown: Ln,
      async archive() {
        await archiveSession(de, t, o(), n, ne.teardown_archive_timeout_ms);
      },
      [Symbol.asyncDispose]() {
        return kr.teardown({
          reason: "host_exit",
        });
      },
    },
    Mr = Ci(kr);
  return kr;
}
async function withRetry(e, t, n) {
  let r = n.init_retry_max_attempts;
  for (let o = 1; o <= r; o++) {
    let s = await e();
    if (s !== null) return s;
    if (o < r) {
      let i = n.init_retry_base_delay_ms * 2 ** (o - 1),
        a = i * n.init_retry_jitter_fraction * (2 * Math.random() - 1),
        l = Math.min(i + a, n.init_retry_max_delay_ms);
      (T(`[remote-bridge] ${t} failed (attempt ${o}/${r}), retrying in ${Math.round(l)}ms`),
        await Nn(l));
    }
  }
  return null;
}
function U8o(e) {
  switch (e.reason) {
    case "untrusted_device":
      return tho();
    case "session_stale_relogin":
      return "session expired for trusted-device check \u2014 run /login to re-authenticate";
  }
}
async function gen(e, t, n, r) {
  let o = await _6(),
    s = await N8o(e, t, n, r, o);
  if (HTt(s) && s.reason === "untrusted_device") {
    let i = await eho(o);
    if (i) s = (await N8o(e, t, n, r, i)) ?? s;
  }
  if (!s) return null;
  if (HTt(s)) {
    if (s.reason === "untrusted_device" && !hWt()) return null;
    return s;
  }
  return lfe()
    ? {
        ...s,
        api_base_url: t,
      }
    : s;
}
async function archiveSession(e, t, n, r, o) {
  if (!n) return "no_token";
  let s = oP(e);
  try {
    let i = await po.post(
      `${t}/v1/sessions/${s}/archive`,
      {},
      {
        headers: {
          ...oauthHeaders(n),
          "anthropic-beta": "ccr-byoc-2025-07-29",
          "x-organization-uuid": r,
        },
        timeout: o,
        validateStatus: () => true,
      },
    );
    return (T(`[remote-bridge] Archive ${s} status=${i.status}`), i.status);
  } catch (i) {
    let a = be(i);
    return (
      T(`[remote-bridge] Archive failed: ${a}`),
      po.isAxiosError(i) && i.code === "ECONNABORTED" ? "timeout" : "error"
    );
  }
}
async function Hum(e, t, n, r, o) {
  if (!n) return true;
  let s = oP(e);
  try {
    let i = await po.post(
      `${t}/v1/sessions/${s}/unarchive`,
      {},
      {
        headers: {
          ...oauthHeaders(n),
          "anthropic-beta": "ccr-byoc-2025-07-29",
          "x-organization-uuid": r,
        },
        timeout: o,
        validateStatus: () => true,
      },
    );
    T(`[remote-bridge] Unarchive ${s} status=${i.status}`);
    let a = i.status < 300 || i.status === 409;
    if (
      (In("info", a ? "bridge_repl_v2_unarchive_ok" : "bridge_repl_v2_unarchive_failed"),
      a || i.status === 404 || i.status === 403)
    )
      return true;
    return null;
  } catch (i) {
    return (
      T(`[remote-bridge] Unarchive failed: ${be(i)}`),
      In("info", "bridge_repl_v2_unarchive_failed"),
      null
    );
  }
}
var Aum = "2023-06-01";
