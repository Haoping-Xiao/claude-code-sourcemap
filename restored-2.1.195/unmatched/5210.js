// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yir
// matched 2.1.88 source: src/bridge/bridgeMain.ts
// class=new  jaccard=0.0241  score=0.6936  fileCov=0.0244
// note: nearest: src/bridge/bridgeMain.ts (0.0241); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Yir = E(() => {
  dn();
  kt();
  jir();
  je();
  Mm();
  fn();
  At();
  es();
  vn();
  BJ();
  qd();
  Vke();
  sr();
  kv();
  Ost();
  aR();
  itc();
  wQ();
  SC();
  loe();
  ctc();
  Cde();
  sVe();
  Tnt();
  nGo();
  rGo();
  gtc();
  SJ();
  qir();
  oQt = require("crypto"), fGo = require("os"), G1e = require("path"), JYf = {
    connInitialMs: 2000,
    connCapMs: 120000,
    connGiveUpMs: 600000,
    generalInitialMs: 500,
    generalCapMs: 30000,
    generalGiveUpMs: 600000
  };
  e7f = new Set(["ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "ENETUNREACH", "EHOSTUNREACH"]);
  t7f = ["session", "same-dir", "worktree"];
  CYe = class CYe extends Error {
    constructor(e) {
      super(e);
      this.name = "BridgeHeadlessPermanentError";
    }
  };
});
async function Xir(e, t) {
  return yl("daemon_rc_add", async () => {
    let n = "added";
    return await dHt(r => {
      let o = H3o(r.remoteControl),
        s = o.findIndex(i => i.dir === e.dir);
      if (s >= 0) {
        let i = cv(e, a => a !== void 0);
        o[s] = {
          ...o[s],
          ...i
        }, n = "updated";
      } else o.push(e), n = "added";
      r.remoteControl = o;
    }, t), n;
  });
}
async function Jir(e, t) {
  return yl("daemon_rc_remove", async () => {
    await dHt(n => {
      let r = H3o(n.remoteControl),
        o = r.filter(s => s.dir !== e);
      if (o.length === r.length) return !1;
      if (o.length === 0) delete n.remoteControl;else n.remoteControl = o;
    }, t);
  });
}
var gGo,
  Ctc = async (e, t, n, r) => {
    let o = gGo().parse(e),
      {
        initializeErrorLogSink: s
      } = await Promise.resolve().then(() => (VJt(), kir)),
      {
        initializeAnalyticsSink: i
      } = await Promise.resolve().then(() => (ZSe(), dpt));
    s(), i();
    let a = () => afe() ?? r.getAccessToken();
    if (!a()) n(Myt), process.exit(1);
    let {
      runBridgeHeadless: l,
      BridgeHeadlessPermanentError: c
    } = await Promise.resolve().then(() => (Yir(), Kir));
    try {
      await l({
        dir: o.dir,
        name: o.name,
        spawnMode: o.spawnMode,
        capacity: o.capacity,
        permissionMode: o.permissionMode,
        sandbox: o.sandbox,
        createSessionOnStart: o.createSessionOnStart,
        getAccessToken: a,
        onAuth401: r.reportAuth401,
        log: n
      }, t);
    } catch (u) {
      if (u instanceof c) n(u.message), process.exit(Zjn);
      throw u;
    }
  };