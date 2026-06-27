// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NOo
// matched 2.1.88 source: src/components/DesktopHandoff.tsx
// class=modified  jaccard=0.5845  score=0.7764  fileCov=0.7028
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var NOo = E(() => {
  ft();
  je();
  Bi();
  oc();
  DPl = R(Uj(), 1);
});
function P0f() {
  switch ("linux") {
    case "win32":
      return "https://claude.ai/api/desktop/win32/x64/exe/latest/redirect";
    default:
      return "https://claude.ai/api/desktop/darwin/universal/dmg/latest/redirect";
  }
}
function $Pl({ onDone: e }) {
  let [t, n] = uKe.useState(XF?.state ?? "checking"),
    [r, o] = uKe.useState(XF?.error ?? null),
    [s, i] = uKe.useState(XF?.downloadMessage ?? ""),
    a = ks();
  uKe.useEffect(() => {
    if (XF)
      ((XF.setters = {
        setState: n,
        setError: o,
        setDownloadMessage: i,
      }),
        n(XF.state),
        o(XF.error),
        i(XF.downloadMessage));
    return () => {
      if (XF?.setters?.setState === n) XF.setters = null;
    };
  }, []);
  function l(d, p) {
    ((XF = null), e(d, p));
  }
  function c(d) {
    if (d.key === "escape" || ((d.ctrl || d.meta) && (d.key === "c" || d.key === "d"))) {
      (d.preventDefault(),
        l(`Cancelled. Learn more about Claude Desktop at ${BOo}`, {
          display: "system",
        }));
      return;
    }
    if (d.ctrl || d.meta) return;
    if (t === "error") {
      (d.preventDefault(),
        l(r ?? "Unknown error", {
          display: "system",
        }));
      return;
    }
    if (t === "prompt-download") {
      if (d.key === "y" || d.key === "Y")
        (d.preventDefault(),
          ac(P0f()).catch(() => {}),
          l(
            `Starting download. Re-run /desktop once you\u2019ve installed the app.
Learn more at ${BOo}`,
            {
              display: "system",
            },
          ));
      else if (d.key === "n" || d.key === "N")
        (d.preventDefault(),
          l(`The desktop app is required for /desktop. Learn more at ${BOo}`, {
            display: "system",
          }));
    }
  }
  if (
    (uKe.useEffect(() => {
      if (XF) return;
      XF = {
        state: "checking",
        error: null,
        downloadMessage: "",
        setters: {
          setState: n,
          setError: o,
          setDownloadMessage: i,
        },
      };
      function d(f) {
        if (!XF) return;
        Object.assign(XF, f);
        let m = XF.setters;
        if (f.state !== void 0) m?.setState(f.state);
        if (f.error !== void 0) m?.setError(f.error);
        if (f.downloadMessage !== void 0) m?.setDownloadMessage(f.downloadMessage);
      }
      async function p() {
        d({
          state: "checking",
        });
        let f = await OOo();
        if (f.status === "not-installed") {
          d({
            state: "prompt-download",
            downloadMessage: "Claude Desktop is not installed.",
          });
          return;
        }
        if (f.status === "version-too-old") {
          d({
            state: "prompt-download",
            downloadMessage: `Claude Desktop needs to be updated (found v${f.version}, need v${Jer}+).`,
          });
          return;
        }
        (d({
          state: "flushing",
        }),
          await IC(),
          d({
            state: "opening",
          }));
        let m = await MPl();
        if (!m.success) {
          d({
            state: "error",
            error: m.error,
          });
          return;
        }
        (d({
          state: "success",
        }),
          a.setTimeout(async () => {
            if (
              (l("Session transferred to Claude Desktop", {
                display: "system",
              }),
              Js())
            )
              SHe({
                broadcast: true,
              });
            await ki(0, "other");
          }, 500));
      }
      p().catch((f) => {
        d({
          state: "error",
          error: be(f),
        });
      });
    }, []),
    t === "error")
  )
    return Rfe.jsxs(U, {
      flexDirection: "column",
      paddingX: 2,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: c,
      children: [
        Rfe.jsxs(w, {
          color: "error",
          children: ["Error: ", r],
        }),
        Rfe.jsx(w, {
          dimColor: true,
          children: "Press any key to continue\u2026",
        }),
      ],
    });
  if (t === "prompt-download")
    return Rfe.jsxs(U, {
      flexDirection: "column",
      paddingX: 2,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: c,
      children: [
        Rfe.jsx(w, {
          children: s,
        }),
        Rfe.jsx(w, {
          children: "Download now? (y/n)",
        }),
      ],
    });
  return Rfe.jsx(U, {
    paddingX: 2,
    children: Rfe.jsx(Vc, {
      message: {
        checking: "Checking for Claude Desktop\u2026",
        flushing: "Saving session\u2026",
        opening: "Opening Claude Desktop\u2026",
        success: "Opening in Claude Desktop\u2026",
      }[t],
    }),
  });
}
var uKe,
  Rfe,
  BOo = "https://clau.de/desktop",
  XF = null;
