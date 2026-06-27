// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xAn
// matched 2.1.88 source: src/utils/genericProcessUtils.ts
// class=partial  jaccard=0.2419  score=0.5128  fileCov=0.3141
// note: low-confidence suggestion: src/utils/genericProcessUtils.ts; 12 renamed
// ─────────────────────────────────────────────────────────────────────────
var xAn = E(() => {
  Rc();
  og();
  je();
  fn();
  Ls();
  oje();
});
function Hr(e) {
  if (e == null) return;
  return /^[A-Za-z0-9_-]{1,128}$/.test(e) ? kh(e) : We("nonconforming");
}
var fb = () => {};
var ort = {};
_t(ort, {
  sigtermThenKill: () => sigtermThenKill,
  ownProcStartAsync: () => ownProcStartAsync,
  ownProcStart: () => ownProcStart,
  isSameProcessAsync: () => isSameProcessAsync,
  isSameProcess: () => isSameProcess,
  isProcessRunning: () => isProcessRunning,
  getProcessStartTimeAsync: () => getProcessStartTimeAsync,
  getProcessStartTime: () => getProcessStartTime,
  getProcessCommand: () => getProcessCommand,
  getChildPids: () => getChildPids,
  getAncestorPidsAsync: () => getAncestorPidsAsync,
  getAncestorCommandsAsync: () => getAncestorCommandsAsync,
  _resetProcStartCacheForTesting: () => Epd
});
function isProcessRunning(e) {
  if (e <= 1) return !1;
  try {
    return process.kill(e, 0), !0;
  } catch {
    return !1;
  }
}
function sigtermThenKill(e, t) {
  for (let n of e) {
    try {
      process.kill(n, "SIGTERM");
    } catch {
      continue;
    }
    return setTimeout((r, o, s) => {
      if (!isSameProcess(o, s)) return;
      try {
        process.kill(r, "SIGKILL");
      } catch {}
    }, 5000, n, Math.abs(e[0]), t).unref(), !0;
  }
  return !1;
}
async function getAncestorPidsAsync(e, t = 10) {
  let n = `pid=${String(e)}; for i in $(seq 1 ${t}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ] || [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then break; fi; echo $ppid; pid=$ppid; done`,
    r = await Gr("sh", ["-c", n], {
      timeout: 3000
    });
  if (r.code !== 0 || !r.stdout?.trim()) return [];
  return r.stdout.trim().split(`
`).filter(Boolean).map(o => parseInt(o, 10)).filter(o => !isNaN(o));
}
function getProcessCommand(e) {
  try {
    let n = `ps -o command= -p ${String(e)}`,
      r = WFe(n, {
        timeout: 1000
      });
    return r ? r.trim() : null;
  } catch {
    return null;
  }
}
function getProcessStartTime(e) {
  try {
    {
      let n = qt().readFileSync(`/proc/${e}/stat`, {
          encoding: "utf8"
        }),
        r = n.lastIndexOf(")");
      return n.slice(r + 2).split(" ")[19];
    }
    let t = WFe(`LC_ALL=C TZ=UTC ps -o lstart= -p ${e}`, {
      timeout: 1000
    });
    return t ? t.trim() : void 0;
  } catch {
    return;
  }
}
function isSameProcess(e, t) {
  if (t === void 0) return !0;
  let n = getProcessStartTime(e);
  return n === void 0 || n === t;
}
async function isSameProcessAsync(e, t) {
  if (t === void 0) return !0;
  let n = await getProcessStartTimeAsync(e);
  return n === void 0 || n === t;
}
function ownProcStart() {
  return K2r ??= getProcessStartTime(process.pid);
}
async function ownProcStartAsync() {
  return K2r ??= await getProcessStartTimeAsync(process.pid);
}
async function getProcessStartTimeAsync(e, t) {
  let n = Date.now();
  if (!t?.skipCache) {
    let i = kAn.get(e),
      a = i?.miss ? Spd : bpd;
    if (i && n - i.at < a) return i.p;
  }
  let r = Apd(e),
    o = {
      at: n,
      p: r
    };
  kAn.set(e, o);
  let s = await r;
  if (s === void 0 && kAn.get(e) === o) o.miss = !0;
  return s;
}
function Epd() {
  kAn.clear(), K2r = void 0;
}
async function Apd(e) {
  try {
    {
      let n = await qt().readFile(`/proc/${e}/stat`, {
          encoding: "utf8"
        }),
        r = n.lastIndexOf(")");
      return n.slice(r + 2).split(" ")[19];
    }
    let t = await Gr("ps", ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      env: {
        ...process.env,
        LC_ALL: "C",
        TZ: "UTC"
      }
    });
    return t.code === 0 && t.stdout ? t.stdout.trim() : void 0;
  } catch {
    return;
  }
}
async function getAncestorCommandsAsync(e, t = 10) {
  let n = `currentpid=${String(e)}; for i in $(seq 1 ${t}); do cmd=$(ps -o command= -p $currentpid 2>/dev/null); if [ -n "$cmd" ]; then printf '%s\\0' "$cmd"; fi; ppid=$(ps -o ppid= -p $currentpid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ] || [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then break; fi; currentpid=$ppid; done`,
    r = await Gr("sh", ["-c", n], {
      timeout: 3000
    });
  if (r.code !== 0 || !r.stdout?.trim()) return [];
  return r.stdout.split("\x00").filter(Boolean);
}
function getChildPids(e) {
  try {
    let n = `pgrep -P ${String(e)}`,
      r = WFe(n, {
        timeout: 1000
      });
    if (!r) return [];
    return r.trim().split(`
`).filter(Boolean).map(o => parseInt(o, 10)).filter(o => !isNaN(o));
  } catch {
    return [];
  }
}
var K2r,
  bpd = 60000,
  Spd = 5000,
  kAn;