// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ejn
// matched 2.1.88 source: src/utils/Shell.ts
// class=modified  jaccard=0.3207  score=0.5394  fileCov=0.4416
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ejn] deps: fn, kv, bUt
((sMa = require("fs/promises")), (iMa = require("path")), (aMa = require("path/posix")));
async function zmo(e) {
  try {
    return (fMa.accessSync(e, m6.constants.X_OK), true);
  } catch (t) {
    let { code: n } = await $n(e, ["--version"], {
      timeout: 1000,
      useCwd: false,
    });
    return n === 0;
  }
}
async function sRp() {
  let e = process.env.CLAUDE_CODE_SHELL;
  if (e)
    if ((e.includes("bash") || e.includes("zsh")) && (await zmo(e)))
      return (T(`Using shell override: ${e}`), e);
    else T(`CLAUDE_CODE_SHELL="${e}" is not a valid bash/zsh path, falling back to detection`);
  let t = process.env.SHELL,
    n = t && (t.includes("bash") || t.includes("zsh")),
    r = t?.includes("bash"),
    [o, s] = await Promise.all([Gf("zsh"), Gf("bash")]),
    i = ["/bin", "/usr/bin", "/usr/local/bin", "/opt/homebrew/bin"],
    l = (r ? ["bash", "zsh"] : ["zsh", "bash"]).flatMap((u) => i.map((d) => `${d}/${u}`));
  if (r) {
    if (s) l.unshift(s);
    if (o) l.push(o);
  } else {
    if (o) l.unshift(o);
    if (s) l.push(s);
  }
  if (n && (await zmo(t))) l.unshift(t);
  let c;
  for (let u of l)
    if (u && (await zmo(u))) {
      c = u;
      break;
    }
  if (!c) {
    let u =
      "No suitable shell found. Claude CLI requires a Posix shell environment. Please ensure you have a valid shell installed and the SHELL environment variable set.";
    throw (
      T(u, {
        level: "error",
      }),
      Error(u)
    );
  }
  return c;
}
async function iRp() {
  let e = await sRp();
  return {
    provider: await rMa(e),
  };
}
async function Ymo() {
  try {
    let { provider: e } = await Kmo();
    return npn(e.shellPath);
  } catch {
    return "none";
  }
}
function mMa() {
  Kmo.cache?.clear?.();
}
async function Ede(e, t, n, r) {
  let {
      timeout: o,
      onProgress: s,
      preventCwdChanges: i,
      shouldUseSandbox: a,
      shouldAutoBackground: l,
      onStdout: c,
      sessionEnvVars: u,
      effortLevel: d,
    } = r ?? {},
    p = o || oRp,
    f = await lRp[n](),
    m = Math.floor(Math.random() * 65536)
      .toString(16)
      .padStart(4, "0"),
    g = a && OWe() !== "relaxed" ? Xst() : void 0;
  if (g !== void 0 && !uMa) {
    let N = qE();
    if (g !== N)
      ((uMa = true),
        T(
          `CLAUDE_CODE_TMPDIR makes the per-uid temp dir ${Buffer.byteLength(N)} bytes, too long for AF_UNIX sockets; child-process $TMPDIR falls back to ${g}. ` +
            "Shorten CLAUDE_CODE_TMPDIR to \u2264~30 bytes if child processes should use your override.",
          {
            level: "warn",
          },
        ));
  }
  let { commandString: h, cwdFilePath: y } = await f.buildExecCommand(e, {
      id: m,
      sandboxTmpDir: g,
      useSandbox: a ?? false,
    }),
    b = h,
    _ = Rpn(),
    S = false;
  try {
    await qqe.realpath(_);
  } catch (N) {
    S = wn(N);
  }
  if (S) {
    let N = [yr(), pMa.homedir(), vU()],
      B = null,
      $ = -1;
    for (let [q, W] of N.entries())
      try {
        ((B = await qqe.realpath(W)), ($ = q));
        break;
      } catch {}
    if (B === null)
      return tjn(
        `Working directory "${_}" no longer exists. Please restart Claude from an existing directory.`,
      );
    if ((T(`Shell CWD "${_}" no longer exists, recovering to "${B}"`), qkr(B), $ > 0))
      return tjn(
        `Working directory "${_}" was deleted; shell cwd recovered to "${B}". Re-issue your command (it will run from the recovered directory).`,
      );
    _ = B;
  }
  if (t.aborted) return gMa();
  let A = f.shellPath,
    v = a && n === "powershell",
    C = v ? "/bin/sh" : A;
  if (bI()) {
    let N = await mct(e);
    RKr(
      N.kind === "simple"
        ? N.commands.map((B) => B.text).join(`
`)
        : e,
    );
  }
  if (a) {
    let N;
    if (bI() && fce()) {
      let B = DKr(),
        $ = B.filesystem.denyWrite,
        q = B.filesystem.allowWrite,
        W = xo.getFsWriteConfig(),
        V = xo.getConfig()?.filesystem,
        Y = V?.allowWrite ?? [],
        z = Uo([...q, ...Y.filter((Z) => Z !== "/" && Z.length > 0)]),
        K = W.denyWithinAllow.filter(
          (Z) =>
            z.some((J) => Z === J || Z.startsWith(`${J}/`)) &&
            !$.some((J) => Z === J || Z.startsWith(`${J}/`)),
        );
      N = {
        ...B,
        filesystem: {
          allowWrite: z,
          denyWrite: Uo([...$, ...K]),
          denyRead: Uo([...B.filesystem.denyRead, ...(V?.denyRead ?? [])]),
        },
      };
    }
    if (g && !process.env.CLAUDE_TMPDIR) process.env.CLAUDE_TMPDIR = g;
    b = await xo.wrapWithSandbox(b, C, N, t);
  }
  let x = v ? "/bin/sh" : A,
    I = v ? ["-c", b] : f.getSpawnArgs(b),
    k = await f.getEnvironmentOverrides(e, u),
    D = !!c,
    P = iN("local_bash"),
    O = new Tb(P, s ?? null, !D);
  await qqe.mkdir(jpt(), {
    recursive: true,
  });
  let L, M;
  if (!D) {
    let N = m6.constants.O_NOFOLLOW ?? 0;
    L = await qqe.open(
      O.path,
      m6.constants.O_WRONLY | m6.constants.O_CREAT | m6.constants.O_APPEND | N,
    );
  }
  try {
    M = a ? await Mna() : void 0;
    let N = dMa.spawn(x, I, {
        env: {
          ...DM(),
          SHELL: n === "bash" ? A : void 0,
          GIT_EDITOR: "true",
          ...k,
          ...Upt({
            sessionId: Rt(),
            effortLevel: d,
            source: "agent",
          }),
        },
        cwd: _,
        stdio: cRp(D, L?.fd, M),
        detached: f.detached,
        windowsHide: true,
      }),
      B = rjn(N, t, p, O, l),
      $ = B3t("claude_code.bash.subprocess", {
        spanType: "bash.subprocess",
        attrs: {
          "shell.type": n,
          command_length: e.length,
          timeout_ms: p,
          command: iP(e).content,
        },
      });
    if ($) {
      let W = GPa(e).catch(() => []);
      B.result
        .then(async (V) => {
          let Y = await W;
          if (Y.length > 0)
            O3t($, {
              command_prefix: Y.map((z) => iP(z).content),
            });
          if (
            (O3t($, {
              exit_code: V.code,
              stdout_bytes: V.outputFileSize ?? Buffer.byteLength(V.stdout),
              stderr_bytes: Buffer.byteLength(V.stderr),
              interrupted: V.interrupted,
              ...(V.backgroundTaskId && {
                backgrounded: true,
              }),
            }),
            V.interrupted)
          )
            Sqe($, `interrupted (exit ${V.code})`);
        })
        .catch((V) => {
          Sqe($, be(V));
        })
        .finally(() => $.end())
        .catch(() => {});
    }
    if (L !== void 0)
      try {
        await L.close();
      } catch {}
    if (M !== void 0)
      try {
        m6.closeSync(M);
      } catch {}
    if (N.stdout && c)
      N.stdout.on("data", (W) => {
        c(typeof W === "string" ? W : W.toString());
      });
    let q = Vt() === "windows" ? NFe(y) : y;
    return (
      B.result.then(async (W) => {
        if (a) xo.cleanupAfterCommand();
        if (W && !i && !W.backgroundTaskId)
          try {
            let V = m6
              .readFileSync(q, {
                encoding: "utf8",
              })
              .trim();
            if (Vt() === "windows") V = NFe(V);
            if (o_(V) !== _) {
              if ((Uy(V, _), !MFe())) (Eut(), _ca(_, V));
            }
          } catch {
            G("tengu_shell_set_cwd", {
              success: false,
            });
          }
        try {
          m6.unlinkSync(q);
        } catch {}
      }),
      B
    );
  } catch (N) {
    if (L !== void 0)
      try {
        await L.close();
      } catch {}
    if (M !== void 0)
      try {
        m6.closeSync(M);
      } catch {}
    return (O.clear(), T(`Shell exec error: ${be(N)}`), tjn(be(N)));
  }
}
function Uy(e, t) {
  let n = njn.isAbsolute(e) ? e : njn.resolve(t || qt().cwd(), e),
    r;
  try {
    r = qt().realpathSync(n);
  } catch (o) {
    if (wn(o)) throw Error(`Path "${n}" does not exist`);
    r = n;
  }
  qkr(r);
  try {
    G("tengu_shell_set_cwd", {
      success: true,
    });
  } catch (o) {}
}
function Xmo(e, t) {
  Iro(e, t);
}
function cRp(e, t, n) {
  let r = e ? ["pipe", "pipe", "pipe"] : ["pipe", t, t];
  if (n !== void 0) r[Aro] = n;
  return r;
}
var dMa,
  m6,
  qqe,
  pMa,
  njn,
  fMa,
  oRp = 1800000,
  uMa = false,
  Kmo,
  aRp,
  lRp;
