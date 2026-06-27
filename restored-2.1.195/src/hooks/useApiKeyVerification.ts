// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QSc
// matched 2.1.88 source: src/hooks/useApiKeyVerification.ts
// class=modified  jaccard=0.2996  score=0.5955  fileCov=0.3762
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var QSc = E(() => {
  T7e = R(rt(), 1);
});
function ZSc() {
  let [e, t] = opr.useState(() => {
      if (!eS() || bo()) return "valid";
      let { key: r, source: o } = Ty({
        skipRetrievingKeyFromApiKeyHelper: true,
      });
      if (r || o === "apiKeyHelper") return "loading";
      return "missing";
    }),
    n = opr.useCallback(async () => {
      if (!eS() || bo()) {
        (t("valid"), xe("auth_api_key_verify"));
        return;
      }
      await $ot(Ir());
      let { key: r, source: o } = Ty();
      if (!r) {
        if (o === "apiKeyHelper") {
          (t("error"), Le("auth_api_key_verify", "apikeyhelper_failed"));
          return;
        }
        (t("missing"), It("auth_api_key_verify", "missing"));
        return;
      }
      try {
        let s = await Wac(r, false);
        if ((t(s ? "valid" : "invalid"), s)) xe("auth_api_key_verify");
        else Le("auth_api_key_verify", "invalid");
        return;
      } catch {
        (t("error"), Le("auth_api_key_verify", "network_error"));
        return;
      }
    }, []);
  return {
    status: e,
    reverify: n,
  };
}
var opr;
