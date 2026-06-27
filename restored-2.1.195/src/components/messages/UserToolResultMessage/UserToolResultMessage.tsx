// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _ll
// matched 2.1.88 source: src/components/messages/UserToolResultMessage/UserToolResultMessage.tsx
// class=modified  jaccard=0.3297  score=0.6263  fileCov=0.4104
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _ll] deps: services/mockRateLimits.ts, tools/BriefTool/prompt.ts
((hll = R(lt(), 1)), (iif = new Set([j1])));
function UserToolResultMessage(t0) {
  let t = bll.c(30),
    {
      param: param,
      message: r,
      lookups: o,
      progressMessagesForMessage: s,
      style: i,
      tools: a,
      verbose: l,
      width: c,
      isTranscriptMode: u,
    } = t0,
    toolUse = yll(param.tool_use_id, a, o);
  if (!toolUse) return null;
  let p;
  if (typeof param.content === "string" && param.content.startsWith(uQ)) {
    let m;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((m = u_t.jsx(nll, {})), (t[0] = m));
    else m = t[0];
    p = m;
  } else if (
    (typeof param.content === "string" &&
      (param.content.startsWith(d6e) ||
        (param.content.startsWith(o_t) &&
          toolUse.tool?.renderToolUseRejectedMessage !== void 0))) ||
    param.content === Jv
  ) {
    let m = toolUse.toolUse.input,
      g;
    if (
      t[1] !== u ||
      t[2] !== o ||
      t[3] !== s ||
      t[4] !== i ||
      t[5] !== m ||
      t[6] !== toolUse.tool ||
      t[7] !== a ||
      t[8] !== l
    )
      ((g = u_t.jsx(sll, {
        input: m,
        progressMessagesForMessage: s,
        tool: toolUse.tool,
        tools: a,
        lookups: o,
        style: i,
        verbose: l,
        isTranscriptMode: u,
      })),
        (t[1] = u),
        (t[2] = o),
        (t[3] = s),
        (t[4] = i),
        (t[5] = m),
        (t[6] = toolUse.tool),
        (t[7] = a),
        (t[8] = l),
        (t[9] = g));
    else g = t[9];
    p = g;
  } else if (param.is_error) {
    let m;
    if (
      t[10] !== u ||
      t[11] !== param ||
      t[12] !== s ||
      t[13] !== toolUse.tool ||
      t[14] !== a ||
      t[15] !== l
    )
      ((m = u_t.jsx(tKn, {
        progressMessagesForMessage: s,
        tool: toolUse.tool,
        tools: a,
        param: param,
        verbose: l,
        isTranscriptMode: u,
      })),
        (t[10] = u),
        (t[11] = param),
        (t[12] = s),
        (t[13] = toolUse.tool),
        (t[14] = a),
        (t[15] = l),
        (t[16] = m));
    else m = t[16];
    p = m;
  } else {
    let m;
    if (
      t[17] !== u ||
      t[18] !== o ||
      t[19] !== r ||
      t[20] !== s ||
      t[21] !== i ||
      t[22] !== toolUse.tool ||
      t[23] !== toolUse.toolUse.id ||
      t[24] !== a ||
      t[25] !== l ||
      t[26] !== c
    )
      ((m = u_t.jsx(mll, {
        message: r,
        lookups: o,
        toolUseID: toolUse.toolUse.id,
        progressMessagesForMessage: s,
        style: i,
        tool: toolUse.tool,
        tools: a,
        verbose: l,
        width: c,
        isTranscriptMode: u,
      })),
        (t[17] = u),
        (t[18] = o),
        (t[19] = r),
        (t[20] = s),
        (t[21] = i),
        (t[22] = toolUse.tool),
        (t[23] = toolUse.toolUse.id),
        (t[24] = a),
        (t[25] = l),
        (t[26] = c),
        (t[27] = m));
    else m = t[27];
    p = m;
  }
  let f;
  if (t[28] !== p)
    ((f = u_t.jsx(U, {
      flexDirection: "column",
      children: p,
    })),
      (t[28] = p),
      (t[29] = f));
  else f = t[29];
  return f;
}
var bll, u_t;
