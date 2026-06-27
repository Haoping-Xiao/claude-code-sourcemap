// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WSr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/skills/versions.mjs
// class=partial  jaccard=0.2145  score=0.4672  fileCov=0.2839
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/skills/versions.mjs; dir inferred from dep-graph -> constants; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WSr = E(() => {
  Tx();
  rv();
  DR();
  uIt = class uIt extends cp {
    create(e, t) {
      let {
        betas: n,
        ...r
      } = e;
      return this._client.post("/v1/user_profiles?beta=true", {
        body: r,
        ...t,
        headers: ms([{
          "anthropic-beta": [...(n ?? []), "user-profiles-2026-03-24"].toString()
        }, t?.headers])
      });
    }
    retrieve(e, t = {}, n) {
      let {
        betas: r
      } = t ?? {};
      return this._client.get(ma`/v1/user_profiles/${e}?beta=true`, {
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "user-profiles-2026-03-24"].toString()
        }, n?.headers])
      });
    }
    update(e, t, n) {
      let {
        betas: r,
        ...o
      } = t;
      return this._client.post(ma`/v1/user_profiles/${e}?beta=true`, {
        body: o,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "user-profiles-2026-03-24"].toString()
        }, n?.headers])
      });
    }
    list(e = {}, t) {
      let {
        betas: n,
        ...r
      } = e ?? {};
      return this._client.getAPIList("/v1/user_profiles?beta=true", NS, {
        query: r,
        ...t,
        headers: ms([{
          "anthropic-beta": [...(n ?? []), "user-profiles-2026-03-24"].toString()
        }, t?.headers])
      });
    }
    createEnrollmentURL(e, t = {}, n) {
      let {
        betas: r
      } = t ?? {};
      return this._client.post(ma`/v1/user_profiles/${e}/enrollment_url?beta=true`, {
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "user-profiles-2026-03-24"].toString()
        }, n?.headers])
      });
    }
  };
});
var dIt;