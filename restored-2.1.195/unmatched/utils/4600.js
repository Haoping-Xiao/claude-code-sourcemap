// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cKe
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cKe = E(() => {
  Jt();
});
function kfe(e) {
  if (!e) return uz;
  return MOo + e + xPl + uz;
}
function kPl(e) {
  let t = e.indexOf(MOo);
  if (t < 0) return;
  let n = t + MOo.length,
    r = e.indexOf(xPl, n);
  if (r < 0) return;
  return e.subarray(n, r).toString("utf8");
}
function POo() {
  return H.string().refine(nAe, "remote IPC path");
}
var hp = 1,
  d7t = 1,
  IOe,
  uz = "\x1B_cc-daemon-detach\x1B\\",
  xPl = "\x1B\\",
  MOo = "\x1B_cc-detach-msg;",
  Xer,
  eEt,
  p7t,
  f7t,
  k0f,
  RPl,
  LPl;