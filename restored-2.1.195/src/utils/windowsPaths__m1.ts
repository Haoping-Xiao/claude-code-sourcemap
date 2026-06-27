// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QZe
// matched 2.1.88 source: src/utils/windowsPaths.ts
// class=modified (alt of src/utils/windowsPaths.ts)  jaccard=0.1148  score=0.5058  fileCov=0.1294
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module QZe] deps: @grpc/grpc-js/build/src/server.js
((FEs = require("child_process")), (jEs = require("fs")), (GEs = require("path")));
XZe = new Map();
pPu = new Set([".com", ".exe", ".bat", ".cmd"]);
function setShellIfWindows() {
  if (Vt() === "windows") {
    let e = Hhe();
    if (e) ((process.env.SHELL = e), T(`Using bash path: "${e}"`));
    else T("Git Bash not found; BashTool will be unavailable");
  }
}
function Npn(e, t) {
  if (!nCe.isAbsolute(t)) return;
  let n = nCe.dirname(t),
    r = Object.keys(e).find((s) => s.toUpperCase() === "PATH") ?? "PATH",
    o = e[r];
  e[r] = o ? n + nCe.delimiter + o : n;
}
function Bpn(e) {
  let t = e.trim(),
    n = "",
    r = 0;
  while (r < t.length) {
    let o = t[r];
    if (o === '"' || o === "'") {
      let s = t.indexOf(o, r + 1);
      if (s === -1) {
        ((n += t.slice(r + 1)), (r = t.length));
        break;
      }
      ((n += t.slice(r + 1, s)), (r = s + 1));
    } else if (o === "\\" && r + 1 < t.length) ((n += t[r + 1]), (r += 2));
    else if (/\s/.test(o)) break;
    else ((n += o), r++);
  }
  return n.endsWith(".sh") ? `bash ${e}` : e;
}
var nCe, Hhe, TD, NFe;
