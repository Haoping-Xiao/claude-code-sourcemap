// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yC
// matched 2.1.88 source: src/Task.ts
// class=modified (alt of src/Task.ts)  jaccard=0.1762  score=0.2265  fileCov=0.4423
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yC] deps: bH
nic = require("crypto");
Cem = new Set(["local_agent", "remote_agent", "in_process_teammate", "local_workflow"]);
Iem = {
  local_bash: "b",
  local_agent: "a",
  remote_agent: "r",
  in_process_teammate: "t",
  local_workflow: "w",
  monitor_mcp: "m",
  monitor_ws: "s",
  mcp_task: "k",
  dream: "d",
};
async function y1a() {
  await Promise.allSettled(Array.from(k5o));
}
function Dem(e, t) {
  return t ? `${e} ${t}` : e;
}
async function Pem(e) {
  try {
    let t = sic.dirname(e),
      n = await xlr.statfs(t, {
        bigint: true,
      }),
      r = (n.bavail * n.bsize) / (1024n * 1024n),
      o = "Free up space or set CLAUDE_CODE_TMPDIR to a directory on a filesystem with room.";
    if (r < 0n) return null;
    if (r < 10n)
      return `Command output was lost: the temp filesystem at ${t} is full (${r}MB free). The child process's stdout/stderr writes failed with ENOSPC. Free up space or set CLAUDE_CODE_TMPDIR to a directory on a filesystem with room.`;
    if (n.files > 0n && n.ffree < 1000n)
      return `Command output was lost: the temp filesystem at ${t} is out of inodes (${n.ffree} free). The child process's stdout/stderr writes failed with ENOSPC. Free up space or set CLAUDE_CODE_TMPDIR to a directory on a filesystem with room.`;
  } catch {}
  return null;
}
class R5o {
  #e;
  #t = false;
  #n;
  #r;
  #o = this.#l.bind(this);
  constructor(e, t, n) {
    ((this.#e = e), (this.#n = t), (this.#r = n), e.setEncoding("utf-8"), e.on("data", this.#o));
  }
  #l(e) {
    let t = typeof e === "string" ? e : e.toString();
    if (this.#r) this.#n.writeStderr(t);
    else this.#n.writeStdout(t);
  }
  cleanup() {
    if (this.#t) return;
    ((this.#t = true),
      this.#e.removeListener("data", this.#o),
      (this.#e = null),
      (this.#n = null),
      (this.#o = () => {}));
  }
}
class L5o {
  #e = "running";
  #t;
  #n;
  #r;
  #o;
  #l = null;
  #s = null;
  #a = false;
  #c;
  #u;
  #i;
  #p;
  #h;
  #m = null;
  #d = null;
  #y = null;
  taskOutput;
  static #g(e) {
    if (e.#h && e.#i) e.#i(e.background.bind(e));
    else e.#w(ric);
  }
  result;
  onTimeout;
  constructor(e, t, n, r, o = false, s = wlr) {
    if (
      ((this.#o = e),
      (this.#u = t),
      (this.#p = n),
      (this.#h = o),
      (this.#c = s),
      (this.taskOutput = r),
      (this.#r = e.stderr ? new R5o(e.stderr, r, true) : null),
      (this.#n = e.stdout ? new R5o(e.stdout, r, false) : null),
      o)
    )
      this.onTimeout = (i) => {
        this.#i = i;
      };
    this.result = this.#k();
  }
  get status() {
    return this.#e;
  }
  #b() {
    if (h_(this.#u.reason) === "interrupt") return;
    this.kill();
  }
  #A(e, t) {
    let n = e !== null && e !== void 0 ? e : t === "SIGTERM" ? 144 : 1;
    this.#E(n);
  }
  #S() {
    this.#E(1);
  }
  #E(e) {
    if (this.#d) (this.#d(e), (this.#d = null));
  }
  #T() {
    this.#_();
    let e = this.#l;
    if (e) (clearTimeout(e), (this.#l = null));
    let t = this.#y;
    if (t) (this.#u.removeEventListener("abort", t), (this.#y = null));
  }
  #_() {
    if (this.#s) (clearInterval(this.#s), (this.#s = null));
  }
  #R() {
    if (this.#s) return;
    ((this.#s = setInterval(() => {
      xlr.stat(this.taskOutput.path).then(
        (e) => {
          if (
            e.size > this.#c &&
            (this.#e === "running" || this.#e === "backgrounded") &&
            this.#s !== null
          )
            ((this.#a = true), this.#_(), this.#w(Ilr));
        },
        () => {},
      );
    }, Lem)),
      this.#s.unref());
  }
  #k() {
    if (
      ((this.#y = this.#b.bind(this)),
      this.#u.addEventListener("abort", this.#y, {
        once: true,
      }),
      this.#o.once("exit", this.#A.bind(this)),
      this.#o.once("error", this.#S.bind(this)),
      (this.#l = setTimeout(L5o.#g, this.#p, this)),
      this.taskOutput.stdoutToFile)
    )
      this.#R();
    let e = new Promise((t) => {
      this.#d = t;
    });
    return new Promise((t) => {
      ((this.#m = t), e.then(this.#v.bind(this)));
    });
  }
  async #v(e) {
    if ((this.#T(), this.#e === "running" || this.#e === "backgrounded")) this.#e = "completed";
    let t = await this.taskOutput.getStdout(),
      n = {
        code: e,
        stdout: t,
        stderr: this.taskOutput.getStderr(),
        interrupted: e === Ilr,
        backgroundTaskId: this.#t,
      };
    if (this.taskOutput.stdoutToFile && !this.#t)
      if (this.taskOutput.outputFileRedundant || this.#a)
        setImmediate(() => {
          if (!this.#t) this.taskOutput.deleteOutputFile();
        });
      else
        ((n.outputFilePath = this.taskOutput.path),
          (n.outputFileSize = this.taskOutput.outputFileSize),
          (n.outputTaskId = this.taskOutput.taskId));
    let r = (s) => {
      if (this.taskOutput.stdoutToFile && !this.#t)
        n.stdout = t
          ? `${s}
${t}`
          : s;
      else n.stderr = Dem(s, n.stderr);
    };
    if (this.#a)
      (r(`Command killed: output file exceeded ${I5o}`),
        (n.outputFileSize = this.taskOutput.outputFileSize));
    else if (e === ric) r(`Command timed out after ${Yi(this.#p)}`);
    else if (this.taskOutput.stdoutToFile && t === "" && e !== 0 && e !== Ilr) {
      let s = await Pem(this.taskOutput.path);
      if (s) n.stdout = s;
    }
    let o = this.#m;
    if (o) ((this.#m = null), o(n));
  }
  #w(e) {
    this.#e = "killed";
    let t = this.#o?.pid;
    if ((this.#E(e ?? Ilr), !t)) return Promise.resolve();
    let n = L3t(t, "SIGTERM"),
      r = new Promise((o) => {
        let s,
          i = false,
          a = setTimeout(() => {
            ((i = true), clearInterval(s));
            try {
              process.kill(-t, "SIGKILL");
            } catch {}
            L3t(t, "SIGKILL").finally(o);
          }, kem);
        if ((a.unref(), Vt() !== "windows"))
          n.then(() => {
            if (i) return;
            if (oic(t)) {
              (clearTimeout(a), o());
              return;
            }
            ((s = setInterval(() => {
              if (!oic(t)) return;
              (clearTimeout(a), clearInterval(s), o());
            }, Rem)),
              s.unref());
          });
      });
    return (k5o.add(r), r.finally(() => k5o.delete(r)), r);
  }
  kill() {
    return this.#w();
  }
  background(e, t) {
    if (this.#e === "running") {
      if (((this.#t = e), (this.#e = "backgrounded"), this.#T(), this.taskOutput.stdoutToFile))
        this.#R();
      else if (!t?.skipSpill) this.taskOutput.spillToDisk();
      if (t?.capMs) ((this.#l = setTimeout((n) => void n.#w(), t.capMs, this)), this.#l.unref?.());
      return true;
    }
    return false;
  }
  detach() {
    let e = this.#o?.pid;
    if (e !== void 0) this.#o.unref();
    return e;
  }
  cleanup() {
    (this.#n?.cleanup(),
      this.#r?.cleanup(),
      this.taskOutput.clear(),
      this.#T(),
      (this.#o = null),
      (this.#u = null),
      (this.#i = void 0));
  }
}
function rjn(e, t, n, r, o = false, s = wlr) {
  return new L5o(e, t, n, r, o, s);
}
class iic {
  status = "killed";
  result;
  taskOutput;
  constructor() {
    ((this.taskOutput = new Tb(iN("local_bash"), null)),
      (this.result = Promise.resolve({
        code: 145,
        stdout: "",
        stderr: "Command aborted before execution",
        interrupted: true,
      })));
  }
  background() {
    return false;
  }
  kill() {
    return Promise.resolve();
  }
  cleanup() {}
}
function gMa() {
  return new iic();
}
function oic(e) {
  for (let t of [-e, e])
    try {
      return (process.kill(t, 0), false);
    } catch (n) {
      if (on(n) !== "ESRCH") return false;
    }
  return true;
}
function tjn(e) {
  let t = new Tb(iN("local_bash"), null);
  return {
    status: "completed",
    result: Promise.resolve({
      code: 1,
      stdout: "",
      stderr: e,
      interrupted: false,
      preSpawnError: e,
    }),
    taskOutput: t,
    background() {
      return false;
    },
    kill() {
      return Promise.resolve();
    },
    cleanup() {},
  };
}
var xlr,
  sic,
  Ilr = 137,
  ric = 143,
  kem = 1500,
  Rem = 100,
  k5o,
  Lem = 5000;
