// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VAt
// matched 2.1.88 source: src/skills/bundled/keybindings.ts
// class=modified (alt of src/skills/bundled/keybindings.ts)  jaccard=0.0112  score=0.0539  fileCov=0.014
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VAt] deps: utils/settings/managedPath.ts, tools/AgentTool/loadAgentsDir.ts, utils/fsOperations.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, hooks/useSettings.ts, utils/fsOperations.ts, components/agents/agentFileUtils.ts
((qAt = require("fs/promises")), (Lse = require("path")));
function generateContextsTable(e) {
  let t = s4o.c(48),
    { agent: n, tools: r, onBack: o } = e,
    s;
  if (t[0] !== n || t[1] !== r) ((s = voe(n, r, false)), (t[0] = n), (t[1] = r), (t[2] = s));
  else s = t[2];
  let i = s,
    a;
  if (t[3] !== n) ((a = lYl(n)), (t[3] = n), (t[4] = a));
  else a = t[4];
  let l = a,
    c;
  if (t[5] !== n.agentType) ((c = JEe(n.agentType)), (t[5] = n.agentType), (t[6] = c));
  else c = t[6];
  let u = c,
    d;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((d = {
      context: "Confirmation",
    }),
      (t[7] = d));
  else d = t[7];
  $r("confirm:no", o, d);
  let p;
  if (t[8] !== o)
    ((p = (O) => {
      if (O.key === "return") (O.preventDefault(), o());
    }),
      (t[8] = o),
      (t[9] = p));
  else p = t[9];
  let f = p,
    m;
  if (t[10] !== l)
    ((m = lm.jsx(w, {
      dimColor: true,
      children: l,
    })),
      (t[10] = l),
      (t[11] = m));
  else m = t[11];
  let g;
  if (t[12] === Symbol.for("react.memo_cache_sentinel"))
    ((g = lm.jsxs(w, {
      children: [
        lm.jsx(w, {
          bold: true,
          children: "Description",
        }),
        " (tells Claude when to use this agent):",
      ],
    })),
      (t[12] = g));
  else g = t[12];
  let h;
  if (t[13] !== n.whenToUse)
    ((h = lm.jsxs(U, {
      flexDirection: "column",
      children: [
        g,
        lm.jsx(U, {
          marginLeft: 2,
          children: lm.jsx(w, {
            children: n.whenToUse,
          }),
        }),
      ],
    })),
      (t[13] = n.whenToUse),
      (t[14] = h));
  else h = t[14];
  let y;
  if (t[15] === Symbol.for("react.memo_cache_sentinel"))
    ((y = lm.jsxs(w, {
      children: [
        lm.jsx(w, {
          bold: true,
          children: "Tools",
        }),
        ":",
        " ",
      ],
    })),
      (t[15] = y));
  else y = t[15];
  let b;
  if (t[16] !== i)
    ((b = lm.jsxs(U, {
      children: [
        y,
        lm.jsx(DVf, {
          resolvedTools: i,
        }),
      ],
    })),
      (t[16] = i),
      (t[17] = b));
  else b = t[17];
  let _;
  if (t[18] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = lm.jsx(w, {
      bold: true,
      children: "Model",
    })),
      (t[18] = _));
  else _ = t[18];
  let S;
  if (t[19] !== n.model) ((S = I8n(n.model)), (t[19] = n.model), (t[20] = S));
  else S = t[20];
  let A;
  if (t[21] !== S)
    ((A = lm.jsxs(w, {
      children: [_, ": ", S],
    })),
      (t[21] = S),
      (t[22] = A));
  else A = t[22];
  let v;
  if (t[23] !== n.permissionMode)
    ((v =
      n.permissionMode &&
      lm.jsxs(w, {
        children: [
          lm.jsx(w, {
            bold: true,
            children: "Permission mode",
          }),
          ": ",
          n.permissionMode,
        ],
      })),
      (t[23] = n.permissionMode),
      (t[24] = v));
  else v = t[24];
  let C;
  if (t[25] !== n.memory)
    ((C =
      n.memory &&
      lm.jsxs(w, {
        children: [
          lm.jsx(w, {
            bold: true,
            children: "Memory",
          }),
          ": ",
          f0n(n.memory),
        ],
      })),
      (t[25] = n.memory),
      (t[26] = C));
  else C = t[26];
  let x;
  if (t[27] !== n.hooks)
    ((x =
      n.hooks &&
      Object.keys(n.hooks).length > 0 &&
      lm.jsxs(w, {
        children: [
          lm.jsx(w, {
            bold: true,
            children: "Hooks",
          }),
          ": ",
          Object.keys(n.hooks).join(", "),
        ],
      })),
      (t[27] = n.hooks),
      (t[28] = x));
  else x = t[28];
  let I;
  if (t[29] !== n.skills)
    ((I =
      n.skills &&
      n.skills.length > 0 &&
      lm.jsxs(w, {
        children: [
          lm.jsx(w, {
            bold: true,
            children: "Skills",
          }),
          ":",
          " ",
          n.skills.length > 10 ? `${n.skills.length} skills` : n.skills.join(", "),
        ],
      })),
      (t[29] = n.skills),
      (t[30] = I));
  else I = t[30];
  let k;
  if (t[31] !== n.agentType || t[32] !== u)
    ((k =
      u &&
      lm.jsx(U, {
        children: lm.jsxs(w, {
          children: [
            lm.jsx(w, {
              bold: true,
              children: "Color",
            }),
            ":",
            " ",
            lm.jsx(pE, {
              color: u,
              padded: true,
              children: n.agentType,
            }),
          ],
        }),
      })),
      (t[31] = n.agentType),
      (t[32] = u),
      (t[33] = k));
  else k = t[33];
  let D;
  if (t[34] !== n)
    ((D =
      !Sh(n) &&
      lm.jsxs(lm.Fragment, {
        children: [
          lm.jsx(U, {
            children: lm.jsxs(w, {
              children: [
                lm.jsx(w, {
                  bold: true,
                  children: "System prompt",
                }),
                ":",
              ],
            }),
          }),
          lm.jsx(U, {
            marginLeft: 2,
            marginRight: 2,
            children: lm.jsx(zg, {
              children: n.getSystemPrompt(),
            }),
          }),
        ],
      })),
      (t[34] = n),
      (t[35] = D));
  else D = t[35];
  let P;
  if (
    t[36] !== f ||
    t[37] !== b ||
    t[38] !== A ||
    t[39] !== v ||
    t[40] !== C ||
    t[41] !== x ||
    t[42] !== I ||
    t[43] !== k ||
    t[44] !== D ||
    t[45] !== m ||
    t[46] !== h
  )
    ((P = lm.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: f,
      children: [m, h, b, A, v, C, x, I, k, D],
    })),
      (t[36] = f),
      (t[37] = b),
      (t[38] = A),
      (t[39] = v),
      (t[40] = C),
      (t[41] = x),
      (t[42] = I),
      (t[43] = k),
      (t[44] = D),
      (t[45] = m),
      (t[46] = h),
      (t[47] = P));
  else P = t[47];
  return P;
}
function DVf(e) {
  let t = s4o.c(12),
    { resolvedTools: n } = e;
  if (n.hasWildcard) {
    let u;
    if (t[0] === Symbol.for("react.memo_cache_sentinel"))
      ((u = lm.jsx(w, {
        children: "All tools",
      })),
        (t[0] = u));
    else u = t[0];
    return u;
  }
  let { validTools: r, unavailableTools: o, invalidTools: s } = n;
  if (r.length === 0 && o.length === 0 && s.length === 0) {
    let u;
    if (t[1] === Symbol.for("react.memo_cache_sentinel"))
      ((u = lm.jsx(w, {
        children: "None",
      })),
        (t[1] = u));
    else u = t[1];
    return u;
  }
  let i;
  if (t[2] !== r)
    ((i =
      r.length > 0 &&
      lm.jsx(w, {
        children: r.join(", "),
      })),
      (t[2] = r),
      (t[3] = i));
  else i = t[3];
  let a;
  if (t[4] !== o)
    ((a =
      o.length > 0 &&
      lm.jsxs(w, {
        color: "warning",
        children: [nt.warning, " Not available to subagents:", " ", o.join(", ")],
      })),
      (t[4] = o),
      (t[5] = a));
  else a = t[5];
  let l;
  if (t[6] !== s)
    ((l =
      s.length > 0 &&
      lm.jsxs(w, {
        color: "warning",
        children: [nt.warning, " Unrecognized: ", s.join(", ")],
      })),
      (t[6] = s),
      (t[7] = l));
  else l = t[7];
  let c;
  if (t[8] !== i || t[9] !== a || t[10] !== l)
    ((c = lm.jsxs(U, {
      flexDirection: "column",
      children: [i, a, l],
    })),
      (t[8] = i),
      (t[9] = a),
      (t[10] = l),
      (t[11] = c));
  else c = t[11];
  return c;
}
var s4o, lm;
