// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RNo
// matched 2.1.88 source: node_modules/@ant/claude-for-chrome-mcp/src/mcpSocketClient.ts
// class=new  jaccard=0.0336  score=0.0886  fileCov=0.0513
// note: nearest: node_modules/@ant/claude-for-chrome-mcp/src/mcpSocketClient.ts (0.0336); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var RNo = E(() => {
  yNl = require("string_decoder");
});
function Bfe() {
  return Jg.join(tr(), "daemon");
}
function DNo(e) {
  return `\\\\.\\pipe\\cc-daemon-${T$f()}-${e}`;
}
function Fk(e) {
  return e.replace(/cc-daemon-[0-9a-f]{16}/g, "cc-daemon-*");
}
function TEt(e) {
  if (e instanceof Error) {
    if (e.message = Fk(e.message), typeof e.stack === "string") e.stack = Fk(e.stack);
  }
  return e;
}
function LNo() {
  return Jg.join(Bfe(), "control.key");
}
async function bNl() {
  let e = LNo();
  try {
    let n = await yA.lstat(e);
    if (n.isFile() && n.size <= 4096) {
      let r = (await yA.readFile(e, "utf8")).trim();
      if (r) return r;
    } else await yA.rm(e, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  } catch (n) {
    if (!wn(n)) throw n;
  }
  let t = HEt.randomBytes(16).toString("hex");
  return await yA.mkdir(Bfe(), {
    recursive: !0,
    mode: 448
  }), await eg(e, t, 384), t;
}
async function jfe() {
  try {
    let e = await yA.lstat(LNo());
    if (!e.isFile() || e.size > 4096) return;
    return (await yA.readFile(LNo(), "utf8")).trim() || void 0;
  } catch {
    return;
  }
}
async function SNl() {
  let e = Bfe();
  if (Vt() === "windows") {
    await yA.mkdir(e, {
      recursive: !0
    }), await yA.chmod(e, 448).catch(() => {});
    return;
  }
  await yA.mkdir(e, {
    recursive: !0,
    mode: 448
  });
  let t = process.getuid?.(),
    n = await yA.lstat(e);
  if (t !== void 0 && n.uid !== t) throw Error(`refusing to use daemon dir: ${e} is owned by uid ${n.uid}`);
  if ((n.mode & 511) !== 448) await yA.chmod(e, 448);
}
async function pnr() {
  if (Vt() === "windows") return;
  let e = Ffe();
  await yA.mkdir(e, {
    recursive: !0,
    mode: 448
  });
  let t = new Date();
  await yA.utimes(e, t, t).catch(() => {});
  let n = process.getuid?.();
  for (let r of [Jg.dirname(e), e]) {
    let o = await yA.lstat(r);
    if (n !== void 0 && o.uid !== n) throw Error(`refusing to bind: ${r} is owned by uid ${o.uid}`);
    if ((o.mode & 511) !== 448) await yA.chmod(r, 448);
  }
}
function ENl() {
  if (Vt() === "windows") return;
  let e = Ffe(),
    t = Jg.dirname(e),
    n = Jg.basename(e);
  yA.readdir(t, {
    withFileTypes: !0
  }).then(async r => {
    for (let o of r) {
      if (!o.isDirectory() || o.name === n) continue;
      let s = Jg.join(t, o.name);
      if (!(await v$f(Jg.join(s, "control.sock")))) continue;
      let i = await yA.lstat(s).catch(() => null);
      if (!i || Date.now() - i.mtimeMs < 1e4) continue;
      let a = await yA.readdir(Jg.join(s, "rv")).catch(() => []),
        l = await yA.readdir(Jg.join(s, "pty")).catch(() => []),
        c = await yA.readdir(Jg.join(s, "spare")).catch(() => []);
      if (a.length || l.length || c.length) continue;
      await yA.rm(s, {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }
  }).catch(() => {});
}
function v$f(e) {
  let t,
    n = new Promise(o => {
      t = o;
    }),
    r = _Nl.connect(e);
  return r.setTimeout(1000, () => {
    r.destroy(), t(!1);
  }), r.on("error", o => {
    let s = on(o);
    t(s === "ENOENT" || s === "ECONNREFUSED" || s === "ENOTSOCK");
  }), r.once("connect", () => {
    r.end(`{"op":"ping"}
`), t(!1);
  }), n;
}
function CKe() {
  return Jg.join(Bfe(), "dispatch");
}
function PNo() {
  return Jg.join(Bfe(), "dispatch", "rejected");
}
function gse() {
  return Jg.join(Bfe(), "roster.json");
}
function MNo() {
  return Jg.join(Ffe(), "rv");
}
function W7t() {
  return Jg.join(Bfe(), "auth");
}
function q7t(e) {
  return Jg.join(W7t(), `${e}.json`);
}
function V7t(e) {
  return Jg.join(W7t(), `${e}.tokens.json`);
}
function vEt(e) {
  if (Vt() === "windows") return DNo(`rv-${e}`);
  return Jg.join(MNo(), `${e}.sock`);
}
function wEt() {
  return Jg.join(Ffe(), "pty");
}
function dR(e) {
  if (Vt() === "windows") return DNo(`pty-${e}`);
  return Jg.join(wEt(), `${e}.sock`);
}
function YQ() {
  return Jg.join(Ffe(), "spare");
}
function ANl(e) {
  return Jg.join(YQ(), `${e}.pty.sock`);
}
function HNl(e) {
  return Jg.join(YQ(), `${e}.claim.sock`);
}
function XOe() {
  return Jg.join(Bfe(), "pty-pids");
}
function IHe(e) {
  return Jg.join(XOe(), `${e}.pid`);
}
function GL(e) {
  return TNl(e, "err");
}
function DP(e) {
  return TNl(e, "late");
}
function TNl(e, t) {
  if (Vt() === "windows") return Jg.join(XOe(), `${e.split("\\").pop()}.${t}`);
  return `${e}.${t}`;
}
function XQ(e) {
  if (Vt() === "windows") return Jg.join(XOe(), `${e.split("\\").pop()}.exec-exit`);
  return `${e}.exec-exit`;
}
function Pq() {
  if (Vt() === "windows") return DNo("control");
  return Jg.join(Ffe(), "control.sock");
}
var HEt, Ufe, yA, _Nl, Jg, A$f, Ffe, H$f, T$f;