// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zrr
// matched 2.1.88 source: src/commands/rename/rename.ts
// class=partial  jaccard=0.1867  score=0.4303  fileCov=0.2479
// note: low-confidence suggestion: src/commands/rename/rename.ts; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zrr = E(() => {
  Un();
  ZE();
  og();
  je();
  At();
  q0();
  Rd();
  co();
  XKe();
});
var eWl = {};
_t(eWl, {
  renameSystemReminder: () => renameSystemReminder,
  performRename: () => performRename,
  call: () => call
});
function renameSystemReminder(e) {
  let t = Ner(e);
  return aw(`The user named this session "${t}". This may indicate the session's focus or intent.`);
}
async function performRename(e, t) {
  if (wf()) return {
    message: "Cannot rename: This session is a teammate. Teammate names are set by the team leader."
  };
  let n = !e || e.trim() === "",
    r;
  if (n) {
    let o = await pAt(t.messages, t.abortController.signal, {
      preferFork: !0
    });
    if (!o) return {
      message: "Could not generate a name: no conversation context yet. Usage: /rename <name>"
    };
    r = o;
  } else r = e.trim();
  return await lHe(r, "user"), t.setAppState(o => qer(o, {
    name: r
  })), await Zce(XE(), r, "user"), {
    message: `Session renamed to: ${r}`,
    newName: r,
    isGenerated: n
  };
}
async function call(e, t, n) {
  let {
    message: r,
    newName: o,
    isGenerated: s
  } = await performRename(n, t);
  return e(r, {
    display: "system",
    metaMessages: o && !s ? [renameSystemReminder(o)] : void 0
  }), null;
}