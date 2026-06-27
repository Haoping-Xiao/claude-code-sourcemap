// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yf
// matched 2.1.88 source: src/utils/task/diskOutput.ts
// class=modified  jaccard=0.0368  score=0.059  fileCov=0.0893
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Yf] deps: Qi, Uh, M7, u_, $7, ft, Un, lf, EI, Rm, Lo, fn, ys, Hu, KI, Is, y_, vf, mCe, RCe, dr, xue, kv, K0, sj, Tkn, $I, QH, Gy, w5e
((Fsc = require("crypto")),
  (A5o = R(D3e(), 1)),
  (sZt = require("os")),
  (Rl = require("path")),
  (T5o = [
    ".gitconfig",
    ".gitmodules",
    ".bashrc",
    ".bash_profile",
    ".zshrc",
    ".zprofile",
    ".profile",
    ".zshenv",
    ".zlogin",
    ".zlogout",
    ".bash_login",
    ".bash_aliases",
    ".bash_logout",
    ".envrc",
    ".ripgreprc",
    ".mcp.json",
    ".claude.json",
    ".npmrc",
    ".yarnrc",
    ".yarnrc.yml",
    ".pnp.cjs",
    ".pnp.loader.mjs",
    ".pnpmfile.cjs",
    "bunfig.toml",
    ".bunfig.toml",
    ".bazelrc",
    ".bazelversion",
    ".bazeliskrc",
    ".pre-commit-config.yaml",
    "lefthook.yml",
    ".lefthook.yml",
    "lefthook.yaml",
    ".lefthook.yaml",
    "gradle-wrapper.properties",
    "maven-wrapper.properties",
    ".devcontainer.json",
    "pyrightconfig.json",
  ]),
  (v5o = new Set(T5o.map((e) => e.toLowerCase()))),
  (jsc = [
    ".git",
    ".vscode",
    ".idea",
    ".claude",
    ".husky",
    ".cargo",
    ".devcontainer",
    ".yarn",
    ".mvn",
  ]),
  (Gsc = [".config/git"]));
Tme = Rl.posix.sep;
((YU = Cn(function () {
  let t = qE(),
    n = qt(),
    r = t;
  try {
    r = n.realpathSync(t);
  } catch {}
  return r + Rl.sep;
})),
  (y2t = Cn(function () {
    let t = Xst(),
      n = qt(),
      r = t;
    try {
      r = n.realpathSync(t);
    } catch {}
    return r + Rl.sep;
  })),
  (eir = Cn(function () {
    let t = Fsc.randomBytes(16).toString("hex");
    return Rl.join(
      YU(),
      "bundled-skills",
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      t,
    );
  })));
_em = Cn(function (t) {
  try {
    return Rl.join(bTe(), t, "scratchpad");
  } catch {
    return null;
  }
});
Tlr = Cn(i_);
Hem = Cn(function () {
  let t = [
      ["/private/tmp", "/tmp"],
      ["/private/var", "/var"],
      ["/private/etc", "/etc"],
      ["/usr/bin", "/bin"],
      ["/usr/lib", "/lib"],
      ["/usr/sbin", "/sbin"],
    ],
    n = new Map(),
    r = qt();
  for (let [o, s] of t)
    try {
      if (r.realpathSync(s) === o) n.set(o, s);
    } catch {}
  return n;
});
function jpt() {
  if (w5o === void 0) w5o = C5o.join(bTe(), Rt(), "tasks");
  return w5o;
}
async function x5o() {
  await Wse.mkdir(jpt(), {
    recursive: true,
  });
}
function jm(e) {
  return C5o.join(jpt(), `${e}.output`);
}
function Clr(e) {
  return (Qsc.add(e), e.finally(() => Qsc.delete(e)).catch(() => {}), e);
}
class W2n {
  #e;
  #t = null;
  #n = [];
  #r = 0;
  #o = false;
  #l = null;
  #s = null;
  constructor(e) {
    this.#e = jm(e);
  }
  append(e) {
    if (this.#o) return;
    if (((this.#r += e.length), this.#r > wlr))
      ((this.#o = true),
        this.#n.push(`
[output truncated: exceeded ${I5o} disk cap]
`));
    else this.#n.push(e);
    if (!this.#l)
      ((this.#l = new Promise((t) => {
        this.#s = t;
      })),
        Clr(this.#i()));
  }
  flush() {
    return this.#l ?? Promise.resolve();
  }
  cancel() {
    this.#n.length = 0;
  }
  async #a() {
    while (true) {
      try {
        if (!this.#t)
          (await x5o(),
            (this.#t = await Wse.open(
              this.#e,
              tNe.constants.O_WRONLY | tNe.constants.O_APPEND | tNe.constants.O_CREAT | Zsc,
            )));
        while (true) if ((await this.#c(), this.#n.length === 0)) break;
      } finally {
        if (this.#t) {
          let e = this.#t;
          ((this.#t = null), await e.close());
        }
      }
      if (this.#n.length) continue;
      break;
    }
  }
  #c() {
    return this.#t.appendFile(this.#u());
  }
  #u() {
    let e = this.#n.splice(0, this.#n.length),
      t = 0;
    for (let o of e) t += Buffer.byteLength(o, "utf8");
    let n = Buffer.allocUnsafe(t),
      r = 0;
    for (let o of e) r += n.write(o, r, "utf8");
    return n;
  }
  async #i() {
    try {
      await this.#a();
    } catch (e) {
      if (
        (T(`Task output drain failed (will retry once): ${e}`, {
          level: "error",
        }),
        this.#n.length > 0)
      )
        try {
          await this.#a();
        } catch (t) {
          let n = on(t);
          if (n && Jie.has(n))
            T(`Task output drain retry failed (${n}): ${t}`, {
              level: "error",
            });
          else ke(t);
        }
    } finally {
      let e = this.#s;
      ((this.#l = null), (this.#s = null), e());
    }
  }
}
function wem(e) {
  let t = vlr.get(e);
  if (!t) ((t = new W2n(e)), vlr.set(e, t));
  return t;
}
function YZa(e, t) {
  wem(e).append(t);
}
function jy(e) {
  return Clr(
    (async () => {
      let t = vlr.get(e);
      if (t) (await t.flush(), vlr.delete(e));
    })(),
  );
}
async function EHl(e, t, n = eic) {
  try {
    let r = await Min(jm(e), t, n);
    if (!r)
      return {
        content: "",
        newOffset: t,
      };
    return {
      content: r.content,
      newOffset: t + r.bytesRead,
    };
  } catch (r) {
    let o = on(r);
    if (o === "ENOENT")
      return {
        content: "",
        newOffset: t,
      };
    if (o && Jie.has(o))
      T(`getTaskOutputDelta failed (${o}): ${r}`, {
        level: "error",
      });
    else ke(r);
    return {
      content: "",
      newOffset: t,
    };
  }
}
async function fRo(e, t = eic) {
  try {
    let { content: n, bytesTotal: r, bytesRead: o } = await vx(jm(e), t);
    if (r > o)
      return `[${Math.round((r - o) / 1024)}KB of earlier output omitted]
${n}`;
    return n;
  } catch (n) {
    let r = on(n);
    if (r === "ENOENT") return "";
    if (r && Jie.has(r))
      T(`getTaskOutput failed (${r}): ${n}`, {
        level: "error",
      });
    else ke(n);
    return "";
  }
}
function Iht(e) {
  return Clr(
    (async () => {
      await x5o();
      let t = jm(e);
      return (
        await (
          await Wse.open(
            t,
            tNe.constants.O_WRONLY | tNe.constants.O_CREAT | tNe.constants.O_EXCL | Zsc,
          )
        ).close(),
        t
      );
    })(),
  );
}
function ZAe(e, t, n) {
  return Clr(
    (async () => {
      try {
        await x5o();
        let r = jm(e);
        try {
          await Wse.symlink(t, r);
        } catch (o) {
          if (on(o) !== "EEXIST") throw o;
          (await Wse.unlink(r), await Wse.symlink(t, r));
        }
        return (n?.("symlink"), r);
      } catch (r) {
        let o = on(r);
        if (o && Jie.has(o))
          T(`initTaskOutputAsSymlink failed (${o}): ${r}`, {
            level: "error",
          });
        else ke(r);
        return Iht(e);
      }
    })(),
  );
}
var tNe,
  Wse,
  C5o,
  Zsc,
  eic = 8388608,
  wlr = 5368709120,
  I5o = "5GB",
  w5o,
  Qsc,
  vlr;
