// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K_s
// class=new  (no 2.1.88 match)
// note: 16 renamed
// ─────────────────────────────────────────────────────────────────────────
var K_s = E(() => {
  XH();
  F_s();
  Kdn();
  Mdn();
  bxr();
  fFe();
  G_s();
  I0t();
  KV();
  W_s();
  Tae();
  ekr();
  V_s();
  NR = z_s(SZe);
  NR.Axios = j0t;
  NR.CanceledError = YV;
  NR.CancelToken = j_s;
  NR.isCancel = D0t;
  NR.VERSION = _Fe;
  NR.toFormData = zwe;
  NR.AxiosError = Wi;
  NR.Cancel = NR.CanceledError;
  NR.all = function (t) {
    return Promise.all(t);
  };
  NR.spread = rkr;
  NR.isAxiosError = okr;
  NR.mergeConfig = Mee;
  NR.AxiosHeaders = VC;
  NR.formToJSON = e => Pdn(or.isHTMLForm(e) ? new FormData(e) : e);
  NR.getAdapter = Jdn.getAdapter;
  NR.HttpStatusCode = q_s;
  NR.default = NR;
  po = NR;
});
var G0t = {};
_t(G0t, {
  toFormData: () => toFormData,
  spread: () => spread,
  mergeConfig: () => mergeConfig,
  isCancel: () => isCancel,
  isAxiosError: () => isAxiosError,
  getAdapter: () => getAdapter,
  formToJSON: () => formToJSON,
  default: () => po,
  all: () => all,
  VERSION: () => VERSION,
  HttpStatusCode: () => HttpStatusCode,
  CanceledError: () => CanceledError,
  CancelToken: () => CancelToken,
  Cancel: () => Cancel,
  AxiosHeaders: () => AxiosHeaders,
  AxiosError: () => AxiosError,
  Axios: () => Axios
});
var Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, getAdapter, mergeConfig;