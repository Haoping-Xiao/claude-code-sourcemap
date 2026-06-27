// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W9o
// matched 2.1.88 source: src/cli/handlers/plugins.ts
// class=modified  jaccard=0.2674  score=0.3271  fileCov=0.5944
// note: deminified; 17 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: pluginValidateHandler, pluginUpdateHandler, pluginUninstallHandler, pluginTagHandler, pluginPruneHandler, pluginListHandler, pluginInstallHandler, pluginInitHandler, pluginEnableHandler, pluginDisableHandler, pluginDetailsHandler, marketplaceUpdateHandler, marketplaceRemoveHandler, marketplaceListHandler, marketplaceAddHandler, handleMarketplaceError, VALID_UPDATE_SCOPES, VALID_INSTALLABLE_SCOPES
// [unwrapped __esm module W9o] deps: utils/fileRead.ts, utils/errors.ts, utils/fsOperations.ts, utils/plugins/schemas.ts
((GZt = require("fs/promises")),
  (oO = require("path")),
  (WZt = ["skills", "agents", "hooks", "mcp", "lsp", "output-style", "channel"]));
function handleMarketplaceError(e, t) {
  (T(`Failed to ${t}: ${be(e)}`, {
    level: "error",
  }),
    ws(`${nt.cross} Failed to ${t}: ${be(e)}`));
}
function printValidationResult(result) {
  let t = [];
  if (result.errors.length > 0)
    (t.push(`${nt.cross} Found ${result.errors.length} ${bn(result.errors.length, "error")}:`, ""),
      result.errors.forEach((n) => {
        t.push(`  ${nt.pointer} ${n.path}: ${n.message}`);
      }),
      t.push(""));
  if (result.warnings.length > 0)
    (t.push(
      `${nt.warning} Found ${result.warnings.length} ${bn(result.warnings.length, "warning")}:`,
      "",
    ),
      result.warnings.forEach((n) => {
        t.push(`  ${nt.pointer} ${n.path}: ${n.message}`);
      }),
      t.push(""));
  return t;
}
async function pluginValidateHandler(manifestPath, options, n) {
  if (n.cowork) O2(true);
  let r,
    o = [];
  try {
    if (((r = await bXt(options)), r.fileType === "plugin")) {
      let c = Uz.dirname(r.filePath);
      if (Uz.basename(c) === ".claude-plugin") o = await Trr(Uz.dirname(c));
    }
  } catch (c) {
    if ((Le("cli_plugin_validate", "cli_plugin_validate_exception"), Vo(c)))
      T(`Plugin validation failed for ${options}: ${be(c)}`, {
        level: "error",
      });
    else ke(c);
    (console.error(`${nt.cross} Unexpected error during validation: ${be(c)}`), process.exit(2));
    return;
  }
  let { allSuccess: s, noErrors: i, hasWarnings: a } = Wjl([r, ...o], n),
    l = [`Validating ${r.fileType} manifest: ${r.filePath}`, "", ...printValidationResult(r)];
  for (let c of o)
    (l.push(`Validating ${c.fileType}: ${c.filePath}`, ""), l.push(...printValidationResult(c)));
  if (s) l.push(a ? `${nt.tick} Validation passed with warnings` : `${nt.tick} Validation passed`);
  else if (i && a) l.push(`${nt.cross} Validation failed (--strict treats warnings as errors)`);
  else l.push(`${nt.cross} Validation failed`);
  if (s) xe("cli_plugin_validate");
  else It("cli_plugin_validate", "cli_plugin_validate_failed");
  (manifestPath.render(
    Jp.jsx(V_, {
      children: Jp.jsx(w, {
        children: l.join(`
`),
      }),
    }),
  ),
    await manifestPath.waitUntilExit(),
    process.exit(s ? 0 : 1));
}
async function pluginTagHandler(e, t, n) {
  let r = await wrr(t ?? ".", {
      force: n.force,
    }),
    o = [];
  for (let d of r.warnings) o.push(`${nt.warning} ${d}`);
  if (!r.ok) {
    (Le("cli_plugin_tag", "cli_plugin_tag_prepare_failed"),
      o.push(`${nt.cross} ${r.error}`),
      vZ(e, o, 1));
    return;
  }
  let { plan: s } = r;
  if (
    (o.push(`Plugin:  ${s.pluginName}`, `Version: ${s.version} (from ${s.versionFrom})`),
    s.marketplace)
  )
    o.push(
      `Marketplace entry: plugins[${s.marketplace.entryIndex}] in ${s.marketplace.path}` +
        (s.marketplace.entryVersion ? ` (version: ${s.marketplace.entryVersion})` : ""),
    );
  o.push(`Tag:     ${s.tag}`, "");
  let i = n.remote ?? "origin",
    a = n.force ?? false,
    l = EXt(s, n.message),
    c = `git -C ${s.gitRoot} push ${a ? "--force " : ""}${i} refs/tags/${s.tag}`;
  if (n.dryRun) {
    (xe("cli_plugin_tag"),
      o.push(
        `${nt.tick} Dry run \u2014 would create tag ${s.tag} at HEAD in ${s.gitRoot}`,
        `  git -C ${s.gitRoot} tag ${a ? "-f " : ""}-a ${s.tag} -m ${De(l)}`,
        `  ${c}`,
      ),
      vZ(e, o, 0));
    return;
  }
  let u = await Crr(s, {
    push: n.push ?? false,
    force: a,
    message: n.message,
    remote: i,
  });
  if (!u.ok) {
    (Le("cli_plugin_tag", "cli_plugin_tag_create_failed"),
      o.push(`${nt.cross} ${u.error}`),
      vZ(e, o, 1));
    return;
  }
  if ((xe("cli_plugin_tag"), o.push(`${nt.tick} Created tag ${s.tag}`), u.pushed))
    o.push(`${nt.tick} Pushed to ${i}`);
  else o.push(`  Push with: ${c}`);
  vZ(e, o, 0);
}
function vZ(e, t, n) {
  (e.render(
    Jp.jsx(V_, {
      children: Jp.jsx(w, {
        children: t.join(`
`),
      }),
    }),
  ),
    e.waitUntilExit().then(() => process.exit(n)));
}
async function pluginInitHandler(e, t, n) {
  let r = [],
    o = xpc(t);
  if (o) {
    (Le("cli_plugin_init", "invalid_name"),
      r.push(`${nt.cross} Invalid plugin name "${t}": ${o}`),
      vZ(e, r, 1));
    return;
  }
  let s = [];
  for (let A of n.with ?? [])
    if (WZt.includes(A)) s.push(A);
    else {
      (Le("cli_plugin_init", "invalid_component"),
        r.push(`${nt.cross} Unknown --with component "${A}". Valid: ${WZt.join(", ")}`),
        vZ(e, r, 1));
      return;
    }
  if (!Uqe()) {
    (Le("cli_plugin_init", "policy_blocked"),
      r.push(`${nt.cross} ${IGt(fM(Uz.join(tr(), "skills")))}`),
      vZ(e, r, 1));
    return;
  }
  let i = Uz.join(tr(), "skills"),
    a = Uz.join(i, t);
  if (Uz.relative(i, Uz.resolve(a)).startsWith("..")) {
    (Le("cli_plugin_init", "invalid_name"),
      r.push(`${nt.cross} Plugin name "${t}" would write outside ${fM(i)}`),
      vZ(e, r, 1));
    return;
  }
  let l = n.author ?? (await _wi()),
    c = n.authorEmail ?? (await qle());
  if (!l && n.authorEmail)
    r.push(
      `${nt.warning} --author-email was ignored because no author name was found. Pass --author or set git config user.name.`,
    );
  let u = l
      ? c
        ? {
            name: l,
            email: c,
          }
        : {
            name: l,
          }
      : void 0,
    d = kpc({
      name: t,
      description: n.description,
      author: u,
      with: s,
    }),
    p;
  try {
    let A = await Rpc(a, d, {
      force: n.force,
    });
    if (!A.ok) {
      (Le("cli_plugin_init", "target_exists"), r.push(`${nt.cross} ${A.error}`), vZ(e, r, 1));
      return;
    }
    p = A.skipped;
  } catch (A) {
    (Le("cli_plugin_init", "write_failed"),
      ke(A),
      r.push(`${nt.cross} Failed to write scaffold: ${be(A)}`),
      vZ(e, r, 1));
    return;
  }
  for (let A of p) r.push(`  kept existing ${A} (use --force to overwrite)`);
  let f = await bXt(a);
  if (!f.success || f.warnings.length > 0) r.push(...printValidationResult(f));
  if (!f.success) {
    (Le("cli_plugin_init", "self_validate_failed"), vZ(e, r, 1));
    return;
  }
  xe("cli_plugin_init");
  let m = `${t}@${JE}`;
  r.push(`${nt.tick} Created plugin "${t}" at ${fM(a)}`);
  let g = jo().enabledPlugins ?? {},
    h = R0()?.has(t) ?? false,
    y = await wP(),
    b = Object.keys(g).find((A) => {
      let v = Qo(A);
      return (
        v.name === t &&
        v.marketplace !== void 0 &&
        v.marketplace !== JGe &&
        !U0(v.marketplace) &&
        y[v.marketplace] !== void 0
      );
    }),
    _ = g[m] === false;
  if (h)
    r.push(
      `  ${nt.warning} A plugin named "${t}" is locked by managed settings, which takes precedence \u2014 ${m} won't load. To load this copy, give it a different "name" in .claude-plugin/plugin.json.`,
    );
  else if (b)
    r.push(
      `  ${nt.warning} The name "${t}" is already taken by ${b} \u2014 when that plugin loads, ${m} won't. To load this copy, give it a different "name" in .claude-plugin/plugin.json or uninstall the conflicting plugin.`,
    );
  else if (_) {
    let A = xy("plugin enable", m);
    r.push(
      `  ${nt.warning} A disabled setting for ${m} exists, so it won't load until you re-enable it${A ? `: ${A}` : " in /plugin"}`,
    );
  } else r.push(`  It will auto-load next session as ${m}. Run /reload-plugins to load it now.`);
  let S = xy("plugin disable", m);
  (r.push(`  ${S ? `Disable: ${S}. ` : "Disable: in /plugin. "}Remove: delete the directory.`),
    vZ(e, r, 0));
}
async function pluginListHandler(options, t) {
  if (t.cowork) O2(true);
  G("tengu_plugin_list_command", {});
  let n = ex(),
    { getPluginEditableScopes: r } = await Promise.resolve().then(() => (NKe(), h2l)),
    o = r(),
    pluginIds = Object.keys(n.plugins),
    { enabled: i, disabled: a, errors: l, warnings: c } = await OT(),
    allLoadedPlugins = [...i, ...a],
    inlinePlugins = allLoadedPlugins.filter((A) => A.source.endsWith("@inline")),
    inlineLoadErrors = l.filter(
      (A) => A.source.endsWith("@inline") || A.source.startsWith("inline["),
    ),
    f = c.filter((A) => A.source.endsWith("@inline") || A.source.startsWith("inline[")),
    m = allLoadedPlugins.filter((A) => A.source.endsWith(`@${JE}`)),
    g = l.filter((A) => A.source.endsWith(`@${JE}`)),
    h = c.filter((A) => A.source.endsWith(`@${JE}`)),
    y = (A, v) =>
      !("orphan" in A && A.orphan) &&
      (A.source === v.source || ("plugin" in A && A.plugin === v.name));
  if (t.json) {
    let A = new Map(allLoadedPlugins.map((x) => [x.source, x])),
      v = [];
    for (let x of pluginIds.sort()) {
      let I = n.plugins[x];
      if (!I || I.length === 0) continue;
      let k = Qo(x).name,
        D = l.filter((O) => O.source === x || ("plugin" in O && O.plugin === k)).map(iS),
        P = c.filter((O) => O.source === x || ("plugin" in O && O.plugin === k)).map(zM);
      for (let O of I) {
        let L = A.get(x),
          M;
        if (L) {
          let N = L.mcpServers || (await wre(L));
          if (N && Object.keys(N).length > 0) M = N;
        }
        v.push({
          id: x,
          version: O.version || "unknown",
          scope: O.scope,
          enabled: o.has(x),
          installPath: O.installPath,
          installedAt: O.installedAt,
          lastUpdated: O.lastUpdated,
          projectPath: O.projectPath,
          mcpServers: M,
          errors: D.length > 0 ? D : void 0,
          notes: P.length > 0 ? P : void 0,
        });
      }
    }
    for (let x of inlinePlugins) {
      let I = x.mcpServers || (await wre(x)),
        k = inlineLoadErrors
          .filter((P) => P.source === x.source || ("plugin" in P && P.plugin === x.name))
          .map(iS),
        D = f
          .filter((P) => P.source === x.source || ("plugin" in P && P.plugin === x.name))
          .map(zM);
      v.push({
        id: x.source,
        version: x.manifest.version ?? "unknown",
        scope: "session",
        enabled: x.enabled !== false,
        installPath: x.path,
        mcpServers: I && Object.keys(I).length > 0 ? I : void 0,
        errors: k.length > 0 ? k : void 0,
        notes: D.length > 0 ? D : void 0,
      });
    }
    for (let x of inlineLoadErrors.filter((I) => I.source.startsWith("inline[")))
      v.push({
        id: x.source,
        version: "unknown",
        scope: "session",
        enabled: false,
        installPath: "path" in x ? x.path : "",
        errors: [iS(x)],
      });
    for (let x of m) {
      let I = x.mcpServers || (await wre(x)),
        k = g.filter((P) => y(P, x)).map(iS),
        D = h
          .filter((P) => P.source === x.source || ("plugin" in P && P.plugin === x.name))
          .map(zM);
      v.push({
        id: x.source,
        version: x.manifest.version ?? "unknown",
        scope: x.scope ?? "user",
        enabled: x.enabled !== false,
        installPath: x.path,
        mcpServers: I && Object.keys(I).length > 0 ? I : void 0,
        errors: k.length > 0 ? k : void 0,
        notes: D.length > 0 ? D : void 0,
      });
    }
    for (let x of g.filter((I) => !m.some((k) => y(I, k))))
      v.push({
        id: x.source,
        version: "unknown",
        scope: "user",
        enabled: false,
        installPath: "",
        errors: [iS(x)],
      });
    for (let x of h.filter(
      (I) => !m.some((k) => I.source === k.source || ("plugin" in I && I.plugin === k.name)),
    ))
      v.push({
        id: x.source,
        version: "unknown",
        scope: "project",
        enabled: false,
        installPath: "",
        notes: [zM(x)],
      });
    let C;
    if (t.available) {
      let x = [];
      try {
        let [I, k] = await Promise.all([om(), OEt()]),
          { marketplaces: D } = await rse(I);
        for (let { name: P, data: O } of D)
          if (O)
            for (let L of O.plugins) {
              let M = MQ(L.name, P);
              if (!b5(M))
                x.push({
                  pluginId: M,
                  name: L.name,
                  description: L.description,
                  marketplaceName: P,
                  version: L.version,
                  source: L.source,
                  installCount: k?.get(M),
                });
            }
      } catch {}
      C = De(
        {
          installed: v,
          available: x,
        },
        null,
        2,
      );
    } else C = De(v, null, 2);
    (xe("cli_plugin_list"),
      await V1e(
        C +
          `
`,
      ));
    return;
  }
  let b = [];
  if (pluginIds.length === 0 && inlinePlugins.length === 0 && m.length === 0) {
    if (inlineLoadErrors.length === 0 && g.length === 0 && h.length === 0)
      b.push("No plugins installed. Use `claude plugin install` to install a plugin.");
  }
  if (pluginIds.length > 0) b.push("Installed plugins:", "");
  for (let A of pluginIds.sort()) {
    let v = n.plugins[A];
    if (!v || v.length === 0) continue;
    let C = Qo(A).name,
      x = l.filter((k) => k.source === A || ("plugin" in k && k.plugin === C)),
      I = c.filter((k) => k.source === A || ("plugin" in k && k.plugin === C));
    for (let k of v) {
      let D = o.has(A),
        P =
          x.length > 0
            ? `${nt.cross} failed to load`
            : D
              ? `${nt.tick} enabled`
              : `${nt.cross} disabled`,
        O = k.version || "unknown",
        L = k.scope;
      (b.push(`  ${nt.pointer} ${A}`),
        b.push(`    Version: ${O}`),
        b.push(`    Scope: ${L}`),
        b.push(`    Status: ${P}`));
      for (let M of x) b.push(`    Error: ${iS(M)}`);
      for (let M of I) b.push(`    Note: ${zM(M)}`);
      b.push("");
    }
  }
  if (inlinePlugins.length > 0 || inlineLoadErrors.length > 0) {
    b.push("Session-only plugins (--plugin-dir / --plugin-url):", "");
    for (let A of inlinePlugins) {
      let v = inlineLoadErrors.filter(
          (I) => I.source === A.source || ("plugin" in I && I.plugin === A.name),
        ),
        C = f.filter((I) => I.source === A.source || ("plugin" in I && I.plugin === A.name)),
        x =
          A.enabled === false
            ? `${nt.cross} disabled`
            : v.length > 0
              ? `${nt.cross} loaded with errors`
              : `${nt.tick} loaded`;
      (b.push(`  ${nt.pointer} ${A.source}`),
        b.push(`    Version: ${A.manifest.version ?? "unknown"}`),
        b.push(`    Path: ${A.path}`),
        b.push(`    Status: ${x}`));
      for (let I of v) b.push(`    Error: ${iS(I)}`);
      for (let I of C) b.push(`    Note: ${zM(I)}`);
      b.push("");
    }
    for (let A of inlineLoadErrors.filter((v) => v.source.startsWith("inline[")))
      b.push(`  ${nt.pointer} ${A.source}: ${nt.cross} ${iS(A)}`, "");
  }
  let _ = h.filter(
    (A) => !m.some((v) => A.source === v.source || ("plugin" in A && A.plugin === v.name)),
  );
  if (m.length > 0 || g.length > 0 || _.length > 0) {
    b.push("Skills-directory plugins (.claude/skills/*):", "");
    for (let A of _) b.push(`  ${nt.warning} ${zM(A)}`, "");
    for (let A of m) {
      let v = g.filter((I) => y(I, A)),
        C = h.filter((I) => I.source === A.source || ("plugin" in I && I.plugin === A.name)),
        x =
          A.enabled === false
            ? `${nt.cross} disabled`
            : v.length > 0
              ? `${nt.cross} loaded with errors`
              : `${nt.tick} loaded`;
      (b.push(`  ${nt.pointer} ${A.source}`),
        b.push(`    Version: ${A.manifest.version ?? "unknown"}`),
        b.push(`    Scope: ${A.scope ?? "user"}`),
        b.push(`    Path: ${EOe(A)}`),
        b.push(`    Status: ${x}`));
      for (let I of v) b.push(`    Error: ${iS(I)}`);
      for (let I of C) b.push(`    Note: ${zM(I)}`);
      b.push("");
    }
    for (let A of g.filter((v) => !m.some((C) => y(v, C))))
      b.push(`  ${nt.pointer} ${A.source}: ${nt.cross} ${iS(A)}`, "");
  }
  xe("cli_plugin_list");
  let S = await options();
  (S.render(
    Jp.jsx(V_, {
      children: Jp.jsx(w, {
        children: b.join(`
`),
      }),
    }),
  ),
    await S.waitUntilExit());
}
function Kam(e) {
  let t = iur.c(4),
    { promise: n } = e,
    r = fNe.use(n),
    o;
  if (t[0] !== r)
    ((o = r.join(`
`)),
      (t[0] = r),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== o)
    ((s = Jp.jsx(V_, {
      children: Jp.jsx(w, {
        children: o,
      }),
    })),
      (t[2] = o),
      (t[3] = s));
  else s = t[3];
  return s;
}
async function marketplaceAddHandler(source, options, n) {
  if (n.cowork) O2(true);
  let r, o, s;
  try {
    let a = await trr(options);
    if (!a)
      return (
        Le("cli_marketplace_add", "cli_marketplace_add_invalid_source"),
        ws(`${nt.cross} Invalid marketplace source format. Try: owner/repo, https://..., or ./path`)
      );
    if ("error" in a)
      return (
        Le("cli_marketplace_add", "cli_marketplace_add_parse_failed"),
        ws(`${nt.cross} ${a.error}`)
      );
    if (((s = n.scope ?? "user"), s !== "user" && s !== "project" && s !== "local"))
      return ws(`${nt.cross} Invalid scope '${s}'. Use: user, project, or local`);
    if (((o = KD(s)), (r = a), n.sparse && n.sparse.length > 0))
      if (r.source === "github" || r.source === "git")
        r = {
          ...r,
          sparsePaths: n.sparse,
        };
      else
        return ws(
          `${nt.cross} --sparse is only supported for github and git marketplace sources (got: ${r.source})`,
        );
  } catch (a) {
    return (
      Le("cli_marketplace_add", "cli_marketplace_add_failed"),
      handleMarketplaceError(a, "add marketplace")
    );
  }
  let i = (async () => {
    try {
      let a = [],
        {
          name: l,
          alreadyMaterialized: c,
          resolvedSource: u,
        } = await yOe(r, (f) => {
          a.push(f);
        });
      (RYt(
        l,
        {
          source: u,
        },
        o,
      ),
        Ah(),
        G("tengu_marketplace_added", {
          source_type: $e(r.source),
          repo_hash: r.source === "github" ? Dd(r.repo) : void 0,
        }),
        xe("cli_marketplace_add"));
      let d = [];
      try {
        d = (await MHe((await OT()).errors)).installed;
      } catch (f) {
        T(`marketplace add: dep auto-resolve skipped: ${be(f)}`, {
          level: "warn",
        });
      }
      let p = rue(d);
      return (
        a.push(
          c
            ? `${nt.tick} Marketplace '${l}' already on disk \u2014 declared in ${s} settings${p}`
            : `${nt.tick} Successfully added marketplace: ${l} (declared in ${s} settings)${p}`,
        ),
        a
      );
    } catch (a) {
      return (
        Le("cli_marketplace_add", "cli_marketplace_add_failed"),
        handleMarketplaceError(a, "add marketplace")
      );
    }
  })();
  (source.render(
    Jp.jsx(fNe.Suspense, {
      fallback: Jp.jsx(w, {
        children: "Adding marketplace\u2026",
      }),
      children: Jp.jsx(Kam, {
        promise: i,
      }),
    }),
  ),
    await source.waitUntilExit(),
    process.exit(0));
}
async function marketplaceListHandler(options, t) {
  if (t.cowork) O2(true);
  let n;
  try {
    n = await om();
  } catch (i) {
    return (
      Le("cli_marketplace_list", "cli_marketplace_list_load_failed"),
      handleMarketplaceError(i, "list marketplaces")
    );
  }
  let r = Object.keys(n);
  if (t.json) {
    let i = r.sort().map((a) => {
      let l = n[a],
        c = l?.source,
        u = c?.source === "github" || c?.source === "git" ? c.ref : void 0;
      return {
        name: a,
        source: c?.source,
        ...(c?.source === "github" && {
          repo: c.repo,
        }),
        ...(c?.source === "git" && {
          url: c.url,
        }),
        ...(c?.source === "url" && {
          url: c.url,
        }),
        ...(c?.source === "directory" && {
          path: c.path,
        }),
        ...(c?.source === "file" && {
          path: c.path,
        }),
        ...(u && {
          ref: u,
        }),
        installLocation: l?.installLocation,
      };
    });
    (xe("cli_marketplace_list"),
      await V1e(
        De(i, null, 2) +
          `
`,
      ));
    return;
  }
  let o;
  if (r.length === 0)
    o = Jp.jsx(w, {
      children: "No marketplaces configured",
    });
  else {
    let i = ["Configured marketplaces:", ""];
    (r.forEach((a) => {
      let l = n[a];
      if ((i.push(`  ${nt.pointer} ${a}`), l?.source)) {
        let c = l.source;
        if (c.source === "github") {
          let u = c.ref ? `@${c.ref}` : "";
          i.push(`    Source: GitHub (${c.repo}${u})`);
        } else if (c.source === "git") {
          let u = c.ref ? `@${c.ref}` : "";
          i.push(`    Source: Git (${c.url}${u})`);
        } else if (c.source === "url") i.push(`    Source: URL (${c.url})`);
        else if (c.source === "directory") i.push(`    Source: Directory (${c.path})`);
        else if (c.source === "file") i.push(`    Source: File (${c.path})`);
      }
      i.push("");
    }),
      (o = Jp.jsx(w, {
        children: i.join(`
`),
      })));
  }
  xe("cli_marketplace_list");
  let s = await options();
  (s.render(
    Jp.jsx(V_, {
      children: o,
    }),
  ),
    await s.waitUntilExit());
}
async function marketplaceRemoveHandler(e, t, n) {
  if (n.cowork) O2(true);
  let r;
  if (n.scope !== void 0) {
    let o = n.scope;
    if (o !== "user" && o !== "project" && o !== "local")
      return ws(`${nt.cross} Invalid scope '${o}'. Use: user, project, or local`);
    r = KD(o);
  }
  try {
    (await OSt(t, r),
      Ah(),
      G("tengu_marketplace_removed", {
        marketplace_name: t,
      }));
  } catch (o) {
    (Le("cli_marketplace_remove", "cli_marketplace_remove_failed"),
      handleMarketplaceError(o, "remove marketplace"));
  }
  (xe("cli_marketplace_remove"),
    e.render(
      Jp.jsx(V_, {
        children: Jp.jsxs(w, {
          children: [
            nt.tick,
            " Successfully removed marketplace: ",
            t,
            n.scope ? ` (from ${n.scope} settings)` : "",
          ],
        }),
      }),
    ),
    await e.waitUntilExit());
}
function Qam(e) {
  let t = iur.c(5),
    { promise: n } = e,
    { messages: r, success: o } = fNe.use(n),
    s;
  if (t[0] !== r || t[1] !== o) ((s = [...r, o]), (t[0] = r), (t[1] = o), (t[2] = s));
  else s = t[2];
  let a = s.join(`
`),
    l;
  if (t[3] !== a)
    ((l = Jp.jsx(V_, {
      children: Jp.jsx(w, {
        children: a,
      }),
    })),
      (t[3] = a),
      (t[4] = l));
  else l = t[4];
  return l;
}
async function marketplaceUpdateHandler(name, options, n) {
  if (n.cowork) O2(true);
  let r, o;
  if (options) {
    r = `Updating marketplace: ${options}...`;
    let s = [];
    o = ise(options, (i) => {
      s.push(i);
    })
      .then(
        () => (
          Ah(),
          G("tengu_marketplace_updated", {
            marketplace_name: options,
          }),
          xe("cli_marketplace_update"),
          {
            messages: s,
            success: `${nt.tick} Successfully updated marketplace: ${options}`,
          }
        ),
      )
      .catch(
        (i) => (
          Le("cli_marketplace_update", "cli_marketplace_update_failed"),
          handleMarketplaceError(i, "update marketplace(s)")
        ),
      );
  } else {
    let s;
    try {
      s = await om();
    } catch (a) {
      return (
        Le("cli_marketplace_update", "cli_marketplace_update_load_failed"),
        handleMarketplaceError(a, "update marketplace(s)")
      );
    }
    let i = Object.keys(s);
    if (i.length === 0) {
      (name.render(
        Jp.jsx(V_, {
          children: Jp.jsx(w, {
            children: "No marketplaces configured",
          }),
        }),
      ),
        await name.waitUntilExit(),
        process.exit(0));
      return;
    }
    ((r = `Updating ${i.length} marketplace(s)...`),
      (o = bRl()
        .then(
          () => (
            Ah(),
            G("tengu_marketplace_updated_all", {
              count: i.length,
            }),
            xe("cli_marketplace_update"),
            {
              messages: [],
              success: `${nt.tick} Successfully updated ${i.length} marketplace(s)`,
            }
          ),
        )
        .catch(
          (a) => (
            Le("cli_marketplace_update", "cli_marketplace_update_failed"),
            handleMarketplaceError(a, "update marketplace(s)")
          ),
        )));
  }
  (name.render(
    Jp.jsx(fNe.Suspense, {
      fallback: Jp.jsx(w, {
        children: r,
      }),
      children: Jp.jsx(Qam, {
        promise: o,
      }),
    }),
  ),
    await name.waitUntilExit(),
    process.exit(0));
}
function elm(e) {
  let t = iur.c(2),
    { promise: n } = e,
    r = fNe.use(n),
    o;
  if (t[0] !== r)
    ((o = Jp.jsx(V_, {
      children: Jp.jsxs(w, {
        children: [nt.tick, " ", r],
      }),
    })),
      (t[0] = r),
      (t[1] = o));
  else o = t[1];
  return o;
}
async function pluginInstallHandler(plugin, options, n) {
  if (n.cowork) O2(true);
  let r = n.scope || "user";
  if (n.cowork && r !== "user") ws("--cowork can only be used with user scope");
  if (!JL.includes(r)) ws(`Invalid scope: ${r}. Must be one of: ${JL.join(", ")}.`);
  let { name: o, marketplace: s } = Qo(options);
  G("tengu_plugin_install_command", {
    _PROTO_plugin_name: o,
    ...(s && {
      _PROTO_marketplace_name: s,
    }),
    scope: r,
  });
  let i = Spc(options, r, n.config).then((a) => (xe("cli_plugin_install"), a));
  (plugin.render(
    Jp.jsx(fNe.Suspense, {
      fallback: Jp.jsx(w, {
        children: `Installing plugin "${options}"...`,
      }),
      children: Jp.jsx(elm, {
        promise: i,
      }),
    }),
  ),
    await plugin.waitUntilExit(),
    await ki(0));
}
async function pluginUninstallHandler(plugin, options, n) {
  if (n.cowork) O2(true);
  let r = n.scope || "user";
  if (n.cowork && r !== "user") ws("--cowork can only be used with user scope");
  if (!JL.includes(r)) ws(`Invalid scope: ${r}. Must be one of: ${JL.join(", ")}.`);
  let { name: o, marketplace: s } = Qo(options);
  G("tengu_plugin_uninstall_command", {
    _PROTO_plugin_name: o,
    ...(s && {
      _PROTO_marketplace_name: s,
    }),
    scope: r,
  });
  let i = await Apc(options, r, n.keepData, n.prune, n.yes);
  (xe("cli_plugin_uninstall"),
    plugin.render(
      Jp.jsx(V_, {
        children: Jp.jsx(w, {
          children: n.prune ? i : `${nt.tick} ${i}`,
        }),
      }),
    ),
    await plugin.waitUntilExit(),
    process.exit(0));
}
async function pluginPruneHandler(e, t) {
  if (t.cowork) O2(true);
  let n = t.scope || "user";
  if (t.cowork && n !== "user") ws("--cowork can only be used with user scope");
  if (!JL.includes(n)) ws(`Invalid scope: ${n}. Must be one of: ${JL.join(", ")}.`);
  G("tengu_plugin_prune_command", {
    scope: n,
    dry_run: t.dryRun ?? false,
  });
  let r = await Hpc(n, {
    dryRun: t.dryRun,
    yes: t.yes,
  });
  (xe("cli_plugin_prune"),
    e.render(
      Jp.jsx(V_, {
        children: Jp.jsx(w, {
          children: r,
        }),
      }),
    ),
    await e.waitUntilExit(),
    process.exit(0));
}
async function pluginEnableHandler(plugin, options, n) {
  if (n.cowork) O2(true);
  let r;
  if (n.scope) {
    if (!JL.includes(n.scope)) ws(`Invalid scope "${n.scope}". Valid scopes: ${JL.join(", ")}`);
    r = n.scope;
  }
  if (n.cowork && r !== void 0 && r !== "user") ws("--cowork can only be used with user scope");
  if (n.cowork && r === void 0) r = "user";
  let { name: o, marketplace: s } = Qo(options);
  G("tengu_plugin_enable_command", {
    _PROTO_plugin_name: o,
    ...(s && {
      _PROTO_marketplace_name: s,
    }),
    scope: $e(r ?? "auto"),
  });
  let i;
  try {
    if (((i = await zEt(options, r)), !i.success)) throw Error(i.message);
    G("tengu_plugin_enabled_cli", {
      ...e4(i.pluginId || options, R0()),
      scope: Oo(i.scope),
    });
  } catch (a) {
    return (Le("cli_plugin_enable", "cli_plugin_enable_failed"), dNe(a, "enable", options));
  }
  (xe("cli_plugin_enable"),
    plugin.render(
      Jp.jsx(V_, {
        children: Jp.jsxs(w, {
          children: [nt.tick, " ", i.message],
        }),
      }),
    ),
    await plugin.waitUntilExit());
}
async function pluginDisableHandler(plugin, options, n) {
  if (n.all && options) ws("Cannot use --all with a specific plugin");
  if (!n.all && !options) ws("Please specify a plugin name or use --all to disable all plugins");
  if (n.cowork) O2(true);
  let r;
  if (n.all) {
    if (n.scope) ws("Cannot use --scope with --all");
    (G("tengu_plugin_disable_command", {}), (r = await wpc()));
  } else {
    let o;
    if (n.scope) {
      if (!JL.includes(n.scope)) ws(`Invalid scope "${n.scope}". Valid scopes: ${JL.join(", ")}`);
      o = n.scope;
    }
    if (n.cowork && o !== void 0 && o !== "user") ws("--cowork can only be used with user scope");
    if (n.cowork && o === void 0) o = "user";
    let { name: s, marketplace: i } = Qo(options);
    (G("tengu_plugin_disable_command", {
      _PROTO_plugin_name: s,
      ...(i && {
        _PROTO_marketplace_name: i,
      }),
      scope: $e(o ?? "auto"),
    }),
      (r = await vpc(options, o)));
  }
  (xe("cli_plugin_disable"),
    plugin.render(
      Jp.jsx(V_, {
        children: Jp.jsx(w, {
          children: r,
        }),
      }),
    ),
    await plugin.waitUntilExit(),
    process.exit(0));
}
async function pluginUpdateHandler(plugin, options) {
  if (options.cowork) O2(true);
  let { name: n, marketplace: r } = Qo(plugin);
  G("tengu_plugin_update_command", {
    _PROTO_plugin_name: n,
    ...(r && {
      _PROTO_marketplace_name: r,
    }),
  });
  let o = "user";
  if (options.scope) {
    if (!UKe.includes(options.scope))
      ws(`Invalid scope "${options.scope}". Valid scopes: ${UKe.join(", ")}`);
    o = options.scope;
  }
  if (options.cowork && o !== "user") ws("--cowork can only be used with user scope");
  await Cpc(plugin, o);
}
async function pluginDetailsHandler(e, t, n) {
  if (n.cowork) O2(true);
  G("tengu_plugin_details_command", {});
  let {
      getPluginInventory: r,
      computePluginTokenCost: o,
      scaleCharsToTokens: s,
    } = await Promise.resolve().then(() => (aUo(), Hjl)),
    { formatTokenEstimate: i } = await Promise.resolve().then(() => (es(), xis)),
    { enabled: a, disabled: l } = await OT(),
    c = Qo(t),
    u = [...a, ...l].find((I) =>
      c.marketplace ? I.source === vKi(c.name, c.marketplace) : I.name === c.name,
    );
  if (!u) {
    Le("cli_plugin_details", "not_found");
    let I = `Plugin "${t}" not found. Run \`claude plugin list\` to see installed plugins, or pass --plugin-dir <path> to load one from disk.`;
    if (n.json) return ws(I);
    let k = await e();
    (k.render(
      Jp.jsx(V_, {
        children: Jp.jsx(w, {
          children: I,
        }),
      }),
    ),
      await k.waitUntilExit(),
      process.exit(1));
  }
  let d = u.source.split("@")[1] ?? "inline",
    p = n.models?.length ? n.models : [As()],
    f;
  try {
    let I = await r(u, d);
    f = await o(I, p, u.name);
  } catch (I) {
    (ke(I), Le("cli_plugin_details", "inventory_failed"));
    let k = `${nt.cross} Could not load details for "${u.name}": ${be(I)}`;
    if (n.json) return ws(k);
    let D = await e();
    (D.render(
      Jp.jsx(V_, {
        children: Jp.jsx(w, {
          children: k,
        }),
      }),
    ),
      await D.waitUntilExit(),
      process.exit(1));
  }
  let { tokens: m, inventory: g } = f;
  if (n.json) {
    xe("cli_plugin_details");
    let I = ({ path: k, ...D }) => D;
    await V1e(
      De(
        {
          plugin: u.name,
          version: u.manifest.version,
          source: u.source,
          sha: u.sha ?? null,
          tokens: m,
          components: {
            ...g,
            commands: g.commands.map(I),
            agents: g.agents.map(I),
            skills: g.skills.map(I),
          },
        },
        null,
        2,
      ) +
        `
`,
    );
    return;
  }
  let h = [],
    y = fS(u),
    b = y === u.name ? u.name : `${y} (${u.name})`;
  if ((h.push(`${b} ${u.manifest.version ?? ""}`.trimEnd()), u.manifest.description))
    h.push(`  ${u.manifest.description}`);
  (h.push(`  Source: ${u.source}`), h.push(""), h.push("Component inventory"));
  let _ = [
    ["Skills", [...g.skills, ...g.commands].map((I) => I.name).sort(), ""],
    ["Agents", g.agents.map((I) => I.name), ""],
    ["Hooks", g.hooks, "  (harness-only \u2014 no model context cost)"],
    ["MCP servers", g.mcpServers, "  (tool schemas resolved at runtime; not counted)"],
    ["LSP servers", g.lspServers, "  (out-of-process tooling; no model context cost)"],
  ];
  for (let [I, k, D] of _)
    h.push(
      `  ${I} (${k.length})${k.length > 0 ? `  ${k.join(", ")}` : ""}${k.length > 0 ? D : ""}`,
    );
  h.push("");
  let S = [...g.skills, ...g.agents, ...g.commands].filter((I) => I.chars != null),
    A = {
      always_on: S.reduce((I, k) => I + k.chars.always_on, 0),
      on_invoke: S.reduce((I, k) => I + k.chars.on_invoke, 0),
    },
    v = m[p[0]],
    C = v?.always_on ?? s(A.always_on, A.always_on, void 0);
  if (
    (h.push("Projected token cost"),
    h.push(`  Always-on:   ~${C.toLocaleString()} tok   added to every session`),
    S.length > 0)
  ) {
    (h.push(""), h.push("Per-component (rounded)"));
    let I = Math.max(...S.map((k) => k.name.length), 9);
    h.push(`  ${"component".padEnd(I)}  ${"always-on".padStart(9)}  ${"on-invoke".padStart(9)}`);
    for (let k of S) {
      let D = s(k.chars.always_on, A.always_on, v?.always_on),
        P = s(k.chars.on_invoke, A.on_invoke, v?.on_invoke);
      h.push(`  ${k.name.padEnd(I)}  ${i(D).padStart(9)}  ${i(P).padStart(9)}`);
    }
    (h.push(""),
      h.push("  On-invoke cost is paid each time a skill or agent fires."),
      h.push("  Token counts are estimates and may differ from actual usage."));
  }
  if (v) xe("cli_plugin_details");
  else It("cli_plugin_details", "count_tokens_unreachable");
  let x = await e();
  (x.render(
    Jp.jsx(V_, {
      children: Jp.jsx(w, {
        children: h.join(`
`),
      }),
    }),
  ),
    await x.waitUntilExit());
}
var iur, Uz, fNe, Jp;
