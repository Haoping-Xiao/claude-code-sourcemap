// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HRa
// matched 2.1.88 source: src/utils/computerUse/toolRendering.tsx
// class=modified (alt of src/utils/computerUse/toolRendering.tsx)  jaccard=0.1648  score=0.3406  fileCov=0.2421
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var HRa = E(() => {
  ql();
  Ye();
  es();
  gfo = R(se(), 1);
  JIp = {
    screenshot: "Captured",
    zoom: "Captured",
    request_access: "Access updated",
    left_click: "Clicked",
    right_click: "Clicked",
    middle_click: "Clicked",
    double_click: "Clicked",
    triple_click: "Clicked",
    type: "Typed",
    key: "Pressed",
    hold_key: "Pressed",
    scroll: "Scrolled",
    left_click_drag: "Dragged",
    open_application: "Opened",
  };
});
var wRa = {};
_t(wRa, {
  getComputerUseMCPToolOverrides: () => getComputerUseMCPToolOverrides,
  buildSessionContext: () => buildSessionContext,
  _resetComputerUseWrapperForTesting: () => QIp,
});
function h5() {
  return hfo;
}
function QIp() {
  ((pGt = void 0), (hfo = void 0), (yfo = void 0), (e2n = 0), VFn());
}
function TRa(e) {
  return `Computer use is in use by another Claude session (${e.slice(0, 8)}\u2026). Wait for that session to finish or run /exit there.`;
}
function buildSessionContext() {
  return {
    getAllowedApps: () => h5().getAppState().computerUseMcpState?.allowedApps ?? [],
    getGrantFlags: () => h5().getAppState().computerUseMcpState?.grantFlags ?? pJ,
    getUserDeniedBundleIds: () => [],
    getSelectedDisplayId: () => h5().getAppState().computerUseMcpState?.selectedDisplayId,
    getDisplayPinnedByModel: () =>
      h5().getAppState().computerUseMcpState?.displayPinnedByModel ?? !1,
    getDisplayResolvedForApps: () => h5().getAppState().computerUseMcpState?.displayResolvedForApps,
    getLastScreenshotDims: () => {
      let e = h5().getAppState().computerUseMcpState?.lastScreenshotDims;
      return e
        ? {
            ...e,
            displayId: e.displayId ?? 0,
            originX: e.originX ?? 0,
            originY: e.originY ?? 0,
          }
        : void 0;
    },
    onPermissionRequest: (e, t) => txp(e),
    onAllowedAppsChanged: (e, t) =>
      QSe(h5().setAppState, (n) => {
        let r = n?.allowedApps,
          o = n?.grantFlags,
          s = r?.length === e.length && e.every((a, l) => r[l]?.bundleId === a.bundleId),
          i =
            o?.clipboardRead === t.clipboardRead &&
            o?.clipboardWrite === t.clipboardWrite &&
            o?.systemKeyCombos === t.systemKeyCombos;
        return s && i
          ? n
          : {
              ...n,
              allowedApps: [...e],
              grantFlags: t,
            };
      }),
    onAppsHidden: (e) => {
      if (e.length === 0) return;
      QSe(h5().setAppState, (t) => {
        let n = t?.hiddenDuringTurn;
        if (n && e.every((r) => n.has(r))) return t;
        return {
          ...t,
          hiddenDuringTurn: new Set([...(n ?? []), ...e]),
        };
      });
    },
    onResolvedDisplayUpdated: (e) =>
      QSe(h5().setAppState, (t) => {
        if (
          t?.selectedDisplayId === e &&
          !t.displayPinnedByModel &&
          t.displayResolvedForApps === void 0
        )
          return t;
        return {
          ...t,
          selectedDisplayId: e,
          displayPinnedByModel: !1,
          displayResolvedForApps: void 0,
        };
      }),
    onDisplayPinned: (e) =>
      QSe(h5().setAppState, (t) => {
        let n = e !== void 0,
          r = n ? t?.displayResolvedForApps : void 0;
        if (
          t?.selectedDisplayId === e &&
          t?.displayPinnedByModel === n &&
          t?.displayResolvedForApps === r
        )
          return t;
        return {
          ...t,
          selectedDisplayId: e,
          displayPinnedByModel: n,
          displayResolvedForApps: r,
        };
      }),
    onDisplayResolvedForApps: (e) =>
      QSe(h5().setAppState, (t) => {
        if (t?.displayResolvedForApps === e) return t;
        return {
          ...t,
          displayResolvedForApps: e,
        };
      }),
    onScreenshotCaptured: (e) =>
      QSe(h5().setAppState, (t) => {
        let n = t?.lastScreenshotDims;
        return n?.width === e.width &&
          n?.height === e.height &&
          n?.displayWidth === e.displayWidth &&
          n?.displayHeight === e.displayHeight &&
          n?.displayId === e.displayId &&
          n?.originX === e.originX &&
          n?.originY === e.originY
          ? t
          : {
              ...t,
              lastScreenshotDims: e,
            };
      }),
    checkCuLock: async () => {
      let e = await tRa();
      switch (e.kind) {
        case "free":
          return {
            holder: void 0,
            isSelf: !1,
          };
        case "held_by_self":
          if (qFn())
            return {
              holder: Rt(),
              isSelf: !0,
            };
          return {
            holder: void 0,
            isSelf: !1,
          };
        case "blocked":
          return {
            holder: e.by,
            isSelf: !1,
          };
      }
    },
    acquireCuLock: async () => {
      let e = await nRa();
      if (e.kind === "blocked") throw Error(TRa(e.by));
      if (rRa()) {
        let t = dRa(() => {
          if (e2n === 0) {
            T("[cu-esc] user escape with no CU call in flight; consumed only");
            return;
          }
          (T("[cu-esc] user escape, aborting turn"), h5().abortController.abort());
        });
        yfo?.({
          type: "os_notification",
          message: t
            ? "Claude is using your computer \xB7 press Esc to stop"
            : "Claude is using your computer \xB7 press Ctrl+C to stop",
          notificationType: "computer_use_enter",
        });
      }
    },
    formatLockHeldMessage: TRa,
  };
}
function ZIp() {
  if (pGt) return pGt;
  let e = buildSessionContext();
  return (
    (pGt = {
      ctx: e,
      dispatch: jFn(ZFn(), apt(), e),
    }),
    pGt
  );
}
function getComputerUseMCPToolOverrides(e) {
  let t = async (n, r, o, s, i) => {
    ((hfo = r), (yfo = i), e2n++);
    let a;
    try {
      let { dispatch: d } = ZIp();
      a = await d(e, n);
    } finally {
      e2n--;
    }
    let { telemetry: l, ...c } = a;
    if (l?.error_kind) T(`[Computer Use MCP] ${e} error_kind=${l.error_kind}`);
    return {
      data: Array.isArray(c.content)
        ? c.content.map((d) =>
            d.type === "image"
              ? {
                  type: "image",
                  source: {
                    type: "base64",
                    media_type: d.mimeType ?? "image/jpeg",
                    data: d.data,
                  },
                }
              : {
                  type: "text",
                  text: d.type === "text" ? d.text : "",
                },
          )
        : c.content,
    };
  };
  return {
    ...ARa(e),
    call: t,
  };
}
async function txp(e) {
  let t = h5(),
    n = t.requestDialog;
  if (!n)
    return {
      granted: [],
      denied: [],
      flags: pJ,
    };
  return n(GFn, e, {
    signal: t.abortController.signal,
  });
}
var pGt,
  hfo,
  yfo,
  e2n = 0;
