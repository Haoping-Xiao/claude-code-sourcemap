// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mTl
// matched 2.1.88 source: src/tools/PowerShellTool/powershellSecurity.ts
// class=modified  jaccard=0.1833  score=0.4099  fileCov=0.249
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mTl = E(() => {
  ZLo();
  bde();
  lTl();
  dze();
  cTl = new Set(["pwsh", "pwsh.exe", "powershell", "powershell.exe"]);
  $bf = new Set(["/", "\u2013", "\u2014", "\u2015"]);
  Fbf = new Set([
    "invoke-webrequest",
    "iwr",
    "invoke-restmethod",
    "irm",
    "new-object",
    "start-bitstransfer",
  ]);
  pTl = new Set([
    "where-object",
    "sort-object",
    "select-object",
    "group-object",
    "format-table",
    "format-list",
    "format-wide",
    "format-custom",
  ]);
  rSf = new Set([
    "register-scheduledtask",
    "new-scheduledtask",
    "new-scheduledtaskaction",
    "set-scheduledtask",
  ]);
  sSf = new Set([
    "set-item",
    "si",
    "new-item",
    "ni",
    "remove-item",
    "ri",
    "del",
    "rm",
    "rd",
    "rmdir",
    "erase",
    "clear-item",
    "cli",
    "set-content",
    "add-content",
    "ac",
  ]);
  lSf = new Set([
    "set-alias",
    "sal",
    "new-alias",
    "nal",
    "set-variable",
    "sv",
    "new-variable",
    "nv",
  ]);
  uSf = new Set(["invoke-wmimethod", "iwmi", "invoke-cimmethod"]);
});
function mSf(e) {
  let t = e.name.toLowerCase(),
    n = t.slice(Math.max(t.lastIndexOf("\\"), t.lastIndexOf("/")) + 1);
  return fSf.has(n);
}
async function gTl(e) {
  let t = e.trim();
  if (!t) return "";
  let n = await iEe(t);
  return Imo(n)[0] ?? "";
}
function _Tl(e) {
  return kNn(e);
}
function hTl(e) {
  let t = e.trimStart(),
    n = t[0];
  if (n === '"' || n === "'") {
    let r = t.indexOf(n, 1),
      o = r === -1 ? t.length : r + 1;
    return t.slice(0, o).toLowerCase();
  }
  return (t.split(/\s+/)[0] ?? "").toLowerCase();
}
function uKt(e) {
  return e.trim().replace(/^[\s\u0085\u180e]+|[\s\u0085\u180e]+$/g, "");
}
function bTl(e) {
  let t = e,
    n = t.match(/^[\s\u0085\u180e]+/);
  if (n && /[\u0085\u180e]/.test(n[0])) t = t.slice(n[0].length);
  let r = t.match(/[\s\u0085\u180e]+$/);
  if (r && /[\u0085\u180e]/.test(r[0])) t = t.slice(0, t.length - r[0].length);
  return t;
}
function gJn(e) {
  let t = e,
    n = t.match(/^[\s\u0085\u180e]+/);
  if (n && /[\u0085\u180e]/.test(n[0]))
    t = n[0].replace(/[\u0085\u180e]/g, "") + t.slice(n[0].length);
  let r = t.match(/[\s\u0085\u180e]+$/);
  if (r && /[\u0085\u180e]/.test(r[0]))
    t = t.slice(0, t.length - r[0].length) + r[0].replace(/[\u0085\u180e]/g, "");
  return t;
}
function G$e(e) {
  if (
    e.includes(`
`) ||
    e.includes("*")
  )
    return [];
  return RNn(Ss, uKt(e));
}
function rDo(e, t, n, r) {
  let o = uKt(e.command);
  function s(f, m) {
    return f.toLowerCase() === m.toLowerCase();
  }
  function i(f, m) {
    return f.toLowerCase().startsWith(m.toLowerCase());
  }
  function a(f) {
    if (r === "allow") return f;
    return j2n(f);
  }
  let l = o.split(uze)[0] ?? "",
    c = j2n(l),
    u = zm(c),
    d = o.slice(l.length).replace(/^[\s\u0085\u180e]+/, " "),
    p = u + d;
  return Array.from(t.entries())
    .filter(([f]) => {
      let m = _Tl(gJn(f)),
        g =
          m.type === "exact"
            ? {
                ...m,
                command: bTl(f),
              }
            : m.type === "prefix"
              ? {
                  ...m,
                  prefix: gJn(m.prefix),
                }
              : m.type === "wildcard"
                ? {
                    ...m,
                    pattern: gJn(m.pattern),
                  }
                : m;
      function h(y) {
        switch (g.type) {
          case "exact":
            return s(g.command, y);
          case "prefix":
            switch (n) {
              case "exact":
                return s(g.prefix, y);
              case "prefix": {
                if (s(y, g.prefix)) return true;
                return i(y, g.prefix + " ");
              }
            }
            break;
          case "wildcard":
            if (n === "exact") return false;
            return X8(g.pattern, y, true, true);
        }
      }
      if (h(o)) return true;
      if (h(p)) return true;
      if (g.type === "exact") {
        let y = g.command.split(uze)[0] ?? "";
        if (zm(a(y)) === u) {
          let _ = g.command.slice(y.length).replace(/^[\s\u0085\u180e]+/, " ");
          if (s(_, d)) return true;
        }
      } else if (g.type === "prefix") {
        let y = g.prefix.split(uze)[0] ?? "";
        if (zm(a(y)) === u) {
          let _ = g.prefix.slice(y.length).replace(/^[\s\u0085\u180e]+/, " "),
            S = u + _;
          if (n === "exact") {
            if (s(S, p)) return true;
          } else if (s(p, S) || i(p, S + " ")) return true;
        }
      } else if (g.type === "wildcard") {
        let y = g.pattern.split(uze)[0] ?? "";
        if (zm(a(y)) === u && n !== "exact") {
          let _ = g.pattern.slice(y.length).replace(/^[\s\u0085\u180e]+/, " "),
            S = u + _;
          if (X8(S, p, true, true)) return true;
        }
      }
      return false;
    })
    .map(([, f]) => f);
}
function gze(e, t, n) {
  let r = Goe(t, Ss, "deny"),
    o = rDo(e, r, n, "deny"),
    s = Goe(t, Ss, "ask"),
    i = rDo(e, s, n, "ask"),
    a = Goe(t, Ss, "allow"),
    l = rDo(e, a, n, "allow");
  return {
    matchingDenyRules: o,
    matchingAskRules: i,
    matchingAllowRules: l,
  };
}
function STl(e, t) {
  let n = uKt(e.command),
    r = {
      ...e,
      command: n,
    },
    { matchingDenyRules: o, matchingAskRules: s, matchingAllowRules: i } = gze(r, t, "exact");
  if (o[0] !== void 0)
    return {
      behavior: "deny",
      message: `Permission to use ${Ss} with command ${n} has been denied.`,
      decisionReason: {
        type: "rule",
        rule: o[0],
      },
    };
  if (s[0] !== void 0)
    return {
      behavior: "ask",
      message: gp(Ss),
      decisionReason: {
        type: "rule",
        rule: s[0],
      },
    };
  if (i[0] !== void 0)
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "rule",
        rule: i[0],
      },
    };
  let a = {
    type: "other",
    reason: "This command requires approval",
  };
  return {
    behavior: "passthrough",
    message: gp(Ss, a),
    decisionReason: a,
    suggestions: G$e(n),
  };
}
function gSf(e, t) {
  let n = uKt(e.command),
    r = {
      ...e,
      command: n,
    },
    o = STl(e, t);
  if (o.behavior === "deny" || o.behavior === "ask") return o;
  let { matchingDenyRules: s, matchingAskRules: i, matchingAllowRules: a } = gze(r, t, "prefix");
  if (s[0] !== void 0)
    return {
      behavior: "deny",
      message: `Permission to use ${Ss} with command ${n} has been denied.`,
      decisionReason: {
        type: "rule",
        rule: s[0],
      },
    };
  if (i[0] !== void 0)
    return {
      behavior: "ask",
      message: gp(Ss),
      decisionReason: {
        type: "rule",
        rule: i[0],
      },
    };
  if (o.behavior === "allow") return o;
  if (a[0] !== void 0)
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "rule",
        rule: a[0],
      },
    };
  let l = {
    type: "other",
    reason: "This command requires approval",
  };
  return {
    behavior: "passthrough",
    message: gp(Ss, l),
    decisionReason: l,
    suggestions: G$e(n),
  };
}
async function ETl(e, t) {
  if (!e.valid)
    return [
      {
        text: t,
        element: {
          name: await gTl(t),
          nameType: "unknown",
          elementType: "CommandAst",
          args: [],
          text: t,
        },
        statement: null,
        isSafeOutput: false,
      },
    ];
  let n = [];
  for (let r of e.statements) {
    for (let o of r.commands) {
      if (o.elementType !== "CommandAst") continue;
      n.push({
        text: o.text,
        element: o,
        statement: r,
        isSafeOutput: o.nameType !== "application" && fze(o.name) && o.args.length === 0,
      });
    }
    if (r.nestedCommands)
      for (let o of r.nestedCommands)
        n.push({
          text: o.text,
          element: o,
          statement: r,
          isSafeOutput: o.nameType !== "application" && fze(o.name) && o.args.length === 0,
        });
  }
  if (n.length > 0) return n;
  return [
    {
      text: t,
      element: {
        name: await gTl(t),
        nameType: "unknown",
        elementType: "CommandAst",
        args: [],
        text: t,
      },
      statement: null,
      isSafeOutput: false,
    },
  ];
}
async function ATl(e) {
  if (!e) return false;
  let t = await iEe(e);
  if (!t.valid) return true;
  return (await ETl(t, e)).some(({ element: r }) => zm(r.name) === "git");
}
async function HTl(e, t) {
  let n = Fr(t),
    r = uKt(e.command),
    o = {
      ...e,
      command: r,
    };
  if (!r)
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "other",
        reason: "Empty command is safe",
      },
    };
  let s = await iEe(r),
    i = STl(e, n);
  if (i.behavior === "deny") return i;
  let { matchingDenyRules: a, matchingAskRules: l } = gze(o, n, "prefix");
  if (a[0] !== void 0)
    return {
      behavior: "deny",
      message: `Permission to use ${Ss} with command ${r} has been denied.`,
      decisionReason: {
        type: "rule",
        rule: a[0],
      },
    };
  let c = null;
  if (l[0] !== void 0)
    c = {
      behavior: "ask",
      message: gp(Ss),
      decisionReason: {
        type: "rule",
        rule: l[0],
      },
    };
  if (c === null && j0(r))
    c = {
      behavior: "ask",
      message: "Command contains a UNC path that could trigger network requests",
    };
  if (
    i.behavior === "allow" &&
    !s.valid &&
    c === null &&
    Cmo(r.split(uze)[0] ?? "") !== "application"
  )
    return i;
  if (!s.valid) {
    let q = MN(r.replace(/<#[\s\S]*?#>/g, " ").replace(/`[\r\n]+\s*/g, "")),
      W = false,
      V;
    for (let K of q.split(/[;|\n\r{}()&]+/)) {
      let Z = K.trim();
      if (!Z) continue;
      let J = Z.split(uze);
      for (let ne = 0; ne < J.length; ne++) {
        let oe = J[ne],
          re = Mk(oe);
        if (!re) continue;
        if (V === void 0 && !F4.has(oe[0] ?? "") && cKt(oe)) V = oe;
        if (zm(re) === "remove-item") {
          W = true;
          for (let ae of J.slice(ne + 1)) {
            if (F4.has(ae[0] ?? "")) continue;
            if (cKt(ae)) return mze(ae);
          }
        }
        let ee = [re, ...J.slice(ne + 1)].join(" "),
          { matchingDenyRules: ce } = gze(
            {
              command: ee,
            },
            n,
            "prefix",
          );
        if (ce[0] !== void 0)
          return {
            behavior: "deny",
            message: `Permission to use ${Ss} with command ${r} has been denied.`,
            decisionReason: {
              type: "rule",
              rule: ce[0],
            },
          };
      }
    }
    if (W && V !== void 0) return mze(V);
    if (c !== null) return c;
    let Y = {
        type: "other",
        reason: `Command contains malformed syntax that cannot be parsed: ${s.errors[0]?.message ?? "unknown error"}`,
      },
      z = {
        behavior: "ask",
        decisionReason: Y,
        message: gp(Ss, Y),
      };
    return {
      ...z,
      decisionReason: {
        type: "subcommandResults",
        reasons: new Map([[r, z]]),
      },
    };
  }
  let u = await ETl(s, r),
    d = [];
  if (c !== null) d.push(c);
  let p = fTl(r, s);
  if (p.behavior !== "passthrough") {
    let q = {
      type: "other",
      reason: p.message,
    };
    d.push({
      behavior: "ask",
      message: gp(Ss, q),
      decisionReason: q,
      suggestions: G$e(r),
    });
  }
  if (s.hasUsingStatements) {
    let q = {
      type: "other",
      reason:
        "Command contains a `using` statement that may load external code (module or assembly)",
    };
    d.push({
      behavior: "ask",
      message: gp(Ss, q),
      decisionReason: q,
      suggestions: G$e(r),
    });
  }
  if (s.hasScriptRequirements) {
    let q = {
      type: "other",
      reason: "Command contains a `#Requires` directive that may trigger module loading",
    };
    d.push({
      behavior: "ask",
      message: gp(Ss, q),
      decisionReason: q,
      suggestions: G$e(r),
    });
  }
  if (s.hasBackgroundJob) {
    let q = {
      type: "other",
      reason:
        "Command uses the background job operator (`&`) which spawns a child PowerShell process",
    };
    d.push({
      behavior: "ask",
      message: gp(Ss, q),
      decisionReason: q,
      suggestions: G$e(r),
    });
  }
  let f = /^(?:[\w.]+\\)?(env|hklm|hkcu|function|alias|variable|cert|wsman|registry)::?/i;
  function m(q) {
    let W = q;
    if (W.length > 0 && (F4.has(W[0]) || W[0] === "/")) {
      let V = W.indexOf(":", 1);
      if (V > 0 && (W[0] !== "/" || /^\/[A-Za-z]{1,2}:/.test(W))) W = W.substring(V + 1);
    }
    return MN(W.replace(/`[\r\n]+\s*/g, ""));
  }
  function g(q) {
    let W = m(q);
    if (f.test(W))
      return {
        behavior: "ask",
        message: `Command argument '${q}' uses a non-filesystem provider path and requires approval`,
      };
    if (j0(W, true))
      return {
        behavior: "ask",
        message: `Command argument '${q}' contains a UNC path that could trigger network requests`,
      };
    if (Vt() === "windows" && /(?<!:)[\\/]{2,}[^ \t\r\n\f\v\\/]/.test(W))
      return {
        behavior: "ask",
        message: `Command argument '${q}' contains a UNC path that could trigger network requests`,
      };
    return null;
  }
  e: for (let q of s.statements) {
    for (let W of q.commands) {
      if (W.elementType !== "CommandAst") continue;
      for (let V of W.args) {
        let Y = g(V);
        if (Y !== null) {
          d.push(Y);
          break e;
        }
      }
    }
    if (q.nestedCommands)
      for (let W of q.nestedCommands)
        for (let V of W.args) {
          let Y = g(V);
          if (Y !== null) {
            d.push(Y);
            break e;
          }
        }
  }
  for (let { text: q, element: W } of u) {
    let V = W.name !== "" ? [W.name, ...W.args].join(" ") : null,
      Y = {
        command: q,
      },
      { matchingDenyRules: z, matchingAskRules: K } = gze(Y, n, "prefix"),
      Z = z[0],
      J = K[0];
    if (Z === void 0 && V !== null) {
      let { matchingDenyRules: ne, matchingAskRules: oe } = gze(
        {
          command: V,
        },
        n,
        "prefix",
      );
      if (((Z = ne[0]), J === void 0)) J = oe[0];
    }
    if (Z !== void 0)
      d.push({
        behavior: "deny",
        message: `Permission to use ${Ss} with command ${r} has been denied.`,
        decisionReason: {
          type: "rule",
          rule: Z,
        },
      });
    else if (J !== void 0)
      d.push({
        behavior: "ask",
        message: gp(Ss),
        decisionReason: {
          type: "rule",
          rule: J,
        },
      });
  }
  let h = u.length > 1 && u.some(({ element: q }) => lKt(q.name)),
    y = u.some(({ element: q }) => qLo(q)),
    b = u.some(({ element: q }) => zm(q.name) === "git");
  if (h && b)
    d.push({
      behavior: "ask",
      message:
        "Compound commands with cd/Set-Location and git require approval to prevent bare repository attacks",
    });
  let _ = b && wRt();
  if (_)
    d.push({
      behavior: "ask",
      message:
        _ === "bare-indicators"
          ? "Git command in a directory with bare-repo indicators (HEAD/objects/refs outside a .git/ directory). Git may treat it as a git dir and run config/hooks from here."
          : "The .git file or symlink here redirects to a location that cannot be verified as safe (it may have been planted by an untrusted archive). Git commands need approval.",
    });
  if (b) {
    let q = u.some(({ element: Y, statement: z }) => {
        for (let Z of Y.redirections ?? []) if (jbt(Z.target)) return true;
        let K = zm(Y.name);
        if (!nDo.has(K)) return false;
        if (Y.args.flatMap(sJn).some((Z) => jbt(Z))) return true;
        if (K === "copy-item" || K === "move-item") {
          let Z = z === null ? -1 : z.commands.indexOf(Y),
            J = z !== null && (Z > 0 || (Z === -1 && z.commands.length > 1));
          if (jHl(Y.args, J)) return true;
        }
        if (z !== null)
          for (let Z of z.commands) {
            if (Z.elementType === "CommandAst") continue;
            if (jbt(Z.text)) return true;
          }
        return false;
      }),
      W = NGt(s).some((Y) => jbt(Y.target));
    if (q || W)
      d.push({
        behavior: "ask",
        message:
          "Command writes to a git-internal path (HEAD, objects/, refs/, hooks/, .git/) and runs git. This could plant a malicious hook that git then executes.",
      });
    if (u.some(({ element: Y }) => mSf(Y)))
      d.push({
        behavior: "ask",
        message:
          "Compound command runs a native file copier (xcopy/robocopy) and git. The copier can place files at git-internal paths (HEAD, objects/, refs/) that git then treats as repository state.",
      });
  }
  if (Vt() === "windows" && u.length > 1) {
    let q = new Set();
    for (let V of NGt(s)) q.add(Gbt(V.target));
    let W = null;
    for (let { element: V } of u) {
      let Y = Gbt(V.name);
      if (Y !== "" && q.has(Y)) {
        W = V.name;
        break;
      }
      for (let K of V.redirections ?? []) q.add(Gbt(K.target));
      let z = zm(V.name);
      if (nDo.has(z))
        for (let K of V.args.flatMap(sJn)) {
          let Z = K.replace(/^[-\u2013\u2014\u2015]+[A-Za-z]+:?/, ""),
            J = Mk(hq(Z));
          if (J !== "") q.add(Gbt(J));
        }
    }
    if (W !== null)
      d.push({
        behavior: "ask",
        message: `An earlier sub-command writes a file (./${W}.*) that would shadow the later \`${W}\` command under Windows PowerShell 5.1 cwd-first resolution.`,
      });
  }
  if (
    u.some(({ element: q }) => {
      let W = q.name.toLowerCase(),
        V = W.slice(Math.max(W.lastIndexOf("\\"), W.lastIndexOf("/")) + 1);
      return pSf.has(V);
    }) &&
    u.length > 1
  )
    d.push({
      behavior: "ask",
      message: b
        ? "Compound command extracts an archive and runs git. Archive contents may plant bare-repository indicators (HEAD, hooks/, refs/) that git then treats as the repository root."
        : "Compound command extracts an archive followed by other commands. Archive contents (symlinks, config files) cannot be validated and may redirect subsequent path operations.",
    });
  if (
    u.some(({ element: W }) => {
      for (let Y of W.redirections ?? []) if (oJn(Y.target)) return true;
      let V = zm(W.name);
      if (!nDo.has(V)) return false;
      return W.args.flatMap(sJn).some(oJn);
    }) ||
    NGt(s).some((W) => oJn(W.target))
  )
    d.push({
      behavior: "ask",
      message:
        "Command writes to .git/ \u2014 hooks or config planted there execute on the next git operation.",
    });
  let A = sTl(o, s, n, h);
  if (A.behavior !== "passthrough") d.push(A);
  let v =
      i.behavior === "allow" && i.decisionReason?.type === "rule"
        ? i.decisionReason.rule.ruleValue.ruleContent
        : void 0,
    C = v !== void 0 && bTl(v).trim().toLowerCase() === r.toLowerCase();
  if (
    i.behavior === "allow" &&
    u[0] !== void 0 &&
    (C || u.every((q) => q.element.nameType !== "application" && !OL(q.text, q.element)))
  )
    d.push(i);
  if (aJn(r, s))
    d.push({
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "other",
        reason: "Command is read-only and safe to execute",
      },
    });
  if (NGt(s).length > 0)
    d.push({
      behavior: "ask",
      message: "Command contains file redirections that could write to arbitrary paths",
      suggestions: G$e(r),
    });
  let I = VLo(o, s, n);
  if (I.behavior !== "passthrough") d.push(I);
  let k = d.find((q) => q.behavior === "deny");
  if (k !== void 0) return k;
  let D = d.find((q) => q.behavior === "ask");
  if (D !== void 0)
    return {
      ...D,
      decisionReason: {
        type: "subcommandResults",
        reasons: new Map([[r, D]]),
      },
    };
  let P = d.find((q) => q.behavior === "allow");
  if (P !== void 0) return P;
  let O = u.filter(({ element: q, isSafeOutput: W }) => {
      if (W) return false;
      if (q.nameType === "application") return true;
      if (zm(q.name) === "set-location" && q.args.length > 0) {
        let Y = q.args.find((z) => z.length === 0 || !F4.has(z[0]));
        if (Y && yTl.resolve($t(), Y) === $t()) return false;
      }
      return true;
    }),
    L = [],
    M = new Set();
  for (let { text: q, element: W, statement: V } of O) {
    let Y = {
        command: q,
      },
      z = gSf(Y, n);
    if (z.behavior === "deny")
      return {
        behavior: "deny",
        message: `Permission to use ${Ss} with command ${r} has been denied.`,
        decisionReason: z.decisionReason,
      };
    if (z.behavior === "ask") {
      if (V !== null) M.add(V);
      L.push(q);
      continue;
    }
    let K = false;
    if (z.behavior === "allow" && W.nameType === "application") {
      let Z = W.name.toLowerCase(),
        J = Mk(hTl(q)).toLowerCase();
      if (Z.length > 0 && J === Z)
        K = gze(Y, n, "prefix").matchingAllowRules.some((ne) => {
          let oe = _Tl(gJn(ne.ruleValue.ruleContent ?? "")),
            re = oe.type === "exact" ? oe.command : oe.type === "prefix" ? oe.prefix : oe.pattern;
          return Mk(hTl(re)).toLowerCase() === Z;
        });
    }
    if (z.behavior === "allow" && (W.nameType !== "application" || K) && !y) {
      if (OL(q, W)) {
        if (V !== null) M.add(V);
        L.push(q);
        continue;
      }
      continue;
    }
    if (z.behavior === "allow") {
      if (V !== null) M.add(V);
      L.push(q);
      continue;
    }
    if (V !== null && !h && !y && jLo(V) && pze(W, q)) continue;
    if (V !== null && !h && !y) {
      if (
        VLo(
          {
            command: q,
          },
          {
            valid: true,
            errors: [],
            variables: s.variables,
            hasStopParsing: s.hasStopParsing,
            originalCommand: q,
            statements: [V],
          },
          n,
        ).behavior === "allow"
      )
        continue;
    }
    if (V !== null) M.add(V);
    L.push(q);
  }
  for (let q of s.statements) if (!jLo(q) && !M.has(q)) L.push(q.text);
  if (L.length === 0) {
    if (S5(s).hasScriptBlocks) {
      let q = {
        behavior: "ask",
        message: gp(Ss),
        decisionReason: {
          type: "other",
          reason:
            "Pipeline consists of output-formatting cmdlets with script blocks \u2014 block content cannot be verified",
        },
      };
      return {
        ...q,
        decisionReason: {
          type: "subcommandResults",
          reasons: new Map([[r, q]]),
        },
      };
    }
    return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "other",
        reason: "All pipeline commands are individually allowed",
      },
    };
  }
  let N = {
      type: "other",
      reason: "This command requires approval",
    },
    B = [];
  for (let q of L) B.push(...G$e(q));
  let $ = {
    behavior: "passthrough",
    message: gp(Ss, N),
    decisionReason: N,
    suggestions: B,
  };
  return {
    ...$,
    decisionReason: {
      type: "subcommandResults",
      reasons: new Map([[r, $]]),
    },
  };
}
var yTl, nDo, pSf, fSf;
