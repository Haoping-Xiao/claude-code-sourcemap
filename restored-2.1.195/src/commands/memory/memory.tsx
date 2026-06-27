// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y3
// matched 2.1.88 source: src/commands/memory/memory.tsx
// class=modified  jaccard=0.3915  score=0.5483  fileCov=0.5779
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module y3] deps: zj, HI, QOe, ys, aE, Jt, kv
((HBl = require("child_process")),
  (xOf = {
    code: "code -w",
    subl: "subl --wait",
  }));
var wBl = {};
_t(wBl, {
  call: () => call,
});
function POf({ onDone: e }) {
  let t = async (r) => {
      try {
        if (r.includes(tr())) await qs().mkdir(tr());
        try {
          await TBl.writeFile(r, "", {
            encoding: "utf8",
            flag: "wx",
          });
        } catch (c) {
          if (on(c) !== "EEXIST") throw c;
        }
        await yz(r);
        let o = "default",
          s = "";
        if (process.env.VISUAL) ((o = "$VISUAL"), (s = process.env.VISUAL));
        else if (process.env.EDITOR) ((o = "$EDITOR"), (s = process.env.EDITOR));
        let i = o !== "default" ? `Using ${o}="${s}".` : "",
          a = i
            ? `> ${i} To change editor, set $EDITOR or $VISUAL environment variable.`
            : "> To use a different editor, set the $EDITOR or $VISUAL environment variable.",
          l = Tl()
            ? `

> Safe mode: this session doesn't load memory files, so changes take effect after you ${qH()}.`
            : "";
        e(
          `Opened memory file at ${yBl(r)}${l}

${a}`,
          {
            display: "system",
          },
        );
      } catch (o) {
        (T(`Failed to open memory file ${r}: ${o}`, {
          level: "error",
        }),
          e(`Error opening memory file: ${o}`));
      }
    },
    n = () => {
      e("Cancelled memory editing", {
        display: "system",
      });
    };
  return QQ.jsx(zn, {
    title: "Memory",
    onCancel: n,
    color: "remember",
    children: QQ.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        Tl() &&
          QQ.jsxs(U, {
            flexDirection: "column",
            children: [
              QQ.jsxs(w, {
                color: "suggestion",
                children: [nt.info, " Safe mode"],
              }),
              QQ.jsxs(w, {
                dimColor: true,
                children: [
                  "Memory files aren't loaded into this session. You can still edit them \u2014 changes take effect after you ",
                  qH(),
                  ".",
                ],
              }),
            ],
          }),
        QQ.jsx(vBl.Suspense, {
          fallback: QQ.jsx(Vc, {
            message: "Loading memory files\u2026",
            dimColor: true,
          }),
          children: QQ.jsx(fBl, {
            onSelect: t,
            onCancel: n,
          }),
        }),
        QQ.jsx(qL, {
          url: "https://code.claude.com/docs/en/memory",
        }),
      ],
    }),
  });
}
var TBl,
  vBl,
  QQ,
  call = async (e) => (
    ak(),
    await Wv(),
    QQ.jsx(POf, {
      onDone: e,
    })
  );
