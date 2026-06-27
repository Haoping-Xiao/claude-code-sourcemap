// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hir
// matched 2.1.88 source: src/bridge/envLessBridgeConfig.ts
// class=modified  jaccard=0.3  score=0.4155  fileCov=0.5191
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hir] deps: Xr, Un
((oZl = {
  init_retry_max_attempts: 3,
  init_retry_base_delay_ms: 500,
  init_retry_jitter_fraction: 0.25,
  init_retry_max_delay_ms: 4000,
  http_timeout_ms: 10000 /* 1e4 */,
  uuid_dedup_buffer_size: 2000,
  heartbeat_interval_ms: 20000,
  heartbeat_jitter_fraction: 0.1,
  token_refresh_buffer_ms: 300000,
  teardown_archive_timeout_ms: 1500,
  connect_timeout_ms: 15000,
  oauth_retry_max_attempts: 3,
  oauth_retry_base_delay_ms: 2000,
  min_version: "0.0.0",
  should_show_app_upgrade_message: false,
}),
  (Gzf = ve(() =>
    H.object({
      init_retry_max_attempts: H.number().int().min(1).max(10).default(3),
      init_retry_base_delay_ms: H.number().int().min(100).default(500),
      init_retry_jitter_fraction: H.number().min(0).max(1).default(0.25),
      init_retry_max_delay_ms: H.number().int().min(500).default(4000),
      http_timeout_ms: H.number().int().min(2000).default(10000 /* 1e4 */),
      uuid_dedup_buffer_size: H.number().int().min(100).max(50000).default(2000),
      heartbeat_interval_ms: H.number().int().min(5000).max(30000).default(20000),
      heartbeat_jitter_fraction: H.number().min(0).max(0.5).default(0.1),
      token_refresh_buffer_ms: H.number().int().min(30000).max(1800000).default(300000),
      teardown_archive_timeout_ms: H.number().int().min(500).max(2000).default(1500),
      connect_timeout_ms: H.number().int().min(5000).max(60000).default(15000),
      oauth_retry_max_attempts: H.number().int().min(0).max(6).default(3),
      oauth_retry_base_delay_ms: H.number().int().min(100).max(10000 /* 1e4 */).default(2000),
      min_version: H.string()
        .refine((e) => {
          try {
            return (qte(e, "0.0.0"), true);
          } catch {
            return false;
          }
        })
        .default("0.0.0"),
      should_show_app_upgrade_message: H.boolean().default(false),
    }),
  )));
function sZl({ onDone: e }) {
  let t = HYe.useRef(e);
  t.current = e;
  let n = HYe.useCallback(() => {
    t.current("dismiss");
  }, []);
  HYe.useEffect(() => {
    gn((s) => {
      if (s.remoteDialogSeen) return s;
      return {
        ...s,
        remoteDialogSeen: true,
      };
    });
  }, []);
  let r = HYe.useCallback((s) => {
    t.current(s);
  }, []);
  return mme.jsx(Lf, {
    title: "Remote Control",
    children: mme.jsxs(U, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: [
        mme.jsxs(U, {
          marginBottom: 1,
          flexDirection: "column",
          children: [
            mme.jsx(w, {
              children:
                "Take this session with you and pick up right where you left off on any device. Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser.",
            }),
            mme.jsx(w, {
              children: " ",
            }),
            mme.jsx(w, {
              children:
                "The session keeps running on this machine. Use your other devices as a remote control. Disconnect anytime with /remote-control.",
            }),
          ],
        }),
        mme.jsx(U, {
          children: mme.jsx(Sr, {
            options: [
              {
                label: "Enable Remote Control",
                description: "Opens a secure connection to claude.ai.",
                value: "enable",
              },
              {
                label: "Never mind",
                description: "You can always enable it later with /remote-control.",
                value: "dismiss",
              },
            ],
            onChange: r,
            onCancel: n,
          }),
        }),
      ],
    }),
  });
}
function iZl() {
  if (Dt().remoteDialogSeen) return false;
  if (!xC()) return false;
  if (!WE()) return false;
  return true;
}
var HYe, mme;
