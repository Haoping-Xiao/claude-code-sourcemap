// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lj
// matched 2.1.88 source: src/utils/settings/types.ts
// class=modified (alt of src/utils/settings/types.ts)  jaccard=0.0834  score=0.6516  fileCov=0.0873
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var lj = E(() => {
  Xr();
  Mvs();
  BRt();
  fn();
  DE();
  ZC();
  Hws();
  lmn();
  zfn();
  zfn();
  c1u = ve(() => H.record(H.string(), H.coerce.string()));
  ((agg = ve(() => $ws(tLr()))),
    (u1u = ve(() =>
      H.object({
        source: ZRt().describe("Where to fetch the marketplace from"),
        installLocation: H.string()
          .optional()
          .describe(
            "Local cache path where marketplace manifest is stored (auto-generated if not provided)",
          ),
        autoUpdate: H.boolean()
          .optional()
          .describe(
            "Whether to automatically update this marketplace and its installed plugins on startup",
          ),
      }),
    )),
    (cmn = ve(() =>
      H.object({
        serverName: H.string()
          .regex(
            /^[a-zA-Z0-9_-]+$/,
            "Server name can only contain letters, numbers, hyphens, and underscores",
          )
          .optional()
          .describe("Name of the MCP server that users are allowed to configure"),
        serverCommand: H.array(H.string())
          .min(1, "Server command must have at least one element (the command)")
          .optional()
          .describe("Command array [command, ...args] to match exactly for allowed stdio servers"),
        serverUrl: H.string()
          .optional()
          .describe(
            'URL pattern with wildcard support (e.g., "https://*.example.com/*") for allowed remote MCP servers',
          ),
      }).refine(
        (e) =>
          On(
            [e.serverName !== void 0, e.serverCommand !== void 0, e.serverUrl !== void 0],
            Boolean,
          ) === 1,
        {
          message: 'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"',
        },
      ),
    )),
    (umn = ve(() =>
      H.object({
        serverName: H.string()
          .min(1, "Server name must be non-empty")
          .refine((e) => e.trim().length > 0, {
            message: "Server name must not be whitespace-only",
          })
          .refine((e) => e === e.trim(), {
            message:
              "Server name has leading or trailing whitespace and will never match (names are compared verbatim)",
          })
          .optional()
          .describe("Name of the MCP server that is explicitly blocked"),
        serverCommand: H.array(H.string())
          .min(1, "Server command must have at least one element (the command)")
          .optional()
          .describe("Command array [command, ...args] to match exactly for blocked stdio servers"),
        serverUrl: H.string()
          .optional()
          .describe(
            'URL pattern with wildcard support (e.g., "https://*.example.com/*") for blocked remote MCP servers',
          ),
      }).refine(
        (e) =>
          On(
            [e.serverName !== void 0, e.serverCommand !== void 0, e.serverUrl !== void 0],
            Boolean,
          ) === 1,
        {
          message: 'Entry must have exactly one of "serverName", "serverCommand", or "serverUrl"',
        },
      ),
    )),
    (d1u = ve(() =>
      H.object({
        path: H.string().describe("Absolute path to the helper executable"),
        timeoutMs: H.number().int().min(1000).optional(),
        refreshIntervalMs: H.union([H.literal(0), H.number().int().min(60000)]).optional(),
      }),
    )),
    (TCe = ["skills", "agents", "hooks", "mcp"]),
    (Dws = Object.freeze({
      type: "invalid-entry-stripped",
    })),
    (p1u = ve(() =>
      H.union([
        H.object({
          type: H.literal("regex").describe(
            'Config variant. This client understands "regex": matches turn output and builds a URL from named capture groups. Entries with other variants are preserved but skipped at runtime.',
          ),
          pattern: H.string().describe(
            "Regex matched against turn output (tool results and assistant text)",
          ),
          url: H.string().describe(
            "Link target. {name} placeholders are filled from named regex capture groups, e.g. (?<id>...) -> {id}. Values are URL-encoded; the origin must be literal in the template. The scheme must be https, http, or a recognized editor or workspace deep-link scheme: vscode, vscode-insiders, cursor, windsurf, zed, jetbrains, idea, slack, linear, notion, figma.",
          ),
          label: H.string()
            .optional()
            .describe(
              "Badge text. {name} placeholders filled from named capture groups; defaults to the full match.",
            ),
        }).passthrough(),
        H.object({
          type: H.string().describe(
            "Config variant discriminator for entries this client does not understand; the entry is preserved as-is and skipped at runtime.",
          ),
        }).passthrough(),
      ]),
    )));
  ((_M = ve(() => uLr(tLr()))),
    (Pws = Object.freeze({
      serverName: "invalid-entry-stripped",
    })));
});
function pLr(e) {
  let t = e ? uLr(e) : _M(),
    n = zK(t, {
      unrepresentable: "any",
    });
  return De(n, null, 2);
}
