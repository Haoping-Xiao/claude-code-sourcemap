// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y4o
// matched 2.1.88 source: src/remote/RemoteSessionManager.ts
// class=partial  jaccard=0.2434  score=0.2659  fileCov=0.7425
// note: low-confidence suggestion: src/remote/RemoteSessionManager.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Y4o = E(() => {
  Rc();
  Nht();
  np();
  dn();
  je();
  At();
  vn();
  co();
  Mh();
  Jt();
  uir = require("crypto"), T6f = new Set([401, 403, 404]), w6f = {
    stream: !0
  }, V4o = new Set(["user", "env_manager_log"]);
});
function dir(e, t) {
  return {
    type: "control_response",
    response: {
      subtype: "success",
      request_id: e,
      response: t
    }
  };
}
class X4o {
  config;
  callbacks;
  client = null;
  pendingPermissionRequests = new Map();
  pendingDialogRequests = new Set();
  seenControlResponseIds = new Set();
  pendingControlRequests = new Map();
  pendingModelSwitchIds = new Set();
  constructor(e, t) {
    this.config = e;
    this.callbacks = t;
  }
  connect() {
    T(`[RemoteSessionManager] Connecting to session ${this.config.sessionId}`);
    let e = {
      onMessage: t => this.handleMessage(t),
      onConnected: () => {
        T("[RemoteSessionManager] Connected"), this.callbacks.onConnected?.();
      },
      onClose: () => {
        T("[RemoteSessionManager] Disconnected"), this.callbacks.onDisconnected?.();
      },
      onReconnecting: () => {
        T("[RemoteSessionManager] Reconnecting"), this.callbacks.onReconnecting?.();
      },
      onCatchUpTruncated: () => {
        T("[RemoteSessionManager] Catch-up truncated"), this.callbacks.onCatchUpTruncated?.();
      },
      onError: t => {
        T(`[RemoteSessionManager] Stream error: ${t.message}`, {
          level: "error"
        }), this.callbacks.onError?.(t);
      }
    };
    this.client = new K4o(this.config.sessionId, this.config.orgUuid, this.config.getAccessToken, e, this.config.onAuth401, this.config.initialSequenceNum), this.client.connect();
  }
  handleMessage(e) {
    if (bYe("in", e), e.type === "control_request") {
      this.handleControlRequest(e);
      return;
    }
    if (e.type === "control_cancel_request") {
      let {
        request_id: t
      } = e;
      if (this.pendingDialogRequests.delete(t)) {
        T(`[RemoteSessionManager] User dialog request cancelled: ${t}`), this.callbacks.onUserDialogCancelled?.(t);
        return;
      }
      let n = this.pendingPermissionRequests.get(t);
      if (!n) {
        T(`[RemoteSessionManager] control_cancel_request for unknown request ${t} \u2014 nothing pending, ignoring`);
        return;
      }
      T(`[RemoteSessionManager] Permission request cancelled: ${t}`), this.pendingPermissionRequests.delete(t), this.callbacks.onPermissionCancelled?.(t, n.tool_use_id);
      return;
    }
    if (e.type === "control_response") {
      let {
        request_id: t
      } = e.response;
      this.recordSeenControlResponseId(t), this.pendingModelSwitchIds.delete(t);
      let n = this.pendingControlRequests.get(t);
      if (n) {
        if (this.pendingControlRequests.delete(t), clearTimeout(n.timer), e.response.subtype === "success") n.resolve(e.response.response);else n.reject(Error(e.response.error));
      } else {
        let r = this.pendingPermissionRequests.get(t);
        if (r) this.pendingPermissionRequests.delete(t), T(`[RemoteSessionManager] Permission request ${t} answered elsewhere \u2014 dismissing`), this.callbacks.onPermissionCancelled?.(t, r.tool_use_id);else if (this.pendingDialogRequests.delete(t)) T(`[RemoteSessionManager] User dialog request ${t} answered elsewhere \u2014 dismissing`), this.callbacks.onUserDialogCancelled?.(t);else T(`[RemoteSessionManager] Unmatched control_response ${t} (${e.response.subtype})${e.response.subtype === "error" ? `: ${e.response.error}` : ""}`);
      }
      if (e.response.pending_user_dialog_requests) for (let r of e.response.pending_user_dialog_requests) {
        if (r.request.subtype !== "request_user_dialog") continue;
        if (this.seenControlResponseIds.has(r.request_id)) {
          T(`[RemoteSessionManager] Redelivered dialog ${r.request_id} already answered \u2014 skipping`);
          continue;
        }
        let o = this.pendingDialogRequests.has(r.request_id);
        if (this.handleControlRequest(r), !o && this.pendingDialogRequests.has(r.request_id)) xe("remote_dialog_redelivery");
      }
      return;
    }
    if (this.pendingModelSwitchIds.size > 0 && e.type === "user" && "isReplay" in e && e.isReplay === !0 && typeof e.message?.content === "string" && e.message.content.startsWith(Q4o)) {
      let [t] = this.pendingModelSwitchIds;
      this.pendingModelSwitchIds.delete(t), T("[RemoteSessionManager] Dropped own set_model breadcrumb echo");
      return;
    }
    if (e.type === "result") {
      for (let [t, n] of this.pendingPermissionRequests) T(`[RemoteSessionManager] Turn ended with permission request ${t} unresolved \u2014 dismissing`), this.callbacks.onPermissionCancelled?.(t, n.tool_use_id);
      this.pendingPermissionRequests.clear();
      for (let t of this.pendingDialogRequests) T(`[RemoteSessionManager] Turn ended with user dialog request ${t} unresolved \u2014 dismissing`), this.callbacks.onUserDialogCancelled?.(t);
      this.pendingDialogRequests.clear();
    }
    this.callbacks.onMessage(e);
  }
  recordSeenControlResponseId(e) {
    if (this.seenControlResponseIds.add(e), this.seenControlResponseIds.size > x6f) {
      let t = this.seenControlResponseIds.values().next().value;
      if (t !== void 0) this.seenControlResponseIds.delete(t);
    }
  }
  handleControlRequest(e) {
    let {
      request_id: t,
      request: n
    } = e;
    if (n.subtype === "can_use_tool") {
      T(`[RemoteSessionManager] Permission request for tool: ${n.tool_name}`), this.pendingPermissionRequests.set(t, n), this.callbacks.onPermissionRequest(n, t);
      return;
    }
    if (n.subtype === "request_user_dialog") {
      if (this.pendingDialogRequests.has(t)) {
        T(`[RemoteSessionManager] Duplicate user dialog request ${t} \u2014 already pending, skipping`);
        return;
      }
      T(`[RemoteSessionManager] User dialog request: ${n.dialog_kind}`), this.pendingDialogRequests.add(t), this.callbacks.onUserDialogRequest(n, t);
      return;
    }
    T(`[RemoteSessionManager] Unsupported control request subtype: ${n.subtype}`), this.client?.sendControlResponse({
      type: "control_response",
      response: {
        subtype: "error",
        request_id: t,
        error: `Unsupported control request subtype: ${n.subtype}`
      }
    });
  }
  async sendMessage(e, t) {
    T(`[RemoteSessionManager] Sending message to session ${this.config.sessionId}`), this.reviveStreamForUserSend(), bYe("out", {
      kind: "sendMessage",
      content: e,
      opts: t
    });
    let n = await eNt(this.config.sessionId, e, t);
    if (!n.ok) T(`[RemoteSessionManager] Failed to send message to session ${this.config.sessionId}: ${n.reason}`, {
      level: "error"
    }), Le("remote_send_message", "remote_send_message_failed");else xe("remote_send_message");
    return n;
  }
  async sendBashCommand(e, t) {
    T(`[RemoteSessionManager] Sending bash_command to session ${this.config.sessionId}`), this.reviveStreamForUserSend();
    let n = await Szr(this.config.sessionId, e, t);
    if (!n.ok) T(`[RemoteSessionManager] Failed to send bash_command to session ${this.config.sessionId}: ${n.reason}`, {
      level: "error"
    }), Le("remote_send_bash", "remote_send_bash_failed");else xe("remote_send_bash");
    return n;
  }
  reviveStreamForUserSend() {
    if (this.client?.reviveAfterExhaustion()) this.callbacks.onReconnecting?.();
  }
  respondToPermissionRequest(e, t) {
    if (!this.pendingPermissionRequests.get(e)) {
      ke(Error(`[RemoteSessionManager] No pending permission request with ID: ${e}`)), Le("remote_permission_respond", "remote_permission_respond_no_pending");
      return;
    }
    this.pendingPermissionRequests.delete(e), this.reviveStreamForUserSend();
    let r = dir(e, t);
    T(`[RemoteSessionManager] Sending permission response: ${t.behavior}`), bYe("out", r), this.client?.sendControlResponse(r), xe("remote_permission_respond");
  }
  respondToUserDialogRequest(e, t) {
    if (!this.pendingDialogRequests.delete(e)) {
      ke(Error(`[RemoteSessionManager] No pending user dialog request with ID: ${e}`)), Le("remote_dialog_respond", "remote_dialog_respond_no_pending");
      return;
    }
    this.recordSeenControlResponseId(e), this.reviveStreamForUserSend();
    let n = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: e,
        response: t
      }
    };
    T(`[RemoteSessionManager] Sending user dialog response: ${t.behavior}`), bYe("out", n), this.client?.sendControlResponse(n), xe("remote_dialog_respond");
  }
  isConnected() {
    return this.client?.isConnected() ?? !1;
  }
  cancelSession() {
    T("[RemoteSessionManager] Sending interrupt signal"), this.reviveStreamForUserSend(), bYe("out", {
      kind: "control_request",
      subtype: "interrupt"
    }), this.client?.sendControlRequest({
      subtype: "interrupt"
    });
  }
  sendControlRequest(e) {
    return yl("remote_control_rpc", async () => {
      this.reviveStreamForUserSend(), bYe("out", {
        kind: "control_request",
        ...e
      });
      let t = this.client?.sendControlRequest(e);
      if (t == null) throw Error("[RemoteSessionManager] Cannot send: not connected");
      if (e.subtype === "set_model") this.pendingModelSwitchIds.add(t);
      let n = e.subtype === "side_question" ? k6f : I6f;
      return new Promise((r, o) => {
        let s = setTimeout(this.onControlRequestTimeout, n, t, e.subtype, n);
        this.pendingControlRequests.set(t, {
          resolve: i => r(i),
          reject: o,
          timer: s
        });
      });
    }, J4o);
  }
  onControlRequestTimeout = (e, t, n) => {
    this.pendingModelSwitchIds.delete(e);
    let r = this.pendingControlRequests.get(e);
    if (!r) return;
    this.pendingControlRequests.delete(e), r.reject(new $Jt(t, n));
  };
  getSessionId() {
    return this.config.sessionId;
  }
  disconnect() {
    T("[RemoteSessionManager] Disconnecting"), this.client?.close(), this.client = null, this.pendingPermissionRequests.clear(), this.pendingDialogRequests.clear();
    for (let e of this.pendingControlRequests.values()) clearTimeout(e.timer), e.reject(Error("[RemoteSessionManager] Disconnected"));
    this.pendingControlRequests.clear(), this.pendingModelSwitchIds.clear();
  }
  reconnect() {
    T("[RemoteSessionManager] Reconnecting SSE stream"), this.client?.reconnect();
  }
}
function J4o(e) {
  if (e instanceof $Jt) return "timeout";
  if (e instanceof Error && e.message.endsWith("Disconnected")) return "disconnected";
  if (e instanceof Error && e.message.endsWith("not connected")) return "not_connected";
  return "server_error";
}
var I6f = 75000,
  x6f = 1000,
  k6f = 600000,
  $Jt;