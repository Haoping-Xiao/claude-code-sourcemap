// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CCl
// matched 2.1.88 source: src/tools/BashTool/bashCommandHelpers.ts
// class=modified  jaccard=0.3843  score=0.6702  fileCov=0.474
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module CCl]
JJn = {
  parse(e) {
    if (e === vCl && XJn !== void 0) return XJn;
    return ((vCl = e), (XJn = BHf(e)), XJn);
  },
};
async function UHf(e, t, n, r, o, s, i) {
  let a = new Map();
  for (let f = 0; f < t.length; f++) {
    let m = t[f].trim();
    if (!m) {
      let h = n[f],
        y = await r({
          ...e,
          command: h,
        });
      a.set(
        h,
        y.behavior === "passthrough"
          ? {
              behavior: "allow",
              updatedInput: {
                ...e,
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
    let g = await r({
      ...e,
      command: m,
    });
    a.set(m, g);
  }
  let l = Array.from(a.entries()).find(([, f]) => f.behavior === "deny");
  if (l) {
    let [f, m] = l;
    return {
      behavior: "deny",
      message: m.behavior === "deny" ? m.message : `Permission denied for: ${f}`,
      decisionReason: {
        type: "subcommandResults",
        reasons: a,
      },
    };
  }
  if (
    t.filter((f) => {
      let m = f.trim();
      return o.isNormalizedCdCommand(m);
    }).length > 1
  ) {
    for (let [, m] of a)
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
      for (let h of t)
        for (let y of By(h)) {
          let b = y.trim();
          if (o.isNormalizedCdCommand(b)) f = true;
          if (o.isNormalizedGitCommand(b)) m = true;
        }
    }
    if (m && (s ? xjn(s, $t()) : ZGt(e.command))) {
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
      for (let b of t) for (let _ of By(b)) h.push(_.trim());
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
  if (Array.from(a.values()).every((f) => f.behavior === "allow"))
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "subcommandResults",
        reasons: a,
      },
    };
  let d = [];
  for (let [, f] of a)
    if (f.behavior !== "allow" && "suggestions" in f && f.suggestions) d.push(...f.suggestions);
  let p = {
    type: "subcommandResults",
    reasons: a,
  };
  return {
    behavior: "ask",
    message: gp(cl.name, p),
    decisionReason: p,
    suggestions: d.length > 0 ? d : void 0,
  };
}
async function FHf(e) {
  if (!e.includes(">")) return e;
  return (await JJn.parse(e))?.withoutOutputRedirections() ?? e;
}
async function ICl(e, t, n, r, o, s) {
  let i = r && r !== wue ? nPo(e.command, r) : await JJn.parse(e.command);
  if (!i)
    return {
      behavior: "passthrough",
      message: "Failed to parse command",
    };
  return jHf(e, t, n, i, o, s);
}
async function jHf(e, t, n, r, o, s) {
  let i = r.getTreeSitterAnalysis();
  if (
    i
      ? i.compoundStructure.hasSubshell || i.compoundStructure.hasCommandGroup
      : By(e.command).length > 1
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
  let l = r.getPipeSegments();
  if (l.length <= 1)
    return {
      behavior: "passthrough",
      message: "No pipes found in command",
    };
  let c = await Promise.all(l.map((u) => FHf(u)));
  return UHf(e, c, l, t, n, o, s);
}
