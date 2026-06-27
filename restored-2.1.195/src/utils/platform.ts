// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Is
// matched 2.1.88 source: src/utils/platform.ts
// class=modified  jaccard=0.4166  score=0.6297  fileCov=0.5518
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Is] deps: Qi, je, ys, vn
((Ppn = require("fs/promises")),
  (zkr = require("os")),
  (Kkr = ["macos", "wsl"]),
  (Vt = Cn(() => {
    try {
      if (process.env.WSL_DISTRO_NAME || process.env.WSL_INTEROP) return "wsl";
      try {
        let e = qt().readFileSync("/proc/version", {
          encoding: "utf8",
        });
        if (e.toLowerCase().includes("microsoft") || e.toLowerCase().includes("wsl")) return "wsl";
      } catch (e) {
        T(`Failed to read /proc/version for WSL detection: ${e}`, {
          level: "error",
        });
      }
      return "linux";
    } catch (e) {
      return (ke(e), "unknown");
    }
  })));
((OFe = Cn(() => {
  try {
    let e = qt().readFileSync("/proc/version", {
        encoding: "utf8",
      }),
      t = e.match(/WSL(\d+)/i);
    if (t && t[1]) return t[1];
    if (e.toLowerCase().includes("microsoft")) return "1";
    return;
  } catch (e) {
    T(`Failed to read /proc/version for WSL detection: ${e}`, {
      level: "error",
    });
    return;
  }
})),
  (DEs = Cn(async () => {
    let e = {
      linuxKernel: zkr.release(),
    };
    try {
      let t = await Ppn.readFile("/etc/os-release", "utf8");
      for (let n of t.split(`
`)) {
        let r = n.match(/^(ID|VERSION_ID)=(.*)$/);
        if (r && r[1] && r[2]) {
          let o = r[2].replace(/^"|"$/g, "");
          if (r[1] === "ID") e.linuxDistroId = o;
          else e.linuxDistroVersion = o;
        }
      }
    } catch {}
    return e;
  })),
  (iPu = [
    [".git", "git"],
    [".hg", "mercurial"],
    [".svn", "svn"],
    [".p4config", "perforce"],
    ["$tf", "tfs"],
    [".tfvc", "tfs"],
    [".jj", "jujutsu"],
    [".sl", "sapling"],
  ]),
  (PEs = Cn(() => {
    return;
  })));
class KZe {
  heap;
  length;
  static #e = !1;
  static create(e) {
    let t = BEs(e);
    if (!t) return [];
    KZe.#e = !0;
    let n = new KZe(e, t);
    return ((KZe.#e = !1), n);
  }
  constructor(e, t) {
    if (!KZe.#e) throw TypeError("instantiate Stack using Stack.create(n)");
    ((this.heap = new t(e)), (this.length = 0));
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
}
var zZe,
  OEs,
  Ykr,
  NEs = (e, t, n, r) => {
    typeof Ykr.emitWarning === "function"
      ? Ykr.emitWarning(e, t, n, r)
      : console.error(`[${n}] ${t}: ${e}`);
  },
  $pn,
  $Es,
  aPu = (e) => !OEs.has(e),
  _cg,
  tCe = (e) => e && e === Math.floor(e) && e > 0 && isFinite(e),
  BEs = (e) =>
    !tCe(e)
      ? null
      : e <= Math.pow(2, 8)
        ? Uint8Array
        : e <= Math.pow(2, 16)
          ? Uint16Array
          : e <= Math.pow(2, 32)
            ? Uint32Array
            : e <= Number.MAX_SAFE_INTEGER
              ? rRt
              : null,
  rRt,
  bG;
