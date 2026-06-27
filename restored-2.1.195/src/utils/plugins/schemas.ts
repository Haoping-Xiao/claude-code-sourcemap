// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZC
// matched 2.1.88 source: src/utils/plugins/schemas.ts
// class=modified  jaccard=0.3958  score=0.6182  fileCov=0.5239
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ZC] deps: Xr, zfn, bCe, je, Mx
((JRt = new Set(["claude-community", "claude-plugins-community"])),
  (SCe = new Set([
    "claude-code-marketplace",
    "claude-code-plugins",
    "claude-plugins-official",
    "anthropic-marketplace",
    "anthropic-plugins",
    "agent-skills",
    "anthropic-agent-skills",
    "life-sciences",
    "knowledge-work-plugins",
    "claude-for-legal",
    "claude-for-financial-services",
    "financial-services-plugins",
  ])),
  (QRr = new Set([...SCe, ...JRt])),
  (vOu = new Set(["knowledge-work-plugins"])));
((wOu =
  /(?:official[^a-z0-9]*(anthropic|claude)|(?:anthropic|claude)[^a-z0-9]*official|^(?:anthropic|claude)[^a-z0-9]*(marketplace|plugins|official))/i),
  (COu = /[^\u0020-\u007E]/));
xOu = new Set(["https:", "http:", "git:", "git+https:", "git+http:", "git+ssh:", "ssh:"]);
((o9 = ve(() => H.string().startsWith("./"))),
  (r2e = ve(() => o9().endsWith(".json"))),
  (dws = ve(() =>
    H.union([
      o9()
        .refine((e) => e.endsWith(".mcpb") || e.endsWith(".dxt"), {
          message: "MCPB file path must end with .mcpb or .dxt",
        })
        .describe("Path to MCPB file relative to plugin root"),
      H.string()
        .url()
        .refine((e) => e.endsWith(".mcpb") || e.endsWith(".dxt"), {
          message: "MCPB URL must end with .mcpb or .dxt",
        })
        .describe("URL to MCPB file"),
    ]),
  )),
  (XRr = ve(() => o9().endsWith(".md"))),
  (JRr = ve(() => H.union([XRr(), o9()]))),
  (fws = ve(() =>
    H.string()
      .min(1, "Marketplace must have a name")
      .refine((e) => !e.includes(" "), {
        message: 'Marketplace name cannot contain spaces. Use kebab-case (e.g., "my-marketplace")',
      })
      .refine((e) => !e.includes("/") && !e.includes("\\") && !e.includes("..") && e !== ".", {
        message:
          'Marketplace name cannot contain path separators (/ or \\), ".." sequences, or be "."',
      })
      .refine((e) => !IOu(e), {
        message: "Marketplace name impersonates an official Anthropic/Claude marketplace",
      })
      .refine((e) => e.toLowerCase() !== "inline", {
        message: 'Marketplace name "inline" is reserved for --plugin-dir session plugins',
      })
      .refine((e) => e.toLowerCase() !== "builtin", {
        message: 'Marketplace name "builtin" is reserved for built-in plugins',
      })
      .refine((e) => e.toLowerCase() !== "skills-dir", {
        message:
          'Marketplace name "skills-dir" is reserved for plugins auto-loaded from .claude/skills/',
      }),
  )),
  (QRt = ve(() =>
    H.object({
      name: H.string()
        .min(1, "Author name cannot be empty")
        .describe("Display name of the plugin author or organization"),
      email: H.string().optional().describe("Contact email for support or feedback"),
      url: H.string().optional().describe("Website, GitHub profile, or organization URL"),
    }),
  )),
  (ROu = ve(() =>
    H.object({
      $schema: H.string()
        .optional()
        .describe("JSON Schema reference for editor autocomplete/validation; ignored at load time"),
      name: H.string()
        .min(1, "Plugin name cannot be empty")
        .refine((e) => !e.includes(" "), {
          message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")',
        })
        .describe("Unique identifier for the plugin, used for namespacing (prefer kebab-case)"),
      displayName: H.string()
        .optional()
        .describe(
          'Human-readable name shown in UI (e.g., "GitHub Utils"). Falls back to `name` when omitted. Unlike `name`, may contain spaces and any casing; not used for namespacing or lookup.',
        ),
      version: H.string()
        .optional()
        .describe("Semantic version (e.g., 1.2.3) following semver.org specification"),
      description: H.string()
        .optional()
        .describe("Brief, user-facing explanation of what the plugin provides"),
      author: QRt().optional().describe("Information about the plugin creator or maintainer"),
      homepage: H.string().url().optional().describe("Plugin homepage or documentation URL"),
      repository: H.string().optional().describe("Source code repository URL"),
      license: H.string().optional().describe("SPDX license identifier (e.g., MIT, Apache-2.0)"),
      keywords: H.array(H.string())
        .optional()
        .describe("Tags for plugin discovery and categorization"),
      defaultEnabled: H.boolean()
        .optional()
        .describe(
          "Whether the plugin starts enabled when the user has no explicit enabled/disabled setting for it (default: true). Explicit enabledPlugins values always win, and a plugin required by an enabled dependent is enabled regardless of this value.",
        ),
      dependencies: H.array(QOu())
        .optional()
        .describe(
          `Plugins that must be enabled for this plugin to function. Bare names (no "@marketplace") are resolved against the declaring plugin's own marketplace.`,
        ),
    }),
  )),
  (Xfn = ve(() =>
    H.object({
      description: H.string()
        .optional()
        .describe("Brief, user-facing explanation of what these hooks provide"),
      hooks: H.lazy(() => IG()).describe(
        "The hooks provided by the plugin, in the same format as the one used for settings",
      ),
    }),
  )),
  (LOu = ve(() =>
    H.object({
      hooks: H.union([
        r2e().describe(
          "Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root",
        ),
        H.lazy(() => IG()).describe(
          "Additional hooks (in addition to those in hooks/hooks.json, if it exists)",
        ),
        H.array(
          H.union([
            r2e().describe(
              "Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root",
            ),
            H.lazy(() => IG()).describe(
              "Additional hooks (in addition to those in hooks/hooks.json, if it exists)",
            ),
          ]),
        ),
      ]),
    }),
  )),
  (DOu = ve(() =>
    H.object({
      source: JRr().optional().describe("Path to command markdown file, relative to plugin root"),
      content: H.string().optional().describe("Inline markdown content for the command"),
      description: H.string().optional().describe("Command description override"),
      argumentHint: H.string().optional().describe('Hint for command arguments (e.g., "[file]")'),
      model: H.string().optional().describe("Default model for this command"),
      allowedTools: H.array(H.string()).optional().describe("Tools allowed when command runs"),
    }).refine((e) => (e.source && !e.content) || (!e.source && e.content), {
      message:
        'Command must have either "source" (file path) or "content" (inline markdown), but not both',
    }),
  )),
  (POu = ve(() =>
    H.object({
      commands: H.union([
        JRr().describe(
          "Path to a command file or skill directory, relative to the plugin root. When set, the commands/ directory is not auto-loaded \u2014 list its files here if you want both.",
        ),
        H.array(
          JRr().describe(
            "Path to a command file or skill directory, relative to the plugin root. When set, the commands/ directory is not auto-loaded \u2014 list its files here if you want both.",
          ),
        ).describe(
          "List of command file or skill directory paths. When set, the commands/ directory is not auto-loaded.",
        ),
        H.record(H.string(), DOu()).describe(
          'Object mapping of command names to their metadata and source files. Command name becomes the slash command name (e.g., "about" \u2192 "/plugin:about")',
        ),
      ]),
    }),
  )),
  (MOu = ve(() =>
    H.object({
      agents: H.union([
        XRr().describe(
          "Path to an agent file, relative to the plugin root. When set, the agents/ directory is not auto-loaded \u2014 list its files here if you want both.",
        ),
        H.array(
          XRr().describe(
            "Path to an agent file, relative to the plugin root. When set, the agents/ directory is not auto-loaded \u2014 list its files here if you want both.",
          ),
        ).describe("List of agent file paths. When set, the agents/ directory is not auto-loaded."),
      ]),
    }),
  )),
  ($Ou = ve(() =>
    H.object({
      skills: H.union([
        o9().describe(
          "Path to a skill directory, relative to the plugin root. Loaded in addition to the skills/ directory (except: for a marketplace entry whose source resolves to the marketplace root, declaring a specific subdirectory replaces the skills/ scan).",
        ),
        H.array(o9().describe("Path to a skill directory, relative to the plugin root.")).describe(
          "List of skill directory paths, loaded in addition to the skills/ directory (except: for a marketplace entry whose source resolves to the marketplace root, declaring specific subdirectories replaces the skills/ scan).",
        ),
      ]),
    }),
  )),
  (mws = ve(() =>
    H.object({
      outputStyles: H.union([
        o9().describe(
          "Path to an output-styles directory or file, relative to the plugin root. When set, the output-styles/ directory is not auto-loaded \u2014 list its files here if you want both.",
        ),
        H.array(
          o9().describe(
            "Path to an output-styles directory or file, relative to the plugin root. When set, the output-styles/ directory is not auto-loaded \u2014 list its files here if you want both.",
          ),
        ).describe(
          "List of output-style directory or file paths. When set, the output-styles/ directory is not auto-loaded.",
        ),
      ]),
    }),
  )),
  (gws = ve(() =>
    H.object({
      themes: H.union([
        o9().describe(
          "Path to a themes directory or file, relative to the plugin root. When set, the themes/ directory is not auto-loaded \u2014 list its files here if you want both.",
        ),
        H.array(
          o9().describe(
            "Path to a themes directory or file, relative to the plugin root. When set, the themes/ directory is not auto-loaded \u2014 list its files here if you want both.",
          ),
        ).describe(
          "List of theme directory or file paths. When set, the themes/ directory is not auto-loaded.",
        ),
      ]),
    }),
  )),
  (OOu = ve(() =>
    H.object({
      workflows: H.union([
        o9().describe(
          "Path to a workflows directory or .js file, relative to the plugin root. When set, the workflows/ directory is not auto-loaded \u2014 list its files here if you want both.",
        ),
        H.array(
          o9().describe(
            "Path to a workflows directory or .js file, relative to the plugin root. When set, the workflows/ directory is not auto-loaded \u2014 list its files here if you want both.",
          ),
        ).describe(
          "List of workflow directory or .js file paths. When set, the workflows/ directory is not auto-loaded.",
        ),
      ]).optional(),
    }),
  )),
  (pws = ve(() => H.string().min(1))),
  (NOu = ve(() =>
    H.string()
      .min(2)
      .refine((e) => e.startsWith("."), {
        message: 'File extensions must start with dot (e.g., ".ts", not "ts")',
      }),
  )),
  (BOu = ve(() =>
    H.object({
      mcpServers: H.union([
        r2e().describe(
          "MCP servers to include in the plugin (in addition to those in the .mcp.json file, if it exists)",
        ),
        dws().describe("Path or URL to MCPB file containing MCP server configuration"),
        H.record(H.string(), Nae()).describe("MCP server configurations keyed by server name"),
        H.array(
          H.union([
            r2e().describe("Path to MCP servers configuration file"),
            dws().describe("Path or URL to MCPB file"),
            H.record(H.string(), Nae()).describe("Inline MCP server configurations"),
          ]),
        ).describe("Array of MCP server configurations (paths, MCPB files, or inline definitions)"),
      ]),
    }),
  )),
  (hws = ve(() =>
    H.object({
      type: H.enum(["string", "number", "boolean", "directory", "file"]).describe(
        "Type of the configuration value",
      ),
      title: H.string().describe("Human-readable label shown in the config dialog"),
      description: H.string().describe("Help text shown beneath the field in the config dialog"),
      required: H.boolean()
        .optional()
        .describe("If true, validation fails when this field is empty"),
      default: H.union([H.string(), H.number(), H.boolean(), H.array(H.string())])
        .optional()
        .describe("Default value used when the user provides nothing"),
      multiple: H.boolean().optional().describe("For string type: allow an array of strings"),
      sensitive: H.boolean()
        .optional()
        .describe(
          "If true, masks dialog input and stores value in secure storage (keychain/credentials file) instead of settings.json",
        ),
      min: H.number().optional().describe("Minimum value (number type only)"),
      max: H.number().optional().describe("Maximum value (number type only)"),
    }).strict(),
  )),
  (UOu = ve(() =>
    H.object({
      userConfig: H.record(
        H.string().regex(
          /^[A-Za-z_]\w*$/,
          "Option keys must be valid identifiers (letters, digits, underscore; no leading digit) \u2014 they become CLAUDE_PLUGIN_OPTION_<KEY> env vars in hooks",
        ),
        hws(),
      )
        .optional()
        .describe(
          "User-configurable values this plugin needs. Prompted at enable time. Non-sensitive values saved to settings.json; sensitive values to secure storage. Available as ${user_config.KEY} in MCP/LSP server config, hook commands, and (non-sensitive only) skill/agent content. Keep sensitive value counts small.",
        ),
    }),
  )),
  (FOu = ve(() =>
    H.object({
      channels: H.array(
        H.object({
          server: H.string()
            .min(1)
            .describe(
              "Name of the MCP server this channel binds to. Must match a key in this plugin's mcpServers.",
            ),
          displayName: H.string()
            .optional()
            .describe(
              'Human-readable name shown in the config dialog title (e.g., "Telegram"). Defaults to the server name.',
            ),
          userConfig: H.record(H.string(), hws())
            .optional()
            .describe(
              "Fields to prompt the user for when enabling this plugin in assistant mode. Saved values are substituted into ${user_config.KEY} references in the mcpServers env.",
            ),
        }).strict(),
      ).describe(
        "Channels this plugin provides. Each entry declares an MCP server as a message channel and optionally specifies user configuration to prompt for at enable time.",
      ),
    }),
  )),
  (Det = ve(() =>
    H.strictObject({
      command: H.string()
        .min(1)
        .refine(
          (e) => {
            if (e.includes(" ") && !e.startsWith("/")) return !1;
            return !0;
          },
          {
            message: "Command should not contain spaces. Use args array for arguments.",
          },
        )
        .describe('Command to execute the LSP server (e.g., "typescript-language-server")'),
      args: H.array(pws()).optional().describe("Command-line arguments to pass to the server"),
      extensionToLanguage: H.record(NOu(), pws())
        .refine((e) => Object.keys(e).length > 0, {
          message: "extensionToLanguage must have at least one mapping",
        })
        .describe(
          "Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping.",
        ),
      transport: H.enum(["stdio", "socket"])
        .default("stdio")
        .describe("Communication transport mechanism"),
      env: H.record(H.string(), H.string())
        .optional()
        .describe("Environment variables to set when starting the server"),
      initializationOptions: H.unknown()
        .optional()
        .describe("Initialization options passed to the server during initialization"),
      settings: H.unknown()
        .optional()
        .describe("Settings passed to the server via workspace/didChangeConfiguration"),
      workspaceFolder: H.string()
        .optional()
        .describe("Workspace folder path to use for the server"),
      startupTimeout: H.number()
        .int()
        .positive()
        .optional()
        .describe("Maximum time to wait for server startup (milliseconds)"),
      shutdownTimeout: H.number()
        .int()
        .positive()
        .optional()
        .describe("Maximum time to wait for graceful shutdown (milliseconds)"),
      restartOnCrash: H.boolean()
        .optional()
        .describe("Whether to restart the server if it crashes"),
      maxRestarts: H.number()
        .int()
        .nonnegative()
        .optional()
        .describe("Maximum number of restart attempts before giving up"),
      diagnostics: H.boolean()
        .optional()
        .describe(
          "Whether to push publishDiagnostics into the agent context after edits. Set to false to keep LSP navigation (goToDefinition, hover, etc.) but suppress automatic diagnostic injection. Defaults to true.",
        ),
    }),
  )),
  (jOu = ve(() =>
    H.strictObject({
      name: H.string()
        .min(1)
        .describe(
          "Identifier for this monitor, unique within the plugin. Used to dedupe so re-arming (plugin reload, repeat skill invoke) does not spawn duplicates.",
        ),
      command: H.string()
        .min(1)
        .describe(
          'Shell command to run as a persistent background monitor. Each stdout line is delivered to the model as a <task_notification> event; the process runs for the session lifetime. ${CLAUDE_PLUGIN_ROOT}, ${CLAUDE_PLUGIN_DATA}, ${CLAUDE_PROJECT_DIR}, ${user_config.*}, and ${ENV_VAR} are substituted. Runs in the session cwd \u2014 prefix with `cd "${CLAUDE_PLUGIN_ROOT}" && ` if the script needs its own directory.',
        ),
      description: H.string()
        .min(1)
        .describe(
          "Short human-readable description of what is being monitored (shown in task panel and notification summary).",
        ),
      when: H.union([
        H.literal("always"),
        H.string()
          .startsWith("on-skill-invoke:")
          .refine((e) => e.length > 16, {
            message: "on-skill-invoke: must specify a skill name",
          }),
      ])
        .default("always")
        .describe(
          'Arm trigger. "always" arms at session start and on plugin reload. "on-skill-invoke:<skill>" arms the first time that skill is dispatched (via Skill tool or slash command).',
        ),
    }),
  )),
  (eLr = ve(() =>
    H.array(jOu()).refine((e) => new Set(e.map((t) => t.name)).size === e.length, {
      message: "Monitor names must be unique within a plugin",
    }),
  )),
  (yws = ve(() =>
    H.object({
      monitors: H.union([
        r2e().describe(
          "Path to a JSON file containing the monitors array, relative to the plugin root",
        ),
        eLr(),
      ]).describe(
        "Background watch scripts the host arms as persistent Monitor tasks (unsandboxed, same trust tier as hooks) so plugins need not instruct the model to arm them. When omitted, monitors/monitors.json at the plugin root is loaded if present.",
      ),
    }),
  )),
  (GOu = ve(() =>
    H.object({
      lspServers: H.union([
        r2e().describe("Path to .lsp.json configuration file relative to plugin root"),
        H.record(H.string(), Det()).describe("LSP server configurations keyed by server name"),
        H.array(
          H.union([
            r2e().describe("Path to LSP configuration file"),
            H.record(H.string(), Det()).describe("Inline LSP server configurations"),
          ]),
        ).describe("Array of LSP server configurations (paths or inline definitions)"),
      ]),
    }),
  )),
  (_ws = ve(() =>
    H.string()
      .refine(
        (e) => !e.includes("..") && !e.includes("//"),
        "Package name cannot contain path traversal patterns",
      )
      .refine((e) => {
        let t = /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/,
          n = /^[a-z0-9][a-z0-9-._]*$/;
        return t.test(e) || n.test(e);
      }, "Invalid npm package name format"),
  )),
  (WOu = /^[a-z0-9][a-z0-9._-]*$/),
  (qOu = ve(() =>
    H.object({
      binaries: H.record(
        H.string().regex(WOu, "Invalid binary basename"),
        H.object({
          sha256: H.string().regex(/^[0-9a-f]{64}$/, "sha256 must be 64 lowercase hex"),
        }).strict(),
      ).describe(
        "sha256-pinned files to fetch into bin/ at install time, keyed by basename (target triple encoded in the name)",
      ),
    }),
  )),
  (VOu = ve(() =>
    H.object({
      settings: H.record(H.string(), H.unknown())
        .optional()
        .describe(
          "Settings to merge into the user settings while this plugin is enabled. Only the documented allowlisted keys are applied.",
        ),
    }),
  )),
  (zOu = ve(() =>
    H.object({
      experimental: H.preprocess(
        (e) => (typeof e === "object" && e !== null && !Array.isArray(e) ? e : void 0),
        H.object({
          ...gws().partial().shape,
          ...yws().partial().shape,
          ...mws().partial().shape,
          evals: H.union([H.string(), H.array(H.string())])
            .optional()
            .describe(
              "Path(s) to evaluation query files for `claude plugin eval`. Defaults to `evals/`.",
            ),
        })
          .passthrough()
          .optional()
          .describe(
            "Components whose manifest shape may change without a deprecation cycle. Move a key out of here once it is promoted to stable.",
          ),
      ),
    }),
  )),
  (o2e = ve(() =>
    H.object({
      ...ROu().shape,
      ...LOu().partial().shape,
      ...POu().partial().shape,
      ...MOu().partial().shape,
      ...$Ou().partial().shape,
      ...mws().partial().shape,
      ...gws().partial().shape,
      ...OOu().shape,
      ...FOu().partial().shape,
      ...BOu().partial().shape,
      ...GOu().partial().shape,
      ...yws().partial().shape,
      ...VOu().partial().shape,
      ...UOu().partial().shape,
      ...qOu().partial().shape,
      ...zOu().partial().shape,
    }),
  )),
  (ZRt = ve(() =>
    H.discriminatedUnion("source", [
      H.object({
        source: H.literal("url"),
        url: H.string().url().describe("Direct URL to marketplace.json file"),
        headers: H.record(H.string(), H.string())
          .optional()
          .describe("Custom HTTP headers (e.g., for authentication)"),
      }),
      H.object({
        source: H.literal("github"),
        repo: H.string().describe("GitHub repository in owner/repo format"),
        ref: H.string()
          .optional()
          .describe(
            'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
          ),
        path: H.string()
          .optional()
          .describe(
            "Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)",
          ),
        sparsePaths: H.array(H.string())
          .optional()
          .describe(
            'Directories to include via git sparse-checkout (cone mode). Use for monorepos where the marketplace lives in a subdirectory. Example: [".claude-plugin", "plugins"]. If omitted, the full repository is cloned.',
          ),
        skipLfs: H.boolean()
          .optional()
          .describe(
            "Skip Git LFS smudge during clone and update (sets GIT_LFS_SKIP_SMUDGE=1) so LFS pointer files stay as pointers instead of downloading their content. Use for marketplaces hosted in repos with large LFS objects.",
          ),
      }),
      H.object({
        source: H.literal("git"),
        url: H.string().describe("Full git repository URL"),
        ref: H.string()
          .optional()
          .describe(
            'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
          ),
        path: H.string()
          .optional()
          .describe(
            "Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)",
          ),
        sparsePaths: H.array(H.string())
          .optional()
          .describe(
            'Directories to include via git sparse-checkout (cone mode). Use for monorepos where the marketplace lives in a subdirectory. Example: [".claude-plugin", "plugins"]. If omitted, the full repository is cloned.',
          ),
        skipLfs: H.boolean()
          .optional()
          .describe(
            "Skip Git LFS smudge during clone and update (sets GIT_LFS_SKIP_SMUDGE=1) so LFS pointer files stay as pointers instead of downloading their content. Use for marketplaces hosted in repos with large LFS objects.",
          ),
      }),
      H.object({
        source: H.literal("npm"),
        package: _ws().describe("NPM package containing marketplace.json"),
      }),
      H.object({
        source: H.literal("file"),
        path: H.string().describe("Local file path to marketplace.json"),
      }),
      H.object({
        source: H.literal("directory"),
        path: H.string().describe("Local directory containing .claude-plugin/marketplace.json"),
      }),
      H.object({
        source: H.literal("skills-dir"),
      }).describe(
        "Policy-list sentinel for the ~/.claude/skills/ auto-load (@skills-dir plugins). In strictKnownMarketplaces: opt the scan back IN (by default any allowlist blocks it). In blockedMarketplaces: turn the scan OFF without otherwise restricting marketplaces. Only meaningful in those two managed-settings lists (areLocalPluginDirsAllowedByPolicy); known_marketplaces.json / marketplace add etc. ignore it.",
      ),
      H.object({
        source: H.literal("hostPattern"),
        hostPattern: H.string().describe(
          'Regex pattern to match the host/domain extracted from any marketplace source type. For github sources, matches against github.com. For git sources (SSH or HTTPS), extracts the hostname from the URL. Use in strictKnownMarketplaces to allow all marketplaces from a specific host (e.g., "^github\\.mycompany\\.com$").',
        ),
      }),
      H.object({
        source: H.literal("pathPattern"),
        pathPattern: H.string().describe(
          'Regex pattern matched against the .path field of file and directory sources. Use in strictKnownMarketplaces to allow filesystem-based marketplaces alongside hostPattern restrictions for network sources. Use ".*" to allow all filesystem paths, or a narrower pattern (e.g., "^/opt/approved/") to restrict to specific directories.',
        ),
      }),
      H.object({
        source: H.literal("settings"),
        name: fws()
          .refine((e) => !QRr.has(e.toLowerCase()), {
            message:
              "Reserved marketplace names cannot be used with settings sources. validateOfficialNameSource only accepts github/git sources from anthropics/* for these names; a settings source would be rejected after loadAndCacheMarketplace has already written to disk with cleanupNeeded=false.",
          })
          .describe(
            "Marketplace name. Must match the extraKnownMarketplaces key (enforced); the synthetic manifest is written under this name. Same validation " +
              "as PluginMarketplaceSchema plus reserved-name rejection \u2014 " +
              "validateOfficialNameSource runs after the disk write, too late to clean up.",
          ),
        plugins: H.array(KOu()).describe("Plugin entries declared inline in settings.json"),
        owner: QRt().optional(),
      }).describe(
        "Inline marketplace manifest defined directly in settings.json. The reconciler writes a synthetic marketplace.json to the cache; diffMarketplaces detects edits via isEqual on the stored source (the plugins array is inside this object, so edits surface as sourceChanged).",
      ),
    ]),
  )),
  (YRr = ve(() =>
    H.string()
      .length(40)
      .regex(/^[a-f0-9]{40}$/, "Must be a full 40-character lowercase git commit SHA"),
  )),
  (bws = ve(() =>
    H.union([
      H.preprocess((e) => (e === "." ? "./" : e), o9()).describe(
        "Path to the plugin root, relative to the marketplace root (the directory containing .claude-plugin/, not .claude-plugin/ itself)",
      ),
      H.object({
        source: H.literal("npm"),
        package: _ws()
          .or(
            H.string().refine(
              (e) =>
                /^(?:file|https?|git(?:\+https?|\+ssh)?|ssh|github|gitlab|bitbucket):/i.test(e) ||
                !e.includes(".."),
              'Package reference cannot contain ".." path segments',
            ),
          )
          .describe(
            "Package name (or url, or local path, or anything else that can be passed to `npm` as a package)",
          ),
        version: H.string()
          .optional()
          .describe("Specific version or version range (e.g., ^1.0.0, ~2.1.0)"),
        registry: H.string()
          .url()
          .optional()
          .describe("Custom NPM registry URL (defaults to using system default, likely npmjs.org)"),
      }).describe("NPM package as plugin source"),
      H.object({
        source: H.literal("url"),
        url: H.string().describe("Full git repository URL (https:// or git@)"),
        ref: H.string()
          .optional()
          .describe(
            'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
          ),
        sha: YRr().optional().describe("Specific commit SHA to use"),
      }),
      H.object({
        source: H.literal("github"),
        repo: H.string().describe("GitHub repository in owner/repo format"),
        ref: H.string()
          .optional()
          .describe(
            'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
          ),
        sha: YRr().optional().describe("Specific commit SHA to use"),
      }),
      H.object({
        source: H.literal("git-subdir"),
        url: H.string().describe(
          "Git repository: GitHub owner/repo shorthand, https://, or git@ URL",
        ),
        path: H.string()
          .min(1)
          .describe(
            'Subdirectory within the repo containing the plugin (e.g., "tools/claude-plugin"). Cloned sparsely using partial clone (--filter=tree:0) to minimize bandwidth for monorepos.',
          ),
        ref: H.string()
          .optional()
          .describe(
            'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.',
          ),
        sha: YRr().optional().describe("Specific commit SHA to use"),
      }).describe(
        "Plugin located in a subdirectory of a larger repository (monorepo). Only the specified subdirectory is materialized; the rest of the repo is not downloaded.",
      ),
      H.object({
        source: H.literal("unsupported"),
      }).describe(
        "Placeholder for source types this Claude Code version does not " +
          "recognize. Never authored by hand \u2014 PluginMarketplaceSchema rewrites " +
          'unparseable sources to this so the entry remains in marketplace.plugins (detectDelistedPlugins must not see it as removed). Install attempts fail at cachePlugin with a clear "update Claude Code" message.',
      ),
    ]),
  )),
  (KOu = ve(() =>
    H.object({
      name: H.string()
        .min(1, "Plugin name cannot be empty")
        .refine((e) => !e.includes(" "), {
          message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")',
        })
        .describe("Plugin name as it appears in the target repository"),
      source: bws().describe(
        "Where to fetch the plugin from. Must be a remote source \u2014 relative " +
          "paths have no marketplace repository to resolve against.",
      ),
      description: H.string().optional(),
      version: H.string().optional(),
      strict: H.boolean().optional(),
    })
      .refine((e) => typeof e.source !== "string", {
        message:
          'Plugins in a settings-sourced marketplace must use remote sources (github, git-subdir, npm, url). Relative-path sources like "./foo" have no marketplace repository to resolve against.',
      })
      .refine((e) => typeof e.source === "string" || e.source.source !== "unsupported", {
        message:
          "source.source: 'unsupported' is a parse-time placeholder and cannot be authored. Use a remote source (github, git-subdir, npm, url).",
      }),
  )));
((Jfn = ve(() =>
  H.object({
    cli: H.array(H.string().max(64))
      .max(10)
      .optional()
      .describe(
        'First command tokens (e.g. ["stripe"]) \u2014 exact match against commands run this session.',
      ),
    hosts: H.array(H.string().max(128))
      .max(20)
      .optional()
      .describe(
        'Hostnames (e.g. ["api.stripe.com"]) \u2014 exact, case-insensitive match against ' +
          "hostnames seen in https?:// URLs in bash commands run this session. Bare hostname only: lowercase, no scheme, no port, no path.",
      ),
    filesRead: H.array(H.string().max(256))
      .max(10)
      .optional()
      .describe(
        'Glob patterns (e.g. ["**/*.tf"]) \u2014 the plugin is relevant when a file Claude has read ' +
          "this session matches any pattern. Matched against read-file paths, forward-slash normalized, case-insensitive.",
      ),
    manifestDeps: H.array(
      H.object({
        file: H.string().max(256),
        pattern: H.string().max(256),
      }),
    )
      .max(10)
      .optional()
      .describe(
        "Dependency declared in a package manifest. Each {file, pattern} is a pair of RegExp sources: " +
          "`file` matches the manifest filename (package.json, go.mod, requirements.txt, \u2026); " +
          "`pattern` matches the dependency declaration inside that file. Evaluated against files read this session.",
      ),
    cwd: H.array(H.string().max(256))
      .max(10)
      .optional()
      .describe(
        'Glob patterns (e.g. ["Engine/Source/Runtime/Renderer/**"]) \u2014 the plugin is relevant when the ' +
          `session's working directory is at or under a directory matching the pattern. Matched against the cwd both relative to the enclosing git repo root and as an absolute path, forward-slash normalized, case-insensitive. A bare directory (no glob characters) means "cwd is at or under this directory". Known at session start, so this signal can surface a suggestion before the first turn.`,
      ),
  }),
)),
  (Qfn = ve(() =>
    H.object({
      topic: H.string()
        .max(64)
        .optional()
        .describe(
          'What the user is working with when this plugin is relevant \u2014 fills "Working with {topic}?". ' +
            'Often the product name (e.g. "Stripe"); use a domain (e.g. "design") when the plugin name does not read naturally as a topic. Defaults to the plugin name with each hyphen-segment capitalized.',
        ),
      signals: Jfn().optional().describe("Matchers that determine when the plugin is relevant."),
    }),
  )),
  (Zfn = ve(() =>
    o2e()
      .partial()
      .extend({
        name: H.string()
          .min(1, "Plugin name cannot be empty")
          .refine((e) => !e.includes(" "), {
            message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")',
          })
          .describe("Unique identifier matching the plugin name"),
        source: bws().describe("Where to fetch the plugin from"),
        category: H.string()
          .optional()
          .describe('Category for organizing plugins (e.g., "productivity", "development")'),
        tags: H.array(H.string()).optional().describe("Tags for searchability and discovery"),
        strict: H.boolean()
          .optional()
          .default(!0)
          .describe(
            "Require the plugin manifest to be present in the plugin folder. If false, the marketplace entry provides the manifest.",
          ),
        relevance: H.preprocess(
          (e) => (typeof e === "object" && e !== null && !Array.isArray(e) ? e : void 0),
          Qfn().optional(),
        ).describe(
          `Declares when this plugin is relevant to the user's work. Consumed by the spinner tip ("Working with {topic}?"), session-start auto-suggest, and marketplace browse ranking.`,
        ),
      }),
  )),
  (YOu = ve(() =>
    H.object({
      name: H.string()
        .min(1)
        .refine((e) => !e.includes(" ")),
    }),
  )));
((bY = ve(() =>
  H.object({
    $schema: H.string()
      .optional()
      .describe("JSON Schema reference for editor autocomplete/validation; ignored at load time"),
    name: fws(),
    version: H.string().optional().describe("Marketplace manifest version"),
    description: H.string().optional().describe("Human-readable description of this marketplace"),
    owner: QRt().describe("Marketplace maintainer or curator information"),
    plugins: H.array(H.unknown())
      .transform(XOu)
      .describe("Collection of available plugins in this marketplace"),
    forceRemoveDeletedPlugins: H.boolean()
      .optional()
      .describe(
        "When true, plugins removed from this marketplace will be automatically uninstalled and flagged for users",
      ),
    metadata: H.object({
      pluginRoot: H.string().optional().describe("Base path for relative plugin sources"),
      version: H.string().optional().describe("Marketplace version"),
      description: H.string().optional().describe("Marketplace description"),
    })
      .optional()
      .describe("Optional marketplace metadata"),
    allowCrossMarketplaceDependenciesOn: H.array(H.string())
      .optional()
      .describe(
        "Marketplace names whose plugins may be auto-installed as dependencies. Only the root marketplace's allowlist applies \u2014 no transitive trust.",
      ),
    renames: H.record(H.string(), H.string().nullable())
      .optional()
      .catch(void 0)
      .describe(
        "Append-only map of old plugin name \u2192 current name (or null when removed). The loader follows this on plugin-not-found and migrates user settings to the new name.",
      ),
  }),
)),
  (s2e = ve(() =>
    H.string().regex(
      /^[A-Za-z0-9][-A-Za-z0-9._]*@[A-Za-z0-9][-A-Za-z0-9._]*$/,
      "Plugin ID must be in format: plugin@marketplace",
    ),
  )),
  (JOu = /^[A-Za-z0-9][-A-Za-z0-9._]*(@[A-Za-z0-9][-A-Za-z0-9._]*)?(@\^[^@]*)?$/),
  (QOu = ve(() =>
    H.union([
      H.string()
        .regex(JOu, "Dependency must be a plugin name, optionally qualified with @marketplace")
        .transform((e) => e.replace(/@\^[^@]*$/, "")),
      H.object({
        name: H.string()
          .min(1)
          .regex(/^[A-Za-z0-9][-A-Za-z0-9._]*$/),
        marketplace: H.string()
          .min(1)
          .regex(/^[A-Za-z0-9][-A-Za-z0-9._]*$/)
          .optional(),
      })
        .loose()
        .transform((e) => (e.marketplace ? `${e.name}@${e.marketplace}` : e.name)),
    ]),
  )),
  (ZOu = ve(() =>
    H.object({
      version: H.string().describe("Currently installed version"),
      installedAt: H.string().describe("ISO 8601 timestamp of installation"),
      lastUpdated: H.string().optional().describe("ISO 8601 timestamp of last update"),
      installPath: H.string().describe("Absolute path to the installed plugin directory"),
      gitCommitSha: H.string()
        .optional()
        .describe("Git commit SHA for git-based plugins (for version tracking)"),
      resolvedVersion: H.string()
        .optional()
        .describe(
          "Tag-derived semver this install resolved to (when fetched via a version constraint). Used by verifyAndDemote in preference to manifest.version, since the upstream may have forgotten to bump plugin.json.",
        ),
      auto: H.boolean()
        .optional()
        .describe(
          "True when this plugin was pulled in as a dependency rather than installed explicitly. Auto-installed plugins are eligible for removal by the orphan sweep when nothing depends on them. Absent = manual (preserves pre-flag installs).",
        ),
    }),
  )),
  (tLt = ve(() =>
    H.object({
      version: H.literal(1).describe("Schema version 1"),
      plugins: H.record(s2e(), ZOu()).describe("Map of plugin IDs to their installation metadata"),
    }),
  )),
  (e1u = ve(() => H.enum(["managed", "user", "project", "local"]))),
  (t1u = ve(() =>
    H.object({
      scope: e1u().describe("Installation scope"),
      projectPath: H.string()
        .optional()
        .describe("Project path (required for project/local scopes)"),
      installPath: H.string().describe("Absolute path to the versioned plugin directory"),
      version: H.string().optional().describe("Currently installed version"),
      installedAt: H.string().optional().describe("ISO 8601 timestamp of installation"),
      lastUpdated: H.string().optional().describe("ISO 8601 timestamp of last update"),
      gitCommitSha: H.string().optional().describe("Git commit SHA for git-based plugins"),
      resolvedVersion: H.string()
        .optional()
        .describe("Tag-derived semver this install resolved to"),
      auto: H.boolean()
        .optional()
        .describe("True when pulled in as a dependency. Eligible for orphan sweep."),
    }),
  )),
  (nLt = ve(() =>
    H.object({
      version: H.literal(2).describe("Schema version 2"),
      plugins: H.record(s2e(), H.array(t1u())).describe(
        "Map of plugin IDs to arrays of installation entries",
      ),
    }),
  )),
  (Dmg = ve(() => H.union([tLt(), nLt()]))),
  (n1u = ve(() =>
    H.object({
      source: ZRt().describe("Where to fetch the marketplace from"),
      installLocation: H.string().describe("Local cache path where marketplace manifest is stored"),
      lastUpdated: H.string().describe("ISO 8601 timestamp of last marketplace refresh"),
      autoUpdate: H.boolean()
        .optional()
        .describe(
          "Whether to automatically update this marketplace and its installed plugins on startup",
        ),
    }),
  )),
  (Pet = ve(() => H.record(H.string(), n1u()))));
function tLr() {
  return r1u.filter((e) => emn[e].buildGate());
}
function Sws(e) {
  let t = {};
  for (let n of e)
    t = {
      ...t,
      ...emn[n].shape(),
    };
  return t;
}
function Ews(e) {
  let t = {};
  for (let n of e)
    t = {
      ...t,
      ...emn[n].permissionsShape?.(),
    };
  return t;
}
function Aws(e) {
  let t = [];
  for (let n of e) t.push(...(emn[n].permissionModes?.() ?? []));
  return t;
}
var r1u, emn;
