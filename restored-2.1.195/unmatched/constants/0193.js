// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OK
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/client.mjs
// class=new  jaccard=0.0122  score=1  fileCov=0.0122
// note: nearest: node_modules/@anthropic-ai/sdk/client.mjs (0.0122); dir inferred from dep-graph -> constants; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OK] deps: $ge, rwe, Fsn, HSr, p0, uee, Ksn, Zsn, Tx, BSr, NJe, tin, _Er, xEr, yEr, IEr, Fsn, rv, ZCt, rwe
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