// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B9o
// matched 2.1.88 source: src/hooks/useManagePlugins.ts
// class=modified  jaccard=0.5174  score=0.9095  fileCov=0.5455
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function useManagePlugins({ enabled: e = true } = {}) {
  let t = Ho(),
    n = Ht((s) => s.plugins.needsRefresh),
    { addNotification: r } = Li(),
    o = jZt.useCallback(async () => {
      try {
        let { enabled: s, disabled: i, errors: a, warnings: l } = await mp(),
          c = [...a];
        if ((await nur()).length > 0) I2n();
        let d = Object.keys(QEt()).length;
        (VL("plugins", d),
          t((v) => {
            if (v.setupIssues.flaggedPluginCount === d) return v;
            return {
              ...v,
              setupIssues: {
                ...v.setupIssues,
                flaggedPluginCount: d,
              },
            };
          }));
        let p = [],
          f = [];
        try {
          p = await Vze();
        } catch (v) {
          let C = v instanceof Error ? v.message : String(v);
          c.push({
            type: "generic-error",
            source: "plugin-commands",
            error: `Failed to load plugin commands: ${C}`,
          });
        }
        try {
          f = await FYt();
        } catch (v) {
          let C = v instanceof Error ? v.message : String(v);
          c.push({
            type: "generic-error",
            source: "plugin-agents",
            error: `Failed to load plugin agents: ${C}`,
          });
        }
        try {
          await bSe();
        } catch (v) {
          let C = v instanceof Error ? v.message : String(v);
          c.push({
            type: "generic-error",
            source: "plugin-hooks",
            error: `Failed to load plugin hooks: ${C}`,
          });
        }
        let g = (
            await Promise.all(
              s.map(async (v) => {
                if (v.mcpServers) return Object.keys(v.mcpServers).length;
                let C = await wre(v, c);
                if (C) v.mcpServers = C;
                return C ? Object.keys(C).length : 0;
              }),
            )
          ).reduce((v, C) => v + C, 0),
          y = (
            await Promise.all(
              s.map(async (v) => {
                if (v.lspServers) return Object.keys(v.lspServers).length;
                let C = await Mqe(v, c);
                if (C) v.lspServers = C;
                return C ? Object.keys(C).length : 0;
              }),
            )
          ).reduce((v, C) => v + C, 0),
          b = p2n(s),
          _ = [...l, ...b],
          S = (await epc(s)).length;
        (t((v) => {
          let C = v.plugins.errors.filter(
              (M) => M.source === "lsp-manager" || M.source.startsWith("plugin:"),
            ),
            x = new Set(
              c.map((M) =>
                M.type === "generic-error"
                  ? `generic-error:${M.source}:${M.error}`
                  : `${M.type}:${M.source}`,
              ),
            ),
            k = [
              ...C.filter((M) => {
                let N =
                  M.type === "generic-error"
                    ? `generic-error:${M.source}:${M.error}`
                    : `${M.type}:${M.source}`;
                return !x.has(N);
              }),
              ...c,
            ],
            D = v.plugins.warnings.filter((M) => M.source.startsWith("plugin:")),
            P = new Set(_.map((M) => `${M.type}:${M.source}`)),
            L = [...D.filter((M) => !P.has(`${M.type}:${M.source}`)), ..._];
          return {
            ...v,
            plugins: {
              ...v.plugins,
              enabled: s,
              disabled: i,
              commands: p,
              errors: k,
              warnings: L,
            },
          };
        }),
          T(
            `Loaded plugins - Enabled: ${s.length}, Disabled: ${i.length}, Commands: ${p.length}, Agents: ${f.length}, Errors: ${c.length}`,
          ));
        let A = s.reduce((v, C) => {
          if (!C.hooksConfig) return v;
          return (
            v +
            Object.values(C.hooksConfig).reduce(
              (x, I) => x + (I?.reduce((k, D) => k + D.hooks.length, 0) ?? 0),
              0,
            )
          );
        }, 0);
        return {
          enabled_count: s.length,
          disabled_count: i.length,
          inline_count: On(s, (v) => v.source.endsWith("@inline")),
          marketplace_count: On(s, (v) => !v.source.endsWith("@inline")),
          error_count: c.length,
          skill_count: p.length,
          agent_count: f.length,
          hook_count: A,
          mcp_count: g,
          lsp_count: y,
          theme_count: S,
          ant_enabled_names: void 0,
        };
      } catch (s) {
        let i = Zr(s);
        return (
          ke(i),
          T(`Error loading plugins: ${s}`),
          t((a) => {
            let l = a.plugins.errors.filter(
                (u) => u.source === "lsp-manager" || u.source.startsWith("plugin:"),
              ),
              c = {
                type: "generic-error",
                source: "plugin-system",
                error: i.message,
              };
            return {
              ...a,
              plugins: {
                ...a.plugins,
                enabled: [],
                disabled: [],
                commands: [],
                errors: [...l, c],
              },
            };
          }),
          {
            enabled_count: 0,
            disabled_count: 0,
            inline_count: 0,
            marketplace_count: 0,
            error_count: 1,
            skill_count: 0,
            agent_count: 0,
            hook_count: 0,
            mcp_count: 0,
            lsp_count: 0,
            theme_count: 0,
            load_failed: true,
            ant_enabled_names: void 0,
          }
        );
      }
    }, [t]);
  (jZt.useEffect(() => {
    if (!e) return;
    o().then((s) => {
      let { ant_enabled_names: i, ...a } = s,
        l = {
          ...a,
          has_custom_plugin_cache_dir: !!process.env.CLAUDE_CODE_PLUGIN_CACHE_DIR,
        };
      (G("tengu_plugins_loaded", {
        ...l,
        ...(i !== void 0 && {
          enabled_names: i,
        }),
      }),
        In("info", "tengu_plugins_loaded", l));
    });
  }, [o, e]),
    jZt.useEffect(() => {
      if (!e || !n) return;
      r({
        key: "plugin-reload-pending",
        text: "Plugins changed. Run /reload-plugins to activate.",
        color: "suggestion",
        priority: "low",
      });
    }, [e, n, r]));
}
var jZt;
