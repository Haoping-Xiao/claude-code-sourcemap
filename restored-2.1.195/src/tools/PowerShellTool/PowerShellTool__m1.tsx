// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DTl
// matched 2.1.88 source: src/tools/PowerShellTool/PowerShellTool.tsx
// class=modified (alt of src/tools/PowerShellTool/PowerShellTool.tsx)  jaccard=0.141  score=0.4003  fileCov=0.1787
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: isAutobackgroundingAllowed, detectBlockedSleepPattern, PowerShellTool
// [unwrapped __esm module DTl] deps: Ko, E5, ql, kLe, cjn, ljn, Ye
$k = R(se(), 1);
function ASf(e) {
  let t = e.trim();
  if (!t)
    return {
      isSearch: false,
      isRead: false,
    };
  let n = t.split(/\s*[;|]\s*/).filter(Boolean);
  if (n.length === 0)
    return {
      isSearch: false,
      isRead: false,
    };
  let r = false,
    o = false,
    s = false;
  for (let i of n) {
    let a = i.trim().split(/\s+/)[0];
    if (!a) continue;
    let l = zm(a);
    if (ESf.has(l)) continue;
    s = true;
    let c = bSf.has(l),
      u = SSf.has(l);
    if (!c && !u)
      return {
        isSearch: false,
        isRead: false,
      };
    if (c) r = true;
    if (u) o = true;
  }
  if (!s)
    return {
      isSearch: false,
      isRead: false,
    };
  return {
    isSearch: r,
    isRead: o,
  };
}
async function isAutobackgroundingAllowed(e) {
  if (await ATl(e)) return false;
  let t = e.trim().split(/\s+/)[0];
  if (!t) return true;
  let n = zm(t);
  return !TSf.includes(n);
}
function detectBlockedSleepPattern(e) {
  let t =
      e
        .trim()
        .split(/[;|&\r\n]/)[0]
        ?.trim() ?? "",
    n = /^(?:start-sleep|sleep)(?:\s+-s(?:econds)?)?\s+(\d+(?:\.\d*)?)\s*$/i.exec(t);
  if (!n) return null;
  let r = parseFloat(n[1]);
  if (r < Q8n) return null;
  let o = e
    .trim()
    .slice(t.length)
    .replace(/^[\s;|&]+/, "");
  return o ? `Start-Sleep ${r} followed by: ${o}` : `standalone Start-Sleep ${r}`;
}
function OTl() {
  return (
    Vt() === "windows" &&
    xo.isSandboxEnabledInSettings() &&
    xo.isPlatformInEnabledList() &&
    !xo.areUnsandboxedCommandsAllowed()
  );
}
async function* xSf({
  input: e,
  abortController: t,
  taskRegistry: n,
  setToolJSX: r,
  emitToolProgress: o,
  preventCwdChanges: s,
  isMainThread: i,
  toolUseId: a,
  agentId: l,
  sessionEnvVars: c,
}) {
  let {
      command: u,
      description: d,
      timeout: p,
      run_in_background: f,
      dangerouslyDisableSandbox: m,
    } = e,
    g = Math.min(p || hJn(), dKt()),
    h = "",
    y = "",
    b = 0,
    _ = 0,
    S = void 0,
    A = false,
    v = null;
  function C() {
    return new Promise(($) => {
      v = () => $(null);
    });
  }
  let x = !pKt && (await isAutobackgroundingAllowed(u));
  if (!(await d6()))
    return {
      stdout: "",
      stderr: "PowerShell is not available on this system.",
      code: 0,
      interrupted: false,
    };
  let k;
  try {
    k = await Ede(u, t.signal, "powershell", {
      timeout: g,
      onProgress($, q, W, V, Y) {
        ((y = $), (h = q), (b = W), (_ = Y ? V : 0));
      },
      preventCwdChanges: s,
      shouldUseSandbox:
        Vt() === "windows"
          ? false
          : N$({
              command: u,
              dangerouslyDisableSandbox: m,
            }),
      shouldAutoBackground: x,
      sessionEnvVars: c,
    });
  } catch ($) {
    if (lh($))
      return {
        stdout: "",
        stderr: "Command aborted before execution",
        code: 145,
        interrupted: true,
      };
    if (gd($))
      return (
        T(`PowerShellTool: exec spawn failed: ${$}`),
        {
          stdout: "",
          stderr: `Failed to execute PowerShell command: ${be($)}`,
          code: 0,
          interrupted: false,
        }
      );
    return (
      ke($),
      {
        stdout: "",
        stderr: `Failed to execute PowerShell command: ${be($)}`,
        code: 0,
        interrupted: false,
      }
    );
  }
  let D = k.result;
  async function P() {
    return (
      await E$e(
        {
          command: u,
          description: d || u,
          shellCommand: k,
          toolUseId: a,
          agentId: l,
        },
        {
          abortController: t,
          taskRegistry: n,
        },
      )
    ).taskId;
  }
  function O($, q) {
    if (N) {
      if (!_Jn(N, k, d || u, n, a)) return;
      ((S = N),
        G($, {
          command_type: $e(Fbt(u)),
        }),
        q?.(N));
      return;
    }
    P().then((W) => {
      S = W;
      let V = v;
      if (V) ((v = null), V());
      if (
        (G($, {
          command_type: $e(Fbt(u)),
        }),
        q)
      )
        q(W);
    });
  }
  if (k.onTimeout && x)
    k.onTimeout(($) => {
      O("tengu_powershell_command_timeout_backgrounded", $);
    });
  if (f === true && !pKt) {
    let $ = await P();
    return (
      G("tengu_powershell_command_explicitly_backgrounded", {
        command_type: $e(Fbt(u)),
      }),
      {
        stdout: "",
        stderr: "",
        code: 0,
        interrupted: false,
        backgroundTaskId: $,
      }
    );
  }
  Tb.startPolling(k.taskOutput.taskId);
  let L = Date.now(),
    M = L + MTl,
    N = void 0,
    B = null;
  try {
    while (true) {
      let $ = Date.now(),
        q = Math.max(0, M - $),
        W = C(),
        V = await Promise.race([
          D,
          new Promise((K) => setTimeout((Z) => Z(null), q, K).unref()),
          W,
        ]);
      if (V !== null) {
        if (((B = V), V.backgroundTaskId !== void 0)) {
          if (bJn(V.backgroundTaskId, V, n))
            xf(V.backgroundTaskId, Vbt(V), {
              toolUseId: a,
              summary: d || u,
            });
          let K = {
              ...V,
              backgroundTaskId: void 0,
            },
            { taskOutput: Z } = k;
          if (Z.stdoutToFile && !Z.outputFileRedundant)
            ((K.outputFilePath = Z.path),
              (K.outputFileSize = Z.outputFileSize),
              (K.outputTaskId = Z.taskId));
          return K;
        }
        return V;
      }
      if (S)
        return {
          stdout: A ? h : "",
          stderr: "",
          code: 0,
          interrupted: false,
          backgroundTaskId: S,
        };
      if (t.signal.aborted && h_(t.signal.reason) === "interrupt" && !A) {
        if (((A = true), x)) {
          O("tengu_powershell_command_interrupt_backgrounded");
          continue;
        }
        k.kill();
      }
      if (N) {
        if (k.status === "backgrounded")
          return {
            stdout: "",
            stderr: "",
            code: 0,
            interrupted: false,
            backgroundTaskId: N,
            backgroundedByUser: true,
          };
      }
      let Y = Date.now() - L,
        z = Math.floor(Y / 1000);
      if (!pKt && S === void 0 && z >= MTl / 1000) {
        if (!N)
          N = yJn(
            {
              command: u,
              description: d || u,
              shellCommand: k,
              agentId: l,
            },
            n,
            a,
          );
        if (
          (r?.({
            jsx: FTl.jsx(T$e, {}),
            shouldHidePromptInput: false,
            shouldContinueAnimation: true,
            showSpinner: true,
          }),
          a)
        )
          o?.({
            kind: "background_hint",
            toolUseId: a,
          });
      }
      (yield {
        type: "progress",
        fullOutput: h,
        output: y,
        elapsedTimeSeconds: z,
        totalLines: b,
        totalBytes: _,
        taskId: k.taskOutput.taskId,
        ...(p
          ? {
              timeoutMs: g,
            }
          : void 0),
      },
        (M = Date.now() + HSf));
    }
  } finally {
    if ((Tb.stopPolling(k.taskOutput.taskId), !S && k.status !== "backgrounded")) {
      if (N) SJn(N, B ? Vbt(B) : "stopped", n);
      k.cleanup();
    }
  }
}
var W$e,
  FTl,
  PTl = `
`,
  bSf,
  SSf,
  ESf,
  MTl = 2000,
  HSf = 1000,
  TSf,
  $Tl =
    "Enterprise policy requires sandboxing, but sandboxing is not available on native Windows. Shell command execution is blocked on this platform by policy.",
  pKt,
  vSf = "command contains control characters that would be hidden in the approval dialog",
  NTl,
  wSf,
  CSf,
  PowerShellTool;
