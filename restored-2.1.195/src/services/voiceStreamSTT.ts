// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dQt
// matched 2.1.88 source: src/services/voiceStreamSTT.ts
// class=modified  jaccard=0.3473  score=0.5855  fileCov=0.4606
// note: deminified; 6 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var dQt = E(() => {
  jc();
  oo();
});
var enc = {};
_t(enc, {
  sanitizeKeytermsForHeader: () => sanitizeKeytermsForHeader,
  probeVoiceConnectivity: () => probeVoiceConnectivity,
  isVoiceStreamAvailable: () => isVoiceStreamAvailable,
  isTypedInterimsEnabled: () => isTypedInterimsEnabled,
  connectVoiceStream: () => connectVoiceStream,
  FINALIZE_TIMEOUTS_MS: () => FINALIZE_TIMEOUTS_MS,
});
function rar(e, t, n) {
  return typeof e === "number" && Number.isInteger(e) && e >= t && e <= n ? String(e) : "unknown";
}
function M7f(e) {
  return xd(e)?.toLowerCase() ?? "unknown";
}
async function probeVoiceConnectivity() {
  if (Vi() || She()) return "skipped_privacy";
  try {
    let e = await po.get(`${$s().BASE_API_URL}/api/hello`, {
        headers: {
          "User-Agent": m7(),
        },
        timeout: $7f,
        validateStatus: () => true,
        maxRedirects: 0,
      }),
      t = rar(e.status, 100, 599);
    return e.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${t}` : `http_${t}`;
  } catch (e) {
    let t = po.isAxiosError(e) ? e.code : void 0;
    return t === "ECONNABORTED" || t === "ETIMEDOUT" ? "timeout" : "fetch_failed";
  }
}
function isTypedInterimsEnabled() {
  if (ut(process.env.CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED)) return true;
  return at("tengu_brick_follow", false);
}
function isVoiceStreamAvailable() {
  if (!eS()) return false;
  let e = Ws();
  return e !== null && e.accessToken !== null;
}
function sanitizeKeytermsForHeader(e) {
  let t = new Set(),
    n = [],
    r = 0;
  for (let o of e) {
    let s = o
      .replace(/,/g, " ")
      .replace(/[^\x20-\x7E]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!s || t.has(s)) continue;
    let i = s.length + (n.length > 0 ? 1 : 0);
    if (r + i > O7f) break;
    (t.add(s), n.push(s), (r += i));
  }
  return n.join(",");
}
async function connectVoiceStream(e, t) {
  await ch();
  let n = Ws();
  if (!n?.accessToken) return (T("[voice_stream] No OAuth token available"), null);
  let r =
    process.env.VOICE_STREAM_BASE_URL ||
    $s().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://");
  if (process.env.VOICE_STREAM_BASE_URL)
    T(`[voice_stream] Using VOICE_STREAM_BASE_URL override: ${process.env.VOICE_STREAM_BASE_URL}`);
  let o = isTypedInterimsEnabled(),
    s = new URLSearchParams({
      encoding: "linear16",
      sample_rate: "16000",
      channels: "1",
      endpointing_ms: "300",
      utterance_end_ms: "1000",
      language: t?.language ?? "en",
      use_conversation_engine: "true",
      ...(o && {
        forward_interims: "typed",
      }),
      stt_provider: "deepgram-nova3",
    }),
    i = `${r}${D7f}?${s.toString()}`;
  T(`[voice_stream] Connecting to ${i}`);
  let a = {
    Authorization: `Bearer ${n.accessToken}`,
    "User-Agent": m7(),
    "x-app": "cli",
    "anthropic-client-platform": _x(),
  };
  if (t?.keyterms?.length) {
    let x = sanitizeKeytermsForHeader(t.keyterms);
    if (x) a["x-config-keyterms"] = x;
  }
  let l = HY(),
    c = {
      headers: a,
      proxy: h9(i),
      tls: l || void 0,
    },
    u = new fTe.default(i, c),
    d = null,
    p = false,
    f = false,
    m = false,
    g = false,
    h = false,
    y = null,
    b = null,
    _ = {
      send(x) {
        if (u.readyState !== fTe.default.OPEN) return;
        if (m) {
          T(`[voice_stream] Dropping audio chunk after CloseStream: ${String(x.length)} bytes`);
          return;
        }
        (T(`[voice_stream] Sending audio chunk: ${String(x.length)} bytes`),
          u.send(Buffer.from(x)));
      },
      finalize() {
        if (g || m) return Promise.resolve("ws_already_closed");
        return (
          (g = true),
          new Promise((x) => {
            let I = setTimeout(() => y?.("safety_timeout"), FINALIZE_TIMEOUTS_MS.safety),
              k = setTimeout(() => y?.("no_data_timeout"), FINALIZE_TIMEOUTS_MS.noData);
            if (
              ((b = () => {
                (clearTimeout(k), (b = null));
              }),
              (y = (D) => {
                if ((clearTimeout(I), clearTimeout(k), (y = null), (b = null), S)) {
                  T(`[voice_stream] Promoting unreported interim before ${D} resolve`);
                  let P = S;
                  ((S = ""), e.onTranscript(P, true));
                }
                (T(`[voice_stream] Finalize resolved via ${D}`), x(D));
              }),
              u.readyState === fTe.default.CLOSED || u.readyState === fTe.default.CLOSING)
            ) {
              y("ws_already_closed");
              return;
            }
            setTimeout(() => {
              if (((m = true), u.readyState === fTe.default.OPEN))
                (T("[voice_stream] Sending CloseStream (finalize)"), u.send(R7f));
            }, 0);
          })
        );
      },
      close() {
        if (((m = true), d)) (clearInterval(d), (d = null));
        if (((p = false), u.readyState === fTe.default.OPEN)) u.close();
      },
      isConnected() {
        return p && u.readyState === fTe.default.OPEN;
      },
    };
  u.on("open", () => {
    (T("[voice_stream] WebSocket connected"),
      (p = true),
      (f = true),
      T("[voice_stream] Sending initial KeepAlive"),
      u.send(Jtc),
      (d = setInterval(
        (x) => {
          if (x.readyState === fTe.default.OPEN)
            (T("[voice_stream] Sending periodic KeepAlive"), x.send(Jtc));
        },
        P7f,
        u,
      )),
      e.onReady(_));
  });
  let S = "";
  function A(x) {
    if (!S) return;
    T(`[voice_stream] Promoting unreported interim to final (${x})`);
    let I = S;
    ((S = ""), e.onTranscript(I, true));
  }
  (u.on("message", (x) => {
    let I = x.toString();
    T(`[voice_stream] Message received (${String(I.length)} chars)`);
    let k;
    try {
      k = Ft(I);
    } catch {
      return;
    }
    switch (k.type) {
      case "TranscriptInterim":
      case "TranscriptText": {
        let D = k.data;
        if ((T(`[voice_stream] ${k.type} (${String(D?.length ?? 0)} chars)`), m)) b?.();
        if (D) ((S = D), e.onTranscript(D, false));
        break;
      }
      case "TranscriptEndpoint": {
        T(`[voice_stream] TranscriptEndpoint received (${String(S.length)} chars pending)`);
        let D = S;
        if (((S = ""), D)) e.onTranscript(D, true);
        if (m) y?.("post_closestream_endpoint");
        break;
      }
      case "TranscriptError": {
        let D = k.description ?? k.error_code ?? "unknown transcription error";
        if ((T(`[voice_stream] TranscriptError: ${D}`), A("TranscriptError"), !g)) e.onError(D);
        break;
      }
      case "error": {
        let D = k.message ?? `unstructured error frame (keys: ${Object.keys(k).join(", ")})`;
        if ((T(`[voice_stream] Server error: ${D}`), A("server error"), !g)) e.onError(D);
        break;
      }
      default:
        break;
    }
  }),
    u.on("close", (x, I) => {
      let k = I?.toString() ?? "";
      if ((T(`[voice_stream] WebSocket closed: code=${String(x)} reason="${k}"`), (p = false), d))
        (clearInterval(d), (d = null));
      if ((A("ws close"), y?.("ws_close"), !g && !h && x !== 1000 && x !== 1005))
        e.onError(
          `Connection closed: code ${String(x)}${k ? ` \u2014 ${k}` : ""}`,
          f
            ? void 0
            : {
                connectFailureCode: `ws_closed_${rar(x, 1000, 4999)}`,
              },
        );
      e.onClose();
    }));
  let v = console,
    C = v.error;
  if (C) v.error = L7f;
  try {
    u.on("unexpected-response", (x, I) => {
      let k = I.statusCode ?? 0;
      if (k === 101) {
        T("[voice_stream] unexpected-response fired with 101; ignoring");
        return;
      }
      if (
        (T(
          `[voice_stream] Upgrade rejected: status=${String(k)} cf-mitigated=${String(I.headers["cf-mitigated"])} cf-ray=${String(I.headers["cf-ray"])}`,
        ),
        (h = true),
        I.resume(),
        x.destroy(),
        g)
      )
        return;
      e.onError(`WebSocket upgrade rejected with HTTP ${String(k)}`, {
        fatal: k >= 400 && k < 500,
        connectFailureCode:
          I.headers["cf-mitigated"] !== void 0
            ? `cf_mitigated_${rar(k, 100, 599)}`
            : `upgrade_rejected_${rar(k, 100, 599)}`,
      });
    });
  } finally {
    if (C) v.error = C;
  }
  return (
    u.on("error", (x) => {
      if (
        (T(`[voice_stream] WebSocket error: ${x.message}`, {
          level: "error",
        }),
        A("ws error"),
        !g)
      )
        e.onError(
          `Voice stream connection error: ${x.message}`,
          f
            ? void 0
            : {
                connectFailureCode: `ws_error_${M7f(x)}`,
              },
        );
    }),
    _
  );
}
var fTe,
  Jtc = '{"type":"KeepAlive"}',
  R7f = '{"type":"CloseStream"}',
  L7f = () => {},
  D7f = "/api/ws/speech_to_text/voice_stream",
  P7f = 8000,
  FINALIZE_TIMEOUTS_MS,
  $7f = 1500,
  O7f = 1024;
