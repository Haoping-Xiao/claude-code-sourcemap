// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T6t
// matched 2.1.88 source: src/tools/WebFetchTool/WebFetchTool.ts
// class=modified  jaccard=0.3877  score=0.4911  fileCov=0.6481
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module T6t] deps: @modelcontextprotocol/sdk/dist/esm/types.js, utils/debug.ts, utils/semver.ts, services/mockRateLimits.ts, Il, utils/profilerBase.ts, utils/permissions/permissionSetup.ts, services/teamMemorySync/secretScanner.ts, TX, tools/WebFetchTool/UI.tsx, bridge/sessionIdCompat.ts, tools/WebFetchTool/utils.ts
bfl = require("http");
Kuf = e4t - 2000;
((Xuf = ve(() =>
  H.strictObject({
    url: H.string().url().describe("The URL to fetch content from"),
    prompt: H.string().describe("The prompt to run on the fetched content"),
  }),
)),
  (Juf = ve(() =>
    H.object({
      bytes: H.number().describe("Size of the fetched content in bytes"),
      code: H.number().describe("HTTP response code"),
      codeText: H.string().describe("HTTP response code text"),
      result: H.string().describe("Processed result from applying the prompt to the content"),
      durationMs: H.number().describe("Time taken to fetch and process the content"),
      url: H.string().describe("The URL that was fetched"),
      artifactRead: H.object({
        slug: H.string(),
        ver: H.string(),
      }).optional(),
    }),
  )));
FF = ti({
  name: Sb,
  ruleContentField: "url",
  searchHint: "fetch and extract content from a URL",
  maxResultSizeChars: 100000 /* 1e5 */,
  shouldDefer: true,
  async description(e) {
    let { url: t } = e;
    try {
      return `Claude wants to fetch content from ${new URL(t).hostname}`;
    } catch {
      return "Claude wants to fetch content from this URL";
    }
  },
  userFacingName() {
    return "Fetch";
  },
  getToolUseSummary: NIo,
  getActivityDescription(e) {
    let t = NIo(e);
    return t ? `Fetching ${t}` : "Fetching web page";
  },
  get inputSchema() {
    return Xuf();
  },
  get outputSchema() {
    return Juf();
  },
  isEnabled() {
    return Us("allow_web_fetch");
  },
  isConcurrencySafe() {
    return true;
  },
  isReadOnly() {
    return true;
  },
  toAutoClassifierInput(e) {
    return e.prompt ? `${e.url}: ${e.prompt}` : e.url;
  },
  async checkPermissions(e, t) {
    let n = Fr(t),
      r = _fl(e),
      o = Q$n(hQ(n, FF, "deny"), r);
    if (o)
      return {
        behavior: "deny",
        message: `${FF.name} denied access to ${r}.`,
        decisionReason: {
          type: "rule",
          rule: o,
        },
      };
    let s = Q$n(hQ(n, FF, "ask"), r);
    if (s)
      return {
        behavior: "ask",
        message: `Claude requested permissions to use ${FF.name}, but you haven't granted it yet.`,
        decisionReason: {
          type: "rule",
          rule: s,
        },
        suggestions: Sko(r),
      };
    let i = Q$n(hQ(n, FF, "allow"), r);
    if (i)
      return {
        behavior: "allow",
        updatedInput: e,
        decisionReason: {
          type: "rule",
          rule: i,
        },
      };
    if (_Yn(e.url))
      return {
        behavior: "allow",
        updatedInput: e,
        decisionReason: {
          type: "other",
          reason: "Preapproved host",
        },
      };
    return {
      behavior: "ask",
      message: `Claude requested permissions to use ${FF.name}, but you haven't granted it yet.`,
      suggestions: Sko(r),
    };
  },
  renderToolUseMessage: xcl,
  renderToolUseProgressMessage: kcl,
  renderToolResultMessage: Rcl,
  async validateInput(e) {
    let { url: t } = e;
    try {
      new URL(t);
    } catch {
      return {
        result: false,
        message: `Error: Invalid URL "${t}". The URL provided could not be parsed.`,
        meta: {
          reason: "invalid_url",
        },
        errorCode: 1,
      };
    }
    return {
      result: true,
    };
  },
  async prompt({ model: e, tools: t }) {
    let n = false;
    {
      let [{ ARTIFACT_TOOL_NAME: r }, { isArtifactToolEnabled: o }] = await Promise.all([
        Promise.resolve().then(() => (RX(), Q2t)),
        Promise.resolve().then(() => (Nue(), KOn)),
      ]);
      n = !!_l(t ?? [], r) && o();
    }
    return Hna(e, n);
  },
  async call(e, t, n, r) {
    let { url: o, prompt: s } = e,
      {
        abortController: i,
        options: { isNonInteractiveSession: a },
      } = t,
      l = Date.now();
    {
      let S = o;
      try {
        let v = new URL(o);
        if (v.protocol === "http:") v.protocol = "https:";
        S = v.href;
      } catch {}
      let A = await Quf(S, t);
      if (A) {
        let { readArtifactContent: v } = await Promise.resolve().then(() => (bko(), hfl)),
          C = await v(A, i.signal);
        if (C.err !== null) {
          if (C.status === void 0) throw new S6t(`Artifact ${A.slug}: ${C.err}`);
          return {
            data: {
              bytes: 0,
              code: C.status,
              codeText: EYn(C.status),
              result: `Artifact ${A.slug}: ${C.err}`,
              durationMs: Date.now() - l,
              url: o,
            },
          };
        }
        let x;
        if (C.role === "owner") {
          let D = Ix(C.title, 200),
            P = `[Artifact ${A.slug}${D ? ` "${D}"` : ""} \u2014 owned by you`,
            O,
            L;
          if (C.html.length > Kuf) {
            let { persistBinaryContent: M } = await Promise.resolve().then(() => (qdt(), Ndo)),
              N = ($) => $.replace(/[^\w-]/g, ""),
              B = await M(
                Buffer.from(C.html),
                "text/html",
                `artifact-${N(A.slug).slice(0, 8)}-${N(C.ver)}`,
              );
            if ("error" in B)
              ((O = `${Ra(C.bytes)} total \u2014 saving the full HTML to disk failed; raw HTML (may be truncated) follows`),
                (L = Ix(C.html, $_t)));
            else {
              O = `${Ra(C.bytes)} total \u2014 full HTML saved to ${B.filepath}; head follows`;
              let $ = P.length + O.length + 4;
              L = Ix(C.html, Math.max(0, e4t - $));
            }
          } else ((O = "raw HTML follows"), (L = C.html));
          x = `${P}; ${O}]
${L}`;
        } else {
          let { isFrameReaderPersistEnabled: D } = await Promise.resolve().then(() => (l$e(), yko));
          if (D()) {
            let P = (B) => B.replace(/[^\w-]/g, ""),
              O = `artifact-${P(A.slug).slice(0, 8)}-${P(C.ver)}`,
              [L, M] = await Promise.all([
                Promise.resolve()
                  .then(() => (qdt(), Ndo))
                  .then((B) => B.persistBinaryContent(Buffer.from(C.html), "text/html", O)),
                E6t(C.html).then((B) => A6t(s, B, i.signal, a, false, t.agentContext)),
              ]),
              N =
                "error" in L
                  ? "saving the raw HTML to disk failed"
                  : `raw HTML saved to ${L.filepath}`;
            x = `[Artifact ${A.slug} \u2014 shared with you; summary below, ${N}]
${M}`;
          } else x = await A6t(s, await E6t(C.html), i.signal, a, false, t.agentContext);
        }
        let I;
        if (C.role === "owner") {
          let { isFrameBaseVersionEnabled: D } = await Promise.resolve().then(() => (l$e(), yko));
          if (D())
            (t.setArtifactReadVersion(A.slug, C.ver),
              (I = {
                slug: A.slug,
                ver: C.ver,
              }));
        }
        return {
          data: {
            bytes: C.bytes,
            code: 200,
            codeText: "OK",
            result: x,
            durationMs: Date.now() - l,
            url: o,
            ...(I && {
              artifactRead: I,
            }),
          },
        };
      }
    }
    let c = await bYn(o, i);
    if ("type" in c && c.type === "provenance_denied") {
      if (!n || !r) throw Q8t(c.errorMessage);
      let S = c.url;
      c = await Icl({
        denial: c,
        prompt: s,
        tool: FF,
        context: t,
        canUseTool: n,
        parentMessage: r,
        suggestions: Sko(
          _fl({
            url: S,
            prompt: s,
          }),
        ),
        refetch: (A) => bYn(A, i),
        onOutcome: (A) => {
          G("tengu_web_fetch_provenance_prompt", {
            outcome: $e(A),
          });
        },
      });
    }
    if ("type" in c && c.type === "http_error") {
      G("tengu_web_fetch_http_error", {
        statusCode: c.statusCode,
      });
      let S = Yuf(c);
      return {
        data: {
          bytes: 0,
          code: c.statusCode,
          codeText: EYn(c.statusCode),
          result: S,
          durationMs: Date.now() - l,
          url: o,
        },
      };
    }
    if ("type" in c && c.type === "redirect") {
      let S = EYn(c.statusCode),
        A = `REDIRECT DETECTED: The URL redirects to a different host.

Original URL: ${c.originalUrl}
Redirect URL: ${c.redirectUrl}
Status: ${c.statusCode} ${S}

To complete your request, I need to fetch content from the redirected URL. Please use WebFetch again with these parameters:
- url: "${c.redirectUrl}"
- prompt: "${s}"`;
      return {
        data: {
          bytes: Buffer.byteLength(A),
          code: c.statusCode,
          codeText: S,
          result: A,
          durationMs: Date.now() - l,
          url: o,
        },
      };
    }
    let {
        content: u,
        bytes: d,
        code: p,
        codeText: f,
        contentType: m,
        persistedPath: g,
        persistedSize: h,
      } = c,
      y = _Yn(o),
      b;
    if (y && m.includes("text/markdown") && u.length < $_t) b = u;
    else b = await A6t(s, u, i.signal, a, y, t.agentContext);
    if (g)
      b += `

[Binary content (${m}, ${Ra(h ?? d)}) also saved to ${g}]`;
    return {
      data: {
        bytes: d,
        code: p,
        codeText: f,
        result: b,
        durationMs: Date.now() - l,
        url: o,
      },
    };
  },
  mapToolResultToToolResultBlockParam({ result: e }, t) {
    return {
      tool_use_id: t,
      type: "tool_result",
      content: e,
    };
  },
});
async function Eko(e) {
  G("tengu_unary_event", {
    event: $e(e.event),
    completion_type: $e(e.completion_type),
    language_name: await e.metadata.language_name,
    message_id: Hr(e.metadata.message_id),
    platform: Z9(e.metadata.platform),
    ...(e.metadata.hasFeedback !== void 0 && {
      hasFeedback: e.metadata.hasFeedback,
    }),
  });
}
