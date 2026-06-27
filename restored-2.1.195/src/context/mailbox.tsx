// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K1a
// matched 2.1.88 source: src/context/mailbox.tsx
// class=modified  jaccard=0.5092  score=1  fileCov=0.5092
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var K1a = E(() => {
  ih();
});
function J1a(e) {
  let t = Y1a.c(3),
    { children: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((r = new jho()), (t[0] = r));
  else r = t[0];
  let o = r,
    s;
  if (t[1] !== n)
    ((s = Z1a.jsx(X1a.Provider, {
      value: o,
      children: n,
    })),
      (t[1] = n),
      (t[2] = s));
  else s = t[2];
  return s;
}
function Q1a() {
  let e = _4n.useContext(X1a);
  if (!e) throw Error("useMailbox must be used within a MailboxProvider");
  return e;
}
var Y1a, _4n, Z1a, X1a;
