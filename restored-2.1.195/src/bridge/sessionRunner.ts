// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rGo
// matched 2.1.88 source: src/bridge/sessionRunner.ts
// class=modified  jaccard=0.6905  score=0.9953  fileCov=0.6928
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var rGo = E(() => {
  je();
  At();
  u9();
  Mh();
  Jt();
  Tnt();
});
function Gir(e) {
  return e.replace(/[^a-zA-Z0-9_-]/g, "_");
}
function GYf(e, t) {
  let n = jYf[e] ?? e,
    r = t.file_path ?? t.filePath ?? t.pattern ?? t.command?.slice(0, 60) ?? t.url ?? t.query ?? "";
  if (r) return `${n} ${r}`;
  return n;
}
function WYf(e, t, n) {
  let r;
  try {
    r = Ft(e);
  } catch {
    return [];
  }
  if (!r || typeof r !== "object") return [];
  let o = r,
    s = [],
    i = Date.now();
  switch (o.type) {
    case "assistant": {
      let a = o.message;
      if (!a) break;
      let l = a.content;
      if (!Array.isArray(l)) break;
      for (let c of l) {
        if (!c || typeof c !== "object") continue;
        let u = c;
        if (u.type === "tool_use") {
          let d = u.name ?? "Tool",
            p = u.input ?? {},
            f = GYf(d, p);
          (s.push({
            type: "tool_start",
            summary: f,
            timestamp: i,
          }),
            n(`[bridge:activity] sessionId=${t} tool_use name=${d} ${VYf(p)}`));
        } else if (u.type === "text") {
          let d = u.text ?? "";
          if (d.length > 0)
            (s.push({
              type: "text",
              summary: d.slice(0, 80),
              timestamp: i,
            }),
              n(`[bridge:activity] sessionId=${t} text "${d.slice(0, 100)}"`));
        }
      }
      break;
    }
    case "result": {
      let a = o.subtype;
      if (a === "success")
        (s.push({
          type: "result",
          summary: "Session completed",
          timestamp: i,
        }),
          n(`[bridge:activity] sessionId=${t} result subtype=success`));
      else if (a) {
        let c = o.errors?.[0] ?? `Error: ${a}`;
        (s.push({
          type: "error",
          summary: c,
          timestamp: i,
        }),
          n(`[bridge:activity] sessionId=${t} result subtype=${a} error="${c}"`));
      } else n(`[bridge:activity] sessionId=${t} result subtype=undefined`);
      break;
    }
    default:
      break;
  }
  return s;
}
function qYf(e) {
  if (e.parent_tool_use_id != null || e.isSynthetic || e.isReplay) return;
  let n = e.message?.content,
    r;
  if (typeof n === "string") r = n;
  else if (Array.isArray(n)) {
    for (let o of n)
      if (o && typeof o === "object" && o.type === "text") {
        r = o.text;
        break;
      }
  }
  return ((r = r?.trim()), r ? r : void 0);
}
function VYf(e) {
  let t = [];
  for (let [n, r] of Object.entries(e)) {
    if (typeof r === "string") t.push(`${n}="${r.slice(0, 100)}"`);
    if (t.length >= 3) break;
  }
  return t.join(" ");
}
function sGo(e) {
  return {
    spawn(t, n) {
      let r = Gir(t.sessionId),
        o;
      if (e.debugFile) {
        let y = e.debugFile.lastIndexOf(".");
        if (y > 0) o = `${e.debugFile.slice(0, y)}-${r}${e.debugFile.slice(y)}`;
        else o = `${e.debugFile}-${r}`;
      } else if (e.verbose) o = eQt.join(qE(), `bridge-session-${r}.log`);
      let s = null,
        i;
      if (e.debugFile)
        ((i = eQt.join(eQt.dirname(e.debugFile), `bridge-transcript-${r}.jsonl`)),
          (s = mtc.createWriteStream(i, {
            flags: "a",
          })),
          s.on("error", (y) => {
            (e.onDebug(`[bridge:session] Transcript write error: ${y.message}`), (s = null));
          }),
          e.onDebug(`[bridge:session] Transcript log: ${i}`));
      let a = [
          ...e.scriptArgs,
          "--print",
          "--sdk-url",
          t.sdkUrl,
          "--session-id",
          t.sessionId,
          "--input-format",
          "stream-json",
          "--output-format",
          "stream-json",
          "--replay-user-messages",
          ...(e.verbose ? ["--verbose"] : []),
          ...(o ? ["--debug-file", o] : []),
          ...(e.permissionMode ? ["--permission-mode", e.permissionMode] : []),
        ],
        l = {
          ...e.env,
          CLAUDE_CODE_OAUTH_TOKEN: void 0,
          CLAUDE_CODE_ENVIRONMENT_KIND: "bridge",
          ...(e.sandbox && {
            CLAUDE_CODE_FORCE_SANDBOX: "1",
          }),
          CLAUDE_CODE_SESSION_ACCESS_TOKEN: t.accessToken,
          ...(t.useCcrV2 && {
            CLAUDE_CODE_USE_CCR_V2: "1",
            CLAUDE_CODE_WORKER_EPOCH: String(t.workerEpoch),
          }),
        };
      if (
        (e.onDebug(
          `[bridge:session] Spawning sessionId=${t.sessionId} sdkUrl=${t.sdkUrl} accessToken=${t.accessToken ? "present" : "MISSING"}`,
        ),
        e.onDebug(`[bridge:session] Child args: ${a.join(" ")}`),
        o)
      )
        e.onDebug(`[bridge:session] Debug log: ${o}`);
      let c = ftc.spawn(e.execPath, a, {
        cwd: n,
        stdio: ["pipe", "pipe", "pipe"],
        env: l,
        windowsHide: true,
      });
      e.onDebug(`[bridge:session] sessionId=${t.sessionId} pid=${c.pid}`);
      let u = [],
        d = null,
        p = [],
        f = false,
        m = false;
      if (c.stderr)
        oGo
          .createInterface({
            input: c.stderr,
          })
          .on("line", (b) => {
            if (e.verbose)
              process.stderr.write(
                b +
                  `
`,
              );
            if (p.length >= FYf) p.shift();
            p.push(b);
          });
      if (c.stdout)
        oGo
          .createInterface({
            input: c.stdout,
          })
          .on("line", (b) => {
            if (s)
              s.write(
                b +
                  `
`,
              );
            if ((e.onDebug(`[bridge:ws] sessionId=${t.sessionId} <<< ${Ugo(b)}`), e.verbose))
              process.stderr.write(
                b +
                  `
`,
              );
            let _ = WYf(b, t.sessionId, e.onDebug);
            for (let S of _) {
              if (u.length >= UYf) u.shift();
              (u.push(S), (d = S), e.onActivity?.(t.sessionId, S));
            }
            {
              let S;
              try {
                S = Ft(b);
              } catch {}
              if (S && typeof S === "object") {
                let A = S;
                if (A.type === "control_request") {
                  if (A.request?.subtype === "can_use_tool" && e.onPermissionRequest)
                    e.onPermissionRequest(t.sessionId, S, t.accessToken);
                } else if (A.type === "user" && !m && t.onFirstUserMessage) {
                  let v = qYf(A);
                  if (v) ((m = true), t.onFirstUserMessage(v));
                }
              }
            }
          });
      let g = new Promise((y) => {
          (c.on("close", (b, _) => {
            if (s) (s.end(), (s = null));
            if (_ === "SIGTERM" || _ === "SIGINT")
              (e.onDebug(
                `[bridge:session] sessionId=${t.sessionId} interrupted signal=${_} pid=${c.pid}`,
              ),
                y("interrupted"));
            else if (b === 0)
              (e.onDebug(
                `[bridge:session] sessionId=${t.sessionId} completed exit_code=0 pid=${c.pid}`,
              ),
                y("completed"));
            else
              (e.onDebug(
                `[bridge:session] sessionId=${t.sessionId} failed exit_code=${b} pid=${c.pid}`,
              ),
                y("failed"));
          }),
            c.on("error", (b) => {
              (e.onDebug(`[bridge:session] sessionId=${t.sessionId} spawn error: ${b.message}`),
                p.push(`spawn error: ${b.message}`),
                y("failed"));
            }));
        }),
        h = {
          sessionId: t.sessionId,
          done: g,
          activities: u,
          accessToken: t.accessToken,
          lastStderr: p,
          get currentActivity() {
            return d;
          },
          kill() {
            if (!c.killed)
              (e.onDebug(
                `[bridge:session] Sending SIGTERM to sessionId=${t.sessionId} pid=${c.pid}`,
              ),
                c.kill("SIGTERM"));
          },
          forceKill() {
            if (!f && c.pid)
              ((f = true),
                e.onDebug(
                  `[bridge:session] Sending SIGKILL to sessionId=${t.sessionId} pid=${c.pid}`,
                ),
                c.kill("SIGKILL"));
          },
          writeStdin(y) {
            if (c.stdin && !c.stdin.destroyed)
              (e.onDebug(`[bridge:ws] sessionId=${t.sessionId} >>> ${Ugo(y)}`), c.stdin.write(y));
          },
          updateAccessToken(y) {
            ((h.accessToken = y),
              h.writeStdin(
                De({
                  type: "update_environment_variables",
                  variables: {
                    CLAUDE_CODE_SESSION_ACCESS_TOKEN: y,
                  },
                }) +
                  `
`,
              ),
              e.onDebug(
                `[bridge:session] Sent token refresh via stdin for sessionId=${t.sessionId}`,
              ));
          },
        };
      return h;
    },
  };
}
var ftc,
  mtc,
  eQt,
  oGo,
  UYf = 10,
  FYf = 10,
  jYf;
