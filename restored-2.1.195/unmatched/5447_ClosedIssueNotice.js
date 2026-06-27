// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $hc
// matched 2.1.88 source: src/commands/install-github-app/CreatingStep.tsx
// class=new  jaccard=0.0563  score=0.1246  fileCov=0.0931
// note: nearest: src/commands/install-github-app/CreatingStep.tsx (0.0563); 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var $hc = E(() => {
  ft();
  er();
  je();
  fn();
  At();
  Bi();
  vn();
  qd();
  Jt();
  RTt = require("fs/promises"), ndr = require("path");
});
var Bhc = {};
_t(Bhc, {
  ClosedIssueNotice: () => ClosedIssueNotice
});
function Ohc(e) {
  return rdr.jsxs(xs, {
    url: `${Mdm}${e}`,
    children: ["#", e]
  }, e);
}
function $dm(e) {
  if (e.length === 1) return rdr.jsxs(w, {
    color: "success",
    children: ["\u2713 Your issue ", Ohc(e[0].number), " has been closed. Thanks for reporting!"]
  });
  let t = e.flatMap((n, r) => [r > 0 ? ", " : "", Ohc(n.number)]);
  return rdr.jsxs(w, {
    color: "success",
    children: ["\u2713 ", e.length, " of your issues have been closed (", t, "). Thanks for reporting!"]
  });
}
function ClosedIssueNotice() {
  let e = Nhc.c(3),
    {
      addNotification: t
    } = Li(),
    n = odr.useRef(!1),
    r,
    o;
  if (e[0] !== t) r = () => {
    if (n.current) return;
    if (n.current = !0, at("tengu_gouda_loop", !1)) {
      let s = !1,
        i = [],
        a = function (u) {
          let d = new Set(i.map(Udm)),
            p = u.filter(f => !d.has(f.number));
          if (p.length === 0) return;
          i.push(...p), G("tengu_closed_issue_notice_shown", {
            newClosedIssueCount: p.length,
            totalClosedIssueCount: i.length
          }), t({
            key: "closed-issue-notice",
            kind: "event",
            jsx: $dm(i),
            priority: "low",
            timeoutMs: Pdm,
            fold: Bdm
          }), Mhc(p.map(Ndm));
        };
      return async function () {
        let u = await o6o(),
          d = s6o(u);
        if (!s && d.length > 0) a(d);
        let p = await Phc();
        if (s || p === null || p > Ddm) return;
        let f = s6o(await o6o());
        if (!s && f.length > 0) a(f);
      }().catch(ke), () => {
        s = !0;
      };
    }
  }, o = [t], e[0] = t, e[1] = r, e[2] = o;else r = e[1], o = e[2];
  return odr.useEffect(r, o), null;
}
function Ndm(e) {
  return e.number;
}
function Bdm(e, t) {
  return t;
}
function Udm(e) {
  return e.number;
}
var Nhc,
  odr,
  rdr,
  Ddm = 4000,
  Pdm = 1e4,
  Mdm = "https://github.com/anthropics/claude-code/issues/";