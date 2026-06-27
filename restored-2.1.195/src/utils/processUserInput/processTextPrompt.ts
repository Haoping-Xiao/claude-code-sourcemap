// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Tt
// matched 2.1.88 source: src/utils/processUserInput/processTextPrompt.ts
// class=modified  jaccard=0.2735  score=0.5529  fileCov=0.3512
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _Tt] deps: ft, je, fn, ys
((fur = require("fs/promises")), (XZt = require("path")));
function processTextPrompt(
  input,
  imageContentBlocks,
  imagePasteIds,
  attachmentMessages,
  uuid,
  permissionMode,
  isMeta,
  a,
  l,
  c,
  u,
) {
  let d = typeof input === "string" ? input : input.find((_) => _.type === "text")?.text || "",
    p = typeof input === "string" ? input : input.findLast((_) => _.type === "text")?.text || "";
  if (p)
    Jc("user_prompt", {
      prompt_length: String(p.length),
      prompt: iFt(p),
      "prompt.id": uuid,
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
    imageContentBlocks.length > 0)
  ) {
    let _ =
        typeof input === "string"
          ? input.trim()
            ? [
                {
                  type: "text",
                  text: input,
                },
              ]
            : []
          : input,
      S = Rn({
        content: [..._, ...imageContentBlocks],
        uuid: permissionMode,
        imagePasteIds: imagePasteIds.length > 0 ? imagePasteIds : void 0,
        permissionMode: isMeta,
        isMeta: a || void 0,
        promptSource: c,
        origin: u,
      });
    if (u) dVo(S, u);
    return {
      messages: [S, ...attachmentMessages],
      shouldQuery: true,
    };
  }
  let b = Rn({
    content: input,
    uuid: permissionMode,
    permissionMode: isMeta,
    isMeta: a || void 0,
    promptSource: c,
    origin: u,
  });
  if (u) dVo(b, u);
  return {
    messages: [b, ...attachmentMessages],
    shouldQuery: true,
  };
}
