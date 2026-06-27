// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ddc
// matched 2.1.88 source: src/components/MCPServerDesktopImportDialog.tsx
// class=modified  jaccard=0.2964  score=0.4646  fileCov=0.4501
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function MCPServerDesktopImportDialog(t0) {
  let t = pdc.c(36),
    { servers: n, scope: r, onDone: o } = t0,
    s;
  if (t[0] !== n) ((s = Object.keys(n)), (t[0] = n), (t[1] = s));
  else s = t[1];
  let serverNames = s,
    a;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((a = {}), (t[2] = a));
  else a = t[2];
  let [l, c] = Gcr.useState(a),
    u,
    d;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((u = () => {
      M4().then((M) => {
        let { servers: N } = M;
        return c(N);
      });
    }),
      (d = []),
      (t[3] = u),
      (t[4] = d));
  else ((u = t[3]), (d = t[4]));
  Gcr.useEffect(u, d);
  let p;
  if (t[5] !== l || t[6] !== serverNames)
    ((p = serverNames.filter((M) => l[M] !== void 0)),
      (t[5] = l),
      (t[6] = serverNames),
      (t[7] = p));
  else p = t[7];
  let collisions = p,
    m = async function (N) {
      let B = 0;
      for (let $ of N) {
        let q = n[$];
        if (q) {
          let W = $;
          if (l[W] !== void 0) {
            let V = 1;
            while (l[`${$}_${V}`] !== void 0) V++;
            W = `${$}_${V}`;
          }
          (await BSe(W, q, r), B++);
        }
      }
      y(B);
    },
    [g] = na(),
    h;
  if (t[8] !== o || t[9] !== r || t[10] !== g)
    ((h = (M) => {
      if (M > 0)
        $i(`
${Io("success", g)(`Successfully imported ${M} MCP ${bn(M, "server")} to ${r} config.`)}
`);
      else
        $i(`
No servers were imported.`);
      (o(), ki());
    }),
      (t[8] = o),
      (t[9] = r),
      (t[10] = g),
      (t[11] = h));
  else h = t[11];
  let y = h,
    b;
  if (t[12] !== y)
    ((b = () => {
      y(0);
    }),
      (t[12] = y),
      (t[13] = b));
  else b = t[13];
  let _ = b,
    S = serverNames.length,
    A;
  if (t[14] !== serverNames.length)
    ((A = bn(serverNames.length, "server")), (t[14] = serverNames.length), (t[15] = A));
  else A = t[15];
  let v = `Found ${S} MCP ${A} in Claude Desktop.`,
    C;
  if (t[16] !== collisions.length)
    ((C =
      collisions.length > 0 &&
      v3.jsx(w, {
        color: "warning",
        children:
          "Note: Some servers already exist with the same name. If selected, they will be imported with a numbered suffix.",
      })),
      (t[16] = collisions.length),
      (t[17] = C));
  else C = t[17];
  let x;
  if (t[18] === Symbol.for("react.memo_cache_sentinel"))
    ((x = v3.jsx(w, {
      children: "Please select the servers you want to import:",
    })),
      (t[18] = x));
  else x = t[18];
  let I, k;
  if (t[19] !== collisions || t[20] !== serverNames)
    ((I = serverNames.map((M) => ({
      label: `${M}${collisions.includes(M) ? " (already exists)" : ""}`,
      value: M,
    }))),
      (k = serverNames.filter((M) => !collisions.includes(M))),
      (t[19] = collisions),
      (t[20] = serverNames),
      (t[21] = I),
      (t[22] = k));
  else ((I = t[21]), (k = t[22]));
  let D;
  if (t[23] !== _ || t[24] !== m || t[25] !== I || t[26] !== k)
    ((D = v3.jsx(MOe, {
      options: I,
      defaultValue: k,
      onSubmit: m,
      onCancel: _,
      hideIndexes: true,
    })),
      (t[23] = _),
      (t[24] = m),
      (t[25] = I),
      (t[26] = k),
      (t[27] = D));
  else D = t[27];
  let P;
  if (t[28] !== _ || t[29] !== v || t[30] !== C || t[31] !== D)
    ((P = v3.jsxs(zn, {
      title: "Import MCP Servers from Claude Desktop",
      subtitle: v,
      color: "success",
      onCancel: _,
      hideInputGuide: true,
      children: [C, x, D],
    })),
      (t[28] = _),
      (t[29] = v),
      (t[30] = C),
      (t[31] = D),
      (t[32] = P));
  else P = t[32];
  let O;
  if (t[33] === Symbol.for("react.memo_cache_sentinel"))
    ((O = v3.jsx(U, {
      paddingX: 1,
      children: v3.jsx(w, {
        dimColor: true,
        italic: true,
        children: v3.jsxs(Tn, {
          children: [
            v3.jsx(ht, {
              chord: "space",
              action: "select",
            }),
            v3.jsx(ht, {
              chord: "enter",
              action: "confirm",
            }),
            v3.jsx(mr, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel",
            }),
          ],
        }),
      }),
    })),
      (t[33] = O));
  else O = t[33];
  let L;
  if (t[34] !== P)
    ((L = v3.jsxs(v3.Fragment, {
      children: [P, O],
    })),
      (t[34] = P),
      (t[35] = L));
  else L = t[35];
  return L;
}
var pdc, Gcr, v3;
