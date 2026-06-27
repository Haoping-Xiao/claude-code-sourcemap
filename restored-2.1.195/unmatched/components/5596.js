// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eTc
// matched 2.1.88 source: src/components/Feedback.tsx
// class=new  jaccard=0.0213  score=0.1437  fileCov=0.0243
// note: nearest: src/components/Feedback.tsx (0.0213); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eTc = E(() => {
  ft();
  Ko();
  AMe();
  X0();
  dtn();
  Ye();
  Du();
  KHc();
  Uoe();
  y3();
  Jt();
  nKo();
  YHc = R(lt(), 1), XHc = R(rt(), 1), rKo = R(rt(), 1), xA = R(se(), 1), JHc = "Dynamic workflows can use a lot of tokens quickly by running many " + "subagents in parallel \u2014 which counts against your usage limit. Stop a " + "running workflow at any time with /workflows, or disable dynamic workflows in /config.", q_m = {
    loop: "loop",
    parallel: "parallel",
    sequential: "step"
  };
});
function dbm(e) {
  let t = oTc.c(3),
    {
      answer: n
    } = e,
    {
      addNotification: r
    } = Li(),
    o;
  if (t[0] !== r || t[1] !== n) o = VP.jsx(PJt, {
    variant: "mid-session",
    onDone: (s, i) => {
      if (i !== void 0) r({
        kind: "feedback",
        key: "fable-consent-result",
        text: i,
        priority: "high"
      });
      n(s === "consent" ? "consent" : s === "switch" ? "switch_default" : "cancelled");
    }
  }), t[0] = r, t[1] = n, t[2] = o;else o = t[2];
  return o;
}
function aTc() {
  return sTc.useSyncExternalStore(w3.subscribe, rTc, rTc);
}
function rTc() {
  let e = w3.getState().open.at(-1);
  return e ? iKo[e.kind] ?? "inline" : void 0;
}
var oTc,
  sTc,
  VP,
  tTc = null,
  Ipr = null,
  nTc,
  xpr,
  J_m = ({
    payload: e,
    answer: t
  }) => VP.jsx(PAc, {
    tmuxAvailable: e.tmuxAvailable,
    onDone: t
  }),
  Q_m = ({
    payload: e,
    answer: t
  }) => VP.jsx(LAc, {
    request: e,
    onDone: t
  }),
  Z_m = ({
    payload: e,
    answer: t
  }) => {
    let n = {
      serverName: e.serverName,
      requestId: `dialog-${e.params.elicitationId}`,
      params: e.params,
      signal: new AbortController().signal,
      waitingState: {
        actionLabel: "Retry now",
        showCancel: true
      },
      respond: () => {}
    };
    return VP.jsx(Bur, {
      event: n,
      onResponse: (r, o) => {
        if (r === "accept" && e.params.mode === "url") return;
        t({
          action: r,
          content: o
        });
      },
      onWaitingDismiss: r => {
        t({
          action: r === "retry" ? "accept" : "cancel"
        });
      }
    });
  },
  ebm = ({
    payload: e,
    answer: t
  }) => VP.jsx(IHc, {
    payload: e,
    answer: t
  }),
  tbm = ({
    payload: e,
    answer: t
  }) => VP.jsx(GHc, {
    payload: e,
    answer: t
  }),
  nbm = ({
    payload: e,
    answer: t
  }) => VP.jsx(UHc, {
    payload: e,
    answer: t
  }),
  rbm = ({
    payload: e,
    answer: t
  }) => VP.jsx(PHc, {
    payload: e,
    answer: t
  }),
  obm = ({
    payload: e,
    answer: t
  }) => VP.jsx(EHc, {
    payload: e,
    answer: t
  }),
  sbm = ({
    payload: e,
    answer: t
  }) => VP.jsx(YAc, {
    payload: e,
    answer: t
  }),
  ibm = ({
    payload: e,
    answer: t
  }) => VP.jsx(mHc, {
    payload: e,
    answer: t
  }),
  abm = ({
    payload: e,
    answer: t
  }) => VP.jsx(xEc, {
    payload: e,
    answer: t
  }),
  lbm = ({
    payload: e,
    answer: t
  }) => VP.jsx(vHc, {
    payload: e,
    answer: t
  }),
  cbm = ({
    payload: e,
    answer: t
  }) => VP.jsx(lHc, {
    payload: e,
    answer: t
  }),
  ubm = ({
    payload: e,
    answer: t
  }) => VP.jsx(OHc, {
    payload: e,
    answer: t
  }),
  pbm = ({
    payload: e,
    answer: t
  }) => VP.jsx(dHc, {
    payload: e,
    answer: t
  }),
  oKo = null,
  sKo = null,
  iKo,
  jme = "Claude needs your permission",
  iTc,
  lTc;