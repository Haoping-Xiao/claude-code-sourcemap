// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module svn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var svn = E(() => {/*! @azure/msal-common v15.13.1 2025-10-29 */});
class qye {
  static generateThrottlingStorageKey(e) {
    return `${Cle.THROTTLING_PREFIX}.${JSON.stringify(e)}`;
  }
  static preProcess(e, t, n) {
    let r = qye.generateThrottlingStorageKey(t),
      o = e.getThrottlingCache(r);
    if (o) {
      if (o.throttleTime < Date.now()) {
        e.removeItem(r, n);
        return;
      }
      throw new vj(o.errorCodes?.join(" ") || vo.EMPTY_STRING, o.errorMessage, o.subError);
    }
  }
  static postProcess(e, t, n, r) {
    if (qye.checkResponseStatus(n) || qye.checkResponseForRetryAfter(n)) {
      let o = {
        throttleTime: qye.calculateThrottleTime(parseInt(n.headers[rT.RETRY_AFTER])),
        error: n.body.error,
        errorCodes: n.body.error_codes,
        errorMessage: n.body.error_description,
        subError: n.body.suberror
      };
      e.setThrottlingCache(qye.generateThrottlingStorageKey(t), o, r);
    }
  }
  static checkResponseStatus(e) {
    return e.status === 429 || e.status >= 500 && e.status < 600;
  }
  static checkResponseForRetryAfter(e) {
    if (e.headers) return e.headers.hasOwnProperty(rT.RETRY_AFTER) && (e.status < 200 || e.status >= 300);
    return false;
  }
  static calculateThrottleTime(e) {
    let t = e <= 0 ? 0 : e,
      n = Date.now() / 1000;
    return Math.floor(Math.min(n + (t || Cle.DEFAULT_THROTTLE_TIME_SECONDS), n + Cle.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
  }
  static removeThrottle(e, t, n, r) {
    let o = rot(t, n, r),
      s = this.generateThrottlingStorageKey(o);
    e.removeItem(s, n.correlationId);
  }
}