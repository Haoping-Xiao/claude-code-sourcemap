// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YWl
// matched 2.1.88 source: src/components/LogoV2/FeedColumn.tsx
// class=modified  jaccard=0.2688  score=0.485  fileCov=0.3761
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module YWl] deps: marked/lib/marked.esm.js, hooks/useTerminalSize.ts, utils/profilerBase.ts, components/PromptInput/PromptInputFooterSuggestions.tsx
((VWl = R(lt(), 1)), (VN = R(se(), 1)));
function FeedColumn(t0) {
  let t = XWl.c(10),
    { feeds: feeds, maxWidth: r } = t0,
    o;
  if (t[0] !== feeds) {
    let c = feeds.map(Vjf);
    ((o = Math.max(...c)), (t[0] = feeds), (t[1] = o));
  } else o = t[1];
  let i = Math.min(o, r),
    a;
  if (t[2] !== i || t[3] !== feeds) {
    let c;
    if (t[5] !== i || t[6] !== feeds.length)
      ((c = (u, d) =>
        mAt.jsxs(
          JWl.Fragment,
          {
            children: [
              mAt.jsx(KWl, {
                config: u,
                actualWidth: i,
              }),
              d < feeds.length - 1 &&
                mAt.jsx(qh, {
                  color: "claude",
                  width: i,
                }),
            ],
          },
          d,
        )),
        (t[5] = i),
        (t[6] = feeds.length),
        (t[7] = c));
    else c = t[7];
    ((a = feeds.map(c)), (t[2] = i), (t[3] = feeds), (t[4] = a));
  } else a = t[4];
  let l;
  if (t[8] !== a)
    ((l = mAt.jsx(U, {
      flexDirection: "column",
      children: a,
    })),
      (t[8] = a),
      (t[9] = l));
  else l = t[9];
  return l;
}
function Vjf(e) {
  return zWl(e);
}
var XWl, JWl, mAt;
