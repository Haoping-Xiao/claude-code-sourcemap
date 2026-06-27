// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l7l
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/TypeStep.tsx
// class=modified  jaccard=0.2013  score=0.3215  fileCov=0.3501
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module l7l] deps: Cc, Bs, Ko, wb, vH, l4o
((i7l = R(lt(), 1)), (L1e = R(se(), 1)));
function u7l(e) {
  let t = c7l.c(15),
    { goNext: n, goBack: r, updateWizardData: o, wizardData: s } = Eu(),
    [i, a] = qsr.useState(s.agentType || ""),
    [l, c] = qsr.useState(null),
    [u, d] = qsr.useState(i.length),
    p;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((p = {
      context: "Settings",
    }),
      (t[0] = p));
  else p = t[0];
  $r("confirm:no", r, p);
  let f;
  if (t[1] !== n || t[2] !== o)
    ((f = (S) => {
      let A = S.trim(),
        v = u4o(A);
      if (v) {
        c(v);
        return;
      }
      (c(null),
        o({
          agentType: A,
        }),
        n());
    }),
      (t[1] = n),
      (t[2] = o),
      (t[3] = f));
  else f = t[3];
  let m = f,
    g;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((g = wz.jsxs(Tn, {
      children: [
        wz.jsx(w, {
          children: "Type to enter text",
        }),
        wz.jsx(ht, {
          chord: "enter",
          action: "continue",
        }),
        wz.jsx(mr, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (t[4] = g));
  else g = t[4];
  let h;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((h = wz.jsx(w, {
      children: "Enter a unique identifier for your agent:",
    })),
      (t[5] = h));
  else h = t[5];
  let y;
  if (t[6] !== i || t[7] !== u || t[8] !== m)
    ((y = wz.jsx(U, {
      marginTop: 1,
      children: wz.jsx(Ta, {
        value: i,
        onChange: a,
        onSubmit: m,
        placeholder: "e.g., test-runner, tech-lead, etc",
        columns: 60,
        cursorOffset: u,
        onChangeCursorOffset: d,
        focus: true,
        showCursor: true,
      }),
    })),
      (t[6] = i),
      (t[7] = u),
      (t[8] = m),
      (t[9] = y));
  else y = t[9];
  let b;
  if (t[10] !== l)
    ((b =
      l &&
      wz.jsx(U, {
        marginTop: 1,
        children: wz.jsx(Va, {
          error: l,
        }),
      })),
      (t[10] = l),
      (t[11] = b));
  else b = t[11];
  let _;
  if (t[12] !== y || t[13] !== b)
    ((_ = wz.jsx(Pc, {
      subtitle: "Agent type (identifier)",
      footerText: g,
      children: wz.jsxs(U, {
        flexDirection: "column",
        children: [h, y, b],
      }),
    })),
      (t[12] = y),
      (t[13] = b),
      (t[14] = _));
  else _ = t[14];
  return _;
}
var c7l, qsr, wz;
