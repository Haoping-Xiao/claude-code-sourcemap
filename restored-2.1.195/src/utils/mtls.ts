// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u9
// matched 2.1.88 source: src/utils/mtls.ts
// class=modified  jaccard=0.3382  score=1  fileCov=0.3382
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var u9 = E(() => {
  Qi();
  Vet();
  je();
  ys();
  ((LCs = require("https")),
    (UB = Cn(() => {
      let e = {};
      if (process.env.CLAUDE_CODE_CLIENT_CERT)
        try {
          ((e.cert = qt().readFileSync(process.env.CLAUDE_CODE_CLIENT_CERT, {
            encoding: "utf8",
          })),
            T("mTLS: Loaded client certificate from CLAUDE_CODE_CLIENT_CERT"));
        } catch (t) {
          T(`mTLS: Failed to load client certificate: ${t}`, {
            level: "error",
          });
        }
      if (process.env.CLAUDE_CODE_CLIENT_KEY)
        try {
          ((e.key = qt().readFileSync(process.env.CLAUDE_CODE_CLIENT_KEY, {
            encoding: "utf8",
          })),
            T("mTLS: Loaded client key from CLAUDE_CODE_CLIENT_KEY"));
        } catch (t) {
          T(`mTLS: Failed to load client key: ${t}`, {
            level: "error",
          });
        }
      if (process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE)
        ((e.passphrase = process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE),
          T("mTLS: Using client key passphrase"));
      if (Object.keys(e).length === 0) return;
      return e;
    })),
    (qLr = Cn(() => {
      let e = UB(),
        t = DG();
      if (!e && !t) return;
      let n = {
        ...e,
        ...(t && {
          ca: t,
        }),
        keepAlive: true,
      };
      return (T("mTLS: Creating HTTPS agent with custom certificates"), new LCs.Agent(n));
    })));
});
