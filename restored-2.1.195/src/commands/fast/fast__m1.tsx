// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xsr
// matched 2.1.88 source: src/commands/fast/fast.tsx
// class=modified (alt of src/commands/fast/fast.tsx)  jaccard=0.1037  score=0.3045  fileCov=0.136
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xsr] deps: @mixmark-io/domino/lib/Document.js, @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts, components/Settings/Config.tsx, utils/signal.ts, ink/render-border.ts
((Nzl = R(lt(), 1)), (Fjo = R(se(), 1)));
function k1e(e, t) {
  t((n) => {
    let r = n;
    if ("cacheBreakerPhrase" in e) {
      let o = e.cacheBreakerPhrase,
        s = o == null ? void 0 : String(o);
      if (r.cacheBreakerPhrase !== s)
        r = {
          ...r,
          cacheBreakerPhrase: s,
        };
    }
    if ("autoCompactWindow" in e) {
      let o = e.autoCompactWindow,
        s = o == null ? void 0 : Number(o);
      if (r.autoCompactWindow !== s)
        r = {
          ...r,
          autoCompactWindow: s,
        };
    }
    if ("briefTranscript" in e) {
      let o = Boolean(e.briefTranscript);
      if (r.briefTranscript !== o)
        r = {
          ...r,
          briefTranscript: o,
        };
    }
    if ("isBriefOnly" in e) {
      let o = Boolean(e.isBriefOnly);
      if (r.isBriefOnly !== o)
        r = {
          ...r,
          isBriefOnly: o,
        };
    }
    if ("fastMode" in e) {
      let o = Boolean(e.fastMode);
      if (r.fastMode !== o)
        r = {
          ...r,
          fastMode: o,
        };
    }
    if ("model" in e) {
      let o = e.model,
        s = o == null ? null : String(o);
      if (r.mainLoopModelForSession !== s)
        r = {
          ...r,
          mainLoopModelForSession: s,
        };
      if (r.mainLoopModel !== s)
        r = {
          ...r,
          mainLoopModel: s,
        };
    }
    return r;
  });
}
function jjo() {
  let e = hoi();
  if (!e) return null;
  return {
    key: "opus-fast-mode-deprecation",
    text: `${e.label} fast mode is deprecated and will be removed on ${e.date}`,
    priority: "immediate",
    color: "warning",
  };
}
function applyFastMode(enable, setAppState) {
  if (
    (zIe(),
    io("userSettings", {
      fastMode: enable ? true : void 0,
    }),
    NA())
  )
    Ju()
      ?.sendControlRequest({
        subtype: "apply_flag_settings",
        settings: {
          fastMode: enable ? true : null,
          ...(enable && {
            model: Q2e(),
          }),
        },
      })
      .catch(ke);
  if (
    (k1e(
      {
        fastMode: enable,
      },
      setAppState,
    ),
    enable)
  )
    setAppState((n) => {
      if (rg(n.mainLoopModel)) return n;
      let r = Q2e(),
        o = zo(r) === zo(Uw());
      return {
        ...n,
        mainLoopModel: o ? null : r,
        mainLoopModelForSession: null,
      };
    });
}
async function handleFastModeShortcut(enable, getAppState, setAppState, r, o) {
  let s = lle();
  if (s) return `Fast mode unavailable: ${s}`;
  let { mainLoopModel: i } = getAppState();
  if (
    (applyFastMode(enable, setAppState),
    G("tengu_fast_mode_toggled", {
      enabled: enable,
      source: $e(r),
    }),
    enable)
  ) {
    let a = x1e(true),
      l = !rg(i) ? ` \xB7 model set to ${FG()}` : "",
      c = As(),
      u = rg(c) ? mo(c) : "claude-opus-4-8",
      d = eU(Xnt(true, u)),
      p = jjo();
    if (p)
      o?.({
        type: "notification",
        notification: p,
      });
    return `${a} Fast mode ON${l} \xB7 ${d}`;
  } else return "Fast mode OFF";
}
