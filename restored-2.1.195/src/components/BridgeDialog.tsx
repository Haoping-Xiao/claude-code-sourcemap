// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Edr
// matched 2.1.88 source: src/components/BridgeDialog.tsx
// class=modified  jaccard=0.2332  score=0.4111  fileCov=0.3502
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Edr = E(() => {
  kt();
  Ye();
  er();
  dr();
  mE();
  vi();
  ((Lyc = R(lt(), 1)), (Dyc = R(rt(), 1)), (h7e = R(se(), 1)));
});
function $yc({ onDone: e }) {
  Wh("bridge-dialog");
  let t = Ht((L) => L.replBridgeConnected),
    n = Ht((L) => L.replBridgeSessionActive),
    r = Ht((L) => L.replBridgeReconnecting),
    o = Ht((L) => L.replBridgeConnectUrl),
    s = Ht((L) => L.replBridgeSessionUrl),
    i = Ht((L) => L.replBridgeError),
    a = Ht((L) => L.replBridgeExplicit),
    l = Ht((L) => L.replBridgeEnabled),
    c = Ht((L) => L.replBridgeEnvironmentId),
    u = Ht((L) => L.replBridgeSessionId),
    d = Ht((L) => L.verbose),
    p = Ho(),
    { removeNotification: f } = Li(),
    [m, g] = y7e.useState(false),
    [h, y] = y7e.useState(""),
    [b, _] = y7e.useState(""),
    S = Myc.basename(yr());
  y7e.useEffect(() => {
    ub()
      .then(_)
      .catch(() => {});
  }, []);
  let A = n ? s : o;
  (y7e.useEffect(() => {
    if (!m || !A) {
      y("");
      return;
    }
    Promise.resolve()
      .then(() => R(cAt(), 1))
      .then(({ toString: L }) =>
        L(A, {
          type: "utf8",
          errorCorrectionLevel: "L",
          small: true,
        }),
      )
      .then(y)
      .catch(() => y(""));
  }, [m, A]),
    No(
      {
        "confirm:yes": e,
        "confirm:toggle": () => {
          g((L) => !L);
        },
      },
      {
        context: "Confirmation",
      },
    ));
  function v(L) {
    if (L.key === "d" && !L.ctrl && !L.meta) {
      if ((L.preventDefault(), a && l)) yI("remoteControlAtStartup", false);
      (f(z5),
        p((M) => {
          if (!M.replBridgeEnabled && M.replBridgeError === void 0) return M;
          return {
            ...M,
            replBridgeEnabled: false,
            replBridgeError: void 0,
          };
        }),
        e());
    }
  }
  let { label: C, color: x } = w9n({
      error: i,
      connected: t,
      sessionActive: n,
      reconnecting: r,
    }),
    I = i ? Ffn : Ufn,
    k = h
      ? h
          .split(
            `
`,
          )
          .filter((L) => L.length > 0)
      : [],
    D = [];
  if (S) D.push(S);
  if (b) D.push(b);
  let P = D.length > 0 ? " \xB7 " + D.join(" \xB7 ") : "",
    O = i === rht ? void 0 : i ? EXa : A ? (n ? I9n(A) : C9n(A)) : void 0;
  return FP.jsx(zn, {
    title: "Remote Control",
    onCancel: e,
    hideInputGuide: true,
    children: FP.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: v,
      children: [
        FP.jsxs(U, {
          flexDirection: "column",
          children: [
            FP.jsxs(w, {
              children: [
                FP.jsxs(w, {
                  color: x,
                  children: [I, " ", C],
                }),
                FP.jsx(w, {
                  dimColor: true,
                  children: P,
                }),
              ],
            }),
            FP.jsx(Va, {
              error: i,
            }),
            d &&
              c &&
              FP.jsxs(w, {
                dimColor: true,
                children: ["Environment: ", c],
              }),
            d &&
              u &&
              FP.jsxs(w, {
                dimColor: true,
                children: ["Session: ", u],
              }),
          ],
        }),
        m &&
          k.length > 0 &&
          FP.jsx(U, {
            flexDirection: "column",
            children: k.map((L, M) =>
              FP.jsx(
                w,
                {
                  children: L,
                },
                M,
              ),
            ),
          }),
        O &&
          FP.jsx(w, {
            dimColor: true,
            children: O,
          }),
        FP.jsx(w, {
          dimColor: true,
          children: FP.jsxs(Tn, {
            children: [
              FP.jsx(ht, {
                chord: "d",
                action: i !== void 0 && !l ? "dismiss" : "disconnect",
              }),
              Boolean(A) &&
                FP.jsx(w, {
                  children: "space for QR code",
                }),
              FP.jsx(ht, {
                chord: ["enter", "escape"],
                action: "close",
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
var Myc, y7e, FP;
