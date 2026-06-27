// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OK
// matched 2.1.88 source: src/upstreamproxy/upstreamproxy.ts
// class=new  jaccard=0.0169  score=1  fileCov=0.0169
// note: nearest: src/upstreamproxy/upstreamproxy.ts (0.0169); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var OK = E(() => {
  $ge();
  rwe();
  Fsn();
  HSr();
  p0();
  uee();
  Ksn();
  Zsn();
  Tx();
  BSr();
  NJe();
  tin();
  _Er();
  xEr();
  yEr();
  IEr();
  Fsn();
  rv();
  ZCt();
  rwe();
  REr = ah, Tin = new WeakMap(), kEr = new WeakSet(), Xos = function () {
    return this.baseURL !== "https://api.anthropic.com";
  };
  ah.Anthropic = REr;
  ah.HUMAN_PROMPT = Jos;
  ah.AI_PROMPT = Qos;
  ah.DEFAULT_TIMEOUT = 600000;
  ah.AnthropicError = ui;
  ah.APIError = Fo;
  ah.APIConnectionError = Hx;
  ah.APIConnectionTimeoutError = DK;
  ah.APIUserAbortError = tf;
  ah.NotFoundError = iUe;
  ah.ConflictError = VCt;
  ah.RateLimitError = KCt;
  ah.BadRequestError = WCt;
  ah.AuthenticationError = sUe;
  ah.InternalServerError = YCt;
  ah.PermissionDeniedError = qCt;
  ah.UnprocessableEntityError = zCt;
  ah.toFile = oin;
  G2 = class G2 extends ah {
    constructor() {
      super(...arguments);
      this.completions = new cwe(this), this.messages = new j2(this), this.models = new OJe(this), this.beta = new vw(this);
    }
  };
  G2.Completions = cwe;
  G2.Messages = j2;
  G2.Models = OJe;
  G2.Beta = vw;
});