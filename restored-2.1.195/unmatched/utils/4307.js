// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cAe
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cAe = E(() => {
  ft();
  dn();
  je();
  Is();
  qJ();
  rhl();
  E0o();
  ghl();
  NDe();
  vQ = Hhl();
});
async function R0o() {
  return (await A$e()).backend;
}
async function Chl() {
  let {
    isInsideTmux: e
  } = await Promise.resolve().then(() => (qJ(), AHo));
  return e();
}
async function Ihl(e, t) {
  return (await R0o()).createTeammatePaneInSwarmView(e, t);
}
async function xhl(e, t = !1) {
  return (await R0o()).enablePaneBorderStatus(e, t);
}
async function khl(e, t, n = !1) {
  return (await R0o()).sendCommandToPane(e, t, n);
}