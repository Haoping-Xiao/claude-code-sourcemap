// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ekr
// matched 2.1.88 source: node_modules/axios/lib/adapters/adapters.js
// class=partial  jaccard=0.0724  score=0.6067  fileCov=0.076
// note: low-confidence suggestion: node_modules/axios/lib/adapters/adapters.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ekr = E(() => {
  XH();
  A_s();
  x_s();
  $_s();
  KV();
  Zxr = {
    http: E_s,
    xhr: I_s,
    fetch: {
      get: Qxr
    }
  };
  or.forEach(Zxr, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", {
          value: t
        });
      } catch (n) {}
      Object.defineProperty(e, "adapterName", {
        value: t
      });
    }
  });
  Jdn = {
    getAdapter: zSu,
    adapters: Zxr
  };
});
function tkr(e) {
  if (e.cancelToken) e.cancelToken.throwIfRequested();
  if (e.signal && e.signal.aborted) throw new YV(null, e);
}
function Qdn(e) {
  if (tkr(e), e.headers = VC.from(e.headers), e.data = L0t.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1) e.headers.setContentType("application/x-www-form-urlencoded", false);
  return Jdn.getAdapter(e.adapter || SZe.adapter, e)(e).then(function (r) {
    return tkr(e), r.data = L0t.call(e, e.transformResponse, r), r.headers = VC.from(r.headers), r;
  }, function (r) {
    if (!D0t(r)) {
      if (tkr(e), r && r.response) r.response.data = L0t.call(e, e.transformResponse, r.response), r.response.headers = VC.from(r.response.headers);
    }
    return Promise.reject(r);
  });
}