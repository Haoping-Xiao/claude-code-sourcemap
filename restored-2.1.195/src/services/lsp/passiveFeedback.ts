// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NDa
// matched 2.1.88 source: src/services/lsp/passiveFeedback.ts
// class=modified  jaccard=0.4031  score=0.5942  fileCov=0.5562
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NDa] deps: je, At, dn, dLa, $Da, ypt
((rEe = R(require("path"))), (xpt = require("url")));
function Pkp(e) {
  switch (e) {
    case 1:
      return "Error";
    case 2:
      return "Warning";
    case 3:
      return "Info";
    case 4:
      return "Hint";
    default:
      return "Error";
  }
}
function formatDiagnosticsForAttachment(params) {
  let t;
  try {
    t = params.uri.startsWith("file://") ? BDa.fileURLToPath(params.uri) : params.uri;
  } catch (r) {
    let o = Zr(r);
    (T(
      `Failed to convert URI to file path: ${params.uri}. Error: ${o.message}. Using original URI as fallback.`,
      {
        level: "error",
      },
    ),
      (t = params.uri));
  }
  let n = params.diagnostics.map((r) => ({
    message: r.message,
    severity: Pkp(r.severity),
    range: {
      start: {
        line: r.range.start.line,
        character: r.range.start.character,
      },
      end: {
        line: r.range.end.line,
        character: r.range.end.character,
      },
    },
    source: r.source,
    code: r.code !== void 0 && r.code !== null ? String(r.code) : void 0,
  }));
  return [
    {
      uri: t,
      diagnostics: n,
    },
  ];
}
function registerLSPNotificationHandlers(manager) {
  let t = manager.getAllServers(),
    n = [],
    r = 0,
    o = new Map(),
    s = 0;
  for (let [a, l] of t.entries())
    try {
      if (l?.config?.diagnostics === false) {
        (T(`Diagnostics disabled for ${a}, skipping`), s++);
        continue;
      }
      if (!l || typeof l.onNotification !== "function") {
        let c = !l
          ? "Server instance is null/undefined"
          : "Server instance has no onNotification method";
        (n.push({
          serverName: a,
          error: c,
        }),
          i6(Error(`${c} for ${a}`), c),
          T(`Skipping handler registration for ${a}: ${c}`));
        continue;
      }
      (l.onNotification("textDocument/publishDiagnostics", (c) => {
        T(`[PASSIVE DIAGNOSTICS] Handler invoked for ${a}! Params type: ${typeof c}`);
        try {
          if (!c || typeof c !== "object" || !("uri" in c) || !("diagnostics" in c)) {
            T(
              `LSP server ${a} sent invalid diagnostic params (missing uri or diagnostics): ${De(c)}`,
              {
                level: "error",
              },
            );
            return;
          }
          let u = c;
          if (
            (T(
              `Received diagnostics from ${a}: ${u.diagnostics.length} diagnostic(s) for ${u.uri}`,
            ),
            u.version !== void 0)
          ) {
            let f = manager.getDocumentVersion(u.uri);
            if (f !== void 0 && u.version < f) {
              T(
                `LSP Diagnostics: Dropping stale publishDiagnostics from ${a} for ${u.uri} (server v${u.version} < current v${f})`,
              );
              return;
            }
          }
          let d = formatDiagnosticsForAttachment(u),
            p = d[0];
          if (!p || d.length === 0 || p.diagnostics.length === 0) {
            T(`Skipping empty diagnostics from ${a} for ${u.uri}`);
            return;
          }
          try {
            (oLa({
              serverName: a,
              files: d,
            }),
              T(
                `LSP Diagnostics: Registered ${d.length} diagnostic file(s) from ${a} for async delivery`,
              ),
              o.delete(a));
          } catch (f) {
            let m = Zr(f);
            (i6(m, "Error registering LSP diagnostics"),
              T(
                `Error registering LSP diagnostics from ${a}: URI: ${u.uri}, Diagnostic count: ${p.diagnostics.length}, Error: ${m.message}`,
              ));
            let g = o.get(a) || {
              count: 0,
              lastError: "",
            };
            if ((g.count++, (g.lastError = m.message), o.set(a, g), g.count >= 3))
              T(
                `WARNING: LSP diagnostic handler for ${a} has failed ${g.count} times consecutively. Last error: ${g.lastError}. This may indicate a problem with the LSP server or diagnostic processing. Check logs for details.`,
              );
          }
        } catch (u) {
          let d = Zr(u);
          T(`Unexpected error processing diagnostics from ${a}: ${d.message}`, {
            level: "error",
          });
          let p = o.get(a) || {
            count: 0,
            lastError: "",
          };
          if ((p.count++, (p.lastError = d.message), o.set(a, p), p.count >= 3))
            T(
              `WARNING: LSP diagnostic handler for ${a} has failed ${p.count} times consecutively. Last error: ${p.lastError}. This may indicate a problem with the LSP server or diagnostic processing. Check logs for details.`,
            );
        }
      }),
        T(`Registered diagnostics handler for ${a}`),
        r++);
    } catch (c) {
      let u = Zr(c);
      (n.push({
        serverName: a,
        error: u.message,
      }),
        T(`Failed to register diagnostics handler for ${a}: Error: ${u.message}`, {
          level: "error",
        }),
        Le("lsp_diagnostics_register", "lsp_diagnostics_register_failed"));
    }
  let i = t.size;
  if (s > 0)
    G("tengu_lsp_diagnostics_disabled", {
      disabled_count: s,
      total_servers: i,
    });
  if (n.length > 0) {
    let a = n.map((l) => `${l.serverName} (${l.error})`).join(", ");
    T(
      `LSP notification handler registration: ${r}/${i} succeeded. Failed servers: ${a}. Diagnostics from failed servers will not be delivered.`,
      {
        level: "error",
      },
    );
  } else
    (T(`LSP notification handlers registered successfully for all ${i} server(s)`),
      xe("lsp_diagnostics_register"));
  return {
    totalServers: i,
    successCount: r,
    registrationErrors: n,
    diagnosticFailures: o,
  };
}
var BDa;
