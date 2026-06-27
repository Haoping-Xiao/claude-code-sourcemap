// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pyt
// matched 2.1.88 source: src/components/messages/AdvisorMessage.tsx
// class=modified  jaccard=0.3305  score=0.4827  fileCov=0.5118
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Pyt] deps: Xa, lzn, Xol, Ye
((czn = R(rt(), 1)), (eCo = R(se(), 1)));
function AdvisorMessage(t0) {
  let t = Jol.c(30),
    {
      block: n,
      addMargin: r,
      resolvedToolUseIDs: o,
      erroredToolUseIDs: s,
      shouldAnimate: i,
      verbose: a,
      advisorModel: l,
    } = t0;
  if (n.type === "server_tool_use") {
    let d;
    if (t[0] !== n.input)
      ((d = n.input && Object.keys(n.input).length > 0 ? De(n.input) : null),
        (t[0] = n.input),
        (t[1] = d));
    else d = t[1];
    let p = d,
      f = r ? 1 : 0,
      m;
    if (t[2] !== n.id || t[3] !== o) ((m = o.has(n.id)), (t[2] = n.id), (t[3] = o), (t[4] = m));
    else m = t[4];
    let g = !m,
      h;
    if (t[5] !== n.id || t[6] !== s) ((h = s.has(n.id)), (t[5] = n.id), (t[6] = s), (t[7] = h));
    else h = t[7];
    let y;
    if (t[8] !== i || t[9] !== g || t[10] !== h)
      ((y = aq.jsx(koe, {
        shouldAnimate: i,
        isUnresolved: g,
        isError: h,
      })),
        (t[8] = i),
        (t[9] = g),
        (t[10] = h),
        (t[11] = y));
    else y = t[11];
    let b;
    if (t[12] === Symbol.for("react.memo_cache_sentinel"))
      ((b = aq.jsx(w, {
        bold: true,
        children: "Advising",
      })),
        (t[12] = b));
    else b = t[12];
    let _;
    if (t[13] !== l)
      ((_ = l
        ? aq.jsxs(w, {
            dimColor: true,
            children: [" using ", wp(l)],
          })
        : null),
        (t[13] = l),
        (t[14] = _));
    else _ = t[14];
    let S;
    if (t[15] !== p)
      ((S = p
        ? aq.jsxs(w, {
            dimColor: true,
            children: [" \xB7 ", p],
          })
        : null),
        (t[15] = p),
        (t[16] = S));
    else S = t[16];
    let A;
    if (t[17] !== f || t[18] !== y || t[19] !== _ || t[20] !== S)
      ((A = aq.jsxs(U, {
        marginTop: f,
        paddingRight: 2,
        flexDirection: "row",
        children: [y, b, _, S],
      })),
        (t[17] = f),
        (t[18] = y),
        (t[19] = _),
        (t[20] = S),
        (t[21] = A));
    else A = t[21];
    return A;
  }
  let c;
  e: switch (n.content.type) {
    case "advisor_tool_result_error": {
      let d;
      if (t[22] !== n.content.error_code)
        ((d = aq.jsxs(w, {
          color: "error",
          children: ["Advisor unavailable (", n.content.error_code, ")"],
        })),
          (t[22] = n.content.error_code),
          (t[23] = d));
      else d = t[23];
      c = d;
      break e;
    }
    case "advisor_result": {
      let d;
      if (t[24] !== n.content.text || t[25] !== a)
        ((d = a
          ? aq.jsx(w, {
              dimColor: true,
              children: n.content.text,
            })
          : aq.jsxs(w, {
              dimColor: true,
              children: [
                nt.tick,
                " Advisor has reviewed the conversation and will apply the feedback ",
                aq.jsx(NI, {}),
              ],
            })),
          (t[24] = n.content.text),
          (t[25] = a),
          (t[26] = d));
      else d = t[26];
      c = d;
      break e;
    }
    case "advisor_redacted_result": {
      let d;
      if (t[27] === Symbol.for("react.memo_cache_sentinel"))
        ((d = aq.jsxs(w, {
          dimColor: true,
          children: [nt.tick, " Advisor has reviewed the conversation and will apply the feedback"],
        })),
          (t[27] = d));
      else d = t[27];
      c = d;
    }
  }
  let u;
  if (t[28] !== c)
    ((u = aq.jsx(U, {
      paddingRight: 2,
      children: aq.jsx(qn, {
        children: c,
      }),
    })),
      (t[28] = c),
      (t[29] = u));
  else u = t[29];
  return u;
}
var Jol, aq;
