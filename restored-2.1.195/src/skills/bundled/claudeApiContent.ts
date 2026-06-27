// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uxc
// matched 2.1.88 source: src/skills/bundled/claudeApiContent.ts
// class=modified  jaccard=0.1577  score=0.2203  fileCov=0.3569
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var uxc = E(() => {
  Fwc();
  Gwc();
  qwc();
  zwc();
  Ywc();
  Jwc();
  Zwc();
  tCc();
  rCc();
  sCc();
  aCc();
  cCc();
  dCc();
  fCc();
  gCc();
  yCc();
  bCc();
  ECc();
  HCc();
  vCc();
  CCc();
  xCc();
  RCc();
  DCc();
  MCc();
  OCc();
  BCc();
  FCc();
  GCc();
  qCc();
  zCc();
  YCc();
  JCc();
  ZCc();
  tIc();
  rIc();
  sIc();
  aIc();
  cIc();
  dIc();
  fIc();
  gIc();
  yIc();
  bIc();
  EIc();
  HIc();
  vIc();
  CIc();
  xIc();
  RIc();
  DIc();
  MIc();
  OIc();
  BIc();
  FIc();
  GIc();
  qIc();
  zIc();
  YIc();
  JIc();
  ZIc();
  txc();
  rxc();
  sxc();
  axc();
  ((EHm = {
    FABLE_ID: "claude-fable-5",
    FABLE_NAME: "Claude Fable 5",
    MYTHOS_ID: "claude-mythos-5",
    MYTHOS_NAME: "Claude Mythos 5",
    OPUS_ID: "claude-opus-4-8",
    OPUS_NAME: "Claude Opus 4.8",
    SONNET_ID: "claude-sonnet-4-6",
    SONNET_NAME: "Claude Sonnet 4.6",
    HAIKU_ID: "claude-haiku-4-5",
    HAIKU_NAME: "Claude Haiku 4.5",
    PREV_SONNET_ID: "claude-sonnet-4-5",
  }),
    (AHm = eIc),
    (HHm = {
      "csharp/claude-api/README.md": Vwc,
      "csharp/claude-api/batches.md": jwc,
      "csharp/claude-api/files-api.md": Wwc,
      "csharp/claude-api/streaming.md": Kwc,
      "csharp/claude-api/tool-use.md": Xwc,
      "curl/examples.md": Qwc,
      "curl/managed-agents.md": eCc,
      "go/claude-api/README.md": oCc,
      "go/claude-api/files-api.md": nCc,
      "go/claude-api/streaming.md": iCc,
      "go/claude-api/tool-use.md": lCc,
      "go/managed-agents/README.md": uCc,
      "java/claude-api/README.md": mCc,
      "java/claude-api/files-api.md": pCc,
      "java/claude-api/streaming.md": hCc,
      "java/claude-api/tool-use.md": _Cc,
      "java/managed-agents/README.md": SCc,
      "php/claude-api/README.md": wCc,
      "php/claude-api/batches.md": ACc,
      "php/claude-api/files-api.md": TCc,
      "php/claude-api/streaming.md": ICc,
      "php/claude-api/tool-use.md": kCc,
      "php/managed-agents/README.md": LCc,
      "python/claude-api/README.md": NCc,
      "python/claude-api/batches.md": PCc,
      "python/claude-api/files-api.md": $Cc,
      "python/claude-api/streaming.md": UCc,
      "python/claude-api/tool-use.md": jCc,
      "python/managed-agents/README.md": WCc,
      "ruby/claude-api/README.md": VCc,
      "ruby/claude-api/streaming.md": KCc,
      "ruby/claude-api/tool-use.md": XCc,
      "ruby/managed-agents/README.md": QCc,
      "shared/agent-design.md": nIc,
      "shared/anthropic-cli.md": oIc,
      "shared/claude-platform-on-aws.md": iIc,
      "shared/error-codes.md": lIc,
      "shared/live-sources.md": uIc,
      "shared/managed-agents-api-reference.md": pIc,
      "shared/managed-agents-client-patterns.md": mIc,
      "shared/managed-agents-core.md": hIc,
      "shared/managed-agents-environments.md": _Ic,
      "shared/managed-agents-events.md": SIc,
      "shared/managed-agents-memory.md": AIc,
      "shared/managed-agents-multiagent.md": TIc,
      "shared/managed-agents-onboarding.md": wIc,
      "shared/managed-agents-outcomes.md": IIc,
      "shared/managed-agents-overview.md": kIc,
      "shared/managed-agents-scheduled-deployments.md": LIc,
      "shared/managed-agents-self-hosted-sandboxes.md": PIc,
      "shared/managed-agents-tools.md": $Ic,
      "shared/managed-agents-webhooks.md": NIc,
      "shared/model-migration.md": UIc,
      "shared/models.md": jIc,
      "shared/platform-availability.md": WIc,
      "shared/prompt-caching.md": VIc,
      "shared/token-counting.md": KIc,
      "shared/tool-use-concepts.md": XIc,
      "typescript/claude-api/README.md": nxc,
      "typescript/claude-api/batches.md": QIc,
      "typescript/claude-api/files-api.md": exc,
      "typescript/claude-api/streaming.md": oxc,
      "typescript/claude-api/tool-use.md": ixc,
      "typescript/managed-agents/README.md": lxc,
    }));
});
var yxc = {};
_t(yxc, {
  registerClaudeApiSkill: () => registerClaudeApiSkill,
  processSkillMarkdown: () => processSkillMarkdown,
  matchSubcommand: () => matchSubcommand,
  CLAUDE_API_SKILL_DESCRIPTION: () => CLAUDE_API_SKILL_DESCRIPTION,
});
function dxc() {
  return (THm ??= Promise.resolve().then(() => (uxc(), cxc)));
}
function vHm(e) {
  let t = {};
  for (let [n, r] of Object.entries(e.SKILL_FILES))
    t[n] = processSkillMarkdown(r, e.SKILL_MODEL_VARS);
  return t;
}
async function CHm() {
  let e = $t(),
    t;
  try {
    t = await fxc.readdir(e);
  } catch {
    return null;
  }
  for (let [n, r] of Object.entries(wHm)) {
    if (r.length === 0) continue;
    for (let o of r)
      if (o.startsWith(".")) {
        if (t.some((s) => s.endsWith(o))) return n;
      } else if (t.includes(o)) return n;
  }
  return null;
}
function IHm(e, t) {
  return Object.keys(t).filter((n) => {
    if (n.startsWith(`${e}/`)) return !0;
    return n.startsWith("shared/");
  });
}
function processSkillMarkdown(e, t) {
  let n = e,
    r;
  do ((r = n), (n = n.replace(/<!--[\s\S]*?-->\n?/g, "")));
  while (n !== r);
  return ((n = n.replace(/\{\{(\w+)\}\}/g, (o, s) => t[s] ?? o)), n);
}
function mxc(e, t) {
  return processSkillMarkdown(e, t.SKILL_MODEL_VARS);
}
function pxc(e, t, n) {
  let r = [];
  for (let o of e.sort()) {
    let s = t[o];
    if (!s) continue;
    r.push(`<doc path="${o}">
${mxc(s, n).trim()}
</doc>`);
  }
  return r.join(`

`);
}
function kHm(e, t, n) {
  let r = mxc(n.SKILL_PROMPT, n),
    o = r.indexOf("## Reading Guide"),
    i = [o !== -1 ? r.slice(0, o).trimEnd() : r],
    a = xHm.replace(/\{lang\}/g, e ?? "unknown");
  if (e) {
    let c = IHm(e, n.SKILL_FILES);
    (i.push(a),
      i.push(
        `---

## Included Documentation

` + pxc(c, n.SKILL_FILES, n),
      ));
  } else
    (i.push(a),
      i.push(
        "No project language was auto-detected. Ask the user which language they are using, then refer to the matching docs below.",
      ),
      i.push(
        `---

## Included Documentation

` + pxc(Object.keys(n.SKILL_FILES), n.SKILL_FILES, n),
      ));
  let l = r.indexOf("## When to Use WebFetch");
  if (l !== -1) i.push(r.slice(l).trimEnd());
  if (t)
    i.push(`## User Request

${t}`);
  return i.join(`

`);
}
function matchSubcommand(e) {
  let t = e.trim().toLowerCase().split(/\s+/)[0] ?? "";
  return RHm.find((n) => n === t) ?? "none";
}
function registerClaudeApiSkill() {
  Nd({
    name: "claude-api",
    menuDescription: "Build and debug apps that use the Claude API",
    description: CLAUDE_API_SKILL_DESCRIPTION,
    allowedTools: ["Read", "Grep", "Glob", "WebFetch"],
    userInvocable: !0,
    files: () => dxc().then(vHm),
    async getPromptForCommand(e) {
      let [t, n] = await Promise.all([CHm(), dxc()]);
      return (
        G("tengu_claude_api_skill_loaded", {
          detected_lang: $e(t ?? "none"),
          subcommand: matchSubcommand(e),
          has_args: e.trim().length > 0,
        }),
        [
          {
            type: "text",
            text: kHm(t, e, n),
          },
        ]
      );
    },
  });
}
var fxc,
  THm,
  wHm,
  xHm = `## Reference Documentation

The relevant documentation for your detected language is included below in \`<doc>\` tags. Each tag has a \`path\` attribute showing its original file path. Use this to find the right section:

### Quick Task Reference

> All SDK languages use the same per-language \`claude-api/\` directory layout (cURL: \`curl/examples.md\`). Not every language has every file \u2014 if a file is absent, that feature's example is not yet documented for that language; fall back to the cURL shape or WebFetch the SDK repo.

**Single text classification/summarization/extraction/Q&A:**
\u2192 Refer to \`{lang}/claude-api/README.md\`

**Chat UI or real-time response display:**
\u2192 Refer to \`{lang}/claude-api/README.md\` + \`{lang}/claude-api/streaming.md\`

**Long-running conversations (may exceed context window):**
\u2192 Refer to \`{lang}/claude-api/README.md\` \u2014 see Compaction section

**Migrating to a newer model or replacing a retired model:**
\u2192 Refer to \`shared/model-migration.md\`

**Prompt caching / optimize caching / "why is my cache hit rate low":**
\u2192 Refer to \`shared/prompt-caching.md\` + \`{lang}/claude-api/README.md\` (Prompt Caching section)

**Count tokens in a file / prompt / diff ("how many tokens is X"):**
\u2192 Refer to \`shared/token-counting.md\` \u2014 use \`messages.count_tokens\`, never \`tiktoken\`

**Function calling / tool use / agents:**
\u2192 Refer to \`{lang}/claude-api/README.md\` + \`shared/tool-use-concepts.md\` + \`{lang}/claude-api/tool-use.md\`

**Batch processing (non-latency-sensitive):**
\u2192 Refer to \`{lang}/claude-api/README.md\` + \`{lang}/claude-api/batches.md\`

**File uploads across multiple requests:**
\u2192 Refer to \`{lang}/claude-api/README.md\` + \`{lang}/claude-api/files-api.md\`

**Agent design (tool surface, context management, caching strategy):**
\u2192 Refer to \`shared/agent-design.md\`

**Anthropic CLI (\`ant\`) \u2014 terminal access, version-controlled agent/environment YAML, scripting:**
\u2192 Refer to \`shared/anthropic-cli.md\`

**Managed Agents (server-managed stateful agents):**
\u2192 Refer to \`shared/managed-agents-overview.md\` and the rest of the \`shared/managed-agents-*.md\` files. For Python, TypeScript, Go, Ruby, PHP, and Java, read the \`managed-agents/README.md\` in the language folder for code examples. For cURL, read \`curl/managed-agents.md\`. C# has beta Managed Agents support \u2014 use \`curl/managed-agents.md\` as the wire-level reference (the C# SDK mirrors it via \`client.Beta.Agents\`; see \`csharp/claude-api/README.md\`).

**Error handling:**
\u2192 Refer to \`shared/error-codes.md\`

**Latest docs via WebFetch:**
\u2192 Refer to \`shared/live-sources.md\` for URLs`,
  CLAUDE_API_SKILL_DESCRIPTION,
  RHm;
