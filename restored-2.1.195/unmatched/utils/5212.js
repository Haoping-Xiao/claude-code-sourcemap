// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sQt
// matched 2.1.88 source: src/keybindings/loadUserBindings.ts
// class=new  jaccard=0.038  score=0.1904  fileCov=0.0453
// note: nearest: src/keybindings/loadUserBindings.ts (0.038); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sQt = E(() => {
  Xr();
  lH();
  At();
  Is();
  Jt();
  Z3o();
  Qir();
  QJt();
  hGo = ve(() => H.object({
    intervalSeconds: H.number().positive().default(30)
  }).strict()), fZ = {
    heartbeat: {
      schema: hGo,
      run: p7f,
      needsOAuth: !1
    },
    scheduled: {
      schema: X3o,
      run: Xec,
      needsOAuth: !0
    },
    remoteControl: {
      schema: gGo,
      run: Ctc,
      needsOAuth: !0
    }
  };
});
function h7f(e) {
  return H.union([e, H.array(e)]).optional().transform(t => t === void 0 ? [] : Array.isArray(t) ? t : [t]);
}
function _Go() {
  return yGo().parse({});
}
async function IYe(e) {
  let t;
  try {
    let i = await Dtc.stat(e).catch(a => on(a) === "ENOENT" ? null : Promise.reject(a));
    if (i && (!i.isFile() || i.size > 1048576)) return {
      ok: !1,
      error: `${e} is not a regular file (or exceeds 1MiB)`
    };
    t = await qs().read(e);
  } catch (i) {
    if (on(i) === "ENOENT") return {
      ok: !0,
      config: _Go(),
      unknownKeys: []
    };
    return {
      ok: !1,
      error: `failed to read ${e}: ${be(i)}`
    };
  }
  let n = Ia(t, !1);
  if (n === null) return {
    ok: !1,
    error: `failed to parse ${e} as JSON`
  };
  let r = yGo().safeParse(n);
  if (!r.success) return {
    ok: !1,
    error: `config validation failed: ${r.error.message}`
  };
  let o = new Set(Object.keys(yGo().shape)),
    s = typeof n === "object" && n !== null ? Object.keys(n).filter(i => !o.has(i)) : [];
  return {
    ok: !0,
    config: r.data,
    unknownKeys: s
  };
}
function Zir(e, t) {
  let n = W1e.dirname(e),
    r = W1e.normalize(n),
    o = W1e.basename(e),
    s = S1.watch(n, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 0,
      usePolling: Vt() === "macos",
      interval: 100,
      ignored: i => {
        let a = W1e.normalize(i);
        return a !== r && W1e.basename(a) !== o;
      },
      awaitWriteFinish: {
        stabilityThreshold: 300,
        pollInterval: 100
      },
      atomic: !0,
      ignorePermissionErrors: !0
    });
  return s.on("add", t), s.on("change", t), s.on("unlink", t), s.on("error", i => T(`[daemon-config] watcher error: ${be(i)}`, {
    level: "warn"
  })), () => void s.close().catch(() => {});
}
function Ptc(e, t) {
  let n = {
    stop: [],
    start: [],
    restart: []
  };
  for (let r of Object.keys(fZ)) {
    let o = e[r] ?? [],
      s = t[r] ?? [],
      i = Math.max(o.length, s.length);
    for (let a = 0; a < i; a++) {
      let l = `${r}:${a}`,
        c = o[a],
        u = s[a];
      if (c !== void 0 && u === void 0) n.stop.push(l);else if (c === void 0 && u !== void 0) n.start.push({
        id: l,
        kind: r,
        config: u
      });else if (!L_(c, u)) n.restart.push({
        id: l,
        kind: r,
        config: u
      });
    }
  }
  return n;
}
var Dtc, W1e, yGo;