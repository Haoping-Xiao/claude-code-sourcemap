// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MAe
// matched 2.1.88 source: src/utils/telemetry/betaSessionTracing.ts
// class=modified (alt of src/utils/telemetry/betaSessionTracing.ts)  jaccard=0.0269  score=0.1079  fileCov=0.0345
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module MAe] deps: AVe, ZU, pre, hut, lNn, O8e, Cao, dQn, kt, dn, Du, lT, I1n, xW, Cp, ii, At, vn, WSe, tP, je, vM, co, q8, nIl, Fze, Vv, bPo, ft, ag, Ld, bm, kut, OKt, Ao, _oe, Oot, UX, vQn, BKt, put, NX, wr, I1, u$, mIl, sp, l8t, ALo, gIl, hIl, lze, Rze, K0, _a, kxl, Pxl, Oxl, ft, Nxl, fp, tMo, Hu, tSe, i$, Il, Vxl, Xxl
rMo = new Set(["interrupt", "refusal-fallback-edit"]);
function uwf(e) {
  if (e?.startsWith("file:")) {
    let t = e.slice(5);
    return t
      ? {
          mode: "file",
          dir: tZn.resolve(t),
        }
      : {
          mode: "disabled",
        };
  }
  return ut(e)
    ? {
        mode: "inline",
      }
    : {
        mode: "disabled",
      };
}
function rkl() {
  let e = process.env.OTEL_LOG_RAW_API_BODIES;
  if (!eZn || eZn.raw !== e)
    eZn = {
      raw: e,
      config: uwf(e),
    };
  return eZn.config;
}
function okl() {
  return rkl().mode !== "disabled";
}
async function dwf(e, t, n) {
  try {
    await aYt.writeFile(t, n);
  } catch (r) {
    if (!wn(r)) throw r;
    (await aYt.mkdir(e, {
      recursive: true,
    }),
      await aYt.writeFile(t, n));
  }
}
function truncateContent(e, t, n) {
  let r = rkl();
  if (r.mode === "disabled") return;
  let o = De(t);
  if (r.mode === "file") {
    let i = e === "api_request_body" ? "request" : "response",
      a = n.request_id ?? lMo.randomUUID(),
      l = /^[A-Za-z0-9_-]+$/.test(a) ? a : lMo.randomUUID(),
      c = tZn.join(r.dir, `${l}.${i}.json`);
    (dwf(r.dir, c, o).catch((u) =>
      T(`OTEL raw body file write failed: ${u}`, {
        level: "error",
      }),
    ),
      Jc(e, {
        body_ref: c,
        body_length: String(Buffer.byteLength(o)),
        ...n,
      }));
    return;
  }
  let s = o.length > nkl;
  Jc(e, {
    body: s
      ? o.slice(0, nkl) +
        `

[TRUNCATED - Content exceeds 60KB limit]`
      : o,
    body_length: String(o.length),
    ...(s && {
      body_truncated: "true",
    }),
    ...n,
  });
}
function ikl(e) {
  return e.map((t) => {
    if (t.type === "thinking")
      return {
        ...t,
        thinking: "<REDACTED>",
      };
    if (t.type === "redacted_thinking")
      return {
        ...t,
        data: "<REDACTED>",
      };
    return t;
  });
}
function pwf(e) {
  return {
    ...e,
    messages: e.messages.map((t) =>
      t.role === "assistant" && Array.isArray(t.content)
        ? {
            ...t,
            content: ikl(t.content),
          }
        : t,
    ),
  };
}
function nZn(e, t) {
  if (!okl()) return;
  let n = pwf(e);
  truncateContent("api_request_body", n, {
    model: e.model,
    query_source: t,
  });
}
function akl(e, t) {
  if (!okl() || e.length === 0) return;
  let n = e.at(-1),
    r = e.flatMap((s) => s.message.content),
    o = {
      ...n.message,
      content: ikl(r),
    };
  truncateContent("api_response_body", o, {
    model: t.model,
    query_source: t.querySource,
    request_id: t.requestId ?? void 0,
  });
}
var lMo,
  aYt,
  tZn,
  nkl = 61440,
  eZn;
