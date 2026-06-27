// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ULo
// matched 2.1.88 source: src/tools/PowerShellTool/commonParameters.ts
// class=modified  jaccard=0.5258  score=0.5258  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ULo = E(() => {
  ((NLo = ["-verbose", "-debug"]),
    (BLo = [
      "-erroraction",
      "-warningaction",
      "-informationaction",
      "-progressaction",
      "-errorvariable",
      "-warningvariable",
      "-informationvariable",
      "-outvariable",
      "-outbuffer",
      "-pipelinevariable",
      "-ea",
      "-wa",
      "-infa",
      "-proga",
    ]),
    (WHl = new Set([...NLo, ...BLo])),
    (qHl = ["-erroraction", "-warningaction", "-informationaction", "-progressaction"]),
    (VHl = ["-ea", "-wa", "-infa", "-proga"]));
  ((V2b = new Set([...qHl, ...VHl])),
    (KHl = new Set(["silentlycontinue", "0", "stop", "1", "continue", "2", "ignore", "4"])));
});
function iJn(e) {
  let t = e;
  for (;;) {
    let n = t.replace(/ +$/, "");
    if (n === "." || n === "..") return n;
    let r = n.replace(/\.+$/, "");
    if (r === t) return r;
    t = r;
  }
}
function OL(e, t) {
  let n = (t?.elementTypes ?? []).slice(1),
    r = t?.args ?? [],
    o = t?.children;
  for (let s = 0; s < n.length; s++) {
    if (n[s] !== "StringConstant" && n[s] !== "Parameter") {
      if (!/[$(@{[]/.test(r[s] ?? "")) continue;
      return !0;
    }
    if (n[s] === "Parameter") {
      let i = o?.[s];
      if (i) {
        if (i.some((a) => a.type !== "StringConstant")) return !0;
      } else {
        let a = r[s] ?? "",
          l = a.indexOf(":");
        if (l > 0 && /[$(@{[]/.test(a.slice(l + 1))) return !0;
      }
    }
  }
  return !1;
}
function Gbt(e) {
  let n = Mk(e).replace(/^[A-Za-z]:(?![\\/])/, ""),
    r = [];
  for (let s of n.split(/[\\/]+/)) {
    let i = iJn(s.replace(/:.*$/, ""));
    if (i === "." || i === "") continue;
    if (i === "..") {
      if (r.length > 0 && r.at(-1) !== "..") r.pop();
      else r.push("..");
      continue;
    }
    r.push(i);
  }
  return (r.at(-1) ?? "").toLowerCase().replace(lbf(), "");
}
function cbf(e) {
  if (Vt() !== "windows") return null;
  let t = $t();
  for (let n of ZHl()) {
    let r = QHl.join(t, e + n);
    try {
      if (JHl.statSync(r).isFile()) return e + n;
    } catch {}
  }
  return null;
}
function zm(e) {
  let t = e.toLowerCase();
  if (!t.includes("\\") && !t.includes("/")) t = t.replace(ubf, "");
  let n = _de[t];
  if (n) return n.toLowerCase();
  return t;
}
function lKt(e) {
  let t = e.toLowerCase();
  if (t === "cd.." || t === "cd\\" || t === "cd/" || t === "cd~" || /^[a-z]:$/.test(t)) return !0;
  let n = zm(e);
  return (
    n === "set-location" ||
    n === "push-location" ||
    n === "pop-location" ||
    n === "new-psdrive" ||
    (Vt() === "windows" && (n === "ndr" || n === "mount"))
  );
}
function fze(e) {
  let t = zm(e);
  return rbf.has(t);
}
function FLo(e, t) {
  let n = zm(e.name);
  if (!obf.has(n)) return !1;
  return pze(e, t);
}
function jLo(e) {
  if (e.statementType !== "PipelineAst") return !1;
  if (e.commands.length === 0) return !1;
  for (let t of e.commands) if (t.elementType !== "CommandAst") return !1;
  return !0;
}
function dbf(e) {
  let t = e.toLowerCase(),
    n = YHl[t];
  if (n) return n;
  let r = zm(t);
  if (r !== t) return YHl[r];
  return;
}
function eTl(e) {
  let t = e.trim();
  if (!t) return !1;
  if (/\$\(/.test(t)) return !0;
  if (/(?:^|[^\w.])@\w+/.test(t)) return !0;
  if (/\.\w+\s*\(/.test(t)) return !0;
  if (/\$\w+\s*[+\-*/]?=/.test(t)) return !0;
  if (/--%/.test(t)) return !0;
  if (/\\\\/.test(t) || /(?<!:)\/\//.test(t)) return !0;
  if (/::/.test(t)) return !0;
  return !1;
}
function aJn(e, t) {
  if (!e.trim()) return !1;
  if (!t) return !1;
  if (!t.valid) return !1;
  let r = S5(t);
  if (
    r.hasScriptBlocks ||
    r.hasSubExpressions ||
    r.hasExpandableStrings ||
    r.hasSplatting ||
    r.hasMemberInvocations ||
    r.hasAssignments ||
    r.hasStopParsing
  )
    return !1;
  let o = G2n(t);
  if (o.length === 0) return !1;
  if (o.reduce((i, a) => i + a.commands.length, 0) > 1) {
    if (o.some((a) => a.commands.some((l) => lKt(l.name)))) return !1;
  }
  for (let i of o) {
    if (!i || i.commands.length === 0) return !1;
    if (i.redirections.length > 0) {
      if (i.redirections.some((c) => !c.isMerging && !Opt(c.target))) return !1;
    }
    let a = i.commands[0];
    if (!a) return !1;
    if (!pze(a, e)) return !1;
    for (let l = 1; l < i.commands.length; l++) {
      let c = i.commands[l];
      if (!c || c.nameType === "application") return !1;
      if (fze(c.name) && c.args.length === 0) continue;
      if (!pze(c, e)) return !1;
    }
    if (i.nestedCommands && i.nestedCommands.length > 0) return !1;
  }
  return !0;
}
function pbf(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (!F4.has(n[0])) continue;
    let r = n[0] === "-" ? n : "-" + n.slice(1),
      o = r.indexOf(":"),
      s = (o > 0 ? r.slice(0, o) : r).toLowerCase();
    if (!zHl(s)) continue;
    let a = (o > 0 ? r.slice(o + 1) : (e[t + 1] ?? ""))
      .toLowerCase()
      .replace(/^['"]|['"]$/g, "")
      .trim();
    if (a.length > 0 && !KHl.has(a)) return !0;
  }
  return !1;
}
function aKt(e) {
  return (
    e.includes('"') || (/[\s\u0085\u180e]/.test(e) && (e.match(/\\+$/)?.[0].length ?? 0) % 2 === 1)
  );
}
function tTl(e) {
  if (e.length === 0 || !(F4.has(e[0]) || e[0] === "/")) return null;
  let t = e.indexOf(":", 1);
  if (t <= 0) return null;
  let n = hq(e.slice(t + 1)),
    r = hq(n.replace(/`[\r\n]+\s*/g, "")),
    o = /^@['"\u2018-\u201F]/.test(n) || /^@['"\u2018-\u201F]/.test(r);
  return {
    colonIdx: t,
    post: n,
    postResolved: r,
    isHereString: o,
  };
}
function GLo(e, t = !0) {
  let n = e.replace(/`[\r\n]+\s*/g, "");
  if (aKt(e) || aKt(OLo(n))) return !0;
  if (t) {
    let r = tTl(e);
    if (r !== null) {
      let { post: o, postResolved: s } = r;
      if (r.isHereString) return !0;
      let i = Mk(s),
        a = Mk(o);
      if (aKt(i) || aKt(a) || aKt(OLo(i))) return !0;
    }
  }
  return !1;
}
function pze(e, t) {
  if (e.nameType === "application") {
    let a = e.text.split(/\s/, 1)[0]?.toLowerCase() ?? "";
    if (!sbf.has(a)) return !1;
  }
  let n = dbf(e.name);
  if (!n) return !1;
  if (n.regex && !n.regex.test(t)) return !1;
  if (n.additionalCommandIsDangerousCallback?.(t, e)) return !1;
  if (!e.elementTypes) return !1;
  for (let a = 1; a < e.elementTypes.length; a++) {
    let l = e.elementTypes[a];
    if (l !== "StringConstant" && l !== "Parameter") {
      if (!/[$(@{[]/.test(e.args[a - 1] ?? "")) continue;
      return !1;
    }
    if (l === "Parameter") {
      let c = e.children?.[a - 1];
      if (c) {
        if (c.some((u) => u.type !== "StringConstant")) return !1;
      } else {
        let u = e.args[a - 1] ?? "",
          d = u.indexOf(":");
        if (d > 0 && /[$(@{[]/.test(u.slice(d + 1))) return !1;
      }
    }
  }
  let r = zm(e.name),
    o = ibf.has(r),
    s = r.includes("-"),
    i = e.nameType !== "cmdlet";
  if (Vt() === "windows") {
    if (i || o) {
      for (let a of e.args) if (GLo(a, !s || e.nameType === "application")) return !1;
    }
    if (cbf(Gbt(e.name)) !== null) return !1;
  }
  if (!s || e.nameType === "application")
    for (let a = 1; a < e.elementTypes.length; a++) {
      let l = e.elementTypes[a];
      if (l !== "StringConstant" && l !== "Parameter") return !1;
      if (l === "Parameter" && !o && (e.args[a - 1] ?? "").includes(":")) return !1;
    }
  if (o) {
    let a = null;
    for (let l = 1; l < e.elementTypes.length; l++) {
      let c = e.args[l - 1] ?? "";
      if (e.elementTypes[l] === "Parameter") {
        let u = tTl(c);
        if (u !== null) {
          if (u.isHereString) return !1;
          ((a ??= e.args.slice(0, l - 1)), a.push(c.slice(0, u.colonIdx), MN(Mk(u.postResolved))));
          continue;
        }
      }
      a?.push(c);
    }
    if (a !== null && !XHl(r, a)) return !1;
    return XHl(r, e.args);
  }
  if (s && pbf(e.args)) return !1;
  if (n.allowAllFlags) return !0;
  if (!n.safeFlags || n.safeFlags.length === 0)
    return !e.args.some((l, c) => {
      if (s) return LDe(l, e.elementTypes?.[c + 1]);
      return l.startsWith("-") || !1;
    });
  for (let a = 0; a < e.args.length; a++) {
    let l = e.args[a];
    if (s ? LDe(l, e.elementTypes?.[a + 1]) : l.startsWith("-") || !1) {
      let u = s ? "-" + l.slice(1) : l;
      if (s || l.startsWith("/")) {
        let f = u.indexOf(":");
        if (f > 0) u = u.substring(0, f);
      }
      let d = u.toLowerCase();
      if (s && WHl.has(d)) continue;
      if (!(s ? n.safeFlags.some((f) => f.toLowerCase() === d) : n.safeFlags.includes(u)))
        return !1;
    }
  }
  return !0;
}
function XHl(e, t) {
  for (let n of t) if (n.length > 0 && n[0] !== "-" && F4.has(n[0])) return !1;
  switch (e) {
    case "git":
      return hbf(t);
    case "gh":
      return ybf(t);
    case "docker":
      return _bf(t);
    case "dotnet":
      return bbf(t);
    default:
      return !1;
  }
}
function hbf(e) {
  if (e.length === 0) return !0;
  if (Vt() === "windows") {
    for (let c of e) if (GLo(c)) return !1;
  }
  for (let c of e) if (c.includes("$")) return !1;
  let t = 0;
  while (t < e.length) {
    let c = e[t];
    if (!c || !c.startsWith("-")) break;
    for (let p of gbf)
      if (c.length > p.length && c.startsWith(p) && (p === "-C" || c[p.length] !== "-")) return !1;
    let u = c.includes("="),
      d = u ? bi(c, "=") : c;
    if (fbf.has(d)) return !1;
    if (!u && mbf.has(d)) t += 2;
    else t++;
  }
  if (t >= e.length) return !0;
  let n = e[t]?.toLowerCase() || "",
    r = t + 1 < e.length ? e[t + 1]?.toLowerCase() || "" : "",
    o = `git ${n} ${r}`,
    s = `git ${n}`,
    i = R2t[o],
    a = 2;
  if (!i) ((i = R2t[s]), (a = 1));
  if (!i) return !1;
  let l = e.slice(t + a);
  if (n === "ls-remote") {
    let c = !1;
    for (let u of l) {
      if (!c && u === "--") {
        c = !0;
        continue;
      }
      if (c || u === "-" || !u.startsWith("-")) return !1;
    }
  }
  if (i.additionalCommandIsDangerousCallback && i.additionalCommandIsDangerousCallback("", l))
    return !1;
  return hct(l, 0, i, {
    commandName: "git",
  });
}
function ybf(e) {
  return !1;
}
function _bf(e) {
  if (e.length === 0) return !0;
  let t = e.map((s) => $re(MN(s.replace(/`[\r\n]+\s*/g, ""))));
  if (Vt() === "windows") {
    for (let s of e) if (GLo(s)) return !1;
  }
  for (let s of t) if (s.includes("$")) return !1;
  for (let s of t) {
    if (s[0] === "-" && s[1] !== "-")
      for (let a = 1; a < s.length; a++) {
        if (s[a] === "H") return !1;
        if (s[a]?.toLowerCase() === "c") return !1;
      }
    let i = s.toLowerCase();
    if (
      i.startsWith("--host") ||
      i.startsWith("--context") ||
      i.startsWith("--config") ||
      i.startsWith("--tls")
    )
      return !1;
  }
  let n = `docker ${t[0]?.toLowerCase()}`;
  if (LOn.includes(n)) return !0;
  let r = ROn[n];
  if (!r) return !1;
  let o = t.slice(1);
  if (r.additionalCommandIsDangerousCallback && r.additionalCommandIsDangerousCallback("", o))
    return !1;
  return hct(o, 0, r);
}
function bbf(e) {
  if (e.length === 0) return !1;
  for (let t of e) if (!nbf.has(t.toLowerCase())) return !1;
  return !0;
}
var JHl, QHl, nbf, YHl, rbf, obf, sbf, ibf, abf, ZHl, lbf, ubf, fbf, mbf, gbf;
