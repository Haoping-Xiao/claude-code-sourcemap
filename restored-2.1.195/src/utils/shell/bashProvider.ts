// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eMa
// matched 2.1.88 source: src/utils/shell/bashProvider.ts
// class=modified  jaccard=0.2446  score=0.5124  fileCov=0.3188
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var eMa = E(() => {
  tRp = /(\d?&?>+[ \t]*)[Nn][Uu][Ll](?=\s|$|[|&;)\n])/g;
});
function nRp(e) {
  if (process.env.CLAUDE_CODE_SHELL_PREFIX)
    return "{ shopt -u extglob || setopt NO_EXTENDED_GLOB NO_BARE_GLOB_QUAL; } >/dev/null 2>&1 || true";
  if (e.includes("bash")) return "shopt -u extglob 2>/dev/null || true";
  else if (e.includes("zsh"))
    return "setopt NO_EXTENDED_GLOB NO_BARE_GLOB_QUAL 2>/dev/null || true";
  return null;
}
async function rMa(e, t) {
  let n,
    r = t?.skipSnapshot
      ? Promise.resolve(void 0)
      : KPa(e)
          .then((i) => (xe("shell_snapshot_create"), ANn(i !== void 0), i))
          .catch((i) => {
            (T(`Failed to create shell snapshot: ${i}`),
              It("shell_snapshot_create", "snapshot_failed"),
              ANn(!1));
            return;
          });
  if (!t?.skipSnapshot) YPa(e).catch(() => {});
  let o,
    s = !1;
  return {
    type: "bash",
    shellPath: e,
    detached: !0,
    async buildExecCommand(i, a) {
      let l = await r;
      if (l)
        try {
          await tMa.access(l);
        } catch {
          if ((T(`Snapshot file missing, falling back to login shell: ${l}`), !s))
            ((s = !0), It("shell_snapshot_create", "snapshot_missing_at_exec"));
          l = void 0;
        }
      ((o = l), ANn(l !== void 0), (n = a.sandboxTmpDir));
      let c = vU(),
        u = Vt() === "windows",
        d = u ? TD(c) : c,
        p = a.useSandbox && a.sandboxTmpDir,
        f = p ? GGt.join(a.sandboxTmpDir, `cwd-${a.id}`) : GGt.join(d, `claude-${a.id}-cwd`),
        m = p ? GGt.join(a.sandboxTmpDir, `cwd-${a.id}`) : nMa.join(c, `claude-${a.id}-cwd`),
        g = ZPa(i),
        h = QPa(g),
        y = JPa(g, h);
      if (g.includes("|") && h) y = WPa(g);
      let b = [];
      if (l) {
        let v = Vt() === "windows" ? TD(l) : l;
        b.push(`source ${ja([v])} 2>/dev/null || true`);
      }
      if (u) b.push(`export TEMP=${ja([c])} TMP=${ja([c])}`);
      let _ = await gca();
      if (_)
        b.push(`${_}
:`);
      if (ut(process.env.CLAUDE_CODE_REMOTE))
        b.push('export BUN_OPTIONS="--smol${BUN_OPTIONS:+ $BUN_OPTIONS}"');
      let S = nRp(e);
      if (S) b.push(S);
      (b.push(`eval ${y}`), b.push(`pwd -P >| ${ja([f])}`));
      let A = b.join(" && ");
      if (process.env.CLAUDE_CODE_SHELL_PREFIX) A = Z2n(process.env.CLAUDE_CODE_SHELL_PREFIX, A);
      return {
        commandString: A,
        cwdFilePath: m,
      };
    },
    getSpawnArgs(i) {
      let a = o !== void 0;
      if (a) T("Spawning shell without login (-l flag skipped)");
      return ["-c", ...(a ? [] : ["-l"]), i];
    },
    async getEnvironmentOverrides(i, a) {
      let l = null,
        c = {};
      if (((c[Gmo] = process.execPath), l)) c.TMUX = l;
      if (a) for (let [u, d] of a) c[u] = d;
      if (n) {
        let u = n;
        if (Vt() === "windows") u = TD(u);
        ((c.TMPDIR = u), (c.CLAUDE_CODE_TMPDIR = qE()), (c.TMPPREFIX = GGt.join(u, "zsh")));
      }
      return c;
    },
  };
}
var tMa, nMa, GGt;
