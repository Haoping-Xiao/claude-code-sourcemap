// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lTl
// matched 2.1.88 source: src/tools/PowerShellTool/clmTypes.ts
// class=modified  jaccard=0.5438  score=0.5518  fileCov=0.9743
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lTl]
Pbf = new Set(
  [
    "alias",
    "allowemptycollection",
    "allowemptystring",
    "allownull",
    "argumentcompleter",
    "argumentcompletions",
    "array",
    "bigint",
    "bool",
    "byte",
    "char",
    "cimclass",
    "cimconverter",
    "ciminstance",
    "cimtype",
    "cmdletbinding",
    "cultureinfo",
    "datetime",
    "decimal",
    "double",
    "dsclocalconfigurationmanager",
    "dscproperty",
    "dscresource",
    "experimentaction",
    "experimental",
    "experimentalfeature",
    "float",
    "guid",
    "hashtable",
    "int",
    "int16",
    "int32",
    "int64",
    "ipaddress",
    "ipendpoint",
    "long",
    "mailaddress",
    "norunspaceaffinity",
    "nullstring",
    "objectsecurity",
    "ordered",
    "outputtype",
    "parameter",
    "physicaladdress",
    "pscredential",
    "pscustomobject",
    "psdefaultvalue",
    "pslistmodifier",
    "psobject",
    "psprimitivedictionary",
    "pstypenameattribute",
    "ref",
    "regex",
    "sbyte",
    "securestring",
    "semver",
    "short",
    "single",
    "string",
    "supportswildcards",
    "switch",
    "timespan",
    "uint",
    "uint16",
    "uint32",
    "uint64",
    "ulong",
    "uri",
    "ushort",
    "validatecount",
    "validatedrive",
    "validatelength",
    "validatenotnull",
    "validatenotnullorempty",
    "validatenotnullorwhitespace",
    "validatepattern",
    "validaterange",
    "validatescript",
    "validateset",
    "validatetrusteddata",
    "validateuserdrive",
    "version",
    "void",
    "wildcardpattern",
    "x500distinguishedname",
    "x509certificate",
    "xml",
    "system.array",
    "system.boolean",
    "system.byte",
    "system.char",
    "system.datetime",
    "system.decimal",
    "system.double",
    "system.guid",
    "system.int16",
    "system.int32",
    "system.int64",
    "system.numerics.biginteger",
    "system.sbyte",
    "system.single",
    "system.string",
    "system.timespan",
    "system.uint16",
    "system.uint32",
    "system.uint64",
    "system.uri",
    "system.version",
    "system.void",
    "system.collections.hashtable",
    "system.text.regularexpressions.regex",
    "system.globalization.cultureinfo",
    "system.net.ipaddress",
    "system.net.ipendpoint",
    "system.net.mail.mailaddress",
    "system.net.networkinformation.physicaladdress",
    "system.security.securestring",
    "system.security.cryptography.x509certificates.x509certificate",
    "system.security.cryptography.x509certificates.x500distinguishedname",
    "system.xml.xmldocument",
    "system.management.automation.pscredential",
    "system.management.automation.pscustomobject",
    "system.management.automation.pslistmodifier",
    "system.management.automation.psobject",
    "system.management.automation.psprimitivedictionary",
    "system.management.automation.psreference",
    "system.management.automation.semanticversion",
    "system.management.automation.switchparameter",
    "system.management.automation.wildcardpattern",
    "system.management.automation.language.nullstring",
    "microsoft.management.infrastructure.cimclass",
    "microsoft.management.infrastructure.cimconverter",
    "microsoft.management.infrastructure.ciminstance",
    "microsoft.management.infrastructure.cimtype",
    "system.collections.specialized.ordereddictionary",
    "system.security.accesscontrol.objectsecurity",
    "object",
    "system.object",
    "microsoft.powershell.commands.modulespecification",
  ].map((e) => e.toLowerCase()),
);
function tDo(e) {
  let t = e.toLowerCase();
  if (cTl.has(t)) return true;
  let n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
  if (n >= 0) return cTl.has(t.slice(n + 1));
  return false;
}
function qbt(e, t, n) {
  if (kmo(e, t, n)) return true;
  let r = {
    ...e,
    args: e.args.map((o) => (o.length > 0 && $bf.has(o[0]) ? "-" + o.slice(1) : o)),
  };
  return kmo(r, t, n);
}
function Obf(e) {
  if (xmo(e, "Invoke-Expression"))
    return {
      behavior: "ask",
      message: "Command uses Invoke-Expression which can execute arbitrary code",
    };
  return {
    behavior: "passthrough",
  };
}
function Nbf(e) {
  for (let t of AL(e)) {
    if (t.elementType !== "CommandAst") continue;
    let n = t.elementTypes?.[0];
    if (n !== void 0 && n !== "StringConstant")
      return {
        behavior: "ask",
        message: "Command name is a dynamic expression which cannot be statically validated",
      };
  }
  return {
    behavior: "passthrough",
  };
}
function Bbf(e) {
  for (let t of AL(e))
    if (tDo(t.name)) {
      if (qbt(t, "-encodedcommand", "-e"))
        return {
          behavior: "ask",
          message: "Command uses encoded parameters which obscure intent",
        };
    }
  return {
    behavior: "passthrough",
  };
}
function Ubf(e) {
  for (let t of AL(e))
    if (tDo(t.name))
      return {
        behavior: "ask",
        message: "Command spawns a nested PowerShell process which cannot be validated",
      };
  return {
    behavior: "passthrough",
  };
}
function uTl(e) {
  return Fbf.has(e.toLowerCase());
}
function dTl(e) {
  let t = e.toLowerCase();
  return t === "invoke-expression" || t === "iex";
}
function jbf(e) {
  for (let n of e.statements) {
    let r = n.commands;
    if (r.length < 2) continue;
    let o = r.some((i) => uTl(i.name)),
      s = r.some((i) => dTl(i.name));
    if (o && s)
      return {
        behavior: "ask",
        message: "Command downloads and executes remote code",
      };
  }
  let t = AL(e);
  if (t.some((n) => uTl(n.name)) && t.some((n) => dTl(n.name)))
    return {
      behavior: "ask",
      message: "Command downloads and executes remote code",
    };
  return {
    behavior: "passthrough",
  };
}
function Gbf(e) {
  for (let t of AL(e)) {
    let n = t.name.toLowerCase();
    if (n === "start-bitstransfer")
      return {
        behavior: "ask",
        message: "Command downloads files via BITS transfer",
      };
    if (n === "certutil" || n === "certutil.exe") {
      if (
        t.args.some((o) => {
          let s = o.toLowerCase();
          return s === "-urlcache" || s === "/urlcache";
        })
      )
        return {
          behavior: "ask",
          message: "Command uses certutil to download from a URL",
        };
    }
    if (n === "bitsadmin" || n === "bitsadmin.exe") {
      if (t.args.some((r) => r.toLowerCase() === "/transfer"))
        return {
          behavior: "ask",
          message: "Command downloads files via BITS transfer",
        };
    }
  }
  return {
    behavior: "passthrough",
  };
}
function Wbf(e) {
  if (xmo(e, "Add-Type"))
    return {
      behavior: "ask",
      message: "Command compiles and loads .NET code",
    };
  return {
    behavior: "passthrough",
  };
}
function qbf(e) {
  for (let t of AL(e)) {
    if (t.name.toLowerCase() !== "new-object") continue;
    if (qbt(t, "-comobject", "-com"))
      return {
        behavior: "ask",
        message: "Command instantiates a COM object which may have execution capabilities",
      };
    let n;
    for (let r = 0; r < t.args.length; r++) {
      let o = t.args[r],
        s = o.toLowerCase();
      if (s.startsWith("-t") && s.includes(":")) {
        let i = o.indexOf(":"),
          a = s.slice(0, i);
        if ("-typename".startsWith(a)) {
          n = o.slice(i + 1);
          break;
        }
      }
      if (s.startsWith("-t") && "-typename".startsWith(s) && t.args[r + 1] !== void 0) {
        n = t.args[r + 1];
        break;
      }
    }
    if (n === void 0) {
      let r = new Set(["-argumentlist", "-comobject", "-property"]),
        o = new Set(["-strict"]);
      for (let s = 0; s < t.args.length; s++) {
        let i = t.args[s];
        if (i.startsWith("-")) {
          let a = i.toLowerCase();
          if (a.startsWith("-t") && "-typename".startsWith(a)) {
            s++;
            continue;
          }
          if (a.includes(":")) continue;
          if (o.has(a)) continue;
          if (r.has(a)) {
            s++;
            continue;
          }
          continue;
        }
        n = i;
        break;
      }
    }
    if (n !== void 0 && !eDo(n))
      return {
        behavior: "ask",
        message: `New-Object instantiates .NET type '${n}' outside the ConstrainedLanguage allowlist`,
      };
  }
  return {
    behavior: "passthrough",
  };
}
function Vbf(e) {
  for (let t of AL(e)) {
    let n = t.name.toLowerCase(),
      r = _de[n]?.toLowerCase() ?? n;
    if (!XLo.has(r)) continue;
    if (qbt(t, "-filepath", "-f") || qbt(t, "-literalpath", "-l"))
      return {
        behavior: "ask",
        message: `${t.name} -FilePath executes an arbitrary script file`,
      };
    for (let o = 0; o < t.args.length; o++) {
      let s = t.elementTypes?.[o + 1],
        i = t.args[o];
      if (s === "StringConstant" && i && !i.startsWith("-"))
        return {
          behavior: "ask",
          message: `${t.name} with positional string argument binds to -FilePath and executes a script file`,
        };
    }
  }
  return {
    behavior: "passthrough",
  };
}
function zbf(e) {
  for (let t of AL(e)) {
    let n = t.name.toLowerCase();
    if ((_de[n]?.toLowerCase() ?? n) !== "foreach-object") continue;
    if (qbt(t, "-membername", "-m"))
      return {
        behavior: "ask",
        message:
          "ForEach-Object -MemberName invokes methods by string name which cannot be validated",
      };
    for (let o = 0; o < t.args.length; o++) {
      let s = t.elementTypes?.[o + 1],
        i = t.args[o];
      if (s === "StringConstant" && i && !i.startsWith("-"))
        return {
          behavior: "ask",
          message:
            "ForEach-Object with positional string argument binds to -MemberName and invokes methods by name",
        };
    }
  }
  return {
    behavior: "passthrough",
  };
}
function Kbf(e) {
  for (let t of AL(e)) {
    let n = t.name.toLowerCase();
    if (n !== "start-process" && n !== "saps" && n !== "start") continue;
    if (qbt(t, "-Verb", "-v") && t.args.some((r) => r.toLowerCase() === "runas"))
      return {
        behavior: "ask",
        message: "Command requests elevated privileges",
      };
    if (t.children)
      for (let r = 0; r < t.args.length; r++) {
        let o = MN(t.args[r].replace(/`[\r\n]+\s*/g, ""));
        if (!/^[-\u2013\u2014\u2015/]v[a-z]*:/i.test(o)) continue;
        let s = t.children[r];
        if (!s) continue;
        for (let i of s)
          if (
            MN(i.text)
              .replace(/['"\u2018-\u201F\s]/g, "")
              .toLowerCase() === "runas"
          )
            return {
              behavior: "ask",
              message: "Command requests elevated privileges",
            };
      }
    if (
      t.args.some((r) => {
        let o = MN(r.replace(/`[\r\n]+\s*/g, ""));
        return /^[-\u2013\u2014\u2015/]v[a-z]*:['"` \u2018-\u201f]*runas['"` \u2018-\u201f]*$/i.test(
          o,
        );
      })
    )
      return {
        behavior: "ask",
        message: "Command requests elevated privileges",
      };
    for (let r of t.args) {
      let o = Mk(r);
      if (tDo(o))
        return {
          behavior: "ask",
          message: "Start-Process launches a nested PowerShell process which cannot be validated",
        };
    }
  }
  return {
    behavior: "passthrough",
  };
}
function Ybf(e) {
  if (!S5(e).hasScriptBlocks)
    return {
      behavior: "passthrough",
    };
  for (let r of AL(e)) {
    let o = r.name.toLowerCase();
    if (JLo.has(o))
      return {
        behavior: "ask",
        message:
          "Command contains script block with dangerous cmdlet that may execute arbitrary code",
      };
  }
  if (
    AL(e).every((r) => {
      let o = r.name.toLowerCase();
      if (pTl.has(o)) return true;
      let s = _de[o];
      if (s && pTl.has(s.toLowerCase())) return true;
      return false;
    })
  )
    return {
      behavior: "passthrough",
    };
  return {
    behavior: "ask",
    message: "Command contains script block that may execute arbitrary code",
  };
}
function Xbf(e) {
  if (S5(e).hasSubExpressions)
    return {
      behavior: "ask",
      message: "Command contains subexpressions $()",
    };
  return {
    behavior: "passthrough",
  };
}
function Jbf(e) {
  if (S5(e).hasExpandableStrings)
    return {
      behavior: "ask",
      message: "Command contains expandable strings with embedded expressions",
    };
  return {
    behavior: "passthrough",
  };
}
function Qbf(e) {
  if (S5(e).hasSplatting)
    return {
      behavior: "ask",
      message: "Command uses splatting (@variable)",
    };
  return {
    behavior: "passthrough",
  };
}
function Zbf(e) {
  if (S5(e).hasStopParsing)
    return {
      behavior: "ask",
      message: "Command uses stop-parsing token (--%)",
    };
  return {
    behavior: "passthrough",
  };
}
function eSf(e) {
  if (S5(e).hasMemberInvocations)
    return {
      behavior: "ask",
      message: "Command invokes .NET methods",
    };
  return {
    behavior: "passthrough",
  };
}
function tSf(e) {
  for (let t of e.typeLiterals ?? [])
    if (!eDo(t))
      return {
        behavior: "ask",
        message: `Command uses .NET type [${t}] outside the ConstrainedLanguage allowlist`,
      };
  return {
    behavior: "passthrough",
  };
}
function nSf(e) {
  for (let t of AL(e)) {
    let n = t.name.toLowerCase();
    if (n === "invoke-item" || n === "ii")
      return {
        behavior: "ask",
        message:
          "Invoke-Item opens files with the default handler (ShellExecute). On executable files this runs arbitrary code.",
      };
  }
  return {
    behavior: "passthrough",
  };
}
function oSf(e) {
  for (let t of AL(e)) {
    let n = t.name.toLowerCase();
    if (rSf.has(n))
      return {
        behavior: "ask",
        message: `${t.name} creates or modifies a scheduled task (persistence primitive)`,
      };
    if (n === "schtasks" || n === "schtasks.exe") {
      if (
        t.args.some((r) => {
          let o = r.toLowerCase();
          return o === "/create" || o === "/change" || o === "-create" || o === "-change";
        })
      )
        return {
          behavior: "ask",
          message: "schtasks with create/change modifies scheduled tasks (persistence primitive)",
        };
    }
  }
  return {
    behavior: "passthrough",
  };
}
function iSf(e) {
  let t = APa(e, "env");
  if (t.length === 0)
    return {
      behavior: "passthrough",
    };
  for (let n of AL(e))
    if (sSf.has(n.name.toLowerCase()))
      return {
        behavior: "ask",
        message: "Command modifies environment variables",
      };
  if (S5(e).hasAssignments && t.length > 0)
    return {
      behavior: "ask",
      message: "Command modifies environment variables",
    };
  return {
    behavior: "passthrough",
  };
}
function aSf(e) {
  for (let t of AL(e)) {
    let n = t.name.toLowerCase();
    if (QLo.has(n))
      return {
        behavior: "ask",
        message:
          "Command loads, installs, or downloads a PowerShell module or script, which can execute arbitrary code",
      };
  }
  return {
    behavior: "passthrough",
  };
}
function cSf(e) {
  for (let t of AL(e)) {
    let n = t.name.toLowerCase(),
      r = n.includes("\\") ? n.slice(n.lastIndexOf("\\") + 1) : n;
    if (lSf.has(r))
      return {
        behavior: "ask",
        message:
          "Command creates or modifies an alias or variable that can affect future command resolution",
      };
  }
  return {
    behavior: "passthrough",
  };
}
function dSf(e) {
  for (let t of AL(e)) {
    let n = t.name.toLowerCase();
    if (uSf.has(n))
      return {
        behavior: "ask",
        message: `${t.name} can spawn arbitrary processes via WMI/CIM (Win32_Process Create)`,
      };
  }
  return {
    behavior: "passthrough",
  };
}
function fTl(e, t) {
  if (!t.valid)
    return {
      behavior: "ask",
      message: "Could not parse command for security analysis",
    };
  let n = [
    Obf,
    Nbf,
    Bbf,
    Ubf,
    jbf,
    Gbf,
    Wbf,
    qbf,
    Vbf,
    nSf,
    oSf,
    zbf,
    Kbf,
    Ybf,
    Xbf,
    Jbf,
    Qbf,
    Zbf,
    eSf,
    tSf,
    iSf,
    aSf,
    cSf,
    dSf,
  ];
  for (let r of n) {
    let o = r(t);
    if (o.behavior === "ask") return o;
  }
  return {
    behavior: "passthrough",
  };
}
var cTl, $bf, Fbf, pTl, rSf, sSf, lSf, uSf;
