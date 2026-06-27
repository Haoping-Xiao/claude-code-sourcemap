// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AKl
// matched 2.1.88 source: src/components/hooks/ViewHookMode.tsx
// class=modified  jaccard=0.2961  score=0.3742  fileCov=0.5867
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module AKl] deps: Ye, WAt, sr, Vl, vi, B_, Ko
((SKl = R(lt(), 1)), (gYe = R(se(), 1)));
function ViewHookMode(t0) {
  let t = HKl.c(45),
    { selectedHook: n, eventSupportsMatcher: r, onCancel: o } = t0,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((s = Th.jsx(ht, {
      chord: "escape",
      action: "go back",
    })),
      (t[0] = s));
  else s = t[0];
  let i;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((i = [
      {
        bold: true,
      },
      {},
    ]),
      (t[1] = i));
  else i = t[1];
  let a;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((a = Th.jsx(Th.Fragment, {
      children: "Event:",
    })),
      (t[2] = a));
  else a = t[2];
  let l;
  if (t[3] !== n.event)
    ((l = Th.jsxs(Km.Row, {
      children: [
        a,
        Th.jsx(w, {
          children: n.event,
        }),
      ],
    })),
      (t[3] = n.event),
      (t[4] = l));
  else l = t[4];
  let c;
  if (t[5] !== r || t[6] !== n.matcher)
    ((c =
      r &&
      Th.jsxs(Km.Row, {
        children: [
          Th.jsx(Th.Fragment, {
            children: "Matcher:",
          }),
          Th.jsx(w, {
            children: n.matcher || "(all)",
          }),
        ],
      })),
      (t[5] = r),
      (t[6] = n.matcher),
      (t[7] = c));
  else c = t[7];
  let u;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((u = Th.jsx(Th.Fragment, {
      children: "Type:",
    })),
      (t[8] = u));
  else u = t[8];
  let d;
  if (t[9] !== n.config.type)
    ((d = Th.jsxs(Km.Row, {
      children: [
        u,
        Th.jsx(w, {
          children: n.config.type,
        }),
      ],
    })),
      (t[9] = n.config.type),
      (t[10] = d));
  else d = t[10];
  let p;
  if (t[11] === Symbol.for("react.memo_cache_sentinel"))
    ((p = Th.jsx(Th.Fragment, {
      children: "Source:",
    })),
      (t[11] = p));
  else p = t[11];
  let f;
  if (t[12] !== n.source) ((f = aKl(n.source)), (t[12] = n.source), (t[13] = f));
  else f = t[13];
  let m;
  if (t[14] !== f)
    ((m = Th.jsxs(Km.Row, {
      children: [
        p,
        Th.jsx(w, {
          dimColor: true,
          children: f,
        }),
      ],
    })),
      (t[14] = f),
      (t[15] = m));
  else m = t[15];
  let g;
  if (t[16] !== n.pluginName)
    ((g =
      n.pluginName &&
      Th.jsxs(Km.Row, {
        children: [
          Th.jsx(Th.Fragment, {
            children: "Plugin:",
          }),
          Th.jsx(w, {
            dimColor: true,
            children: n.pluginName,
          }),
        ],
      })),
      (t[16] = n.pluginName),
      (t[17] = g));
  else g = t[17];
  let h;
  if (t[18] !== n.config)
    ((h =
      "statusMessage" in n.config &&
      n.config.statusMessage &&
      Th.jsxs(Km.Row, {
        children: [
          Th.jsx(Th.Fragment, {
            children: "Status message:",
          }),
          Th.jsx(w, {
            dimColor: true,
            children: n.config.statusMessage,
          }),
        ],
      })),
      (t[18] = n.config),
      (t[19] = h));
  else h = t[19];
  let y;
  if (t[20] !== m || t[21] !== g || t[22] !== h || t[23] !== l || t[24] !== c || t[25] !== d)
    ((y = Th.jsxs(Km, {
      box: "plain",
      columns: i,
      children: [l, c, d, m, g, h],
    })),
      (t[20] = m),
      (t[21] = g),
      (t[22] = h),
      (t[23] = l),
      (t[24] = c),
      (t[25] = d),
      (t[26] = y));
  else y = t[26];
  let b;
  if (t[27] !== n.config) ((b = getContentFieldLabel(n.config)), (t[27] = n.config), (t[28] = b));
  else b = t[28];
  let _;
  if (t[29] !== b)
    ((_ = Th.jsxs(w, {
      dimColor: true,
      children: [b, ":"],
    })),
      (t[29] = b),
      (t[30] = _));
  else _ = t[30];
  let S;
  if (t[31] !== n.config) ((S = eTe(n.config)), (t[31] = n.config), (t[32] = S));
  else S = t[32];
  let A;
  if (t[33] !== S)
    ((A = Th.jsx(U, {
      borderStyle: "round",
      borderDimColor: true,
      paddingLeft: 1,
      paddingRight: 1,
      children: Th.jsx(w, {
        children: S,
      }),
    })),
      (t[33] = S),
      (t[34] = A));
  else A = t[34];
  let v;
  if (t[35] !== _ || t[36] !== A)
    ((v = Th.jsxs(U, {
      flexDirection: "column",
      children: [_, A],
    })),
      (t[35] = _),
      (t[36] = A),
      (t[37] = v));
  else v = t[37];
  let C;
  if (t[38] === Symbol.for("react.memo_cache_sentinel"))
    ((C = Th.jsx(w, {
      dimColor: true,
      children: "To modify or remove this hook, edit settings.json directly or ask Claude to help.",
    })),
      (t[38] = C));
  else C = t[38];
  let x;
  if (t[39] !== y || t[40] !== v)
    ((x = Th.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [y, v, C],
    })),
      (t[39] = y),
      (t[40] = v),
      (t[41] = x));
  else x = t[41];
  let I;
  if (t[42] !== o || t[43] !== x)
    ((I = Th.jsx(zn, {
      title: "Hook details",
      onCancel: o,
      inputGuide: s,
      children: x,
    })),
      (t[42] = o),
      (t[43] = x),
      (t[44] = I));
  else I = t[44];
  return I;
}
function getContentFieldLabel(config) {
  switch (config.type) {
    case "command":
      return "Command";
    case "prompt":
      return "Prompt";
    case "agent":
      return "Prompt";
    case "http":
      return "URL";
    case "mcp_tool":
      return "MCP tool";
  }
}
var HKl, Th;
