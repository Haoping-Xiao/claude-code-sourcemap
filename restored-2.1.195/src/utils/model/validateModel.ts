// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aCo
// matched 2.1.88 source: src/utils/model/validateModel.ts
// class=modified  jaccard=0.5127  score=0.6422  fileCov=0.7177
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function asl() {
  lCo.clear();
}
async function validateModel(model, t) {
  let n = model.trim();
  if (!n)
    return {
      valid: false,
      error: "Model name cannot be empty",
    };
  if (!xa(n))
    return {
      valid: false,
      error: `Model '${n}' is not in the list of available models`,
    };
  if (!t?.forceServerProbe) {
    let r = n.toLowerCase();
    if (hye.includes(r))
      return {
        valid: true,
      };
    if (n === process.env.ANTHROPIC_CUSTOM_MODEL_OPTION)
      return {
        valid: true,
      };
    if (lCo.has(n))
      return {
        valid: true,
      };
  }
  try {
    return (
      await yN({
        model: n,
        max_tokens: 1,
        maxRetries: 0,
        querySource: "model_validation",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Hi",
                cache_control: {
                  type: "ephemeral",
                },
              },
            ],
          },
        ],
      }),
      lCo.set(n, true),
      {
        valid: true,
      }
    );
  } catch (r) {
    return handleValidationError(r, n);
  }
}
function handleValidationError(error, modelName) {
  if (error instanceof iUe) {
    let r = get3PFallbackSuggestion(modelName),
      o = r ? `. Try '${r}' instead` : "";
    return {
      valid: false,
      error: `Model '${modelName}' not found${o}`,
      notFound: true,
    };
  }
  if (error instanceof Fo) {
    if (error instanceof sUe)
      return {
        valid: false,
        error: "Authentication failed. Please check your API credentials.",
      };
    if (error instanceof Hx)
      return {
        valid: false,
        error: "Network error. Please check your internet connection.",
      };
    let r = error.error;
    if (
      r &&
      typeof r === "object" &&
      "type" in r &&
      r.type === "not_found_error" &&
      "message" in r &&
      typeof r.message === "string" &&
      r.message.includes("model:")
    )
      return {
        valid: false,
        error: `Model '${modelName}' not found`,
        notFound: true,
      };
    return {
      valid: false,
      error: `API error: ${error.message}`,
    };
  }
  return {
    valid: false,
    error: `Unable to validate model: ${error instanceof Error ? error.message : String(error)}`,
  };
}
function get3PFallbackSuggestion(model) {
  if (td()) return;
  let t = model.toLowerCase();
  if (t.includes("fable-5") || t.includes("fable_5"))
    return Oe.ANTHROPIC_DEFAULT_OPUS_MODEL ?? Vp().opus48;
  if (t.includes("opus-4-8") || t.includes("opus_4_8")) return Vp().opus47;
  if (t.includes("opus-4-7") || t.includes("opus_4_7")) return Vp().opus46;
  if (t.includes("opus-4-6") || t.includes("opus_4_6")) return Vp().opus45;
  if (t.includes("opus-4-5") || t.includes("opus_4_5")) return Vp().opus41;
  if (t.includes("sonnet-4-6") || t.includes("sonnet_4_6")) return Vp().sonnet45;
  if (t.includes("sonnet-4-5") || t.includes("sonnet_4_5")) return Vp().sonnet40;
  return;
}
var lCo;
