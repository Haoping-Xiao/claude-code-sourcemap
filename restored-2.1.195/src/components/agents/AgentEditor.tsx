// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c4o
// matched 2.1.88 source: src/components/agents/AgentEditor.tsx
// class=modified  jaccard=0.5672  score=0.9329  fileCov=0.5914
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var c4o = E(() => {
  sFn();
  vf();
});
function EYl({ agent: e, tools: t, onSaved: n, onBack: r }) {
  let o = Ho(),
    [s, i] = aZ.useState("menu"),
    [a, l] = aZ.useState(0),
    [c, u] = aZ.useState(null),
    [d, p] = aZ.useState(e.color),
    f = aZ.useCallback(async () => {
      let _ = Osr(e),
        S = await yz(_);
      if (S.error) u(S.error);
      else
        n(
          `Opened ${e.agentType} in editor. If you made edits, restart to load the latest version.`,
        );
    }, [e, n]),
    m = aZ.useCallback(
      async (_ = {}) => {
        let { tools: S, color: A, model: v } = _,
          C = A ?? d,
          x = "tools" in _ && !qVf(S, e.tools),
          I = v !== void 0,
          k = C !== e.color;
        if (!x && !I && !k) return false;
        try {
          if (!F6e(e) && !sfe(e)) return false;
          if (
            (await uYl(e, {
              ...(x && {
                tools: S,
              }),
              ...(k && {
                color: C,
              }),
              ...(I && {
                model: v,
              }),
            }),
            k && C)
          )
            QPe(e.agentType, C);
          return (
            o((D) => {
              let P = D.agentDefinitions.allAgents.map((O) =>
                O.agentType === e.agentType && O.source === e.source
                  ? {
                      ...O,
                      tools: x ? S : O.tools,
                      color: C,
                      model: v ?? O.model,
                    }
                  : O,
              );
              return {
                ...D,
                agentDefinitions: {
                  ...D.agentDefinitions,
                  activeAgents: YF(P),
                  allAgents: P,
                },
              };
            }),
            n(`Updated agent: ${wt.bold(e.agentType)}`),
            true
          );
        } catch (D) {
          return (u(D instanceof Error ? D.message : "Failed to save agent"), false);
        }
      },
      [e, d, n, o],
    ),
    g = aZ.useMemo(
      () => [
        {
          label: "Open in editor",
          action: f,
        },
        {
          label: "Edit tools",
          action: () => i("edit-tools"),
        },
        {
          label: "Edit model",
          action: () => i("edit-model"),
        },
        {
          label: "Edit color",
          action: () => i("edit-color"),
        },
      ],
      [f],
    ),
    h = aZ.useCallback(() => {
      if ((u(null), s === "menu")) r();
      else i("menu");
    }, [s, r]),
    y = aZ.useCallback(
      (_) => {
        if (_.key === "up") (_.preventDefault(), l((S) => Math.max(0, S - 1)));
        else if (_.key === "down") (_.preventDefault(), l((S) => Math.min(g.length - 1, S + 1)));
        else if (_.key === "return") {
          _.preventDefault();
          let S = g[a];
          if (S) S.action();
        }
      },
      [g, a],
    );
  $r("confirm:no", h, {
    context: "Confirmation",
  });
  let b = () =>
    Pse.jsxs(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: y,
      children: [
        Pse.jsxs(w, {
          dimColor: true,
          children: ["Source: ", jsr(e.source)],
        }),
        Pse.jsx(U, {
          marginTop: 1,
          flexDirection: "column",
          children: g.map((_, S) =>
            Pse.jsxs(
              w,
              {
                color: S === a ? "suggestion" : void 0,
                children: [S === a ? `${nt.pointer} ` : "  ", _.label],
              },
              _.label,
            ),
          ),
        }),
        c &&
          Pse.jsx(U, {
            marginTop: 1,
            children: Pse.jsx(Va, {
              error: c,
            }),
          }),
      ],
    });
  switch (s) {
    case "menu":
      return b();
    case "edit-tools":
      return Pse.jsx(Fsr, {
        tools: t,
        initialTools: e.tools,
        onComplete: async (_) => {
          (i("menu"),
            await m({
              tools: _,
            }));
        },
      });
    case "edit-color":
      return Pse.jsx(Nsr, {
        agentName: e.agentType,
        currentColor: d || e.color || "automatic",
        onConfirm: async (_) => {
          (p(_),
            i("menu"),
            await m({
              color: _,
            }));
        },
      });
    case "edit-model":
      return Pse.jsx(Bsr, {
        initialModel: e.model,
        onComplete: async (_) => {
          (i("menu"),
            await m({
              model: _,
            }));
        },
      });
    default:
      return null;
  }
}
function qVf(e, t) {
  if (!e || e.includes("*")) return !t || t.includes("*");
  if (!t || t.includes("*")) return false;
  if (e.length !== t.length) return false;
  let n = new Set(e);
  return t.every((r) => n.has(r));
}
var aZ, Pse;
