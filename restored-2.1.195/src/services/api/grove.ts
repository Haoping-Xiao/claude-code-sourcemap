// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p4n
// matched 2.1.88 source: src/services/api/grove.ts
// class=modified  jaccard=0.233  score=0.4201  fileCov=0.3435
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var p4n = E(() => {
  Ye();
  kt();
  W2e();
  oo();
  er();
  d5e();
  SEe();
  ((H1a = R(lt(), 1)), (DWt = R(se(), 1)));
});
async function Rho() {
  try {
    (await oL(async () => {
      let e = await Os.post("/api/oauth/account/grove_notice_viewed", {});
      if (!e.ok) throw Error(`Failed to mark Grove notice viewed: ${e.reason}`);
      return e;
    }),
      Fre.cache.clear?.(),
      xe("api_grove_notice_mark_viewed"));
  } catch (e) {
    (T(`Failed to mark Grove notice viewed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "error",
    }),
      Le("api_grove_notice_mark_viewed", "request_failed"));
  }
}
async function f4n(e) {
  try {
    (await oL(async () => {
      let t = await Os.patch("/api/oauth/account/settings", {
        grove_enabled: e,
      });
      if (!t.ok) throw Error(`Failed to update Grove settings: ${t.reason}`);
      return t;
    }),
      Fre.cache.clear?.(),
      xe("api_grove_settings_update"));
  } catch (t) {
    (T(`updateGroveSettings failed: ${String(t)}`, {
      level: "error",
    }),
      Le("api_grove_settings_update", "request_failed"));
  }
}
async function Tft() {
  if (!Y4e()) return !1;
  let e = Lc()?.accountUuid;
  if (!e) return !1;
  let n = Dt().groveConfigCache?.[e],
    r = Date.now();
  if (!n)
    return (
      T("Grove: No cache, fetching config in background (dialog skipped this session)"),
      C1a(e),
      !1
    );
  if (r - n.timestamp > I1a)
    return (
      T("Grove: Cache stale, returning cached data and refreshing in background"),
      C1a(e),
      n.grove_enabled
    );
  return (T("Grove: Using fresh cached config"), n.grove_enabled);
}
async function C1a(e) {
  try {
    let t = await JDe();
    if (!t.success) return;
    let n = t.data.grove_enabled,
      r = Dt().groveConfigCache?.[e];
    if (r?.grove_enabled === n && Date.now() - r.timestamp <= I1a) return;
    gn((o) => ({
      ...o,
      groveConfigCache: {
        ...o.groveConfigCache,
        [e]: {
          grove_enabled: n,
          timestamp: Date.now(),
        },
      },
    }));
  } catch (t) {
    T(`Grove: Failed to fetch and store config: ${t}`);
  }
}
function Lho(e, t, n) {
  if (!e.success || !t.success) return !1;
  let r = e.data,
    o = t.data;
  if (r.grove_enabled !== null) return !1;
  if (n) return !0;
  if (!o.notice_is_grace_period) return !0;
  let i = o.notice_reminder_frequency;
  if (i !== null && r.grove_notice_viewed_at) {
    let a = new Date(r.grove_notice_viewed_at).getTime();
    if (isNaN(a))
      return (
        ke(Error(`Invalid grove_notice_viewed_at from API: ${r.grove_notice_viewed_at}`)),
        !0
      );
    return Math.floor((Date.now() - a) / 86400000) >= i;
  } else {
    let a = r.grove_notice_viewed_at;
    return a === null || a === void 0;
  }
}
async function k1a() {
  let [e, t] = await Promise.all([Fre(), JDe()]);
  if (Lho(e, t, !1)) {
    let r = t.success ? t.data : null;
    if (
      (G("tengu_grove_print_viewed", {
        dismissable: r?.notice_is_grace_period,
      }),
      r === null || r.notice_is_grace_period)
    )
      (VJe(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`),
        await Rho());
    else
      (VJe(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`),
        await ki(1));
  }
}
var I1a = 86400000,
  x1a = 3000,
  Fre,
  JDe;
