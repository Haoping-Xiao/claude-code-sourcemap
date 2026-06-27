// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module db
// matched 2.1.88 source: src/utils/authFileDescriptor.ts
// class=modified  jaccard=0.4578  score=0.6453  fileCov=0.6118
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var db = E(() => {
  Pw();
  At();
  (($7s = require("async_hooks")), (uI = require("fs/promises")));
  kld = new $7s.AsyncLocalStorage();
});
function CUr(e, t, n) {
  if (!ut(process.env.CLAUDE_CODE_REMOTE)) return;
  try {
    (YSn.mkdirSync(XSn, {
      recursive: true,
      mode: 448,
    }),
      YSn.writeFileSync(e, t, {
        encoding: "utf8",
        mode: 384,
      }),
      T(`Persisted ${n} to ${e} for subprocess access`));
  } catch (r) {
    T(`Failed to persist ${n} to disk (non-fatal): ${be(r)}`, {
      level: "error",
    });
  }
}
function sPt(e, t) {
  try {
    let r = qt()
      .readFileSync(e, {
        encoding: "utf8",
      })
      .trim();
    if (!r) return null;
    return (T(`Read ${t} from well-known file ${e}`), r);
  } catch (n) {
    if (!wn(n))
      T(`Failed to read ${t} from ${e}: ${be(n)}`, {
        level: "debug",
      });
    return null;
  }
}
function B7s({ envVar: e, wellKnownPath: t, label: n, getCached: r, setCached: o }) {
  let s = r();
  if (s !== void 0) return s;
  let i = process.env[e];
  if (!i) {
    let l = sPt(t, n);
    return (o(l), l);
  }
  let a = parseInt(i, 10);
  if (Number.isNaN(a))
    return (
      T(`${e} must be a valid file descriptor number, got: ${i}`, {
        level: "error",
      }),
      o(null),
      null
    );
  try {
    let l = `/proc/self/fd/${a}`,
      c = oet(l, {
        maxBytes: wUr,
      }).trim();
    if (!c)
      return (
        T(`File descriptor contained empty ${n}`, {
          level: "error",
        }),
        o(null),
        null
      );
    return (T(`Successfully read ${n} from file descriptor ${a}`), o(c), CUr(t, c, n), c);
  } catch (l) {
    T(`Failed to read ${n} from file descriptor ${a}: ${be(l)}`, {
      level: "error",
    });
    let c = sPt(t, n);
    return (o(c), c);
  }
}
function Dld() {
  let e = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!e) return;
  delete process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  try {
    let n = qt().readFileSync(e, {
      encoding: "utf8",
    });
    N7s.unlink(e).catch(() => {});
    let r = JSON.parse(n);
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      T("bg auth snapshot missing accessToken", {
        level: "warn",
      });
      return;
    }
    if ((iee(r.accessToken), Array.isArray(r.scopes))) vCt(r.scopes);
    if (r.subscriptionType) process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE = r.subscriptionType;
    if (r.rateLimitTier) process.env.CLAUDE_CODE_RATE_LIMIT_TIER = r.rateLimitTier;
    T("Consumed bg auth snapshot from sockDir");
  } catch (t) {
    if (!wn(t))
      T(`Failed to consume bg auth snapshot: ${be(t)}`, {
        level: "warn",
      });
  }
}
function b9() {
  return (
    Dld(),
    B7s({
      envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
      wellKnownPath: Rld,
      label: "OAuth token",
      getCached: TCt,
      setCached: iee,
    })
  );
}
function iPt() {
  return B7s({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: Lld,
    label: "API key",
    getCached: Abr,
    setCached: Hbr,
  });
}
var YSn,
  N7s,
  XSn = "/home/claude/.claude/remote",
  Rld,
  Lld,
  JSn,
  wUr = 65536;
