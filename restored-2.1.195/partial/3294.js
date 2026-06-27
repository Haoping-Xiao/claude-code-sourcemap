// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xpo
// matched 2.1.88 source: node_modules/@ant/computer-use-mcp/src/tools.ts
// class=partial  jaccard=0.1103  score=0.5363  fileCov=0.1219
// note: low-confidence suggestion: node_modules/@ant/computer-use-mcp/src/tools.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xpo = E(() => {
  MIp = {
    pixels: {
      x: "Horizontal pixel position read directly from the most recent screenshot image, measured from the left edge. The server handles all scaling.",
      y: "Vertical pixel position read directly from the most recent screenshot image, measured from the top edge. The server handles all scaling."
    },
    normalized_0_100: {
      x: "Horizontal position as a percentage of screen width, 0.0\u2013100.0 (0 = left edge, 100 = right edge).",
      y: "Vertical position as a percentage of screen height, 0.0\u2013100.0 (0 = top edge, 100 = bottom edge)."
    }
  }, G0a = {
    type: "object",
    properties: {
      action: {
        type: "string",
        enum: ["key", "type", "mouse_move", "left_click", "left_click_drag", "right_click", "middle_click", "double_click", "triple_click", "scroll", "hold_key", "screenshot", "cursor_position", "left_mouse_down", "left_mouse_up", "wait"],
        description: "The action to perform."
      },
      coordinate: {
        type: "array",
        items: {
          type: "number"
        },
        minItems: 2,
        maxItems: 2,
        description: "(x, y) for click/mouse_move/scroll/left_click_drag end point."
      },
      start_coordinate: {
        type: "array",
        items: {
          type: "number"
        },
        minItems: 2,
        maxItems: 2,
        description: "(x, y) drag start \u2014 left_click_drag only. Omit to drag from current cursor."
      },
      text: {
        type: "string",
        description: "For type: the text. For key/hold_key: the chord string. For click/scroll: modifier keys to hold."
      },
      scroll_direction: {
        type: "string",
        enum: ["up", "down", "left", "right"]
      },
      scroll_amount: {
        type: "integer",
        minimum: 0,
        maximum: 100
      },
      duration: {
        type: "number",
        description: "Seconds (0\u2013100). For hold_key/wait."
      },
      repeat: {
        type: "integer",
        minimum: 1,
        maximum: 100,
        description: "For key: repeat count."
      }
    },
    required: ["action"]
  };
});
function q0a(e, t, n) {
  let r = new Set(e.map(a => a.bundleId)),
    o = [...e, ...n.granted.filter(a => !r.has(a.bundleId))],
    s = Object.fromEntries(Object.entries(n.flags).filter(([, a]) => a === !0)),
    i = {
      ...pJ,
      ...t,
      ...s
    };
  return {
    apps: o,
    flags: i
  };
}
function jFn(e, t, n) {
  let {
      logger: r,
      serverName: o
    } = e,
    s,
    i = n.onPermissionRequest ? async (l, c) => {
      let u = await n.onPermissionRequest(l, c),
        {
          apps: d,
          flags: p
        } = q0a(n.getAllowedApps(), n.getGrantFlags(), u);
      return r.debug(`[${o}] permission result: granted=${u.granted.length} denied=${u.denied.length}`), n.onAllowedAppsChanged?.(d, p), u;
    } : void 0,
    a = n.onTeachPermissionRequest ? async (l, c) => {
      let u = await n.onTeachPermissionRequest(l, c);
      r.debug(`[${o}] teach permission result: granted=${u.granted.length} denied=${u.denied.length}`);
      let {
        apps: d
      } = q0a(n.getAllowedApps(), n.getGrantFlags(), u);
      return n.onAllowedAppsChanged?.(d, {
        ...pJ,
        ...n.getGrantFlags()
      }), u;
    } : void 0;
  return async (l, c) => {
    if (n.checkCuLock) {
      let f = await n.checkCuLock();
      if (f.holder !== void 0 && !f.isSelf) return {
        content: [{
          type: "text",
          text: n.formatLockHeldMessage?.(f.holder) ?? W0a
        }],
        isError: !0,
        telemetry: {
          error_kind: "cu_lock_held"
        }
      };
      if (f.holder === void 0 && !Kpo(l)) {
        await n.acquireCuLock?.();
        let m = await n.checkCuLock();
        if (m.holder !== void 0 && !m.isSelf) return {
          content: [{
            type: "text",
            text: n.formatLockHeldMessage?.(m.holder) ?? W0a
          }],
          isError: !0,
          telemetry: {
            error_kind: "cu_lock_held"
          }
        };
        zpo();
      }
    }
    let u = s ? void 0 : n.getLastScreenshotDims?.(),
      d = new AbortController(),
      p = {
        allowedApps: [...n.getAllowedApps()],
        grantFlags: n.getGrantFlags(),
        userDeniedBundleIds: n.getUserDeniedBundleIds(),
        coordinateMode: t,
        selectedDisplayId: n.getSelectedDisplayId(),
        displayPinnedByModel: n.getDisplayPinnedByModel?.(),
        displayResolvedForApps: n.getDisplayResolvedForApps?.(),
        lastScreenshot: s ?? (u ? {
          ...u,
          base64: ""
        } : void 0),
        onPermissionRequest: i ? f => i(f, d.signal) : void 0,
        onTeachPermissionRequest: a ? f => a(f, d.signal) : void 0,
        onAppsHidden: n.onAppsHidden,
        getClipboardStash: n.getClipboardStash,
        onClipboardStashChanged: n.onClipboardStashChanged,
        onResolvedDisplayUpdated: n.onResolvedDisplayUpdated,
        onDisplayPinned: n.onDisplayPinned,
        onDisplayResolvedForApps: n.onDisplayResolvedForApps,
        onTeachModeActivated: n.onTeachModeActivated,
        onTeachStep: n.onTeachStep,
        onTeachWorking: n.onTeachWorking,
        getTeachModeActive: n.getTeachModeActive,
        checkCuLock: void 0,
        acquireCuLock: void 0,
        isAborted: n.isAborted
      };
    r.debug(`[${o}] tool=${l} allowedApps=${p.allowedApps.length} coordMode=${t}`);
    try {
      let f = await F0a(e, l, c, p);
      if (f.screenshot) {
        s = f.screenshot;
        let {
          base64: m,
          ...g
        } = f.screenshot;
        r.debug(`[${o}] screenshot dims: ${JSON.stringify(g)}`), n.onScreenshotCaptured?.(g);
      }
      return f;
    } finally {
      d.abort();
    }
  };
}
function Jpo(e, t, n) {
  let {
      serverName: r,
      logger: o
    } = e,
    s = new mhe({
      name: r,
      version: "0.1.3"
    }, {
      capabilities: {
        tools: {},
        logging: {}
      }
    }),
    i = Cqe(e.executor.capabilities, t);
  if (s.setRequestHandler(XK, async () => e.isDisabled() ? {
    tools: []
  } : {
    tools: i
  }), n) {
    let a = jFn(e, t, n);
    return s.setRequestHandler(qV, async l => {
      let {
        screenshot: c,
        telemetry: u,
        ...d
      } = await a(l.params.name, l.params.arguments ?? {});
      return d;
    }), s;
  }
  return s.setRequestHandler(qV, async a => (o.warn(`[${r}] tool call "${a.params.name}" reached the stub handler \u2014 no session context bound. Per-session state unavailable.`), {
    content: [{
      type: "text",
      text: "This computer-use server instance is not wired to a session. Per-session app permissions are not available on this code path."
    }],
    isError: !0
  })), s;
}
var W0a = "Another Claude session is currently using the computer. Wait for that session to finish, or find a non-computer-use approach.";