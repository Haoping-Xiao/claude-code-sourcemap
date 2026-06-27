// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PHl
// matched 2.1.88 source: src/tools/PowerShellTool/commandSemantics.ts
// class=modified  jaccard=0.1266  score=0.1672  fileCov=0.3426
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module PHl] deps: PLo
B_f = new Map([
  ["grep", MLo],
  ["rg", MLo],
  ["findstr", MLo],
  [
    "robocopy",
    (e, t, n) => ({
      isError: e >= 8,
      message:
        e === 0
          ? "No files copied (already in sync)"
          : e >= 1 && e < 8
            ? e & 1
              ? "Files copied successfully"
              : "Robocopy completed (no errors)"
            : void 0,
    }),
  ],
]);
((F_f = [...nJn, "Invoke-WebRequest", "winget", "choco", "az"]),
  (j_f = new Map(F_f.map((e) => [e.toLowerCase(), e]))));
G_f = [
  ["ps5_chain_op", /token '(&&|\|\||\?\?)' is not a valid|InvalidEndOfLine/i],
  ["parser_error", /ParserError:|ParseException|TerminatorExpectedAtEndOfString/],
  [
    "not_recognized",
    /is not recognized as (a name of a cmdlet|the name of a cmdlet|an? internal)/i,
  ],
  ["command_not_found", /CommandNotFoundException/],
  ["path_not_found", /ItemNotFoundException|PathNotFound,Microsoft\.PowerShell/],
  ["access_denied", /UnauthorizedAccessException|PermissionDenied,Microsoft\.PowerShell/],
  ["parameter_binding", /ParameterBindingException|ParameterArgumentValidationError/],
  ["object_not_found", /ObjectNotFound: \(|DriveNotFoundException/],
  ["execution_policy", /running scripts is disabled on this system|PSSecurityException/i],
  ["method_invocation", /MethodInvocationException|MethodException/],
  ["cannot_convert", /InvalidCastException|ConvertToFinalInvalidCastException/],
  ["null_expression", /InvokeMethodOnNull|NullArray|PropertyNotFoundStrict|NullReferenceException/],
  ["io_exception", /\bIOException\b|FileNotFoundException/],
  ["write_error", /WriteErrorException/],
  [
    "iwr_basic_parsing",
    /Internet Explorer engine is not available|WebCmdletIEDomNotSupportedException/i,
  ],
  ["runtime_exception", /: RuntimeException\b|ScriptHalted/],
  ["native_npm", /^npm (ERR!|error)/m],
  ["native_dotnet", /: error [A-Z]{2,}\d{4}:|^Build FAILED\./m],
  ["native_python", /^Traceback \(most recent call last\):/m],
  ["native_cargo", /^error\[E\d{4}\]|^error: could not compile/m],
  ["native_go", /^# [\w./-]+\n.*\.go:\d+:\d+: /m],
  ["native_git", /^(?:\S+ : )?(fatal|error): /m],
  [
    "native_node",
    /^(?:Type|Reference|Syntax|Range)Error[: [\]]|^Error: Cannot find module|^node:internal\//m,
  ],
  ["native_command_error", /NativeCommandError|RemoteException/],
];
((W_f = new Set([
  "head",
  "tail",
  "which",
  "touch",
  "grep",
  "sed",
  "awk",
  "wc",
  "chmod",
  "chown",
  "ln",
  "cut",
  "tr",
  "uniq",
  "xargs",
  "env",
  "seq",
  "realpath",
  "readlink",
  "basename",
  "dirname",
  "printf",
  "source",
  "export",
  "unset",
  "true",
  "false",
  "yes",
  "stat",
  "find",
  "less",
  "sudo",
])),
  (q_f = new Set([
    "git",
    "gh",
    "node",
    "npm",
    "npx",
    "yarn",
    "pnpm",
    "bun",
    "python",
    "python3",
    "pip",
    "pip3",
    "cargo",
    "rustc",
    "go",
    "dotnet",
    "java",
    "javac",
    "mvn",
    "gradle",
    "make",
    "cmake",
    "docker",
    "kubectl",
    "terraform",
    "az",
    "aws",
    "gcloud",
    "curl",
    "wget",
    "jq",
    "code",
  ])));
function hq(e) {
  let t = e.replace($Lo, "");
  for (;;)
    if (t.startsWith("<#")) {
      let n = t.indexOf("#>", 2);
      if (n < 0) break;
      t = t.slice(n + 2).replace($Lo, "");
    } else if (t.startsWith("#")) {
      let n = t.search(/[\r\n]/);
      if (n < 0) break;
      t = t.slice(n).replace($Lo, "");
    } else break;
  return t;
}
function Mk(e) {
  return e.replace(V_f, "");
}
function MN(e) {
  return MHl(e, void 0);
}
function OLo(e) {
  return MHl(e, z_f);
}
function MHl(e, t) {
  return e
    .replace(/`[\r\n]+\s*/g, "")
    .replace(/`(?:u\{([0-9a-fA-F]{1,6})\}|([\s\S]?))/g, (n, r, o) => {
      if (r !== void 0) {
        let s = parseInt(r, 16);
        return s <= 1114111 ? String.fromCodePoint(s) : "\uFFFD";
      }
      if (t && o !== void 0 && o in t) return t[o];
      return o ?? "";
    });
}
var uze, $Lo, V_f, z_f;
