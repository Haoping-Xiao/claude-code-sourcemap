// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wbt
// matched 2.1.88 source: src/tools/PowerShellTool/readOnlyValidation.ts
// class=modified  jaccard=0.647  score=0.8664  fileCov=0.7187
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Wbt = E(() => {
  Qi();
  Lo();
  Is();
  bde();
  xue();
  sr();
  ULo();
  dze();
  ((JHl = require("fs")),
    (QHl = require("path")),
    (nbf = new Set(["--list-runtimes", "--list-sdks"])));
  ((YHl = Object.assign(Object.create(null), {
    "get-childitem": {
      safeFlags: [
        "-Path",
        "-LiteralPath",
        "-Filter",
        "-Include",
        "-Exclude",
        "-Recurse",
        "-Depth",
        "-Name",
        "-Force",
        "-Attributes",
        "-Directory",
        "-File",
        "-Hidden",
        "-ReadOnly",
        "-System",
      ],
    },
    "get-content": {
      safeFlags: [
        "-Path",
        "-LiteralPath",
        "-TotalCount",
        "-Head",
        "-Tail",
        "-Raw",
        "-Encoding",
        "-Delimiter",
        "-ReadCount",
      ],
    },
    "get-item": {
      safeFlags: ["-Path", "-LiteralPath", "-Force", "-Stream"],
    },
    "get-itemproperty": {
      safeFlags: ["-Path", "-LiteralPath", "-Name"],
    },
    "test-path": {
      safeFlags: [
        "-Path",
        "-LiteralPath",
        "-PathType",
        "-Filter",
        "-Include",
        "-Exclude",
        "-IsValid",
        "-NewerThan",
        "-OlderThan",
      ],
    },
    "resolve-path": {
      safeFlags: ["-Path", "-LiteralPath", "-Relative"],
    },
    "get-filehash": {
      safeFlags: ["-Path", "-LiteralPath", "-Algorithm", "-InputStream"],
    },
    "get-acl": {
      safeFlags: ["-Path", "-LiteralPath", "-Audit", "-Filter", "-Include", "-Exclude"],
    },
    "set-location": {
      safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"],
    },
    "push-location": {
      safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"],
    },
    "pop-location": {
      safeFlags: ["-PassThru", "-StackName"],
    },
    "select-string": {
      safeFlags: [
        "-Path",
        "-LiteralPath",
        "-Pattern",
        "-InputObject",
        "-SimpleMatch",
        "-CaseSensitive",
        "-Quiet",
        "-List",
        "-NotMatch",
        "-AllMatches",
        "-Encoding",
        "-Context",
        "-Raw",
        "-NoEmphasis",
      ],
    },
    "convertto-json": {
      safeFlags: ["-InputObject", "-Depth", "-Compress", "-EnumsAsStrings", "-AsArray"],
    },
    "convertfrom-json": {
      safeFlags: ["-InputObject", "-Depth", "-AsHashtable", "-NoEnumerate"],
    },
    "convertto-csv": {
      safeFlags: ["-InputObject", "-Delimiter", "-NoTypeInformation", "-NoHeader", "-UseQuotes"],
    },
    "convertfrom-csv": {
      safeFlags: ["-InputObject", "-Delimiter", "-Header", "-UseCulture"],
    },
    "convertto-xml": {
      safeFlags: ["-InputObject", "-Depth", "-As", "-NoTypeInformation"],
    },
    "convertto-html": {
      safeFlags: [
        "-InputObject",
        "-Property",
        "-Head",
        "-Title",
        "-Body",
        "-Pre",
        "-Post",
        "-As",
        "-Fragment",
      ],
    },
    "format-hex": {
      safeFlags: ["-Path", "-LiteralPath", "-InputObject", "-Encoding", "-Count", "-Offset"],
    },
    "get-member": {
      safeFlags: ["-InputObject", "-MemberType", "-Name", "-Static", "-View", "-Force"],
    },
    "get-unique": {
      safeFlags: ["-InputObject", "-AsString", "-CaseInsensitive", "-OnType"],
    },
    "compare-object": {
      safeFlags: [
        "-ReferenceObject",
        "-DifferenceObject",
        "-Property",
        "-SyncWindow",
        "-CaseSensitive",
        "-Culture",
        "-ExcludeDifferent",
        "-IncludeEqual",
        "-PassThru",
      ],
    },
    "join-string": {
      safeFlags: [
        "-InputObject",
        "-Property",
        "-Separator",
        "-SingleQuote",
        "-DoubleQuote",
        "-FormatString",
      ],
    },
    "get-random": {
      safeFlags: ["-InputObject", "-Minimum", "-Maximum", "-Count", "-SetSeed", "-Shuffle"],
    },
    "convert-path": {
      safeFlags: ["-Path", "-LiteralPath"],
    },
    "join-path": {
      safeFlags: ["-Path", "-ChildPath", "-AdditionalChildPath"],
    },
    "split-path": {
      safeFlags: [
        "-Path",
        "-LiteralPath",
        "-Qualifier",
        "-NoQualifier",
        "-Parent",
        "-Leaf",
        "-LeafBase",
        "-Extension",
        "-IsAbsolute",
      ],
    },
    "get-itempropertyvalue": {
      safeFlags: ["-Path", "-LiteralPath", "-Name"],
    },
    "get-psprovider": {
      safeFlags: ["-PSProvider"],
    },
    "get-computerinfo": {
      allowAllFlags: true,
    },
    "get-host": {
      allowAllFlags: true,
    },
    "get-date": {
      safeFlags: ["-Date", "-Format", "-UFormat", "-DisplayHint", "-AsUTC"],
    },
    "get-location": {
      safeFlags: ["-PSProvider", "-PSDrive", "-Stack", "-StackName"],
    },
    "get-psdrive": {
      safeFlags: ["-Name", "-PSProvider", "-Scope"],
    },
    "get-module": {
      safeFlags: ["-Name", "-ListAvailable", "-All", "-FullyQualifiedName", "-PSEdition"],
    },
    "get-alias": {
      safeFlags: ["-Name", "-Definition", "-Scope", "-Exclude"],
    },
    "get-history": {
      safeFlags: ["-Id", "-Count"],
    },
    "get-culture": {
      allowAllFlags: true,
    },
    "get-uiculture": {
      allowAllFlags: true,
    },
    "get-timezone": {
      safeFlags: ["-Name", "-Id", "-ListAvailable"],
    },
    "get-uptime": {
      allowAllFlags: true,
    },
    "write-output": {
      safeFlags: ["-InputObject", "-NoEnumerate"],
      additionalCommandIsDangerousCallback: OL,
    },
    "write-host": {
      safeFlags: ["-Object", "-NoNewline", "-Separator", "-ForegroundColor", "-BackgroundColor"],
      additionalCommandIsDangerousCallback: OL,
    },
    "start-sleep": {
      safeFlags: ["-Seconds", "-Milliseconds", "-Duration"],
      additionalCommandIsDangerousCallback: OL,
    },
    "format-table": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "format-list": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "format-wide": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "format-custom": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "measure-object": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "select-object": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "sort-object": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "group-object": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "where-object": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "out-string": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "out-host": {
      allowAllFlags: true,
      additionalCommandIsDangerousCallback: OL,
    },
    "get-netadapter": {
      safeFlags: ["-Name", "-InterfaceDescription", "-InterfaceIndex", "-Physical"],
    },
    "get-netipaddress": {
      safeFlags: ["-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-Type"],
    },
    "get-netroute": {
      safeFlags: ["-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-DestinationPrefix"],
    },
    "get-dnsclient": {
      safeFlags: ["-InterfaceIndex", "-InterfaceAlias"],
    },
    "get-winevent": {
      safeFlags: [
        "-LogName",
        "-ListLog",
        "-ListProvider",
        "-ProviderName",
        "-Path",
        "-MaxEvents",
        "-FilterXPath",
        "-Force",
        "-Oldest",
      ],
    },
    git: {},
    gh: {},
    docker: {},
    ipconfig: {
      safeFlags: ["/all", "/allcompartments"],
      additionalCommandIsDangerousCallback: (e, t) =>
        (t?.args ?? []).some((n) => !n.startsWith("/") && !n.startsWith("-")),
    },
    netstat: {
      safeFlags: ["-a", "-b", "-e", "-f", "-n", "-o", "-p", "-q", "-r", "-s", "-t", "-x", "-y"],
    },
    systeminfo: {
      safeFlags: ["/FO", "/NH"],
    },
    tasklist: {
      safeFlags: ["/M", "/SVC", "/V", "/FI", "/FO", "/NH"],
    },
    "where.exe": {
      allowAllFlags: true,
    },
    hostname: {
      safeFlags: ["-a", "-d", "-f", "-i", "-I", "-s", "-y", "-A"],
      additionalCommandIsDangerousCallback: (e, t) =>
        (t?.args ?? []).some((n) => !n.startsWith("-")),
    },
    whoami: {
      safeFlags: ["/user", "/groups", "/claims", "/priv", "/logonid", "/all", "/fo", "/nh"],
    },
    ver: {
      allowAllFlags: true,
    },
    arp: {
      safeFlags: ["-a", "-g", "-v", "-n"],
      additionalCommandIsDangerousCallback: (e, t) =>
        (t?.args ?? []).some((n) => !n.startsWith("-")),
    },
    route: {
      safeFlags: ["print", "PRINT", "-4", "-6"],
      additionalCommandIsDangerousCallback: (e, t) => {
        if (!t) return true;
        return t.args.find((r) => !r.startsWith("-"))?.toLowerCase() !== "print";
      },
    },
    getmac: {
      safeFlags: ["/FO", "/NH", "/V"],
    },
    tree: {
      safeFlags: ["/F", "/A", "/Q", "/L"],
    },
    findstr: {
      safeFlags: [
        "/B",
        "/E",
        "/L",
        "/R",
        "/S",
        "/I",
        "/X",
        "/V",
        "/N",
        "/M",
        "/O",
        "/P",
        "/C",
        "/G",
        "/D",
        "/A",
      ],
    },
    dotnet: {},
  })),
    (rbf = new Set(["out-null"])),
    (obf = new Set([
      "format-table",
      "format-list",
      "format-wide",
      "format-custom",
      "measure-object",
      "select-object",
      "sort-object",
      "group-object",
      "where-object",
      "out-string",
      "out-host",
    ])),
    (sbf = new Set(["where.exe"])),
    (ibf = new Set(["git", "gh", "docker", "dotnet"])),
    (abf = [
      "",
      ".exe",
      ".bat",
      ".cmd",
      ".com",
      ".ps1",
      ".vbs",
      ".js",
      ".wsf",
      ".vbe",
      ".jse",
      ".wsh",
      ".msc",
      ".cpl",
    ]),
    (ZHl = Cn(
      () => {
        let e = new Set(abf),
          t = (process.env.PATHEXT ?? "").split(";");
        for (let n of t.slice(0, 64)) {
          let r = n.trim().toLowerCase();
          if (r.startsWith(".") && r.length <= 16) e.add(r);
        }
        return [...e];
      },
      () => process.env.PATHEXT ?? "",
    )),
    (lbf = Cn(
      () => {
        let e = ZHl()
          .filter((t) => t !== "")
          .map((t) => wx(t.slice(1)));
        return new RegExp(`\\.(${e.join("|")})$`, "i");
      },
      () => process.env.PATHEXT ?? "",
    )));
  ubf = /\.(exe|cmd|bat|com)$/;
  ((fbf = new Set([
    "-c",
    "-C",
    "--exec-path",
    "--config-env",
    "--git-dir",
    "--work-tree",
    "--bare",
    "--attr-source",
    "--help",
    "-h",
    "--shallow-file",
  ])),
    (mbf = new Set([
      "-c",
      "-C",
      "--exec-path",
      "--config-env",
      "--git-dir",
      "--work-tree",
      "--namespace",
      "--super-prefix",
      "--shallow-file",
    ])),
    (gbf = ["-c", "-C"]));
});
function WLo(e) {
  let t = zm(e);
  return Sbf.has(t);
}
function Abf(e) {
  return (e.length >= 3 && "-itemtype".startsWith(e)) || (e.length >= 3 && "-type".startsWith(e));
}
function qLo(e) {
  if (zm(e.name) !== "new-item") return false;
  for (let n = 0; n < e.args.length; n++) {
    let r = e.args[n] ?? "";
    if (r.length === 0) continue;
    let s = (F4.has(r[0]) || r[0] === "/" ? "-" + r.slice(1) : r).toLowerCase(),
      i = s.indexOf(":", 1),
      a = i > 0 ? s.slice(0, i) : s,
      l = MN(a.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
    if (!Abf(l)) continue;
    let c = i > 0 ? s.slice(i + 1) : (e.args[n + 1]?.toLowerCase() ?? ""),
      u = Mk(hq(MN(c.replace(/`[\r\n]+\s*/g, "")))).toLowerCase();
    if (/[?*[\]($]/.test(u)) return true;
    for (let d of Ebf) if (u.length > 0 && d.startsWith(u)) return true;
  }
  return false;
}
function VLo(e, t, n) {
  if (n.mode === "bypassPermissions" || n.mode === "dontAsk")
    return {
      behavior: "passthrough",
      message: "Mode is handled in main permission flow",
    };
  if (n.mode !== "acceptEdits")
    return {
      behavior: "passthrough",
      message: "No mode-specific validation required",
    };
  if (!t.valid)
    return {
      behavior: "passthrough",
      message: "Cannot validate mode for unparsed command",
    };
  let r = S5(t);
  if (
    r.hasSubExpressions ||
    r.hasScriptBlocks ||
    r.hasMemberInvocations ||
    r.hasSplatting ||
    r.hasAssignments ||
    r.hasStopParsing ||
    r.hasExpandableStrings
  )
    return {
      behavior: "passthrough",
      message:
        "Command contains subexpressions, script blocks, or member invocations that require approval",
    };
  let o = G2n(t);
  if (o.length === 0)
    return {
      behavior: "passthrough",
      message: "No commands found to validate for acceptEdits mode",
    };
  let s = o.reduce((a, l) => a + l.commands.length, 0);
  if (o.some((a) => a.commands.some((l) => l.elementType === "CommandAst" && qLo(l))))
    return {
      behavior: "passthrough",
      message:
        "Command creates a filesystem link (New-Item -ItemType SymbolicLink/Junction/HardLink) \u2014 cannot auto-allow because later path validation cannot follow just-created links",
    };
  if (s > 1) {
    let a = false,
      l = false;
    for (let c of o)
      for (let u of c.commands) {
        if (u.elementType !== "CommandAst") continue;
        if (lKt(u.name)) a = true;
        if (WLo(u.name)) l = true;
      }
    if (a && l)
      return {
        behavior: "passthrough",
        message:
          "Compound command contains a directory-changing command (Set-Location/Push-Location/Pop-Location) with a write operation \u2014 cannot auto-allow because path validation uses stale cwd",
      };
  }
  for (let a of o) {
    for (let l of a.commands) {
      if (l.elementType !== "CommandAst")
        return {
          behavior: "passthrough",
          message: `Pipeline contains expression source (${l.elementType}) that cannot be statically validated`,
        };
      if (l.nameType === "application")
        return {
          behavior: "passthrough",
          message: `Command '${l.name}' resolved from a path-like name and requires approval`,
        };
      if (l.elementTypes)
        for (let c = 1; c < l.elementTypes.length; c++) {
          let u = l.elementTypes[c];
          if (u !== "StringConstant" && u !== "Parameter")
            return {
              behavior: "passthrough",
              message: `Command argument has unvalidatable type (${u}) \u2014 variable paths cannot be statically resolved`,
            };
          if (u === "Parameter") {
            let d = l.args[c - 1] ?? "",
              p = d.indexOf(":");
            if (p > 0 && /[$(@{[]/.test(d.slice(p + 1)))
              return {
                behavior: "passthrough",
                message:
                  "Colon-bound parameter contains an expression that cannot be statically validated",
              };
          }
        }
      if (fze(l.name) || FLo(l, e.command)) continue;
      if (!WLo(l.name))
        return {
          behavior: "passthrough",
          message: `No mode-specific handling for '${l.name}' in acceptEdits mode`,
        };
      if (OL(l.name, l))
        return {
          behavior: "passthrough",
          message: `Arguments in '${l.name}' cannot be statically validated in acceptEdits mode`,
        };
    }
    if (a.nestedCommands)
      for (let l of a.nestedCommands) {
        if (l.elementType !== "CommandAst")
          return {
            behavior: "passthrough",
            message: `Nested expression element (${l.elementType}) cannot be statically validated`,
          };
        if (l.nameType === "application")
          return {
            behavior: "passthrough",
            message: `Nested command '${l.name}' resolved from a path-like name and requires approval`,
          };
        if (fze(l.name) || FLo(l, e.command)) continue;
        if (!WLo(l.name))
          return {
            behavior: "passthrough",
            message: `No mode-specific handling for '${l.name}' in acceptEdits mode`,
          };
        if (OL(l.name, l))
          return {
            behavior: "passthrough",
            message: `Arguments in nested '${l.name}' cannot be statically validated in acceptEdits mode`,
          };
      }
  }
  return {
    behavior: "allow",
    updatedInput: e,
    decisionReason: {
      type: "mode",
      mode: "acceptEdits",
    },
  };
}
var Sbf, Ebf;
