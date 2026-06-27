// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Q$o
// matched 2.1.88 source: src/commands/btw/btw.tsx
// class=modified  jaccard=0.1357  score=0.2038  fileCov=0.289
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Q$o = E(() => {
  ft();
  ag();
  kt();
  At();
  vn();
  y_();
  _a();
  Jt();
  sr();
  ((QLl = require("crypto")),
    (X$o = require("events")),
    (xer = require("fs")),
    (ker = require("fs/promises")),
    (ZLl = require("readline")),
    (eDl = require("stream/promises")));
});
var aDl = {};
_t(aDl, {
  call: () => call,
});
function fkf({ question: e, context: t, onDone: n }) {
  let [r, o] = UN.useState(null),
    [s, i] = UN.useState(!1),
    [a, l] = UN.useState(null),
    [c, u] = UN.useState(null),
    [d, p] = UN.useState(0),
    [f, m] = UN.useState(() => V$o()),
    g = UN.useRef(f),
    h = UN.useRef(!1),
    [y, b] = UN.useState(!1),
    _ = UN.useRef(null),
    [S, A] = UN.useState(null),
    v = UN.useRef(null),
    C = () => {
      ((_.current = null), A(null), v.current?.scrollTo(0));
    },
    [x, I] = UN.useState(0),
    { rows: k, columns: D } = bb(br()),
    P = Ju();
  (Gc(() => p((W) => W + 1), r || a ? null : 80), Pd(() => I(0), x ? 2000 : null, [x]));
  function O(W) {
    if (h.current) {
      W.preventDefault();
      return;
    }
    let V = _.current !== null ? g.current[_.current]?.response : r;
    if (
      W.key === "escape" ||
      W.key === "return" ||
      W.key === " " ||
      (W.ctrl && (W.key === "c" || W.key === "d"))
    ) {
      (W.preventDefault(),
        n(void 0, {
          display: "skip",
        }));
      return;
    }
    if (W.key === "left" || W.key === "right") {
      W.preventDefault();
      let Y = g.current.length;
      if (Y === 0) return;
      let z = Math.max(0, Y - sDl),
        K = _.current ?? Y,
        Z = Math.max(z, Math.min(Y, K + (W.key === "left" ? -1 : 1)));
      if (Z === K) return;
      ((_.current = Z === Y ? null : Z), A(_.current), v.current?.scrollTo(0));
      return;
    }
    if (W.key === "x" && g.current.length > 0) {
      (W.preventDefault(),
        z$o(
          r && !s
            ? [
                {
                  question: e,
                  response: r,
                },
              ]
            : [],
        ),
        (g.current = []),
        m([]),
        C());
      return;
    }
    if (W.key === "c" && !W.ctrl && !W.meta && V) {
      (W.preventDefault(),
        AI(V).then((Y) => {
          if (Y) process.stdout.write(Y);
        }),
        I((Y) => Y + 1));
      return;
    }
    if (W.key === "f" && r && !s && !P && _.current === null) {
      (W.preventDefault(), (h.current = !0), b(!0));
      let Y = [
          Rn({
            content: e,
          }),
          dE({
            content: r,
          }),
        ],
        z = () => {
          ((h.current = !1), b(!1));
        };
      if (!Gv())
        Promise.all([
          Promise.resolve().then(() => (Y$o(), JLl)),
          Promise.resolve().then(() => (Gy(), cDl)),
        ])
          .then(([{ spawnForkFromDirective: K }, { hasPermissionsToUseTool: Z }]) =>
            K(e, t, t.canUseTool ?? Z, Y),
          )
          .then((K) => {
            if (K)
              n(`${Cet} forked ${K.name} (${K.agentId.slice(-4)})`, {
                display: "system",
              });
            else
              (z(),
                n("Cannot fork before the first conversation turn", {
                  display: "system",
                }));
          })
          .catch((K) => {
            (z(), n(`Failed to fork: ${be(K)}`));
          });
      else
        Promise.resolve()
          .then(() => (Q$o(), J$o))
          .then(({ branchAndResume: K }) =>
            K(t, n, {
              customTitle: Z$o(`btw: ${e}`, 80),
              extraMessages: Y,
            }).then((Z) => {
              if (!Z) z();
            }),
          )
          .catch((K) => {
            (z(), n(`Failed to branch conversation: ${be(K)}`));
          });
      return;
    }
    if (W.key === "up" || (W.ctrl && W.key === "p"))
      (W.preventDefault(), v.current?.scrollBy(-oDl));
    if (W.key === "down" || (W.ctrl && W.key === "n"))
      (W.preventDefault(), v.current?.scrollBy(oDl));
  }
  UN.useEffect(() => {
    let W = Sl();
    async function V() {
      let Y = Ju();
      if (Y && !NA()) {
        l(
          Y.viewerOnly
            ? "Side questions aren't available when viewing a session read-only"
            : "This remote connection doesn't support side questions",
        );
        return;
      }
      try {
        let z = Y
          ? await Y.sendControlRequest({
              subtype: "side_question",
              question: e,
            })
          : await qYt({
              question: e,
              cacheSafeParams: await ykf(t),
              parentController: W,
              onRetry: (K) => {
                if (W.signal.aborted) return;
                u({
                  ...K,
                  retryAt: Date.now() + K.retryInMs,
                });
              },
            });
        if (!W.signal.aborted)
          if (z.response) {
            if (
              ((_.current = null),
              A(null),
              v.current?.scrollTo(0),
              o(z.response),
              i(z.synthetic ?? !1),
              Y && !z.synthetic)
            )
              Ier(e, z.response);
          } else ((_.current = null), A(null), v.current?.scrollTo(0), l("No response received"));
      } catch (z) {
        if (!W.signal.aborted)
          ((_.current = null),
            A(null),
            v.current?.scrollTo(0),
            l(be(z) || "Failed to get response"));
      }
    }
    return (
      V(),
      () => {
        W.abort();
      }
    );
  }, [e, t]);
  let L = f.slice(-sDl),
    M = f.length - L.length,
    N = S !== null ? f[S] : null,
    B = L.length + (M > 0 ? 1 : 0),
    $ = Math.max(20, D - 7),
    q = Math.max(5, k - dkf - pkf - B);
  return H_.jsxs(U, {
    flexDirection: "column",
    paddingLeft: 2,
    marginTop: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: O,
    children: [
      M > 0 &&
        H_.jsxs(w, {
          dimColor: !0,
          children: ["(+", M, " earlier /btw)"],
        }),
      L.map((W, V) => {
        let Y = M + V;
        return H_.jsxs(
          w,
          {
            dimColor: S !== Y,
            bold: S === Y,
            children: ["/btw ", Z$o(W.question, $)],
          },
          Y,
        );
      }),
      H_.jsxs(w, {
        children: [
          H_.jsxs(w, {
            color: N ? void 0 : "warning",
            bold: !N,
            dimColor: !!N,
            children: ["/btw", " "],
          }),
          H_.jsx(w, {
            dimColor: !0,
            children: Z$o(e, $),
          }),
        ],
      }),
      H_.jsx(U, {
        marginTop: 1,
        marginLeft: 2,
        maxHeight: q,
        children: H_.jsx(Rq, {
          ref: v,
          flexDirection: "column",
          flexGrow: 1,
          stickyScroll: !1,
          children: N
            ? H_.jsx(zg, {
                children: N.response,
              })
            : a
              ? H_.jsx(Va, {
                  error: a,
                })
              : r
                ? H_.jsx(zg, {
                    children: r,
                  })
                : H_.jsx(mkf, {
                    frame: d,
                    retry: c,
                  }),
        }),
      }),
      H_.jsx(U, {
        marginTop: 1,
        children: y
          ? H_.jsx(w, {
              dimColor: !0,
              children: "Forking\u2026",
            })
          : H_.jsx(w, {
              dimColor: !0,
              children: H_.jsxs(Tn, {
                children: [
                  f.length > 0
                    ? H_.jsx(ht, {
                        chord: ["left", "right"],
                        action: "switch",
                      })
                    : (N || r || a) &&
                      H_.jsx(ht, {
                        chord: ["up", "down"],
                        action: "scroll",
                      }),
                  (N || r) &&
                    (x > 0
                      ? H_.jsx(w, {
                          color: "success",
                          children: "Copied to clipboard",
                        })
                      : H_.jsx(ht, {
                          chord: "c",
                          action: "copy",
                        })),
                  r &&
                    !s &&
                    !P &&
                    S === null &&
                    H_.jsx(ht, {
                      chord: "f",
                      action: "fork",
                    }),
                  f.length > 0 &&
                    H_.jsx(ht, {
                      chord: "x",
                      action: "clear history",
                    }),
                  H_.jsx(ht, {
                    chord: "escape",
                    action: "close",
                  }),
                ],
              }),
            }),
      }),
    ],
  });
}
function Z$o(e, t) {
  return Rs(e.replace(/\s+/g, " ").trim(), t);
}
function mkf(e) {
  let t = iDl.c(19),
    { frame: n, retry: r } = e;
  if (!r) {
    let u;
    if (t[0] !== n)
      ((u = H_.jsx(eMe, {
        frame: n,
        messageColor: "warning",
      })),
        (t[0] = n),
        (t[1] = u));
    else u = t[1];
    let d;
    if (t[2] === Symbol.for("react.memo_cache_sentinel"))
      ((d = H_.jsx(w, {
        color: "warning",
        children: "Answering\u2026",
      })),
        (t[2] = d));
    else d = t[2];
    let p;
    if (t[3] !== u)
      ((p = H_.jsxs(U, {
        children: [u, d],
      })),
        (t[3] = u),
        (t[4] = p));
    else p = t[4];
    return p;
  }
  let o = Math.max(0, Math.ceil((r.retryAt - Date.now()) / 1000)),
    s;
  if (t[5] !== n)
    ((s = H_.jsx(eMe, {
      frame: n,
      messageColor: "warning",
    })),
      (t[5] = n),
      (t[6] = s));
  else s = t[6];
  let i;
  if (t[7] !== r.status) ((i = gkf(r.status)), (t[7] = r.status), (t[8] = i));
  else i = t[8];
  let a;
  if (t[9] !== i)
    ((a = H_.jsx(w, {
      color: "warning",
      children: i,
    })),
      (t[9] = i),
      (t[10] = a));
  else a = t[10];
  let l;
  if (t[11] !== o || t[12] !== r.maxRetries || t[13] !== r.retryAttempt)
    ((l = H_.jsxs(w, {
      dimColor: !0,
      children: [" \xB7 retrying in ", o, "s \xB7 attempt ", r.retryAttempt, "/", r.maxRetries],
    })),
      (t[11] = o),
      (t[12] = r.maxRetries),
      (t[13] = r.retryAttempt),
      (t[14] = l));
  else l = t[14];
  let c;
  if (t[15] !== s || t[16] !== a || t[17] !== l)
    ((c = H_.jsxs(U, {
      children: [s, a, l],
    })),
      (t[15] = s),
      (t[16] = a),
      (t[17] = l),
      (t[18] = c));
  else c = t[18];
  return c;
}
function gkf(e) {
  switch (e) {
    case 429:
      return "Rate limited";
    case 529:
      return "API overloaded";
    case 401:
    case 403:
      return "Authentication failed";
    default:
      return "API error";
  }
}
function hkf(e) {
  let t = e.at(-1);
  if (t?.type === "assistant" && t.message.stop_reason === null) return e.slice(0, -1);
  return e;
}
async function ykf(e) {
  let t = Py(hkf(e.messages)),
    n = Tde();
  if (n)
    return {
      systemPrompt: n.systemPrompt,
      userContext: n.userContext,
      systemContext: n.systemContext,
      toolUseContext: e,
      forkContextMessages: t,
    };
  let [r, o, s] = await Promise.all([
    DL(e.options.tools, e.options.mainLoopModel, []),
    uS(),
    hH(e.options.cacheBreakerPhrase),
  ]);
  return {
    systemPrompt: Sc(r),
    userContext: o,
    systemContext: s,
    toolUseContext: e,
    forkContextMessages: t,
  };
}
async function call(e, t, n) {
  let r = n?.trim();
  if (!r)
    return (
      e("Usage: /btw <your question>", {
        display: "system",
      }),
      null
    );
  return (
    gn((o) => ({
      ...o,
      btwUseCount: o.btwUseCount + 1,
    })),
    H_.jsx(fkf, {
      question: r,
      context: t,
      onDone: e,
    })
  );
}
var iDl,
  UN,
  H_,
  dkf = 5,
  pkf = 6,
  oDl = 3,
  sDl = 5;
