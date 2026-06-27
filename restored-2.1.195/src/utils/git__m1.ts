// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sa
// matched 2.1.88 source: src/utils/git.ts
// class=modified (alt of src/utils/git.ts)  jaccard=0.1563  score=0.364  fileCov=0.215
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var sa = E(() => {
  Qi();
  ft();
  ufn();
  id();
  dn();
  Rm();
  Lo();
  je();
  Mm();
  Bi();
  ys();
  dfn();
  gM();
  Mx();
  SG();
  sr();
  _0();
  ((zTs = require("crypto")),
    (hM = require("fs")),
    (whe = require("fs/promises")),
    (KTs = require("os")),
    (yu = require("path")),
    (YTs = Symbol("git-root-not-found")),
    (FTs = JC(
      (e) => {
        let t = Date.now();
        In("info", "find_git_root_started");
        let n = yu.resolve(e),
          r = n.substring(0, n.indexOf(yu.sep) + 1) || yu.sep,
          o = 0;
        while (n !== r) {
          try {
            let i = yu.join(n, ".git");
            o++;
            let a = hM.statSync(i);
            if (a.isDirectory() || a.isFile())
              return (
                In("info", "find_git_root_completed", {
                  duration_ms: Date.now() - t,
                  stat_count: o,
                  found: !0,
                }),
                o_(n)
              );
          } catch {}
          let s = yu.dirname(n);
          if (s === n) break;
          n = s;
        }
        try {
          let s = yu.join(r, ".git");
          o++;
          let i = hM.statSync(s);
          if (i.isDirectory() || i.isFile())
            return (
              In("info", "find_git_root_completed", {
                duration_ms: Date.now() - t,
                stat_count: o,
                found: !0,
              }),
              o_(r)
            );
        } catch {}
        return (
          In("info", "find_git_root_completed", {
            duration_ms: Date.now() - t,
            stat_count: o,
            found: !1,
          }),
          YTs
        );
      },
      (e) => e,
      50,
    )),
    (Tu = M$u()));
  ((jTs = JC(
    (e) => {
      try {
        let t = hM.readFileSync(yu.join(e, ".git"), "utf-8").trim();
        if (!t.startsWith("gitdir:")) return e;
        let n = t.slice(7).trim(),
          r = yu.resolve(e, n),
          o = hM.readFileSync(yu.join(r, "commondir"), "utf-8").trim(),
          s = yu.resolve(r, o);
        if (yu.resolve(yu.dirname(r)) !== yu.join(s, "worktrees")) return e;
        if (
          hM.realpathSync(hM.readFileSync(yu.join(r, "gitdir"), "utf-8").trim()) !==
          yu.join(hM.realpathSync(e), ".git")
        )
          return e;
        if (yu.basename(s) !== ".git") return o_(s);
        return o_(yu.dirname(s));
      } catch {
        return e;
      }
    },
    (e) => e,
    50,
  )),
    (qf = $$u()));
  ((go = Cn(() => zV("git") || "git")),
    (cb = Cn(
      async () => {
        let e = Date.now();
        In("info", "is_git_check_started");
        let t = Tu($t()) !== null;
        return (
          In("info", "is_git_check_completed", {
            duration_ms: Date.now() - e,
            is_git: t,
          }),
          t
        );
      },
      () => Rt(),
    )));
  iRr = Symbol("remote-slug-not-found");
  B$u = JC(
    (e) => {
      let t = N$u(e);
      if (!t) return iRr;
      let n = (r) => {
        let o = G0r(t, "remote", "origin", r);
        return o ? KFe(o) : null;
      };
      return n("pushurl") ?? n("url") ?? iRr;
    },
    (e) => e,
    50,
  );
});
async function Efn(e, t) {
  let { code: n } = await Gr("git", ["check-ignore", "--", e], {
    preserveOutputOnError: !1,
    cwd: t,
  });
  return n === 0;
}
async function z$u(e) {
  let { stdout: t, code: n } = await Gr(
      "git",
      ["config", "--global", "--get", "core.excludesfile"],
      {
        preserveOutputOnError: !1,
        cwd: e,
      },
    ),
    r = n === 0 ? t.trim() : "";
  if (r) {
    if (r === "~" || r.startsWith("~/")) return Che.join(fRr.homedir(), r.slice(2));
    if (Che.isAbsolute(r)) return r;
  }
  let o = process.env.XDG_CONFIG_HOME;
  if (o && Che.isAbsolute(o)) return Che.join(o, "git", "ignore");
  return Che.join(fRr.homedir(), ".config", "git", "ignore");
}
async function ZTs(e, t = $t()) {
  try {
    if (!(await lRr(t)))
      return {
        written: !1,
        effective: !1,
      };
    let n = e.replaceAll("\\", "/"),
      r = `**/${n}`,
      o = n.endsWith("/") ? `${n}sample-file.txt` : n;
    if (await Efn(o, t))
      return {
        written: !1,
        effective: !0,
      };
    let s = await z$u(t),
      i = Che.dirname(s);
    await pCe.mkdir(i, {
      recursive: !0,
    });
    try {
      if (
        (
          await pCe.readFile(s, {
            encoding: "utf-8",
          })
        ).includes(r)
      ) {
        let c = (await JTs(o, t)) ? "already_tracked" : "excludesfile_not_read";
        return (
          T(
            `[gitignore] '${r}' already present in ${s} but git check-ignore reports not-ignored \u2014 ${QTs(c, o)}`,
            {
              level: "warn",
            },
          ),
          {
            written: !1,
            effective: !1,
            reason: c,
          }
        );
      }
      await pCe.appendFile(
        s,
        `
${r}
`,
      );
    } catch (l) {
      if (on(l) === "ENOENT")
        await pCe.writeFile(
          s,
          `${r}
`,
          "utf-8",
        );
      else throw l;
    }
    if (!(await Efn(o, t))) {
      let l = (await JTs(o, t)) ? "already_tracked" : "excludesfile_not_read";
      return (
        T(
          `[gitignore] wrote '${r}' to ${s} but git check-ignore still reports not-ignored \u2014 ${QTs(l, o)}`,
          {
            level: "warn",
          },
        ),
        {
          written: !0,
          effective: !1,
          reason: l,
        }
      );
    }
    return {
      written: !0,
      effective: !0,
    };
  } catch (n) {
    return (
      T(
        `Failed to add gitignore entry to global gitignore: ${n instanceof Error ? n.message : String(n)}`,
        {
          level: "error",
        },
      ),
      {
        written: !1,
        effective: !1,
      }
    );
  }
}
async function JTs(e, t) {
  let { code: n } = await Gr("git", ["ls-files", "--error-unmatch", "--", e], {
    preserveOutputOnError: !1,
    cwd: t,
  });
  return n === 0;
}
function QTs(e, t) {
  return e === "already_tracked"
    ? `'${t}' is tracked in the index; gitignore rules do not apply to tracked files`
    : "core.excludesfile may point elsewhere";
}
var pCe, fRr, Che;
