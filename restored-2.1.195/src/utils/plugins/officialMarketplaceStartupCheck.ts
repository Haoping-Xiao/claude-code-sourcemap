// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QRc
// matched 2.1.88 source: src/utils/plugins/officialMarketplaceStartupCheck.ts
// class=modified  jaccard=0.5646  score=0.7551  fileCov=0.6911
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var QRc = E(() => {
  gz();
  XRc = R(rt(), 1);
});
function Pwm() {
  return ut(process.env.CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL);
}
function CYo(e) {
  let t = Hfr.INITIAL_DELAY_MS * Math.pow(Hfr.BACKOFF_MULTIPLIER, e);
  return Math.min(t, Hfr.MAX_DELAY_MS);
}
function Mwm(e) {
  if (!e.officialMarketplaceAutoInstallAttempted) return !0;
  if (e.officialMarketplaceAutoInstalled) return !1;
  let t = e.officialMarketplaceAutoInstallFailReason,
    n = e.officialMarketplaceAutoInstallRetryCount || 0,
    r = e.officialMarketplaceAutoInstallNextRetryTime,
    o = Date.now();
  if (n >= Hfr.MAX_ATTEMPTS) return !1;
  if (t === "policy_blocked") return !1;
  if (r && o < r) return !1;
  return t === "unknown" || t === "git_unavailable" || t === "gcs_unavailable" || t === void 0;
}
async function eLc() {
  let e = Dt();
  if (!Mwm(e)) {
    let n = e.officialMarketplaceAutoInstalled
      ? "already_installed"
      : (e.officialMarketplaceAutoInstallFailReason ?? "already_attempted");
    return (
      T(`Official marketplace auto-install skipped: ${n}`),
      {
        installed: !1,
        skipped: !0,
        reason: n,
      }
    );
  }
  let t = !1;
  try {
    if (Pwm())
      return (
        T("Official marketplace auto-install disabled via env var, skipping"),
        gn((l) => ({
          ...l,
          officialMarketplaceAutoInstallAttempted: !0,
          officialMarketplaceAutoInstalled: !1,
          officialMarketplaceAutoInstallFailReason: "policy_blocked",
        })),
        G("tengu_official_marketplace_auto_install", {
          installed: !1,
          skipped: !0,
          policy_blocked: !0,
        }),
        {
          installed: !1,
          skipped: !0,
          reason: "policy_blocked",
        }
      );
    if ((await om())[xI])
      return (
        T(`Official marketplace '${xI}' already installed, skipping`),
        gn((l) => ({
          ...l,
          officialMarketplaceAutoInstallAttempted: !0,
          officialMarketplaceAutoInstalled: !0,
          officialMarketplaceAutoInstallFailReason: void 0,
          officialMarketplaceAutoInstallRetryCount: void 0,
          officialMarketplaceAutoInstallLastAttemptTime: void 0,
          officialMarketplaceAutoInstallNextRetryTime: void 0,
        })),
        {
          installed: !1,
          skipped: !0,
          reason: "already_installed",
        }
      );
    if (!_H(Alt))
      return (
        T("Official marketplace blocked by enterprise policy, skipping"),
        gn((l) => ({
          ...l,
          officialMarketplaceAutoInstallAttempted: !0,
          officialMarketplaceAutoInstalled: !1,
          officialMarketplaceAutoInstallFailReason: "policy_blocked",
        })),
        G("tengu_official_marketplace_auto_install", {
          installed: !1,
          skipped: !0,
          policy_blocked: !0,
        }),
        {
          installed: !1,
          skipped: !0,
          reason: "policy_blocked",
        }
      );
    let r = mOe(),
      o = ZRc.join(r, xI);
    if ((await xYt(o, r)) !== null) {
      xe("plugin_official_marketplace_fetch");
      let l = await om();
      return (
        (l[xI] = {
          source: Alt,
          installLocation: o,
          lastUpdated: new Date().toISOString(),
        }),
        await sse(l),
        gn((c) => ({
          ...c,
          officialMarketplaceAutoInstallAttempted: !0,
          officialMarketplaceAutoInstalled: !0,
          officialMarketplaceAutoInstallFailReason: void 0,
          officialMarketplaceAutoInstallRetryCount: void 0,
          officialMarketplaceAutoInstallLastAttemptTime: void 0,
          officialMarketplaceAutoInstallNextRetryTime: void 0,
        })),
        G("tengu_official_marketplace_auto_install", {
          installed: !0,
          skipped: !1,
          via_gcs: !0,
        }),
        {
          installed: !0,
          skipped: !1,
        }
      );
    }
    if (!at("tengu_plugin_official_mkt_git_fallback", !0)) {
      (Le("plugin_official_marketplace_fetch", "gcs_failed_fallback_disabled"),
        T(
          "Official marketplace GCS failed; git fallback disabled by flag \u2014 skipping install",
        ));
      let l = (e.officialMarketplaceAutoInstallRetryCount || 0) + 1,
        c = Date.now(),
        u = c + CYo(l);
      return (
        gn((d) => ({
          ...d,
          officialMarketplaceAutoInstallAttempted: !0,
          officialMarketplaceAutoInstalled: !1,
          officialMarketplaceAutoInstallFailReason: "gcs_unavailable",
          officialMarketplaceAutoInstallRetryCount: l,
          officialMarketplaceAutoInstallLastAttemptTime: c,
          officialMarketplaceAutoInstallNextRetryTime: u,
        })),
        G("tengu_official_marketplace_auto_install", {
          installed: !1,
          skipped: !0,
          gcs_unavailable: !0,
          retry_count: l,
        }),
        {
          installed: !1,
          skipped: !0,
          reason: "gcs_unavailable",
        }
      );
    }
    if (((t = !0), !(await sWe()))) {
      (Le("plugin_official_marketplace_fetch", "gcs_failed_git_unavailable"),
        T("Git not available, skipping official marketplace auto-install"));
      let l = (e.officialMarketplaceAutoInstallRetryCount || 0) + 1,
        c = Date.now(),
        u = CYo(l),
        d = c + u,
        p = !1;
      try {
        gn((f) => ({
          ...f,
          officialMarketplaceAutoInstallAttempted: !0,
          officialMarketplaceAutoInstalled: !1,
          officialMarketplaceAutoInstallFailReason: "git_unavailable",
          officialMarketplaceAutoInstallRetryCount: l,
          officialMarketplaceAutoInstallLastAttemptTime: c,
          officialMarketplaceAutoInstallNextRetryTime: d,
        }));
      } catch (f) {
        ((p = !0),
          T(`Failed to save marketplace auto-install git_unavailable state: ${f}`, {
            level: "error",
          }));
      }
      return (
        G("tengu_official_marketplace_auto_install", {
          installed: !1,
          skipped: !0,
          git_unavailable: !0,
          retry_count: l,
        }),
        {
          installed: !1,
          skipped: !0,
          reason: "git_unavailable",
          configSaveFailed: p,
        }
      );
    }
    (T("Attempting to auto-install official marketplace"),
      await yOe(Alt),
      T("Successfully auto-installed official marketplace"));
    let a = e.officialMarketplaceAutoInstallRetryCount || 0;
    return (
      gn((l) => ({
        ...l,
        officialMarketplaceAutoInstallAttempted: !0,
        officialMarketplaceAutoInstalled: !0,
        officialMarketplaceAutoInstallFailReason: void 0,
        officialMarketplaceAutoInstallRetryCount: void 0,
        officialMarketplaceAutoInstallLastAttemptTime: void 0,
        officialMarketplaceAutoInstallNextRetryTime: void 0,
      })),
      It("plugin_official_marketplace_fetch", "gcs_failed_git_fallback"),
      G("tengu_official_marketplace_auto_install", {
        installed: !0,
        skipped: !1,
        retry_count: a,
      }),
      {
        installed: !0,
        skipped: !1,
      }
    );
  } catch (n) {
    let r = n instanceof Error ? n.message : String(n);
    if (r.includes("xcrun: error:")) {
      if ((JKi(), t)) Le("plugin_official_marketplace_fetch", "gcs_failed_git_unavailable");
      return (
        T(
          "Official marketplace auto-install: git is a non-functional macOS xcrun shim, treating as git_unavailable",
        ),
        G("tengu_official_marketplace_auto_install", {
          installed: !1,
          skipped: !0,
          git_unavailable: !0,
          macos_xcrun_shim: !0,
        }),
        {
          installed: !1,
          skipped: !0,
          reason: "git_unavailable",
        }
      );
    }
    if (t) Le("plugin_official_marketplace_fetch", "gcs_and_git_failed");
    T(`Failed to auto-install official marketplace: ${r}`, {
      level: "error",
    });
    let o = (e.officialMarketplaceAutoInstallRetryCount || 0) + 1,
      s = Date.now(),
      i = CYo(o),
      a = s + i,
      l = !1;
    try {
      gn((c) => ({
        ...c,
        officialMarketplaceAutoInstallAttempted: !0,
        officialMarketplaceAutoInstalled: !1,
        officialMarketplaceAutoInstallFailReason: "unknown",
        officialMarketplaceAutoInstallRetryCount: o,
        officialMarketplaceAutoInstallLastAttemptTime: s,
        officialMarketplaceAutoInstallNextRetryTime: a,
      }));
    } catch (c) {
      ((l = !0),
        T(`Failed to save marketplace auto-install failure state: ${c}`, {
          level: "error",
        }));
    }
    return (
      G("tengu_official_marketplace_auto_install", {
        installed: !1,
        skipped: !0,
        failed: !0,
        retry_count: o,
      }),
      {
        installed: !1,
        skipped: !0,
        reason: "unknown",
        configSaveFailed: l,
      }
    );
  }
}
var ZRc, Hfr;
