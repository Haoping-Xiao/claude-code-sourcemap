// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zfc
// matched 2.1.88 source: src/utils/processUserInput/processUserInput.ts
// class=modified  jaccard=0.5179  score=0.9454  fileCov=0.5339
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var zfc = E(() => {
  c8o();
  RN();
  kt();
  At();
  co();
  dr();
  u8o();
  _m();
  K0();
  OI();
  ((d8o = require("crypto")), (t7e = R(se(), 1)));
});
async function bTt({
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
  let v = await hcm(e, r, o, s, i, a, l, u, d, p, f, Fr(s).mode, m, g, h, y, t, _, n, S);
  if ((jp("query_process_user_input_base_end"), !d))
    yKn(s.setToolPermissionContext, v.disallowedTools ?? []);
  if (b === !1) v.shouldQuery = !1;
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
        messages: [cc(P, "warning", void 0, !0)],
        shouldQuery: !1,
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
          cc(D, "warning", void 0, !0),
        ),
        (v.shouldQuery = !1),
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
async function hcm(e, t, n, r, o, s, i, a, l, c, u, d, p, f, m, g, h, y, b, _) {
  let S = Wfc({
      isNonInteractive: r.options.isNonInteractiveSession,
      isMeta: m,
      callerSource: y,
    }),
    A = null,
    v = [],
    C = [],
    x = Gh(r.options.mainLoopModel),
    I = e;
  if (typeof e === "string") A = e;
  else if (e.length > 0) {
    jp("query_image_processing_start");
    let Y = [];
    for (let K of e)
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
  if (A === null && t !== "prompt") throw Error(`Mode: ${t} requires a string input.`);
  let k = o ? Object.values(o).filter(qze) : [],
    D = o ? await Ofc(o, r.setAppState) : new Map();
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
  let M = p,
    N = r,
    B = A;
  if (f && A !== null && A.startsWith("/")) {
    let Y = JMe(A),
      z = Y?.commandName;
    if (hk()) {
      if (z) {
        let Z = szn(z, r.options.commands);
        if (Z) z = Z.commandName;
      }
    }
    let K = z ? fA(z, r.options.commands) : void 0;
    if (K) {
      let Z = Y ? _Kn(K, Y.args) : void 0,
        J = Z ? fA(Z.targetName, r.options.commands) : void 0,
        ne =
          Z && J && Ik(J)
            ? {
                command: J,
                consumedToken: Z.consumedToken,
                args: Z.remainingArgs,
              }
            : void 0,
        oe = ne ? ne.command : K;
      if (WHt(oe)) M = !1;
      else {
        let re = qHt(oe);
        if (re)
          ((M = !1),
            (B = ne
              ? `/${re.name}${ne.args ? ` ${ne.args}` : ""}`
              : A.replace(/^\/\S+/, `/${re.name}`)),
            (N = {
              ...r,
              options: {
                ...r.options,
                commands: [re, ...r.options.commands],
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
                uuid: a,
                origin: _,
              }),
              nw(`<local-command-stdout>${ee}</local-command-stdout>`),
            ],
            shouldQuery: !1,
            resultText: ee,
          };
        }
      }
    }
  }
  if (
    tme() &&
    t === "prompt" &&
    !r.options.isNonInteractiveSession &&
    A !== null &&
    !M &&
    !A.startsWith("/") &&
    !r.options.ultraplanSessionUrl &&
    !r.getAppState().ultraplanLaunching &&
    h0l(h ?? A)
  ) {
    G("tengu_ultraplan_keyword", {});
    let Y = OZn(A).trim(),
      { processSlashCommand: z } = await Promise.resolve().then(() => (e$e(), z8t)),
      K = await z(`/ultraplan ${Y}`, v, O, [], r, n, a, l, u, S);
    return (
      r.setAppState((Z) =>
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
  if (A !== null && t === "bash") {
    let { processBashCommand: Y } = await Promise.resolve().then(() => (zfc(), Vfc));
    return gur(await Y(A, v, r, n), C);
  }
  let $ = !g && (t !== "prompt" || M || !A?.startsWith("/")),
    q = hur.randomUUID();
  _Je(q);
  let W = t === "prompt" && !m;
  jp("query_attachment_loading_start");
  let V = $
    ? await mKn(
        g6e(
          A,
          r,
          s ?? null,
          [],
          {
            now: () => new Date().toISOString(),
            uuid: () => hur.randomUUID(),
          },
          i,
          c,
          {
            isRegularUserPrompt: W,
            preExpansionInput: h,
            suppressWorkflowKeyword: b,
          },
        ),
      )
    : [];
  if ((jp("query_attachment_loading_end"), B !== null && !M && B.startsWith("/"))) {
    let { processSlashCommand: Y } = await Promise.resolve().then(() => (e$e(), z8t)),
      z = await Y(B, v, O, V, N, n, a, l, u, S);
    return gur(z, C);
  }
  if (A !== null && t === "prompt") {
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
  return gur(jfc(I, O, L, V, q, a, d, m, lL(r.options.mainLoopModel, gg(r)), S, _), C);
}
function gur(e, t) {
  if (t.length > 0)
    e.messages.push(
      Rn({
        content: t.map((n) => ({
          type: "text",
          text: n,
        })),
        isMeta: !0,
      }),
    );
  return e;
}
var hur;
