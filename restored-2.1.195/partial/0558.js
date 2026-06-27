// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kdn
// matched 2.1.88 source: node_modules/axios/lib/core/Axios.js
// class=partial  jaccard=0.1003  score=0.2557  fileCov=0.1416
// note: low-confidence suggestion: node_modules/axios/lib/core/Axios.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Kdn = E(() => {
  XH();
  Tae();
});
var Ydn = e => {
  let t = Mee({}, e),
    n = p => or.hasOwnProp(t, p) ? t[p] : void 0,
    r = n("data"),
    o = n("withXSRFToken"),
    s = n("xsrfHeaderName"),
    i = n("xsrfCookieName"),
    a = n("headers"),
    l = n("auth"),
    c = n("baseURL"),
    u = n("allowAbsoluteUrls"),
    d = n("url");
  if (t.headers = a = VC.from(a), t.url = pFe(mFe(c, d, u), e.params, e.paramsSerializer), l) a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
  if (or.isFormData(r)) {
    if (D_.hasStandardBrowserEnv || D_.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);else if (or.isFunction(r.getHeaders)) {
      let p = r.getHeaders(),
        f = ["content-type", "content-length"];
      Object.entries(p).forEach(([m, g]) => {
        if (f.includes(m.toLowerCase())) a.set(m, g);
      });
    }
  }
  if (D_.hasStandardBrowserEnv) {
    if (or.isFunction(o)) o = o(t);
    if (o === !0 || o == null && H_s(t.url)) {
      let f = s && i && v_s.read(i);
      if (f) a.set(s, f);
    }
  }
  return t;
};