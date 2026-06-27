// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qzn
// matched 2.1.88 source: src/components/messages/UserBashOutputMessage.tsx
// class=modified  jaccard=0.6113  score=1  fileCov=0.6113
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var qzn = E(() => {
  Ko();
  ql();
  kLe();
  ljn();
  Ye();
  ((vil = R(lt(), 1)), (TN = R(se(), 1)), (Til = /(?:^|\n)(Shell cwd was reset to .+)$/));
});
function Cil(e) {
  let t = wil.c(10),
    { content: n, verbose: r } = e,
    o;
  if (t[0] !== n) {
    let d = xl(n, "bash-stdout") ?? "";
    ((o = xl(d, "persisted-output") ?? Yao(d)), (t[0] = n), (t[1] = o));
  } else o = t[1];
  let s = o,
    i;
  if (t[2] !== n) ((i = Yao(xl(n, "bash-stderr") ?? "")), (t[2] = n), (t[3] = i));
  else i = t[3];
  let a = i,
    l;
  if (t[4] !== a || t[5] !== s)
    ((l = {
      stdout: s,
      stderr: a,
    }),
      (t[4] = a),
      (t[5] = s),
      (t[6] = l));
  else l = t[6];
  let c = !!r,
    u;
  if (t[7] !== l || t[8] !== c)
    ((u = Iil.jsx(l6e, {
      content: l,
      verbose: c,
    })),
      (t[7] = l),
      (t[8] = c),
      (t[9] = u));
  else u = t[9];
  return u;
}
var wil, Iil;
