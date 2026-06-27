// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SRc
// matched 2.1.88 source: src/components/FeedbackSurvey/TranscriptSharePrompt.tsx
// class=modified  jaccard=0.2867  score=0.4954  fileCov=0.405
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SRc] deps: hooks/useTerminalSize.ts, context/notifications.tsx, services/teamMemorySync/secretScanner.ts, components/tasks/RemoteSessionDetailDialog.tsx
((_Rc = R(lt(), 1)), (M7e = R(se(), 1)));
function TranscriptSharePrompt(t0) {
  let t = ARc.c(13),
    { onSelect: n, inputValue: r, setInputValue: o } = t0,
    s;
  if (t[0] !== n)
    ((s = (d) => {
      let p = d.toLowerCase();
      if (mfr(p)) n(ERc[p]);
    }),
      (t[0] = n),
      (t[1] = s));
  else s = t[1];
  let i;
  if (t[2] !== r || t[3] !== o || t[4] !== s)
    ((i = {
      inputValue: r,
      setInputValue: o,
      isValidDigit: ywm,
      onDigit: s,
    }),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s),
      (t[5] = i));
  else i = t[5];
  lvt(i);
  let a;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((a = tK.jsxs(U, {
      children: [
        tK.jsxs(w, {
          color: "ansi:cyan",
          children: [gc, " "],
        }),
        tK.jsx(w, {
          bold: true,
          children: "Can Anthropic look at your session transcript to help us improve Claude Code?",
        }),
      ],
    })),
      (t[6] = a));
  else a = t[6];
  let l;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((l = tK.jsx(U, {
      marginLeft: 2,
      children: tK.jsx(qL, {
        url: "https://code.claude.com/docs/en/data-usage#session-quality-surveys",
      }),
    })),
      (t[7] = l));
  else l = t[7];
  let c;
  if (t[8] !== n || t[9] !== o)
    ((c = hwm.map((d) => {
      let { key: p, label: f, width: m } = d;
      return tK.jsx(
        U,
        {
          width: m,
          children: tK.jsx(mat, {
            tabIndex: -1,
            onAction: () => {
              (o(""), n(ERc[p]));
            },
            children: (g) => {
              let { hovered: h } = g;
              return tK.jsxs(w, {
                backgroundColor: h ? "userMessageBackgroundHover" : void 0,
                children: [
                  tK.jsx(w, {
                    color: "ansi:cyan",
                    children: p,
                  }),
                  ": ",
                  f,
                ],
              });
            },
          }),
        },
        p,
      );
    })),
      (t[8] = n),
      (t[9] = o),
      (t[10] = c));
  else c = t[10];
  let u;
  if (t[11] !== c)
    ((u = tK.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        a,
        l,
        tK.jsx(U, {
          marginLeft: 2,
          children: c,
        }),
      ],
    })),
      (t[11] = c),
      (t[12] = u));
  else u = t[12];
  return u;
}
function ywm(e) {
  return mfr(e.toLowerCase());
}
var ARc,
  tK,
  gwm,
  ERc,
  hwm,
  mfr = (e) => gwm.includes(e);
