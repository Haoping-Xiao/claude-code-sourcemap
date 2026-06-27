// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hna
// matched 2.1.88 source: src/utils/settings/changeDetector.ts
// class=modified  jaccard=0.3664  score=0.5075  fileCov=0.5686
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var hna = E(() => {
  bro();
  _ro();
  gna();
  bLt();
  X$n();
});
function Q$n(e, t) {
  let n = e.get(t);
  if (n) return n;
  let r = J$n(t),
    o;
  for (let [s, i] of e) {
    let a = J$n(s);
    if (!a.includes("*")) {
      if (a === r) return i;
    } else if (o === void 0 && _na(a, r)) o = i;
  }
  return o;
}
function J$n(e) {
  if (!e.startsWith("domain:")) return e;
  return `domain:${e
    .slice(7)
    .toLowerCase()
    .replace(/(?<=[^*.])\.+(?=(:\d+)?$)/, "")}`;
}
function _na(e, t) {
  if (!e.startsWith("domain:") || !t.startsWith("domain:")) return false;
  if (e === "domain:*") return true;
  let n;
  if (e.startsWith("domain:*.")) n = `^domain:(?:[^.:]+\\.)+${yna(e.slice(9))}$`;
  else n = `^domain:${yna(e.slice(7))}$`;
  return new RegExp(n, "i").test(t);
}
function yna(e) {
  return e
    .split("*")
    .map((t) => t.replace(/[.+?^${}()|[\]\\]/g, "\\$&"))
    .join("[^.:]*");
}
function Sro(e, t) {
  let n = J$n(`domain:${e}`),
    r = J$n(`domain:${t}`);
  return n.includes("*") ? _na(n, r) : n === r;
}
function anp(e) {
  let t = e?.stabilityThreshold ?? Ena,
    n = e?.pollInterval ?? Ana,
    r = e?.mdmPollInterval ?? snp,
    o = e?.deletionGrace ?? inp,
    s = Mi(),
    i = Fet.subscribe((I) => s.emit(I)),
    a = null,
    l = null,
    c = null,
    u = false,
    d = false,
    p = new Map(),
    f = null,
    m = new Map();
  async function g() {
    if (vl()) return;
    if (u || d) return;
    ((u = true), v(), (f = Ci(h)));
    let I = await lnp(),
      { dirs: k, settingsFiles: D, dropInDir: P } = I;
    if (((m = I.realpathToCanonical), d)) return;
    if (k.length === 0) return;
    T(
      `Watching for changes in setting files ${[...D].join(", ")}...${P ? ` and drop-in directory ${P}` : ""}`,
    );
    for (let [O, L] of m)
      T(
        `Settings file ${L} is a symlink to ${O}; also watching ${t$.dirname(O)} so atomic-save edits to the target are detected`,
      );
    ((a = S1.watch(k, {
      persistent: true,
      ignoreInitial: true,
      depth: 0,
      awaitWriteFinish: {
        stabilityThreshold: t,
        pollInterval: n,
      },
      ignored: (O, L) => {
        if (L && !L.isFile() && !L.isDirectory()) return true;
        if (O.split(/[/\\]/).some((N) => N === ".git")) return true;
        if (!L || L.isDirectory()) return false;
        let M = t$.normalize(O);
        if (D.has(M)) return false;
        if (P && M.startsWith(P + t$.sep) && M.endsWith(".json")) return false;
        return true;
      },
      ignorePermissionErrors: true,
      usePolling: false,
      atomic: true,
    })),
      a.on("change", b),
      a.on("unlink", S),
      a.on("add", _),
      a.on("error", (O) =>
        T(`[settings] watcher error: ${be(O)}`, {
          level: "warn",
        }),
      ));
  }
  function h() {
    if (((d = true), f)) (f(), (f = null));
    if (l) (clearInterval(l), (l = null));
    for (let k of p.values()) clearTimeout(k);
    (p.clear(), (m = new Map()), (c = null), yvs(), i(), s.clear());
    let I = a;
    return ((a = null), I ? I.close() : Promise.resolve());
  }
  function y(I) {
    return m.get(t$.normalize(I)) ?? I;
  }
  function b(I) {
    let k = y(I),
      D = Z$n(k);
    if (!D) return;
    let P = p.get(k);
    if (P)
      (clearTimeout(P),
        p.delete(k),
        T(`Cancelled pending deletion of ${k} \u2014 file was recreated`));
    if (hvs(k, bna)) {
      T(`Suppressed change to ${k} \u2014 echo of our own write within the last ${bna}ms`);
      return;
    }
    (T(`Detected change to ${k}${I !== k ? ` (via symlink target ${I})` : ""}`),
      vRe(Sna(D), k).then((O) => {
        if (act(O)) {
          T(`ConfigChange hook blocked change to ${k}`);
          return;
        }
        C(D);
      }));
  }
  function _(I) {
    let k = y(I);
    if (!Z$n(k)) return;
    let P = p.get(k);
    if (P)
      (clearTimeout(P),
        p.delete(k),
        T(`Cancelled pending deletion of ${k} \u2014 file was re-added`));
    b(I);
  }
  function S(I) {
    let k = y(I),
      D = Z$n(k);
    if (!D) return;
    if ((T(`Detected deletion of ${k}`), Vt() === "macos")) a?.add(t$.dirname(I));
    if (p.has(k)) return;
    let P = setTimeout(A, o, k, D);
    p.set(k, P);
  }
  function A(I, k) {
    (p.delete(I),
      vRe(Sna(k), I).then((D) => {
        if (act(D)) {
          T(`ConfigChange hook blocked deletion of ${I}`);
          return;
        }
        C(k);
      }));
  }
  function v() {
    let I = Uae(),
      k = kCe();
    ((c = De({
      mdm: I.settings,
      hkcu: k.settings,
      wslInherits: Vee(),
      wslWindowsFile: CLr(),
    })),
      (l = setInterval(() => {
        if (d) return;
        (async () => {
          try {
            let { mdm: D, hkcu: P, wslInherits: O } = await rCs();
            if (d) return;
            nCs(D, P, O);
            let L = De({
              mdm: D.settings,
              hkcu: P.settings,
              wslInherits: O,
              wslWindowsFile: CLr(),
            });
            if (L !== c) ((c = L), T("Detected MDM settings change via poll"), C("policySettings"));
          } catch (D) {
            T(`MDM poll error: ${be(D)}`);
          }
        })();
      }, r)),
      l.unref());
  }
  function C(I) {
    n_();
    try {
      s.emit(I);
    } catch (k) {
      for (let D of k instanceof AggregateError ? k.errors : [k]) ke(D);
    }
  }
  function x(I) {
    (T(`Programmatic settings change notification for ${I}`), C(I));
  }
  return {
    initialize: g,
    dispose: h,
    [Symbol.asyncDispose]: h,
    subscribe: s.subscribe,
    notifyChange: x,
  };
}
async function lnp() {
  let e = new Map(),
    t = new Set(),
    n = new Map(),
    r = new Set();
  for (let c of fv) {
    if (c === "flagSettings") continue;
    let u = xg(c);
    if (!u) continue;
    let d = t$.dirname(u);
    if (!e.has(d)) e.set(d, new Set());
    if ((e.get(d).add(u), !t.has(d)))
      try {
        if ((await LWe.stat(d)).isDirectory()) t.add(d);
      } catch {}
    try {
      let p = await LWe.realpath(u);
      if (p === u) continue;
      let f = await LWe.realpath(d),
        m = t$.dirname(p);
      if (t$.join(f, t$.basename(u)) === p) continue;
      let g = m === f,
        h = g ? t$.join(d, t$.basename(p)) : p;
      if (Z$n(h) !== void 0) continue;
      if ((n.set(h, u), r.add(d), g)) e.get(d).add(h);
      else {
        if (!e.has(m)) e.set(m, new Set());
        (e.get(m).add(h), t.add(m), r.add(m));
      }
    } catch {}
  }
  let o = new Set();
  for (let c of t) {
    let u = e.get(c);
    if (u) for (let d of u) o.add(d);
  }
  let s = null,
    i = PRt();
  try {
    if ((await LWe.stat(i)).isDirectory()) (t.add(i), (s = i), r.add(i));
  } catch {}
  let a = Vt() === "macos",
    l = new Set();
  for (let c of t) {
    let u = e.get(c);
    if (!u || !a || r.has(c)) {
      l.add(c);
      continue;
    }
    let d = false;
    for (let p of u)
      try {
        if ((await LWe.stat(p)).isFile()) l.add(p);
        else d = true;
      } catch {
        d = true;
      }
    if (d) l.add(c);
  }
  return {
    dirs: [...l],
    settingsFiles: o,
    dropInDir: s,
    realpathToCanonical: n,
  };
}
function Sna(e) {
  switch (e) {
    case "userSettings":
      return "user_settings";
    case "projectSettings":
      return "project_settings";
    case "localSettings":
      return "local_settings";
    case "flagSettings":
    case "policySettings":
      return "policy_settings";
  }
}
function Z$n(e) {
  let t = t$.normalize(e),
    n = PRt();
  if (t.startsWith(n + t$.sep)) return "policySettings";
  return fv.find((r) => xg(r) === t);
}
var LWe,
  t$,
  Ena = 1000,
  Ana = 500,
  bna = 5000,
  snp = 1800000,
  inp,
  n$;
