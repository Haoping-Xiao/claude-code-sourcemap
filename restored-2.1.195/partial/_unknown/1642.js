// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f3r
// matched 2.1.88 source: node_modules/node-forge/lib/pbkdf2.js
// class=partial  jaccard=0.1176  score=1  fileCov=0.1176
// note: low-confidence suggestion: node_modules/node-forge/lib/pbkdf2.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var f3r = E(() => {
  wpi = require("crypto"), Tgd = typeof ((p3r = globalThis === null || globalThis === void 0 ? void 0 : globalThis.crypto) === null || p3r === void 0 ? void 0 : p3r.randomUUID) === "function" ? globalThis.crypto.randomUUID.bind(globalThis.crypto) : wpi.randomUUID;
});
class Cpi {
  constructor(e) {
    var t, n, r, o, s, i, a;
    this.url = e.url, this.body = e.body, this.headers = (t = e.headers) !== null && t !== void 0 ? t : Sle(), this.method = (n = e.method) !== null && n !== void 0 ? n : "GET", this.timeout = (r = e.timeout) !== null && r !== void 0 ? r : 0, this.multipartBody = e.multipartBody, this.formData = e.formData, this.disableKeepAlive = (o = e.disableKeepAlive) !== null && o !== void 0 ? o : false, this.proxySettings = e.proxySettings, this.streamResponseStatusCodes = e.streamResponseStatusCodes, this.withCredentials = (s = e.withCredentials) !== null && s !== void 0 ? s : false, this.abortSignal = e.abortSignal, this.onUploadProgress = e.onUploadProgress, this.onDownloadProgress = e.onDownloadProgress, this.requestId = e.requestId || SMt(), this.allowInsecureConnection = (i = e.allowInsecureConnection) !== null && i !== void 0 ? i : false, this.enableBrowserStreams = (a = e.enableBrowserStreams) !== null && a !== void 0 ? a : false, this.requestOverrides = e.requestOverrides, this.authSchemes = e.authSchemes;
  }
}
function m3r(e) {
  return new Cpi(e);
}