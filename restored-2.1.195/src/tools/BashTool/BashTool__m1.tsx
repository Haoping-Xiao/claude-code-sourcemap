// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fCl
// matched 2.1.88 source: src/tools/BashTool/BashTool.tsx
// class=modified (alt of src/tools/BashTool/BashTool.tsx)  jaccard=0.0702  score=0.6685  fileCov=0.0727
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var fCl = E(() => {
  X6();
  Un();
  IKt();
  f6();
  wr();
  Oso();
  k0();
  Yf();
  AKt();
  lg();
  _m();
  Jt();
  bk();
  K$e();
  fh();
  u_();
  lf();
  nC();
  EI();
  lC();
  wX();
});
function _Hf(e) {
  let t = By(e);
  if (t.length === 0)
    return {
      isSearch: false,
      isRead: false,
      isList: false,
    };
  let n = false,
    r = false,
    o = false,
    s = false;
  for (let i of t) {
    let a = i.trim().split(/\s+/)[0];
    if (!a || hHf.has(a)) continue;
    s = true;
    let l = fHf.has(a),
      c = mHf.has(a),
      u = gHf.has(a);
    if (!l && !c && !u)
      return {
        isSearch: false,
        isRead: false,
        isList: false,
      };
    if (l) n = true;
    if (c) r = true;
    if (u) o = true;
  }
  if (!s)
    return {
      isSearch: false,
      isRead: false,
      isList: false,
    };
  return {
    isSearch: n,
    isRead: r,
    isList: o,
  };
}
function bHf(e) {
  let t = By(e);
  if (t.length === 0) return false;
  let n = false;
  for (let r of t) {
    let o = r.trim().split(/\s+/)[0];
    if (!o) continue;
    if (((n = true), !yHf.has(o))) return false;
  }
  return n;
}
function _Cl(e) {
  return {};
}
function RKt(e) {
  let t = By(e);
  if (t.length === 0) return We("other");
  for (let n of t) {
    let r = bi(n, " "),
      o = AHf.find((s) => s === r);
    if (o) return $e(o);
  }
  return We("other");
}
function THf(e) {
  let t = hL()?.parse(e);
  if (!t) return false;
  {
    let o = UWe(e, t);
    if (o.kind !== "simple") return false;
    if (o.commands.some((s) => Qqe(s.text))) return false;
  }
  let n = By(e);
  if (n.length === 0) return true;
  let r = n[0]?.trim().split(/\s+/)[0];
  if (!r) return true;
  return !SHf.includes(r);
}
function vHf(e) {
  let t = By(e);
  if (t.length === 0) return null;
  let n = t[0]?.trim() ?? "",
    r = /^sleep\s+(\d+(?:\.\d*)?)\s*$/.exec(n);
  if (!r) return null;
  let o = parseFloat(r[1]);
  if (o < Q8n) return null;
  let s = t.slice(1).join(" ").trim();
  return s ? `sleep ${o} followed by: ${s}` : `standalone sleep ${o}`;
}
async function wHf(e, t, n) {
  let { filePath: r, newContent: o } = e,
    s = ds(r),
    i = i_(s),
    a = qt(),
    l = Kpn(s),
    c;
  try {
    c = await a.readFile(s, {
      encoding: l,
    });
  } catch (d) {
    if (wn(d))
      return {
        data: {
          stdout: "",
          stderr: `sed: ${r}: No such file or directory
Exit code 1`,
          interrupted: false,
        },
      };
    throw d;
  }
  if (K_() && n) await eAe(t.getFileHistoryState, t.applyFileHistoryOp, s, n.uuid);
  let u = oAs(s);
  return (
    await iCe(s, async () => {
      sCe(s, i);
      let d = await aCe(s, o, l, u);
      t.readFileState.set(s, {
        content: o,
        timestamp: d,
        offset: void 0,
        limit: void 0,
      });
    }),
    ELe(s, c, o),
    {
      data: {
        stdout: "",
        stderr: "",
        interrupted: false,
      },
    }
  );
}
async function IHf(e, t, n) {
  if (!CHf.test(e)) return [];
  let r = [];
  return (
    await Promise.all(
      Array.from(t.entries(), ([o, s]) =>
        FFe(o)
          .then((i) => {
            if (i > n && i > s.timestamp) r.push(o);
          })
          .catch(() => {}),
      ),
    ),
    r
  );
}
function SCl(e) {
  if (e?.type === "rule") return true;
  if (e?.type === "subcommandResults")
    return [...e.reasons.values()].every((t) => SCl(t.decisionReason));
  return false;
}
async function* xHf({
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
  effortLevel: u,
}) {
  let { command: d, description: p, timeout: f, run_in_background: m } = e,
    g = Math.min(f || xKt(), oSt()),
    h = "",
    y = "",
    b = 0,
    _ = 0,
    S = void 0,
    A = null;
  function v() {
    return new Promise((M) => {
      A = () => M(null);
    });
  }
  let C = !kKt && THf(d),
    x = await Ede(d, t.signal, "bash", {
      timeout: g,
      onProgress(M, N, B, $, q) {
        ((y = M), (h = N), (b = B), (_ = q ? $ : 0));
        let W = A;
        if (W) ((A = null), W());
      },
      preventCwdChanges: s,
      shouldUseSandbox: N$(e),
      shouldAutoBackground: C,
      sessionEnvVars: c,
      effortLevel: u,
    }),
    I = x.result;
  async function k() {
    return (
      await E$e(
        {
          command: d,
          description: p || d,
          shellCommand: x,
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
  function D(M, N) {
    if (O) {
      if (!_Jn(O, x, p || d, n, a)) return;
      ((S = O),
        G(M, {
          command_type: RKt(d),
        }),
        N?.(O));
      return;
    }
    k().then((B) => {
      S = B;
      let $ = A;
      if ($) ((A = null), $());
      if (
        (G(M, {
          command_type: RKt(d),
        }),
        N)
      )
        N(B);
    });
  }
  if (x.onTimeout && C)
    x.onTimeout((M) => {
      D("tengu_bash_command_timeout_backgrounded", M);
    });
  if (m === true && !kKt) {
    let M = await k();
    return (
      G("tengu_bash_command_explicitly_backgrounded", {
        command_type: RKt(d),
      }),
      {
        stdout: "",
        stderr: "",
        code: 0,
        interrupted: false,
        backgroundTaskId: M,
      }
    );
  }
  let P = Date.now(),
    O = void 0;
  {
    let M = await Promise.race([
      I,
      new Promise((N) => {
        setTimeout(($) => $(null), gCl, N).unref();
      }),
    ]);
    if (M !== null) return (x.cleanup(), M);
    if (S)
      return {
        stdout: "",
        stderr: "",
        code: 0,
        interrupted: false,
        backgroundTaskId: S,
      };
  }
  Tb.startPolling(x.taskOutput.taskId);
  let L = null;
  try {
    while (true) {
      let M = v(),
        N = await Promise.race([I, M]);
      if (N !== null) {
        if (((L = N), N.backgroundTaskId !== void 0)) {
          if (bJn(N.backgroundTaskId, N, n))
            xf(N.backgroundTaskId, Vbt(N), {
              toolUseId: a,
              summary: p || d,
            });
          let q = {
              ...N,
              backgroundTaskId: void 0,
            },
            { taskOutput: W } = x;
          if (W.stdoutToFile && !W.outputFileRedundant)
            ((q.outputFilePath = W.path),
              (q.outputFileSize = W.outputFileSize),
              (q.outputTaskId = W.taskId));
          return q;
        }
        return N;
      }
      if (S)
        return {
          stdout: "",
          stderr: "",
          code: 0,
          interrupted: false,
          backgroundTaskId: S,
        };
      if (O) {
        if (x.status === "backgrounded")
          return {
            stdout: "",
            stderr: "",
            code: 0,
            interrupted: false,
            backgroundTaskId: O,
            backgroundedByUser: true,
          };
      }
      let B = Date.now() - P,
        $ = Math.floor(B / 1000);
      if (!kKt && S === void 0 && $ >= gCl / 1000) {
        if (!O)
          O = yJn(
            {
              command: d,
              description: p || d,
              shellCommand: x,
              agentId: l,
            },
            n,
            a,
          );
        if (
          (r?.({
            jsx: ECl.jsx(T$e, {}),
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
      yield {
        type: "progress",
        fullOutput: h,
        output: y,
        elapsedTimeSeconds: $,
        totalLines: b,
        totalBytes: _,
        taskId: x.taskOutput.taskId,
        ...(f
          ? {
              timeoutMs: g,
            }
          : void 0),
      };
    }
  } finally {
    if ((Tb.stopPolling(x.taskOutput.taskId), !S && x.status !== "backgrounded")) {
      if (O) SJn(O, L ? Vbt(L) : "stopped", n);
      x.cleanup();
    }
  }
}
var Y$e,
  bCl,
  ECl,
  mCl = `
`,
  pHf,
  gCl = 2000,
  fHf,
  mHf,
  gHf,
  hHf,
  yHf,
  SHf,
  kKt,
  EHf = "command contains control characters that would be hidden in the approval dialog",
  hCl,
  yCl,
  AHf,
  HHf,
  CHf,
  cl;
