// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wec
// matched 2.1.88 source: src/bridge/sessionRunner.ts
// class=modified (alt of src/bridge/sessionRunner.ts)  jaccard=0.0394  score=0.1206  fileCov=0.0552
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Wec] deps: fp, Rm, LZl, MZl, OZl, NZl, cDe, Jt, $3o, O7n, VZl, JZl, nec, aec, je, At, S9, jS, zRt, Sec, qee, GRr, zRt, Tec, xec
((Pec = require("child_process")),
  (Oir = require("crypto")),
  (Nir = require("fs")),
  (i2 = require("fs/promises")),
  (Mec = require("module")),
  (mHt = require("os")),
  (v_ = require("path")),
  ($ec = require("readline")),
  (Oec = require("url")),
  (Bir = R(qi(), 1)));
process.env.NoDefaultCurrentDirectoryInExePath = "1";
rYf = new Set(["EBUSY", "EMFILE", "ENFILE", "ENOTEMPTY", "EPERM"]);
function Kec() {
  return Vec.join(tr(), "daemon.scheduled.status.json");
}
async function IYf(e) {
  let t = {
    workerPid: process.pid,
    workerProcStart: fte(),
    writtenAt: Date.now(),
    tasks: e,
  };
  try {
    await eg(Kec(), De(t));
  } catch {}
}
async function Yec() {
  let e;
  try {
    e = await qec.readFile(Kec(), "utf8");
  } catch {
    return null;
  }
  let t = Ia(e, false);
  if (!t || typeof t !== "object") return null;
  let n = t;
  if (typeof n.workerPid !== "number" || typeof n.tasks !== "object" || n.tasks === null)
    return null;
  try {
    process.kill(n.workerPid, 0);
  } catch {
    return null;
  }
  if (!(await bv(n.workerPid, n.workerProcStart))) return null;
  return t;
}
function J3o(e) {
  let t = e.scheduled,
    n = {};
  if (Array.isArray(t) && t.length > 0 && typeof t[0] === "object") n = t[0] ?? {};
  else if (t && typeof t === "object" && !Array.isArray(t)) n = t;
  let r = Array.isArray(n.tasks) ? n.tasks : [];
  return {
    ...n,
    tasks: r,
  };
}
function Jec(e, t) {
  let n = e.scheduled;
  if (Array.isArray(n)) {
    let r = n.slice();
    ((r[0] = t), (e.scheduled = r));
  } else e.scheduled = t;
}
async function XJt(e, t) {
  return yl("daemon_scheduled_add", async () => {
    (Y3o().parse(e),
      await dHt((n) => {
        let r = J3o(n),
          o = r.tasks.filter((s) => !(s && typeof s === "object" && s.id === e.id));
        (o.push(e),
          Jec(n, {
            ...r,
            tasks: o,
          }));
      }, t));
  });
}
async function JJt(e, t) {
  return yl("daemon_scheduled_remove", async () => {
    let n = false;
    return (
      await dHt((r) => {
        if (!("scheduled" in r)) return false;
        let o = J3o(r),
          s = o.tasks.filter((i) => !(i && typeof i === "object" && i.id === e));
        if (s.length === o.tasks.length) return false;
        if (s.length === 0) {
          let i = r.scheduled;
          if (Array.isArray(i) && i.length > 1) r.scheduled = i.slice(1);
          else delete r.scheduled;
        } else
          Jec(r, {
            ...o,
            tasks: s,
          });
        n = true;
      }, t),
      n
    );
  });
}
async function hHt(e) {
  let t = await A3o(e);
  if (!("scheduled" in t)) return [];
  let n = J3o(t),
    r = [];
  for (let o of n.tasks) {
    let s = Y3o().safeParse(o);
    if (s.success) r.push(s.data);
  }
  return r;
}
var qec,
  Vec,
  CYf = 1000,
  zec = 10080,
  gHt,
  Y3o,
  X3o,
  Xec = async (e, t, n, r) => {
    let { tasks: o, maxConcurrent: s } = X3o().parse(e),
      { initializeErrorLogSink: i } = await Promise.resolve().then(() => (VJt(), kir)),
      { initializeAnalyticsSink: a } = await Promise.resolve().then(() => (ZSe(), dpt));
    if ((i(), a(), !r.getAccessToken()))
      (n("scheduled worker: not authed \u2014 run `claude auth login`"), process.exit(1));
    let { query: l } = await Promise.resolve().then(() => (Wec(), Gec));
    if ((n(`scheduled worker started tasks=${o.length} maxConcurrent=${s}`), o.length === 0)) {
      let A = setInterval(() => {}, 60000);
      (await new Promise((v) => {
        if (t.aborted) {
          v();
          return;
        }
        t.addEventListener("abort", () => v(), {
          once: true,
        });
      }),
        clearInterval(A));
      return;
    }
    let c = [],
      u = new Set(),
      d = null;
    function p(A) {
      let v = c.reduce((C, x) => (x.task.id === A.id ? C + 1 : C), 0);
      if (v >= A.maxQueued) {
        n(`task=${A.id} dropped (queue full: ${v}/${A.maxQueued})`);
        return;
      }
      (c.push({
        task: A,
      }),
        d?.(),
        (d = null));
    }
    let f = new Map(),
      m = new Set(),
      g = Date.now();
    function h() {
      let A = {};
      for (let v of o) {
        let C = f.get(v.id);
        A[v.id] = {
          running: m.has(v.id),
          ...(C !== void 0 && {
            lastFiredAt: C,
          }),
        };
      }
      IYf(A);
    }
    h();
    function y(A) {
      let v = f.get(A.id) ?? g;
      return U2t(A.cron, v, A.id, O8);
    }
    let b = setInterval(
      (A, v, C, x) => {
        let I = Date.now();
        for (let k of A) {
          if (!k.enabled) continue;
          let D = v(k);
          if (D === null) continue;
          if (D <= I) (C.set(k.id, I), x(k));
        }
      },
      CYf,
      o,
      y,
      f,
      p,
    );
    t.addEventListener("abort", () => {
      clearInterval(b);
      for (let A of u) A.abort();
      (d?.(), (d = null));
    });
    let _ = new Set();
    async function S(A) {
      let { task: v } = A,
        C = new AbortController();
      (u.add(C), m.add(v.id), h());
      let x = setTimeout((I) => I.abort(), Math.min(v.runTimeoutMinutes, zec) * 60000, C);
      n(`task=${v.id} start cron='${v.cron}' dir='${v.directory}'`);
      try {
        let I = l({
          prompt: v.prompt,
          options: {
            cwd: v.directory,
            permissionMode: v.permissionMode,
            ...(v.permissionMode === "bypassPermissions" && {
              allowDangerouslySkipPermissions: true,
            }),
            ...(v.model && {
              model: v.model,
            }),
            systemPrompt: {
              type: "preset",
              preset: "claude_code",
            },
            settingSources: ["user", "project", "local"],
            pathToClaudeCodeExecutable: process.execPath,
            abortController: C,
            stderr: (k) => n(`[${v.id}] ${k.trimEnd()}`),
            workload: rrt,
          },
        });
        for await (let k of I)
          if (k.type === "result")
            n(
              `task=${v.id} result subtype=${k.subtype} duration=${k.duration_ms}ms cost=$${k.total_cost_usd.toFixed(4)}`,
            );
      } catch (I) {
        n(`task=${v.id} threw: ${I}`);
      } finally {
        (clearTimeout(x), u.delete(C), m.delete(v.id), h());
      }
    }
    while (!t.aborted) {
      while (_.size < s && c.length > 0 && !t.aborted) {
        let A = c.shift(),
          v = S(A).finally(() => {
            (_.delete(v), d?.(), (d = null));
          });
        _.add(v);
      }
      if (t.aborted) break;
      if (c.length === 0 || _.size >= s)
        await new Promise((A) => {
          d = A;
        });
    }
    await Promise.allSettled(Array.from(_));
  };
