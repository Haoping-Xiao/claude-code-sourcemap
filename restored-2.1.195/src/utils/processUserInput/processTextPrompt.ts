// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Tt
// matched 2.1.88 source: src/utils/processUserInput/processTextPrompt.ts
// class=modified  jaccard=0.2735  score=0.5529  fileCov=0.3512
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _Tt] deps: ft, je, fn, ys
((fur = require("fs/promises")), (XZt = require("path")));
function jfc(e, t, n, r, o, s, i, a, l, c, u) {
  let d = typeof e === "string" ? e : e.find((_) => _.type === "text")?.text || "",
    p = typeof e === "string" ? e : e.findLast((_) => _.type === "text")?.text || "";
  if (p)
    Jc("user_prompt", {
      prompt_length: String(p.length),
      prompt: iFt(p),
      "prompt.id": o,
    });
  let f = Bxl(d),
    m = Uxl(d),
    g = jxl(d),
    h = a ? null : eUe(),
    y = a ? void 0 : uSr();
  if (
    (G("tengu_input_prompt", {
      is_negative: f,
      is_keep_going: m,
      is_wakeup: g,
      prompt_index: y,
      prompt_length: p.length,
      ...(c && {
        prompt_source: $e(c),
      }),
      ...(l && {
        effort_level: $e(l),
      }),
      ...(h && {
        interrupted_message_id: Hr(h),
      }),
    }),
    t.length > 0)
  ) {
    let _ =
        typeof e === "string"
          ? e.trim()
            ? [
                {
                  type: "text",
                  text: e,
                },
              ]
            : []
          : e,
      S = Rn({
        content: [..._, ...t],
        uuid: s,
        imagePasteIds: n.length > 0 ? n : void 0,
        permissionMode: i,
        isMeta: a || void 0,
        promptSource: c,
        origin: u,
      });
    if (u) dVo(S, u);
    return {
      messages: [S, ...r],
      shouldQuery: true,
    };
  }
  let b = Rn({
    content: e,
    uuid: s,
    permissionMode: i,
    isMeta: a || void 0,
    promptSource: c,
    origin: u,
  });
  if (u) dVo(b, u);
  return {
    messages: [b, ...r],
    shouldQuery: true,
  };
}
