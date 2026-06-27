// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ist
// matched 2.1.88 source: src/utils/sessionIngressAuth.ts
// class=modified  jaccard=0.4625  score=0.8447  fileCov=0.5054
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ist = E(() => {
  kt();
  fd();
  Lx();
  fn();
  ((mzr = require("fs")), (Q$i = new Map()));
  ((T$d = ["bash_shell", "mcp_stdio", "lsp", "other"]), (Cst = new Map()));
});
function x$d() {
  let e = Sbr();
  if (e !== void 0) return e;
  let t = process.env.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (!t) {
    let r = process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? JSn,
      o = sPt(r, "session ingress token");
    return (QBe(o), o);
  }
  let n = parseInt(t, 10);
  if (Number.isNaN(n))
    return (
      T(
        `CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR must be a valid file descriptor number, got: ${t}`,
        {
          level: "error",
        },
      ),
      QBe(null),
      null
    );
  try {
    let r = `/proc/self/fd/${n}`,
      o = oet(r, {
        maxBytes: wUr,
      }).trim();
    if (!o)
      return (
        T("File descriptor contained empty token", {
          level: "error",
        }),
        QBe(null),
        null
      );
    return (
      T(`Successfully read token from file descriptor ${n}`),
      QBe(o),
      CUr(JSn, o, "session ingress token"),
      o
    );
  } catch (r) {
    T(`Failed to read token from file descriptor ${n}: ${be(r)}`, {
      level: "error",
    });
    let o = process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? JSn,
      s = sPt(o, "session ingress token");
    return (QBe(s), s);
  }
}
function XS() {
  let e = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (e) return e;
  return x$d();
}
function cke() {
  let e = XS();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let t = {
        Cookie: `sessionKey=${e}`,
      },
      n = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (n) t["X-Organization-Uuid"] = n;
    return t;
  }
  return {
    Authorization: `Bearer ${e}`,
  };
}
function rOi(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}
