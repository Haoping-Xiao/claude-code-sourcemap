// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module peo
// matched 2.1.88 source: src/utils/telemetryAttributes.ts
// class=modified  jaccard=0.1929  score=0.2903  fileCov=0.3653
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module peo] deps: zb, ft, Jt
LKd = ve(() =>
  dt
    .object({
      sub: dt.string().optional(),
      email: dt.string().optional(),
      groups: dt.array(dt.string()).optional(),
    })
    .passthrough(),
);
((deo = Object.freeze({})), (GPn = deo));
function PKd(e) {
  let t = BigInt(58),
    n = Array(22).fill("1"),
    r = 21,
    o = e;
  while (o > 0n) {
    let s = Number(o % t);
    ((n[r] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[s]), (o = o / t), r--);
  }
  return n.join("");
}
function MKd(e) {
  let t = e.replaceAll("-", "");
  if (t.length !== 32) throw Error(`Invalid UUID hex length: ${t.length}`);
  return BigInt("0x" + t);
}
function RKi(e, t) {
  try {
    let n = MKd(t);
    return `${e}_01${PKd(n)}`;
  } catch {
    return;
  }
}
function sFt(e) {
  let t = $Kd[e],
    n = process.env[e];
  if (n === void 0) return t;
  return ut(n);
}
function LKi(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 33 || n === 44 || n === 59 || n === 92 || n > 126) return false;
  }
  return true;
}
function QGe() {
  let e = oW(),
    t = Rt(),
    n = WPn(),
    r = Object.keys(n).length > 0,
    o = {};
  if (sFt("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES"))
    for (let [i, a] of Object.entries(OKd(Oe.OTEL_RESOURCE_ATTRIBUTES))) {
      if (r && (i.startsWith("user.") || i.startsWith("identity."))) continue;
      o[i] = a;
    }
  if (((o["user.id"] = e), sFt("OTEL_METRICS_INCLUDE_SESSION_ID"))) {
    if (((o["session.id"] = t), Oe.CLAUDE_CODE_REMOTE_SESSION_ID))
      o["ccr.session.id"] = Oe.CLAUDE_CODE_REMOTE_SESSION_ID;
  }
  if (sFt("OTEL_METRICS_INCLUDE_VERSION"))
    o["app.version"] = {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION;
  if (sFt("OTEL_METRICS_INCLUDE_ENTRYPOINT")) {
    let i = Q2();
    if (i) o["app.entrypoint"] = i;
  }
  let s = Lc() ?? NKd();
  if (s) {
    let { organizationUuid: i, emailAddress: a, accountUuid: l } = s;
    if (i) o["organization.id"] = i;
    if (a) o["user.email"] = a;
    if (l && sFt("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      o["user.account_uuid"] = l;
      let c = process.env.CLAUDE_CODE_ACCOUNT_TAGGED_ID || RKi("user", l);
      if (c) o["user.account_id"] = c;
    }
  }
  if ((Object.assign(o, n), h1.terminal)) o["terminal.type"] = h1.terminal;
  return o;
}
function NKd() {
  if (!Oe.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let e = Oe.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (!e) return null;
  let n = e.replace(/^sk-ant-[a-z0-9]+-/, "").split(".");
  if (n.length !== 3 || !n[1]) return null;
  let r;
  try {
    r = JSON.parse(Buffer.from(n[1], "base64url").toString("utf8"));
  } catch {
    return null;
  }
  let o = (i) => (typeof i === "string" && i.length > 0 ? i : void 0),
    s = r.act ?? {};
  return {
    organizationUuid: o(r.organization_uuid),
    accountUuid: o(r.account_uuid),
    emailAddress: o(r.account_email) ?? o(s.email),
  };
}
var $Kd,
  DKi = 255,
  OKd;
