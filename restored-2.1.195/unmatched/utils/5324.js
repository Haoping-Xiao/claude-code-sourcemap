// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module muc
// matched 2.1.88 source: node_modules/ws/lib/websocket-server.js
// class=new  jaccard=0.0416  score=0.4358  fileCov=0.044
// note: nearest: node_modules/ws/lib/websocket-server.js (0.0416); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module muc] deps: Pw, Is, cuc, WL, cKe, ESt, FK
aNe = require("fs"), Lcr = require("fs/promises"), uuc = require("net"), Dcr = require("os"), duc = require("path");
function Pcr(e, t, n) {
  return new Promise((r, o) => {
    let s = a => {
        i.close(), o(a);
      },
      i = guc.createServer(a => {
        let l = "";
        a.setEncoding("utf8"), a.on("data", c => {
          if (l += c, n && l.length > 8388608) {
            a.destroy();
            return;
          }
          let u = l.indexOf(`
`);
          if (u < 0) return;
          if (n) {
            let d;
            try {
              d = Ft(l.slice(0, u));
            } catch {
              d = void 0;
            }
            if (!d || !Joe(d.auth, n)) {
              a.destroy();
              return;
            }
            i.close(), r(d);
            return;
          }
          i.close();
          try {
            r(Ft(l.slice(0, u)));
          } catch (d) {
            o(d);
          }
        }), a.on("error", n ? () => a.destroy() : s);
      });
    if (i.on("error", s), t) i.once("listening", () => {
      try {
        t();
      } catch (a) {
        s(a);
      }
    });
    i.listen(e);
  });
}
async function Mcr(e, t) {
  let n = await jA(e.cwd);
  if (process.chdir(n), _D(n), Hge(n), see(n), n_(), Ime.cache?.clear?.(), wZt(), e.sessionId) PA(Fb(e.sessionId), "spare_claim");
  t_r(), sZa(), Object.assign(process.env, e.env), process.argv = [process.argv[0], process.argv[1], ...e.argv], KEr(), Tbr(), o8r(), WSn(), _Ve();
  let {
    main: r
  } = await t;
  await r();
}
var guc;