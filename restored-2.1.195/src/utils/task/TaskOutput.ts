// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jqe
// matched 2.1.88 source: src/utils/task/TaskOutput.ts
// class=modified  jaccard=0.4088  score=0.6817  fileCov=0.5052
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jqe] deps: utils/debug.ts, utils/fsOperations.ts, BGt, services/teamMemorySync/secretScanner.ts, Task.ts
HPa = require("fs/promises");
Tb = class Tb {
  taskId;
  path;
  stdoutToFile;
  #e = "";
  #t = "";
  #n = null;
  #r = new Rmo(1000);
  #o = 0;
  #l = 0;
  #s;
  #a;
  #c = false;
  #u = 0;
  static #i = new Map();
  static #p = new Map();
  static #h = null;
  constructor(e, t, n = false, r = E0p) {
    if (
      ((this.taskId = e),
      (this.path = jm(e)),
      (this.stdoutToFile = n),
      (this.#s = r),
      (this.#a = t),
      n && t)
    )
      Tb.#i.set(e, this);
  }
  static startPolling(e) {
    let t = Tb.#i.get(e);
    if (!t || !t.#a) return;
    if ((Tb.#p.set(e, t), !Tb.#h)) ((Tb.#h = setInterval(Tb.#m, A0p)), Tb.#h.unref());
  }
  static stopPolling(e) {
    if ((Tb.#p.delete(e), Tb.#p.size === 0 && Tb.#h)) (clearInterval(Tb.#h), (Tb.#h = null));
  }
  static #m() {
    for (let [, e] of Tb.#p) {
      if (!e.#a) continue;
      vx(e.path, H0p).then(
        ({ content: t, bytesRead: n, bytesTotal: r }) => {
          if (!e.#a) return;
          if (!t) {
            e.#a("", "", e.#o, r, false);
            return;
          }
          let o = t.length,
            s = 0,
            i = 0,
            a = 0;
          while (o > 0) {
            if (
              ((o = t.lastIndexOf(
                `
`,
                o - 1,
              )),
              a++,
              a === 5)
            )
              s = o <= 0 ? 0 : o + 1;
            if (a === 100) i = o <= 0 ? 0 : o + 1;
          }
          let l = n >= r ? a : Math.max(e.#o, Math.round((r / n) * a));
          ((e.#o = l), (e.#l = r), e.#a(t.slice(s), t.slice(i), l, r, n < r));
        },
        () => {},
      );
    }
  }
  writeStdout(e) {
    this.#d(e, false);
  }
  writeStderr(e) {
    this.#d(e, true);
  }
  #d(e, t) {
    if (((this.#l += e.length), this.#y(e), this.#n)) {
      this.#n.append(t ? `[stderr] ${e}` : e);
      return;
    }
    if (this.#e.length + this.#t.length + e.length > this.#s) {
      this.#g(t ? e : null, t ? null : e);
      return;
    }
    if (t) this.#t += e;
    else this.#e += e;
  }
  #y(e) {
    let r = 0,
      o = [],
      s = 0,
      i = e.length;
    while (i > 0) {
      let a = e.lastIndexOf(
        `
`,
        i - 1,
      );
      if (a === -1) break;
      if ((r++, o.length < 100 && s < 4096)) {
        let l = i - a - 1;
        if (l > 0 && l <= 4096 - s) {
          let c = e.slice(a + 1, i);
          if (c.trim()) (o.push(Buffer.from(c).toString()), (s += l));
        }
      }
      i = a;
    }
    this.#o += r;
    for (let a = o.length - 1; a >= 0; a--) this.#r.add(o[a]);
    if (this.#a && o.length > 0) {
      let a = this.#r.getRecent(5);
      this.#a(
        Fin(
          a,
          `
`,
        ),
        Fin(
          this.#r.getRecent(100),
          `
`,
        ),
        this.#o,
        this.#l,
        this.#n !== null,
      );
    }
  }
  #g(e, t) {
    if (((this.#n = new W2n(this.taskId)), this.#e)) (this.#n.append(this.#e), (this.#e = ""));
    if (this.#t) (this.#n.append(`[stderr] ${this.#t}`), (this.#t = ""));
    if (t) this.#n.append(t);
    if (e) this.#n.append(`[stderr] ${e}`);
  }
  async getStdout() {
    if (this.stdoutToFile) return this.#b();
    if (this.#n) {
      let e = this.#r.getRecent(5),
        t = Fin(
          e,
          `
`,
        ),
        r = `
Output truncated (${Math.round(this.#l / 1024)}KB total). Full output saved to: ${this.path}`;
      return t ? t + r : r.trimStart();
    }
    return this.#e;
  }
  async #b() {
    let e = Npt();
    try {
      let t = await Min(this.path, 0, e);
      if (!t) return ((this.#c = true), "");
      let { content: n, bytesRead: r, bytesTotal: o } = t;
      return ((this.#u = o), (this.#c = o <= r), n);
    } catch (t) {
      let n = t instanceof Error && "code" in t ? String(t.code) : "unknown";
      return (
        T(`TaskOutput.#readStdoutFromFile: failed to read ${this.path} (${n}): ${t}`),
        `<bash output unavailable: output file ${this.path} could not be read (${n}). This usually means another Claude Code process in the same project deleted it during startup cleanup.>`
      );
    }
  }
  getStderr() {
    if (this.#n) return "";
    return this.#t;
  }
  get isOverflowed() {
    return this.#n !== null;
  }
  get totalLines() {
    return this.#o;
  }
  get totalBytes() {
    return this.#l;
  }
  get outputFileRedundant() {
    return this.#c;
  }
  get outputFileSize() {
    return this.#u;
  }
  spillToDisk() {
    if (!this.#n) this.#g(null, null);
  }
  async flush() {
    await this.#n?.flush();
  }
  async deleteOutputFile() {
    try {
      await HPa.unlink(this.path);
    } catch {}
  }
  clear() {
    ((this.#e = ""),
      (this.#t = ""),
      this.#r.clear(),
      (this.#a = null),
      this.#n?.cancel(),
      Tb.stopPolling(this.taskId),
      Tb.#i.delete(this.taskId));
  }
};
function Pmo(e, t) {
  if (!t?.subcommands?.length) return false;
  let n = e.toLowerCase();
  return t.subcommands.some((r) =>
    Array.isArray(r.name) ? r.name.some((o) => o.toLowerCase() === n) : r.name.toLowerCase() === n,
  );
}
function TPa(e, t, n) {
  if (n?.options) {
    let r = n.options.find((o) => (Array.isArray(o.name) ? o.name.includes(e) : o.name === e));
    if (r) return !!r.args;
  }
  if (n?.subcommands?.length && t && !t.startsWith("-")) return !Pmo(t, n);
  return false;
}
function v0p(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (!r) continue;
    if (r.startsWith("-")) {
      if (TPa(r, e[n + 1], t)) n++;
      continue;
    }
    if (!t?.subcommands?.length) return r;
    if (Pmo(r, t)) return r;
  }
  return;
}
async function q2n(e, t, n) {
  let r = await w0p(e, t, n),
    o = [e],
    s = !!n?.subcommands?.length,
    i = false;
  for (let a = 0; a < t.length; a++) {
    let l = t[a];
    if (!l || o.length >= r) break;
    if (l.startsWith("-")) {
      if (l === "-c" && ["python", "python3"].includes(e.toLowerCase())) break;
      if (n?.options) {
        let c = n.options.find((u) => (Array.isArray(u.name) ? u.name.includes(l) : u.name === l));
        if (c?.args && Bpt(c.args).some((u) => u?.isCommand || u?.isModule)) {
          o.push(l);
          continue;
        }
      }
      if (s && !i) {
        if (TPa(l, t[a + 1], n)) a++;
        continue;
      }
      break;
    }
    if (await C0p(l, t.slice(0, a), n)) break;
    if (s && !i) i = Pmo(l, n);
    o.push(l);
  }
  return o.join(" ");
}
async function w0p(e, t, n) {
  let r = v0p(t, n),
    o = e.toLowerCase(),
    s = r ? `${o} ${r.toLowerCase()}` : o;
  if (Gqe[s]) return Gqe[s];
  if (Gqe[o]) return Gqe[o];
  if (!n) return 2;
  if (n.options && t.some((i) => i?.startsWith("-")))
    for (let i of t) {
      if (!i?.startsWith("-")) continue;
      let a = n.options.find((l) => (Array.isArray(l.name) ? l.name.includes(i) : l.name === i));
      if (a?.args && Bpt(a.args).some((l) => l?.isCommand || l?.isModule)) return 3;
    }
  if (r && n.subcommands?.length) {
    let i = r.toLowerCase(),
      a = n.subcommands.find((l) =>
        Array.isArray(l.name)
          ? l.name.some((c) => c.toLowerCase() === i)
          : l.name.toLowerCase() === i,
      );
    if (a) {
      if (a.args) {
        let l = Bpt(a.args);
        if (l.some((c) => c?.isCommand)) return 3;
        if (l.some((c) => c?.isVariadic)) return 2;
      }
      if (a.subcommands?.length) return 4;
      if (!a.args) return 2;
      return 3;
    }
  }
  if (n.args) {
    let i = Bpt(n.args);
    if (i.some((a) => a?.isCommand))
      return !Array.isArray(n.args) && n.args.isCommand
        ? 2
        : Math.min(2 + i.findIndex((a) => a?.isCommand), 3);
    if (!n.subcommands?.length) {
      if (i.some((a) => a?.isVariadic)) return 1;
      if (i[0] && !i[0].isOptional) return 2;
    }
  }
  return n.args && Bpt(n.args).some((i) => i?.isDangerous) ? 3 : 2;
}
async function C0p(e, t, n) {
  if (e.startsWith("-")) return true;
  let r = e.lastIndexOf("."),
    o = r > 0 && r < e.length - 1 && !e.substring(r + 1).includes(":"),
    s = e.includes("/") || o,
    i = T0p.some((a) => e.startsWith(a));
  if (!s && !i) return false;
  if (n?.options && t.length > 0 && t[t.length - 1] === "-m") {
    let a = n.options.find((l) =>
      Array.isArray(l.name) ? l.name.includes("-m") : l.name === "-m",
    );
    if (a?.args && Bpt(a.args).some((l) => l?.isModule)) return false;
  }
  return true;
}
var T0p,
  Gqe,
  Bpt = (e) => (Array.isArray(e) ? e : [e]);
