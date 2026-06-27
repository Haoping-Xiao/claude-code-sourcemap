// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p4n
// matched 2.1.88 source: src/services/api/grove.ts
// class=modified  jaccard=0.2664  score=0.6271  fileCov=0.3166
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module p4n] deps: Ye, kt, W2e, oo, er, d5e, SEe
((H1a = R(lt(), 1)), (DWt = R(se(), 1)));
async function markGroveNoticeViewed() {
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
async function getGroveSettings(e) {
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
async function isQualifiedForGrove() {
  if (!Y4e()) return false;
  let e = Lc()?.accountUuid;
  if (!e) return false;
  let n = Dt().groveConfigCache?.[e],
    r = Date.now();
  if (!n)
    return (
      T("Grove: No cache, fetching config in background (dialog skipped this session)"),
      fetchAndStoreGroveConfig(e),
      false
    );
  if (r - n.timestamp > I1a)
    return (
      T("Grove: Cache stale, returning cached data and refreshing in background"),
      fetchAndStoreGroveConfig(e),
      n.grove_enabled
    );
  return (T("Grove: Using fresh cached config"), n.grove_enabled);
}
async function fetchAndStoreGroveConfig(accountId) {
  try {
    let t = await JDe();
    if (!t.success) return;
    let n = t.data.grove_enabled,
      r = Dt().groveConfigCache?.[accountId];
    if (r?.grove_enabled === n && Date.now() - r.timestamp <= I1a) return;
    gn((o) => ({
      ...o,
      groveConfigCache: {
        ...o.groveConfigCache,
        [accountId]: {
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
  if (!e.success || !t.success) return false;
  let r = e.data,
    o = t.data;
  if (r.grove_enabled !== null) return false;
  if (n) return true;
  if (!o.notice_is_grace_period) return true;
  let i = o.notice_reminder_frequency;
  if (i !== null && r.grove_notice_viewed_at) {
    let a = new Date(r.grove_notice_viewed_at).getTime();
    if (isNaN(a))
      return (
        ke(Error(`Invalid grove_notice_viewed_at from API: ${r.grove_notice_viewed_at}`)),
        true
      );
    return Math.floor((Date.now() - a) / 86400000) >= i;
  } else {
    let a = r.grove_notice_viewed_at;
    return a === null || a === void 0;
  }
}
async function checkGroveForNonInteractive() {
  let [e, t] = await Promise.all([Fre(), JDe()]);
  if (Lho(e, t, false)) {
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
        await markGroveNoticeViewed());
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
