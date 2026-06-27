// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cur
// matched 2.1.88 source: src/entrypoints/init.ts
// class=modified  jaccard=0.2593  score=0.6467  fileCov=0.3021
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var cur = E(() => {
  sG();
  ft();
  er();
  Qi();
  ft();
  ft();
  yde();
  H0();
  _F();
  jc();
  EVe();
  BWt();
  aCo();
  oo();
  Opc();
  fd();
  er();
  je();
  BR();
  Mm();
  Q9();
  fn();
  At();
  Yp();
  vn();
  OMe();
  u9();
  Yf();
  Is();
  Mh();
  aze();
  kDe();
  _m();
  _1();
  WSe();
  qPn();
  Bpc();
  sj();
  i8o = Cn(async () => {
    let e = Date.now();
    (In("info", "init_started"), pa("init_function_start"));
    try {
      let t = Date.now();
      (eEe(),
        In("info", "init_configs_enabled", {
          duration_ms: Date.now() - t,
        }),
        pa("init_configs_enabled"));
      let n = Date.now();
      if (($Me(), await kKr(), $pc(), await Y9r(), km())) _Ve();
      if (
        (In("info", "init_safe_env_vars_applied", {
          duration_ms: Date.now() - n,
        }),
        pa("init_safe_env_vars_applied"),
        Eho(),
        pa("init_after_graceful_shutdown"),
        Promise.all([
          Promise.resolve().then(() => (y1(), E3e)),
          Promise.resolve().then(() => (Un(), Kzr)),
        ]).then(([s, i]) => {
          (s.initialize1PEventLogging(),
            i.onGrowthBookRefresh(() => {
              s.reinitialize1PEventLoggingIfConfigChanged();
            }));
        }),
        pa("init_after_1p_event_logging"),
        bUr().catch(ke),
        pa("init_after_oauth_populate"),
        pzr(),
        pa("init_after_jetbrains_detection"),
        uCe(),
        eyo())
      )
        Zho();
      if (SU()) ycr();
      (pa("init_after_remote_settings_check"), qVo(), HWt());
      let r = Date.now();
      (T("[init] configureGlobalMTLS starting"),
        PCs(),
        In("info", "init_mtls_configured", {
          duration_ms: Date.now() - r,
        }),
        T("[init] configureGlobalMTLS complete"));
      let o = Date.now();
      if (
        (T("[init] configureGlobalAgents starting"),
        _Dt(),
        In("info", "init_proxy_configured", {
          duration_ms: Date.now() - o,
        }),
        T("[init] configureGlobalAgents complete"),
        pa("init_network_configured"),
        isl(),
        ut(process.env.CLAUDE_CODE_REMOTE))
      )
        try {
          let { initAgentProxy: s, getAgentProxyEnv: i } = await Promise.resolve().then(
              () => (Afc(), Efc),
            ),
            { registerAgentProxyEnvFn: a } = await Promise.resolve().then(() => (_1(), K1i));
          (a(i), await s());
        } catch (s) {
          T(
            `[init] agent proxy init failed: ${s instanceof Error ? s.message : String(s)}; continuing without proxy`,
            {
              level: "warn",
            },
          );
        }
      if ((Npc(), Opn(), Vt() === "windows" && !Su())) {
        if (!q1())
          (console.error(`Claude Code on Windows requires a shell tool. Git Bash was not found and the PowerShell tool is disabled (CLAUDE_CODE_USE_POWERSHELL_TOOL=0).
  - Install Git for Windows: https://git-scm.com/downloads/win, or
  - Remove CLAUDE_CODE_USE_POWERSHELL_TOOL from your environment or settings.`),
            process.exit(1));
        if ((await d6()) === null)
          (console.error(`Claude Code on Windows requires either Git for Windows (for bash) or PowerShell. Install one of:
  - Git for Windows: https://git-scm.com/downloads/win
  - PowerShell 7: https://aka.ms/powershell
Or set CLAUDE_CODE_GIT_BASH_PATH to your bash.exe location.`),
            process.exit(1));
      }
      if (
        (Ci(qDa),
        Ci(async () => {
          let { cleanupSessionTeams: s } = await Promise.resolve().then(() => (hP(), oel));
          await s();
        }),
        EZ())
      ) {
        let s = Date.now();
        try {
          let i = await Hlr();
          In("info", i === null ? "init_scratchpad_unavailable" : "init_scratchpad_created", {
            duration_ms: Date.now() - s,
          });
        } catch (i) {
          T(`init: ensureScratchpadDir failed: ${i}`, {
            level: "error",
          });
        }
      }
      (oee(() => {
        if (EZ())
          Hlr().catch((s) =>
            T(`onSessionSwitch: ensureScratchpadDir failed: ${s}`, {
              level: "error",
            }),
          );
      }),
        In("info", "init_completed", {
          duration_ms: Date.now() - e,
        }),
        pa("init_function_end"));
    } catch (t) {
      if (t instanceof _B) {
        if (Ir()) {
          (process.stderr.write(`Configuration error in ${t.filePath}: ${t.message}
`),
            Bc(1));
          return;
        }
        return Promise.resolve()
          .then(() => (vfc(), Tfc))
          .then((n) =>
            n.showInvalidConfigDialog({
              error: t,
            }),
          );
      } else throw t;
    }
  });
});
function Cfc(e) {
  return e.map((t) => {
    let n;
    if (t.config.type === "sse" || t.config.type === "http")
      n = {
        type: t.config.type,
        url: t.config.url,
        headers: t.config.headers,
      };
    else if (t.config.type === "claudeai-proxy")
      n = {
        type: "claudeai-proxy",
        url: t.config.url,
        id: t.config.id,
      };
    else if (t.config.type === "stdio" || t.config.type === void 0)
      n = {
        type: "stdio",
        command: t.config.command,
        args: t.config.args,
      };
    return {
      name: t.name,
      status: t.type,
      config: n,
      scope: t.config.scope,
      serverInfo: t.type === "connected" ? t.serverInfo : void 0,
      error: t.type === "failed" ? t.error : void 0,
    };
  });
}
