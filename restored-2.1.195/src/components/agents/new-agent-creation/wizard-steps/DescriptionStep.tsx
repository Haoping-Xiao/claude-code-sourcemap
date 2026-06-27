// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Yl
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/DescriptionStep.tsx
// class=modified  jaccard=0.2721  score=0.409  fileCov=0.4484
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $Yl] deps: iu, kt, uo, ty, y3, wb, VAt, DYl
((JAt = R(rt(), 1)), (MYl = R(se(), 1)));
function DescriptionStep() {
  let e = OYl.c(18),
    { goNext: t, goBack: n, updateWizardData: r, wizardData: o } = Eu(),
    [s, i] = Gsr.useState(o.whenToUse || ""),
    [a, l] = Gsr.useState(s.length),
    [c, u] = Gsr.useState(null),
    d;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((d = {
      context: "Settings",
    }),
      (e[0] = d));
  else d = e[0];
  $r("confirm:no", n, d);
  let p;
  if (e[1] !== s)
    ((p = async () => {
      let v = await K$(s);
      if (v.content !== null) (i(v.content), l(v.content.length));
    }),
      (e[1] = s),
      (e[2] = p));
  else p = e[2];
  let f = p,
    m;
  if (e[3] === Symbol.for("react.memo_cache_sentinel"))
    ((m = {
      context: "Chat",
    }),
      (e[3] = m));
  else m = e[3];
  $r("chat:externalEditor", f, m);
  let g;
  if (e[4] !== t || e[5] !== r)
    ((g = (v) => {
      let C = v.trim();
      if (!C) {
        u("Description is required");
        return;
      }
      (u(null),
        r({
          whenToUse: C,
        }),
        t());
    }),
      (e[4] = t),
      (e[5] = r),
      (e[6] = g));
  else g = e[6];
  let h = g,
    y;
  if (e[7] === Symbol.for("react.memo_cache_sentinel"))
    ((y = Kq.jsxs(Tn, {
      children: [
        Kq.jsx(w, {
          children: "Type to enter text",
        }),
        Kq.jsx(ht, {
          chord: "enter",
          action: "continue",
        }),
        Kq.jsx(mr, {
          action: "chat:externalEditor",
          context: "Chat",
          fallback: "ctrl+g",
          description: "open in editor",
        }),
        Kq.jsx(mr, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (e[7] = y));
  else y = e[7];
  let b;
  if (e[8] === Symbol.for("react.memo_cache_sentinel"))
    ((b = Kq.jsx(w, {
      children: "When should Claude use this agent?",
    })),
      (e[8] = b));
  else b = e[8];
  let _;
  if (e[9] !== a || e[10] !== h || e[11] !== s)
    ((_ = Kq.jsx(U, {
      marginTop: 1,
      children: Kq.jsx(Ta, {
        value: s,
        onChange: i,
        onSubmit: h,
        placeholder: "e.g., use this agent after you're done writing code...",
        columns: 80,
        cursorOffset: a,
        onChangeCursorOffset: l,
        focus: true,
        showCursor: true,
      }),
    })),
      (e[9] = a),
      (e[10] = h),
      (e[11] = s),
      (e[12] = _));
  else _ = e[12];
  let S;
  if (e[13] !== c)
    ((S =
      c &&
      Kq.jsx(U, {
        marginTop: 1,
        children: Kq.jsx(Va, {
          error: c,
        }),
      })),
      (e[13] = c),
      (e[14] = S));
  else S = e[14];
  let A;
  if (e[15] !== _ || e[16] !== S)
    ((A = Kq.jsx(Pc, {
      subtitle: "Description (tell Claude when to use this agent)",
      footerText: y,
      children: Kq.jsxs(U, {
        flexDirection: "column",
        children: [b, _, S],
      }),
    })),
      (e[15] = _),
      (e[16] = S),
      (e[17] = A));
  else A = e[17];
  return A;
}
var OYl, Gsr, Kq;
