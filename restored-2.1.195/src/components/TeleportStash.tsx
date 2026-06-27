// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WVt
// matched 2.1.88 source: src/components/TeleportStash.tsx
// class=modified  jaccard=0.2694  score=0.4104  fileCov=0.4393
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module WVt] deps: kt, Mgt, Rc, fH, _i, jh, EW, Ye, ps, gSe, HVt, S9e, oo, vy, er, At, lT, vn, dr, dHo, zHo, Vl, Ko, eE, YJa, EC, Mg, tTo
((rTo = R(lt(), 1)), (k$ = R(rt(), 1)), (Ai = R(se(), 1)));
function LQa({ onStashAndContinue: e, onCancel: t }) {
  let [n, r] = X9e.useState(null),
    o = n !== null ? [...n.tracked, ...n.untracked] : [],
    [s, i] = X9e.useState(true),
    [a, l] = X9e.useState(false),
    [c, u] = X9e.useState(null);
  X9e.useEffect(() => {
    (async () => {
      try {
        let m = await bfn();
        r(m);
      } catch (m) {
        let g = m instanceof Error ? m.message : String(m);
        (T(`Error getting changed files: ${g}`, {
          level: "error",
        }),
          u("Failed to get changed files"));
      } finally {
        i(false);
      }
    })();
  }, []);
  let d = async () => {
    l(true);
    try {
      if ((T("Stashing changes before teleport..."), await dRr("Teleport auto-stash")))
        (T("Successfully stashed changes"), e());
      else u("Failed to stash changes");
    } catch (f) {
      let m = f instanceof Error ? f.message : String(f);
      (T(`Error stashing changes: ${m}`, {
        level: "error",
      }),
        u("Failed to stash changes"));
    } finally {
      l(false);
    }
  };
  if (s)
    return wk.jsx(U, {
      flexDirection: "column",
      padding: 1,
      children: wk.jsxs(U, {
        marginBottom: 1,
        children: [
          wk.jsx(Vu, {}),
          wk.jsxs(w, {
            children: [" Checking git status", nt.ellipsis],
          }),
        ],
      }),
    });
  if (c)
    return wk.jsxs(U, {
      flexDirection: "column",
      padding: 1,
      children: [
        wk.jsxs(w, {
          bold: true,
          color: "error",
          children: ["Error: ", c],
        }),
        wk.jsx(U, {
          marginTop: 1,
          children: wk.jsx(w, {
            dimColor: true,
            children: wk.jsx(ht, {
              chord: "escape",
              action: "cancel",
              bold: true,
            }),
          }),
        }),
      ],
    });
  let p = o.length > 8;
  return wk.jsxs(zn, {
    title: "Working directory has changes",
    onCancel: t,
    children: [
      wk.jsx(w, {
        children: "Teleport will switch git branches. The following changes were found:",
      }),
      wk.jsx(U, {
        flexDirection: "column",
        paddingLeft: 2,
        children:
          o.length > 0
            ? p
              ? wk.jsxs(w, {
                  children: [o.length, " files changed"],
                })
              : o.map((f, m) =>
                  wk.jsx(
                    w,
                    {
                      children: f,
                    },
                    m,
                  ),
                )
            : wk.jsx(Fl, {
                children: "No changes detected",
              }),
      }),
      wk.jsx(w, {
        children: "Would you like to stash these changes and continue with teleport?",
      }),
      a
        ? wk.jsxs(U, {
            children: [
              wk.jsx(Vu, {}),
              wk.jsx(w, {
                children: " Stashing changes...",
              }),
            ],
          })
        : wk.jsx(Kl, {
            confirmLabel: "Stash changes and continue",
            cancelLabel: "Exit",
            onConfirm: () => void d(),
            onCancel: t,
          }),
    ],
  });
}
var X9e, wk;
