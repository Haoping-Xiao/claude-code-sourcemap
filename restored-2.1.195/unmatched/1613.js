// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mMt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mMt = E(() => {
  UHn();
  F4r = U4r;
});
function gMt() {}
function jHn(e, t, n) {
  if (!t || kdi[e] > kdi[n]) return gMt;else return t[e].bind(t);
}
function GHn(e) {
  let t = e.logger,
    n = e.logLevel ?? "off";
  if (!t) return tgd;
  let r = Rdi.get(t);
  if (r && r[0] === n) return r[1];
  let o = {
    error: jHn("error", t, n),
    warn: jHn("warn", t, n),
    info: jHn("info", t, n),
    debug: jHn("debug", t, n)
  };
  return Rdi.set(t, [n, o]), o;
}
var kdi, tgd, Rdi;