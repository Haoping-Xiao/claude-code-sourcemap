// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mNa
// matched 2.1.88 source: src/services/remoteManagedSettings/index.ts
// class=modified  jaccard=0.2877  score=0.4751  fileCov=0.4216
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mNa = E(() => {
  Xr();
  fNa = ve(() =>
    H.object({
      uuid: H.string(),
      checksum: H.string(),
      settings: H.record(H.string(), H.unknown()),
    }),
  );
});
function Zho() {
  if ((yNa(), nPe)) return;
  if (HJ())
    nPe = new Promise((e) => {
      ((E6 = e),
        setTimeout(
          (t) => {
            if (E6 === t) {
              if (uNa()) {
                T(
                  "Remote settings: Loading promise timeout deferred \u2014 consent dialog pending",
                );
                return;
              }
              (T("Remote settings: Loading promise timed out, resolving anyway"),
                E6(),
                (E6 = null));
            }
          },
          cMp,
          e,
        ));
    });
}
function uMp() {
  let e = km();
  if (e) return `${e.url}/managed/settings`;
  return `${$s().BASE_API_URL}/api/claude_code/settings`;
}
function gNa(e) {
  if (!e) return e;
  return vCe(e, "remote managed settings").settings ?? {};
}
async function dMp() {
  return null;
}
function eyo() {
  return HJ();
}
async function bVe() {
  if (nPe) await nPe;
}
function tyo() {
  return HJ() && !xhe();
}
function yNa() {
  L1a(async () => {
    if (tyo()) await bVe();
  });
}
function pMp() {
  let e = km();
  if (e)
    return {
      headers: {
        Authorization: `Bearer ${e.jwt}`,
      },
    };
  try {
    let { key: n } = Ty({
      skipRetrievingKeyFromApiKeyHelper: !0,
    });
    if (n)
      return {
        headers: {
          "x-api-key": n,
        },
      };
  } catch {}
  let t = Ws();
  if (t?.accessToken)
    return {
      headers: {
        Authorization: `Bearer ${t.accessToken}`,
        "anthropic-beta": kw,
      },
      accessToken: t.accessToken,
    };
  return {
    headers: {},
    error: "No authentication available",
  };
}
async function fMp(e, t = {}) {
  let n = await dMp();
  if (n) return n;
  let r = null,
    o = km() && !t.background ? 0 : aMp;
  for (let s = 1; s <= o + 1; s++) {
    if (((r = await _Na(e)), r.success)) return r;
    if (r.skipRetry) return r;
    if (s > o) return r;
    let i = TJ(s);
    (T(`Remote settings: Retry ${s}/${o} after ${i}ms`), await Nn(i));
  }
  return r;
}
async function _Na(e, t = !1) {
  let n;
  try {
    (await ch(), await oxe());
    let r = pMp();
    if (((n = r.accessToken), r.error))
      return {
        success: !1,
        error: "Authentication required for remote settings",
        errorKind: "no_auth_available",
        skipRetry: !0,
      };
    let o = uMp(),
      s = {
        ...r.headers,
        "User-Agent": dy(),
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      };
    if (e) s["If-None-Match"] = `"${e}"`;
    let i,
      a = km();
    if (a) {
      let d = await e1t(new URL(a.url).hostname.replace(/^\[|\]$/g, ""));
      if (!d);
      else if (ID())
        T(
          "[gateway] HTTPS proxy configured \u2014 per-request cert pin not applied to managed-settings fetch (known gap)",
          {
            level: "warn",
          },
        );
      else i = Ovi(d);
    }
    let l = await po.get(o, {
      headers: s,
      timeout: iMp,
      ...(i && {
        httpsAgent: i,
      }),
      validateStatus: (d) => d === 200 || d === 204 || d === 304 || d === 404,
    });
    if (l.status === 304)
      return (
        T("Remote settings: Using cached settings (304)"),
        {
          success: !0,
          settings: null,
          checksum: e,
        }
      );
    if (l.status === 204 || l.status === 404)
      return (
        T(`Remote settings: No settings found (${l.status})`),
        {
          success: !0,
          settings: {},
          checksum: void 0,
        }
      );
    let c = fNa().safeParse(l.data);
    if (!c.success)
      return (
        T(`Remote settings: Invalid response format - ${c.error.message}`),
        {
          success: !1,
          error: "Invalid remote settings format",
          errorKind: "parse_error",
          skipRetry: !0,
        }
      );
    let u = vCe(c.data.settings, "remote managed settings");
    if (!u.settings && Object.keys(c.data.settings).length > 0)
      return (
        T("Remote settings: Settings validation failed - no fields could be salvaged"),
        {
          success: !1,
          error: "Invalid settings structure",
          errorKind: "invalid_settings",
          skipRetry: !0,
        }
      );
    if (u.errors.length > 0)
      T(
        `Remote settings: Payload contains ${u.errors.length} invalid entries; applying the salvaged subset`,
      );
    return (
      T("Remote settings: Fetched successfully"),
      {
        success: !0,
        settings: c.data.settings,
        salvagedSettings: u.errors.length > 0 ? (u.settings ?? {}) : void 0,
        checksum: c.data.checksum,
      }
    );
  } catch (r) {
    let o = be(r?.cause);
    if (be(r).includes(NCn) || o.includes(NCn))
      return {
        success: !1,
        error: "Cloud gateway TLS certificate does not match stored pin",
        errorKind: "gateway_cert_mismatch",
        skipRetry: !0,
      };
    let { kind: s, status: i, message: a } = $A(r);
    if (i === 404)
      return {
        success: !0,
        settings: {},
        checksum: "",
      };
    switch (s) {
      case "auth":
        if (i === 401 && n && !t) {
          await ZB(n);
          let l = Ws()?.accessToken;
          if (l && l !== n)
            return (G("tengu_remote_settings_401_force_refresh_retry", {}), _Na(e, !0));
        }
        return {
          success: !1,
          error: "Not authorized for remote settings",
          errorKind: i === 401 ? "http_401" : "http_403",
          skipRetry: !0,
        };
      case "timeout":
        return {
          success: !1,
          error: "Remote settings request timeout",
          errorKind: "timeout",
        };
      case "network":
        return {
          success: !1,
          error: "Cannot connect to server",
          errorKind: "network_error",
        };
      default:
        return {
          success: !1,
          error: a,
          errorKind:
            i !== void 0 && i >= 500
              ? "http_5xx"
              : i !== void 0 && i >= 400
                ? "http_4xx"
                : "unknown_error",
        };
    }
  }
}
async function hNa(e) {
  try {
    let t = Lfn(),
      n = await kft.open(t, "w", 384);
    try {
      (await n.writeFile(De(e, null, 2), {
        encoding: "utf-8",
      }),
        await n.datasync());
    } finally {
      await n.close();
    }
    T(`Remote settings: Saved to ${t}`);
  } catch (t) {
    T(`Remote settings: Failed to save - ${t instanceof Error ? t.message : "unknown error"}`);
  }
}
async function bNa() {
  if ((ANa(), _Ve(), (nPe = null), (E6 = null), Ihe())) return;
  try {
    let e = Lfn();
    await kft.unlink(e);
  } catch {}
}
async function nyo(e = {}) {
  if (!HJ())
    return {
      settings: null,
      fetchSucceeded: !0,
    };
  let t = Ihe();
  if (t)
    return (
      T(
        `Remote settings: Using override file ${t} (CLAUDE_CODE_REMOTE_SETTINGS_PATH), skipping API fetch`,
      ),
      {
        settings: xhe(),
        fetchSucceeded: !0,
      }
    );
  let n = xhe(),
    r = n ? m4n(n) : void 0;
  try {
    let o = await fMp(r, e);
    if (!o.success) {
      if (
        (Le("remote_managed_settings_pull", o.errorKind ?? "remote_managed_settings_fetch_failed"),
        n)
      )
        return (
          T("Remote settings: Using stale cache after fetch failure"),
          wet(n),
          {
            settings: n,
            fetchSucceeded: !1,
          }
        );
      return {
        settings: null,
        fetchSucceeded: !1,
      };
    }
    if (o.settings === null && n)
      return (
        T("Remote settings: Cache still valid (304 Not Modified)"),
        wet(n),
        xe("remote_managed_settings_pull", {
          status: We("not_modified"),
        }),
        {
          settings: n,
          fetchSucceeded: !0,
        }
      );
    let s = o.settings || {};
    if (Object.keys(s).length > 0) {
      let a = gNa(n),
        l = gNa(s),
        c = await dNa(a, l);
      if (!pNa(c))
        return (
          T("Remote settings: User rejected new settings, using cached settings"),
          {
            settings: n,
            fetchSucceeded: !0,
          }
        );
      return (
        wet(s),
        await hNa(o.salvagedSettings ?? s),
        T("Remote settings: Applied new settings successfully"),
        xe("remote_managed_settings_pull", {
          status: We("updated"),
        }),
        {
          settings: s,
          fetchSucceeded: !0,
        }
      );
    }
    return (
      wet(s),
      await hNa({}),
      T("Remote settings: Saved empty sentinel (404 response)"),
      xe("remote_managed_settings_pull", {
        status: We("no_content"),
      }),
      {
        settings: s,
        fetchSucceeded: !0,
      }
    );
  } catch {
    if ((Le("remote_managed_settings_pull", "remote_managed_settings_unexpected"), n))
      return (
        T("Remote settings: Using stale cache after error"),
        wet(n),
        {
          settings: n,
          fetchSucceeded: !1,
        }
      );
    return {
      settings: null,
      fetchSucceeded: !1,
    };
  }
}
async function L4n() {
  if ((yNa(), HJ() && !nPe))
    nPe = new Promise((e) => {
      E6 = e;
    });
  if (xhe() && E6) (E6(), (E6 = null));
  try {
    let { settings: e, fetchSucceeded: t } = await nyo();
    if (HJ() && !Ihe()) ENa();
    if (e !== null) R4n();
    return t;
  } finally {
    SNa();
  }
}
function SNa() {
  if (E6) (E6(), (E6 = null));
}
async function SVe() {
  if ((ANa(), _Ve(), (nPe = null), (E6 = null), !HJ())) return (R4n(), !0);
  Zho();
  let e;
  try {
    ({ fetchSucceeded: e } = await nyo());
  } finally {
    SNa();
  }
  if ((T("Remote settings: Refreshed after auth change"), !Ihe())) ENa();
  return (R4n(), e);
}
function R4n() {
  try {
    (Dvs(), n$.notifyChange("policySettings"));
  } catch (e) {
    ke(e);
  }
}
async function ryo(e) {
  try {
    if (await e())
      return {
        valid: !0,
      };
  } catch (t) {
    ke(t);
  }
  return {
    valid: !1,
    message: mMp,
  };
}
async function gMp() {
  if (!HJ()) return;
  let e = xhe(),
    t = e ? De(e) : null;
  try {
    await nyo({
      background: !0,
    });
    let n = xhe();
    if ((n ? De(n) : null) !== t) (T("Remote settings: Changed during background poll"), R4n());
  } catch {}
}
function ENa() {
  if (UWt !== null) return;
  if (!HJ()) return;
  ((UWt = Dkn(() => void gMp(), lMp, {
    unref: !0,
  })),
    Ci(UWt));
}
function ANa() {
  (UWt?.[Symbol.dispose](), (UWt = null));
}
var kft,
  iMp = 1e4,
  aMp = 5,
  lMp = 3600000,
  UWt = null,
  nPe = null,
  E6 = null,
  cMp = 30000,
  mMp =
    "Your organization requires remote managed settings to load, but they could not be loaded. Run `claude auth login` to re-authenticate, check your network connection, or contact your administrator.";
