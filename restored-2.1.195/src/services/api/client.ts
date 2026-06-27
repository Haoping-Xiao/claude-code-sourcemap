// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ACn
// matched 2.1.88 source: src/services/api/client.ts
// class=modified  jaccard=0.1316  score=0.3155  fileCov=0.1842
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ACn]
kkd = ["https://www.googleapis.com/auth/cloud-platform"];
function Kxe() {
  return {
    error: (e, ...t) => console.error("[Anthropic SDK ERROR]", e, ...t),
    warn: (e, ...t) => console.error("[Anthropic SDK WARN]", e, ...t),
    info: (e, ...t) => console.error("[Anthropic SDK INFO]", e, ...t),
    debug: (e, ...t) => console.error("[Anthropic SDK DEBUG]", e, ...t),
  };
}
async function G9({
  apiKey: e,
  maxRetries: t,
  model: n,
  fetchOverride: r,
  source: o,
  agentContext: s,
}) {
  let i = process.env.CLAUDE_CODE_CONTAINER_ID,
    a = process.env.CLAUDE_CODE_REMOTE_SESSION_ID,
    l = process.env.CLAUDE_AGENT_SDK_CLIENT_APP,
    c = YY(s) ? void 0 : s,
    u = E9r(),
    p = {
      "x-app": Js() ? "cli-bg" : "cli",
      "User-Agent": m7(),
      "X-Claude-Code-Session-Id": Rt(),
      ...u,
      ...(i && {
        "x-claude-remote-container-id": i,
      }),
      ...(a && {
        "x-claude-remote-session-id": a,
      }),
      ...(l && {
        "x-client-app": l,
      }),
      ...(c?.agentId && {
        "x-claude-code-agent-id": q2r(c.agentId),
      }),
      ...(c?.parentAgentId && {
        "x-claude-code-parent-agent-id": q2r(c.parentAgentId),
      }),
    };
  if (
    (T(
      `[API:request] Creating client, ANTHROPIC_CUSTOM_HEADERS present: ${!!process.env.ANTHROPIC_CUSTOM_HEADERS}, has Authorization header: ${!!u.Authorization}`,
    ),
    ut(process.env.CLAUDE_CODE_ADDITIONAL_PROTECTION))
  )
    p["x-anthropic-additional-protection"] = "true";
  (T("[API:auth] OAuth token check starting"),
    await ch(),
    T("[API:auth] OAuth token check complete"));
  let m = Ws(),
    g = Koi({
      anthropicAuthEnabled: eS(),
      oauthScopes: m?.scopes,
    });
  if (!g && !km()) await Dkd(p, Ir());
  await Pyn();
  let h = Ukd(r, o),
    y = l_(n);
  Rkd();
  let b = y === "bedrock" || y === "mantle" ? await nj() : void 0,
    _ = {
      defaultHeaders: p,
      maxRetries: t,
      timeout: parseInt(process.env.API_TIMEOUT_MS || String(600000), 10),
      dangerouslyAllowBrowser: true,
      fetchOptions: kg({
        forAnthropicAPI: true,
        hasBodyIdleWatchdog: Bkd(y),
        url: Pkd(y, n, b),
      }),
      ...(h && {
        fetch: h,
      }),
      ...Lkd,
    };
  if (y === "gateway") {
    await oxe();
    let v = km();
    if (!v || vbr())
      throw Error(
        ut(process.env.CLAUDE_CODE_USE_GATEWAY)
          ? "Cloud gateway token expired \u2014 refresh ANTHROPIC_AUTH_TOKEN and restart."
          : "Cloud gateway session expired \u2014 run /login to reconnect.",
      );
    let { rest: C } = KOt(_.defaultHeaders);
    return new G2({
      ..._,
      defaultHeaders: {
        ...C,
        Authorization: `Bearer ${v.jwt}`,
      },
      apiKey: null,
      baseURL: v.url,
      authToken: v.jwt,
      ...(wO() && {
        logger: Kxe(),
      }),
    });
  }
  if (y === "bedrock") {
    let { AnthropicBedrock: v } = await Promise.resolve().then(() => (Aje(), Eje)),
      C = HCn(n, b),
      x = ut(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH),
      I = KOt(_.defaultHeaders),
      k = {
        ...I.rest,
        Authorization: null,
        ...(process.env.ANTHROPIC_BEDROCK_SERVICE_TIER && {
          "X-Amzn-Bedrock-Service-Tier": process.env.ANTHROPIC_BEDROCK_SERVICE_TIER,
        }),
      },
      D = process.env.AWS_BEARER_TOKEN_BEDROCK?.trim(),
      P = D ? `Bearer ${D}` : x ? I.value : void 0,
      O = !P && !x ? await BG() : null,
      L = {
        ..._,
        defaultHeaders: k,
        awsRegion: C,
        apiKey: null,
        ...(x &&
          !P && {
            skipAuth: true,
          }),
        ...(P && {
          apiKey: P.match(/^Bearer (.+)$/i)?.[1] ?? P,
          defaultHeaders: {
            ...k,
            Authorization: P,
          },
        }),
        ...(wO() && {
          logger: Kxe(),
        }),
      };
    return O
      ? new v({
          ...L,
          awsAccessKey: O.accessKeyId,
          awsSecretKey: O.secretAccessKey,
          awsSessionToken: O.sessionToken,
        })
      : new v(L);
  }
  if (y === "foundry") {
    let { AnthropicFoundry: v } = await Promise.resolve().then(() => (t3r(), e3r)),
      C;
    if (!process.env.ANTHROPIC_FOUNDRY_API_KEY)
      if (ut(process.env.CLAUDE_CODE_SKIP_FOUNDRY_AUTH)) C = () => Promise.resolve("");
      else {
        let { DefaultAzureCredential: I, getBearerTokenProvider: k } = await Promise.resolve().then(
          () => (zqr(), Vqr),
        );
        C = k(new I(), "https://cognitiveservices.azure.com/.default");
      }
    let x = {
      ..._,
      ...(C && {
        azureADTokenProvider: C,
      }),
      ...(wO() && {
        logger: Kxe(),
      }),
    };
    return new v(x);
  }
  if (y === "anthropicAws") {
    let { AnthropicAws: v } = await Promise.resolve().then(() => (RAi(), kAi)),
      C = ut(process.env.CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH),
      x = KOt(_.defaultHeaders),
      I = C ? x.value : void 0,
      k = {
        ..._,
        defaultHeaders: {
          ...x.rest,
          Authorization: null,
        },
        ...(C &&
          !I && {
            skipAuth: true,
          }),
        ...(I && {
          apiKey: I.match(/^Bearer (.+)$/i)?.[1] ?? I,
          defaultHeaders: {
            ...x.rest,
            Authorization: I,
          },
        }),
        ...(wO() && {
          logger: Kxe(),
        }),
      };
    if (!process.env.ANTHROPIC_AWS_API_KEY && !C) {
      let D = await BG();
      if (D)
        ((k.awsAccessKey = D.accessKeyId),
          (k.awsSecretAccessKey = D.secretAccessKey),
          (k.awsSessionToken = D.sessionToken));
    }
    return new v(k);
  }
  if (y === "mantle") {
    let { AnthropicBedrockMantle: v } = await Promise.resolve().then(() => (Aje(), Eje)),
      C = ut(process.env.CLAUDE_CODE_SKIP_MANTLE_AUTH),
      x = KOt(_.defaultHeaders),
      I = C ? x.value : void 0,
      k = process.env.AWS_BEARER_TOKEN_BEDROCK?.trim(),
      D = !k && !C ? await BG() : null;
    return new v({
      ..._,
      defaultHeaders: k
        ? {
            ...x.rest,
            Authorization: `Bearer ${k}`,
          }
        : {
            ...x.rest,
            Authorization: null,
          },
      awsRegion: HCn(n, b),
      ...(C &&
        !I && {
          skipAuth: true,
        }),
      ...(I && {
        apiKey: I.match(/^Bearer (.+)$/i)?.[1] ?? I,
        defaultHeaders: {
          ...x.rest,
          Authorization: I,
        },
      }),
      ...(D && {
        awsAccessKey: D.accessKeyId,
        awsSecretAccessKey: D.secretAccessKey,
        awsSessionToken: D.sessionToken,
      }),
      ...(wO() && {
        logger: Kxe(),
      }),
    });
  }
  if (y === "vertex") {
    if (!ut(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH)) await N4e();
    let [{ AnthropicVertex: v }, { buildVertexGoogleAuth: C }] = await Promise.all([
        Promise.resolve().then(() => (zOt(), VOt)),
        Promise.resolve().then(() => (ACn(), avi)),
      ]),
      x =
        process.env.GCLOUD_PROJECT ||
        process.env.GOOGLE_CLOUD_PROJECT ||
        process.env.gcloud_project ||
        process.env.google_cloud_project,
      I = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials,
      k = await C(
        ut(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH)
          ? {
              kind: "skip",
            }
          : {
              kind: "default",
            },
        x || I ? void 0 : process.env.ANTHROPIC_VERTEX_PROJECT_ID,
      ),
      D = {
        ..._,
        region: Yie(n),
        googleAuth: k,
        ...(wO() && {
          logger: Kxe(),
        }),
      };
    return new v(D);
  }
  let S = e || lI();
  if (!S && iH()) {
    let v = await sxe();
    if (v !== null) {
      let C = await prt(),
        { rest: x } = KOt(p),
        I = await v.getToken();
      return new G2({
        apiKey: null,
        authToken: I,
        baseURL: process.env.ANTHROPIC_BASE_URL || C?.baseURL,
        ..._,
        defaultHeaders: {
          ...x,
          Authorization: `Bearer ${I}`,
          ...C?.extraHeaders,
        },
        ...(wO() && {
          logger: Kxe(),
        }),
      });
    }
  }
  let A = {
    apiKey: g ? null : S,
    authToken: g ? m?.accessToken : void 0,
    ...false,
    ..._,
    ...(wO() && {
      logger: Kxe(),
    }),
  };
  return new G2(A);
}
async function Dkd(e, t) {
  let r = (nv() ? void 0 : process.env.ANTHROPIC_AUTH_TOKEN) || (await $ot(t));
  if (r) e.Authorization = `Bearer ${r}`;
}
function Pkd(e, t, n) {
  switch (e) {
    case "bedrock":
      return (
        process.env.ANTHROPIC_BEDROCK_BASE_URL ||
        `https://bedrock-runtime.${HCn(t, n)}.amazonaws.com`
      );
    case "mantle":
      return (
        process.env.ANTHROPIC_BEDROCK_MANTLE_BASE_URL ||
        `https://bedrock-mantle.${HCn(t, n)}.api.aws`
      );
    case "anthropicAws":
      return (
        process.env.ANTHROPIC_AWS_BASE_URL || `https://aws-external-anthropic.${vFe()}.api.aws`
      );
    case "vertex":
      return process.env.ANTHROPIC_VERTEX_BASE_URL || HJe(Yie(t));
    case "foundry":
      return Rjr();
    case "gateway":
      return km()?.url;
    case "firstParty":
      return process.env.ANTHROPIC_BASE_URL || $s().BASE_API_URL;
  }
}
function HCn(e, t) {
  let n = process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION;
  if (e && n) {
    let r = Fw();
    if (r !== As() && mo(e) === mo(r)) return n;
  }
  return t ?? vFe();
}
function KOt(e) {
  let t = {},
    n;
  for (let [r, o] of Object.entries(e))
    if (r.toLowerCase() === "authorization") n = o;
    else t[r] = o;
  return {
    value: n,
    rest: t,
  };
}
function E9r() {
  let e = {},
    t = process.env.ANTHROPIC_CUSTOM_HEADERS;
  if (!t) return e;
  let n = t.split(/\n|\r\n/);
  for (let r of n) {
    if (!r.trim()) continue;
    let o = r.indexOf(":");
    if (o === -1) continue;
    let s = r.slice(0, o).trim(),
      i = r.slice(o + 1).trim();
    if (s) e[s] = i;
  }
  return e;
}
function A9r() {
  return Math.max(Number(process.env.CLAUDE_STREAM_IDLE_TIMEOUT_MS) || 0, 300000);
}
function H9r(e) {
  let t = A9r(),
    n = e === "firstParty" ? Okd : t,
    r = t,
    o = Number(process.env.CLAUDE_BYTE_STREAM_IDLE_TIMEOUT_MS),
    s = Number(process.env.CLAUDE_STREAM_IDLE_TIMEOUT_MS) > 0;
  if (Number.isFinite(o) && o > 0) r = o;
  else if (!s) {
    r = n;
    let i = at("tengu_byte_stream_idle_timeout_ms", n);
    if (typeof i === "number" && Number.isFinite(i) && i > 0) r = i;
  }
  return Math.min(Math.max(r, Mkd), $kd);
}
function Nkd(e, t, n, r) {
  let o = null,
    s = null,
    i = 0,
    a = 0,
    l = performance.now(),
    c = null,
    u = false,
    d = [15000, 30000, 60000, 120000],
    p = () => {
      if (s !== null) (clearTimeout(s), (s = null));
    },
    f = () => {
      if (o !== null) (clearTimeout(o), (o = null));
    },
    m = () => {
      (f(), p());
    },
    g = 0,
    h = 0,
    y = (S) => {
      if ((p(), i >= d.length)) return;
      let A = d[i],
        v = performance.now() - g;
      ((s = setTimeout(
        () => {
          if (((s = null), S.desiredSize === null)) return;
          if (performance.now() - g < A / 2) {
            y(S);
            return;
          }
          try {
            T(
              `[Stall] stream_idle_partial lastChunkAgeMs=${Math.round(performance.now() - g)} bytesTotal=${a} idleDeadlineMs=${t}`,
              {
                level: "warn",
              },
            );
          } catch {}
          (i++, y(S));
        },
        Math.max(0, A - v),
      )),
        s.unref?.());
    },
    b = (S) => {
      (m(),
        (g = performance.now()),
        (h = Date.now()),
        (i = 0),
        y(S),
        (o = setTimeout(() => {
          o = null;
          let A = performance.now(),
            v = Date.now(),
            C = Math.round(A - g - t),
            x = Math.max(0, Math.round(v - h - (A - g))),
            I = S.desiredSize === null;
          if (C < -t / 2) {
            T(`[byte-watchdog] aborting: late=${C}ms slept=${x}ms (sleep/suspend)`);
            let D = new uvi(x);
            try {
              S.error(D);
            } catch {}
            _.cancel(D).catch(() => {});
            return;
          }
          try {
            if (
              (T(
                `[byte-watchdog] firing: idle=${t}ms late=${C}ms errored=${I} bodyReadPending=${u}`,
                {
                  level: "warn",
                },
              ),
              In("warn", "cli_byte_watchdog_fired", {
                idle_ms: t,
                late_ms: C,
                readable_errored: I,
                body_read_pending: u,
              }),
              C >= 1000)
            )
              G("tengu_byte_watchdog_fired_late", {
                idle_ms: t,
                late_ms: C,
                readable_errored: I,
              });
          } catch {}
          let k = new TCn(t, a, c !== null ? Math.round(c - l) : void 0, u, n, x);
          try {
            S.error(k);
          } catch {}
          _.cancel(k).catch(() => {});
        }, t)));
    },
    _ = e.getReader();
  return new ReadableStream({
    start(S) {
      b(S);
    },
    async pull(S) {
      u = true;
      let A;
      try {
        A = await _.read();
      } catch (C) {
        ((u = false), m());
        try {
          S.error(C);
        } catch {}
        return;
      }
      if (((u = false), A.done)) {
        m();
        try {
          S.close();
        } catch {}
        return;
      }
      let v = A.value;
      if (c === null && v.byteLength > 0) c = performance.now();
      if (((a += v.byteLength), r)) r.lastAt = performance.now();
      b(S);
      try {
        S.enqueue(v);
      } catch {
        m();
      }
    },
    cancel(S) {
      return (m(), _.cancel(S));
    },
  });
}
function dvi() {
  if (ml(process.env.CLAUDE_ENABLE_BYTE_WATCHDOG)) return false;
  if (ut(process.env.CLAUDE_ENABLE_BYTE_WATCHDOG)) return true;
  return at("tengu_stream_watchdog_default_on", true);
}
function pvi(e) {
  return (
    (e === "firstParty" && _u()) || (e === "anthropicAws" && !process.env.ANTHROPIC_AWS_BASE_URL)
  );
}
function fvi() {
  return ut(process.env.CLAUDE_ENABLE_BYTE_WATCHDOG_BEDROCK);
}
function lvi(e) {
  return pvi(e) || (e === "bedrock" && fvi());
}
function Bkd(e) {
  if (!dvi()) return false;
  return lvi(e) && lvi(fr());
}
function Ukd(e, t) {
  let n = e ?? globalThis.fetch,
    r = fr(),
    o = pvi(r);
  return async (s, i) => {
    let a = new Headers(i?.headers);
    if (o && !a.has(Mot)) a.set(Mot, cvi.randomUUID());
    if (o) {
      let p = v9r();
      if (p !== void 0) a.set(T9r, p);
    }
    try {
      let p = s instanceof Request ? s.url : String(s),
        f = a.get(Mot);
      if (
        (T(
          `[API REQUEST] ${new URL(p).pathname}${f ? ` ${Mot}=${f}` : ""} source=${t ?? "unknown"}`,
        ),
        HUe() === "verbose")
      )
        T(`[API REQUEST AUTH] ${De(Fkd(a))}`, {
          level: "verbose",
        });
    } catch {}
    let l = await n(s, {
        ...i,
        headers: a,
      }),
      c = l.headers.get("content-type"),
      u = o && c?.includes("text/event-stream"),
      d = r === "bedrock" && c?.includes("vnd.amazon.eventstream") && fvi();
    if ((u || d) && l.body && dvi()) {
      let p = H9r(r),
        f = l.headers.get("cf-ray") ?? (d ? (l.headers.get("x-amzn-requestid") ?? void 0) : void 0),
        m = {
          lastAt: 0,
        },
        g = new Response(Nkd(l.body, p, f, m), l);
      return (
        Object.defineProperty(g, "url", {
          value: l.url,
        }),
        Object.defineProperty(g, "_chunkTimes", {
          value: m,
        }),
        g
      );
    }
    return l;
  };
}
function Fkd(e) {
  let t = e.get("authorization"),
    n = t ? `${t.includes(" ") ? bi(t, " ") : "<opaque>"} ***` : "none",
    r = {};
  return (
    e.forEach((o, s) => {
      if (s === "anthropic-beta" || s.startsWith("x-anthropic-")) r[s] = o;
    }),
    {
      auth: n,
      headers: r,
    }
  );
}
var cvi,
  Rkd,
  Lkd,
  Mot = "x-client-request-id",
  Mkd = 10000 /* 1e4 */,
  $kd = 1800000,
  Okd = 180000,
  TCn,
  uvi;
