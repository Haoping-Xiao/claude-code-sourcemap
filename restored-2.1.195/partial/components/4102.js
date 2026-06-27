// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ECo
// matched 2.1.88 source: src/commands/extra-usage/extra-usage.tsx
// class=partial  jaccard=0.1898  score=0.2798  fileCov=0.371
// note: low-confidence suggestion: src/commands/extra-usage/extra-usage.tsx; dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var ECo = E(() => {
  si();
  Vl();
  Bs();
  Fy();
  vi();
  Ko();
  CH();
  RLe();
  WLn();
  bCo();
  Mg();
  _i();
  Ye();
  ps();
  kt();
  uut();
  mSe();
  ole();
  vy();
  er();
  wAe();
  je();
  At();
  vn();
  NX();
  Ao();
  lq = R(lt(), 1), mg = R(rt(), 1), is = R(se(), 1);
});
var HCo = {};
_t(HCo, {
  call: () => call
});
async function call(e, t) {
  if (Psl && I8t()) return ACo.jsx(Psl, {
    onDone: e
  });
  let n = await Fyt();
  if (n.type === "message") return e(n.value), null;
  let r = Di();
  if (r === "team" || r === "enterprise") return e(n.opened ? `Opened ${n.url} in your browser to manage usage credits for your organization.` : `Visit ${n.url} to manage usage credits for your organization.`), null;
  let o = Lc(),
    s = o && {
      accountUuid: o.accountUuid,
      organizationUuid: o.organizationUuid
    };
  return ACo.jsx(BMe, {
    startingMessage: "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
    onDone: async i => {
      let a = await NMe(t, i, {
        previousAccount: s
      });
      e(i ? a.bridgeDisconnected ? `Login successful. ${Roe}` : "Login successful" : "Login interrupted", i ? Uyt(t, a) : void 0);
    }
  });
}
var ACo, Psl;