// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sTo
// matched 2.1.88 source: src/services/api/sessionIngress.ts
// class=modified  jaccard=0.5668  score=0.7658  fileCov=0.6856
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sTo] deps: utils/background/remote/remoteSession.ts, utils/gracefulShutdown.ts, react/cjs/react.production.js, hooks/useTerminalSize.ts, components/TeleportStash.tsx, components/design-system/Dialog.tsx, components/design-system/Dialog.tsx, components/design-system/Dialog.tsx, components/TeleportError.tsx
((PQa = R(lt(), 1)), (qVt = R(rt(), 1)), (XJ = R(se(), 1)), (zJp = new Set()));
function XJp(e) {
  let t = iTo.get(e);
  if (!t) ((t = qZe(async (n, r, o) => await appendSessionLogImpl(e, n, r, o))), iTo.set(e, t));
  return t;
}
async function appendSessionLogImpl(sessionId, entry, url, headers) {
  for (let o = 1; o <= u8n; o++) {
    try {
      let i = J9e.get(sessionId),
        a = {
          ...headers,
        };
      if (i) a["Last-Uuid"] = i;
      let l = await po.put(url, entry, {
        headers: a,
        timeout: 30000,
        validateStatus: (c) => c < 500,
      });
      if (l.status === 200 || l.status === 201)
        return (
          J9e.set(sessionId, entry.uuid),
          T(`Successfully persisted session log entry for session ${sessionId}`),
          true
        );
      if (l.status === 409) {
        let c = l.headers["x-last-uuid"];
        if (c === entry.uuid)
          return (
            J9e.set(sessionId, entry.uuid),
            T(`Session entry ${entry.uuid} already present on server, recovering from stale state`),
            In("info", "session_persist_recovered_from_409"),
            true
          );
        if (c)
          (J9e.set(sessionId, c),
            T(
              `Session 409: adopting server lastUuid=${c} from header, retrying entry ${entry.uuid}`,
            ));
        else {
          let u = await fetchSessionLogsFromUrl(sessionId, url, headers),
            d = QJp(u);
          if (d)
            (J9e.set(sessionId, d),
              T(
                `Session 409: re-fetched ${u.length} entries, adopting lastUuid=${d}, retrying entry ${entry.uuid}`,
              ));
          else {
            let f = l.data.error?.message || "Concurrent modification detected";
            return (
              T(
                `Session persistence conflict: UUID mismatch for session ${sessionId}, entry ${entry.uuid}. ${f}`,
                {
                  level: "error",
                },
              ),
              In("error", "session_persist_fail_concurrent_modification"),
              false
            );
          }
        }
        In("info", "session_persist_409_adopt_server_uuid");
        continue;
      }
      if (l.status === 401)
        return (
          T("Session token expired or invalid"),
          In("error", "session_persist_fail_bad_token"),
          false
        );
      (T(`Failed to persist session log: ${l.status} ${l.statusText}`),
        In("error", "session_persist_fail_status", {
          status: l.status,
          attempt: o,
        }));
    } catch (i) {
      (T(`Error persisting session log: ${be(i)}`, {
        level: "error",
      }),
        In("error", "session_persist_fail_status", {
          status: po.isAxiosError(i) ? i.status : void 0,
          attempt: o,
        }));
    }
    if (o === u8n)
      return (
        T(`Remote persistence failed after ${u8n} attempts`),
        In("error", "session_persist_error_retries_exhausted", {
          attempt: o,
        }),
        false
      );
    let s = Math.min(YJp * Math.pow(2, o - 1), 8000);
    (T(`Remote persistence attempt ${o}/${u8n} failed, retrying in ${s}ms\u2026`), await Nn(s));
  }
  return false;
}
async function appendSessionLog(sessionId, entry, url) {
  let r = XS();
  if (!r)
    return (
      T("No session token available for session persistence"),
      In("error", "session_persist_fail_jwt_no_token"),
      false
    );
  let o = {
    Authorization: `Bearer ${r}`,
    "Content-Type": "application/json",
  };
  return XJp(sessionId)(entry, url, o);
}
async function getSessionLogs(sessionId, url) {
  let n = XS();
  if (!n)
    return (
      T("No session token available for fetching session logs"),
      In("error", "session_get_fail_no_token"),
      null
    );
  let r = {
      Authorization: `Bearer ${n}`,
    },
    o = await fetchSessionLogsFromUrl(sessionId, url, r);
  if (o && o.length > 0) {
    let s = o.at(-1);
    if (s && "uuid" in s && s.uuid) J9e.set(sessionId, s.uuid);
  }
  return o;
}
async function getSessionLogsViaOAuth(sessionId, accessToken, orgUUID) {
  let r = `${$s().BASE_API_URL}/v1/session_ingress/session/${sessionId}`;
  T(`[session-ingress] Fetching session logs from: ${r}`);
  let o = {
    ...aH(accessToken),
    "x-organization-uuid": orgUUID,
  };
  return await fetchSessionLogsFromUrl(sessionId, r, o);
}
async function getTeleportEvents(sessionId, accessToken, orgUUID, r) {
  let o = `${$s().BASE_API_URL}/v1/code/sessions/${sessionId}/teleport-events`,
    s = {
      ...aH(accessToken),
      "x-organization-uuid": orgUUID,
    };
  if (r) s["X-Trusted-Device-Token"] = r;
  T(`[teleport] Fetching events from: ${o}`);
  let i = [],
    a,
    l = 0,
    c = 100;
  while (l < c) {
    let u = {
      limit: 1000,
    };
    if (a !== void 0) u.cursor = a;
    let d;
    try {
      d = await po.get(o, {
        headers: s,
        params: u,
        timeout: 20000,
        validateStatus: (m) => m < 500,
      });
    } catch (m) {
      return (
        ke(Rh(Error(`Teleport events fetch failed: ${be(m)}`), "Teleport events fetch failed")),
        In("error", "teleport_events_fetch_fail"),
        Le("api_teleport_events_fetch", "network_error"),
        null
      );
    }
    if (d.status === 404)
      return (
        T(`[teleport] Session ${sessionId} not found (page ${l})`),
        In("warn", "teleport_events_not_found"),
        It("api_teleport_events_fetch", "not_found"),
        l === 0 ? null : i
      );
    if (d.status === 401) {
      (In("error", "teleport_events_bad_token"), It("api_teleport_events_fetch", "auth_expired"));
      let m = "Your session has expired. Please run /login to sign in again.";
      throw new qb(m, m);
    }
    if (d.status === 403) {
      (In("error", "teleport_events_forbidden"), It("api_teleport_events_fetch", "forbidden"));
      let m = d.data;
      if (m?.error?.resource === "untrusted_device")
        throw new qb(
          "This session requires a trusted device. Run /login to enroll this device, then retry.",
          "This session requires a trusted device. Run /login to enroll this device, then retry.",
        );
      let g = m?.error?.message ?? "Access denied fetching session events";
      throw new qb(g, g);
    }
    if (d.status !== 200)
      return (
        ke(Error(`Teleport events returned ${d.status}`)),
        In("error", "teleport_events_bad_status"),
        Le("api_teleport_events_fetch", "bad_status"),
        null
      );
    let { data: p, next_cursor: f } = d.data ?? {};
    if (!Array.isArray(p))
      return (
        ke(
          Error(
            `Teleport events invalid response shape (data is ${p === null ? "null" : typeof p})`,
          ),
        ),
        In("error", "teleport_events_invalid_shape"),
        Le("api_teleport_events_fetch", "bad_status"),
        null
      );
    for (let m of p) if (m.payload !== null) i.push(m.payload);
    if ((l++, f == null)) break;
    a = f;
  }
  if (l >= c)
    (ke(
      Rh(
        Error(`Teleport events hit page cap (${c}) for ${sessionId}`),
        `teleport_events_page_cap ${c}`,
      ),
    ),
      In("warn", "teleport_events_page_cap"),
      It("api_teleport_events_fetch", "page_cap"));
  else xe("api_teleport_events_fetch");
  return (T(`[teleport] Fetched ${i.length} events over ${l} page(s) for ${sessionId}`), i);
}
async function fetchSessionLogsFromUrl(sessionId, url, headers) {
  try {
    let r = await po.get(url, {
      headers: headers,
      timeout: 20000,
      validateStatus: (o) => o < 500,
      params: ut(process.env.CLAUDE_AFTER_LAST_COMPACT)
        ? {
            after_last_compact: true,
          }
        : void 0,
    });
    if (r.status === 200) {
      let o = r.data;
      if (!o || typeof o !== "object" || !Array.isArray(o.loglines))
        return (
          ke(Error("Invalid session logs response format")),
          In("error", "session_get_fail_invalid_response"),
          Le("api_session_logs_fetch", "invalid_response"),
          null
        );
      let s = o.loglines;
      return (
        T(`Fetched ${s.length} session logs for session ${sessionId}`),
        xe("api_session_logs_fetch"),
        s
      );
    }
    if (r.status === 404)
      return (
        T(`No existing logs for session ${sessionId}`),
        In("warn", "session_get_no_logs_for_session"),
        xe("api_session_logs_fetch"),
        []
      );
    if (r.status === 401)
      throw (
        T("Auth token expired or invalid"),
        In("error", "session_get_fail_bad_token"),
        It("api_session_logs_fetch", "auth_expired"),
        Error("Your session has expired. Please run /login to sign in again.")
      );
    return (
      T(`Failed to fetch session logs: ${r.status} ${r.statusText}`),
      In("error", "session_get_fail_status", {
        status: r.status,
      }),
      Le("api_session_logs_fetch", "bad_status"),
      null
    );
  } catch (r) {
    if (!po.isAxiosError(r)) throw r;
    return (
      T(`Error fetching session logs: ${r.message}`, {
        level: "error",
      }),
      In("error", "session_get_fail_status", {
        status: r.status,
      }),
      Le("api_session_logs_fetch", "network_error"),
      null
    );
  }
}
function QJp(e) {
  if (!e) return;
  let t = e.findLast((n) => "uuid" in n && n.uuid);
  return t && "uuid" in t ? t.uuid : void 0;
}
function BQa() {
  (J9e.clear(), iTo.clear());
}
var J9e,
  u8n = 10,
  YJp = 500,
  iTo;
