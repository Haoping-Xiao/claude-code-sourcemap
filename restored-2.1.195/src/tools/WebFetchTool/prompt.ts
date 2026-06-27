// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Eue
// matched 2.1.88 source: src/tools/WebFetchTool/prompt.ts
// class=modified  jaccard=0.1964  score=0.305  fileCov=0.3556
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Eue] deps: Ece, id, fd, je, At, sp, vn, Is, ih, Jt, vf, Cfn, hY, RCe, dr, Sx, Smn
((LWe = require("fs/promises")), (t$ = R(require("path"))), (inp = Ena + Ana + 200));
n$ = anp();
var Sb = "WebFetch";
function Hna(e, t = !1) {
  if (ph(e))
    return `Fetches a URL, converts the page to markdown, and answers \`prompt\` against it using a small fast model.

- Fails on authenticated/private URLs \u2014 use an authenticated MCP tool or \`gh\` for those instead.${t ? " Exception: claude.ai/code/artifact/{uuid} URLs ARE fetchable via your claude.ai login \u2014 use WebFetch, not curl (curl gets the SPA shell or a Cloudflare 403)." : ""}
- HTTP is upgraded to HTTPS. Cross-host redirects are returned to you rather than followed; call again with the redirect URL.
- Responses are cached for 15 minutes per URL.`;
  return `IMPORTANT: WebFetch WILL FAIL for authenticated or private URLs. Before using this tool, check if the URL points to an authenticated service (e.g. Google Docs, Confluence, Jira, GitHub). If so, look for a specialized MCP tool that provides authenticated access.
${
  t
    ? `- Exception: claude.ai/code/artifact/{uuid} URLs (including preview.claude.ai) ARE fetchable \u2014 WebFetch uses your claude.ai login. Use WebFetch for these, not curl or a headless browser (those return the SPA shell or a Cloudflare 403, not the content).
`
    : ""
}${DESCRIPTION}`;
}
function makeSecondaryModelPrompt(e, t, n) {
  return `
Web page content:
---
${e}
---

${t}

${
  n
    ? "Provide a concise response based on the content above. Include relevant details, code examples, and documentation excerpts as needed."
    : `Provide a concise response based only on the content above. In your response:
 - Enforce a strict 125-character maximum for quotes from any source document. Open Source Software is ok as long as we respect the license.
 - Use quotation marks for exact language from articles; any language outside of the quotation should never be word-for-word the same.
 - You are not a lawyer and never comment on the legality of your own prompts and responses.
 - Never produce or reproduce exact song lyrics.`
}
`;
}
var DESCRIPTION = `
- Fetches content from a specified URL and processes it using an AI model
- Takes a URL and a prompt as input
- Fetches the URL content, converts HTML to markdown
- Processes the content with the prompt using a small, fast model
- Returns the model's response about the content
- Use this tool when you need to retrieve and analyze web content

Usage notes:
  - IMPORTANT: If an MCP-provided web fetch tool is available, prefer using that tool instead of this one, as it may have fewer restrictions.
  - The URL must be a fully-formed valid URL
  - HTTP URLs will be automatically upgraded to HTTPS
  - The prompt should describe what information you want to extract from the page
  - This tool is read-only and does not modify any files
  - Results may be summarized if the content is very large
  - Includes a self-cleaning 15-minute cache for faster responses when repeatedly accessing the same URL
  - When a URL redirects to a different host, the tool will inform you and provide the redirect URL in a special format. You should then make a new WebFetch request with the redirect URL to fetch the content.
  - For GitHub URLs, prefer using the gh CLI via Bash instead (e.g., gh pr view, gh issue view, gh api).
`;
