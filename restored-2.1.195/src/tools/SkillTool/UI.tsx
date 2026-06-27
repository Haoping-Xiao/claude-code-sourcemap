// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SAe
// matched 2.1.88 source: src/tools/SkillTool/UI.tsx
// class=modified  jaccard=0.224  score=0.3602  fileCov=0.3719
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
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
function Scl(e) {
  if ("status" in e && e.status === "forked")
    return JI.jsx(qn, {
      height: 1,
      children: JI.jsx(w, {
        children: JI.jsx(Tn, {
          children: ["Done"],
        }),
      }),
    });
  let t = ["Successfully loaded skill"];
  if ("allowedTools" in e && e.allowedTools && e.allowedTools.length > 0) {
    let n = e.allowedTools.length;
    t.push(`${n} ${bn(n, "tool")} allowed`);
  }
  if ("model" in e && e.model) t.push(e.model);
  return JI.jsx(qn, {
    height: 1,
    children: JI.jsx(w, {
      children: JI.jsx(Tn, {
        children: t,
      }),
    }),
  });
}
function Ecl({ skill: e }, { commands: t }) {
  if (!e) return null;
  let n = e.trim(),
    r = n.startsWith("/") ? n.substring(1) : n,
    o = t?.find((a) => a.name === r),
    s = o?.loadedFrom === "commands_DEPRECATED" ? `/${r}` : r,
    i = o8t(o?.type === "prompt" ? o.source : void 0, r);
  return i ? `${s} \xB7 by ${i}` : s;
}
function LKn(e, { tools: t, verbose: n }) {
  if (!e.length)
    return JI.jsx(qn, {
      height: 1,
      children: JI.jsx(w, {
        dimColor: true,
        children: oaf,
      }),
    });
  let r = n ? e : e.slice(-raf),
    o = e.length - r.length,
    { inProgressToolUseIDs: s } = j8t(e.map((i) => i.data));
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
      LKn(t, {
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
      LKn(t, {
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
  oaf = "Initializing\u2026";
