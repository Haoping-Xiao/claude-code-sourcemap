// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R9
// matched 2.1.88 source: src/utils/errors.ts
// class=modified (alt of src/utils/errors.ts)  jaccard=0.0484  score=0.0968  fileCov=0.0881
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function oxe() {
  let e = km();
  if (!e?.idpRefreshToken || e.expiresAt - Date.now() >= gfd) return Promise.resolve();
  let t = Ibr();
  if (t) return t;
  let n = hfd(e, e.idpRefreshToken).finally(() => hsn(null));
  return (hsn(n), n);
}
async function hfd(e, t) {
  try {
    let { data: n } = await lb.post(
        e.tokenEndpoint ?? `${e.url}/oauth/token`,
        new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: t,
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          timeout: 10000 /* 1e4 */,
        },
      ),
      r = Tjr().safeParse(n);
    if (!r.success) {
      T("[gateway-refresh] malformed response; will retry later");
      return;
    }
    if (km() !== e) {
      T("[gateway-refresh] auth changed mid-refresh; discarding");
      return;
    }
    (await Xsi(e, t, () => ({
      url: e.url,
      jwt: r.data.access_token,
      expiresAt: Date.now() + r.data.expires_in * 1000,
      idpRefreshToken: r.data.refresh_token ?? e.idpRefreshToken,
      ...(e.tokenEndpoint && {
        tokenEndpoint: e.tokenEndpoint,
      }),
    })),
      T("[gateway-refresh] refreshed gateway JWT"));
  } catch (n) {
    if (vjr(n) === "invalid_grant") {
      if (km() !== e) {
        T("[gateway-refresh] auth changed mid-refresh; discarding invalid_grant");
        return;
      }
      T("[gateway-refresh] IdP rejected refresh token; clearing it", {
        level: "warn",
      });
      try {
        await Xsi(e, t, (r) => ({
          ...r,
          idpRefreshToken: void 0,
        }));
      } catch (r) {
        T(`[gateway-refresh] secureStorage write failed: ${be(r)}`, {
          level: "warn",
        });
      }
    } else T(`[gateway-refresh] transient failure: ${be(n)}`);
  }
}
async function Xsi(e, t, n) {
  let r = n(e);
  try {
    await wl().mutate((o) => {
      let s = o?.enterpriseGateway;
      if (s && s.idpRefreshToken !== t) return ((r = s), o);
      return (
        (r = n(s ?? e)),
        {
          ...o,
          enterpriseGateway: r,
        }
      );
    });
  } catch (o) {
    T(
      `[gateway-refresh] secureStorage write failed; applying refreshed credential in-memory only: ${be(o)}`,
      {
        level: "warn",
      },
    );
  }
  if (km() !== e) {
    T("[gateway-refresh] auth changed during persist; discarding outcome");
    return;
  }
  xge(r);
}
function vjr(e) {
  if (!e || typeof e !== "object" || !("isAxiosError" in e) || !e.isAxiosError) return;
  let t = e.response?.data;
  if (typeof t === "object" && t !== null && "error" in t) {
    let n = t.error;
    return typeof n === "string" ? n : void 0;
  }
  return;
}
async function Jsi(e) {
  xge(e);
  let t = await wl().mutate((n) => ({
    ...n,
    enterpriseGateway: e,
  }));
  if (!t.success)
    throw Error(`Failed to persist gateway credential${t.warning ? `: ${t.warning}` : ""}`);
}
var gfd = 300000,
  Tjr;
