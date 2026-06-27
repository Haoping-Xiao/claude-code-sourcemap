// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zrr
// matched 2.1.88 source: src/commands/rename/rename.ts
// class=modified  jaccard=0.1658  score=0.3982  fileCov=0.2212
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: renameSystemReminder, performRename, call
function renameSystemReminder(e) {
  let t = Ner(e);
  return aw(`The user named this session "${t}". This may indicate the session's focus or intent.`);
}
async function call(onDone, context) {
  if (wf())
    return {
      message:
        "Cannot rename: This session is a teammate. Teammate names are set by the team leader.",
    };
  let n = !onDone || onDone.trim() === "",
    r;
  if (n) {
    let o = await pAt(context.messages, context.abortController.signal, {
      preferFork: true,
    });
    if (!o)
      return {
        message: "Could not generate a name: no conversation context yet. Usage: /rename <name>",
      };
    r = o;
  } else r = onDone.trim();
  return (
    await lHe(r, "user"),
    context.setAppState((o) =>
      qer(o, {
        name: r,
      }),
    ),
    await Zce(XE(), r, "user"),
    {
      message: `Session renamed to: ${r}`,
      newName: r,
      isGenerated: n,
    }
  );
}
async function tjf(e, t, n) {
  let { message: r, newName: o, isGenerated: s } = await call(n, t);
  return (
    e(r, {
      display: "system",
      metaMessages: o && !s ? [renameSystemReminder(o)] : void 0,
    }),
    null
  );
}
