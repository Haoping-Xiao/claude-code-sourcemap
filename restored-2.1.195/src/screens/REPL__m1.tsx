// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L0c
// matched 2.1.88 source: src/screens/REPL.tsx
// class=modified (alt of src/screens/REPL.tsx)  jaccard=0.0156  score=0.2993  fileCov=0.0161
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var L0c = E(() => {
  Jat();
  Qmo();
  Ye();
  nk();
  id();
  uo();
  gq();
  Z6();
  er();
  wr();
  fn();
  Ko();
  ((x0c = R(lt(), 1)), (k0c = R(rt(), 1)), (tfr = R(se(), 1)));
});
function D0c(e, t) {
  if (t.kind === "clear") {
    if (!e.has(t.toolUseId)) return e;
    let o = new Map(e);
    return (o.delete(t.toolUseId), o);
  }
  let n = e.get(t.toolUseId);
  if (t.kind === "background_hint" && n?.kind === t.kind) return e;
  let r = new Map(e);
  return (r.set(t.toolUseId, t), r);
}
function P0c(e, t) {
  if (e.size === 0) return e;
  let n = null;
  for (let r of e.keys())
    if (t.has(r)) {
      if (n === null) n = new Map(e);
      n.delete(r);
    }
  return n ?? e;
}
function O0c({
  plan: e,
  sessionId: t,
  taskId: n,
  setMessages: r,
  readFileState: o,
  memorySelector: s,
  sessionEnvVars: i,
  getAppState: a,
  isolationLatch: l,
  onQueryEvent: c,
}) {
  Wh("ultraplan-choice");
  let u = Ho(),
    d = $T();
  async function p(D) {
    switch (D) {
      case "here":
        Ad({
          value: [
            "Ultraplan approved in browser. Here is the plan:",
            "",
            "<ultraplan>",
            e,
            "</ultraplan>",
            "",
            "The user approved this plan in the cloud session. Give them a brief summary, then start implementing.",
          ].join(`
`),
          mode: "task-notification",
          agentId: ls(),
        });
        break;
      case "fresh": {
        let P = Rt(),
          O = await M0c.stat(em()).then(
            () => true,
            () => false,
          );
        for await (let L of r7t({
          setMessages: r,
          readFileState: o,
          memorySelector: s,
          sessionEnvVars: i,
          getAppState: a,
          setAppState: u,
          isolationLatch: l,
        }))
          c(L);
        if (O)
          r((L) => [
            ...L,
            cc(`Previous session saved \xB7 resume with: claude --resume ${P}`, "suggestion"),
          ]);
        j_({
          value: `Here is the approved implementation plan:

${e}

Implement this plan.`,
          mode: "prompt",
          agentId: ls(),
          origin: {
            kind: "auto-continuation",
          },
        });
        break;
      }
      case "cancel": {
        let P = $0c.join(gS(), `${vkn()}-ultraplan.md`);
        (await qs().write(P, e),
          r((O) => [...O, cc(`Ultraplan rejected \xB7 Plan saved to ${kd(P)}`, "suggestion")]));
        break;
      }
    }
    (d.update(n, (P) =>
      P.status !== "running"
        ? P
        : {
            ...P,
            status: "completed",
            endTime: Date.now(),
          },
    ),
      u((P) =>
        P.ultraplanPendingChoice
          ? {
              ...P,
              ultraplanPendingChoice: void 0,
              ultraplanSessionUrl: void 0,
            }
          : P,
      ),
      X5(t));
  }
  let { rows: f, columns: m } = br(),
    g = Math.min(Rvm, Math.max(1, Math.floor(f / 2) - Lvm)),
    h = ivt.useMemo(
      () =>
        C1(e, Math.max(1, m - 4), "wrap").split(`
`),
      [e, m],
    ),
    y = Math.max(0, h.length - g),
    [b, _] = ivt.useState(0);
  ivt.useEffect(() => _((D) => Math.min(D, y)), [y]);
  let S = h.length > g;
  function A(D) {
    if (!S) return;
    _((P) => Math.max(0, Math.min(P + D, y)));
  }
  function v(D) {
    if (!D.ctrl || D.meta) return;
    let P = Math.max(1, Math.floor(g / 2));
    if (D.key === "d") (D.preventDefault(), A(P));
    else if (D.key === "u") (D.preventDefault(), A(-P));
  }
  function C(D) {
    (D.preventDefault(), A(D.deltaY > 0 ? 3 : -3));
  }
  let x = h.slice(b, b + g).join(`
`),
    I = b > 0,
    k = b < y;
  return NNe.jsx(zn, {
    title: "Ultraplan approved",
    subtitle: "How should the plan be implemented?",
    onCancel: () => {},
    isCancelActive: false,
    hideInputGuide: true,
    children: NNe.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      onKeyDown: v,
      onWheel: C,
      children: [
        NNe.jsxs(U, {
          flexDirection: "column",
          marginBottom: 1,
          children: [
            NNe.jsx(w, {
              children: x,
            }),
            S &&
              NNe.jsxs(w, {
                dimColor: true,
                children: [
                  I ? nt.arrowUp : " ",
                  k ? nt.arrowDown : " ",
                  " ",
                  b + 1,
                  "\u2013",
                  Math.min(b + g, h.length),
                  " of",
                  " ",
                  h.length,
                  " \xB7 ctrl+u/ctrl+d to scroll",
                ],
              }),
          ],
        }),
        NNe.jsx(Sr, {
          options: [
            {
              label: "Implement here",
              value: "here",
              description: "Inject plan into the current conversation",
            },
            {
              label: "Start new session",
              value: "fresh",
              description: "Clear conversation and start with only the plan",
            },
            {
              label: "Cancel",
              value: "cancel",
              description: "Don't implement \u2014 save plan and return",
            },
          ],
          onChange: (D) => void p(D),
        }),
      ],
    }),
  });
}
var M0c,
  $0c,
  ivt,
  NNe,
  Rvm = 24,
  Lvm = 11;
