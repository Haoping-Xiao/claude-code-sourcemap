// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OK
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/client.mjs
// class=new  jaccard=0.0122  score=1  fileCov=0.0122
// note: nearest: node_modules/@anthropic-ai/sdk/client.mjs (0.0122); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OK] deps: $ge, @anthropic-ai/sdk/internal/detect-platform.mjs, Fsn, constants/oauth.ts, @anthropic-ai/sdk/core/error.mjs, gtoken/build/src/index.js, fflate/esm/index.mjs, @anthropic-ai/sdk/internal/decoders/line.mjs, @anthropic-ai/sdk/internal/uploads.mjs, @anthropic-ai/bedrock-sdk/internal/headers.mjs, @anthropic-ai/sdk/client.mjs, @anthropic-ai/sdk/core/api-promise.mjs, @anthropic-ai/sdk/resources/beta/messages/messages.mjs, @anthropic-ai/sdk/resources/models.mjs, @anthropic-ai/sdk/resources/beta/beta.mjs, @anthropic-ai/sdk/resources/messages/messages.mjs, Fsn, utils/bash/ParsedCommand.ts, @anthropic-ai/mcpb/dist/shared/log.js, @anthropic-ai/sdk/internal/detect-platform.mjs
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