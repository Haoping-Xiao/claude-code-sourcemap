// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LDl
// matched 2.1.88 source: src/commands/feedback/index.ts
// class=modified  jaccard=0.1278  score=0.2198  fileCov=0.2338
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module LDl]
((Fkf = {
  aliases: ["share", "bug"],
  type: "local-jsx",
  name: "feedback",
  description: "Submit feedback, report a bug, or share your conversation",
  argumentHint: "[report]",
  requires: {
    ink: true,
  },
  load: () => Promise.resolve().then(() => (RDl(), xDl)),
}),
  (yOo = Fkf));
function PDl(e, t) {
  let n = Uo([...i_(e.requestedPath), e.canonicalPath]),
    r = Uo([e.canonicalPath, KYt(e.canonicalPath)]),
    o = (i, a, l) => l.some((c) => jkf(i, a, c));
  for (let i of cz(t)) {
    if (i.ruleValue.toolName !== DDl) continue;
    let a = i.ruleValue.ruleContent;
    if (a === void 0 || o(a, i.source, n))
      return {
        result: "blockedByRule",
        rule: i,
      };
  }
  let s = bHe(t).filter((i) => i.ruleValue.toolName === DDl);
  if (s.length === 0)
    return {
      result: "allowed",
    };
  for (let i of s) {
    let a = i.ruleValue.ruleContent;
    if (a === void 0 || o(a, i.source, r))
      return {
        result: "allowed",
      };
  }
  return {
    result: "outsideAllowedPatterns",
    allowedPatterns: s.map((i) => i.ruleValue.ruleContent).filter((i) => i !== void 0),
  };
}
function jkf(e, t, n) {
  let { relativePattern: r, root: o } = zYt(e, t),
    s = tKe(o ?? $t(), n);
  if (s === ".." || s.startsWith("../")) return false;
  let i = r
    .replace(/\/{2,}/g, "/")
    .replace(/^\//, "")
    .replace(/\/$/, "");
  return Gkf(i).test(s);
}
function Gkf(e) {
  let t = "^";
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (n === 0 && r === "*" && e[1] === "*" && e[2] === "/") ((t += "(?:.*/)?"), (n += 2));
    else if (r === "/" && e[n + 1] === "*" && e[n + 2] === "*") ((t += "(/.*)?"), (n += 2));
    else if (r === "*") {
      if (e[n + 1] === "*") ((t += ".*"), n++);
      else t += "[^/]+";
    } else if ("\\^$.|?+()[]{}".includes(r)) t += `\\${r}`;
    else t += r;
  }
  return new RegExp(`${t}$`, "i");
}
var DDl = "Cd";
