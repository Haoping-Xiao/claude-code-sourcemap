// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uTt
// matched 2.1.88 source: src/commands/install.tsx
// class=modified  jaccard=0.4633  score=0.6356  fileCov=0.6309
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: install
// [unwrapped __esm module uTt] deps: Xr, ft, ag, oo, er, je, Cp, At, OMe, Ao, DE, __, Fh
_am = H.object({
  status_category: H.string(),
  status_detail: H.string(),
  needs_action: H.string(),
});
function bam() {
  let e = Oe.platform === "win32",
    t = apc.homedir();
  if (e) return lpc.join(t, ".local", "bin", "claude.exe").replaceAll("/", "\\");
  return "~/.local/bin/claude";
}
function spc(e) {
  let t = ipc.c(5),
    { messages: n } = e;
  if (n.length === 0) return null;
  let r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((r = Tm.jsx(U, {
      children: Tm.jsxs(w, {
        color: "warning",
        children: [
          Tm.jsx(Hs, {
            status: "warning",
            withSpace: true,
          }),
          "Setup notes:",
        ],
      }),
    })),
      (t[0] = r));
  else r = t[0];
  let o;
  if (t[1] !== n) ((o = n.map(Sam)), (t[1] = n), (t[2] = o));
  else o = t[2];
  let s;
  if (t[3] !== o)
    ((s = Tm.jsxs(U, {
      flexDirection: "column",
      gap: 0,
      marginBottom: 1,
      children: [
        r,
        Tm.jsx(U, {
          flexDirection: "column",
          marginLeft: 2,
          children: o,
        }),
      ],
    })),
      (t[3] = o),
      (t[4] = s));
  else s = t[4];
  return s;
}
function Sam(e, t) {
  return Tm.jsx(
    iE,
    {
      children: Tm.jsx(w, {
        dimColor: true,
        children: e,
      }),
    },
    t,
  );
}
function Eam({ onDone: e, force: t, target: n }) {
  let [r, o] = our.useState({
      type: "checking",
    }),
    s = ks();
  return (
    our.useEffect(() => {
      async function i() {
        try {
          T(`Install: Starting installation process (force=${t}, target=${n})`);
          let a = n || jQ();
          (o({
            type: "installing",
            version: a,
          }),
            T(`Install: Calling installLatest(channelOrVersion=${a}, forceReinstall=${t})`));
          let l = await L9e(a, t);
          if (
            (T(
              `Install: installLatest returned version=${l.latestVersion}, wasUpdated=${l.wasUpdated}, lockFailed=${l.lockFailed}`,
            ),
            l.lockFailed)
          )
            throw Error(
              "Could not install - another process is currently installing Claude. Please try again in a moment.",
            );
          if (!l.latestVersion)
            T("Install: Failed to retrieve version information during install", {
              level: "error",
            });
          if (n === "latest" || n === "stable" || n === "rc") {
            let g = n === "rc" ? "stable" : n;
            (io("userSettings", {
              autoUpdatesChannel: g,
            }),
              T(`Install: Saved autoUpdatesChannel=${g} to user settings`));
          }
          if (!l.wasUpdated) T("Install: Already up to date");
          o({
            type: "setting-up",
          });
          let c = await R9e(true);
          if ((T(`Install: Setup launcher completed with ${c.length} messages`), c.length > 0))
            c.forEach((g) => T(`Install: Setup message: ${g.message}`));
          T("Install: Cleaning up npm installations after successful install");
          let { removed: u, errors: d, warnings: p } = await PAo();
          if (u > 0) T(`Cleaned up ${u} npm installation(s)`);
          if (d.length > 0) T(`Cleanup errors: ${d.join(", ")}`);
          let f = await DAo();
          if (f.length > 0) T(`Shell alias cleanup: ${f.map((g) => g.message).join("; ")}`);
          G("tengu_claude_install_command", {
            has_version: l.latestVersion ? 1 : 0,
            forced: t ? 1 : 0,
          });
          let m = [...p, ...f.map((g) => g.message)];
          if (c.length > 0)
            (o({
              type: "set-up",
              messages: c.map((g) => g.message),
            }),
              s.setTimeout(
                () =>
                  o({
                    type: "success",
                    version: l.latestVersion || "current",
                    setupMessages: [...c.map((g) => g.message), ...m],
                  }),
                2000,
              ));
          else
            (T("Install: Shell PATH already configured"),
              o({
                type: "success",
                version: l.latestVersion || "current",
                setupMessages: m,
              }));
        } catch (a) {
          (T(`Install command failed: ${a}`, {
            level: "error",
          }),
            o({
              type: "error",
              message: be(a),
            }));
        }
      }
      i();
    }, [s, t, n]),
    Pd(
      () => {
        if (r.type === "success")
          e("Claude Code installation completed successfully", {
            display: "system",
          });
        else if (r.type === "error")
          e("Claude Code installation failed", {
            display: "system",
          });
      },
      r.type === "success" ? 2000 : r.type === "error" ? 3000 : null,
    ),
    Tm.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        r.type === "checking" &&
          Tm.jsx(w, {
            color: "claude",
            children: "Checking installation status...",
          }),
        r.type === "cleaning-npm" &&
          Tm.jsx(w, {
            color: "warning",
            children: "Cleaning up old npm installations...",
          }),
        r.type === "installing" &&
          Tm.jsxs(w, {
            color: "claude",
            children: ["Installing Claude Code native build ", r.version, "..."],
          }),
        r.type === "setting-up" &&
          Tm.jsx(w, {
            color: "claude",
            children: "Setting up launcher and shell integration...",
          }),
        r.type === "set-up" &&
          Tm.jsx(spc, {
            messages: r.messages,
          }),
        r.type === "success" &&
          Tm.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            children: [
              Tm.jsxs(U, {
                children: [
                  Tm.jsx(Hs, {
                    status: "success",
                    withSpace: true,
                  }),
                  Tm.jsx(w, {
                    color: "success",
                    bold: true,
                    children: "Claude Code successfully installed!",
                  }),
                ],
              }),
              Tm.jsxs(U, {
                marginLeft: 2,
                flexDirection: "column",
                gap: 1,
                children: [
                  r.version !== "current" &&
                    Tm.jsxs(U, {
                      children: [
                        Tm.jsx(w, {
                          dimColor: true,
                          children: "Version: ",
                        }),
                        Tm.jsx(w, {
                          color: "claude",
                          children: r.version,
                        }),
                      ],
                    }),
                  Tm.jsxs(U, {
                    children: [
                      Tm.jsx(w, {
                        dimColor: true,
                        children: "Location: ",
                      }),
                      Tm.jsx(w, {
                        color: "text",
                        children: bam(),
                      }),
                    ],
                  }),
                ],
              }),
              Tm.jsx(U, {
                marginLeft: 2,
                flexDirection: "column",
                gap: 1,
                children: Tm.jsxs(U, {
                  marginTop: 1,
                  children: [
                    Tm.jsx(w, {
                      dimColor: true,
                      children: "Next: Run ",
                    }),
                    Tm.jsx(w, {
                      color: "claude",
                      bold: true,
                      children: "claude --help",
                    }),
                    Tm.jsx(w, {
                      dimColor: true,
                      children: " to get started",
                    }),
                  ],
                }),
              }),
              r.setupMessages.length > 0 &&
                Tm.jsx(spc, {
                  messages: r.setupMessages,
                }),
            ],
          }),
        r.type === "error" &&
          Tm.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            children: [
              Tm.jsxs(U, {
                children: [
                  Tm.jsx(Hs, {
                    status: "error",
                    withSpace: true,
                  }),
                  Tm.jsx(w, {
                    color: "error",
                    children: "Installation failed",
                  }),
                ],
              }),
              Tm.jsx(w, {
                color: "error",
                children: r.message,
              }),
              Tm.jsx(U, {
                marginTop: 1,
                children: Tm.jsx(w, {
                  dimColor: true,
                  children: "Try running with --force to override checks",
                }),
              }),
            ],
          }),
      ],
    })
  );
}
var ipc, apc, lpc, our, Tm, install;
