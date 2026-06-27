// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gqc
// matched 2.1.88 source: src/commands/bridge-kick.ts
// class=modified (alt of src/commands/bridge-kick.ts)  jaccard=0.0214  score=0.0449  fileCov=0.0394
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gqc] deps: dn, kt, At, Is, QEe, Jt
((fqc = require("child_process")), (KZo = require("readline")));
function call(e) {
  return e === "heartbeat" || lce();
}
function aNm(e) {
  let t = 0;
  for (let n of Object.keys(fZ)) t += (e[n] ?? []).length;
  return t;
}
async function yqc(e) {
  let { jsonPath: t, invocation: n, logger: r, authManager: o, watch: s = Zir } = e,
    i = new Map(),
    a = _Go();
  function l() {
    let h = {};
    for (let [y, b] of i) {
      let _ = b.status;
      if (_) h[y] = _;
    }
    _Zl(h);
  }
  let c = await IYe(t);
  if (c.ok) {
    a = c.config;
    for (let h of c.unknownKeys)
      r.write("supervisor", `unknown config key '${h}' \u2014 upgrade claude?`);
  } else r.write("supervisor", `config load failed: ${c.error} \u2014 idling`);
  await o.ready;
  let u = 0;
  for (let h of Object.keys(fZ)) {
    if (!call(h)) continue;
    let y = a[h] ?? [];
    for (let b = 0; b < y.length; b++) {
      let _ = `${h}:${b}`,
        S = new hhr(_, h, y[b], n, r, o, l);
      (i.set(_, S), S.start(u++ * YZo), r.write("supervisor", `spawned ${_}`));
    }
  }
  l();
  let d = async () => {
      let h = await IYe(t);
      if (!h.ok) {
        r.write("supervisor", `config reload failed: ${h.error} \u2014 keeping last-good config`);
        return;
      }
      for (let _ of h.unknownKeys)
        r.write("supervisor", `unknown config key '${_}' \u2014 upgrade claude?`);
      let y = Ptc(a, h.config);
      a = h.config;
      for (let _ of y.stop) {
        let S = i.get(_);
        if (S) (await S.stop(), i.delete(_), r.write("supervisor", `stopped ${_}`));
      }
      for (let { id: _, config: S } of y.restart) {
        let A = i.get(_);
        if (A)
          (await A.stop(), A.updateConfig(S), A.start(), r.write("supervisor", `restarted ${_}`));
      }
      let b = 0;
      for (let { id: _, kind: S, config: A } of y.start) {
        if (!call(S)) continue;
        let v = new hhr(_, S, A, n, r, o, l);
        (i.set(_, v), v.start(b++ * YZo), r.write("supervisor", `spawned ${_}`));
      }
      if (y.stop.length + y.start.length + y.restart.length > 0)
        (r.write(
          "supervisor",
          `reload: stopped=${y.stop.length} started=${y.start.length} restarted=${y.restart.length}`,
        ),
          G("tengu_daemon_config_reload", {
            stopped: y.stop.length,
            started: y.start.length,
            restarted: y.restart.length,
          }));
    },
    p = Promise.resolve(),
    f = s(t, () => {
      p = p.then(d).catch((h) => ke(h));
    }),
    m = false;
  function g() {
    if (m) return;
    ((m = true), f());
  }
  return {
    workerCount: () => aNm(a),
    hasOAuthConsumer: () => {
      for (let h of i.values()) if (fZ[h.kind].needsOAuth) return true;
      return false;
    },
    disposeWatcher: g,
    drainReloads: () => p,
    stop: async () => {
      (g(), await p, await Promise.all(Array.from(i.values()).map((h) => h.stop())), await bZl());
    },
  };
}
