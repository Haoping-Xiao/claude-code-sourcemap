// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xRe
// matched 2.1.88 source: src/utils/bash/ast.ts
// class=modified (alt of src/utils/bash/ast.ts)  jaccard=0.1101  score=0.1836  fileCov=0.2155
// note: deminified; 17 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xRe] deps: utils/debug.ts, utils/bash/parser.ts
((mrp = new Set(["export", "declare", "typeset", "readonly", "local", "unset", "unsetenv"])),
  (grp = new Set(["word", "string", "raw_string", "number"])),
  (Bro = new Set(["command_substitution", "process_substitution"])),
  (Uro = new Set(["command", "declaration_command"])));
wue = Symbol("parse-aborted");
function Bp(e) {
  return e.includes(CMDSUB_PLACEHOLDER) || e.includes(VAR_PLACEHOLDER);
}
function bOn(e) {
  return e.replaceAll(CMDSUB_PLACEHOLDER, "$(\u2026)").replaceAll(VAR_PLACEHOLDER, "${\u2026}");
}
function fra(e) {
  return e.startsWith(CMDSUB_PLACEHOLDER) || e.startsWith(VAR_PLACEHOLDER);
}
function gra(e) {
  if (!e) return -2;
  if (e === "ERROR") return -1;
  let t = Arp.indexOf(e);
  return t >= 0 ? t + 1 : 0;
}
function vrp(e) {
  let t = false,
    n = false,
    r = false,
    o = true,
    s = 0;
  while (s < e.length) {
    let i = e[s];
    if (r) {
      if (i === "\\" && (e[s + 1] === "`" || e[s + 1] === "\\" || e[s + 1] === "$")) s += 2;
      else {
        if (i === "`") r = false;
        s++;
      }
    } else if (t) {
      if (i === "'") t = false;
      s++;
    } else if (n) {
      if (i === "\\" && (e[s + 1] === '"' || e[s + 1] === "\\" || e[s + 1] === "`")) s += 2;
      else if (i === "`") ((r = true), s++);
      else {
        if (i === '"') n = false;
        s++;
      }
    } else if (i === "\\" && s + 1 < e.length) {
      if (
        e[s + 1] !==
        `
`
      )
        o = false;
      s += 2;
    } else if (i === "#" && o) {
      while (
        s < e.length &&
        e[s] !==
          `
`
      )
        s++;
      o = true;
    } else if (i === "`") ((r = true), (o = false), s++);
    else {
      if (i === "*" || i === "?" || i === "[") return true;
      if (i === "'") t = true;
      else if (i === '"') n = true;
      ((o =
        i === " " ||
        i === "\t" ||
        i ===
          `
` ||
        i === ";" ||
        i === "|" ||
        i === "&" ||
        i === "(" ||
        i === ")" ||
        i === "<" ||
        i === ">"),
        s++);
    }
  }
  return false;
}
function wrp(e) {
  if (!e.includes("{")) return e;
  let t = [],
    n = false,
    r = false,
    o = false,
    s = true,
    i = 0;
  while (i < e.length) {
    let a = e[i];
    if (o) {
      if (a === "\\" && (e[i + 1] === "`" || e[i + 1] === "\\" || e[i + 1] === "$"))
        (t.push(a, e[i + 1]), (i += 2));
      else {
        if (a === "`") o = false;
        (t.push(a === "{" ? " " : a), i++);
      }
    } else if (n) {
      if (a === "'") n = false;
      (t.push(a === "{" ? " " : a), i++);
    } else if (r) {
      if (a === "\\" && (e[i + 1] === '"' || e[i + 1] === "\\" || e[i + 1] === "`"))
        (t.push(a, e[i + 1]), (i += 2));
      else if (a === "`") ((o = true), t.push(a), i++);
      else {
        if (a === '"') r = false;
        (t.push(a === "{" ? " " : a), i++);
      }
    } else if (a === "\\" && i + 1 < e.length) {
      if (
        (t.push(a, e[i + 1]),
        e[i + 1] !==
          `
`)
      )
        s = false;
      i += 2;
    } else if (a === "#" && s) {
      while (
        i < e.length &&
        e[i] !==
          `
`
      )
        (t.push(e[i]), i++);
      s = true;
    } else if (a === "`") ((o = true), (s = false), t.push(a), i++);
    else {
      if (a === "'") n = true;
      else if (a === '"') r = true;
      ((s =
        a === " " ||
        a === "\t" ||
        a ===
          `
` ||
        a === ";" ||
        a === "|" ||
        a === "&" ||
        a === "(" ||
        a === ")" ||
        a === "<" ||
        a === ">"),
        t.push(a),
        i++);
    }
  }
  return t.join("");
}
async function mct(e) {
  if (e === "")
    return {
      kind: "simple",
      commands: [],
      bareAssignmentNames: [],
    };
  let t = await pct(e);
  return t === null
    ? {
        kind: "simple",
        commands: [],
        bareAssignmentNames: [],
      }
    : parseForSecurityFromAst(e, t);
}
function parseForSecurityFromAst(cmd, root) {
  if (noo.test(cmd))
    return {
      kind: "too-complex",
      reason: "Contains lone surrogate",
      differential: true,
    };
  if (too.test(cmd))
    return {
      kind: "too-complex",
      reason: "Contains control characters",
      differential: true,
    };
  if (Hrp.test(cmd))
    return {
      kind: "too-complex",
      reason: "Contains Unicode whitespace",
      differential: true,
    };
  if (roo.test(cmd))
    return {
      kind: "too-complex",
      reason: "Contains backslash-escaped whitespace",
      differential: true,
    };
  if (EOn.test(cmd))
    return {
      kind: "too-complex",
      reason: "Contains zsh ~[ dynamic directory syntax",
      differential: true,
    };
  if (AOn.test(cmd))
    return {
      kind: "too-complex",
      reason: "Contains zsh =cmd equals expansion",
      differential: true,
    };
  if (ioo.test(cmd))
    return {
      kind: "too-complex",
      reason: "Contains zsh <N-M> numeric-range glob",
      differential: true,
    };
  if (Trp.test(wrp(cmd)))
    return {
      kind: "too-complex",
      reason: "Contains brace with quote character (expansion obfuscation)",
      differential: true,
    };
  if (cmd.trim() === "")
    return {
      kind: "simple",
      commands: [],
      bareAssignmentNames: [],
    };
  if (root === wue)
    return {
      kind: "too-complex",
      reason: "Parser aborted (timeout, resource limit, or over-length)",
      nodeType: "PARSE_ABORT",
    };
  let r = Buffer.from(cmd, "utf8"),
    o = (c) => c === 32 || c === 9 || c === 10 || c === 13 || c === 59 || c === 38,
    s = (c, u) => {
      let d = c;
      while (d < u) {
        let p = r[d];
        if (o(p)) d++;
        else if (p === 92 && (r[d + 1] === 10 || (r[d + 1] === 13 && r[d + 2] === 10)))
          d += r[d + 1] === 13 ? 3 : 2;
        else break;
      }
      return d;
    },
    i = root.children
      .filter((c) => c !== null)
      .map((c) => [c.startIndex, c.endIndex])
      .sort((c, u) => c[0] - u[0]),
    a = 0;
  for (let [c, u] of i) {
    if (s(a, c) < c)
      return {
        kind: "too-complex",
        reason: "Parser skipped input between top-level statements",
      };
    if (u > a) a = u;
  }
  if (s(a, r.length) < r.length)
    return {
      kind: "too-complex",
      reason: "Parser did not consume trailing input",
    };
  let l = Crp(root);
  if (l.kind === "too-complex" && l.nodeType !== "ERROR" && hra(root))
    return {
      ...l,
      nodeType: "ERROR",
    };
  return l;
}
function hra(e) {
  if (e.type === "ERROR" && e.text.startsWith("${")) return true;
  for (let t of e.children) if (t && hra(t)) return true;
  return false;
}
function Crp(e) {
  let t = [],
    n = new Map(),
    r = [],
    o = collectCommands(e, t, n, r);
  if (o) return o;
  return {
    kind: "simple",
    commands: t,
    bareAssignmentNames: r,
  };
}
function collectCommands(node, commands, varScope, r) {
  if (node.type === "command") {
    let o = walkCommand(node, [], commands, varScope, r);
    if (o.kind !== "simple") return o;
    return (commands.push(...o.commands), null);
  }
  if (node.type === "redirected_statement")
    return walkRedirectedStatement(node, commands, varScope, r);
  if (node.type === "comment") return null;
  if (pra.has(node.type)) {
    let o = node.type === "pipeline",
      s = false;
    if (!o) {
      for (let c of node.children)
        if (c && (c.type === "||" || c.type === "&")) {
          s = true;
          break;
        }
    }
    let i = s ? new Map(varScope) : null,
      a = o ? new Map(varScope) : varScope,
      l = null;
    for (let c of node.children) {
      if (!c) continue;
      if (Gro.has(c.type)) {
        if (c.type === "||" || c.type === "|" || c.type === "|&" || c.type === "&") {
          if (c.type === "||") {
            l ??= new Set();
            for (let p of varScope.keys()) l.add(p);
            let d = i ?? varScope;
            a = new Map(d);
            for (let [p, f] of varScope) if (d.get(p) !== f) a.set(p, VAR_PLACEHOLDER);
            for (let p of d.keys()) if (!varScope.has(p)) a.set(p, VAR_PLACEHOLDER);
          } else a = new Map(i ?? varScope);
        } else if (l !== null) {
          for (let d of l) varScope.set(d, VAR_PLACEHOLDER);
          ((l = null), (a = varScope));
        }
        continue;
      }
      let u = collectCommands(c, commands, a, r);
      if (u) return u;
    }
    if (l !== null) for (let c of l) varScope.set(c, VAR_PLACEHOLDER);
    if (o) H2t(varScope, a);
    return null;
  }
  if (node.type === "negated_command") {
    let o = commands.length;
    for (let s of node.children) {
      if (!s) continue;
      if (s.type === "!") continue;
      let i = collectCommands(s, commands, varScope, r);
      if (i) return i;
    }
    if (commands.length === o)
      commands.push({
        argv: ["true"],
        envVars: [],
        redirects: [],
        text: node.text,
      });
    return null;
  }
  if (node.type === "declaration_command") {
    let o = commands.length,
      s = new Map(varScope),
      i = [];
    for (let a of node.children) {
      if (!a) continue;
      switch (a.type) {
        case "export":
        case "local":
        case "readonly":
        case "declare":
        case "typeset":
          i.push(a.text);
          break;
        case "word":
        case "number":
        case "raw_string":
        case "string":
        case "concatenation": {
          let l = walkArgument(a, commands, s, r);
          if (typeof l !== "string") return l;
          if (/^[+-].*m/.test(l))
            return {
              kind: "too-complex",
              reason: `${i[0]} flag ${l} \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
              nodeType: "declaration_command",
            };
          if (
            (i[0] === "declare" || i[0] === "typeset" || i[0] === "local") &&
            /^[+-].*[niaAEF]/.test(l)
          )
            return {
              kind: "too-complex",
              reason: `declare flag ${l} changes assignment semantics (nameref/integer/float/array)`,
              nodeType: "declaration_command",
            };
          if ((i[0] === "export" || i[0] === "readonly") && /^[+-].*[iEF]/.test(l))
            return {
              kind: "too-complex",
              reason: `${i[0]} flag ${l} \u2014 zsh bin_typeset accepts -i/-E/-F and arithmetically evaluates the RHS`,
              nodeType: "declaration_command",
            };
          if (/^[+-].*T/.test(l))
            return {
              kind: "too-complex",
              reason: `${i[0]} -T creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`,
              nodeType: "declaration_command",
            };
          if (
            (i[0] === "declare" || i[0] === "typeset" || i[0] === "local" || i[0] === "export") &&
            l[0] !== "-" &&
            /^[^=]*\[/.test(l)
          )
            return {
              kind: "too-complex",
              reason: `${i[0]} positional '${l}' contains array subscript \u2014 zsh/bash evaluate $(cmd) in subscripts`,
              nodeType: "declaration_command",
            };
          if (l[0] !== "-") {
            let c = l.indexOf("=");
            if (c > 0) {
              let u = l.slice(0, c);
              if (/^[A-Za-z_][A-Za-z0-9_]*\+?$/.test(u)) {
                let d = u.endsWith("+"),
                  p = d ? u.slice(0, -1) : u;
                (jro(
                  varScope,
                  {
                    name: p,
                    value: l.slice(c + 1),
                    isAppend: d,
                  },
                  o > 0,
                ),
                  r.push(p));
              }
            }
          }
          i.push(l);
          break;
        }
        case "variable_assignment": {
          let l = walkVariableAssignment(a, commands, s, r);
          if ("kind" in l) return l;
          (jro(varScope, l, o > 0), r.push(l.name), i.push(`${l.name}=${l.value}`));
          break;
        }
        case "variable_name": {
          let l = a.text;
          if (
            (i[0] === "declare" || i[0] === "typeset" || i[0] === "local" || i[0] === "export") &&
            l[0] !== "-" &&
            /^[^=]*\[/.test(l)
          )
            return {
              kind: "too-complex",
              reason: `${i[0]} positional '${l}' contains array subscript \u2014 backslash-escaped form de-escapes to [$(cmd)] at runtime`,
              nodeType: "declaration_command",
            };
          i.push(l);
          break;
        }
        default:
          return tooComplex(a);
      }
    }
    return (
      commands.push({
        argv: i,
        envVars: [],
        redirects: [],
        text: node.text,
      }),
      null
    );
  }
  if (node.type === "variable_assignment") {
    let o = commands.length,
      s = walkVariableAssignment(node, commands, varScope, r);
    if ("kind" in s) return s;
    if (Zro(s.name))
      return {
        kind: "too-complex",
        reason: `${s.name} assignment alters command lookup/execution for subsequent commands`,
        nodeType: "variable_assignment",
      };
    if (wra(s.name, s.value))
      return {
        kind: "too-complex",
        reason: `${s.name} has integer attribute \u2014 assignment arith-evals RHS, executing subscript command substitution`,
        nodeType: "variable_assignment",
      };
    return (jro(varScope, s, o > 0), r.push(s.name), null);
  }
  if (node.type === "for_statement") {
    if (bI()) return tooComplex(node);
    let o = null,
      s = null;
    for (let l of node.children) {
      if (!l) continue;
      if (l.type === "variable_name") o = l.text;
      else if (l.type === "do_group") s = l;
      else if (l.type === "select")
        return {
          kind: "too-complex",
          reason: "select statement reads stdin into $REPLY; cannot statically model",
          nodeType: "for_statement",
        };
      else if (l.type === "for" || l.type === "in" || l.type === ";") continue;
      else if (l.type === "command_substitution") {
        let c = aoo(l, commands, varScope, r);
        if (c) return c;
      } else {
        let c = walkArgument(l, commands, varScope, r);
        if (typeof c !== "string") return c;
      }
    }
    if (o === null || s === null) return tooComplex(node);
    if (o === "PS4" || o === "IFS" || Zro(o) || moo.has(o) || Wro.has(o) || Era.has(o))
      return {
        kind: "too-complex",
        reason: `${o} as loop variable bypasses assignment validation`,
        nodeType: "for_statement",
      };
    let i = varScope.get(o);
    if (i !== void 0 && !Bp(i))
      return {
        kind: "too-complex",
        reason: `for-loop variable '${o}' would overwrite tracked literal ${JSON.stringify(i.slice(0, 40))}; post-loop value cannot be statically determined`,
        nodeType: "for_statement",
      };
    (varScope.delete(o), r.push(o));
    let a = new Map(varScope);
    (Fro(a, s), a.delete(o));
    for (let l of s.children) {
      if (!l) continue;
      if (l.type === "do" || l.type === "done" || l.type === ";") continue;
      let c = collectCommands(l, commands, a, r);
      if (c) return c;
    }
    return (H2t(varScope, a), null);
  }
  if (node.type === "if_statement" || node.type === "while_statement") {
    if (node.type === "while_statement" && bI()) return tooComplex(node);
    let o = null,
      s = null;
    if (node.type === "while_statement")
      ((o = new Set(varScope.keys())), (s = new Map(varScope)), Fro(varScope, node));
    let i = false;
    for (let a of node.children) {
      if (!a) continue;
      if (
        a.type === "if" ||
        a.type === "fi" ||
        a.type === "else" ||
        a.type === "elif" ||
        a.type === "while" ||
        a.type === "until" ||
        a.type === ";"
      )
        continue;
      if (a.type === "then") {
        i = true;
        continue;
      }
      if (a.type === "do_group") {
        let d = new Map(varScope);
        Fro(d, a);
        for (let p of a.children) {
          if (!p) continue;
          if (p.type === "do" || p.type === "done" || p.type === ";") continue;
          let f = collectCommands(p, commands, d, r);
          if (f) return f;
        }
        H2t(varScope, d);
        continue;
      }
      if (a.type === "elif_clause" || a.type === "else_clause") {
        let d = new Map(varScope);
        for (let p of a.children) {
          if (!p) continue;
          if (p.type === "elif" || p.type === "else" || p.type === "then" || p.type === ";")
            continue;
          let f = collectCommands(p, commands, d, r);
          if (f) return f;
        }
        H2t(varScope, d);
        continue;
      }
      let l = new Map(varScope),
        c = commands.length,
        u = collectCommands(a, commands, l, r);
      if (u) return u;
      if (!i) {
        for (let [d, p] of l) {
          let f = (s ?? varScope).get(d);
          if (f !== void 0 && !Bp(f) && p !== f)
            return {
              kind: "too-complex",
              reason: `'${d}' was tracked as literal '${f}' but condition may modify it (||/pipeline/unset/&&-short-circuit) \u2014 cannot prove downstream value`,
              nodeType: node.type,
            };
          varScope.set(d, p);
        }
        for (let d of varScope.keys())
          if (!l.has(d)) {
            let p = (s ?? varScope).get(d);
            if (p !== void 0 && !Bp(p))
              return {
                kind: "too-complex",
                reason: `'${d}' was tracked as literal '${p}' but condition may unset it (&&-short-circuit) \u2014 cannot prove downstream value`,
                nodeType: node.type,
              };
            varScope.set(d, VAR_PLACEHOLDER);
          }
        for (let d = c; d < commands.length; d++) {
          let p = commands[d];
          if (p?.argv[0] === "read") {
            for (let m of p.argv.slice(1))
              if (!m.startsWith("-") && /^[A-Za-z_][A-Za-z0-9_]*$/.test(m)) {
                let g = varScope.get(m);
                if (g !== void 0 && !Bp(g))
                  return {
                    kind: "too-complex",
                    reason: `'read ${m}' in condition may not execute (||/pipeline/subshell); cannot prove it overwrites tracked literal '${g}'`,
                    nodeType: node.type,
                  };
                varScope.set(m, VAR_PLACEHOLDER);
              }
            let f = varScope.get("REPLY");
            if (f !== void 0 && !Bp(f))
              return {
                kind: "too-complex",
                reason: `'read' in condition may write stdin to REPLY; cannot prove it overwrites tracked literal '${f}'`,
                nodeType: node.type,
              };
            varScope.set("REPLY", VAR_PLACEHOLDER);
          }
        }
      } else H2t(varScope, l);
    }
    if (o !== null) {
      for (let a of [...varScope.keys()]) if (!o.has(a)) varScope.delete(a);
    }
    return null;
  }
  if (node.type === "subshell") {
    let o = new Map(varScope);
    for (let s of node.children) {
      if (!s) continue;
      if (s.type === "(" || s.type === ")") continue;
      let i = collectCommands(s, commands, o, r);
      if (i) return i;
    }
    return null;
  }
  if (node.type === "test_command") {
    let o = ["[["];
    for (let s of node.children) {
      if (!s) continue;
      if (s.type === "[[" || s.type === "]]" || s.type === "[" || s.type === "]") {
        if (s.text === "")
          return {
            kind: "too-complex",
            reason: "test_command early-close (quote in operator position)",
            differential: true,
          };
        continue;
      }
      let i = walkTestExpr(s, o, commands, varScope, r);
      if (i) return i;
    }
    return (
      commands.push({
        argv: o,
        envVars: [],
        redirects: [],
        text: node.text,
      }),
      null
    );
  }
  if (node.type === "unset_command") {
    let o = [],
      s = false,
      i = false;
    for (let a of node.children) {
      if (!a) continue;
      switch (a.type) {
        case "unset":
          o.push(a.text);
          break;
        case "variable_name":
          if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(a.text)) return tooComplex(a);
          if ((o.push(a.text), (i = true), s)) break;
          if (kRe(a.text))
            return {
              kind: "too-complex",
              reason: `'unset' targets shell variable ${a.text} (exec-influencing / integer-attr / IFS / PS4)`,
              nodeType: "unset_command",
            };
          varScope.set(a.text, "");
          break;
        case "word": {
          let l = walkArgument(a, commands, varScope, r);
          if (typeof l !== "string") return l;
          if (l.startsWith("-")) {
            if (i) return tooComplex(a);
            if (l !== "-f" && l !== "-v") return tooComplex(a);
            if (l === "-f") s = true;
            o.push(l);
            break;
          }
          if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(l)) return tooComplex(a);
          if ((o.push(l), (i = true), s)) break;
          if (kRe(l))
            return {
              kind: "too-complex",
              reason: `'unset' targets shell variable ${l} (exec-influencing / integer-attr / IFS / PS4)`,
              nodeType: "unset_command",
            };
          varScope.set(l, "");
          break;
        }
        default:
          return tooComplex(a);
      }
    }
    return (
      commands.push({
        argv: o,
        envVars: [],
        redirects: [],
        text: node.text,
      }),
      null
    );
  }
  return tooComplex(node);
}
function walkTestExpr(node, argv, innerCommands, varScope, o) {
  switch (node.type) {
    case "unary_expression":
    case "binary_expression":
    case "negated_expression":
    case "parenthesized_expression": {
      for (let s of node.children) {
        if (!s) continue;
        let i = walkTestExpr(s, argv, innerCommands, varScope, o);
        if (i) return i;
      }
      return null;
    }
    case "test_operator":
    case "!":
    case "(":
    case ")":
    case "&&":
    case "||":
    case "==":
    case "=":
    case "!=":
    case "<":
    case ">":
    case "=~":
      return (argv.push(node.text), null);
    case "regex":
    case "extglob_pattern":
      if (/\$[({[\w#?!*@$'"+~^=-]|`|[<>]\(/.test(node.text))
        return {
          kind: "too-complex",
          reason: `[[ ]] ${node.type} contains expansion / command / process substitution`,
          nodeType: node.type,
          differential: true,
        };
      if (node.type === "regex") {
        let s = node.text,
          i = 0,
          a = 0;
        while (a < s.length) {
          let l = s[a];
          if (l === "\\" && a + 1 < s.length) {
            a += 2;
            continue;
          }
          if (l === '"' || l === "'") {
            let c = l;
            a++;
            while (a < s.length && s[a] !== c) {
              if (c === '"' && s[a] === "\\" && a + 1 < s.length) a++;
              a++;
            }
            if (a < s.length) a++;
            continue;
          }
          if (l === "(") i++;
          else if (l === ")") i--;
          a++;
        }
        if (i !== 0)
          return {
            kind: "too-complex",
            reason: "[[ ]] regex has unbalanced parentheses (parser desync)",
            nodeType: node.type,
            differential: true,
          };
      }
      return (argv.push(node.text), null);
    default: {
      let s = walkArgument(node, innerCommands, varScope, o);
      if (typeof s !== "string") return s;
      if (/]].*[;\n&|<>]/s.test(s))
        return {
          kind: "too-complex",
          reason:
            "[[ ]] quoted operand contains `]]` + command separator \u2014 possible parser quote-state desync",
          nodeType: node.type,
        };
      return (argv.push(s), null);
    }
  }
}
function walkRedirectedStatement(node, commands, varScope, r) {
  let o = [],
    s = null,
    i = [],
    a = [];
  for (let u of node.children) {
    if (!u) continue;
    if (u.type === "file_redirect") i.push(u);
    else if (u.type === "heredoc_redirect") a.push(u);
    else if (
      u.type === "command" ||
      u.type === "pipeline" ||
      u.type === "list" ||
      u.type === "negated_command" ||
      u.type === "declaration_command" ||
      u.type === "unset_command"
    )
      s = u;
    else return tooComplex(u);
  }
  if (!s) {
    for (let u of i) {
      let d = walkFileRedirect(u, commands, varScope, r);
      if ("kind" in d) return d;
      o.push(d);
    }
    for (let u of a) {
      let d = walkHeredocRedirect(u);
      if (d) return d;
    }
    return (
      commands.push({
        argv: [],
        envVars: [],
        redirects: o,
        text: node.text,
      }),
      null
    );
  }
  let l = commands.length,
    c;
  if (s.type === "list") {
    let u = s.children;
    if (u.length === 3 && u[0] && u[1]?.type === "&&" && u[2]) {
      let d = collectCommands(u[0], commands, varScope, r);
      if (d) return d;
      c = new Map(varScope);
      let p = collectCommands(u[2], commands, varScope, r);
      if (p) return p;
    } else {
      let d = collectCommands(s, commands, varScope, r);
      if (d) return d;
      c = varScope;
    }
  } else if (pra.has(s.type)) {
    let u = collectCommands(s, commands, varScope, r);
    if (u) return u;
    c = varScope;
  } else {
    c = new Map(varScope);
    let u = collectCommands(s, commands, varScope, r);
    if (u) return u;
  }
  for (let u of i) {
    let d = walkFileRedirect(u, commands, c, r);
    if ("kind" in d) return d;
    o.push(d);
  }
  for (let u of a) {
    let d = walkHeredocRedirect(u);
    if (d) return d;
  }
  if (o.length > 0)
    if (commands.length > l) {
      let u = commands.at(-1);
      if (u) u.redirects.push(...o);
    } else
      commands.push({
        argv: [],
        envVars: [],
        redirects: o,
        text: node.text,
      });
  return null;
}
function walkFileRedirect(node, innerCommands, varScope, r) {
  let o = null,
    s = null,
    i;
  {
    let a = node.startIndex;
    for (let l of node.children) {
      if (!l) continue;
      if (l.startIndex > a) {
        let c = Buffer.from(node.text, "utf8")
          .subarray(a - node.startIndex, l.startIndex - node.startIndex)
          .toString("utf8");
        if (!/^(?:[ \t]|\\\n)*$/.test(c))
          return {
            kind: "too-complex",
            reason:
              "Redirect has unparsed bytes between children \u2014 parser dropped content that shell will see",
            nodeType: node.type,
          };
      }
      a = l.endIndex;
    }
    if (a < node.endIndex) {
      let l = Buffer.from(node.text, "utf8")
        .subarray(a - node.startIndex)
        .toString("utf8");
      if (!/^(?:[ \t]|\\\n)*$/.test(l))
        return {
          kind: "too-complex",
          reason:
            "Redirect has unparsed trailing bytes \u2014 parser dropped content that shell will see",
          nodeType: node.type,
        };
    }
  }
  for (let a of node.children) {
    if (!a) continue;
    if (a.type === "file_descriptor") i = Number(a.text);
    else if (a.type === "variable_name")
      return {
        kind: "too-complex",
        reason: `Redirect uses {${a.text}} fd-variable assignment \u2014 modifies shell variable as side effect`,
        nodeType: node.type,
      };
    else if (a.type in sra) o = sra[a.type] ?? null;
    else if (s !== null)
      return {
        kind: "too-complex",
        reason: "Redirect has multiple targets \u2014 post-redirect args swallowed",
        nodeType: node.type,
      };
    else if (a.type === "word" || a.type === "number") {
      if (a.children.length > 0) return tooComplex(a);
      if (qro.test(a.text)) return tooComplex(a);
      if (Vro.test(a.text)) return tooComplex(a);
      if (zro.test(a.text)) return tooComplex(a);
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(a.text)) return tooComplex(a);
      s = a.text.replace(/\\([\s\S])/g, (l, c) =>
        c ===
        `
`
          ? ""
          : c,
      );
    } else if (a.type === "raw_string") s = Ara(a.text);
    else if (a.type === "string") {
      let l = walkString(a, innerCommands, varScope, r);
      if (typeof l !== "string") return l;
      s = l;
    } else if (a.type === "concatenation") {
      let l = walkArgument(a, innerCommands, varScope, r);
      if (typeof l !== "string") return l;
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(a.text))
        return {
          kind: "too-complex",
          reason:
            "Redirect target concatenation contains $/` \u2014 unanalyzable gap or substitution",
          nodeType: "concatenation",
        };
      s = l;
    } else return tooComplex(a);
  }
  if (!o || s === null)
    return {
      kind: "too-complex",
      reason: "Unrecognized redirect shape",
      nodeType: node.type,
    };
  if (Bp(s))
    return {
      kind: "too-complex",
      reason: "Redirect target contains $(cmd) output \u2014 path is runtime-determined",
      nodeType: node.type,
    };
  if (
    s.includes(`
`)
  )
    return {
      kind: "too-complex",
      reason: "Redirect target contains newline \u2014 potential path traversal",
      nodeType: node.type,
    };
  if (s.startsWith("!"))
    return {
      kind: "too-complex",
      reason: "Redirect target starts with ! \u2014 zsh clobber or history expansion",
      nodeType: node.type,
    };
  if (s.startsWith("="))
    return {
      kind: "too-complex",
      reason: "Redirect target starts with = \u2014 zsh expands to PATH binary",
      nodeType: node.type,
    };
  if (o === ">&" && !/^[A-Za-z0-9./_-]+$/.test(s))
    return {
      kind: "too-complex",
      reason:
        "bash `>&` applies a second word-expansion pass to its target \u2014 path cannot be statically validated",
      nodeType: node.type,
    };
  return {
    op: o,
    target: s,
    fd: i,
  };
}
function walkHeredocRedirect(node) {
  let startText = null,
    n = null,
    r = false;
  for (let s of node.children) {
    if (!s) continue;
    if (s.type === "heredoc_start") startText = s.text;
    else if (s.type === "heredoc_body") n = s;
    else if (s.type === "<<-") r = true;
    else if (s.type === "<<" || s.type === "heredoc_end" || s.type === "file_descriptor");
    else return tooComplex(s);
  }
  if (n === null)
    return {
      kind: "too-complex",
      reason: "Heredoc body was not scanned by the parser",
      nodeType: "heredoc_redirect",
    };
  if (
    !(
      startText !== null &&
      ((startText.startsWith("'") && startText.endsWith("'")) ||
        (startText.startsWith('"') && startText.endsWith('"')) ||
        startText.startsWith("\\"))
    )
  )
    return {
      kind: "too-complex",
      reason: "Heredoc with unquoted delimiter undergoes shell expansion",
      nodeType: "heredoc_redirect",
      differential: true,
    };
  if (
    startText !== null &&
    (startText.startsWith("'") || startText.startsWith('"')) &&
    startText.slice(1, -1).includes("\\")
  )
    return {
      kind: "too-complex",
      reason: "Quoted heredoc delimiter contains backslash",
      nodeType: "heredoc_redirect",
    };
  if (n)
    for (let s of n.children) {
      if (!s) continue;
      if (s.type !== "heredoc_content") return tooComplex(s);
    }
  if (startText !== null && n !== null) {
    let s = startText.startsWith("\\") ? startText.slice(1) : startText.slice(1, -1);
    if (s.length > 0) {
      if (r && s.startsWith("\t"))
        return {
          kind: "too-complex",
          reason: "Heredoc uses <<- with a tab-prefixed delimiter",
          nodeType: "heredoc_redirect",
        };
      for (let i of n.text.split(`
`)) {
        let a = r ? i.replace(/^\t+/, "") : i;
        if (!a.startsWith(s)) continue;
        let l = a.slice(s.length);
        if (/[)`}]/.test(l))
          return {
            kind: "too-complex",
            reason:
              "Heredoc body line starts with the delimiter and contains a shell metacharacter bash may treat as a terminator",
            nodeType: "heredoc_redirect",
          };
      }
    }
  }
  return null;
}
function xrp(e, t, n, r) {
  for (let o of e.children) {
    if (!o) continue;
    if (o.type === "<<<") continue;
    let s = walkArgument(o, t, n, r);
    if (typeof s !== "string") return s;
    if (SOn.test(s)) return tooComplex(o);
  }
  return null;
}
function krp(e, t, n, r) {
  let o = [],
    s = [],
    i = (u, d = true) => {
      let p = u.match(/^[A-Za-z_][A-Za-z0-9_]*/);
      if (p) {
        if ((o.push(p[0]), d)) s.push(p[0]);
      }
    },
    a = e,
    l = false;
  for (;;) {
    let u = a[0];
    if (u === void 0) break;
    if (Xro.has(u)) {
      let d = 1;
      while (d < a.length && /^-[-pvV]*$/.test(a[d])) {
        if (/[vV]/.test(a[d])) l = true;
        d++;
      }
      a = a.slice(d);
    } else if (u === "!") a = a.slice(1);
    else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(u)) (i(u), (a = a.slice(1)));
    else break;
  }
  let c = a[0];
  if (c === void 0) for (let u of t) i(u.name);
  else if (_ra.has(c)) {
    let u = false;
    for (let d = 1; d < a.length; d++) {
      let p = a[d];
      if (!u && p === "--") {
        u = true;
        continue;
      }
      if (!u && /^[+-].*m/.test(p))
        return {
          kind: "too-complex",
          reason: `'${c} ${p}' (wrapped form) \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
          nodeType: "command",
        };
      if (!u && p.startsWith("-")) continue;
      if (p.includes("=")) i(p);
    }
  } else if (c === "read") {
    let u = 1,
      d = false,
      p = false;
    while (u < a.length) {
      let f = a[u];
      if (!d && f === "--") {
        ((d = true), u++);
        continue;
      }
      if (!d && f.startsWith("-")) {
        if (fct.has(f)) {
          u += 2;
          continue;
        }
        let m = false;
        for (let g = 1; g < f.length; g++) {
          let h = f[g];
          if (h === "a" || h === "A") {
            let y = g < f.length - 1 ? f.slice(g + 1) : a[u + 1];
            if (y) (i(y), (p = true));
            m = g === f.length - 1;
            break;
          }
          if (fct.has("-" + h)) {
            m = g === f.length - 1;
            break;
          }
        }
        u += m ? 2 : 1;
        continue;
      }
      (i(f), (p = true), u++);
    }
    if (!p) o.push("REPLY");
  } else if (c === "printf")
    for (let u = 1; u < a.length; u++) {
      let d = a[u];
      if (d === "--" || !d.startsWith("-")) break;
      if (d === "-v") {
        if (a[u + 1]) i(a[u + 1]);
        u++;
        continue;
      }
      if (d.startsWith("-v")) i(d.slice(2));
    }
  else if (c === "getopts") {
    let u = a[1] === "--" ? 1 : 0;
    if (a[2 + u]) i(a[2 + u]);
    (o.push("OPTARG"), n.set("OPTIND", VAR_PLACEHOLDER));
  } else if (c === "wait")
    for (let u = 1; u < a.length; u++) {
      let d = a[u];
      if (d === "--" || !d.startsWith("-")) break;
      for (let p = 1; p < d.length; p++)
        if (d[p] === "p") {
          if (p < d.length - 1) i(d.slice(p + 1));
          else if (a[u + 1]) (i(a[u + 1]), u++);
          break;
        }
    }
  else if (c === "unset" || c === "unsetenv") {
    let u = false,
      d = false;
    for (let p = 1; p < a.length; p++) {
      let f = a[p];
      if (f.startsWith("-")) {
        if (d)
          return {
            kind: "too-complex",
            reason: `'unset \u2026 ${f}' (wrapped form) \u2014 flag after name; getopt stops at first non-option`,
            nodeType: "command",
          };
        if (f !== "-f" && f !== "-v")
          return {
            kind: "too-complex",
            reason: `'unset ${f}' (wrapped form) \u2014 flag other than -f/-v (zsh -m pattern-unset, bash -n nameref) cannot be statically modelled`,
            nodeType: "command",
          };
        if (f === "-f") u = true;
        continue;
      }
      if (((d = true), !/^[A-Za-z_][A-Za-z0-9_]*$/.test(f)))
        return {
          kind: "too-complex",
          reason: `'unset ${f}' (wrapped form) \u2014 non-identifier operand may pathname-expand; cannot statically know which var is unset`,
          nodeType: "command",
        };
      if (u) continue;
      if (kRe(f))
        return {
          kind: "too-complex",
          reason: `'unset' targets shell variable ${f} (exec-influencing / integer-attr / IFS / PS4)`,
          nodeType: "command",
        };
      n.set(f, "");
    }
  } else if (c === "print")
    for (let u = 1; u < a.length; u++) {
      let d = a[u];
      if (d === "--" || d === "-" || !d.startsWith("-")) break;
      let p = false;
      for (let f = 1; f < d.length; f++) {
        let m = d[f];
        if (m === "v") {
          let g = f < d.length - 1 ? d.slice(f + 1) : a[u + 1];
          if (g) i(g);
          p = f === d.length - 1;
          break;
        }
        if (Orp.has("-" + m)) {
          p = f === d.length - 1;
          break;
        }
      }
      if (p) u++;
    }
  else if (c === "set")
    for (let u = 1; u < a.length; u++) {
      let d = a[u];
      if (d === "--" || !/^[-+]/.test(d)) break;
      let p = d.indexOf("A", 1);
      if (p === -1) {
        if (d.endsWith("o")) u++;
        continue;
      }
      if (p < d.length - 1) i(d.slice(p + 1));
      else if (a[u + 1]) i(a[u + 1]);
      break;
    }
  else if (c === "mapfile" || c === "readarray") {
    let u = false;
    for (let d = 1; d < a.length; d++) {
      let p = a[d];
      if (p.startsWith("-")) {
        if (/^-[dnOsuCc]$/.test(p)) d++;
        continue;
      }
      (i(p), (u = true));
    }
    if (!u) o.push("MAPFILE");
  } else if (!l && (c === "cd" || c === "chdir" || c === "pushd" || c === "popd")) {
    let u = false;
    if (c === "pushd" || c === "popd")
      for (let d = 1; d < a.length; d++) {
        let p = a[d];
        if (p === "--") break;
        if (/^-[a-zA-Z]*n[a-zA-Z]*$/.test(p)) {
          u = true;
          break;
        }
        if (c === "popd" && (/^\+0*[1-9]/.test(p) || /^-0+$/.test(p))) {
          u = true;
          break;
        }
      }
    if (!u) (n.set("PWD", VAR_PLACEHOLDER), n.set("OLDPWD", VAR_PLACEHOLDER));
    if (c === "pushd" || c === "popd")
      (n.set("DIRSTACK", VAR_PLACEHOLDER), n.set("dirstack", VAR_PLACEHOLDER));
  }
  if (c !== void 0 && t.length > 0 && bra.has(c)) for (let u of t) i(u.name);
  for (let u of o) {
    if (kRe(u))
      return {
        kind: "too-complex",
        reason: `'${c ?? t[0]?.name}' writes shell variable ${u} (exec-influencing / integer-attr / IFS) \u2014 value cannot be statically verified`,
        nodeType: "command",
      };
    n.set(u, VAR_PLACEHOLDER);
  }
  return (r.push(...s), null);
}
function walkCommand(node, extraRedirects, innerCommands, varScope, o) {
  let argv = [],
    i = [],
    a = [...extraRedirects];
  for (let u of node.children) {
    if (!u) continue;
    switch (u.type) {
      case "variable_assignment": {
        if (i.length > 0) {
          let p = Tra(u, new Set(i.map((f) => f.name)));
          if (p !== null)
            return {
              kind: "too-complex",
              reason: `Env-prefix value references \`$${p}\` assigned by an earlier env-prefix in the same command \u2014 runtime sees the earlier assignment, static analysis does not`,
              nodeType: "variable_assignment",
            };
        }
        let d = walkVariableAssignment(u, innerCommands, varScope, o);
        if ("kind" in d) return d;
        if (wra(d.name, d.value))
          return {
            kind: "too-complex",
            reason: `${d.name} has integer attribute \u2014 env-prefix arith-evals value, executing subscript command substitution`,
            nodeType: "variable_assignment",
          };
        i.push({
          name: d.name,
          value: d.value,
        });
        break;
      }
      case "command_name": {
        let d = u.children[0] ?? u;
        if (bI()) {
          if (d.type === "simple_expansion" || d.type === "expansion") return tooComplex(d);
          if ((d.type === "string" || d.type === "concatenation") && Hra(d)) return tooComplex(d);
        }
        let p = walkArgument(d, innerCommands, varScope, o);
        if (typeof p !== "string") return p;
        argv.push(p);
        break;
      }
      case "word":
      case "number":
      case "raw_string":
      case "string":
      case "concatenation":
      case "arithmetic_expansion": {
        let d = walkArgument(u, innerCommands, varScope, o);
        if (typeof d !== "string") return d;
        if (/^--?[\nA-Za-z0-9_]/.test(d) && Bp(d))
          return {
            kind: "too-complex",
            reason: "Argument starting with `-` contains runtime-determined content",
            nodeType: u.type,
          };
        argv.push(d);
        break;
      }
      case "simple_expansion": {
        let d = resolveSimpleExpansion(u, varScope, false);
        if (typeof d !== "string") return d;
        argv.push(d);
        break;
      }
      case "file_redirect": {
        let d = walkFileRedirect(u, innerCommands, varScope, o);
        if ("kind" in d) return d;
        a.push(d);
        break;
      }
      case "herestring_redirect": {
        let d = xrp(u, innerCommands, varScope, o);
        if (d) return d;
        break;
      }
      default:
        return tooComplex(u);
    }
  }
  {
    let u = krp(argv, i, varScope, o);
    if (u) return u;
  }
  let l = (u, d) =>
      u === "" || /["'\\ \t\n$`;|&<>(){}#]/.test(u) || (d === 0 && u.includes("="))
        ? `'${u.replaceAll("'", "'\\''")}'`
        : u,
    c =
      /\$[A-Za-z_]/.test(node.text) ||
      node.text.includes(`
`)
        ? [...i.map((u) => `${u.name}=${l(u.value)}`), ...argv.map((u, d) => l(u, d))].join(" ")
        : node.text;
  return {
    kind: "simple",
    commands: [
      {
        argv: argv,
        envVars: i,
        redirects: a,
        text: c,
      },
    ],
    bareAssignmentNames: [],
  };
}
function aoo(e, t, n, r) {
  let o = new Map(n);
  for (let s of e.children) {
    if (!s) continue;
    if (s.type === "$(" || s.type === "`" || s.type === ")") continue;
    let i = collectCommands(s, t, o, r);
    if (i) return i;
  }
  return null;
}
function walkArgument(node, innerCommands, varScope, r) {
  if (!node)
    return {
      kind: "too-complex",
      reason: "Null argument node",
    };
  switch (node.type) {
    case "word": {
      if (qro.test(node.text))
        return {
          kind: "too-complex",
          reason: "Word contains brace expansion syntax",
          nodeType: "word",
          differential: true,
        };
      if (Vro.test(node.text) || zro.test(node.text))
        return {
          kind: "too-complex",
          reason: "Brace body contains backslash-escaped brace",
          nodeType: "word",
          differential: true,
        };
      if (ooo.test(node.text))
        return {
          kind: "too-complex",
          reason: "Word contains unescaped ` or $ \u2014 parser missed expansion",
          nodeType: "word",
          differential: true,
        };
      if (soo.test(node.text))
        return {
          kind: "too-complex",
          reason: "Word contains unescaped quote \u2014 parser absorbed quote into brace-body word",
          nodeType: "word",
        };
      return node.text.replace(/\\(.)/g, "$1");
    }
    case "number":
      if (node.children.length > 0)
        return {
          kind: "too-complex",
          reason: "Number node contains expansion (NN# arithmetic base syntax)",
          nodeType: node.children[0]?.type,
        };
      return node.text;
    case "raw_string":
      return Ara(node.text);
    case "string":
      return walkString(node, innerCommands, varScope, r);
    case "concatenation": {
      if (qro.test(node.text))
        return {
          kind: "too-complex",
          reason: "Brace expansion",
          nodeType: "concatenation",
          differential: true,
        };
      if (Vro.test(node.text) || zro.test(node.text))
        return {
          kind: "too-complex",
          reason: "Brace body contains backslash-escaped brace",
          nodeType: "concatenation",
          differential: true,
        };
      let o = "",
        s = false,
        i = node.startIndex;
      for (let a = 0; a < node.children.length; a++) {
        let l = node.children[a];
        if (!l) continue;
        if (l.startIndex > i)
          return {
            kind: "too-complex",
            reason:
              "Concatenation has unparsed bytes between children \u2014 parser dropped content that shell will see",
            nodeType: "concatenation",
          };
        if (((i = l.endIndex), l.type === "word" && l.text.includes("{"))) s = true;
        if (
          (l.type === "simple_expansion" || l.type === "expansion") &&
          (node.children[a + 1]?.text.startsWith("[") ||
            /^:[a-zA-Z&]/.test(node.children[a + 1]?.text ?? ""))
        )
          return {
            kind: "too-complex",
            reason: "zsh $name[expr] / $name:mod in bare concatenation \u2014 recursive eval",
            nodeType: "concatenation",
            differential: true,
          };
        let c = walkArgument(l, innerCommands, varScope, r);
        if (typeof c !== "string") return c;
        o += c;
      }
      if (s && (o.includes(",") || o.includes("..")))
        return {
          kind: "too-complex",
          reason: "Brace expansion (unquoted `{` in concatenation with `,`/`..`)",
          nodeType: "concatenation",
        };
      if (EOn.test(o))
        return {
          kind: "too-complex",
          reason: "zsh ~[ dynamic directory syntax (post-collapse)",
          nodeType: "concatenation",
          differential: true,
        };
      if (AOn.test(o))
        return {
          kind: "too-complex",
          reason: "zsh =cmd expansion (post-collapse)",
          nodeType: "concatenation",
          differential: true,
        };
      return o;
    }
    case "arithmetic_expansion": {
      let o = walkArithmetic(node);
      if (o) return o;
      return VAR_PLACEHOLDER;
    }
    case "simple_expansion":
      return resolveSimpleExpansion(node, varScope, false);
    default:
      return tooComplex(node);
  }
}
function walkString(node, innerCommands, varScope, r) {
  let o = "",
    s = -1,
    i = false,
    a = false,
    l = false;
  for (let c of node.children) {
    if (!c) continue;
    if (s !== -1 && c.startIndex > s) {
      let u = Buffer.from(node.text, "utf8")
        .subarray(s - node.startIndex, c.startIndex - node.startIndex)
        .toString("utf8");
      if (u.includes("`"))
        return {
          kind: "too-complex",
          reason:
            "Unanalyzable backtick body in double-quoted string gap \u2014 shell-evaluated value unknown",
          nodeType: "string",
          differential: true,
        };
      if (u.length > 0) ((o += u), (a = true));
    }
    switch (((s = c.endIndex), c.type)) {
      case '"':
        s = c.endIndex;
        break;
      case "string_content":
        ((o += c.text.replace(/\\\n/g, "").replace(/\\([$`"\\])/g, "$1")), (a = true));
        break;
      case ira: {
        let u = node.children[node.children.indexOf(c) + 1];
        if (u?.type === "string_content") {
          if (u.text.startsWith("["))
            return {
              kind: "too-complex",
              reason:
                "Legacy $[...] arithmetic inside double-quotes \u2014 recursive subscript eval",
              nodeType: "string",
              differential: true,
            };
          if (/^[+^=~]/.test(u.text))
            return {
              kind: "too-complex",
              reason:
                "zsh $+/$^/$=/$~ prefix-flag expansion \u2014 value defeats downstream content checks",
              nodeType: "string",
              differential: true,
            };
        }
        ((o += ira), (a = true));
        break;
      }
      case "command_substitution": {
        let u = extractSafeCatHeredoc(c);
        if (u === "DANGEROUS") return tooComplex(c);
        if (u !== null) {
          let p = u.replace(/\n+$/, "");
          if (
            p.includes(`
`)
          ) {
            if (/^--?[A-Za-z0-9]/.test(o + p))
              return {
                kind: "too-complex",
                reason: "cat-heredoc body would make the argument start with option syntax",
                nodeType: "command_substitution",
              };
            ((o +=
              `
` + CMDSUB_PLACEHOLDER),
              (a = true));
            break;
          }
          ((o += p), (a = true));
          break;
        }
        let d = aoo(c, innerCommands, varScope, r);
        if (d) return d;
        ((o += CMDSUB_PLACEHOLDER), (i = true));
        break;
      }
      case "simple_expansion": {
        let u = resolveSimpleExpansion(c, varScope, true);
        if (typeof u !== "string") return u;
        {
          let d = node.children[node.children.indexOf(c) + 1],
            p = c.children.some((f) => f?.type === "special_variable_name");
          if (
            d?.type === "string_content" &&
            (d.text.startsWith("[") ||
              /^:[a-zA-Z&]/.test(d.text) ||
              (p && /^\w*(\[|:[a-zA-Z&])/.test(d.text)))
          )
            return {
              kind: "too-complex",
              reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval',
              nodeType: "string",
              differential: true,
            };
        }
        if (Bp(u)) i = true;
        else if (u !== "") a = true;
        else l = true;
        o += u;
        break;
      }
      case "arithmetic_expansion": {
        let u = walkArithmetic(c);
        if (u) return u;
        ((o += VAR_PLACEHOLDER), (i = true));
        break;
      }
      default:
        return tooComplex(c);
    }
  }
  if (i) {
    if ([...o.replaceAll(CMDSUB_PLACEHOLDER, "").replaceAll(VAR_PLACEHOLDER, "")].length <= 1)
      return tooComplex(node);
  }
  if (!a && !i && !l && node.text.length > 2) {
    let c = node.text.slice(1, -1);
    if (c.includes("`") || c.includes("$("))
      return {
        kind: "too-complex",
        reason: "Delimiters-only string node contains unparsed command substitution",
        nodeType: "string",
        differential: true,
      };
    return c;
  }
  return o;
}
function walkArithmetic(node) {
  for (let t of node.children) {
    if (!t) continue;
    if (t.children.length === 0) {
      if (!Lrp.test(t.text))
        return {
          kind: "too-complex",
          reason: `Arithmetic expansion references variable or non-literal: ${t.text}`,
          nodeType: "arithmetic_expansion",
        };
      continue;
    }
    switch (t.type) {
      case "binary_expression":
      case "unary_expression":
      case "ternary_expression":
      case "parenthesized_expression": {
        let n = walkArithmetic(t);
        if (n) return n;
        break;
      }
      default:
        return tooComplex(t);
    }
  }
  return null;
}
function extractSafeCatHeredoc(subNode) {
  let t = null;
  for (let o of subNode.children) {
    if (!o) continue;
    if (o.type === "$(" || o.type === ")") continue;
    if (o.type === "redirected_statement" && t === null) t = o;
    else return null;
  }
  if (!t) return null;
  let n = false,
    r = null;
  for (let o of t.children) {
    if (!o) continue;
    if (o.type === "command") {
      let s = o.children.filter((a) => a);
      if (s.length !== 1) return null;
      let i = s[0];
      if (i?.type !== "command_name" || i.text !== "cat") return null;
      n = true;
    } else if (o.type === "heredoc_redirect") {
      if (walkHeredocRedirect(o) !== null) return null;
      for (let s of o.children) {
        if (s?.type === "<<-") return null;
        if (s?.type === "heredoc_body") r = s.text;
      }
    } else return null;
  }
  if (!n || r === null) return null;
  if (eoo.test(r)) return "DANGEROUS";
  if (/\bsystem\s*\(/.test(r)) return "DANGEROUS";
  return r;
}
function walkVariableAssignment(node, innerCommands, varScope, r) {
  let o = null,
    value = "",
    i = false;
  for (let a of node.children) {
    if (!a) continue;
    if (a.type === "variable_name") o = a.text;
    else if (a.type === "=" || a.type === "+=") {
      i = a.type === "+=";
      continue;
    } else if (a.type === "command_substitution") {
      let l = aoo(a, innerCommands, varScope, r);
      if (l) return l;
      value = CMDSUB_PLACEHOLDER;
    } else if (a.type === "simple_expansion") {
      let l = resolveSimpleExpansion(a, varScope, true);
      if (typeof l !== "string") return l;
      value = l;
    } else {
      let l = walkArgument(a, innerCommands, varScope, r);
      if (typeof l !== "string") return l;
      value = l;
    }
  }
  if (o === null)
    return {
      kind: "too-complex",
      reason: "Variable assignment without name",
      nodeType: "variable_assignment",
    };
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(o))
    return {
      kind: "too-complex",
      reason: `Invalid variable name (bash treats as command): ${o}`,
      nodeType: "variable_assignment",
    };
  if (o === "IFS")
    return {
      kind: "too-complex",
      reason: "IFS assignment changes word-splitting \u2014 cannot model statically",
      nodeType: "variable_assignment",
    };
  if (o === "PS4" || o === "PROMPT4") {
    if (i)
      return {
        kind: "too-complex",
        reason: "PS4 += cannot be statically verified \u2014 combine into a single PS4= assignment",
        nodeType: "variable_assignment",
      };
    if (Bp(value))
      return {
        kind: "too-complex",
        reason: "PS4 value derived from cmdsub/variable \u2014 runtime unknowable",
        nodeType: "variable_assignment",
      };
    if (!/^[A-Za-z0-9 _+:./=[\]-]*$/.test(value.replace(/\$\{[A-Za-z_][A-Za-z0-9_]*\}/g, "")))
      return {
        kind: "too-complex",
        reason:
          "PS4 value outside safe charset \u2014 only ${VAR} refs and [A-Za-z0-9 _+:.=/[]-] allowed",
        nodeType: "variable_assignment",
      };
  }
  if (value.includes("~"))
    return {
      kind: "too-complex",
      reason: "Tilde in assignment value \u2014 bash may expand at assignment time",
      nodeType: "variable_assignment",
    };
  return {
    name: o,
    value: value,
    isAppend: i,
  };
}
function resolveSimpleExpansion(node, varScope, insideString) {
  let r = null,
    o = false;
  for (let i of node.children) {
    if (i?.type === "variable_name") {
      r = i.text;
      break;
    }
    if (i?.type === "special_variable_name") {
      ((r = i.text), (o = true));
      break;
    }
  }
  if (r === null) return tooComplex(node);
  let s = varScope.get(r);
  if (s !== void 0) {
    if (Era.has(r))
      return insideString && Wro.has(r) && r !== "BASHPID" ? VAR_PLACEHOLDER : tooComplex(node);
    if (Bp(s)) {
      if (!insideString) return tooComplex(node);
      return s;
    }
    if (!insideString) {
      if (s === "") return tooComplex(node);
      if (ora.test(s)) return tooComplex(node);
    }
    return s;
  }
  if (r === "HOME") {
    let i = dra.homedir();
    if (!insideString && (i === "" || ora.test(i))) return tooComplex(node);
    return i;
  }
  if (insideString) {
    if (Wro.has(r)) return VAR_PLACEHOLDER;
    if (o && (Erp.has(r) || /^[0-9]+$/.test(r))) return VAR_PLACEHOLDER;
  }
  return tooComplex(node);
}
function Fro(e, t) {
  T2t(t, e);
}
function ara(e, t) {
  let n = () => {
    for (let r of t.keys()) t.set(r, VAR_PLACEHOLDER);
  };
  for (let r of e) {
    if (
      !r ||
      r.type === "unset" ||
      r.type === "file_redirect" ||
      r.type === "heredoc_redirect" ||
      r.type === "herestring_redirect"
    )
      continue;
    if (r.type === "variable_name") {
      t.set(r.text.replace(/\\/g, ""), VAR_PLACEHOLDER);
      continue;
    }
    if (r.type === "word") {
      if (r.text.startsWith("-")) {
        if (r.text === "--" || /^-[fvn]+$/.test(r.text)) continue;
        n();
        continue;
      }
      if (/^\\?[A-Za-z_][A-Za-z0-9_]*$/.test(r.text)) {
        t.set(r.text.replace(/^\\/, ""), VAR_PLACEHOLDER);
        continue;
      }
    }
    n();
  }
}
function Qro(e) {
  if (!e) return null;
  switch (e.type) {
    case "word":
    case "number":
      return e.text.replace(/\\(.)/g, "$1");
    case "raw_string":
      return e.text.slice(1, -1);
    case "string": {
      let t = e.children.filter((n) => n && n.type !== '"');
      if (t.length === 0) return "";
      if (t.length === 1 && t[0]?.type === "string_content") return t[0].text;
      return null;
    }
    case "concatenation": {
      let t = "";
      for (let n of e.children) {
        let r = Qro(n);
        if (r === null) return null;
        t += r;
      }
      return t;
    }
    default:
      return null;
  }
}
function T2t(e, t) {
  if (
    e.type === "function_definition" ||
    e.type === "subshell" ||
    e.type === "command_substitution" ||
    e.type === "process_substitution"
  )
    return;
  if (e.type === "pipeline") {
    let n = null;
    for (let r of e.children) if (r && !Gro.has(r.type)) n = r;
    if (n) T2t(n, t);
    return;
  }
  if (e.type === "list" || e.type === "program") {
    let n = e.children;
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      if (!o || Gro.has(o.type)) continue;
      let s = r + 1;
      while (s < n.length && !n[s]) s++;
      if (n[s]?.type === "&") continue;
      T2t(o, t);
    }
    return;
  }
  if (e.type === "variable_assignment") {
    for (let n of e.children)
      if (n?.type === "variable_name") {
        t.set(n.text, VAR_PLACEHOLDER);
        break;
      }
  }
  if (e.type === "for_statement") {
    for (let n of e.children)
      if (n?.type === "variable_name") {
        t.set(n.text, VAR_PLACEHOLDER);
        break;
      }
  }
  if (e.type === "unset_command") ara(e.children, t);
  if (e.type === "command") {
    let n,
      r,
      o = [],
      s = [],
      i = false;
    for (let p of e.children) {
      if (!p) continue;
      if (p.type === "command_name") ((r = p), (n = Qro(p.children[0] ?? p) ?? void 0), (i = true));
      else if (
        !i ||
        p.type === "file_redirect" ||
        p.type === "herestring_redirect" ||
        p.type === "heredoc_redirect"
      );
      else (o.push(Qro(p) ?? ""), s.push(p));
    }
    while (n !== void 0 && (Xro.has(n) || n === "!")) {
      while (o.length > 0) {
        let p = o[0];
        if (/^-[-pvV]*$/.test(p)) (o.shift(), s.shift());
        else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(p)) {
          let f = p.match(/^[A-Za-z_][A-Za-z0-9_]*/)[0];
          (t.set(f, VAR_PLACEHOLDER), o.shift(), s.shift());
        } else break;
      }
      ((n = o.shift()), s.shift());
    }
    let a = o,
      l = (p) => {
        if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(p)) t.set(p, VAR_PLACEHOLDER);
      };
    if (n === "read") {
      t.set("REPLY", VAR_PLACEHOLDER);
      let p = 0,
        f = false;
      while (p < a.length) {
        let m = a[p];
        if (!f && m === "--") {
          ((f = true), p++);
          continue;
        }
        if (!f && m.startsWith("-")) {
          if (fct.has(m)) {
            p += 2;
            continue;
          }
          let g = false;
          for (let h = 1; h < m.length; h++) {
            let y = m[h];
            if (y === "a" || y === "A") {
              (l(h < m.length - 1 ? m.slice(h + 1) : (a[p + 1] ?? "")), (g = h === m.length - 1));
              break;
            }
            if (fct.has("-" + y)) {
              g = h === m.length - 1;
              break;
            }
          }
          p += g ? 2 : 1;
          continue;
        }
        (l(m), p++);
      }
    } else if (n === "mapfile" || n === "readarray") {
      t.set("MAPFILE", VAR_PLACEHOLDER);
      for (let p = 0; p < a.length; p++) {
        let f = a[p];
        if (f.startsWith("-")) {
          if (/^-[dnOsuCc]$/.test(f)) p++;
          continue;
        }
        l(f);
      }
    } else if (n === "unset") ara(s, t);
    let c = r?.children[0],
      u = c?.type === "word" ? c.text.replace(/\\(.)/g, "$1") : void 0,
      d = u !== void 0 && !bra.has(u) && !Xro.has(u) && !_ra.has(u);
    for (let p of e.children) if (p && (p.type !== "variable_assignment" || !d)) T2t(p, t);
    return;
  }
  if (e.type === "declaration_command") {
    for (let n of e.children)
      if (
        n?.type === "string" ||
        n?.type === "raw_string" ||
        n?.type === "word" ||
        n?.type === "number" ||
        n?.type === "concatenation" ||
        n?.type === "variable_name"
      ) {
        let r = n.text.replace(/['"\\]/g, ""),
          o = /^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(r);
        if (o) t.set(o[1], VAR_PLACEHOLDER);
        else {
          let s = r.indexOf("=");
          if (s > 0 && r.lastIndexOf("$", s - 1) !== -1)
            for (let i of [...t.keys()]) t.set(i, VAR_PLACEHOLDER);
        }
      }
  }
  for (let n of e.children) if (n) T2t(n, t);
}
function H2t(e, t) {
  for (let [n, r] of t) {
    let o = e.get(n);
    if (o !== void 0 && o !== r) e.set(n, VAR_PLACEHOLDER);
  }
  for (let n of e.keys()) if (!t.has(n)) e.set(n, VAR_PLACEHOLDER);
}
function jro(e, t, n = false) {
  if (n) {
    e.set(t.name, VAR_PLACEHOLDER);
    return;
  }
  if (t.isAppend && !e.has(t.name)) return;
  let r = e.get(t.name);
  if (r !== void 0 && r !== t.value && !t.isAppend && !Bp(t.value)) {
    e.set(t.name, VAR_PLACEHOLDER);
    return;
  }
  let o = t.isAppend ? (r ?? "") + t.value : t.value;
  e.set(t.name, o);
}
function Ara(e) {
  return e.slice(1, -1);
}
function Hra(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.type === "simple_expansion" || t.type === "expansion") return true;
    if (Hra(t)) return true;
  }
  return false;
}
function Prp(e) {
  if (e === "~" || e.startsWith("~/")) return "HOME";
  if (e === "~+" || e.startsWith("~+/")) return "PWD";
  if (e === "~-" || e.startsWith("~-/")) return "OLDPWD";
  return null;
}
function Tra(e, t) {
  let n = e.type === "variable_assignment";
  for (let r of e.children) {
    if (!r) continue;
    if (r.type === "variable_name") {
      if (n) continue;
      if (t.has(r.text)) return r.text;
    }
    if (r.type === "word") {
      let s = Prp(r.text);
      if (s !== null && t.has(s)) return s;
    }
    let o = Tra(r, t);
    if (o !== null) return o;
  }
  return null;
}
function tooComplex(node) {
  return {
    kind: "too-complex",
    reason:
      node.type === "ERROR"
        ? "Parse error"
        : mra.has(node.type)
          ? `Contains ${node.type}`
          : `Contains shell syntax (${node.type}) that cannot be statically analyzed`,
    nodeType: node.type,
  };
}
function vra(e) {
  let t = e.replace(/^.*[\\/]/, "");
  return vOn.has(e) || TOn.has(e) || v2t.has(e) || v2t.has(t) || t === "rm" || t === "rmdir";
}
function wra(e, t) {
  if (!moo.has(e)) return false;
  if (t.includes("[") || t.includes("`") || /\$\(/.test(t) || Bp(t)) return true;
  if (/[A-Za-z_]/.test(t)) return true;
  return false;
}
function Zro(e) {
  let t = e.toLowerCase();
  return Mrp.has(t) || t.startsWith("ld_") || t.startsWith("dyld_") || t.startsWith("bash_func_");
}
function kRe(e) {
  return Zro(e) || e === "IFS" || e === "PS4" || e === "PROMPT4" || moo.has(e);
}
function checkSemantics(commands) {
  let t = null;
  for (let n of commands) {
    let r = n.argv;
    for (;;) {
      let a = r[0]?.replace(/^.*[\\/]/, ""),
        l =
          a === "time" ||
          a === "nohup" ||
          a === "timeout" ||
          a === "nice" ||
          a === "stdbuf" ||
          a === "env" ||
          a === "command"
            ? a
            : r[0];
      if (l === "time" || l === "nohup") r = r.slice(1);
      else if (l === "timeout") {
        let c = 1;
        while (c < r.length) {
          let u = r[c];
          if (u === "--foreground" || u === "--preserve-status" || u === "--verbose") c++;
          else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(u)) c++;
          else if (
            (u === "--kill-after" || u === "--signal") &&
            r[c + 1] &&
            /^[A-Za-z0-9_.+-]+$/.test(r[c + 1])
          )
            c += 2;
          else if (u.startsWith("--"))
            return {
              ok: false,
              reason: `timeout with ${u} flag cannot be statically analyzed`,
            };
          else if (u === "-v") c++;
          else if ((u === "-k" || u === "-s") && r[c + 1] && /^[A-Za-z0-9_.+-]+$/.test(r[c + 1]))
            c += 2;
          else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(u)) c++;
          else if (u.startsWith("-"))
            return {
              ok: false,
              reason: `timeout with ${u} flag cannot be statically analyzed`,
            };
          else break;
        }
        if (r[c] && /^\d+(?:\.\d+)?[smhd]?$/.test(r[c])) r = r.slice(c + 1);
        else if (r[c])
          return {
            ok: false,
            reason: `timeout duration '${r[c]}' cannot be statically analyzed`,
          };
        else break;
      } else if (l === "nice") {
        if (r[1] === "-n" && r[2] && /^-?\d+$/.test(r[2])) r = r.slice(3);
        else if (r[1] && /^-\d+$/.test(r[1])) r = r.slice(2);
        else if (r[1] && (/[$(`]/.test(r[1]) || Bp(r[1])))
          return {
            ok: false,
            reason: `nice argument '${r[1]}' contains expansion \u2014 cannot statically determine wrapped command`,
          };
        else r = r.slice(1);
      } else if (l === "env") {
        let c = 1;
        while (c < r.length) {
          let u = r[c];
          if (u.includes("=") && !u.startsWith("-")) c++;
          else if (u === "-i" || u === "-0" || u === "-v") c++;
          else if (u === "-u" && r[c + 1]) c += 2;
          else if (u.startsWith("-"))
            return {
              ok: false,
              reason: `env with ${u} flag cannot be statically analyzed`,
            };
          else break;
        }
        if (c < r.length) r = r.slice(c);
        else break;
      } else if (l === "stdbuf") {
        let c = 1;
        while (c < r.length) {
          let u = r[c];
          if (_rp.test(u) && r[c + 1]) c += 2;
          else if (brp.test(u)) c++;
          else if (Srp.test(u)) c++;
          else if (u.startsWith("-"))
            return {
              ok: false,
              reason: `stdbuf with ${u} flag cannot be statically analyzed`,
            };
          else break;
        }
        if (c > 1 && c < r.length) r = r.slice(c);
        else break;
      } else if (l === "command") {
        let c = 1,
          u = false;
        while (c < r.length && r[c].startsWith("-") && r[c] !== "--") {
          let d = r[c];
          if (!/^-[pvV]+$/.test(d))
            return {
              ok: false,
              reason: `command with ${d} flag cannot be statically analyzed`,
            };
          if (d.includes("v") || d.includes("V")) u = true;
          c++;
        }
        if (r[c] === "--") c++;
        if (u || c >= r.length) break;
        r = r.slice(c);
      } else if (r[0] === "builtin" || r[0] === "noglob") {
        let c = r[0] === "builtin" && r[1] === "--" ? 2 : 1;
        if (c < r.length) r = r.slice(c);
        else break;
      } else break;
    }
    let o = r[0];
    if (o === void 0) continue;
    if (o === "")
      return {
        ok: false,
        reason: "Empty command name \u2014 argv[0] may not reflect what bash runs",
      };
    if (o.includes(CMDSUB_PLACEHOLDER) || o.includes(VAR_PLACEHOLDER))
      return {
        ok: false,
        reason: "Command name is runtime-determined (placeholder argv[0])",
      };
    if (o.startsWith("-") || o.startsWith("|") || o.startsWith("&"))
      return {
        ok: false,
        reason: "Command appears to be an incomplete fragment",
      };
    let s = uoo[o],
      i = o === "test" || o === "[" || o === "[[";
    if (s !== void 0)
      for (let a = 1; a < r.length; a++) {
        let l = r[a],
          c = r[a + 1];
        if (s.has(l) && c !== void 0 && (c.includes("[") || Bp(c)))
          return {
            ok: false,
            reason: `'${o} ${l}' operand contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`,
          };
        if (i) {
          if (l === "-t" && c !== void 0 && !BWe.test(c))
            return {
              ok: false,
              reason: `'${o} -t' operand is non-numeric \u2014 zsh arith-evals identifiers (may run $(cmd))`,
            };
          continue;
        }
        if (l.length > 2 && l[0] === "-" && l[1] !== "-" && !l.includes("[")) {
          for (let u of s)
            if (u.length === 2 && l.includes(u[1])) {
              let d = r[a + 1];
              if (d !== void 0 && (d.includes("[") || Bp(d)))
                return {
                  ok: false,
                  reason: `'${o} ${u}' (combined in '${l}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`,
                };
            }
        }
        if (l.length > 2 && l[0] === "-" && o !== "read")
          for (let u of s) {
            if (u.length !== 2) continue;
            let d = l.indexOf(u[1], 1);
            if (d === -1 || d === l.length - 1) continue;
            let p = l.slice(d + 1);
            if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(p) || Bp(p))
              return {
                ok: false,
                reason: `'${o} ${u}' (fused in '${l}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`,
              };
          }
      }
    if (i)
      for (let a = 2; a < r.length; a++) {
        if (!gct.has(r[a])) continue;
        for (let l of [r[a - 1], r[a + 1]]) {
          if (l === void 0) continue;
          if (l.includes("[") || !BWe.test(l))
            return {
              ok: false,
              reason: `'${o} ... ${r[a]} ...' operand is non-numeric \u2014 \`[[\` arithmetically evaluates identifiers/subscripts (may run $(cmd))`,
            };
        }
      }
    if (doo.has(o)) {
      let a = false;
      for (let l = 1; l < r.length; l++) {
        let c = r[l];
        if (a !== false) {
          let u = a;
          if (((a = false), u === "numeric" && !ura.test(c)))
            return {
              ok: false,
              reason: `'read ${r[l - 1]}' operand '${c}' is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`,
            };
          if (
            u === "prompt" &&
            ($rp.test(c) ||
              (c[0] === "-" && /[A-Za-z_][A-Za-z0-9_]*\[/.test(c)) ||
              c.includes(CMDSUB_PLACEHOLDER))
          )
            return {
              ok: false,
              reason: `'read ${r[l - 1]}' operand '${c}' is a subscripted NAME, dash-prefixed with a subscript, or runtime-determined \u2014 zsh -p takes no operand; may arith-eval the subscript and run $(cmd)`,
            };
          continue;
        }
        if (c[0] === "-") {
          if (o === "read") {
            if (cra.has(c)) a = "numeric";
            else if (c === "-p") a = "prompt";
            else if (fct.has(c)) a = "string";
            else if (c.length > 2)
              for (let u = 1; u < c.length; u++) {
                let d = "-" + c[u],
                  p = cra.has(d);
                if (p || fct.has(d)) {
                  if (u === c.length - 1) a = p ? "numeric" : d === "-p" ? "prompt" : "string";
                  else if (p && !ura.test(c.slice(u + 1)))
                    return {
                      ok: false,
                      reason: `'read ${d}' (fused in '${c}') operand is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`,
                    };
                  else if (d === "-p") {
                    let f = c.slice(u + 1);
                    if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(f) || f.includes(CMDSUB_PLACEHOLDER))
                      return {
                        ok: false,
                        reason: `'read -p' fused remainder '${f}' contains a subscripted identifier or cmdsub \u2014 on zsh (-p is no-arg) this may reach matheval via a following option and run $(cmd)`,
                      };
                  }
                  break;
                }
              }
          }
          continue;
        }
        if (c.includes("[") || Bp(c))
          return {
            ok: false,
            reason: `'${o}' positional NAME '${c}' contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`,
          };
      }
    }
    if (I2t.has(o)) {
      let a = o === "declare" || o === "typeset" || o === "local",
        l = a || o === "export" || o === "readonly";
      for (let c = 1; c < r.length; c++) {
        let u = r[c];
        if (a && /^[+-].*[niaAEF]/.test(u))
          return {
            ok: false,
            reason: `'${o}' with -n/-i/-a/-A/-E/-F flag (reached as plain command via wrapper/quote) changes assignment eval semantics`,
          };
        if (lra.has(o) && /^[+-].*[iEF]/.test(u))
          return {
            ok: false,
            reason: `'${o}' with -i/-E/-F flag (reached as plain command via wrapper/quote) \u2014 zsh bin_typeset mathevals the RHS`,
          };
        if ((l || o === "private") && /^[+-].*m/.test(u))
          return {
            ok: false,
            reason: `'${o}' with -m/+m flag (reached as plain command via wrapper/quote) \u2014 zsh pattern-assigns every matching variable`,
          };
        if (lra.has(o) && /^[+-].*T/.test(u))
          return {
            ok: false,
            reason: `'${o} -T' creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`,
          };
        let d = u.includes("[") && /[$`]/.test(u);
        if (d || Bp(u))
          return {
            ok: false,
            reason: d
              ? `'${o}' operand '${bOn(u)}' contains array subscript with expansion \u2014 shell arith-evals $(cmd) in subscripts`
              : `'${o}' operand '${bOn(u)}' is runtime-determined and may carry an array subscript \u2014 shell arith-evals $(cmd) in subscripts`,
          };
        if ((o === "float" || o === "integer") && !/^[+-]/.test(u))
          return {
            ok: false,
            reason: `zsh '${o}' operand \u2014 implicit typeset -E/-i arithmetically evaluates the (existing or assigned) value`,
          };
      }
    }
    if (o === "printf")
      for (let a = 1; a < r.length; a++) {
        let l = r[a],
          c = l.includes("[") && /[$`]/.test(l);
        if (c || Bp(l))
          return {
            ok: false,
            reason: c
              ? `printf operand '${bOn(l)}' contains array subscript with expansion \u2014 zsh arith-evals %d/%i operands (may run $(cmd))`
              : `printf operand '${bOn(l)}' is runtime-determined and may carry an array subscript \u2014 zsh arith-evals %d/%i operands (may run $(cmd))`,
          };
      }
    if (o === "set")
      for (let a = 1; a < r.length; a++) {
        let l = r[a];
        if (l === "--") break;
        if (!/^[-+]/.test(l)) continue;
        for (let c = 1; c < l.length; c++) {
          let u = l[c];
          if (u === "o") {
            let d = c < l.length - 1 ? l.slice(c + 1) : r[a + 1];
            if (d !== void 0 && d !== "" && !poo.has(d.toLowerCase().replace(/[_-]/g, "")))
              return {
                ok: false,
                reason: `'set -o/+o ${d}' changes shell parsing/globbing state \u2014 can enable globsubst/extendedglob and defeat static analysis`,
              };
            if (c === l.length - 1) a++;
            break;
          }
          if (u === "A") break;
          if (!foo.has(u))
            return {
              ok: false,
              reason: `'set ${l[0]}${u}' changes shell option state (allexport/keyword/\u2026) \u2014 defeats static env-var analysis; see SET_O_SAFE_LETTERS`,
            };
        }
      }
    if (o === "print" && r.some((a) => /^[+-].*P/.test(a)))
      for (let a = 1; a < r.length; a++) {
        let l = r[a];
        if (/\$\(|`/.test(l) || Bp(l))
          return {
            ok: false,
            reason:
              "'print -P' operand contains command substitution \u2014 zsh prompt expansion evaluates $(cmd)",
          };
      }
    if (o === "jobs")
      for (let a = 1; a < r.length; a++) {
        let l = r[a];
        if (/^[+-].*x/.test(l))
          return {
            ok: false,
            reason:
              "'jobs -x' executes its argument as a command \u2014 cannot be statically analyzed",
          };
      }
    if (Oro.has(o))
      return {
        ok: false,
        reason: `Shell keyword '${o}' as command name \u2014 tree-sitter mis-parse`,
      };
    if (o === "jq") {
      for (let a of r) {
        if (/\bsystem\s*\(/.test(a))
          return {
            ok: false,
            reason: "jq command contains system() function which executes arbitrary commands",
          };
        if (/\b(?:include|import)\b/.test(a))
          return {
            ok: false,
            reason:
              'jq command contains include/import \u2014 modules can load arbitrary .jq files via {search:"."} and call env or other builtins',
          };
      }
      if (
        r.some((a) =>
          /^(?:-[A-Za-z]*[fL]|--(?:from-file|rawfile|slurpfile|library-path)(?:$|=))/.test(a),
        )
      )
        return {
          ok: false,
          reason:
            "jq command contains dangerous flags that could execute code or read arbitrary files",
        };
    }
    if (o === "find") {
      if (vrp(n.text))
        return {
          ok: false,
          reason:
            "find contains unquoted glob characters \u2014 could glob-expand to a dangerous action before find runs",
        };
      for (let a = 1; a < r.length; a++) {
        let l = r[a];
        if (coo.has(l))
          return {
            ok: false,
            reason: `find with '${l}' executes commands or modifies files \u2014 cannot be auto-allowed by a Bash(find:*) prefix rule`,
          };
        if (w2t.has(l) || C2t.test(l)) {
          a++;
          continue;
        }
        if (Bp(l))
          return {
            ok: false,
            reason:
              "find argument is runtime-determined \u2014 could resolve to a dangerous action",
          };
        if (/[[\]*?]/.test(l))
          return {
            ok: false,
            reason: `find argument '${l}' contains glob characters \u2014 could glob-expand to a dangerous action`,
          };
      }
    }
    if (TOn.has(o))
      return {
        ok: false,
        reason: `Zsh builtin '${o}' can bypass security checks`,
      };
    if (vOn.has(o))
      if (o === "fc" && !r.slice(1).some((a) => /^[+-].*[es]/.test(a)));
      else if (o === "compgen" && !r.slice(1).some((a) => /^[+-].*[CFW]/.test(a)));
      else
        return {
          ok: false,
          reason: `'${o}' evaluates arguments as shell code`,
        };
    if (v2t.has(o) && r.length > 1)
      return {
        ok: false,
        reason: `'${o}' runs its argument as a command \u2014 cannot be statically analyzed`,
      };
    for (let a of n.argv)
      if (a.includes("/proc/") && eoo.test(a))
        return {
          ok: false,
          reason: "Accesses /proc/*/environ which may expose secrets",
        };
    for (let a of n.redirects)
      if (a.target.includes("/proc/") && eoo.test(a.target))
        return {
          ok: false,
          reason: "Accesses /proc/*/environ which may expose secrets",
        };
    for (let a of n.argv)
      if (
        a.includes(`
`) &&
        SOn.test(a)
      )
        t ??= {
          ok: false,
          kind: "newline-hash",
          reason:
            "Newline followed by # inside a quoted argument can hide arguments from path validation",
        };
    for (let a of n.envVars)
      if (
        a.value.includes(`
`) &&
        SOn.test(a.value)
      )
        t ??= {
          ok: false,
          kind: "newline-hash",
          reason:
            "Newline followed by # inside an env var value can hide arguments from path validation",
        };
    for (let a of n.redirects)
      if (
        a.target.includes(`
`) &&
        SOn.test(a.target)
      )
        t ??= {
          ok: false,
          kind: "newline-hash",
          reason:
            "Newline followed by # inside a redirect target can hide arguments from path validation",
        };
  }
  if (t) return t;
  return {
    ok: true,
  };
}
var dra,
  pra,
  Gro,
  CMDSUB_PLACEHOLDER = "__CMDSUB_OUTPUT__",
  VAR_PLACEHOLDER = "__TRACKED_VAR__",
  ora,
  _rp,
  brp,
  Srp,
  Wro,
  Erp,
  mra,
  Arp,
  sra,
  qro,
  Vro,
  zro,
  too,
  noo,
  Hrp,
  roo,
  ooo,
  soo,
  EOn,
  AOn,
  ioo,
  Trp,
  ira,
  Xro,
  _ra,
  bra,
  Lrp,
  Era,
  TOn,
  coo,
  w2t,
  C2t,
  vOn,
  v2t,
  uoo,
  gct,
  BWe,
  doo,
  lra,
  I2t,
  poo,
  foo,
  Mrp,
  moo,
  fct,
  cra,
  ura,
  $rp,
  Orp,
  eoo,
  SOn;
