// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VVl
// matched 2.1.88 source: src/commands/resume/index.ts
// class=modified  jaccard=0.2524  score=0.2861  fileCov=0.6817
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var VVl = E(() => {
  ((VGf = {
    type: "local-jsx",
    name: "resume",
    description: "Resume a previous conversation",
    aliases: ["continue"],
    argumentHint: "[conversation id or search term]",
    load: () => Promise.resolve().then(() => (WVl(), GVl)),
  }),
    (qVl = VGf));
});
var KVl = {};
_t(KVl, {
  call: () => call,
});
async function call(e) {
  return (
    G("tengu_bedrock_setup_started", {}),
    b1e.jsx(KGf, {
      onDone: e,
    })
  );
}
function KGf({ onDone: e }) {
  let t = TW(),
    [n, r] = zVl.useState(null);
  if (
    ($r(
      "confirm:yes",
      () => {
        (t.exit(),
          Promise.resolve()
            .then(() => (K9e(), z9e))
            .then((o) => o.execRelaunch()));
      },
      {
        context: "Confirmation",
        isActive: n !== null,
      },
    ),
    n !== null)
  )
    return b1e.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      marginTop: 1,
      children: [
        b1e.jsx(w, {
          color: "success",
          children: n,
        }),
        b1e.jsxs(w, {
          dimColor: true,
          children: [
            "Press ",
            b1e.jsx(w, {
              bold: true,
              children: "Enter",
            }),
            " to restart Claude Code.",
          ],
        }),
      ],
    });
  return b1e.jsx(J9n, {
    onComplete: (o) => r(o),
    onCancel: () => {
      (G("tengu_bedrock_setup_cancelled", {}), e());
    },
  });
}
var zVl, b1e;
