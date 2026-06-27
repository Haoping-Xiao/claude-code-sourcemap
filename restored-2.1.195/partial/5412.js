// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rur
// matched 2.1.88 source: src/bridge/workSecret.ts
// class=partial  jaccard=0.094  score=0.188  fileCov=0.1582
// note: low-confidence suggestion: src/bridge/workSecret.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rur = E(() => {
  Un();
  bm();
  xur();
});
async function rum() {
  let e = Oe.CLAUDE_CLIENT_PRESENCE_FILE;
  if (!e) return !1;
  if (Fc(e) && !qp(e)) return !1;
  try {
    return await ugc.stat(e), !0;
  } catch (t) {
    if (!wn(t)) T(`[presence] client-presence-marker stat failed: ${t}`);
    return !1;
  }
}
function dgc(e, t, n) {
  if (Vi()) return num;
  let r = {
      sessionId: e,
      baseUrl: t,
      getAuthHeaders: n
    },
    o = null,
    s = 0,
    i = () => {
      let d = Date.now();
      s = d, o ??= new Date(d).toISOString();
      let p = `${r.baseUrl}/v1/code/sessions/${r.sessionId}/client/presence`;
      return T(`[presence] pulse \u2192 ${p}`), po.post(p, {
        client_id: tum,
        connected_at: o
      }, {
        headers: {
          ...r.getAuthHeaders(),
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": _x()
        },
        timeout: Lur,
        validateStatus: () => !0
      }).then(f => {
        if (f.status >= 400) T(`[presence] pulse got ${f.status}`);
      }, () => {});
    },
    a = () => {
      if (GBe() === !1) {
        T("[presence] pulse skipped (terminal blurred)");
        return;
      }
      if (Date.now() - s < Lur) return;
      i();
    },
    l = p_r(a),
    c = H_r(() => {
      let d = GBe();
      if (T(`[presence] terminal focus \u2192 ${d === void 0 ? "unknown" : d ? "focused" : "blurred"}`), d === !0) a();
    });
  T(`[presence] wired for session ${e}`);
  let u = !1;
  return {
    teardown() {
      u = !0, l?.(), l = null, c?.(), c = null, o = null;
    },
    pulseIfClientPresent() {
      if (u || Date.now() - s < Lur) return;
      rum().then(d => {
        if (d && !u && Date.now() - s >= Lur) T("[presence] client-presence-marker active \u2192 pulse"), i();
      });
    }
  };
}
var ugc,
  Lur = 5000,
  tum,
  num;