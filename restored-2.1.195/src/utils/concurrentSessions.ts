// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mp
// matched 2.1.88 source: src/utils/concurrentSessions.ts
// class=modified  jaccard=0.1767  score=0.3632  fileCov=0.256
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Mp] deps: Sj, ft, wr, Sj
Xoi = require("child_process");
function XY() {
  let e, t;
  return {
    promise: new Promise((r, o) => {
      ((e = r), (t = o));
    }),
    resolve: e,
    reject: t,
  };
}
function JPt() {
  return Tye.join(tr(), "sessions");
}
function exe() {
  let e = process.env.CLAUDE_CODE_SESSION_KIND;
  if (e === "bg" || e === "daemon" || e === "daemon-worker") return e;
  return;
}
function Js() {
  return exe() === "bg";
}
function OAn() {
  return process.env.CLAUDE_BG_BACKEND === "daemon";
}
async function esi() {
  try {
    await sU.unlink(Tye.join(JPt(), Zoi));
  } catch {}
}
function NAn() {
  let e = Date.now();
  if (PAn && e - PAn.at < 1000) return PAn.value;
  let t = false;
  try {
    let { mtimeMs: n } = $An.statSync(Tye.join(JPt(), Zoi));
    t = e - n < Rpd;
  } catch (n) {
    if (!wn(n)) T(`[concurrentSessions] heartbeat stat failed: ${be(n)}`);
  }
  return (
    (PAn = {
      at: e,
      value: t,
    }),
    t
  );
}
async function tsi() {
  if (PD() != null || lje()) return false;
  let e = XY();
  njr = e.promise;
  let t = exe() ?? "interactive",
    n = JPt(),
    r = Tye.join(n, `${process.pid}.json`);
  (process.on("exit", () => {
    try {
      $An.unlinkSync(r);
    } catch {}
  }),
    Ci(async () => {
      try {
        await sU.unlink(r);
      } catch {}
    }));
  try {
    return (
      await sU.mkdir(n, {
        recursive: true,
        mode: 448,
      }),
      await sU.chmod(n, 448),
      await sU.writeFile(
        r,
        De({
          pid: process.pid,
          sessionId: Rt(),
          cwd: yr(),
          startedAt: Date.now(),
          procStart: await KR(process.pid),
          version: {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
          }.VERSION,
          peerProtocol: xpd,
          kind: t,
          entrypoint: process.env.CLAUDE_CODE_ENTRYPOINT,
          ...void 0,
          ...{},
          ...{
            name: process.env.CLAUDE_CODE_SESSION_NAME,
            logPath: process.env.CLAUDE_CODE_SESSION_LOG,
            agent: process.env.CLAUDE_CODE_AGENT,
            jobId:
              t === "bg" && process.env.CLAUDE_JOB_DIR
                ? Tye.basename(process.env.CLAUDE_JOB_DIR)
                : void 0,
          },
        }),
      ),
      oee((s) => {
        XPt({
          sessionId: s,
        });
      }),
      e_r((s) => {
        XPt({
          cwd: s,
        });
      }),
      true
    );
  } catch (o) {
    return (T(`[concurrentSessions] register failed: ${be(o)}`), false);
  } finally {
    e.resolve();
  }
}
async function XPt(e) {
  let t = Tye.join(JPt(), `${process.pid}.json`),
    n = njr.then(async () => {
      try {
        let r = Ft(await sU.readFile(t, "utf8"));
        await sU.writeFile(
          t,
          De({
            ...r,
            ...e,
          }),
        );
      } catch (r) {
        T(`[concurrentSessions] updatePidFile failed: ${be(r)}`);
      }
    });
  ((njr = n), await n);
}
async function JY(e) {
  if (!e) return;
  await XPt({
    name: e,
    updatedAt: Date.now(),
  });
}
async function nsi(e) {
  await XPt({
    bridgeSessionId: e,
  });
}
async function BAn(e) {
  let t = Date.now();
  await XPt({
    ...e,
    updatedAt: t,
    ...(e.status !== void 0 && {
      statusUpdatedAt: t,
    }),
  });
}
async function QPt() {
  let e = JPt(),
    t;
  try {
    t = await sU.readdir(e);
  } catch (r) {
    if (!Vo(r)) T(`[concurrentSessions] readdir failed: ${be(r)}`);
    return 0;
  }
  let n = 0;
  for (let r of t) {
    if (!/^\d+\.json$/.test(r)) continue;
    let o = parseInt(r.slice(0, -5), 10);
    if (o === process.pid) {
      n++;
      continue;
    }
    if (zR(o)) n++;
    else if (Vt() !== "wsl") {
      let s = Tye.join(e, r),
        i = tjr
          ? null
          : await sU
              .readFile(s, "utf8")
              .then((l) => kpd().safeParse(Ft(l)))
              .catch(() => null);
      if (
        (await sU.unlink(s).then(
          () => true,
          () => false,
        )) &&
        i?.success &&
        i.data.kind === "interactive"
      )
        (Qoi.push(i.data),
          T(`Prior session exited uncleanly: ${i.data.sessionId} (v${i.data.version ?? "?"})`),
          G("tengu_unclean_exit", {
            session_age_sec: Math.round((Date.now() - i.data.startedAt) / 1000),
            prior_version: i.data.version ?? "unknown",
            on_current_version:
              i.data.version ===
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.195",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-06-26T01:00:56Z",
                GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
              }.VERSION,
            prior_session_id: Hr(i.data.sessionId),
          }));
    }
  }
  if (!tjr) (Qoi.sort((r, o) => o.startedAt - r.startedAt), (tjr = true));
  return n;
}
var $An,
  sU,
  Tye,
  xpd = 1,
  kpd,
  Qoi,
  tjr = false,
  Zoi = ".fleetview-heartbeat",
  Rpd = 5000,
  PAn,
  njr;
