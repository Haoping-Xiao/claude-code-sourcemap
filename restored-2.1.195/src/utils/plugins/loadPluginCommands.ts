// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vYt
// matched 2.1.88 source: src/utils/plugins/loadPluginCommands.ts
// class=modified  jaccard=0.4285  score=0.6484  fileCov=0.5582
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var vYt = E(() => {
  Qi();
  ft();
  dn();
  rq();
  iDo();
  w8();
  wGt();
  Il();
  gb();
  je();
  Cp();
  At();
  Iv();
  ys();
  pq();
  Ao();
  hze();
  lj();
  sDo();
  Xh();
  i5();
  zZn();
  ((X0l = require("fs/promises")), (Bk = require("path")));
  Vze = Cn(async () => {
    if (
      lc("plugins", {
        explicitlyRequested: PV().length > 0 || MV().length > 0 || aee().length > 0,
      })
    )
      return [];
    let { enabled: e, errors: t } = await mp();
    if (t.length > 0) T(`Plugin loading errors: ${t.map((s) => iS(s)).join(", ")}`);
    let n = null,
      o = (
        await Promise.all(
          e.map(async (s) => {
            let i = new Set(),
              a = [];
            if (s.commandsPath)
              try {
                let l = await K0l(
                  s.commandsPath,
                  s.name,
                  s.source,
                  s.manifest,
                  s.path,
                  {
                    isSkillMode: false,
                  },
                  i,
                );
                if ((a.push(...l), l.length > 0))
                  T(`Loaded ${l.length} commands from plugin ${s.name} default directory`);
              } catch (l) {
                ((n = "plugin_load_commands_dir_failed"),
                  T(`Failed to load commands from plugin ${s.name} default directory: ${l}`, {
                    level: "error",
                  }));
              }
            if (s.commandsPaths) {
              T(`Plugin ${s.name} has commandsPaths: ${s.commandsPaths.join(", ")}`);
              let l = await Promise.all(
                s.commandsPaths.map(async (c) => {
                  try {
                    let u = qt(),
                      d = await u.stat(c);
                    if (
                      (T(
                        `Checking commandPath ${c} - isDirectory: ${d.isDirectory()}, isFile: ${d.isFile()}`,
                      ),
                      d.isDirectory())
                    ) {
                      let p = await K0l(
                        c,
                        s.name,
                        s.source,
                        s.manifest,
                        s.path,
                        {
                          isSkillMode: false,
                        },
                        i,
                      );
                      if (p.length > 0)
                        T(`Loaded ${p.length} commands from plugin ${s.name} custom path: ${c}`);
                      else
                        T(
                          `Warning: No commands found in plugin ${s.name} custom directory: ${c}. Expected .md files or SKILL.md in subdirectories.`,
                          {
                            level: "warn",
                          },
                        );
                      return p;
                    } else if (d.isFile() && c.endsWith(".md")) {
                      if (fee(u, c, i)) return [];
                      let p = await u.readFile(c, {
                          encoding: "utf-8",
                        }),
                        { frontmatter: f, content: m } = Bm(p, c, {
                          normalizeKeys: true,
                        }),
                        g,
                        h;
                      if (s.commandsMetadata) {
                        for (let [S, A] of Object.entries(s.commandsMetadata))
                          if (A.source) {
                            let v = Bk.join(s.path, A.source);
                            if (c === v) {
                              ((g = `${s.name}:${S}`), (h = A));
                              break;
                            }
                          }
                      }
                      if (!g) g = `${s.name}:${Bk.basename(c).replace(/\.md$/, "")}`;
                      let y = h
                          ? {
                              ...f,
                              ...(h.description && {
                                description: h.description,
                              }),
                              ...(h.argumentHint && {
                                "argument-hint": h.argumentHint,
                              }),
                              ...(h.model && {
                                model: h.model,
                              }),
                              ...(h.allowedTools && {
                                "allowed-tools": h.allowedTools.join(","),
                              }),
                            }
                          : f,
                        b = {
                          filePath: c,
                          baseDir: Bk.dirname(c),
                          frontmatter: y,
                          content: rHe(c, m),
                        },
                        _ = TYt(g, b, s.source, s.manifest, s.path, false);
                      if (_)
                        return (
                          T(
                            `Loaded command from plugin ${s.name} custom file: ${c}${h ? " (with metadata override)" : ""}`,
                          ),
                          [_]
                        );
                    }
                    return [];
                  } catch (u) {
                    return (
                      (n = "plugin_load_commands_path_failed"),
                      T(`Failed to load commands from plugin ${s.name} custom path ${c}: ${u}`, {
                        level: "error",
                      }),
                      []
                    );
                  }
                }),
              );
              for (let c of l) a.push(...c);
            }
            if (s.commandsMetadata) {
              for (let [l, c] of Object.entries(s.commandsMetadata))
                if (c.content && !c.source)
                  try {
                    let { frontmatter: u, content: d } = Bm(c.content, `<inline:${s.name}:${l}>`, {
                        normalizeKeys: true,
                      }),
                      p = {
                        ...u,
                        ...(c.description && {
                          description: c.description,
                        }),
                        ...(c.argumentHint && {
                          "argument-hint": c.argumentHint,
                        }),
                        ...(c.model && {
                          model: c.model,
                        }),
                        ...(c.allowedTools && {
                          "allowed-tools": c.allowedTools.join(","),
                        }),
                      },
                      f = `${s.name}:${l}`,
                      m = `<inline:${f}>`,
                      g = {
                        filePath: m,
                        baseDir: s.path,
                        frontmatter: p,
                        content: rHe(m, d),
                      },
                      h = TYt(f, g, s.source, s.manifest, s.path, false);
                    if (h)
                      (a.push(h), T(`Loaded inline content command from plugin ${s.name}: ${f}`));
                  } catch (u) {
                    ((n = "plugin_load_commands_inline_failed"),
                      T(`Failed to load inline content command ${l} from plugin ${s.name}: ${u}`, {
                        level: "error",
                      }));
                  }
            }
            return a;
          }),
        )
      ).flat();
    if ((T(`Total plugin commands loaded: ${o.length}`), n)) Le("plugin_load_commands", n);
    else xe("plugin_load_commands");
    return o;
  });
  m$o = Cn(async () => {
    if (
      lc("plugins", {
        explicitlyRequested: PV().length > 0 || MV().length > 0 || aee().length > 0,
      })
    )
      return [];
    let { enabled: e, errors: t } = await mp();
    if (t.length > 0) T(`Plugin loading errors: ${t.map((c) => iS(c)).join(", ")}`);
    T(`getPluginSkills: Processing ${e.length} enabled plugins`);
    let n = null,
      o = (
        await Promise.all(
          e.map(async (c) => {
            let u = new Set(),
              d = [];
            if (
              (T(
                `Checking plugin ${c.name}: skillsPath=${c.skillsPath ? "exists" : "none"}, skillsPaths=${c.skillsPaths ? c.skillsPaths.length : 0} paths`,
              ),
              c.skillsPath)
            ) {
              T(
                `Attempting to load skills from plugin ${c.name} default skillsPath: ${c.skillsPath}`,
              );
              try {
                let p = await Y0l(c.skillsPath, c.name, c.source, c.manifest, c.path, u);
                (d.push(...p),
                  T(`Loaded ${p.length} skills from plugin ${c.name} default directory`));
              } catch (p) {
                ((n = "plugin_load_skills_dir_failed"),
                  T(`Failed to load skills from plugin ${c.name} default directory: ${p}`, {
                    level: "error",
                  }));
              }
            }
            if (c.skillsPaths) {
              T(
                `Attempting to load skills from plugin ${c.name} skillsPaths: ${c.skillsPaths.join(", ")}`,
              );
              let p = await Promise.all(
                c.skillsPaths.map(async (f) => {
                  try {
                    T(`Loading from skillPath: ${f} for plugin ${c.name}`);
                    let m = await Y0l(f, c.name, c.source, c.manifest, c.path, u);
                    return (
                      T(`Loaded ${m.length} skills from plugin ${c.name} custom path: ${f}`),
                      m
                    );
                  } catch (m) {
                    return (
                      (n = "plugin_load_skills_path_failed"),
                      T(`Failed to load skills from plugin ${c.name} custom path ${f}: ${m}`, {
                        level: "error",
                      }),
                      []
                    );
                  }
                }),
              );
              for (let f of p) d.push(...f);
            }
            return d;
          }),
        )
      ).flat(),
      [s, i] = await Promise.all([
        Promise.all(
          o.map(async (c) => {
            try {
              return await X0l.realpath(c.filePath);
            } catch {
              return null;
            }
          }),
        ),
        YTl(),
      ]),
      a = new Map(),
      l = [];
    for (let c = 0; c < o.length; c++) {
      let u = o[c];
      if (u === void 0) continue;
      let d = s[c];
      if (d === null || d === void 0) {
        l.push(u.skill);
        continue;
      }
      if (i !== null && i.has(d)) {
        T(
          `Skipping plugin skill '${u.skill.name}' \u2014 ${d} is a user-level skill already surfaced by the skills directory loader`,
        );
        continue;
      }
      let p = a.get(d);
      if (p !== void 0) {
        T(`Skipping duplicate plugin skill '${u.skill.name}' \u2014 ${d} already loaded as '${p}'`);
        continue;
      }
      (a.set(d, u.skill.name), l.push(u.skill));
    }
    if (
      (T(
        `Total plugin skills loaded: ${l.length} (${o.length - l.length} duplicate/user-owned entries skipped)`,
      ),
      n)
    )
      Le("plugin_load_skills", n);
    else xe("plugin_load_skills");
    return l;
  });
});
async function Q0l(e, t, n) {
  let r = [];
  return (
    await PSt(
      e,
      async (o) => {
        let s = await eRl(o, t, n);
        if (s) r.push(s);
      },
      {
        logLabel: "output-styles",
      },
    ),
    r
  );
}
async function eRl(e, t, n) {
  let r = qt();
  if (fee(r, e, n)) return null;
  try {
    let o = await r.readFile(e, {
        encoding: "utf-8",
      }),
      { frontmatter: s, content: i } = Bm(o, e, {
        normalizeKeys: true,
      }),
      a = Z0l.basename(e, ".md"),
      l = (s.name != null ? String(s.name) : void 0) || a,
      c = `${t}:${l}`,
      u = AU(s.description, c) ?? ffe(i, `Output style from ${t} plugin`);
    return {
      name: c,
      description: u,
      prompt: i.trim(),
      source: "plugin",
      forceForPlugin: C3e(s["force-for-plugin"]),
      keepCodingInstructions: C3e(s["keep-coding-instructions"]),
    };
  } catch (o) {
    return (
      T(`Failed to load output style from ${e}: ${o}`, {
        level: "error",
      }),
      null
    );
  }
}
function h$o() {
  g$o.cache?.clear?.();
}
var Z0l, g$o;
