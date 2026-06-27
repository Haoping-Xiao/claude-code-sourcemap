// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uf
// matched 2.1.88 source: src/main.tsx
// class=new  jaccard=0.0012  score=0.1134  fileCov=0.0012
// note: nearest: src/main.tsx (0.0012); 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var uf = E(() => {
  ft();
  Un();
  je();
  Lx();
  wr();
  fn();
  Bi();
  Is();
  QZe();
  Y9();
  dr();
  VUi = require("child_process");
  ine = qBd();
});
var JUi = {};
_t(JUi, {
  watchSystemTheme: () => watchSystemTheme,
  _resetInitialProbeForTesting: () => XBd
});
function XBd() {
  J0n = void 0;
}
function watchSystemTheme(e, t, n) {
  let r = !1,
    o = !1,
    s = n?.muxTimeoutMs ?? YBd,
    i = Boolean(process.env.TMUX || process.env.STY) && !ane();
  async function a() {
    if (o) return;
    o = !0;
    try {
      let d = FUi(wy.SET_BG_COLOR),
        p = i ? {
          ...d,
          request: Qx(d.request)
        } : d,
        f,
        m = i ? "dcs" : "direct";
      if (i) {
        if (f = await Promise.race([e.send(p), Nn(s, void 0, {
          unref: !0
        }).then(() => {
          return;
        })]), !f) if (r) e.cancel(p);else e.flush(), m = "mux-bare", [f] = await Promise.all([e.send(d), e.flush()]);
      } else [f] = await Promise.all([e.send(p), e.flush()]);
      if (r) return;
      if (!f) {
        T(`systemTheme: OSC 11 query (via=${m}) got no response`, {
          level: "debug"
        }), J0n = !1;
        return;
      }
      J0n = !0;
      let g = pUi(f.data);
      if (T(`systemTheme: OSC 11 response=${f.data} detected=${g} via=${m}`, {
        level: "debug"
      }), g === void 0) return;
      F0n(g), t(g);
    } finally {
      o = !1;
    }
  }
  let l = process.env.CLAUDE_BG_BACKEND === "daemon";
  if (J0n !== !1 && !l) a();
  let c = GUi(() => void a()),
    u = l ? K3e(() => {
      if (N7() === "focused") a();
    }) : void 0;
  return () => {
    r = !0, c(), u?.();
  };
}
var YBd = 2000,
  J0n;