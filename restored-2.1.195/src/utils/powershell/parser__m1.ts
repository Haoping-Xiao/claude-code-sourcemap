// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kDe
// matched 2.1.88 source: src/utils/powershell/parser.ts
// class=modified (alt of src/utils/powershell/parser.ts)  jaccard=0.2151  score=0.5886  fileCov=0.2531
// note: deminified; 11 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kDe] deps: dn, utils/platform.ts, axios/lib/utils.js
((Fqe = require("fs/promises")), (F2n = require("path")));
function e0p() {
  let e = process.env.CLAUDE_CODE_PWSH_PARSE_TIMEOUT_MS;
  if (e) {
    let t = parseInt(e, 10);
    if (!isNaN(t) && t > 0) return t;
  }
  return Zkp;
}
function r0p(e) {
  return e + Math.min(e, n0p);
}
function RDe(e, t, n) {
  return {
    ...d0p,
    errors: [
      {
        message: t,
        errorId: n,
      },
    ],
    originalCommand: e,
  };
}
function $re(e) {
  return e.replace(/[\u2013\u2014\u2015]/g, "-");
}
function toUtf16LeBase64(text) {
  if (typeof Buffer !== "undefined") return Buffer.from(text, "utf16le").toString("base64");
  let bytes = [];
  for (let n = 0; n < text.length; n++) {
    let r = text.charCodeAt(n);
    bytes.push(r & 255, (r >> 8) & 255);
  }
  return btoa(bytes.map((n) => String.fromCharCode(n)).join(""));
}
function buildParseScript(command) {
  return `$EncodedCommand = '${typeof Buffer !== "undefined" ? Buffer.from(command, "utf8").toString("base64") : btoa(new TextEncoder().encode(command).reduce((n, r) => n + String.fromCharCode(r), ""))}'
${EPa}`;
}
function p6(e) {
  if (e === void 0 || e === null) return [];
  return Array.isArray(e) ? e : [e];
}
function mapStatementType(rawType) {
  switch (rawType) {
    case "PipelineAst":
      return "PipelineAst";
    case "PipelineChainAst":
      return "PipelineChainAst";
    case "AssignmentStatementAst":
      return "AssignmentStatementAst";
    case "IfStatementAst":
      return "IfStatementAst";
    case "ForStatementAst":
      return "ForStatementAst";
    case "ForEachStatementAst":
      return "ForEachStatementAst";
    case "WhileStatementAst":
      return "WhileStatementAst";
    case "DoWhileStatementAst":
      return "DoWhileStatementAst";
    case "DoUntilStatementAst":
      return "DoUntilStatementAst";
    case "SwitchStatementAst":
      return "SwitchStatementAst";
    case "TryStatementAst":
      return "TryStatementAst";
    case "TrapStatementAst":
      return "TrapStatementAst";
    case "FunctionDefinitionAst":
      return "FunctionDefinitionAst";
    case "DataStatementAst":
      return "DataStatementAst";
    default:
      return "UnknownStatementAst";
  }
}
function mapElementType(rawType, expressionType) {
  switch (rawType) {
    case "ScriptBlockExpressionAst":
      return "ScriptBlock";
    case "SubExpressionAst":
    case "ArrayExpressionAst":
      return "SubExpression";
    case "ExpandableStringExpressionAst":
      return "ExpandableString";
    case "InvokeMemberExpressionAst":
    case "MemberExpressionAst":
      return "MemberInvocation";
    case "VariableExpressionAst":
      return "Variable";
    case "StringConstantExpressionAst":
    case "ConstantExpressionAst":
      return "StringConstant";
    case "CommandParameterAst":
      return "Parameter";
    case "ParenExpressionAst":
      return "SubExpression";
    case "CommandExpressionAst":
      if (expressionType) return mapElementType(expressionType);
      return "Other";
    default:
      return "Other";
  }
}
function classifyCommandName(name) {
  if (/^[A-Za-z]+-[A-Za-z][A-Za-z0-9_]*$/.test(name)) return "cmdlet";
  if (/[.\\/]/.test(name)) return "application";
  return "unknown";
}
function j2n(e) {
  let t = e.lastIndexOf("\\");
  if (t < 0) return e;
  if (/^[A-Za-z]:/.test(e) || e.startsWith("\\\\") || e.startsWith(".\\") || e.startsWith("..\\"))
    return e;
  let n = e.substring(t + 1);
  if (n === "") return e;
  return n;
}
function transformCommandAst(raw) {
  let t = p6(raw.commandElements),
    n = "",
    r = [],
    o = [],
    s = [],
    i = false,
    a = "unknown";
  if (t.length > 0) {
    let u = t[0],
      f = (
        (u.type === "StringConstantExpressionAst" || u.type === "ExpandableStringExpressionAst") &&
        typeof u.value === "string"
          ? u.value
          : u.text
      ).replace(/^['"]|['"]$/g, "");
    if (/[\u0080-\uFFFF]/.test(f)) a = "application";
    else a = classifyCommandName(f);
    ((n = $re(j2n(f))), o.push(mapElementType(u.type, u.expressionType)));
    for (let m = 1; m < t.length; m++) {
      let g = t[m],
        h = g.type === "StringConstantExpressionAst" || g.type === "ExpandableStringExpressionAst";
      (r.push($re(h && g.value != null ? g.value : g.text)),
        o.push(mapElementType(g.type, g.expressionType)));
      let y = p6(g.children);
      if (y.length > 0)
        ((i = true),
          s.push(
            y.map((b) => ({
              type: mapElementType(b.type),
              text: $re(b.text),
            })),
          ));
      else s.push(void 0);
    }
  }
  let l = {
      name: n,
      nameType: a,
      elementType: "CommandAst",
      args: r,
      text: $re(raw.text),
      elementTypes: o,
      ...(i && {
        children: s,
      }),
    },
    rawRedirs = p6(raw.redirections);
  if (rawRedirs.length > 0) l.redirections = rawRedirs.map(transformRedirection);
  return l;
}
function transformExpressionElement(raw) {
  let t = raw.type === "ParenExpressionAst" ? "ParenExpressionAst" : "CommandExpressionAst",
    n = [mapElementType(raw.type, raw.expressionType)];
  return {
    name: $re(raw.text),
    nameType: "unknown",
    elementType: t,
    args: [],
    text: $re(raw.text),
    elementTypes: n,
  };
}
function transformRedirection(raw) {
  if (raw.type === "MergingRedirectionAst")
    return {
      operator: "2>&1",
      target: "",
      isMerging: true,
    };
  let t = raw.append ?? false,
    n = raw.fromStream ?? "Output",
    r;
  if (t)
    switch (n) {
      case "Error":
        r = "2>>";
        break;
      case "All":
        r = "*>>";
        break;
      default:
        r = ">>";
        break;
    }
  else
    switch (n) {
      case "Error":
        r = "2>";
        break;
      case "All":
        r = "*>";
        break;
      default:
        r = ">";
        break;
    }
  return {
    operator: r,
    target: raw.locationText ?? "",
    isMerging: false,
  };
}
function transformStatement(raw) {
  let t = mapStatementType(raw.type),
    n = [],
    redirections = [];
  if (raw.elements) {
    for (let l of p6(raw.elements))
      if (l.type === "CommandAst") {
        n.push(transformCommandAst(l));
        for (let c of p6(l.redirections)) redirections.push(transformRedirection(c));
      } else {
        n.push(transformExpressionElement(l));
        for (let c of p6(l.redirections)) redirections.push(transformRedirection(c));
      }
    let a = new Set(redirections.map((l) => `${l.operator}\x00${l.target}`));
    for (let l of p6(raw.redirections)) {
      let c = transformRedirection(l),
        u = `${c.operator}\x00${c.target}`;
      if (!a.has(u)) (a.add(u), redirections.push(c));
    }
  } else {
    n.push({
      name: $re(raw.text),
      nameType: "unknown",
      elementType: "CommandExpressionAst",
      args: [],
      text: $re(raw.text),
    });
    for (let a of p6(raw.redirections)) redirections.push(transformRedirection(a));
  }
  let o,
    rawNested = p6(raw.nestedCommands);
  if (rawNested.length > 0) o = rawNested.map(transformCommandAst);
  let i = {
    statementType: t,
    commands: n,
    redirections: redirections,
    text: $re(raw.text),
    nestedCommands: o,
  };
  if (raw.securityPatterns) i.securityPatterns = raw.securityPatterns;
  return i;
}
function y0p(e) {
  let t = {
      valid: e.valid,
      errors: p6(e.errors),
      statements: p6(e.statements).map(transformStatement),
      variables: p6(e.variables),
      hasStopParsing: e.hasStopParsing,
      originalCommand: e.originalCommand,
    },
    n = p6(e.typeLiterals);
  if (n.length > 0) t.typeLiterals = n;
  if (e.hasUsingStatements) t.hasUsingStatements = true;
  if (e.hasScriptRequirements) t.hasScriptRequirements = true;
  if (e.hasBackgroundJob) t.hasBackgroundJob = true;
  return t;
}
async function parsePowerShellCommandImpl(command) {
  let t = Buffer.byteLength(command, "utf8");
  if (t > wmo)
    return (
      T(`PowerShell parser: command too long (${t} bytes, max ${wmo})`),
      RDe(
        command,
        `Command too long for parsing (${t} bytes). Maximum supported length is ${wmo} bytes.`,
        "CommandTooLong",
      )
    );
  if (/`u\{[0-9A-Fa-f]/.test(command))
    return RDe(
      command,
      "PowerShell `u{HEX} codepoint escape is runtime-resolved and cannot be statically validated.",
      "UnicodeCodepointEscape",
    );
  let n = await d6();
  if (!n) return RDe(command, "PowerShell is not available", "NoPowerShell");
  let r = buildParseScript(command),
    s = ["-NoProfile", "-NonInteractive", "-NoLogo", "-EncodedCommand", toUtf16LeBase64(r)],
    i = e0p(),
    a = r0p(i),
    l = "",
    c = "",
    u = null,
    d = false,
    p = null;
  for (let m = 0; m < t0p; m++) {
    ((p = null), (d = false));
    let g;
    try {
      let h = pv(n, s, {
          timeout: i,
          reject: false,
        }),
        y = await Promise.race([
          h,
          new Promise((b) => {
            g = setTimeout((_) => _(null), a, b);
          }),
        ]);
      if (y === null) (h.catch(() => {}), (d = true), (u = 1));
      else
        ((l = y.stdout), (c = y.stderr), (d = y.timedOut), (u = y.failed ? (y.exitCode ?? 1) : 0));
    } catch (h) {
      ((p = h instanceof Error ? h.message : String(h)), (u = null));
    } finally {
      clearTimeout(g);
    }
    if (u === 0) break;
    T(
      `PowerShell parser: ${p ? `failed to spawn pwsh: ${p}` : d ? `pwsh timed out after ${i}ms` : `pwsh exited ${u}: ${c}`} (attempt ${m + 1})`,
    );
  }
  if (p) return RDe(command, `Failed to spawn PowerShell: ${p}`, "PwshSpawnError");
  if (d) return RDe(command, `pwsh timed out after ${i}ms (2 attempts)`, "PwshTimeout");
  if (u !== 0)
    return (
      T(`PowerShell parser: pwsh exited with code ${u}, stderr: ${c}`),
      RDe(command, `pwsh exited with code ${u}: ${c}`, "PwshError")
    );
  let f = l.trim();
  if (!f)
    return (
      T("PowerShell parser: empty stdout from pwsh"),
      RDe(command, "No output from PowerShell parser", "EmptyOutput")
    );
  try {
    let m = Ft(f);
    return y0p(m);
  } catch {
    return (
      T(`PowerShell parser: invalid JSON output: ${f.slice(0, 200)}`),
      RDe(command, "Invalid JSON from PowerShell parser", "InvalidJson")
    );
  }
}
function Imo(e) {
  let t = [];
  for (let n of e.statements) {
    for (let r of n.commands) t.push(r.name.toLowerCase());
    if (n.nestedCommands) for (let r of n.nestedCommands) t.push(r.name.toLowerCase());
  }
  return t;
}
function AL(e) {
  let t = [];
  for (let n of e.statements) {
    for (let r of n.commands) t.push(r);
    if (n.nestedCommands) for (let r of n.nestedCommands) t.push(r);
  }
  return t;
}
function S0p(e) {
  let t = [];
  for (let n of e.statements) {
    for (let r of n.redirections) t.push(r);
    if (n.nestedCommands) {
      for (let r of n.nestedCommands) if (r.redirections) for (let o of r.redirections) t.push(o);
    }
  }
  return t;
}
function APa(e, t) {
  let n = t.toLowerCase() + ":";
  return e.variables.filter((r) => r.path.toLowerCase().startsWith(n));
}
function xmo(e, t) {
  let n = t.toLowerCase(),
    r = _de[n]?.toLowerCase();
  for (let o of Imo(e)) {
    if (o === n) return true;
    let s = _de[o]?.toLowerCase();
    if (s === n) return true;
    if (r && o === r) return true;
    if (s && r && s === r) return true;
  }
  return false;
}
function LDe(e, t) {
  if (t !== void 0) return t === "Parameter";
  return e.length > 0 && F4.has(e[0]);
}
function kmo(e, t, n) {
  let r = t.toLowerCase(),
    o = n.toLowerCase();
  return e.args.some((s) => {
    let i = s.indexOf(":", 1),
      l = (i > 0 ? s.slice(0, i) : s)
        .replace(/`[\r\n]+\s*/g, "")
        .replaceAll("`", "")
        .toLowerCase();
    return l.startsWith(o) && r.startsWith(l) && l.length <= r.length;
  });
}
function G2n(e) {
  return e.statements;
}
function Opt(e) {
  let t = e.trim().toLowerCase();
  return t === "$null" || t === "${null}";
}
function NGt(e) {
  return S0p(e).filter((t) => !t.isMerging && !Opt(t.target));
}
function deriveSecurityFlags(parsed) {
  let flags = {
    hasSubExpressions: false,
    hasScriptBlocks: false,
    hasSplatting: false,
    hasExpandableStrings: false,
    hasMemberInvocations: false,
    hasAssignments: false,
    hasStopParsing: parsed.hasStopParsing,
  };
  function n(r) {
    if (!r.elementTypes) return;
    for (let o of r.elementTypes)
      switch (o) {
        case "ScriptBlock":
          flags.hasScriptBlocks = true;
          break;
        case "SubExpression":
          flags.hasSubExpressions = true;
          break;
        case "ExpandableString":
          flags.hasExpandableStrings = true;
          break;
        case "MemberInvocation":
          flags.hasMemberInvocations = true;
          break;
      }
  }
  for (let r of parsed.statements) {
    if (r.statementType === "AssignmentStatementAst") flags.hasAssignments = true;
    for (let o of r.commands) n(o);
    if (r.nestedCommands) for (let o of r.nestedCommands) n(o);
    if (r.securityPatterns) {
      if (r.securityPatterns.hasMemberInvocations) flags.hasMemberInvocations = true;
      if (r.securityPatterns.hasSubExpressions) flags.hasSubExpressions = true;
      if (r.securityPatterns.hasExpandableStrings) flags.hasExpandableStrings = true;
      if (r.securityPatterns.hasScriptBlocks) flags.hasScriptBlocks = true;
    }
  }
  for (let r of parsed.variables)
    if (r.isSplatted) {
      flags.hasSplatting = true;
      break;
    }
  return flags;
}
var Zkp = 5000,
  t0p = 2,
  n0p = 10000 /* 1e4 */,
  EPa = `
if (-not $EncodedCommand) {
    Write-Output '{"valid":false,"errors":[{"message":"No command provided","errorId":"NoInput"}],"statements":[],"variables":[],"hasStopParsing":false,"originalCommand":""}'
    exit 0
}

$Command = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($EncodedCommand))

$tokens = $null
$parseErrors = $null
$ast = [System.Management.Automation.Language.Parser]::ParseInput(
    $Command,
    [ref]$tokens,
    [ref]$parseErrors
)

$allVariables = [System.Collections.ArrayList]::new()

function Get-RawCommandElements {
    param([System.Management.Automation.Language.CommandAst]$CmdAst)
    $elems = [System.Collections.ArrayList]::new()
    foreach ($ce in $CmdAst.CommandElements) {
        $ceData = @{ type = $ce.GetType().Name; text = $ce.Extent.Text }
        if ($ce.PSObject.Properties['Value'] -and $null -ne $ce.Value -and $ce.Value -is [string]) {
            $ceData.value = $ce.Value
        }
        if ($ce -is [System.Management.Automation.Language.CommandExpressionAst]) {
            $ceData.expressionType = $ce.Expression.GetType().Name
        }
        $a=$ce.Argument;if($a){$ceData.children=@(@{type=$a.GetType().Name;text=$a.Extent.Text})}
        [void]$elems.Add($ceData)
    }
    return $elems
}

function Get-RawRedirections {
    param($Redirections)
    $result = [System.Collections.ArrayList]::new()
    foreach ($redir in $Redirections) {
        $redirData = @{ type = $redir.GetType().Name }
        if ($redir -is [System.Management.Automation.Language.FileRedirectionAst]) {
            $redirData.append = [bool]$redir.Append
            $redirData.fromStream = $redir.FromStream.ToString()
            $redirData.locationText = $redir.Location.Extent.Text
        }
        [void]$result.Add($redirData)
    }
    return $result
}

function Get-SecurityPatterns($A) {
    $p = @{}
    foreach ($n in $A.FindAll({ param($x)
        $x -is [System.Management.Automation.Language.MemberExpressionAst] -or
        $x -is [System.Management.Automation.Language.SubExpressionAst] -or
        $x -is [System.Management.Automation.Language.ArrayExpressionAst] -or
        $x -is [System.Management.Automation.Language.ExpandableStringExpressionAst] -or
        $x -is [System.Management.Automation.Language.ScriptBlockExpressionAst] -or
        $x -is [System.Management.Automation.Language.ParenExpressionAst]
    }, $true)) { switch ($n.GetType().Name) {
        'InvokeMemberExpressionAst' { $p.hasMemberInvocations = $true }
        'MemberExpressionAst' { $p.hasMemberInvocations = $true }
        'SubExpressionAst' { $p.hasSubExpressions = $true }
        'ArrayExpressionAst' { $p.hasSubExpressions = $true }
        'ParenExpressionAst' { $p.hasSubExpressions = $true }
        'ExpandableStringExpressionAst' { $p.hasExpandableStrings = $true }
        'ScriptBlockExpressionAst' { $p.hasScriptBlocks = $true }
    }}
    if ($p.Count -gt 0) { return $p }
    return $null
}

$varExprs = $ast.FindAll({ param($node) $node -is [System.Management.Automation.Language.VariableExpressionAst] }, $true)
foreach ($v in $varExprs) {
    [void]$allVariables.Add(@{
        path = $v.VariablePath.ToString()
        isSplatted = [bool]$v.Splatted
    })
}

$typeLiterals = [System.Collections.ArrayList]::new()
foreach ($t in $ast.FindAll({ param($n)
    $n -is [System.Management.Automation.Language.TypeExpressionAst] -or
    $n -is [System.Management.Automation.Language.TypeConstraintAst]
}, $true)) { [void]$typeLiterals.Add($t.TypeName.FullName) }

$hasStopParsing = $false
foreach ($tok in $tokens) {
    $norm = $tok.Text -replace '[\\u2013\\u2014\\u2015]','-' -replace '[\`''""\\u2018-\\u201f]',''
    if ($norm -eq '--%') {
        $hasStopParsing = $true; break
    }
}

$statements = [System.Collections.ArrayList]::new()
$script:hasBg = $false
foreach ($p in $ast.FindAll({param($n) $n -is [System.Management.Automation.Language.PipelineBaseAst]}, $true)) {
    if ($p.PSObject.Properties['Background'] -and $p.Background) { $script:hasBg = $true; break }
}

function Process-BlockStatements {
    param($Block)
    if (-not $Block) { return }

    foreach ($stmt in $Block.Statements) {
        $statement = @{
            type = $stmt.GetType().Name
            text = $stmt.Extent.Text
        }

        if ($stmt -is [System.Management.Automation.Language.PipelineAst]) {
            $elements = [System.Collections.ArrayList]::new()
            foreach ($element in $stmt.PipelineElements) {
                $elemData = @{
                    type = $element.GetType().Name
                    text = $element.Extent.Text
                }

                if ($element -is [System.Management.Automation.Language.CommandAst]) {
                    $elemData.commandElements = @(Get-RawCommandElements -CmdAst $element)
                    $elemData.redirections = @(Get-RawRedirections -Redirections $element.Redirections)
                } elseif ($element -is [System.Management.Automation.Language.CommandExpressionAst]) {
                    $elemData.expressionType = $element.Expression.GetType().Name
                    $elemData.redirections = @(Get-RawRedirections -Redirections $element.Redirections)
                }

                [void]$elements.Add($elemData)
            }
            $statement.elements = @($elements)

            $allNestedCmds = $stmt.FindAll(
                { param($node) $node -is [System.Management.Automation.Language.CommandAst] },
                $true
            )
            $nestedCmds = [System.Collections.ArrayList]::new()
            foreach ($cmd in $allNestedCmds) {
                if ($cmd.Parent -eq $stmt) { continue }
                $nested = @{
                    type = $cmd.GetType().Name
                    text = $cmd.Extent.Text
                    commandElements = @(Get-RawCommandElements -CmdAst $cmd)
                    redirections = @(Get-RawRedirections -Redirections $cmd.Redirections)
                }
                [void]$nestedCmds.Add($nested)
            }
            if ($nestedCmds.Count -gt 0) {
                $statement.nestedCommands = @($nestedCmds)
            }
            $r = $stmt.FindAll({param($n) $n -is [System.Management.Automation.Language.FileRedirectionAst]}, $true)
            if ($r.Count -gt 0) {
                $rr = @(Get-RawRedirections -Redirections $r)
                $statement.redirections = if ($statement.redirections) { @($statement.redirections) + $rr } else { $rr }
            }
        } else {
            $nestedCmdAsts = $stmt.FindAll(
                { param($node) $node -is [System.Management.Automation.Language.CommandAst] },
                $true
            )
            $nested = [System.Collections.ArrayList]::new()
            foreach ($cmd in $nestedCmdAsts) {
                [void]$nested.Add(@{
                    type = 'CommandAst'
                    text = $cmd.Extent.Text
                    commandElements = @(Get-RawCommandElements -CmdAst $cmd)
                    redirections = @(Get-RawRedirections -Redirections $cmd.Redirections)
                })
            }
            if ($nested.Count -gt 0) {
                $statement.nestedCommands = @($nested)
            }
            $r = $stmt.FindAll({param($n) $n -is [System.Management.Automation.Language.FileRedirectionAst]}, $true)
            if ($r.Count -gt 0) { $statement.redirections = @(Get-RawRedirections -Redirections $r) }
        }

        $sp = Get-SecurityPatterns $stmt
        if ($sp) { $statement.securityPatterns = $sp }

        [void]$statements.Add($statement)
    }

    if ($Block.Traps) {
        foreach ($trap in $Block.Traps) {
            $statement = @{
                type = 'TrapStatementAst'
                text = $trap.Extent.Text
            }
            $nestedCmdAsts = $trap.FindAll(
                { param($node) $node -is [System.Management.Automation.Language.CommandAst] },
                $true
            )
            $nestedCmds = [System.Collections.ArrayList]::new()
            foreach ($cmd in $nestedCmdAsts) {
                $nested = @{
                    type = $cmd.GetType().Name
                    text = $cmd.Extent.Text
                    commandElements = @(Get-RawCommandElements -CmdAst $cmd)
                    redirections = @(Get-RawRedirections -Redirections $cmd.Redirections)
                }
                [void]$nestedCmds.Add($nested)
            }
            if ($nestedCmds.Count -gt 0) {
                $statement.nestedCommands = @($nestedCmds)
            }
            $r = $trap.FindAll({param($n) $n -is [System.Management.Automation.Language.FileRedirectionAst]}, $true)
            if ($r.Count -gt 0) { $statement.redirections = @(Get-RawRedirections -Redirections $r) }
            $sp = Get-SecurityPatterns $trap
            if ($sp) { $statement.securityPatterns = $sp }
            [void]$statements.Add($statement)
        }
    }
}

Process-BlockStatements -Block $ast.BeginBlock
Process-BlockStatements -Block $ast.ProcessBlock
Process-BlockStatements -Block $ast.EndBlock
Process-BlockStatements -Block $ast.CleanBlock
Process-BlockStatements -Block $ast.DynamicParamBlock

if ($ast.ParamBlock) {
  $pb = $ast.ParamBlock
  $pn = [System.Collections.ArrayList]::new()
  foreach ($c in $pb.FindAll({param($n) $n -is [System.Management.Automation.Language.CommandAst]}, $true)) {
    [void]$pn.Add(@{type='CommandAst';text=$c.Extent.Text;commandElements=@(Get-RawCommandElements -CmdAst $c);redirections=@(Get-RawRedirections -Redirections $c.Redirections)})
  }
  $pr = $pb.FindAll({param($n) $n -is [System.Management.Automation.Language.FileRedirectionAst]}, $true)
  $ps = Get-SecurityPatterns $pb
  if ($pn.Count -gt 0 -or $pr.Count -gt 0 -or $ps) {
    $st = @{type='ParamBlockAst';text=$pb.Extent.Text}
    if ($pn.Count -gt 0) { $st.nestedCommands = @($pn) }
    if ($pr.Count -gt 0) { $st.redirections = @(Get-RawRedirections -Redirections $pr) }
    if ($ps) { $st.securityPatterns = $ps }
    [void]$statements.Add($st)
  }
}

$hasUsingStatements = $ast.UsingStatements -and $ast.UsingStatements.Count -gt 0
$hasScriptRequirements = $ast.ScriptRequirements -ne $null

$output = @{
    valid = ($parseErrors.Count -eq 0)
    errors = @($parseErrors | ForEach-Object {
        @{
            message = $_.Message
            errorId = $_.ErrorId
        }
    })
    statements = @($statements)
    variables = @($allVariables)
    hasStopParsing = $hasStopParsing
    originalCommand = $Command
    typeLiterals = @($typeLiterals)
    hasUsingStatements = [bool]$hasUsingStatements
    hasScriptRequirements = [bool]$hasScriptRequirements
    hasBackgroundJob = [bool]$script:hasBg
}

$output | ConvertTo-Json -Depth 10 -Compress
`,
  o0p = 32767,
  s0p = 200,
  i0p = 21,
  a0p = 100,
  l0p,
  c0p,
  Rn_,
  u0p = 4500,
  wmo,
  d0p,
  b0p,
  iEe,
  _de,
  F4;
