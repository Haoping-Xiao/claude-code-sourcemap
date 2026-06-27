// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vqr
// matched 2.1.88 source: node_modules/@azure/identity/dist/esm/credentials/azureDeveloperCliCredential.js
// class=partial  jaccard=0.2099  score=1  fileCov=0.2099
// note: low-confidence suggestion: node_modules/@azure/identity/dist/esm/credentials/azureDeveloperCliCredential.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vqr = E(() => {
  UE();
  $D();
  OD();
  l1();
  Mle();
  JEi = R(require("child_process")), Gxe = zp("AzureDeveloperCliCredential"), QEi = {
    getSafeWorkingDir() {
      return "/bin";
    },
    async getAzdAccessToken(e, t, n) {
      let r = [];
      if (t) r = ["--tenant-id", t];
      return new Promise((o, s) => {
        try {
          JEi.default.execFile("azd", ["auth", "token", "--output", "json", ...e.reduce((i, a) => i.concat("--scope", a), []), ...r], {
            cwd: QEi.getSafeWorkingDir(),
            timeout: n
          }, (i, a, l) => {
            o({
              stdout: a,
              stderr: l,
              error: i
            });
          });
        } catch (i) {
          s(i);
        }
      });
    }
  };
});
var ZEi, eAi;