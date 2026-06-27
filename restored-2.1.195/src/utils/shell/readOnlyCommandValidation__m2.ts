// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TKo
// matched 2.1.88 source: src/utils/shell/readOnlyCommandValidation.ts
// class=modified (alt of src/utils/shell/readOnlyCommandValidation.ts)  jaccard=0.0104  score=0.1494  fileCov=0.0111
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function nkc(e, t) {
  if (e) {
    if (t < 30000) return 15000;
    if (t < 300000) return 60000;
    return 180000;
  }
  if (t < 30000) return 60000;
  if (t < 600000) return 300000;
  if (t < 3600000) return 900000;
  return 1800000;
}
async function rkc(e, t) {
  let n = vKo.get(e);
  if (n && Date.now() - n.at < lTm) return n.suggestions;
  let r = () => (
    vKo.set(e, {
      suggestions: MNe,
      at: Date.now(),
    }),
    MNe
  );
  if (fr() !== "firstParty" || Vi()) return r();
  let o = await cTm(e, t);
  if (t.aborted) return MNe;
  if (o === null) return MNe;
  if (o.length === 0) return r();
  let s = o.map(
    (i) => `Title: ${i.title}
Files: ${(i.files ?? [])
      .slice(0, 12)
      .map((a) => a.path)
      .join(", ")}
Body: ${(i.body ?? "").slice(0, 200)}`,
  ).join(`
---
`);
  try {
    let i = await R$({
        systemPrompt: Sc([aTm]),
        userPrompt: s,
        signal: t,
        options: {
          querySource: "fleet_agent_suggestions",
          agents: [],
          isNonInteractiveSession: Ir(),
          hasAppendSystemPrompt: false,
          mcpTools: [],
          agentContext: of(),
          promptTooLongIsHandled: true,
        },
      }),
      a = zl(i.message.content),
      l = uTm(a),
      c = Fpr.map((u, d) => u.template.replace("{scope}", l[d]?.trim() || u.genericScope));
    return (
      vKo.set(e, {
        suggestions: c,
        at: Date.now(),
      }),
      T(`agentSuggestions: personalized ${On(l, Boolean)}/${Fpr.length} scopes`, {
        level: "debug",
      }),
      c
    );
  } catch (i) {
    if (t.aborted) throw i;
    return (ke(i), MNe);
  }
}
async function cTm(e, t) {
  for (let n of [["--author", "@me"], []]) {
    let r = await Gr(
      "gh",
      ["pr", "list", "--state", "merged", ...n, "--limit", "5", "--json", "title,files,body"],
      {
        cwd: e,
        abortSignal: t,
        timeout: 8000,
      },
    );
    if (r.code !== 0)
      return (
        T("agentSuggestions: gh pr list failed", {
          level: "debug",
        }),
        null
      );
    try {
      let o = Ft(r.stdout);
      if (Array.isArray(o) && o.length > 0) return o;
    } catch {
      return null;
    }
  }
  return [];
}
function uTm(e) {
  let t = e
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "")
    .trim();
  try {
    let n = Ft(t);
    if (Array.isArray(n) && n.every((r) => typeof r === "string"))
      return n.slice(0, 3).map((r) => String(r).slice(0, 120));
  } catch {}
  return [];
}
var Fpr,
  MNe,
  aTm,
  vKo,
  lTm = 600000;
