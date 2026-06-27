// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nOe
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nOe = E(() => {
  dn();
  je();
  At();
  Ide();
  Cde();
  $Po();
});
async function lHe(e, t) {
  let n = Rt(),
    r = ML() ?? em();
  if (t === "user" || t === "hook") await Aq(n, e, r, t);else DQ(n, e);
  let o = bS()?.bridgeSessionId;
  if (o) {
    let i = afe();
    Promise.resolve().then(() => (nOe(), Dze)).then(({
      updateBridgeSessionTitle: a
    }) => a(o, e, {
      baseUrl: lfe(),
      getAccessToken: i ? () => i : void 0
    }).catch(() => {}));
  }
  await Pze(n, e, r, t);
  let s = Ju();
  if (s?.kind === "ccr" && s.sessionId) {
    let i = s.sessionId;
    Promise.resolve().then(() => (Cv(), sce)).then(({
      updateSessionTitle: a
    }) => a(i, e));
  }
  await JY(e);
}