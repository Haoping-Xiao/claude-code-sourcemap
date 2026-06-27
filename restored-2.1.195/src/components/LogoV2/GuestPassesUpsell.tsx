// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZKe
// matched 2.1.88 source: src/components/LogoV2/GuestPassesUpsell.tsx
// class=modified  jaccard=0.2765  score=0.5282  fileCov=0.3671
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function A4f() {
  let e = vor();
  if (e == null || e <= 0) return;
  let n = Dt().passesLastSeenRemaining ?? 0;
  if (e > n)
    gn((r) => ({
      ...r,
      passesUpsellSeenCount: 0,
      hasVisitedPasses: false,
      passesLastSeenRemaining: e,
    }));
}
function rql() {
  let { eligible: e, hasCache: t } = _At();
  if (!e || !t) return false;
  A4f();
  let n = Dt();
  if ((n.passesUpsellSeenCount ?? 0) >= 3) return false;
  if (n.hasVisitedPasses) return false;
  return true;
}
function H4f() {
  let e = 0;
  (gn(
    (t) => (
      (e = (t.passesUpsellSeenCount ?? 0) + 1),
      {
        ...t,
        passesUpsellSeenCount: e,
      }
    ),
  ),
    G("tengu_guest_passes_upsell_shown", {
      seen_count: e,
    }));
}
function T4f() {
  let e = o2o.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
    let n = SAt();
    ((t = y1e.jsxs(w, {
      dimColor: true,
      children: [
        y1e.jsx(w, {
          color: "claude",
          children: "[\u273B]",
        }),
        " ",
        y1e.jsx(w, {
          color: "claude",
          children: "[\u273B]",
        }),
        " ",
        y1e.jsx(w, {
          color: "claude",
          children: "[\u273B]",
        }),
        " \xB7",
        " ",
        n
          ? `Share Claude Code and earn ${bAt(n)} in usage credits \xB7 /passes`
          : "3 guest passes at /passes",
      ],
    })),
      (e[0] = t));
  } else t = e[0];
  return t;
}
function oql() {
  let e = o2o.c(1);
  b6("guest-passes", H4f);
  let t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((t = y1e.jsx(U, {
      children: y1e.jsx(T4f, {}),
    })),
      (e[0] = t));
  else t = e[0];
  return t;
}
var o2o, y1e;
