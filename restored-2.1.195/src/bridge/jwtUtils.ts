// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ste
// matched 2.1.88 source: src/bridge/jwtUtils.ts
// class=modified  jaccard=0.6467  score=0.9219  fileCov=0.6842
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ste] deps: ft, wFe, je, vn, dr, rle, QO, Ls
uUr = Object.keys(yc);
E7s = qZe(async () => {
  if (KBe() !== null) return;
  try {
    let e = await _ld();
    pCt(e);
  } catch (e) {
    ke(e);
  }
});
function dUr(e) {
  if (e < 60000) return `${Math.round(e / 1000)}s`;
  let t = Math.floor(e / 60000),
    n = Math.round((e % 60000) / 1000);
  return n > 0 ? `${t}m ${n}s` : `${t}m`;
}
function v7s(e) {
  let n = (e.startsWith("sk-ant-si-") ? e.slice(10) : e).split(".");
  if (n.length !== 3 || !n[1]) return null;
  try {
    return Ft(Buffer.from(n[1], "base64url").toString("utf8"));
  } catch {
    return null;
  }
}
function tPt(e) {
  let t = v7s(e);
  if (t !== null && typeof t === "object" && "exp" in t && typeof t.exp === "number") return t.exp;
  return null;
}
function NSn({ getAccessToken: e, onRefresh: t, label: n, refreshBufferMs: r = bld }) {
  let o = new Map(),
    s = new Map(),
    i = new Map();
  function a(f) {
    let m = (i.get(f) ?? 0) + 1;
    return (i.set(f, m), m);
  }
  function l(f, m) {
    let g = tPt(m);
    if (!g) {
      T(
        `[${n}:token] Could not decode JWT expiry for sessionId=${f}, token prefix=${m.slice(0, 15)}\u2026, keeping existing timer`,
      );
      return;
    }
    let h = o.get(f);
    if (h) clearTimeout(h);
    let y = a(f),
      b = new Date(g * 1000).toISOString(),
      _ = g * 1000 - Date.now() - r;
    if (_ <= 0) {
      (T(
        `[${n}:token] Token for sessionId=${f} expires=${b} (past or within buffer), refreshing immediately`,
      ),
        u(f, y));
      return;
    }
    T(
      `[${n}:token] Scheduled token refresh for sessionId=${f} in ${dUr(_)} (expires=${b}, buffer=${r / 1000}s)`,
    );
    let S = setTimeout(u, _, f, y);
    o.set(f, S);
  }
  function c(f, m) {
    let g = o.get(f);
    if (g) clearTimeout(g);
    let h = a(f),
      y = Math.max(m * 1000 - r, 30000);
    T(
      `[${n}:token] Scheduled token refresh for sessionId=${f} in ${dUr(y)} (expires_in=${m}s, buffer=${r / 1000}s)`,
    );
    let b = setTimeout(u, y, f, h);
    o.set(f, b);
  }
  async function u(f, m) {
    let g;
    try {
      g = await e();
    } catch (y) {
      T(`[${n}:token] getAccessToken threw for sessionId=${f}: ${be(y)}`, {
        level: "error",
      });
    }
    if (i.get(f) !== m) {
      T(`[${n}:token] doRefresh for sessionId=${f} stale (gen ${m} vs ${i.get(f)}), skipping`);
      return;
    }
    if (!g) {
      let y = (s.get(f) ?? 0) + 1;
      if (
        (s.set(f, y),
        T(
          `[${n}:token] No OAuth token available for refresh, sessionId=${f} (failure ${y}/${T7s})`,
          {
            level: "error",
          },
        ),
        In("error", "bridge_token_refresh_no_oauth"),
        y < T7s)
      ) {
        let b = setTimeout(u, Sld, f, m);
        o.set(f, b);
      }
      return;
    }
    (s.delete(f),
      T(
        `[${n}:token] Refreshing token for sessionId=${f}: new token prefix=${g.slice(0, 15)}\u2026`,
      ),
      G("tengu_bridge_token_refreshed", {}),
      t(f, g));
    let h = setTimeout(u, H7s, f, m);
    (o.set(f, h), T(`[${n}:token] Scheduled follow-up refresh for sessionId=${f} in ${dUr(H7s)}`));
  }
  function d(f) {
    a(f);
    let m = o.get(f);
    if (m) (clearTimeout(m), o.delete(f));
    s.delete(f);
  }
  function p() {
    for (let f of i.keys()) a(f);
    for (let f of o.values()) clearTimeout(f);
    (o.clear(), s.clear());
  }
  return {
    schedule: l,
    scheduleFromExpiresIn: c,
    cancel: d,
    cancelAll: p,
  };
}
var bld = 300000,
  H7s = 1800000,
  T7s = 3,
  Sld = 60000;
