// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U4o
// matched 2.1.88 source: src/components/ExportDialog.tsx
// class=modified  jaccard=0.2987  score=0.4697  fileCov=0.4506
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var U4o = E(() => {
  Hu();
  ((iir = require("fs/promises")), (air = require("path")));
});
function AJl({ content: e, defaultFilename: t, onDone: n }) {
  let [, r] = $1e.useState(null),
    [o, s] = $1e.useState(t),
    [i, a] = $1e.useState(t.length),
    [l, c] = $1e.useState(false),
    { columns: u } = br(),
    d = $1e.useCallback(() => {
      (c(false), r(null));
    }, []),
    p = async (y) => {
      if (y === "clipboard") {
        let b = await AI(e);
        if (b) process.stdout.write(b);
        (xe("export_clipboard"),
          n({
            success: true,
            message: "Conversation copied to clipboard",
          }));
      } else if (y === "file") (r("file"), c(true));
    },
    f = async () => {
      try {
        let y = await lir(o, e);
        (xe("export_file"),
          n({
            success: true,
            message: `Conversation exported to: ${y}`,
          }));
      } catch (y) {
        (Le("export_file", "write_failed"),
          n({
            success: false,
            message: `Failed to export conversation: ${y instanceof Error ? y.message : "Unknown error"}`,
          }));
      }
    },
    m = $1e.useCallback(() => {
      if (l) d();
      else
        n({
          success: false,
          message: "Export cancelled",
        });
    }, [l, d, n]),
    g = [
      {
        label: "Copy to clipboard",
        value: "clipboard",
        description: "Copy the conversation to your system clipboard",
      },
      {
        label: "Save to file",
        value: "file",
        description: "Save the conversation to a file in the current directory",
      },
    ],
    h = l
      ? Cz.jsxs(Tn, {
          children: [
            Cz.jsx(ht, {
              chord: "enter",
              action: "save",
            }),
            Cz.jsx(mr, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "go back",
            }),
          ],
        })
      : Cz.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel",
        });
  return (
    $r("confirm:no", m, {
      context: "Settings",
      isActive: l,
    }),
    Cz.jsx(zn, {
      title: "Export conversation",
      subtitle: "Select export method",
      color: "permission",
      onCancel: m,
      inputGuide: h,
      isCancelActive: !l,
      children: !l
        ? Cz.jsx(Sr, {
            options: g,
            onChange: p,
            onCancel: m,
          })
        : Cz.jsxs(U, {
            flexDirection: "column",
            children: [
              Cz.jsx(w, {
                children: "Enter filename:",
              }),
              Cz.jsxs(U, {
                flexDirection: "row",
                gap: 1,
                marginTop: 1,
                children: [
                  Cz.jsx(w, {
                    children: ">",
                  }),
                  Cz.jsx(Ta, {
                    value: o,
                    onChange: s,
                    onSubmit: f,
                    focus: true,
                    showCursor: true,
                    columns: u,
                    cursorOffset: i,
                    onChangeCursorOffset: a,
                  }),
                ],
              }),
            ],
          }),
    })
  );
}
var $1e, Cz;
