// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AFn
// matched 2.1.88 source: src/utils/proxy.ts
// class=new  jaccard=0.0506  score=0.4484  fileCov=0.054
// note: nearest: src/utils/proxy.ts (0.0506); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var AFn = E(() => {
  Vb();
  sp();
  vn();
  Jt();
  dn();
  kt();
});
var uJ = 2048;
async function HFn(e) {
  if (!ID()) {
    let t = Qst();
    if (t.HTTPS_PROXY && URL.parse(e)?.protocol === "https:") {
      let n;
      if (t.SSL_CERT_FILE) try {
        n = await _ka.readFile(t.SSL_CERT_FILE, "utf8");
      } catch (r) {
        T(`MCP agent-proxy fallback: failed to read CA bundle: ${r instanceof Error ? r.message : String(r)}`, {
          level: "warn"
        });
      }
      return kg({
        url: e,
        fallbackProxy: {
          url: t.HTTPS_PROXY,
          noProxy: t.NO_PROXY,
          ca: n
        }
      });
    }
  }
  return kg({
    url: e
  });
}
var _ka;