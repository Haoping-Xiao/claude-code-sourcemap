// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ALc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0117  score=0.2997  fileCov=0.012
// note: nearest: src/screens/REPL.tsx (0.0117); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ALc = E(() => {
  je();
  At();
  Xr();
  dn();
  BI();
  VM();
  SLc = R(lt(), 1), ktn = R(rt(), 1), WmH = ve(() => H.object({
    method: H.literal("notifications/message"),
    params: H.object({
      prompt: H.string(),
      image: H.object({
        type: H.literal("base64"),
        media_type: H.enum(["image/jpeg", "image/png", "image/gif", "image/webp"]),
        data: H.string()
      }).optional(),
      tabId: H.number().optional()
    })
  }));
});
function vLc(e, t) {
  let {
      addNotification: n,
      removeNotification: r
    } = Li(),
    o = Ht(l => l.replBridgeEnabled && !l.replBridgeOutboundOnly),
    s = Rtn.useRef(o);
  s.current = o;
  let i = Rtn.useRef(!1),
    a = ks();
  Rtn.useEffect(() => {
    if (vl() || e === 0 || t || i.current) return;
    let l = !s.current && b3o() ? "rc" : S3o() ? "push" : null;
    if (l === null) return;
    let c = Date.now() - e,
      u = aZl * 60000 - c,
      d = a.setTimeout(() => {
        if (i.current) return;
        let p = Math.round((Date.now() - e) / 60000);
        if (l === "rc") {
          if (s.current || !b3o()) return;
          i.current = !0, lZl(), n({
            key: HLc,
            kind: "upsell",
            jsx: nie.jsxs(nie.Fragment, {
              children: [nie.jsx(w, {
                dimColor: !0,
                children: "control this session from your phone \xB7 "
              }), nie.jsx(w, {
                color: "suggestion",
                children: "/remote-control"
              })]
            }),
            priority: "medium",
            timeoutMs: 2147483647
          }), G("tengu_rc_upsell_notification_shown", {
            idleMinutes: p
          });
        } else {
          if (!S3o()) return;
          i.current = !0, uZl(), n({
            key: TLc,
            kind: "upsell",
            jsx: nie.jsxs(nie.Fragment, {
              children: [nie.jsxs(w, {
                dimColor: !0,
                children: ["get pinged when Claude finishes \xB7 enable push notifications in", " "]
              }), nie.jsx(w, {
                color: "suggestion",
                children: "/config"
              })]
            }),
            priority: "medium",
            timeoutMs: 2147483647
          }), G("tengu_push_notif_upsell_notification_shown", {
            idleMinutes: p
          });
        }
      }, Math.max(0, u));
    return () => {
      d(), r(HLc), r(TLc);
    };
  }, [e, t, n, r, a]);
}
var Rtn,
  nie,
  HLc = "rc-idle-upsell",
  TLc = "push-idle-upsell";