// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wQ
// matched 2.1.88 source: src/tools/BriefTool/upload.ts
// class=modified  jaccard=0.3937  score=0.5696  fileCov=0.5604
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: uploadBriefAttachment, escapeContentDispositionFilename
// [unwrapped __esm module wQ] deps: Rc, oo, Ls
_yl = require("os");
function amf(e) {
  let t = V7n.extname(e).toLowerCase();
  return imf[t] ?? "application/octet-stream";
}
function escapeContentDispositionFilename(e) {
  return e
    .replace(/[\r\n]/g, "")
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"');
}
function V6e(e) {
  T(`[brief:upload] ${e}`);
}
function lmf() {
  return lfe() ?? process.env.ANTHROPIC_BASE_URL ?? $s().BASE_API_URL;
}
async function uploadBriefAttachment(e, t, n) {
  if (!n.replBridgeEnabled) return;
  if (t > Syl) {
    (V6e(`skip ${e}: ${t} bytes exceeds ${Syl} limit`),
      It("bridge_attachment_upload", "too_large"));
    return;
  }
  let r = LN();
  if (!r) {
    (V6e("skip: no oauth token"), It("bridge_attachment_upload", "no_token"));
    return;
  }
  let o;
  try {
    o = await Ayl.readFile(e);
  } catch (d) {
    (V6e(`read failed for ${e}: ${d}`), It("bridge_attachment_upload", "read_failed"));
    return;
  }
  let i = `${lmf()}/api/oauth/file_upload`,
    a = V7n.basename(e),
    l = amf(a),
    c = `----FormBoundary${Eyl.randomUUID()}`,
    u = Buffer.concat([
      Buffer.from(`--${c}\r
Content-Disposition: form-data; name="file"; filename="${escapeContentDispositionFilename(a)}"\r
Content-Type: ${l}\r
\r
`),
      o,
      Buffer.from(`\r
--${c}--\r
`),
    ]);
  try {
    let d = await po.post(i, u, {
      headers: {
        Authorization: `Bearer ${r}`,
        "Content-Type": `multipart/form-data; boundary=${c}`,
        "Content-Length": u.length.toString(),
      },
      timeout: smf,
      signal: n.signal,
      validateStatus: () => true,
    });
    if (d.status !== 201) {
      V6e(`upload failed for ${e}: status=${d.status} body=${De(d.data).slice(0, 200)}`);
      let f = d.status,
        m =
          f === 401
            ? "http_401"
            : f === 403
              ? "http_403"
              : f === 413
                ? "http_413"
                : f >= 500
                  ? "http_5xx"
                  : f >= 400
                    ? "http_4xx"
                    : "http_other";
      It("bridge_attachment_upload", m);
      return;
    }
    let p = cmf().safeParse(d.data);
    if (!p.success) {
      (V6e(`unexpected response shape for ${e}: ${p.error.message}`),
        It("bridge_attachment_upload", "bad_response"));
      return;
    }
    return (
      V6e(`uploaded ${e} \u2192 ${p.data.file_uuid} (${t} bytes)`),
      xe("bridge_attachment_upload"),
      p.data.file_uuid
    );
  } catch (d) {
    (V6e(`upload threw for ${e}: ${d}`),
      It("bridge_attachment_upload", po.isCancel(d) ? "aborted" : "network_error"));
    return;
  }
}
var Eyl,
  Ayl,
  V7n,
  Syl = 31457280,
  smf = 30000,
  imf,
  cmf;
