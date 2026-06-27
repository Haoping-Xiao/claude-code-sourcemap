// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d4o
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/ConfirmStep.tsx
// class=modified  jaccard=0.2531  score=0.4146  fileCov=0.3939
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function ConfirmStep(t0) {
  let t = RYl.c(88),
    { tools: n, existingAgents: r, onSave: o, onSaveAndEdit: s, error: i } = t0,
    { goBack: a, wizardData: wizardData } = Eu(),
    c;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((c = {
      context: "Confirmation",
    }),
      (t[0] = c));
  else c = t[0];
  $r("confirm:no", a, c);
  let u;
  if (t[1] !== o || t[2] !== s)
    ((u = (Y) => {
      if (Y.key === "return") {
        (Y.preventDefault(), o());
        return;
      }
      if (Y.ctrl || Y.meta) return;
      if (Y.key === "s") (Y.preventDefault(), o());
      else if (Y.key === "e") (Y.preventDefault(), s());
    }),
      (t[1] = o),
      (t[2] = s),
      (t[3] = u));
  else u = t[3];
  let d = u,
    agent = wizardData.finalAgent,
    f,
    m,
    g,
    h,
    y,
    b,
    _,
    S,
    A,
    v,
    C,
    x,
    I,
    k,
    D,
    P,
    O,
    L,
    M;
  if (t[4] !== agent || t[5] !== r || t[6] !== d || t[7] !== n || t[8] !== wizardData.location) {
    let Y = kYl(agent, n, r),
      z;
    if (t[28] !== agent) ((z = Rs(agent.getSystemPrompt(), 240)), (t[28] = agent), (t[29] = z));
    else z = t[29];
    let K = z,
      Z;
    if (t[30] !== agent.whenToUse)
      ((Z = Rs(agent.whenToUse, 240)), (t[30] = agent.whenToUse), (t[31] = Z));
    else Z = t[31];
    let J = Z,
      ne = _temp,
      oe;
    if (t[32] !== agent.memory)
      ((oe = lu()
        ? Xp.jsxs(w, {
            children: [
              Xp.jsx(w, {
                bold: true,
                children: "Memory",
              }),
              ": ",
              f0n(agent.memory),
            ],
          })
        : null),
        (t[32] = agent.memory),
        (t[33] = oe));
    else oe = t[33];
    let re = oe;
    if (((m = Pc), (C = "Confirm and save"), t[34] === Symbol.for("react.memo_cache_sentinel")))
      ((x = Xp.jsxs(Tn, {
        children: [
          Xp.jsx(ht, {
            chord: ["s", "enter"],
            action: "save",
          }),
          Xp.jsx(ht, {
            chord: "e",
            action: "edit in your editor",
          }),
          Xp.jsx(mr, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel",
          }),
        ],
      })),
        (t[34] = x));
    else x = t[34];
    ((f = U), (I = "column"), (k = 0), (D = true), (P = d));
    let ee;
    if (t[35] === Symbol.for("react.memo_cache_sentinel"))
      ((ee = Xp.jsx(w, {
        bold: true,
        children: "Name",
      })),
        (t[35] = ee));
    else ee = t[35];
    if (t[36] !== agent.agentType)
      ((O = Xp.jsxs(w, {
        children: [ee, ": ", agent.agentType],
      })),
        (t[36] = agent.agentType),
        (t[37] = O));
    else O = t[37];
    let ce;
    if (t[38] === Symbol.for("react.memo_cache_sentinel"))
      ((ce = Xp.jsx(w, {
        bold: true,
        children: "Location",
      })),
        (t[38] = ce));
    else ce = t[38];
    let ae;
    if (t[39] !== agent.agentType || t[40] !== wizardData.location)
      ((ae = aYl({
        source: wizardData.location,
        agentType: agent.agentType,
      })),
        (t[39] = agent.agentType),
        (t[40] = wizardData.location),
        (t[41] = ae));
    else ae = t[41];
    if (t[42] !== ae)
      ((L = Xp.jsxs(w, {
        children: [ce, ":", " ", ae],
      })),
        (t[42] = ae),
        (t[43] = L));
    else L = t[43];
    let de;
    if (t[44] === Symbol.for("react.memo_cache_sentinel"))
      ((de = Xp.jsx(w, {
        bold: true,
        children: "Tools",
      })),
        (t[44] = de));
    else de = t[44];
    let Ee;
    if (t[45] !== agent.tools) ((Ee = ne(agent.tools)), (t[45] = agent.tools), (t[46] = Ee));
    else Ee = t[46];
    if (t[47] !== Ee)
      ((M = Xp.jsxs(w, {
        children: [de, ": ", Ee],
      })),
        (t[47] = Ee),
        (t[48] = M));
    else M = t[48];
    let me;
    if (t[49] === Symbol.for("react.memo_cache_sentinel"))
      ((me = Xp.jsx(w, {
        bold: true,
        children: "Model",
      })),
        (t[49] = me));
    else me = t[49];
    let pe;
    if (t[50] !== agent.model) ((pe = I8n(agent.model)), (t[50] = agent.model), (t[51] = pe));
    else pe = t[51];
    if (t[52] !== pe)
      ((g = Xp.jsxs(w, {
        children: [me, ": ", pe],
      })),
        (t[52] = pe),
        (t[53] = g));
    else g = t[53];
    if (((h = re), t[54] === Symbol.for("react.memo_cache_sentinel")))
      ((y = Xp.jsx(U, {
        marginTop: 1,
        children: Xp.jsxs(w, {
          children: [
            Xp.jsx(w, {
              bold: true,
              children: "Description",
            }),
            " (tells Claude when to use this agent):",
          ],
        }),
      })),
        (t[54] = y));
    else y = t[54];
    if (t[55] !== J)
      ((b = Xp.jsx(U, {
        marginLeft: 2,
        marginTop: 1,
        children: Xp.jsx(w, {
          children: J,
        }),
      })),
        (t[55] = J),
        (t[56] = b));
    else b = t[56];
    if (t[57] === Symbol.for("react.memo_cache_sentinel"))
      ((_ = Xp.jsx(U, {
        marginTop: 1,
        children: Xp.jsxs(w, {
          children: [
            Xp.jsx(w, {
              bold: true,
              children: "System prompt",
            }),
            ":",
          ],
        }),
      })),
        (t[57] = _));
    else _ = t[57];
    if (t[58] !== K)
      ((S = Xp.jsx(U, {
        marginLeft: 2,
        marginTop: 1,
        children: Xp.jsx(w, {
          children: K,
        }),
      })),
        (t[58] = K),
        (t[59] = S));
    else S = t[59];
    ((A =
      Y.warnings.length > 0 &&
      Xp.jsxs(U, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          Xp.jsx(w, {
            color: "warning",
            children: "Warnings:",
          }),
          Xp.jsx(U, {
            flexDirection: "column",
            marginLeft: 1,
            children: Y.warnings.map(e9f),
          }),
        ],
      })),
      (v =
        Y.errors.length > 0 &&
        Xp.jsxs(U, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            Xp.jsx(w, {
              color: "error",
              children: "Errors:",
            }),
            Xp.jsx(U, {
              flexDirection: "column",
              marginLeft: 1,
              children: Y.errors.map(ZVf),
            }),
          ],
        })),
      (t[4] = agent),
      (t[5] = r),
      (t[6] = d),
      (t[7] = n),
      (t[8] = wizardData.location),
      (t[9] = f),
      (t[10] = m),
      (t[11] = g),
      (t[12] = h),
      (t[13] = y),
      (t[14] = b),
      (t[15] = _),
      (t[16] = S),
      (t[17] = A),
      (t[18] = v),
      (t[19] = C),
      (t[20] = x),
      (t[21] = I),
      (t[22] = k),
      (t[23] = D),
      (t[24] = P),
      (t[25] = O),
      (t[26] = L),
      (t[27] = M));
  } else
    ((f = t[9]),
      (m = t[10]),
      (g = t[11]),
      (h = t[12]),
      (y = t[13]),
      (b = t[14]),
      (_ = t[15]),
      (S = t[16]),
      (A = t[17]),
      (v = t[18]),
      (C = t[19]),
      (x = t[20]),
      (I = t[21]),
      (k = t[22]),
      (D = t[23]),
      (P = t[24]),
      (O = t[25]),
      (L = t[26]),
      (M = t[27]));
  let N;
  if (t[60] !== i)
    ((N =
      i &&
      Xp.jsx(U, {
        marginTop: 1,
        children: Xp.jsx(Va, {
          error: i,
        }),
      })),
      (t[60] = i),
      (t[61] = N));
  else N = t[61];
  let B;
  if (t[62] === Symbol.for("react.memo_cache_sentinel"))
    ((B = Xp.jsx(w, {
      bold: true,
      children: "s",
    })),
      (t[62] = B));
  else B = t[62];
  let $;
  if (t[63] === Symbol.for("react.memo_cache_sentinel"))
    (($ = Xp.jsx(w, {
      bold: true,
      children: "Enter",
    })),
      (t[63] = $));
  else $ = t[63];
  let q;
  if (t[64] === Symbol.for("react.memo_cache_sentinel"))
    ((q = Xp.jsx(U, {
      marginTop: 2,
      children: Xp.jsxs(w, {
        color: "success",
        children: [
          "Press ",
          B,
          " or ",
          $,
          " to save,",
          " ",
          Xp.jsx(w, {
            bold: true,
            children: "e",
          }),
          " to save and edit",
        ],
      }),
    })),
      (t[64] = q));
  else q = t[64];
  let W;
  if (
    t[65] !== f ||
    t[66] !== g ||
    t[67] !== h ||
    t[68] !== y ||
    t[69] !== b ||
    t[70] !== _ ||
    t[71] !== S ||
    t[72] !== A ||
    t[73] !== v ||
    t[74] !== N ||
    t[75] !== I ||
    t[76] !== k ||
    t[77] !== D ||
    t[78] !== P ||
    t[79] !== O ||
    t[80] !== L ||
    t[81] !== M
  )
    ((W = Xp.jsxs(f, {
      flexDirection: I,
      tabIndex: k,
      autoFocus: D,
      onKeyDown: P,
      children: [O, L, M, g, h, y, b, _, S, A, v, N, q],
    })),
      (t[65] = f),
      (t[66] = g),
      (t[67] = h),
      (t[68] = y),
      (t[69] = b),
      (t[70] = _),
      (t[71] = S),
      (t[72] = A),
      (t[73] = v),
      (t[74] = N),
      (t[75] = I),
      (t[76] = k),
      (t[77] = D),
      (t[78] = P),
      (t[79] = O),
      (t[80] = L),
      (t[81] = M),
      (t[82] = W));
  else W = t[82];
  let V;
  if (t[83] !== m || t[84] !== C || t[85] !== x || t[86] !== W)
    ((V = Xp.jsx(m, {
      subtitle: C,
      footerText: x,
      children: W,
    })),
      (t[83] = m),
      (t[84] = C),
      (t[85] = x),
      (t[86] = W),
      (t[87] = V));
  else V = t[87];
  return V;
}
function ZVf(e, t) {
  return Xp.jsx(
    iE,
    {
      color: "error",
      children: e,
    },
    t,
  );
}
function e9f(e, t) {
  return Xp.jsx(
    iE,
    {
      children: Xp.jsx(w, {
        dimColor: true,
        children: e,
      }),
    },
    t,
  );
}
function _temp(toolNames) {
  if (toolNames === void 0) return "All tools";
  if (toolNames.length === 0) return "None";
  if (toolNames.length === 1) return toolNames[0] || "None";
  if (toolNames.length === 2) return toolNames.join(" and ");
  return `${toolNames.slice(0, -1).join(", ")}, and ${toolNames.at(-1)}`;
}
var RYl, Xp;
