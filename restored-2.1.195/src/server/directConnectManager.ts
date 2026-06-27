// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eSc
// matched 2.1.88 source: src/server/directConnectManager.ts
// class=modified  jaccard=0.4606  score=0.7494  fileCov=0.5445
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eSc] deps: context/notifications.tsx, utils/model/deprecation.ts, dn, context/notifications.tsx, utils/debug.ts, utils/errors.ts
qen = R(rt(), 1);
class DirectConnectSessionManager {
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
        ok: false,
        reason: "not connected",
      };
    if (this.ws.readyState === WebSocket.CONNECTING)
      return {
        ok: false,
        reason: "the connection is still being established",
      };
    if (this.ws.readyState !== WebSocket.OPEN)
      return {
        ok: false,
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
        ok: true,
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
