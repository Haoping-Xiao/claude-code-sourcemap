// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mCo
// matched 2.1.88 source: src/cli/handlers/auth.ts
// class=modified (alt of src/cli/handlers/auth.ts)  jaccard=0.0237  score=0.0605  fileCov=0.0376
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: runPostLoginHooks, loginAutoContinueOptions, call, Login
// [unwrapped __esm module mCo] deps: Ed, uo, ft, __
A8t = R(rt(), 1);
var gsl = {};
async function runPostLoginHooks(e, t, n) {
  if (
    (e.onChangeAPIKey(),
    e.applyMessageOp({
      type: "update",
      updater: gCo,
    }),
    !t)
  )
    return {
      bridgeDisconnected: false,
      accountSwitched: false,
      relaunching: false,
    };
  if ((uJe(), fr() === "gateway")) {
    if (!(await SVe()) || hzn())
      return (
        Cu.get(process.stdout)?.unmount(),
        Promise.resolve()
          .then(() => (K9e(), z9e))
          .then((f) => f.execRelaunch())
          .catch((f) => ke(Zr(f))),
        {
          bridgeDisconnected: false,
          accountSwitched: false,
          relaunching: true,
        }
      );
    (bzn("gateway"), e3(), wRe.cache?.clear?.());
  } else SVe();
  (C8t(), nke(), ice());
  let r = n?.previousAccount,
    o = Lc(),
    s =
      r?.accountUuid !== void 0 &&
      r.accountUuid === o?.accountUuid &&
      r.organizationUuid === o?.organizationUuid,
    { replBridgeEnabled: i, replBridgeOutboundOnly: a, replBridgeError: l } = e.getAppState(),
    c = r?.accountUuid !== void 0 && !s,
    u = c && (i || l !== void 0),
    d = c && i && !a;
  if (u)
    (T("[bridge:repl] Account changed via /login \u2014 disconnecting Remote Control session"),
      e.setAppState((f) => ({
        ...f,
        replBridgeEnabled: false,
        replBridgeExplicit: false,
        replBridgeOutboundOnly: false,
        replBridgeError: void 0,
        notifications: iUt(f.notifications, z5),
      })));
  if (s && (await KDe()))
    T("[trusted-device] Same account+org re-login with existing token, skipping re-enrollment");
  else {
    rho();
    let f = _Wt();
    if (n?.awaitEnrollment) await f;
  }
  usl();
  let p = e.getAppState();
  return (
    H8t(Fr(e), e.setToolPermissionContext),
    fCo(),
    T8t(Fr(e), e.setAppState, p.fastMode),
    e.setAppState((f) => ({
      ...f,
      authVersion: f.authVersion + 1,
    })),
    {
      bridgeDisconnected: d,
      accountSwitched: c,
      relaunching: false,
    }
  );
}
function loginAutoContinueOptions(e, t) {
  if (t.accountSwitched || t.relaunching) return;
  let n = MI(e.messages);
  if (n?.isApiErrorMessage && n.error === "authentication_failed")
    return {
      display: "system",
      shouldQuery: true,
    };
  return;
}
async function call(e, t) {
  let n = process.env.CLAUDE_CODE_OAUTH_TOKEN
      ? "Warning: CLAUDE_CODE_OAUTH_TOKEN is set in your environment and will override this login token at runtime. After logging in, unset that variable for your new credentials to take effect."
      : void 0,
    r = Lc(),
    o = r && {
      accountUuid: r.accountUuid,
      organizationUuid: r.organizationUuid,
    };
  return n6e.jsx(Login, {
    startingMessage: n,
    onDone: async (s) => {
      let i = await runPostLoginHooks(t, s, {
        previousAccount: o,
      });
      e(
        s
          ? i.bridgeDisconnected
            ? `Login successful. ${Roe}`
            : "Login successful"
          : "Login interrupted",
        s ? loginAutoContinueOptions(t, i) : void 0,
      );
    },
  });
}
function Login(e) {
  let t = fsl.c(21),
    n = kH(),
    r = YE(),
    [o, s] = msl.useState(false),
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((i = () => s(true)), (t[0] = i));
  else i = t[0];
  let a = i,
    l;
  if (t[1] !== o || t[2] !== n || t[3] !== e)
    ((l = () => e.onDone(o, n)), (t[1] = o), (t[2] = n), (t[3] = e), (t[4] = l));
  else l = t[4];
  let c = l,
    u;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((u = {
      context: "Settings",
    }),
      (t[5] = u));
  else u = t[5];
  $r("confirm:no", c, u);
  let d = ig(),
    p;
  if (t[6] !== o || t[7] !== d.keyName || t[8] !== d.pending)
    ((p = d.pending
      ? n6e.jsxs(w, {
          children: ["Press ", d.keyName, " again to exit"],
        })
      : n6e.jsx(mr, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: o ? "continue" : "cancel",
        })),
      (t[6] = o),
      (t[7] = d.keyName),
      (t[8] = d.pending),
      (t[9] = p));
  else p = t[9];
  let f;
  if (t[10] !== n || t[11] !== e)
    ((f = () => e.onDone(true, n)), (t[10] = n), (t[11] = e), (t[12] = f));
  else f = t[12];
  let m = r ? FGe : mbe,
    g;
  if (t[13] !== e.startingMessage || t[14] !== f || t[15] !== m)
    ((g = n6e.jsx(Y9e, {
      onDone: f,
      onAuthSuccess: a,
      startingMessage: e.startingMessage,
      urlOutdent: m,
    })),
      (t[13] = e.startingMessage),
      (t[14] = f),
      (t[15] = m),
      (t[16] = g));
  else g = t[16];
  let h;
  if (t[17] !== c || t[18] !== p || t[19] !== g)
    ((h = n6e.jsx(zn, {
      title: "Login",
      onCancel: c,
      color: "permission",
      isCancelActive: false,
      inputGuide: p,
      children: g,
    })),
      (t[17] = c),
      (t[18] = p),
      (t[19] = g),
      (t[20] = h));
  else h = t[20];
  return h;
}
var fsl, msl, n6e;
