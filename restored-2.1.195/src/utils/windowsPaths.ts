// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sj
// matched 2.1.88 source: src/utils/windowsPaths.ts
// class=modified  jaccard=0.2177  score=0.5089  fileCov=0.2756
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var sj = E(() => {
  Qi();
  je();
  ys();
  SG();
  Is();
  QZe();
  nCe = R(require("path/win32"));
  Hhe = Cn(() => {
    let { existsSync: e } = qt();
    if (process.env.CLAUDE_CODE_GIT_BASH_PATH) {
      if (e(process.env.CLAUDE_CODE_GIT_BASH_PATH)) return process.env.CLAUDE_CODE_GIT_BASH_PATH;
      (console.error(
        `Claude Code was unable to find CLAUDE_CODE_GIT_BASH_PATH path "${process.env.CLAUDE_CODE_GIT_BASH_PATH}"`,
      ),
        process.exit(1));
    }
    let t = [
      "C:\\Program Files\\Git\\bin\\bash.exe",
      "C:\\Program Files (x86)\\Git\\bin\\bash.exe",
    ];
    for (let r of t) if (e(r)) return r;
    let n = Xkr("git");
    if (n) {
      let r = nCe.join(n, "..", "..", "bin", "bash.exe");
      if (e(r)) return r;
    }
    return null;
  });
  ((TD = JC(
    (e) => {
      if (e.startsWith("\\\\")) return e.replaceAll("\\", "/");
      let t = e.match(/^([A-Za-z]):[/\\]/);
      if (t) return "/" + t[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
      return e.replaceAll("\\", "/");
    },
    (e) => e,
    500,
  )),
    (NFe = JC(
      (e) => {
        if (e.startsWith("//")) return e.replaceAll("/", "\\");
        let t = e.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
        if (t) {
          let r = t[1].toUpperCase(),
            o = e.slice(("/cygdrive/" + t[1]).length);
          return r + ":" + (o || "\\").replaceAll("/", "\\");
        }
        let n = e.match(/^\/([A-Za-z])(\/|$)/);
        if (n) {
          let r = n[1].toUpperCase(),
            o = e.slice(2);
          return r + ":" + (o || "\\").replaceAll("/", "\\");
        }
        return e.replaceAll("/", "\\");
      },
      (e) => e,
      500,
    )));
});
function sRt(e, t) {
  if (e.type !== "user") return;
  if (e.isMeta === true || e.isCompactSummary === true) return;
  let n = e.message;
  if (!n) return;
  let r = n.content,
    o = [];
  if (typeof r === "string") o.push(r);
  else if (Array.isArray(r))
    for (let s of r) {
      if (!s || typeof s !== "object") continue;
      if (s.type === "tool_result") return;
      if (s.type === "text" && typeof s.text === "string") o.push(s.text);
    }
  for (let s of o) {
    let i = s
      .replaceAll(
        `
`,
        " ",
      )
      .trim();
    if (!i) continue;
    let a = hPu.exec(i);
    if (a) {
      if (!t.commandFallback) t.commandFallback = a[1];
      continue;
    }
    let l = /<bash-input>([\s\S]*?)<\/bash-input>/.exec(i);
    if (l) return `! ${l[1].trim()}`;
    if (gPu.test(i)) continue;
    if (i.length > 200) i = i.slice(0, 200).trim() + "\u2026";
    return i;
  }
  return;
}
var gPu, hPu;
