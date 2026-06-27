// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bal
// matched 2.1.88 source: src/utils/contentArray.ts
// class=modified  jaccard=0.6365  score=1  fileCov=0.6365
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Bal = E(() => {
  Ye();
  nk();
  ((Oal = R(lt(), 1)), (oKn = R(se(), 1)));
});
function Ual({
  message: e,
  tools: t,
  lookups: n,
  inProgressToolUseIDs: r,
  shouldAnimate: o,
  addMargin: s,
}) {
  let i = _l(t, e.toolName);
  if (!i?.renderGroupedToolUse) return null;
  let a = new Map();
  for (let u of e.results)
    for (let d of u.message.content)
      if (d.type === "tool_result")
        a.set(d.tool_use_id, {
          param: d,
          output: u.toolUseResult,
        });
  let l = e.messages.map((u) => {
      let d = u.message.content[0],
        p = a.get(d.id);
      return {
        param: d,
        isResolved: n.resolvedToolUseIDs.has(d.id),
        isError: n.erroredToolUseIDs.has(d.id),
        isInProgress: r.has(d.id),
        progressMessages: kke(n.progressMessagesByToolUseID.get(d.id) ?? []),
        result: p,
      };
    }),
    c = l.some((u) => u.isInProgress);
  return i.renderGroupedToolUse(l, {
    shouldAnimate: o && c,
    tools: t,
    addMargin: s,
  });
}
