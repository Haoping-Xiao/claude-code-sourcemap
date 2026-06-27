// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SAe
// matched 2.1.88 source: src/tools/SkillTool/UI.tsx
// class=modified  jaccard=0.224  score=0.3602  fileCov=0.3719
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SAe] deps: dre, je, mwo, co, y6e, ft, Zf, X6, S4, F8, MAe, Un, l8t, mLe, c8t, BI, Kv, MPn, S_, u8t, d8t, O6n, og, Vv, Il, gb, wr, Q9, fn, At, oc, ik, q0, Orl, sp, co, kpe, L3e, DE, y_, _a, L7, sr, Xdt, m5, HO, tQ, vAe, qRe, ty
((kIo = require("crypto")), (cq = require("path")));
function _cl(e, t) {
  if (!t) return e;
  return e.map((n) => {
    if (n.type === "user")
      return {
        ...n,
        sourceToolUseID: t,
      };
    return n;
  });
}
function bcl(e, t) {
  let n = e.message.content.find((r) => r.type === "tool_use" && r.name === t);
  return n && n.type === "tool_use" ? n.id : void 0;
}
function renderToolResultMessage(output) {
  if ("status" in output && output.status === "forked")
    return JI.jsx(qn, {
      height: 1,
      children: JI.jsx(w, {
        children: JI.jsx(Tn, {
          children: ["Done"],
        }),
      }),
    });
  let t = ["Successfully loaded skill"];
  if ("allowedTools" in output && output.allowedTools && output.allowedTools.length > 0) {
    let n = output.allowedTools.length;
    t.push(`${n} ${bn(n, "tool")} allowed`);
  }
  if ("model" in output && output.model) t.push(output.model);
  return JI.jsx(qn, {
    height: 1,
    children: JI.jsx(w, {
      children: JI.jsx(Tn, {
        children: t,
      }),
    }),
  });
}
function renderToolUseMessage({ skill: e }, { commands: t }) {
  if (!e) return null;
  let n = e.trim(),
    r = n.startsWith("/") ? n.substring(1) : n,
    o = t?.find((a) => a.name === r),
    s = o?.loadedFrom === "commands_DEPRECATED" ? `/${r}` : r,
    i = o8t(o?.type === "prompt" ? o.source : void 0, r);
  return i ? `${s} \xB7 by ${i}` : s;
}
function renderToolUseProgressMessage(progressMessages, { tools: t, verbose: n }) {
  if (!progressMessages.length)
    return JI.jsx(qn, {
      height: 1,
      children: JI.jsx(w, {
        dimColor: true,
        children: INITIALIZING_TEXT,
      }),
    });
  let r = n ? progressMessages : progressMessages.slice(-raf),
    o = progressMessages.length - r.length,
    { inProgressToolUseIDs: s } = j8t(progressMessages.map((i) => i.data));
  return JI.jsx(qn, {
    children: JI.jsxs(U, {
      flexDirection: "column",
      children: [
        JI.jsx(p4t, {
          children: r.map((i) =>
            JI.jsx(
              U,
              {
                height: 1,
                overflow: "hidden",
                children: JI.jsx(dQ, {
                  message: i.data.message,
                  lookups: LAe,
                  addMargin: false,
                  tools: t,
                  commands: [],
                  verbose: n,
                  inProgressToolUseIDs: s,
                  progressMessagesForMessage: [],
                  shouldAnimate: false,
                  shouldShowDot: false,
                  style: "condensed",
                  isTranscriptMode: false,
                  isStatic: true,
                }),
              },
              i.uuid,
            ),
          ),
        }),
        JI.jsx(d$, {
          count: o,
          unit: "tool use",
        }),
      ],
    }),
  });
}
function Acl(e, { progressMessagesForMessage: t, tools: n, verbose: r }) {
  return JI.jsxs(JI.Fragment, {
    children: [
      renderToolUseProgressMessage(t, {
        tools: n,
        verbose: r,
      }),
      JI.jsx(jpe, {}),
    ],
  });
}
function Hcl(e, { progressMessagesForMessage: t, tools: n, verbose: r }) {
  return JI.jsxs(JI.Fragment, {
    children: [
      renderToolUseProgressMessage(t, {
        tools: n,
        verbose: r,
      }),
      JI.jsx(AT, {
        result: e,
        verbose: r,
      }),
    ],
  });
}
var JI,
  raf = 3,
  INITIALIZING_TEXT = "Initializing\u2026";
