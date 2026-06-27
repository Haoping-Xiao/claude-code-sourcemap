// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZE
// matched 2.1.88 source: src/utils/shell/prefix.ts
// class=modified  jaccard=0.4438  score=0.8662  fileCov=0.4765
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ZE] deps: Ls, Zkn, ii, Fze, oo, Vw, xAn, er, BE, Cp, wr, fn, At, IHo, vn, co, Ao, u$, dn, Un, z1, H5e, yje, Uge, ft, TM, RF, aW, Un, _oe, og, oo, Vw, BE, je, Mm, Cp, NE, p6e, OKt, Sbe, jG, Rze, X4, sr, m1, GX, Lne, LX, Wct, I1n, Rd, xUt, rle, I1, Ao, aze, Jt, cMo, m5, kt, Du, yde, DMo, Yxe, tP, gSe, MQn, frt, cYt, Tac, mio, mLe, vQn, AVe
((ZHt = require("crypto")), (fqo = (Eoe(), ro(Ope))));
function Zac(e) {
  let { toolName: t, policySpec: n, eventName: r, querySource: o, preCheck: s } = e,
    i = JC(
      (a, l, c) => {
        let u = getCommandPrefixImpl(a, l, c, t, n, r, o, s);
        return (
          u.catch(() => {
            if (i.cache.get(a) === u) i.cache.delete(a);
          }),
          u
        );
      },
      (a) => a,
      200,
    );
  return i;
}
function elc(e, t) {
  let n = JC(
    (r, o, s) => {
      let i = $nm(r, o, s, e, t);
      return (
        i.catch(() => {
          if (n.cache.get(r) === i) n.cache.delete(r);
        }),
        i
      );
    },
    (r) => r,
    200,
  );
  return n;
}
async function getCommandPrefixImpl(
  command,
  abortSignal,
  isNonInteractiveSession,
  toolName,
  policySpec,
  eventName,
  querySource,
  preCheck,
) {
  if (preCheck) {
    let d = preCheck(command);
    if (d !== null) return d;
  }
  let l,
    c = Date.now(),
    u = null;
  try {
    l = setTimeout(
      (m, g) => {
        let h = `[${m}Tool] Pre-flight check is taking longer than expected. Run with ANTHROPIC_LOG=debug to check for failed or slow API requests.`;
        if (g)
          process.stderr.write(
            De({
              level: "warn",
              message: h,
            }) +
              `
`,
          );
        else console.warn(wt.yellow(`\u26A0\uFE0F  ${h}`));
      },
      10000 /* 1e4 */,
      toolName,
      isNonInteractiveSession,
    );
    let d = await R$({
      systemPrompt: Sc([
        `Your task is to process ${toolName} commands that an AI coding agent wants to run.

${policySpec}`,
      ]),
      userPrompt: `Command: ${command}`,
      signal: abortSignal,
      options: {
        enablePromptCaching: true,
        querySource: querySource,
        agents: [],
        isNonInteractiveSession: isNonInteractiveSession,
        hasAppendSystemPrompt: false,
        mcpTools: [],
        agentContext: of(),
      },
    });
    clearTimeout(l);
    let p = Date.now() - c,
      f =
        typeof d.message.content === "string"
          ? d.message.content
          : Array.isArray(d.message.content)
            ? (d.message.content.find((m) => m.type === "text")?.text ?? "none")
            : "none";
    if (K1(f))
      (G(eventName, {
        success: false,
        error: We("API error"),
        durationMs: p,
      }),
        (u = null));
    else if (f === "command_injection_detected")
      (G(eventName, {
        success: false,
        error: We("command_injection_detected"),
        durationMs: p,
      }),
        (u = {
          commandPrefix: null,
        }));
    else if (f === "git" || Pnm.has(f.toLowerCase()))
      (G(eventName, {
        success: false,
        error: We("dangerous_shell_prefix"),
        durationMs: p,
      }),
        (u = {
          commandPrefix: null,
        }));
    else if (f === "none")
      (G(eventName, {
        success: false,
        error: We('prefix "none"'),
        durationMs: p,
      }),
        (u = {
          commandPrefix: null,
        }));
    else if (!command.startsWith(f))
      (G(eventName, {
        success: false,
        error: We("command did not start with prefix"),
        durationMs: p,
      }),
        (u = {
          commandPrefix: null,
        }));
    else
      (G(eventName, {
        success: true,
        durationMs: p,
      }),
        (u = {
          commandPrefix: f,
        }));
    return u;
  } catch (d) {
    throw (clearTimeout(l), d);
  }
}
async function $nm(e, t, n, r, o) {
  let s = await o(e),
    [i, ...a] = await Promise.all([
      r(e, t, n),
      ...s.map(async (c) => ({
        subcommand: c,
        prefix: await r(c, t, n),
      })),
    ]);
  if (!i) return null;
  let l = a.reduce((c, { subcommand: u, prefix: d }) => {
    if (d) c.set(u, d);
    return c;
  }, new Map());
  return {
    ...i,
    subcommandPrefixes: l,
  };
}
var Pnm;
