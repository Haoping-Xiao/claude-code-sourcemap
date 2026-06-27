// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mvs
// matched 2.1.88 source: src/entrypoints/sandboxTypes.ts
// class=partial  jaccard=0.0681  score=0.1152  fileCov=0.1428
// note: low-confidence suggestion: src/entrypoints/sandboxTypes.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Mvs = E(() => {
  Xr();
  RRr = require("path"), fOu = ve(() => H.object({
    allowedDomains: H.array(H.string()).optional(),
    deniedDomains: H.array(H.string()).optional().describe("Domains that are always blocked, even if matched by allowedDomains. Supports the same wildcard syntax as allowedDomains. Merged from all settings sources regardless of allowManagedDomainsOnly."),
    allowManagedDomainsOnly: H.boolean().optional().describe("When true (and set in managed settings), only allowedDomains and WebFetch(domain:...) allow rules from managed settings are respected. User, project, local, and flag settings domains are ignored. Denied domains are still respected from all sources."),
    allowUnixSockets: H.array(H.string()).optional().describe("macOS only: Unix socket paths to allow. Ignored on Linux (seccomp cannot filter by path)."),
    allowAllUnixSockets: H.boolean().optional().describe("If true, allow all Unix sockets (disables blocking on both platforms)."),
    allowLocalBinding: H.boolean().optional(),
    allowMachLookup: H.array(H.string().refine(e => !(e.endsWith("*") ? e.slice(0, -1) : e).includes("*"), {
      message: 'Wildcards are only allowed as a single trailing "*" (e.g., "com.example.*" or "*" for all services).'
    })).optional().describe('macOS only: Additional XPC/Mach service names to allow looking up. Supports trailing-wildcard prefix matching (e.g., "com.apple.coresimulator.*"). Needed for tools that communicate via XPC such as the iOS Simulator or Playwright.'),
    httpProxyPort: H.number().optional(),
    socksProxyPort: H.number().optional(),
    tlsTerminate: H.object({
      caCertPath: H.string().min(1).optional(),
      caKeyPath: H.string().min(1).optional()
    }).optional().describe("[EXPERIMENTAL] Enable in-process TLS termination so the per-request filter can see HTTPS request bodies. Provide a CA cert+key, or omit both to have sandbox-runtime generate an ephemeral one for the session.")
  }).optional()), mOu = ve(() => H.object({
    allowWrite: H.array(H.string()).optional().describe("Additional paths to allow writing within the sandbox. Merged with paths from Edit(...) allow permission rules."),
    denyWrite: H.array(H.string()).optional().describe("Additional paths to deny writing within the sandbox. Merged with paths from Edit(...) deny permission rules."),
    denyRead: H.array(H.string()).optional().describe("Additional paths to deny reading within the sandbox. Merged with paths from Read(...) deny permission rules."),
    allowRead: H.array(H.string()).optional().describe("Paths to re-allow reading within denyRead regions. Takes precedence over denyRead for matching paths."),
    allowManagedReadPathsOnly: H.boolean().optional().describe("When true (set in managed settings), only allowRead paths from policySettings are used.")
  }).optional()), LRr = ve(() => H.object({
    path: H.string().min(1).describe("Path to a credential file or directory. Same resolution as sandbox.filesystem.* paths: absolute, ~ expanded, or relative to the settings file root (project root for project settings, ~/.claude for user settings)."),
    mode: H.literal("deny").describe("Access mode for this path. Only `deny` is supported.")
  })), DRr = ve(() => H.object({
    name: H.string().regex(/^[A-Za-z_][A-Za-z0-9_]*$/, "Environment variable name must start with a letter or underscore and contain only letters, digits, and underscores").describe("Environment variable name."),
    mode: H.literal("deny").describe("Access mode for this environment variable. Only `deny` is supported.")
  })), gOu = ve(() => H.object({
    files: H.array(LRr()).optional().describe("Credential files or directories to protect. `deny` blocks reads inside the sandbox."),
    envVars: H.array(DRr()).optional().describe("Environment variables to protect. `deny` unsets the variable for sandboxed commands.")
  }).optional()), PRr = ve(() => H.object({
    enabled: H.boolean().optional(),
    failIfUnavailable: H.boolean().optional().describe("Exit with an error at startup if sandbox.enabled is true but the sandbox cannot start (missing dependencies or unsupported platform). When false (default), a warning is shown and commands run unsandboxed. Intended for managed-settings deployments that require sandboxing as a hard gate."),
    autoAllowBashIfSandboxed: H.boolean().optional(),
    allowUnsandboxedCommands: H.boolean().optional().describe("Allow commands to run outside the sandbox via the dangerouslyDisableSandbox parameter. When false, the dangerouslyDisableSandbox parameter is completely ignored and all commands must run sandboxed. Default: true."),
    network: fOu(),
    filesystem: mOu(),
    credentials: gOu(),
    ignoreViolations: H.record(H.string(), H.array(H.string())).optional(),
    enableWeakerNestedSandbox: H.boolean().optional(),
    enableWeakerNetworkIsolation: H.boolean().optional().describe("macOS only: Allow access to com.apple.trustd.agent in the sandbox. Needed for Go-based CLI tools (gh, gcloud, terraform, etc.) to verify TLS certificates when using httpProxyPort with a MITM proxy and custom CA. " + "**Reduces security** \u2014 opens a potential data exfiltration vector through the trustd service. Default: false"),
    allowAppleEvents: H.boolean().optional().describe("macOS only: Allow sandboxed commands to send Apple Events (and look up the appleeventsd Mach service). Needed for `open`, `osascript`, and browser-based auth flows that open URLs. " + "**Removes code-execution isolation** \u2014 sandboxed commands can launch other applications " + "unsandboxed with no user prompt, and can script running apps (e.g. Terminal) subject to the user's per-app TCC automation consent. " + "Only honored from user, managed/policy, or CLI (--settings) settings \u2014 " + "project settings (.claude/settings.json and .claude/settings.local.json) are ignored. Default: false"),
    excludedCommands: H.array(H.string()).optional(),
    ripgrep: H.object({
      command: H.string(),
      args: H.array(H.string()).optional()
    }).optional().describe("Custom ripgrep configuration for bundled ripgrep support"),
    bwrapPath: H.preprocess(e => typeof e === "string" && RRr.isAbsolute(e) ? e : void 0, H.string()).optional().catch(void 0).describe("Linux/WSL only: Absolute path to the bwrap (bubblewrap) binary. Overrides auto-detection via PATH. Only honored from admin-controlled managed settings."),
    socatPath: H.preprocess(e => typeof e === "string" && RRr.isAbsolute(e) ? e : void 0, H.string()).optional().catch(void 0).describe("Linux/WSL only: Absolute path to the socat binary used for the sandbox network proxy. Overrides auto-detection via PATH. Only honored from admin-controlled managed settings.")
  }).passthrough());
});
var Dfn, Pfn, $vs, MRr, NRt;