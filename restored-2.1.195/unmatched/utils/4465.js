// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RCl
// matched 2.1.88 source: src/tools/BashTool/bashPermissions.ts
// class=new  jaccard=0.0426  score=0.157  fileCov=0.0553
// note: nearest: src/tools/BashTool/bashPermissions.ts (0.0426); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var RCl = E(() => {
  sN();
  S$();
  GHf = ["mkdir", "touch", "rm", "rmdir", "mv", "cp", "sed"];
});
function LCl(e, t, n, r) {
  return;
}
function tQn(e) {
  let t = e.trim().split(/\s+/).filter(Boolean);
  if (t.length === 0) return null;
  let n = 0;
  while (n < t.length && eQn.test(t[n])) {
    let s = bi(t[n], "="),
      i = !1;
    if (!LKt.has(s)) return null;
    n++;
  }
  let r = t.slice(n);
  if (r.length < 2) return null;
  if (nQn.has(r[0].split("/").pop())) return null;
  let o = r[1];
  if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(o)) return null;
  return r.slice(0, 2).join(" ");
}
function BCl(e) {
  let t = rQn(e.trim()).split(/\s+/),
    n = 0;
  while (n < t.length && eQn.test(t[n])) n++;
  let r = t[n];
  return !!r && nQn.has(r.split("/").pop());
}
function UCl(e) {
  let t = e.trim().split(/\s+/).filter(Boolean),
    n = 0;
  while (n < t.length && eQn.test(t[n])) {
    let o = bi(t[n], "="),
      s = !1;
    if (!LKt.has(o)) return null;
    n++;
  }
  let r = t[n];
  if (!r) return null;
  if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(r)) return null;
  if (nQn.has(r)) return null;
  return r;
}
function J$e(e) {
  let t = zHf(e);
  if (t) return Zjt(cl.name, t);
  if (e.includes(`
`)) {
    let r = Gd(e).trim();
    if (r) return Zjt(cl.name, r);
  }
  let n = tQn(e);
  if (n) return Zjt(cl.name, n);
  return RNn(cl.name, e);
}
function zHf(e) {
  if (!e.includes("<<")) return null;
  let t = e.indexOf("<<");
  if (t <= 0) return null;
  let n = e.substring(0, t).trim();
  if (!n) return null;
  let r = tQn(n);
  if (r) return r;
  let o = n.split(/\s+/).filter(Boolean),
    s = 0;
  while (s < o.length && eQn.test(o[s])) {
    let i = bi(o[s], "="),
      a = !1;
    if (!LKt.has(i)) return null;
    s++;
  }
  if (s >= o.length) return null;
  if (nQn.has(o[s].split("/").pop())) return null;
  return o.slice(s, s + 2).join(" ") || null;
}
function FCl(e) {
  return Zjt(cl.name, e);
}
function Ize(e, t) {
  return X8(e, t, !1, !0);
}
function gEe(e) {
  return LKt.has(e) || !1;
}
function QJn(e) {
  let n = e.split(`
`).filter(r => !r.trim().startsWith("#"));
  if (n.length === 0) return e;
  return n.join(`
`);
}
function A5(e) {
  let t = [/^timeout[ \t]+(?:(?:--(?:foreground|preserve-status|verbose)|--(?:kill-after|signal)=[A-Za-z0-9_.+-]+|--(?:kill-after|signal)[ \t]+[A-Za-z0-9_.+-]+|-v|-[ks][ \t]+[A-Za-z0-9_.+-]+|-[ks][A-Za-z0-9_.+-]+)[ \t]+)*(?:--[ \t]+)?\d+(?:\.\d+)?[smhd]?[ \t]+/, /^time[ \t]+(?:--[ \t]+)?/, /^nice(?:[ \t]+-n[ \t]+-?\d+|[ \t]+-\d+)?[ \t]+(?:--[ \t]+)?/, /^stdbuf(?:[ \t]+-[ioe][LN0-9]+)+[ \t]+(?:--[ \t]+)?/, /^nohup[ \t]+(?:--[ \t]+)?/, /^command(?:[ \t]+-p+)*(?:[ \t]+--)?[ \t]+(?!-)/, /^builtin(?:[ \t]+--)?[ \t]+(?!-)/, /^noglob[ \t]+(?!-)/],
    n = /^([A-Za-z_][A-Za-z0-9_]*)=([A-Za-z0-9_./:-]+)[ \t]+/,
    r = e,
    o = "";
  while (r !== o) {
    o = r, r = QJn(r);
    let i = r.match(n);
    if (i) {
      let a = i[1],
        l = !1;
      if (LKt.has(a)) r = r.replace(n, "");
    }
  }
  function s(i) {
    let a = i.match(/^([^\s]+)([\s\S]*)$/);
    if (!a) return i;
    let l = a[1],
      c = null,
      u = !1,
      d = "";
    for (let p = 0; p < l.length; p++) {
      let f = l[p];
      if (u = !1, c === "'") {
        if (f === "'") c = null;else d += f;
      } else if (c === '"') {
        if (f === "\\") {
          let m = l[p + 1];
          if (m === "$" || m === "`" || m === '"' || m === "\\") d += m, p++;else if (m === void 0) u = !0;else d += f;
        } else if (f === '"') c = null;else d += f;
      } else if (f === "\\") {
        let m = l[p + 1];
        if (m === void 0) u = !0;else d += m, p++;
      } else if (f === '"' || f === "'") c = f;else d += f;
    }
    if (c !== null || u) return i;
    return d + a[2];
  }
  r = s(QJn(r)), o = "";
  while (r !== o) {
    o = r;
    for (let i of t) r = r.replace(i, "");
    if (r !== o) r = s(QJn(r));
  }
  return r.trim();
}
function KHf(e) {
  let t = 1;
  while (t < e.length) {
    let n = e[t],
      r = e[t + 1];
    if (n === "--foreground" || n === "--preserve-status" || n === "--verbose") t++;else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(n)) t++;else if ((n === "--kill-after" || n === "--signal") && r && DCl.test(r)) t += 2;else if (n === "--") {
      t++;
      break;
    } else if (n.startsWith("--")) return -1;else if (n === "-v") t++;else if ((n === "-k" || n === "-s") && r && DCl.test(r)) t += 2;else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(n)) t++;else if (n.startsWith("-")) return -1;else break;
  }
  return t;
}
function YHf(e) {
  let t = e;
  for (;;) if (t[0] === "time" || t[0] === "nohup") t = t.slice(t[1] === "--" ? 2 : 1);else if (t[0] === "timeout") {
    let n = KHf(t);
    if (n < 0 || !t[n] || !/^\d+(?:\.\d+)?[smhd]?$/.test(t[n])) return t;
    t = t.slice(n + 1);
  } else if (t[0] === "nice" && t[1] === "-n" && t[2] && /^-?\d+$/.test(t[2])) t = t.slice(t[3] === "--" ? 4 : 3);else return t;
}
function XHf(e, t) {
  if (t) return t.envVars.some(s => !gEe(s.name));
  let n = /^([A-Za-z_][A-Za-z0-9_]*)\+?=/,
    r = /^[A-Za-z_][A-Za-z0-9_]*\+?=(?:"[^"$`\\]*"|'[^']*'|[A-Za-z0-9_./:+-]*)[ \t]+/,
    o = e.command;
  for (;;) {
    let s = o.match(n);
    if (!s) return !1;
    if (!gEe(s[1])) return !0;
    let i = o.match(r);
    if (!i) return !0;
    o = o.slice(i[0].length);
  }
}
function rQn(e, t) {
  let n = /^([A-Za-z_][A-Za-z0-9_]*(?:\[[^\]]*\])?)\+?=(?:'[^'\n\r]*'|"(?:\\.|[^"$`\\\n\r])*"|\\.|[^ \t\n\r$`;|&()<>\\\\'"])*[ \t]+/,
    r = e,
    o = "";
  while (r !== o) {
    o = r, r = QJn(r);
    let s = r.match(n);
    if (!s) continue;
    if (t?.test(s[1])) break;
    r = r.slice(s[0].length);
  }
  return r.trim();
}
function eTf(e) {
  let t = e.slice();
  for (;;) {
    while (t[0] !== void 0 && PCl.test(t[0])) t = t.slice(1);
    t = YHf(t);
    let n = t[0];
    if (n === void 0) return t;
    let r = JHf[n];
    if (r === void 0) return t;
    let o = QHf[n],
      s = ZHf[n],
      i = 1,
      a,
      l = !1;
    while (i < t.length) {
      let c = t[i];
      if (c === "--") {
        if (i++, !l && s !== void 0 && i + 1 < t.length && s(t[i])) {
          l = !0, i++;
          continue;
        }
        break;
      }
      if (o !== void 0) {
        if (o.has(c) && t[i + 1] !== void 0) {
          let d = t[i + 1].trim();
          if (d !== "") {
            a = d;
            break;
          }
          i += 2;
          continue;
        }
        let u = c.indexOf("=");
        if (u > 0 && o.has(c.slice(0, u))) {
          let d = c.slice(u + 1).trim();
          if (d !== "") {
            a = d;
            break;
          }
          i++;
          continue;
        }
        if (c.length > 2 && c[1] !== "-" && o.has(c.slice(0, 2))) {
          let d = c.slice(2).trim();
          if (d !== "") {
            a = d;
            break;
          }
          i++;
          continue;
        }
      }
      if (c.startsWith("-") && (c !== "-" || s === void 0)) {
        if (n === "command" && /^-[pvV]+$/.test(c) && /[vV]/.test(c)) return t;
        i += r.has(c) && i + 1 < t.length ? 2 : 1;
        continue;
      }
      if (n === "env" && PCl.test(c)) {
        i++;
        continue;
      }
      if (!l && s?.(c) && i + 1 < t.length) {
        l = !0, i++;
        continue;
      }
      break;
    }
    if (a !== void 0) {
      if (t = a.trim().split(/\s+/), t.length === 0 || t[0] === "") return e.slice();
      continue;
    }
    if (i >= t.length) return t;
    t = t.slice(i);
  }
}
function rPo(e, t, n, {
  stripAllEnvVars: r = !1,
  skipCompoundCheck: o = !1,
  astCommand: s,
  ruleBehavior: i
} = {}) {
  let a = e.command.trim(),
    l = vde(a).commandWithoutRedirections,
    u = (n === "exact" ? [a, l] : [l]).flatMap(p => {
      let f = A5(p);
      return f !== p ? [p, f] : [p];
    });
  if (r) {
    let p = s?.argv ?? oA(l),
      f = eTf(p);
    if (f.length > 0 && f[0] !== p[0]) u.push(f.join(" "));
    let m = new Set(u),
      g = 0;
    while (g < u.length) {
      let h = u.length;
      for (let y = g; y < h; y++) {
        let b = u[y];
        if (!b) continue;
        let _ = rQn(b);
        if (!m.has(_)) u.push(_), m.add(_);
        let S = A5(b);
        if (!m.has(S)) u.push(S), m.add(S);
      }
      g = h;
    }
  }
  let d = new Map();
  if (n === "prefix" && !o) {
    for (let p of u) if (!d.has(p)) d.set(p, By(p).length > 1);
  }
  return Array.from(t.entries()).filter(([p]) => {
    let f = oPo(p);
    return u.some(m => {
      switch (f.type) {
        case "exact":
          return f.command === m;
        case "prefix":
          {
            let g = f.prefix.replace(/[ \t]+/g, " "),
              h = m.replace(/[ \t]+/g, " ");
            switch (n) {
              case "exact":
                return g === h;
              case "prefix":
                {
                  if (d.get(m)) return !1;
                  if (h === g) return !0;
                  if (h.startsWith(g + " ")) return !0;
                  let y = "xargs " + g;
                  if (h === y) return !0;
                  return h.startsWith(y + " ");
                }
            }
            break;
          }
        case "wildcard":
          if (n === "exact") return !1;
          if (d.get(m)) return !1;
          if (Ize(f.pattern, m)) return !0;
          if (i !== "deny" && i !== "ask" && !Wca(f.pattern)) return !1;
          return Ize(`xargs ${f.pattern}`, m);
      }
    });
  }).map(([, p]) => p);
}
function Q$e(e, t, n, {
  skipCompoundCheck: r = !1,
  astCommand: o
} = {}) {
  let s = hQ(t, cl, "deny"),
    i = rPo(e, s, n, {
      stripAllEnvVars: !0,
      skipCompoundCheck: !0,
      astCommand: o,
      ruleBehavior: "deny"
    }),
    a = hQ(t, cl, "ask"),
    l = rPo(e, a, n, {
      stripAllEnvVars: !0,
      skipCompoundCheck: !0,
      astCommand: o,
      ruleBehavior: "ask"
    }),
    c = hQ(t, cl, "allow"),
    u = rPo(e, c, n, {
      skipCompoundCheck: r,
      ruleBehavior: "allow"
    });
  return {
    matchingDenyRules: i,
    matchingAskRules: l,
    matchingAllowRules: u
  };
}
async function MCl(e, t, n, r, o, s, i = []) {
  let a = oQn(e, t);
  if (a.behavior === "deny" || a.behavior === "ask") return a;
  let l = jCl(e, t, r, o, s, i);
  if (l.behavior === "deny" || l.behavior === "ask") return l;
  if (l.behavior === "allow") return l;
  let c = n?.commandPrefix ? FCl(n.commandPrefix) : J$e(e.command);
  return {
    ...l,
    suggestions: c
  };
}
function $Cl(e, t, n, r) {
  if (!xo.isSandboxingEnabled() || !xo.isAutoAllowBashIfSandboxedEnabled() || !N$(e)) return null;
  let o = oTf(e, t, n);
  if (o.behavior === "passthrough") return null;
  let s = Yjt(),
    i = r.some(u => !gEe(u) && (s === null || s.has(u))) || n.some(u => u.envVars.some(d => !gEe(d.name)) || u.argv.some(d => {
      if (!d.includes("=") || d.startsWith("-")) return !1;
      let p = d.indexOf("="),
        f = d[p - 1] === "+" ? d.slice(0, p - 1) : d.slice(0, p);
      return !gEe(f);
    })),
    a = n.some(u => u.redirects.some(d => /^\/dev\/(tcp|udp)\//.test(d.target)));
  if (i || a) return null;
  let l = !1,
    c = !1;
  for (let u of n) {
    let [d, ...p] = mEe(u.argv),
      f = d?.replace(/^.*[\\/]/, "");
    if (f === "cd" || f === "pushd" || f === "popd" || f === "chdir") {
      l = !0;
      continue;
    }
    if (f !== "rm" && f !== "rmdir") continue;
    if (c = !0, wjn(f, p, $t(), t).behavior !== "passthrough") return null;
  }
  if (l && c) return null;
  return o;
}
function tTf(e, t, n) {
  if (!xo.isSandboxingEnabled() || !xo.isAutoAllowBashIfSandboxedEnabled() || !N$(e)) return null;
  if (n === void 0 || n === "PARSE_ABORT" || n === "ERROR") return null;
  if (/(?<!<)<<(?!<)/.test(e.command)) return null;
  if (/\$\{[\s|]/.test(e.command.replace(/['"\\]/g, ""))) return null;
  if (/\$\{![A-Za-z_0-9]/.test(e.command.replace(/['"\\]/g, ""))) return null;
  if (/\/proc\/.*\/environ/.test(e.command.replace(/['"\\]/g, ""))) return null;
  let r = XCl(e.command);
  if (r === null || r.length === 0) return null;
  let o;
  for (let s of r) {
    let {
      matchingDenyRules: i,
      matchingAskRules: a
    } = Q$e({
      ...e,
      command: s
    }, t, "prefix");
    if (i[0] !== void 0) return {
      behavior: "deny",
      message: `Permission to use ${cl.name} with command ${e.command.trim()} has been denied.`,
      decisionReason: {
        type: "rule",
        rule: i[0]
      }
    };
    o ??= a[0];
  }
  for (let s of r) {
    let i = s.trim().split(/\s+/).filter(Boolean),
      a = rTf(i);
    if (a === null) return null;
    if (a.length === 0) continue;
    let l = mEe(a),
      c = a.slice(0, a.length - l.length);
    if (c.some(m => /["'`$\\(){}|;&<>*?[\]]/.test(m))) return null;
    if (c.some(m => {
      let g = m.match(/^([A-Za-z_]\w*)\+?=/);
      return g !== null && kRe(g[1]);
    })) return null;
    let u = l.map(m => m.replace(/['"\\]/g, ""));
    if (u.some(m => {
      let g = m.match(/^([A-Za-z_]\w*)\+?=/);
      return g !== null && kRe(g[1]);
    })) return null;
    let d = l.some((m, g) => {
        if (g === 0) return !1;
        if (m.includes("$'") && !/^'[^']*\$'$/.test(m) || m.includes('$"') && !/^"[^"]*\$"$/.test(m)) return !0;
        let h = u[g];
        return h.includes("`") || /\$\((?!\()/.test(h) || /\$[^(\s]/.test(h) && h.includes("-") || /\$\{[^}]*:?[+=]/.test(h) || /\{[^\s]*(,|\.\.)/.test(m) || (h.match(/\{/g) ?? []).length !== (h.match(/\}/g) ?? []).length;
      }),
      p = u.some((m, g) => g > 0 && m.includes("$")),
      f = l[0];
    if (f === void 0 || !/^[A-Za-z0-9._/~+][A-Za-z0-9._/~+-]*$/.test(f) || vra(f) || OCl.has(f) || OCl.has(f.replace(/^.*[\\/]/, "")) || nTf.has(f) && (d || u.some(m => m.includes("[") && /[$`]/.test(m))) || f === "test" && (d || u.some(m => m === "-t" || gct.has(m))) || f === "jq" || f === "find" && (d || (() => {
      for (let m = 1; m < u.length; m++) {
        let g = u[m];
        if (coo.has(g)) return !0;
        if (w2t.has(l[m]) || C2t.test(l[m])) {
          let h = u[m + 1];
          if (h !== void 0 && (!h.includes("$") || /^["'].*["']$/.test(l[m + 1]) && /^\$\{?[A-Za-z_]\w*\}?$/.test(h))) {
            m++;
            continue;
          }
        }
        if (g.includes("$") || /[[\]*?]/.test(g)) return !0;
      }
      return !1;
    })()) || f === "jobs" && (d || p || u.some(m => /^-[^-]*x/.test(m))) || f === "set" && (d || (() => {
      for (let m = 1; m < u.length; m++) {
        let g = u[m];
        if (g === "--") return !1;
        if (g.includes("$")) return !0;
        if (!/^[-+]/.test(g)) continue;
        for (let h = 1; h < g.length; h++) {
          let y = g[h];
          if (y === "o") {
            let b = h < g.length - 1 ? g.slice(h + 1) : u[m + 1];
            if (b !== void 0 && b !== "" && !poo.has(b.toLowerCase().replace(/[_-]/g, ""))) return !0;
            break;
          }
          if (y === "A") break;
          if (!foo.has(y)) return !0;
        }
      }
      return !1;
    })())) return null;
  }
  if (o) return {
    behavior: "ask",
    message: gp(cl.name),
    decisionReason: {
      type: "rule",
      rule: o
    }
  };
  return {
    behavior: "allow",
    updatedInput: e,
    decisionReason: {
      type: "other",
      reason: t2e
    }
  };
}
function rTf(e) {
  let t = 0;
  while (t < e.length) {
    let r = e[t].match(/^([A-Za-z_][A-Za-z0-9_]*)\+?=(.*)$/);
    if (r === null) break;
    if (kRe(r[1])) return null;
    if (/["'`$\\(){}|;&<>*?[\]]/.test(r[2])) return null;
    t++;
  }
  return t === 0 ? e : e.slice(t);
}
function oTf(e, t, n) {
  let r = e.command.trim(),
    {
      matchingDenyRules: o,
      matchingAskRules: s
    } = Q$e(e, t, "prefix", {
      astCommand: n.length === 1 ? n[0] : void 0
    });
  if (o[0] !== void 0) return {
    behavior: "deny",
    message: `Permission to use ${cl.name} with command ${r} has been denied.`,
    decisionReason: {
      type: "rule",
      rule: o[0]
    }
  };
  if (n.length > 1) {
    let i;
    for (let a of n) {
      let l = Q$e({
        command: a.text
      }, t, "prefix", {
        astCommand: a
      });
      if (l.matchingDenyRules[0] !== void 0) return {
        behavior: "deny",
        message: `Permission to use ${cl.name} with command ${r} has been denied.`,
        decisionReason: {
          type: "rule",
          rule: l.matchingDenyRules[0]
        }
      };
      i ??= l.matchingAskRules[0];
    }
    if (i) return {
      behavior: "ask",
      message: gp(cl.name),
      decisionReason: {
        type: "rule",
        rule: i
      }
    };
  }
  if (s[0] !== void 0) return {
    behavior: "ask",
    message: gp(cl.name),
    decisionReason: {
      type: "rule",
      rule: s[0]
    }
  };
  return {
    behavior: "allow",
    updatedInput: e,
    decisionReason: {
      type: "other",
      reason: t2e
    }
  };
}
function sTf(e, t, n, r) {
  let o = [],
    s = [];
  for (let i = 0; i < e.length; i++) {
    let a = e[i],
      l = t?.[i];
    if ((a === `cd ${n}` && NCl(n) || a === `cd ${r}` && NCl(r)) && l !== void 0 && l.argv.length === 2 && l.argv[0] === "cd" && l.envVars.length === 0 && l.redirects.length === 0 && !/[*?[\]]/.test(l.argv[1]) && !Bp(l.argv[1])) continue;
    o.push(a), s.push(l);
  }
  return {
    subcommands: o,
    astCommandsByIdx: s
  };
}
function NCl(e) {
  return !/[\s\\$`'"*?[\]{}<>|&;()]/.test(e);
}
function iTf(e) {
  if (e.includes("||") || e.includes(";")) return !1;
  if (e.includes(`
`)) return !1;
  if (e.replaceAll("&&", "").includes("&")) return !1;
  return !0;
}
function aTf(e, t, n) {
  if (!e) return null;
  if (e.envVars.length > 0 || e.redirects.length > 0) return null;
  if (e.argv.length !== 2 || e.argv[0] !== "cd") return null;
  let r = e.argv[1];
  if (Bp(r)) return null;
  if (r.startsWith("-")) return null;
  if (!WCl(r)) return null;
  if (!vP.isAbsolute(r) && r.split(/[\\/]/).includes("..")) return null;
  if (Vt() === "windows" && !VCl(r, t)) return null;
  if (/[*?[\]]/.test(r)) return null;
  let {
    allowed: o,
    resolvedPath: s
  } = P2t(r, t, n, "read");
  if (!o) return null;
  if (!JU(s, n, [s])) return null;
  return s;
}
async function lTf(e, t, n) {
  let r = await sPo(n);
  if (r === null) return !1;
  if (On(t, i => wde(i)) > 1) return !1;
  let s = !1;
  for (let i = 0; i < t.length; i++) {
    if (!wde(t[i])) continue;
    s = !0;
    let a = e[i];
    if (!a) return !1;
    if (a.envVars.length > 0 || a.redirects.length > 0) return !1;
    if (a.argv.length !== 2 || a.argv[0] !== "cd") return !1;
    if (Bp(a.argv[1])) return !1;
    let l = Vt() === "windows" ? GCl(t[i]) : a.argv[1];
    if (l === null) return !1;
    if (!(await qCl(l, n, r))) return !1;
  }
  return s;
}
async function cTf(e, t) {
  let n = await sPo(t);
  if (n === null) return !1;
  if (On(e, s => wde(s.trim())) > 1) return !1;
  let o = !1;
  for (let s of e) {
    let i = s.trim();
    if (!wde(i)) continue;
    o = !0;
    let a = GCl(i);
    if (a === null) return !1;
    if (!(await qCl(a, t, n))) return !1;
  }
  return o;
}
function GCl(e) {
  let t = e.trim();
  if (!t.startsWith("cd ")) return null;
  let n = t.slice(3).trim();
  if (n.length === 0) return null;
  let r = n[0];
  if (r === '"' || r === "'") {
    if (n.length < 2 || n.at(-1) !== r) return null;
    let o = n.slice(1, -1);
    if (o.includes(r)) return null;
    if (r === '"' && o.includes("\\") && Vt() !== "windows") return null;
    if (/[\x00-\x1f\x7f]/.test(o)) return null;
    return o;
  }
  if (/\s/.test(n)) return null;
  if (/['"]/.test(n)) return null;
  if (n.includes("\\")) return null;
  if (/[<>|&;(){}]/.test(n)) return null;
  return n;
}
function WCl(e) {
  return vP.isAbsolute(e) || e.startsWith("./") || e.startsWith("../") || e === "." || e === "..";
}
async function qCl(e, t, n) {
  if (e.startsWith("-")) return !1;
  if (!WCl(e)) return !1;
  if (e.includes("$") || e.includes("`") || /[*?[]/.test(e) || Vt() !== "windows" && e.includes("\\") || Vt() === "windows" && e.includes("%")) return !1;
  if (j0(e) || Vt() === "windows" && /^[\\/]{2}/.test(e)) return !1;
  if (Vt() === "windows" && !VCl(e, t)) return !1;
  {
    let s = vP.isAbsolute(e),
      i = !1;
    for (let a of e.split(/[\\/]/)) {
      if (a === "" || a === ".") continue;
      if (a === "..") {
        if (!s || i) return !1;
        continue;
      }
      i = !0;
    }
  }
  let r = vP.isAbsolute(e) ? e : vP.resolve(t, e),
    o = await sPo(r);
  if (o === null) return !1;
  return o === n;
}
function VCl(e, t) {
  let n = e,
    r,
    o = /^[A-Za-z]:[\\/]/.exec(e);
  if (o) n = e.slice(o[0].length), r = 0;else if (/^[\\/]/.test(e) || e.includes("\\")) return !1;else {
    if (/^[\\/]{2}/.test(t)) return !1;
    r = 0;
    for (let a of t.replace(/^[A-Za-z]:/, "").split(/[\\/]/)) {
      if (a === "" || a === ".") continue;
      r += a === ".." ? -1 : 1;
    }
  }
  let s = !o,
    i = !1;
  for (let a of n.split(/[\\/]/)) {
    if (a === "" || a === ".") continue;
    if (a === "..") {
      if (r === 0) return !1;
      r -= 1, i = !0;
      continue;
    }
    if (s && i) return !1;
    if (a.includes(":") || /[ .]$/.test(a)) return !1;
    r += 1;
  }
  return !0;
}
async function sPo(e) {
  if (Vt() === "windows") {
    let t = e.split(/[\\/]/);
    for (let r = 0; r < t.length; r++) {
      let o = t[r];
      if (o === "." || o === "..") continue;
      if (/[ .]$/.test(o)) return null;
      if (o.includes(":") && !(r === 0 && /^[A-Za-z]:$/.test(o))) return null;
    }
    let n = await ZJn.stat(e, {
      bigint: !0
    }).catch(() => null);
    if (n === null || n.ino === 0n || n.ino === 0xffffffffffffffffn) return null;
    return `${n.dev}:${n.ino}`;
  }
  return await ZJn.realpath(e).catch(() => null);
}
function zCl(e, t) {
  let {
    matchingDenyRules: n,
    matchingAskRules: r
  } = Q$e(e, t, "prefix");
  if (n[0] !== void 0) return {
    behavior: "deny",
    message: `Permission to use ${cl.name} with command ${e.command} has been denied.`,
    decisionReason: {
      type: "rule",
      rule: n[0]
    }
  };
  let o = oQn(e, t);
  if (o.behavior === "deny") return o;
  if (r[0] !== void 0) return {
    behavior: "ask",
    message: gp(cl.name),
    decisionReason: {
      type: "rule",
      rule: r[0]
    }
  };
  if (o.behavior !== "passthrough") return o;
  return null;
}
function uTf(e, t) {
  let n = zCl(e, t);
  if (n?.behavior === "deny") return n;
  for (let s of By(e.command)) {
    let i = Q$e({
      ...e,
      command: s
    }, t, "prefix").matchingDenyRules[0];
    if (i !== void 0) return {
      behavior: "deny",
      message: `Permission to use ${cl.name} with command ${e.command} has been denied.`,
      decisionReason: {
        type: "rule",
        rule: i
      }
    };
  }
  let r = S$a(e.command);
  if (r !== null) {
    G("tengu_bash_dangerous_rm_too_complex", {});
    let {
      command: s,
      target: i
    } = r;
    return Xqe(s, `Dangerous ${s} operation detected: '${i}'

This target is a shell variable expansion that points at the filesystem ` + "root (or a top-level directory) when the variable is unset or empty \u2014 " + "e.g. `rm -rf $UNSET/*` becomes `rm -rf /*`. This requires explicit approval and cannot be auto-allowed by permission rules.", `on possibly-empty variable path: ${i}`);
  }
  if (n === null || n.behavior !== "allow") return n;
  return (n.decisionReason?.type === "rule" ? n.decisionReason.rule.ruleValue.ruleContent : void 0) === e.command.trim() ? n : null;
}
function dTf(e, t, n) {
  let r = zCl(e, t);
  if (r?.behavior === "deny") return r;
  for (let o of n) {
    let s = Q$e({
      ...e,
      command: o.text
    }, t, "prefix", {
      astCommand: o
    }).matchingDenyRules[0];
    if (s !== void 0) return {
      behavior: "deny",
      message: `Permission to use ${cl.name} with command ${e.command} has been denied.`,
      decisionReason: {
        type: "rule",
        rule: s
      }
    };
  }
  if (r?.behavior === "allow") {
    if ((r.decisionReason?.type === "rule" ? r.decisionReason.rule.ruleValue.ruleContent : void 0) === e.command.trim()) return r;
  }
  if (r?.behavior === "ask") return r;
  return null;
}
function uHl(e, t, n, r) {
  if (!SLe()) return !1;
  if (t.mode === "auto") return !1;
  if (t.mode === "bypassPermissions") return !1;
  let o = vNn(t);
  if (o.length === 0) return !1;
  let s = $t(),
    i = wNn(e, s, o, "allow", n, r);
  return i.catch(() => {}), KCl.set(e, i), !0;
}
function sQn() {
  KCl.clear();
}
function YCl(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.type === "ERROR") return !0;
    if (t.type === "&") {
      if (e.type !== "binary_expression") return !0;
      continue;
    }
    if (YCl(t)) return !0;
  }
  return !1;
}
async function V6t(e, t, n = sSt) {
  let r = await pTf(e, t, n);
  if (r.behavior !== "allow" || !e.command.includes("&")) return r;
  if (r.decisionReason?.type === "other" && r.decisionReason.reason === t2e) return r;
  let o = await pct(e.command);
  if (o && o !== wue && !YCl(o)) return r;
  let s = {
    type: "safetyCheck",
    reason: "This command uses the `&` background operator, which defers execution past approval-time safety checks. Approve only if you trust it.",
    classifierApprovable: !1
  };
  return {
    behavior: "ask",
    decisionReason: s,
    message: gp(cl.name, s)
  };
}
async function pTf(e, t, n = sSt) {
  let r = Fr(t);
  Mca(t.sessionEnvVars?.keys() ?? []);
  let o = await pct(e.command),
    s = o ? UWe(e.command, o) : {
      kind: "simple",
      commands: [],
      bareAssignmentNames: []
    };
  if (s.kind === "too-complex") {
    let z = uTf(e, r);
    if (z !== null) return z;
    let K = tTf(e, r, s.nodeType);
    if (K !== null) return K;
    let Z = {
      type: "other",
      reason: s.reason,
      bashMissKind: "too-complex"
    };
    return G("tengu_bash_ast_too_complex", {
      nodeTypeId: gra(s.nodeType)
    }), {
      behavior: "ask",
      decisionReason: Z,
      message: gp(cl.name, Z),
      suggestions: [],
      ...{}
    };
  }
  let i = s.commands,
    a = Cra(i);
  if (!a.ok) {
    let z = dTf(e, r, i);
    if (z !== null) return z;
    if (a.kind === "newline-hash") {
      let Z = $Cl(e, r, i, s.bareAssignmentNames);
      if (Z) return Z;
    }
    let K = {
      type: "other",
      reason: a.reason,
      bashMissKind: "semantics"
    };
    return {
      behavior: "ask",
      decisionReason: K,
      message: gp(cl.name, K),
      suggestions: []
    };
  }
  let l = i.map(z => z.text),
    c = i.flatMap(z => z.redirects),
    u = $Cl(e, r, i, s.bareAssignmentNames);
  if (u) return u;
  let d = oQn(e, r);
  if (d.behavior === "deny") return d;
  if (SLe() && r.mode !== "auto") {
    let z = Oca(r),
      K = Nca(r),
      Z = z.length > 0,
      J = K.length > 0;
    if (Z || J) {
      let [ne, oe] = await Promise.all([Z ? wNn(e.command, $t(), z, "deny", t.abortController.signal, t.options.isNonInteractiveSession) : null, J ? wNn(e.command, $t(), K, "ask", t.abortController.signal, t.options.isNonInteractiveSession) : null]);
      if (t.abortController.signal.aborted) throw new ru();
      if (ne) LCl(e.command, "deny", z, ne);
      if (oe) LCl(e.command, "ask", K, oe);
      if (ne?.matches && ne.confidence === "high") return {
        behavior: "deny",
        message: `${Iet}: "${ne.matchedDescription}"`,
        decisionReason: {
          type: "safetyCheck",
          reason: `${Iet}: "${ne.matchedDescription}"`,
          classifierApprovable: !1
        }
      };
      if (oe?.matches && oe.confidence === "high") {
        let re;
        if (n === sSt) re = J$e(e.command);else {
          let ee = await n(e.command, t.abortController.signal, t.options.isNonInteractiveSession);
          if (t.abortController.signal.aborted) throw new ru();
          re = ee?.commandPrefix ? FCl(ee.commandPrefix) : J$e(e.command);
        }
        return {
          behavior: "ask",
          message: gp(cl.name),
          decisionReason: {
            type: "other",
            reason: `Required by Bash prompt rule: "${oe.matchedDescription}"`,
            bashMissKind: "prompt-ask-rule"
          },
          suggestions: re,
          ...{}
        };
      }
    }
  }
  let p = await ICl(e, z => V6t(z, t, n), {
    isNormalizedCdCommand: wde,
    isNormalizedGitCommand: Qqe
  }, o, i, z => cTf(z, $t()));
  if (p.behavior !== "passthrough") {
    if (p.behavior === "allow") {
      r = Fr(t);
      let z = Cjn(e, $t(), r, sKt(e.command), c, i);
      if (z.behavior === "deny" || z.behavior === "ask" && !z.bashAllowRuleOverridable) return z;
    }
    if (p.behavior === "ask") return r = Fr(t), {
      ...p,
      ...{}
    };
    return p;
  }
  let f = $t(),
    m = Vt() === "windows" ? TD(f) : f,
    {
      subcommands: g,
      astCommandsByIdx: h
    } = sTf(l, i, f, m),
    y = g.filter(z => wde(z));
  if (y.length > 1) {
    let K = Uo([f, ...jj(Fr(t))].flatMap(ae => {
        let {
          resolvedPath: de
        } = jd(qt(), ae);
        return de === ae ? [ae] : [ae, de];
      }).map(ae => vP.normalize(ae))).map(ae => ({
        exact: ym(ae),
        prefix: ym(/[\\/]$/.test(ae) ? ae : ae + vP.sep)
      })),
      Z = ae => {
        let de = ym(vP.normalize(ae));
        return K.some(Ee => de === Ee.exact || de.startsWith(Ee.prefix));
      },
      ne = !/[;|\n&]/.test(e.command.replace(/&&/g, "")),
      {
        resolvedPath: oe
      } = jd(qt(), f),
      re = Uo([vP.normalize(f), vP.normalize(oe)]),
      ee = [];
    for (let ae of i) {
      let [de, ...Ee] = mEe(ae.argv),
        me = de?.replace(/^.*[\\/]/, "");
      if (me === "cd" || me === "chdir" || me === "pushd" || me === "popd") {
        if (me === "popd") {
          if (Ee.length === 0 && ee.length > 0) re = ee.pop();else ne = !1;
        } else {
          let ge = Ee.filter(He => He !== "--" && (He === "-" || !He.startsWith("-"))),
            he = ge.length === 1 ? ge[0] : void 0,
            ie = !1,
            le = [];
          if (he !== void 0 && he !== "-" && !/^[+-]\d+$/.test(he) && !he.startsWith("~") && !/[*?[]/.test(he) && !Bp(he) && !/(^|[\\/])\.\.([\\/]|$)/.test(he)) {
            ie = !0;
            for (let He of re) {
              let ye = vP.isAbsolute(he) ? vP.normalize(he) : vP.resolve(He, he),
                {
                  resolvedPath: ue
                } = jd(qt(), ye);
              if (!Z(ye) || !Z(ue)) {
                ie = !1;
                break;
              }
              le.push(vP.normalize(ye), vP.normalize(ue));
            }
          }
          if (ne &&= ie, ie) {
            if (me === "pushd") ee.push(re);
            re = Uo(le);
          }
        }
        continue;
      }
      if (me !== "rm" && me !== "rmdir") continue;
      let pe = wjn(me, Ee, f, Fr(t), !ne);
      if (pe.behavior !== "passthrough") return pe;
    }
    let ce = {
      type: "other",
      reason: "Multiple directory changes in one command require approval for clarity",
      bashMissKind: "multi-cd"
    };
    return {
      behavior: "ask",
      decisionReason: ce,
      message: gp(cl.name, ce)
    };
  }
  let b = y.length > 0,
    _ = f,
    S = b,
    A = !1;
  if (b && g.length > 1 && g.length === l.length && wde(g[0]) && iTf(e.command)) {
    let z = aTf(h[0], f, r);
    if (z !== null) _ = z, S = !1, A = !0;
  }
  let v;
  if (b) {
    if (g.some(K => Qqe(K.trim())) && !(await lTf(h, g, f))) {
      let K = {
        type: "other",
        reason: "This command changes directory before running git, which can execute untrusted hooks from the target directory. Approve only if you trust it.",
        bashMissKind: "cd-git-compound"
      };
      v = {
        behavior: "ask",
        decisionReason: K,
        message: gp(cl.name, K)
      };
    }
  }
  let C;
  if (g.some(K => Qqe(K.trim())) && (xjn(h, _) || ZGt(e.command))) {
    let K = {
      type: "other",
      reason: "This command creates git repository structure files (HEAD/objects/refs/hooks) and then runs git, which can execute hooks/fsmonitor from the created files.",
      bashMissKind: "cd-git-compound"
    };
    C = {
      behavior: "ask",
      decisionReason: K,
      message: gp(cl.name, K)
    };
  }
  r = Fr(t);
  let x = g.map((z, K) => jCl({
    command: z
  }, r, S, h[K], A && K === 0 ? f : _, s.bareAssignmentNames));
  if (x.find(z => z.behavior === "deny") !== void 0) return {
    behavior: "deny",
    message: `Permission to use ${cl.name} with command ${e.command} has been denied.`,
    decisionReason: {
      type: "subcommandResults",
      reasons: new Map(x.map((z, K) => [g[K], z]))
    }
  };
  let k = h.slice(A ? 1 : 0).filter(z => z !== void 0),
    D = Cjn(e, _, r, S, c, k);
  if (D.behavior === "deny") return D;
  if (D.behavior === "ask" && D.decisionReason?.type === "safetyCheck" && D.decisionReason.classifierApprovable === !1) return D;
  if (v !== void 0) return v;
  if (C !== void 0) return C;
  let P = g.map((z, K) => [z, K]).filter(([z]) => bgo(z)).map(([, z]) => z);
  if (P.length > 0) {
    let z = P.every(J => {
        let ne = x[J];
        return ne?.behavior === "allow" && ne.decisionReason?.type === "rule";
      }),
      K = x.some(J => J.behavior !== "allow"),
      Z = D.behavior === "ask" && !D.bashAllowRuleOverridable;
    if (!z && !K && !Z && d.behavior !== "allow") {
      let J = new Set(P.filter(oe => {
          let re = x[oe];
          return re?.behavior === "allow" && re.decisionReason?.type === "rule";
        }).map(oe => g[oe].trim())),
        ne = Sgo(e, r, J);
      if (ne.behavior === "ask") return {
        ...ne,
        ...{}
      };
    }
  }
  let O = x.find(z => z.behavior === "ask"),
    L = On(x, z => z.behavior !== "allow");
  if (D.behavior === "ask" && O === void 0 && !D.bashAllowRuleOverridable) return D;
  if (O !== void 0 && L === 1) return {
    ...O,
    ...{}
  };
  if (d.behavior === "allow") return d;
  if (x.every(z => z.behavior === "allow")) return {
    behavior: "allow",
    updatedInput: e,
    decisionReason: {
      type: "subcommandResults",
      reasons: new Map(x.map((z, K) => [g[K], z]))
    }
  };
  let M = null;
  if (n !== sSt) {
    if (M = await n(e.command, t.abortController.signal, t.options.isNonInteractiveSession), t.abortController.signal.aborted) throw new ru();
  }
  if (r = Fr(t), g.length === 1) {
    let z = await MCl({
      command: g[0]
    }, r, M, S, h[0], _, s.bareAssignmentNames);
    if (z.behavior === "ask" || z.behavior === "passthrough") return {
      ...z,
      ...{}
    };
    return z;
  }
  let N = [];
  for (let z = 0; z < g.length; z++) {
    let K = g[z];
    N.push(await MCl({
      ...e,
      command: K
    }, r, M?.subcommandPrefixes.get(K), S, h[z], A && z === 0 ? f : _, s.bareAssignmentNames));
  }
  let B = {
      deny: 3,
      ask: 2,
      passthrough: 1,
      allow: 0
    },
    $ = new Map();
  for (let z = 0; z < g.length; z++) {
    let K = g[z],
      Z = N[z],
      J = $.get(K),
      ne = B[Z.behavior],
      oe = J ? B[J.behavior] : -1;
    if (!J || ne > oe || ne === oe && Sq(Z.decisionReason) !== void 0 && Sq(J.decisionReason) === void 0) $.set(K, Z);
  }
  if (N.every(z => z.behavior === "allow")) return {
    behavior: "allow",
    updatedInput: e,
    decisionReason: {
      type: "subcommandResults",
      reasons: $
    }
  };
  let q = new Map();
  for (let z = 0; z < N.length; z++) {
    let K = g[z],
      Z = N[z];
    if (Z.behavior === "ask" || Z.behavior === "passthrough") {
      let J = "suggestions" in Z ? Z.suggestions : void 0,
        ne = Jjt(J);
      for (let oe of ne) {
        let re = Pp(oe);
        q.set(re, oe);
      }
      if (Z.behavior === "ask" && ne.length === 0 && Z.decisionReason?.type !== "rule") for (let oe of Jjt(J$e(K))) {
        let re = Pp(oe);
        q.set(re, oe);
      }
    }
  }
  let W = {
      type: "subcommandResults",
      reasons: $
    },
    V = Array.from(q.values()).slice(0, VHf),
    Y = V.length > 0 ? [{
      type: "addRules",
      rules: V,
      behavior: "allow",
      destination: "localSettings"
    }] : void 0;
  return {
    behavior: O !== void 0 ? "ask" : "passthrough",
    message: gp(cl.name, W),
    decisionReason: W,
    suggestions: Y,
    ...{}
  };
}
function Qqe(e) {
  if (e.startsWith("git ") || e === "git") return !0;
  let t = A5(e),
    n = oA(t);
  if (n[0] === "git") return !0;
  if (n[0] === "xargs" && n.includes("git")) return !0;
  return !1;
}
function wde(e) {
  let t = oA(A5(e))[0];
  return t === "cd" || t === "pushd" || t === "popd" || t === "chdir";
}
function sKt(e) {
  return By(e).some(t => wde(t.trim()));
}
var ZJn,
  vP,
  eQn,
  VHf = 5,
  nQn,
  ACl,
  oPo,
  LKt,
  DCl,
  JHf,
  QHf,
  ZHf,
  PCl,
  oQn = (e, t) => {
    let n = e.command.trim(),
      {
        matchingDenyRules: r,
        matchingAskRules: o,
        matchingAllowRules: s
      } = Q$e(e, t, "exact");
    if (r[0] !== void 0) return {
      behavior: "deny",
      message: `Permission to use ${cl.name} with command ${n} has been denied.`,
      decisionReason: {
        type: "rule",
        rule: r[0]
      }
    };
    if (o[0] !== void 0) return {
      behavior: "ask",
      message: gp(cl.name),
      decisionReason: {
        type: "rule",
        rule: o[0]
      }
    };
    if (s[0] !== void 0) return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "rule",
        rule: s[0]
      }
    };
    let i = {
      type: "other",
      reason: "This command requires approval",
      bashMissKind: "no-rule-match"
    };
    return {
      behavior: "passthrough",
      message: gp(cl.name, i),
      decisionReason: i,
      suggestions: J$e(n)
    };
  },
  jCl = (e, t, n, r, o = $t(), s = []) => {
    let i = e.command.trim(),
      a = oQn(e, t);
    if (a.behavior === "deny" || a.behavior === "ask") return a;
    let {
      matchingDenyRules: l,
      matchingAskRules: c,
      matchingAllowRules: u
    } = Q$e(e, t, "prefix", {
      skipCompoundCheck: r !== void 0,
      astCommand: r
    });
    if (l[0] !== void 0) return {
      behavior: "deny",
      message: `Permission to use ${cl.name} with command ${i} has been denied.`,
      decisionReason: {
        type: "rule",
        rule: l[0]
      }
    };
    if (c[0] !== void 0) return {
      behavior: "ask",
      message: gp(cl.name),
      decisionReason: {
        type: "rule",
        rule: c[0]
      }
    };
    let d = Cjn(e, o, t, n, r?.redirects, r ? [r] : void 0);
    if (d.behavior === "deny" || d.behavior === "ask" && !d.bashAllowRuleOverridable) return d;
    if (a.behavior === "allow") return a;
    if (u[0] !== void 0) return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "rule",
        rule: u[0]
      }
    };
    if (d.behavior === "ask") return d;
    let p = m$a(e, t);
    if (p.behavior !== "passthrough") return p;
    let f = kCl(e, t);
    if (f.behavior !== "passthrough") return f;
    let m = Yjt();
    if (cl.isReadOnly(e) && !XHf(e, r) && !s.some(h => !gEe(h) && (m === null || m.has(h)))) return {
      behavior: "allow",
      updatedInput: e,
      decisionReason: {
        type: "other",
        reason: jRt
      }
    };
    let g = {
      type: "other",
      reason: "This command requires approval",
      bashMissKind: "no-rule-match"
    };
    return {
      behavior: "passthrough",
      message: gp(cl.name, g),
      decisionReason: g,
      suggestions: J$e(i)
    };
  },
  nTf,
  OCl,
  KCl;