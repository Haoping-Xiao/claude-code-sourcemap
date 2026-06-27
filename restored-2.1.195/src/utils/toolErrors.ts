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
function formatError(e) {
  if (e instanceof ru) return e.message || Jv;
  if (!(e instanceof Error)) return String(e);
  let n =
    getErrorParts(e)
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
function getErrorParts(e) {
  if (e instanceof oM) return [`Exit code ${e.code}`, e.interrupted ? Jv : "", e.stderr, e.stdout];
  let t = [e.message];
  if ("stderr" in e && typeof e.stderr === "string") t.push(e.stderr);
  if ("stdout" in e && typeof e.stdout === "string") t.push(e.stdout);
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
function formatZodValidationError(e, t) {
  let n = t.issues
      .filter((a) => a.code === "invalid_type" && a.message.includes("received undefined"))
      .map((a) => jyl(a.path)),
    r = t.issues.filter((a) => a.code === "unrecognized_keys").flatMap((a) => a.keys),
    o = t.issues
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
    s = t.message,
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
    s = `${e} failed due to the following ${i.length > 1 ? "issues" : "issue"}:
${i.join(`
`)}`;
  return s;
}
