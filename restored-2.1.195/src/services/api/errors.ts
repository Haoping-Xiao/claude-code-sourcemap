// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gSe
// matched 2.1.88 source: src/services/api/errors.ts
// class=modified  jaccard=0.1275  score=0.2816  fileCov=0.189
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gSe]
((dlp = new Set([
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "UNABLE_TO_GET_ISSUER_CERT",
  "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
  "CERT_SIGNATURE_FAILURE",
  "CERT_NOT_YET_VALID",
  "CERT_HAS_EXPIRED",
  "CERT_REVOKED",
  "CERT_REJECTED",
  "CERT_UNTRUSTED",
  "DEPTH_ZERO_SELF_SIGNED_CERT",
  "SELF_SIGNED_CERT_IN_CHAIN",
  "CERT_CHAIN_TOO_LONG",
  "PATH_LENGTH_EXCEEDED",
  "ERR_TLS_CERT_ALTNAME_INVALID",
  "HOSTNAME_MISMATCH",
  "ERR_TLS_HANDSHAKE_TIMEOUT",
  "ERR_SSL_WRONG_VERSION_NUMBER",
  "ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC",
])),
  (out = new Set([
    "ECONNREFUSED",
    "ConnectionRefused",
    "ENOTFOUND",
    "ENETUNREACH",
    "ENETDOWN",
    "EHOSTUNREACH",
    "EHOSTDOWN",
    "EAI_AGAIN",
    "FailedToOpenSocket",
  ])),
  (que = new Set(["ECONNRESET", "EPIPE", "ConnectionClosed", "StreamSuspended"])));
function K1(e) {
  return e.startsWith(Eb) || e.startsWith(`Please run /login \xB7 ${Eb}`);
}
function hSe(e) {
  if (!e.isApiErrorMessage) return !1;
  let t = e.message.content;
  if (!Array.isArray(t)) return !1;
  return t.some((n) => n.type === "text" && n.text.startsWith(nF));
}
function Ljt(e) {
  let t = e.match(/prompt is too long[^0-9]*(\d+)\s*tokens?\s*>\s*(\d+)/i);
  return {
    actualTokens: t ? parseInt(t[1], 10) : void 0,
    limitTokens: t ? parseInt(t[2], 10) : void 0,
  };
}
function iut(e) {
  if (!hSe(e) || !e.errorDetails) return;
  let { actualTokens: t, limitTokens: n } = Ljt(e.errorDetails);
  if (t === void 0 || n === void 0) return;
  let r = t - n;
  return r > 0 ? r : void 0;
}
function Gaa(e) {
  let { actualTokens: t, limitTokens: n, conversationTokensEstimate: r } = e;
  if (t === void 0 || n === void 0)
    return (
      `${nF} \xB7 this conversation is a single ` +
      "exchange and cannot be compacted \u2014 the request size comes mostly " +
      "from system prompt, tool definitions, or attachments."
    );
  if (r >= t * ylp)
    return `${nF} \xB7 the request is ~${t} tokens (limit ${n}) and this conversation's own content is most of it. A single-exchange conversation cannot be compacted; start with less content (smaller files or pasted text).`;
  return (
    `${nF} \xB7 the request is ~${t} tokens (limit ${n}) but this conversation is only ~${r} tokens \u2014 the rest is system prompt, ` +
    "tool definitions, and attachment content. A single-exchange conversation cannot be compacted; reduce attached files/tools or start with less context."
  );
}
function _lp(e) {
  return e.includes("request_too_large") || $io(e) !== void 0;
}
function Waa(e) {
  if (e.includes("request_too_large") || e.toLowerCase().includes("too much media"))
    return new Set(["document", "image"]);
  let t = $io(e);
  return t ? new Set([t.kind]) : void 0;
}
function $io(e) {
  let t = e.match(
    /messages[.[](\d+)[\].]+content[.[](\d+)[\].]+(?:tool_result[.[]content[.[]\d+[\].]+)?(image|document|pdf)/,
  );
  if (t)
    return {
      messageIdx: Number(t[1]),
      contentIdx: Number(t[2]),
      kind: t[3] === "image" ? "image" : "document",
    };
  let n = e.toLowerCase();
  if (blp.some((r) => n.includes(r)))
    return {
      kind: "image",
    };
  if (Slp.some((r) => n.includes(r)))
    return {
      kind: "document",
    };
  return;
}
function P1n(e) {
  if (!(e instanceof Fo) || e.status !== 400) return;
  return $io(e.message);
}
function M1n(e) {
  return e.isApiErrorMessage === !0 && e.errorDetails !== void 0 && _lp(e.errorDetails);
}
function Oio(e) {
  return e instanceof Error && e.message.toLowerCase().includes("prompt is too long");
}
function Djt(e) {
  return (
    e instanceof Error &&
    e.message.toLowerCase().includes("input length and `max_tokens` exceed context limit")
  );
}
function Nio(e) {
  return e instanceof Error && e.message.toLowerCase().includes("credit balance is too low");
}
function O1n(e) {
  return e instanceof Error && e.message.toLowerCase().includes("organization has been disabled");
}
function Baa() {
  let e = fr();
  if (e === "firstParty") {
    if (_u()) return ` If it persists, check ${Naa}.`;
    let t = process.env.ANTHROPIC_BASE_URL ?? "";
    return ` If it persists, check your inference gateway (${URL.parse(t)?.host || t}).`;
  }
  if (e === "anthropicAws") return ` If it persists, check ${Naa}.`;
  return ` If it persists, check your ${ote[e]} service status.`;
}
function jio() {
  let e = `max ${J9i} pages, ${Ra(yUt)}`;
  return Ir()
    ? `PDF too large (${e}). Try reading the file a different way (e.g., extract text with pdftotext).`
    : `PDF too large (${e}). Double press esc to go back and try again, or use pdftotext to convert to text first.`;
}
function Gio() {
  return Ir()
    ? "PDF is password protected. Try using a CLI tool to extract or convert the PDF."
    : "PDF is password protected. Please double press esc to edit your message and try again.";
}
function Wio() {
  return Ir()
    ? "The PDF file was not valid. Try converting it to text first (e.g., pdftotext)."
    : "The PDF file was not valid. Double press esc to go back and try again with a different file.";
}
function D1n() {
  return Ir()
    ? "Image was too large. Try resizing the image or using a different approach."
    : "Image was too large. Double press esc to go back and try again with a smaller image.";
}
function qio() {
  let e = `max ${Ra(X9i)}`;
  return Ir()
    ? `Request too large (${e}). Try with a smaller file.`
    : `Request too large (${e}). Double press esc to go back and try with a smaller file.`;
}
function lut(e) {
  let t = e === "document" ? "a document" : "an image",
    n = Ir()
      ? "Re-read the file with a different approach if you still need it."
      : "Double press esc to edit your message, or re-read the file if you still need it.";
  return `${Eb}: ${t} in the conversation could not be processed and was removed. ${n}`;
}
function wlp() {
  return Ir()
    ? "Your account does not have access to Claude. Please login again or contact your administrator."
    : U1n;
}
function Clp() {
  return vlp;
}
function Uaa() {
  return ut(process.env.CLAUDE_CODE_REMOTE);
}
function Ilp(e, t, n) {
  try {
    let r = -1;
    for (let u = 0; u < n.length; u++) {
      let d = n[u];
      if (!d) continue;
      let p = d.message.content;
      if (Array.isArray(p)) {
        for (let f of p)
          if (f.type === "tool_use" && "id" in f && f.id === e) {
            r = u;
            break;
          }
      }
      if (r !== -1) break;
    }
    let o = -1;
    for (let u = 0; u < t.length; u++) {
      let d = t[u];
      if (!d) continue;
      if (d.type === "assistant" && "message" in d) {
        let p = d.message.content;
        if (Array.isArray(p)) {
          for (let f of p)
            if (f.type === "tool_use" && "id" in f && f.id === e) {
              o = u;
              break;
            }
        }
      }
      if (o !== -1) break;
    }
    let s = [];
    for (let u = r + 1; u < n.length; u++) {
      let d = n[u];
      if (!d) continue;
      let p = d.message.content;
      if (Array.isArray(p))
        for (let f of p) {
          let m = d.message.role;
          if (f.type === "tool_use" && "id" in f) s.push(`${m}:tool_use:${f.id}`);
          else if (f.type === "tool_result" && "tool_use_id" in f)
            s.push(`${m}:tool_result:${f.tool_use_id}`);
          else if (f.type === "text") s.push(`${m}:text`);
          else if (f.type === "thinking") s.push(`${m}:thinking`);
          else if (f.type === "image") s.push(`${m}:image`);
          else s.push(`${m}:${f.type}`);
        }
      else if (typeof p === "string") s.push(`${d.message.role}:string_content`);
    }
    let i = [];
    for (let u = o + 1; u < t.length; u++) {
      let d = t[u];
      if (!d) continue;
      switch (d.type) {
        case "user":
        case "assistant": {
          if ("message" in d) {
            let p = d.message.content;
            if (Array.isArray(p))
              for (let f of p) {
                let m = d.message.role;
                if (f.type === "tool_use" && "id" in f) i.push(`${m}:tool_use:${f.id}`);
                else if (f.type === "tool_result" && "tool_use_id" in f)
                  i.push(`${m}:tool_result:${f.tool_use_id}`);
                else if (f.type === "text") i.push(`${m}:text`);
                else if (f.type === "thinking") i.push(`${m}:thinking`);
                else if (f.type === "image") i.push(`${m}:image`);
                else i.push(`${m}:${f.type}`);
              }
            else if (typeof p === "string") i.push(`${d.message.role}:string_content`);
          }
          break;
        }
        case "attachment":
          if ("attachment" in d) i.push(`attachment:${d.attachment.type}`);
          break;
        case "system":
          if ("subtype" in d) i.push(`system:${d.subtype}`);
          break;
        case "progress":
          if (
            "progress" in d &&
            d.progress &&
            typeof d.progress === "object" &&
            "type" in d.progress
          )
            i.push(`progress:${d.progress.type ?? "unknown"}`);
          else i.push("progress:unknown");
          break;
      }
    }
    let a = (u) => {
        if (!u) return "<none>";
        let d = u.message.content;
        if (!Array.isArray(d)) return `${u.message.role}:string`;
        return `${u.message.role}:[${d.map((p) => (p.type === "tool_use" ? `tool_use:${p.id}` : p.type === "tool_result" ? `tool_result:${p.tool_use_id}` : p.type)).join(",")}]`;
      },
      l = 0,
      c = 0;
    for (let u of n) {
      let d = u.message.content;
      if (!Array.isArray(d)) continue;
      for (let p of d) {
        if (p.type === "tool_use" && p.id === e) l++;
        if (p.type === "tool_result" && p.tool_use_id === e) c++;
      }
    }
    G("tengu_tool_use_tool_result_mismatch_error", {
      toolUseId: Hr(e),
      normalizedSequence: s.join(", "),
      preNormalizedSequence: i.join(", "),
      normalizedMessageCount: n.length,
      originalMessageCount: t.length,
      normalizedToolUseIndex: r,
      originalToolUseIndex: o,
      offendingMessageBlocks: a(n[r]),
      followingMessageBlocks: r === -1 ? "<none>" : a(n[r + 1]),
      toolUseOccurrences: l,
      toolResultOccurrences: c,
    });
  } catch (r) {}
}
function qaa(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "content" in e &&
    "model" in e &&
    "usage" in e &&
    Array.isArray(e.content) &&
    typeof e.model === "string" &&
    typeof e.usage === "object"
  );
}
function F1n(e) {
  return (
    !!T0 &&
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes(T0.header) &&
    e.message.includes("anthropic-beta")
  );
}
function Vio(e) {
  return (
    e instanceof Fo &&
    e.status === 400 &&
    (e.message.includes("Advisor tool result content could not be processed") ||
      e.message.includes("found in advisor_tool_result blocks"))
  );
}
function Pjt(e) {
  return e instanceof Fo && e.status === 400 && e.message.includes(xlp);
}
function zio(e) {
  return (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes(fye.header) &&
    e.message.includes("anthropic-beta")
  );
}
function Vaa(e) {
  if (!(e instanceof Fo) || e.status !== 400) return;
  let t = e.message;
  if (t.includes("`server-side-fallback-") && t.includes("anthropic-beta")) return "beta_header";
  if (/does not support the `fallbacks?` parameter/.test(t)) return "unsupported_primary";
  if (/The `fallbacks?` parameter is not supported/.test(t)) return "unsupported_primary";
  if (t.includes("is not a valid fallback target for")) return "invalid_target";
  if (t.includes("`fallback` and `fallbacks` cannot both be set")) return "param_shape";
  if (/`fallbacks?(\[\d+\])?\.[a-z_]+`?/.test(t)) return "param_shape";
  if (/target model '[^']*' is not compatible with/.test(t)) return "param_shape";
  if (t.includes("server-side fallback is not supported")) return "param_shape";
  if (/\bfallbacks?\.(messages|stream|fallback)\b is not supported/.test(t)) return "param_shape";
  if (/\bfallbacks?(\[\d+\])?: unknown field/.test(t)) return "param_shape";
  if (
    t.includes("Extra inputs are not permitted") &&
    /\bfallbacks?(\[\d+\])?((\.|\s*->\s*)\w+)*\s*:/.test(t)
  )
    return "extra_forbidden";
  return;
}
function zaa(e) {
  if (!(e instanceof Fo) || e.status !== 400) return;
  let t = e.message;
  if (
    t.includes("fallback-credit-") &&
    (t.includes("anthropic-beta") || t.includes("anthropic_beta"))
  )
    return "credit_beta_header";
  if (t.includes("fallback_credit_token: invalid or malformed")) return "credit_malformed";
  if (t.includes("fallback_credit_token: does not belong to this organization"))
    return "credit_wrong_org";
  if (t.includes("fallback_credit_token: has expired")) return "credit_expired";
  if (t.includes("fallback_credit_token: is not valid for model")) return "credit_invalid_model";
  if (t.includes("Extra inputs are not permitted") && /\bfallback_credit_token\s*:/.test(t))
    return "credit_extra_forbidden";
  if (/\bfallback_credit_token\s*:/.test(t)) return "credit_other";
  return;
}
function j1n(e) {
  if (!(e instanceof Fo) || e.status !== 400) return !1;
  let t = e.message;
  if (t.includes(jY.header) && t.includes("anthropic-beta")) return !0;
  if (t.includes("Unexpected role") && t.includes("input message role")) return !0;
  return t.includes("not supported") && /role .{0,2}system/i.test(t);
}
function Kio(e) {
  if (!(e instanceof Fo) || e.status !== 400) return !1;
  let t = e.message.toLowerCase().replaceAll("`", "");
  if (t.includes("signature in thinking block")) return !0;
  if (t.includes("thinking.signature") && t.includes("field required")) return !0;
  return (
    (t.includes("thinking block") || t.includes("redacted_thinking")) &&
    (t.includes("cannot be modified") || t.includes("invalid signature"))
  );
}
function Yio(e) {
  if (!(e instanceof Fo) || e.status !== 400) return null;
  let t =
    /thinking\.type[^a-z]{1,8}(enabled|adaptive)[^]*?not supported/i.exec(e.message) ??
    /\b(adaptive) thinking is not supported/i.exec(e.message);
  return t?.[1] ? t[1].toLowerCase() : null;
}
function G1n(e, t, n) {
  let r = klp(e, t, n);
  if (e instanceof Fo && typeof e.status === "number") r.apiErrorStatus = e.status;
  let o = n?.requestId || (e instanceof Fo ? e.requestID || e.error?.request_id : void 0);
  if (o) r.requestId = o;
  return r;
}
function klp(e, t, n) {
  if (e instanceof DK || (e instanceof Hx && e.message.toLowerCase().includes("timeout")))
    return jl({
      content: aut,
      error: "server_error",
    });
  if (e instanceof eut || e instanceof NU)
    return jl({
      content: D1n(),
      error: "invalid_request",
      errorDetails: e.message,
    });
  if (e instanceof Error && e.message.includes(m5e))
    return jl({
      content: m5e,
      error: "rate_limit",
    });
  if (e instanceof Error && e.message.includes(g5e))
    return jl({
      content: g5e,
      error: "rate_limit",
    });
  if (e instanceof Fo && e.status === 429) {
    let s = tut(bo()),
      i = kaa(e),
      a = Rio(e),
      l =
        s &&
        tH(t) &&
        (i?.rateLimitType === "seven_day_overage_included" || a.errorCode === "credits_required");
    if (s && i && !l) {
      let m = Iio(i, t);
      if (m)
        return jl({
          content: m,
          error: "rate_limit",
        });
      return jl({
        content: zte,
        error: "rate_limit",
      });
    }
    if (s && Mio(e.message) && !cJe()) (D_r(!0), G("tengu_1m_credits_clamp_activated", {}));
    if (l) {
      let m =
          e.headers?.get?.("anthropic-ratelimit-unified-overage-disabled-reason") ??
          a.overageDisabledReason ??
          Dt().cachedExtraUsageDisabledReason,
        g = i?.rateLimitType === "seven_day_overage_included";
      return jl({
        content: Rlp(m, g),
        error: "rate_limit",
        errorDetails: e.message,
      });
    }
    if (s && Mio(e.message)) {
      let m = Ir()
        ? "turn on usage credits at claude.ai/settings/usage, or use --model to switch to standard context"
        : "run /usage-credits to turn them on, or /model to switch to standard context";
      return jl({
        content: `${Eb}: Usage credits required for 1M context \xB7 ${m}`,
        error: "rate_limit",
        errorDetails: e.message,
      });
    }
    let c = e.message.replace(/^429\s+/, ""),
      u;
    try {
      let m = Ft(c),
        g = m?.error?.message ?? m?.message;
      if (typeof g === "string") u = g;
    } catch {}
    let d = u || c;
    if (s && e.headers?.get?.("anthropic-ratelimit-unified-overage-disabled-reason"))
      return jl({
        content: d,
        error: "rate_limit",
      });
    let p = s
        ? "Server is temporarily limiting requests (not your usage limit)"
        : "Request rejected (429)",
      f = `this may be a temporary capacity issue.${Baa()}`;
    return jl({
      content: `${Eb}: ${p} \xB7 ${d || f}`,
      error: "rate_limit",
    });
  }
  if (Oio(e) || Djt(e))
    return jl({
      content: nF,
      error: "invalid_request",
      errorDetails: e.message,
    });
  if (e instanceof Error && /maximum of \d+ PDF pages/.test(e.message))
    return jl({
      content: jio(),
      error: "invalid_request",
      errorDetails: e.message,
    });
  if (e instanceof Error && e.message.includes("The PDF specified is password protected"))
    return jl({
      content: Gio(),
      error: "invalid_request",
      errorDetails: e.message,
    });
  if (e instanceof Error && e.message.includes("The PDF specified was not valid"))
    return jl({
      content: Wio(),
      error: "invalid_request",
      errorDetails: e.message,
    });
  if (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes("image exceeds") &&
    e.message.includes("maximum")
  )
    return jl({
      content: D1n(),
      error: "invalid_request",
      errorDetails: e.message,
    });
  if (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes("image dimensions exceed") &&
    e.message.includes("many-image")
  )
    return jl({
      content: Ir()
        ? "An image in the conversation exceeds the dimension limit for many-image requests (2000px). Start a new session with fewer images."
        : "An image in the conversation exceeds the dimension limit for many-image requests (2000px). Run /compact to remove old images from context, or start a new session.",
      error: "invalid_request",
      errorDetails: e.message,
    });
  if (Pjt(e)) {
    let s = Ir()
      ? "change or unset the advisorModel setting (or the --advisor flag)"
      : "run /advisor to change or disable the advisor";
    return jl({
      content: `${Eb}: ${e.message.replace(/^400\s+/, "")} \xB7 The configured advisor model is not compatible with this request model \u2014 ${s}`,
      error: "invalid_request",
      errorDetails: e.message,
    });
  }
  {
    let s = P1n(e);
    if (s && e instanceof Error)
      return jl({
        content: lut(s.kind),
        error: "invalid_request",
        errorDetails: e.message,
      });
  }
  if (F1n(e))
    return jl({
      content: "Auto mode is unavailable for your plan",
      error: "invalid_request",
    });
  if (e instanceof Fo && e.status === 413) {
    if (e.message.toLowerCase().includes("context window"))
      return jl({
        content: nF,
        error: "invalid_request",
        errorDetails: e.message,
      });
    return jl({
      content: qio(),
      error: "invalid_request",
      errorDetails: `request_too_large: ${e.message}`,
    });
  }
  if (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes("`tool_use` ids were found without `tool_result` blocks immediately after")
  ) {
    if (n?.messages && n?.messagesForAPI) {
      let s = e.message.match(/toolu_[A-Za-z0-9_]+/),
        i = s ? s[0] : null;
      if (i) Ilp(i, n.messages, n.messagesForAPI);
    }
    {
      let i = Ir() ? "" : " Run /rewind to recover the conversation.";
      return jl({
        content: "API Error: 400 due to tool use concurrency issues." + i,
        error: "invalid_request",
      });
    }
  }
  if (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes("unexpected `tool_use_id` found in `tool_result`")
  )
    G("tengu_unexpected_tool_result", {});
  if (e instanceof Fo && e.status === 400 && e.message.includes("`tool_use` ids must be unique")) {
    G("tengu_duplicate_tool_use_id", {});
    let s = Ir() ? "" : " Run /rewind to recover the conversation.";
    return jl({
      content: `API Error: 400 duplicate tool_use ID in conversation history.${s}`,
      error: "invalid_request",
      errorDetails: e.message,
    });
  }
  if (
    bo() &&
    e instanceof Fo &&
    e.status === 400 &&
    e.message.toLowerCase().includes("invalid model name") &&
    (dte(mo(t)) || t === "opus")
  )
    return jl({
      content:
        "Claude Opus is not available with the Claude Pro plan. If you have updated your subscription plan recently, run /logout and /login for the plan to take effect.",
      error: "invalid_request",
    });
  if (Nio(e))
    return jl({
      content: $1n,
      error: "billing_error",
    });
  if (e instanceof Fo && e.status === 400 && O1n(e)) {
    let { source: s } = Ty();
    if (s === "ANTHROPIC_API_KEY" && process.env.ANTHROPIC_API_KEY && !bo()) {
      let i = WE();
      return jl({
        error: "invalid_request",
        content: i ? Bio : Uio,
      });
    }
  }
  if (e instanceof Error && e.message.toLowerCase().includes("x-api-key")) {
    if (Uaa())
      return jl({
        error: "authentication_failed",
        content: Oaa,
      });
    if (fr() === "gateway")
      return jl({
        error: "invalid_request",
        content: Fio,
      });
    let { source: s } = Ty();
    return jl({
      error: "authentication_failed",
      content: s === "ANTHROPIC_API_KEY" || s === "apiKeyHelper" ? B1n : N1n,
    });
  }
  if (e instanceof Fo && e.status === 403 && e.message.includes("OAuth token has been revoked"))
    return jl({
      error: "authentication_failed",
      content: wlp(),
    });
  if (
    e instanceof Fo &&
    (e.status === 401 || e.status === 403) &&
    e.message.includes("OAuth authentication is currently not allowed for this organization")
  )
    return jl({
      error: "oauth_org_not_allowed",
      content: Clp(),
    });
  if (
    e instanceof Fo &&
    e.status === 403 &&
    e.message.toLowerCase().includes("api key authentication is disabled")
  ) {
    let { source: s } = Ty();
    if (s === "ANTHROPIC_API_KEY" && Oe.ANTHROPIC_API_KEY)
      return jl({
        error: "invalid_request",
        content: WE() ? Elp : Alp,
      });
    if (s === "apiKeyHelper")
      return jl({
        error: "invalid_request",
        content: Hlp,
      });
    if (s === "/login managed key")
      return jl({
        error: "authentication_failed",
        content: Tlp,
      });
  }
  if (e instanceof Fo && (e.status === 401 || e.status === 403)) {
    if (Uaa())
      return jl({
        error: "authentication_failed",
        content: Oaa,
      });
    let s = sut(e);
    return jl({
      error: "authentication_failed",
      content: Ir() ? `Failed to authenticate. ${Eb}: ${s}` : `Please run /login \xB7 ${Eb}: ${s}`,
    });
  }
  if (
    ut(process.env.CLAUDE_CODE_USE_BEDROCK) &&
    e instanceof Error &&
    e.message.toLowerCase().includes("model id")
  ) {
    let s = Faa(),
      i = jaa(t);
    return jl({
      content: i
        ? `${Eb} (${t}): ${e.message}.${s ? ` Try ${s} to switch to ${i}.` : ` Try switching to ${i}.`}`
        : `${Eb} (${t}): ${e.message}.${s ? ` Run ${s} to pick a different model.` : ""}`,
      error: "model_not_found",
    });
  }
  if (e instanceof Fo && e.status === 404) {
    let s = Faa(),
      i = jaa(t);
    return jl({
      content: i
        ? `The model ${t} is not available on your ${fr()} deployment. ${s ? `Try ${s} to switch to ${i}` : `Try switching to ${i}`}, or ask your admin to enable this model.`
        : `There's an issue with the selected model (${t}). It may not exist or you may not have access to it.${s ? ` Run ${s} to pick a different model.` : ""}`,
      error: "model_not_found",
    });
  }
  let r = Baa();
  if (e instanceof Error && e.message.includes(Rjt))
    return jl({
      content: `${Eb}: ${Rjt}. The API is at capacity \u2014 this is usually temporary. Try again in a moment.${r}`,
      error: "server_error",
    });
  if (e instanceof Fo && typeof e.status === "number" && e.status >= 500) {
    let s = sut(e).replace(/[.!?\u2026]+$/, "");
    return jl({
      content: `${Eb}: ${s}. This is a server-side issue, usually temporary \u2014 try again in a moment.${r}`,
      error: "server_error",
    });
  }
  if (e instanceof Hx)
    return jl({
      content: `${Eb}: ${sut(e)}`,
      error: "server_error",
    });
  if (e instanceof Fo)
    return jl({
      content: `${Eb}: ${sut(e)}`,
      error: "unknown",
    });
  let o = tF(e);
  if (o && (que.has(o.code) || out.has(o.code)))
    return jl({
      content: `${Eb}: Connection to the API was lost (${o.code}). This is usually temporary \u2014 try again.`,
      error: "server_error",
    });
  if (e instanceof Error)
    return jl({
      content: `${Eb}: ${e.message}`,
      error: "unknown",
    });
  return jl({
    content: Eb,
    error: "unknown",
  });
}
function Faa() {
  if (!Ir()) return "/model";
  return Q2() === "sdk-cli" ? "--model" : void 0;
}
function jaa(e) {
  if (td()) return;
  let t = e.toLowerCase();
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
function W1n(e) {
  if (e instanceof Error && e.message === "Request was aborted.") return "aborted";
  if (
    e instanceof DK ||
    (e instanceof Hx && e.message.toLowerCase().includes("timeout")) ||
    (e instanceof Error && e.message.startsWith("Stream idle timeout"))
  )
    return "api_timeout";
  if (e instanceof Error && e.message.includes(Rjt)) return "repeated_529";
  if (e instanceof Error && (e.message.includes(m5e) || e.message.includes(g5e)))
    return "capacity_off_switch";
  if (e instanceof Fo && e.status === 429) return "rate_limit";
  if (e instanceof Fo && (e.status === 529 || e.message?.includes('"type":"overloaded_error"')))
    return "server_overload";
  if (e instanceof Error && (e.message.toLowerCase().includes(nF.toLowerCase()) || Djt(e)))
    return "prompt_too_long";
  if (e instanceof Error && /maximum of \d+ PDF pages/.test(e.message)) return "pdf_too_large";
  if (e instanceof Error && e.message.includes("The PDF specified is password protected"))
    return "pdf_password_protected";
  if (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes("image exceeds") &&
    e.message.includes("maximum")
  )
    return "image_too_large";
  if (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes("image dimensions exceed") &&
    e.message.includes("many-image")
  )
    return "image_too_large";
  if (e instanceof Fo && e.status === 400 && e.message.includes("Could not process image"))
    return "image_unprocessable";
  if (e instanceof Fo && e.status === 413)
    return e.message.toLowerCase().includes("context window")
      ? "prompt_too_long"
      : "request_too_large";
  if (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes("`tool_use` ids were found without `tool_result` blocks immediately after")
  )
    return "tool_use_mismatch";
  if (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes("unexpected `tool_use_id` found in `tool_result`")
  )
    return "unexpected_tool_result";
  if (e instanceof Fo && e.status === 400 && e.message.includes("`tool_use` ids must be unique"))
    return "duplicate_tool_use_id";
  if (e instanceof Fo && e.status === 400 && e.message.toLowerCase().includes("invalid model name"))
    return "invalid_model";
  if (
    e instanceof Fo &&
    e.status === 404 &&
    e.message.includes("not_found_error") &&
    e.message.includes('"model: ')
  )
    return "model_not_found";
  if (
    e instanceof Fo &&
    e.status === 400 &&
    /invalid `?signature`? in `?thinking`? block/i.test(e.message)
  )
    return "invalid_thinking_signature";
  if (
    e instanceof Fo &&
    e.status === 400 &&
    (e.message.includes("text content blocks must be non-empty") ||
      e.message.includes("text content blocks must contain non-whitespace text"))
  )
    return "empty_text_block";
  if (e instanceof Fo && e.status === 400 && e.message.includes("diagnostics.previous_message_id"))
    return "previous_message_id_invalid";
  if (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.includes(".tool_use_id") &&
    e.message.includes("String should match pattern")
  )
    return "tool_use_id_invalid";
  if (e instanceof Fo && e.status === 400 && e.message.includes("Grammar compilation"))
    return "grammar_compile_error";
  if (
    e instanceof Fo &&
    e.status === 400 &&
    e.message.toLowerCase().includes("request body is not valid json")
  )
    return "request_body_invalid_json";
  if (e instanceof Error && e.message.toLowerCase().includes($1n.toLowerCase()))
    return "credit_balance_low";
  if (
    e instanceof Error &&
    (e.message.toLowerCase().includes("x-api-key") ||
      e.message.toLowerCase().includes("not a valid api key for this workspace"))
  )
    return "invalid_api_key";
  if (e instanceof Fo && e.status === 403 && e.message.includes("OAuth token has been revoked"))
    return "token_revoked";
  if (
    e instanceof Fo &&
    (e.status === 401 || e.status === 403) &&
    e.message.includes("OAuth authentication is currently not allowed for this organization")
  )
    return "oauth_org_not_allowed";
  if (e instanceof Fo && (e.status === 401 || e.status === 403)) return "auth_error";
  if (
    ut(process.env.CLAUDE_CODE_USE_BEDROCK) &&
    e instanceof Error &&
    e.message.toLowerCase().includes("model id")
  )
    return "bedrock_model_access";
  if (e instanceof Error && e.message.includes("Output blocked by content filtering policy"))
    return "output_content_filtered";
  if (e instanceof nf) return "wif_credential_error";
  if (
    e instanceof Error &&
    e.message.toLowerCase().includes("domains are not accessible to our user agent")
  )
    return "webfetch_domain_blocked";
  if (e instanceof Error) {
    let n = e.message.toLowerCase();
    if (O1n(e)) return "org_disabled";
    if (n.includes("updated our consumer terms")) return "terms_not_accepted";
    if (
      n.includes("web search is not enabled for this organization") ||
      /is not enabled for (this|your) organization/.test(n)
    )
      return "feature_not_enabled_for_org";
    if (/reached your specified[\w\s-]*?usage limits/.test(n)) return "usage_cap_reached";
  }
  if (j1n(e)) return "system_role_unsupported";
  if (
    e instanceof Fo &&
    e.status === 400 &&
    /`?(thinking|redacted_thinking)`?\s+(or\s+`?redacted_thinking`?\s+)?blocks?\s+.{0,60}cannot be modified/i.test(
      e.message,
    )
  )
    return "thinking_blocks_modified";
  if (e instanceof Fo) {
    let n = e.status;
    if (n >= 500) return "server_error";
    if (n >= 400) return "client_error";
  }
  if (e instanceof Hx) {
    if (tF(e)?.isSSLError) return "ssl_cert_error";
    return "connection_error";
  }
  let t = tF(e);
  if (t && (que.has(t.code) || out.has(t.code))) return "connection_error";
  return "unknown";
}
function q1n(e) {
  if (e.status === 529 || e.message?.includes('"type":"overloaded_error"')) return "overloaded";
  if (e.status === 429) return "rate_limit";
  if (e.status === 401 || e.status === 403) return "authentication_failed";
  if (e.status !== void 0 && e.status >= 408) return "server_error";
  return "unknown";
}
function h5e(e, t, n, r) {
  if (e !== "refusal") return;
  let o = t?.explanation?.trimEnd() ?? null;
  G("tengu_refusal_api_response", {
    has_explanation: Boolean(o),
    category: t?.category ? $e(Zct(t.category)) : void 0,
    request_id: Hr(n) || void 0,
  });
  let s = 400,
    i = o && o.length > s ? o.slice(0, s).trimEnd() + "\u2026" : o,
    a = i ? ` ${i}${/[.!?\u2026]$/.test(i) ? "" : "."}` : "",
    l = r != null && iaa(r) ? wp(r) : void 0,
    c;
  if (l !== void 0) {
    let p = Ir(),
      f = p
        ? "Try rephrasing the request in a new session or change your model."
        : "Double press esc to edit your last message, or try a different model with /model.",
      m = p ? `Learn more: ${u5e}` : Jct,
      g = Qct(t?.category)
        ? `${l}'s safeguards flagged this message (https://www.anthropic.com/legal/aup). ${daa}`
        : `${l}'s safeguards flagged this message (https://www.anthropic.com/legal/aup). This sometimes happens with safe, normal conversations.`;
    c = `${Eb}: ${g} Claude Code can't respond to this request with ${l}.

${f}

${m}`;
  } else {
    let p = Ir(),
      f = p
        ? "Try rephrasing the request in a new session or change your model."
        : "Please double press esc to edit your last message or start a new session for Claude Code to assist with a different task.",
      m = t?.category;
    if (t?.category === "cyber" && td()) {
      let g = p ? `Learn more: ${u5e}` : Jct,
        h = r != null ? wp(r) : "This model";
      c = `${Eb}: ${h}'s safeguards flagged this message for a cybersecurity topic. If your work requires this access, you can apply for an exemption: ${laa(t.explanation)}

${f}

${g}`;
    } else if (m === "military_weapons") {
      let g = r != null ? wp(r) : "This model";
      c = `${Eb}: ${g} has added safeguards for weapons-related content, which blocked this request. Not weapons-related? This may be a false positive.

${f}${
        p
          ? ""
          : `

If you believe this was flagged in error, send feedback with /feedback.`
      }`;
    } else
      c =
        `${Eb}: Claude Code is unable to respond to this request, which appears to violate our Usage Policy (https://www.anthropic.com/legal/aup).${a} ` +
        f;
  }
  let u = n
      ? `

Request ID: ${n}`
      : "",
    d = jl({
      content: c + u,
      error: "invalid_request",
    });
  return (
    (d.requestId = n ?? void 0),
    (d.message.stop_reason = "refusal"),
    (d.message.stop_details = t ?? null),
    d
  );
}
function Rlp(e, t) {
  let n = t ? "You've reached your Fable 5 limit." : "Fable 5 requires usage credits.";
  switch (e) {
    case "out_of_credits":
      return eH()
        ? "You're out of usage credits. Run /usage-credits to keep using Fable 5 or /model to switch models."
        : "You're out of usage credits. /model to switch models.";
    case "org_spend_cap_reached":
    case "org_level_disabled_until":
      return eH()
        ? "You've hit your monthly spend limit. Run /usage-credits to manage your limit and keep using Fable 5 or switch models to continue this chat."
        : "You've hit your monthly spend limit. /model to switch models.";
    case "org_level_disabled":
    case "org_service_level_disabled":
    case "seat_tier_level_disabled":
    case "seat_tier_zero_credit_limit":
    case "member_level_disabled":
    case "member_zero_credit_limit":
    case "group_zero_credit_limit":
      return eH()
        ? `${n} Run /usage-credits to continue or switch models with /model.`
        : `${n} /model to switch models.`;
    default:
      return eH()
        ? `${n} Run /usage-credits to continue or switch models with /model.`
        : `${n} /model to switch models.`;
  }
}
function Mio(e) {
  return (
    e.includes("Extra usage is required for long context") ||
    e.includes("Usage credits are required for long context")
  );
}
function Kaa(e) {
  return cJe() && e.isApiErrorMessage === !0 && e.errorDetails !== void 0 && Mio(e.errorDetails);
}
var Eb = "API Error",
  nF = "Prompt is too long",
  ylp = 0.8,
  blp,
  Slp,
  $1n = "Credit balance is too low",
  N1n = "Not logged in \xB7 Please run /login",
  B1n = "Invalid API key \xB7 Fix external API key",
  Bio =
    "Your ANTHROPIC_API_KEY belongs to a disabled organization \xB7 Unset the environment variable to use your subscription instead",
  Uio =
    "Your ANTHROPIC_API_KEY belongs to a disabled organization \xB7 Update or unset the environment variable",
  Elp =
    "Your organization has disabled API key authentication \xB7 Unset ANTHROPIC_API_KEY to use your claude.ai account instead",
  Alp =
    "Your organization has disabled API key authentication \xB7 Unset ANTHROPIC_API_KEY and run /login to sign in with your claude.ai account",
  Hlp =
    "Your organization has disabled API key authentication \xB7 Unset the apiKeyHelper setting and run /login to sign in with your claude.ai account",
  Tlp =
    "Your organization has disabled API key authentication \xB7 Run /login to sign in with your claude.ai account",
  U1n = "OAuth token revoked \xB7 Please run /login",
  Oaa = "Authentication error \xB7 This may be a temporary network issue, please try again",
  Fio =
    "Authentication error \xB7 The gateway could not authenticate with its upstream provider \u2014 contact your gateway administrator",
  Naa = "https://status.claude.com",
  Rjt = "Repeated 529 Overloaded errors",
  m5e = "Opus is experiencing high load, please use /model to switch to Sonnet",
  g5e = "Fable is experiencing high load, please use /model to switch to Sonnet",
  aut = "Request timed out",
  vlp =
    "Your organization has disabled Claude subscription access for Claude Code \xB7 Use an Anthropic API key instead, or ask your admin to enable access",
  xlp = "cannot be used as an advisor when the request model is";
