// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rGo
// matched 2.1.88 source: src/bridge/sessionRunner.ts
// class=modified  jaccard=0.6905  score=0.9953  fileCov=0.6928
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Gir(e) {
  return e.replace(/[^a-zA-Z0-9_-]/g, "_");
}
function GYf(e, t) {
  let n = jYf[e] ?? e,
    r = t.file_path ?? t.filePath ?? t.pattern ?? t.command?.slice(0, 60) ?? t.url ?? t.query ?? "";
  if (r) return `${n} ${r}`;
  return n;
}
function extractActivities(line, sessionId, onDebug) {
  let r;
  try {
    r = Ft(line);
  } catch {
    return [];
  }
  if (!r || typeof r !== "object") return [];
  let msg = r,
    s = [],
    i = Date.now();
  switch (msg.type) {
    case "assistant": {
      let a = msg.message;
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
            onDebug(`[bridge:activity] sessionId=${sessionId} tool_use name=${d} ${VYf(p)}`));
        } else if (u.type === "text") {
          let d = u.text ?? "";
          if (d.length > 0)
            (s.push({
              type: "text",
              summary: d.slice(0, 80),
              timestamp: i,
            }),
              onDebug(`[bridge:activity] sessionId=${sessionId} text "${d.slice(0, 100)}"`));
        }
      }
      break;
    }
    case "result": {
      let a = msg.subtype;
      if (a === "success")
        (s.push({
          type: "result",
          summary: "Session completed",
          timestamp: i,
        }),
          onDebug(`[bridge:activity] sessionId=${sessionId} result subtype=success`));
      else if (a) {
        let c = msg.errors?.[0] ?? `Error: ${a}`;
        (s.push({
          type: "error",
          summary: c,
          timestamp: i,
        }),
          onDebug(`[bridge:activity] sessionId=${sessionId} result subtype=${a} error="${c}"`));
      } else onDebug(`[bridge:activity] sessionId=${sessionId} result subtype=undefined`);
      break;
    }
    default:
      break;
  }
  return s;
}
function extractUserMessageText(msg) {
  if (msg.parent_tool_use_id != null || msg.isSynthetic || msg.isReplay) return;
  let n = msg.message?.content,
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
function createSessionSpawner(deps) {
  return {
    spawn(t, n) {
      let r = Gir(t.sessionId),
        o;
      if (deps.debugFile) {
        let y = deps.debugFile.lastIndexOf(".");
        if (y > 0) o = `${deps.debugFile.slice(0, y)}-${r}${deps.debugFile.slice(y)}`;
        else o = `${deps.debugFile}-${r}`;
      } else if (deps.verbose) o = eQt.join(qE(), `bridge-session-${r}.log`);
      let s = null,
        i;
      if (deps.debugFile)
        ((i = eQt.join(eQt.dirname(deps.debugFile), `bridge-transcript-${r}.jsonl`)),
          (s = mtc.createWriteStream(i, {
            flags: "a",
          })),
          s.on("error", (y) => {
            (deps.onDebug(`[bridge:session] Transcript write error: ${y.message}`), (s = null));
          }),
          deps.onDebug(`[bridge:session] Transcript log: ${i}`));
      let a = [
          ...deps.scriptArgs,
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
          ...(deps.verbose ? ["--verbose"] : []),
          ...(o ? ["--debug-file", o] : []),
          ...(deps.permissionMode ? ["--permission-mode", deps.permissionMode] : []),
        ],
        l = {
          ...deps.env,
          CLAUDE_CODE_OAUTH_TOKEN: void 0,
          CLAUDE_CODE_ENVIRONMENT_KIND: "bridge",
          ...(deps.sandbox && {
            CLAUDE_CODE_FORCE_SANDBOX: "1",
          }),
          CLAUDE_CODE_SESSION_ACCESS_TOKEN: t.accessToken,
          ...(t.useCcrV2 && {
            CLAUDE_CODE_USE_CCR_V2: "1",
            CLAUDE_CODE_WORKER_EPOCH: String(t.workerEpoch),
          }),
        };
      if (
        (deps.onDebug(
          `[bridge:session] Spawning sessionId=${t.sessionId} sdkUrl=${t.sdkUrl} accessToken=${t.accessToken ? "present" : "MISSING"}`,
        ),
        deps.onDebug(`[bridge:session] Child args: ${a.join(" ")}`),
        o)
      )
        deps.onDebug(`[bridge:session] Debug log: ${o}`);
      let c = ftc.spawn(deps.execPath, a, {
        cwd: n,
        stdio: ["pipe", "pipe", "pipe"],
        env: l,
        windowsHide: true,
      });
      deps.onDebug(`[bridge:session] sessionId=${t.sessionId} pid=${c.pid}`);
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
            if (deps.verbose)
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
            if ((deps.onDebug(`[bridge:ws] sessionId=${t.sessionId} <<< ${Ugo(b)}`), deps.verbose))
              process.stderr.write(
                b +
                  `
`,
              );
            let _ = extractActivities(b, t.sessionId, deps.onDebug);
            for (let S of _) {
              if (u.length >= UYf) u.shift();
              (u.push(S), (d = S), deps.onActivity?.(t.sessionId, S));
            }
            {
              let S;
              try {
                S = Ft(b);
              } catch {}
              if (S && typeof S === "object") {
                let A = S;
                if (A.type === "control_request") {
                  if (A.request?.subtype === "can_use_tool" && deps.onPermissionRequest)
                    deps.onPermissionRequest(t.sessionId, S, t.accessToken);
                } else if (A.type === "user" && !m && t.onFirstUserMessage) {
                  let v = extractUserMessageText(A);
                  if (v) ((m = true), t.onFirstUserMessage(v));
                }
              }
            }
          });
      let g = new Promise((y) => {
          (c.on("close", (b, _) => {
            if (s) (s.end(), (s = null));
            if (_ === "SIGTERM" || _ === "SIGINT")
              (deps.onDebug(
                `[bridge:session] sessionId=${t.sessionId} interrupted signal=${_} pid=${c.pid}`,
              ),
                y("interrupted"));
            else if (b === 0)
              (deps.onDebug(
                `[bridge:session] sessionId=${t.sessionId} completed exit_code=0 pid=${c.pid}`,
              ),
                y("completed"));
            else
              (deps.onDebug(
                `[bridge:session] sessionId=${t.sessionId} failed exit_code=${b} pid=${c.pid}`,
              ),
                y("failed"));
          }),
            c.on("error", (b) => {
              (deps.onDebug(`[bridge:session] sessionId=${t.sessionId} spawn error: ${b.message}`),
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
              (deps.onDebug(
                `[bridge:session] Sending SIGTERM to sessionId=${t.sessionId} pid=${c.pid}`,
              ),
                c.kill("SIGTERM"));
          },
          forceKill() {
            if (!f && c.pid)
              ((f = true),
                deps.onDebug(
                  `[bridge:session] Sending SIGKILL to sessionId=${t.sessionId} pid=${c.pid}`,
                ),
                c.kill("SIGKILL"));
          },
          writeStdin(y) {
            if (c.stdin && !c.stdin.destroyed)
              (deps.onDebug(`[bridge:ws] sessionId=${t.sessionId} >>> ${Ugo(y)}`),
                c.stdin.write(y));
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
              deps.onDebug(
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
