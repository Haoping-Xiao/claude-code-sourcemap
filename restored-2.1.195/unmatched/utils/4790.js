// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F2l
// matched 2.1.88 source: src/commands/plugin/ManagePlugins.tsx
// class=new  jaccard=0.0219  score=0.1644  fileCov=0.0247
// note: nearest: src/commands/plugin/ManagePlugins.tsx (0.0219); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module F2l] deps: @xmldom/xmldom/lib/entities.js, context/modalContext.tsx, components/CustomSelect/select.tsx, components/PromptInput/PromptInputFooterSuggestions.tsx, components/CustomSelect/select.tsx, @smithy/types/dist-cjs/index.js, utils/plugins/pluginStartupCheck.ts, components/Settings/Config.tsx, hooks/useSearchInput.ts, components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, commands/insights.ts, @mixmark-io/domino/lib/htmlelts.js, utils/debug.ts, utils/errors.ts, utils/nativeInstaller/download.ts, utils/plugins/marketplaceHelpers.ts, utils/generatedFiles.ts, utils/plugins/officialMarketplaceGcs.ts, utils/plugins/installedPluginsManager.ts, utils/plugins/parseMarketplaceInput.ts, utils/plugins/fetchTelemetry.ts, utils/plugins/schemas.ts, @opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js, commands/plugin/ManagePlugins.tsx, native-ts/yoga-layout/index.ts, services/teamMemorySync/secretScanner.ts, utils/format.ts, ink/Ansi.tsx, commands/plugin/pluginDetailsHelpers.tsx, commands/plugin/usePagination.ts, commands/plugin/BrowseMarketplace.tsx
YBo = R(lt(), 1), bA = R(rt(), 1), pi = R(se(), 1);
async function MNf(e) {
  let t = [],
    n = [],
    r;
  try {
    r = await gXt.readdir(e);
  } catch (o) {
    if (wn(o)) return {
      queries: [],
      warnings: [`No evals/ folder found at ${e}. Create one with at least ${XBo} <name>.md files (frontmatter: query, should_trigger).`]
    };
    throw o;
  }
  for (let o of r.filter(s => s.endsWith(".md")).sort()) {
    let s = $He.join(e, o),
      i;
    try {
      i = await gXt.readFile(s, "utf8");
    } catch (d) {
      n.push(`Could not read ${o}: ${be(d)}`);
      continue;
    }
    let a = i.match(I_e);
    if (!a) {
      n.push(`${o}: missing YAML frontmatter (expected ---\\nquery: \u2026\\nshould_trigger: \u2026\\n---).`);
      continue;
    }
    let l;
    try {
      l = Kte(a[1] ?? "");
    } catch (d) {
      n.push(`${o}: invalid YAML \u2014 ${be(d)}`);
      continue;
    }
    let c = PNf().safeParse(l);
    if (!c.success) {
      let d = c.error.issues.map(p => `${p.path.join(".")}: ${p.message}`).join("; ");
      n.push(`${o}: ${d}`);
      continue;
    }
    let u = i.slice(a[0].length).trim();
    t.push({
      file: o,
      query: c.data.query,
      shouldTrigger: c.data.should_trigger,
      ...(u && {
        notes: u
      })
    });
  }
  if (t.length > 0 && t.length < XBo) n.push(`Only ${t.length} eval ${t.length === 1 ? "query" : "queries"} found; the spec recommends at least ${XBo} for meaningful coverage.`);
  return {
    queries: t,
    warnings: n
  };
}
async function $Nf(e) {
  try {
    let n = (await gXt.readFile($He.join(e, "SKILL.md"), "utf8")).match(I_e);
    if (!n) return "";
    let r = Kte(n[1] ?? "");
    if (r && typeof r === "object" && "description" in r && typeof r.description === "string") return r.description;
  } catch {}
  return "";
}
async function W2l(e, t, n) {
  let r = e === "~" || e.startsWith("~/") ? $He.join(j2l.homedir(), e.slice(1)) : e,
    o = $He.resolve(r),
    s = $He.basename(o),
    i = await $Nf(o),
    a = $He.join(o, "evals"),
    {
      queries: l,
      warnings: c
    } = await MNf(a),
    u = [];
  for (let d of l) {
    if (t.aborted) break;
    try {
      let p = await n({
        skillName: s,
        description: i,
        query: d,
        signal: t
      });
      if (p === null) {
        u.push({
          query: d,
          modelWouldTrigger: null,
          reason: "Model evaluation not yet wired up \u2014 tracks the plugin evaluation framework.",
          verdict: "skipped"
        });
        continue;
      }
      u.push({
        query: d,
        modelWouldTrigger: p.wouldTrigger,
        reason: p.reason,
        verdict: p.wouldTrigger === d.shouldTrigger ? "pass" : "fail"
      });
    } catch (p) {
      T(`plugin eval: trigger test for ${d.file} threw: ${be(p)}`, {
        level: "error"
      }), u.push({
        query: d,
        modelWouldTrigger: null,
        reason: be(p),
        verdict: "fail"
      });
    }
  }
  return {
    pluginName: s,
    pluginPath: o,
    evalsPath: a,
    queries: l,
    warnings: c,
    triggerResults: u,
    passCount: On(u, d => d.verdict === "pass"),
    failCount: On(u, d => d.verdict === "fail"),
    skippedCount: On(u, d => d.verdict === "skipped")
  };
}
function q2l(e) {
  let t = [];
  t.push(`Evaluating ${e.pluginName} (${e.evalsPath})`), t.push("");
  for (let n of e.warnings) t.push(`! ${n}`);
  if (e.warnings.length > 0) t.push("");
  if (e.queries.length === 0) return t.push("No eval queries to run."), t.join(`
`);
  t.push("Level 1 \u2014 trigger tests:");
  for (let n of e.triggerResults) {
    let r = n.verdict.toUpperCase().padEnd(7),
      o = n.query.shouldTrigger ? "trigger" : "skip";
    if (n.verdict === "skipped") t.push(`  [${r}] ${n.query.file} \u2014 expected ${o}`);else {
      let s = n.modelWouldTrigger ? "trigger" : "skip";
      if (t.push(`  [${r}] ${n.query.file} \u2014 expected ${o}, got ${s}`), n.verdict === "fail") t.push(`            ${n.reason}`);
    }
  }
  if (t.push(""), e.skippedCount === e.triggerResults.length) t.push("All trigger tests skipped \u2014 model evaluation not yet wired up.");else t.push(`${e.passCount}/${e.passCount + e.failCount} trigger tests passed${e.skippedCount > 0 ? ` (${e.skippedCount} skipped)` : ""}.`);
  return t.push(""), t.push("Level 2 \u2014 interplay tests: not yet implemented. Tracks the plugin evaluation framework."), t.join(`
`);
}
var gXt,
  j2l,
  $He,
  XBo = 5,
  PNf,
  G2l = async () => null;