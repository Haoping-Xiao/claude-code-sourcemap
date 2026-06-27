// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Q0o
// matched 2.1.88 source: src/utils/toolErrors.ts
// class=modified  jaccard=0.5092  score=0.6934  fileCov=0.6572
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Z0o(e) {
  switch (e) {
    case "allow":
      return "allowed";
    case "deny":
      return "denied";
    default:
      return "asked for confirmation for";
  }
}
function fzt(e) {
  if (!e) return;
  if (e.type === "classifier") return e.reason;
  switch (e.type) {
    case "rule":
    case "mode":
    case "subcommandResults":
    case "permissionPromptTool":
    case "classifier":
      return;
    case "hook":
    case "asyncAgent":
    case "sandboxOverride":
    case "workingDir":
    case "safetyCheck":
    case "other":
      return e.reason;
  }
}
function formatError(error) {
  if (error instanceof ru) return error.message || Jv;
  if (!(error instanceof Error)) return String(error);
  let n =
    getErrorParts(error)
      .filter(Boolean)
      .join(
        `
`,
      )
      .trim() || "Command failed with no output";
  if (n.length <= 10000 /* 1e4 */) return n;
  let r = 5000,
    o = Ix(n, r),
    s = zJe(n, r),
    i = n.length - o.length - s.length;
  return `${o}

... [${i} characters truncated] ...

${s}`;
}
function getErrorParts(error) {
  if (error instanceof oM)
    return [`Exit code ${error.code}`, error.interrupted ? Jv : "", error.stderr, error.stdout];
  let t = [error.message];
  if ("stderr" in error && typeof error.stderr === "string") t.push(error.stderr);
  if ("stdout" in error && typeof error.stdout === "string") t.push(error.stdout);
  return t;
}
function jyl(e) {
  if (e.length === 0) return "";
  return e.reduce((t, n, r) => {
    let o = String(n);
    if (typeof n === "number") return `${String(t)}[${o}]`;
    return r === 0 ? o : `${String(t)}.${o}`;
  }, "");
}
function formatZodValidationError(toolName, error) {
  let n = error.issues
      .filter((a) => a.code === "invalid_type" && a.message.includes("received undefined"))
      .map((a) => jyl(a.path)),
    r = error.issues.filter((a) => a.code === "unrecognized_keys").flatMap((a) => a.keys),
    o = error.issues
      .filter((a) => a.code === "invalid_type" && !a.message.includes("received undefined"))
      .map((a) => {
        let l = a,
          c = a.message.match(/received (\w+)/),
          u = c ? c[1] : "unknown";
        return {
          param: jyl(a.path),
          expected: l.expected,
          received: u,
        };
      }),
    s = error.message,
    i = [];
  if (n.length > 0) {
    let a = n.map((l) => `The required parameter \`${l}\` is missing`);
    i.push(...a);
  }
  if (r.length > 0) {
    let a = r.map((l) => `An unexpected parameter \`${l}\` was provided`);
    i.push(...a);
  }
  if (o.length > 0) {
    let a = o.map(
      ({ param: l, expected: c, received: u }) =>
        `The parameter \`${l}\` type is expected as \`${c}\` but provided as \`${u}\``,
    );
    i.push(...a);
  }
  if (i.length > 0)
    s = `${toolName} failed due to the following ${i.length > 1 ? "issues" : "issue"}:
${i.join(`
`)}`;
  return s;
}
