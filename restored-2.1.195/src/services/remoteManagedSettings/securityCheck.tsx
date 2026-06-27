// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gre
// matched 2.1.88 source: src/services/remoteManagedSettings/securityCheck.tsx
// class=modified  jaccard=0.3606  score=0.7103  fileCov=0.4228
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Gre = E(() => {
  kt();
  je();
  fn();
  lT();
  ED();
  Y9();
  ((aNa = require("fs")), (lNa = require("tty")));
});
function uNa() {
  return x4n;
}
function Jho(e) {
  if (((Xho = e), e && xft.length > 0)) {
    let t = xft;
    xft = [];
    for (let n of t) n(e);
  }
}
async function sMp() {
  let e,
    t = new Promise((r) => {
      ((e = r), xft.push(r));
    }),
    n = await vc(t, oMp, "managed-settings security dialog requester wait timed out").catch(
      () => null,
    );
  if (n === null) xft = xft.filter((r) => r !== e);
  return n;
}
async function cNa(e, t) {
  let n = await e(t);
  if (
    (G(
      n === "approved"
        ? "tengu_managed_settings_security_dialog_accepted"
        : "tengu_managed_settings_security_dialog_rejected",
      {},
    ),
    n === "approved")
  )
    xe("remote_managed_settings_security_check");
  return n;
}
async function dNa(e, t) {
  if (!t || !g4n(Cft(t))) return "no_check_needed";
  if (!N1a(e, t)) return "no_check_needed";
  if (!Ax()) return "no_check_needed";
  if ((G("tengu_managed_settings_security_dialog_shown", {}), Xho)) return cNa(Xho, t);
  if (Cu.has(process.stdout)) {
    let r = await sMp();
    if (r) return cNa(r, t);
  }
  let n = Cu.has(process.stdout);
  if (!n) x4n = !0;
  return new Promise((r) => {
    (async () => {
      let { rerender: o, unmount: s } = await b8(
        k4n.jsx(AH, {
          children: k4n.jsx(TT, {
            children: k4n.jsx(h4n, {
              settings: t,
              onAccept: () => {
                if (
                  (G("tengu_managed_settings_security_dialog_accepted", {}),
                  xe("remote_managed_settings_security_check"),
                  n)
                )
                  o(null);
                else s();
                ((x4n = !1), r("approved"));
              },
              onReject: () => {
                if ((G("tengu_managed_settings_security_dialog_rejected", {}), n)) o(null);
                else s();
                ((x4n = !1), r("rejected"));
              },
            }),
          }),
        }),
        lN(!1),
      );
    })();
  });
}
function pNa(e) {
  if (e === "rejected") return (Bc(1), !1);
  return !0;
}
var k4n,
  Xho = null,
  xft,
  oMp = 5000,
  x4n = !1;
