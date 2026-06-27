// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Huc
// matched 2.1.88 source: node_modules/undici/lib/web/fileapi/util.js
// class=new  jaccard=0.0392  score=0.1296  fileCov=0.0532
// note: nearest: node_modules/undici/lib/web/fileapi/util.js (0.0392); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Huc = E(() => {
  kt();
  je();
  At();
  Hpe();
  YS();
  Is();
  ih();
  WL();
  q$();
  cKe();
  MZt = require("fs/promises"), Euc = require("net"), Auc = require("string_decoder"), _uc = [50, 100, 250, 500, 1000, 2000], Suc = 8 * ZSt;
});
function Cuc(e, t, n, r, o) {
  let s,
    i = !1,
    a = 0,
    l = !1,
    c;
  function u() {
    if (i) return;
    let p = new wuc.Socket(),
      f = !1;
    p.on("error", () => d()), p.once("close", () => {
      if (s === p) s = void 0;
      if (i) return;
      if (f) n();
      d();
    }), p.once("connect", () => {
      f = !0, a = 0, l = !1, s = p, p.write(De({
        proto: hp,
        role: "supervisor",
        supervisorPid: process.pid,
        auth: o
      }) + `
`), r?.(), dnr(p, m => {
        let g;
        try {
          g = Ft(m);
        } catch {
          return;
        }
        if (g && typeof g === "object" && "type" in g) t(g);
      });
    }), p.connect(e);
  }
  function d() {
    if (i || c || l) return;
    if (a >= vuc) {
      l = !0, T(`[bg-rv] ${e}: ${a} connect attempts failed \u2014 giving up (pid-poll is liveness backstop)`, {
        level: "warn"
      }), G("tengu_bg_rv_connect_exhausted", {
        attempts: a
      });
      return;
    }
    let p = Tuc[Math.min(a, Tuc.length - 1)];
    a++, c = setTimeout(() => {
      c = void 0, u();
    }, p), c.unref();
  }
  return u(), {
    send(p) {
      if (!s || s.destroyed) {
        if (a >= vuc) a = 0, l = !1, d();
        return !1;
      }
      try {
        return s.write(De(p) + `
`), !0;
      } catch (f) {
        return T(`[bg-rv] send failed: ${String(f)}`), !1;
      }
    },
    close() {
      if (i = !0, c) clearTimeout(c);
      s?.destroy(), s = void 0;
    }
  };
}
var wuc,
  Tuc,
  vuc = 30;