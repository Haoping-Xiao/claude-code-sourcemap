// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wQ
// matched 2.1.88 source: src/tools/BriefTool/upload.ts
// class=modified  jaccard=0.3937  score=0.5696  fileCov=0.5604
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: uploadBriefAttachment, escapeContentDispositionFilename
// [unwrapped __esm module wQ] deps: Rc, oo, Ls
_yl = require("os");
function guessMimeType(filename) {
  let t = V7n.extname(filename).toLowerCase();
  return imf[t] ?? "application/octet-stream";
}
function escapeContentDispositionFilename(e) {
  return e
    .replace(/[\r\n]/g, "")
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"');
}
function debug(msg) {
  T(`[brief:upload] ${msg}`);
}
function lmf() {
  return lfe() ?? process.env.ANTHROPIC_BASE_URL ?? $s().BASE_API_URL;
}
async function uploadBriefAttachment(fullPath, size, ctx) {
  if (!ctx.replBridgeEnabled) return;
  if (size > Syl) {
    (debug(`skip ${fullPath}: ${size} bytes exceeds ${Syl} limit`),
      It("bridge_attachment_upload", "too_large"));
    return;
  }
  let r = LN();
  if (!r) {
    (debug("skip: no oauth token"), It("bridge_attachment_upload", "no_token"));
    return;
  }
  let o;
  try {
    o = await Ayl.readFile(fullPath);
  } catch (d) {
    (debug(`read failed for ${fullPath}: ${d}`), It("bridge_attachment_upload", "read_failed"));
    return;
  }
  let i = `${lmf()}/api/oauth/file_upload`,
    a = V7n.basename(fullPath),
    l = guessMimeType(a),
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
      signal: ctx.signal,
      validateStatus: () => true,
    });
    if (d.status !== 201) {
      debug(`upload failed for ${fullPath}: status=${d.status} body=${De(d.data).slice(0, 200)}`);
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
      (debug(`unexpected response shape for ${fullPath}: ${p.error.message}`),
        It("bridge_attachment_upload", "bad_response"));
      return;
    }
    return (
      debug(`uploaded ${fullPath} \u2192 ${p.data.file_uuid} (${size} bytes)`),
      xe("bridge_attachment_upload"),
      p.data.file_uuid
    );
  } catch (d) {
    (debug(`upload threw for ${fullPath}: ${d}`),
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
