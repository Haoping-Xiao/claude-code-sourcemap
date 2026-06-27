// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xoe
// matched 2.1.88 source: src/components/AgentProgressLine.tsx
// class=modified  jaccard=0.2867  score=0.5812  fileCov=0.3614
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xoe = E(() => {
  Xa();
  Ye();
  ((_8t = R(lt(), 1)),
    (Ioe = R(rt(), 1)),
    (iq = R(se(), 1)),
    (Jnf = {
      branch: FO.branch,
      last: FO.last,
      pipe: FO.pipe,
      space: "",
    }));
  ((Xwo = Ioe.createContext({
    variant: "outline",
    ancestors: [],
  })),
    (Jwo = Ioe.createContext(true)));
  hs = Object.assign(Znf, {
    Node: erf,
    Group: trf,
  });
});
function Bol(e) {
  let t = Nol.c(32),
    {
      agentType: n,
      description: r,
      name: o,
      descriptionColor: s,
      taskDescription: i,
      toolUseCount: a,
      tokens: l,
      color: c,
      isLast: u,
      isResolved: d,
      isAsync: p,
      lastToolInfo: f,
      hideType: m,
    } = e,
    g = p === void 0 ? false : p,
    h = m === void 0 ? false : m,
    y = g && d,
    b;
  if (t[0] !== y || t[1] !== d || t[2] !== f || t[3] !== i)
    ((b = () => {
      if (!d) return f || "Initializing\u2026";
      if (y) return i ?? "Running in the background";
      return "Done";
    }),
      (t[0] = y),
      (t[1] = d),
      (t[2] = f),
      (t[3] = i),
      (t[4] = b));
  else b = t[4];
  let _ = b,
    S = u ? "last" : "branch",
    A;
  if (t[5] !== S) ((A = [S]), (t[5] = S), (t[6] = A));
  else A = t[6];
  let v = !d,
    C;
  if (t[7] !== n || t[8] !== c || t[9] !== r || t[10] !== s || t[11] !== h || t[12] !== o)
    ((C = h
      ? Ck.jsxs(Ck.Fragment, {
          children: [
            Ck.jsx(w, {
              bold: true,
              children: o ?? r ?? n,
            }),
            o &&
              r &&
              Ck.jsxs(w, {
                dimColor: true,
                children: [": ", r],
              }),
          ],
        })
      : Ck.jsxs(Ck.Fragment, {
          children: [
            Ck.jsx(pE, {
              color: c,
              bold: true,
              children: n,
            }),
            r &&
              Ck.jsxs(Ck.Fragment, {
                children: [
                  " (",
                  Ck.jsx(pE, {
                    color: s,
                    children: r,
                  }),
                  ")",
                ],
              }),
          ],
        })),
      (t[7] = n),
      (t[8] = c),
      (t[9] = r),
      (t[10] = s),
      (t[11] = h),
      (t[12] = o),
      (t[13] = C));
  else C = t[13];
  let x;
  if (t[14] !== y || t[15] !== l || t[16] !== a)
    ((x =
      !y &&
      Ck.jsxs(Ck.Fragment, {
        children: [
          " \xB7 ",
          a,
          " tool ",
          a === 1 ? "use" : "uses",
          l !== null &&
            Ck.jsxs(Ck.Fragment, {
              children: [" \xB7 ", ou(l), " tokens"],
            }),
        ],
      })),
      (t[14] = y),
      (t[15] = l),
      (t[16] = a),
      (t[17] = x));
  else x = t[17];
  let I;
  if (t[18] !== v || t[19] !== C || t[20] !== x)
    ((I = Ck.jsxs(w, {
      dimColor: v,
      children: [C, x],
    })),
      (t[18] = v),
      (t[19] = C),
      (t[20] = x),
      (t[21] = I));
  else I = t[21];
  let k;
  if (t[22] !== A || t[23] !== I)
    ((k = Ck.jsx(azn, {
      connectors: A,
      children: I,
    })),
      (t[22] = A),
      (t[23] = I),
      (t[24] = k));
  else k = t[24];
  let D;
  if (t[25] !== _ || t[26] !== y || t[27] !== u)
    ((D =
      !y &&
      Ck.jsx(azn, {
        connectors: [u ? "space" : "pipe"],
        children: Ck.jsxs(w, {
          dimColor: true,
          children: ["\u23BF  ", _()],
        }),
      })),
      (t[25] = _),
      (t[26] = y),
      (t[27] = u),
      (t[28] = D));
  else D = t[28];
  let P;
  if (t[29] !== k || t[30] !== D)
    ((P = Ck.jsxs(U, {
      flexDirection: "column",
      paddingLeft: 3,
      children: [k, D],
    })),
      (t[29] = k),
      (t[30] = D),
      (t[31] = P));
  else P = t[31];
  return P;
}
var Nol, Ck;
