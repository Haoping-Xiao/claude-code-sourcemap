// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LDa
// matched 2.1.88 source: src/services/lsp/LSPServerInstance.ts
// class=modified  jaccard=0.2981  score=0.559  fileCov=0.3898
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module LDa] deps: je, At, Ist, _1, ypt
((kDa = require("child_process")), (CDe = R(xDa(), 1)));
function kkp(e, t) {
  if (e == null) return null;
  if (t === void 0 || t === "") return e;
  let n = e;
  for (let r of t.split(".")) {
    if (n === null || typeof n !== "object" || !Object.prototype.hasOwnProperty.call(n, r))
      return null;
    n = n[r];
  }
  return n ?? null;
}
function createLSPServerInstance(name, config) {
  if (config.restartOnCrash !== void 0)
    throw Error(
      `LSP server '${name}': restartOnCrash is not yet implemented. Remove this field from the configuration.`,
    );
  if (config.shutdownTimeout !== void 0)
    throw Error(
      `LSP server '${name}': shutdownTimeout is not yet implemented. Remove this field from the configuration.`,
    );
  let { createLSPClient: n } = (LDa(), ro(RDa)),
    r = "stopped",
    o,
    s,
    i = 0,
    a = 0,
    l = false,
    c = n(name, (b) => {
      ((r = "error"), (s = b), a++, It("lsp_server_start", "lsp_server_crashed"));
    });
  async function u() {
    if (r === "running" || r === "starting") return;
    let b = config.maxRestarts ?? 3;
    if (r === "error" && a > b) {
      if (!l)
        ((l = true),
          (s = Error(`LSP server '${name}' exceeded max crash recovery attempts (${b})`)),
          T(s.message, {
            level: "error",
          }),
          Le("lsp_server_start", "lsp_server_max_crash_recovery"));
      throw s;
    }
    let _;
    try {
      ((r = "starting"),
        T(`Starting LSP server instance: ${name}`),
        await c.start(config.command, config.args || [], {
          env: config.env,
          cwd: config.workspaceFolder,
        }),
        c.onRequest(
          "workspace/configuration",
          (C) => (
            T(
              `LSP: Received workspace/configuration request from ${name} for sections: ${C.items.map((x) => x.section ?? "<root>").join(", ")}`,
            ),
            C.items.map((x) => kkp(config.settings, x.section))
          ),
        ));
      let S = config.workspaceFolder || $t(),
        A = PDa.pathToFileURL(S).href,
        v = {
          processId: process.pid,
          clientInfo: {
            name: "Claude Code",
            version: {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.195",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-06-26T01:00:56Z",
              GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
            }.VERSION,
          },
          initializationOptions: config.initializationOptions ?? {},
          workspaceFolders: [
            {
              uri: A,
              name: DDa.basename(S),
            },
          ],
          rootPath: S,
          rootUri: A,
          capabilities: {
            workspace: {
              configuration: config.settings != null,
              workspaceFolders: false,
            },
            textDocument: {
              synchronization: {
                dynamicRegistration: false,
                willSave: false,
                willSaveWaitUntil: false,
                didSave: true,
              },
              publishDiagnostics: {
                relatedInformation: true,
                tagSupport: {
                  valueSet: [1, 2],
                },
                versionSupport: false,
                codeDescriptionSupport: true,
                dataSupport: false,
              },
              hover: {
                dynamicRegistration: false,
                contentFormat: ["markdown", "plaintext"],
              },
              definition: {
                dynamicRegistration: false,
                linkSupport: true,
              },
              references: {
                dynamicRegistration: false,
              },
              documentSymbol: {
                dynamicRegistration: false,
                hierarchicalDocumentSymbolSupport: true,
              },
              callHierarchy: {
                dynamicRegistration: false,
              },
            },
            general: {
              positionEncodings: ["utf-16"],
            },
          },
        };
      if (((_ = c.initialize(v)), config.startupTimeout !== void 0))
        await Dkp(
          _,
          config.startupTimeout,
          `LSP server '${name}' timed out after ${config.startupTimeout}ms during initialization`,
        );
      else await _;
      if (((r = "running"), (o = new Date()), (a = 0), (l = false), config.settings != null))
        c.sendNotification("workspace/didChangeConfiguration", {
          settings: config.settings,
        }).catch((C) => {
          T(`LSP: workspace/didChangeConfiguration push failed for ${name}: ${be(C)}`, {
            level: "warn",
          });
        });
      (T(`LSP server instance started: ${name}`), xe("lsp_server_start"));
    } catch (S) {
      throw (
        c.stop().catch(() => {}),
        _?.catch(() => {}),
        (r = "error"),
        (s = S),
        T(`Failed to start LSP server '${name}': ${be(S)}`, {
          level: "error",
        }),
        Le("lsp_server_start", "lsp_server_start_failed"),
        S
      );
    }
  }
  async function d() {
    if (r === "stopped" || r === "stopping") return;
    try {
      ((r = "stopping"),
        await c.stop(),
        (r = "stopped"),
        T(`LSP server instance stopped: ${name}`),
        xe("lsp_server_stop"));
    } catch (b) {
      throw (
        (r = "error"),
        (s = b),
        T(`Failed to stop LSP server '${name}': ${be(b)}`, {
          level: "error",
        }),
        It("lsp_server_stop", "lsp_server_stop_failed"),
        b
      );
    }
  }
  async function p() {
    try {
      await d();
    } catch (_) {
      let S = Error(`Failed to stop LSP server '${name}' during restart: ${be(_)}`);
      throw (
        T(`Failed to stop LSP server '${name}' during restart: ${be(_)}`, {
          level: "error",
        }),
        S
      );
    }
    i++;
    let b = config.maxRestarts ?? 3;
    if (i > b) {
      let _ = Error(`Max restart attempts (${b}) exceeded for server '${name}'`);
      throw (
        T(_.message, {
          level: "error",
        }),
        _
      );
    }
    try {
      await u();
    } catch (_) {
      let S = Error(
        `Failed to start LSP server '${name}' during restart (attempt ${i}/${b}): ${be(_)}`,
      );
      throw (
        T(S.message, {
          level: "error",
        }),
        S
      );
    }
  }
  function f() {
    return r === "running" && c.isInitialized;
  }
  async function m(b, _) {
    if (!f()) {
      let v = Error(
        `Cannot send request to LSP server '${name}': server is ${r}${s ? `, last error: ${s.message}` : ""}`,
      );
      throw (
        T(
          `Cannot send request to LSP server '${name}': server is ${r}${s ? `, last error: ${s.message}` : ""}`,
          {
            level: "error",
          },
        ),
        v
      );
    }
    let S;
    for (let v = 0; v <= gmo; v++)
      try {
        return await c.sendRequest(b, _);
      } catch (C) {
        S = C;
        let x = C.code;
        if (typeof x === "number" && x === Rkp && v < gmo) {
          let k = Lkp * Math.pow(2, v);
          (T(
            `LSP request '${b}' to '${name}' got ContentModified error, retrying in ${k}ms (attempt ${v + 1}/${gmo})\u2026`,
          ),
            await Nn(k));
          continue;
        }
        break;
      }
    let A = Object.assign(
      Error(`LSP request '${b}' failed for server '${name}': ${S?.message ?? "unknown error"}`, {
        cause: S,
      }),
      {
        code: S?.code,
      },
    );
    throw (
      T(A.message, {
        level: "error",
      }),
      A
    );
  }
  async function g(b, _) {
    if (!f()) {
      let S = Error(`Cannot send notification to LSP server '${name}': server is ${r}`);
      throw (
        T(`Cannot send notification to LSP server '${name}': server is ${r}`, {
          level: "error",
        }),
        S
      );
    }
    try {
      await c.sendNotification(b, _);
    } catch (S) {
      let A = Error(`LSP notification '${b}' failed for server '${name}': ${be(S)}`);
      throw (
        T(A.message, {
          level: "error",
        }),
        A
      );
    }
  }
  function h(b, _) {
    c.onNotification(b, _);
  }
  function y(b, _) {
    c.onRequest(b, _);
  }
  return {
    name: name,
    config: config,
    get state() {
      return r;
    },
    get startTime() {
      return o;
    },
    get lastError() {
      return s;
    },
    get restartCount() {
      return i;
    },
    start: u,
    stop: d,
    restart: p,
    isHealthy: f,
    sendRequest: m,
    sendNotification: g,
    onNotification: h,
    onRequest: y,
  };
}
function Dkp(e, t, n) {
  let r,
    o = new Promise((s, i) => {
      r = setTimeout((a, l) => a(Error(l)), t, i, n);
    });
  return Promise.race([e, o]).finally(() => clearTimeout(r));
}
var DDa,
  PDa,
  Rkp = -32801,
  gmo = 3,
  Lkp = 500;
