// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zZn
// matched 2.1.88 source: src/utils/plugins/loadPluginCommands.ts
// class=modified (alt of src/utils/plugins/loadPluginCommands.ts)  jaccard=0.2906  score=0.7397  fileCov=0.3237
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var zZn = E(() => {
  je();
  ys();
  ((p$o = require("path")), (RIf = /^skill\.md$/i));
});
function f$o(e) {
  return /^skill\.md$/i.test(Bk.basename(e));
}
function LIf(e, t, n) {
  if (f$o(e)) {
    let o = Bk.dirname(e),
      s = Bk.dirname(o),
      i = Bk.basename(o),
      a = s.startsWith(t) ? s.slice(t.length).replace(/^[/\\]/, "") : "",
      l = a ? a.split(/[/\\]/).join(":") : "";
    return l ? `${n}:${l}:${i}` : `${n}:${i}`;
  } else {
    let o = Bk.dirname(e),
      s = Bk.basename(e).replace(/\.md$/, ""),
      i = o.startsWith(t) ? o.slice(t.length).replace(/^[/\\]/, "") : "",
      a = i ? i.split(/[/\\]/).join(":") : "";
    return a ? `${n}:${a}:${s}` : `${n}:${s}`;
  }
}
async function DIf(e, t, n) {
  let r = [],
    o = qt();
  return (
    await PSt(
      e,
      async (s) => {
        if (fee(o, s, n)) return;
        let i;
        try {
          i = await o.readFile(s, {
            encoding: "utf-8",
          });
        } catch (c) {
          T(`Failed to read plugin command ${s}: ${c}`, {
            level: "error",
          });
          return;
        }
        let { frontmatter: a, content: l } = Bm(i, s, {
          normalizeKeys: !0,
        });
        r.push({
          filePath: s,
          baseDir: t,
          frontmatter: a,
          content: rHe(s, l),
        });
      },
      {
        stopAtSkillDir: !0,
        logLabel: "commands",
      },
    ),
    r.sort((s, i) => s.filePath.localeCompare(i.filePath))
  );
}
function PIf(e) {
  let t = new Map();
  for (let r of e) {
    let o = Bk.dirname(r.filePath),
      s = t.get(o) ?? [];
    (s.push(r), t.set(o, s));
  }
  let n = [];
  for (let [r, o] of t) {
    let s = o.filter((i) => f$o(i.filePath));
    if (s.length > 0) {
      let i = s[0];
      if (s.length > 1) T(`Multiple skill files found in ${r}, using ${Bk.basename(i.filePath)}`);
      n.push(i);
    } else n.push(...o);
  }
  return n;
}
async function K0l(
  e,
  t,
  n,
  r,
  o,
  s = {
    isSkillMode: !1,
  },
  i = new Set(),
) {
  let a = await DIf(e, e, i),
    l = PIf(a),
    c = [];
  for (let u of l) {
    let d = LIf(u.filePath, u.baseDir, t),
      p = TYt(d, u, n, r, o, f$o(u.filePath), s);
    if (p) c.push(p);
  }
  return c;
}
function TYt(
  e,
  t,
  n,
  r,
  o,
  s,
  i = {
    isSkillMode: !1,
  },
) {
  try {
    let { frontmatter: a, content: l } = t,
      c = AU(a.description, e),
      u = c ?? ffe(l, s ? "Plugin skill" : "Plugin command"),
      p = Bk.dirname(t.filePath),
      f = (N) => {
        let B = vre(N, {
          path: o,
          source: n,
        });
        if (i.isSkillMode) B = B.replace(/\$\{CLAUDE_SKILL_DIR\}/g, () => p);
        return B;
      },
      m = a["allowed-tools"],
      g =
        typeof m === "string"
          ? f(m)
          : Array.isArray(m)
            ? m.map((N) => (typeof N === "string" ? f(N) : N))
            : m,
      h = kQ(g),
      y = kQ(a["disallowed-tools"] ?? a.disallowedTools),
      b = a["argument-hint"] != null ? String(a["argument-hint"]) : void 0,
      _ = P2n(a.arguments),
      S = a.when_to_use != null ? String(a.when_to_use) : void 0,
      A = a.version != null ? String(a.version) : void 0,
      v = a.name != null ? String(a.name) : void 0,
      C = a.model,
      x;
    if (typeof C === "string" && C.trim().length > 0) {
      let N = C.trim();
      x = N === "inherit" ? void 0 : zo(N);
    }
    let I = a.effort,
      k = I !== void 0 ? TU(I) : void 0;
    if (I !== void 0 && k === void 0)
      T(
        `Plugin command ${e} has invalid effort '${I}'. Valid options: ${xv.join(", ")} or an integer`,
      );
    let D = qst(a["disable-model-invocation"]),
      P = a["user-invocable"],
      O = P === void 0 ? !0 : qst(P),
      L = Okn(a.shell, e),
      M;
    if ((s || i.isSkillMode) && a.hooks) {
      let N = IG().safeParse(a.hooks);
      if (N.success) M = N.data;
      else T(`Invalid hooks in plugin skill '${e}': ${N.error.message}`);
    }
    return {
      type: "prompt",
      name: e,
      description: u,
      hasUserSpecifiedDescription: c !== null,
      allowedTools: h,
      disallowedTools: y.length > 0 ? y : void 0,
      argumentHint: b,
      argNames: _.length > 0 ? _ : void 0,
      whenToUse: S,
      version: A,
      model: x,
      effort: k,
      context: a.context === "fork" ? "fork" : void 0,
      agent: a.agent != null ? String(a.agent) : void 0,
      disableModelInvocation: D,
      userInvocable: O,
      declaredFields: $kn(a),
      contentLength: l.length,
      source: "plugin",
      loadedFrom: s || i.isSkillMode ? "plugin" : void 0,
      hooks: M,
      skillRoot: (s || i.isSkillMode) && M ? o : void 0,
      pluginInfo: {
        pluginManifest: r,
        repository: n,
      },
      isHidden: !O,
      progressMessage: s || i.isSkillMode ? "loading" : "running",
      userFacingName() {
        return v || e;
      },
      async getPromptForCommand(N, B) {
        let $ = i.isSkillMode
          ? `Base directory for this skill: ${Bk.dirname(t.filePath)}

${l}`
          : l;
        if (
          (($ = Rpt($, N, !0, _, c6)),
          ($ = vre($, {
            path: o,
            source: n,
          })),
          r.userConfig)
        )
          $ = HUn($, m$(n), r.userConfig, c6);
        if (i.isSkillMode) $ = $.replace(/\$\{CLAUDE_SKILL_DIR\}/g, p);
        if (
          (($ = $.replace(/\$\{CLAUDE_SESSION_ID\}/g, Rt())),
          ($ = $.replaceAll("${CLAUDE_EFFORT}", RM(x ?? B.options.mainLoopModel, k ?? gg(B)))),
          EJn())
        )
          $ = AJn($);
        else
          $ = await pfe(
            $,
            {
              ...B,
              getAppState() {
                let q = B.getAppState();
                return {
                  ...q,
                  toolPermissionContext: {
                    ...q.toolPermissionContext,
                    alwaysAllowRules: {
                      ...q.toolPermissionContext.alwaysAllowRules,
                      command: h,
                    },
                  },
                };
              },
            },
            `/${e}`,
            L,
          );
        return [
          {
            type: "text",
            text: $,
          },
        ];
      },
    };
  } catch (a) {
    return (
      T(`Failed to create command from ${t.filePath}: ${a}`, {
        level: "error",
      }),
      null
    );
  }
}
function KZn() {
  Vze.cache?.clear?.();
}
async function Y0l(e, t, n, r, o, s) {
  let i = qt(),
    a = [],
    l = Bk.join(e, "SKILL.md"),
    c = null;
  try {
    c = await i.readFile(l, {
      encoding: "utf-8",
    });
  } catch (d) {
    if (!wn(d))
      return (
        T(`Failed to load skill from ${l}: ${d}`, {
          level: "error",
        }),
        a
      );
  }
  if (c !== null) {
    if (fee(i, l, s)) return a;
    try {
      let { frontmatter: d, content: p } = Bm(c, l, {
          normalizeKeys: !0,
        }),
        m = ((typeof d.name === "string" ? d.name.trim() : "") || Bk.basename(e)).replace(
          /[^a-zA-Z0-9_-]/g,
          "-",
        ),
        g = `${t}:${m}`,
        h = {
          filePath: l,
          baseDir: Bk.dirname(l),
          frontmatter: d,
          content: rHe(l, p),
        },
        y = TYt(g, h, n, r, o, !0, {
          isSkillMode: !0,
        });
      if (y)
        a.push({
          skill: y,
          filePath: l,
        });
    } catch (d) {
      T(`Failed to load skill from ${l}: ${d}`, {
        level: "error",
      });
    }
    return a;
  }
  let u;
  try {
    u = await i.readdir(e);
  } catch (d) {
    if (!wn(d))
      T(`Failed to load skills from directory ${e}: ${d}`, {
        level: "error",
      });
    return a;
  }
  return (
    await Promise.all(
      u.map(async (d) => {
        if (!d.isDirectory() && !d.isSymbolicLink()) return;
        let p = Bk.join(e, d.name),
          f = Bk.join(p, "SKILL.md"),
          m;
        try {
          m = await i.readFile(f, {
            encoding: "utf-8",
          });
        } catch (g) {
          if (!wn(g))
            T(`Failed to load skill from ${f}: ${g}`, {
              level: "error",
            });
          return;
        }
        if (fee(i, f, s)) return;
        try {
          let { frontmatter: g, content: h } = Bm(m, f, {
              normalizeKeys: !0,
            }),
            y = `${t}:${d.name.replace(/[^a-zA-Z0-9_-]/g, "-")}`,
            b = {
              filePath: f,
              baseDir: Bk.dirname(f),
              frontmatter: g,
              content: rHe(f, h),
            },
            _ = TYt(y, b, n, r, o, !0, {
              isSkillMode: !0,
            });
          if (_)
            a.push({
              skill: _,
              filePath: f,
            });
        } catch (g) {
          T(`Failed to load skill from ${f}: ${g}`, {
            level: "error",
          });
        }
      }),
    ),
    a.sort((d, p) => d.skill.name.localeCompare(p.skill.name))
  );
}
function J0l() {
  m$o.cache?.clear?.();
}
var X0l, Bk, Vze, m$o;
