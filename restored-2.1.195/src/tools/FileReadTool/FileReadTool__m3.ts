// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LQt
// matched 2.1.88 source: src/tools/FileReadTool/FileReadTool.ts
// class=modified (alt of src/tools/FileReadTool/FileReadTool.ts)  jaccard=0.0116  score=0.1172  fileCov=0.0127
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module LQt] deps: iu, jGo, QGo, Gfe, kYe, WL, q$, kLn, FAe, xar, VGe, xHt, ag, pWo, Lar, dn, kt, _F, jc, ty, Rm, er, Lo, je, At, Is, ED, Vke, dr, sj, Yrc, lH, JN
((Xrc = require("crypto")),
  (Eme = require("fs/promises")),
  (EWo = require("path")),
  (zJf = ["--bg", "--background"]));
class vWo {
  taskOutput;
  #e;
  #t;
  #n;
  #r = "backgrounded";
  #o = null;
  #l;
  result;
  constructor(e) {
    ((this.#e = e.pid),
      (this.#t = e.procStart),
      (this.#n = e.startTimeTicks),
      (this.taskOutput = new Tb(e.taskId, null, true)),
      (this.result = new Promise((t) => {
        this.#l = t;
      })),
      (this.#o = setInterval(() => void this.#s(), sQf)),
      this.#o.unref());
  }
  async #s() {
    if (this.#r !== "backgrounded") return;
    let e = true;
    try {
      if ((process.kill(this.#e, 0), this.#t !== void 0)) {
        if (!(await bv(this.#e, this.#t))) e = false;
      } else if (this.#n !== void 0) {
        let t = await Oar(this.#e);
        if (t !== null && t !== this.#n) e = false;
      }
    } catch {
      e = false;
    }
    if (!e) await this.#a(false);
  }
  async #a(e) {
    if (this.#r !== "backgrounded") return;
    if (this.#o) (clearInterval(this.#o), (this.#o = null));
    this.#r = e ? "killed" : "completed";
    let t = this.#t !== void 0 || this.#n !== void 0,
      n = e
        ? t
          ? "[SIGTERM requested for detached process tree (sent if identity still matched) \u2014 adopted handle released]"
          : "[detached process still running \u2014 adopted handle released]"
        : "[process exited while detached; exit code unknown]";
    await $ar
      .appendFile(
        this.taskOutput.path,
        `
${n}
`,
      )
      .catch(() => {});
    let r = await this.taskOutput.getStdout();
    this.#l({
      code: -1,
      stdout: r,
      stderr: "",
      interrupted: e,
      backgroundTaskId: this.taskOutput.taskId,
    });
  }
  get status() {
    return this.#r;
  }
  background() {
    return true;
  }
  async kill() {
    (wWo(this.#e, this.#n, this.#t), await this.#a(true));
  }
  cleanup() {
    if (this.#o) (clearInterval(this.#o), (this.#o = null));
    this.taskOutput.clear();
  }
  detach() {
    return this.#e;
  }
}
async function Oar(e) {
  try {
    let t = await $ar.readFile(`/proc/${e}/stat`, "utf-8"),
      n = t.lastIndexOf(")"),
      r = t.slice(n + 2).split(" "),
      o = Number(r[19]);
    return Number.isFinite(o) ? o : null;
  } catch {
    return null;
  }
}
async function wWo(e, t, n) {
  if (n !== void 0) {
    if (
      (await KR(e, {
        skipCache: true,
      })) !== n
    )
      return;
  } else if (t !== void 0) {
    if ((await Oar(e)) !== t) return;
  } else return;
  await L3t(e, "SIGTERM").catch(() => {});
}
var $ar,
  sQf = 1000;
