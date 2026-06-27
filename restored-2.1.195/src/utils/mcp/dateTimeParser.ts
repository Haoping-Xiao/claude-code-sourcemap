// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K8o
// matched 2.1.88 source: src/utils/mcp/dateTimeParser.ts
// class=modified  jaccard=0.5677  score=0.7073  fileCov=0.742
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module K8o] deps: ft, EW, Ye, HVt
_en = R(rt(), 1);
async function parseNaturalLanguageDateTime(e, t, n) {
  let r = new Date(),
    o = r.toISOString(),
    s = -r.getTimezoneOffset(),
    i = Math.floor(Math.abs(s) / 60),
    a = Math.abs(s) % 60,
    c = `${s >= 0 ? "+" : "-"}${String(i).padStart(2, "0")}:${String(a).padStart(2, "0")}`,
    u = r.toLocaleDateString("en-US", {
      weekday: "long",
    }),
    d = Sc([
      "You are a date/time parser that converts natural language into ISO 8601 format.",
      "You MUST respond with ONLY the ISO 8601 formatted string, with no explanation or additional text.",
      "If the input is ambiguous, prefer future dates over past dates.",
      "For times without dates, use today's date.",
      "For dates without times, do not include a time component.",
      'If the input is incomplete or you cannot confidently parse it into a valid date, respond with exactly "INVALID" (nothing else).',
      'Examples of INVALID input: partial dates like "2025-01-", lone numbers like "13", gibberish.',
      'Examples of valid natural language: "tomorrow", "next Monday", "jan 1st 2025", "in 2 hours", "yesterday".',
    ]),
    p =
      t === "date"
        ? "YYYY-MM-DD (date only, no time)"
        : `YYYY-MM-DDTHH:MM:SS${c} (full date-time with timezone)`,
    f = `Current context:
- Current date and time: ${o} (UTC)
- Local timezone: ${c}
- Day of week: ${u}

User input: "${e}"

Output format: ${p}

Parse the user's input into ISO 8601 format. Return ONLY the formatted string, or "INVALID" if the input is incomplete or unparseable.`;
  try {
    let m = await R$({
        systemPrompt: d,
        userPrompt: f,
        signal: n,
        options: {
          querySource: "mcp_datetime_parse",
          agents: [],
          isNonInteractiveSession: false,
          hasAppendSystemPrompt: false,
          mcpTools: [],
          enablePromptCaching: false,
          agentContext: of(),
        },
      }),
      g = zl(m.message.content).trim();
    if (!g || g === "INVALID")
      return (
        Le("mcp_elicitation_nl_datetime_parse", "parse_failed"),
        {
          success: false,
          error: "Unable to parse date/time from input",
        }
      );
    if (!/^\d{4}/.test(g))
      return (
        Le("mcp_elicitation_nl_datetime_parse", "parse_failed"),
        {
          success: false,
          error: "Unable to parse date/time from input",
        }
      );
    return (
      xe("mcp_elicitation_nl_datetime_parse"),
      {
        success: true,
        value: g,
      }
    );
  } catch (m) {
    if (!n.aborted) (Le("mcp_elicitation_nl_datetime_parse", "haiku_error"), ke(m));
    return {
      success: false,
      error: "Unable to parse date/time. Please enter in ISO 8601 format manually.",
    };
  }
}
function Kgc(e) {
  return /^\d{4}-\d{2}-\d{2}(T|$)/.test(e.trim());
}
