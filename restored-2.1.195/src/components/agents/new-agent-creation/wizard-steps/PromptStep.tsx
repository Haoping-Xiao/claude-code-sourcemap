// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n7l
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/PromptStep.tsx
// class=modified  jaccard=0.2555  score=0.3812  fileCov=0.4365
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var n7l = E(() => {
  Cc();
  Bs();
  Ko();
  wb();
  vH();
  a4o();
  ((e7l = R(lt(), 1)), (R1e = R(se(), 1)));
});
function o7l() {
  let e = r7l.c(20),
    { goNext: t, goBack: n, updateWizardData: r, wizardData: o } = Eu(),
    [s, i] = Wsr.useState(o.systemPrompt || ""),
    [a, l] = Wsr.useState(s.length),
    [c, u] = Wsr.useState(null),
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
      let C = await K$(s);
      if (C.content !== null) (i(C.content), l(C.content.length));
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
  if (e[4] !== t || e[5] !== s || e[6] !== r)
    ((g = () => {
      let C = s.trim();
      if (!C) {
        u("System prompt is required");
        return;
      }
      (u(null),
        r({
          systemPrompt: C,
        }),
        t());
    }),
      (e[4] = t),
      (e[5] = s),
      (e[6] = r),
      (e[7] = g));
  else g = e[7];
  let h = g,
    y;
  if (e[8] === Symbol.for("react.memo_cache_sentinel"))
    ((y = H3.jsxs(Tn, {
      children: [
        H3.jsx(w, {
          children: "Type to enter text",
        }),
        H3.jsx(ht, {
          chord: "enter",
          action: "continue",
        }),
        H3.jsx(mr, {
          action: "chat:externalEditor",
          context: "Chat",
          fallback: "ctrl+g",
          description: "open in editor",
        }),
        H3.jsx(mr, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (e[8] = y));
  else y = e[8];
  let b, _;
  if (e[9] === Symbol.for("react.memo_cache_sentinel"))
    ((b = H3.jsx(w, {
      children: "Enter the system prompt for your agent:",
    })),
      (_ = H3.jsx(w, {
        dimColor: true,
        children: "Be comprehensive for best results",
      })),
      (e[9] = b),
      (e[10] = _));
  else ((b = e[9]), (_ = e[10]));
  let S;
  if (e[11] !== a || e[12] !== h || e[13] !== s)
    ((S = H3.jsx(U, {
      marginTop: 1,
      children: H3.jsx(Ta, {
        value: s,
        onChange: i,
        onSubmit: h,
        placeholder: "You are a helpful code reviewer who...",
        columns: 80,
        cursorOffset: a,
        onChangeCursorOffset: l,
        focus: true,
        showCursor: true,
      }),
    })),
      (e[11] = a),
      (e[12] = h),
      (e[13] = s),
      (e[14] = S));
  else S = e[14];
  let A;
  if (e[15] !== c)
    ((A =
      c &&
      H3.jsx(U, {
        marginTop: 1,
        children: H3.jsx(Va, {
          error: c,
        }),
      })),
      (e[15] = c),
      (e[16] = A));
  else A = e[16];
  let v;
  if (e[17] !== S || e[18] !== A)
    ((v = H3.jsx(Pc, {
      subtitle: "System prompt",
      footerText: y,
      children: H3.jsxs(U, {
        flexDirection: "column",
        children: [b, _, S, A],
      }),
    })),
      (e[17] = S),
      (e[18] = A),
      (e[19] = v));
  else v = e[19];
  return v;
}
var r7l, Wsr, H3;
