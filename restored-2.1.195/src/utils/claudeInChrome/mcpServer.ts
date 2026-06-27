// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k7
// matched 2.1.88 source: src/utils/claudeInChrome/mcpServer.ts
// class=modified  jaccard=0.0824  score=0.0884  fileCov=0.5477
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var k7 = E(() => {
  Qi();
  er();
  je();
  vn();
  DD();
  Ao();
  Ls();
  jG();
  Rx();
  aW();
  Du();
  ((qcc = require("crypto")),
    (xsm = new Set([
      "tengu_feature_ok",
      "tengu_feature_bad",
      "tengu_feature_sad",
      "chrome_bridge_connection_succeeded",
      "chrome_bridge_connection_failed",
      "chrome_bridge_disconnected",
      "chrome_bridge_tool_call_completed",
      "chrome_bridge_tool_call_error",
      "chrome_bridge_tool_call_started",
      "chrome_bridge_tool_call_timeout",
      "tengu_api_error",
      "tengu_api_fallback_last_resort",
      "tengu_api_success",
      "tengu_auto_mode_decision",
      "tengu_auto_mode_denial_limit_exceeded",
      "tengu_auto_mode_fallback_to_ask",
      "tengu_auto_mode_malformed_tool_input",
      "tengu_auto_mode_opt_in_dialog_accept",
      "tengu_auto_mode_opt_in_dialog_accept_default",
      "tengu_auto_mode_opt_in_dialog_decline",
      "tengu_auto_mode_opt_in_dialog_decline_dont_ask",
      "tengu_auto_mode_opt_in_dialog_shown",
      "tengu_auto_mode_outcome",
      "tengu_auto_mode_subsequent_approval",
      "tengu_brief_mode_enabled",
      "tengu_brief_mode_toggled",
      "tengu_brief_send",
      "tengu_cancel",
      "tengu_compact_failed",
      "tengu_copper_lantern",
      "tengu_exit",
      "tengu_flicker",
      "tengu_headless_mcp_prewait",
      "tengu_init",
      "tengu_mcp_tools_refreshed_mid_turn",
      "tengu_model_fallback_triggered",
      "tengu_refusal_fallback_triggered",
      "tengu_refusal_fallback_prompt_shown",
      "tengu_refusal_fallback_prompt_choice",
      "tengu_refusal_fallback_setting_changed",
      "tengu_refusal_fallback_suppressed",
      "tengu_refusal_fallback_dialog_suppressed",
      "tengu_refusal_fallback_supersedes",
      "tengu_rotunda_pennant_applied",
      "tengu_rotunda_pennant_malformed",
      "tengu_rotunda_pennant_strip",
      "tengu_rotunda_pennant_credit_echoed",
      "tengu_rotunda_pennant_tools",
      "tengu_rotunda_pennant_esc",
      "tengu_refusal_retraction_evicted",
      "tengu_refusal_retraction_late_drop",
      "tengu_refusal_retraction_history_dropped",
      "tengu_refusal_retraction_orphan_tool_result",
      "tengu_refusal_retraction_truncation_harvest",
      "tengu_refusal_retraction_unauthenticated_signal",
      "tengu_oauth_error",
      "tengu_oauth_success",
      "tengu_oauth_token_refresh_failure",
      "tengu_oauth_token_refresh_success",
      "tengu_oauth_token_refresh_lock_acquiring",
      "tengu_oauth_token_refresh_lock_acquired",
      "tengu_oauth_token_refresh_starting",
      "tengu_oauth_token_refresh_completed",
      "tengu_oauth_token_refresh_lock_releasing",
      "tengu_oauth_token_refresh_lock_released",
      "tengu_ptl_surfaced_to_user",
      "tengu_query_error",
      "tengu_request_user_dialog_implicit_cancel",
      "tengu_request_user_dialog_late_answer",
      "tengu_request_user_dialog_requires_action",
      "tengu_request_user_dialog_response_ignored",
      "tengu_request_user_dialog_timeout",
      "tengu_review_remote_teleport_failed",
      "tengu_supported_dialog_kinds_restored",
      "tengu_schedule_offer_shown",
      "tengu_sdk_control_roundtrip",
      "tengu_sdk_init_handshake",
      "tengu_sdk_mcp_false_unavailable",
      "tengu_sdk_result",
      "tengu_sdk_schema_violation",
      "tengu_sdk_session_crash",
      "tengu_sdk_stall",
      "tengu_sdk_ttft",
      "tengu_session_file_read",
      "tengu_started",
      "tengu_tool_use_error",
      "tengu_tool_use_granted_in_prompt_permanent",
      "tengu_transcript_write_failed",
      "tengu_tool_use_granted_in_prompt_temporary",
      "tengu_tool_use_rejected_in_prompt",
      "tengu_tool_use_success",
      "tengu_bash_tool_command_executed",
      "tengu_bash_tool_command_failed",
      "tengu_uncaught_exception",
      "tengu_uncaught_exception_loop",
      "tengu_unhandled_rejection",
      "tengu_voice_recording_started",
      "tengu_voice_toggled",
      "tengu_vscode_sdk_stream_ended_no_result",
      "tengu_team_mem_sync_pull",
      "tengu_team_mem_sync_push",
      "tengu_team_mem_sync_started",
      "tengu_team_mem_entries_capped",
      "tengu_timer",
      "tengu_bg_adopt",
      "tengu_bg_agent_action",
      "tengu_bg_agent_dispatch",
      "tengu_bg_agent_terminal",
      "tengu_bg_attach",
      "tengu_bg_attach_first_frame",
      "tengu_bg_attach_legacy_autorespawn",
      "tengu_bg_attach_outcome",
      "tengu_bg_classify",
      "tengu_bg_daemon_cold_start_ask",
      "tengu_bg_daemon_cold_start_ask_answer",
      "tengu_bg_daemon_install",
      "tengu_bg_daemon_service_poll_fallthrough",
      "tengu_bg_daemon_service_stale_exec",
      "tengu_bg_daemon_spawn_failed",
      "tengu_bg_daemon_wmi_fallback",
      "tengu_bg_daemon_zombie_false_positive",
      "tengu_bg_daemon_zombie_restart",
      "tengu_bg_dispatch",
      "tengu_bg_dispatch_fallback",
      "tengu_bg_dispatch_low_mem",
      "tengu_bg_dispatch_rescued",
      "tengu_bg_dispatch_sigkill_escalate",
      "tengu_bg_dispatch_stale_drop",
      "tengu_bg_exec_no_lastline",
      "tengu_bg_killjob_ctrl_fallback",
      "tengu_bg_orphan_reap",
      "tengu_bg_proto_mismatch",
      "tengu_bg_pty_unavailable",
      "tengu_bg_respawn",
      "tengu_bg_respawn_exhausted",
      "tengu_bg_respawn_stale",
      "tengu_bg_respawn_unconfirmed_bail",
      "tengu_bg_retired",
      "tengu_bg_roster_parse_failed",
      "tengu_bg_skew_nudge",
      "tengu_bg_spare_claim",
      "tengu_bg_spare_claim_fail",
      "tengu_bg_spare_spawn",
      "tengu_bg_worker_exit",
      "tengu_bg_worker_spawn",
      "tengu_daemon_cold_start_prompt",
      "tengu_daemon_config_reload",
      "tengu_daemon_exit",
      "tengu_daemon_idle_exit",
      "tengu_daemon_install_prompt_answer",
      "tengu_daemon_lease",
      "tengu_daemon_peer_uid_reject",
      "tengu_daemon_self_restart_on_upgrade",
      "tengu_daemon_start",
      "tengu_daemon_startup_crash",
      "tengu_daemon_worker_crash",
      "tengu_daemon_worker_permanent_exit",
      "tengu_daemon_yield",
      "tengu_daemon_yield_takeover",
    ])),
    (ksm = [
      "arch",
      "classifierModel",
      "classifierStage",
      "clientType",
      "decision",
      "entrypoint",
      "errorKind",
      "errorType",
      "failureKind",
      "fastPath",
      "sessionKind",
      "http_status_range",
      "http_status",
      "model",
      "op",
      "outcome",
      "platform",
      "provider",
      "reason",
      "coachMode",
      "server_reason",
      "server_type",
      "source",
      "subscriptionType",
      "toolName",
      "userBucket",
      "userType",
      "version",
      "versionBase",
      ...[],
    ]));
  LZt = [];
  KVo = Cn(async () => {
    if (Rj() || N$i()) return ((DZt = !1), !1);
    try {
      return ((DZt = !0), !0);
    } catch (e) {
      return (ke(e), (DZt = !1), !1);
    }
  });
  Dsm = Cn(() => {
    let e = oW(),
      t = qcc.createHash("sha256").update(e).digest("hex");
    return parseInt(t.slice(0, 8), 16) % Lsm;
  });
});
var $fo = {};
_t($fo, {
  runClaudeInChromeMcpServer: () => runClaudeInChromeMcpServer,
  createChromeContext: () => createChromeContext,
});
function Osm(e) {
  return Kcc.some((t) => t === e);
}
function Nsm() {
  if (ut(process.env.USE_LOCAL_OAUTH) || ut(process.env.LOCAL_BRIDGE)) return "ws://localhost:8765";
  if (ut(process.env.USE_STAGING_OAUTH)) return "wss://bridge-staging.claudeusercontent.com";
  return "wss://bridge.claudeusercontent.com";
}
function Bsm() {
  return ut(process.env.USE_LOCAL_OAUTH) || ut(process.env.LOCAL_BRIDGE);
}
function createChromeContext(e) {
  let t = new Xcc(),
    n = Nsm();
  t.info(`Bridge URL: ${n}`);
  let r,
    o = !1,
    s = e?.CLAUDE_CHROME_PERMISSION_MODE ?? process.env.CLAUDE_CHROME_PERMISSION_MODE,
    i;
  if (s)
    if (Osm(s)) i = s;
    else t.warn(`Invalid CLAUDE_CHROME_PERMISSION_MODE "${s}". Valid values: ${Kcc.join(", ")}`);
  return {
    serverName: "Claude in Chrome",
    logger: t,
    socketPath: QUt(),
    getSocketPaths: ZZr,
    clientTypeId: "claude-code",
    onAuthenticationError: () => {
      t.warn(
        "Authentication error occurred. Please ensure you are logged into the Claude browser extension with the same claude.ai account as Claude Code.",
      );
    },
    onToolCallDisconnected: () => {
      if (o)
        return `Browser extension is not connected: the OAuth token Claude Code is using belongs to a different claude.ai account than the one Claude Code is logged in as. If CLAUDE_CODE_OAUTH_TOKEN is set in your shell or CI profile, unset it (or re-mint it for this account), then run /logout and /login in Claude Code and make sure the browser extension is signed into the same claude.ai account. If you continue to experience issues, please report a bug: ${zcc}`;
      return `Browser extension is not connected. Please ensure the Claude browser extension is installed and running (${Msm}), and that you are logged into claude.ai with the same account as Claude Code. If this is your first time connecting to Chrome, you may need to restart Chrome for the installation to take effect. If you continue to experience issues, please report a bug: ${zcc}`;
    },
    onExtensionPaired: (a, l) => {
      (gn((c) => {
        if (c.chromeExtension?.pairedDeviceId === a && c.chromeExtension?.pairedDeviceName === l)
          return c;
        return {
          ...c,
          chromeExtension: {
            pairedDeviceId: a,
            pairedDeviceName: l,
          },
        };
      }),
        t.info(`Paired with "${l}" (${a.slice(0, 8)})`));
    },
    getPersistedDeviceId: () => Dt().chromeExtension?.pairedDeviceId,
    askUserToolName: mf,
    bridgeConfig: {
      url: n,
      getUserId: async () => {
        let a = Dt().oauthAccount?.accountUuid || process.env.CLAUDE_CODE_ACCOUNT_UUID;
        if (fr() !== "firstParty") return ((o = !1), a);
        await ch().catch(() => {});
        let l = Ws()?.accessToken;
        if (!l) return ((o = !1), a);
        if (r?.token !== l) {
          let d = await FSn(l).catch(() => {
            return;
          });
          if (!d?.account_uuid) return ((o = !1), a);
          r = {
            token: l,
            accountUuid: d.account_uuid.toLowerCase(),
          };
        }
        let c = r.accountUuid,
          u = a !== void 0 && a.toLowerCase() !== c;
        if (u && !o)
          (G("tengu_chrome_bridge_account_mismatch", {
            has_env_token: Boolean(Oe.CLAUDE_CODE_OAUTH_TOKEN),
            persisted_from_config: Boolean(Dt().oauthAccount?.accountUuid),
          }),
            t.warn(
              "The OAuth token in use resolves to a different claude.ai account than the persisted Claude Code login. Using the token-derived account for the browser bridge. If CLAUDE_CODE_OAUTH_TOKEN is set, unset it or re-mint it for this account, then /logout and /login.",
            ));
        return ((o = u), c);
      },
      getOAuthToken: async () => (await ch().catch(() => {}), Ws()?.accessToken ?? ""),
      getWsOptions: () => {
        let a = HY(),
          l = h9(n);
        if (!a && !l) return;
        return {
          ...a,
          ...(l && {
            proxy: l,
          }),
        };
      },
      ...(Bsm() && {
        devUserId: "dev_user_local",
      }),
    },
    ...(i && {
      initialPermissionMode: i,
    }),
    ...!1,
    trackEvent: (a, l) => {
      let c = {};
      if (l)
        for (let [u, d] of Object.entries(l)) {
          let p = u === "status" ? "bridge_status" : u;
          if (typeof d === "boolean" || typeof d === "number") c[p] = d;
          else if (typeof d === "string" && $sm.has(p)) c[p] = d;
        }
      G(a, c);
    },
  };
}
async function runClaudeInChromeMcpServer() {
  return yl("chrome_mcp_server_start", async () => {
    (eEe(), Iqe());
    let e = createChromeContext(),
      t = Nun(e),
      n = new oFe(),
      r = !1,
      o = async () => {
        if (r) return;
        ((r = !0), await A_e(), await k_e(), process.exit(0));
      };
    (process.stdin.on("end", () => void o()),
      process.stdin.on("error", () => void o()),
      T("[Claude in Chrome] Starting MCP server"),
      await t.connect(n),
      T("[Claude in Chrome] MCP server started"));
  });
}
class Xcc {
  silly(e, ...t) {
    T(iTt.format(e, ...t), {
      level: "debug",
    });
  }
  debug(e, ...t) {
    T(iTt.format(e, ...t), {
      level: "debug",
    });
  }
  info(e, ...t) {
    T(iTt.format(e, ...t), {
      level: "info",
    });
  }
  warn(e, ...t) {
    T(iTt.format(e, ...t), {
      level: "warn",
    });
  }
  error(e, ...t) {
    T(iTt.format(e, ...t), {
      level: "error",
    });
  }
}
var iTt,
  Msm = "https://claude.ai/chrome",
  zcc = "https://github.com/anthropics/claude-code/issues/new?labels=bug,claude-in-chrome",
  $sm,
  Kcc;
