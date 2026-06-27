// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ntl
// matched 2.1.88 source: src/tools/BashTool/sedEditParser.ts
// class=partial  jaccard=0.1677  score=0.6464  fileCov=0.1846
// note: low-confidence suggestion: src/tools/BashTool/sedEditParser.ts; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ntl] deps: hooks/useTerminalSize.ts, @grpc/grpc-js/build/src/server.js, utils/fsOperations.ts, utils/fileReadCache.ts, utils/fsOperations.ts, utils/settings/constants.ts, components/permissions/NotebookEditPermissionRequest/NotebookEditToolDiff.tsx, services/teamMemorySync/secretScanner.ts, components/AwsAuthStatusBox.tsx, components/permissions/FileWritePermissionRequest/FileWriteToolDiff.tsx, components/StructuredDiff.tsx
Rvo = R(lt(), 1), etl = require("path"), i6n = R(rt(), 1), bN = R(se(), 1);
function parseSedEditCommand(command) {
  let t = command.trim();
  if (vjn(t)) return null;
  let r = hL()?.parse(t)?.children.filter(_ => _.type !== "comment") ?? [];
  if (r.length !== 1 || r[0].type !== "command" || r[0].children.some(_ => !ZZp.has(_.type))) return null;
  let o = oA(t);
  if (o[0] !== "sed") return null;
  let s = o.slice(1),
    i = false,
    a = false,
    l = null,
    c = null,
    u = 0;
  while (u < s.length) {
    let _ = s[u];
    if (_ === "-i" || _ === "--in-place") {
      if (i = true, u++, u < s.length) {
        let S = s[u];
        if (typeof S === "string" && !S.startsWith("-") && (S === "" || S.startsWith("."))) u++;
      }
      continue;
    }
    if (_.startsWith("-i")) {
      i = true, u++;
      continue;
    }
    if (_ === "-E" || _ === "-r" || _ === "--regexp-extended") {
      a = true, u++;
      continue;
    }
    if (_ === "-e" || _ === "--expression") {
      if (u + 1 < s.length && typeof s[u + 1] === "string") {
        if (l !== null) return null;
        l = s[u + 1], u += 2;
        continue;
      }
      return null;
    }
    if (_.startsWith("--expression=")) {
      if (l !== null) return null;
      l = _.slice(13), u++;
      continue;
    }
    if (_.startsWith("-")) return null;
    if (l === null) l = _;else if (c === null) c = _;else return null;
    u++;
  }
  if (!i || !l || !c) return null;
  if (j0(c, true) || Vt() === "windows" && /(?<!:)[\\/]{2,}[^ \t\r\n\f\v\\/]/.test(c)) return null;
  if (!l.match(/^s\//)) return null;
  let p = l.slice(2),
    f = "",
    m = "",
    g = "",
    h = "pattern",
    y = 0;
  while (y < p.length) {
    let _ = p[y];
    if (_ === "\\" && y + 1 < p.length) {
      if (h === "pattern") f += _ + p[y + 1];else if (h === "replacement") m += _ + p[y + 1];else g += _ + p[y + 1];
      y += 2;
      continue;
    }
    if (_ === "/") {
      if (h === "pattern") h = "replacement";else if (h === "replacement") h = "flags";else return null;
      y++;
      continue;
    }
    if (h === "pattern") f += _;else if (h === "replacement") m += _;else g += _;
    y++;
  }
  if (h !== "flags") return null;
  if (!/^[gpimIM1-9]*$/.test(g)) return null;
  return {
    filePath: c,
    pattern: f,
    replacement: m,
    flags: g,
    extendedRegex: a
  };
}
function applySedSubstitution(content, sedInfo) {
  let n = "";
  if (sedInfo.flags.includes("g")) n += "g";
  if (sedInfo.flags.includes("i") || sedInfo.flags.includes("I")) n += "i";
  if (sedInfo.flags.includes("m") || sedInfo.flags.includes("M")) n += "m";
  let r = sedInfo.pattern.replace(/\\\//g, "/");
  if (!sedInfo.extendedRegex) r = r.replace(/\\\\/g, otl).replace(/\\\+/g, stl).replace(/\\\?/g, itl).replace(/\\\|/g, atl).replace(/\\\(/g, ltl).replace(/\\\)/g, ctl).replace(/\+/g, "\\+").replace(/\?/g, "\\?").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(eef, "\\\\").replace(tef, "+").replace(nef, "?").replace(ref, "|").replace(oef, "(").replace(sef, ")");
  let s = `___ESCAPED_AMPERSAND_${rtl.randomBytes(8).toString("hex")}___`,
    i = sedInfo.replacement.replace(/\\\//g, "/").replace(/\\&/g, s).replace(/&/g, "$$&").replace(new RegExp(s, "g"), "&");
  try {
    let a = new RegExp(r, n);
    return content.replace(a, i);
  } catch {
    return content;
  }
}
var rtl,
  ZZp,
  otl = "\x00BACKSLASH\x00",
  stl = "\x00PLUS\x00",
  itl = "\x00QUESTION\x00",
  atl = "\x00PIPE\x00",
  ltl = "\x00LPAREN\x00",
  ctl = "\x00RPAREN\x00",
  eef,
  tef,
  nef,
  ref,
  oef,
  sef;