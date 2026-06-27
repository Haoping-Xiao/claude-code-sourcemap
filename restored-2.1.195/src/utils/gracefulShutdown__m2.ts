// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QOa
// matched 2.1.88 source: src/utils/gracefulShutdown.ts
// class=modified (alt of src/utils/gracefulShutdown.ts)  jaccard=0.0325  score=0.0619  fileCov=0.0641
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var QOa = E(() => {
  ((VOa = require("os")), (zOa = require("path")));
  KOa = new Set(["cli.js", "cli", "sdk.mjs", "browser-sdk.js", "agentSdk.js"]);
  YOa = ["src/", "packages/"];
});
function CPp() {
  if (o4n !== void 0) return o4n;
  let e = oW(),
    t = pho.createHash("sha256").update(e).digest("hex");
  return ((o4n = parseInt(t.slice(0, 8), 16) % wPp), o4n);
}
function IPp(e, t) {
  let n = t
    .slice(0, 3)
    .map((r) => `${r.function ?? "?"}@${r.file}`)
    .join("|");
  return pho
    .createHash("sha256")
    .update(
      `${e}
${n}`,
    )
    .digest("hex")
    .slice(0, 16);
}
function kPp() {
  try {
    let e = As();
    if (!e) return;
    let t = mo(ya(e));
    return xPp.has(t) ? t : "other";
  } catch {
    return;
  }
}
function LPp() {
  try {
    let e = dNt(),
      t = Wzr(),
      n = {},
      r = 0;
    for (let [o, s] of Object.entries(e))
      if (typeof s === "boolean" && t.has(o)) {
        if (((n[o] = s), ++r >= RPp)) break;
      }
    return n;
  } catch {
    return {};
  }
}
function DPp(e) {
  let t = e.issues;
  if (!Array.isArray(t) || t.length === 0) return;
  let n = t.map((r) => r?.code).filter((r) => typeof r === "string" && /^[a-z_]{1,40}$/.test(r));
  return `${t.length} issue(s): ${n.join(",")}`;
}
function PPp(e, t) {
  let n = (e.name && e.name !== "Error" ? e.name : e.constructor?.name) || "Error",
    r = yUe(n.replace(/_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/, "")) ?? "Error",
    o = e.telemetryMessage,
    s = Tca(e, typeof o === "string" ? o : (DPp(e) ?? e.message ?? String(e))),
    i = H4(s),
    a = dho(e, {
      redactedMessage: i,
    }),
    l = {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION,
    c = IPp(r, a.frames),
    u = CPp(),
    d = kPp(),
    p = typeof Bun !== "undefined" && true,
    f = xd(e),
    m = process.env.CLAUDE_CODE_ENTRYPOINT ?? "cli",
    g = /^[A-Za-z0-9_.-]{1,63}$/.test(m) ? m : "unknown",
    h = exe(),
    y = SCt(),
    b = UPp(e1a.release());
  return {
    ddtags: [
      `service:${ZOa}`,
      "team:claude-code",
      `version:${l}`,
      "env:external",
      `origin:${t}`,
      `platform:${Vt()}`,
      `os_release:${b}`,
      `user_bucket:${u}`,
      `entrypoint:${g}`,
      `node_version:${process.versions.node}`,
      "bun_version:1.4.0",
      `is_native_runtime:${p}`,
      ...(d ? [`model:${d}`] : []),
      ...(f ? [`error_code:${f}`] : []),
      ...(h ? [`session_kind:${h}`] : []),
      ...(h ? [`has_attacher:${fy() !== null ? "1" : "0"}`] : []),
      ...(y ? [`renderer_mode:${y}`] : []),
    ].join(","),
    service: ZOa,
    hostname: "claude-code",
    status: "error",
    message: `${r}: ${i}`.slice(0, 4000),
    timestamp: new Date().toISOString(),
    error: {
      kind: r,
      message: i.slice(0, 4000),
      stack: a.formatted.slice(0, 16000),
      fingerprint: c,
      handling: t === "logError" ? "handled" : "unhandled",
    },
    version: l,
    env: "external",
    user_bucket: u,
    origin: t,
    host_platform: Vt(),
    host_os_release: b,
    host_name_redacted: HWt().slice(0, 12),
    entrypoint: g,
    node_version: process.versions.node,
    bun_version: "1.4.0",
    ...(d && {
      model: d,
    }),
    error_frames: a.frames.slice(0, 20),
    feature_flags: LPp(),
  };
}
function NPp(e) {
  let { frames: t } = dho(e, {
      maxFrames: 20,
    }),
    n = t[0];
  if (!n || t.some(JOa)) return false;
  return OPp.some((r) => n.file === r.topFile && n.function === r.topFunction);
}
function BPp(e) {
  let t = e.constructor?.name || e.name || "";
  if (MPp.has(t)) return true;
  let n = e.message ?? "";
  return $Pp.some(
    (r) =>
      n.startsWith(r.messagePrefix) &&
      (
        e.stack
          ?.split(
            `
`,
          )
          .find((o) => o.trim().startsWith("at ")) ?? ""
      ).includes(r.topFrameIncludes),
  );
}
function UPp(e) {
  let t = /^(\d+)\.(\d+)/.exec(e);
  return t ? `${t[1]}.${t[2]}` : "unknown";
}
function AWt(e, t = "logError") {
  if (!qOa()) return;
  try {
    let n = Zr(e);
    if (t === "logError" && BPp(n)) return;
    if ((t === "unhandled_rejection" || t === "uncaught_exception") && NPp(n)) return;
    if (sho()) return;
    let r = PPp(n, t);
    iho(r);
  } catch {}
}
var pho,
  e1a,
  ZOa = "claude-code-error-tracking",
  wPp = 30,
  o4n,
  xPp,
  RPp = 50,
  MPp,
  $Pp,
  OPp;
