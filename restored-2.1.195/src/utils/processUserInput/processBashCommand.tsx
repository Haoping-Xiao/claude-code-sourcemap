// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u8o
// matched 2.1.88 source: src/utils/processUserInput/processBashCommand.tsx
// class=modified  jaccard=0.3875  score=0.6634  fileCov=0.4824
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Vfc = {};
_t(Vfc, {
  processBashCommand: () => processBashCommand,
});
async function processBashCommand(e, t, n, r) {
  let o = q1() && mur() === "powershell",
    s = Dr().respondToBashCommands ?? true;
  G("tengu_input_bash", {
    powershell: o,
    respond: s,
  });
  let i = Rn({
      content: Y6({
        inputString: `<bash-input>${e}</bash-input>`,
        precedingInputBlocks: t,
      }),
    }),
    a,
    l = d8o.randomUUID(),
    { emitToolProgress: c } = n;
  (c?.({
    kind: "bash_mode_progress",
    toolUseId: l,
    input: e,
    progress: null,
    verbose: n.options.verbose,
  }),
    r({
      jsx: t7e.jsx(QZt, {
        input: e,
        progress: null,
        verbose: n.options.verbose,
      }),
      shouldHidePromptInput: false,
    }));
  try {
    let u = {
        ...n,
        toolUseId: `${l}:inner`,
        setToolJSX: (A) => {
          a = A?.jsx;
        },
      },
      d = (A) => {
        if (A.type !== "progress") return;
        (c?.({
          kind: "bash_mode_progress",
          toolUseId: l,
          input: e,
          progress: A.data,
          verbose: n.options.verbose,
        }),
          r({
            jsx: t7e.jsxs(t7e.Fragment, {
              children: [
                t7e.jsx(QZt, {
                  input: e,
                  progress: A.data,
                  verbose: n.options.verbose,
                }),
                a,
              ],
            }),
            shouldHidePromptInput: false,
            showSpinner: false,
          }));
      },
      p = null;
    if (o) p = (Jzt(), ro(Xzt)).PowerShellTool;
    let f = p ?? cl,
      g = (
        p
          ? await p.call(
              {
                command: e,
                dangerouslyDisableSandbox: true,
              },
              u,
              void 0,
              void 0,
              d,
            )
          : await cl.call(
              {
                command: e,
                dangerouslyDisableSandbox: true,
              },
              u,
              void 0,
              void 0,
              d,
            )
      ).data;
    if (!g) throw Error("No result received from shell command");
    let h = g.stderr,
      y = await Wdt(
        f,
        {
          ...g,
          stderr: "",
        },
        d8o.randomUUID(),
      ),
      b = typeof y.content === "string" ? y.content : g.stdout,
      _ = b.startsWith(dDe) ? b : ec(b),
      S = s && !g.interrupted && !g.backgroundTaskId && !n.abortController.signal.aborted;
    return {
      messages: [
        ...(S ? [] : [Doe()]),
        i,
        Rn({
          content: `<bash-stdout>${_}</bash-stdout><bash-stderr>${ec(h)}</bash-stderr>`,
        }),
      ],
      shouldQuery: S,
    };
  } catch (u) {
    if (u instanceof oM) {
      if (u.interrupted)
        return {
          messages: [
            Doe(),
            i,
            gQ({
              toolUse: false,
            }),
          ],
          shouldQuery: false,
        };
      let p = s && !n.abortController.signal.aborted;
      return {
        messages: [
          ...(p ? [] : [Doe()]),
          i,
          Rn({
            content: `<bash-stdout>${ec(u.stdout)}</bash-stdout><bash-stderr>${ec(u.stderr)}</bash-stderr>`,
          }),
        ],
        shouldQuery: p,
      };
    }
    let d = s && !n.abortController.signal.aborted;
    return {
      messages: [
        ...(d ? [] : [Doe()]),
        i,
        Rn({
          content: `<bash-stderr>Command failed: ${ec(be(u))}</bash-stderr>`,
        }),
      ],
      shouldQuery: d,
    };
  } finally {
    (c?.({
      kind: "clear",
      toolUseId: l,
    }),
      r(null));
  }
}
var d8o, t7e;
