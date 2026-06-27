// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tre
// matched 2.1.88 source: src/utils/ripgrep.ts
// class=modified (alt of src/utils/ripgrep.ts)  jaccard=0.2259  score=0.5974  fileCov=0.2665
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var tre = E(() => {
  Qi();
  kt();
  Lo();
  je();
  fn();
  At();
  Bi();
  vna();
  vn();
  Is();
  sr();
  _0();
  ((d2t = require("child_process")),
    (Ina = require("os")),
    (Ero = R(require("path"))),
    (p2t = Cn(() => {
      if (ml(process.env.USE_BUILTIN_RIPGREP)) {
        let { cmd: n } = eOn("rg", []);
        if (n !== "rg")
          return {
            mode: "system",
            command: n,
            args: [],
          };
      }
      if (dm()) {
        let n = {
          mode: "embedded",
          command: process.execPath,
          args: ["--no-config"],
          argv0: "rg",
        };
        if (zV(process.execPath)) return n;
        let { cmd: r } = eOn("rg", []);
        if (r !== "rg")
          return {
            mode: "system",
            command: r,
            args: [],
          };
        return n;
      }
      let { cmd: t } = eOn("rg", []);
      return {
        mode: "system",
        command: t,
        args: [],
      };
    })));
  pnp = new Set(["SIGHUP", "SIGINT", "SIGPIPE"]);
  tOn = class tOn extends Error {
    partialResults;
    constructor(e, t) {
      super(e);
      this.partialResults = t;
      this.name = "RipgrepTimeoutError";
    }
  };
  nOn = Cn(
    async (e, t, n = []) => {
      if (Ero.resolve(e) === Ero.resolve(Ina.homedir())) return;
      try {
        let r,
          o = null;
        {
          let a = ["--files", "--hidden"];
          (n.forEach((l) => {
            a.push("--glob", `!${l}`);
          }),
            (r = await fnp(a, e, t)));
        }
        if (r === 0) return 0;
        let s = Math.floor(Math.log10(r)),
          i = Math.pow(10, s);
        return Math.round(r / i) * i;
      } catch (r) {
        if (r?.name !== "AbortError")
          T(`countFilesRoundedRg failed: ${r}`, {
            level: "error",
          });
      }
    },
    (e, t, n = []) => `${e}|${n.join(",")}`,
  );
  Rna = Cn(async () => {
    if (lct !== null) return;
    let e = p2t();
    try {
      let t;
      if (e.argv0) {
        let r = Bun.spawn([e.command, "--version"], {
            argv0: e.argv0,
            cwd: $t(),
            stderr: "ignore",
            stdout: "pipe",
            windowsHide: !0,
          }),
          [o, s] = await Promise.all([r.stdout.text(), r.exited]);
        t = {
          code: s,
          stdout: o,
        };
      } else
        t = await $n(e.command, [...e.args, "--version"], {
          timeout: 5000,
        });
      let n = t.code === 0 && !!t.stdout && t.stdout.startsWith("ripgrep ");
      ((lct = {
        working: n,
        lastTested: Date.now(),
        config: e,
      }),
        T(`Ripgrep first use test: ${n ? "PASSED" : "FAILED"} (mode=${e.mode}, path=${e.command})`),
        G("tengu_ripgrep_availability", {
          working: n ? 1 : 0,
          using_system: e.mode === "system" ? 1 : 0,
        }));
    } catch (t) {
      ((lct = {
        working: !1,
        lastTested: Date.now(),
        config: e,
      }),
        T(
          `Ripgrep first use test threw (mode=${e.mode}, path=${e.command}): ${t instanceof Error ? t.message : String(t)}`,
          {
            level: "error",
          },
        ));
    }
  });
});
function Pna() {
  return dm();
}
async function Mna() {
  if (!Pna()) return;
  try {
    return Dna.openSync("/proc/self/exe", "r");
  } catch (e) {
    ke(Error(`seccomp: failed to open /proc/self/exe: ${e}`));
    return;
  }
}
function $na() {
  if (!Pna()) return;
  return {
    applyPath: `/proc/self/fd/${Aro}`,
    argv0: "apply-seccomp",
  };
}
var Dna,
  Aro = 3;
