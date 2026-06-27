// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tWo
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0014  score=0.1746  fileCov=0.0014
// note: nearest: src/main.tsx (0.0014); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tWo = E(() => {
  FAe();
  Hpe();
  zH();
  WL();
});
async function oWo(e = {}) {
  return yl("daemon_bg_reap_all", async () => {
    let t = await h3({
        silent: !0
      }),
      n = new Map();
    for (let [c, u] of Object.entries(t.workers)) n.set(c, {
      pid: u.pid,
      procStart: u.procStart,
      ptySock: u.ptySock,
      dispatch: u.dispatch
    });
    let r = Vt() === "windows",
      [o, s] = r ? [XOe(), ".pid"] : [wEt(), ".sock"],
      i = await bZ.readdir(o).catch(() => []),
      a = new Set(i.filter(c => c.endsWith(s)));
    for (let c of i) {
      if (!c.endsWith(s)) {
        if (!r) {
          let p = [".err", ".late", ".exec-exit"].find(f => c.endsWith(`.sock${f}`));
          if (p && !a.has(c.slice(0, -p.length))) {
            let f = c.slice(0, -`.sock${p}`.length);
            if (!(p === ".exec-exit" && n.has(f))) await bZ.unlink(nWo.join(o, c)).catch(() => {});
          }
        }
        continue;
      }
      let u = c.slice(0, -s.length);
      if (n.has(u)) continue;
      let d = r ? Number((await nR(IHe(u), 4096)) ?? "0") : 0;
      n.set(u, {
        pid: d,
        ptySock: dR(u)
      });
    }
    if (!r) {
      let c = new Set();
      for (let d of n.values()) if (d.ptySock) c.add(d.ptySock);
      let u = await bZ.readdir(YQ()).catch(() => []);
      for (let d of u) {
        if (!d.endsWith(".pty.sock")) continue;
        let p = nWo.join(YQ(), d);
        if (c.has(p)) continue;
        n.set(`spare:${d}`, {
          pid: 0,
          ptySock: p
        });
      }
    }
    let l = 0;
    if (await Promise.all(Array.from(n.entries()).map(async ([c, u]) => {
      let d = u.dispatch ? await Aar(u.ptySock, u.dispatch) : null;
      if (u.ptySock && (await DYe(u.ptySock))) l++;else if (u.pid && (await sWo(u.pid, u.procStart))) l++;
      if (!c.startsWith("spare:")) {
        let p = {
            state: "stopped",
            detail: "stopped"
          },
          f = d?.state === "done" ? d : e.supervisorKilledAll ? p : d ?? p;
        await YGe(c, f.state, f.detail), await bZ.unlink(XQ(u.ptySock ?? dR(c))).catch(() => {});
      }
      if (r) await bZ.unlink(IHe(c)).catch(() => {}), await bZ.unlink(GL(dR(c))).catch(() => {}), await bZ.unlink(DP(dR(c))).catch(() => {});
    })), n.size > 0) await CEt(c => {
      for (let u of n.keys()) delete c.workers[u];
    }).catch(ke);
    return {
      reaped: l
    };
  });
}
function DYe(e) {
  return new Promise(t => {
    let n = !1,
      r = s => {
        if (n) return;
        n = !0, t(s);
      },
      o = rWo.connect(e);
    o.unref(), o.setTimeout(2000, () => {
      o.destroy(), r(!1);
    }), o.on("error", () => {
      bZ.unlink(e).catch(() => {}), bZ.unlink(GL(e)).catch(() => {}), bZ.unlink(DP(e)).catch(() => {}), r(!1);
    }), o.once("connect", () => {
      o.resume(), o.write(UL({
        t: "kill",
        sig: "SIGTERM"
      }));
    }), o.once("close", () => r(!0));
  });
}
function Har(e) {
  return new Promise(t => {
    let n = !1,
      r = s => {
        if (n) return;
        n = !0, t(s);
      },
      o = rWo.connect(e);
    o.unref(), o.setTimeout(250, () => {
      o.destroy(), r(!1);
    }), o.on("error", () => r(!1)), o.once("connect", () => {
      o.end(UL({
        t: "pong"
      })), r(!0);
    });
  });
}
async function sWo(e, t) {
  if (t !== void 0) {
    if (!(await bv(e, t))) return !1;
  } else try {
    return process.kill(e, 0), !1;
  } catch {}
  return sje([-e, e], t);
}
var bZ, rWo, nWo;