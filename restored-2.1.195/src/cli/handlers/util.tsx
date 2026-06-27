// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module upc
// matched 2.1.88 source: src/cli/handlers/util.tsx
// class=modified  jaccard=0.2227  score=0.371  fileCov=0.3577
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var upc = E(() => {
  kt();
  lJ();
  gm();
  Ye();
  je();
  wr();
  At();
  BJ();
  LOe();
  dr();
  ((ipc = R(lt(), 1)),
    (apc = require("os")),
    (lpc = require("path")),
    (our = R(rt(), 1)),
    (Tm = R(se(), 1)));
  Aam = {
    type: "local-jsx",
    name: "install",
    description: "Install Claude Code native build",
    argumentHint: "[options]",
    async call(e, t, n) {
      let r = n.includes("--force"),
        s = n.filter((a) => !a.startsWith("--"))[0],
        { unmount: i } = await b8(
          Tm.jsx(Eam, {
            onDone: (a, l) => {
              (i(), e(a, l));
            },
            force: r,
            target: s,
          }),
        );
    },
  };
});
var TA = {};
_t(TA, {
  setupTokenHandler: () => setupTokenHandler,
  installHandler: () => installHandler,
  doctorHandler: () => doctorHandler,
  createSubcommandRoot: () => createSubcommandRoot,
});
function createSubcommandRoot() {
  return rUt({
    ...lN(false),
    patchConsole: false,
  });
}
async function setupTokenHandler(e) {
  G("tengu_setup_token_command", {});
  let t = !eS(),
    { ConsoleOAuthFlow: n } = await Promise.resolve().then(() => (WVt(), RQa));
  (await new Promise((r) => {
    e.render(
      QN.jsx(AH, {
        onChangeAppState: DTe,
        children: QN.jsx(TT, {
          children: QN.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            children: [
              QN.jsx(uNe, {}),
              t &&
                QN.jsxs(U, {
                  flexDirection: "column",
                  children: [
                    QN.jsx(w, {
                      color: "warning",
                      children:
                        "Warning: You already have authentication configured via environment variable or API key helper.",
                    }),
                    QN.jsx(w, {
                      color: "warning",
                      children:
                        "The setup-token command will create a new OAuth token which you can use instead.",
                    }),
                  ],
                }),
              QN.jsx(U, {
                paddingLeft: 1,
                children: QN.jsx(n, {
                  onDone: () => {
                    r();
                  },
                  mode: "setup-token",
                  startingMessage:
                    "This will guide you through long-lived (1-year) auth token setup for your Claude account. Claude subscription required.",
                  urlOutdent: 1,
                }),
              }),
            ],
          }),
        }),
      }),
    );
  }),
    e.unmount(),
    xe("cli_setup_token"),
    process.exit(0));
}
function wam(e) {
  let t = dpc.c(2),
    { onDone: n } = e;
  rur();
  let r;
  if (t[0] !== n)
    ((r = QN.jsx(sur.Suspense, {
      fallback: null,
      children: QN.jsx(vam, {
        onDone: n,
      }),
    })),
      (t[0] = n),
      (t[1] = r));
  else r = t[1];
  return r;
}
async function doctorHandler(e) {
  (G("tengu_doctor_command", {}),
    await oV({
      hasDynamicMcpConfig: false,
    }),
    await new Promise((t) => {
      e.render(
        QN.jsx(AH, {
          children: QN.jsx(TT, {
            children: QN.jsx(nXt, {
              dynamicMcpConfig: void 0,
              isStrictMcpConfig: false,
              children: QN.jsx(wam, {
                onDone: () => {
                  t();
                },
              }),
            }),
          }),
        }),
      );
    }),
    e.unmount(),
    xe("cli_doctor"),
    process.exit(0));
}
async function installHandler(e, t) {
  if (Oe.DISABLE_UPDATES)
    (process.stdout
      .write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`),
      process.exit(0));
  let { setup: n } = await Promise.resolve().then(() => (Zcr(), Qcr));
  await n(ppc.cwd(), "default", false, false, void 0, false);
  let { install: r } = await Promise.resolve().then(() => (upc(), cpc));
  await new Promise((o) => {
    let s = [];
    if (e) s.push(e);
    if (t.force) s.push("--force");
    r.call(
      (i) => {
        if ((o(), i.includes("failed"))) Le("cli_install", "cli_install_failed");
        else xe("cli_install");
        process.exit(i.includes("failed") ? 1 : 0);
      },
      {},
      s,
    );
  });
}
var dpc, ppc, sur, QN, vam;
