// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qtn
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0053  score=0.1117  fileCov=0.0055
// note: nearest: src/main.tsx (0.0053); dir inferred from dep-graph -> utils; 4 renamed
// ─────────────────────────────────────────────────────────────────────────
var Qtn = E(() => {
  Ist();
  sG();
  X4();
  ymn();
  urt();
  Bcr();
  iu();
  si();
  Sae();
  dre();
  lH();
  jcr();
  _pc();
  Dpc();
  JN();
  V9o();
  Mpc();
  yfe();
  INt();
  Xa();
  Rc();
  S4();
  cur();
  zj();
  XYo();
  y1();
  Un();
  Du();
  hgt();
  E8n();
  ZKe();
  ZU();
  eMc();
  Tzr();
  _F();
  jc();
  EVe();
  uHt();
  i$();
  yzn();
  cCo();
  _oe();
  sA();
  Jen();
  oo();
  er();
  Kke();
  Cp();
  Q9();
  NE();
  sMc();
  OMe();
  co();
  Is();
  qd();
  Gre();
  XVo();
  Y9();
  kM();
  Eue();
  Fh();
  gpr();
  Jt();
  Lzo();
  aMc();
  aW();
  dn();
  Un();
  kt();
  jir();
  cMc();
  pMc();
  gMc();
  ft();
  e7o();
  Zf();
  pOc();
  p8();
  ZS();
  q7();
  _7o();
  z1();
  BI();
  Ox();
  TKo();
  mOc();
  ver();
  wer();
  ty();
  Ect();
  fut();
  b7o();
  FEe();
  VM();
  DHe();
  dC();
  BE();
  wpe();
  wdr();
  Zdr();
  Lx();
  wr();
  fn();
  ezo();
  rit();
  uf();
  QVt();
  gM();
  sa();
  NGo();
  PM();
  Rd();
  vn();
  lpr();
  OJt();
  Ao();
  ste();
  Ls();
  hOc();
  DE();
  __();
  Gy();
  fre();
  Hoe();
  _Gt();
  o8();
  nDe();
  B1();
  _Oc();
  WI();
  tre();
  _a();
  C4n();
  A7o();
  wOc();
  RCe();
  i2e();
  dr();
  Sx();
  M8e();
  xOc();
  II();
  LOc();
  HO();
  DOc();
  gNn();
  a5();
  Kv();
  cTt();
  TYo();
  Who();
  Fze();
  fd();
  h6();
  lpt();
  Ld();
  Lo();
  je();
  At();
  Yp();
  PZn();
  gAn();
  I9r();
  xYn();
  ED();
  _$();
  I7e();
  sr();
  GX();
  w7o();
  ft();
  OOc();
  BOc();
  FOc();
  GOc();
  qOc();
  zOc();
  YOc();
  JOc();
  ZOc();
  t1c();
  r1c();
  s1c();
  a1c();
  d1c();
  f1c();
  zqe();
  yde();
  Yqe();
  jDe();
  uTt();
  tne();
  $S();
  Vw();
  Mm();
  lT();
  Vtn();
  Xh();
  H4n();
  KKe();
  lg();
  bmr();
  Cv();
  b8n();
  Ide();
  g1c();
  gP();
  m1();
  Ote();
  aR();
  z5c = require("crypto"), PZo = require("fs"), fve = require("path");
  process.env.NoDefaultCurrentDirectoryInExePath = "1";
  pa("main_tsx_entry");
  Zc("node_boot_ms", process.uptime() * 1000, 0);
  oZa();
  ALr();
  Ajr();
  MZo = (l$(), ro(qW)), G5c = (Eoe(), ro(Ope));
  pa("main_tsx_imports_loaded");
  if (I1m()) process.exit(1);
});
var X5c = {};
_t(X5c, {
  spawnSpare: () => spawnSpare,
  runBgSpare: () => runBgSpare,
  reapOrphanSpares: () => reapOrphanSpares,
  claimSpare: () => claimSpare
});
async function runBgSpare(e) {
  let t = e[0];
  if (!t) process.stderr.write(`[bg-spare] missing claim sock path
`), process.exit(2);
  let n = await j1m(),
    r = Promise.resolve().then(() => (Qtn(), phr)),
    o = () => {
      try {
        Y5c.unlinkSync(t);
      } catch {}
    },
    s = () => {
      o(), process.exit(0);
    },
    i = d => {
      o(), process.stderr.write(`[bg-spare] uncaughtException: ${be(d)}
`), sv("spare_uncaught"), process.exit(1);
    },
    a = process.ppid,
    l = setInterval((d, p) => {
      if (process.ppid !== d) p(), process.exit(0);
    }, 2000, a, o);
  l.unref();
  for (let d of ["SIGTERM", "SIGHUP", "SIGINT"]) process.on(d, s);
  process.on("uncaughtException", i);
  let c = () => {
      clearInterval(l);
      for (let d of ["SIGTERM", "SIGHUP", "SIGINT"]) process.off(d, s);
      process.off("uncaughtException", i);
    },
    u;
  try {
    u = await Pcr(t, void 0, n);
  } catch (d) {
    o(), process.stderr.write(`[bg-spare] claim recv failed: ${be(d)}
`), sv("spare_claim_recv"), process.exit(1);
  }
  c();
  try {
    await r, await Mcr(u, r);
  } catch (d) {
    let p = xd(d) ?? BK(d) ?? "Error";
    throw sv("spare_postclaim:" + p, u.env.CLAUDE_JOB_DIR), process.stderr.write(`[bg-spare] post-claim init failed: ${be(d)}
`), d;
  }
}
async function j1m() {
  let e = Oe.CLAUDE_BG_CLAIM_AUTH;
  delete process.env.CLAUDE_BG_CLAIM_AUTH;
  let t = Oe.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, !t) return e;
  let n = await SSt(t);
  if (await XP.unlink(t).catch(() => {}), !n?.claimAuth) T("[bg-spare] tokens file unreadable; claim gate degraded", {
    level: "warn"
  });
  return n?.claimAuth ?? e;
}
async function spawnSpare(e) {
  if (Vt() === "windows") return null;
  return yl("daemon_bg_spare_refill", async () => {
    let t = fhr.randomBytes(4).toString("hex"),
      n = ANl(t),
      r = HNl(t),
      o = fhr.randomBytes(16).toString("hex"),
      s = fhr.randomBytes(16).toString("hex");
    await XP.mkdir(YQ(), {
      recursive: true,
      mode: 448
    }).catch(() => {});
    let i = await s9o(`spare-${t}`, {
      ptyAuth: o,
      claimAuth: s
    });
    await XP.unlink(n).catch(() => {}), await XP.unlink(r).catch(() => {});
    let [a, ...l] = z1m(),
      c = await XP.open(GL(n), "w").catch(() => null),
      u;
    try {
      u = Bun.spawn([a, ...l, "--bg-pty-host", n, "200", "50", "--", a, ...l, "--bg-spare", r], {
        cwd: YQ(),
        env: G1m(i ? {
          tokensPath: i
        } : {
          ptyAuth: o,
          claimAuth: s
        }),
        stdio: ["ignore", "ignore", c?.fd ?? "ignore"],
        detached: true,
        windowsHide: true
      }), u.unref();
    } catch (p) {
      if (i) XP.unlink(i).catch(() => {});
      throw p;
    } finally {
      await c?.close().catch(() => {});
    }
    let d = {
      hostPid: u.pid,
      ptySock: n,
      claimSock: r,
      ptyAuth: o,
      claimAuth: s,
      startedAt: Date.now(),
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
      }.VERSION,
      dispose() {
        try {
          u.kill("SIGTERM");
        } catch {}
      }
    };
    return u.exited.then(async () => {
      if (XP.unlink(n).catch(() => {}), XP.unlink(r).catch(() => {}), i) XP.unlink(i).catch(() => {});
      let p = ((await nR(GL(n), 1048576)) ?? "").slice(0, 2000).trim();
      if (p.length > 0) T(`bg spare host pid=${u.pid} exit stderr:
${p}`, {
        level: "warn"
      });
      XP.unlink(GL(n)).catch(() => {}), XP.unlink(DP(n)).catch(() => {}), e.onExit();
    }), e.log(`bg spare spawned host pid=${u.pid}`), d;
  });
}
function G1m(e) {
  let t = {
    ...process.env
  };
  for (let n of i9o) delete t[n];
  if (l9o(t)) {
    let n = t.CLAUDE_CODE_HOST_AUTH_ENV_VAR;
    if (n) delete t[n];
    for (let r of FUt) delete t[r];
  } else if (t.ANTHROPIC_BASE_URL) delete t.ANTHROPIC_AUTH_TOKEN;
  for (let n of a9o) delete t[n];
  for (let n of Object.keys(t)) if (jUt.some(r => n.startsWith(r))) delete t[n];
  if (Vt() === "macos") delete t.CLAUDE_CODE_OAUTH_TOKEN;
  return Object.assign(t, {
    CLAUDE_CODE_SESSION_KIND: "bg",
    CLAUDE_BG_BACKEND: "daemon",
    CLAUDE_ENABLE_STREAM_WATCHDOG: "1",
    FORCE_COLOR: "3",
    COLORTERM: "truecolor",
    BROWSER: "true",
    ...("tokensPath" in e ? {
      CLAUDE_BG_SOCKET_TOKENS_PATH: e.tokensPath
    } : {
      CLAUDE_BG_PTY_AUTH: e.ptyAuth,
      CLAUDE_BG_CLAIM_AUTH: e.claimAuth
    })
  }), t;
}
function claimSpare(e, t, n, r) {
  let o = Oz.claim(e, {
    pid: t.hostPid,
    ptySockPath: t.ptySock,
    spawnPty: n,
    getAuthSnapshot: r,
    ptyAuth: t.ptyAuth
  });
  return o9o(e.short, r?.()).then(s => q1m(t.claimSock, W1m(e, s, o.socketAuth(), t.claimAuth))).catch(s => {
    G("tengu_bg_sendclaim_failed", {
      short: e.short,
      errno: xd(s),
      error: be(s).slice(0, 100)
    }), T(`[bg-spare] send-claim failed: ${be(s)}`, {
      level: "warn"
    });
    let i = ghr.connect(t.ptySock);
    i.on("error", () => {}), i.once("connect", () => {
      i.write(UL({
        t: "kill",
        sig: "SIGTERM"
      })), i.end();
    });
  }), o;
}
function W1m(e, t, n, r) {
  let {
    env: o,
    argv: s
  } = Oz.buildClaimFrame(e, t, n);
  return {
    cwd: e.cwd,
    env: o,
    argv: s,
    sessionId: e.sessionId,
    auth: r
  };
}
async function q1m(e, t) {
  let n = Date.now(),
    r = 5000;
  for (let o = 0;; o++) {
    if (Date.now() - n > 5000) throw Error("send-claim timeout");
    try {
      await V1m(e, t);
      return;
    } catch (s) {
      let i = on(s);
      if (!(i === "ENOENT" || i === "ECONNREFUSED") || o >= K5c.length) throw s;
      await Nn(K5c[o] ?? 500);
    }
  }
}
function V1m(e, t) {
  return new Promise((n, r) => {
    let o = ghr.connect(e);
    o.once("error", r), o.once("connect", () => {
      o.end(De(t) + `
`, () => n());
    });
  });
}
async function reapOrphanSpares(e, t) {
  if (Vt() === "windows") return;
  let n = new Set();
  for (let s of e.values()) {
    let i = s.rosterEntry().ptySock;
    if (i) n.add(i);
  }
  let r = await XP.readdir(YQ()).catch(() => []),
    o = 0;
  for (let s of r) {
    if (!s.endsWith(".pty.sock")) continue;
    let i = mhr.join(YQ(), s);
    if (n.has(i)) continue;
    o++;
    let a = ghr.connect(i);
    a.on("error", () => {
      XP.unlink(i).catch(() => {});
    }), a.once("connect", () => {
      a.resume(), a.write(UL({
        t: "kill",
        sig: "SIGTERM"
      })), a.end(), setTimeout(l => l.destroy(), 2000, a).unref();
    });
  }
  for (let s of r) {
    let i = [".err", ".late"].find(a => s.endsWith(`.pty.sock${a}`));
    if (i) {
      let a = s.slice(0, -i.length);
      if (!r.includes(a)) XP.unlink(mhr.join(YQ(), s)).catch(() => {});
    }
    if (s.endsWith(".claim.sock")) XP.unlink(mhr.join(YQ(), s)).catch(() => {});
  }
  if (o) t(`bg orphan-spare reap: ${o}`);
}
function z1m() {
  return dm() ? [process.execPath] : [process.execPath, process.argv[1]];
}
var fhr, Y5c, XP, ghr, mhr, K5c;