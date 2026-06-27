// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zfc
// matched 2.1.88 source: src/utils/processUserInput/processUserInput.ts
// class=modified  jaccard=0.3597  score=0.5669  fileCov=0.4961
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zfc] deps: utils/shell/resolveDefaultShell.ts, tools/BashTool/BashTool.tsx, utils/debug.ts, utils/errors.ts, utils/messages.ts, utils/settings/settings.ts, utils/processUserInput/processBashCommand.tsx, tools/SyntheticOutputTool/SyntheticOutputTool.ts, utils/mcpOutputStorage.ts, fast-xml-parser/lib/fxp.cjs
((d8o = require("crypto")), (t7e = R(se(), 1)));
async function processUserInput({
  input: e,
  preExpansionInput: t,
  suppressWorkflowKeyword: n,
  mode: r,
  setToolJSX: o,
  context: s,
  pastedContents: i,
  ideSelection: a,
  messages: l,
  setUserInputOnProcessing: c,
  uuid: u,
  isAlreadyProcessing: d,
  querySource: p,
  canUseTool: f,
  skipSlashCommands: m,
  bridgeOrigin: g,
  isMeta: h,
  skipAttachments: y,
  shouldQuery: b,
  promptSource: _,
  origin: S,
}) {
  let A = typeof e === "string" ? e : null;
  if (r === "prompt" && A !== null && !h) c?.(A);
  jp("query_process_user_input_base_start");
  let v = await processUserInputBase(
    e,
    r,
    o,
    s,
    i,
    a,
    l,
    u,
    d,
    p,
    f,
    Fr(s).mode,
    m,
    g,
    h,
    y,
    t,
    _,
    n,
    S,
  );
  if ((jp("query_process_user_input_base_end"), !d))
    yKn(s.setToolPermissionContext, v.disallowedTools ?? []);
  if (b === false) v.shouldQuery = false;
  if (!v.shouldQuery || r === "bash") return v;
  jp("query_hooks_start");
  let C = lQ(e) || "",
    x,
    I = performance.now();
  for await (let k of aZt(C, Fr(s).mode, s)) {
    if (k.message?.type === "progress") continue;
    if (k.blockingError) {
      let D = W5o(k.blockingError),
        P = k.suppressOriginalPrompt
          ? D
          : `${D}

Original prompt: ${C}`;
      return {
        messages: [cc(P, "warning", void 0, true)],
        shouldQuery: false,
        resultText: P,
      };
    }
    if (k.preventContinuation) {
      let D = k.stopReason
        ? `Operation stopped by hook: ${k.stopReason}`
        : "Operation stopped by hook";
      return (
        v.messages.push(
          Rn({
            content: D,
          }),
          cc(D, "warning", void 0, true),
        ),
        (v.shouldQuery = false),
        (v.resultText = D),
        (v.allowedTools = void 0),
        v
      );
    }
    if (k.sessionTitle) x = k.sessionTitle;
    if (k.additionalContexts && k.additionalContexts.length > 0)
      v.messages.push(
        ai({
          type: "hook_additional_context",
          content: k.additionalContexts,
          hookName: "UserPromptSubmit",
          toolUseID: `hook-${hur.randomUUID()}`,
          hookEvent: "UserPromptSubmit",
        }),
      );
    if (k.message)
      switch (k.message.attachment.type) {
        case "hook_success":
          if (!k.message.attachment.content) break;
          v.messages.push(k.message);
          break;
        default:
          v.messages.push(k.message);
          break;
      }
  }
  if ((Zc("prompt_submit_hooks_ms", performance.now() - I, I), x)) await $lr(x);
  return (jp("query_hooks_end"), v);
}
async function processUserInputBase(
  input,
  mode,
  setToolJSX,
  context,
  pastedContents,
  ideSelection,
  messages,
  uuid,
  isAlreadyProcessing,
  querySource,
  canUseTool,
  permissionMode,
  skipSlashCommands,
  bridgeOrigin,
  isMeta,
  skipAttachments,
  preExpansionInput,
  y,
  b,
  _,
) {
  let S = Wfc({
      isNonInteractive: context.options.isNonInteractiveSession,
      isMeta: isMeta,
      callerSource: y,
    }),
    A = null,
    v = [],
    C = [],
    x = Gh(context.options.mainLoopModel),
    I = input;
  if (typeof input === "string") A = input;
  else if (input.length > 0) {
    jp("query_image_processing_start");
    let Y = [];
    for (let K of input)
      if (K.type === "image") {
        let Z = await u8i(K, x);
        if (Z.dimensions) {
          let J = Uat(Z.dimensions);
          if (J) C.push(J);
        }
        Y.push(Z.block);
      } else Y.push(K);
    ((I = Y), jp("query_image_processing_end"));
    let z = Y.at(-1);
    if (z?.type === "text") ((A = z.text), (v = Y.slice(0, -1)));
    else v = Y;
  }
  if (A === null && mode !== "prompt") throw Error(`Mode: ${mode} requires a string input.`);
  let k = pastedContents ? Object.values(pastedContents).filter(qze) : [],
    D = pastedContents ? await Ofc(pastedContents, context.setAppState) : new Map();
  jp("query_pasted_image_processing_start");
  let P = await Promise.all(
      k.map(async (Y) => {
        G("tengu_pasted_image_resize_attempt", {
          original_size_bytes: Y.content.length,
        });
        let z = await FM({
          data: Y.content,
          mediaType: Y.mediaType,
          limits: x,
        });
        return (
          z.block.type,
          {
            id: Y.id,
            resized: z,
            originalDimensions: Y.dimensions,
            sourcePath: Y.sourcePath ?? D.get(Y.id),
          }
        );
      }),
    ),
    O = [],
    L = [];
  for (let { id: Y, resized: z, originalDimensions: K, sourcePath: Z } of P) {
    if ((O.push(z.block), z.block.type !== "image")) continue;
    if ((L.push(Y), z.dimensions)) {
      let J = Uat(z.dimensions, Z);
      if (J) C.push(J);
    } else if (K) {
      let J = Uat(K, Z);
      if (J) C.push(J);
    } else if (Z) C.push(`[Image source: ${Z}]`);
  }
  jp("query_pasted_image_processing_end");
  let M = skipSlashCommands,
    N = context,
    B = A;
  if (bridgeOrigin && A !== null && A.startsWith("/")) {
    let Y = JMe(A),
      z = Y?.commandName;
    if (hk()) {
      if (z) {
        let Z = szn(z, context.options.commands);
        if (Z) z = Z.commandName;
      }
    }
    let K = z ? fA(z, context.options.commands) : void 0;
    if (K) {
      let Z = Y ? _Kn(K, Y.args) : void 0,
        J = Z ? fA(Z.targetName, context.options.commands) : void 0,
        ne =
          Z && J && Ik(J)
            ? {
                command: J,
                consumedToken: Z.consumedToken,
                args: Z.remainingArgs,
              }
            : void 0,
        oe = ne ? ne.command : K;
      if (WHt(oe)) M = false;
      else {
        let re = qHt(oe);
        if (re)
          ((M = false),
            (B = ne
              ? `/${re.name}${ne.args ? ` ${ne.args}` : ""}`
              : A.replace(/^\/\S+/, `/${re.name}`)),
            (N = {
              ...context,
              options: {
                ...context.options,
                commands: [re, ...context.options.commands],
              },
            }));
        else {
          let ee = ne
            ? `/${xu(K)} ${ne.consumedToken} isn't available over Remote Control.`
            : `/${xu(oe)} isn't available over Remote Control.`;
          return {
            messages: [
              Rn({
                content: A,
                uuid: uuid,
                origin: _,
              }),
              nw(`<local-command-stdout>${ee}</local-command-stdout>`),
            ],
            shouldQuery: false,
            resultText: ee,
          };
        }
      }
    }
  }
  if (
    tme() &&
    mode === "prompt" &&
    !context.options.isNonInteractiveSession &&
    A !== null &&
    !M &&
    !A.startsWith("/") &&
    !context.options.ultraplanSessionUrl &&
    !context.getAppState().ultraplanLaunching &&
    h0l(preExpansionInput ?? A)
  ) {
    G("tengu_ultraplan_keyword", {});
    let Y = OZn(A).trim(),
      { processSlashCommand: z } = await Promise.resolve().then(() => (e$e(), z8t)),
      K = await z(
        `/ultraplan ${Y}`,
        v,
        O,
        [],
        context,
        setToolJSX,
        uuid,
        isAlreadyProcessing,
        canUseTool,
        S,
      );
    return (
      context.setAppState((Z) =>
        Z.ultraplanLaunchPending
          ? {
              ...Z,
              ultraplanLaunchPending: {
                ...Z.ultraplanLaunchPending,
                source: "keyword",
              },
            }
          : Z,
      ),
      gur(K, C)
    );
  }
  if (A !== null && mode === "bash") {
    let { processBashCommand: Y } = await Promise.resolve().then(() => (zfc(), Vfc));
    return gur(await Y(A, v, context, setToolJSX), C);
  }
  let $ = !skipAttachments && (mode !== "prompt" || M || !A?.startsWith("/")),
    q = hur.randomUUID();
  _Je(q);
  let W = mode === "prompt" && !isMeta;
  jp("query_attachment_loading_start");
  let V = $
    ? await mKn(
        g6e(
          A,
          context,
          ideSelection ?? null,
          [],
          {
            now: () => new Date().toISOString(),
            uuid: () => hur.randomUUID(),
          },
          messages,
          querySource,
          {
            isRegularUserPrompt: W,
            preExpansionInput: preExpansionInput,
            suppressWorkflowKeyword: b,
          },
        ),
      )
    : [];
  if ((jp("query_attachment_loading_end"), B !== null && !M && B.startsWith("/"))) {
    let { processSlashCommand: Y } = await Promise.resolve().then(() => (e$e(), z8t)),
      z = await Y(B, v, O, V, N, setToolJSX, uuid, isAlreadyProcessing, canUseTool, S);
    return gur(z, C);
  }
  if (A !== null && mode === "prompt") {
    let Y = A.trim(),
      z = V.find((K) => K.attachment.type === "agent_mention");
    if (z) {
      let K = `@agent-${z.attachment.agentType}`,
        Z = Y === K,
        J = Y.startsWith(K) && !Z;
      G("tengu_subagent_at_mention", {
        is_subagent_only: Z,
        is_prefix: J,
      });
    }
  }
  return gur(
    jfc(
      I,
      O,
      L,
      V,
      q,
      uuid,
      permissionMode,
      isMeta,
      lL(context.options.mainLoopModel, gg(context)),
      S,
      _,
    ),
    C,
  );
}
function gur(e, t) {
  if (t.length > 0)
    e.messages.push(
      Rn({
        content: t.map((n) => ({
          type: "text",
          text: n,
        })),
        isMeta: true,
      }),
    );
  return e;
}
var hur;
