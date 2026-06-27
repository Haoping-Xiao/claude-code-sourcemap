// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tQ
// matched 2.1.88 source: src/tools/AgentTool/built-in/exploreAgent.ts
// class=modified  jaccard=0.1347  score=0.1981  fileCov=0.2964
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tQ] deps: Xr, ft, ZWe, Hde, Brl, dn, Un, kt, Du, l8t, Ox, ii, S_, $S, fp, sA, Il, je, Two, f6, RE, fn, At, Sbe, co, pht, QH, Hoe, $g, K6n, aS, II, u$, R8e, lf, I8e, EI, gAe, lC, jv, fut, fh
((Bnf = (RX(), ro(Q2t)).ARTIFACT_TOOL_NAME), (Aol = new Set([s$, cC, ZD, kX, yL])));
Tol = ve(() =>
  H.object({
    agentId: H.string(),
    agentType: H.string().optional(),
    content: H.array(
      H.object({
        type: H.literal("text"),
        text: H.string(),
      }),
    ),
    resolvedModel: H.string().optional(),
    totalToolUseCount: H.number(),
    totalDurationMs: H.number(),
    totalTokens: H.number(),
    usage: H.object({
      input_tokens: H.number(),
      output_tokens: H.number(),
      cache_creation_input_tokens: H.number().nullable(),
      cache_read_input_tokens: H.number().nullable(),
      server_tool_use: H.object({
        web_search_requests: H.number(),
        web_fetch_requests: H.number(),
      }).nullable(),
      service_tier: H.enum(["standard", "priority", "batch"]).nullable(),
      cache_creation: H.object({
        ephemeral_1h_input_tokens: H.number(),
        ephemeral_5m_input_tokens: H.number(),
      }).nullable(),
    }),
    toolStats: H.object({
      readCount: H.number(),
      searchCount: H.number(),
      bashCount: H.number(),
      editFileCount: H.number(),
      linesAdded: H.number(),
      linesRemoved: H.number(),
      otherToolCount: H.number(),
    }).optional(),
  }),
);
Fwo = xVt + kVt + 60000;
Wnf = new Set([ss]);
function getExploreSystemPrompt() {
  let e = Su(),
    t = e ? Co : Ss,
    n = hC() && e,
    r = n
      ? `- Use \`find\` via ${Co} for broad file pattern matching`
      : `- Use ${wu} for broad file pattern matching`,
    o = n
      ? `- Use \`grep\` via ${Co} for searching file contents with regex`
      : `- Use ${qc} for searching file contents with regex`;
  return `You are a file search specialist for Claude Code, Anthropic's official CLI for Claude. You excel at thoroughly navigating and exploring codebases.

=== CRITICAL: READ-ONLY MODE - NO FILE MODIFICATIONS ===
This is a READ-ONLY exploration task. You are STRICTLY PROHIBITED from:
- Creating new files (no Write, touch, or file creation of any kind)
- Modifying existing files (no Edit operations)
- Deleting files (no rm or deletion)
- Moving or copying files (no mv or cp)
- Creating temporary files anywhere, including /tmp
- Using redirect operators (>, >>, |) or heredocs to write to files
- Running ANY commands that change system state

Your role is EXCLUSIVELY to search and analyze existing code. You do NOT have access to file editing tools - attempting to edit files will fail.

Your strengths:
- Rapidly finding files using glob patterns
- Searching code and text with powerful regex patterns
- Reading and analyzing file contents

Guidelines:
${r}
${o}
- Use ${Ds} when you know the specific file path you need to read
- Use ${t} ONLY for read-only operations (${e ? `ls, git status, git log, git diff, find${n ? ", grep" : ""}, cat, head, tail` : "Get-ChildItem, git status, git log, git diff, Get-Content, Select-Object -First/-Last"})
- NEVER use ${t} for: ${e ? "mkdir, touch, rm, cp, mv, git add, git commit, npm install, pip install" : "New-Item, Remove-Item, Copy-Item, Move-Item, git add, git commit, npm install, pip install"}, or any file creation/modification
- Adapt your search approach based on the thoroughness level specified by the caller
- Communicate your final report directly as a regular message - do NOT attempt to create files

NOTE: You are meant to be a fast agent that returns output as quickly as possible. In order to achieve this you must:
- Make efficient use of the tools that you have at your disposal: be smart about how you search for files and implementations
- Wherever possible you should try to spawn multiple parallel tool calls for grepping and reading files

Complete the user's search request efficiently and report your findings clearly.`;
}
function EXPLORE_AGENT(e, t) {
  if (e.agentType !== Upe.agentType || e.source !== "built-in") return e.model;
  if (!at("tengu_quartz_heron", !1)) return "haiku";
  return Knf(t) ? kol : "inherit";
}
function Knf(e) {
  if (fr() !== "firstParty") return !1;
  let t = Iol.slice(0, Iol.indexOf(kol) + 1);
  return !Hkn(e, t);
}
var xol = 3,
  Vnf =
    'Fast read-only search agent for locating code. Use it to find files by pattern (eg. "src/components/**/*.tsx"), grep for symbols or keywords (eg. "API endpoints"), or answer "where is X defined / which files reference Y." Do NOT use it for code review, design-doc auditing, cross-file consistency checks, or open-ended analysis \u2014 it reads excerpts rather than whole files and will miss content past its read window. When calling, specify search breadth: "quick" for a single targeted lookup, "medium" for moderate exploration, or "very thorough" to search across multiple locations and naming conventions.',
  znf = `Read-only search agent for broad fan-out searches \u2014 when answering means sweeping many files, directories, or naming conventions and you only need the conclusion, not the file dumps. It reads excerpts rather than whole files, so it locates code; it doesn't review or audit it. Specify search breadth: "medium" for moderate exploration, "very thorough" for multiple locations and naming conventions.`,
  Upe,
  Iol,
  kol = "opus";
