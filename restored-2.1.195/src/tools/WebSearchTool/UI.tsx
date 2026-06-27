// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L_l
// matched 2.1.88 source: src/tools/WebSearchTool/UI.tsx
// class=modified  jaccard=0.2925  score=0.4122  fileCov=0.5017
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module L_l] deps: axios/lib/axios.js, zod/v4/classic/schemas.js, utils/debug.ts, RE, utils/errors.ts, utils/status.tsx, utils/teleport/api.ts, zod/v4/classic/schemas.js
vgf = ve(() =>
  dt.object({
    results: dt
      .array(
        dt.object({
          title: dt.string().optional().default(""),
          url: dt.string().optional().default(""),
          snippet: dt.string().optional().default(""),
        }),
      )
      .optional()
      .default([]),
    error: dt
      .object({
        error_type: dt.string(),
        error_message: dt.string(),
      })
      .nullable()
      .optional(),
  }),
);
function Cgf(e) {
  let t = 0;
  for (let n of e) if (n != null && typeof n !== "string") t++;
  return t;
}
function renderToolUseMessage(
  { query: e, allowed_domains: allowed_domains, blocked_domains: n },
  { verbose: r },
) {
  if (!e) return null;
  let o = "";
  if (e) o += `"${e}"`;
  if (r) {
    if (allowed_domains && allowed_domains.length > 0)
      o += `, only allowing domains: ${allowed_domains.join(", ")}`;
    if (n && n.length > 0) o += `, blocking domains: ${n.join(", ")}`;
  }
  return o;
}
function renderToolUseProgressMessage(progressMessages) {
  if (progressMessages.length === 0) return null;
  let t = progressMessages.at(-1);
  if (!t?.data) return null;
  let data = t.data;
  switch (data.type) {
    case "query_update":
      return XAe.jsx(qn, {
        children: XAe.jsxs(w, {
          dimColor: true,
          children: ["Searching: ", data.query],
        }),
      });
    case "search_results_received":
      return XAe.jsx(qn, {
        children: XAe.jsxs(w, {
          dimColor: true,
          children: ["Found ", data.resultCount, ' results for "', data.query, '"'],
        }),
      });
    default:
      return null;
  }
}
function renderToolResultMessage(output) {
  let t = output.searchCount ?? Cgf(output.results ?? []),
    n =
      output.durationSeconds >= 1
        ? `${Math.round(output.durationSeconds)}s`
        : `${Math.round(output.durationSeconds * 1000)}ms`;
  return XAe.jsx(U, {
    justifyContent: "space-between",
    width: "100%",
    children: XAe.jsx(qn, {
      height: 1,
      children: XAe.jsxs(w, {
        children: ["Did ", t, " search", t !== 1 ? "es" : "", " in ", n],
      }),
    }),
  });
}
function gRo(e) {
  if (!e?.query) return null;
  return $a(e.query, nP);
}
var XAe;
