// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZCo
// matched 2.1.88 source: src/components/AgentProgressLine.tsx
// class=modified (alt of src/components/AgentProgressLine.tsx)  jaccard=0.0547  score=0.1009  fileCov=0.1068
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ZCo] deps: hooks/useTerminalSize.ts, utils/messages.ts
((Hil = R(lt(), 1)), (P8t = R(se(), 1)));
function qof(e) {
  if (!e.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/))
    return {
      cleanedStderr: e,
    };
  return {
    cleanedStderr: sjn(e).trim(),
  };
}
function Vof(e) {
  let t = e.match(Til);
  if (!t)
    return {
      cleanedStderr: e,
      cwdResetWarning: null,
    };
  let n = t[1] ?? null;
  return {
    cleanedStderr: e.replace(Til, "").trim(),
    cwdResetWarning: n,
  };
}
function AgentProgressLine(t0) {
  let t = vil.c(34),
    { content: n, verbose: r, timeoutMs: o } = t0,
    {
      stdout: s,
      stderr: i,
      isImage: a,
      returnCodeInterpretation: l,
      noOutputExpected: c,
      backgroundTaskId: u,
    } = n,
    d = s === void 0 ? "" : s,
    p = i === void 0 ? "" : i,
    f,
    m,
    g,
    h,
    y,
    b,
    _;
  if (t[0] !== a || t[1] !== p || t[2] !== d || t[3] !== r) {
    _ = Symbol.for("react.early_return_sentinel");
    e: {
      let { cleanedStderr: x } = qof(p);
      if ((({ cleanedStderr: g, cwdResetWarning: m } = Vof(x)), a)) {
        let I;
        if (t[11] === Symbol.for("react.memo_cache_sentinel"))
          ((I = TN.jsx(qn, {
            height: 1,
            children: TN.jsx(w, {
              dimColor: true,
              children: "[Image data detected and sent to Claude]",
            }),
          })),
            (t[11] = I));
        else I = t[11];
        _ = I;
        break e;
      }
      if (((f = U), (h = "column"), t[12] !== d || t[13] !== r))
        ((y =
          d !== ""
            ? TN.jsx(J1, {
                content: d,
                verbose: r,
              })
            : null),
          (t[12] = d),
          (t[13] = r),
          (t[14] = y));
      else y = t[14];
      b =
        g.trim() !== ""
          ? TN.jsx(J1, {
              content: g,
              verbose: r,
              isError: true,
            })
          : null;
    }
    ((t[0] = a),
      (t[1] = p),
      (t[2] = d),
      (t[3] = r),
      (t[4] = f),
      (t[5] = m),
      (t[6] = g),
      (t[7] = h),
      (t[8] = y),
      (t[9] = b),
      (t[10] = _));
  } else ((f = t[4]), (m = t[5]), (g = t[6]), (h = t[7]), (y = t[8]), (b = t[9]), (_ = t[10]));
  if (_ !== Symbol.for("react.early_return_sentinel")) return _;
  let S;
  if (t[15] !== m)
    ((S = m
      ? TN.jsx(qn, {
          children: TN.jsx(w, {
            dimColor: true,
            children: m,
          }),
        })
      : null),
      (t[15] = m),
      (t[16] = S));
  else S = t[16];
  let A;
  if (t[17] !== u || t[18] !== m || t[19] !== c || t[20] !== l || t[21] !== g || t[22] !== d)
    ((A =
      d === "" && g.trim() === "" && !m
        ? TN.jsx(qn, {
            height: 1,
            children: TN.jsx(w, {
              dimColor: true,
              children: u
                ? TN.jsxs(TN.Fragment, {
                    children: [
                      "Running in the background",
                      " ",
                      TN.jsx(ht, {
                        chord: "down",
                        action: "manage",
                        parens: true,
                      }),
                    ],
                  })
                : l || (c ? "Done" : "(No output)"),
            }),
          })
        : null),
      (t[17] = u),
      (t[18] = m),
      (t[19] = c),
      (t[20] = l),
      (t[21] = g),
      (t[22] = d),
      (t[23] = A));
  else A = t[23];
  let v;
  if (t[24] !== o)
    ((v =
      o &&
      TN.jsx(qn, {
        children: TN.jsx(Vqe, {
          timeoutMs: o,
        }),
      })),
      (t[24] = o),
      (t[25] = v));
  else v = t[25];
  let C;
  if (
    t[26] !== f ||
    t[27] !== v ||
    t[28] !== h ||
    t[29] !== y ||
    t[30] !== b ||
    t[31] !== S ||
    t[32] !== A
  )
    ((C = TN.jsxs(f, {
      flexDirection: h,
      children: [y, b, S, A, v],
    })),
      (t[26] = f),
      (t[27] = v),
      (t[28] = h),
      (t[29] = y),
      (t[30] = b),
      (t[31] = S),
      (t[32] = A),
      (t[33] = C));
  else C = t[33];
  return C;
}
var vil, TN, Til;
