// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bpc
// matched 2.1.88 source: src/tools/FileReadTool/FileReadTool.ts
// class=new  jaccard=0.0071  score=0.0931  fileCov=0.0076
// note: nearest: src/tools/FileReadTool/FileReadTool.ts (0.0071); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Bpc = E(() => {
  je();
});
async function Wpc(e, t) {
  let n = await mlm(e, t);
  if (n.startsWith("<")) return n;
  let r = await glm(n);
  if (r === void 0) return plm;
  let o;
  try {
    o = flm(await mNe.readFile(`/proc/${r}/comm`, "utf8"));
  } catch {
    return Upc;
  }
  return o.length > 0 ? o : Upc;
}
function flm(e) {
  return e.replace(/[^\x20-\x7e]|</g, "").slice(0, 64);
}
async function mlm(e, t) {
  let n = Fpc(e),
    r = Fpc(t),
    o = !1;
  for (let s of ["/proc/net/tcp", "/proc/net/tcp6"]) {
    let i;
    try {
      i = await mNe.readFile(s, "utf8");
    } catch {
      continue;
    }
    o = !0;
    for (let a of i.split(`
`)) {
      let l = a.trim().split(/\s+/);
      if (l.length < 10 || !l[1].endsWith(":" + n) || !l[2].endsWith(":" + r)) continue;
      let c = l[9];
      if (c !== "0") return c;
    }
  }
  return o ? dlm : ulm;
}
function Fpc(e) {
  return e.toString(16).toUpperCase().padStart(4, "0");
}
async function glm(e) {
  let t = `socket:[${e}]`,
    n;
  try {
    n = await mNe.readdir("/proc");
  } catch {
    return;
  }
  let r = n.filter(l => /^\d+$/.test(l)),
    o = await Promise.all(r.map(l => mNe.readdir(`/proc/${l}/fd`).catch(() => []))),
    s = [];
  for (let l = 0; l < r.length; l++) for (let c of o[l]) s.push({
    pid: r[l],
    fd: c
  });
  let a = (await Promise.all(s.map(l => mNe.readlink(`/proc/${l.pid}/fd/${l.fd}`).catch(() => "")))).indexOf(t);
  return a === -1 ? void 0 : s[a].pid;
}
var mNe,
  jpc = "<pending>",
  Gpc = "<lookup-failed>",
  ulm = "<proc-net-unreadable>",
  dlm = "<inode-not-found>",
  plm = "<pid-not-found>",
  Upc = "<comm-unreadable>";