// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VDe
// matched 2.1.88 source: src/utils/background/remote/remoteSession.ts
// class=modified  jaccard=0.3239  score=0.8507  fileCov=0.3435
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var VDe = E(() => {
  Hp();
  Rc();
  H0();
  Un();
  oo();
  Lo();
  je();
  BR();
  At();
  Bi();
  sa();
  Jt();
  Cv();
  Ide();
});
async function DOa({ allowBundle: e = !1, cwd: t } = {}) {
  let n = [];
  if (!Us("allow_remote_sessions"))
    return (
      n.push({
        type: "policy_blocked",
      }),
      It("bg_remote_eligibility_check", "policy_blocked"),
      n
    );
  let [r, o] = await Promise.all([Vjn(), $O(t)]),
    s = null;
  if (r)
    n.push({
      type: "not_logged_in",
    });
  else
    try {
      s = await ROa();
    } catch {
      n.push({
        type: "not_logged_in",
      });
    }
  let i = Dr()?.remote?.defaultEnvironmentId,
    a =
      qjn(i) ||
      (i !== void 0 && s !== null && s.some((c) => c.environment_id === i && c.kind === "byoc")),
    l =
      e &&
      (ut(process.env.CCR_FORCE_BUNDLE) ||
        ut(process.env.CCR_ENABLE_BUNDLE) ||
        (await _U("tengu_ccr_bundle_seed_enabled")));
  if (!(await _ft(t)))
    n.push({
      type: "not_in_git_repo",
      cwd: t ?? $t(),
    });
  else if (l && Tu(t ?? $t()) !== null);
  else if (o === null)
    n.push({
      type: "no_git_remote",
    });
  else if (!a && $m(o.host)) {
    if (!(await oVe(o.owner, o.name)))
      n.push({
        type: "github_app_not_installed",
      });
  }
  if (n.length === 0) xe("bg_remote_eligibility_check");
  else Le("bg_remote_eligibility_check", n[0].type);
  return n;
}
