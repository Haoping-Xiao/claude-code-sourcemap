// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MSl
// matched 2.1.88 source: src/tools/BriefTool/BriefTool.ts
// class=partial  jaccard=0.1137  score=0.1594  fileCov=0.2839
// note: low-confidence suggestion: src/tools/BriefTool/BriefTool.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var MSl = E(() => {
  Xr();
  ft();
  Un();
  kt();
  ii();
  wr();
  fn();
  Fh();
  sre();
  DSl();
  Chf = ve(() => H.strictObject({
    message: H.string().min(1).describe("The notification body. Keep it under 200 characters; mobile OSes truncate."),
    status: H.literal("proactive")
  })), Ihf = ve(() => H.object({
    message: H.string(),
    pushSent: H.boolean().optional(),
    localSent: H.boolean().optional(),
    disabledReason: H.enum(["config_off", "user_present", "no_transport"]).optional(),
    idleSec: H.number().optional(),
    hasFocus: H.boolean().optional(),
    sentAt: H.string().optional().describe("ISO timestamp captured at tool execution on the emitting process. Optional \u2014 resumed sessions replay pre-sentAt outputs verbatim.")
  })), khf = ti({
    name: B8,
    searchHint: "send a notification to the user via terminal and optionally mobile",
    maxResultSizeChars: 1000,
    userFacingName: () => "PushNotification",
    get inputSchema() {
      return Chf();
    },
    get outputSchema() {
      return Ihf();
    },
    shouldDefer: true,
    isEnabled() {
      return T7("tengu_kairos_push_notifications", false, xhf);
    },
    isConcurrencySafe() {
      return true;
    },
    isReadOnly() {
      return true;
    },
    toAutoClassifierInput(e) {
      return e.message;
    },
    async description() {
      return Zra;
    },
    async prompt() {
      return eoa();
    },
    mapToolResultToToolResultBlockParam(e, t) {
      let n;
      if (e.disabledReason === "config_off") n = "Push not sent \u2014 mobile push is disabled in /config.";else if (e.disabledReason === "user_present") {
        if (e.hasFocus === true) n = "Not sent \u2014 terminal has focus. Terminal + mobile suppressed.";else {
          let r = rsn / 1000;
          n = `Not sent \u2014 user active (last keystroke ${e.idleSec !== void 0 ? `${e.idleSec}s` : `<${r}s`} ago, threshold ${r}s). Terminal + mobile suppressed.`;
        }
      } else if (e.disabledReason === "no_transport") n = e.localSent ? "Terminal notification sent. Mobile push not sent (Remote Control inactive)." : "Mobile push not sent (Remote Control inactive).";else n = e.localSent ? "Terminal notification sent. Mobile push requested." : "Mobile push requested.";
      return {
        tool_use_id: t,
        type: "tool_result",
        content: n
      };
    },
    renderToolUseMessage: RSl,
    renderToolResultMessage: LSl,
    async call({
      message: e
    }, t, n, r, o) {
      let s = new Date().toISOString(),
        i = ut(process.env.CLAUDE_CODE_REMOTE) || da(),
        a = i || d0(),
        l = (u, d, p) => {
          G("tengu_push_notification_send", {
            message_length: e.length,
            push_sent: u,
            local_sent: d,
            is_remote: i,
            disabled_reason: Oo(p)
          });
        };
      if (a && !i && !wc("agentPushNotifEnabled", false).value) return l(false, false, "config_off"), {
        data: {
          message: e,
          pushSent: false,
          localSent: false,
          disabledReason: "config_off",
          sentAt: s
        }
      };
      if (!i && !Oe.CLAUDE_CODE_DISABLE_NOTIFICATION_PRESENCE_CHECK && T_r()) {
        let u = Math.round((Date.now() - Ex()) / 1000),
          d = GBe();
        return l(false, false, "user_present"), {
          data: {
            message: e,
            pushSent: false,
            localSent: false,
            disabledReason: "user_present",
            idleSec: u,
            ...(d !== void 0 && {
              hasFocus: d
            }),
            sentAt: s
          }
        };
      }
      o?.({
        type: "os_notification",
        message: e,
        notificationType: "push_notification"
      });
      let c = !t.options.isNonInteractiveSession;
      if (!a) return l(false, c, "no_transport"), {
        data: {
          message: e,
          pushSent: false,
          localSent: c,
          disabledReason: "no_transport",
          sentAt: s
        }
      };
      return l(true, c), {
        data: {
          message: e,
          pushSent: true,
          localSent: c,
          sentAt: s
        }
      };
    }
  });
});
function Lhf(e) {
  return `/${Rhf}/${e}`;
}
async function JAe(e, t, n, r) {
  let o = await Os.post(Lhf(e), n, {
    auth: "none",
    headers: {
      ...aH(t),
      "X-Anthropic-Client": "claude-cli-design-sync"
    },
    timeout: 60000,
    validateStatus: () => true,
    signal: r
  });
  if (!o.ok) throw new Hbt(e, 0, {
    error: o.reason
  });
  if (o.status === 401 || o.status === 403) throw new VSl(e, o.status, o.data);
  if (o.status < 200 || o.status >= 300) throw new Hbt(e, o.status, o.data);
  return o.data;
}
async function $Sl(e, t = {}, n) {
  let r = await JAe("ListOrgProjects", e, {
    ...(t.type && {
      type: t.type
    }),
    ...(t.cursor && {
      cursor: t.cursor
    })
  }, n);
  return {
    items: r.items ?? [],
    cursor: r.cursor ?? ""
  };
}
async function OSl(e, t, n, r = {}, o) {
  return (await JAe("WriteFiles", e, {
    projectId: t,
    files: n,
    deduplicate: r.deduplicate ?? false,
    ...(r.deletePaths?.length && {
      deletePaths: r.deletePaths
    })
  }, o)).files ?? [];
}
async function NSl(e, t, n) {
  return JAe("GetProject", e, {
    projectId: t
  }, n);
}
async function BSl(e, t, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < 50; s++) {
    let i = await JAe("ListFiles", e, {
        projectId: t,
        depth: -1,
        ...(o > 0 && {
          offset: o
        })
      }, n),
      a = i.entries ?? [];
    for (let l of a) r.push(l.path);
    if (!i.truncated || a.length === 0) return r;
    o += a.length;
  }
  throw new Hbt("ListFiles", 0, {
    error: `pagination exceeded 50 pages (${r.length} paths)`
  });
}
async function USl(e, t, n, r = 262144, o) {
  let s = await JAe("GetFile", e, {
      projectId: t,
      path: n,
      raw: true
    }, o),
    i = s.content ?? "",
    a = s.isBase64 ?? false,
    l,
    c = false;
  if (a) {
    if (l = i, l.length > r) l = l.slice(0, r), c = true;
  } else {
    let u = Buffer.from(i, "base64");
    if (u.byteLength > r) u = u.subarray(0, r), c = true;
    l = u.toString("utf8");
  }
  return {
    content: l,
    contentType: s.contentType ?? "",
    isBase64: a,
    truncated: c
  };
}
async function FSl(e, t, n, r) {
  if (n.length === 0) return 0;
  return (await JAe("DeleteFiles", e, {
    projectId: t,
    paths: n
  }, r)).deleted ?? 0;
}
async function jSl(e, t, n) {
  let r = await JAe("CreateProject", e, {
    name: t,
    type: xRo
  }, n);
  if (!r.projectId) throw new Hbt("CreateProject", 200, r);
  return {
    projectId: r.projectId,
    name: t
  };
}
async function GSl(e, t, n, r) {
  await JAe("RecordAsset", e, {
    projectId: t,
    name: n.name,
    path: n.path,
    ...(n.subtitle && {
      subtitle: n.subtitle
    }),
    ...(n.viewport && {
      viewport: n.viewport
    }),
    ...(n.group && {
      section: n.group
    })
  }, r);
}
async function WSl(e, t, n, r) {
  await JAe("DeleteAsset", e, {
    projectId: t,
    path: n
  }, r);
}
function qSl(e, t) {
  if (!t) return e;
  return e.split(t).join("[redacted-oauth-token]");
}
function Dhf(e) {
  if (e == null) return "";
  if (typeof e === "string") return e.slice(0, 200);
  try {
    return JSON.stringify(e).slice(0, 200);
  } catch {
    return String(e).slice(0, 200);
  }
}
var Rhf = "anthropic.omelette.api.v1alpha.OmeletteService",
  xRo = "PROJECT_TYPE_DESIGN_SYSTEM",
  Hbt,
  VSl;