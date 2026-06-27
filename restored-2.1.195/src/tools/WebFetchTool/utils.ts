// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mko
// matched 2.1.88 source: src/tools/WebFetchTool/utils.ts
// class=modified  jaccard=0.095  score=0.1267  fileCov=0.2749
// note: deminified; 9 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mko = E(() => {
  Hp();
  YZe();
  kt();
  ZE();
  je();
  At();
  Gx();
  vn();
  qdt();
  dr();
  Jt();
  BIo();
  $cl();
  TX();
  OIo();
  cko = class cko extends Error {
    constructor(e) {
      super(`Claude Code is unable to fetch from ${e}`);
      this.name = "DomainBlockedError";
    }
  };
  uko = class uko extends Error {
    constructor(e) {
      super(
        `Unable to verify if domain ${e} is safe to fetch. This may be due to network restrictions or enterprise security policies blocking claude.ai.`,
      );
      this.name = "DomainCheckFailedError";
    }
  };
  nfl = class nfl extends Error {
    domain;
    constructor(e) {
      super(
        De({
          error_type: "EGRESS_BLOCKED",
          domain: e,
          message: `Access to ${e} is blocked by the network egress proxy.`,
        }),
      );
      this.domain = e;
      this.name = "EgressBlockedError";
    }
  };
  rfl = class rfl extends Error {
    constructor(e) {
      super(`Too many redirects (exceeded ${e})`);
      this.name = "TooManyRedirectsError";
    }
  };
  S6t = class S6t extends Error {
    code;
    constructor(e, t) {
      super(e);
      ((this.name = "WebFetchTransportError"), (this.code = t));
    }
  };
  ((yYn = new bG({
    maxSize: xuf,
    ttl: Iuf,
  })),
    (dko = new bG({
      max: 128,
      ttl: 300000,
    })));
  Ouf = new Set([301, 302, 303, 307, 308]);
});
var yko = {};
_t(yko, {
  publishArtifact: () => publishArtifact,
  makeSetArtifactReadVersion: () => makeSetArtifactReadVersion,
  isShareAwarePublishEnabled: () => isShareAwarePublishEnabled,
  isFrameSignedPutHeaderCheckEnabled: () => isFrameSignedPutHeaderCheckEnabled,
  isFrameReaderPersistEnabled: () => isFrameReaderPersistEnabled,
  isFrameBaseVersionEnabled: () => isFrameBaseVersionEnabled,
  goCpHeaders: () => goCpHeaders,
  artifactViewerUrl: () => artifactViewerUrl,
  MAX_ARTIFACT_BYTES: () => MAX_ARTIFACT_BYTES,
});
function isFrameBaseVersionEnabled() {
  return at("tengu_cobalt_plinth_fern", !1);
}
function isShareAwarePublishEnabled() {
  return at("tengu_saffron_anchor", !1);
}
function isFrameReaderPersistEnabled() {
  return at("tengu_cobalt_plinth_reader_persist", !1);
}
function isFrameSignedPutHeaderCheckEnabled() {
  return at("tengu_cobalt_plinth_putguard", !1);
}
function makeSetArtifactReadVersion(e) {
  return (t, n) =>
    e((r) => ({
      ...r,
      artifactReadVersions: {
        ...r.artifactReadVersions,
        [t]: n,
      },
    }));
}
function ufl(e) {
  return {
    ...(e.slug && {
      slug: e.slug,
    }),
    title: e.title,
    favicon: e.favicon,
    ...(e.label && {
      label: e.label,
    }),
    ...(e.description && {
      description: e.description,
    }),
  };
}
function dfl() {
  let e = Q2();
  return e
    ? {
        entrypoint: e.toLowerCase().slice(0, 64),
      }
    : {};
}
function pfl() {
  let e = Oe.CLAUDE_CODE_REMOTE_SESSION_ID;
  return e && Guf.test(e)
    ? {
        session_id: e,
      }
    : {};
}
function goCpHeaders() {
  return {
    "X-Frame-CP": "go",
    "X-Frame-Surface": "code",
    "X-Frame-Platform": oY() ? "desktop" : "cli",
  };
}
async function publishArtifact(e, t) {
  let n = performance.now(),
    { slug: r, title: o, favicon: s, label: i, description: a, mcp: l } = t,
    c = !!r,
    u = !!l,
    d = isFrameBaseVersionEnabled(),
    p = d ? t.baseVersion : void 0,
    f = {
      slug: r,
      title: o,
      favicon: s,
      label: i,
      description: a,
    },
    m = `<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1">${juf}</head><body>
${e}
</body></html>`,
    g = Buffer.byteLength(m, "utf8");
  if (g > MAX_ARTIFACT_BYTES)
    return (
      Le("artifact_publish", "too_large", {
        page_bytes: g,
      }),
      s3(
        `too large: rendered page is ${Math.ceil(g / 1024 / 1024)}MB (max ${MAX_ARTIFACT_BYTES / 1024 / 1024}MB)`,
      )
    );
  let h = Oe.CLAUDE_CODE_ENTRYPOINT ?? "";
  if (Fuf.has(h) || Oe.CLAUDE_CODE_ARTIFACT_DIRECT_UPLOAD || at("tengu_cobalt_plinth_direct", !1))
    return lfl(m, f, l, void 0, p, {
      t0: n,
      pageBytes: g,
      lane: "inline",
      isRedeploy: c,
      hasMcp: u,
    });
  let y = {
    page_bytes: g,
    lane: We("signed"),
  };
  try {
    let b = (L) =>
        Os.post(
          "/api/frame/deploy/init",
          {
            ...ufl(f),
            ...dfl(),
            ...pfl(),
            ...(L &&
              l && {
                mcp: l,
              }),
            ...(p && {
              baseVersion: p,
            }),
          },
          {
            host: "frame",
            auth: "required",
            refreshOAuth: !0,
            headers: goCpHeaders(),
            timeout: 15000,
            validateStatus: () => !0,
          },
        ),
      _ = await b(!0);
    if (_.ok && _.status === 503) (await Nn(2000), (_ = await b(!0)));
    if (!_.ok)
      return (
        Le("artifact_publish", _.reason, y),
        s3(
          _.reason === "no-auth"
            ? `not authenticated \u2014 run /login (${_.detail})`
            : `publish unavailable: ${_.reason}`,
        )
      );
    let S;
    if (_.status === 400 && l) {
      if (
        ((S = N_t(_.data) || "(400, no body)"),
        T(`[artifact] init 400 with mcp, retrying without: ${S}`),
        (_ = await b(!1)),
        !_.ok)
      )
        return (Le("artifact_publish", _.reason, y), s3(`publish unavailable: ${_.reason}`));
    }
    if (d && _.status === 409) {
      let L = mfl(_.data);
      if (L)
        return (
          Le("artifact_publish", "conflict", y),
          {
            ...s3(ffl),
            liveVersion: L,
            conflict: !0,
          }
        );
    }
    if (_.status < 200 || _.status >= 300)
      return (Le("artifact_publish", "init_failed", y), s3(`init ${_.status}: ${N_t(_.data)}`));
    let { slug: A, version: v, putURL: C, putHeaders: x, read: I, shared: k } = _.data ?? {};
    if (!A || !v || !C)
      return (
        Le("artifact_publish", "init_incomplete", y),
        s3("init returned incomplete response")
      );
    let D = performance.now(),
      P = await Vuf(C, m, MAX_ARTIFACT_BYTES, x),
      O = Math.round(performance.now() - D);
    if (P) {
      if ((await afl(A, v, !1), P.status === 403 || P.status === 0)) {
        let L = await lfl(
          m,
          {
            ...f,
            slug: A,
          },
          S ? void 0 : l,
          S,
          p ? v : void 0,
          {
            t0: n,
            pageBytes: g,
            lane: "fallback_inline",
            isRedeploy: c,
            hasMcp: u,
          },
        );
        if (L.err === null)
          return (
            It(
              "artifact_publish",
              P.intercepted
                ? "upload_intercepted_fallback"
                : P.status === 0
                  ? "upload_unreachable_fallback"
                  : "upload_blocked_fallback",
              {
                ...y,
                put_ms: O,
              },
            ),
            L
          );
        let M = P.intercepted || P.status === 0 ? P.err : `blocked (${P.status})`,
          N = L.conflict
            ? L
            : {
                ...L,
                err: `signed upload to storage.googleapis.com failed (${M}); inline fallback via api.anthropic.com also failed: ${L.err}`,
              };
        return d
          ? {
              ...N,
              liveVersion: L.liveVersion ?? v,
            }
          : N;
      }
      return (
        Le("artifact_publish", P.precondition ? "upload_precondition" : "upload_failed", {
          ...y,
          put_ms: O,
        }),
        d
          ? {
              ...s3(P.err),
              liveVersion: v,
            }
          : s3(P.err)
      );
    }
    if ((await afl(A, v, !0), S !== void 0)) It("artifact_publish", "mcp_rejected", y);
    return (
      xe("artifact_publish", {
        ...y,
        put_ms: O,
        e2e_ms: Math.round(performance.now() - n),
        is_redeploy: c,
        has_mcp: u,
      }),
      {
        url: artifactViewerUrl(A),
        slug: A,
        version: v,
        err: null,
        ...(I !== void 0 && {
          read: I,
        }),
        ...(k !== void 0 && {
          shared: k,
        }),
        ...(S !== void 0 && {
          mcpDropped: S,
        }),
      }
    );
  } catch (b) {
    return (
      Le("artifact_publish", "request_error", y),
      s3(b instanceof Error ? b.message : String(b))
    );
  }
}
function quf(e) {
  if ((O_t.delete(e), O_t.add(e), O_t.size > Wuf)) {
    let t = O_t.values().next().value;
    if (t !== void 0) O_t.delete(t);
  }
}
async function Vuf(e, t, n, r) {
  let o =
      r && Object.keys(r).length > 0
        ? r
        : {
            "Content-Type": "text/html; charset=utf-8",
            "x-goog-content-length-range": `0,${n}`,
            "Cache-Control": "public, max-age=31536000, immutable",
          },
    s = O_t.has(e),
    i;
  try {
    i = await lb.put(e, t, {
      headers: o,
      validateStatus: () => !0,
      timeout: 30000,
      maxBodyLength: n + 4096,
    });
  } catch (a) {
    return {
      status: 0,
      err: a instanceof Error ? a.message : String(a),
      precondition: !1,
    };
  }
  if ((quf(e), i.status === 412)) {
    if (s) return null;
    return {
      status: 412,
      err: "upload 412: this version was already written (create-only precondition). Re-run publish to mint a fresh version.",
      precondition: !0,
    };
  }
  if (typeof i.status !== "number" || i.status < 200 || i.status >= 300)
    return {
      status: i.status,
      err: `upload ${i.status}: ${N_t(i.data)}`,
      precondition: !1,
    };
  if (isFrameSignedPutHeaderCheckEnabled() && !i.headers?.["x-goog-generation"])
    return {
      status: 403,
      err: "upload intercepted: 2xx without x-goog-generation \u2014 a proxy answered in place of GCS",
      precondition: !1,
      intercepted: !0,
    };
  return null;
}
async function afl(e, t, n) {
  try {
    let r = await Os.post(
      "/api/frame/deploy/complete",
      {
        slug: e,
        version: t,
        ok: n,
      },
      {
        host: "frame",
        auth: "required",
        refreshOAuth: !0,
        headers: goCpHeaders(),
        timeout: 15000,
        validateStatus: () => !0,
      },
    );
    if (!r.ok) T(`[artifact] deploy/complete skipped: ${r.reason}`);
    else if (r.status !== 204) T(`[artifact] deploy/complete ${r.status}: ${N_t(r.data)}`);
  } catch (r) {
    T(`[artifact] deploy/complete failed: ${r instanceof Error ? r.message : String(r)}`);
  }
}
async function lfl(e, t, n, r, o, s) {
  let i = {
    page_bytes: s.pageBytes,
    lane: $e(s.lane),
  };
  try {
    let a = async (m) => {
        let g = () =>
            Os.post(
              "/api/frame/deploy/direct",
              {
                ...ufl(t),
                ...dfl(),
                ...pfl(),
                ...(m &&
                  n && {
                    mcp: n,
                  }),
                ...(o && {
                  baseVersion: o,
                }),
                content: e,
              },
              {
                host: "frame",
                auth: "required",
                refreshOAuth: !0,
                headers: goCpHeaders(),
                timeout: 60000,
                validateStatus: () => !0,
                maxBodyLength: 2 * MAX_ARTIFACT_BYTES,
              },
            ),
          h = await g();
        if (h.ok && h.status === 429) {
          let y = Ujn(h.response?.headers?.["retry-after"]) ?? 2000;
          (await Nn(Math.min(y, 30000)), (h = await g()));
        }
        return h;
      },
      l = await a(!0);
    if (!l.ok)
      return (
        Le("artifact_publish", l.reason, i),
        s3(
          l.reason === "no-auth"
            ? `not authenticated \u2014 run /login (${l.detail})`
            : `publish unavailable: ${l.reason}`,
        )
      );
    let c = r;
    if (l.status === 400 && n) {
      if (
        ((c = N_t(l.data) || "(400, no body)"),
        T(`[artifact] deploy 400 with mcp, retrying without: ${c}`),
        (l = await a(!1)),
        !l.ok)
      )
        return (Le("artifact_publish", l.reason, i), s3(`publish unavailable: ${l.reason}`));
    }
    if (o && l.status === 409) {
      let m = mfl(l.data);
      if (m)
        return (
          Le("artifact_publish", "conflict", i),
          {
            ...s3(ffl),
            liveVersion: m,
            conflict: !0,
          }
        );
    }
    if (l.status < 200 || l.status >= 300)
      return (Le("artifact_publish", "deploy_failed", i), s3(`deploy ${l.status}: ${N_t(l.data)}`));
    let { slug: u, version: d, read: p, shared: f } = l.data ?? {};
    if (!u || !d)
      return (
        Le("artifact_publish", "deploy_incomplete", i),
        s3("deploy returned incomplete response")
      );
    if (c !== void 0) It("artifact_publish", "mcp_rejected", i);
    return (
      xe("artifact_publish", {
        ...i,
        e2e_ms: Math.round(performance.now() - s.t0),
        is_redeploy: s.isRedeploy,
        has_mcp: s.hasMcp,
      }),
      {
        url: artifactViewerUrl(u),
        slug: u,
        version: d,
        err: null,
        ...(p !== void 0 && {
          read: p,
        }),
        ...(f !== void 0 && {
          shared: f,
        }),
        ...(c !== void 0 && {
          mcpDropped: c,
        }),
      }
    );
  } catch (a) {
    return (
      Le("artifact_publish", "request_error", i),
      s3(a instanceof Error ? a.message : String(a))
    );
  }
}
function artifactViewerUrl(e) {
  return new URL(`/code/artifact/${e}`, $s().CLAUDE_AI_ORIGIN).toString();
}
function s3(e) {
  return {
    url: null,
    slug: null,
    version: null,
    err: e,
  };
}
function mfl(e) {
  if (
    e &&
    typeof e === "object" &&
    "conflict" in e &&
    e.conflict === !0 &&
    "live" in e &&
    typeof e.live === "string"
  )
    return e.live;
  return null;
}
function N_t(e) {
  if (typeof e === "string") return e.slice(0, 200);
  if (e && typeof e === "object") {
    if ("error" in e && typeof e.error === "string") {
      let t = "reason" in e && typeof e.reason === "string" ? ` [${e.reason}]` : "";
      return (e.error + t).slice(0, 200);
    }
    return (De(e) ?? "").slice(0, 200);
  }
  return "";
}
var MAX_ARTIFACT_BYTES = 16777216,
  Fuf,
  juf =
    "<style>:root{color-scheme:light}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#faf9f5;color:#141413}img{max-width:100%}</style>",
  Guf,
  O_t,
  Wuf = 64,
  ffl =
    "conflict: another session published a newer version of this artifact. Re-read the current content (WebFetch the URL), reconcile your edits, then publish again.";
