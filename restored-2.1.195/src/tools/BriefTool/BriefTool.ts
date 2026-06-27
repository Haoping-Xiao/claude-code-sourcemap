// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dyl
// matched 2.1.88 source: src/tools/BriefTool/BriefTool.ts
// class=modified  jaccard=0.1636  score=0.2381  fileCov=0.3432
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Dyl = E(() => {
  Xr();
  kt();
  ii();
  Bot();
  sr();
  z0o();
  f4();
  l3();
  K0o();
  ((_mf = ve(() =>
    H.strictObject({
      file_uuid: H.string(),
      file_name: H.string(),
      size: H.number(),
      is_image: H.boolean(),
      media_type: H.string().optional(),
    }).describe(
      "A file already uploaded to the filestore (e.g. by the device attach_file tool). Passed through without local stat or upload.",
    ),
  )),
    (bmf = ve(() =>
      H.strictObject({
        message: H.string().describe(Ryl),
        attachments: H.array(H.union([H.string(), _mf()]))
          .optional()
          .describe(
            "Optional attachments for the user to see alongside your message. Each entry is either a file path (absolute or relative to cwd) for a file you can read locally, or a pre-resolved {file_uuid, file_name, size, is_image} object you obtained from a device tool such as attach_file.",
          ),
        status: H.enum(["normal", "proactive"]).describe(
          "Use 'proactive' when you're surfacing something the user hasn't asked for and needs to see now \u2014 task completion while they're away, a blocker you hit, an unsolicited status update. Use 'normal' when replying to something the user just said.",
        ),
      }),
    )),
    (Smf = ve(() =>
      H.object({
        message: H.string().describe(Ryl),
      }),
    )),
    (Emf = ve(() =>
      H.object({
        message: H.string().describe("The message"),
        attachments: H.array(
          H.object({
            path: H.string(),
            size: H.number(),
            isImage: H.boolean(),
            file_uuid: H.string().optional(),
            media_type: H.string().optional(),
          }),
        )
          .optional()
          .describe("Resolved attachment metadata"),
        sentAt: H.string()
          .optional()
          .describe(
            "ISO timestamp captured at tool execution on the emitting process. Optional \u2014 resumed sessions replay pre-sentAt outputs verbatim.",
          ),
      }),
    )),
    (Lyl = ti({
      name: j1,
      aliases: [z2t],
      searchHint: "send a message to the user \u2014 your primary visible output channel",
      briefStandalone: !0,
      maxResultSizeChars: 1e5,
      userFacingName() {
        return "";
      },
      get inputSchema() {
        return z6e() ? bmf() : Smf();
      },
      get outputSchema() {
        return Emf();
      },
      isEnabled() {
        return z6e() || Jxe();
      },
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly() {
        return !0;
      },
      toAutoClassifierInput(e) {
        return e.message;
      },
      async validateInput(e, t) {
        if (!("attachments" in e) || !e.attachments?.length)
          return {
            result: !0,
          };
        return K7n(e.attachments);
      },
      async description() {
        return joo;
      },
      async prompt() {
        return z6e() ? Goo : Woo;
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let n = e.attachments?.length ?? 0,
          r = n === 0 ? "" : ` (${n} ${bn(n, "attachment")} included)`;
        return {
          tool_use_id: t,
          type: "tool_result",
          content: `Message delivered to user.${r}`,
        };
      },
      renderToolUseMessage: xyl,
      renderToolResultMessage: kyl,
      async call(e, t) {
        let { message: n } = e,
          r = "attachments" in e ? e.attachments : void 0,
          o = new Date().toISOString();
        if (
          (G("tengu_brief_send", {
            proactive: "status" in e && e.status === "proactive",
            attachment_count: r?.length ?? 0,
          }),
          !r?.length)
        )
          return {
            data: {
              message: n,
              sentAt: o,
            },
          };
        let s = t.getAppState(),
          i = await Y7n(r, {
            replBridgeEnabled: s.replBridgeEnabled,
            signal: t.abortController.signal,
          });
        return {
          data: {
            message: n,
            attachments: i,
            sentAt: o,
          },
        };
      },
    })));
});
async function Pyl() {
  let e = LI(),
    t = Su(),
    n = t ? Co : Ss,
    r = await Amf(),
    o =
      "`shQuote(s)` is POSIX-only \u2014 for PowerShell, double the single quotes: `\"'\"+s.replaceAll(\"'\", \"''\")+\"'\"`. For multi-line input use a here-string `@'\\n...\\n'@` (closing `'@` at column 0).",
    s = r
      ? `gh pr edit N --body-file - <<'EOF'\\n"+body+"\\nEOF`
      : `git commit -F - <<'EOF'\\n"+msg+"\\nEOF`;
  if (e)
    return `
REPL is your **only way** to investigate \u2014 shell, file reads, and code search all happen here via the shorthands below. Edit, Write, and Agent are still available as top-level tools for direct use.

**Aim for 1-3 REPL calls per turn** \u2014 over-fetch and batch.

## Dense scripts \u2014 every char is an output token

\`\`\`javascript
o.git=sh('git status')
for(const f of (await rgf('X','src')).slice(0,5)) o[f]=cat(f,1,300)
o
\`\`\`

\`o\` is pre-declared \`{}\`; assign results directly to \`o.key\` (no \`const x=\` then repack). Thenable \`o.*\` values are auto-awaited **at return only** \u2014 \`o.x=sh(c)\` needs no await, but a shorthand result used inline (concat, template, arg to another call) does: \`const c=await cat(f); put(f,c+s)\`, never \`put(f,cat(f)+s)\`. **End the script with bare \`o\`** (or a statement) to return the full object; ending on \`o.x=...\` returns just that one value. Relative paths resolve against cwd. No \`//\` comments \u2014 the \`description\` param is your comment. No blank lines, single-char vars.

## API
- \`sh(cmd,ms?)\` \u2192 stdout+stderr (merged \u2014 never write \`2>&1\` or \`2>/dev/null\`)
- \`cat(path,off?,lim?)\` \u2192 file content
- \`rg(pat,path?,{A,B,C,glob,head,type,i}?)\` \u2192 match text
- \`rgf(pat,path?,glob?)\` \u2192 matching file paths[]
- \`gl(pat,path?)\` \u2192 glob file paths[]
- \`put(path,content)\` \u2192 write file
${
  r
    ? `- \\\`gh(args)\\\` \u2192 \\\`sh('gh '+args)\\\` with \\\`-R \\\${REPO}\\\` injected
`
    : ""
}- \`chdir(path)\` \u2014 set cwd for this REPL call
- \`haiku(prompt,schema?)\` \u2014 one-turn model sampling
- \`registerTool(name,desc,schema,handler)\` / \`unregisterTool\` / \`listTools\` / \`getTool\`
- \`log\` (console.log) \xB7 \`str\` (JSON.stringify) \xB7 \`shQuote(s)\`${r ? " \xB7 \\`REPO\\` ('owner/name')" : ""}
- \`await ${ka}({\u2026})\` / \`await ${RI}({\u2026})\` / \`await mcp__server__tool({\u2026})\` (MCP tools by full name)

Shorthands never throw \u2014 \`sh\`/\`cat\`/\`rg\` return the error text on failure, \`rgf\`/\`gl\` return \`[]\`, never \`undefined\`. Permission-denied is a hard no \u2014 don't retry the same call; pivot or stop.

## Rules
- One investigation = one call. Put the next step in the code; grep\u2192read\u2192grep in one script. A failing inner call degrades the result, not the whole script.
- No \`import\`/\`require\`/\`process\`/Node globals \u2014 the VM context is sealed. \u22653 ops per call. Over-fetch (3-5 files, 3-4 patterns).
- Variables persist across calls. Last expression (or \`o\`) = return value. No top-level \`return\` \u2014 end with \`o\` and branch with \`if/else\` above it.
- Never re-invoke a stateful op (\`sh\`/\`Edit\`/\`put\`) to grab another field \u2014 \`git reset\`, \`rm\`, migrations run twice.
- ${t ? `Don't \`put()\` to a temp file just to feed a shell command \u2014 pipe via heredoc instead: \`sh("${s}")\`. Generic temp paths get clobbered by parallel agents.` : "`shQuote(s)` is POSIX-only \u2014 for PowerShell, double the single quotes: `\"'\"+s.replaceAll(\"'\", \"''\")+\"'\"`. For multi-line input use a here-string `@'\\n...\\n'@` (closing `'@` at column 0)."}
`;
  return `
REPL is your programming interface to Claude Code's tools. Use it to loop, branch, and compose tool calls with code.

## How to Use

Write JavaScript that calls tools as async functions:
\`\`\`javascript
const { filenames } = await Glob({ pattern: 'src/**/*.ts' })
for (const f of filenames) {
  const { file } = await Read({ file_path: f })
  if (file.content.includes('oldName')) {
    await Edit({ file_path: f, old_string: 'oldName', new_string: 'newName', replace_all: true })
  }
}
\`\`\`

**IMPORTANT: Batch ALL operations into ONE REPL call.** Don't make multiple separate REPL calls - write a complete script that does everything.

## Available Tools

All tools work as async functions: \`Read\`, \`Write\`, \`Edit\`, \`Glob\`, \`Grep\`, \`${n}\`, etc. MCP tools are callable by their full name (e.g. \`await mcp__slack__slack_send_message({...})\`).

\`\`\`javascript
const { filenames } = await Glob({ pattern: '*.ts' })
const { file } = await Read({ file_path: 'config.json' })
await Edit({ file_path: 'foo.ts', old_string: 'old', new_string: 'new' })
const { stdout } = await ${n}({ command: 'git status' })
\`\`\`

## Tips
- \`import\`/\`require\` don't work here \u2014 the vm context is sealed. For filesystem access use \`Read\`/\`Write\`/\`Glob\`; for shell use \`${n}\`.
- Use \`Promise.all()\` for parallel operations
- Variables persist across REPL calls
- Last expression is returned as the result
- \`haiku(prompt, schema?)\` \u2014 one-turn model sampling. Without schema returns text; with a JSON schema returns the parsed object.
- \`registerTool(name, desc, schema, handler)\` defines a new tool; \`unregisterTool(name)\`, \`listTools()\`, \`getTool(name)\` manage them
- ${
    t
      ? `\`shQuote(s)\` quotes a string for Bash \u2014 use this instead of \`JSON.stringify\` (double quotes don't protect backticks or \`$\`)
- Don't write a temp file just to feed a shell command \u2014 pipe via heredoc: \`await ${n}({command: "${s}"})\`. Generic temp paths get clobbered by parallel agents.`
      : "`shQuote(s)` is POSIX-only \u2014 for PowerShell, double the single quotes: `\"'\"+s.replaceAll(\"'\", \"''\")+\"'\"`. For multi-line input use a here-string `@'\\n...\\n'@` (closing `'@` at column 0)."
  }
`;
}
function Myl() {
  return LI()
    ? "Execute JavaScript to read, write, edit files and run shell commands"
    : "Execute JavaScript code with access to Claude Code tools";
}
var Amf;
