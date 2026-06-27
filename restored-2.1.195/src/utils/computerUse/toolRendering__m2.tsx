// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $po
// matched 2.1.88 source: src/utils/computerUse/toolRendering.tsx
// class=modified (alt of src/utils/computerUse/toolRendering.tsx)  jaccard=0.0614  score=0.0821  fileCov=0.1963
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: setChromeBinding, getClaudeInChromePermissionOverrides, _resetChromeBindingForTesting
// [unwrapped __esm module $po] deps: tQe, VM
((SCp = {
  navigate: "navigate",
  read_page: "read the page",
  get_page_text: "extract page text",
  find: "find an element",
  form_input: "fill in a form field",
  javascript_tool: "run JavaScript",
  read_console_messages: "read console messages",
  read_network_requests: "read network requests",
  upload_image: "upload an image",
  file_upload: "upload a file",
  select_browser: "select a browser",
}),
  (t0a = {
    screenshot: "take a screenshot",
    left_click: "click",
    right_click: "right-click",
    middle_click: "middle-click",
    double_click: "double-click",
    triple_click: "triple-click",
    type: "type text",
    key: "press keys",
    hold_key: "hold a key",
    scroll: "scroll",
    scroll_to: "scroll to an element",
    left_click_drag: "drag",
    zoom: "zoom in",
    hover: "hover",
    mouse_move: "move the mouse",
    left_mouse_down: "press the mouse button",
    left_mouse_up: "release the mouse button",
    cursor_position: "read the cursor position",
    wait: "wait",
  }));
function n0a(e, t) {
  if (eGt.size >= TCp) eGt.clear();
  eGt.set(e, t);
}
function Opo() {
  return {
    sessionId: Rt(),
  };
}
function setChromeBinding(e, t) {
  nGt = {
    context: e,
    socketClient: t,
  };
}
function wCp() {
  nGt = void 0;
}
function CCp(e) {
  return e.replace(/^www\./i, "");
}
function r0a(e) {
  let t = new Set(),
    n = [],
    r = new Set(),
    o = new Map();
  return (
    o0a(e.alwaysDenyRules, r, o),
    o0a(e.alwaysAllowRules, t, o, n, r),
    {
      allowed: t,
      denied: r,
      allowedRaw: n,
      sourceOf: o,
    }
  );
}
function xCp(e, t) {
  let n = nue.slice(0, -2),
    r = `${nue}*`;
  for (let o of Object.values(e.alwaysAllowRules))
    for (let s of o ?? []) {
      let i = s.replace(/\(\*?\)$/, "");
      if (i === t || i === n || i === r) return true;
    }
  return false;
}
function tGt(e) {
  let t = e.replace(/\.+(?=$|:)/, "").toLowerCase(),
    n = Npo(t),
    r = t.slice(n.length),
    o = (l0a.domainToASCII(n) || n).replace(/\.+$/, "");
  return CCp(o + r);
}
function Npo(e) {
  if (e.startsWith("[")) {
    let n = e.indexOf("]");
    return n === -1 ? e : e.slice(0, n + 1);
  }
  let t = e.lastIndexOf(":");
  return t === -1 ? e : e.slice(0, t);
}
function c0a(e, t) {
  return e.has(t) || e.has(Npo(t));
}
function o0a(e, t, n, r, o) {
  for (let [s, i] of Object.entries(e))
    for (let a of i ?? []) {
      let l = ICp.exec(a);
      if (l?.[1]) {
        let c = tGt(l[1]);
        if (o && c0a(o, c)) continue;
        if (!t.has(c)) (t.add(c), n.set(c, s), r?.push(l[1]));
      }
    }
}
function s0a(e) {
  let t = e.trim(),
    n;
  try {
    if (((n = new URL(t)), n.protocol !== "http:" && n.protocol !== "https:")) {
      if (!/^(localhost|[a-z0-9-]+\.[a-z0-9.-]+):\d+(?=$|[/?#])/i.test(t)) return;
      n = void 0;
    }
  } catch {}
  if (!n)
    try {
      n = new URL(`https://${t}`);
    } catch {
      return;
    }
  if (!n.host || n.username || n.password) return;
  return {
    host: n.host,
    url: n.href,
  };
}
async function RCp(e) {
  let t = nGt;
  if (!t) return;
  try {
    return await vc(
      (async () => {
        if (!(await t.socketClient.ensureConnected())) return;
        let n = await t.socketClient.callTool(
          "tabs_context_mcp",
          {
            createIfEmpty: false,
            includePermissionState: false,
          },
          {
            permissionMode: "ask",
            sessionScope: Opo(),
          },
        );
        if (!n || n.error) return;
        let r = n.result?.content,
          o =
            Array.isArray(r) &&
            r[0] &&
            typeof r[0] === "object" &&
            "text" in r[0] &&
            typeof r[0].text === "string"
              ? r[0].text
              : void 0;
        if (!o) return;
        return Ft(o).availableTabs?.find((i) => i.tabId === e)?.url;
      })(),
      kCp,
      "queryTabUrl bridge call",
    );
  } catch {
    return;
  }
}
function i0a(e) {
  return {
    type: "text",
    text: `[Image from Claude in Chrome \u2014 ${e}; not inlined]`,
  };
}
function DCp(e) {
  if (!e) return false;
  let t = bi(e, ";").trim().toLowerCase();
  return LCp.has(t === "image/jpg" ? "image/jpeg" : t);
}
async function PCp(e, t) {
  let n = Gh(t),
    r = [];
  for (let o of e.content ?? [])
    if (o.type === "text")
      r.push({
        type: "text",
        text: o.text,
      });
    else if (o.type === "image")
      if (DCp(o.mimeType))
        try {
          let { block: s } = await FM({
            data: String(o.data),
            mediaType: o.mimeType,
            limits: n,
          });
          r.push(s);
        } catch {
          r.push(i0a("could not be decoded"));
        }
      else r.push(i0a(`unsupported type ${o.mimeType ?? "unknown"}`));
  return r;
}
function MCp(e) {
  if (!Array.isArray(e.actions)) return;
  for (let t of e.actions) {
    if (!Q3t(t) || typeof t.name !== "string") continue;
    if (rxt.has(t.name)) continue;
    let n = Q3t(t.input) ? t.input : {};
    if (
      t.name === "navigate" &&
      typeof n.url === "string" &&
      (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")
    )
      continue;
    if ((t.name === "navigate" && typeof n.url === "string") || typeof n.tabId === "number")
      return {
        toolName: t.name,
        input: n,
      };
  }
  return;
}
function $Cp(e, t, n) {
  let r = Z3t(e, t);
  return n ? `Allow Claude in Chrome to ${r} on ${n}?` : `Allow Claude in Chrome to ${r}?`;
}
function OCp(e) {
  return async (t) => {
    let n;
    try {
      n = new URL(t.url).host;
    } catch {}
    let r = !!n && e.has(tGt(n));
    if (!r) Le("chrome_permission_prompt", "stale_host_mismatch");
    return r;
  };
}
async function a0a(e, t, n, r) {
  let o = nGt;
  if (!o)
    throw (
      Le("chrome_permission_prompt", "binding_missing"),
      Error("Claude in Chrome bridge is not initialized in this session.")
    );
  let s = n.abortController.signal;
  if (s.aborted) throw new ru("Claude in Chrome tool call aborted");
  let i,
    a = new Promise((u, d) => {
      ((i = () => d(new ru("Claude in Chrome tool call aborted"))),
        s.addEventListener("abort", i, {
          once: true,
        }));
    }),
    l;
  try {
    l = await Promise.race([$un(o.context, o.socketClient, e, t ?? {}, r), a]);
  } finally {
    if (i) s.removeEventListener("abort", i);
  }
  if (l.isError) {
    let u =
      (l.content ?? []).flatMap((d) => (d.type === "text" ? [d.text] : [])).join(`
`) || `${e} failed`;
    throw new mi(u, "Claude in Chrome tool returned error");
  }
  return {
    data: await PCp(l, n.options.mainLoopModel),
    ...(l._meta && {
      mcpMeta: {
        _meta: l._meta,
      },
    }),
  };
}
function getClaudeInChromePermissionOverrides(e) {
  if (!XGe())
    return {
      checkPermissions: async (i) => ({
        behavior: "allow",
        updatedInput: i,
      }),
      call: async (i, a) =>
        a0a(e, i, a, {
          permissionMode: nGt?.context.initialPermissionMode ?? "ask",
          sessionScope: Opo(),
        }),
    };
  let t = `${nue}${e}`;
  return {
    checkPermissions: async (o, s) => {
      let i = s.toolUseId;
      if (rxt.has(e))
        return {
          behavior: "allow",
          updatedInput: o,
        };
      if (
        e === "navigate" &&
        typeof o.url === "string" &&
        (o.url.trim().toLowerCase() === "back" || o.url.trim().toLowerCase() === "forward")
      )
        return {
          behavior: "allow",
          updatedInput: o,
        };
      let a =
          e === "browser_batch"
            ? MCp(o)
            : {
                input: o,
                toolName: e,
              },
        l;
      if (a && a.toolName === "navigate" && typeof a.input.url === "string") {
        if (((l = s0a(a.input.url)), !l))
          return (
            Le("chrome_permission_prompt", "non_web_url"),
            {
              behavior: "deny",
              message:
                "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable URL",
                classifierApprovable: false,
              },
            }
          );
      } else if (a && typeof a.input.tabId === "number") {
        let d = await RCp(a.input.tabId);
        if (!d)
          return (
            Le("chrome_permission_prompt", "tab_url_unresolved"),
            {
              behavior: "deny",
              message:
                "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: tab URL unresolved",
                classifierApprovable: false,
              },
            }
          );
        if (((l = s0a(d)), !l))
          return (
            Le("chrome_permission_prompt", "non_web_tab_url"),
            {
              behavior: "deny",
              message:
                "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable tab URL",
                classifierApprovable: false,
              },
            }
          );
      }
      let c = Fr(s),
        u = false;
      if (l) {
        let d = r0a(c),
          p = tGt(l.host),
          f = d.sourceOf.get(p) ?? d.sourceOf.get(Npo(p)) ?? "session";
        if (c0a(d.denied, p))
          return (
            It("chrome_permission_prompt", "domain_rule_denied"),
            {
              behavior: "deny",
              message: `Claude in Chrome is denied on ${l.host}.`,
              decisionReason: {
                type: "rule",
                rule: {
                  source: f,
                  ruleBehavior: "deny",
                  ruleValue: {
                    toolName: z0e,
                    ruleContent: l.host,
                  },
                },
              },
            }
          );
        if (((u = d.allowed.has(p)), u && c.chromeClassifierFloorEnabled !== true)) {
          if (i) n0a(i, l);
          return {
            behavior: "allow",
            updatedInput: o,
            decisionReason: {
              type: "rule",
              rule: {
                source: f,
                ruleBehavior: "allow",
                ruleValue: {
                  toolName: z0e,
                  ruleContent: l.host,
                },
              },
            },
          };
        }
        if (i && (u || c.chromeClassifierFloorEnabled === true || !xCp(c, t))) n0a(i, l);
      }
      return {
        behavior: "ask",
        message: "Claude in Chrome requires permission.",
        suggestions: l
          ? u
            ? void 0
            : [
                {
                  type: "addRules",
                  rules: [
                    {
                      toolName: z0e,
                      ruleContent: l.host,
                    },
                  ],
                  behavior: "allow",
                  destination: "session",
                },
              ]
          : [
              {
                type: "addRules",
                rules: [
                  {
                    toolName: t,
                    ruleContent: void 0,
                  },
                ],
                behavior: "allow",
                destination: "session",
              },
            ],
        decisionReason: {
          type: "other",
          reason: l ? `Claude in Chrome action on ${l.host}` : "Claude in Chrome action",
        },
        metadata: {
          command: {
            name: t,
            description: $Cp(e, o, l?.host),
            chrome: l
              ? {
                  ...l,
                  domainAllowed: u,
                }
              : void 0,
          },
        },
      };
    },
    call: async (o, s) => {
      let i = s.toolUseId,
        a = i ? eGt.get(i)?.host : void 0;
      if (i) eGt.delete(i);
      let l = Fr(s),
        c = s.options?.tools?.find((y) => Ql(y, t)),
        u = Hqe(c, l) === "bypassPermissions",
        d = r0a(l),
        p = d.allowed,
        f = [...d.allowedRaw];
      if (a && !p.has(tGt(a))) (p.add(tGt(a)), f.push(a));
      let m = Opo(),
        g = u
          ? {
              permissionMode: "skip_all_permission_checks",
              sessionScope: m,
            }
          : a
            ? {
                permissionMode: "follow_a_plan",
                allowedDomains: f,
                onPermissionRequest: OCp(p),
                sessionScope: m,
              }
            : f.length > 0
              ? {
                  permissionMode: "follow_a_plan",
                  allowedDomains: f,
                  sessionScope: m,
                }
              : {
                  permissionMode: "ask",
                  sessionScope: m,
                },
        h = await a0a(e, o, s, g);
      if (a) xe("chrome_permission_prompt");
      return h;
    },
  };
}
var l0a,
  nGt,
  TCp = 200,
  eGt,
  ICp,
  kCp = 5000,
  LCp;
