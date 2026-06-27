// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ECo
// matched 2.1.88 source: src/cli/handlers/auth.ts
// class=modified (alt of src/cli/handlers/auth.ts)  jaccard=0.0261  score=0.1742  fileCov=0.0298
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module ECo] deps: si, Vl, Bs, Fy, vi, Ko, CH, RLe, WLn, bCo, Mg, _i, Ye, ps, kt, uut, mSe, ole, vy, er, wAe, je, At, vn, NX, Ao
((lq = R(lt(), 1)), (mg = R(rt(), 1)), (is = R(se(), 1)));
var HCo = {};
async function call(e, t) {
  if (Psl && I8t())
    return ACo.jsx(Psl, {
      onDone: e,
    });
  let n = await Fyt();
  if (n.type === "message") return (e(n.value), null);
  let r = Di();
  if (r === "team" || r === "enterprise")
    return (
      e(
        n.opened
          ? `Opened ${n.url} in your browser to manage usage credits for your organization.`
          : `Visit ${n.url} to manage usage credits for your organization.`,
      ),
      null
    );
  let o = Lc(),
    s = o && {
      accountUuid: o.accountUuid,
      organizationUuid: o.organizationUuid,
    };
  return ACo.jsx(BMe, {
    startingMessage:
      "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
    onDone: async (i) => {
      let a = await NMe(t, i, {
        previousAccount: s,
      });
      e(
        i
          ? a.bridgeDisconnected
            ? `Login successful. ${Roe}`
            : "Login successful"
          : "Login interrupted",
        i ? Uyt(t, a) : void 0,
      );
    },
  });
}
var ACo, Psl;
