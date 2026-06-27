// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mFn
// matched 2.1.88 source: src/utils/mcpWebSocketTransport.ts
// class=modified  jaccard=0.6381  score=0.9732  fileCov=0.6495
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mFn = E(() => {
  kt();
  je();
  At();
  Txa = require("child_process");
});
class hFn {
  ws;
  started = false;
  opened;
  constructor(e) {
    this.ws = e;
    this.opened = new Promise((n, r) => {
      if (this.ws.readyState === gFn) n();
      else {
        let o = this.ws,
          s = () => {
            (o.removeEventListener("open", s), o.removeEventListener("error", i), n());
          },
          i = (a) => {
            (o.removeEventListener("open", s),
              o.removeEventListener("error", i),
              In("error", "mcp_websocket_connect_fail"),
              r(a));
          };
        (o.addEventListener("open", s), o.addEventListener("error", i));
      }
    });
    let t = this.ws;
    (t.addEventListener("message", this.onBunMessage),
      t.addEventListener("error", this.onBunError),
      t.addEventListener("close", this.onBunClose));
  }
  onclose;
  onerror;
  onmessage;
  onBunMessage = (e) => {
    try {
      let t = typeof e.data === "string" ? e.data : String(e.data),
        n = Ft(t),
        r = pae.parse(n);
      this.onmessage?.(r);
    } catch (t) {
      this.handleError(t);
    }
  };
  onBunError = () => {
    this.handleError(Error("WebSocket error"));
  };
  onBunClose = () => {
    this.handleCloseCleanup();
  };
  handleError(e) {
    (In("error", "mcp_websocket_message_fail"), this.onerror?.(Zr(e)));
  }
  handleCloseCleanup() {
    this.onclose?.();
    let e = this.ws;
    (e.removeEventListener("message", this.onBunMessage),
      e.removeEventListener("error", this.onBunError),
      e.removeEventListener("close", this.onBunClose));
  }
  async start() {
    if (this.started) throw Error("Start can only be called once per transport.");
    if ((await this.opened, this.ws.readyState !== gFn))
      throw (
        In("error", "mcp_websocket_start_not_opened"),
        Error("WebSocket is not open. Cannot start transport.")
      );
    this.started = true;
  }
  async close() {
    if (this.ws.readyState === gFn || this.ws.readyState === Cwp) this.ws.close();
    this.handleCloseCleanup();
  }
  async send(e) {
    if (this.ws.readyState !== gFn)
      throw (
        In("error", "mcp_websocket_send_not_opened"),
        Error("WebSocket is not open. Cannot send message.")
      );
    let t = De(e);
    try {
      this.ws.send(t);
    } catch (n) {
      throw (this.handleError(n), n);
    }
  }
}
var Cwp = 0,
  gFn = 1;
