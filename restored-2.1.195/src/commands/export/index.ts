// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xJl
// matched 2.1.88 source: src/commands/export/index.ts
// class=modified  jaccard=0.2443  score=0.2735  fileCov=0.6958
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xJl]
((_6f = {
  type: "local-jsx",
  name: "export",
  description: "Export the current conversation to a file or clipboard",
  argumentHint: "[filename]",
  requires: {
    ink: true,
  },
  load: () => Promise.resolve().then(() => (IJl(), wJl)),
}),
  (j4o = _6f));
var RJl = {};
_t(RJl, {
  call: () => call,
});
async function call(e, t) {
  let n = e.trim();
  if (!n || Iae.includes(n)) {
    let s = t.getAppState();
    return {
      type: "text",
      value: `${ttr(s)}
${kJl}`,
    };
  }
  if (_G.includes(n))
    return {
      type: "text",
      value: kJl,
    };
  G("tengu_model_command_inline", {
    args_hash: Dd(n),
    args_length: n.length,
  });
  let r = await y7t(n);
  if (!r.ok)
    return {
      type: "text",
      value: r.message,
    };
  if (FQ(r.model))
    return (
      It("model_fable_consent", "noninteractive_set_blocked"),
      {
        type: "text",
        value:
          "Fable 5 uses usage credits and needs a one-time consent \xB7 pick Fable from /model in an interactive session to set it up",
      }
    );
  return {
    type: "text",
    value: etr(r.model, t.getAppState, t.setAppState, !t.options.isNonInteractiveSession),
  };
}
var kJl;
