// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Da
// matched 2.1.88 source: src/services/lsp/LSPServerManager.ts
// class=modified  jaccard=0.6572  score=0.8153  fileCov=0.7721
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $Da] deps: utils/fsOperations.ts, utils/debug.ts, utils/errors.ts, dn
((DDa = R(require("path"))), (PDa = require("url")));
function createLSPServerManager() {
  let e = new Map(),
    t = new Map(),
    n = new Map(),
    r = new Map();
  function o(b) {
    let _ = (r.get(b) ?? 0) + 1;
    return (r.set(b, _), _);
  }
  async function s() {
    let b;
    try {
      ((b = (await uLa()).servers),
        T(`[LSP SERVER MANAGER] getAllLspServers returned ${Object.keys(b).length} server(s)`));
    } catch (S) {
      throw (
        i6(
          Error(`Failed to load LSP server configuration: ${be(S)}`),
          "Failed to load LSP server configuration",
        ),
        Le("lsp_config_load", "lsp_config_load_failed"),
        S
      );
    }
    let _ = false;
    for (let [S, A] of Object.entries(b))
      try {
        if (!A.command) throw Error(`Server ${S} missing required 'command' field`);
        if (!A.extensionToLanguage || Object.keys(A.extensionToLanguage).length === 0)
          throw Error(`Server ${S} missing required 'extensionToLanguage' field`);
        let v = Object.keys(A.extensionToLanguage);
        for (let x of v) {
          let I = x.toLowerCase();
          if (!t.has(I)) t.set(I, []);
          let k = t.get(I);
          if (k) {
            if (k.length > 0 && k[0] !== S)
              T(
                `LSP: extension ${I} already handled by "${k[0]}"; "${S}" will not be used for ${I} files`,
                {
                  level: "warn",
                },
              );
            k.push(S);
          }
        }
        let C = MDa(S, A);
        e.set(S, C);
      } catch (v) {
        (T(`Failed to initialize LSP server ${S}: ${v.message}`, {
          level: "error",
        }),
          (_ = true));
      }
    if ((T(`LSP manager initialized with ${e.size} servers`), _))
      It("lsp_config_load", "lsp_server_config_invalid");
    else xe("lsp_config_load");
  }
  async function i() {
    let b = Array.from(e.entries()).filter(([, A]) => A.state === "running" || A.state === "error"),
      _ = await Promise.allSettled(b.map(([, A]) => A.stop()));
    (e.clear(), t.clear(), n.clear(), r.clear());
    let S = _.map((A, v) =>
      A.status === "rejected" ? `${b[v][0]}: ${be(A.reason)}` : null,
    ).filter((A) => A !== null);
    if (S.length > 0) {
      let A = Error(`Failed to stop ${S.length} LSP server(s): ${S.join("; ")}`);
      throw (
        T(`Failed to stop ${S.length} LSP server(s): ${S.join("; ")}`, {
          level: "error",
        }),
        A
      );
    }
  }
  function a(b) {
    let _ = rEe.extname(b).toLowerCase(),
      S = t.get(_);
    if (!S || S.length === 0) return;
    let A = S[0];
    if (!A) return;
    return e.get(A);
  }
  async function l(b) {
    let _ = a(b);
    if (!_) return;
    if (_.state === "stopped" || _.state === "error")
      try {
        await _.start();
      } catch (S) {
        throw (
          T(`Failed to start LSP server for file ${b}: ${S.message}`, {
            level: "error",
          }),
          S
        );
      }
    return _;
  }
  async function c(b, _, S) {
    let A = await l(b);
    if (!A) return;
    try {
      return await A.sendRequest(_, S);
    } catch (v) {
      throw (
        T(`LSP request failed for file ${b}, method '${_}': ${v.message}`, {
          level: "error",
        }),
        v
      );
    }
  }
  function u() {
    return e;
  }
  function d() {
    return Array.from(t.keys()).sort();
  }
  async function p(b, _) {
    let S = await l(b);
    if (!S) return;
    let A = xpt.pathToFileURL(rEe.resolve(b)).href;
    if (n.get(A) === S.name) {
      T(`LSP: File already open, skipping didOpen for ${b}`);
      return;
    }
    let v = rEe.extname(b).toLowerCase(),
      C = S.config.extensionToLanguage[v] || "plaintext";
    try {
      let x = o(A);
      (await S.sendNotification("textDocument/didOpen", {
        textDocument: {
          uri: A,
          languageId: C,
          version: x,
          text: _,
        },
      }),
        n.set(A, S.name),
        T(`LSP: Sent didOpen for ${b} (languageId: ${C})`));
    } catch (x) {
      let I = Error(`Failed to sync file open ${b}: ${be(x)}`);
      throw (
        T(I.message, {
          level: "error",
        }),
        I
      );
    }
  }
  async function f(b, _) {
    let S = a(b);
    if (!S || S.state !== "running") return p(b, _);
    let A = xpt.pathToFileURL(rEe.resolve(b)).href;
    if (n.get(A) !== S.name) return p(b, _);
    try {
      let v = o(A);
      (await S.sendNotification("textDocument/didChange", {
        textDocument: {
          uri: A,
          version: v,
        },
        contentChanges: [
          {
            text: _,
          },
        ],
      }),
        T(`LSP: Sent didChange for ${b} (v${v})`));
    } catch (v) {
      let C = Error(`Failed to sync file change ${b}: ${be(v)}`);
      throw (
        T(`Failed to sync file change ${b}: ${be(v)}`, {
          level: "error",
        }),
        C
      );
    }
  }
  async function m(b) {
    let _ = a(b);
    if (!_ || _.state !== "running") return;
    try {
      (await _.sendNotification("textDocument/didSave", {
        textDocument: {
          uri: xpt.pathToFileURL(rEe.resolve(b)).href,
        },
      }),
        T(`LSP: Sent didSave for ${b}`));
    } catch (S) {
      let A = Error(`Failed to sync file save ${b}: ${be(S)}`);
      throw (
        T(A.message, {
          level: "error",
        }),
        A
      );
    }
  }
  async function g(b) {
    let _ = a(b);
    if (!_ || _.state !== "running") return;
    let S = xpt.pathToFileURL(rEe.resolve(b)).href;
    try {
      (await _.sendNotification("textDocument/didClose", {
        textDocument: {
          uri: S,
        },
      }),
        n.delete(S),
        r.delete(S),
        T(`LSP: Sent didClose for ${b}`));
    } catch (A) {
      let v = Error(`Failed to sync file close ${b}: ${be(A)}`);
      throw (
        T(v.message, {
          level: "error",
        }),
        v
      );
    }
  }
  function h(b) {
    let _ = xpt.pathToFileURL(rEe.resolve(b)).href;
    return n.has(_);
  }
  function y(b) {
    return r.get(b);
  }
  return {
    initialize: s,
    shutdown: i,
    getServerForFile: a,
    ensureServerStarted: l,
    sendRequest: c,
    getAllServers: u,
    getSupportedExtensions: d,
    openFile: p,
    changeFile: f,
    saveFile: m,
    closeFile: g,
    isFileOpen: h,
    getDocumentVersion: y,
  };
}
var rEe, xpt;
