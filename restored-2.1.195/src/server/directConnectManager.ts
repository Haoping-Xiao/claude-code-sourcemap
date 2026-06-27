// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eSc
// matched 2.1.88 source: src/server/directConnectManager.ts
// class=modified  jaccard=0.3119  score=0.5613  fileCov=0.4125
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var eSc = E(() => {
  Ed();
  pir();
  dn();
  uo();
  je();
  At();
  qen = R(rt(), 1);
});
class uzo {
  ws = null;
  config;
  callbacks;
  constructor(e, t) {
    ((this.config = e), (this.callbacks = t));
  }
  connect() {
    let e = {};
    if (this.config.authToken) e.authorization = `Bearer ${this.config.authToken}`;
    ((this.ws = new WebSocket(this.config.wsUrl, {
      headers: e,
    })),
      this.ws.addEventListener("open", () => {
        this.callbacks.onConnected?.();
      }),
      this.ws.addEventListener("message", (t) => {
        let r = (typeof t.data === "string" ? t.data : "")
          .split(
            `
`,
          )
          .filter((o) => o.trim());
        for (let o of r) {
          let s;
          try {
            s = Ft(o);
          } catch {
            continue;
          }
          if (!M4o(s)) continue;
          let i = s;
          if (i.type === "control_request") {
            if (i.request.subtype === "can_use_tool")
              this.callbacks.onPermissionRequest(i.request, i.request_id);
            else
              (T(`[DirectConnect] Unsupported control request subtype: ${i.request.subtype}`),
                this.sendErrorResponse(
                  i.request_id,
                  `Unsupported control request subtype: ${i.request.subtype}`,
                ));
            continue;
          }
          if (jbc(i)) this.callbacks.onMessage(i);
        }
      }),
      this.ws.addEventListener("close", () => {
        this.callbacks.onDisconnected?.();
      }),
      this.ws.addEventListener("error", () => {
        this.callbacks.onError?.(Error("WebSocket connection error"));
      }));
  }
  async sendMessage(e) {
    if (!this.ws)
      return {
        ok: !1,
        reason: "not connected",
      };
    if (this.ws.readyState === WebSocket.CONNECTING)
      return {
        ok: !1,
        reason: "the connection is still being established",
      };
    if (this.ws.readyState !== WebSocket.OPEN)
      return {
        ok: !1,
        reason: "the connection was closed",
      };
    let t = De({
      type: "user",
      message: {
        role: "user",
        content: e,
      },
      parent_tool_use_id: null,
      session_id: "",
    });
    return (
      this.ws.send(t),
      {
        ok: !0,
      }
    );
  }
  respondToPermissionRequest(e, t) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      T(`[DirectConnect] Dropping permission response for ${e}: socket not open`, {
        level: "error",
      });
      return;
    }
    this.ws.send(De(dir(e, t)));
  }
  sendInterrupt() {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    let e = De({
      type: "control_request",
      request_id: crypto.randomUUID(),
      request: {
        subtype: "interrupt",
      },
    });
    this.ws.send(e);
  }
  sendErrorResponse(e, t) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    let n = De({
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e,
        error: t,
      },
    });
    this.ws.send(n);
  }
  disconnect() {
    if (this.ws) (this.ws.close(), (this.ws = null));
  }
  isConnected() {
    return this.ws?.readyState === WebSocket.OPEN;
  }
}
