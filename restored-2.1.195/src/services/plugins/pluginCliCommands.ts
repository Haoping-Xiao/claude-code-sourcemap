// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _pc
// matched 2.1.88 source: src/services/plugins/pluginCliCommands.ts
// class=modified  jaccard=0.2105  score=0.2514  fileCov=0.5639
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var _pc = E(() => {
  cdc();
  ddc();
  Z4e();
  JN();
  jcr();
});
function dNe(e, t, n) {
  let r = lX(e);
  if (r === "unknown") ke(e);
  else
    T(`Plugin command "${t}" failed: ${be(e)}`, {
      level: "error",
    });
  let o = n ? `${t} plugin "${n}"` : t === "disable-all" ? "disable all plugins" : `${t} plugins`;
  console.error(`${nt.cross} Failed to ${o}: ${be(e)}`);
  let s = n ? e4(n, R0()) : {};
  (G("tengu_plugin_command_failed", {
    command: $e(t),
    error_category: $e(r),
    ...s,
  }),
    process.exit(1));
}
function Ram(e, t) {
  let n = {};
  for (let s of e) {
    let i = s.indexOf("=");
    if (i <= 0)
      throw Error(`--config expects KEY=VALUE, got "${s}". Use --config key=value (repeatable).`);
    let a = s.slice(0, i),
      c = (s.slice(i + 1).split(/\r\n|\r|\n/, 1)[0] ?? "").trim(),
      u = Object.hasOwn(t, a) ? t[a] : void 0;
    if (!u) {
      let d = Object.keys(t);
      throw Error(
        `--config key "${a}" isn't declared in this plugin's userConfig.` +
          (d.length > 0 ? ` Known keys: ${d.join(", ")}.` : ""),
      );
    }
    if (c === "")
      throw Error(`--config ${a}: value is empty. Omit the flag to leave "${a}" unset.`);
    if (u.type === "number") {
      let d = Number(c);
      if (Number.isNaN(d)) throw Error(`--config ${a}: "${c}" is not a number`);
      n[a] = d;
    } else if (u.type === "boolean") {
      if (!ut(c) && !ml(c))
        throw Error(`--config ${a}: "${c}" is not a boolean (use true/false, 1/0, yes/no, on/off)`);
      n[a] = ut(c);
    } else n[a] = c;
  }
  let r = cv(t, (s, i) => Object.hasOwn(n, i)),
    o = eDe(n, r);
  if (!o.valid) throw Error(`--config validation failed: ${o.errors.join("; ")}`);
  return n;
}
async function Lam(e, t) {
  Ah();
  let { enabled: n, disabled: r } = await OT(),
    o = EUn([...n, ...r], e);
  if (!o) {
    if (t && t.length > 0)
      throw Error(
        `--config was given but plugin "${e}" failed to load after install \u2014 run \`claude plugin list\` to see why.`,
      );
    return "";
  }
  let s = o.manifest.userConfig;
  if (!s || Object.keys(s).length === 0) {
    if (t && t.length > 0)
      throw Error(`--config was given but plugin "${e}" declares no userConfig options.`);
    return "";
  }
  if (t && t.length > 0) {
    let l = Ram(t, s);
    await wdt(Tre(o), l, s);
  }
  let i = Object.keys(u3t(o));
  if (i.length === 0) return "";
  let a = i.filter((l) => s[l]?.required === !0);
  return (
    `${i.length} userConfig ${bn(i.length, "option")} not yet set` +
    (a.length > 0 ? ` (${a.length} required)` : "") +
    ` \u2014 run /plugin configure ${e} in Claude Code, or pass --config KEY=VALUE.`
  );
}
async function Spc(e, t = "user", n) {
  try {
    let r = await Q2l(e, t);
    if (!r.success) throw Error(r.message);
    G("tengu_plugin_installed_cli", {
      ...e4(r.pluginId || e, R0()),
      scope: $e(r.scope || t),
      install_source: We("cli-explicit"),
    });
    let o = "";
    try {
      o = await Lam(r.pluginId || e, n);
    } catch (s) {
      let i = be(s);
      if (
        (T(`post-install userConfig step failed: ${i}`, {
          level: "warn",
        }),
        n && n.length > 0)
      )
        o = `${nt.warning} Installed, but --config not applied: ${i}`;
    }
    return o
      ? `${r.message}
${o}`
      : r.message;
  } catch (r) {
    dNe(r, "install", e);
  }
}
async function Epc(e) {
  let t = WEt(e),
    { enabled: n, disabled: r } = await mp();
  return zKi(BL().plugins, [...n, ...r], e, t);
}
async function Apc(e, t = "user", n = !1, r = !1, o = !1) {
  try {
    let s = await OHe(e, t, !n);
    if (!s.success) throw Error(s.message);
    G("tengu_plugin_uninstalled_cli", {
      ...e4(s.pluginId || e, R0()),
      scope: $e(s.scope || t),
    });
    let i = !1;
    try {
      let a = await Epc(t);
      if (r)
        return (
          $i(`${nt.tick} ${s.message}
`),
          (i = !0),
          await Tpc(a, t, {
            dryRun: !1,
            yes: o,
            deleteDataDir: !n,
          })
        );
      return s.message + KKi(a.orphans, t);
    } catch (a) {
      ke(a);
      let c = `(${r ? "prune" : "orphan scan"} failed: ${be(a)})`;
      if (i) return c;
      return `${r ? `${nt.tick} ${s.message}` : s.message}
${c}`;
    }
  } catch (s) {
    dNe(s, "uninstall", e);
  }
}
async function Hpc(e = "user", { dryRun: t = !1, yes: n = !1 } = {}) {
  try {
    let r = await Epc(e);
    return await Tpc(r, e, {
      dryRun: t,
      yes: n,
      deleteDataDir: !0,
    });
  } catch (r) {
    dNe(r, "prune");
  }
}
async function Tpc(e, t, n) {
  if (e.unloadable.length > 0)
    return `Skipped \u2014 cannot determine orphans: ${e.unloadable.join(", ")} failed to load. Fix or uninstall, then retry.`;
  if (e.orphans.size === 0)
    return e.autoCount === 0
      ? `Nothing to prune (no auto-installed plugins at ${t} scope).`
      : `Nothing to prune (${e.autoCount} auto-installed ${bn(e.autoCount, "plugin", "plugins")} at ${t} scope, all still needed).`;
  let r = BL().plugins,
    o = WEt(t),
    s = [...e.orphans].map((l) => {
      let c = r[l]?.find((u) => u.scope === t && u.projectPath === o);
      return `  ${l}${c?.version ? ` (${c.version})` : ""}`;
    }),
    i = `${e.orphans.size} auto-installed ${bn(e.orphans.size, "plugin", "plugins")} no longer needed at ${t} scope:
${s.join(`
`)}`;
  if (n.dryRun)
    return `${i}
(dry run \u2014 nothing removed)`;
  if (!n.yes) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      let c = t === "user" ? "" : ` --scope ${t}`;
      return `${i}
Not a TTY \u2014 run \`claude plugin prune${c} -y\` to remove.`;
    }
    if (
      ($i(`${i}
Remove? [y/N] `),
      !(await Dam()))
    )
      return "Aborted.";
  }
  let a = await BRl(e.orphans, t, o, {
    deleteDataDir: n.deleteDataDir,
  });
  return (
    G("tengu_plugin_prune_cli", {
      scope: $e(t),
      removed_count: a.length,
    }),
    `Removed ${a.length} auto-installed ${bn(a.length, "plugin", "plugins")}: ${a.map((l) => Qo(l).name).join(", ")}`
  );
}
async function Dam() {
  let e = bpc.createInterface({
    input: process.stdin,
  });
  try {
    for await (let t of e) return /^y(es)?$/i.test(t.trim());
    return !1;
  } finally {
    e.close();
  }
}
async function vpc(e, t) {
  try {
    let n = await KEt(e, t);
    if (!n.success) throw Error(n.message);
    return (
      G("tengu_plugin_disabled_cli", {
        ...e4(n.pluginId || e, R0()),
        scope: Oo(n.scope),
      }),
      `${nt.tick} ${n.message}`
    );
  } catch (n) {
    dNe(n, "disable", e);
  }
}
async function wpc() {
  try {
    let e = await Z2l();
    if (!e.success) throw Error(e.message);
    return (G("tengu_plugin_disabled_all_cli", {}), `${nt.tick} ${e.message}`);
  } catch (e) {
    dNe(e, "disable-all");
  }
}
async function Cpc(e, t) {
  try {
    $i(`Checking for updates for plugin "${e}" at ${t} scope\u2026
`);
    let n = await YEt(e, t);
    if (!n.success) throw Error(n.message);
    if (
      ($i(`${nt.tick} ${n.message}
`),
      !n.alreadyUpToDate && !n.skipped)
    )
      G("tengu_plugin_updated_cli", {
        ...e4(n.pluginId || e, R0()),
        old_version: n.oldVersion || "unknown",
        new_version: n.newVersion || "unknown",
      });
    (xe("cli_plugin_update"), await ki(0));
  } catch (n) {
    dNe(n, "update", e);
  }
}
var bpc;
