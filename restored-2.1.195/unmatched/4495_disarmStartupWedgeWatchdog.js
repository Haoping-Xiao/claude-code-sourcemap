// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ESt
// matched 2.1.88 source: src/utils/teammateMailbox.ts
// class=new  jaccard=0.0214  score=0.1096  fileCov=0.0259
// note: nearest: src/utils/teammateMailbox.ts (0.0214); 7 renamed
// ─────────────────────────────────────────────────────────────────────────
var ESt = E(() => {
  Jt();
  txl = require("crypto"), nxl = require("fs/promises");
});
function ASt(e) {
  rxl = e;
}
function oxl(e) {
  return rxl?.(e) ?? !1;
}
var rxl = null;
var qQn = {};
_t(qQn, {
  stopRendezvousServer: () => stopRendezvousServer,
  startRendezvousServer: () => startRendezvousServer,
  sendRv: () => sendRv,
  markStartupDialogBlocked: () => markStartupDialogBlocked,
  markReplayNoOp: () => markReplayNoOp,
  disarmStartupWedgeWatchdog: () => disarmStartupWedgeWatchdog,
  clearStartupDialogBlocked: () => clearStartupDialogBlocked
});
function axl() {
  if (FPo === void 0) delete process.env.BROWSER;else process.env.BROWSER = FPo;
}
async function startRendezvousServer() {
  let e = Oe.CLAUDE_BG_RENDEZVOUS_SOCK;
  if (!e || uHe) return;
  FPo = Oe.BROWSER, delete process.env.CLAUDE_BG_RENDEZVOUS_SOCK, HSt = Oe.CLAUDE_BG_RV_AUTH, delete process.env.CLAUDE_BG_RV_AUTH;
  let t = Oe.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, t) {
    let n = await SSt(t);
    if (n?.rvAuth) HSt = n.rvAuth;
    await TSt.unlink(t).catch(() => {});
  }
  await TSt.unlink(e).catch(() => {}), uHe = sxl.createServer(n => {
    PQ?.destroy(), PQ = n, GQn = !1, yvf().catch(s => {
      if (!wn(s)) Xf(s);
    }), Hvf().catch(() => {}), n.on("error", () => n.destroy()), n.once("close", () => {
      if (PQ === n) PQ = void 0;
    });
    let r = "",
      o = new ixl.StringDecoder("utf8");
    n.on("data", s => {
      r += o.write(s);
      let i;
      while ((i = r.indexOf(`
`)) >= 0) {
        let a = r.slice(0, i);
        if (r = r.slice(i + 1), a) hvf(a);
      }
      if (r.length > 1048576) r = "", n.destroy();
    });
  }), uHe.on("error", n => T(`[bg-rv] server error: ${String(n)}`, {
    level: "warn"
  })), uHe.listen(e), uHe.unref(), ZKt = setInterval(() => sendRv({
    type: "heartbeat"
  }), 30000), ZKt.unref();
}
function stopRendezvousServer() {
  if (ZKt) clearInterval(ZKt), ZKt = void 0;
  if (clearTimeout($ze), $ze = void 0, tYt = !1, PQ?.destroy(), PQ = void 0, GQn = !1, HSt = void 0, uHe) axl();
  uHe?.close(), uHe = void 0;
}
function sendRv(e) {
  if (!PQ || PQ.destroyed) return !1;
  try {
    return PQ.write(De(e) + `
`), !0;
  } catch {
    return !1;
  }
}
function hvf(e) {
  let t;
  try {
    t = Ft(e);
  } catch {
    return;
  }
  if (!t || typeof t !== "object") return;
  if ("role" in t) {
    if (HSt && "auth" in t && Joe(t.auth, HSt)) GQn = !0;
    return;
  }
  let n = t;
  if (HSt && !GQn && n.type !== "repaint") {
    if (T(`[bg-rv] dropped ${typeof n.type === "string" ? n.type : "unknown"} from un-authed connection`, {
      level: "warn"
    }), n.type === "reply") sendRv({
      type: "reply-rejected"
    });
    return;
  }
  if (n.type === "shutdown") {
    sendRv({
      type: "shutting-down"
    });
    let r = bS(),
      o = [],
      s = Oe.CLAUDE_JOB_DIR;
    if (s) o.push(Avf(s).catch(() => {}));
    if (r) {
      let i = r.getLastSequenceNum();
      r.teardown({
        skipArchive: !0
      }).catch(() => {});
      let a = Oe.CLAUDE_JOB_DIR;
      if (a && i > 0) o.push(Tvf(a, i).catch(() => {}));
    }
    o.push(EJe()), Promise.race([Promise.all(o), Nn(5000)]).finally(() => {
      process.exit(0);
    });
    return;
  }
  if (n.type === "repaint") {
    if (!Cu.get(process.stdout)?.forceRedraw({
      flushReact: !0
    })) process.stdout.write(Jx + dH + `
  \x1B[2mSession can't redraw right now \u2014 Ctrl+Z to detach\x1B[0m
`);
    sendRv({
      type: "repaint-done"
    });
    return;
  }
  if (n.type === "attacher-caps") {
    if (obr(n.caps), a2i(n.caps?.colorLevel), !n.caps) axl();else if (typeof n.caps.browser === "string") process.env.BROWSER = n.caps.browser;else delete process.env.BROWSER;
    if (n.caps?.systemTheme) F0n(n.caps.systemTheme);
    return;
  }
  if (n.type === "reply" && typeof n.text === "string") {
    if (oxl(n.text)) {
      T(`[bg-rv] peer reply answered question: ${n.text.slice(0, 80)}`);
      return;
    }
    let r = ek(n.text);
    j_({
      agentId: ls(),
      mode: r,
      value: BU(n.text),
      priority: "next",
      origin: {
        kind: "human"
      }
    }), T(`[bg-rv] enqueued reply: ${n.text.slice(0, 80)}`);
  }
}
async function lxl(e) {
  for (let t = 0; !Cu.has(process.stdout); t++) {
    if (t >= 60 || PQ !== e) return !1;
    await Nn(500);
  }
  return !0;
}
async function yvf() {
  let e = Oe.CLAUDE_JOB_DIR;
  if (!e) return;
  if (!(await lxl(PQ))) return;
  let t = await zi(e);
  if (!t) return;
  if (t.state === "working" && t.detail === clt) _vf(e);
  if (!llt.includes(t.state)) return;
  if (t.tempo === "blocked") return;
  await Kd(e, {
    ...t,
    state: "running",
    tempo: "idle",
    updatedAt: new Date().toISOString()
  }), sendRv({
    type: "state",
    patch: {
      state: "running",
      tempo: "idle"
    }
  });
}
function _vf(e) {
  if (tYt) return;
  clearTimeout($ze);
  let t = Oe.CLAUDE_BG_STARTUP_WEDGE_MS || 45000;
  $ze = setTimeout(Evf, t, e), $ze.unref();
}
function disarmStartupWedgeWatchdog() {
  if (uHe === void 0) return;
  tYt = !0, clearTimeout($ze), $ze = void 0;
}
async function markStartupDialogBlocked(e) {
  let t = Oe.CLAUDE_JOB_DIR;
  if (!t || tYt) return;
  let n = await zi(t);
  if (!n || n.tempo === "blocked" && n.needs !== PW) return;
  let r = e ? `${WQn} (${e})` : WQn;
  return await Kd(t, {
    ...n,
    tempo: "blocked",
    detail: r,
    needs: eYt,
    updatedAt: new Date().toISOString()
  }), sendRv({
    type: "state",
    patch: {
      tempo: "blocked",
      detail: r,
      needs: eYt
    }
  }), {
    tempo: n.tempo,
    needs: n.needs,
    detail: n.detail
  };
}
async function clearStartupDialogBlocked(e) {
  let t = Oe.CLAUDE_JOB_DIR;
  if (!t) return;
  let n = await zi(t);
  if (!n || n.tempo !== "blocked" || n.needs !== eYt) return;
  await Kd(t, {
    ...n,
    ...e,
    updatedAt: new Date().toISOString()
  }), sendRv({
    type: "state",
    patch: {
      tempo: e.tempo,
      needs: e.needs,
      detail: e.detail
    }
  });
}
async function markReplayNoOp() {
  let e = Oe.CLAUDE_JOB_DIR;
  if (!e || Oe.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  let t = await zi(e);
  if (!t || t.state !== "working" || t.tempo !== "active") return;
  await Kd(e, {
    ...t,
    tempo: "blocked",
    needs: PW,
    updatedAt: new Date().toISOString()
  }), sendRv({
    type: "state",
    patch: {
      tempo: "blocked",
      needs: PW
    }
  });
}
function Evf(e) {
  zi(e).then(async t => {
    if (tYt || t?.state !== "working" || t.detail !== clt || t.tempo === "blocked") return;
    await Kd(e, {
      ...t,
      tempo: "blocked",
      detail: WQn,
      needs: eYt,
      updatedAt: new Date().toISOString()
    }), sendRv({
      type: "state",
      patch: {
        tempo: "blocked",
        detail: WQn,
        needs: eYt
      }
    });
  }).catch(t => {
    if (!wn(t)) Xf(t);
  });
}
async function Avf(e) {
  let t = Mze();
  if (!t) return;
  await TSt.writeFile(jPo.join(e, cxl), t.slice(0, uxl), {
    mode: 384
  });
}
async function Hvf() {
  let e = Oe.CLAUDE_JOB_DIR;
  if (!e) return;
  let t = jPo.join(e, cxl),
    n = await nR(t, 4 * uxl);
  if (n === null) return;
  if (await TSt.unlink(t).catch(() => {}), !n) return;
  if (!g7r()) aBt(n);
  if (!(await lxl(PQ))) return;
  if (Mze() === "") _St(n);
}
async function Tvf(e, t) {
  let n = await zi(e);
  if (!n || n.bridgeSessionSeq === t) return;
  await Kd(e, {
    ...n,
    bridgeSessionSeq: t,
    updatedAt: new Date().toISOString()
  });
}
var TSt,
  sxl,
  jPo,
  ixl,
  uHe,
  PQ,
  ZKt,
  $ze,
  tYt = !1,
  HSt,
  GQn = !1,
  FPo,
  WQn = "stuck on a startup dialog",
  eYt = "open this session to continue setup",
  cxl = ".prompt-draft",
  uxl = 262144;