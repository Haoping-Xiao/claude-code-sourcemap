// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u8o
// matched 2.1.88 source: src/utils/processUserInput/processBashCommand.tsx
// class=modified  jaccard=0.3875  score=0.6634  fileCov=0.4824
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: processBashCommand
async function processBashCommand(inputString, precedingInputBlocks, attachmentMessages, context) {
  let o = q1() && mur() === "powershell",
    s = Dr().respondToBashCommands ?? true;
  G("tengu_input_bash", {
    powershell: o,
    respond: s,
  });
  let i = Rn({
      content: Y6({
        inputString: `<bash-input>${inputString}</bash-input>`,
        precedingInputBlocks: precedingInputBlocks,
      }),
    }),
    a,
    l = d8o.randomUUID(),
    { emitToolProgress: c } = attachmentMessages;
  (c?.({
    kind: "bash_mode_progress",
    toolUseId: l,
    input: inputString,
    progress: null,
    verbose: attachmentMessages.options.verbose,
  }),
    context({
      jsx: t7e.jsx(QZt, {
        input: inputString,
        progress: null,
        verbose: attachmentMessages.options.verbose,
      }),
      shouldHidePromptInput: false,
    }));
  try {
    let u = {
        ...attachmentMessages,
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
          input: inputString,
          progress: A.data,
          verbose: attachmentMessages.options.verbose,
        }),
          context({
            jsx: t7e.jsxs(t7e.Fragment, {
              children: [
                t7e.jsx(QZt, {
                  input: inputString,
                  progress: A.data,
                  verbose: attachmentMessages.options.verbose,
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
                command: inputString,
                dangerouslyDisableSandbox: true,
              },
              u,
              void 0,
              void 0,
              d,
            )
          : await cl.call(
              {
                command: inputString,
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
      S =
        s &&
        !g.interrupted &&
        !g.backgroundTaskId &&
        !attachmentMessages.abortController.signal.aborted;
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
      let p = s && !attachmentMessages.abortController.signal.aborted;
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
    let d = s && !attachmentMessages.abortController.signal.aborted;
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
      context(null));
  }
}
var d8o, t7e;
