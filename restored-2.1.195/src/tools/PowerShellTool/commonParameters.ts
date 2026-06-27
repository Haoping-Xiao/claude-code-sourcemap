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
      return true;
    }
    if (n[s] === "Parameter") {
      let i = o?.[s];
      if (i) {
        if (i.some((a) => a.type !== "StringConstant")) return true;
      } else {
        let a = r[s] ?? "",
          l = a.indexOf(":");
        if (l > 0 && /[$(@{[]/.test(a.slice(l + 1))) return true;
      }
    }
  }
  return false;
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
  if (t === "cd.." || t === "cd\\" || t === "cd/" || t === "cd~" || /^[a-z]:$/.test(t)) return true;
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
  if (!obf.has(n)) return false;
  return pze(e, t);
}
function jLo(e) {
  if (e.statementType !== "PipelineAst") return false;
  if (e.commands.length === 0) return false;
  for (let t of e.commands) if (t.elementType !== "CommandAst") return false;
  return true;
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
  if (!t) return false;
  if (/\$\(/.test(t)) return true;
  if (/(?:^|[^\w.])@\w+/.test(t)) return true;
  if (/\.\w+\s*\(/.test(t)) return true;
  if (/\$\w+\s*[+\-*/]?=/.test(t)) return true;
  if (/--%/.test(t)) return true;
  if (/\\\\/.test(t) || /(?<!:)\/\//.test(t)) return true;
  if (/::/.test(t)) return true;
  return false;
}
function aJn(e, t) {
  if (!e.trim()) return false;
  if (!t) return false;
  if (!t.valid) return false;
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
    return false;
  let o = G2n(t);
  if (o.length === 0) return false;
  if (o.reduce((i, a) => i + a.commands.length, 0) > 1) {
    if (o.some((a) => a.commands.some((l) => lKt(l.name)))) return false;
  }
  for (let i of o) {
    if (!i || i.commands.length === 0) return false;
    if (i.redirections.length > 0) {
      if (i.redirections.some((c) => !c.isMerging && !Opt(c.target))) return false;
    }
    let a = i.commands[0];
    if (!a) return false;
    if (!pze(a, e)) return false;
    for (let l = 1; l < i.commands.length; l++) {
      let c = i.commands[l];
      if (!c || c.nameType === "application") return false;
      if (fze(c.name) && c.args.length === 0) continue;
      if (!pze(c, e)) return false;
    }
    if (i.nestedCommands && i.nestedCommands.length > 0) return false;
  }
  return true;
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
    if (a.length > 0 && !KHl.has(a)) return true;
  }
  return false;
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
function GLo(e, t = true) {
  let n = e.replace(/`[\r\n]+\s*/g, "");
  if (aKt(e) || aKt(OLo(n))) return true;
  if (t) {
    let r = tTl(e);
    if (r !== null) {
      let { post: o, postResolved: s } = r;
      if (r.isHereString) return true;
      let i = Mk(s),
        a = Mk(o);
      if (aKt(i) || aKt(a) || aKt(OLo(i))) return true;
    }
  }
  return false;
}
function pze(e, t) {
  if (e.nameType === "application") {
    let a = e.text.split(/\s/, 1)[0]?.toLowerCase() ?? "";
    if (!sbf.has(a)) return false;
  }
  let n = dbf(e.name);
  if (!n) return false;
  if (n.regex && !n.regex.test(t)) return false;
  if (n.additionalCommandIsDangerousCallback?.(t, e)) return false;
  if (!e.elementTypes) return false;
  for (let a = 1; a < e.elementTypes.length; a++) {
    let l = e.elementTypes[a];
    if (l !== "StringConstant" && l !== "Parameter") {
      if (!/[$(@{[]/.test(e.args[a - 1] ?? "")) continue;
      return false;
    }
    if (l === "Parameter") {
      let c = e.children?.[a - 1];
      if (c) {
        if (c.some((u) => u.type !== "StringConstant")) return false;
      } else {
        let u = e.args[a - 1] ?? "",
          d = u.indexOf(":");
        if (d > 0 && /[$(@{[]/.test(u.slice(d + 1))) return false;
      }
    }
  }
  let r = zm(e.name),
    o = ibf.has(r),
    s = r.includes("-"),
    i = e.nameType !== "cmdlet";
  if (Vt() === "windows") {
    if (i || o) {
      for (let a of e.args) if (GLo(a, !s || e.nameType === "application")) return false;
    }
    if (cbf(Gbt(e.name)) !== null) return false;
  }
  if (!s || e.nameType === "application")
    for (let a = 1; a < e.elementTypes.length; a++) {
      let l = e.elementTypes[a];
      if (l !== "StringConstant" && l !== "Parameter") return false;
      if (l === "Parameter" && !o && (e.args[a - 1] ?? "").includes(":")) return false;
    }
  if (o) {
    let a = null;
    for (let l = 1; l < e.elementTypes.length; l++) {
      let c = e.args[l - 1] ?? "";
      if (e.elementTypes[l] === "Parameter") {
        let u = tTl(c);
        if (u !== null) {
          if (u.isHereString) return false;
          ((a ??= e.args.slice(0, l - 1)), a.push(c.slice(0, u.colonIdx), MN(Mk(u.postResolved))));
          continue;
        }
      }
      a?.push(c);
    }
    if (a !== null && !XHl(r, a)) return false;
    return XHl(r, e.args);
  }
  if (s && pbf(e.args)) return false;
  if (n.allowAllFlags) return true;
  if (!n.safeFlags || n.safeFlags.length === 0)
    return !e.args.some((l, c) => {
      if (s) return LDe(l, e.elementTypes?.[c + 1]);
      return l.startsWith("-") || false;
    });
  for (let a = 0; a < e.args.length; a++) {
    let l = e.args[a];
    if (s ? LDe(l, e.elementTypes?.[a + 1]) : l.startsWith("-") || false) {
      let u = s ? "-" + l.slice(1) : l;
      if (s || l.startsWith("/")) {
        let f = u.indexOf(":");
        if (f > 0) u = u.substring(0, f);
      }
      let d = u.toLowerCase();
      if (s && WHl.has(d)) continue;
      if (!(s ? n.safeFlags.some((f) => f.toLowerCase() === d) : n.safeFlags.includes(u)))
        return false;
    }
  }
  return true;
}
function XHl(e, t) {
  for (let n of t) if (n.length > 0 && n[0] !== "-" && F4.has(n[0])) return false;
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
      return false;
  }
}
function hbf(e) {
  if (e.length === 0) return true;
  if (Vt() === "windows") {
    for (let c of e) if (GLo(c)) return false;
  }
  for (let c of e) if (c.includes("$")) return false;
  let t = 0;
  while (t < e.length) {
    let c = e[t];
    if (!c || !c.startsWith("-")) break;
    for (let p of gbf)
      if (c.length > p.length && c.startsWith(p) && (p === "-C" || c[p.length] !== "-"))
        return false;
    let u = c.includes("="),
      d = u ? bi(c, "=") : c;
    if (fbf.has(d)) return false;
    if (!u && mbf.has(d)) t += 2;
    else t++;
  }
  if (t >= e.length) return true;
  let n = e[t]?.toLowerCase() || "",
    r = t + 1 < e.length ? e[t + 1]?.toLowerCase() || "" : "",
    o = `git ${n} ${r}`,
    s = `git ${n}`,
    i = R2t[o],
    a = 2;
  if (!i) ((i = R2t[s]), (a = 1));
  if (!i) return false;
  let l = e.slice(t + a);
  if (n === "ls-remote") {
    let c = false;
    for (let u of l) {
      if (!c && u === "--") {
        c = true;
        continue;
      }
      if (c || u === "-" || !u.startsWith("-")) return false;
    }
  }
  if (i.additionalCommandIsDangerousCallback && i.additionalCommandIsDangerousCallback("", l))
    return false;
  return hct(l, 0, i, {
    commandName: "git",
  });
}
function ybf(e) {
  return false;
}
function _bf(e) {
  if (e.length === 0) return true;
  let t = e.map((s) => $re(MN(s.replace(/`[\r\n]+\s*/g, ""))));
  if (Vt() === "windows") {
    for (let s of e) if (GLo(s)) return false;
  }
  for (let s of t) if (s.includes("$")) return false;
  for (let s of t) {
    if (s[0] === "-" && s[1] !== "-")
      for (let a = 1; a < s.length; a++) {
        if (s[a] === "H") return false;
        if (s[a]?.toLowerCase() === "c") return false;
      }
    let i = s.toLowerCase();
    if (
      i.startsWith("--host") ||
      i.startsWith("--context") ||
      i.startsWith("--config") ||
      i.startsWith("--tls")
    )
      return false;
  }
  let n = `docker ${t[0]?.toLowerCase()}`;
  if (LOn.includes(n)) return true;
  let r = ROn[n];
  if (!r) return false;
  let o = t.slice(1);
  if (r.additionalCommandIsDangerousCallback && r.additionalCommandIsDangerousCallback("", o))
    return false;
  return hct(o, 0, r);
}
function bbf(e) {
  if (e.length === 0) return false;
  for (let t of e) if (!nbf.has(t.toLowerCase())) return false;
  return true;
}
var JHl, QHl, nbf, YHl, rbf, obf, sbf, ibf, abf, ZHl, lbf, ubf, fbf, mbf, gbf;
