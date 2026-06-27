// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jTc
// matched 2.1.88 source: src/utils/ultraplan/keyword.ts
// class=new  jaccard=0.0244  score=0.025  fileCov=0.5128
// note: nearest: src/utils/ultraplan/keyword.ts (0.0244); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jTc = E(() => {
  kZn();
  DHe();
  AA();
});
function qTc(e) {
  let {
      rawFirstToken: t,
      flags: n,
      rest: r
    } = Kor(e, ["comment", "fix"]),
    o = n.has("comment"),
    s = n.has("fix"),
    i = r.split(/\s+/).filter(Boolean),
    a = i[0] ?? "";
  if (t.toLowerCase() === "ultra") return {
    explicit: void 0,
    target: i.slice(1).join(" "),
    comment: o,
    fix: s,
    unrecognizedLevel: void 0,
    ultraFallback: !0
  };
  let l = a.toLowerCase() === "ultra" ? void 0 : zst(a);
  if (l !== void 0) return {
    explicit: l,
    target: i.slice(1).join(" "),
    comment: o,
    fix: s,
    unrecognizedLevel: void 0,
    ultraFallback: !1
  };
  let c = Ybm.test(a);
  return {
    explicit: void 0,
    target: r,
    comment: o,
    fix: s,
    unrecognizedLevel: c ? a : void 0,
    ultraFallback: !1
  };
}
function Xbm() {
  return `Review the current diff for correctness bugs and reuse/simplification/efficiency cleanups at the given effort level (low/medium: fewer, high-confidence findings; high\u2192max: broader coverage, may include uncertain findings${xyt() ? `; ultra: deep multi-agent review in the cloud${W6() ? "" : " (requires claude.ai account access)"}` : ""}). Pass --comment to post findings as inline PR comments, or --fix to apply the findings to the working tree after the review.`;
}
function Jbm() {
  return `[${xyt() ? `${Npr.join("|")}|ultra` : Npr.join("|")}] [--fix] [--comment] [<target>]`;
}
async function Qbm(e, t) {
  let {
      explicit: n,
      target: r,
      comment: o,
      fix: s,
      unrecognizedLevel: i,
      ultraFallback: a
    } = qTc(e),
    l = a ? "max" : n,
    c = t.options?.mainLoopModel,
    u = c ? x7(c, l ?? gg(t)) ?? l : l ?? gg(t),
    d = u === void 0 ? "medium" : x_e(u),
    p = eSm({
      ultraFallback: a,
      fix: s,
      unrecognizedLevel: i,
      level: d,
      context: t
    }),
    f = !a && Zbm(d, t);
  if (!t.options?.isSkillPreload) G("tengu_code_review_routed", {
    effort_level: $e(d),
    routed_to_workflow: f,
    has_fix: s,
    has_comment: o,
    has_target: r.length > 0,
    is_ultra_fallback: a
  });
  if (f) {
    let g = r ? `${d} ${r}` : d;
    return [{
      type: "text",
      text: `${p}Run the workflow-backed code review at ${d} effort instead of reviewing inline.

Invoke: ${uC}({ name: ${De(Dct)}, args: ${De(g)} })

Everything after the level in the args string is passed to the workflow as the review target / instructions. If the user gave additional instructions for this review elsewhere in the conversation (a scope restriction, files to focus on, things to skip), append them to the args string so the workflow honors them.

The workflow runs the same finder angles and verify pass as the inline review, in the background; the verified findings arrive as a task notification. When they arrive, present the findings ranked most-severe first (or note that nothing survived verification).${o ? GTc : ""}${s ? WTc : ""}`
    }];
  }
  let m = r ? `Review target: \`${r}\`

` : "";
  return [{
    type: "text",
    text: `${p}${m}${Kbm[d]}${o ? GTc : ""}${s ? WTc : ""}`
  }];
}
function Zbm(e, t) {
  if (e !== "high" && e !== "xhigh" && e !== "max") return !1;
  if (t.options?.isSkillPreload) return !1;
  if (!JS()) return !1;
  if (t.options?.isNonInteractiveSession) return !1;
  if (!t.options?.tools?.some(n => Ql(n, uC))) return !1;
  return at("tengu_review_workflow_routing", !1);
}
function eSm({
  ultraFallback: e,
  fix: t,
  unrecognizedLevel: n,
  level: r,
  context: o
}) {
  if (e) {
    if (!W6()) {
      if (t) return `(Running a local ${r}-effort review and applying its findings.)

`;
      if (xyt()) {
        if (o.options?.isNonInteractiveSession) {
          let i = nzn();
          if (i) return `(${i} Falling back to a local ${r}-effort review.)

`;
        }
        return `(ultra (cloud review) requires claude.ai account access this session doesn't have \u2014 see https://code.claude.com/docs/en/ultrareview. Falling back to a local ${r}-effort review.)

`;
      }
      return `(ultra (cloud review) isn't available in this environment \u2014 see https://code.claude.com/docs/en/ultrareview. Falling back to a local ${r}-effort review.)

`;
    }
    let s = o.options?.commands?.some(i => i.name === "ultrareview" && Ik(i)) ?? !1;
    if (t) return s ? `(Claude can't launch the cloud review directly \u2014 type \`/code-review ultra --fix\` to review in the cloud and apply the findings locally when it completes. Running a local ${r}-effort review and applying its findings for now.)

` : `(Running a local ${r}-effort review and applying its findings.)

`;
    return s ? `(Claude can't launch the cloud review directly \u2014 type \`/code-review ultra\` to run it. Falling back to a local ${r}-effort review for now.)

` : `(Claude can't launch the cloud review directly \u2014 the user can run \`claude ultrareview\` from a terminal to start it. Falling back to a local ${r}-effort review for now.)

`;
  }
  if (n !== void 0) return `(Ignoring unrecognized effort "${n}"; valid: ${Npr.join(", ")}. Using ${r}.)

`;
  return "";
}
function VTc() {
  Nd({
    name: woe,
    menuDescription: "Review the current diff for bugs and cleanups",
    subcommands: {
      ultra: "ultrareview"
    },
    description: Xbm,
    argumentHint: Jbm,
    userInvocable: !0,
    getEffort(e) {
      return qTc(e).explicit;
    },
    getPromptForCommand: Qbm
  });
}
var Kbm,
  GTc = `

## Posting to GitHub (--comment)

The \`--comment\` flag was passed. After producing the findings list, if the
review target is a GitHub PR, post each finding as an inline PR comment via
\`mcp__github_inline_comment__create_inline_comment\` (one call per finding;
include a suggestion block only when it fully fixes the issue). If that tool
is not available in this session, fall back to \`gh api\` (repos/{owner}/{repo}/pulls/{pr}/comments)
or print the findings instead. If the target is not a PR, print the findings
to the terminal and note that \`--comment\` was ignored.
`,
  WTc = `

## Applying fixes (--fix)

The \`--fix\` flag was passed. After producing the findings list, apply the
findings to the working tree instead of stopping at the report: fix each one
directly \u2014 correctness bugs and reuse/simplification/efficiency cleanups alike.
Skip any finding whose fix would change intended behavior, require changes well
outside the reviewed diff, or that you judge to be a false positive \u2014 note the
skip rather than arguing with it. Finish with a brief summary of what was fixed
and what was skipped.
`,
  Npr,
  Ybm;