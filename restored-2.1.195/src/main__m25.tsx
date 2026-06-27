// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uf
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0009  score=0.0596  fileCov=0.001
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: watchSystemTheme, _resetInitialProbeForTesting
// [unwrapped __esm module uf] deps: ft, Un, je, Lx, wr, fn, Bi, Is, QZe, Y9, dr
VUi = require("child_process");
ine = qBd();
function XBd() {
  J0n = void 0;
}
function watchSystemTheme(e, t, n) {
  let r = false,
    o = false,
    s = n?.muxTimeoutMs ?? YBd,
    i = Boolean(process.env.TMUX || process.env.STY) && !ane();
  async function a() {
    if (o) return;
    o = true;
    try {
      let d = FUi(wy.SET_BG_COLOR),
        p = i
          ? {
              ...d,
              request: Qx(d.request),
            }
          : d,
        f,
        m = i ? "dcs" : "direct";
      if (i) {
        if (
          ((f = await Promise.race([
            e.send(p),
            Nn(s, void 0, {
              unref: true,
            }).then(() => {
              return;
            }),
          ])),
          !f)
        )
          if (r) e.cancel(p);
          else (e.flush(), (m = "mux-bare"), ([f] = await Promise.all([e.send(d), e.flush()])));
      } else [f] = await Promise.all([e.send(p), e.flush()]);
      if (r) return;
      if (!f) {
        (T(`systemTheme: OSC 11 query (via=${m}) got no response`, {
          level: "debug",
        }),
          (J0n = false));
        return;
      }
      J0n = true;
      let g = pUi(f.data);
      if (
        (T(`systemTheme: OSC 11 response=${f.data} detected=${g} via=${m}`, {
          level: "debug",
        }),
        g === void 0)
      )
        return;
      (F0n(g), t(g));
    } finally {
      o = false;
    }
  }
  let l = process.env.CLAUDE_BG_BACKEND === "daemon";
  if (J0n !== false && !l) a();
  let c = GUi(() => void a()),
    u = l
      ? K3e(() => {
          if (N7() === "focused") a();
        })
      : void 0;
  return () => {
    ((r = true), c(), u?.());
  };
}
var YBd = 2000,
  J0n;
