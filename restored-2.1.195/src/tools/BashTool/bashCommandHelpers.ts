// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CCl
// matched 2.1.88 source: src/tools/BashTool/bashCommandHelpers.ts
// class=modified  jaccard=0.3843  score=0.6702  fileCov=0.474
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module CCl]
JJn = {
  parse(e) {
    if (e === vCl && XJn !== void 0) return XJn;
    return ((vCl = e), (XJn = BHf(e)), XJn);
  },
};
async function segmentedCommandPermissionResult(
  input,
  segments,
  bashToolHasPermissionFn,
  checkers,
  o,
  s,
  i,
) {
  let segmentResults = new Map();
  for (let f = 0; f < segments.length; f++) {
    let m = segments[f].trim();
    if (!m) {
      let h = bashToolHasPermissionFn[f],
        y = await checkers({
          ...input,
          command: h,
        });
      segmentResults.set(
        h,
        y.behavior === "passthrough"
          ? {
              behavior: "allow",
              updatedInput: {
                ...input,
                command: h,
              },
              decisionReason: {
                type: "other",
                reason: "Bare output redirection with no command; path layer approved",
              },
            }
          : y,
      );
      continue;
    }
    let g = await checkers({
      ...input,
      command: m,
    });
    segmentResults.set(m, g);
  }
  let l = Array.from(segmentResults.entries()).find(([, f]) => f.behavior === "deny");
  if (l) {
    let [f, m] = l;
    return {
      behavior: "deny",
      message: m.behavior === "deny" ? m.message : `Permission denied for: ${f}`,
      decisionReason: {
        type: "subcommandResults",
        reasons: segmentResults,
      },
    };
  }
  if (
    segments.filter((f) => {
      let m = f.trim();
      return o.isNormalizedCdCommand(m);
    }).length > 1
  ) {
    for (let [, m] of segmentResults)
      if (
        m.behavior === "ask" &&
        Sq(
          m.decisionReason,
          (g) =>
            g.reason.startsWith("Dangerous rm operation") ||
            g.reason.startsWith("Dangerous rmdir operation"),
        )
      )
        return m;
    let f = {
      type: "other",
      reason: "Multiple directory changes in one command require approval for clarity",
      bashMissKind: "multi-cd",
    };
    return {
      behavior: "ask",
      decisionReason: f,
      message: gp(cl.name, f),
    };
  }
  {
    let f, m;
    if (s)
      ((f = s.some((h) => o.isNormalizedCdCommand(h.text))),
        (m = s.some((h) => o.isNormalizedGitCommand(h.text))));
    else {
      ((f = false), (m = false));
      for (let h of segments)
        for (let y of By(h)) {
          let b = y.trim();
          if (o.isNormalizedCdCommand(b)) f = true;
          if (o.isNormalizedGitCommand(b)) m = true;
        }
    }
    if (m && (s ? xjn(s, $t()) : ZGt(input.command))) {
      let h = {
        type: "other",
        reason:
          "This command creates git repository structure files (HEAD/objects/refs/hooks) and then runs git, which can execute hooks/fsmonitor from the created files.",
        bashMissKind: "cd-git-compound",
      };
      return {
        behavior: "ask",
        decisionReason: h,
        message: gp(cl.name, h),
      };
    }
    if (f && m) {
      let h = [];
      for (let b of segments) for (let _ of By(b)) h.push(_.trim());
      if (!(i ? await i(h) : false)) {
        let b = {
          type: "other",
          reason:
            "This command changes directory before running git, which can execute untrusted hooks from the target directory. Approve only if you trust it.",
          bashMissKind: "cd-git-compound",
        };
        return {
          behavior: "ask",
          decisionReason: b,
          message: gp(cl.name, b),
        };
      }
    }
  }
  if (Array.from(segmentResults.values()).every((f) => f.behavior === "allow"))
    return {
      behavior: "allow",
      updatedInput: input,
      decisionReason: {
        type: "subcommandResults",
        reasons: segmentResults,
      },
    };
  let suggestions = [];
  for (let [, f] of segmentResults)
    if (f.behavior !== "allow" && "suggestions" in f && f.suggestions)
      suggestions.push(...f.suggestions);
  let p = {
    type: "subcommandResults",
    reasons: segmentResults,
  };
  return {
    behavior: "ask",
    message: gp(cl.name, p),
    decisionReason: p,
    suggestions: suggestions.length > 0 ? suggestions : void 0,
  };
}
async function FHf(e) {
  if (!e.includes(">")) return e;
  return (await JJn.parse(e))?.withoutOutputRedirections() ?? e;
}
async function checkCommandOperatorPermissions(
  input,
  bashToolHasPermissionFn,
  checkers,
  astRoot,
  o,
  s,
) {
  let i = astRoot && astRoot !== wue ? nPo(input.command, astRoot) : await JJn.parse(input.command);
  if (!i)
    return {
      behavior: "passthrough",
      message: "Failed to parse command",
    };
  return bashToolCheckCommandOperatorPermissions(input, bashToolHasPermissionFn, checkers, i, o, s);
}
async function bashToolCheckCommandOperatorPermissions(
  input,
  bashToolHasPermissionFn,
  checkers,
  parsed,
  o,
  s,
) {
  let i = parsed.getTreeSitterAnalysis();
  if (
    i
      ? i.compoundStructure.hasSubshell || i.compoundStructure.hasCommandGroup
      : By(input.command).length > 1
  ) {
    let u = {
      type: "other",
      reason: "This command uses shell operators that require approval for safety",
      bashMissKind: "shell-operators",
    };
    return {
      behavior: "ask",
      message: gp(cl.name, u),
      decisionReason: u,
    };
  }
  let pipeSegments = parsed.getPipeSegments();
  if (pipeSegments.length <= 1)
    return {
      behavior: "passthrough",
      message: "No pipes found in command",
    };
  let c = await Promise.all(pipeSegments.map((u) => FHf(u)));
  return segmentedCommandPermissionResult(
    input,
    c,
    pipeSegments,
    bashToolHasPermissionFn,
    checkers,
    o,
    s,
  );
}
