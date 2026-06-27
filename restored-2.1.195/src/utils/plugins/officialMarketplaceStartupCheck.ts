// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QRc
// matched 2.1.88 source: src/utils/plugins/officialMarketplaceStartupCheck.ts
// class=modified  jaccard=0.5667  score=0.835  fileCov=0.6382
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module QRc] deps: hooks/notifs/useSettingsErrors.tsx
XRc = R(rt(), 1);
function Pwm() {
  return ut(process.env.CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL);
}
function CYo(e) {
  let t = Hfr.INITIAL_DELAY_MS * Math.pow(Hfr.BACKOFF_MULTIPLIER, e);
  return Math.min(t, Hfr.MAX_DELAY_MS);
}
function shouldRetryInstallation(config) {
  if (!config.officialMarketplaceAutoInstallAttempted) return true;
  if (config.officialMarketplaceAutoInstalled) return false;
  let t = config.officialMarketplaceAutoInstallFailReason,
    n = config.officialMarketplaceAutoInstallRetryCount || 0,
    r = config.officialMarketplaceAutoInstallNextRetryTime,
    o = Date.now();
  if (n >= Hfr.MAX_ATTEMPTS) return false;
  if (t === "policy_blocked") return false;
  if (r && o < r) return false;
  return t === "unknown" || t === "git_unavailable" || t === "gcs_unavailable" || t === void 0;
}
async function checkAndInstallOfficialMarketplace() {
  let config = Dt();
  if (!shouldRetryInstallation(config)) {
    let n = config.officialMarketplaceAutoInstalled
      ? "already_installed"
      : (config.officialMarketplaceAutoInstallFailReason ?? "already_attempted");
    return (
      T(`Official marketplace auto-install skipped: ${n}`),
      {
        installed: false,
        skipped: true,
        reason: n,
      }
    );
  }
  let t = false;
  try {
    if (Pwm())
      return (
        T("Official marketplace auto-install disabled via env var, skipping"),
        gn((l) => ({
          ...l,
          officialMarketplaceAutoInstallAttempted: true,
          officialMarketplaceAutoInstalled: false,
          officialMarketplaceAutoInstallFailReason: "policy_blocked",
        })),
        G("tengu_official_marketplace_auto_install", {
          installed: false,
          skipped: true,
          policy_blocked: true,
        }),
        {
          installed: false,
          skipped: true,
          reason: "policy_blocked",
        }
      );
    if ((await om())[xI])
      return (
        T(`Official marketplace '${xI}' already installed, skipping`),
        gn((l) => ({
          ...l,
          officialMarketplaceAutoInstallAttempted: true,
          officialMarketplaceAutoInstalled: true,
          officialMarketplaceAutoInstallFailReason: void 0,
          officialMarketplaceAutoInstallRetryCount: void 0,
          officialMarketplaceAutoInstallLastAttemptTime: void 0,
          officialMarketplaceAutoInstallNextRetryTime: void 0,
        })),
        {
          installed: false,
          skipped: true,
          reason: "already_installed",
        }
      );
    if (!_H(Alt))
      return (
        T("Official marketplace blocked by enterprise policy, skipping"),
        gn((l) => ({
          ...l,
          officialMarketplaceAutoInstallAttempted: true,
          officialMarketplaceAutoInstalled: false,
          officialMarketplaceAutoInstallFailReason: "policy_blocked",
        })),
        G("tengu_official_marketplace_auto_install", {
          installed: false,
          skipped: true,
          policy_blocked: true,
        }),
        {
          installed: false,
          skipped: true,
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
          officialMarketplaceAutoInstallAttempted: true,
          officialMarketplaceAutoInstalled: true,
          officialMarketplaceAutoInstallFailReason: void 0,
          officialMarketplaceAutoInstallRetryCount: void 0,
          officialMarketplaceAutoInstallLastAttemptTime: void 0,
          officialMarketplaceAutoInstallNextRetryTime: void 0,
        })),
        G("tengu_official_marketplace_auto_install", {
          installed: true,
          skipped: false,
          via_gcs: true,
        }),
        {
          installed: true,
          skipped: false,
        }
      );
    }
    if (!at("tengu_plugin_official_mkt_git_fallback", true)) {
      (Le("plugin_official_marketplace_fetch", "gcs_failed_fallback_disabled"),
        T(
          "Official marketplace GCS failed; git fallback disabled by flag \u2014 skipping install",
        ));
      let l = (config.officialMarketplaceAutoInstallRetryCount || 0) + 1,
        c = Date.now(),
        u = c + CYo(l);
      return (
        gn((d) => ({
          ...d,
          officialMarketplaceAutoInstallAttempted: true,
          officialMarketplaceAutoInstalled: false,
          officialMarketplaceAutoInstallFailReason: "gcs_unavailable",
          officialMarketplaceAutoInstallRetryCount: l,
          officialMarketplaceAutoInstallLastAttemptTime: c,
          officialMarketplaceAutoInstallNextRetryTime: u,
        })),
        G("tengu_official_marketplace_auto_install", {
          installed: false,
          skipped: true,
          gcs_unavailable: true,
          retry_count: l,
        }),
        {
          installed: false,
          skipped: true,
          reason: "gcs_unavailable",
        }
      );
    }
    if (((t = true), !(await sWe()))) {
      (Le("plugin_official_marketplace_fetch", "gcs_failed_git_unavailable"),
        T("Git not available, skipping official marketplace auto-install"));
      let l = (config.officialMarketplaceAutoInstallRetryCount || 0) + 1,
        c = Date.now(),
        u = CYo(l),
        d = c + u,
        p = false;
      try {
        gn((f) => ({
          ...f,
          officialMarketplaceAutoInstallAttempted: true,
          officialMarketplaceAutoInstalled: false,
          officialMarketplaceAutoInstallFailReason: "git_unavailable",
          officialMarketplaceAutoInstallRetryCount: l,
          officialMarketplaceAutoInstallLastAttemptTime: c,
          officialMarketplaceAutoInstallNextRetryTime: d,
        }));
      } catch (f) {
        ((p = true),
          T(`Failed to save marketplace auto-install git_unavailable state: ${f}`, {
            level: "error",
          }));
      }
      return (
        G("tengu_official_marketplace_auto_install", {
          installed: false,
          skipped: true,
          git_unavailable: true,
          retry_count: l,
        }),
        {
          installed: false,
          skipped: true,
          reason: "git_unavailable",
          configSaveFailed: p,
        }
      );
    }
    (T("Attempting to auto-install official marketplace"),
      await yOe(Alt),
      T("Successfully auto-installed official marketplace"));
    let a = config.officialMarketplaceAutoInstallRetryCount || 0;
    return (
      gn((l) => ({
        ...l,
        officialMarketplaceAutoInstallAttempted: true,
        officialMarketplaceAutoInstalled: true,
        officialMarketplaceAutoInstallFailReason: void 0,
        officialMarketplaceAutoInstallRetryCount: void 0,
        officialMarketplaceAutoInstallLastAttemptTime: void 0,
        officialMarketplaceAutoInstallNextRetryTime: void 0,
      })),
      It("plugin_official_marketplace_fetch", "gcs_failed_git_fallback"),
      G("tengu_official_marketplace_auto_install", {
        installed: true,
        skipped: false,
        retry_count: a,
      }),
      {
        installed: true,
        skipped: false,
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
          installed: false,
          skipped: true,
          git_unavailable: true,
          macos_xcrun_shim: true,
        }),
        {
          installed: false,
          skipped: true,
          reason: "git_unavailable",
        }
      );
    }
    if (t) Le("plugin_official_marketplace_fetch", "gcs_and_git_failed");
    T(`Failed to auto-install official marketplace: ${r}`, {
      level: "error",
    });
    let o = (config.officialMarketplaceAutoInstallRetryCount || 0) + 1,
      s = Date.now(),
      i = CYo(o),
      a = s + i,
      l = false;
    try {
      gn((c) => ({
        ...c,
        officialMarketplaceAutoInstallAttempted: true,
        officialMarketplaceAutoInstalled: false,
        officialMarketplaceAutoInstallFailReason: "unknown",
        officialMarketplaceAutoInstallRetryCount: o,
        officialMarketplaceAutoInstallLastAttemptTime: s,
        officialMarketplaceAutoInstallNextRetryTime: a,
      }));
    } catch (c) {
      ((l = true),
        T(`Failed to save marketplace auto-install failure state: ${c}`, {
          level: "error",
        }));
    }
    return (
      G("tengu_official_marketplace_auto_install", {
        installed: false,
        skipped: true,
        failed: true,
        retry_count: o,
      }),
      {
        installed: false,
        skipped: true,
        reason: "unknown",
        configSaveFailed: l,
      }
    );
  }
}
var ZRc, Hfr;
