// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ofo
// matched 2.1.88 source: src/utils/claudeInChrome/chromeNativeHost.ts
// class=modified  jaccard=0.7599  score=0.9176  fileCov=0.8155
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: sendChromeMessage, runChromeNativeHost
// [unwrapped __esm module Ofo] deps: fIr, jun, k7, dn, y1, kt, ZSe, W2e, G1, oo, er, je, wr, fn, Ls, u9, Mh, Epe, VM
((iTt = require("util")),
  ($sm = new Set(["bridge_status", "error_type", "tool_name"])),
  (Kcc = ["ask", "skip_all_permission_checks", "follow_a_plan"]));
function pw(e, ...t) {
  if (Jcc) {
    let n = new Date().toISOString(),
      r = t.length > 0 ? " " + De(t) : "",
      o = `[${n}] [Claude Chrome Native Host] ${e}${r}
`;
    f2.appendFile(Jcc, o).catch(() => {});
  }
  console.error(`[Claude Chrome Native Host] ${e}`, ...t);
}
function sendChromeMessage(e) {
  let t = Buffer.from(e, "utf-8"),
    n = Buffer.alloc(4);
  (n.writeUInt32LE(t.length, 0), process.stdout.write(n), process.stdout.write(t));
}
async function runChromeNativeHost() {
  return yl("chrome_native_host_run", async () => {
    pw("Initializing...");
    let e = new euc(),
      t = new tuc();
    await e.start();
    while (true) {
      let n = await t.read();
      if (n === null) break;
      await e.handleMessage(n);
    }
    await e.stop();
  });
}
class euc {
  mcpClients = new Map();
  nextClientId = 1;
  server = null;
  running = false;
  socketPath = null;
  async start() {
    if (this.running) return;
    if (((this.socketPath = QUt()), xcr.platform() !== "win32")) {
      let e = flt();
      (await f2.unlink(e).catch(() => {}),
        await f2.mkdir(e, {
          recursive: true,
          mode: 448,
        }),
        await f2.chmod(e, 448).catch(() => {}));
      try {
        let t = await f2.readdir(e);
        for (let n of t) {
          if (!n.endsWith(".sock")) continue;
          let r = parseInt(n.replace(".sock", ""), 10);
          if (isNaN(r)) continue;
          try {
            process.kill(r, 0);
          } catch {
            (await f2.unlink(Zcc.join(e, n)).catch(() => {}),
              pw(`Removed stale socket for PID ${r}`));
          }
        }
      } catch {}
    }
    if (
      (pw(`Creating socket listener: ${this.socketPath}`),
      (this.server = Qcc.createServer((e) => this.handleMcpClient(e))),
      await new Promise((e, t) => {
        (this.server.listen(this.socketPath, () => {
          (pw("Socket server listening for connections"), (this.running = true), e());
        }),
          this.server.on("error", (n) => {
            (pw("Socket server error:", n), t(n));
          }));
      }),
      xcr.platform() !== "win32")
    )
      try {
        (await f2.chmod(this.socketPath, 384), pw("Socket permissions set to 0600"));
      } catch (e) {
        pw("Failed to set socket permissions:", e);
      }
  }
  async stop() {
    if (!this.running) return;
    for (let [, e] of this.mcpClients) e.socket.destroy();
    if ((this.mcpClients.clear(), this.server))
      (await new Promise((e) => {
        this.server.close(() => e());
      }),
        (this.server = null));
    if (xcr.platform() !== "win32" && this.socketPath) {
      try {
        (await f2.unlink(this.socketPath), pw("Cleaned up socket file"));
      } catch {}
      try {
        let e = flt();
        if ((await f2.readdir(e)).length === 0)
          (await f2.rmdir(e), pw("Removed empty socket directory"));
      } catch {}
    }
    this.running = false;
  }
  async isRunning() {
    return this.running;
  }
  async getClientCount() {
    return this.mcpClients.size;
  }
  async handleMessage(e) {
    let t;
    try {
      t = Ft(e);
    } catch (o) {
      (pw("Invalid JSON from Chrome:", o.message),
        sendChromeMessage(
          De({
            type: "error",
            error: "Invalid message format",
          }),
        ));
      return;
    }
    let n = Gsm().safeParse(t);
    if (!n.success) {
      (pw("Invalid message from Chrome:", n.error.message),
        sendChromeMessage(
          De({
            type: "error",
            error: "Invalid message format",
          }),
        ));
      return;
    }
    let r = n.data;
    switch ((pw(`Handling Chrome message type: ${r.type}`), r.type)) {
      case "ping":
        (pw("Responding to ping"),
          sendChromeMessage(
            De({
              type: "pong",
              timestamp: Date.now(),
            }),
          ));
        break;
      case "get_status":
        sendChromeMessage(
          De({
            type: "status_response",
            native_host_version: Fsm,
          }),
        );
        break;
      case "tool_response": {
        if (this.mcpClients.size > 0) {
          pw(`Forwarding tool response to ${this.mcpClients.size} MCP clients`);
          let { type: o, ...s } = r,
            i = Buffer.from(De(s), "utf-8"),
            a = Buffer.alloc(4);
          a.writeUInt32LE(i.length, 0);
          let l = Buffer.concat([a, i]);
          for (let [c, u] of this.mcpClients)
            try {
              u.socket.write(l);
            } catch (d) {
              pw(`Failed to send to MCP client ${c}:`, d);
            }
        }
        break;
      }
      case "notification": {
        if (this.mcpClients.size > 0) {
          pw(`Forwarding notification to ${this.mcpClients.size} MCP clients`);
          let { type: o, ...s } = r,
            i = Buffer.from(De(s), "utf-8"),
            a = Buffer.alloc(4);
          a.writeUInt32LE(i.length, 0);
          let l = Buffer.concat([a, i]);
          for (let [c, u] of this.mcpClients)
            try {
              u.socket.write(l);
            } catch (d) {
              pw(`Failed to send notification to MCP client ${c}:`, d);
            }
        }
        break;
      }
      default:
        (pw(`Unknown message type: ${r.type}`),
          sendChromeMessage(
            De({
              type: "error",
              error: `Unknown message type: ${r.type}`,
            }),
          ));
    }
  }
  handleMcpClient(e) {
    let t = this.nextClientId++,
      n = {
        id: t,
        socket: e,
        buffer: Buffer.alloc(0),
      };
    (this.mcpClients.set(t, n),
      pw(`MCP client ${t} connected. Total clients: ${this.mcpClients.size}`),
      sendChromeMessage(
        De({
          type: "mcp_connected",
        }),
      ),
      e.on("data", (r) => {
        n.buffer = Buffer.concat([n.buffer, r]);
        while (n.buffer.length >= 4) {
          let o = n.buffer.readUInt32LE(0);
          if (o === 0 || o > YVo) {
            (pw(`Invalid message length from MCP client ${t}: ${o}`), e.destroy());
            return;
          }
          if (n.buffer.length < 4 + o) break;
          let s = n.buffer.slice(4, 4 + o);
          n.buffer = n.buffer.slice(4 + o);
          try {
            let i = Ft(s.toString("utf-8"));
            (pw(`Forwarding tool request from MCP client ${t}: ${i.method}`),
              sendChromeMessage(
                De({
                  type: "tool_request",
                  method: i.method,
                  params: i.params,
                }),
              ));
          } catch (i) {
            pw(`Failed to parse tool request from MCP client ${t}:`, i);
          }
        }
      }),
      e.on("error", (r) => {
        pw(`MCP client ${t} error: ${r}`);
      }),
      e.on("close", () => {
        (pw(`MCP client ${t} disconnected. Remaining clients: ${this.mcpClients.size - 1}`),
          this.mcpClients.delete(t),
          sendChromeMessage(
            De({
              type: "mcp_disconnected",
            }),
          ));
      }));
  }
}
class tuc {
  buffer = Buffer.alloc(0);
  pendingResolve = null;
  closed = false;
  constructor() {
    (process.stdin.on("data", (e) => {
      ((this.buffer = Buffer.concat([this.buffer, e])), this.tryProcessMessage());
    }),
      process.stdin.on("end", () => {
        if (((this.closed = true), this.pendingResolve))
          (this.pendingResolve(null), (this.pendingResolve = null));
      }),
      process.stdin.on("error", () => {
        if (((this.closed = true), this.pendingResolve))
          (this.pendingResolve(null), (this.pendingResolve = null));
      }));
  }
  tryProcessMessage() {
    if (!this.pendingResolve) return;
    if (this.buffer.length < 4) return;
    let e = this.buffer.readUInt32LE(0);
    if (e === 0 || e > YVo) {
      (pw(`Invalid message length: ${e}`), this.pendingResolve(null), (this.pendingResolve = null));
      return;
    }
    if (this.buffer.length < 4 + e) return;
    let t = this.buffer.subarray(4, 4 + e);
    this.buffer = this.buffer.subarray(4 + e);
    let n = t.toString("utf-8");
    (this.pendingResolve(n), (this.pendingResolve = null));
  }
  async read() {
    if (this.closed) return null;
    if (this.buffer.length >= 4) {
      let e = this.buffer.readUInt32LE(0);
      if (e > 0 && e <= YVo && this.buffer.length >= 4 + e) {
        let t = this.buffer.subarray(4, 4 + e);
        return ((this.buffer = this.buffer.subarray(4 + e)), t.toString("utf-8"));
      }
    }
    return new Promise((e) => {
      ((this.pendingResolve = e), this.tryProcessMessage());
    });
  }
}
var f2,
  Qcc,
  xcr,
  Zcc,
  Fsm = "1.0.0",
  YVo = 1048576,
  Jcc = void 0,
  Gsm;
