// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module drt
// matched 2.1.88 source: node_modules/proper-lockfile/lib/lockfile.js
// class=new  jaccard=0.0409  score=0.0854  fileCov=0.0727
// note: nearest: node_modules/proper-lockfile/lib/lockfile.js (0.0409); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var drt = E(() => {
  zb();
  ft();
  Rx();
  je();
  At();
  R9();
  Tjr = ve(() => dt.object({
    access_token: dt.string(),
    expires_in: dt.number(),
    refresh_token: dt.string().nullish()
  }));
});
var iMt = {};
_t(iMt, {
  withTimeout: () => withTimeout,
  sleep: () => sleep
});
function sleep(e, t, n) {
  return new Promise((r, o) => {
    if (t?.aborted) {
      if (n?.throwOnAbort || n?.abortError) o(n.abortError?.() ?? Error("aborted"));else r();
      return;
    }
    let s = setTimeout((a, l, c) => {
      a?.removeEventListener("abort", l), c();
    }, e, t, i, r);
    function i() {
      if (clearTimeout(s), n?.throwOnAbort || n?.abortError) o(n.abortError?.() ?? Error("aborted"));else r();
    }
    if (t?.addEventListener("abort", i, {
      once: true
    }), n?.unref) s.unref();
  });
}
function yfd(e, t) {
  e(Error(t));
}
function withTimeout(e, t, n) {
  let r,
    o = new Promise((s, i) => {
      r = setTimeout(yfd, t, i, n);
    });
  return Promise.race([e, o]).finally(() => {
    if (r !== void 0) clearTimeout(r);
  });
}
function nHn(e, t) {
  let n = Zsi.dirname(t);
  return async r => {
    let o = await _fd(n);
    try {
      return G("tengu_wif_user_oauth_lock_acquired", {}), await e(r);
    } finally {
      G("tengu_wif_user_oauth_lock_released", {});
      try {
        await o();
      } catch (s) {
        if (gd(s)) T(`wif: lock release failed: ${s}`);else ke(s);
      }
    }
  };
}
async function _fd(e) {
  for (let t = 0;; t++) try {
    return await Ay(e, {
      onCompromised: n => T(`WIF credentials lock compromised: ${n}`, {
        level: "error"
      })
    });
  } catch (n) {
    if (n.code !== "ELOCKED") throw n;
    if (t >= Qsi) throw G("tengu_wif_user_oauth_lock_retry_limit", {
      attempt: t
    }), new nf(`Could not acquire credentials lock at ${e} after ${Qsi} retries`);
    G("tengu_wif_user_oauth_lock_retry", {
      attempt: t
    }), await sleep(1000 + Math.random() * 1000);
  }
}
var Zsi,
  Qsi = 5;