// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xsr
// matched 2.1.88 source: src/commands/fast/fast.tsx
// class=modified (alt of src/commands/fast/fast.tsx)  jaccard=0.1285  score=0.3389  fileCov=0.1715
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xsr = E(() => {
  iu();
  Xa();
  Ye();
  Fh();
  nne();
  f0e();
  ((Nzl = R(lt(), 1)), (Fjo = R(se(), 1)));
});
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
function ksr(e, t) {
  if (
    (zIe(),
    io("userSettings", {
      fastMode: e ? !0 : void 0,
    }),
    NA())
  )
    Ju()
      ?.sendControlRequest({
        subtype: "apply_flag_settings",
        settings: {
          fastMode: e ? !0 : null,
          ...(e && {
            model: Q2e(),
          }),
        },
      })
      .catch(ke);
  if (
    (k1e(
      {
        fastMode: e,
      },
      t,
    ),
    e)
  )
    t((n) => {
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
async function Rsr(e, t, n, r, o) {
  let s = lle();
  if (s) return `Fast mode unavailable: ${s}`;
  let { mainLoopModel: i } = t();
  if (
    (ksr(e, n),
    G("tengu_fast_mode_toggled", {
      enabled: e,
      source: $e(r),
    }),
    e)
  ) {
    let a = x1e(!0),
      l = !rg(i) ? ` \xB7 model set to ${FG()}` : "",
      c = As(),
      u = rg(c) ? mo(c) : "claude-opus-4-8",
      d = eU(Xnt(!0, u)),
      p = jjo();
    if (p)
      o?.({
        type: "notification",
        notification: p,
      });
    return `${a} Fast mode ON${l} \xB7 ${d}`;
  } else return "Fast mode OFF";
}
