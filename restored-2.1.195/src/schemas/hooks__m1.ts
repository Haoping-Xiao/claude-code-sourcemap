// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zfn
// matched 2.1.88 source: src/schemas/hooks.ts
// class=modified (alt of src/schemas/hooks.ts)  jaccard=0.1392  score=0.526  fileCov=0.1592
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var zfn = E(() => {
  qee();
  Xr();
  iws();
  KRt = ve(() =>
    H.string()
      .optional()
      .describe(
        'Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.',
      ),
  );
  ((aws = ve(() => {
    let {
      BashCommandHookSchema: e,
      PromptHookSchema: t,
      AgentHookSchema: n,
      HttpHookSchema: r,
      McpToolHookSchema: o,
    } = EOu();
    return H.discriminatedUnion("type", [e, t, n, r, o]);
  })),
    (lws = ve(() =>
      H.object({
        matcher: H.string()
          .optional()
          .describe('String pattern to match (e.g. tool names like "Write")'),
        hooks: H.array(aws()).describe("List of hooks to execute when the matcher matches"),
      }),
    )),
    (IG = ve(() => H.partialRecord(H.enum(GO), H.array(lws())))));
});
var WRr, Hmg, Let, _Ce, YRt, AOu, cws, uws, qRr, HOu, TOu, Kfn, VRr, zRr, XRt, KRr, Nae, Tmg;
